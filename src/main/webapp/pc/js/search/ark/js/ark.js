var g_oConvert = "fw";							// 정방향, 역방향 값
var isArk = true;								// 자동완성 기능 사용 여부
var isKeydown = false;							// 브라우저가 파이어폭스, 오페라일 경우 keydown 사용 여부
var isListShow = true;
var cursorPos = -1;								// 자동완성 커서 위치 값
var formName = "#searchTop";						// 검색 form의 name을 설정한다.
var queryId = "#inp_sh";							// 검색어 <input> 의 id을 설정한다
var arkId = "#ark";								// 자동완성 전체 <div> 의 id을 설정한다
var wrapId = "ark_wrap";						// 자동완성 결과 <div> 의 id을 설정한다
var footerId = "ark_footer";					// 자동완성 Footer <div> 의 id을 설정한다
var contentListId = "ark_content_list";			// 자동완성 Content List <li> 의 id을 설정한다
var imgDownId = "ark_img_down";					// 자동완성 down 이미지 id을 설정한다
var imgUpId = "ark_img_up";						// 자동완성 up 이미지 id을 설정한다
var arkUpId = "ark_up";							// 자동완성 up 이미지 <div> 의 id을 설정한다
var arkDownId = "ark_down";						// 자동완성 down 이미지 <div> 의 id을 설정한다
var totalFwCount = 0;							// 전방 검색 전체 개수
var totalRwCount = 0;							// 후방 검색 전체 개수
var target = "common";								// ARK 웹서버 설정파일의 목록에 있는 추천어 서비스 대상을 지정한다.
var charset = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype = "xml";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)
var arkPath = "/pc/search/ark";						// 자동완성 경로
var transURL = arkPath + "/ark_trans.do";		// trans 페이지의 URL을 설정한다.
var tempQuery = "";

/**
 *  ARK 구성요소의 위치 및 크기를 아래 변수를 통해 조정함.
 */

/**
 * This JavaScript function for Web-Browser detection
 * Date : 2012. 03. 27
 * Name : Beomjun Kim
 */
 /////////////////////////////////////////////////////////////////2013.02.07 browser check start ///////////////////////////
