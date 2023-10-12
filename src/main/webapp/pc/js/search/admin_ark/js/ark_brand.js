var g_oConvert_brand = "fw";							// 정방향, 역방향 값
var isArk_brand = true;								// 자동완성 기능 사용 여부
var isKeydown_brand = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow_brand = true;
var cursorPos_brand = -1;								// 자동완성 커서 위치 값
var queryId_brand = "#searchBrandNm";							// 검색어 <input> 의 id을 설정한다
var arkId_brand = "#brandSearchList";								// 자동완성 전체 <div> 의 id을 설정한다
var contentListId_brand = "ark_content_list_brand";			// 자동완성 Content List <li> 의 id을 설정한다
var totalFwCount_brand = 0;							// 전방 검색 전체 개수
var totalRwCount_brand = 0;							// 후방 검색 전체 개수
var target_brand = "ark_brand";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset_brand = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype_brand = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath_brand = "/am/search/ark";						// 자동완성 경로
var transURL_brand = arkPath_brand + "/ark_transPopup.do";		// trans 페이지의 URL을 설정한다.
var tempQuery_brand = "";

/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect_brand = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0; i<data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1) {
					return data[i].identity;
				}
			} else if (dataProp) {
				return data[i].identity;
			}
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) {
			return;
		}

		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	dataBrowser: [
	    {
	    	string: navigator.userAgent,
	    	subString: "Chrome",
	    	identity: "CHROME"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "OmniWeb",
	    	versionSearch: "OmniWeb/",
	    	identity: "OmniWeb"
	    }, {
	    	string: navigator.Vendor,
	    	subString: "Apple",
	    	versionSearch: "Version",
	    	identity: "Safari"
	    }, {
	    	prop: window.opera,
	    	identity: "OPERA",
	    	versionSearch: "Version"
	    }, {
	    	string: navigator.vendor,
	    	subString: "iCab",
	    	identity: "iCab"
	    }, {
	    	string: navigator.vendor,
	    	subString: "KDE",
	    	identity: "Konqueror"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "Firefox",
	    	identity: "FF"
	    }, {
	    	string: navigator.vendor,
	    	subString: "Camino",
	    	identity: "Camino"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "Netscape",
	    	identity: "Netscape"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "MSIE",
	    	identity: "IE",
	    	versionSearch: "MSIE"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "Gecko",
	    	identity: "Mozilla",
	    	versionSearch: "rv"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "Mozilla",
	    	identity: "Netscape",
	    	versionSearch: "Mozilla"
	    }
	],
	dataOS: [
	    {
	    	string: navigator.platform,
	    	subString: "Win32",
	    	identity: "Windows"
	    }, {
	    	string: navigator.platform,
	    	subString: "Wind",
	    	identity: "Windows"
	    }, {
	    	string: navigator.platform,
	    	subString: "Mac",
	    	identity: "Mac"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "iPhone",
	    	identity: "iPhone/iPod"
	    }, {
	    	string: navigator.userAgent,
	    	subString: "Linux",
	    	identity: "Linux"
	    }
	]
};
BrowserDetect_brand.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser_brand = BrowserDetect_brand.browser;
var browserVersion_brand = BrowserDetect_brand.version;
var os_brand = BrowserDetect_brand.OS;

