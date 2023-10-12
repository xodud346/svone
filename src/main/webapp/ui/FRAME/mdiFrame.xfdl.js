(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("topFrame");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1013,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnHome","20","5","38","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_tooltiptext("Home");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_mdi","59","5",null,"35","48",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("35");
            obj.set_cssclass("tab_MDI_Tab");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"10","28","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("Close All");
            obj.set_cssclass("btn_MDI_Allx");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_MDI_Line_01","20","38",null,"2","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Static("menuSubTitle",null,"42","298","17","22",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_verticalAlign("top");
            obj.set_cssclass("PageSubTitle");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("popupmenu00","150","90","90","50",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var popupmenu00_innerdataset = new nexacro.NormalDataset("popupmenu00_innerdataset", obj);
            popupmenu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captioncolumn\">새로고침</Col><Col id=\"levelcolumn\">0</Col><Col id=\"userdatacolumn\">refresh</Col></Row><Row><Col id=\"captioncolumn\">-</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">닫기</Col><Col id=\"levelcolumn\">0</Col><Col id=\"userdatacolumn\">close</Col></Row></Rows>");
            obj.set_innerdataset(popupmenu00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1013,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mdiFrame.xfdl", function() {
        /*******************************************************
          PROJECT NAME : mdi Frame
          CREATION DATES : 2022.1.14
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        	this.fv_arrangeType = "maximize";			//mdi form 상태
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        	this.fn_onLoad = function(obj,e)
        	{
        		//tab_mdi component를 초기화 시킨다.
        		this.tab_mdi.removeTabpage(0);
        	};


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//tab 추가 함수
        	this.cfn_tabInsert = function(sMenuId,sMenuNm){
        		this.tab_mdi.set_enableevent(false);
        		this.tab_mdi.insertTabpage(sMenuId,-1,"",sMenuNm);
        		this.tab_mdi.set_enableevent(true);
        	};

        	//업무 화면 활성화 함수
        	this.cfn_isActiveFrame = function (sWinId,  oArgs) {
        		var nTabIndex = -1;
        		if(this.gfn_isNull(sWinId)){
        			return true;
        		}


        //set_rowposition(nRow);
        		//frame visibe 처리내역 추가(2019.9.5)
        		var oFramesInfo = this.fv_oApp.agv_WorkFrameSet.frames;

        		for ( var i = 0 ; i < oFramesInfo.length ; i++ ) {
        			if(oFramesInfo[i].name == sWinId){
        		//	alert(oFramesInfo[i].arguments.pageUrl);
        				oFramesInfo[i].set_visible(true);
        				nTabIndex = i;
        			} else {
        				oFramesInfo[i].set_visible(false);
        			}
        		}

        		if(oFramesInfo[sWinId]) {
        			var subTitleText = oFramesInfo[sWinId].arguments.pageUrl;
        			if(subTitleText.indexOf("::") > -1 && subTitleText.indexOf(".xfdl") > -1)	subTitleText = subTitleText.split(".xfdl")[0];
        			this.menuSubTitle.set_text(subTitleText);
        			this.fv_oApp.agv_VWorkFrameSet.set_separatesize("60,*,0");
        			this.tab_mdi.set_tabindex(nTabIndex);
        			oFramesInfo[sWinId].setFocus();
        			return true;
        		}
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_onkeydown = function(obj,e)
        	{
        	    var tabIdx = this.tab_mdi.tabindex;

        		if(e.keycode == 188 && e.altkey) {
        			//Alt + < : 좌측으로 탭 이동 기능
        			tabIdx --;
        			if(tabIdx < 0 ) tabIdx = this.tab_mdi.getTabpageCount() - 1;
        			this.tab_mdi.set_tabindex(tabIdx);
        		} else if(e.keycode == 190 && e.altkey) {
        			//Alt + > : 우측으로 탭 이동 기능
        			tabIdx ++;
        			if(tabIdx == this.tab_mdi.getTabpageCount() ) tabIdx = 0;
        			this.tab_mdi.set_tabindex(tabIdx);
        		} else if((e.keycode == 49 && e.altkey) || (e.keycode == 97 && e.altkey)) {
        			//Alt + 1 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(0);
        			}
        		} else if((e.keycode == 50 && e.altkey) || (e.keycode == 98 && e.altkey)) {
        			//Alt + 2 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(1);
        			}
        		} else if((e.keycode == 51 && e.altkey) || (e.keycode == 99 && e.altkey)) {
        			//Alt + 3 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(2);
        			}
        		} else if((e.keycode == 52 && e.altkey) || (e.keycode == 100 && e.altkey)) {
        			//Alt + 4 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(3);
        			}
        		} else if((e.keycode == 53 && e.altkey) || (e.keycode == 101 && e.altkey)) {
        			//Alt + 5 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(4);
        			}
        		} else if((e.keycode == 54 && e.altkey) || (e.keycode == 102 && e.altkey)) {
        			//Alt + 6 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(5);
        			}
        		} else if((e.keycode == 55 && e.altkey) || (e.keycode == 103 && e.altkey)) {
        			//Alt + 7 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(6);
        			}
        		} else if((e.keycode == 56 && e.altkey) || (e.keycode == 104 && e.altkey)) {
        			//Alt + 8 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(7);
        			}
        		} else if((e.keycode == 57 && e.altkey) || (e.keycode == 105 && e.altkey)) {
        			//Alt + 9 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(8);
        			}
        		} else if((e.keycode == 48 && e.altkey) || (e.keycode == 96 && e.altkey)) {
        			//Alt + 0 : 1~0번 탭으로 이동 기능
        			if(this.tab_mdi.getTabpageCount() > 0){
        				this.tab_mdi.set_tabindex(9);
        			}
        		} else if(e.keycode == 46 && e.altkey) {
        			//Alt + DELETE : 현재 탭 닫기 기능
        			if(this.tab_mdi.getTabpageCount() <= 1){
        				var strType = obj.name.replace("btn_", "");
        				this.fn_arrangeWin(strType);
        			} else {
        				this.fn_tabOnClose(this.fv_oApp.agv_WorkFrameSet.frames[this.tab_mdi.tabindex].name);
        			}
        		}

        		this.tab_mdi.setFocus();
        	};


        	/*tab close 함수*/
        	this.fn_tabOnClose = function (sWinId) {
        		var oFrame = this.fv_oApp.agv_WorkFrameSet.frames;
        		var oOpenMenuDs = this.fv_oApp.gds_openMenu;

        		//gdsOpenMenu에서 삭제
        		var nRow = oOpenMenuDs.findRow("WIN_ID", sWinId);
        		var nCloseIdx = nRow;
        		var bSucc  = oOpenMenuDs.deleteRow(nRow);

        		// MDI 탭버튼 삭제
        		if(!this.gfn_isNull(oFrame[sWinId]) && nRow > -1) {
        			var oReturn = this.fv_oApp.agv_WorkFrameSet.removeChild(sWinId);
        			oReturn.destroy();
        			oReturn = null;
        			this.tab_mdi.removeTabpage(nCloseIdx);
        		}


        		if(oFrame.length > 0)	{
        			//window id
        			var sWinId = oOpenMenuDs.getColumn(oOpenMenuDs.rowposition, "WIN_ID");
        			this.cfn_isActiveFrame(sWinId);
        		}else{
        			//변경이후에 main에 포커스를 준다.
        			this.fv_oApp.agv_VWorkFrameSet.set_separatesize("40,0,*");
        			this.fv_oApp.agv_MainFrame.form.setFocus();
        		}
        	};

        	//열려 있는 업무 화면 정렬 및 모두 닫기
        	this.fn_arrangeWin = function(sType) {
        		sType = sType.toLowerCase();

        		// workFrame영역에 open된 childFrame 갯수
        		var nFramesCnt = this.fv_oApp.agv_WorkFrameSet.frames.length;

        		if (this.fv_oApp.gds_openMenu.getRowCount() < 1) return;

        		var bCloseCheck = true;
        		for (var i=0; i < nFramesCnt; i++) {
        			if (this.gfn_isNull(this.fv_oApp.agv_WorkFrameSet.frames[i].form.div_work.form.lookup("fn_close"))) {
        				//trace("fn_close 함수가 없습니다.");
        			} else{
        				if (this.fv_oApp.agv_WorkFrameSet.frames[i].form.div_work.form.fn_close() == false) {
        					bCloseCheck =  false;
        					break;
        				}
        			}
        		}

        		if (bCloseCheck){
        			for (var i = nFramesCnt ; i > 0 ; i--) {
        				this.fn_tabOnClose(this.fv_oApp.agv_WorkFrameSet.frames[i-1].name);
        			}
        		} else {
        			var sMsgId = "confirm.before.movepage";							//메세지ID
        			var aArg = "";													//메세지취환될값 배열[생략가능]
        			var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        			var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        			// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        			this.gfn_alert(sMsgId, aArg, sPopId, sMsgCallback);
        		}
        	};
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//업무 화면 변경 이벤트 함수
        	this.tab_mdi_onchanged = function(obj,e)
        	{

        	    var nRow = this.fv_oApp.gds_openMenu.findRowExpr( "WIN_ID == '" +obj.tabpages[e.postindex].id + "'");

        	    this.fv_oApp.gds_openMenu.set_rowposition(nRow);

        		this.cfn_isActiveFrame(obj.tabpages[e.postindex].id);
        		obj.tabpages[e.postindex];
        	};

        	//업무 창 닫기 이벤트
        	this.tab_mdi_onextrabuttonclick = function(obj,e)
        	{
        		this.fn_tabOnClose(obj.tabpages[e.index].name);
        	};

        	//열려 있는 창 모두 닫기
        	this.btnArrange_onclick = function(obj,e)
        	{
        		var strType = obj.name.replace("btn_", "");
        		this.fn_arrangeWin(strType);
        	};

        	this.btnhome_onclick = function(obj,e)
        	{
        		this.fv_oApp.agv_VWorkFrameSet.set_separatesize("40,0,*");
        	};

        	this.tab_mdi_onsetfocus = function(obj,e)
        	{
        		if(this.tab_mdi.getTabpageCount() > 0){
        			this.fv_oApp.agv_VWorkFrameSet.set_separatesize("60,*,0");
        		} else {
        			this.fv_oApp.agv_VWorkFrameSet.set_separatesize("40,0,*");
        		}
        	};

        // popupmenu에서 항목 선택 시 동작 수행
        this.popupmenu00_onmenuclick = function(obj,e)
        {
        	// 탭 새로고침
        	if(e.userdata == "refresh"){
        		this.fv_oApp.agv_WorkFrameSet.frames[this.tab_mdi.tabindex].form.reload()
        	}

        	// 탭 닫기
        	if(e.userdata == "close"){
        		this.fn_tabOnClose(this.fv_oApp.agv_WorkFrameSet.frames[this.tab_mdi.tabindex].name);
        	}
        };

        // 탭에서 마우스 우클릭 시 popupmenu 노출
        this.tab_mdi_onrbuttonup = function(obj,e)
        {
        	// 탭이 존재 할 경우 popupmenu 노출
        	if(this.tab_mdi.getTabpageCount() > 0){
        		var selectedTabindex = this.getEventTabIndex(e);
        		var currentTabIndex = this.tab_mdi.tabindex;

        		// 현재 활성화 된 탭과 이벤트가 발생한 좌표에 해당하는 탭 인덱스가 다를 경우
        		if(!this.gfn_isNull(selectedTabindex) && selectedTabindex != currentTabIndex) {
        			// 이벤트가 발생한 좌표에 해당하는 탭 활성화
        			this.tab_mdi.set_tabindex(selectedTabindex);

        			// 넥사크로 버그... popupmenu 노출 시 이전에 활성화 된 탭의 mouseout, mouseleave 이벤트 간혈 적으로 동작 안함
        			// 강제로 element의 status 속성 값을 비워 줌
        			var currentTabElName = this.tab_mdi.tabpages[currentTabIndex]._tabbuttonitem._control_element.name;
        			document.getElementById(currentTabElName).setAttribute("status", "");
        		}

        		// 이벤트가 발생한 좌표에 해당하는 탭 인덱스가 존재할 경우 popupmenu 노출
        		if(selectedTabindex != undefined) {
        			this.showPopupmenu({
        				flag : true,			// popupmenu 노출 여부
        				obj : this,				// popupmenu 노출 기준이 되는 객체
        				x : e.clientx - 20,		// popupmenu 노출 좌표 x(마우스 우클릭 위치 - 20)
        				y : e.clienty,			// popupmenu 노출 좌표 y(마우스 우클릭 위치)
        			});
        		}
        	}
        };

        // popupmenu 노출
        this.showPopupmenu = function(popupmenuflag)
        {
        	if(popupmenuflag.flag) {
        		// popupmenu가 이미 노출되어 있을 경우 닫기
        		if(this.popupmenu00.isPopup())	this.popupmenu00.closePopup();
        		this.popupmenu00.trackPopupByComponent(popupmenuflag.obj, popupmenuflag.x, popupmenuflag.y);
        	}
        };

        // 이벤트가 발생한 좌표에 해당하는 탭 인덱스 반환
        this.getEventTabIndex = function(e)
        {
        	var _TabButtonItemControl = {};
        	if(e.fromreferenceobject instanceof nexacro._TabButtonItemControl) {
        		_TabButtonItemControl = e.fromreferenceobject;
        	} else if(e.fromreferenceobject.parent instanceof nexacro._TabButtonItemControl) {
        		_TabButtonItemControl = e.fromreferenceobject.parent;
        	}
        	var _tabindex = _TabButtonItemControl._tabindex;
        	var tabindex = _TabButtonItemControl.tabindex;
        	var _oldtabindex = _TabButtonItemControl._oldtabindex;
        	return _tabindex == undefined ? tabindex : _tabindex;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.btnHome.addEventHandler("onclick",this.btnhome_onclick,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onsetfocus",this.tab_mdi_onsetfocus,this);
            this.tab_mdi.addEventHandler("onrbuttonup",this.tab_mdi_onrbuttonup,this);
            this.btn_closeAll.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.popupmenu00.addEventHandler("onmenuclick",this.popupmenu00_onmenuclick,this);
        };
        this.loadIncludeScript("mdiFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