var BrowserDetect = {
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
BrowserDetect.init();

///////////////////////////////////////////////////////////////// browser check end///////////////////////////

var browser = BrowserDetect.browser;
var browserVersion = BrowserDetect.version;
var os = BrowserDetect.OS;


//var keyFix = new beta.fix('query');

jQuery(document).ready(function() {
	// 자동완성 기능 사용 여부 확인 한다.
	if(getCookie("ark")=="off") {
		isArk = false;
		jQuery(queryId).attr("autocomplete","on");
	} else {
		jQuery(queryId).attr("autocomplete","off");
	}

	if (browser == "OPERA" || browser == "FF" ) {
		//alert("oepra:" + $.browser.opera + " / mozilla:" + $.browser.mozilla);
		jQuery(document).keydown(function(event) {
			var query = jQuery(queryId).val();

			if (event.which == 38 || event.which == 40) {
				if (query != "") {
					showArk();
				}
				moveFocusEvent(event);
			} else {
				if (jQuery(event.target).is(queryId)) {
					isKeydown = true;
					eventKeydown();
				}
			}
		});
	} else if (browser == "IE" || browser == "CHROME" || browser == "Mozilla") {
		//alert("msie:" + $.browser.msie + " / webkit:" + $.browser.webkit);
		jQuery(document).keyup(function(event) {
			var query = jQuery(queryId).val();

			if (event.keyCode == 38 || event.keyCode == 40) {
				/*
				if(!jQuery('#fsearch').is(':focus')){
					return;
				}*/
				// 아래(40), 위(38) 방향키 조작시의 이벤트 처리
				if (query != "") {
					showArk();
				}
				moveFocusEvent(event);
			} else if (event.keyCode == 16) {
			} else if (event.keyCode == 8 && query == "") {
				jQuery("#" + contentListId).html("");
				hideArk();
			} else {
				if (jQuery(event.target).is(queryId)) {
					if (isArk && jQuery(queryId).val() != "") {
						if(datatype == "json") {
							requestArkJson(jQuery(queryId).val());
						} else if(datatype == "xml") {
							requestArkXml(jQuery(queryId).val());
						}
					} else if (jQuery(queryId).val() == "") {
						hideArk();
					}
				}
			}

			showArk();
		});
	}

	// Backspace 에 대한 처리
	jQuery(queryId).keyup(function(event) {
		if(event.keyCode == 8 && jQuery(this).val() == "") {
			//var msg = "<li style=\"padding: 0; font-size:11px;\">현재 검색어 &nbsp;<strong>자동추천기능</strong>을 사용하고 있습니다.</li>";
			var msg = "";
			//msg += "<li style=\"padding: 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
			msg += "";
			jQuery("#" + contentListId).html(msg);

		jQuery("#" + contentListId).html("");
			hideArk();
		}
	});

	// 브라우저에서 일어나는 클릭 이벤트를 체크한다.
	jQuery(document).click(function(event) {
		stopEventBubble(event);
		if (jQuery(event.target).is("#" + imgDownId)) {
			isListShow = false;
			showArk();
			showArkGuide();
			setArkFooter();
		} else if (false /*jQuery(event.target).is("#" + imgUpId)*/) {
			hideArk();
		} else if (jQuery(event.target).is(queryId)) {
			if (isArk) {
				var query = jQuery(queryId).val();
				if (query != "") {
					if(datatype == "json") {
						requestArkJson(jQuery(queryId).val());
					} else if(datatype == "xml") {
						requestArkXml(jQuery(queryId).val());
					}
					keyword = query;
				}
				isKeydown = true;
			}
		} else if (false /*!jQuery(event.target).is("." + wrapId)*/) {
			myArray = /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) != null ? /\/([A-Z|a-z]{1,})\.ebs/.exec(document.location) : 'null';
			if(myArray[0] != null && (myArray[0] == '/retrieveTotalSearchList.ebs' || myArray[0] == '/dynaSympathyMain.ebs')){
				hideArk();
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
	);*/
});

/************************************************
 * jQuery Event Bubbling 방지를 위한 함수.
 * @name stopEventBubble
 * @param evt 페이지 이벤트
 ************************************************/
function stopEventBubble(evt) {
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
function requestArkJson(query) {
	jQuery.support.cors = true;
	
	cursorPos = -1;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert, "target":target, "charset":charset, "query":encodeURIComponent(query), "datatype": datatype},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount = 0;
				totalRwCount = 0;
			}

			var str = "";

			jQuery.each(data.result, function(i, result) {
				var totalCount = parseInt(result.totalcount);
				if (i == 0) {
					totalFwCount = totalCount;
				} else {
					totalRwCount = totalCount;
				}

				if (totalCount > 0) {
					// 정방향, 역방향 구분선
//					if (i > 0 && totalFwCount > 0 && totalRwCount > 0) {
//						str += "<li style=\"border-top:1px solid #f3f3f3;\"></li>";
//					}

					// 자동완성 리스트 설정
					jQuery.each(result.items, function(num,item){
						if (i != 0) {
							num = totalFwCount + num;
						}

//						if( num > 4) return;

						str += "<li id=\"bg" + num + "\" ><a href=\"javascript:onClickKeyword(" + num + ");\" onmouseover=\"onMouseOverKeyword(" + num + ");\" onmouseout=\"onMouseOutKeyword(" + num + ");\" title=\""+item.keyword+"\">";
						str += "&nbsp;&nbsp;" + item.hkeyword + "<span id=\"f" + num + "\" style=display:none;>" + item.keyword + "</span></a>";
						str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

//						//<a href="javascript:void(0)"><span>커피믹스</span></a>
						
						
						//str += "<li id=\"bg" + num + "\" ><a href=\"javascript:onClickKeyword(" + num + ");\" onmouseover=\"onMouseOverKeyword(" + num + ");\" onmouseout=\"onMouseOutKeyword(" + num + ");\" title=\""+item.keyword+"\">";
						//str += "&nbsp;&nbsp;" + item.hkeyword + "<span id=\"f" + num + "\" style=display:none;>" + item.keyword + "</span></a></li>";
						//str += "<button type=\"button\" class=\"btn_page_go\" onclick=\"location='"+ item.linkurl +"'\" title=\"바로가기\">바로가기</button></li>";

						
						
						
						//str += "<li id=\"bg" + num + "\" onclick=\"doSearchTop(" + query + ");\" onmouseover=\"onMouseOverKeyword(" + num + ");\"";
						//str += " onmouseout=\"onMouseOutKeyword(" + num + ");\">" + "&nbsp;&nbsp;" + item.hkeyword;
						//str += " <span id=\"f" + num + "\" style=display:none;>" + item.keyword + "</span></li>";


//						str += "<li id=\"bg" + num + "\" onclick=\"onClickKeyword(" + num + ");\" onmouseover=\"onMouseOverKeyword(" + num + ");\"";
//						str += " onmouseout=\"onMouseOutKeyword(" + num + ");\">" + showSource(parseInt(item.type)) + "&nbsp;&nbsp;" + item.hkeyword;
//						str += " <span id=\"f" + num + "\" style=display:none;>" + item.keyword + "</span>";
//						str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(item.count)) + "&nbsp</span></li>";
					});
				}
			});

			if ((totalFwCount + totalRwCount) == 0) {
				jQuery("#" + contentListId).html("<li>해당 단어로 시작하는 검색어가 없습니다.</li>");
			} else {
				jQuery("#" + contentListId).html(str);
			}

//			setArkFooter();
			showArk();
		}
    });
}