//var keyFix_brand = new beta.fix('staff');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookieBrand("ark_brand")=="off") {
		isArk_brand = false;
		jQuery(queryId_brand).attr("autocomplete","on");
	} else {
		jQuery(queryId_brand).attr("autocomplete","off");
	}

	if (browser_brand == "OPERA" || browser_brand == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		$(queryId_brand).keydown(function(event) {
			var query = jQuery(queryId_brand).val();

			$(this).next('.search-list').hide();
			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArkBrand();
				}
				moveFocusEventBrand(event);
			} else {
				if (jQuery(event.target).is(queryId_brand)) {
					isKeydown_brand = true;
					eventKeydownBrand();
				}
			}
		});
	} else if (browser_brand == "IE" || browser_brand == "CHROME" || browser_brand == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		$(queryId_brand).keyup(function(event) {
			var query = jQuery(queryId_brand).val();
			
			$(this).next('.search-list').show();
			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}
				*/
				
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArkBrand();
				}
				moveFocusEventBrand(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId_brand).html("");
				hideArkBrand();
			} else {
				if (jQuery(event.target).is(queryId_brand)) {
					if (isArk_brand && jQuery(queryId_brand).val() != "") {
						if(datatype_brand == "json") {
							requestArkJsonBrand(jQuery(queryId_brand).val());
						} else if(datatype_brand == "xml") {
							requestArkXmlBrand(jQuery(queryId_brand).val());
						}
					} else if (jQuery(queryId_brand).val() == "") {
						hideArkBrand();
					}
				}
			}

			showArkBrand();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId_brand).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId_brand).html(msg);

		jQuery("#" + contentListId_brand).html("");
			hideArkBrand();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubbleBrand(event);
		if (false/*jQuery(event.target).is("#" + imgDownId_brand)*/) {
			isListShow_brand = false;
			showArkBrand();
			showArkGuideBrand();
			setArkFooterBrand();
		} else if (false/*jQuery(event.target).is("#" + imgUpId_brand)*/) {
			hideArkBrand();
		} else if (jQuery(event.target).is(queryId_brand)) {
			if (isArk_brand) {
				var query = jQuery(queryId_brand).val();
				if (query != "") {
					if(datatype_brand == "json") {
						requestArkJsonBrand(jQuery(queryId_brand).val());
					} else if(datatype_brand == "xml") {
						requestArkXmlBrand(jQuery(queryId_brand).val());
					}
					keywordBrand = query;
				}
				isKeydown_brand = true;
			}
		} else if (false/*!jQuery(event.target).is("." + wrapId_brand)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArkBrand();
			}
		}
	});

	/*
	jQuery("#" + imgUpId_brand).hover(
		function() {
			jQuery("#tooltip01").show();
		},
		function() {
			jQuery("#tooltip01").hide();
		}
	);
	*/
});

/************************************************
 * jQuery Event Bubbling 방지를 위한 함수.
 * @name stopEventBubbleBrand
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubbleBrand(evt) {
	var eventReference = (typeof evt !== "undefined") ? evt : event;
	//alert(eventReference.stopPropagation);

	if(eventReference.stopPropagation) {
		eventReference.stopPropagation();
	} else {
		eventReference.cancelBubble = true;
	}
}



/************************************************
 * 자동완성 결과 요청
 * @name requestArk
 * @param query 키보드 입력된 문자열
 ************************************************/
function requestArkJsonBrand(query) {
	jQuery.support.cors = true;
	
	cursorPos_brand = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_brand,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert_brand, "target":target_brand, "charset":charset_brand, "query":encodeURIComponent(query), "datatype": datatype_brand},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount_brand = 0;
				totalRwCount_brand = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount_brand = totalCount;
				} else {
					totalRwCount_brand = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount_brand > 0 && totalRwCount_brand > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount_brand + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg_brand" + num + "\" ><a href=\"javascript:onClickKeywordBrand(" + num + ");\" onmouseover=\"onMouseOverKeywordBrand(" + num + ");\" onmouseout=\"onMouseOutKeywordBrand(" + num + ");\" title=\""+item.keywordBrand+"\">";
						str += "&nbsp;&nbsp;" + item.hkeywordBrand + "<span id=\"f_brand" + num + "\" style=display:none;>" + item.keywordBrand + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg_brand" + num + "\" ><a href=\"javascript:onClickKeywordBrand(" + num + ");\" onmouseover=\"onMouseOverKeywordBrand(" + num + ");\" onmouseout=\"onMouseOutKeywordBrand(" + num + ");\" title=\""+item.keywordBrand+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeywordBrand + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordBrand + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg_brand" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeywordBrand(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeywordBrand(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeywordBrand;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordBrand + "</span></li>";


//						str += "<li id=\"bg_brand" + num + "\" onclick=\"onClickKeywordBrand(" + num + ");\" onmouseover=\"onMouseOverKeywordBrand(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeywordBrand(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeywordBrand;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordBrand + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount_brand + totalRwCount_brand) == 0) {
				jQuery("#" + contentListId_brand).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId_brand).html(str);
			}

//			setArkFooterBrand();
			showArkBrand();
		}
    });
}

