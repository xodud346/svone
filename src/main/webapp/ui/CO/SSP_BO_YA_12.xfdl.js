(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_12");
            this.set_titletext("프론트프로그램그룹관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pgmGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ADM_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmGrpInfoCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ADM_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delPgmGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ADM_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">사용</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excelDown",null,"138","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"138","86","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"138","79","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"138","79","28","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_pgmGrpInfo");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"146\"/><Column size=\"210\"/><Column size=\"127\"/><Column size=\"141\"/><Column size=\"137\"/><Column size=\"141\"/><Column size=\"70\"/><Column size=\"86\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로그램그룹ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" text=\"프로그램그룹명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"몰구분코드\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"부서관리자사용여부\"/><Cell col=\"5\" text=\"회원필드명\"/><Cell col=\"6\" text=\"운영단위필드이름\"/><Cell col=\"7\" text=\"정렬순서\"/><Cell col=\"8\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expr:PGM_GRP_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;normal&quot; : &quot;none&quot; \" text=\"bind:PGM_GRP_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PGM_GRP_NM\" edittype=\"text\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:MALL_SPR_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_gMallSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"4\" text=\"bind:DEPT_ADM_USEYN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"5\" text=\"bind:MBR_FDS_NM\" edittype=\"text\" cssclass=\"grd_WF_left\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_FDS_NM\" edittype=\"text\" cssclass=\"grd_WF_left\"/><Cell col=\"7\" text=\"bind:SRT_SO\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"108","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"62","60","26","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pgmGrpId","160","24","281","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_","591","24","281","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","451","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("프로그램그룹명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","882","20","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","Static02_00_00_00:10","24",null,"24","26",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","151","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div00.form.edt_pgmGrpId","value","ds_search","PGM_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_","value","ds_search","PGM_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_12.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_YA_12.xfdl", function() {

        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.valiGridIds = [
        	  {"name" : "프로그램그룹ID", "id" : "PGM_GRP_ID"}
        	, {"name" : "프로그램그룹명", "id" : "PGM_GRP_NM"}
        	, {"name" : "몰구분코드", "id" : "MALL_SPR_CD"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.fn_search(true, null);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true, null);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit, type){
        	var bReturn  = true;

        	if(type != "del" && this.fn_dataCheck(this.ds_pgmGrpInfo)){
        		bReturn = this.confirm("변경된 내역이 존재합니다. 조회하시겠습니까?");
        	}

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/co/frt/select-frt-pgm-grp-list.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_pgmGrpInfo=ds_output1";
        		var arg;

        		if(bInit) {
        			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_gMallSprCd=ds_output1 ds_useYn=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "MALL_SPR_CD,USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var pgmIdList = "";

        	//신규추가 행의 경우 프로그램ID setting
        	for(var i = 0 ; i < this.ds_pgmGrpInfo.getRowCount() ; i++){
        		if(this.ds_pgmGrpInfo.getRowType(i) == 2){
        			var sPgmId = this.gfn_trim(this.ds_pgmGrpInfo.getColumn(i, "PGM_GRP_ID"));
        			pgmIdList += sPgmId + ",";
        			this.ds_pgmGrpInfo.setColumn(i, "PGM_GRP_ID", sPgmId);
        		}
        	}
        	this.ds_search.setColumn(0, "PGM_GRP_ID_LIST", pgmIdList.replace(/,\s*$/, ""));

        	var sSvcId = "save";
        	var sUrl = "/co/frt/save-frt-pgm-grp-list.do";
        	var inDs = "ds_search=ds_search ds_save=ds_pgmGrpInfo:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //삭제
        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/co/frt/delete-frt-pgm-grp-list.do";
        	var inDs = "ds_delete=ds_delPgmGrpInfo:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			if(this.ds_pgmGrpInfo.rowcount < 1){
        				this.ds_pgmGrpInfo.copyData(this.ds_pgmGrpInfoCopy);
        			}

        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			this.grd_list.setCellProperty("head", 0, "text", "0");
        			break;
        		case "save":
        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				alert("저장되었습니다.");
        				this.fn_search(true, null);
        			}

        			//결과값 초기화
        			this.ds_search.setColumn(0, "PGM_GRP_ID_LIST", "");
        			break;
        		case "commonCodeSearch":
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        			break;
        		case "delete":
        			if(this.ds_delPgmGrpInfo.rowcount >= 0){
        				this.grd_list.setCellProperty("head", 0,"text","0");
        			}

        			this.ds_delPgmGrpInfo.clearData();
        			alert("삭제되었습니다.");
        			this.fn_search(true, "del");
        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search(false, null);
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search(false, null);
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){

        	if(!this.fn_dataCheck(this.ds_pgmGrpInfo)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	//그리드 필수값 체크
        	var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_pgmGrpInfo);
        	if(!validation){
        		return false;
        	}

        	return true;
        };

        //그리드 헤더 특수문자 제거
        this.gfn_removeCharValue = function(strValue){
        	var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>▲▼";

	for (i = 0; i < strValue.length; i++) {
        		for (j = 0; j < strSpecial.length; j++) {
        			if (strValue.charAt(i) == strSpecial.charAt(j))
        			strValue = strValue.replace(strValue.charAt(i), "");
        		}
        	}

        	return strValue;
        };

        this.fn_dataCheck = function(dataset){
        	var dataChk = false;
        	var arrayIds = dataset.colinfos._idArray;

        	if( dataset.rowcount <= 0 ) {
        		dataChk = false;
        	} else {
        		for(var i = 0; i < dataset.rowcount; i++){
        			var sRowType = dataset.getRowType(i);

        			if( sRowType == 2 || sRowType == 4 ){

        				var orgIdx = dataset._rawRecords[i]._orgidx;
        				for( var idx in arrayIds ){
        					var id = arrayIds[idx];
        					var value = dataset.getColumn(i, id);
        					var originValue = dataset.getOrgColumn(i, id);

        					// 값이 없을 시 undefined가 넘어옴.
        					if( originValue == undefined ) originValue = "";
        					//orgIdx 값이 없는 경우는 신규임.
        					if( orgIdx == undefined ) {
        						dataChk = true;
        					} else if( value != undefined ) {	// 존재할때
        						if( id.indexOf("CHK") == -1 && (value.toString() != originValue.toString()) ) {	// 체크박스 제외 및 값 비교
        							dataChk = true;
        						}
        					}
        				}
        			}
        		}
        	}
        	return dataChk;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true, null);
        };

        //추가 click 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = this.ds_pgmGrpInfo.addRow();
        	this.ds_pgmGrpInfo.setColumn(nRow, "USE_YN", "Y");
        	this.ds_pgmGrpInfo.setColumn(nRow, "MALL_SPR_CD", "10");
        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제 click 이벤트
        this.btn_del_onclick = function(obj,e){
        	var delArr = [];
        	var chkCnt = this.ds_pgmGrpInfo.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_pgmGrpInfo.rowcount; i++){
        			if(this.ds_pgmGrpInfo.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_pgmGrpInfo.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delPgmGrpInfo.addRow();
        					//this.ds_delPgmGrpInfo.setColumn(nRow, "PGM_GRP_ID", "Y");
        					this.ds_delPgmGrpInfo.copyRow(nRow, this.ds_pgmGrpInfo, i);
        				}
        			}
        		}
        		this.ds_pgmGrpInfo.deleteMultiRows(delArr);
        		if(this.ds_delPgmGrpInfo.rowcount > 0){
        			this.fn_delete();
        		}else{
        			this.grd_list.setCellProperty("head", 0,"text","0");
        		}
        	}
        };

        //저장 click 이벤트
        this.btn_save_onclick = function(obj,e){
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}
        };

        //엑셀 click 이벤트
        this.btn_excelDown_onclick = function(obj,e)
        {
        	alert("엑셀다운로드");
        };

        //enterkey 입력시 다음 cell로 이동
        this.grd_list_onkeyup = function(obj,e){
        	if(e.keycode == 13){
        		obj.moveToNextCell();
        	}
        };

        this.ds_pgmGrpInfo_cancolumnchange = function(obj,e){
        	var eRow = e.row;

        	//프로그램ID 신규 입력시 중복체크 click 이벤트
        	if(e.columnid == "PGM_GRP_ID"){
        		var nCnt = this.ds_pgmGrpInfo.extractRowsNF("PGM_GRP_ID == '" + this.gfn_trim(e.newvalue) + "'");
        		if(nCnt.length >= 1){
        			alert("프로그램ID : "+ e.newvalue + "가 중복되었습니다.");
        			return false;
        		}
        	}
        };

        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_useYn.set_index(0);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 3 || e.col == 4 || e.col == 5 || e.col == 9){
        		obj.dropdownCombo();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.ds_pgmGrpInfo.addEventHandler("cancolumnchange",this.ds_pgmGrpInfo_cancolumnchange,this);
            this.ds_pgmGrpInfoCopy.addEventHandler("cancolumnchange",this.ds_pgmMng_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_YA_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
