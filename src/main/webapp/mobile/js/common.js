$.ajaxSetup ({
    // Disable caching of AJAX responses */
    cache: false
});

$(document).ready(function(){
	
	 //숫자만 입력
	$(".number").keyup(function(event){
        if (!(event.keyCode >=37 && event.keyCode<=40)) {
            var inputVal = $(this).val();
            $(this).val(inputVal.replace(/[^0-9]/gi,''));
            
            // 모바일 number 타입인 경우 maxlength 체크
            var maxlength = $(this).attr("maxlength");
            if($(this).attr("type") == "number" && maxlength != undefined){//number 타입이면서 maxlength 있는 경우..
            	if (this.value.length > maxlength) {
                    this.value = this.value.slice(0,4); 
                }
            }
        }
    });

});

/* 상품 트위터 */
function goProductTwitter(prdCd, tweet){
	var url = "http://www.lsnmall.com/mobile/product/product.do?prdMstCd="+prdCd;
	url = encodeURIComponent(url);
	var text = encodeURIComponent(tweet);
	window.open("https://twitter.com/share?url="+url+"&text="+text, "twitter", "width=650, height=400");
}

/* 상품 페이스북 */
function goProductFacebook(prdCd, prdNm, prdImg, link)
{
	var url = "https://www.facebook.com/dialog/feed?app_id=749634331741217&code=&display=popup&caption=&name="+ prdNm +"&description="+ link +"&link="+ link +"&picture="+ prdImg +"&redirect_uri=http://www.lsnmall.com/mobile/common/facebookclose.do";
	url = encodeURI(url);
    window.open(url, "facebook", "width=500, height=500");
}

function openPopWindow(url, data, popName, callBackName, options) {
	var fullUrl = url;
	if (popName == null) {
		popName = '_popup';
	}
	if(options == null){
		options = "height=500,width=300,toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=no";
	}
	window.open("", popName, options);

	if($('#_frmPop').size() == 0){
		$('body').append('<form id="_frmPop" name="_frmPop" method="post"></form>');
	}
	else{
		$('#_frmPop').empty();
	}

	var frmPop = $('#_frmPop');

	if (data) {
		var datas = data.split("&");
		for(var i=0; i< datas.length; i++){
			var param = datas[i];
			var params = param.split("=");
			var value = (params.length > 1? decodeURI(params[1]): ''); // form submit인 경우, 브라우저 자체적으로 encode해줌. 두번 해줄 필요 없음
			frmPop.append('<input type="hidden" name="'+ params[0] +'" value="'+value+'"/>');
		}
	}
	if (callBackName) {
		frmPop.append('<input type="hidden" name="_callBackName" value="'+callBackName+'"/>');
	}

	frmPop.attr('action', fullUrl);
	frmPop.attr('target', popName);
	frmPop.submit();
}

function popup(_href, _width, _height, _scroll,_id)
{
    if (!_scroll) _scroll = 'no';
    else _scroll = 'yes';
    var _left = parseInt((screen.width - _width) / 2, 10),
        _top = parseInt((screen.height - _height) / 2, 10) - 100;
    var popup =  window.open( _href, 'popup'+_id, 'top='+ _top +', left='+ _left +', width='+ _width +', height='+ _height +', scrollbars='+ _scroll +', toolbar=no, menubar=no, location=no, resizable=true, status=yes');
    popup.focus();
}

//상품상세조회 팝업 
function goProductDetail(serverDomain, prdCd) 
{ 
	popup(serverDomain + "/mobile/product/product.do?prdMstCd="+prdCd, "1280", "960", "yes", "productDetailView");

} 

// 우편번호 팝업 
function goSearchZipCode(serverDomain, searchGubun) 
{ 
    //window.open(serverDomain + "/mobile/common/commonZipCodePopup.do", "searchZipCodePopup", "width=750, height=600, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=yes"); 
	popup(serverDomain + "/mobile/common/commonZipCodePopup.do?searchGubun="+searchGubun, "530", "700", "yes", "zipCodeView");

} 

//배송조회 팝업 
function goSearchDelivery(url) 
{ 
	popup(url, "550", "700", "yes", "deliveryView");

} 

// 로그인 팝업
function goLogin(serverDomain, url, parentFunctionYn, confirmYn)
{ 
    if(url == "") 
    { 
        url = document.location.href; 
    } 
    url = encodeURIComponent(url); 
    if(confirmYn == 'N') 
    { 
        if(parentFunctionYn!=undefined && "Y"==parentFunctionYn) 
        { 
            window.open(serverDomain + "/mobile/manager/loginPopup.do?pFunYn=Y&url="+url + "&site=" + getSite(), "loginPopup", "width=804, height=415, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"); 
        } else { 
            window.open(serverDomain + "/mobile/manager/loginPopup.do?url=" + url + "&site=" + getSite(), "loginPopup", "width=804, height=415, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"); 
        } 
    } else { 
        if(confirm("로그인이 필요한 서비스입니다.\n로그인하시겠습니까?")) 
        { 
            if(parentFunctionYn!=undefined && "Y"==parentFunctionYn) 
            { 
                window.open(serverDomain + "/mobile/manager/loginPopup.do?pFunYn=Y&url="+url + "&site=" + getSite(), "loginPopup", "width=804, height=415, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"); 
            } else { 
                window.open(serverDomain + "/mobile/manager/loginPopup.do?url=" + url + "&site=" + getSite(), "loginPopup", "width=804, height=415, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"); 
            } 
        } 
    } 
} 

