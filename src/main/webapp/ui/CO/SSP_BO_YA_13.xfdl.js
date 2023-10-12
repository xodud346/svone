(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_13");
            this.set_titletext("프론트프로그램관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_frtPgmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CALL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REQ_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_CTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REFPSN_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFrtPgmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CALL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REQ_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_CTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REFPSN_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_frtPgmInfoCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CALL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_TP_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gMnuSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gPgmGrpSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gMngAuthCtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnuSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmGrpSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"138","86","28","20",null,null,null,null,null,this);
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
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_frtPgmInfo");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"136\"/><Column size=\"195\"/><Column size=\"130\"/><Column size=\"148\"/><Column size=\"310\"/><Column size=\"112\"/><Column size=\"95\"/><Column size=\"119\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"81\"/><Column size=\"86\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"프로그램ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" rowspan=\"2\" text=\"프로그램명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" rowspan=\"2\" text=\"메뉴구분\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" rowspan=\"2\" text=\"프로그램그룹&#13;&#10;구분코드\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"5\" rowspan=\"2\" text=\"페이지&#13;&#10;호출주소\"/><Cell col=\"6\" rowspan=\"2\" text=\"기본프로그램여부\"/><Cell col=\"7\" rowspan=\"2\" text=\"퀵메뉴&#13;&#10;사용여부\"/><Cell col=\"8\" rowspan=\"2\" text=\"관리권한&#13;&#10;제어코드\"/><Cell col=\"9\" colspan=\"8\" text=\"권한여부\"/><Cell col=\"17\" rowspan=\"2\" text=\"정렬순서\"/><Cell col=\"18\" rowspan=\"2\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/><Cell row=\"1\" col=\"9\" text=\"상품요청\"/><Cell row=\"1\" col=\"10\" text=\"입고\"/><Cell row=\"1\" col=\"11\" text=\"정산\"/><Cell row=\"1\" col=\"12\" text=\"예산\"/><Cell row=\"1\" col=\"13\" text=\"발주\"/><Cell row=\"1\" col=\"14\" text=\"결재\"/><Cell row=\"1\" col=\"15\" text=\"세금계산서\"/><Cell row=\"1\" col=\"16\" text=\"참조자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expr:PGM_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;normal&quot; : &quot;none&quot; \" text=\"bind:PGM_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PGM_NM\" edittype=\"text\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:MNU_SPR_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_gMnuSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PGM_GRP_SPR_CD\" combodataset=\"ds_gPgmGrpSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"5\" text=\"bind:PAGE_CALL_ADDR\" displaytype=\"normal\" edittype=\"text\" cssclass=\"grd_WF_left\"/><Cell col=\"6\" text=\"bind:BASIS_PGM_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"7\" text=\"bind:QCK_MNU_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"dropdown\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"8\" text=\"bind:MNG_AUTH_CTL_CD\" edittype=\"combo\" combodataset=\"ds_gMngAuthCtlCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\" combotype=\"dropdown\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PRD_REQ_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"10\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:GI_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"11\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:ADJ_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"12\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:BGT_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"13\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:ORD_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"14\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:APRV_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"15\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:TAXINV_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"16\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:REFPSN_AUTH_YN\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/><Cell col=\"17\" text=\"bind:SRT_SO\" edittype=\"text\"/><Cell col=\"18\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" combotype=\"dropdown\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"108","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("프로그램ID/명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"62","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1044","20","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","Static02_00_00_00:10","24","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","450","20","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("메뉴구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_mnuSprCd","592","24","135","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_mnuSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","737","20","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("프로그램그룹구분코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_pgmGrpSprCd","889","24","135","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_pgmGrpSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pgmInfo","160","24","280","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","151","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj = new BindItem("item2","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cmb_mnuSprCd","value","ds_search","MNU_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cmb_pgmGrpSprCd","value","ds_search","PGM_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_pgmInfo","value","ds_search","PGM_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_13.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_YA_13.xfdl", function() {
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
        	{"name" : "프로그램ID", "id" : "PGM_ID"}
        	, {"name" : "프로그램명", "id" : "PGM_NM"}
        	, {"name" : "메뉴구분", "id" : "MNU_SPR_CD"}
        	, {"name" : "프로그램그룹구분코드", "id" : "PGM_GRP_SPR_CD"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.grd_list.setFormatColProperty(4, "band", "left");
        	this.fn_commonCodeSearch();
        	this.fn_search(true, null);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btn_save_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true, null);
        	}
        };*/
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit, type){
        	var bReturn  = true;

        	if(type != "del" && this.fn_dataCheck(this.ds_frtPgmInfo)){
        		bReturn = this.confirm("변경된 내역이 존재합니다. 조회하시겠습니까?");
        	}

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/co/frt/select-frt-pgm-list.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_frtPgmInfo=ds_output1";
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
        	var outDs = "ds_mnuSprCd=ds_output1 ds_useYn=ds_output2 ds_pgmGrpSprCd=ds_output3 ds_gMngAuthCtlCd=ds_output4";
        	var arg = "";
        	this.ds_search.setColumn(0, "CODE_LIST", "MNU_SPR_CD,USE_YN,PGM_GRP_SPR_CD,MNG_AUTH_CTL_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/frt/save-frt-pgm-list.do";
        	var inDs = "ds_search=ds_search ds_save=ds_frtPgmInfo:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //삭제
        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/co/frt/delete-frt-pgm-list.do";
        	var inDs = "ds_delete=ds_delFrtPgmInfo:U"
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
        		if(this.ds_frtPgmInfo.rowcount < 1){
        			this.ds_frtPgmInfo.copyData(this.ds_frtPgmInfoCopy);
        		}
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        		this.grd_list.setCellProperty("head", 0, "text", "0");
        		break;
        	case "save":
        		alert("저장되었습니다.");
        		this.fn_search(true, null);
        		break;
        	case "commonCodeSearch":
        		this.ds_gUseYn.copyData(this.ds_useYn,true);
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");

        		this.ds_gMnuSprCd.copyData(this.ds_mnuSprCd,true);
        		this.ds_mnuSprCd.insertRow(0);
        		this.ds_mnuSprCd.setColumn(0,"COM_DTL_CD_NM","전체");

        		this.ds_gPgmGrpSprCd.copyData(this.ds_pgmGrpSprCd,true);
        		this.ds_pgmGrpSprCd.insertRow(0);
        		this.ds_pgmGrpSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		break;
        	case "delete":
        		if(this.ds_delFrtPgmInfo.rowcount >= 0){
        			this.grd_list.setCellProperty("head", 0,"text","0");
        		}

        		this.ds_delFrtPgmInfo.clearData();
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

        	if(!this.fn_dataCheck(this.ds_frtPgmInfo)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	//그리드 필수값 체크
        	var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_frtPgmInfo);
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
        	var nRow = this.ds_frtPgmInfo.addRow();
        	this.ds_frtPgmInfo.setColumn(nRow, "USE_YN", "Y");
        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제 click 이벤트
        this.btn_del_onclick = function(obj,e){
        	var delArr = [];
        	var chkCnt = this.ds_frtPgmInfo.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_frtPgmInfo.rowcount; i++){
        			if(this.ds_frtPgmInfo.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_frtPgmInfo.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delFrtPgmInfo.addRow();
        					this.ds_delFrtPgmInfo.setColumn(nRow, "PGM_ID", "Y");
        					this.ds_delFrtPgmInfo.copyRow(nRow, this.ds_frtPgmInfo, i);
        				}
        			}
        		}
        		this.ds_frtPgmInfo.deleteMultiRows(delArr);

        		if(this.ds_delFrtPgmInfo.rowcount > 0){
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
        		return;
        	}
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_mnuSprCd.set_index(0);
        	this.Div00.form.cmb_pgmGrpSprCd.set_index(0);
        	this.Div00.form.cmb_useYn.set_index(0);

        };

        //그리드 셀클릭
        this.grd_list_oncellclick = function(obj,e)
        {
        	var objParam = {};
        	objParam.currow = e.row;

        	var displayType = this.grd_list.getCellProperty("body", e.col, "displaytype");
        	var edittype = this.grd_list.getCellProperty("body", e.col, "edittype");

        	if(displayType == "combotext"){
        		obj.dropdownCombo();
        	}

        	if(edittype == "text"){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.ds_frtPgmInfo.addEventHandler("cancolumnchange",this.ds_frtPgmInfo_cancolumnchange,this);
            this.ds_frtPgmInfoCopy.addEventHandler("cancolumnchange",this.ds_pgmGrpInfo_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_YA_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
