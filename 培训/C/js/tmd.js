(function(){
	var datepicker = {};
	datepicker.getMonthData = function(year,month){
		var re=[];
		if (!year || !month) {
			var td = new Date();
			year = td.getFullYear();
			month = td.getMonth()+1;

		}
		var first = new Date(year,month-1,1);
		var firstw=first.getDay();
		if (firstw===0) {firstw=7}
		year=first.getFullYear();
		month=first.getMonth()+1;
		var lastdaymonth=new Date(year,month-1,0);
		var lastdatemonth=lastdaymonth.getDate();
		var pre=firstw-1;
		var lastday=new Date(year,month,0);
		var lastdate=lastday.getDate();
		for (var i = 0; i < 42; i++) {
				var date=i+1-pre;
				var showdate=date;
				var thismonth=month;
		if (date<=0) {
			thismonth=month-1;
			showdate=lastdatemonth+date;
		}	else if (date>lastdate) {
			thismonth=month+1;
			showdate=showdate-lastdate;
		}
		if (thismonth===0) {thismonth=12}
		if (thismonth===13) {thismonth=1}
			
			re.push({
				month:thismonth,
				date:date,
				showdate:showdate
			});


			}
			return {
				year:year,
				month:month,
				days:re
			}

	};



	window.datepicker = datepicker;

























})();