// 비회원 로그인 팝업 (실명인증) 
function accreditationLogin(serverDomain) 
{ 
    window.open(serverDomain + "/mobile/manager/accreditationLoginStep1Popup.do?site=" + getSite(), "loginPopup", "width=804, height=415, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"); 
} 

/* * 날짜보기 * strDate : 날짜(YYYYMMDD) * str : 구분자 * */ 
function getDateView(strDate, str)
{ 
    strDate = strDate.replace(/\-/g, ""); 
    return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8); 
} 

/* * 날짜보기 * strDate : 날짜(YYYYMMDD HHMMSS) * str : 날짜 구분자 * str2 : 시간 구분자 * */ 
function getDateTimeView(strDate, str, str2)
{ 
    strDate = strDate.replace(/\-/g, ""); 
    return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8) + " " + strDate.substring(8, 10) + str2 + strDate.substring(10, 12) + str2 + strDate.substring(12, 14); 
} 

// 날짜 셋팅 - 오늘, 일주일, 15일, 한달, 두달 
function fnDateSet(v_start_name, v_end_name, s_year, s_month, s_day, e_year, e_month, e_day, seperator)
{ 
    $("#"+v_start_name ).val(getCalculatedDate(s_year, s_month, s_day, seperator)); 
    $("#"+v_end_name ).val(getCalculatedDate(e_year, e_month, e_day, seperator)); 
} 

function getCalculatedDate(iYear, iMonth, iDay, seperator)
{ 
    //현재 날짜 객체를 얻어옴. 
    var gdCurDate = new Date(); 
    //현재 날짜에 날짜 게산. 
    gdCurDate.setYear ( gdCurDate.getFullYear() + iYear ); 
    gdCurDate.setMonth( gdCurDate.getMonth() + iMonth); 
    gdCurDate.setDate ( gdCurDate.getDate() + iDay ); 
    //실제 사용할 연, 월, 일 변수 받기. 
    var giYear = gdCurDate.getFullYear(); 
    var giMonth = gdCurDate.getMonth()+1; 
    var giDay = gdCurDate.getDate(); 
    //월, 일의 자릿수를 2자리로 맞춘다. 
    giMonth = "0" + giMonth; 
    giMonth = giMonth.substring(giMonth.length-2,giMonth.length); 
    giDay = "0" + giDay; 
    giDay = giDay.substring(giDay.length-2,giDay.length); 
    //display 형태 맞추기. 
    return giYear + seperator + giMonth + seperator + giDay; 
} 

/**
 * 유효한 날짜인지 확인
 */
function isValidDate(param) {
    try
    {
        param = param.replace(/-/g,'');

        // 자리수가 맞지않을때
        if( isNaN(param) || param.length!=8 ) {
            return false;
        }
         
        var year = Number(param.substring(0, 4));
        var month = Number(param.substring(4, 6));
        var day = Number(param.substring(6, 8));

        var dd = day / 0;

         
        if( month<1 || month>12 ) {
            return false;
        }
         
        var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var maxDay = maxDaysInMonth[month-1];
         
        // 윤년 체크
        if( month==2 && ( year%4==0 && year%100!=0 || year%400==0 ) ) {
            maxDay = 29;
        }
         
        if( day<=0 || day>maxDay ) {
            return false;
        }
        return true;

    } catch (err) {
        return false;
    }                      
}

/** * 가격숫자만 입력가능체크 및 콤마 * @param obj * @param fLen * @returns {Boolean} */ 
function addComma(obj,fLen) 
{ 
    if(event.keyCode == 37 || event.keyCode == 39 ) 
    { 
        return; 
    } 
    fLen = fLen || 2; 
    var strValue = obj.value.replace(/,|\s+/g,''); 
    var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ; 
    var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ; 
    if(isNaN(strValue)) 
    { 
        alert('숫자만 입력가능합니다.'); 
        obj.value = ""; 
        return false; 
    } 
    var intLast = strBeforeValue.length-1; 
    var arrValue = new Array; 
    var strComma = ''; 
    
    for(var i=intLast,j=0; i >= 0; i--,j++) 
    { 
        if( j !=0 && j%3 == 0) 
        { 
            strComma = ','; 
        } else { 
            strComma = ''; 
        } 
        arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ; 
    } 
    obj.value= arrValue.reverse().join('') + strAfterValue; 
} 

/** * 콤마 만들기 * @param x * @returns */ 
function setComma(x)
{ 
    var pattern = /(^[+-]?\d+)(\d{3})/; 
    x += ''; 
    while (pattern.test(x))
    { 
        x = x.replace(pattern, '$1' + ',' + '$2'); 
    } 
    return x; 
} 

