var dateTimeInit = function (yearId, monthId, dayId, hourId, minuteId){
	
	var yearObj = $('#' + yearId);
	var monthObj = $('#' + monthId);
	var dayObj = $('#' + dayId);
	var hourObj = $('#' + hourId);
	var minuteObj = $('#' + minuteId);
	
	var addOption = function (obj, text, value) {
	    var o = $("<option></option>");
	    o.val(value);
	    o.text(text);
	    o.appendTo(obj);
	}

	var initDateAndTime = function(){
		
		
		for (i = 1800; i <= 2100; i++){
			addOption(yearObj, i, i);
		}
		
		for (i = 1; i <= 12; i++){
			if(i < 10)
				i = '0' + i;
			addOption(monthObj, i, i);
		}
		/*
		//由monthObj.change函数处理了
		for (i = 1; i <= 31; i++){
			if(i < 10)
				i = '0' + i;
			addOption(dayObj, i, i);
		}
		*/
		monthObj.change();
		
		for (i = 0; i < 24; i++){
			if(i < 10)
				i = '0' + i;
			addOption(hourObj, i, i);
		}
		
		for (i = 0; i < 60; i++){
			if(i < 10)
				i = '0' + i;
			addOption(minuteObj, i, i);
		}
		
		yearObj.val('1990');
		monthObj.val('06');
		dayObj.val('15');
		hourObj.val('12');
		minuteObj.val('30');
	};
	
	yearObj.change(function(){
			monthObj.change();
		}
	);
	
	monthObj.change(
			function(){
				//如果是2月
				var month = monthObj.val();
				var oldDay = dayObj.val();	
				var lastDay;
				if (month == '02'){
					//先保存原来的日期值									
					lastDay = 28;
					//如果是润年
					selyear = yearObj.val();
					if (selyear % 100 == 0){						
						if (selyear % 400 == 0)
							lastDay = 29;
					}else{
						if (selyear % 4 == 0)
							lastDay = 29;
					}					
				}else{
					if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12')
						lastDay = 31;
					else
						lastDay = 30;
				}
					
				dayObj.empty();
				for (i = 1; i <= lastDay; i++){
					if(i < 10)
						i = '0' + i;
					addOption(dayObj, i, i);
				}
				if (oldDay <= lastDay)
					dayObj.val(oldDay);
				else
					dayObj.val(lastDay);
			}
	);
	
	initDateAndTime();	
}

dateTimeInit('year', 'month', 'day', 'hour', 'minute');
ThreeLevelCascader('province', 'city', 'dist');

$('#frmBirthInfo').submit(function(){
	name =  encodeURIComponent($('#name').val());            	
	sex = $("input[name='sex']:checked").val();  
	
	date = $('#year').val() + '-' + $('#month').val() + '-' + $('#day').val();
	time = $('#hour').val() + ':' + $('#minute').val();
	
	dst = $('#isdst').is(':checked') ? 1 : 0;	
	
	province = $('#province').val();
	city = encodeURIComponent($('#city').val());
	dist =  encodeURIComponent($('#dist').val());
	
	hsys = 'P';	

	baseUrl = 'http://xp.xingxing.us';
	
	if (name == null  || name =='' 
		|| sex == null  || sex ==''
		|| dist == null  || dist =='' 
		|| date == null  || date =='' 
		|| time == null  || time =='' 
		){
		alert('请确保输入了全部出生信息。');
		return false;
	}
	
	urlparam = "name=" + name +'&sex=' +sex + '&dist='+ dist  + '&date='+ date+'&time='+time + '&dst='+dst +				
		'&hsys='+hsys;
	
	resultUrl = baseUrl+'/xp.php?p=12sign&type=natal&' + urlparam;				
	$("#frmBirthInfo").attr("action",resultUrl);
	//alert(resultUrl);	
    //return false;
});