//XTVID 쿠키 존재여부를 확인하여 없을 경우 쿠키를 생성한다.
var vid = 'XTVID';
var xtrhisMaxCnt = 5;
var xtrActCookieAge = 30;

//XTVID쿠키 확인
function makeXTVIDCookie() {
	if (!existCookie(vid)) {
		setXTVIDCookie(vid);
	}
}

//쿠키가 존재하는지 확인한다.
function existCookie(name) {
	var vid = getXTCookie(name);
	if (vid != null && vid != "") {
		return true;
	}
	return false;
}

//주어진 이름의 쿠키값을 얻는다.
function getXTCookie(name) {
	var cookies = document.cookie.split("; ");
	for ( var i = 0; i < cookies.length; i++) {
		var cPos = cookies[i].indexOf("=");
		var cName = cookies[i].substring(0, cPos);
		if (cName == name) {
			return unescape(cookies[i].substring(cPos + 1));
		}
	}
	// a cookie with the requested name does not exist
	return "";
}

//XTVID 쿠키를 생성한다.
function setXTVIDCookie(name) {
	// 3자리 난수 발생
	var randomid = Math.floor(Math.random() * 1000);

	// XTVID =  웹서버 식별문자 (A...Z ) 한자리  + yymmdd (쿠키생성일자)  + hhmmss (쿠키생성시각)  
	//       +  MMM (쿠키 생성시각 1/1000 초) + RRR (난수)
	var xtvid = "A" + makeXTVIDValue() + randomid;
	//var xtvid = makeXTVIDValue() + randomid;
	expireDate = new Date();
	expireDate.setYear(expireDate.getYear() + 10);

	setXTCookie(name, xtvid, 365 * 10, "/", getXDomain());
}

//주어진 조건으로 쿠키를 생성한다.
function setXTCookie(name, value, expires, path, domain) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expires);
	var expiresInfo = (expires < 0) ? '' : todayDate.toGMTString();
	document.cookie = name + "=" + escape(value) + ";" + "path=" + path
			+ ";domain=" + domain + ";expires=" + expiresInfo;
}

//쿠키생성을 위한 도메인을 얻는다.
function getXDomain() {
	var host = document.domain;
	var tokens = host.split('.');
	var xdomain = tokens[tokens.length - 2] + '.' + tokens[tokens.length - 1];
	return (tokens[tokens.length - 1].length == 2) ? tokens[tokens.length - 3]
			+ '.' + xdomain : xdomain;
}

//XTVID 값을 생성한다.
function makeXTVIDValue() {
	var str = '';
	nowdate = new Date();
	digit = nowdate.getFullYear();
	if (digit < 2000) {
		digit = digit - 1900;
	} else {
		digit = digit - 2000;
	}
	str += paddingNo(digit);

	digit = nowdate.getMonth() + 1;
	str += paddingNo(digit);

	digit = nowdate.getDate();
	str += paddingNo(digit);

	digit = nowdate.getHours();
	str += paddingNo(digit);

	digit = nowdate.getMinutes();
	str += paddingNo(digit);

	digit = nowdate.getSeconds();
	str += paddingNo(digit);

	digit = nowdate.getMilliseconds();
	if ((digit <= 99) && (digit > 9)) {
		str += '0' + digit;
	} else if (digit <= 9) {
		str += '00' + digit;
	} else {
		str += '' + digit;
	}
	return str;
}

//10보다 작은 숫자에 '0'을 채워 리턴한다.
function paddingNo(val) {
	var st = '';
	if (val <= 9) {
		st += '0' + val;
	} else {
		st = '' + val;
	}
	return st;
}

//XTVID 쿠키생성 호출
makeXTVIDCookie();

/**
 * 공백 제거
 * @param str
 * @returns
 */
function xtractorTrimStr(str){
	try {
		return str.replace(/(^\s*)|(\s*$)/gi, "");
	} catch (e) {}
	return '';
}


/* 해상도 분석 시작 */	
try {
	var pcX = screen.width;
	var pcY = screen.height;
	var xloc = pcX+"X";
	xloc += pcY;
	setXTCookie("xloc", xloc, 365 * 10, "/", getXDomain());
} catch (e) {
}
/* 해상도 분석 끝 */



/* 
행동정보 분석 시작 
용도 : 장바구니상품, 내부검색어, 구매상품, 상세보기한 상품
usage(장바구니) : xtractorUpdateCookie('xtr_basket', 'pid');
usage(내부검색어) : xtractorUpdateCookie('xtr_innerkw', 'pid');
usage(구매상품) : xtractorUpdateCookie('xtr_order', 'pid');
usage(상세보기한 상품) : xtractorUpdateCookie('xtr_view', 'pid', true);
*/	
function xtractorUpdateCookie(action, value, flag){

	try {

		if(value != null){
			value = xtractorTrimStr(value);
			value = encodeURI(encodeURIComponent(value));
		}

		if(flag){
			
			var hisCookie = getXtractorCookie(action);	
			if(hisCookie){
				var hisArr = hisCookie.split(".");
				var newHis = true;
				var hisIdx = 0;
				for(hisIdx = 0; hisIdx<hisArr.length; hisIdx++){
					var hisId = hisArr[hisIdx];
					if(value == hisId){
						newHis = false;
					}
				}
				if(newHis){

					if(hisArr.length>= xtrhisMaxCnt){
						hisCookie = hisCookie.substring(hisCookie.indexOf(".")+1, hisCookie.length);
						
					}
					setXTCookie(action, hisCookie + "."+value, xtrActCookieAge, "/", getXDomain());
				}
			}else{
				setXTCookie(action, value, xtrActCookieAge, "/", getXDomain());
			}
		}else{
			setXTCookie(action, value, xtrActCookieAge, "/", getXDomain());
		}
		
	} catch (e) {}
}
/* 행동정보 분석 끝 */	

/* 쿠키값 반환 시작 */	
function getXtractorCookie(key){
	
	try {
		var cookies = document.cookie;
		var arr = cookies.split(";");
		for(idx =0; idx<arr.length; idx++){
			var cookieStr = arr[idx];
			var cookieArr = cookieStr.split("=");
			var name = cookieArr[0];
			name = xtractorTrimStr(name);
			if( key == name){
				return cookieArr[1];
			}
		}
	} catch (e) {}
	return '';
}
/* 쿠키값 반환 끝 */	

/*
document.write('<scr'+'ipt src=\"http://220.73.141.188/js/etland/nextweb_api.js?ct=' + Math.round(new Date().getTime() / (1000*60)) + '\"><\/script>');
*/
/*if(document.domain == 'local.etland.co.kr') {
	// 1초 기준
	document.write('<scr'+'ipt src=\"http://localhost:8080/js/etland/nextweb_api.js?ct=' + Math.round(new Date().getTime() / (1000)) + '\" ><\/script>'); // *60
} else {
	// 1분 기준
	document.write('<scr'+'ipt src=\"http://220.73.141.188/js/etland/nextweb_api.js?ct=' + Math.round(new Date().getTime() / (1000*60)) + '\"><\/script>');
}*/