function requestArkXml(query) {
	jQuery.support.cors = true;
	
	cursorPos = -1;
	totalFwCount = 0;
	totalRwCount = 0;

	jQuery.ajaxSetup({cache:false});
	jQuery.ajax({
		url: transURL,
		type: "POST",
		dataType: "xml",
		data: {"convert":g_oConvert, "target":target, "charset":charset, "query":query, "datatype": datatype},
		success: function(data, xhr) {
			var str = "";

			var $resultElement = jQuery(data).find("Response").find("Value");
			var returnCode = $resultElement.find("Return").text();

			if (returnCode == 0) {
				if ($resultElement.find("ARKList").size() <= 0) {
					totalFwCount = 0;
				} else {
					var totalCount = $resultElement.find("ARKList").find("TotalCount").text();
					totalFwCount = totalCount;
				}

				if ($resultElement.find("ARKRList").size() <= 0) {
					totalRwCount = 0;
				} else {
					var totalCount = $resultElement.find("ARKRList").find("TotalCount").text();
					totalRwCount = totalCount;
				}

				// ARKList
				$resultElement.find("ARKList").each(function(idx) {
					jQuery(this).find("ARK").each(function(idx) {
						
						var $ark = jQuery(this);
						var hkeyword = $ark.attr("HKeyword");
						var keyword = $ark.attr("keyword");
						var count = $ark.attr("count");
						var type = $ark.attr("type");
						//<a href="javascript:void(0)"><span>커피메이커</span></a>
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeyword('" + idx + "');\"><span>" + keyword + "</span></a>";
						str += "<a id=\"bg"+ idx +"\" onclick=\"onClickKeyword(" + idx + ");\" onmouseover=\"onMouseOverKeyword(" + idx + ");\"";
						str += " onmouseout=\"onMouseOutKeyword(" + idx + ");\">" + hkeyword;
						str += " <span id=\"f" + idx +"\" style=display:none;>" + keyword + "</span></a>";
						
						//str += "<li id=\"bg"+ idx +"\" onclick=\"onClickKeyword(" + idx + ");\" onmouseover=\"onMouseOverKeyword(" + idx + ");\"";
						//str += " onmouseout=\"onMouseOutKeyword(" + idx + ");\">" + hkeyword;
						//str += "<a><span id=\"f" + idx +"\" style=display:none;>" + keyword + "</span></a></li>";
						
						//str += "<a href=\"#\" onclick=\"javascript:onClickKeyword('" + idx + "');\"><span>" + keyword + "</span></a>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
						//str += "<a href=\"#\" onclick=\"onClickKeyword(" + idx + ");\"><span>" + keyword + "</span></a>";
					});
				});

//				if(totalFwCount > 0 && totalRwCount > 0) {
//					str += "<li style=\"border-top:1px solid #f3f3f3; padding:0;\"></li>";
//				}

				// ARKRList
				$resultElement.find("ARKRList").each(function(idx) {
					jQuery(this).find("ARK").each(function(i) {
						
						var nums = i + parseInt(totalFwCount);
						var $ark = jQuery(this);
						var hkeyword = $ark.attr("HKeyword");
						var keyword = $ark.attr("keyword");
						var count = $ark.attr("count");
						var type = $ark.attr("type");
						//str += "<a href=\"#\" onclick=\"onClickKeyword(" + idx + ");\"><span>" + keyword + "</span></a>";
						str += "<a id=\"bg"+ nums +"\" onclick=\"onClickKeyword(" + idx + ");\" onmouseover=\"onMouseOverKeyword(" + nums + ");\"";
						str += " onmouseout=\"onMouseOutKeyword(" + nums + ");\">" + hkeyword;
						str += " <span id=\"f" + nums +"\" style=display:none;>" + keyword + "</span></a>";
						//str += " <span style=\"position:absolute; right:0;\">" + showRankIcon(parseInt(count)) + "&nbsp</span></li>";
					});
				});

				if ((totalFwCount + totalRwCount) == 0) {
					jQuery("#" + contentListId).html("<li style=\"padding:6px 0 6px 10px;\">해당 단어로 시작하는 검색어가 없습니다.</li>");
				} else {
					jQuery("#" + contentListId).html(str);
				}

				//setArkFooter();
				showArk();
			}
		}
	});
}


