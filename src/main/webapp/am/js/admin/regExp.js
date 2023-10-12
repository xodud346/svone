/**
 * Author : 최재영
 * FileNm : regExp
 * Date : 2021-08-02
 * Desc : 정규식 모음
 */


//왼쪽 공백 제거
function leftTrim(str) {
	return str.replace(/^\s+/, "");
}


//오른쪽 공백 제거
function rightTrim(str) {
	return str.replace(/\s+$/, "");
}


//양쪽 공백 제거
function sideTrim(str) {
	return str.replace(/^\s+|\s+$/g, "");
}


//전체 공백 제거
function perfectTrim(str) {
	return str.replace(/(\s*)/g, "");
}


//email 검사
//가능한 형식 예 : aaa@bbb.com  a7a.dd@bbbb.pe.kr.com  777_d-3@bbb.com
//불가능한 형식 예 : -aaa@bbb.com  a#aa@co.kr  aa@bb@cc.com  aaa@bbb.c  aaa@bbb.comp
function emailValidate(val) {
	var re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	if (re.test(val)) {
		return true;
	} else {
		return false;
	}
}


//숫자만 
//
function onlyNum(val){
	var re= /^[0-9]*$/;
	return validateCheck(re,val);
}
//한글만
function onlyKor(val){
	var re = /^[가-힣]*$/;	
	return validateCheck(re,val);
}

//영어만
function onlyEng(val){
	var re = /^[a-zA-Z]*$/;           //영문 허용
	return validateCheck(re,val);	
}
//특수문자 불가
function notSpecialChar(val){
	var re = /^[가-힣a-zA-Z0-9]*$/;    //한글,숫자,영문 허용
	return validateCheck(re,val);	
} 


//특수문자 제거
function removeRegExp(str){
	  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
	  if(reg.test(str)){
	    return str.replace(reg, "");
	  } else {
	    return str;
	  }
}


// 영어 + 숫자
function onlyEngNum(val){
	var re = /^[a-zA-Z0-9]*$/;
	return validateCheck(re,val);
}

//한글 + 영어 + 숫자 
function onlyText(val){
	var re = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;
	return validateCheck(re,val);
}
//한글 + 영어 
function onlyKorEng(val){
	var re = /^[가-힣a-zA-Z]+$/;
	return 	validateCheck(re , val);
}

//한글 + 숫자
function onlyKorNum(val){
	var re = /^[가-힣-0-9]+$/;
	return 	validateCheck(re , val);
}


function validateCheck(re , val){
	if(re.test(val)){
		return true;
	}else{
		return false;
	}
}

//영문 숫자 특수문자 모두 포함 최소 8자리
var password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

//특수 , 숫자 , 영문 => 8자리 (최소)
//숫자 , 영문 => 10자리 (최소 )


//password 를 입력했을때 현재 자리수가 몇 이상인가
//최소 8자리가 되지 않으면 return false;
//만약 10자리가 되지 않으면
//특,숫,영 => 정규식을 이용하여 검증 한다.
//만약 10자리 일경우 숫자 , 영문을 사용한 정규식을 이용하여 검증한다.







