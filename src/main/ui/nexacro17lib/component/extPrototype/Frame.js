var pForm  = nexacro.Form.prototype;

pForm.FRAME_SYSVER				= "nexacro17";	// 넥사크로 제품구분 nexacro14/nexacro17
pForm.FRAME_MDI_MAX_CNT 		= 15;	 		//열린 메뉴 최대 갯수


/*work form 처음 load시 함수*/
pForm.gfn_formOnLoad = function(oForm) {
	// 키다운 이벤트 추가
	oForm.addEventHandler("onkeyup", this.gfn_onkeyup, this);
	
	//화면설정 함수 체크 및 호출
	if(oForm["cfn_formInit"]){
		oForm["cfn_formInit"]();
	}
	
	// Component 초기화 처리
	this.gfn_initComp(oForm);
	
	// 단축키 이벤트 추가
	oForm.addEventHandler("onkeydown", FormHotKeyInstance.onkeydownFn, this);
	oForm.addEventHandler("onkeyup", FormHotKeyInstance.onkeyupFn, this);
	
	
	var eventSorting = function(oForm, evtId) {
		var listener = oForm[evtId];
		var handlers = listener._user_handlers;
		var _handler = handlers.pop();
		handlers.unshift(_handler);
	};
	
	// onkeydownFn, onkeyupFn 이벤트를 제일 먼저 실행되게 재정렬
	eventSorting(oForm, "onkeydown");
	eventSorting(oForm, "onkeyup");
};

/*form open 시 Component 초기화 처리*/
pForm.gfn_initComp = function(oForm) {
	var aComponent = oForm.components;
	var nLength = aComponent.length;

	for (var i=0; i<nLength; i++) {
		if (aComponent[i] instanceof nexacro.Div) {
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfn_isNull(aComponent[i].url)){
				this.gfn_initComp(aComponent[i].form);
			}
		} else if (aComponent[i] instanceof nexacro.Tab) {
			var nPages = aComponent[i].tabpages.length;
			
			for (var j=0; j<nPages;j++)	{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfn_isNull(aComponent[i].tabpages[j].url)) this.gfn_initComp(aComponent[i].tabpages[j].form);
			}
		} else {
			// Grid 처리
			if (aComponent[i] instanceof nexacro.Grid) {
				this.gfn_setGrid(aComponent[i]);
			} else if (aComponent[i] instanceof nexacro.Combo)	{
				
			} else if (aComponent[i] instanceof nexacro.Edit)	{

			} else if (aComponent[i] instanceof nexacro.Calendar)	{
			
			} else if (aComponent[i] instanceof nexacro.Static)	{

				if(!this.gfn_isNull(aComponent[i].uEssentiel) && aComponent[i].uEssentiel =="true"){

					aComponent[i].set_usedecorate(true);

					var sText = aComponent[i].text;

					sText = sText + " <fc v='red'>*</fc>";

					aComponent[i].set_text(sText);

				}

			}
		}
	}
};