function requestArkXmlBrand(query) {
	jQuery.support.cors = true;
	
	cursorPos_brand = -1;
	totalFwCount_brand = 0;
	totalRwCount_brand = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_brand,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert_brand, "target":target_brand, "charset":charset_brand, "query":query, "datatype": datatype_brand},
		success: function(data, xhr) {
			var str = "";

			var $resultElementBrand = jQuery(data).find("Response").find("Value");
			var returnCodeBrand = $resultElementBrand.find("Return").text();

			if (returnCodeBrand == 0) {
				if ($resultElementBrand.find("ARKList").size() <= 0) {
					totalFwCount_brand = 0;
				} else {
					var totalCountBrand = $resultElementBrand.find("ARKList").find("TotalCount").text();
					totalFwCount_brand = totalCountBrand;
				}

				if ($resultElementBrand.find("ARKRList").size() <= 0) {
					totalRwCount_brand = 0;
				} else {
					var totalCountBrand = $resultElementBrand.find("ARKRList").find("TotalCount").text();
					totalRwCount_brand = totalCountBrand;
				}

				// ARKList
				$resultElementBrand.find("ARKList").each(function(idxBrand) {
					jQuery(this).find("ARK").each(function(idxBrand) {
						
						var $arkBrand = jQuery(this);
						var hkeywordBrand = $arkBrand.attr("HKeyword");
						var keywordBrand = $arkBrand.attr("keyword");
						var count = $arkBrand.attr("count");
						var type = $arkBrand.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeywordBrand('" + idxBrand + "');\"><span>" + keywordBrand + "</span></a>";
						str += "<li id=\"bg_brand"+ idxBrand +"\" onclick=\"onClickKeywordBrand(" + idxBrand + ");\" onmouseover=\"onMouseOverKeywordBrand(" + idxBrand + ");\"";
						str += " onmouseout=\"onMouseOutKeywordBrand(" + idxBrand + ");\">" + hkeywordBrand;
						str += " <span id=\"f_brand" + idxBrand +"\" style=display:none;>" + keywordBrand + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeywordBrand(" + idxBrand + ");\"><span>" + keywordBrand + "</span></a>";
						//str += "<li>" + keywordBrand + "</li>";
					});
				});

//				if(totalFwCount_brand > 0 && totalRwCount_brand > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElementBrand.find("ARKRList_").each(function(idxBrand) {
					jQuery(this).find("ARK").each(function(iEmp) {
						
						var numsBrand = iEmp + parseInt(totalFwCount_brand);
						var $arkBrand = jQuery(this);
						var hkeywordBrand = $arkBrand.attr("HKeyword");
						var keywordBrand = $arkBrand.attr("keyword");
						var count = $arkBrand.attr("count");
						var type = $arkBrand.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeywordBrand(" + idxBrand + ");\"><span>" + keywordBrand + "</span></a>";
						str += "<li id=\"bg_brand"+ numsBrand +"\" onclick=\"onClickKeywordBrand(" + idxBrand + ");\" onmouseover=\"onMouseOverKeywordBrand(" + numsBrand + ");\"";
						str += " onmouseout=\"onMouseOutKeywordBrand(" + numsBrand + ");\">" + hkeywordBrand;
						str += " <span id=\"f_brand" + numsBrand +"\" style=display:none;>" + keywordBrand + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<li>" + keywordBrand + "</li>";
					});
				});

				if ((totalFwCount_brand + totalRwCount_brand) == 0) {
					jQuery("#" + contentListId_brand).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId_brand).html(str);
				}

				//setArkFooterBrand();
				showArkBrand();
			}
		}
	});
}


