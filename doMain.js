//设置背景图片样式，以及位置。
function changeBgI(){
	document.getElementById('bgDiv').style.backgroundImage='url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-676612.jpg)';
	document.getElementById('bgDiv').style.backgroundPosition='center center';
	document.getElementById('bgDiv').style.backgroundRepeat='no-repeat';
	document.getElementById('bgDiv').style.backgroundSize='cover';
}

//隐藏元素选项
function hiddenOptions(){
	document.getElementById('hp_ctrls').hidden=true;
}

//样式修改。
function style(){
	//footer背景透明，字体改为白色
	document.getElementById('b_footer').style.backgroundColor='transparent';
	document.getElementById('b_footerItems').style.color='#fff';
}

//更改覆盖范围
function focusListener(){
	var searchArea=document.getElementById('sb_form_q');
	var focusOvr=document.getElementById('focus_ovr');
	searchArea.onclick=function(){
		var overFlow=setInterval(function(){
			document.getElementById('focus_ovr').style.height='1200px';
			clearInterval(overFlow);
		},100)
	}
}

//改变底部字体颜色
function changeFontColor(){
	var font=document.getElementById("b_footerItems").getElementsByTagName("a");
	for(var i=0;i<font.length;i++){
		font[i].style.color="#fff";
	}
}

window.onload=function(){
	changeBgI();
	hiddenOptions();
	style();
	focusListener();
	changeFontColor();
}
