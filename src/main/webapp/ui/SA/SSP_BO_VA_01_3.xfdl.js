(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_01");
            this.set_titletext("메인상품");
            if (Form == this.constructor)
            {
                this._setFormPosition(1096,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainPrdDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_DTL_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"PRD_REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"INT\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainPrd", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_PRD_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"MAIN_PRD_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_MNL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_TGT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLAMT_WGT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_CNT_WGT\" type=\"INT\" size=\"256\"/><Column id=\"INVN_PRD_WGT\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REQ_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_urlCnsolSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","346","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 브랜드픽");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","364","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("※사용 상태 상품 5개 등록 필수 (PC)\r\n※사용 상태 상품 2개 등록 필수 (모바일)");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainPrdDtlList","20","419",null,null,"20","23",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_mainPrdDtlList");
            obj.set_visible("true");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"정렬순번\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"상품상태\"/><Cell col=\"7\" text=\"진열상태\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" colspan=\"2\" text=\"전시순서\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SORT_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:PRD_NM\"/><Cell col=\"4\" text=\"bind:EXPS_NOTIC_SPR_CD_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:PRD_USE_YN\" expr=\"PRD_USE_YN==&apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"7\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"8\" text=\"bind:PRD_REG_DT\" edittype=\"none\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\" calendardisplaynulltext=\" \" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"&lt;fs v=&apos;13&apos;&gt;▲&lt;/fs&gt;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"right\" displaytype=\"decoratetext\"/><Cell col=\"10\" text=\"&lt;fs v=&apos;13&apos;&gt;▼&lt;/fs&gt;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","392","209","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlDelete",null,null,"81","28","190","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlRegist",null,null,"81","28","105","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상품등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlSave",null,null,"81","28","20","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","0","0",null,"347","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","156",null,"152","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09_00","20","75",null,"32","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"318","60","28","22",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"318","60","28","86",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","20","44",null,"32","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","20","43","130","64",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","20","13",null,"32","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_img","20","13","130","32",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("배너");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_urlAddr","160","79",null,"24","40",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_imgSize","689","14","275","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("이미지사이즈 : 1216*200");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_urlCnsolSprCd","160","48","230","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_direction("horizontal");
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("3");
            obj.set_rowcount("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"117","81","28","21",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_title00","20","130","200","23",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 조회");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","20","156","130","152",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","175","155","115",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("0");
            obj.set_tooltiptext("1");
            obj.set_direction("horizontal");
            obj.set_text("포함");
            obj.set_value("");
            obj.set_index("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","330","164","592","135",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","926","164","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","926","192","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_atflNm","160","17","420","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_imgAdd","584","17","60","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("파일찾기");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_imgDelete","648","17","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1130","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"381","110","28","276",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainPrdDtlListExcel","10","840",null,null,"30","-290",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_mainPrdDtlList");
            obj.set_visible("false");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"정렬순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"공용전용구분\"/><Cell col=\"5\" text=\"상품상태\"/><Cell col=\"6\" text=\"진열상태\"/><Cell col=\"7\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:PRD_NM\"/><Cell col=\"3\" text=\"bind:NOTIC_SPR_CD\" textAlign=\"center\" expr=\"NOTIC_SPR_CD==&apos;20&apos; ? &apos;로그인후전체&apos; : NOTIC_SPR_CD==&apos;30&apos; ? OPR_UNIT_NM : &apos;전체&apos;\"/><Cell col=\"4\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"5\" text=\"bind:PRD_USE_YN\" expr=\"PRD_USE_YN==&apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"6\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"7\" text=\"bind:PRD_REG_DT\" edittype=\"none\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\" calendardisplaynulltext=\" \" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"318","118","28","148",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1096,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_urlAddr","value","ds_mainPrd","URL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.rdo_urlCnsolSprCd","value","ds_mainPrd","URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.rdo_noticSprCd","value","ds_dtlSearch","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.edt_atflNm","value","ds_mainPrd","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_01_3.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_01_3.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_01_3.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_VA_01_3.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메인상품(브랜드픽)
        CREATION DATES : 2022.03.04
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticSprCd=ds_output1 ds_urlCnsolSprCd=ds_output2";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD,URL_CNSOL_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //메인상품 상세리스트 조회
        this.fn_mainPrdDtlListSearch = function()
        {
        	var sSvcId = "mainPrdDtlList";
        	var sUrl = "/sa/main-prd/select-main-prd-dtl-list.do";
        	var inDs = "ds_search=ds_dtlSearch ds_oprUnitList=ds_searchOprUnitList";
        	var outDs = "ds_mainPrdDtlList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "saveMainPrd";
        	var sUrl = "/sa/main-prd/save-main-prd.do";
        	var inDs = "ds_save=ds_mainPrd:A"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_dtlSave = function()
        {
        	if( !this.fn_dataCheck(this.ds_mainPrdDtlList) ) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	} else {

        		var chnTpCd = this.ds_mainPrd.getColumn(0, "CHN_TP_CD");
        		// 필요 개수 체크를 위한 값 세팅
        		if(chnTpCd == "P") {
        			this.ds_mainPrd.setColumn(0, "PRD_REQ_CNT", 5);
        		} else {
        			this.ds_mainPrd.setColumn(0, "PRD_REQ_CNT", 2);
        		}

        		var sSvcId = "updateMainPrdDtlSo";
        		var sUrl = "/sa/main-prd/update-main-prd-dtl-so.do";
        		var inDs = "ds_save=ds_mainPrdDtlList:U ds_chk=ds_mainPrd"
        		var outDs = "";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        //메인상품 상세 삭제
        this.fn_dtlDelete = function() {
        	var sSvcId = "deleteMainPrdDtl";
        	var sUrl = "/sa/main-prd/delete-main-prd-dtl.do";
        	var inDs = "ds_delete=ds_mainPrdDtlList:U"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_rtnOprUnitCheckList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /** SSP-2369
         * 대용량엑셀다운로드
        */
        this.fn_largeExcelDownload = function(){

        	var sSvcId = "largeExcelDown";
        	var sUrl = "/sa/excelDown/large/mainPrdInfo.do";
        	var inDs = "ds_save=ds_dtlSearch";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        		case "commonCodeSearch" :
        			//게시구분코드에 All 추가
        			var nRow = this.ds_noticSprCd.insertRow(0);
        			this.ds_noticSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_noticSprCd.setColumn(nRow, "COM_DTL_CD_NM", "ALL");

        			this.div_detail.form.rdo_noticSprCd.set_index(0);

        			this.fn_chgNoticSprCd();

        			//메인상품 트리 조회
        			//this.fn_mainPrdListSearch();
        			break;

        		case "insertOdrInqTgtDtls" :

        			this.fn_mainPrdDtlListSearch();

        			break;

        		case "saveMainPrd" :
        			alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.

        			//저장후 메인상품 트리 재 조회
        			var vMainPrdExpsPstId = this.ds_mainPrd.getColumn(0, "MAIN_PRD_EXPS_PST_ID");
        			this.parent.parent.parent.fn_mainPrdListSearch();

        			break;

        		case "mainPrdDtlList" :
        			this.sta_totalCount.set_text("총 " + this.totalCount + " 건");

        			break;

        		case "updateMainPrdDtlSo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_mainPrdDtlListSearch();
        			} else {
        				alert(errorMsg);
        			}
        			break;

        		case "deleteMainPrdDtl" :
        			this.fn_mainPrdDtlListSearch();
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		default :
        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}
        			break;

        		case "btn_oprUnitMultiText" :
        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.ds_mainPrd.getColumn(0, "CO_CD"));
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		default :

        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	this.div_detail.form.sta_img.uEssentiel = "true";

        	// grid 초기 설정
        	this.div_detail.form.grd_oprUnitList.uSortFlag = "true";
        	this.div_detail.form.grd_oprUnitList.uServerSortFlag = "false";
        	this.div_detail.form.grd_oprUnitList.uCellSizeType = "true";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 최초 호출 시 세팅
        this.fn_setInit = function() {
        	// SSP_BO_VA_01의 값 세팅
        	this.ds_mainPrd.copyRow(0, this.parent.parent.parent.ds_mainPrd, 0); // 배너 단일 복사
        	this.ds_dtlSearch.copyRow(0, this.parent.parent.parent.ds_mainPrd, 0); // CO_CD, BNR_EXPS_PST_ID, CHN_TP_CD, MALL_SPR_CD 복사

        	this.grd_mainPrdDtlList.setCellProperty("head", 0, "text", "0"); // 헤더 체크해제

        	var chnTpCd = this.ds_mainPrd.getColumn(0, "CHN_TP_CD");
        	if(chnTpCd == "P") {
        		this.div_detail.form.sta_imgSize.set_text("이미지사이즈 : 1216*200");
        	} else if(chnTpCd == "M") {
        		this.div_detail.form.sta_imgSize.set_text("이미지사이즈 : 984*303");
        	}

        	// 메인상품 변경 시 운영단위 초기화
        	this.div_detail.form.rdo_noticSprCd.set_index(0);
        	this.fn_chgNoticSprCd();
        	this.ds_oprUnitList.clearData();

        	this.fn_chgUrlCnsolSprCd();

        	this.ds_file.clearData(); // 파일 초기화
        }

        // 게시구분코드 변경
        this.fn_chgNoticSprCd = function() {
        	if(this.div_detail.form.rdo_noticSprCd.value == "30" || this.div_detail.form.rdo_noticSprCd.value == "50"
        		|| this.div_detail.form.rdo_noticSprCd.value == "60" || this.div_detail.form.rdo_noticSprCd.value == "70") {
        		this.div_detail.form.grd_oprUnitList.set_enable(true);
        		this.div_detail.form.btn_oprUnitMulti.set_enable(true);
        		this.div_detail.form.btn_oprUnitMultiText.set_enable(true);
        	} else {
        		this.div_detail.form.grd_oprUnitList.set_enable(false);
        		this.div_detail.form.btn_oprUnitMulti.set_enable(false);
        		this.div_detail.form.btn_oprUnitMultiText.set_enable(false);
        	}
        }

        // 전체 버튼 활성화/비활성화 세팅
        this.fn_setBtn = function(isEnable)
        {
        	this.div_detail.form.btn_reset.set_enable(isEnable);
        	this.div_detail.form.btn_search.set_enable(isEnable);
        	this.btn_dtlDelete.set_enable(isEnable);
        	this.btn_dtlRegist.set_enable(isEnable);
        	this.btn_dtlSave.set_enable(isEnable);
        };

        // URL 수정
        this.fn_chgUrlCnsolSprCd = function() {
        	if(this.div_detail.form.rdo_urlCnsolSprCd.value == "10") {
        		this.div_detail.form.edt_urlAddr.set_enable(false);
        	} else {
        		this.div_detail.form.edt_urlAddr.set_enable(true);
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if (this.div_detail.form.rdo_noticSprCd.value != "30" || this.div_detail.form.rdo_noticSprCd.value != "50"
        		|| this.div_detail.form.rdo_noticSprCd.value != "60" || this.div_detail.form.rdo_noticSprCd.value != "70") {

        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
        	}

        	this.ds_searchOprUnitList.clearData();

        	var sBzplcIdList = "";
        	var sOprUnitIdList = "";

        	for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        		var tempBzplcId = this.ds_oprUnitList.getColumn(i, "BZPLC_ID");
        		var tempOprUnitId = this.ds_oprUnitList.getColumn(i, "OPR_UNIT_ID");

        		var nRow = this.ds_searchOprUnitList.addRow();

        		this.ds_searchOprUnitList.setColumn(nRow, "BZPLC_ID", tempBzplcId);
        		this.ds_searchOprUnitList.setColumn(nRow, "OPR_UNIT_ID", tempOprUnitId);
        		sBzplcIdList += tempBzplcId + ",";
        		sOprUnitIdList += tempOprUnitId + ",";
        	}

        	this.fn_setMSearch(this.name,"BZPLC_ID",sBzplcIdList);
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",sOprUnitIdList);

        	if(this.gfn_isNull(sBzplcIdList) || this.gfn_isNull(sOprUnitIdList)) {
        		this.fn_mainPrdDtlListSearch();
        	} else {
        		this.ds_dtlSearch.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        //리셋버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_dtlSearch.reset();
        	this.ds_oprUnitList.reset();
        	this.ds_searchOprUnitList.reset();

        	this.div_detail.form.rdo_noticSprCd.set_index(0);
        };

        //하단-저장버튼
        this.btn_dtlSave_onclick = function(obj,e)
        {
        	for(var i = 0; i< this.ds_mainPrdDtlList.rowcount; i++) {
        		this.ds_mainPrdDtlList.setColumn(i, "DISP_SO", i+1);
        	}
        	this.fn_dtlSave();
        };

        //선택삭제 버튼
        this.btn_dtlDelete_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_mainPrdDtlList.getCaseCount("COL_CHK > 0");
        	if(chkCnt < 1){
        		alert(this.fn_getMessage("ERRN000034")); // 삭제할 상품을 선택해주세요.
        		return;
        	}
        	if(confirm(this.fn_getMessage("ERRN000049"))) { // 선택한 상품을 삭제하시겠습니까?
        		this.fn_dtlDelete();
        	}
        };

        // 상품등록버튼
        this.btn_dtlRegist_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd:this.ds_mainPrd.getColumn(0, "CO_CD")
        		, chnTpCd:this.ds_mainPrd.getColumn(0, "CHN_TP_CD")
        		, mallSprCd:this.ds_mainPrd.getColumn(0, "MALL_SPR_CD")
        		, mainPrdExpsPstId:this.ds_mainPrd.getColumn(0, "MAIN_PRD_EXPS_PST_ID")
        	};
        	objParam.title = "메인상품 등록 팝업";
        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_VA_02.xfdl", objParam, "fn_popupCallback");
        };

        //게시구분변경
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgNoticSprCd();
        };

        //운영단위 멀티 팝업
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        			   };

        	var oOption = { top : "-1"
        				  , left : "-1"
        				  , width : "-1"
        				  , height : "-1"
        				  , popuptype : "modal" // modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        				  , layered : "false"
        				  , opacity : "100"
        				  , autosize : "true"
        				  , titlebar : "true"
        				  , title : "운영단위 조회"
        				  };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트팝업
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_detail.form.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //메인상품 상세 그리드 클릭
        this.grd_mainPrdDtlList_oncellclick = function(obj,e)
        {
        // 	if(e.col == 6 || e.col == 7) {
        // 		if(this.gfn_isNull(this.ds_dtlSearch.getOrgColumn(0, "NOTIC_SPR_CD"))) {
        // 			alert("게시구분 All 클릭 시,  전시순서 변경이 불가합니다");
        // 			return;
        // 		}
        // 	}

        	if(e.col == 2) { // 상품ID
        		var objParam = {
        			coCd:this.ds_mainPrdDtlList.getColumn(e.row, "CO_CD")
        			, prdId:this.ds_mainPrdDtlList.getColumn(e.row, "PRD_ID")
        		};

        		this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_VA_03.xfdl", objParam, "fn_popupCallback");

        		// 2022.09.15 : SSP-978
        	} else if(e.col == 9) {
        		if(e.row == 0){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_mainPrdDtlList.moveRow(e.row, (e.row-1));
        	} else if(e.col == 10) {
        		if(e.row == (this.ds_mainPrdDtlList.getRowCount()-1)){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_mainPrdDtlList.moveRow(e.row, (e.row+1));
        	}
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);
        		}
        	}
        };

        //메인상품 저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.div_detail.form.rdo_urlCnsolSprCd.value != 10) {
        		if(this.div_detail.form.edt_urlAddr.value == "" || this.div_detail.form.edt_urlAddr.value == undefined) {
        			alert(this.fn_getMessage("ERRN000001", "링크없음이 아니면 URL은")); // 링크없음이 아니면 URL은 필수 입력항목입니다.
        			this.edt_mainUrl.setFocus();
        			return;
        		}
        	}
        	if(this.div_detail.form.edt_atflNm.value == "" || this.div_detail.form.edt_atflNm.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "배너는")); // 배너는 필수 입력항목입니다.
        		this.div_detail.form.edt_atflNm.setFocus();
        		return;
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonObj		= new Object();
        			var oriAtflNm = this.ds_mainPrd.getColumn(0, "ORI_ATFL_NM") == undefined ? "" :this.ds_mainPrd.getColumn(0, "ORI_ATFL_NM");
        			var atflStorPath = this.ds_mainPrd.getColumn(0, "ATFL_STOR_PATH") == undefined ? "" :this.ds_mainPrd.getColumn(0, "ATFL_STOR_PATH");
        			var docRegId = this.ds_mainPrd.getColumn(0, "DOC_REG_ID") == undefined ? "" :this.ds_mainPrd.getColumn(0, "DOC_REG_ID");
        			var docRegSeq = this.ds_mainPrd.getColumn(0, "DOC_REG_SEQ") == undefined ? "1" :this.ds_mainPrd.getColumn(0, "DOC_REG_SEQ").toString();

        			// 파일삭제 및 첨부파일테이블에 insert 위하여 값 세팅.
        			this.fileUpTrans.setPostData("oriAtflNm", oriAtflNm);
        			this.fileUpTrans.setPostData("atflStorPath", atflStorPath);
        			this.fileUpTrans.setPostData("docRegId", docRegId);
        			this.fileUpTrans.setPostData("docRegSeq",  docRegSeq);
        			this.fileUpTrans.upload('/sa/com/singlec-file-upload.do')
        		} else {
        			this.fn_save();
        		}
        	} else {
        		this.fn_save();
        	}
        };

        this.btn_imgAdd_onclick = function(obj,e)
        {
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.btn_imgDelete_onclick = function(obj,e)
        {
        	this.ds_mainPrd.setColumn(0,"ATFL_NM", "");

        	this.fileUpTrans.clearFileList();
        	this.ds_file.clearData();
        };

        // 첨부파일 클릭
        this.edt_atflNm_oneditclick = function(obj,e)
        {
        // 	if(!this.gfn_isNull(this.div_detail.form.edt_atflNm.value)) {
        // 		if(this.confirm(this.div_detail.form.edt_atflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 			this.downloadfile();
        // 		}
        // 	}
        };

        // URL 수정
        this.rdo_urlCnsolSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgUrlCnsolSprCd();
        };

        //drag 시작
        this.grd_mainPrdDtlList_ondrag = function(obj,e)
        {
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"PRD_ID_VIEW");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;
        };

        //이동
        this.grd_mainPrdDtlList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        //row 변경
        this.grd_mainPrdDtlList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = this.ds_mainPrd.getColumn(0, "DOC_REG_ID");
        	var docRegSeq = this.ds_mainPrd.getColumn(0, "DOC_REG_SEQ");

        	if(this.ds_mainPrd.getColumn(0, "CHN_TP_CD") == "P") {
        		this.img_view.set_width(600);
        		this.img_view.set_height(200);
        	} else {
        		this.img_view.set_width(500);
        		this.img_view.set_height(150);
        	}

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };
        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
        };
        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/

        //해당 row에 파일 추가
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if (e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;

        		// 같은 이름의 파일을 업로드했을 경우 대비
        		this.ds_mainPrd.set_updatecontrol(false);
        		this.ds_mainPrd.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.ds_mainPrd.set_updatecontrol(true);

        		this.fileUpTrans.removeFile(this.ds_mainPrd.getColumn(0, "ATFL_NM"));
        		this.ds_file.clearData();

        		var nRowIdx = this.ds_file.addRow();
         		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_mainPrd.setColumn(0, "ATFL_NM", obj.filename);
        		this.fileUpTrans.addFile(obj.filename, obj)
        	}
        };

        //업로드용 Virtual 파일 oneroor 이벤트
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;
        	this.nRow = -1;
        	alert(msg);
        };

        // 파일 다운로드
        this.downloadfile = function() {
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.set_downloadfilename(this.ds_mainPrd.getColumn(0, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("docRegId",this.ds_mainPrd.getColumn(0, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_mainPrd.getColumn(0, "DOC_REG_SEQ"));

        	this.FileDownTransfer.download('/co/file-download.do');
        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        //파일 DIALOG CLOSE 이벤트
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		this.ds_mainPrd.setColumn(0, "DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        	}
        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	this.fn_save();

        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        this.div_detail_sta_imgSize_onclick = function(obj,e)
        {

        };

        //SSP-2111
        //엑셀다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	// 현재 페이지 data
        	var sFileName = "브랜드픽_EXCEL_EXPORT";			// file Name
        	var aGrid = [this.grd_mainPrdDtlListExcel];
        	var aSht  = ["브랜드픽"];

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);

        	return;
        };

        /** SSP-2369
         * 대용량 엑셀다운로드 버튼 클릭 시
         */
        this.div_search_btn_largeExcel_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_largeExcelDownload();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_mainPrdDtlList.addEventHandler("oncellclick",this.grd_mainPrdDtlList_oncellclick,this);
            this.grd_mainPrdDtlList.addEventHandler("ondrop",this.grd_mainPrdDtlList_ondrop,this);
            this.grd_mainPrdDtlList.addEventHandler("ondragmove",this.grd_mainPrdDtlList_ondragmove,this);
            this.grd_mainPrdDtlList.addEventHandler("ondrag",this.grd_mainPrdDtlList_ondrag,this);
            this.btn_dtlDelete.addEventHandler("onclick",this.btn_dtlDelete_onclick,this);
            this.btn_dtlRegist.addEventHandler("onclick",this.btn_dtlRegist_onclick,this);
            this.btn_dtlSave.addEventHandler("onclick",this.btn_dtlSave_onclick,this);
            this.div_detail.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_detail.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_detail.form.sta_img.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_detail.form.sta_imgSize.addEventHandler("onclick",this.div_detail_sta_imgSize_onclick,this);
            this.div_detail.form.rdo_urlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_urlCnsolSprCd_onitemchanged,this);
            this.div_detail.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_detail.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.div_detail.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.div_detail.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.div_detail.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.div_detail.form.edt_atflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.div_detail.form.edt_atflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_detail.form.edt_atflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_detail.form.btn_imgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_detail.form.btn_imgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_mainPrdDtlListExcel.addEventHandler("oncellclick",this.grd_mainPrdDtlList_oncellclick,this);
            this.grd_mainPrdDtlListExcel.addEventHandler("ondrop",this.grd_mainPrdDtlList_ondrop,this);
            this.grd_mainPrdDtlListExcel.addEventHandler("ondragmove",this.grd_mainPrdDtlList_ondragmove,this);
            this.grd_mainPrdDtlListExcel.addEventHandler("ondrag",this.grd_mainPrdDtlList_ondrag,this);
            this.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_VA_01_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