/** * 콤마제거 * @param val * @returns */ 
function removeComma(val) 
{ 
    //console.log("val " + val); 
    if (val == "" || val == undefined) 
    { 
        val =""; 
    } 
    //self.focus(); 
    return val.split(",").join(""); 
} 

//콤마제거후 숫자리턴 
function getInt(val) 
{ 
    if (val == "" || val == undefined || val == null)
    { 
        val ="0"; 
    } 
    return val.split(",").join(""); 
} 

//SNS (FACEBOOK) 
function link_sns() 
{ 
    var paramUrl = location.href; 
    var paramDesc = document.title; 
    var url = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(paramUrl)+'&t='+encodeURIComponent(paramDesc); 
    window.open(url,'sharer','toolbar=0,status=0,width=1024,height=665'); 
} 

/**
 * 글자제한
 * onkeyup="getStrByte(this,'#byte', 200, 3);"
 */
function getStrByte(obj, tgt, size, korSize) {
	var korByte = 3; //한글 바이트 기본값 3
	
	if(korSize != undefined && korSize != ""){
		korByte = parseInt(korSize, 10);
	}
	
	var str = obj.value;
	var str_max = size;	
	var p = 0;
	var bytes = 0;
	var len_num = 0;  
	var str2 = "";
 
	if(str != ""){
		for(p=0; p<str.length; p++) {
			(str.charCodeAt(p) > 255) ? bytes+=korByte : bytes++; //한글은 korByte, 영문, 숫자, 공백은 1byte
			if(bytes <= str_max){
				len_num = p + 1;
			}else{
				alert(size + " byte를 초과 입력할수 없습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
				str2 = str.substr(0, len_num);
				obj.value = str2;
				break;
			}
			$(tgt).text(bytes);
		}
	}else{
		$(tgt).text("0");
	}
	obj.focus();
}

/* 비밀번호 유효성 검사 
 * 사용법  pwdValidation(str) > str : 유효성 체크할 비밀번호
 * return : Object.flag : true, false(성공, 실패)
 * return : Object.msg : string(실패 사유)
 * 유형 : 영문(대/소문자 구분)과 숫자나 특수기호를 혼합하여 생성 / 6 ~ 15자로 생성
 */

//function pwdValidation(str){
//	var resultObj = new Object();
//
//	var validation_pw1 = /^(?=.*[a-zA-Z])(?=.*[!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]).{5,15}$/;	// 영문 & 특수문자
//	var validation_pw2 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,15}$/;	// 영문 & 숫자
//	
//	//var validation_pw = /^(?=.*[a-zA-Z])(?=.*[!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9]).{5,14}$/;
//	
//    resultObj.msg = "비밀번호는 영문, 숫자, 특수문자 2가지 이상의 혼합\n6자리 이상 15자리이하로 입력하셔야 합니다.";
//    
//    resultObj.flag = true;
//
//    if(!validation_pw1.test(str) && !validation_pw2.test(str))
//	{
//		resultObj.flag = false;	
//	}
//
//	if(resultObj.flag)
//    {
//        if(/(\w)\1\1/.test(str))
//        {
//        	resultObj.flag = false;
//        	resultObj.msg = "비밀번호에 연속된 문자가 3개이상 올 수 없습니다.";        	
//        }
//        else
//        {
//        	resultObj.msg = "";
//        }
//    }
//    
//    return resultObj;
//}

/**
 * 상품 카테고리 Select box
 * */
getCategoryList = function(obj, upIdx, selectIdx, serverDomain, env)
{
	var title = "대카테고리";
	if(obj.indexOf("2") > -1)
	{
		title = "중카테고리";
	}
	if(obj.indexOf("3") > -1)
	{
		title = "소카테고리";
	}
	if(obj.indexOf("4") > -1)
	{
		title = "3차 분류";
	}
	if(obj.indexOf("5") > -1)
	{
		title = "4차 분류";
	}
	
	if(env==null || env==' ') env='P';
	
	$.ajax({
        type	: "POST",
        url		: serverDomain + "/pc/product/subCategoryProductAjax.do",
        data	:  { "PRD_CTG_IDX":upIdx, "PRD_CTG_ENV":env},
        dataType : "JSON",
        async   : false,
        success	: function(data)
        {
            var selected = "";
            $("#"+obj).empty().append("<option value=''>"+title+"</option>");
            $.each(data.categoryList, function(i,item) 
            {
                if (item.PRD_CTG_IDX == selectIdx)
                {
                    selected = "selected";
                } 
                else 
                {
                    selected = "";
                }
                $("#"+obj).append("<option value='"+item.PRD_CTG_IDX+"' "+selected+">"+item.PRD_CTG_NM+"</option>").change();
            });

        },
        error   : function(xhr,status,error)
        { 
            alert("상품 카테고리 호출 중 에러가 발생하였습니다.");
            //alert("code:"+xhr.status); 
        }
    });
};

