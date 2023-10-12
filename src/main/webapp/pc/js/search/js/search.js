 // 인기검색어, 내가찾은 검색어
function doKeyword(query) {
	
	var searchForm = document.searchTop; 
	searchForm.query.value = query;
	//searchForm.collection.value = "ALL";
	//searchForm.sort.value = "RANK";
	doSearchTop();
}

// 쿠키값 조회
function getCookie(c_name) {
	var i,x,y,cookies=document.cookie.split(";");
	for (i=0;i<cookies.length;i++) {
		x=cookies[i].substr(0,cookies[i].indexOf("="));
		y=cookies[i].substr(cookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
	
		if (x==c_name) {
			return unescape(y);
		}
	}
}

// 쿠키값 설정
function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

// 내가 찾은 검색어 조회
function getMyKeyword(keyword, totCount) {
	var MYKEYWORD_COUNT = 6; //내가 찾은 검색어 갯수 + 1
	var myKeyword = getCookie("mykeyword");
	if( myKeyword== null) {
		myKeyword = "";
	}

	var myKeywords = myKeyword.split("^%");

	if( totCount > 0 ) {
		var existsKeyword = false;
		for( var i = 0; i < myKeywords.length; i++) {
			if( myKeywords[i] == keyword) {
				existsKeyword = true;
				break;
			}
		}

		if( !existsKeyword ) {
			myKeywords.push(keyword);
			if( myKeywords.length == MYKEYWORD_COUNT) {
				myKeywords = myKeywords.slice(1,MYKEYWORD_COUNT);
			}
		}
		setCookie("mykeyword", myKeywords.join("^%"), 365);
	}

	showMyKeyword(myKeywords.reverse());
}


// 내가 찾은 검색어 삭제
function removeMyKeyword(keyword) {
	var myKeyword = getCookie("mykeyword");
	if( myKeyword == null) {
		myKeyword = "";
	}

	var myKeywords = myKeyword.split("^%");

	var i = 0;
	while (i < myKeywords.length) {
		if (myKeywords[i] == keyword) {
			myKeywords.splice(i, 1);
		} else { 
			i++; 
		}
	}

	setCookie("mykeyword", myKeywords.join("^%"), 365);

	showMyKeyword(myKeywords);
}
 
// 내가 찾은 검색어 
function showMyKeyword(myKeywords) {
	var str = "<li class=\"tit\"><img src=\"images/tit_mykeyword.gif\" alt=\"내가 찾은 검색어\" /></li>";

	for( var i = 0; i < myKeywords.length; i++) {
		if( myKeywords[i] == "") continue;

		str += "<li class=\"searchkey\"><a href=\"#none\" onClick=\"javascript:doKeyword('"+myKeywords[i]+"');\">"+myKeywords[i]+"</a> <img src=\"images/ico_del.gif\" onClick=\"removeMyKeyword('"+myKeywords[i]+"');\"/></li>";
	}

	$("#mykeyword").html(str);
}

// 오타 조회
function getSpell(query) { 
	$.ajax({
	  type: "POST",
	  url: "./popword/popword.jsp?target=spell&charset=",
	  dataType: "xml",
	  data: {"query" : query},
	  success: function(xml) {
		if(parseInt($(xml).find("Return").text()) > 0) {
			var str = "<div class=\"resultall\">";

			$(xml).find("Data").each(function(){			
				if ($(xml).find("Word").text() != "0" && $(xml).find("Word").text() != query) {
					str += "<span>이것을 찾으셨나요? </span><a href=\"#none\" onClick=\"javascript:doKeyword('"+$(xml).find("Word").text()+"');\">" + $(xml).find("Word").text() + "</a>";
				}			
			});
			
			str += "</div>";

			$("#spell").html(str);
		}
	  }
	});

	return true;
}

/*// 기간 설정
function setDate(range) {
	var startDate = "";
	var endDate = "";
	
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() +1;
	var day = currentDate.getDate();

	if (parseInt(month) < 10) {
		month = "0" + month;
	}

	if (parseInt(day) < 10) {
		day = "0" + day;
	}

	var toDate = year + "." + month + "." + day;

	// 기간 버튼 이미지 초기화
	for (i = 1;i < 5 ;i++) {
		$("#range"+i).attr ("src", "images/btn_term" + i + ".gif");
	}
	
	// 기간 버튼 이미지 선택
	if (range == "D") {
		startDate = getAddDay(currentDate, -0);
		$("#range2").attr ("src", "images/btn_term22.gif");
	} else if (range == "W") {
		startDate = getAddDay(currentDate, -6);
		$("#range3").attr ("src", "images/btn_term32.gif");
	} else if (range == "M") {
		startDate = getAddDay(currentDate, -29);
		$("#range4").attr ("src", "images/btn_term42.gif");
	} else {
		startDate = "1970.01.01";
		endDate = toDate;
		$("#range1").attr ("src", "images/btn_term12.gif");
	}
	
	if (range != "A" && startDate != "") { 
		year = startDate.getFullYear();
		month = startDate.getMonth()+1; 
		day = startDate.getDate();

		if (parseInt(month) < 10) {
			month = "0" + month;
		}

		if (parseInt(day) < 10) {
			day = "0" + day;
		}

		startDate = year + "." + month + "." + day;				
		endDate = toDate;
	}
	
	$("#range").val(range);
	$("#startDate").val(startDate);
	$("#endDate").val(endDate);
}

// 날짜 계산
function getAddDay ( targetDate, dayPrefix )
{
	var newDate = new Date( );
	var processTime = targetDate.getTime ( ) + ( parseInt ( dayPrefix ) * 24 * 60 * 60 * 1000 );
	newDate.setTime ( processTime );
	return newDate;
}*/
//테마정렬
function doThemaSorting(sort) {
	var searchForm = document.sFrm;
	searchForm.sort.value = sort;
	searchForm.submit();
}
//테마검색
function doThemaSearch() {
	alert('테마검색기능은 검색엔진 라이선스 관계로\n\n데모버전에서는 제공하지 않습니다.');
	return false;
	
	var searchForm = document.sFrm; 
	if (searchForm.searchKeyword.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchKeyword.focus();
		return false;
	} else {
		xtractorUpdateCookie('xtr_innerkw',searchForm.searchKeyword.value);
		searchForm.submit();
	}
}


// 우편번호검색
function doSearch() {
	var searchForm = document.searchForm; 
	searchForm.submit();
}
//상단 통합검색
function doSearchTop() {
	alert('통합검색기능은 검색엔진 라이선스 관계로\n\n데모버전에서는 제공하지 않습니다.');
	return false;
	
	var searchForm = document.searchTop; 
	//xtractorUpdateCookie('xtr_innerkw',searchForm.query.value);
	if (searchForm.query.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.query.focus();
		return false;
	} else {
		xtractorUpdateCookie('xtr_innerkw',searchForm.query.value);
		searchForm.submit();
	}
}
// 컬렉션별 검색
function doCollection(coll) {
	var searchForm = document.search; 
	searchForm.collection.value = coll;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}
//엔터 체크	
function pressCheck() {   
	if (event.keyCode == 13) {
		return doreSearch();
	}else{
		return false;
	}
}
//엔터 Top
function pressCheckTop() {   
	if (event.keyCode == 13) {
		return doSearchTop();
	}else{
		return false;
	}
}

/*function pressCheckTop() {
	var searchForm = document.searchTop;
	if (event.keyCode == 13) {
		searchForm.query.focus();
		return false;
	} else {
		xtractorUpdateCookie('xtr_innerkw',searchForm.query.value);
		searchForm.submit();
	}	
}*/
var temp_query = "";

//결과내 재검색
function checkReSearch() {
	var searchForm = document.search;
	var reQuery = searchForm.reQuery;
	reQuery.value="1";
	return doreSearch();
}
//결과내 재검색
function doreSearch() {
	var searchForm = document.search; 
	searchForm.reQuery.value="1";
	if (searchForm.reSearch.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.reSearch.focus();
		return;
	}
	xtractorUpdateCookie('xtr_innerkw',searchForm.reSearch.value);
	searchForm.collection.value = "ALL";
	searchForm.contCheck.value=0;
	searchForm.startCount.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.startCount_emagazine.value = 0;
	searchForm.startCount_exhibitions.value = 0;
	searchForm.startCount_review.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.sort.value = "RANK";
	searchForm.submit();
}
//카테고리 뎁스 선택시
function doCategory1(category, depth) {
	var searchForm = document.search;
	$('#search').attr('action', '#sh_cateList');
	searchForm.category.value = category;
	searchForm.category_name.value = category;
	searchForm.depth.value = depth;
	//searchForm.realQuery.value = query;
	searchForm.startCount_product.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.collection.value = "ALL";
	searchForm.sort.value = "RANK";
	searchForm.submit();
}

//카테고리 뎁스 초기화
function doCategoryInit() {
	var searchForm = document.search;
	$('#search').attr('action', '#sh_cateList');
	searchForm.category.value = "";
	searchForm.depth.value = 1;
	searchForm.cate_depth.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.collection.value = "ALL";
	searchForm.sort.value = "RANK";
	searchForm.submit();
}
//페이징
function doPaging(count) {
	var searchForm = document.search;
	searchForm.startCount.value = count;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}

//우편번호페이징
function doPostPaging(count) {
	var searchForm = document.searchForm;
	searchForm.startCount.value = count;
	searchForm.submitYn.value="Y";
	searchForm.submit();
}
// 기간 적용
function doRange() {
	var searchForm = document.search;
	
	if($("#startDate").val() != "" || $("#endDate").val() != "") {
		if($("#startDate").val() == "") {
			alert("시작일을 입력하세요.");
			$("#startDate").focus();
			return;
		}

		if($("#endDate").val() == "") {
			alert("종료일을 입력하세요.");
			$("#endDate").focus();
			return;
		}

		if(!compareStringNum($("#startDate").val(), $("#endDate").val(), ".")) {
			alert("기간이 올바르지 않습니다. 시작일이 종료일보다 작거나 같도록 하세요.");
			$("#startDate").focus();
			return;
		}		
	}

	searchForm.startDate.value = $("#startDate").val();
	searchForm.endDate.value = $("#endDate").val();
	searchForm.range.value = $("#range").val();
	searchForm.reQuery.value = "2";
	searchForm.submit();
}
// 영역
function doSearchField(field) {
	var searchForm = document.search;
	searchForm.searchField.value = field;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}
// 문자열 숫자 비교
function compareStringNum(str1, str2, repStr) {
	var num1 =  parseInt(replaceAll(str1, repStr, ""));
	var num2 = parseInt(replaceAll(str2, repStr, ""));

	if (num1 > num2) {
		return false;
	} else {
		return true;
	}
}
// Replace All
function replaceAll(str, orgStr, repStr) {
	return str.split(orgStr).join(repStr);
}
// 공백 제거
function trim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
//인기검색어
function getPopkeyword() {
	/*var target		= "popword";
	var range		= "W";
	var collection  = "pc";
    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "/pc/search/popword/popword.do",
	  dataType: "xml",
	  data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
	  success: function(xml) {
		var str = "";
		$(xml).find("Query").each(function(){
			var dspPopword = "";
			dspPopword = $(this).text();
			if (dspPopword.length > 10) {
				num +=1;
				dspPopword = dspPopword.substring(0, 9) + "..";
			} 
			var popcount = $(this).attr("count");
			if(popcount == -1){
				popcount = '';
			}else{
				popcount = $(this).attr("count");
			}
			//var img_main = "<c:out value='${frontDomain}'/>";
			var tmp_updown = "";
			var updown = $(this).attr("updown");
			if(updown == "C"){
				tmp_updown = "<i class=\"best_ico none\">-</i>";
			}else if(updown == "U"){
				tmp_updown = "<i class=\"best_ico co_red\">▲ <span>" + popcount + "</span></i>";
			}else if(updown== "D"){
				tmp_updown = "<i class=\"best_ico co_blue\">▼ <span>" + popcount + "</span></i>";
			}else if(updown== "N"){
				tmp_updown = "<i class=\"best_ico best_ico_new\"><img src=\"http://image.etland.co.kr/nas/cdn/pc/img/ico/ico_new2.gif\" alt=\"New\"></i>";
			}else{
				tmp_updown = "";
			}
			
			var imgCount = $(this).attr("id");
			
			
			
			if(imgCount == 1){
				str += "<li class=\"f\"><a href=\"javascript:void(0)\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em><img src=\"http://image.etland.co.kr/nas/cdn/pc/img/ico/ico_num1.gif\" alt=\"1\"></em><span>" + $(this).text() + "</span></a>" + tmp_updown + "</li>";
			}else if(imgCount == 10){
				str += "<li class=\"l\"><a href=\"javascript:void(0)\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em><img src=\"http://image.etland.co.kr/nas/cdn/pc/img/ico/ico_num10.gif\" alt=\"10\"></em><span>" + $(this).text() + "</span></a>" + tmp_updown + "</li>";
			}else{
				str += "<li><a href=\"javascript:void(0)\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em><img src=\"http://image.etland.co.kr/nas/cdn/pc/img/ico/ico_num"+imgCount+".gif\" alt=\"" + imgCount + "\"></em><span>" + $(this).text() + "</span></a>" + tmp_updown + "</li>";
			}
			
		});

		$("#popword").html(str);
	  }
	});
	 */

}
//롤링인기검색어
function getRollingPopkeyword() {
/*
	var target		= "popword";
	var range		= "W";
	var collection  = "pc";
    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "/pc/search/popword/popword.do",
	  dataType: "xml",
	  data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
	  success: function(xml) {
		var str = "";
		$(xml).find("Query").each(function(){
			var dspPopword = "";
			dspPopword = $(this).text();
			if (dspPopword.length > 10) {
				dspPopword = dspPopword.substring(0, 9) + "..";
			} 
			
			var popcount = $(this).attr("count");
			if(popcount == -1){
				popcount = '';
			}else{
				popcount = $(this).attr("count");
			}
			//var img_main = "<c:out value='${frontDomain}'/>";
			var tmp_updown = "";
			var updown = $(this).attr("updown");
			if(updown == "C"){
				tmp_updown = "<i class=\"best_ico none\">-</i>";
			}else if(updown == "U"){
				tmp_updown = "<i class=\"best_ico co_red\">▲ <span>" + popcount + "</span></i>";
			}else if(updown== "D"){
				tmp_updown = "<i class=\"best_ico co_blue\">▼ <span>" + popcount + "</span></i>";
			}else if(updown== "N"){
				tmp_updown = "<i class=\"best_ico best_ico_new\"><img src=\"http://image.etland.co.kr/nas/cdn/pc/img/ico/ico_new2.gif\" alt=\"New\" ></i>";
			}else{
				tmp_updown = "";
			}
			
			var imgCount = $(this).attr("id");
			
			
				str += "<li><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\" class=\"tx_link\"><span><Strong>" + $(this).attr("id") + "&nbsp;&nbsp;</Strong>" + $(this).text() + "</span>&nbsp;" + tmp_updown + "</a></li>";
			
		});

		$("#rollingPopword").html(str);
	  }
	});
*/
}

//연관검색어(추천검색어)
function getRecommend(query) {

	  var target  = "recommend";

	  var label   = "_ALL_";

	  var charset = "UTF-8";


	  $.ajax({

	    type: "POST",

	    url: "/pc/search/popword/popword.do",

	    dataType: "xml",

	    data: {"target":target,"query" : query , "label": label , "charset" : charset},

	    success: function(xml) {

	      var str = "<li class=\"tit\">";

	      //str += "<div class=\"timg\">추천검색어</div>";

	      str += "</li>";

	      $(xml).find("Word").each(function(){

	    	str += "<a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><span>" + $(this).text() + "</span></a>";

	      });
	      
	      $("#recommendword").html(str);

	   }

	  });

}

