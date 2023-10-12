// 인기검색어, 내가찾은 검색어
function doKeyword(query) {
	
	var searchForm = document.search; 
	//searchForm.startCount.value = "0";
	searchForm.query.value = query;
	//searchForm.collection.value = "ALL";
	//searchForm.sort.value = "RANK";
	doSearch();
}

//검색어지우기
function reset(){
	var searchForm = document.search; 
	searchForm.query.value="";
	searchForm.query.focus();
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

// 기간 설정
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
}
/*// 정렬
function doSorting(sort) {
	var searchForm = document.search;
	searchForm.sort.value = sort;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}*/
// 검색
function doSearch() {
	var searchForm = document.search; 
	if (searchForm.query.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.query.focus();
		return false;
	}
	searchForm.reQuery.value ="";
	searchForm.collection.value = "ALL";
	searchForm.startCount.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.startCount_emagazine.value = 0;
	searchForm.startCount_exhibitions.value = 0;
	searchForm.startCount_review.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.contents.value="ALL";
	searchForm.sort.value = "RANK";
	xtractorUpdateCookie('xtr_innerkw',searchForm.query.value);
	searchForm.submit();
}
function doSearchTop() {
	var searchForm = document.searchTop; 
	if (searchForm.query.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.query.focus();
		return;
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

/*//콘텐츠별 검색
function doContents(coll) {
	var searchForm = document.search;
	$('#search').attr('action', '#sh_contents');
	searchForm.collection.value = "ALL";
	searchForm.contents.value = coll;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}*/
	
// 엔터 체크	
function pressCheck() {   
	if (event.keyCode == 13) {
		return doSearch();
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
var temp_query = "";

/*//결과내 재검색
function checkReSearch() {
	var searchForm = document.search;
	var reQuery = searchForm.reQuery;
	reQuery.value="1";
	return doreSearch();
}*/
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
	searchForm.startCount.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.startCount_emagazine.value = 0;
	searchForm.startCount_exhibitions.value = 0;
	searchForm.startCount_review.value = 0;
	searchForm.contents.value="ALL";
	searchForm.searchField.value = "ALL";
	searchForm.sort.value = "RANK";
	searchForm.submit();
}


//카테고리 뎁스 선택시
function doCategory1(category, depth) {
	var searchForm = document.search;
	searchForm.category.value = category;
	searchForm.depth.value = depth;
	searchForm.startCount.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.collection.value = "ALL";
	searchForm.sort.value = "RANK";
	searchForm.submit();
}

//카테고리 뎁스 초기화
function doCategoryInit() {
	var searchForm = document.search;
	searchForm.category.value = "";
	searchForm.depth.value = 1;
	searchForm.cate_depth.value = 0;
	searchForm.startCount.value = 0;
	searchForm.startCount_product.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.collection.value = "ALL";
	searchForm.sort.value = "RANK";
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

	var target		= "popword";
	var range		= "W";
	var collection  = "mobile";
    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "./popword/popword.do",
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
				tmp_updown = "<span>(-)</span>";
			}else if(updown == "U"){
				tmp_updown = "<span>(+" + popcount + ")</span>";
			}else if(updown== "D"){
				tmp_updown = "<span>(-" + popcount + ")</span>";
			}else if(updown== "N"){
				tmp_updown = "<span class=\"co_red\">(NEW)</span>";
			}else{
				tmp_updown = "";
			}
			
			var imgCount = $(this).attr("id");
			
			if($(this).attr("id") == 1){
				str += "<li class=\"f\"><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em class=\"co_red\">" + $(this).attr("id") + ".</em><strong class=\"co_red\">" + $(this).text()  + "</strong>" + tmp_updown + "</a></li>";
			}else if($(this).attr("id") == 2 || $(this).attr("id") == 3){
				str += "<li><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em class=\"co_red\">" + $(this).attr("id") + ".</em><strong class=\"co_red\">" + $(this).text()  + "</strong>" + tmp_updown + "</a></li>";
			}else if($(this).attr("id") == 10){
				str += "<li class=\"l\"><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em>" + $(this).attr("id") + ".</em><strong>" + $(this).text()  + "</strong>" + tmp_updown + "</a></li>";
			}else{
				str += "<li><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><em>" + $(this).attr("id") + ".</em><strong>" + $(this).text()  + "</strong>" + tmp_updown + "</a></li>";
			}
		});

		$("#popword").html(str);
	  }
	});

}
//롤링인기검색어
function getRollingPopkeyword() {

	var target		= "popword";
	var range		= "W";
	var collection  = "_ALL_";
    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "mobile/search/popword/popword.do",
	  dataType: "xml",
	  data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
	  success: function(xml) {
		var str = "<li class='tit'>";
			//str += "<div class='timg'>"+rightpop+"</div>";
			str += "</li>";
	   
		$(xml).find("Query").each(function(){
			var dspPopword = "";
			dspPopword = $(this).text();
			if (dspPopword.length > 4) {
				dspPopword = dspPopword.substring(0, 9) + "..";
			} 
			
				str += "<li><a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\" class=\"tx_link\"><span><em>" + $(this).attr("id") + ".</em>" + $(this).text() + "</span><i class=\"co_red\">▲</i></a></li>";
			
		});

		$("#rollingPopword").html(str);
	  }
	});

}

//연관검색어(추천검색어)
function getRecommend(query) {

	  var target  = "recommend";

	  var label   = "_ALL_";

	  var charset = "UTF-8";


	  $.ajax({

	    type: "POST",

	    url: "./popword/popword.do",

	    dataType: "xml",

	    data: {"target":target,"query" : query , "label": label , "charset" : charset},

	    success: function(xml) {

	    	var str = "";

	      $(xml).find("Word").each(function(){

	    	str += "<a href=\"#\" onclick=\"javascript:doKeyword('" + $(this).text() + "');\"><span>" + $(this).text() + "</span></a>";

	      });
	      
	      $("#recommendword").html(str);

	   }

	  });

}