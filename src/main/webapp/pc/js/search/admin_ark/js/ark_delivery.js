var g_oConvert_delivery = "fw";							// 정방향, 역방향 값
var isArk_delivery = true;								// 자동완성 기능 사용 여부
var isKeydown_delivery = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow_delivery = true;
var cursorPos_delivery = -1;								// 자동완성 커서 위치 값
var queryId_delivery = "#KS_NAME";							// 검색어 <input> 의 id을 설정한다
var arkId_delivery = "#delSearchList";								// 자동완성 전체 <div> 의 id을 설정한다
var contentListId_delivery = "ark_content_list_del";			// 자동완성 Content List <li> 의 id을 설정한다
var totalFwCount_delivery = 0;							// 전방 검색 전체 개수
var totalRwCount_delivery = 0;							// 후방 검색 전체 개수
var target_delivery = "ark_delivery";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset_delivery = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype_delivery = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath_delivery = "/info/search/ark_employee";						// 자동완성 경로
var transURL_delivery = arkPath_delivery + "/ark_trans.do";		// trans 페이지의 URL을 설정한다.
var tempQuery_delivery = "";

/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect_delivery = {
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
BrowserDetect_delivery.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser_delivery = BrowserDetect_delivery.browser;
var browserVersion_delivery = BrowserDetect_delivery.version;
var os_delivery = BrowserDetect_delivery.OS;

//var keyFix_delivery = new beta.fix('staff');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookieDelivery("ark_delivery")=="off") {
		isArk_delivery = false;
		jQuery(queryId_delivery).attr("autocomplete","on");
	} else {
		jQuery(queryId_delivery).attr("autocomplete","off");
	}

	if (browser_delivery == "OPERA" || browser_delivery == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		$(queryId_delivery).keydown(function(event) {
			var query = jQuery(queryId_delivery).val();

			$(this).parent().next('.search-list-wrap').hide();
			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArkDelivery();
				}
				moveFocusEventDelivery(event);
			} else {
				if (jQuery(event.target).is(queryId_delivery)) {
					isKeydown_delivery = true;
					eventKeydownDelivery();
				}
			}
		});
	} else if (browser_delivery == "IE" || browser_delivery == "CHROME" || browser_delivery == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		$(queryId_delivery).keyup(function(event) {
			var query = jQuery(queryId_delivery).val();
			
			$(this).parent().next('.search-list-wrap').show();
			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}
				*/
				
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArkDelivery();
				}
				moveFocusEventDelivery(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId_delivery).html("");
				hideArkDelivery();
			} else {
				if (jQuery(event.target).is(queryId_delivery)) {
					if (isArk_delivery && jQuery(queryId_delivery).val() != "") {
						if(datatype_delivery == "json") {
							requestArkJsonDelivery(jQuery(queryId_delivery).val());
						} else if(datatype_delivery == "xml") {
							requestArkXmlDelivery(jQuery(queryId_delivery).val());
						}
					} else if (jQuery(queryId_delivery).val() == "") {
						hideArkDelivery();
					}
				}
			}

			showArkDelivery();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId_delivery).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId_delivery).html(msg);

		jQuery("#" + contentListId_delivery).html("");
			hideArkDelivery();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubbleDelivery(event);
		if (false/*jQuery(event.target).is("#" + imgDownId_delivery)*/) {
			isListShow_delivery = false;
			showArkDelivery();
			showArkGuideDelivery();
			setArkFooterDelivery();
		} else if (false/*jQuery(event.target).is("#" + imgUpId_delivery)*/) {
			hideArkDelivery();
		} else if (jQuery(event.target).is(queryId_delivery)) {
			if (isArk_delivery) {
				var query = jQuery(queryId_delivery).val();
				if (query != "") {
					if(datatype_delivery == "json") {
						requestArkJsonDelivery(jQuery(queryId_delivery).val());
					} else if(datatype_delivery == "xml") {
						requestArkXmlDelivery(jQuery(queryId_delivery).val());
					}
					keywordDelivery = query;
				}
				isKeydown_delivery = true;
			}
		} else if (false/*!jQuery(event.target).is("." + wrapId_delivery)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArkDelivery();
			}
		}
	});

	/*
	jQuery("#" + imgUpId_delivery).hover(
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
 * @name stopEventBubbleDelivery
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubbleDelivery(evt) {
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
function requestArkJsonDelivery(query) {
	jQuery.support.cors = true;
	
	cursorPos_delivery = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_delivery,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert_delivery, "target":target_delivery, "charset":charset_delivery, "query":encodeURIComponent(query), "datatype": datatype_delivery},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount_delivery = 0;
				totalRwCount_delivery = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount_delivery = totalCount;
				} else {
					totalRwCount_delivery = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount_delivery > 0 && totalRwCount_delivery > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount_delivery + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg_delivery" + num + "\" ><a href=\"javascript:onClickKeywordDelivery(" + num + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + num + ");\" onmouseout=\"onMouseOutKeywordDelivery(" + num + ");\" title=\""+item.keywordDelivery+"\">";
						str += "&nbsp;&nbsp;" + item.hkeywordDelivery + "<span id=\"f_delivery" + num + "\" style=display:none;>" + item.keywordDelivery + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg_delivery" + num + "\" ><a href=\"javascript:onClickKeywordDelivery(" + num + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + num + ");\" onmouseout=\"onMouseOutKeywordDelivery(" + num + ");\" title=\""+item.keywordDelivery+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeywordDelivery + "<span id=\"f" + num + "\" style=display:none;>" + item.keywordDelivery + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg_delivery" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeywordDelivery(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeywordDelivery;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordDelivery + "</span></li>";


//						str += "<li id=\"bg_delivery" + num + "\" onclick=\"onClickKeywordDelivery(" + num + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeywordDelivery(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeywordDelivery;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keywordDelivery + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount_delivery + totalRwCount_delivery) == 0) {
				jQuery("#" + contentListId_delivery).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId_delivery).html(str);
			}

//			setArkFooterDelivery();
			showArkDelivery();
		}
    });
}

function requestArkXmlDelivery(query) {
	jQuery.support.cors = true;
	
	cursorPos_delivery = -1;
	totalFwCount_delivery = 0;
	totalRwCount_delivery = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL_delivery,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert_delivery, "target":target_delivery, "charset":charset_delivery, "query":query, "datatype": datatype_delivery},
		success: function(data, xhr) {
			var str = "";

			var $resultElementDelivery = jQuery(data).find("Response").find("Value");
			var returnCodeDelivery = $resultElementDelivery.find("Return").text();

			if (returnCodeDelivery == 0) {
				if ($resultElementDelivery.find("ARKList").size() <= 0) {
					totalFwCount_delivery = 0;
				} else {
					var totalCountDelivery = $resultElementDelivery.find("ARKList").find("TotalCount").text();
					totalFwCount_delivery = totalCountDelivery;
				}

				if ($resultElementDelivery.find("ARKRList").size() <= 0) {
					totalRwCount_delivery = 0;
				} else {
					var totalCountDelivery = $resultElementDelivery.find("ARKRList").find("TotalCount").text();
					totalRwCount_delivery = totalCountDelivery;
				}

				// ARKList
				$resultElementDelivery.find("ARKList").each(function(idxDelivery) {
					jQuery(this).find("ARK").each(function(idxDelivery) {
						
						var $arkDelivery = jQuery(this);
						var hkeywordDelivery = $arkDelivery.attr("HKeyword");
						var keywordDelivery = $arkDelivery.attr("keyword");
						var count = $arkDelivery.attr("count");
						var type = $arkDelivery.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeywordDelivery('" + idxDelivery + "');\"><span>" + keywordDelivery + "</span></a>";
						str += "<li id=\"bg_delivery"+ idxDelivery +"\" onclick=\"onClickKeywordDelivery(" + idxDelivery + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + idxDelivery + ");\"";
						str += " onmouseout=\"onMouseOutKeywordDelivery(" + idxDelivery + ");\">" + hkeywordDelivery;
						str += " <span id=\"f_delivery" + idxDelivery +"\" style=display:none;>" + keywordDelivery + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeywordDelivery(" + idxDelivery + ");\"><span>" + keywordDelivery + "</span></a>";
						//str += "<li>" + keywordDelivery + "</li>";
					});
				});

//				if(totalFwCount_delivery > 0 && totalRwCount_delivery > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElementDelivery.find("ARKRList_").each(function(idxDelivery) {
					jQuery(this).find("ARK").each(function(iEmp) {
						
						var numsDelivery = iEmp + parseInt(totalFwCount_delivery);
						var $arkDelivery = jQuery(this);
						var hkeywordDelivery = $arkDelivery.attr("HKeyword");
						var keywordDelivery = $arkDelivery.attr("keyword");
						var count = $arkDelivery.attr("count");
						var type = $arkDelivery.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeywordDelivery(" + idxDelivery + ");\"><span>" + keywordDelivery + "</span></a>";
						str += "<li id=\"bg_delivery"+ numsDelivery +"\" onclick=\"onClickKeywordDelivery(" + idxDelivery + ");\" onmouseover=\"onMouseOverKeywordDelivery(" + numsDelivery + ");\"";
						str += " onmouseout=\"onMouseOutKeywordDelivery(" + numsDelivery + ");\">" + hkeywordDelivery;
						str += " <span id=\"f_delivery" + numsDelivery +"\" style=display:none;>" + keywordDelivery + "</span></li>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<li>" + keywordDelivery + "</li>";
					});
				});

				if ((totalFwCount_delivery + totalRwCount_delivery) == 0) {
					jQuery("#" + contentListId_delivery).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId_delivery).html(str);
				}

				//setArkFooterDelivery();
				showArkDelivery();
			}
		}
	});
}


var keyword_delivery = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydownDelivery() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown_delivery) {
		return;
	}

	if (keywordDelivery != jQuery(queryId_delivery).val()) {
		keywordDelivery = jQuery(queryId_delivery).val();
		if (keywordDelivery != "" && isArk_delivery) {
			if(datatype_delivery == "json") {
				requestArkJsonDelivery(jQuery(queryId_delivery).val());
			} else if(datatype_delivery == "xml") {
				requestArkXmlDelivery(jQuery(queryId_delivery).val());
			}
		} else {
			hideArkDelivery();
		}
	}
	setTimeout("eventKeydownDelivery()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEventDelivery(event) {
	isKeydown_delivery = false;

	if (event.keyCode == 38) {
		if (cursorPos_delivery==-1 || cursorPos_delivery==0) {
			cursorPos_delivery = -1;
			hideArkDelivery();
			jQuery(queryId_delivery).val(tempQuery_delivery);
			tempQuery_delivery = "";
		} else {
			onMouseOutKeywordDelivery(cursorPos_delivery);
			cursorPos_delivery = cursorPos_delivery - 1;
			onMouseOverKeywordDelivery(cursorPos_delivery);
			jQuery(queryId_delivery).val(jQuery("#f_delivery" + cursorPos_delivery).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos_delivery == -1) {
			tempQuery_delivery = jQuery(queryId_delivery).val();
		}
		if ((totalFwCount_delivery + totalRwCount_delivery) > (cursorPos_delivery + 1)) {
			onMouseOutKeywordDelivery(cursorPos_delivery);
			cursorPos_delivery = cursorPos_delivery + 1;
			onMouseOverKeywordDelivery(cursorPos_delivery);
			jQuery(queryId_delivery).val(jQuery("#f_delivery" + cursorPos_delivery).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeywordDelivery
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeywordDelivery(cursorNum) {
	clearCursorPosDelivery();
	cursorPos_delivery = cursorNum;
	jQuery("#bg_delivery" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg_delivery" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeywordDelivery
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeywordDelivery(curSorNum) {
	cursorPos_delivery = curSorNum;
	jQuery("#bg_delivery" + cursorPos_delivery).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPosDelivery
 ************************************************/
function clearCursorPosDelivery() {
	for(var i=0; i<(totalFwCount_delivery + totalRwCount_delivery); i++){
		jQuery("#bg_delivery" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeywordDelivery
 * @param cursorPos_delivery 커서의 위치
 ************************************************/
function onClickKeywordDelivery(cursorPos_delivery) {
   // var searchForm = document.searchTop;
    jQuery(queryId_delivery).val(jQuery("#f_delivery" + cursorPos_delivery).text());
	//searchForm.submit();
    jQuery(arkId_delivery).hide();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuideDelivery
 ************************************************/
function showArkGuideDelivery() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk_delivery) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId_delivery).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooterDelivery
 ************************************************/
function setArkFooterDelivery() {
	var str = "";

	if (isArk_delivery && jQuery(queryId_delivery).val() != "" && (totalFwCount_delivery + totalRwCount_delivery) > 0 && isListShow_delivery) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert_delivery == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert_delivery == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk_delivery) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId_delivery).val() != "" && isListShow_delivery) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShowDelivery(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath_delivery +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArkDelivery();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow_delivery = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArkDelivery();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId_delivery).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArkDelivery
 ************************************************/
function showArkDelivery() {
//  if(  jQuery(queryId_delivery).val() != ""){
//	    jQuery("#" + wrapId_delivery).show();
//	    jQuery("#" + arkUpId_delivery).show();
//	    jQuery("#" + arkDownId_delivery).hide();
//	}
	jQuery(queryId_delivery).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArkDelivery
 ************************************************/
function hideArkDelivery() {
//	jQuery("#" + wrapId_delivery).hide();
//	jQuery("#" + arkUpId_delivery).hide();
//	jQuery("#" + arkDownId_delivery).show();
//	jQuery(".searchFormbox").removeClass("on");
	jQuery(".autoCompleteBox").hide();
}

/************************************************
 * 도움말 팝업
 * @name openHelp
 ************************************************/
function openHelp() {
	window.open(arkPath_delivery + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId_delivery).val();

	if (convert == "fw") {
		g_oConvert_delivery = "fw";
	} else {
		g_oConvert_delivery = "rw";
	}

	if (datatype_delivery == "json") {
		requestArkJsonDelivery(query);
	} else if (datatype_delivery == "xml") {
		requestArkXmlDelivery(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId_delivery).attr("autocomplete", "on");
	isArk_delivery = false;

	var today = new Date();
	var expire_dateDelivery = new Date(today.getTime() + 365*60*60*24*1000);
	setCookieDelivery("ark_delivery", "off", expire_dateDelivery);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId_delivery).attr("autocomplete", "on");
	isArk_delivery = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookieDelivery("ark_delivery", "on", expireDate);

	var query = jQuery(queryId_delivery).val();
	if (query != "") {
		if(datatype_delivery == "json") {
			requestArkJsonDelivery(query);
		} else if(datatype_delivery == "xml") {
			requestArkXmlDelivery(query);
		}
		setArkFooterDelivery();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookieDelivery
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookieDelivery(name, value, expire) {
	var expire_dateDelivery = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_dateDelivery.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookieDelivery
 * @param name 쿠키 항목명
 ************************************************/
function getCookieDelivery(name) {
	var dcDelivery = document.cookie;
	var prefixDelivery = name + "=";
	var beginDelivery = dcDelivery.indexOf("; " + prefixDelivery);
	if (beginDelivery == -1) {
		beginDelivery = dcDelivery.indexOf(prefixDelivery);
		if (beginDelivery != 0) {
			return null;
		}
	} else {
		beginDelivery += 2;
	}

	var end = document.cookie.indexOf(";", beginDelivery);

	if (end == -1) {
		end = dcDelivery.length;
	}

	return unescape(dcDelivery.substring(beginDelivery + prefixDelivery.length, end));
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


var preview_delivery = "";
var gobj_delivery = "";

function attachEvent_delivery(obj, evt, fuc, useCapture) {
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
		MyAttachEventDelivery(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEventDelivery(obj,evt) };
	}
}

function detachEvent_delivery(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    MyDetachEvent(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEventDelivery(obj,evt) };
  }
}

function MyAttachEventDelivery(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEventDelivery(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShowDelivery(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_delivery(obj, "mousemove", previewMoveDelivery, false);
  attachEvent_delivery(obj, "mouseout", previewHideDelivery, false);
}

function previewMoveDelivery(e) {
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

function previewHideDelivery() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_delivery(gobj,"mousemove", previewMoveDelivery, false);
}

