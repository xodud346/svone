(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_38");
            this.set_titletext("개인정보접근이력조회");
            this.set_rtl("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CNCT_HR_START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CNCT_HR_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"OPRTR_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CNCT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNCT_HR\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DB_INQ\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empNoOprtrNm", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_coPsnInfoAprcHst", this);
            obj._setContents("<ColumnInfo><Column id=\"CNCT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNCT_HR\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DB_INQ\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sysSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SPR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYS_SPR_CD\"/><Col id=\"SYS_SPR_NM\">전체</Col></Row><Row><Col id=\"SYS_SPR_CD\">FO</Col><Col id=\"SYS_SPR_NM\">FO</Col></Row><Row><Col id=\"SYS_SPR_NM\">BO</Col><Col id=\"SYS_SPR_CD\">BO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dbWrk", this);
            obj._setContents("<ColumnInfo><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DB_WRK\"/><Col id=\"DB_WRK_NM\">전체</Col></Row><Row><Col id=\"DB_WRK\">SELECT</Col><Col id=\"DB_WRK_NM\">조회</Col></Row><Row><Col id=\"DB_WRK_NM\">삽입</Col><Col id=\"DB_WRK\">INSERT</Col></Row><Row><Col id=\"DB_WRK\">UPDATE</Col><Col id=\"DB_WRK_NM\">갱신</Col></Row><Row><Col id=\"DB_WRK\">DELETE</Col><Col id=\"DB_WRK_NM\">삭제</Col></Row><Row><Col id=\"DB_WRK\">DOWNLOAD</Col><Col id=\"DB_WRK_NM\">일반 다운로드</Col></Row><Row><Col id=\"DB_WRK\">BIGDOWNLOAD</Col><Col id=\"DB_WRK_NM\">대용량 다운로드</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"139","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("접속시간");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_cnctHrStartDate","159","24","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","303","24","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_cnctHrEndDate","316","24","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSprCd","cal_cnctHrEndDate:4","24","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"93","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"93","65","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","20","51",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("운영자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","600","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("시스템 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","600","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("IP");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_consolIpAddr","740","55","256","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","160","56","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrIdNm","284","56","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprtrId","418","56","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","1026","21","130","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("Action");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_sysSprCd","740","24","136","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_sysSprCd");
            obj.set_codecolumn("SYS_SPR_CD");
            obj.set_datacolumn("SYS_SPR_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_dbWrk","1160","24","136","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_dbWrk");
            obj.set_codecolumn("DB_WRK");
            obj.set_datacolumn("DB_WRK_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"132","110","28","21",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"132","100","28","btn_layoutClear:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","179","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","214",null,null,"20","89",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_coPsnInfoAprcHst");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"114\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"82\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"접속시간\"/><Cell col=\"1\" text=\"부서ID\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"메뉴ID\"/><Cell col=\"7\" text=\"메뉴명\"/><Cell col=\"8\" text=\"IP주소\"/><Cell col=\"9\" text=\"ACTION\"/><Cell col=\"10\" text=\"건수\"/><Cell col=\"11\" text=\"QUERY\"/><Cell col=\"12\" text=\"다운로드 사유\"/></Band><Band id=\"body\"><Cell text=\"bind:CNCT_HR\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd  HH:mm:ss\"/><Cell col=\"1\" text=\"bind:ORG_CD\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ORG_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:OPRTR_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PSTN_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PGM_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PGM_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CNSOL_IP_ADDR\"/><Cell col=\"9\" text=\"bind:DB_WRK\" textAlign=\"center\"/><Cell col=\"10\" text=\"expr:DB_WRK==&apos;대용량 다운로드&apos; ? &apos; &apos; :  INQ_CNT\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상세보기\"/><Cell col=\"12\" text=\"bind:DOWN_RSN\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:6.44%","55",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"170","110","28","btn_layoutSave:-211",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","1019",null,null,"20","-294",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"접속시간\"/><Cell col=\"1\" text=\"부서ID\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"메뉴ID\"/><Cell col=\"7\" text=\"메뉴명\"/><Cell col=\"8\" text=\"IP주소\"/><Cell col=\"9\" text=\"ACTION\"/><Cell col=\"10\" text=\"건수\"/><Cell col=\"11\" text=\"QUERY\"/></Band><Band id=\"body\"><Cell text=\"bind:CNCT_HR\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd  HH:mm:ss\"/><Cell col=\"1\" text=\"bind:ORG_CD\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ORG_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:OPRTR_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PSTN_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PGM_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PGM_NM\"/><Cell col=\"8\" text=\"bind:CNSOL_IP_ADDR\"/><Cell col=\"9\" text=\"bind:DB_WRK\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:INQ_CNT\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DB_WRK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.cal_cnctHrStartDate","value","ds_search","CNCT_HR_START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_cnctHrEndDate","value","ds_search","CNCT_HR_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cbo_inqPerdSprCd","value","ds_search","INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_consolIpAddr","value","ds_search","CNSOL_IP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_searchRegpsnIdNm","value","ds_search","REGPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_oprtrId","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprtrIdNm","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cbo_sysSprCd","value","ds_search","SYS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cbo_dbWrk","value","ds_search","DB_WRK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_38.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_38.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_38.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.oprtrInfoCount = 0;
        this.selectOprtrId = "";
        this.selectOprtrIdNm = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
         	this.fn_setFromToDate(this.Div00.form.cbo_inqPerdSprCd, this.Div00.form.cal_cnctHrStartDate, this.Div00.form.cal_cnctHrEndDate);
        	this.fn_search(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	if(this.Div00.form.cal_cnctHrStartDate.value > this.Div00.form.cal_cnctHrEndDate.value){
        		alert(this.fn_getMessage("ERRN000002", "접속시간 종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		this.Div00.form.cal_cnctHrEndDate.setFocus();
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/psn-info-arc-hst/select-psn-info-arc-hst-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_coPsnInfoAprcHst=ds_output1";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/psn-info-arc-hst/select-psn-info-arc-hst-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output1";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /**
         * 등록자/수정자 조회
         */
        this.fn_empNoOprtrNm = function(svcId)
        {
        	this.ds_empNoOprtrNm.clearData();
        	var nRow = this.ds_empNoOprtrNm.addRow();

        	this.ds_empNoOprtrNm.setColumn(0, "LANG_CD", "KO");

        	if (svcId == "edt_oprtrId") {
        		this.ds_empNoOprtrNm.setColumn(0, "EMP_NO", this.Div00.form.edt_oprtrId.value);
        		this.ds_empNoOprtrNm.setColumn(0, "OPRTR_NM", this.Div00.form.edt_oprtrIdNm.value);
        	}

        	var sSvcId = svcId;
        	var sUrl = "/co/popup/select-mbr-oprtr-info-list.do";
        	var sInData = "ds_search=ds_empNoOprtrNm"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var oPaging = this.div_paging;

        	switch(svcID){
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.Div00.form.cbo_sysSprCd.set_index(0);
        			this.Div00.form.cbo_inqPerdSprCd.set_index(1);
        			break;
        		case "excelSearch":
        			this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"개인정보접근이력조회"});
        			break;
        		case "edt_oprtrId" :
        			if( this.oprtrInfoCount > 1 ) {
        				this.fn_oprtrId();
        			} else if( this.oprtrInfoCount == 1 ) {
        				this.Div00.form.edt_oprtrId.set_value(this.selectOprtrId);
        				this.Div00.form.edt_oprtrIdNm.set_value(this.selectOprtrIdNm);
        			} else {
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}

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
        		this.fn_search();
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
        		this.fn_search();
        	}
        };

        // 멀티팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId){
        		case "btn_deptMulti":

        			var sIdList = "";
        			var sNmList = "";
        			for(var i=0; i<retObj.length; i++){
        				var rowData = JSON.parse(retObj[i]);
        				sIdList += rowData.DEPT_ID +",";
        			}
        			this.ds_search.setColumn(0,"DEPT_ID", retObj.length);
        			this.Div00.form.edt_deptId.set_value(sIdList.replace(/,\s*$/, ""));
        			break;

        		case "SSP_BO_YA_38;DEPT_ID":
        			var rtnData = "";
        			var sIdList = "";
        			for(var i = 0; i < retObj.length; i++) {
        				rtnData = JSON.parse(retObj[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.edt_deptId.set_value(sIdList);
        			this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
        			break;

        		case "btn_oprtrId" :

        			this.Div00.form.edt_oprtrId.set_value(retObj.EMP_NO);
        			this.Div00.form.edt_oprtrIdNm.set_value(retObj.OPRTR_NM);

        			break;
        	}
        }

        this.fn_callBackForSearch = function(){
        	this.fn_search(true);
        }

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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "CNCT_SEQ,CNCT_HR,ORG_CD,OPRTR_ID,PSTN_NM,MNU_SEQ,CNSOL_IP_ADDR,DB_WRK,INQ_CNT,DB_INQ,OPRTR_NM,ORG_NM";
        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /**
         * 등록자 검색 팝업
         */
        this.fn_oprtrId = function()
        {
        	var oArg = { coCd : this.fv_coCd
        	           , empNo : this.Div00.form.edt_oprtrId.value
        			   , oprtrNm : this.Div00.form.edt_oprtrIdNm.value
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "담당자 조회"
        	              };

        	this.gfn_openPopup("btn_oprtrId", "CO_POP::SSP_BO_PP_27.xfdl", oArg, "fn_popupCallback", oOption);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        /*		var deptStr = this.Div00.form.edt_deptId.value;*/
        		// edt 입력 기준으로 조회조건 다시 세팅
        // 		if(deptStr!="" && deptStr!=null){
        // 			this.fn_setMSearch(this.name,"DEPT_ID",deptStr);
        // 		}else{
        // 			this.ds_search.setColumn(0, "DEPT_ID", null);
        // 		}

        		this.ds_search.setColumn(0, "START_NUM", 0);

        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_search(true);
        		} else{
        			this.fn_insertSelectedData("fn_callBackForSearch");
        		}
        };


        //등록일 조회기간 콤보박스 변경
        this.cbo_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cbo_inqPerdSprCd, this.Div00.form.cal_cnctHrStartDate, this.Div00.form.cal_cnctHrEndDate);
        };

        //레이아웃저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.fn_setFromToDate(this.Div00.form.cbo_inqPerdSprCd, this.Div00.form.cal_cnctHrStartDate, this.Div00.form.cal_cnctHrEndDate);
        	this.Div00.form.cbo_sysSprCd.set_index(0);
        	this.Div00.form.cbo_inqPerdSprCd.set_index(1);
        };

        this.btn_excelDown_onclick = function(obj,e)
        {
        	this.fn_excelSearch();
        };

        // 멀티팝업
        this.multiPopOpen_onclick = function(obj,e)
        {
        	var oArg = { coCd : '1000' };
        	var oOption = { titlebar: 'true' };

        	if(e.fromobject.id == 'btn_deptMulti'){
        		oArg.deptId = this.Div00.form.edt_deptId.value;
        		oOption.title = '부서 조회';
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", oArg, "fn_popupCallback", oOption);
        	} else if(e.fromobject.id == 'btn_oprtrId') {
        		this.fn_oprtrId();
        	}
        };

        //멀티 텍스트 팝업
        this.multipleTextBtn_onclick = function(obj,e)
        {
        	if(e.fromobject.id == 'btn_deptMultiText'){
        		//부서
        		this.fn_showTareaInput(this.name,"DEPT_ID",this.Div00.form.edt_deptId.value, "fn_popupCallback",120,300);
        	}
        };

        //그리드 셀 클릭 이벤트
        this.grd_list_oncellclick = function(obj,e) {
        	if(e.col == 11) {
        		var dataSet = obj.getBindDataset();

        		var params = {
        			pgmId : "SSP_BO_YA_38",
        			detailMsg : this.ds_coPsnInfoAprcHst.getColumn(e.row, "DB_INQ")
        		};
        		var options = {};
        		options.title = "QUERY 상세 내용";

        		this.gfn_openPopup("queryDetailPop", "CO_POP::sndDataCtnPopup.xfdl", params,  "", options);
        	}
        };

        /**
         * 운영자 사번 항목에서 ENTER 시
         */
        this.edt_oprtrId_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.fn_empNoOprtrNm("edt_oprtrId");
        	}
        };

        /**
         * 운영자 명 항목에서 ENTER 시
         */
        this.edt_oprtrIdNm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.fn_empNoOprtrNm("edt_oprtrId");
        	}
        };

        this.Div00_cbo_dbWrk_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.cbo_inqPerdSprCd.addEventHandler("onitemchanged",this.cbo_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.Static02_00.addEventHandler("onclick",this.Div00_Static02_00_onclick,this);
            this.Div00.form.edt_oprtrId.addEventHandler("onkeyup",this.edt_oprtrId_onkeyup,this);
            this.Div00.form.edt_oprtrIdNm.addEventHandler("onkeyup",this.edt_oprtrIdNm_onkeyup,this);
            this.Div00.form.btn_oprtrId.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.cbo_sysSprCd.addEventHandler("onitemchanged",this.Div00_cbo_sysSprCd_onitemchanged,this);
            this.Div00.form.cbo_dbWrk.addEventHandler("onitemchanged",this.Div00_cbo_dbWrk_onitemchanged,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_38.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