/*form 에서 공통으로 추가될 keyup 이벤트*/
pForm.gfn_onkeyup = function(obj, e)
{
    var oApp  = nexacro.getApplication()
	
	//trace("e.altkey : " + e.altkey + " / e.keycode : " + e.keycode);
	
	if (e.ctrlkey && e.altkey && e.keycode == 81)
	{
	    // 디버그 창 : Altley + Ctrl + Q 
		e.stopPropagation();
		
		// 운영환경에서는 실행 방지
		//if (nexacro.getEnvironmentVariable("evRunMode") == "prod") return;
		
		// 모바일은 별도로 띄운다.
		var oApp = nexacro.getApplication(); 
		if ( oApp.id == "Application_Mobile" ) {
 			//var oArg = {};
 			//var oOption = {popuptype:"modaless", title:"디버그", width:1400, height:900};	
		} else {
			var sUrl = "FRAME::DebugPop.xfdl";
			var oArg = {};
			var oOption = {popuptype:"modaless", title:"디버그", width:1080, height:703};

			this.gfn_openPopup("DebugPopUp",sUrl,oArg,"gfn_debugPopUp",oOption);
		}
	} else if(e.keycode == 188 && e.altkey) {
		//altkey + < : 좌측으로 탭 이동 기능
		var tabIdx = oApp.agv_MdiFrame.form.tab_mdi.tabindex;
		tabIdx --;
		if(tabIdx < 0 ) tabIdx = oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() - 1;
		oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(tabIdx);
	} else if(e.keycode == 190 && e.altkey) {
		//altkey + > : 우측으로 탭 이동 기능			
		var tabIdx = oApp.agv_MdiFrame.form.tab_mdi.tabindex;
		tabIdx ++;
		if(tabIdx == oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount()) tabIdx = 0;
		oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(tabIdx);
	} else if((e.keycode == 49 && e.altkey) || (e.keycode == 97 && e.altkey)) {
		//Alt + 1 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(0);
		}
	} else if((e.keycode == 50 && e.altkey) || (e.keycode == 98 && e.altkey)) {
		//Alt + 2 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(1);
		}
	} else if((e.keycode == 51 && e.altkey) || (e.keycode == 99 && e.altkey)) {
		//Alt + 3 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(2);
		}
	} else if((e.keycode == 52 && e.altkey) || (e.keycode == 100 && e.altkey)) {
		//Alt + 4 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(3);
		}
	} else if((e.keycode == 53 && e.altkey) || (e.keycode == 101 && e.altkey)) {
		//Alt + 5 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(4);
		}
	} else if((e.keycode == 54 && e.altkey) || (e.keycode == 102 && e.altkey)) {
		//Alt + 6 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(5);
		}
	} else if((e.keycode == 55 && e.altkey) || (e.keycode == 103 && e.altkey)) {
		//Alt + 7 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(6);
		}
	} else if((e.keycode == 56 && e.altkey) || (e.keycode == 104 && e.altkey)) {
		//Alt + 8 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(7);
		}
	} else if((e.keycode == 57 && e.altkey) || (e.keycode == 105 && e.altkey)) {
		//Alt + 9 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(8);
		}
	} else if((e.keycode == 48 && e.altkey) || (e.keycode == 96 && e.altkey)) {
		//Alt + 0 : 1~0번 탭으로 이동 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() > 0){
			oApp.agv_MdiFrame.form.tab_mdi.set_tabindex(9);
		}
	} else if(e.keycode == 46 && e.altkey) {
		//Alt + DELETE: 현재 탭 닫기 기능			
		if(oApp.agv_MdiFrame.form.tab_mdi.getTabpageCount() <= 1){
			var strType = obj.name.replace("btn_", "");
			oApp.agv_MdiFrame.form.fn_arrangeWin(strType);
		} else {
			oApp.agv_MdiFrame.form.fn_tabOnClose(oApp.agv_WorkFrameSet.frames[oApp.agv_MdiFrame.form.tab_mdi.tabindex].name);
		}			
	}
};

pForm.gfn_debugPopUp = function(){

};

