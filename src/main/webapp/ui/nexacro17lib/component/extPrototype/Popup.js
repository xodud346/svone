
var pForm = nexacro.Form.prototype;

/**
 * @class 팝업오픈
 * @param {String} sPopupId	- 팝업ID
 * @param {String} sUrl	 - 팝업URL
 * @param {String} [oArg] - 전달값
 * @param {String} [sPopupCallback] - 팝업콜백
 * @param {Object} [oOption] - 팝업옵션 <br>
 *	oOption.top : 상단 좌표 <br>
 *	oOption.left : 좌측 좌표 <br>
 *	oOption.width : 넓이 <br>
 *	oOption.height : 높이 <br>
 *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow) <br>
 *	oOption.layered : 투명 윈도우 <br>
 *	oOption.opacity : 투명도 <br>
 *	oOption.autosize : autosize <br>
 * @return N/A
 * @example
 * this.gfn_openPopup(this);
 */
pForm.gfn_openPopup = function (sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
    var objApp =  nexacro.getApplication();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var bShowTitle = true;	
	var bShowStatus = false;	
	var sPopupType = "modal";
	var bLayered = false;
	var nOpacity = 100;
	var bAutoSize = false;
	var bResizable = false;
	
	//callback함수(명)을 전달하지 않아도 기본명이 선언되어 있다면 기본명을 사용하도록 기본셋팅
	var sPopupCallback = (this.gfn_isNull(sPopupCallback) && this["fn_popupCallback"]) ? "fn_popupCallback" : sPopupCallback;
				
	var sTitleText = "";
	
	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) {
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "titlebar":
					if (""+oOption[key] == "false")	bShowTitle = false;		
					break;
				case "title":					
					sTitleText = oOption[key];
					break;					
			}	
        }
    }
	
	// 팝업 타이틀
	sTitleText = this.createPopupTitle(sTitleText, sUrl);
	
	var sOpenalign = "";
	if (nLeft == -1 && nTop == -1) 
	{		
		sOpenalign = "center middle";
		if (system.navigatorname == "nexacro") {
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		} else{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft   =  curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	} else {
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}
	
	// modeless를 위해 팝업 Type 및 callBack함수 지정
	if (this.gfn_isNull(oArg) == true) oArg = {};
	oArg["popupType"] = sPopupType;
	oArg["popupId"]   = sPopupId;
	oArg["callback"]  = sPopupCallback;
	
	var objParentFrame = this.getOwnerFrame();
trace("sPopupType ===>"+sPopupType);
    if(sPopupType == "modaless")
    {
        var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize="+bAutoSize+" titletext='"+sTitleText+"'";
		var arrPopFrame = nexacro.getPopupFrames();

		if (arrPopFrame[sPopupId]) {	
			if (system.navigatorname == "nexacro") {
				arrPopFrame[sPopupId].setFocus();
			} else {	
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
		}
		else {
			nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
		}
    }
	else {
		var newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);      //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);         //resizable 안됨
		if(!this.gfn_isNull(sTitleText)) {
			newChild.set_titletext(sTitleText);
		}
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
			
		if (sPopupType == "modalsync")
		{			
			// modalsync 팝업은 return이 없어 gfnClosePopup 함수에서 셋팅한 값으로 리턴처리
			system.showModalSync(newChild, objParentFrame, oArg);
			var rtn = objParentFrame.form["rtnVal"];
			return rtn;
		} else if(sPopupType == "modalwindow") {			
			var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
			return rtn;
		} else {
			//newChild.showModal(objParentFrame, oArg, this, this[sPopupCallback]);
			//2018.10.05 mkn : callback function object도 처리하기위해 그대로 전달함.
			newChild.showModal(objParentFrame, oArg, this, sPopupCallback);
		}
	}
};

/**
 * @class 팝업 타이틀 생성
 * @param {String} pageTitle	- 팝업 타이틀
 * @param {String} pageUrl		- 팝업URL
 * @return {String}	사업장조회(CO_POP::SSP_BO_PP_22)
 * @example
 * var pageTitle = "사업장조회";
 * var pageUrl = "CO_POP::SSP_BO_PP_22.xfdl";
 * this.createPopupTitle(pageTitle, pageUrl);
 */
pForm.createPopupTitle = function(pageTitle, pageUrl) {
	var pagePath = "";
	
	// pageTitle과 pageUrl가 모두 존재하지 않는 경우 빈값 타이틀 반환
	if(this.gfn_isNull(pageTitle) && this.gfn_isNull(pageUrl)) return pagePath;
	
	// pageUrl 값이 존재하며, 'XX::YYY.xfdl' 형태 일 경우 pagePath 생성
	if(!this.gfn_isNull(pageUrl) && pageUrl.indexOf("::") > -1 && pageUrl.toLowerCase().indexOf(".xfdl") > -1) {
		pagePath = pageUrl.split(".")[0];
	}
	
	// pageTitle과 생성된 pagePath가 모두 존재 할 경우 '가나다(XX::YYY)' 형태로 타이틀 반환
	if (!this.gfn_isNull(pageTitle) && !this.gfn_isNull(pagePath)) {
		return pageTitle + "(" + pagePath + ")";
	// pageTitle 만 존재할 경우 pageTitle 타이틀 반환
	} else if (!this.gfn_isNull(pageTitle) && this.gfn_isNull(pagePath)) {
		return pageTitle;
	// pagePath 만 존재할 경우 XX::YYY 형태로 타이틀 반환
	} else if (this.gfn_isNull(pageTitle) && !this.gfn_isNull(pagePath)) {
		return pagePath;
	}
};

/**
 * @description 팝업화면에서 창 닫기
*/
pForm.gfn_closePopup = function(objRtn)
{
	// modalsync 팝업일때 리턴값 전달 시 사용
	this.opener["rtnVal"] = objRtn;
	
	// modeless 팝업일때 부모창의 callBack 함수 실행
	if (this.opener) {		
		var objChild = this.getOwnerFrame();
		
		// 팝업이 modeless 일때
		if (objChild.popupType == "modeless") {
			var sPopupId  = objChild.popupId;
			var sCallBack = objChild.callback;

			// callBack 함수가 있을 때
			if (this.gfn_isNull(sCallBack) == false) {	
				//2018.10.05 mkn : callback 함수object로 파라미터 전달시 바로 호출
				if (typeof(sCallBack) == "function") {
					sCallBack.call(this.opener, sPopupId, objRtn);
				} else {
					this.opener.lookupFunc(sCallBack).call(sPopupId, objRtn);
				}
			}
		}
	}
	
	// 팝업창 닫기
	this.close(objRtn);
};