var keyword = "";

/************************************************
 * 브라우저가 FireFox, Opera 일 경우 한글 입력
 * @name eventKeydown
 ************************************************/
function eventKeydown() {
	// 방향키 이동시 메소드 실행을 중지시킨다.
	if(!isKeydown) {
		return;
	}

	if (keyword != jQuery(queryId).val()) {
		keyword = jQuery(queryId).val();
		if (keyword != "" && isArk) {
			if(datatype == "json") {
				requestArkJson(jQuery(queryId).val());
			} else if(datatype == "xml") {
				requestArkXml(jQuery(queryId).val());
			}
		} else {
			hideArk();
		}
	}
	setTimeout("eventKeydown()", 20);
}


/************************************************
 * 방향키 이벤트 처리
 * @name moveFocusEvent
 * @param event 페이지 이벤트
 ************************************************/
function moveFocusEvent(event) {
	isKeydown = false;

	if (event.keyCode == 38) {
		if (cursorPos==-1 || cursorPos==0) {
			cursorPos = -1;
			hideArk();
			jQuery(queryId).val(tempQuery);
			tempQuery = "";
		} else {
			onMouseOutKeyword(cursorPos);
			cursorPos = cursorPos - 1;
			onMouseOverKeyword(cursorPos);
			jQuery(queryId).val(jQuery("#f" + cursorPos).text());
		}
	} else if (event.keyCode == 40) {
		if(cursorPos == -1) {
			tempQuery = jQuery(queryId).val();
		}
		if ((totalFwCount + totalRwCount) > (cursorPos + 1)) {
			onMouseOutKeyword(cursorPos);
			cursorPos = cursorPos + 1;
			onMouseOverKeyword(cursorPos);
			jQuery(queryId).val(jQuery("#f" + cursorPos).text());
		}
	}
}

/************************************************
 * MouseOver 일 경우 선택한 배경을 설정
 * @name onMouseOverKeyword
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOverKeyword(cursorNum) {
	clearCursorPos();
	cursorPos = cursorNum;
	jQuery("#bg" + cursorNum).css({"backgroundColor" : "#eeeeee"});
	jQuery("#bg" + cursorNum).css({"cursor" : "pointer"});
}

/************************************************
 * MouseOut 일 경우 설정한 배경을 초기화
 * @name onMouseOutKeyword
 * @param cursorNum 커서의 위치 인덱스 값
 ************************************************/