var keyword_brand = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydownBrand() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown_brand) {
		return;
	}

	if (keywordBrand != jQuery(queryId_brand).val()) {
		keywordBrand = jQuery(queryId_brand).val();
		if (keywordBrand != "" && isArk_brand) {
			if(datatype_brand == "json") {
				requestArkJsonBrand(jQuery(queryId_brand).val());
			} else if(datatype_brand == "xml") {
				requestArkXmlBrand(jQuery(queryId_brand).val());
			}
		} else {
			hideArkBrand();
		}
	}
	setTimeout("eventKeydownBrand()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEventBrand(event) {
	isKeydown_brand = false;

	if (event.keyCode == 38) {
		if (cursorPos_brand==-1 || cursorPos_brand==0) {
			cursorPos_brand = -1;
			hideArkBrand();
			jQuery(queryId_brand).val(tempQuery_brand);
			tempQuery_brand = "";
		} else {
			onMouseOutKeywordBrand(cursorPos_brand);
			cursorPos_brand = cursorPos_brand - 1;
			onMouseOverKeywordBrand(cursorPos_brand);
			jQuery(queryId_brand).val(jQuery("#f_brand" + cursorPos_brand).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos_brand == -1) {
			tempQuery_brand = jQuery(queryId_brand).val();
		}
		if ((totalFwCount_brand + totalRwCount_brand) > (cursorPos_brand + 1)) {
			onMouseOutKeywordBrand(cursorPos_brand);
			cursorPos_brand = cursorPos_brand + 1;
			onMouseOverKeywordBrand(cursorPos_brand);
			jQuery(queryId_brand).val(jQuery("#f_brand" + cursorPos_brand).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeywordBrand
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeywordBrand(cursorNum) {
	clearCursorPosBrand();
	cursorPos_brand = cursorNum;
	jQuery("#bg_brand" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg_brand" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeywordBrand
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeywordBrand(curSorNum) {
	cursorPos_brand = curSorNum;
	jQuery("#bg_brand" + cursorPos_brand).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPosBrand
 ************************************************/
function clearCursorPosBrand() {
	for(var i=0; i<(totalFwCount_brand + totalRwCount_brand); i++){
		jQuery("#bg_brand" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeywordBrand
 * @param cursorPos_brand 커서의 위치
 ************************************************/
function onClickKeywordBrand(cursorPos_brand) {
   // var searchForm = document.searchTop;
    jQuery(queryId_brand).val(jQuery("#f_brand" + cursorPos_brand).text());
	//searchForm.submit();
    jQuery(arkId_brand).hide();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuideBrand
 ************************************************/
function showArkGuideBrand() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk_brand) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId_brand).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooterBrand
 ************************************************/
function setArkFooterBrand() {
	var str = "";

	if (isArk_brand && jQuery(queryId_brand).val() != "" && (totalFwCount_brand + totalRwCount_brand) > 0 && isListShow_brand) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert_brand == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert_brand == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk_brand) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId_brand).val() != "" && isListShow_brand) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShowBrand(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath_brand +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArkBrand();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow_brand = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArkBrand();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId_brand).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArkBrand
 ************************************************/
function showArkBrand() {
//  if(  jQuery(queryId_brand).val() != ""){
//	    jQuery("#" + wrapId_brand).show();
//	    jQuery("#" + arkUpId_brand).show();
//	    jQuery("#" + arkDownId_brand).hide();
//	}
	jQuery(queryId_brand).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArkBrand
 ************************************************/
function hideArkBrand() {
//	jQuery("#" + wrapId_brand).hide();
//	jQuery("#" + arkUpId_brand).hide();
//	jQuery("#" + arkDownId_brand).show();
//	jQuery(".searchFormbox").removeClass("on");
	jQuery(".autoCompleteBox").hide();
}

/************************************************
 * 도움말 팝업
 * @name openHelp
 ************************************************/
function openHelp() {
	window.open(arkPath_brand + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId_brand).val();

	if (convert == "fw") {
		g_oConvert_brand = "fw";
	} else {
		g_oConvert_brand = "rw";
	}

	if (datatype_brand == "json") {
		requestArkJsonBrand(query);
	} else if (datatype_brand == "xml") {
		requestArkXmlBrand(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId_brand).attr("autocomplete", "on");
	isArk_brand = false;

	var today = new Date();
	var expire_dateBrand = new Date(today.getTime() + 365*60*60*24*1000);
	setCookieBrand("ark_brand", "off", expire_dateBrand);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId_brand).attr("autocomplete", "on");
	isArk_brand = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookieBrand("ark_brand", "on", expireDate);

	var query = jQuery(queryId_brand).val();
	if (query != "") {
		if(datatype_brand == "json") {
			requestArkJsonBrand(query);
		} else if(datatype_brand == "xml") {
			requestArkXmlBrand(query);
		}
		setArkFooterBrand();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookieBrand
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookieBrand(name, value, expire) {
	var expire_dateBrand = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_dateBrand.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookieBrand
 * @param name 쿠키 항목명
 ************************************************/
function getCookieBrand(name) {
	var dcBrand = document.cookie;
	var prefixBrand = name + "=";
	var beginBrand = dcBrand.indexOf("; " + prefixBrand);
	if (beginBrand == -1) {
		beginBrand = dcBrand.indexOf(prefixBrand);
		if (beginBrand != 0) {
			return null;
		}
	} else {
		beginBrand += 2;
	}

	var end = document.cookie.indexOf(";", beginBrand);

	if (end == -1) {
		end = dcBrand.length;
	}

	return unescape(dcBrand.substring(beginBrand + prefixBrand.length, end));
}

/************************************************
 * 폰트 컬러 설정
 * @name showSource
 * @param count 등급 레벨
 ************************************************/
function showSource(count) {
	var color;
	var ret;

	if (count >= 0 && count <= 4) {
		color = "#989898";
	} else {
		color = "#CC6633";
	}

	if (count == 0 || count == 5) {
		ret = "<font style='font-size:11px;font-family:돋움;color:"+color+"'>사전</font>";
	} else if(count == 1 || count == 6) {
		ret = "<font style='font-size:11px;font-family:돋움;color:"+color+"'>일반</font>"; //색인
	} else if(count == 2 || count == 7) {
		ret = "<font style='font-size:11px;font-family:돋움;color:"+color+"'>인기</font>";
	} else if(count == 3 || count == 8) {
		ret = "<font style='font-size:11px;font-family:돋움;color:"+color+"'>테마</font>";
	} else if(count == 4 || count == 9) {
		ret = "<font style='font-size:11px;font-family:돋움;color:"+color+"'>추천</font>";
	} else {
		ret = "";
	}

	return ret;
}

/************************************************
 * 추천어 리스트 우측에 Ranking 이미지 출력
 * @name showRankIcon
 * @param count 랭크 점수
 ************************************************/
function showRankIcon(count) {
	var str;

	if (count >= 0 && count <= 20) {
		str = "<font style=\"font-size:9px;color:#CC6633\">|</font><font style=\"font-size:9px;color:#C0C0C0\">||||</font>";
	} else if(count > 20 && count <= 40) {
		str = "<font style=\"font-size:9px;color:#CC6633\">||</font><font style=\"font-size:9px;color:#C0C0C0\">|||</font>";
	} else if(count > 40 && count <= 60) {
		str = "<font style=\"font-size:9px;color:#CC6633\">|||</font><font style=\"font-size:9px;color:#C0C0C0\">||</font>";
	} else if(count > 60 && count <= 80) {
		str = "<font style=\"font-size:9px;color:#CC6633\">||||</font><font style=\"font-size:9px;color:#C0C0C0\">|</font>";
	} else if(count > 80 && count <= 100) {
		str = "<font style=\"font-size:9px;color:#CC6633\">|||||</font>";
	} else {
		str = "<font style=\"font-size:9px;color:#CC6633\">|||||</font>";
	}

	return str;
}


var preview_brand = "";
var gobj_brand = "";

function attachEvent_brand(obj, evt, fuc, useCapture) {
	if (!useCapture) {
		useCapture = false;
	}

	if (obj.addEventListener) {
		// W3C DOM 지원 브라우저
		return obj.addEventListener(evt,fuc,useCapture);
	} else if (obj.attachEvent) {
		// MSDOM 지원 브라우저
		return obj.attachEvent("on"+evt, fuc);
	} else {
		// NN4 나 IE5mac 등 비 호환 브라우저
		MyAttachEventBrand(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEventBrand(obj,evt) };
	}
}

function detachEvent_brand(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    MyDetachEvent(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEventBrand(obj,evt) };
  }
}

function MyAttachEventBrand(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEventBrand(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShowBrand(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_brand(obj, "mousemove", previewMoveBrand, false);
  attachEvent_brand(obj, "mouseout", previewHideBrand, false);
}

function previewMoveBrand(e) {
  var hb = document.getElementById(preview);
  if(hb.parentElement) {
	  hb.parentElement.style.display="block";
  } else {
	  hb.parentNode.style.display="";
  }
  var evt = e ? e : window.event;
  var posx=0;
  var posy=0;

  if (evt.pageX || evt.pageY) { // pageX/Y 표준 검사
    posx = evt.pageX +8;
    posy = evt.pageY +16;
  } else if (evt.clientX || evt.clientY) { //clientX/Y 표준 검사 Opera
    posx = evt.clientX +10;
    posy = evt.clientY +20;
    if (window.event) { // IE 여부 검사
      posx += document.body.scrollLeft - 80;
      posy += document.body.scrollTop;
     }
  }

  hb.style.left = posx + "px";
  hb.style.top = posy + "px";
}

function previewHideBrand() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_brand(gobj,"mousemove", previewMoveBrand, false);
}

