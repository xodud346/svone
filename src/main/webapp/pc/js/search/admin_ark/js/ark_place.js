var g_oConvert_place = "fw";							// 정방향, 역방향 값
var isArk_place = true;								// 자동완성 기능 사용 여부
var isKeydown_place = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow_place = true;
var cursorPos_place = -1;								// 자동완성 커서 위치 값
var queryId_place = "#shop";							// 검색어 <input> 의 id을 설정한다
var arkId_place = "#shopSearchList";								// 자동완성 전체 <div> 의 id을 설정한다
var contentListId_place = "ark_content_list_shop";			// 자동완성 Content List <li> 의 id을 설정한다
var totalFwCount_place = 0;							// 전방 검색 전체 개수
var totalRwCount_place = 0;							// 후방 검색 전체 개수
var target_place = "ark_place";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset_place = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype_place = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath_place = "/info/search/ark";						// 자동완성 경로
var transURL_place = arkPath_place + "/ark_transPopup.do";		// trans 페이지의 URL을 설정한다.
var tempQuery_place = "";

/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect_place = {
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
BrowserDetect_place.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser_place = BrowserDetect_place.browser;
var browserVersion_place = BrowserDetect_place.version;
var os_place = BrowserDetect_place.OS;

//var keyFix = new beta.fix('query');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookiePlace("ark_place")=="off") {
		isArk_place = false;
		jQuery(queryId_place).attr("autocomplete","on");
	} else {
		jQuery(queryId_place).attr("autocomplete","off");
	}

	if (browser_place == "OPERA" || browser_place == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		$(queryId_place).keydown(function(event) {
			var query = jQuery(queryId_place).val();
			$(this).parent().next('.search-list-wrap').hide();

			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArkPlace();
				}
				moveFocusEventPlace(event);
			} else {
				if (jQuery(event.target).is(queryId_place)) {
					isKeydown_place = true;
					eventKeydownPlace();
				}
			}
		});
	} else if (browser_place == "IE" || browser_place == "CHROME" || browser_place == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		$(queryId_place).keyup(function(event) {
			var query = jQuery(queryId_place).val();
			$(this).parent().next('.search-list-wrap').show();

			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}
				*/
				
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArkPlace();
				}
				moveFocusEventPlace(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId_place).html("");
				hideArkPlace();
			} else {
				if (jQuery(event.target).is(queryId_place)) {
					if (isArk_place && jQuery(queryId_place).val() != "") {
						if(datatype_place == "json") {
							requestArkJsonPlace(jQuery(queryId_place).val());
						} else if(datatype_place == "xml") {
							requestArkXmlPlace(jQuery(queryId_place).val());
						}
					} else if (jQuery(queryId_place).val() == "") {
						hideArkPlace();
					}
				}
			}

			showArkPlace();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId_place).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId_place).html(msg);

		jQuery("#" + contentListId_place).html("");
			hideArkPlace();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubblePlace(event);
		if (false/*jQuery(event.target).is("#" + imgDownId)*/) {
			isListShow_place = false;
			showArkPlace();
			showArkGuidePlace();
			setArkFooterPlace();
		} else if (false/*jQuery(event.target).is("#" + imgUpId)*/) {
			hideArkPlace();
		} else if (jQuery(event.target).is(queryId_place)) {
			if (isArk_place) {
				var query = jQuery(queryId_place).val();
				if (query != "") {
					if(datatype_place == "json") {
						requestArkJsonPlace(jQuery(queryId_place).val());
					} else if(datatype_place == "xml") {
						requestArkXmlPlace(jQuery(queryId_place).val());
					}
					keywordPlace = query;
				}
				isKeydown_place = true;
			}
		} else if (false/*!jQuery(event.target).is("." + wrapId)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArkPlace();
			}
		}
	});

	/*
	jQuery("#" + imgUpId).hover(
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
 * @name stopEventBubblePlace
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubblePlace(evt) {
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
function requestArkJsonPlace(query) {
	jQuery.support.cors = true;
	
	cursorPos_place = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_place,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert_place, "target":target_place, "charset":charset_place, "query":encodeURIComponent(query), "datatype": datatype_place},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount_place = 0;
				totalRwCount_place = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount_place = totalCount;
				} else {
					totalRwCount_place = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount_place > 0 && totalRwCount_place > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount_place + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg" + num + "\" ><a href=\"javascript:onClickKeywordPlace(" + num + ");\" onmouseover=\"onMouseOverKeywordPlace(" + num + ");\" onmouseout=\"onMouseOutKeywordPlace(" + num + ");\" title=\""+item.keywordPlace+"\">";
						str += "&nbsp;&nbsp;" + item.hkeywordPlace + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordPlace + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg" + num + "\" ><a href=\"javascript:onClickKeywordPlace(" + num + ");\" onmouseover=\"onMouseOverKeywordPlace(" + num + ");\" onmouseout=\"onMouseOutKeywordPlace(" + num + ");\" title=\""+item.keywordPlace+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeywordPlace + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordPlace + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeywordPlace(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeywordPlace(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeywordPlace;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordPlace + "</span></li>";


//						str += "<li id=\"bg" + num + "\" onclick=\"onClickKeywordPlace(" + num + ");\" onmouseover=\"onMouseOverKeywordPlace(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeywordPlace(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeywordPlace;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordPlace + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount_place + totalRwCount_place) == 0) {
				jQuery("#" + contentListId_place).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId_place).html(str);
			}

//			setArkFooterPlace();
			showArkPlace();
		}
    });
}

function requestArkXmlPlace(query) {
	jQuery.support.cors = true;
	
	cursorPos_place = -1;
	totalFwCount_place = 0;
	totalRwCount_place = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_place,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert_place, "target":target_place, "charset":charset_place, "query":query, "datatype": datatype_place},
		success: function(data, xhr) {
			var str = "";

			var $resultElementPlace = jQuery(data).find("Response").find("Value");
			var returnCodePlace = $resultElementPlace.find("Return").text();

			if (returnCodePlace == 0) {
				if ($resultElementPlace.find("ARKList").size() <= 0) {
					totalFwCount_place = 0;
				} else {
					var totalCountPlace = $resultElementPlace.find("ARKList").find("TotalCount").text();
					totalFwCount_place = totalCountPlace;
				}

				if ($resultElementPlace.find("ARKRList").size() <= 0) {
					totalRwCount_place = 0;
				} else {
					var totalCountPlace = $resultElementPlace.find("ARKRList").find("TotalCount").text();
					totalRwCount_place = totalCountPlace;
				}

				// ARKList
				$resultElementPlace.find("ARKList").each(function(idxPlace) {
					jQuery(this).find("ARK").each(function(idxPlace) {
						
						var $arkPlace = jQuery(this);
						var hkeywordPlace = $arkPlace.attr("HKeyword");
						var keywordPlace = $arkPlace.attr("keyword");
						var count = $arkPlace.attr("count");
						var type = $arkPlace.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeywordPlace('" + idxPlace + "');\"><span>" + keywordPlace + "</span></a>";
						str += "<li id=\"bg"+ idxPlace +"\" onclick=\"onClickKeywordPlace(" + idxPlace + ");\" onmouseover=\"onMouseOverKeywordPlace(" + idxPlace + ");\"";
						str += " onmouseout=\"onMouseOutKeywordPlace(" + idxPlace + ");\">" + hkeywordPlace;
						str += " <span id=\"f" + idxPlace +"\" style=display:none;>" + keywordPlace + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeywordPlace(" + idxPlace + ");\"><span>" + keywordPlace + "</span></a>";
					});
				});

//				if(totalFwCount_place > 0 && totalRwCount_place > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElementPlace.find("ARKRList").each(function(idxPlace) {
					jQuery(this).find("ARK").each(function(i) {
						
						var numsPlace = i + parseInt(totalFwCount_place);
						var $arkPlace = jQuery(this);
						var hkeywordPlace = $arkPlace.attr("HKeyword");
						var keywordPlace = $arkPlace.attr("keyword");
						var count = $arkPlace.attr("count");
						var type = $arkPlace.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeywordPlace(" + idxPlace + ");\"><span>" + keywordPlace + "</span></a>";
						str += "<li id=\"bg"+ numsPlace +"\" onclick=\"onClickKeywordPlace(" + idxPlace + ");\" onmouseover=\"onMouseOverKeywordPlace(" + numsPlace + ");\"";
						str += " onmouseout=\"onMouseOutKeywordPlace(" + numsPlace + ");\">" + hkeywordPlace;
						str += " <span id=\"f" + numsPlace +"\" style=display:none;>" + keywordPlace + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
					});
				});

				if ((totalFwCount_place + totalRwCount_place) == 0) {
					jQuery("#" + contentListId_place).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId_place).html(str);
				}

				//setArkFooterPlace();
				showArkPlace();
			}
		}
	});
}


var keyword_place = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydownPlace() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown_place) {
		return;
	}

	if (keywordPlace != jQuery(queryId_place).val()) {
		keywordPlace = jQuery(queryId_place).val();
		if (keywordPlace != "" && isArk_place) {
			if(datatype_place == "json") {
				requestArkJsonPlace(jQuery(queryId_place).val());
			} else if(datatype_place == "xml") {
				requestArkXmlPlace(jQuery(queryId_place).val());
			}
		} else {
			hideArkPlace();
		}
	}
	setTimeout("eventKeydownPlace()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEventPlace(event) {
	isKeydown_place = false;

	if (event.keyCode == 38) {
		if (cursorPos_place==-1 || cursorPos_place==0) {
			cursorPos_place = -1;
			hideArkPlace();
			jQuery(queryId_place).val(tempQuery_place);
			tempQuery_place = "";
		} else {
			onMouseOutKeywordPlace(cursorPos_place);
			cursorPos_place = cursorPos_place - 1;
			onMouseOverKeywordPlace(cursorPos_place);
			jQuery(queryId_place).val(jQuery("#f" + cursorPos_place).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos_place == -1) {
			tempQuery_place = jQuery(queryId_place).val();
		}
		if ((totalFwCount_place + totalRwCount_place) > (cursorPos_place + 1)) {
			onMouseOutKeywordPlace(cursorPos_place);
			cursorPos_place = cursorPos_place + 1;
			onMouseOverKeywordPlace(cursorPos_place);
			jQuery(queryId_place).val(jQuery("#f" + cursorPos_place).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeywordPlace
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeywordPlace(cursorNum) {
	clearCursorPosPlace();
	cursorPos_place = cursorNum;
	jQuery("#bg" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeywordPlace
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeywordPlace(curSorNum) {
	cursorPos_place = curSorNum;
	jQuery("#bg" + cursorPos_place).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPosPlace
 ************************************************/
function clearCursorPosPlace() {
	for(var i=0; i<(totalFwCount_place + totalRwCount_place); i++){
		jQuery("#bg" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeywordPlace
 * @param cursorPos_place 커서의 위치
 ************************************************/
function onClickKeywordPlace(cursorPos_place) {
    //var searchForm = document.searchTop;
    jQuery(queryId_place).val(jQuery("#f" + cursorPos_place).text());
	//searchForm.submit();
    jQuery(arkId_place).hide();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuidePlace
 ************************************************/
function showArkGuidePlace() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk_place) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId_place).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooterPlace
 ************************************************/
function setArkFooterPlace() {
	var str = "";

	if (isArk_place && jQuery(queryId_place).val() != "" && (totalFwCount_place + totalRwCount_place) > 0 && isListShow_place) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert_place == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert_place == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk_place) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId_place).val() != "" && isListShow_place) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShowPlace(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath_place +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArkPlace();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow_place = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArkPlace();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId_place).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArkPlace
 ************************************************/
function showArkPlace() {
//  if(  jQuery(queryId_place).val() != ""){
//	    jQuery("#" + wrapId).show();
//	    jQuery("#" + arkUpId).show();
//	    jQuery("#" + arkDownId).hide();
//	}
	jQuery(queryId_place).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArkPlace
 ************************************************/
function hideArkPlace() {
//	jQuery("#" + wrapId).hide();
//	jQuery("#" + arkUpId).hide();
//	jQuery("#" + arkDownId).show();
//	jQuery(".searchFormbox").removeClass("on");
	jQuery(".autoCompleteBox").hide();
}

/************************************************
 * 도움말 팝업
 * @name openHelp
 ************************************************/
function openHelp() {
	window.open(arkPath_place + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId_place).val();

	if (convert == "fw") {
		g_oConvert_place = "fw";
	} else {
		g_oConvert_place = "rw";
	}

	if (datatype_place == "json") {
		requestArkJsonPlace(query);
	} else if (datatype_place == "xml") {
		requestArkXmlPlace(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId_place).attr("autocomplete", "on");
	isArk_place = false;

	var today = new Date();
	var expire_datePlace = new Date(today.getTime() + 365*60*60*24*1000);
	setCookiePlace("ark_place", "off", expire_datePlace);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId_place).attr("autocomplete", "on");
	isArk_place = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookiePlace("ark_place", "on", expireDate);

	var query = jQuery(queryId_place).val();
	if (query != "") {
		if(datatype_place == "json") {
			requestArkJsonPlace(query);
		} else if(datatype_place == "xml") {
			requestArkXmlPlace(query);
		}
		setArkFooterPlace();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookiePlace
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookiePlace(name, value, expire) {
	var expire_datePlace = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_datePlace.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookiePlace
 * @param name 쿠키 항목명
 ************************************************/
function getCookiePlace(name) {
	var dcPlace = document.cookie;
	var prefixPlace = name + "=";
	var beginPlace = dcPlace.indexOf("; " + prefixPlace);
	if (beginPlace == -1) {
		beginPlace = dcPlace.indexOf(prefixPlace);
		if (beginPlace != 0) {
			return null;
		}
	} else {
		beginPlace += 2;
	}

	var end = document.cookie.indexOf(";", beginPlace);

	if (end == -1) {
		end = dcPlace.length;
	}

	return unescape(dcPlace.substring(beginPlace + prefixPlace.length, end));
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


var preview_place = "";
var gobj_place = "";

function attachEvent_Place(obj, evt, fuc, useCapture) {
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
		MyAttachEventPlace(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEventPlace(obj,evt) };
	}
}

function detachEvent_Place(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    attachEvent_Place(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEventPlace(obj,evt) };
  }
}

function MyAttachEventPlace(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEventPlace(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShowPlace(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_Place(obj, "mousemove", previewMovePlace, false);
  attachEvent_Place(obj, "mouseout", previewHidePlace, false);
}

function previewMovePlace(e) {
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

function previewHidePlace() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_Place(gobj,"mousemove", previewMovePlace, false);
}