function onMouseOutKeyword(curSorNum) {
	cursorPos = curSorNum;
	jQuery("#bg" + cursorPos).css({"backgroundColor" : "#ffffff"});
}

/************************************************
 * 커서 위치가 변경될 때마다 선택되지 않은 부분 초기화
 * @name clearCursorPos
 ************************************************/
function clearCursorPos() {
	for(var i=0; i<(totalFwCount + totalRwCount); i++){
		jQuery("#bg" + i).css({"backgroundColor" : "#ffffff"});
	}
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeyword
 * @param cursorPos 커서의 위치
 ************************************************/
function onClickKeyword(cursorPos) {
    var searchForm = document.searchTop;
    jQuery(queryId).val(jQuery("#f" + cursorPos).text());
	searchForm.submit();
    
}

/************************************************
 * 자동완성 상태를 설정
 * @name showArkGuide
 ************************************************/
function showArkGuide() {
	var str = "<li style=\"line-height:145%; font-size:11px;\">";

	if (isArk) {
		str += "현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.<br>검색어 입력시 자동으로 관련어를 추천합니다.";
	} else {
		str += "<strong>자동 추천 기능</strong>을 사용해 보세요. <label OnClick=\"setArkOn();\" style=\"cursor:pointer;color:#435fea;text-decoration:underline;\">기능켜기</label><br>검색어 입력시 자동으로 관련어를 추천합니다.";
	}

	str += "</li>";

	jQuery("#" + contentListId).html(str);
}

/************************************************
 * 자동완성 Footer 생성
 * @name setArkFooter
 ************************************************/
function setArkFooter() {
	var str = "";

	if (isArk && jQuery(queryId).val() != "" && (totalFwCount + totalRwCount) > 0 && isListShow) {
		str += "<div class=\"left\" style=\"padding:8px 0 0 5px; color:#888888;\">";

		if (g_oConvert == "fw") {
			str += "<label OnClick=\"onConvert('rw');\" style=\"cursor:pointer;\">끝단어 더보기</label>";
		} else if (g_oConvert == "rw") {
			str += "<label OnClick=\"onConvert('fw');\" style=\"cursor:pointer;\">첫단어 더보기</label>";
		}

		str += "</div>";
	}

	if (isArk) {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\">";

		if (jQuery(queryId).val() != "" && isListShow) {
			//str += "<label id=\"arkOff\" onmouseover=\"previewShow(event, this,'tooltip02');\" OnClick=\"setArkOff();\" style=\"cursor:pointer;\">기능끄기</label>";
			//jQuery("body").append("<span style=\"display:none;\"><div id=\"tooltip02\" style=\"position:absolute;\"><img id=\"tooltipIcon02\" src=\"" + arkPath +"/img/tooltip_02.gif\"/></div></span>");
		} else {
			str += "<label OnClick=\"showArk();\" style=\"cursor:pointer;\">닫기</label>";
			isListShow = true;
		}

		str += "</div>";
	} else {
		str += "<div class=\"right\" style=\"padding:8px 0 0 0; color:#888888;\"><label OnClick=\"showArk();\" style=\"cursor:pointer;\">닫기</label></div>";
	}

	jQuery("#" + footerId).html(str);
}

/************************************************
 * 자동완성 목록을 화면에 보여줌
 * @name showArk
 ************************************************/
function showArk() {
//  if(  jQuery(queryId).val() != ""){
//	    jQuery("#" + wrapId).show();
//	    jQuery("#" + arkUpId).show();
//	    jQuery("#" + arkDownId).hide();
//	}
	jQuery(queryId).parent().parent().find(".autoCompleteBox").show();
//	jQuery(".autoCompleteBox").show();
// 	jQuery(".searchFormbox").addClass("on");
}

/************************************************
 * 자동완성 목록을 화면에서 감춤
 * @name hideArk
 ************************************************/
function hideArk() {
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
	window.open(arkPath + "/help/help_01.html", "도움말", "height=540,width=768,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no");
}

/************************************************
 * 단어 입력 후 정방향/역방향 이미지 버튼 클릭시 이벤트 처리
 * @name onConvert
 * @param convert
 ************************************************/
function onConvert(convert) {
	var query = jQuery(queryId).val();

	if (convert == "fw") {
		g_oConvert = "fw";
	} else {
		g_oConvert = "rw";
	}

	if (datatype == "json") {
		requestArkJson(query);
	} else if (datatype == "xml") {
		requestArkXml(query);
	}

	return;
}

/************************************************
 * 자동완성 기능 끄기
 * @name setArkOff
 ************************************************/
function setArkOff() {
	jQuery(queryId).attr("autocomplete", "on");
	isArk = false;

	var today = new Date();
	var expire_date = new Date(today.getTime() + 365*60*60*24*1000);
	setCookie("ark", "off", expire_date);
}

/************************************************
 * 자동완성 기능 켜기
 * @name setARkOn
 ************************************************/
function setArkOn() {
	jQuery(queryId).attr("autocomplete", "on");
	isArk = true;

	var today = new Date();
	var expireDate = new Date(today.getTime() - 60*60*24*1000);
	setCookie("ark", "on", expireDate);

	var query = jQuery(queryId).val();
	if (query != "") {
		if(datatype == "json") {
			requestArkJson(query);
		} else if(datatype == "xml") {
			requestArkXml(query);
		}
		setArkFooter();
	}
}

/************************************************
 * 쿠키 설정값을 저장
 * @name setCookie
 * @param name 쿠키 항목명
 * @param value 쿠키 항목의 값
 * @param expire 쿠키 만료일자
 ************************************************/
function setCookie(name, value, expire) {
	var expire_date = new Date(expire);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expire_date.toGMTString();
}

/************************************************
 * 쿠키 설정값을 로드
 * @name getCookie
 * @param name 쿠키 항목명
 ************************************************/
function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) {
			return null;
		}
	} else {
		begin += 2;
	}

	var end = document.cookie.indexOf(";", begin);

	if (end == -1) {
		end = dc.length;
	}

	return unescape(dc.substring(begin + prefix.length, end));
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


