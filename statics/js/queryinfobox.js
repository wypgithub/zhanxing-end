document.write('<div id="modal-container-queryinfo" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="modal-container-queryinfo">  <div class="modal-dialog modal-lg" role="document"><div class="modal-content"></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->');

$("#modal-container-queryinfo").on("show.bs.modal", function() {    
    //禁止缩放功能
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no;')
    //
});

$("#modal-container-queryinfo").on("hide.bs.modal", function() {    
	//恢复缩放功能
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes;')
});

$("#modal-container-queryinfo").on("hidden.bs.modal", function() {
    $(this).removeData("bs.modal");
});

var addSheet = function() {
    var doc, cssCode;
    if (arguments.length == 1) {
        doc = document;
        cssCode = arguments[0]
    } else if (arguments.length == 2) {
        doc = arguments[0];
        cssCode = arguments[1];
    } else {
        alert("addSheet函数最多接受两个参数!");
    }
    if (!+"\v1") { //增加自动转换透明度功能，用户只需输入W3C的透明样式，它会自动转换成IE的透明滤镜
        var t = cssCode.match(/opacity:(\d?\.\d+);/);
        if (t != null) {
            cssCode = cssCode.replace(t[0], "filter:alpha(opacity=" + parseFloat(t[1]) * 100 + ")")
        }
    }
    cssCode = cssCode + "\n"; //增加末尾的换行符，方便在firebug下的查看。
    var headElement = doc.getElementsByTagName("head")[0];
    var styleElements = headElement.getElementsByTagName("style");
    if (styleElements.length == 0) { //如果不存在style元素则创建
        if (doc.createStyleSheet) { //ie
            doc.createStyleSheet();
        } else {
            var tempStyleElement = doc.createElement('style'); //w3c
            tempStyleElement.setAttribute("type", "text/css");
            headElement.appendChild(tempStyleElement);
        }
    }
    var styleElement = styleElements[0];
    var media = styleElement.getAttribute("media");
    if (media != null && !/screen/.test(media.toLowerCase())) {
        styleElement.setAttribute("media", "screen");
    }
    if (styleElement.styleSheet) { //ie
        styleElement.styleSheet.cssText += cssCode;
    } else if (doc.getBoxObjectFor) {
        styleElement.innerHTML += cssCode; //火狐支持直接innerHTML添加样式表字串
    } else {
        styleElement.appendChild(doc.createTextNode(cssCode))
    }
}

if (document.documentElement.clientHeight >=768){	
	modalboyHeight = document.documentElement.clientHeight - 181;
}else{
	modalboyHeight = document.documentElement.clientHeight - 141;
}

var cssText = '.fix-modal-body {overflow:auto;max-height:' + modalboyHeight +'px;}';
//document.createStyleSheet().cssText(cssText);
addSheet(cssText);
