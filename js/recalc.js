(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if (clientWidth >= 1000) {
			clientWidth = 1000;
			doc.getElementById('wrap').style.width = 1000 + 'px';
		}
		else{
			doc.getElementById('wrap').style.width = "auto";
		}
		docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
		//console.log(clientWidth, docEl.id);
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var myURL = document.location.href; 
//document.writeln("<p id=\"jiathis_qr\"><img alt=\"二维码加载中...\" src=\"http://s.jiathis.com/qrcode.php?url=" + myURL + "\" height=\"220\" width=\"220\"></p>");
