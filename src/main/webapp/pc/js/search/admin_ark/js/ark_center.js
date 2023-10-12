var g_oConvert_center = "fw";							// 정방향, 역방향 값
var isArk_center = true;								// 자동완성 기능 사용 여부
var isKeydown_center = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow_center = true;
var cursorPos_center = -1;								// 자동완성 커서 위치 값
var queryId_center = "#BU_NAME";							// 검색어 <input> 의 id을 설정한다
var arkId_center = "#centerSearchList";								// 자동완성 전체 <div> 의 id을 설정한다
var contentListId_center = "ark_content_list_center";			// 자동완성 Content List <li> 의 id을 설정한다
var totalFwCount_center = 0;							// 전방 검색 전체 개수
var totalRwCount_center = 0;							// 후방 검색 전체 개수
var target_center = "ark_center";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset_center = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype_center = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath_center = "/info/search/ark";						// 자동완성 경로
var transURL_center = arkPath_center + "/ark_transPopup.do";		// trans 페이지의 URL을 설정한다.
var tempQuery_center = "";
/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect_center = {
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
BrowserDetect_center.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser_center = BrowserDetect_center.browser;
var browserVersion_center = BrowserDetect_center.version;
var os_center = BrowserDetect_center.OS;

//var keyFix = new beta.fix('query');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookieCenter("ark_center")=="off") {
		isArk_center = false;
		jQuery(queryId_center).attr("autocomplete","on");
	} else {
		jQuery(queryId_center).attr("autocomplete","off");
	}

	if (browser_center == "OPERA" || browser_center == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		$(queryId_center).keydown(function(event) {
			var query = jQuery(queryId_center).val();
			$(this).parent().next('.search-list-wrap').hide();

			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArkCenter();
				}
				moveFocusEventCenter(event);
			} else {
				if (jQuery(event.target).is(queryId_center)) {
					isKeydown_center = true;
					eventKeydownCenter();
				}
			}
		});
	} else if (browser_center == "IE" || browser_center == "CHROME" || browser_center == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		$(queryId_center).keyup(function(event) {
			var query = jQuery(queryId_center).val();
			$(this).parent().next('.search-list-wrap').show();

			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}
				*/
				
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArkCenter();
				}
				moveFocusEventCenter(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId_center).html("");
				hideArkCenter();
			} else {
				if (jQuery(event.target).is(queryId_center)) {
					if (isArk_center && jQuery(queryId_center).val() != "") {
						if(datatype_center == "json") {
							requestArkJsonCenter(jQuery(queryId_center).val());
						} else if(datatype_center == "xml") {
							requestArkXmlCenter(jQuery(queryId_center).val());
						}
					} else if (jQuery(queryId_center).val() == "") {
						hideArkCenter();
					}
				}
			}

			showArkCenter();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId_center).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId_center).html(msg);

		jQuery("#" + contentListId_center).html("");
			hideArkCenter();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubbleCenter(event);
		if (false/*jQuery(event.target).is("#" + imgDownId)*/) {
			isListShow_center = false;
			showArkCenter();
			showArkGuideCenter();
			setArkFooterCenter();
		} else if (false/*jQuery(event.target).is("#" + imgUpId)*/) {
			hideArkCenter();
		} else if (jQuery(event.target).is(queryId_center)) {
			if (isArk_center) {
				var query = jQuery(queryId_center).val();
				if (query != "") {
					if(datatype_center == "json") {
						requestArkJsonCenter(jQuery(queryId_center).val());
					} else if(datatype_center == "xml") {
						requestArkXmlCenter(jQuery(queryId_center).val());
					}
					keywordCenter = query;
				}
				isKeydown_center = true;
			}
		} else if (false/*!jQuery(event.target).is("." + wrapId)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArkCenter();
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
 * @name stopEventBubbleCenter
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubbleCenter(evt) {
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
function requestArkJsonCenter(query) {
	jQuery.support.cors = true;
	
	cursorPos_center = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_center,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert_center, "target":target_center, "charset":charset_center, "query":encodeURIComponent(query), "datatype": datatype_center},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount_center = 0;
				totalRwCount_center = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount_center = totalCount;
				} else {
					totalRwCount_center = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount_center > 0 && totalRwCount_center > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount_center + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg_center" + num + "\" ><a href=\"javascript:onClickKeywordCenter(" + num + ");\" onmouseover=\"onMouseOverKeywordCenter(" + num + ");\" onmouseout=\"onMouseOutKeywordCenter(" + num + ");\" title=\""+item.keywordCenter+"\">";
						str += "&nbsp;&nbsp;" + item.hkeywordCenter + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordCenter + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg_center" + num + "\" ><a href=\"javascript:onClickKeywordCenter(" + num + ");\" onmouseover=\"onMouseOverKeywordCenter(" + num + ");\" onmouseout=\"onMouseOutKeywordCenter(" + num + ");\" title=\""+item.keywordCenter+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeywordCenter + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordCenter + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg_center" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeywordCenter(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeywordCenter(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeywordCenter;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordCenter + "</span></li>";


//						str += "<li id=\"bg_center" + num + "\" onclick=\"onClickKeywordCenter(" + num + ");\" onmouseover=\"onMouseOverKeywordCenter(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeywordCenter(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeywordCenter;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordCenter + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount_center + totalRwCount_center) == 0) {
				jQuery("#" + contentListId_center).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId_center).html(str);
			}

//			setArkFooterCenter();
			showArkCenter();
		}
    });
}

function requestArkXmlCenter(query) {
	jQuery.support.cors = true;
	
	cursorPos_center = -1;
	totalFwCount_center = 0;
	totalRwCount_center = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_center,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert_center, "target":target_center, "charset":charset_center, "query":query, "datatype": datatype_center},
		success: function(data, xhr) {
			var str = "";

			var $resultElementCenter = jQuery(data).find("Response").find("Value");
			var returnCodeCenter = $resultElementCenter.find("Return").text();

			if (returnCodeCenter == 0) {
				if ($resultElementCenter.find("ARKList").size() <= 0) {
					totalFwCount_center = 0;
				} else {
					var totalCountCenter = $resultElementCenter.find("ARKList").find("TotalCount").text();
					totalFwCount_center = totalCountCenter;
				}

				if ($resultElementCenter.find("ARKRList").size() <= 0) {
					totalRwCount_center = 0;
				} else {
					var totalCountCenter = $resultElementCenter.find("ARKRList").find("TotalCount").text();
					totalRwCount_center = totalCountCenter;
				}

				// ARKList
				$resultElementCenter.find("ARKList").each(function(idxCenter) {
					jQuery(this).find("ARK").each(function(idxCenter) {
						
						var $arkCenter = jQuery(this);
						var hkeywordCenter = $arkCenter.attr("HKeyword");
						var keywordCenter = $arkCenter.attr("keyword");
						var count = $arkCenter.attr("count");
						var type = $arkCenter.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeywordCenter('" + idxCenter + "');\"><span>" + keywordCenter + "</span></a>";
						str += "<li id=\"bg_center"+ idxCenter +"\" onclick=\"onClickKeywordCenter(" + idxCenter + ");\" onmouseover=\"onMouseOverKeywordCenter(" + idxCenter + ");\"";
						str += " onmouseout=\"onMouseOutKeywordCenter(" + idxCenter + ");\">" + hkeywordCenter;
						str += " <span id=\"f_center" + idxCenter +"\" style=display:none;>" + keywordCenter + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeywordCenter(" + idxCenter + ");\"><span>" + keywordCenter + "</span></a>";
					});
				});

//				if(totalFwCount_center > 0 && totalRwCount_center > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElementCenter.find("ARKRList").each(function(idxCenter) {
					jQuery(this).find("ARK").each(function(i) {
						
						var numsCenter = i + parseInt(totalFwCount_center);
						var $arkCenter = jQuery(this);
						var hkeywordCenter = $arkCenter.attr("HKeyword");
						var keywordCenter = $arkCenter.attr("keyword");
						var count = $arkCenter.attr("count");
						var type = $arkCenter.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeywordCenter(" + idxCenter + ");\"><span>" + keywordCenter + "</span></a>";
						str += "<li id=\"bg_center"+ numsCenter +"\" onclick=\"onClickKeywordCenter(" + idxCenter + ");\" onmouseover=\"onMouseOverKeywordCenter(" + numsCenter + ");\"";
						str += " onmouseout=\"onMouseOutKeywordCenter(" + numsCenter + ");\">" + hkeywordCenter;
						str += " <span id=\"f_center" + numsCenter +"\" style=display:none;>" + keywordCenter + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
					});
				});

				if ((totalFwCount_center + totalRwCount_center) == 0) {
					jQuery("#" + contentListId_center).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId_center).html(str);
				}

				//setArkFooterCenter();
				showArkCenter();
			}
		}
	});
}


var keyword_center = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydownCenter() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown_center) {
		return;
	}

	if (keywordCenter != jQuery(queryId_center).val()) {
		keywordCenter = jQuery(queryId_center).val();
		if (keywordCenter != "" && isArk_center) {
			if(datatype_center == "json") {
				requestArkJsonCenter(jQuery(queryId_center).val());
			} else if(datatype_center == "xml") {
				requestArkXmlCenter(jQuery(queryId_center).val());
			}
		} else {
			hideArkCenter();
		}
	}
	setTimeout("eventKeydownCenter()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEventCenter(event) {
	isKeydown_center = false;

	if (event.keyCode == 38) {
		if (cursorPos_center==-1 || cursorPos_center==0) {
			cursorPos_center = -1;
			hideArkCenter();
			jQuery(queryId_center).val(tempQuery_center);
			tempQuery_center = "";
		} else {
			onMouseOutKeywordCenter(cursorPos_center);
			cursorPos_center = cursorPos_center - 1;
			onMouseOverKeywordCenter(cursorPos_center);
			jQuery(queryId_center).val(jQuery("#f_center" + cursorPos_center).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos_center == -1) {
			tempQuery_center = jQuery(queryId_center).val();
		}
		if ((totalFwCount_center + totalRwCount_center) > (cursorPos_center + 1)) {
			onMouseOutKeywordCenter(cursorPos_center);
			cursorPos_center = cursorPos_center + 1;
			onMouseOverKeywordCenter(cursorPos_center);
			jQuery(queryId_center).val(jQuery("#f_center" + cursorPos_center).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeywordCenter
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeywordCenter(cursorNum) {
	clearCursorPosCenter();
	cursorPos_center = cursorNum;
	jQuery("#bg_center" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg_center" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeywordCenter
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeywordCenter(curSorNum) {
	cursorPos_center = curSorNum;
	jQuery("#bg_center" + cursorPos_center).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPosCenter
 ************************************************/
function clearCursorPosCenter() {
	for(var i=0; i<(totalFwCount_center + totalRwCount_center); i++){
		jQuery("#bg_center" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeywordCenter
 * @param cursorPos_center 커서의 위치
 ************************************************/
function onClickKeywordCenter(cursorPos_center) {
    //var searchForm = document.searchTop;
    jQuery(queryId_center).val(jQuery("#f_center" + cursorPos_center).text());
	//searchForm.submit();
    jQuery(arkId_center).hide();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuideCenter
 ************************************************/
function showArkGuideCenter() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk_center) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId_center).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooterCenter
 ************************************************/
function setArkFooterCenter() {
	var str = "";

	if (isArk_center && jQuery(queryId_center).val() != "" && (totalFwCount_center + totalRwCount_center) > 0 && isListShow_center) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert_center == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert_center == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk_center) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId_center).val() != "" && isListShow_center) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShowCenter(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath_center +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArkCenter();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow_center = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArkCenter();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId_center).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArkCenter
 ************************************************/
function showArkCenter() {
//  if(  jQuery(queryId_center).val() != ""){
//	    jQuery("#" + wrapId).show();
//	    jQuery("#" + arkUpId).show();
//	    jQuery("#" + arkDownId).hide();
//	}
	jQuery(queryId_center).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArkCenter
 ************************************************/
function hideArkCenter() {
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
	window.open(arkPath_center + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId_center).val();

	if (convert == "fw") {
		g_oConvert_center = "fw";
	} else {
		g_oConvert_center = "rw";
	}

	if (datatype_center == "json") {
		requestArkJsonCenter(query);
	} else if (datatype_center == "xml") {
		requestArkXmlCenter(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId_center).attr("autocomplete", "on");
	isArk_center = false;

	var today = new Date();
	var expire_dateCenter = new Date(today.getTime() + 365*60*60*24*1000);
	setCookieCenter("ark_center", "off", expire_dateCenter);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId_center).attr("autocomplete", "on");
	isArk_center = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookieCenter("ark_center", "on", expireDate);

	var query = jQuery(queryId_center).val();
	if (query != "") {
		if(datatype_center == "json") {
			requestArkJsonCenter(query);
		} else if(datatype_center == "xml") {
			requestArkXmlCenter(query);
		}
		setArkFooterCenter();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookieCenter
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookieCenter(name, value, expire) {
	var expire_dateCenter = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_dateCenter.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookieCenter
 * @param name 쿠키 항목명
 ************************************************/
function getCookieCenter(name) {
	var dcCenter = document.cookie;
	var prefixCenter = name + "=";
	var beginCenter = dcCenter.indexOf("; " + prefixCenter);
	if (beginCenter == -1) {
		beginCenter = dcCenter.indexOf(prefixCenter);
		if (beginCenter != 0) {
			return null;
		}
	} else {
		beginCenter += 2;
	}

	var end = document.cookie.indexOf(";", beginCenter);

	if (end == -1) {
		end = dcCenter.length;
	}

	return unescape(dcCenter.substring(beginCenter + prefixCenter.length, end));
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


var preview_center = "";
var gobj_center = "";

function attachEvent_center(obj, evt, fuc, useCapture) {
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
		MyAttachEventCenter(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEventCenter(obj,evt) };
	}
}

function detachEvent_center(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    attachEvent_center(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEventCenter(obj,evt) };
  }
}

function MyAttachEventCenter(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEventCenter(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShowCenter(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_center(obj, "mousemove", previewMoveCenter, false);
  attachEvent_center(obj, "mouseout", previewHideCenter, false);
}

function previewMoveCenter(e) {
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

function previewHideCenter() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_center(gobj,"mousemove", previewMoveCenter, false);
}