/*업무 화면 활성화/생성 함수*/
pForm.gfn_menuOpen = function(sMenuId, oArgs){
	var oApp  = nexacro.getApplication()
	var oGdsOpen = oApp.gds_openMenu;				//열린 	  dataset	
	var oGdsMenu = oApp.gds_menu;
	var sWinId = "";
	
	//열린 화면이 있는지 체크 하는 Logic
	var nFindRow = oGdsOpen.findRow("MNU_LVL_SPR_CD",sMenuId);
	if(nFindRow >= 0){
		sWinId = oGdsOpen.getColumn(nFindRow,"WIN_ID");
		oApp.agv_MdiFrame.form.cfn_isActiveFrame(sWinId, oArgs);
		return;
	}
	
	//열린화면 갯수 체크( application.gvMax = 15)	
	if( this.FRAME_MDI_MAX_CNT <= oGdsOpen.getRowCount() ){
		          
		alert(this.FRAME_MDI_MAX_CNT +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	this.gfn_newMdi(sMenuId, oArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Object} oArgs - arguments
 * @return N/A
 */
pForm.gfn_newMdi = function(sMenuId, oArgs)
{	
	var oApp   = nexacro.getApplication()
	var oGdsOpen  = oApp.gds_openMenu;		//열린 dataset
	var oGdsMenu  = oApp.gds_menu;
	var sWinId    = "win" + sMenuId; // + "_" + oGdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);
	
	var nFindRow = oGdsMenu.findRow("MNU_LVL_SPR_CD",sMenuId);
	var sMenuNm  = oGdsMenu.getColumn(nFindRow,"MNU_NM");
	var sPageUrl = "";
	if(!this.gfn_isNull(oGdsMenu.getColumn(nFindRow, "PGM_PATH"))){
		sPageUrl = oGdsMenu.getColumn(nFindRow, "PGM_PATH");
	}	
// 	if(!this.gfn_isNull(oGdsMenu.getColumn(nFindRow, "PGM_PATH")) && !this.gfn_isNull(oGdsMenu.getColumn(nFindRow, "PGM_URL"))){
// 		sPageUrl = oGdsMenu.getColumn(nFindRow, "PGM_PATH") + "::" + oGdsMenu.getColumn(nFindRow, "PGM_URL");
// 	}
	

	// 화면 loading 시간 측정
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	oApp.nStartTime = nStartTime;
	oApp.sStartDate = sStartDate;
//	if(this.gfn_isNull(sPageUrl)) return;		//pageURl 이 없으면 return
	
	this.gfn_setOpenMenuDs(sWinId, sMenuId);	// 열린메뉴 화면 삽입
	var oNewWin = new ChildFrame;
	oNewWin.init(sWinId, 0, 0, oApp.agv_WorkFrameSet.getOffsetWidth() - 0, oApp.agv_WorkFrameSet.getOffsetHeight() - 0);
	oApp.agv_WorkFrameSet.addChild(sWinId, oNewWin);

	//objNewWin.set_tooltiptext(sWinId);
	oNewWin.arguments = [];
	oNewWin.set_dragmovetype("all");
	oNewWin.set_showtitlebar(false);
	oNewWin.set_resizable(true);
	oNewWin.set_openstatus("maximize");
	oNewWin.set_titletext(sMenuNm);
	oNewWin.set_showcascadetitletext(false);
	oNewWin.arguments["winKey"] = sWinId;
	oNewWin.arguments["menuId"] = sMenuId;
	oNewWin.arguments["menuNm"] = sMenuNm;
	oNewWin.arguments["pageUrl"] = sPageUrl;
	oNewWin.arguments["oArgs"] = oArgs;
	oNewWin.set_formurl("FRAME::workFrame.xfdl");

//	oApp.gvMdiFrame.form.fnAddTab(sWinId, sMenuNm);   //mdi tab button add	
	oApp.agv_MdiFrame.form.cfn_tabInsert(sWinId, sMenuNm);   //mdi tab button add	
	
	oApp.agv_MdiFrame.form.cfn_isActiveFrame(sWinId);
	
	oNewWin.show();	
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} sWinId
 * @param {String} menuId
 * @return N/A
 */
pForm.gfn_setOpenMenuDs = function(sWinId, sMenuId)
{
	var oApp  = nexacro.getApplication()
	var oGdsOpen = oApp.gds_openMenu ;  //열린 dataset
	var nRow = oGdsOpen.addRow();
	oGdsOpen.setColumn(nRow, "WIN_ID", sWinId);
	oGdsOpen.setColumn(nRow, "MNU_LVL_SPR_CD", sMenuId);
};

//menu navigate 생성 함수
pForm.gfn_getNavigation = function(sMenuId){
	var oMenuDs = nexacro.getApplication().gds_menu;
	var nFindRow = oMenuDs.findRow("MNU_LVL_SPR_CD",sMenuId);
	var nLevel = oMenuDs.getColumn(nFindRow,"MENU_LVL");
	var sNavigate = oMenuDs.getColumn(nFindRow,"MNU_NM");
	var sUpMenuId = oMenuDs.getColumn(nFindRow,"HGST_MNU_SEQ");
	for(var i = 1 ; i < nLevel ; i++){
		nFindRow = oMenuDs.findRow("SRT_SO",sUpMenuId);
		sNavigate = oMenuDs.getColumn(nFindRow,"MNU_NM") +" > " + sNavigate;
		sUpMenuId = oMenuDs.getColumn(nFindRow,"HGST_MNU_SEQ");
	}
	return sNavigate;
};

//work frame의 div_work를 찾아 주는 함수
pForm.gfn_getDivWork = function(oComponent){
	var oRet = null;
	var oParentComp = oComponent.parent;
	for(var i = 0 ; i < 15 ; i++){
		if(oParentComp.name == "div_work"){
			oRet = oParentComp;
			break;
		}
		oParentComp = oParentComp.parent;
	}
	return oRet;
}


//open 화면에서 page 정보를 찾아 주는 함수
pForm.gfn_getPageInfo = function(sInfo){
	var sReturn = undefined;  // trace(' >> '+ sInfo);
	// [2022-05-30] 박성근 NRT에서 실행시 오류발생 후 그리드에 데이터 표시가 안되어 try 문 붙힘
	try { sReturn = this.getOwnerFrame().arguments[sInfo]; } catch(e) {}
	
	return sReturn;
}


// 단축키 설정
pForm.gfn_initFormHotKey = function(hotkeyFnInfo) {
	var pageUrl = this._orgurl;
	// var pageUrl = this.gfn_isNull(this.gfn_getPageInfo("pageUrl")) ? this.getOwnerFrame().formurl : this.gfn_getPageInfo("pageUrl");
	
	var keyFnMappings = [];
	for(var key in hotkeyFnInfo) {
		var hotkeyCode;
		var fnName = hotkeyFnInfo[key];
		if(this.gfn_isNull(key) || this.gfn_isNull(fnName))	continue;
		var keyInfo = key.split("_");
		var shiftFlag = false;
		var ctrlFlag = false;
		var altFlag = false;
		var combinationFlag = false;
		switch(keyInfo[0].toUpperCase()) {
			case "SHIFT" : shiftFlag = true; break;
			case "CTRL" : ctrlFlag = true; break;
			case "ALT" : altFlag = true; break;
		}
		if(shiftFlag || ctrlFlag || altFlag)	combinationFlag = true;
		
		var keyIndex = 0;
		if(combinationFlag)	keyIndex = 1;
		switch(keyInfo[keyIndex].toUpperCase()) {
			case "ESC" : hotkeyCode = 27; break;
			case "ENTER" : hotkeyCode = 13; break;
			case "A" : hotkeyCode = 65; break;
			case "S" : hotkeyCode = 83; break;
			case "D" : hotkeyCode = 68; break;
			default: continue;
		}
		
		keyFnMappings.push({
			fnName : fnName,
			hotkeyCode : hotkeyCode,
			shiftFlag : shiftFlag,
			ctrlFlag : ctrlFlag,
			altFlag : altFlag,
		});
	}
	
	if(keyFnMappings.length > 0) setFormHotKey(pageUrl, keyFnMappings);
};

var setFormHotKey = function(pageUrl, options) {
	if(window["SSP_HOTKEY"] == undefined)	window["SSP_HOTKEY"] = {};
	if(window["SSP_HOTKEY"][pageUrl] == undefined)	window["SSP_HOTKEY"][pageUrl] = {};
	window["SSP_HOTKEY"][pageUrl].keyFnMappings = options;
};

var FormHotKeyInstance = {
	findOption : function(obj, e) {
		var pageUrl = this._orgurl;
		if(this.gfn_isNull(pageUrl))	return;
	
		if(window["SSP_HOTKEY"] == undefined)	return;
		var formOptions = window["SSP_HOTKEY"][pageUrl];
		if(window["SSP_HOTKEY"][pageUrl] == undefined)	return;
		var options = formOptions.keyFnMappings;
		for(var index in options) {
			var option = options[index];
			if(e.keycode == option.hotkeyCode && e.shiftkey == option.shiftFlag && e.ctrlkey == option.ctrlFlag && e.altkey == option.altFlag) {
				if (this[option.fnName]) return option;
			}
		}
	}
	, isOnlyESC : function(e) {
		return e.keycode == 27 && e.shiftkey == false && e.ctrlkey == false && e.altkey == false;
	}
	, isOnlyCTRL : function(e) {
		return e.shiftkey == false && e.ctrlkey == true && e.altkey == false;
	}
	, isOnlyALT : function(e) {
		return e.shiftkey == false && e.ctrlkey == false && e.altkey == true;
	}
	, isOnlySHIFT : function(e) {
		return e.shiftkey == true && e.ctrlkey == false && e.altkey == false;
	}
	, onkeydownFn : function(obj, e) {
		if(FormHotKeyInstance.isOnlyCTRL(e) && e.keycode == 83) {
			// e: nexacro Event, event: window.event
			// CTRL+S 브라우저 기본 동작 막음
			e.preventDefault();
			event.preventDefault();
		} else if(FormHotKeyInstance.isOnlyESC(e)) {
			// alert 메시지에서 ESC 키를 눌러 닫을 경우 onkeyup 이벤트만 발생함
			// onkeyup 이벤트에서 페이지 내에서 ESC 키 이벤트 발생인지, alert에서 ESC 키 이벤트 발생인지 판별하기 위한 플래그
			this.SSP_ESC_FLAG = true;
			
			// 모든 이벤트 막음
			e.stopPropagation();
			e.preventDefault();
			event.preventDefault();
			event.stopPropagation();
			var _window = this._getWindow();
			_window._keydown_element = this;
			_window._keydown_element_list.clear();
		}
	
		var option = FormHotKeyInstance.findOption.call(this, obj, e);
		if(!this.gfn_isNull(option)) {
			if((e.keycode == 65 || e.keycode == 83 || e.keycode == 68 ) && FormHotKeyInstance.isOnlySHIFT(e)) {
				// SHIFT+A/S/D 단축키가 등록되어 있을 경우, 포커스를 제거(ex: input의 경우 대문자 'S'가 입력 된 후 이벤트 실행됨)
				document.activeElement.blur();
			}
			e.preventDefault();
			e.stopPropagation();
		}
		trace("FormHotKeyInstance.onkeydownFn");
	}
	, onkeyupFn : function(obj, e) {
		var escFlag = this.SSP_ESC_FLAG;
		delete this.SSP_ESC_FLAG;
				
		if(e.fromobject instanceof nexacro.Button && e.keycode == 13) {
			// 이벤트 발생 오브젝트가 버튼이며, 엔터키(keycode:13)/스페이스키(keycode:32) 일 경우 넥사크로에서 클릭 이벤트를 발생 시킴
			// 엔터키 일 경우 클릭 이벤트 동작 방지
			var _window = this._getWindow();
			_window._keydown_element = this;
			_window._keydown_element_list.clear();
		}
		
		var option = FormHotKeyInstance.findOption.call(this, obj, e);
		if(!this.gfn_isNull(option)) {
			e.preventDefault();
			e.stopPropagation();
			event.preventDefault();
			event.stopPropagation();
			
			// onkeydownFn을 통해서 onkeyupFn가 실행 될 경우 escFlag == true
			if(FormHotKeyInstance.isOnlyESC(e) && escFlag != true) return;
			
			this.lookupFunc(option.fnName).call(obj, e);
			trace("FormHotKeyInstance.onkeyupFn");
		} else if(FormHotKeyInstance.isOnlyESC(e)) {
			e.preventDefault();
			e.stopPropagation();
			event.preventDefault();
			event.stopPropagation();
			
			// 페이지 내에서 ESC 키 이벤트 발생 시 
			// onkeydownFn을 통해서 onkeyupFn가 실행 될 경우 escFlag == true
			// 일반적인 바닥페이지(목록 페이지)가 탭으로 구성되었을 경우 제외
			var _rootFormName = this._getRootForm().name;
			if(escFlag == true && _rootFormName != 'workPage')	this._getRootForm().close();
			else throw "ESC event stop";	// 강제로 다음 이벤트 실행을 막는다
		}
	}
};

