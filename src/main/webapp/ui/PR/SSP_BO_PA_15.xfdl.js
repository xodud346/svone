(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("divPopup");
            this.set_titletext("SSP카테고리 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLS_LVL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sel_mthd_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"0\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"0\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_01","20","48",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","152","10",null,"24","10",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","142","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("위치");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static07","100","37",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_PRD_CLSF_NM","0","37","142","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("카테고리명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static07_00","100","68",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","68","142","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("상품군 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_01.addChild(obj.name, obj);

            obj = new Radio("LWST_CD_YN","152","72","200","24",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var div_01_form_LWST_CD_YN_innerdataset = new nexacro.NormalDataset("div_01_form_LWST_CD_YN_innerdataset", obj);
            div_01_form_LWST_CD_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_01_form_LWST_CD_YN_innerdataset);
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","152","41",null,"24","10",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_maxlength("50");
            obj.set_displaynulltext("카테고리명에 \'<>\'는 입력금지");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_cancel","198",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","302",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("| SSP카테고리 추가");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","20","147",null,null,"20","64",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","100","0",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("sta_MRO_PRD","0","0","142","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("14");
            obj.set_text("S-MRO카테고리 매핑");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLCD","152","4","149","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","100","93",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("sta_SEL_MTHD_CD","0","93","142","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("16");
            obj.set_text("선정방식");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLSF_NM","305","4",null,"24","39",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_mro",null,"4","25","25","10",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("SEL_MTHD_CD","152","97","149","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_sel_mthd_cd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","100","31",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("sta_PR_PRD_CLSF_CHRPSN","0","31","142","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("18");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_ID","152","35","149","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_enableevent("true");
            obj.set_readonly("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_NM","305","35",null,"24","39",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_prd",null,"35","25","25","10",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","100","62",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("sta_MD_PRD_CLSF_CHRPSN","0","62","142","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("20");
            obj.set_text("MD담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_ID","152","66","149","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_NM","305","66",null,"24","39",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_md",null,"66","25","25","10",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("8");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","100","124",null,"105","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("sta_IMG","0","124","142","105",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("22");
            obj.set_text("전시상품군 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","152","131","100","91",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_cssclass("productImage");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_image_del","256","131","24","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_close_small_red");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_image_add",null,"131","104","24","10",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("12");
            obj.set_text("이미지 등록");
            obj.set_enable("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("DISP_PRD_FILE_ATTC_ID","500","193","36","25",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.div_02.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","230","24","348","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,440,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_01.form.PRD_CLS_LVL_NM","value","ds_detail","PRD_CLS_LVL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_01.form.PRD_CLSF_NM","value","ds_detail","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_01.form.LWST_CD_YN","value","ds_detail","LWST_CD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_02.form.MRO_PRD_CLCD","value","ds_detail","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_02.form.PR_PRD_CLSF_CHRPSN_ID","value","ds_detail","PR_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_02.form.MD_PRD_CLSF_CHRPSN_ID","value","ds_detail","MD_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_02.form.SEL_MTHD_CD","value","ds_detail","SEL_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_02.form.PR_PRD_CLSF_CHRPSN_NM","value","ds_detail","PR_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_02.form.MD_PRD_CLSF_CHRPSN_NM","value","ds_detail","MD_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_02.form.MRO_PRD_CLSF_NM","value","ds_detail","MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_02.form.DISP_PRD_FILE_ATTC_ID","value","ds_detail","DISP_PRD_FILE_ATTC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_15.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_15.xfdl","RD::rdMain.xjs");
        this.addIncludeScript("SSP_BO_PA_15.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_15.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP카테고리 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds1 = [
        	   {"name" : "카테고리명", "id" : "PRD_CLSF_NM"}
        ];

        this.valiFormIds2 = [
        	   {"name" : "카테고리명", "id" : "PRD_CLSF_NM"}
        	   , {"name" : "S-MRO카테고리 매핑", "id" : "MRO_PRD_CLCD"}
        	   , {"name" : "상품담당자", "id" : "PR_PRD_CLSF_CHRPSN_ID"}
        	   , {"name" : "MD담당자", "id" : "MD_PRD_CLSF_CHRPSN_ID"}
        	   , {"name" : "선정방식", "id" : "SEL_MTHD_CD"}
        ];

        this.valiFormIds3 = [
        	   {"name" : "전시상품군 이미지", "id" : "DISP_PRD_FILE_ATTC_ID"}
        ];

        var vLevel = this.parent.level;
        var vLvlNm = this.parent.lvlNm;
        var vPrdClcd = this.parent.prdClcd;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.coCd = this.parent.coCd;
        this.prdClcd = "";
        this.mallSprCd = "10";

        this.searchEmpNo = "";
        this.searchOprtrNm = "";
        this.oprtrCount = 0;

        this.searchMroPrdClcd = "";
        this.searchMroPrdClsfNm = "";
        this.mroPrdCount = 0;

        this.prdNmCnt = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_codeSearch();
        	this.set_height("220px");

        	this.ds_fileSingle.clearData();
        	this.ds_uploadResult.clearData();

        	this.ds_detail.clearData();
        	this.ds_detail.addRow();
        	this.div_01.form.PRD_CLS_LVL_NM.set_value(vLvlNm);
        	this.ds_detail.setColumn(0,"CO_CD",this.coCd);
        	this.ds_detail.setColumn(0,"MALL_SPR_CD",this.mallSprCd);
        	this.ds_detail.setColumn(0,"LWST_CD_YN","N");

        	if(this.gfn_isNull(vLevel)){	// 대분류 1LEVEL
        		this.div_01.form.LWST_CD_YN.set_readonly(true);
        		this.ds_detail.setColumn(0,"HIER_LVL","1");
        		this.ds_detail.setColumn(0,"HRNK_PRD_CLCD",null);
        	}else if(vLevel == 1){			// 2LEVEL
        		this.div_01.form.LWST_CD_YN.set_readonly(true);
        		this.ds_detail.setColumn(0,"HIER_LVL",Number(vLevel+1));
        		this.ds_detail.setColumn(0,"HRNK_PRD_CLCD",vPrdClcd);
        	}else{							// 3~6LEVEL
        		this.div_01.form.LWST_CD_YN.set_readonly(false);
        		this.ds_detail.setColumn(0,"HIER_LVL",Number(vLevel+1));
        		this.ds_detail.setColumn(0,"HRNK_PRD_CLCD",vPrdClcd);

        		if(vLevel == 6 ){			// 7LEVEL
        			this.div_01.form.LWST_CD_YN.set_value("Y");
        			this.div_01.form.LWST_CD_YN.set_readonly(true);
        			this.set_height("450px");
        			this.div_02.set_visible(true);
        		}
        	}

        	// 파일업로드 확장자 필터기능
        	this.FileUploadSingle.set_filefilter("Image Files |*.jpg;*.jpeg;*.png;*.gif;*.ico|JPEG(*.jpg,jpeg)|*.jpg;*.jpeg|PNG(*.png)|*.png|GIF(*.gif)|*.gif|ICO(*.ico)|*.ico|");
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_codeSearch = function() {

        	var sSvcId = "codeSelect";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sel_mthd_cd=ds_output1";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "codeList", "SEL_MTHD_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //계정 등록
        this.fn_regist = function()
        {
        	if(this.div_01.form.PRD_CLSF_NM.value == "기타"){
        		//this.alert("'기타'는 카테고리명으로 사용할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000016"));
        		return;
        	}
        	if(this.div_01.form.LWST_CD_YN.value =='Y'){
        		if(this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value == this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value) {
        			this.alert(this.fn_getMessage("ERRP000306"));
        			return;
        		}
        	}


        	// 필수 체크
        	var	validation = this.fn_validationForm(this.div_01, this.valiFormIds1, this.ds_detail);
        	var	validation1 = true;
        	var	validation2 = true;

        	// 상품인경우 필수체크
        	if(this.div_01.form.LWST_CD_YN.value == "Y"){
        		validation1 = this.fn_validationForm(this.div_02, this.valiFormIds2, this.ds_detail);
        		this.ds_detail.setColumn(0,"FRT_EXPS_YN","Y");
        	}

        	// 선정방식 - 전시상품인경우 이미지 필수체크
        	if(this.div_02.form.SEL_MTHD_CD.value == "40"){
        		validation2 = this.fn_validationForm(this.div_02, this.valiFormIds3, this.ds_detail);
        	}

        	this.ds_detail.setColumn(0,"USE_YN","Y");

        	if( validation && validation1 && validation2) {

        		var sSvcId = "saveCategory";
        		var sUrl   = "/pr/ctg-mng/save-category.do";
        		var inDs   = "ds_detail=ds_detail:U ds_fileSingle=ds_fileSingle:U";
        		var outDs  = "";
        		var arg    = "";

        		if( this.confirm(this.fn_getMessage("ERRP000012")) ) {
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        		}
        	}

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if(errorCode != 0)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "saveCategory":
        		if(this.prdNmCnt > 0){
        			//this.alert("입력한 카테고리명은 이미 존재하는 카테고리명입니다.");
        			this.alert(this.fn_getMessage("ERRP000015"));
        			return;
        		}else{
        			//this.alert("저장 되었습니다.");
        			this.alert(this.fn_getMessage("ERRS000156"));
        			var resData = {};
        			var resString = "";

        			resData.PRD_CLCD = this.prdClcd;
        			resString = JSON.stringify(resData);
        			this.close(resString);
        		}

        		break;
        	case "codeSelect":
        		var nRow = this.ds_sel_mthd_cd.insertRow(0);
        		this.ds_sel_mthd_cd.setColumn(nRow,"COM_DTL_CD",null);
        		this.ds_sel_mthd_cd.setColumn(nRow,"COM_DTL_CD_NM","선택");
        		this.div_02.form.SEL_MTHD_CD.set_index(nRow);
        		break;
        	case "operatorPopup":
        		if(this.oprtrCount  == 1){
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.set_value(this.searchEmpNo);
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.set_value(this.searchOprtrNm);
        		}else{
        			var objParam = {};
        			objParam.empNo = this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value;
        			objParam.oprtrNm = this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.value;
        			objParam.coCd = this.coCd;
        			this.gfn_openPopup("ssp_bo_pp_27", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        		}
        		break;
        	case "mdOperatorPopup":
        		if(this.oprtrCount  == 1){
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.set_value(this.searchEmpNo);
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.set_value(this.searchOprtrNm);
        		}else{
        			var objParam = {};
        			objParam.empNo = this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value;
        			objParam.oprtrNm = this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.value;
        			objParam.coCd = this.coCd;
        			this.gfn_openPopup("ssp_bo_pp_27_md", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        		}
        		break;
        	case "mroPrdPopup":
        		if(this.mroPrdCount  == 1){
        			this.div_02.form.MRO_PRD_CLCD.set_value(this.searchMroPrdClcd);
        			this.div_02.form.MRO_PRD_CLSF_NM.set_value(this.searchMroPrdClsfNm);
        		}else{
        			var objParam = {};
        			objParam.mroPrdClcd = this.div_02.form.MRO_PRD_CLCD.value;
        			objParam.mroPrdClsfNm = this.div_02.form.MRO_PRD_CLSF_NM.value;
        			objParam.coCd = this.coCd;
        			this.gfn_openPopup("ssp_bo_pa_46", "PR_POP::SSP_BO_PA_46.xfdl", objParam);
        		}
        		break;
        	default:
        		break;
        	}
        };

        this.fn_popupCallback = function(sPopupId, sRetValue){

        	if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){
        		case "ssp_bo_pa_46":
        			this.div_02.form.MRO_PRD_CLCD.set_value(resData.MRO_PRD_CLCD);
        			this.div_02.form.MRO_PRD_CLSF_NM.set_value(resData.MRO_PRD_CLSF_NM);
        			break;
        		case "ssp_bo_pp_27":
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.set_value(resData.EMP_NO);
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.set_value(resData.OPRTR_NM);
        			break;
        		case "ssp_bo_pp_27_md":
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.set_value(resData.EMP_NO);
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.set_value(resData.OPRTR_NM);
        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//static 필수값 표시 초기 설정
        	this.div_01.form.sta_PRD_CLSF_NM.uEssentiel = "true";

        	this.div_02.form.sta_MRO_PRD.uEssentiel = "true";
        	this.div_02.form.sta_MD_PRD_CLSF_CHRPSN.uEssentiel = "true";
        	this.div_02.form.sta_PR_PRD_CLSF_CHRPSN.uEssentiel = "true";
        	this.div_02.form.sta_SEL_MTHD_CD.uEssentiel = "true";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	this.fn_regist();
        };
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRP000013"))){
        		this.close();
        	}
        };
        // 상품군여부 변경 이벤트
        this.div_01_LWST_CD_YN_onitemchanged = function(obj,e)
        {
        	if(obj.value == "Y"){
        		this.set_height("450px");
        		this.div_02.set_visible(true);
        	}else{
        		this.set_height("220px");
        		this.div_02.set_visible(false);
        	}
        };
        // S-MRO카테고리 매핑 팝업호출
        this.div_02_btn_mro_onclick = function(obj,e)
        {
        	var objParam = {mroPrdClcd:this.div_02.form.MRO_PRD_CLCD.value
        	              , mroPrdClsfNm:this.div_02.form.MRO_PRD_CLSF_NM.value
        	              , coCd:this.coCd};
        	this.gfn_openPopup("ssp_bo_pa_46", "PR_POP::SSP_BO_PA_46.xfdl", objParam);
        };
        // 상품담당자 팝업호출
        this.div_02_btn_prd_onclick = function(obj,e)
        {
        	var objParam = {empNo:this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value
        	              , oprtrNm:this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.value
        	              , coCd:this.coCd
        				  , USE_YN: 'Y'};

        	this.gfn_openPopup("ssp_bo_pp_27", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        };
        // MD담당자 팝업호출
        this.div_02_btn_md_onclick = function(obj,e)
        {
        	var objParam = {empNo:this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value
        	              , oprtrNm:this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.value
        	              , coCd:this.coCd};
        	this.gfn_openPopup("ssp_bo_pp_27_md", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        };
        // KEY이벤트
        this.div_02_PRD_CLSF_CHRPSN_ID_onkeyup = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.ds_search.setColumn(0,"EMP_NO",this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value);
        		this.ds_search.setColumn(0,"OPRTR_NM",this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.value);
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.fn_popupSearch("operatorPopup", "/co/popup/select-operator-popup-list.do");
        	}else if(e.keycode == '8'){
        		this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.set_value("");
        		this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.set_value("");
        	}
        };

        this.div_02_MD_PRD_CLSF_CHRPSN_ID_onkeyup = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.ds_search.setColumn(0,"EMP_NO",this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value);
        		this.ds_search.setColumn(0,"OPRTR_NM",this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.value);
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.fn_popupSearch("mdOperatorPopup", "/co/popup/select-operator-popup-list.do");
        	}else if(e.keycode == '8'){
        		this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.set_value("");
        		this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.set_value("");
        	}
        };

        this.div_02_MRO_PRD_CLCD_onkeyup = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.ds_search.setColumn(0,"MRO_PRD_CLCD",this.div_02.form.MRO_PRD_CLCD.value);
        		this.ds_search.setColumn(0,"MRO_PRD_CLSF_NM",this.div_02.form.MRO_PRD_CLSF_NM.value);
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.fn_popupSearch("mroPrdPopup", "/pr/prd-popup/select-mroprd-popup-list.do");
        	}else if(e.keycode == '8'){
        		this.div_02.form.MRO_PRD_CLCD.set_value("");
        		this.div_02.form.MRO_PRD_CLSF_NM.set_value("");
        	}
        };
        // 선정방식 변경 이벤트
        this.div_02_SEL_MTHD_CD_onitemchanged = function(obj,e)
        {
        	//선정방식에서 전시상품을 선택한 경우에만 [이미지등록] 버튼 활성
        	if(obj.value == "40")
        	{
        		this.div_02.form.btn_image_del.set_enable(true);
        		this.div_02.form.btn_image_add.set_enable(true);
        		var findRow     = this.ds_fileSingle.findRow("ETC_FDS_1","1") != -1 ? this.ds_fileSingle.findRow("ETC_FDS_1","1") : this.ds_fileSingle.findRow("ETC_FDS_2","90");
        			findRow     = findRow != -1 ? findRow : this.ds_fileSingle.getRowCount()-1;
        		var filePath    = this.ds_fileSingle.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileName    = this.ds_fileSingle.getColumn(findRow,"ORI_ATFL_NM");
        		var fileOrgName = this.ds_fileSingle.getColumn(findRow,"ATFL_NM");

        		if(findRow != -1)
        		{
        			this.ds_fileSingle.setColumn(findRow,"ETC_FDS_2","90");
        			this.div_02.form.imgViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        		}
        	}
        	else
        	{
        		this.div_02.form.btn_image_del.set_enable(false);
        		this.div_02.form.btn_image_add.set_enable(false);

        		for(var idx=0; idx<this.ds_fileSingle.getRowCount(); idx++)
        		{
        			this.ds_fileSingle.setColumn(idx,"ETC_FDS_2","del");
        			this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID","");
        		}
        		this.div_02.form.imgViewer.set_image("");
        	}
        };
        // 이미지 등록
        this.div_02_btn_image_add_onclick = function(obj,e)
        {
        	// 첨부파일정보 초기화
        	this.ds_uploadResult.clearData();

        	this.FileUploadSingle.deleteItem(0);               // FileUpload 0번째 삭제
        	this.FileUploadSingle.appendItem();                // FileUpload 0번째 추가
        	this.FileUploadSingle.filefindbuttons[0].click();  // 파일 선택 다일로그박스 활성화
        };
        // 이미지 삭제
        this.div_02_btn_image_del_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

        	if(result){
        		var delRow = this.ds_fileSingle.findRow("ETC_FDS_2","90");
        		this.ds_fileSingle.setColumn(delRow,"ETC_FDS_2","del");
        		this.div_02.form.imgViewer.set_image("");
        	}
        };

        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value;   					// 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]
        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        	{
        		this.gfn_alert("MSG00046","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}
        	var sFilePath = this.FileUploadSingle.value;                        // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			// web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=90";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 					// 파일 업로드
        };

        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	/**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        		파일업로드 성공시에 Dataset으로 리턴합니다.
        	*/
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_fileSingle.findRow("ETC_FDS_2","90");
        	this.ds_fileSingle.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_fileSingle.addRow();
        	this.ds_fileSingle.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"") == "")
        	{
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.div_02.form.imgViewer);

        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        };

        // 단축키
        this.divPopup_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_clear_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.divPopup_onkeyup,this);
            this.div_01.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_01.form.LWST_CD_YN.addEventHandler("onitemchanged",this.div_01_LWST_CD_YN_onitemchanged,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.div_02.form.MRO_PRD_CLCD.addEventHandler("onkeyup",this.div_02_MRO_PRD_CLCD_onkeyup,this);
            this.div_02.form.MRO_PRD_CLSF_NM.addEventHandler("onkeyup",this.div_02_MRO_PRD_CLCD_onkeyup,this);
            this.div_02.form.btn_mro.addEventHandler("onclick",this.div_02_btn_mro_onclick,this);
            this.div_02.form.SEL_MTHD_CD.addEventHandler("onitemchanged",this.div_02_SEL_MTHD_CD_onitemchanged,this);
            this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.addEventHandler("onkeyup",this.div_02_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.addEventHandler("onkeyup",this.div_02_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.addEventHandler("onchanged",this.div_02_PR_PRD_CLSF_CHRPSN_NM_onchanged,this);
            this.div_02.form.btn_prd.addEventHandler("onclick",this.div_02_btn_prd_onclick,this);
            this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.addEventHandler("onkeyup",this.div_02_MD_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.addEventHandler("onkeyup",this.div_02_MD_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.btn_md.addEventHandler("onclick",this.div_02_btn_md_onclick,this);
            this.div_02.form.btn_image_del.addEventHandler("onclick",this.div_02_btn_image_del_onclick,this);
            this.div_02.form.btn_image_add.addEventHandler("onclick",this.div_02_btn_image_add_onclick,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_PA_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
