
(function(){
	var datepicker = window.datepicker;
	var monthData;
	var $wra;
	datepicker.buildUi = function(year,month){
		 monthData = datepicker.getMonthData(year,month);
		var html = '<div class="datepicker-header">' +
			'<a href="#" class="datepicker-btn datepicker-prev">&lt</a>' +
			'<a href="#" class="datepicker-btn datepicker-next">&gt</a>' +
			'<span class="datepicker-year">'+monthData.year+'-'+monthData.month+'</span>' +
		'</div>' +
		'<div class="datepicker-body">' +
			'<table>' +
				'<thead>' +
					'<tr>' +
						'<th>一</th>' +
						'<th>二</th>' +
						'<th>三</th>' +
						'<th>四</th>' +
						'<th>五</th>' +
						'<th>六</th>' +
						'<th>日</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>';
			for (var i = 0; i<monthData.days.length; i++) {
					var date = monthData.days[i];
					if (i%7 === 0) {
						html += '<tr>';			
					}
					html += '<td date-date="' + date.date + '">' + date.showdate + '</td>';
					// console.log(monthData.length);
					// console.log(monthData);
					// console.log(html);
					// console.log(date.showDate);
					if (i%7 === 6) {
						html += '</tr>';
					}
				}	
					
					// '<td>29</td>' +	
					// '<td>30</td>' +
					// '<td>1</td>' +
					// '<td>2</td>' +
					// '<td>3</td>' +
					// '<td>4</td>' +
					// '<td>5</td>' +
					
			
				html +='</tbody>' +
		'</table>' +
		'</div>';
		return html;
	}
	datepicker.render=function(direction){
		var year,month;
		if (monthData) {
			year=monthData.year;
			month=monthData.month;
		}
		if (direction==='prev') month--;
		if (direction==='next') month++;



		var html = datepicker.buildUi(year,month);
		// document.body.innerHTML = html;
		$wra=document.querySelector('.datepicker-wrapper');
		if (!$wra) {
			 $wra=document.createElement('div');
		document.body.appendChild($wra);
		$wra.className='datepicker-wrapper';
		}
		
		$wra.innerHTML=html;
	}
	datepicker.init = function(input){
		datepicker.render();
		
		
		var $input=document.querySelector("input");
		var open=false;
		$input.addEventListener('click',function(){
			if (open) {
				$wra.classList.remove('dobi');
			open=false;	
			}else{
				$wra.classList.add('dobi');
				var le=$input.offsetLeft;
				var top=$input.offsetTop;
				var height=$input.offsetHeight;
				$wra.style.top=top+height+3+'px';
				$wra.style.left=le+'px';
				open=true;
			}
		},false);
		$wra.addEventListener('click',function(e){
			var $tar=e.target;
			if ($tar.classList.contains('datepicker-btn')) {
			if ($tar.classList.contains('datepicker-prev')) {
				datepicker.render('prev');
			}else if ($tar.classList.contains('datepicker-next')) {
				datepicker.render('next');
			}	}

		
		},false);
		$wra.addEventListener('click',function(e){
			var $tar=e.target;
			if ($tar.tagName.toLowerCase() !=='td') return;
			var date=new Date(monthData.year,monthData.month - 1,$tar.dataset.date);
			$input.value=format(date);
			$wra.classList.remove('dobi');
			open=false;
		},false);


	}
	function format(date){
		ret='';
		var padding=function(num){
			if (num <= 9) {
				return '0' + num;
			}
			else{return num;}
		}
		ret += date.getFullYear() + '-';
		 ret += padding(date.getMonth() + 1) + '-';
		 ret += padding(date.getDate());
		return ret;
	}	
})();