var preview = "";
var gobj = "";

function attachEvent_(obj, evt, fuc, useCapture) {
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
		MyAttachEvent(obj, evt, fuc);
		obj['on'+evt]=function() { MyFireEvent(obj,evt) };
	}
}

function detachEvent_(obj, evt, fuc, useCapture) {
  if(!useCapture) useCapture=false;
  if(obj.removeEventListener) {
    return obj.removeEventListener(evt,fuc,useCapture);
  } else if(obj.detachEvent) {
    return obj.detachEvent("on"+evt, fuc);
  } else {
    MyDetachEvent(obj, evt, fuc);
    obj['on'+evt]=function() { MyFireEvent(obj,evt) };
  }
}

function MyAttachEvent(obj, evt, fuc) {
  if(!obj.myEvents) obj.myEvents= {};
  if(!obj.myEvents[evt]) obj.myEvents[evt]=[];
  var evts = obj.myEvents[evt];
  evts[evts.length]=fuc;
}

function MyFireEvent(obj, evt) {
  if(!obj.myEvents || !obj.myEvents[evt]) return;
  var evts = obj.myEvents[evt];
  for (var i=0;i<len;i++) {
    len=evts.length;
    evts[i]();
  }
}

function previewShow(e, obj, pv) {
  preview=pv;
  gobj=obj;
  attachEvent_(obj, "mousemove", previewMove, false);
  attachEvent_(obj, "mouseout", previewHide, false);
}

function previewMove(e) {
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

function previewHide() {
  var hb = document.getElementById(preview);
  if(hb.parentElement) hb.parentElement.style.display="none";
  else hb.parentNode.style.display="none";

  detachEvent_(gobj,"mousemove", previewMove, false);
}