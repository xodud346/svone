(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("운영자 이관등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_L", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_T", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSSGR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRP_USR_INFO_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_B", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSSGR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRP_USR_INFO_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_L_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_T_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSSGR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRP_USR_INFO_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_B_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSSGR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRP_USR_INFO_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"109","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","21",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","20","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조직코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","532","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("USE_YN","672","25","139","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"63","60","26","120",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"63","60","26","184",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search_all",null,"63","96","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("전체 조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","139",null,null,"0","2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("Button62",null,"0","81","28","332",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_select");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","110","28","218",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_L","20","37","210",null,null,"20",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list_L");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"162\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ORG_NM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_T","245","37",null,null,"20","390",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list_T");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"51\"/><Column size=\"108\"/><Column size=\"81\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"111\"/><Column size=\"101\"/><Column size=\"88\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"운영자명\"/><Cell col=\"5\" text=\"운영자 ID\"/><Cell col=\"6\" text=\"담당업무\"/><Cell col=\"7\" text=\"직위명\"/><Cell col=\"8\" text=\"직급명\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ORG_NM\"/><Cell col=\"3\" text=\"bind:EMP_NO\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\"/><Cell col=\"5\" text=\"bind:OPRTR_ID\"/><Cell col=\"6\" text=\"bind:CHR_TASK_NM\"/><Cell col=\"7\" text=\"bind:PSTN_NM\"/><Cell col=\"8\" text=\"bind:JBPOS_NM\"/><Cell col=\"9\" text=\"expr:USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","18.34%","grd_T:5","1071","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnDown00","577","11","70","24",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_Move_Down");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnUp","498","11",null,"24","btnDown00:4",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_Move_Up");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_B","245","Div00:3",null,null,"20","20",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list_B");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"51\"/><Column size=\"108\"/><Column size=\"81\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"111\"/><Column size=\"101\"/><Column size=\"88\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"조직명\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"운영자명\"/><Cell col=\"5\" text=\"운영자 ID\"/><Cell col=\"6\" text=\"담당업무\"/><Cell col=\"7\" text=\"직위명\"/><Cell col=\"8\" text=\"직급명\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ORG_NM\"/><Cell col=\"3\" text=\"bind:EMP_NO\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\"/><Cell col=\"5\" text=\"bind:OPRTR_ID\"/><Cell col=\"6\" text=\"bind:CHR_TASK_NM\"/><Cell col=\"7\" text=\"bind:PSTN_NM\"/><Cell col=\"8\" text=\"bind:JBPOS_NM\"/><Cell col=\"9\" text=\"expr:USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("ORG_CD","159","25","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("ORG_NM","309","25","186","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnOrgSearch","499","25","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearLayout",null,"138","110","28","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveLayout",null,"138","100","28","114",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_excel","184","1110","898","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list_excel");
            obj.set_enable("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"197\"/><Column size=\"118\"/><Column size=\"112\"/><Column size=\"102\"/><Column size=\"131\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"86\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직명\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"운영자명\"/><Cell col=\"4\" text=\"운영자ID\"/><Cell col=\"5\" text=\"담당업무\"/><Cell col=\"6\" text=\"직위명\"/><Cell col=\"7\" text=\"직급명\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"이관여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ORG_NM\"/><Cell col=\"2\" text=\"bind:EMP_NO\"/><Cell col=\"3\" text=\"bind:OPRTR_NM\"/><Cell col=\"4\" text=\"bind:OPRTR_ID\"/><Cell col=\"5\" text=\"bind:CHR_TASK_NM\"/><Cell col=\"6\" text=\"bind:PSTN_NM\"/><Cell col=\"7\" text=\"bind:JBPOS_NM\"/><Cell col=\"8\" text=\"bind:USE_YN\"/><Cell col=\"9\" text=\"bind:INF_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ORG_CD","value","ds_search","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ORG_NM","value","ds_search","ORG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_10.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_10.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_10
        /* 작 성 일 자 : 2022/03/04
        /* 작  성   자 : 이성민
        /* 설       명 : 운영자 이관등록
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.selectOrgCount = 0;
        this.selectOrgCd = "";
        this.selectOrgNm= "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//초기조회
        	this.ds_search.setColumn(0, "USE_YN", "Y");
        	this.fn_search("L");

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Button58_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };




        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(type) {

        	var sSvcId = "";
        	var sUrl = "";
        	var inDs = "";
        	var outDs = "";
        	var arg = "";


        	if( type == "L" ) {
        		//좌측 그리드 조회
        		sSvcId = "selectCoMbrOprtrOrgInfoList";
        		sUrl = "/co/select-co-mbr-oprtr-org-info-list.do";
        		inDs = "ds_search=ds_search";
        		outDs = "ds_list_L=ds_output";
        		arg = "";

        	} else if( type == "T" ) {
        		//우측 상단 그리드 조회
        		sSvcId = "selectCoMbrOprtrInfoInfList";
        		sUrl = "/co/select-co-mbr-oprtr-info-inf-list.do";
        		inDs = "ds_search=ds_search_detail";
        		outDs = "ds_list_T=ds_output";
        		arg = "";

        	} if( type == "B" ) {
        		//우측 하단 그리드 조회
        		sSvcId = "selectCoMbrOprtrInfoList";
        		sUrl = "/co/select-co-mbr-oprtr-info-list.do";
        		inDs = "ds_search=ds_search_detail";
        		outDs = "ds_list_B=ds_output";
        		arg = "";

        	} else if( type == "ALL" ) {
        		//전체조회
        		sSvcId = "selectCoMbrOprtrInfoAllList";
        		sUrl = "/co/select-co-mbr-oprtr-info-all-list.do";
        		inDs = "ds_search=ds_search_detail";
        		outDs = "ds_list_T=ds_output1 ds_list_B=ds_output2";
        		arg = "";

        	} else if( type == "EXCEL" ) {
        		// 엑셀 다운로드
        		sSvcId = "selectCoMbrOprtrInfoExcelList";
        		sUrl = "/co/select-co-mbr-oprtr-info-excel-list.do";
        		inDs = "ds_search=ds_search_detail";
        		outDs = "ds_list_excel=ds_output";
        		arg = "";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        }

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //저장
        this.fn_save = function() {

        	var sSvcId = "saveOperatorTransfer";
        	var sUrl = "/co/save-operator-transfer.do";
        	var inDs = "ds_save=ds_list_T:U ds_save2=ds_list_B:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }




        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectCoMbrOprtrOrgInfoList") {
        		if( this.ds_list_L.rowcount == 0 ) {
        			this.ds_list_L.copyData(this.ds_list_L_copy);

        			this.ds_list_T.clearData();
        			this.ds_list_B.clearData();
        		}

        		if( this.ds_list_L.rowcount > 0 ) {
        			this.fn_getMbnOptrInfo();
        		}

        	} else if(svcID == "selectCoMbrOprtrInfoList") {
        		if( this.ds_list_T.rowcount == 0 ) this.ds_list_T.copyData(this.ds_list_T_copy);

        	} else if(svcID == "selectCoMbrOprtrInfoInfList") {
        		if( this.ds_list_B.rowcount == 0 ) this.ds_list_B.copyData(this.ds_list_B_copy);

        	} else if( svcID == "commonCodeSearch" ) {
        		//사용여부 전체값 추가
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        		this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.Div00.form.USE_YN.set_index(1);

        	} else if( svcID == "saveOperatorTransfer" ) {
        		if( errorCode == 0 ) {
        			alert("저장되었습니다.");
        			this.fn_search("T");
        			this.fn_search("B");
        			return;
        		} else {
        			alert("errorMsg");
        			return;
        		}
        	} else if( svcID == "selectOprtrOrgInfoList" ) {  //조직조회(엔터입력) 콜백
        		if( this.selectOrgCount > 1 ) {
        			this.fn_popup("SSP_BO_PP_43");
        		} else if( this.selectOrgCount == 1 ) {
        			this.ds_search.setColumn(0, "ORG_CD", this.selectOrgCd);
        			this.ds_search.setColumn(0, "ORG_NM", this.selectOrgNm);
        		} else {
        			//this.gfn_alert_null("MSGIDIDIDIDIDID", "", "MSGIDIDIDIDIDID", "검색된 내용이 없습니다", "A", "");
        			alert("검색된 내용이 없습니다.");;
        			return false;
        		}

        	} else if( svcID == "selectCoMbrOprtrInfoExcelList" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grid_excel, fileName:"운영자 이관등록" });
        	}
        };



        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //우측 데이터 조회
        this.fn_getMbnOptrInfo = function() {

        	this.ds_search_detail.setColumn(0, "ORG_CD", this.ds_list_L.getColumn(this.ds_list_L.rowposition, "ORG_CD"));

        	this.fn_search("T");
        	this.fn_search("B");
        };

        //데이터 이동
        this.fn_moveData = function(dsMain, dsCopy) {

        	//체크박스 선택여부 확인
        	var chkCnt = dsMain.getCaseCount("COL_CHK==1");
        	if( chkCnt == 0 ) {
        		alert("선택된 행이 없습니다.");
        		return false;
        	}

        	var chkDsChange1 = this.gfn_dsIsUpdated(this.ds_list_T); //this.fn_dataCheck(this.ds_comCdList);
        	var chkDsChange2 = this.gfn_dsIsUpdated(this.ds_list_B); //this.fn_dataCheck(this.ds_comCdDtlList);

        	if( !chkDsChange1 && !chkDsChange2) {
        		alert("수정된 내용이 없습니다");
        	} else {
        		if( this.confirm("선택된 데이터를 이관 하시겠습니까?") ) {
        			//체크된 데이터만 이관.
        			var delArr = [];
        			for(var i=0; i < dsMain.rowcount; i++){
        				var checkbox = dsMain.getColumn(i, "COL_CHK");
        				if( checkbox == 1 ) {
        					var idx = dsCopy.addRow();
        					dsCopy.copyRow(idx, dsMain, i);

        					delArr.push(i);

        				}
        			}
        			dsMain.deleteMultiRows(delArr);

        			//저장
        			this.fn_save();
        		}
        	}
        }


        // 그리드 클릭시 체크박스 체크되도록
        this.fn_autoGridCheck = function(obj,e) {

        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if( e.col != 0 ) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        	}

        	dataSet.setColumn(e.row, "COL_CHK", chkValue);
        }



        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.Button58_onclick = function(obj,e)
        {
        	//변경된 데이터 존재하는지 체크
        	if( this.gfn_dsIsUpdated(this.ds_list_T) || this.gfn_dsIsUpdated(this.ds_list_B)) {
        		if( !this.confirm("변경된 내용이 존재합니다. 조회 하시겠습니까?") ) return;
        	}
        	this.fn_search("L");
        };

        //아래버튼 클릭
        this.Div01_Div00_btnDown00_onclick = function(obj,e)
        {
        	this.fn_moveData(this.ds_list_T, this.ds_list_B);
        	//this.ds_list_B.addRow();
        };

        // div 사이즈 리사이징
        this.Div01_Div00_onsize = function(obj,e)
        {
        	var nX = e.cx;
        	var nCompWidth = this.Div01.form.Div00.form.Div00.getOffsetWidth();
        	var nCompX = (e.cx/2) - (nCompWidth/2);
        	this.Div01.form.Div00.form.Div00.setOffsetLeft(nCompX);
        };

        //검색 div 엔터
        /*this.Div00_onkeyup = function(obj:nexacro.Div,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "ORG_CD" || e.fromobject.id == "ORG_NM") {
        				this.fn_popupAutoSearch("selectOprtrOrgInfoList", "/co/select-oprtr-org-info-list.do");
        			} else {
        				this.fn_search(0);
        			}
        		}
        	}
        };*/

        //저장버튼
        this.Div01_Button62_onclick = function(obj,e)
        {
        	// 저장하지 않고 위 아래로 데이터를 왔다갔다 할 시 삭제된 일부의 데이터 셋을 복구 할 수 없음. 버튼 숨김.
        	/*
        	var chkDsChange1 = this.fn_dataChangeCheck(this.ds_list_T); //this.fn_dataCheck(this.ds_comCdList);
        	var chkDsChange2 = this.fn_dataChangeCheck(this.ds_list_B); //this.fn_dataCheck(this.ds_comCdDtlList);

        	if( !chkDsChange1 && !chkDsChange2) {
        		alert("수정된 내용이 없습니다");
        	} else {
        		if( this.confirm("저장 하시겠습니까?") ) {
        			this.fn_save();
        		}
        	}
        	*/
        };

        //위로 이동 버튼
        this.Div01_Div00_Div00_btnUp_onclick = function(obj,e)
        {
        	this.fn_moveData(this.ds_list_B, this.ds_list_T);
        };

        //상단 그리드 클릭
        this.Div01_grd_T_oncellclick = function(obj,e)
        {
        	this.fn_autoGridCheck(obj, e);
        };

        //하단 그리드 클릭
        this.Div01_grd_B_oncellclick = function(obj,e)
        {
        	this.fn_autoGridCheck(obj, e);
        };

        //초기화 버튼
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "CO_CD", "");
        	this.ds_search.setColumn(0, "ORG_CD", "");
        	this.ds_search.setColumn(0, "ORG_NM", "");
        	this.ds_search.setColumn(0, "USE_YN", "Y");
        };

        // 셀 포커싱 이벤트
        this.Div01_grd_L_oncellposchanged = function(obj,e)
        {
        	if( this.ds_list_L.rowcount > 0 ) {
        		this.fn_getMbnOptrInfo();
        	}
        };


        this.Div00_btnOrgSearch_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_43");
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

        	if( sPopupId == "SSP_BO_PP_43" ) {
        		// 조직명 조회 리턴
        		this.ds_search.setColumn(0, "ORG_CD", resData.ORG_CD);
        		this.ds_search.setColumn(0, "ORG_NM", resData.ORG_NM);
        	} else if( sPopupId == "SSP_BO_PP_44" ) {
        		// 조직명 조회 리턴
        		this.ds_search.setColumn(0, "OPRTR_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "OPRTR_NM", resData.OPRTR_NM);
        	}
        };

        //팝업 호출 함수
        this.fn_popup = function(popupId) {
        	var objParam = {};

        	if( popupId == "SSP_BO_PP_43" ){
        		// 조직명 조회 팝업
        		objParam.orgCd = this.ds_search.getColumn(0, "ORG_CD");
        		objParam.orgNm = this.ds_search.getColumn(0, "ORG_NM");
        	} else if( popupId == "SSP_BO_PP_44" ){
        		// 운영자명 조회 팝업
        		objParam.oprtrId = this.ds_search.getColumn(0, "OPRTR_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "OPRTR_NM");
        	}

        	this.gfn_openPopup(popupId, "CO_POP::" + popupId + ".xfdl", objParam, "fn_popupCallback");
        };

        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	if( "selectOprtrOrgInfoList" == id ) {
        		var sSvcId = id;
        		var sUrl = url;
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        }

        this.Div00_btn_search_all_onclick = function(obj,e)
        {
        	this.fn_search("ALL");
        };

        this.Div01_Button01_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');
        		return false;
        	}
        	this.fn_search("EXCEL");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.Div00.form.Button58.addEventHandler("onclick",this.Button58_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.btn_search_all.addEventHandler("onclick",this.Div00_btn_search_all_onclick,this);
            this.Div01.form.Button62.addEventHandler("onclick",this.Div01_Button62_onclick,this);
            this.Div01.form.Button01.addEventHandler("onclick",this.Div01_Button01_onclick,this);
            this.Div01.form.grd_L.addEventHandler("oncellposchanged",this.Div01_grd_L_oncellposchanged,this);
            this.Div01.form.grd_T.addEventHandler("oncellclick",this.Div01_grd_T_oncellclick,this);
            this.Div01.form.Div00.addEventHandler("onsize",this.Div01_Div00_onsize,this);
            this.Div01.form.Div00.form.btnDown00.addEventHandler("onclick",this.Div01_Div00_btnDown00_onclick,this);
            this.Div01.form.Div00.form.btnUp.addEventHandler("onclick",this.Div01_Div00_Div00_btnUp_onclick,this);
            this.Div01.form.grd_B.addEventHandler("oncellclick",this.Div01_grd_B_oncellclick,this);
            this.btnOrgSearch.addEventHandler("onclick",this.Div00_btnOrgSearch_onclick,this);
            this.btnClearLayout.addEventHandler("onclick",this.btnClearLayout_onclick,this);
            this.btnSaveLayout.addEventHandler("onclick",this.btnSaveLayout_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
