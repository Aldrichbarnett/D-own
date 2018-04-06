function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
	}
function findStr(str,n){
	var tmp=0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i)==n) {
			tmp++
		}
	}
return tmp;	
}
	//登录效果

window.onload = function(){
	var sheight = document.documentElement.scrollHeight;
	var swidth = document.documentElement.scrollWidth;
	var kuang = document.getElementById("kuang");
	var denglu = document.getElementById("denglu");
	var mask = document.getElementById("mask");
	var close = document.getElementById("close");

	var dheight = document.documentElement.clientHeight;
	var dwidth = document.documentElement.clientWidth;

	var jheight = kuang.offsetHeight;
	var jwidth = kuang.offsetWidth;

	

	denglu.onclick = function(){
		kuang.style.display = "block";
		mask.style.display = "block";
		mask.style.height = sheight+"px";
		var jheight = kuang.offsetHeight;
	var jwidth = kuang.offsetWidth;
		mask.style.width = swidth+"px";
		kuang.style.left = (dwidth-jwidth)/2+"px";
		kuang.style.top = (dheight-jheight)/2+"px";
		

}

var ainput=document.getElementsByTagName("input");
		var oName=ainput[0];
		var pwd=ainput[1];
		var pwd2=ainput[2];
		var ap=document.getElementsByTagName("p");
		var name_msg=ap[0];
	var count=ap[1];
	var pwd_msg=ap[2];
	var  ap3=ap[3];
	var ap4=ap[4];
	var ap5=ap[5];
	var ap6=ap[6];
	var name_length=0;

	
//用户名
	oName.onfocus=function(){
		name_msg.style.display="block";
		name_msg.innerHTML='5-25个字符,推荐使用中文名';
	}

	oName.onkeyup=function(){
		count.style.visibility="visible";
		name_length=getLength(this.value);
		count.innerHTML=name_length+"个字符";
		if (name_length==0) {
			count.style.visibility="hidden";
		}

	}
oName.onblur=function(){
		//含有非法字符
 var re=/[^\w\u4e00-\u9fa5]/g;
 if(re.test(this.value)) {
 	name_msg.innerHTML='含有非法字符';
 }
		//不能为空
else if (this.value=="") {
	name_msg.innerHTML='不能为空';
}
		//长度超过25个字符
else if (name_length>25) {
	name_msg.innerHTML='长度超过25个字符';
}
		//长度少于6个字符
else if (name_length<6) {
	name_msg.innerHTML='长度少于6个字符';
}
		//OK
else{
	name_msg.innerHTML='OK'
}
	
}
	pwd.onfocus=function(){
		pwd_msg.style.display="block";
		pwd_msg.innerHTML='请使用数字和字母组合';

	}
	pwd.onkeyup=function(){
if (this.value.length>5 && this.value.length<10) {
	ap4.className="ap3";
	pwd2.removeAttribute("disabled","disabled");
	ap6.style.display="block";
	ap6.innerHTML='请再次输入密码';


}else if (this.value.length>=10){
	ap4.className="ap3";
	ap5.className="ap3";
	pwd2.removeAttribute("disabled","disabled");
	ap6.style.display="block";
}else{
	ap4.className="ap4";
	ap5.className="ap5";
	
	ap6.style.display="none";
pwd2.setAttribute("disabled","disabled");
}



	}
	pwd.onblur=function(){
		var m=findStr(pwd.value,pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-Z]/g;
		if (this.value=="") {
		pwd_msg.innerHTML='不能为空';	
		}
		else if (m==this.value.length) {
pwd_msg.innerHTML='不能用相同字符';
		}
	else if (this.value.length<6 || this.value.length>16) {
pwd_msg.innerHTML='长度应为6-16个字符';
	}
	else if (!re_n.test(this.value)) {
pwd_msg.innerHTML='不能全为数字';
	}
	else if (!re_t.test(this.value)) {
pwd_msg.innerHTML='不能全为字母';
	}
	else{
		pwd_msg.innerHTML='你真棒！么么哒';
	}
pwd2.onblur=function(){
	if (this.value!=pwd.value) {
ap6.innerHTML='密码不一致!';
	}
	else{ap6.innerHTML='乖！摸摸头';}
}

	}
	var mouseOffsetX=0;
	var mouseOffsetY=0;
	var isDraging=false;

	kuang.addEventListener('mousedown',function(e){
	var e = e || window.event;
	mouseOffsetX=e.pageX - kuang.offsetLeft;
	mouseOffsetY=e.pageY - kuang.offsetTop;
	isDraging=true;


	})
	document.onmousemove = function( e ){
		var e = e || window.event;

		var mouseX = e.pageX;
		var mouseY = e.pageY;

		var moveX = 0;
		var moveY = 0;

		if (isDraging === true) {
			var dheight = document.documentElement.clientHeight;
	  		var dwidth = document.documentElement.clientWidth;

			var jheight = kuang.offsetHeight;
			var jwidth = kuang.offsetWidth;
			moveX = mouseX - mouseOffsetX;
			moveY = mouseY - mouseOffsetY;
			var maxY = dheight-jheight;
			var maxX = dwidth-jwidth;
			moveX = Math.min( maxX , Math.max(0,moveX) );
			moveY = Math.min( maxY , Math.max(0,moveY) );


			kuang.style.left = moveX + "px";
			kuang.style.top = moveY + "px";
		}


	}
	document.onmouseup = function(){
		isDraging=false;
	}

	// mask.onclick = close.onclick = function(){ kuang.remove(kuang);
	// 	mask.remove(mask);}

		mask.onclick = close.onclick = function(){kuang.style.display = "none";
		mask.style.display = "none";
		count.style.visibility="hidden";
		name_msg.style.display="none";
		window.parent.location.reload();}
}
	





