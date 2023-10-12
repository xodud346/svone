var g_oConvert_manufacturer = "fw";							// 정방향, 역방향 값
var isArk_manufacturer = true;								// 자동완성 기능 사용 여부
var isKeydown_manufacturer = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow_manufacturer = true;
var cursorPos_manufacturer = -1;								// 자동완성 커서 위치 값
var queryId_manufacturer = "#searchMakerNm";							// 검색어 <input> 의 id을 설정한다
var arkId_manufacturer = "#makerSearchList";								// 자동완성 전체 <div> 의 id을 설정한다
var contentListId_manufacturer = "ark_content_list_maker";			// 자동완성 Content List <li> 의 id을 설정한다
var totalFwCount_manufacturer = 0;							// 전방 검색 전체 개수
var totalRwCount_manufacturer = 0;							// 후방 검색 전체 개수
var target_manufacturer = "ark_manufacturer";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset_manufacturer = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype_manufacturer = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath_manufacturer = "/am/search/ark";						// 자동완성 경로
var transURL_manufacturer = arkPath_manufacturer + "/ark_transPopup.do";		// trans 페이지의 URL을 설정한다.
var tempQuery_manufacturer = "";

/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect_manufacturer = {
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
BrowserDetect_manufacturer.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser_manufacturer = BrowserDetect_manufacturer.browser;
var browserVersion_manufacturer = BrowserDetect_manufacturer.version;
var os_manufacturer = BrowserDetect_manufacturer.OS;

//var keyFix_manufacturer = new beta.fix('staff');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookieManufacturer("ark_manufacturer")=="off") {
		isArk_manufacturer = false;
		jQuery(queryId_manufacturer).attr("autocomplete","on");
	} else {
		jQuery(queryId_manufacturer).attr("autocomplete","off");
	}

	if (browser_manufacturer == "OPERA" || browser_manufacturer == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		$(queryId_manufacturer).keydown(function(event) {
			var query = jQuery(queryId_manufacturer).val();

			$(this).next('.search-list').hide();
			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArkManufacturer();
				}
				moveFocusEventManufacturer(event);
			} else {
				if (jQuery(event.target).is(queryId_manufacturer)) {
					isKeydown_manufacturer = true;
					eventKeydownManufacturer();
				}
			}
		});
	} else if (browser_manufacturer == "IE" || browser_manufacturer == "CHROME" || browser_manufacturer == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		$(queryId_manufacturer).keyup(function(event) {
			var query = jQuery(queryId_manufacturer).val();
			
			$(this).next('.search-list').show();
			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}
				*/
				
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArkManufacturer();
				}
				moveFocusEventManufacturer(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId_manufacturer).html("");
				hideArkManufacturer();
			} else {
				if (jQuery(event.target).is(queryId_manufacturer)) {
					if (isArk_manufacturer && jQuery(queryId_manufacturer).val() != "") {
						if(datatype_manufacturer == "json") {
							requestArkJsonManufacturer(jQuery(queryId_manufacturer).val());
						} else if(datatype_manufacturer == "xml") {
							requestArkXmlManufacturer(jQuery(queryId_manufacturer).val());
						}
					} else if (jQuery(queryId_manufacturer).val() == "") {
						hideArkManufacturer();
					}
				}
			}

			showArkManufacturer();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId_manufacturer).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId_manufacturer).html(msg);

		jQuery("#" + contentListId_manufacturer).html("");
			hideArkManufacturer();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubbleManufacturer(event);
		if (false/*jQuery(event.target).is("#" + imgDownId_manufacturer)*/) {
			isListShow_manufacturer = false;
			showArkManufacturer();
			showArkGuideManufacturer();
			setArkFooterManufacturer();
		} else if (false/*jQuery(event.target).is("#" + imgUpId_manufacturer)*/) {
			hideArkManufacturer();
		} else if (jQuery(event.target).is(queryId_manufacturer)) {
			if (isArk_manufacturer) {
				var query = jQuery(queryId_manufacturer).val();
				if (query != "") {
					if(datatype_manufacturer == "json") {
						requestArkJsonManufacturer(jQuery(queryId_manufacturer).val());
					} else if(datatype_manufacturer == "xml") {
						requestArkXmlManufacturer(jQuery(queryId_manufacturer).val());
					}
					keywordManufacturer = query;
				}
				isKeydown_manufacturer = true;
			}
		} else if (false/*!jQuery(event.target).is("." + wrapId_manufacturer)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArkManufacturer();
			}
		}
	});

	/*
	jQuery("#" + imgUpId_manufacturer).hover(
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
 * @name stopEventBubbleManufacturer
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubbleManufacturer(evt) {
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
function requestArkJsonManufacturer(query) {
	jQuery.support.cors = true;
	
	cursorPos_manufacturer = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_manufacturer,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert_manufacturer, "target":target_manufacturer, "charset":charset_manufacturer, "query":encodeURIComponent(query), "datatype": datatype_manufacturer},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount_manufacturer = 0;
				totalRwCount_manufacturer = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount_manufacturer = totalCount;
				} else {
					totalRwCount_manufacturer = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount_manufacturer > 0 && totalRwCount_manufacturer > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount_manufacturer + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg_manufacturer" + num + "\" ><a href=\"javascript:onClickKeywordManufacturer(" + num + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + num + ");\" onmouseout=\"onMouseOutKeywordManufacturer(" + num + ");\" title=\""+item.keywordManufacturer+"\">";
						str += "&nbsp;&nbsp;" + item.hkeywordManufacturer + "<span id=\"f_manufacturer" + num + "\" style=display:none;>" + item.keywordManufacturer + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg_manufacturer" + num + "\" ><a href=\"javascript:onClickKeywordManufacturer(" + num + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + num + ");\" onmouseout=\"onMouseOutKeywordManufacturer(" + num + ");\" title=\""+item.keywordManufacturer+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeywordManufacturer + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordManufacturer + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg_manufacturer" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeywordManufacturer(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeywordManufacturer;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordManufacturer + "</span></li>";


//						str += "<li id=\"bg_manufacturer" + num + "\" onclick=\"onClickKeywordManufacturer(" + num + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeywordManufacturer(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeywordManufacturer;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordManufacturer + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount_manufacturer + totalRwCount_manufacturer) == 0) {
				jQuery("#" + contentListId_manufacturer).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId_manufacturer).html(str);
			}

//			setArkFooterManufacturer();
			showArkManufacturer();
		}
    });
}

function requestArkXmlManufacturer(query) {
	jQuery.support.cors = true;
	
	cursorPos_manufacturer = -1;
	totalFwCount_manufacturer = 0;
	totalRwCount_manufacturer = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_manufacturer,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert_manufacturer, "target":target_manufacturer, "charset":charset_manufacturer, "query":query, "datatype": datatype_manufacturer},
		success: function(data, xhr) {
			var str = "";

			var $resultElementManufacturer = jQuery(data).find("Response").find("Value");
			var returnCodeManufacturer = $resultElementManufacturer.find("Return").text();

			if (returnCodeManufacturer == 0) {
				if ($resultElementManufacturer.find("ARKList").size() <= 0) {
					totalFwCount_manufacturer = 0;
				} else {
					var totalCountManufacturer = $resultElementManufacturer.find("ARKList").find("TotalCount").text();
					totalFwCount_manufacturer = totalCountManufacturer;
				}

				if ($resultElementManufacturer.find("ARKRList").size() <= 0) {
					totalRwCount_manufacturer = 0;
				} else {
					var totalCountManufacturer = $resultElementManufacturer.find("ARKRList").find("TotalCount").text();
					totalRwCount_manufacturer = totalCountManufacturer;
				}

				// ARKList
				$resultElementManufacturer.find("ARKList").each(function(idxManufacturer) {
					jQuery(this).find("ARK").each(function(idxManufacturer) {
						
						var $arkManufacturer = jQuery(this);
						var hkeywordManufacturer = $arkManufacturer.attr("HKeyword");
						var keywordManufacturer = $arkManufacturer.attr("keyword");
						var count = $arkManufacturer.attr("count");
						var type = $arkManufacturer.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeywordManufacturer('" + idxManufacturer + "');\"><span>" + keywordManufacturer + "</span></a>";
						str += "<li id=\"bg_manufacturer"+ idxManufacturer +"\" onclick=\"onClickKeywordManufacturer(" + idxManufacturer + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + idxManufacturer + ");\"";
						str += " onmouseout=\"onMouseOutKeywordManufacturer(" + idxManufacturer + ");\">" + hkeywordManufacturer;
						str += " <span id=\"f_manufacturer" + idxManufacturer +"\" style=display:none;>" + keywordManufacturer + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeywordManufacturer(" + idxManufacturer + ");\"><span>" + keywordManufacturer + "</span></a>";
						//str += "<li>" + keywordManufacturer + "</li>";
					});
				});

//				if(totalFwCount_manufacturer > 0 && totalRwCount_manufacturer > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElementManufacturer.find("ARKRList_").each(function(idxManufacturer) {
					jQuery(this).find("ARK").each(function(iEmp) {
						
						var numsManufacturer = iEmp + parseInt(totalFwCount_manufacturer);
						var $arkManufacturer = jQuery(this);
						var hkeywordManufacturer = $arkManufacturer.attr("HKeyword");
						var keywordManufacturer = $arkManufacturer.attr("keyword");
						var count = $arkManufacturer.attr("count");
						var type = $arkManufacturer.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeywordManufacturer(" + idxManufacturer + ");\"><span>" + keywordManufacturer + "</span></a>";
						str += "<li id=\"bg_manufacturer"+ numsManufacturer +"\" onclick=\"onClickKeywordManufacturer(" + idxManufacturer + ");\" onmouseover=\"onMouseOverKeywordManufacturer(" + numsManufacturer + ");\"";
						str += " onmouseout=\"onMouseOutKeywordManufacturer(" + numsManufacturer + ");\">" + hkeywordManufacturer;
						str += " <span id=\"f_manufacturer" + numsManufacturer +"\" style=display:none;>" + keywordManufacturer + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<li>" + keywordManufacturer + "</li>";
					});
				});

				if ((totalFwCount_manufacturer + totalRwCount_manufacturer) == 0) {
					jQuery("#" + contentListId_manufacturer).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId_manufacturer).html(str);
				}

				//setArkFooterManufacturer();
				showArkManufacturer();
			}
		}
	});
}


var keyword_manufacturer = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydownManufacturer() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown_manufacturer) {
		return;
	}

	if (keywordManufacturer != jQuery(queryId_manufacturer).val()) {
		keywordManufacturer = jQuery(queryId_manufacturer).val();
		if (keywordManufacturer != "" && isArk_manufacturer) {
			if(datatype_manufacturer == "json") {
				requestArkJsonManufacturer(jQuery(queryId_manufacturer).val());
			} else if(datatype_manufacturer == "xml") {
				requestArkXmlManufacturer(jQuery(queryId_manufacturer).val());
			}
		} else {
			hideArkManufacturer();
		}
	}
	setTimeout("eventKeydownManufacturer()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEventManufacturer(event) {
	isKeydown_manufacturer = false;

	if (event.keyCode == 38) {
		if (cursorPos_manufacturer==-1 || cursorPos_manufacturer==0) {
			cursorPos_manufacturer = -1;
			hideArkManufacturer();
			jQuery(queryId_manufacturer).val(tempQuery_manufacturer);
			tempQuery_manufacturer = "";
		} else {
			onMouseOutKeywordManufacturer(cursorPos_manufacturer);
			cursorPos_manufacturer = cursorPos_manufacturer - 1;
			onMouseOverKeywordManufacturer(cursorPos_manufacturer);
			jQuery(queryId_manufacturer).val(jQuery("#f_manufacturer" + cursorPos_manufacturer).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos_manufacturer == -1) {
			tempQuery_manufacturer = jQuery(queryId_manufacturer).val();
		}
		if ((totalFwCount_manufacturer + totalRwCount_manufacturer) > (cursorPos_manufacturer + 1)) {
			onMouseOutKeywordManufacturer(cursorPos_manufacturer);
			cursorPos_manufacturer = cursorPos_manufacturer + 1;
			onMouseOverKeywordManufacturer(cursorPos_manufacturer);
			jQuery(queryId_manufacturer).val(jQuery("#f_manufacturer" + cursorPos_manufacturer).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeywordManufacturer
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeywordManufacturer(cursorNum) {
	clearCursorPosManufacturer();
	cursorPos_manufacturer = cursorNum;
	jQuery("#bg_manufacturer" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg_manufacturer" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeywordManufacturer
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeywordManufacturer(curSorNum) {
	cursorPos_manufacturer = curSorNum;
	jQuery("#bg_manufacturer" + cursorPos_manufacturer).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPosManufacturer
 ************************************************/
function clearCursorPosManufacturer() {
	for(var i=0; i<(totalFwCount_manufacturer + totalRwCount_manufacturer); i++){
		jQuery("#bg_manufacturer" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeywordManufacturer
 * @param cursorPos_manufacturer 커서의 위치
 ************************************************/
function onClickKeywordManufacturer(cursorPos_manufacturer) {
   // var searchForm = document.searchTop;
    jQuery(queryId_manufacturer).val(jQuery("#f_manufacturer" + cursorPos_manufacturer).text());
	//searchForm.submit();
    jQuery(arkId_manufacturer).hide();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuideManufacturer
 ************************************************/
function showArkGuideManufacturer() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk_manufacturer) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId_manufacturer).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooterManufacturer
 ************************************************/
function setArkFooterManufacturer() {
	var str = "";

	if (isArk_manufacturer && jQuery(queryId_manufacturer).val() != "" && (totalFwCount_manufacturer + totalRwCount_manufacturer) > 0 && isListShow_manufacturer) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert_manufacturer == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert_manufacturer == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk_manufacturer) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId_manufacturer).val() != "" && isListShow_manufacturer) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShowManufacturer(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath_manufacturer +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArkManufacturer();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow_manufacturer = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArkManufacturer();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId_manufacturer).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArkManufacturer
 ************************************************/
function showArkManufacturer() {
//  if(  jQuery(queryId_manufacturer).val() != ""){
//	    jQuery("#" + wrapId_manufacturer).show();
//	    jQuery("#" + arkUpId_manufacturer).show();
//	    jQuery("#" + arkDownId_manufacturer).hide();
//	}
	jQuery(queryId_manufacturer).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArkManufacturer
 ************************************************/
function hideArkManufacturer() {
//	jQuery("#" + wrapId_manufacturer).hide();
//	jQuery("#" + arkUpId_manufacturer).hide();
//	jQuery("#" + arkDownId_manufacturer).show();
//	jQuery(".searchFormbox").removeClass("on");
	jQuery(".autoCompleteBox").hide();
}

/************************************************
 * 도움말 팝업
 * @name openHelp
 ************************************************/
function openHelp() {
	window.open(arkPath_manufacturer + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId_manufacturer).val();

	if (convert == "fw") {
		g_oConvert_manufacturer = "fw";
	} else {
		g_oConvert_manufacturer = "rw";
	}

	if (datatype_manufacturer == "json") {
		requestArkJsonManufacturer(query);
	} else if (datatype_manufacturer == "xml") {
		requestArkXmlManufacturer(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId_manufacturer).attr("autocomplete", "on");
	isArk_manufacturer = false;

	var today = new Date();
	var expire_dateManufacturer = new Date(today.getTime() + 365*60*60*24*1000);
	setCookieManufacturer("ark_manufacturer", "off", expire_dateManufacturer);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId_manufacturer).attr("autocomplete", "on");
	isArk_manufacturer = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookieManufacturer("ark_manufacturer", "on", expireDate);

	var query = jQuery(queryId_manufacturer).val();
	if (query != "") {
		if(datatype_manufacturer == "json") {
			requestArkJsonManufacturer(query);
		} else if(datatype_manufacturer == "xml") {
			requestArkXmlManufacturer(query);
		}
		setArkFooterManufacturer();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookieManufacturer
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookieManufacturer(name, value, expire) {
	var expire_dateManufacturer = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_dateManufacturer.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookieManufacturer
 * @param name 쿠키 항목명
 ************************************************/
function getCookieManufacturer(name) {
	var dcManufacturer = document.cookie;
	var prefixManufacturer = name + "=";
	var beginManufacturer = dcManufacturer.indexOf("; " + prefixManufacturer);
	if (beginManufacturer == -1) {
		beginManufacturer = dcManufacturer.indexOf(prefixManufacturer);
		if (beginManufacturer != 0) {
			return null;
		}
	} else {
		beginManufacturer += 2;
	}

	var end = document.cookie.indexOf(";", beginManufacturer);

	if (end == -1) {
		end = dcManufacturer.length;
	}

	return unescape(dcManufacturer.substring(beginManufacturer + prefixManufacturer.length, end));
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


var preview_manufacturer = "";
var gobj_manufacturer = "";

function attachEvent_manufacturer(obj, evt, fuc, useCapture) {
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
		MyAttachEventManufacturer(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEventManufacturer(obj,evt) };
	}
}

function detachEvent_manufacturer(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    MyDetachEvent(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEventManufacturer(obj,evt) };
  }
}

function MyAttachEventManufacturer(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEventManufacturer(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShowManufacturer(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_manufacturer(obj, "mousemove", previewMoveManufacturer, false);
  attachEvent_manufacturer(obj, "mouseout", previewHideManufacturer, false);
}

function previewMoveManufacturer(e) {
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

function previewHideManufacturer() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_manufacturer(gobj,"mousemove", previewMoveManufacturer, false);
}

