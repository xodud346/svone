(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MF_21");
            this.set_titletext("계정별 결재선 관리 생성/상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNDL_APRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"END_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvl", this);
            obj._setContents("<ColumnInfo><Column id=\"GROW\" type=\"STRING\" size=\"256\"/><Column id=\"DGR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GROW\">1</Col><Col id=\"DGR_CNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CNDL_APRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_COND_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_COND_TOT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cndlAprvSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlForSort", this);
            obj._setContents("<ColumnInfo><Column id=\"GROW\" type=\"STRING\" size=\"256\"/><Column id=\"DGR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listIn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNDL_APRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"END_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlIn", this);
            obj._setContents("<ColumnInfo><Column id=\"GROW\" type=\"STRING\" size=\"256\"/><Column id=\"DGR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlInitial", this);
            obj._setContents("<ColumnInfo><Column id=\"GROW\" type=\"STRING\" size=\"256\"/><Column id=\"DGR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GROW\">1</Col><Col id=\"DGR_CNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","1040","470",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사업장 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","525","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사업장 명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","92",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","92","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("부서 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","525","92","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("부서명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","135","96","350","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popDept","488","96","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","660","96","373","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","0","Static05_00:-1",null,"65","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","Static05_00:-1","130","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("조건");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","135","128","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","135","155","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","434","128","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Min 결재금액");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","434","155","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00","733","128","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("Max 결재금액");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","733","155","300","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_acct","145","159","280","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_acctList");
            obj.set_datacolumn("ACCT_NM");
            obj.set_codecolumn("ACCT_ID");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_amt","442","159","285","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("100000");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_limitbymask("integer");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_condAmt","740","159","285","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("1000000");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_limitbymask("integer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","0","Static05_00_00:-1",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","187","130",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("결재선");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","135","223","898",null,null,"5",null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_binddataset("ds_aprvl");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"96\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"101\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"결재 순번\"/><Cell col=\"2\" text=\"회원 ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"회원명\"/><Cell col=\"4\" text=\"최초/최종\" cssclass=\"grd_WF_bg_image\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:DGR_CNT\"/><Cell col=\"2\" text=\"bind:MBR_ID\" expandshow=\"show\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:MBR_NM\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:APRVL_PST_CD\" displaytype=\"combocontrol\" edittype=\"expr:String(MBR_ID).valueOf()==&quot;undefined&quot;||String(MBR_ID).valueOf()==&quot;&quot;?&quot;none&quot;:&quot;combo&quot;\" combodataset=\"ds_aprvlPstCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","135","4","350","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","660","4","373","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popBzplc","488","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04",null,"70","480","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("복사대상 부서ID, 결재선 확인 및 변경 후 [저장] 버튼 클릭 시 복사됩니다.");
            obj.set_cssclass("sta_WF_title03");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"193","90","26","7",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("결재선삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"193","90","26","btn_delRow:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("결재선추가");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","86","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결재선 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list","431",null,"70","30",null,"50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","505",null,"70","30",null,"50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","579",null,"70","30",null,"50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.edt_deptId","value","ds_list","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_deptNm","value","ds_list","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cbo_acct","value","ds_list","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_amt","value","ds_list","STR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_condAmt","value","ds_list","END_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_bzplcId","value","ds_list","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_bzplcNm","value","ds_list","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MF_21.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MF_21.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MF_21.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var modeChange = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();

        	//공통코드 조회
        	//this.fn_commonCodeSearch();

        	//팝업 변수확인
        	this.fn_popupCheck();

        	this.Div00.form.edt_amt.set_format( "###,###,###,##0" );
        	this.Div00.form.edt_condAmt.set_format( "###,###,###,##0" );

        	this.copyPaste.addGrid(this.Div00.form.grd_mainList);
        	this.copyPaste.addGrid(this.Div00.form.grd_mainList,this,true);  //자동행추가
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "CNDL_APRV_SPR_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_cndlAprvSprCd=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//예산계정 조회
        	this.fn_acctListSearch = function(){
        		var sSvcId = "select-acct-list";
        		var sUrl = "/bgt/byacct/aprvl/select-acct-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_acctList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "search";
        		var sUrl = "/bgt/byacct/aprvl/select-pop-apr-detail.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_aprvl=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//저장
        	this.fn_save = function()	{
        		var sSvcId = "save";
        		var sUrl = "/bgt/byacct/aprvl/insert-pop-apr-detail.do";
        		var inDs = "ds_save1=ds_list ds_save2=ds_aprvl";
        		var outDs = "";
        		var arg = "";
        		var callBack = "fn_callBack";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callBack);
        	}

        	// 수정
        	this.fn_update = function(type)	{
        		var sSvcId = "update";
        		var sUrl = "/bgt/byacct/aprvl/update-pop-apr-detail.do";
        		var inDs = "ds_save1=ds_list ds_save2=ds_aprvl";
        		var outDs = "";
        		var arg = "";
        		var callBack = "fn_callBack";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callBack);
        	}

        	// 복사저장
        	this.fn_copy = function(type)	{
        		var sSvcId = "copy";
        		var sUrl = "/bgt/byacct/aprvl/insert-pop-apr-detail.do";
        		var inDs = "ds_save1=ds_list ds_save2=ds_aprvl";
        		var outDs = "";
        		var arg = "";
        		var callBack = "fn_callBack";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callBack);
        	}

        	// 계정 선택시 정보조회
        	this.fn_searchInfo = function(){
        		var sSvcId = "fn_searchInfo";
        		var sUrl = "/bgt/byacct/aprvl/select-pop-apr-info.do";
        		var inDs = "ds_search=ds_list";
        		var outDs = "ds_listIn=ds_output1 ds_aprvlIn=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// 삭제
        	this.fn_delete = function() {
        		var sSvcId = "delete";
        		var sUrl = "/bgt/byacct/aprvl/delete-cust-bgt-by-acct-aprv.do";
        		var inDs = "ds_save=ds_list";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "selectAcctList"){
        			this.ds_acctList.insertRow(0);
        			this.ds_acctList.setColumn(0,"ACCT_NM","선택");
        		}
        		if(svcID == "save"){
        			// 저장 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        				this.ds_list.clearData();
        				this.ds_list.addRow();
        				this.ds_aprvl.copyData(this.ds_aprvlInitial);
        			}
        		}

        		if(svcID == "update"){
        			// 수정 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        				this.fn_search();
        				this.Div00.form.btn_popBzplc.set_visible(false);
        				this.Div00.form.btn_popDept.set_visible(false);
        			}
        		}

        		if(svcID == "copy"){
        			// 복사 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        				this.close();
        			}
        		}
        		if(svcID == "delete"){
        			// 삭제 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000047")); // 삭제되었습니다.
        				this.close();
        			}
        		}
        		if(svcID == "search"){
        			this.fn_setAprvlPstCd();
        		}
        		if(svcID == "select-acct-list"){
        			this.ds_acctList.insertRow(0);
        			this.ds_acctList.setColumn(0,"ACCT_NM","선택");
        		}
        		if(svcID == "fn_searchInfo"){
        			if(this.ds_listIn.getCount() > 0){
        				if(this.parent.popMode != "copy"){
        					this.ds_list.copyData(this.ds_listIn);
        				}
        			}else{
        				if(this.parent.popMode != "copy"){
        					this.ds_list.setColumn(0, "STR_AMT", "");
        					this.ds_list.setColumn(0, "END_AMT", "");
        					this.ds_list.setColumn(0, "APRVL_SPR_CD", "");
        					this.ds_list.setColumn(0, "APRVL_SET_SEQ", "");
        				}
        			}

        			if(this.ds_aprvlIn.getCount() > 0){
        				if(this.parent.popMode == "copy"){
        					alert(this.fn_getMessage("ERRC000060")); // 이미 결재선이 존재하는 계정입니다. 다른계정을 선택해주세요.
        					this.ds_list.setColumn(0, "ACCT_ID", null);
        					return;
        				}

        				alert(this.fn_getMessage("ERRC000122","계정")); // 이미 결재선이 존재하는 계정입니다.
        				this.ds_aprvl.copyData(this.ds_aprvlIn);
        				this.fn_setAprvlPstCd();

        				this.ds_list.addColumn("APRVL_SPR_CD");
        				this.ds_list.addColumn("APRVL_SET_SEQ");
        				this.ds_list.setColumn(0, "APRVL_SPR_CD", this.ds_aprvl.getColumn(0, "APRVL_SPR_CD"));
        				this.ds_list.setColumn(0, "APRVL_SET_SEQ", this.ds_aprvl.getColumn(0, "APRVL_SET_SEQ"));

        				this.ds_search.setColumn(0, "CO_CD", this.ds_aprvlIn.getColumn(0, "CO_CD"));
        				this.ds_search.setColumn(0, "BZPLC_ID", this.ds_aprvlIn.getColumn(0, "BZPLC_ID"));
        				this.ds_search.setColumn(0, "APRVL_SPR_CD", this.ds_aprvlIn.getColumn(0, "APRVL_SPR_CD"));
        				this.ds_search.setColumn(0, "APRVL_SET_SEQ", this.ds_aprvlIn.getColumn(0, "APRVL_SET_SEQ"));

        				this.modeChange = true;
        			}else{
        				if(this.parent.popMode == "copy") return;

        				this.btn_delete.set_enable(false);
        				this.modeChange = false;
        			}
        		}
        	};

        	// 팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_popBzplc":
        				const bzplcObj = JSON.parse(sRetValue);
        				this.ds_list.setColumn(0, "BZPLC_ID", bzplcObj.BZPLC_ID);
        				this.ds_list.setColumn(0, "BZPLC_NM", bzplcObj.BZPLC_NM);

        				this.ds_aprvl.copyData(this.ds_aprvlInitial);

        				break;

        			case "pop_dept":
        				const deptObj = JSON.parse(sRetValue);
        				this.ds_list.setColumn(0,"DEPT_ID", deptObj.DEPT_ID);
        				this.Div00.form.edt_deptNm.set_value(deptObj.DEPT_NM);

        				// 계정별 결재선 관리 예산계정 조회
        				this.ds_search.setColumn(0, "BZPLC_ID", this.ds_list.getColumn(0, "BZPLC_ID"));
        				this.ds_search.setColumn(0, "DEPT_ID", this.ds_list.getColumn(0, "DEPT_ID"));
        				this.fn_acctListSearch();

        				break;
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search static 초기 설정
        		this.Div00.form.Static01.uEssentiel = "true";
        		this.Div00.form.Static02.uEssentiel = "true";
        		this.Div00.form.Static03.uEssentiel = "true";

        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	//  팝업 변수 체크
        	this.fn_popupCheck = function(){
        		if(this.parent.popMode == null || this.parent.popMode == ""){
        			alert(this.fn_getMessage("ERRC000076")); // 잘못된 접근입니다.

        			this.close();
        		}

        		if(this.parent.popMode == "insert"){
        			this.btn_delete.set_enable(false);
        		}

        		if(this.parent.popMode == "update"){
        			this.ds_list.setColumn(0, "CO_CD", this.parent.coCd);
        			this.ds_list.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        			this.ds_list.setColumn(0, "BZPLC_NM", this.parent.bzplcNm);
        			this.ds_list.setColumn(0, "DEPT_ID", this.parent.deptId);
        			this.ds_list.setColumn(0, "DEPT_NM", this.parent.deptNm);
        			this.ds_list.setColumn(0, "ACCT_ID", this.parent.acctId);
        			this.ds_list.setColumn(0, "STR_AMT", this.parent.strAmt);
        			this.ds_list.setColumn(0, "END_AMT", this.parent.endAmt);
        			this.ds_list.setColumn(0, "APRVL_SPR_CD", this.parent.aprvlSprCd);
        			this.ds_list.setColumn(0, "APRVL_SET_SEQ", this.parent.aprvlSetSSeq);

        			this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        			this.ds_search.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        			this.ds_search.setColumn(0, "DEPT_ID", this.parent.deptId);
        			this.ds_search.setColumn(0, "APRVL_SPR_CD", this.parent.aprvlSprCd);
        			this.ds_search.setColumn(0, "APRVL_SET_SEQ", this.parent.aprvlSetSSeq);

        			this.Div00.form.btn_popBzplc.set_visible(false);
        			this.Div00.form.btn_popDept.set_visible(false);

        			// 계정별 결재선 관리 예산계정 조회
        			this.fn_acctListSearch();

        			this.fn_search();
        		}

        		if(this.parent.popMode == "copy"){
        			this.ds_list.setColumn(0, "CO_CD", this.parent.coCd);
        			this.ds_list.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        			this.ds_list.setColumn(0, "BZPLC_NM", this.parent.bzplcNm);
        			this.ds_list.setColumn(0, "DEPT_ID", this.parent.deptId);
        			this.ds_list.setColumn(0, "DEPT_NM", this.parent.deptNm);
        			this.ds_list.setColumn(0, "STR_AMT", this.parent.strAmt);
        			this.ds_list.setColumn(0, "END_AMT", this.parent.endAmt);

        			this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        			this.ds_search.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        			this.ds_search.setColumn(0, "DEPT_ID", this.parent.deptId);
        			this.ds_search.setColumn(0, "APRVL_SPR_CD", this.parent.aprvlSprCd);
        			this.ds_search.setColumn(0, "APRVL_SET_SEQ", this.parent.aprvlSetSSeq);

        			this.btn_delete.set_enable(false);
        			this.Div00.form.btn_popBzplc.set_visible(false);
        			this.Div00.form.Static04.set_visible(true);

        			// 계정별 결재선 관리 예산계정 조회
        			this.fn_acctListSearch();

        			this.fn_search();
        		}
        	}

        	// 그리드에서 최초/최종 값이 수정된 경우 차수 지정 및 sort 기능
        	this.fn_setAprvlPstCd = function(){
        		if(this.ds_aprvl.rowcount > 0){
        			var seq = 0;
        			var seqA = 1;
        			for(var i=0; i<this.ds_aprvl.rowcount; i++){
        				if(this.ds_aprvl.getColumn(i, "APRVL_PST_CD") == "10"){
        					this.setBtn(seq, seqA, i);
        					seqA++;
        					seq++;
        				}
        			}

        			var seqB = 1;
        			for(var i=0; i<this.ds_aprvl.rowcount; i++){
        				if(this.ds_aprvl.getColumn(i, "APRVL_PST_CD") == "20"){
        					this.setBtn(seq, seqB, i);
        					seqB++;
        					seq++;
        				}
        			}

        			for(var i=0; i<this.ds_aprvl.rowcount; i++){
        				if(this.ds_aprvl.getColumn(i, "APRVL_PST_CD") == "" || this.ds_aprvl.getColumn(i, "APRVL_PST_CD") == null){
        					this.ds_aprvl.setColumn(i, "GROW", seq);
        					this.setBtn(seq, null, i);
        					seq++;
        				}
        			}

        			this.ds_aprvlForSort.clearData();
        			for(var i=0; i<this.ds_aprvl.rowcount; i++){
        				var selectRow = this.ds_aprvl.findRow("GROW", i);
        				var targetRow = this.ds_aprvlForSort.addRow();
        				this.ds_aprvlForSort.copyRow(targetRow, this.ds_aprvl, selectRow);
        				this.ds_aprvlForSort.copyRow()
        			}

        			this.ds_aprvl.clearData();
        			this.ds_aprvl.copyData(this.ds_aprvlForSort);
        			this.ds_aprvlForSort.clearData();
        		}

        	}

        	// ds_aprvl 버튼 세팅
        	this.setBtn = function(seq, dgrSeq, i){
        		if(dgrSeq != ""){ this.ds_aprvl.setColumn(i, "DGR_CNT", dgrSeq); }
        		this.ds_aprvl.setColumn(i, "GROW", seq);
        	}

        	// 결재자ID 중복여부체크
        	this.fn_chkDuplAprvl = function(rowNum, mbrId){
        		var j = 0;
        		for(var i=0; i<this.ds_aprvl.rowcount; i++){
        			if(this.ds_aprvl.getColumn(i, "MBR_ID") == mbrId && (j > 0)){
        				alert(this.fn_getMessage("ERRC000001", this.ds_aprvl.getColumn(i, "MBR_NM"))); // 은(는) 이미 등록된 결재자입니다.

        				this.ds_aprvl.setColumn(rowNum, "MBR_ID", "");
        				this.ds_aprvl.setColumn(rowNum, "MBR_NM", "");

        				return;
        			}

        			if(this.ds_aprvl.getColumn(i, "MBR_ID") == mbrId) j++
        		}
        	}

        	// 결재자ID 중복여부체크 - 저장시
        	this.fn_chkDuplAprvlAll = function(){
        		var arr = [];
        		for(var i=0; i<this.ds_aprvl.rowcount; i++){
        			arr.push(this.ds_aprvl.getColumn(i, "MBR_ID"));
        		}
        		for(var i=0; i<this.ds_aprvl.rowcount; i++){
        			var chk = 0;
        			for(var j=0; j<arr.length; j++){
        				if(this.ds_aprvl.getColumn(i, "MBR_ID") === arr[j]) ++chk;
        				if(Number(chk) > 1){
        					alert(this.fn_getMessage("ERRC000001", this.ds_aprvl.getColumn(j, "MBR_ID"))); // 은(는) 이미 등록된 결재자입니다.

        					this.ds_aprvl.setColumn(j, "MBR_ID", "");
        					this.ds_aprvl.setColumn(j, "MBR_NM", "");

        					return true;
        				}
        			}
        		}
        		return false;
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        	// 사업장팝업버튼
        	this.btn_popBzplc_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			, bzplcId : this.ds_list.getColumn(0, "BZPLC_ID")
        			, aprvl	  : 'Y'
        		};
        		var opts = { title : '사업장 조회', titlebar: 'true' }
        		this.gfn_openPopup("btn_popBzplc", "CO_POP::SSP_BO_PP_22.xfdl", oArg, "fn_popupCallback", opts);
        	};

        	// 부서팝업버튼
        	this.popOpen_onclick = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID")=="" || this.ds_list.getColumn(0, "BZPLC_ID")==null){
        			alert(this.fn_getMessage("ERRC000007", "사업장")); // 사업장을 먼저 조회해주세요.
        			return;
        		}

        		var oArg = {
        			coCd : '1000'
        			, deptId : this.ds_list.getColumn(0, "DEPT_ID")
        			, bzplcId : this.ds_list.getColumn(0, "BZPLC_ID")
        		};
        		if(e.fromobject.id == "btn_popDept"){
        			this.gfn_openPopup("pop_dept", "CC::SSP_BO_PP_39.xfdl", oArg, "fn_popupCallback", {title : '부서 조회', titlebar:"true"});
        		}
        	};

        	// 저장버튼
        	this.btn_save_onclick = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID") == "" || this.ds_list.getColumn(0, "BZPLC_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "사업장ID")); // 사업장ID는 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "DEPT_ID") == "" || this.ds_list.getColumn(0, "DEPT_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "부서ID")); // 부서ID는 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "ACCT_ID") == "" || this.ds_list.getColumn(0, "ACCT_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "계정")); // 계정은 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_aprvl.getRowCount() < 1){
        			alert(this.fn_getMessage("ERRC000109")); // 결재선을 하나 이상 입력해주세요.
        			return;
        		}

        		for(var i=0; i<this.ds_aprvl.rowcount; i++){
        			var row = this.ds_aprvl.getColumn(i, "GROW");
        			var mbrId = this.ds_aprvl.getColumn(i, "MBR_ID");
        			var aprvlPstCd = this.ds_aprvl.getColumn(i, "APRVL_PST_CD");

        			if(mbrId=="" || mbrId==null){
        				// 번째줄 의 회원ID는 필수입력값입니다.
        				alert(this.fn_getMessage("ERRC000016", (i+1)));
        				return;
        			}

        			if(aprvlPstCd=="" || aprvlPstCd==null){
        				// 번째줄 의 최초/최종은 필수입력값입니다.
        				alert(this.fn_getMessage("ERRC000015", (i+1)));
        				return;
        			}
        		}

        		// 결재자 중복입력 체크
        		if(this.fn_chkDuplAprvlAll()) return;

        		/* 안먹음
        		if(!this.gfn_dsIsUpdated(this.ds_aprvl) && !this.gfn_dsIsUpdated(this.ds_list)) {
        			alert(this.fn_getMessage("ERRC000035")); // 변경된 내용이 없습니다.
        			return;
        		}
        		*/

        		var seq = this.ds_list.getColumn(0, "APRVL_SET_SEQ");
        		if(this.modeChange == true){
        			if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        				// 저장하시겠습니까
        				return;
        			}
        			this.fn_update();
        			return;
        		}
        		if(this.parent.popMode == "insert"){
        			if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        				// 저장하시겠습니까
        				return;
        			}
        			this.fn_save();
        			return;
        		}
        		if(this.parent.popMode == "update" && seq != ""){
        			if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        				// 저장하시겠습니까
        				return;
        			}
        			this.fn_update();
        			return;
        		}
        		//if(this.parent.popMode == "copy"){
        		else{
        			if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        				// 저장하시겠습니까
        				return;
        			}
        			this.fn_copy();
        		}
        	};

        	// 전체이력조회 버튼
        	this.btn_histPop_onclick = function(obj,e)
        	{
        		var objParam = {
        			coCd:this.ds_mbrInfo.getColumn(0, "CO_CD")
        			, mbrId:this.ds_mbrInfo.getColumn(0, "MBR_ID")
        		};
        		this.gfn_openPopup("CustMbrHistPop", "CC::SSP_BO_MA_51.xfdl", objParam);
        	};

        	this.ds_aprvl_changed = function(obj,e)
        	{
        		this.columnRow = e.row;
        		if(e.columnid == "APRVL_PST_CD"){
        			this.fn_setAprvlPstCd();
        		}
        	};

        	// 상단 그리드 회원ID 검색버튼 클릭
        	this.Div00_Grid00_onexpanddown = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID")=="" || this.ds_list.getColumn(0, "BZPLC_ID")==null){
        			alert(this.fn_getMessage("ERRC000007", "사업장")); // 사업장을 먼저 조회해주세요.
        			return;
        		}

        		var params = {
        			coCd : '1000'
        			, bzplcId : this.ds_list.getColumn(0,"BZPLC_ID")
        			, mbrId	  : this.ds_aprvl.getColumn(e.row, "MBR_ID")
        			, aprvAuthUseYn : 'Y'
        			, levMbrYn : 'N'
        		};

        		this.gfn_openPopup("deptPop", "CO_POP::SSP_BO_PP_24.xfdl", params, function(sPopupId, sRetValue) {
        			const mbrObj = JSON.parse(sRetValue);
        			this.ds_aprvl.setColumn(e.row, "MBR_ID", mbrObj.MBR_ID);
        			this.ds_aprvl.setColumn(e.row, "MBR_NM", mbrObj.MBR_NM);
        			// 결재자ID 중복체크
        			this.fn_chkDuplAprvl(e.row, mbrObj.MBR_ID);
        		}, {title : '결재자 조회', titlebar:"true"});
        	};

        	// 목록버튼 클릭
        	this.btn_list_onclick = function(obj,e)
        	{
        		if(this.confirm(this.fn_getMessage("ERRC000036"))) {
        			// 변경된 내용이 저장되지 않습니다.
        			this.close();
        		}
        	};

        	// 삭제버튼 클릭
        	this.btn_delete_onclick = function(obj,e)
        	{
        		if(!this.confirm(this.fn_getMessage("ERRC000023"))){
        			// 기 등록된 결재선 전체가 삭제됩니다. 삭제하시겠습니까?
        			return;
        		}
        		this.fn_delete();
        	};

        	// 조건-계정 콤보 클릭 시
        	this.comboClick = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID")=="" || this.ds_list.getColumn(0, "BZPLC_ID")==null){
        			this.alert(this.fn_getMessage("ERRC000007", "사업장")); // 사업장을 먼저 조회해주세요.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "DEPT_ID")=="" || this.ds_list.getColumn(0, "DEPT_ID")==null){
        			this.alert(this.fn_getMessage("ERRC000007", "부서")); // 부서를 먼저 조회해주세요.
        			return;
        		}
        		if(this.ds_acctList.getCount() < 1){
        			alert(this.fn_getMessage("ERRC000099")); // 해당부서에 등록된 계정이 없습니다.
        			return;
        		}
        	};

        	// 계정 선택 시 정보조회
        	this.Div00_cbo_acct_onitemchanged = function(obj,e)
        	{
        		this.fn_searchInfo();
        	};

        	// 결재선추가 버튼
        	this.Div00_btn_addRow_onclick = function(obj,e)
        	{
        		this.ds_aprvl.addRow();
        		this.ds_aprvl.setColumn(this.ds_aprvl.rowposition, "DGR_CNT", "");
        		this.ds_aprvl.setColumn(this.ds_aprvl.rowposition, "APRVL_SPR_CD", this.ds_list.getColumn(0, "APRVL_SPR_CD"));
        		this.ds_aprvl.setColumn(this.ds_aprvl.rowposition, "APRVL_SET_SEQ", this.ds_list.getColumn(0, "APRVL_SET_SEQ"));
        	};

        	// 결재선삭제 버튼
        	this.Div00_btn_delRow_onclick = function(obj,e)
        	{
        		var chkStr = this.ds_aprvl.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		for(var i=this.ds_aprvl.rowcount-1; i>=0; i--){
        			if(this.ds_aprvl.getColumn(i, "CHK") == 1){
        				this.ds_aprvl.deleteRow(i);
        			}
        		}
        		this.fn_setAprvlPstCd();
        	};

        	// 결재선 그리드 클릭 시
        	this.Div00_Grid00_oncellclick = function(obj,e)
        	{
        		var columnRow = e.row;
        		var columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID
        		if(columnId == "APRVL_PST_CD"){
        			var mbrId = this.ds_aprvl.getColumn(e.row, "MBR_ID");
        			if(mbrId=="" || mbrId==null){
        				alert(this.fn_getMessage("ERRC000007", "결재자"));
        			}
        			else{
        				obj.dropdownCombo();
        			}
        		}
        	};

        	this.SSP_BO_MF_21_onkeyup = function(obj,e)
        	{
        		//ESC : 닫기기능
        		if(e.keycode == 27){
        			this.close();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MF_21_onkeyup,this);
            this.Div00.form.btn_popDept.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Div00_Static02_00_01_onclick,this);
            this.Div00.form.cbo_acct.addEventHandler("oneditclick",this.comboClick,this);
            this.Div00.form.cbo_acct.addEventHandler("onitemchanged",this.Div00_cbo_acct_onitemchanged,this);
            this.Div00.form.grd_mainList.addEventHandler("onexpanddown",this.Div00_Grid00_onexpanddown,this);
            this.Div00.form.grd_mainList.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.btn_popBzplc.addEventHandler("onclick",this.btn_popBzplc_onclick,this);
            this.Div00.form.btn_delRow.addEventHandler("onclick",this.Div00_btn_delRow_onclick,this);
            this.Div00.form.btn_addRow.addEventHandler("onclick",this.Div00_btn_addRow_onclick,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.ds_aprvl.addEventHandler("oncolumnchanged",this.ds_aprvl_changed,this);
            this.ds_aprvlForSort.addEventHandler("oncolumnchanged",this.ds_aprvl_changed,this);
            this.ds_aprvlIn.addEventHandler("oncolumnchanged",this.ds_aprvl_changed,this);
            this.ds_aprvlInitial.addEventHandler("oncolumnchanged",this.ds_aprvl_changed,this);
        };
        this.loadIncludeScript("SSP_BO_MF_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
