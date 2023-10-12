(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_11_3");
            this.set_titletext("운영자권한그룹관리-운영자별개별메뉴권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authGrpMng", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","20",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","47.53%","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("운영자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_ID","Static02:10","4","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_NM","OPRTR_ID:4","4","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","OPRTR_NM:4","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","79","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("메뉴 목록");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("sta_WF_title02");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","40","47.6%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("true");
            obj.set_autofittype("col");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"377\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" controlautosizingtype=\"both\" treecheck=\"bind:CHK_COL\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","grd_list01:0","0","64",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_allRight","20","50%","24","24",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_allLeft","20","btn_allRight:4","24","24",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","grd_list01:64","0","231","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("운영자별 메뉴 목록");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_positionstep("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_list02","Div01:0","40",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_authGrpMng");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("true");
            obj.set_autofittype("col");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"377\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" controlautosizingtype=\"both\" treecheck=\"bind:CHK_COL\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","81","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.OPRTR_ID","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.OPRTR_NM","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_11_3.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_11_2
        /* 작 성 일 자 : 2022/03/16
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 운영자권한그룹관리 > 운영자별 메뉴권한
        /***********************************************************/




        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.levelColumn = "MNU_LVL";
        this.orgCheck = "CHK_COL";
        this.seqKey = "MNU_SEQ";
        this.fv_stateCheckRow;

        this.selectOprtrCount = 0;	//운영자 조회 카운트
        this.selectOprtrId = "";
        this.selectOprtrNm = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	//this.fn_menuSearch();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //메뉴 조회
        this.fn_menuSearch = function() {

        	var sSvcId = "menuSearch";
        	var sUrl = "/co/mnu_auth/select-oprtr-mnu-mng-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_menu=ds_output1 ds_authGrpMng=ds_output2";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //메뉴 권한 등록
        this.fn_save = function() {
        	var sSvcId = "save";
        	var sUrl = "/co/mnu_auth/save-auth-oprtr-mng-list.do";
        	var inDs = "ds_search=ds_search ds_save=ds_authGrpMng:U"
        	var outDs = "";
        	var arg;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0){
        		this.gfn_alert_null("MSG000011111", "", "MSG000011111", errorMsg, "A", "");
        		return;
        	}

        	switch(svcID){
        	case "search":
        		break;
        	case "menuSearch":

        		break;
        	case "save":
        		this.gfn_alert_null("MSG000011111", "", "MSG000011111", "저장되었습니다.", "A", "");
        		this.fn_menuSearch();
        		break;

        	case "commonCodeSearch":
        		this.fn_menuSearch();
        		break;

        	case "selectOprtrInfoList" :
        		if( this.selectOprtrCount > 1 ) {
        			this.fn_popup("SSP_BO_PP_44");
        		} else if( this.selectOprtrCount == 1 ) {
        			this.ds_search.setColumn(0, "OPRTR_ID", this.selectOprtrId);
        			this.ds_search.setColumn(0, "OPRTR_NM", this.selectOprtrNm);

        			this.fn_menuSearch();
        		} else {
        			this.gfn_alert_null("MSGIDIDIDIDIDID", "", "MSGIDIDIDIDIDID", "검색된 내용이 없습니다", "A", "");
        			return false;
        		}

        		break;
        	default:
        		break;
        	}
        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "SSP_BO_PP_44" ) {
        		// 조직명 조회 리턴
        		this.ds_search.setColumn(0, "OPRTR_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "OPRTR_NM", resData.OPRTR_NM);
        		this.ds_search.setColumn(0, "CO_CD", resData.CO_CD);

        		this.fn_menuSearch();
        	}
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //팝업 호출 함수
        this.fn_popup = function(popupId) {
        	var objParam = {};

        	if( popupId == "SSP_BO_PP_44" ){
        		// 조직명 조회 팝업
        		objParam.oprtrId = this.ds_search.getColumn(0, "OPRTR_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "OPRTR_NM");
        	}

        	this.gfn_openPopup(popupId, "CO_POP::" + popupId + ".xfdl", objParam, "fn_popupCallback");
        };

        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	var sSvcId = id;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //선택한 값 전체 권한별메뉴목록 트리 이동 이벤트
        this.btn_allRight_onclick = function(obj,e){
        	var chkCnt = this.ds_menu.getCaseCount("CHK_COL == 1");

        	if( this.ds_search.getColumn(0, "OPRTR_ID") == undefined ) {
        		var sMsgId = "MSG000011111";									//메세지ID
        		var aArg = ["운영자"];													//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var nullValue = "{0} 정보가 없습니다.";			//메세지 ID 못찾을때 값
        		var sMsgType = "A";												// 타입
        		var sMsgCallback = "";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요 fnMsgCallback

        		this.gfn_alert_null(sMsgId, aArg, sPopId, nullValue, sMsgType, sMsgCallback);

        		return false;
        	}


        	if(chkCnt == 0){
        		this.gfn_alert_null("MSG000011111", "", "MSG000011111", "추가할 메뉴를 선택해주세요.", "A", "");
        		return;
        	}

        	this.fn_allMoveDataSet(this.Div01.form.grd_list01, this.Div01.form.grd_list02, this.ds_menu, this.ds_authGrpMng);
        	this.ds_authGrpMng.set_keystring("S:+SRT_SO");
        };

        //선택한 값 전체 메뉴목록 트리 이동 이벤트
        this.btn_allLeft_onclick = function(obj,e){

        	if( this.ds_search.getColumn(0, "OPRTR_ID") == undefined ) {
        		this.gfn_alert_null("MSG000011111", ["운영자"], "MSG000011111", "{0} 정보가 없습니다.", "A", "");
        		return false;
        	}

        	var chkCnt = this.ds_authGrpMng.getCaseCount("CHK_COL == 1");
        	if(chkCnt == 0){
        		this.gfn_alert_null("MSG000011111", "", "MSG000011111", "선택한 데이터가 없습니다.", "A", "");
        		return;
        	}

        	this.fn_allMoveDataSet(this.Div01.form.grd_list02, this.Div01.form.grd_list01, this.ds_authGrpMng,  this.ds_menu);
        	this.ds_menu.set_keystring("S:+SRT_SO");
        };



        /********************************************************************************************
        ★ 트리 이동 함수
        orgGrid : 원본 grid
        targetGrid : 옮길 grid
        orgDs : 원본 dataset
        targetDs : 옮길 dataset
        row : dataset 상 index
        *********************************************************************************************/
        this.fnCopyTree= function(orgGrid, targetGrid, orgDs, targetDs, row){
        	var aParentArr = new Array();
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var grdTree	  = orgGrid;
        	var grdTarget = targetGrid;
        	var grdRow = grdTree.getTreeRow(row); //선택한 dataset row의 그리드 상 row값
        	var aChildArr = new Array();
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;
        	var nTopIndex = 0;
        	var lastIndex = 0;
        	var aDelArr =  new Array();

        	//선택한 row의 현재 level 조회
        	var nLvl = dsOrg.getColumn(row , this.levelColumn);

        	//start, end에 현재 row 값 세팅
        	nStart = nEnd = row;

        	//현재 row에 자식 데이터가 있는지 확인. 있으면 마지막 자식 index를 nEnd에 setting
        	var nChildCount = grdTree.getTreeChildCount(grdRow);
        	if (nChildCount > 0){
        		lastIndex = this.treeGetChildEnd(dsOrg, this.levelColumn, grdRow);
        		nEnd = lastIndex;
        	}

        	//현재 row의 상위 row 데이터 확인(선택한 row의 상위 row에 해당하는 row 리턴)
        	var nParentRow = grdTree.getTreeParentRow(row);

        	//상위 row가 존재하면 aParentArr(상위 부모 배열)에 PUSH
        	if (nParentRow > -1){
        		aParentArr.push(nParentRow);

        		//해당 row의 상위 row가 더 존재할 수도 있으므로
        		//0부터 nParentRow까지 돌면서 체크해서 배열에 row값 PUSH
        		var nRowFindRow = nParentRow;
        		for(var i=0; i<=nParentRow; i++){
        			nRow = orgGrid.getTreeParentRow(nRowFindRow);
        			if (nRow > -1){
        				nRowFindRow = nRow;
        				aParentArr.push(nRow);
        			}else{
        				break;
        			}
        		}
        	}

        	//현재 row부터 마지막 자식 row까지 옮길 그리드에 추가
        	dsTarget.set_enableevent(false);
        	for (i = nStart; i <= nEnd; i++){
        		//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        		var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(i, this.seqKey));
        		if(findRow < 0){
        			nRow = dsTarget.addRow();
        			dsTarget.copyRow(nRow, dsOrg, i);
        			dsTarget.setColumn(nRow, this.orgCheck, 0);
        		}
        		//삭제할 배열 row 추가
        		aDelArr.push(i);
        	}

        	// aParentArr(상위 부모 배열)에 데이터가 존재하는 경우 그리드에 추가
        	if(aParentArr.length != 0){
        		for(var i=0; i<=aParentArr.length-1; i++){
        			//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        			var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(aParentArr[i], this.seqKey));
        			if(findRow < 0){
        				var nRow= dsTarget.addRow();
        				dsTarget.copyRow(nRow, dsOrg, aParentArr[i]);
        				dsTarget.setColumn(nRow, this.orgCheck, 0);
        			}
        		}
        	}

        	dsTarget.set_enableevent(true);

        	//옮길 트리에 추가한 후 삭제시작
        	//1.선택한 현재~자식 row 삭제
        	dsOrg.deleteMultiRows(aDelArr);

        	//2.부모노드가 있는 경우
        	if(aParentArr.length != 0){
        		//aParentArr(상위 부모 배열)이 있으면 자식노드가 있는지 확인하고 삭제 진행.
        		//트리에서 자식이 존재하지 않으면 그때 해당 값 삭제
        		for(var i=0;i<=aParentArr.length-1;i++){
        			var nChildCount = grdTree.getTreeChildCount(aParentArr[i]);
        			if(nChildCount <= 0){
        				dsOrg.deleteRow(aParentArr[i]);
        			}
        		}
        	}
        };

        /********************************************************************************************
        ★ 선택값 전체 이동 함수
        orgGrid : 원본 grid
        targetGrid : 옮길 grid
        orgDs : 원본 dataset
        targetDs : 옮길 dataset
        arrayRow : 선택한 dataset row의 MNU_SEQ 배열
        *********************************************************************************************/
        this.fnAllCopyTree= function(orgGrid, targetGrid, orgDs, targetDs, arrayRow){
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var grdTree	  = orgGrid;
        	var grdTarget = targetGrid;
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;
        	var nTopIndex = 0;
        	var lastIndex = 0;

        	for(var i=0; i<=arrayRow.length-1; i++){
        		var aParentArr = new Array();
        		var aChildArr = new Array();
        		var aDelArr =  new Array();
        		var row = orgDs.findRow(this.seqKey, arrayRow[i]);
        		var grdRow =  grdTree.getTreeRow(row);

        		if( row >= 0){

        			//선택한 row의 현재 level 조회
        			var nLvl = dsOrg.getColumn(row , this.levelColumn);

        			//start, end에 현재 row 값 세팅
        			nStart = nEnd = row;

        			//현재 row에 자식 데이터가 있는지 확인. 있으면 마지막 자식 index를 nEnd에 setting
        			var nChildCount = grdTree.getTreeChildCount(grdRow);
        			if (nChildCount > 0){
        				lastIndex = this.treeGetChildEnd(dsOrg, this.levelColumn, grdRow);
        				nEnd = lastIndex;
        			}

        			//현재 row의 상위 row 데이터 확인(선택한 row의 상위 row에 해당하는 row 리턴)
        			var nParentRow = grdTree.getTreeParentRow(row);

        			//상위 row가 존재하면 aParentArr(상위 부모 배열)에 PUSH
        			if (nParentRow > -1){
        				aParentArr.push(nParentRow);

        				//해당 row의 상위 row가 더 존재할 수도 있으므로
        				//0부터 nParentRow까지 돌면서 체크해서 배열에 row값 PUSH
        				var nRowFindRow = nParentRow;
        				for(var j=0; j<=nParentRow; j++){
        					nRow = orgGrid.getTreeParentRow(nRowFindRow);
        					if (nRow > -1){
        						nRowFindRow = nRow;
        						aParentArr.push(nRow);
        					}else{
        						break;
        					}
        				}
        			}

        			//현재 row부터 마지막 자식 row까지 옮길 그리드에 추가
        			dsTarget.set_enableevent(false);
        			for (var j = nStart; j <= nEnd; j++){
        				//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        				var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(j, this.seqKey));
        				if(findRow < 0){
        					nRow = dsTarget.addRow();
        					dsTarget.copyRow(nRow, dsOrg, j);
        					dsTarget.setColumn(nRow, this.orgCheck, 0);
        				}
        				//삭제할 배열 row 추가
        				aDelArr.push(j);
        			}

        			// aParentArr(상위 부모 배열)에 데이터가 존재하는 경우 그리드에 추가
        			if(aParentArr.length != 0){
        				for(var j=0; j<=aParentArr.length-1; j++){
        					//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        					var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(aParentArr[j], this.seqKey));
        					if(findRow < 0){
        						var nRow= dsTarget.addRow();
        						dsTarget.copyRow(nRow, dsOrg, aParentArr[j]);
        						dsTarget.setColumn(nRow, this.orgCheck, 0);
        					}
        				}
        			}
        			dsTarget.set_enableevent(true);

        			//옮길 트리에 추가한 후 삭제시작
        			//1.선택한 현재~자식 row 삭제
        			dsOrg.deleteMultiRows(aDelArr);

        			//2.부모노드가 있는 경우
        			if(aParentArr.length != 0){
        				//aParentArr(상위 부모 배열)이 있으면 자식노드가 있는지 확인하고 삭제 진행.
        				//트리에서 자식이 존재하지 않으면 그때 해당 값 삭제
        				for(var j=0;j<=aParentArr.length-1;j++){
        					var nChildCount = grdTree.getTreeChildCount(aParentArr[j]);
        					if(nChildCount <= 0){
        						dsOrg.deleteRow(aParentArr[j]);
        					}
        				}
        			}
        		}

        		nEnd = 0;
        		nStart = 0;
        		nRow = 0;
        		nTopIndex = 0;
        		lastIndex = 0;
        	}
        };

        //선택값 중 최하위 메뉴 이동 호출 함수
        this.fn_moveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var nAddIndex = 0 ;
        	var aChkArr = new Array();

        	for(var i=0; i< orgDs.rowcount; i++){
        		if(orgDs.getColumn(i, "CHK_COL") == 1){
        			aChkArr.push(i);
        		}
        	}

        	//체크한 값이 1개 이상이면 최하위 한건만 이동
        	if(aChkArr.length > 1){
        		nAddIndex = aChkArr[aChkArr.length - 1];
        	}else{
        		nAddIndex = aChkArr;
        	}

        	this.fnCopyTree(orgGrid, targetGrid, orgDs, targetDs,  nAddIndex);
        };

        //전체 메뉴 이동 호출 함수
        this.fn_allMoveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var aChkArr = new Array();

        	for(var i=0; i<orgDs.rowcount; i++){
        		if(orgDs.getColumn(i, "CHK_COL") == 1){
        			aChkArr.push(orgDs.getColumn(i, this.seqKey));
        		}
        	}

        	this.fnAllCopyTree(orgGrid, targetGrid, orgDs, targetDs,  aChkArr);
        };


        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	if(!this.gfn_dsIsUpdated(this.ds_authGrpMng)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	return true;
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //운영자조회 팝업
        this.Div00_Button39_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_44");
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	//저장 조건 체크
        	if(this.fn_validationCheck()){
        		this.gfn_alert_null("MSG000011111", "", "MSG000011111", "저장하시겠습니까?", "C", function(msgId, flag) {
        			if( flag ) {
        				this.fn_save();
        			}
        		});
        	}
        };

        //폼 키업
        this.SSP_BO_YA_11_3_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "OPRTR_ID" || e.fromobject.id == "OPRTR_NM") {
        				//운영자 조회 엔터
        				this.fn_popupAutoSearch("selectOprtrInfoList", "/co/select-oprtr-info-list.do");
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_YA_11_3_onkeyup,this);
            this.Div00.form.Button39.addEventHandler("onclick",this.Div00_Button39_onclick,this);
            this.Div01.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div01.form.Div01.form.btn_allRight.addEventHandler("onclick",this.btn_allRight_onclick,this);
            this.Div01.form.Div01.form.btn_allLeft.addEventHandler("onclick",this.btn_allLeft_onclick,this);
            this.Div01.form.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div01.form.grd_list02.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div01.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.ds_authGrpMng.addEventHandler("cancolumnchange",this.ds_authGrpMng_cancolumnchange,this);
            this.ds_authGrpMng.addEventHandler("oncolumnchanged",this.ds_authGrpMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_11_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
