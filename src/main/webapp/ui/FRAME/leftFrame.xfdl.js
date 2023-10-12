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
            if (Form == this.constructor)
            {
                this._setFormPosition(200,902);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_favorite", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"coCd\">1000</Col><Col id=\"oprtrId\">ouser</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_favorite","0","45","200",null,null,"-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_myMenu","0","40",null,null,"0","0",null,null,null,null,this.div_favorite.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_MyMenu");
            obj.set_binddataset("gds_bookMark");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_background("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" textAlign=\"left\" padding=\"0px 0px 0px 10px\" border=\"0px solid #d4d4d4\"/><Cell col=\"1\" border=\"0px solid #d4d4d4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"X\"/></Band></Format></Formats>");
            this.div_favorite.addChild(obj.name, obj);

            obj = new Button("btn_bookMark","5","0","180","30",null,null,null,null,null,null,this.div_favorite.form);
            obj.set_taborder("1");
            obj.set_text("   Add Favorite");
            obj.set_cssclass("btn_favorite");
            this.div_favorite.addChild(obj.name, obj);

            obj = new Div("Div00","160","8","16","17",null,null,null,null,null,null,this.div_favorite.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_favorite.addChild(obj.name, obj);

            obj = new Button("btn_menu","0","0","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MenuS");
            obj.set_text("메뉴");
            obj.getSetter("uWord").set("frame.menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_myMenu","100","0","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기");
            obj.getSetter("uWord").set("frame.favorites");
            obj.set_enable("true");
            obj.set_cssclass("btn_LF_Menu");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu","0","40","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuSearch","5","5","158","25",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("0");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_menuSearch","162","5","25","25",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/s_icon_search.png\') no-repeat center center /70%");
            obj.set_border("1px solid #d4d4d4");
            this.div_menu.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","65",null,null,"0","0",null,null,null,null,this.div_menu.form);
            obj.set_treeinitstatus("collapse,all");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("gds_menu");
            obj.set_scrollbartype("auto auto");
            obj.set_taborder("2");
            obj.set_border("0px none");
            obj.set_scrollpixel("all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"267\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MNU_NM\" treestartlevel=\"1\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" textAlign=\"left\" displaytype=\"treeitemcontrol\" border=\"0px solid #e2e0df\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_expand","5","32","88","28",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("Open All");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_collapse","99","32","88","28",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("Close All");
            this.div_menu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,902,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("leftFrame.xfdl","OD::odUtils.xjs");
        this.registerScript("leftFrame.xfdl", function() {
        /*******************************************************
          PROJECT NAME : Left Frame
          CREATION DATES : 2022.01.13
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        	this.ogds_menu = new Dataset("ogds_menu");
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        	this.fn_onLoad = function(obj,e)
        	{
        		//menu 조회
        		this.fn_menuSearch();
        		this.fn_bookMarkSearch();

        		var strPrjPath = nexacro.getProjectPath();

        		var objEnv = nexacro.getEnvironment();

        		if(strPrjPath.indexOf("loc") >= 0){
        			objEnv.services['svcUrl'].set_url("http://locadminssp.serveone.co.kr:8080/");
        		}else if(strPrjPath.indexOf("dev") >= 0){
        			objEnv.services['svcUrl'].set_url("http://devadminssp.serveone.co.kr:8080/");
        		}else if(strPrjPath.indexOf("test") >= 0){
        			objEnv.services['svcUrl'].set_url("https://testadminssp.serveone.co.kr/");
        		}else if(strPrjPath.indexOf("https://adminssp") >= 0){
        			objEnv.services['svcUrl'].set_url("https://adminssp.serveone.co.kr/");
        		}else{

        		}
        		this.fn_odCommLoading();
        	};


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_menuSearch = function()	{
        		var sSvcId = "menuSelect";
        		var sUrl = "/co/Menu/select-mnu-mng-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "gds_menu=ds_output";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//bookMark 조회
        	this.fn_bookMarkSearch = function()	{
        		this.ds_search.clearData();
        		var nNewRow = this.ds_search.addRow();
        		//this.ds_search.setColumn(nNewRow,"coCd","1000");
        		//this.ds_search.setColumn(nNewRow,"oprtrId","ouser");

        		var sSvcId = "selectMnuFvrtsList";
        		var sUrl = "/co/Menu/selectMnuFvrtsList.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "gds_bookMark=ds_output";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//bookMark 조회
        	this.fn_bookMarkSave = function()	{
        		var sSvcId = "saveMnuFvrts";
        		var sUrl = "/co/Menu/saveMnuFvrts.do";
        		var inDs = "ds_save=ds_favorite:U";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//bookMark 조회
        	this.fn_bookMarkDelete = function()	{
        		var sSvcId = "delMnuFvrts";
        		var sUrl = "/co/Menu/delMnuFvrts.do";
        		var inDs = "ds_save=ds_favorite:U";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "menuSelect"){
        			this.fn_AddColumn();

        			this.fv_oApp.gds_menu.addColumn("FILTER_YN", "String");
        			this.ogds_menu.copyData(this.fv_oApp.gds_menu);

        			if(!this.gfn_isNull(pMenuId)) {
        				// 화면 열기
        				this.fn_openMenu(pMenuId);
        			}

        		} else if(svcID == "selectMnuFvrtsList"){
        		} else if(svcID == "saveMnuFvrts"){
        			this.alert("즐겨찾기가 저장 되었습니다.");
        			this.fn_bookMarkSearch();
        		} else if(svcID == "delMnuFvrts"){
        			this.alert("즐겨찾기가 삭제 되었습니다.");
        			this.fn_bookMarkSearch();
        		}
        	};

        	this.fn_AddColumn = function(){
        		this.fv_oApp.gds_menu.addColumn("PGM_ID"  ,"String");
        		this.fv_oApp.gds_menu.addColumn("PGM_PATH","String");
        		var nFindRow;

        		nFindRow= this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198010000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::guideProductList.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198020000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::guideProductDetail.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198030000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::guideTabSearch.xfdl");

        		nFindRow= this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198040000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_01.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198050000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_02.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198060000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_03.xfdl");
        		nFindRow= this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198070000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_04.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198080000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_05.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198090000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::Guide_06.xfdl");

        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198100000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::samplePopUpPage.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198120000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::sampleMultiPopUpPage.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9198110000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","PUB_GUIDE::guideGridTree.xfdl");


        		nFindRow= this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9199010000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::samplePage01.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9199020000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::samplePage02.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9199030000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::sampleTab.xfdl");
        		nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD","9199040000");
        		this.fv_oApp.gds_menu.setColumn(nFindRow, "PGM_PATH","sample::sampleChart.xfdl");
        	};

        	this.fn_messageCallback = function(sMsgId, sRetValue){
        		switch(sMsgId){
        			case "menu_search":

        				break;
        			default:

        				break;
        		}
        	};
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//workFrame에서 북마크 버튼 click시에 호출 되는 함수
        	this.cfn_setBookMark = function(sMenuId, sBookMarkFlag){
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	//메뉴리스트에서 메뉴 찾기 기능
        	this.nSearchStRow   = -1;
        	this.nSearchStRow2  = -1;
        	this.preSearchValue = "";

        	this.fn_menuFind = function(){
        		var oGrid = this.div_menu.form.grd_tree;
        		var oGdsMenu = this.fv_oApp.gds_menu;
        		var sValue = this.div_menu.form.edt_menuSearch.value;
        		var sDsValue = "";
        		var nMnuLvl;
        		var aArray = new Array();

        		//필터 초기화
        		oGdsMenu.filter("");

        		//원복 복제
        		oGdsMenu.copyData(this.ogds_menu);

        		var fillterChk = 0;

        		if(!this.gfn_isNull(sValue)) {
        			for(var q = 0; q < oGdsMenu.getRowCount(); q++){
        				var name = oGdsMenu.getColumn(q,"MNU_NM");
        				if(name.indexOf(sValue) > -1){
        					fillterChk ++;
        				}
        			}
        		}

        		console.log("----------------------------- sValue : " + sValue);
        		//console.log("----------------------------- ds_search : " + oGdsMenu.saveXML());
        		console.log("----------------------------- fillterChk : " + fillterChk);

        		//if( this.ogds_menu.getCaseCount("MNU_NM.indexOf('"+sValue+"') > 0 ") == 0 ) {
        		if(fillterChk == 0) {
        			if(!this.gfn_isNull(sValue)) {
        				alert("검색된 내용이 없습니다.");
        			}
        			return false;
        		}


        		if(!this.gfn_isNull(sValue)) {
        // 			var strSearchId = "MNU_NM";
        // 			var sFilterstr = strSearchId +".indexOf('"+sValue+"') > -1";
        // 			oGdsMenu.filter(sFilterstr);
        // 			this.div_menu.form.grd_tree.set_treeinitstatus("expand,all");

        			var dArray = []; // 검색된 인덱스

        			for(var q = 0; q < oGdsMenu.getRowCount(); q++){
        				var name = oGdsMenu.getColumn(q,"MNU_NM");
        				if(name.indexOf(sValue) > -1){
        					dArray.push(q);	//검색된인덱스 배열로 저장
        					oGdsMenu.setColumn(q, "FILTER_YN", "Y"); //필터 적용 여부를 선언한다.
        				}
        			}

        			for(var ss = this.nSearchStRow + 1; ss < oGdsMenu.getRowCount(); ss++){
        				var name = oGdsMenu.getColumn(ss,"MNU_NM");
        				if(name.indexOf(sValue) > -1){
        					//oGdsMenu.set_rowposition(ss);
        					this.nSearchStRow = ss;
        					break;
        				}
        			}

        			//검색어 로우의 부모값을찾기위해 루프
        			for( var ii = 0; ii < dArray.length; ii++ ) {
        				this.fn_parentRowChk(dArray[ii], oGrid, oGdsMenu);
        			}


        			//필터링
        			var sFilterstr = "FILTER_YN.indexOf('Y') > -1";
        			oGdsMenu.filter(sFilterstr);

        // 			for( var mm = 0; mm < oGdsMenu.rowcount; mm++ ) {
        // 				this.fn_parentShow(mm, oGrid, oGdsMenu);
        // 			}


        			//oGrid.setTreeStatus(0, true);

        			//this.div_menu.form.grd_tree.set_treeinitstatus("expand,all");

        		} else {
        			alert("검색어를 입력해 주세요");
        			oGdsMenu.filter("");
        			this.div_menu.form.grd_tree.set_treeinitstatus("collapse,all");
        			oGdsMenu.set_rowposition(0);
        			return false;
        		}



        		for(var i = this.nSearchStRow2 + 1 ; i < oGdsMenu.getRowCount(); i++){
        			sDsValue = oGdsMenu.getColumn(i,"MNU_NM");

        			if(sDsValue.indexOf(sValue) > -1){

        				this.nSearchStRow2 = i;
        				if(oGrid.isTreeCollapsedRow(i,"true")){
        					nMnuLvl = oGdsMenu.getColumn(i,"MNU_LVL");
        					nParentRow = i
        					for(var j = 0 ; j < nMnuLvl ; j++){
        						nParentRow = oGrid.getTreeParentRow(nParentRow,true);
        						aArray.push(nParentRow);
        					}

        					for(var k = (aArray.length-1) ; k >= 0 ; k--){
        						if(aArray[k] >= 0){
        							nTreeRow = oGrid.getTreeRow(aArray[k]);
        							oGrid.setTreeStatus(nTreeRow,true);
        						}
        					}
        				}
        				oGdsMenu.set_rowposition(i);
        				break;
        			}
        			aParentRows = "";
        		}

        		//메뉴 유형이 폴더이면 재귀호출
        		if( oGdsMenu.getColumn(i, "MNU_TP_CD") == "01" ) {
        			this.fn_menuFind();
        		}

        		if(ss == this.ogds_menu.getRowCount()){
        			//this.gfn_alert("MSG0000000003","", "menu_search", "fn_messageCallback");
        			alert("마지막까지 찾았습니다. 처음부터 검색합니다.");
        			this.nSearchStRow = -1;
        			this.nSearchStRow2 = -1;
        		}

        		this.div_menu.form.grd_tree.set_treeinitstatus("expand,all");
        	};


        	this.fn_parentRowChk = function(row, oGrid, oGdsMenu) {
        		var parentRow = oGrid.getTreeParentRow(row, true);

        		if( parentRow > -1 ) {
        			oGdsMenu.setColumn(parentRow, "FILTER_YN", "Y");
        			this.fn_parentRowChk(parentRow, oGrid, oGdsMenu); //재귀
        		}
        	}


        	this.fn_parentShow = function(row, oGrid, oGdsMenu) {
        		var row = oGrid.getTreeParentRow(row, true);
        		if( row > -1 ) {
        			oGrid.setTreeStatus(row,true);
        			this.fn_parentRowChk(row, oGrid, oGdsMenu); //재귀
        		}
        	}


        	var pMenuId = "";
        	this.fn_paramMenuId = function(rtnMenuId) {
        	   // 파라미터로 받은 menuId값 세팅
        		pMenuId = rtnMenuId;
        	}

        	this.fn_openMenu = function(sMenuId) {
        		var oGdsMenu = this.fv_oApp.gds_menu;

        	    var nFindRow = oGdsMenu.findRow("MNU_LVL_SPR_CD",sMenuId);

        		if(nFindRow>-1) {
        			var sMenuId = oGdsMenu.getColumn(nFindRow, "MNU_LVL_SPR_CD");
        			var sMenuType = oGdsMenu.getColumn(nFindRow,"MNU_TP_CD");
        			var oArgs = oGdsMenu.getColumn(nFindRow,"RMKS_CTS");

        			if(this.gfn_isNull(sMenuId) == false && sMenuType == "02") {
        				// 메뉴 화면 호출
        				this.gfn_menuOpen(sMenuId, oArgs);
        			}
        		}
        	}

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        	//menu tree click 이벤트
        	this.grd_tree_oncellclick = function(obj,e)
        	{
        		if(e.clickitem == "treeitembutton"){
        			return;
        		}

        		var oGdsMenu = this.fv_oApp.gds_menu;

        		// Click시 해당 메뉴 호출
        		var nMenuRow = oGdsMenu.rowposition;
        		var sMenuId = oGdsMenu.getColumn(nMenuRow, "MNU_LVL_SPR_CD");
        		var sMenuType = oGdsMenu.getColumn(nMenuRow,"MNU_TP_CD");

        		//수정 필요(같은 화면 다른 메뉴로 사용시
        		var oArgs = oGdsMenu.getColumn(nMenuRow,"RMKS_CTS");

        		if(this.gfn_isNull(sMenuId) == false && sMenuType == "02") {
        			// 메뉴 화면 호출
        			this.gfn_menuOpen(sMenuId, oArgs);
        		}

        		//메뉴 검색 시작위치 변경
        		this.nSearchStRow = nMenuRow;

        		//그리드 자동 펼치기
        		var gridObj = this.div_menu.form.grd_tree;
        		var nGridRow = gridObj.getTreeRow(e.row);
        		var nStatus  = gridObj.getTreeStatus(nGridRow);

        		if(nStatus == 3) return;

        		nStatus = (nStatus == 0 ? 1 : 0);

        		gridObj.setTreeStatus(nGridRow, nStatus);

        	};

        	//my Menu click 이벤트
        	this.grd_myMenu_oncellclick = function(obj,e)
        	{
        		if(e.cell == 0){
        			var oGdsBookMark = this.fv_oApp.gds_bookMark;
        			var sMenuId = oGdsBookMark.getColumn(e.row,"MNU_LVL_SPR_CD");
        			this.gfn_menuOpen(sMenuId);
        		} else if(e.cell ==1){
        			var sRet = this.confirm("삭제하시겠습니까?");
        			if(sRet){
        				this.ds_favorite.clearData();
        				var nNewRow = this.ds_favorite.addRow();
        				//this.ds_favorite.setColumn(nNewRow,"CO_CD","1000");
        				//this.ds_favorite.setColumn(nNewRow,"OPRTR_ID","ouser");

        				var sFormId = this.fv_oApp.gds_bookMark.getColumn(this.fv_oApp.gds_bookMark.rowposition,"MNU_LVL_SPR_CD");
        				var nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD",sFormId);
        				var sMenuSeq = this.fv_oApp.gds_menu.getColumn(nFindRow, "MNU_SEQ");
        				this.ds_favorite.setColumn(nNewRow,"MNU_SEQ",sMenuSeq);

        				//즐겨찾기 삭제
        				this.fn_bookMarkDelete();
        			}
        		}
        	};

        	//menu 활성화 버튼 click 이벤트
        	this.btn_menu_onclick = function(obj,e)
        	{
        		this.div_menu.set_visible(true);
        		this.div_favorite.set_visible(false);

        		this.div_menu.bringToFront();
        		this.div_favorite.sendToBack();

        		this.btn_menu.set_cssclass("btn_LF_MenuS");
        		this.btn_myMenu.set_cssclass("btn_LF_Menu");
        	};

        	//myMenu 활성화 버튼 click 이벤트
        	this.btn_myMenu_onclick = function(obj,e)
        	{
        		this.div_favorite.bringToFront();
        		this.div_menu.sendToBack();

        		this.div_menu.set_visible(false);
        		this.div_favorite.set_visible(true);


        		this.btn_menu.set_cssclass("btn_LF_Menu");
        		this.btn_myMenu.set_cssclass("btn_LF_MenuS2");
        	};

        	//메뉴 검색 editer에서 enter key 이벤트
        	this.edt_menuSearch_onkeydown = function(obj,e)
        	{
        		this.nSearchStRow   = -1;
        	    this.nSearchStRow2  = -1;
        	    this.preSearchValue = "";

        		if(e.keycode == 13){
        			this.fn_menuFind();
        		}
        	};

        	//메뉴 검색 버튼 click 이벤트
        	this.btn_menuSearch_onclick = function(obj,e)
        	{
        		this.fn_menuFind();
        	};

        	//tree grid 모두 접기
        	this.div_menu_btn_collapse_onclick = function(obj,e)
        	{
        		this.div_menu.form.grd_tree.set_treeinitstatus("collapse,all");
        	};

        	//tree grid 모두 펼치기
        	this.div_menu_btn_expand_onclick = function(obj,e)
        	{
        		this.div_menu.form.grd_tree.set_treeinitstatus("expand,all");
        	};

        	//즐겨찾기 추가
        	this.div_favorite_btn_bookMark_onclick = function(obj,e)
        	{
        		this.ds_favorite.clearData();
        		var nNewRow = this.ds_favorite.addRow();
        		//this.ds_favorite.setColumn(nNewRow,"CO_CD","1000");
        		//this.ds_favorite.setColumn(nNewRow,"OPRTR_ID","ouser");

        		var sFormId = this.fv_oApp.agv_WorkFrameSet.getActiveFrame().name;
        		sFormId = sFormId.replace("win","");
        		var nFindRow = this.fv_oApp.gds_menu.findRow("MNU_LVL_SPR_CD",sFormId);
        		var sMenuSeq = this.fv_oApp.gds_menu.getColumn(nFindRow, "MNU_SEQ");
         		this.ds_favorite.setColumn(nNewRow,"MNU_SEQ",sMenuSeq);
        		var nFindRow = this.fv_oApp.gds_bookMark.findRow("MNU_LVL_SPR_CD",sFormId);
        		if(nFindRow < 0){
        			this.fn_bookMarkSave();
        		} else {
        			alert("즐겨찾기가 되어 있는 화면 입니다.");
        		}
        	};

        this.div_menu_edt_menuSearch_onchanged = function(obj,e)
        {

        };

        this.div_menu_grd_tree_oncelldblclick = function(obj,e)
        {
        	var gridObj = this.div_menu.form.grd_tree;
        	var nGridRow = gridObj.getTreeRow(e.row);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	nStatus = (nStatus == 0 ? 1 : 0);

        	gridObj.setTreeStatus(nGridRow, nStatus);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_favorite.form.grd_myMenu.addEventHandler("oncellclick",this.grd_myMenu_oncellclick,this);
            this.div_favorite.form.btn_bookMark.addEventHandler("onclick",this.div_favorite_btn_bookMark_onclick,this);
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_myMenu.addEventHandler("onclick",this.btn_myMenu_onclick,this);
            this.div_menu.form.edt_menuSearch.addEventHandler("onkeydown",this.edt_menuSearch_onkeydown,this);
            this.div_menu.form.edt_menuSearch.addEventHandler("onchanged",this.div_menu_edt_menuSearch_onchanged,this);
            this.div_menu.form.btn_menuSearch.addEventHandler("onclick",this.btn_menuSearch_onclick,this);
            this.div_menu.form.grd_tree.addEventHandler("oncellclick",this.grd_tree_oncellclick,this);
            this.div_menu.form.btn_expand.addEventHandler("onclick",this.div_menu_btn_expand_onclick,this);
            this.div_menu.form.btn_collapse.addEventHandler("onclick",this.div_menu_btn_collapse_onclick,this);
        };
        this.loadIncludeScript("leftFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
