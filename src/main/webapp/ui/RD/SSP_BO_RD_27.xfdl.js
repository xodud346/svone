(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D카테고리 생성 팝업");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLS_LVL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sel_mthd_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"0\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"0\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PR_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MD_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"MRO_PRD_CLCD\"/><Col id=\"PR_EMP_NO\"/><Col id=\"MD_EMP_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PR_EMP_NO_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MD_EMP_NO_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MRO_PRD_CLCD_YN\"/><Col id=\"PR_EMP_NO_YN\"/><Col id=\"MD_EMP_NO_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","15","48",null,"100","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","0","6",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","154","10",null,"24","12",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static07","0","37",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","37","145","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("카테고리명");
            obj.getSetter("uEssentiel").set("true");
            obj.set_cssclass("sta_cm_box01L");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","68",null,"32","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","68","145","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("상품군 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_01.addChild(obj.name, obj);

            obj = new Radio("LWST_CD_YN","154","72","200","24",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var div_01_form_LWST_CD_YN_innerdataset = new nexacro.NormalDataset("div_01_form_LWST_CD_YN_innerdataset", obj);
            div_01_form_LWST_CD_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_01_form_LWST_CD_YN_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","154","41",null,"24","11",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","6","145","32",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("위치");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_cancel","198",null,"100","32",null,"15",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","302",null,"100","32",null,"15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("| R&D카테고리 추가");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","15","146",null,null,"15","63",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","32",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_01","0","1",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01_01","0","1","145","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("19");
            obj.set_text("사전설정매익률(%)");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","0","63",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01","0","63","145","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("14");
            obj.set_text("상품담당자(정)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_ID","154","67","150","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_NM","309","67",null,"24","40",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_prd",null,"67","25","25","11",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("6");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","0","94",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01_00","0","94","145","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("16");
            obj.set_text("구매담당자(정)");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_ID","154","98","150","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_NM","309","98",null,"24","40",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_md",null,"98","25","25","11",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("9");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","0","156",null,"105","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","0","156","145","105",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("18");
            obj.set_text("전시상품군 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new MaskEdit("PLN_PRFRT","154","5","151","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_format("##9.99");
            obj.set_autoselect("true");
            obj.set_limitbymask("both");
            this.div_02.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","154","162","100","91",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_fittocontents("none");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_image_del","260","162","24","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_close_small_red");
            obj.set_enable("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_image_add",null,"162","104","24","11",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("12");
            obj.set_text("이미지 등록");
            obj.set_enable("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","0","32","145","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("22");
            obj.set_text("S-MRO카테고리 매핑");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLCD","154","36","150","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLSF_NM","309","36",null,"24","40",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_mro",null,"36","25","25","11",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","0","125",null,"32","0",null,null,null,null,null,this.div_02.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","0","125","145","32",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("25");
            obj.set_text("선정방식");
            obj.set_cssclass("sta_cm_box01L");
            this.div_02.addChild(obj.name, obj);

            obj = new Combo("SEL_MTHD_CD","154","129","150","24",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_sel_mthd_cd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div_02.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","260","235","205","19",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            this.div_02.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","469","235","98","19",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("27");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("R&D카테고리 추가");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,480,this,function(p){});
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

            obj = new BindItem("item4","div_02.form.PR_PRD_CLSF_CHRPSN_ID","value","ds_detail","PR_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_02.form.MD_PRD_CLSF_CHRPSN_ID","value","ds_detail","MD_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_02.form.PR_PRD_CLSF_CHRPSN_NM","value","ds_detail","PR_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_02.form.MD_PRD_CLSF_CHRPSN_NM","value","ds_detail","MD_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_02.form.PLN_PRFRT","value","ds_detail","PLN_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_02.form.MRO_PRD_CLCD","value","ds_detail","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_02.form.MRO_PRD_CLSF_NM","value","ds_detail","MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_02.form.SEL_MTHD_CD","value","ds_detail","SEL_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_27.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_27.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_27.xfdl(R&D카테고리 생성 팝업)
        * 작 성			일 명: 김진섭
        * 작 성	    	일 자: 2022/05/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/

        this.vLevel 			= this.parent.level;
        this.vLvlNm 			= this.parent.lvlNm;
        this.vPrdClcd 			= this.parent.prdClcd;
        this.coCd 				= this.parent.coCd;

        this.prdClcd 			= "";

        this.searchEmpNo 		= "";
        this.searchOprtrNm 		= "";
        this.oprtrCount 		= 0;

        this.searchMroPrdClcd 	= "";
        this.searchMroPrdClsfNm = "";
        this.mroPrdCount 		= 0;
        this.fv_oApp 			= nexacro.getApplication();

        this.rdCategoryDupChk 	= ""; //카테고리명 중복체크
        this.mallSprCd 			= "20";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	var strDs   = "ds_sel_mthd_cd";		    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "RD_SEL_MTHD_CD";         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "N";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);

        };
        /*
         * 공통코드 후처리 팝업
         */
        this.fn_PostformInit = function()
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(0, "langCd", "KO");

        	this.ds_detail.clearData();
        	var dRow = this.ds_detail.addRow();

        	this.ds_detail.setColumn(dRow,"PRD_CLS_LVL_NM",	this.vLvlNm); 		// 위치
        	this.ds_detail.setColumn(dRow,"CO_CD",			this.coCd);
        	this.ds_detail.setColumn(dRow,"SEL_MTHD_CD",	null); 				// 선정방식 초기화
        	this.ds_detail.setColumn(dRow,"MALL_SPR_CD",	this.mallSprCd); 	// 10:SSP몰, 20:R&D몰
        	this.ds_detail.setColumn(dRow,"LWST_CD_YN",		"N");               // 상품군여부

        	if(this.gfn_isNull(this.vLevel))
        	{
        		this.div_01.form.LWST_CD_YN.set_readonly(true);
        		this.ds_detail.setColumn(dRow,"HIER_LVL"		,"1");
        		this.ds_detail.setColumn(dRow,"HRNK_PRD_CLCD"	,null);

        	}else if(this.vLevel == 1)
        	{
        		this.div_01.form.LWST_CD_YN.set_readonly(true);
        		this.ds_detail.setColumn(dRow,"HIER_LVL"		,Number(this.vLevel+1));
        		this.ds_detail.setColumn(dRow,"HRNK_PRD_CLCD"	,this.vPrdClcd);

        	}else
        	{
        		this.div_01.form.LWST_CD_YN.set_readonly(false);
        		this.ds_detail.setColumn(dRow,"HIER_LVL"		,Number(this.vLevel+1));
        		this.ds_detail.setColumn(dRow,"HRNK_PRD_CLCD"	,this.vPrdClcd);

        		if(this.vLevel == 6 )
        		{
        			this.div_01.form.LWST_CD_YN.set_value("Y");
        		}
        	}

        	this.fn_setRadioLwstCdYn(this.div_01.form.LWST_CD_YN.value);

        	this.div_01.form.PRD_CLSF_NM.setFocus();

        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		if(nErrorCode == -100)
        		{
        			this.div.form.PRNM.setFocus();
        		}
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			default:
        				break;
        		}
        	}
        };


        this.fn_popupCallback = function(strId, strVal)
        {

        	switch(strId)
        	{
        		case "SSP_BO_PA_46":
        				if(!this.gfn_isNull(strVal))
        				{
        					var resData = JSON.parse(strVal);
        					this.div_02.form.MRO_PRD_CLCD.set_value(resData.MRO_PRD_CLCD);
        					this.div_02.form.MRO_PRD_CLSF_NM.set_value(resData.MRO_PRD_CLSF_NM);
        				}else
        				{
        					// 닫기버튼
        				}
        			break;
        		case "SSP_BO_PP_27":
        				if(!this.gfn_isNull(strVal))
        				{
        					 var resData = JSON.parse(strVal);
        					this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.set_value(resData.EMP_NO);
        					this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.set_value(resData.OPRTR_NM);

        					if(this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID") == this.ds_detail.getColumn(0,"MD_PRD_CLSF_CHRPSN_ID"))
        					{
        						this.fn_alert("ERRR000184","저장","상품담당자,구매담당자","question");
        						this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_ID","");
        						this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_NM","");
        						this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.setFocus();
        					}
        				}else
        				{
        					// 닫기 버튼 처리
        				}

        			break;
        		case "SSP_BO_PP_27_MD":
                        if(!this.gfn_isNull(strVal))
        				{
        					var resData = JSON.parse(strVal);
        					this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.set_value(resData.EMP_NO);
        					this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.set_value(resData.OPRTR_NM);
        					if(this.ds_detail.getColumn(0,"MD_PRD_CLSF_CHRPSN_ID") == this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID"))
        					{

        						this.fn_alert("ERRR000184","저장","구매담당자,상품담당자","question");
        						this.ds_detail.setColumn(0,"MD_PRD_CLSF_CHRPSN_ID","");
        						this.ds_detail.setColumn(0,"MD_PRD_CLSF_CHRPSN_NM","");
        						this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.setFocus();
        					}
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		default:
        			break;
        	}
        };

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

        	 if(this.gfn_isNull(this.div_01.form.PRD_CLSF_NM.value))
        	 {
        		this.fn_alert("ERRS000144","저장","카테고리명 ","question");      			// R&D속성명 (&1은(는) 필수입력사항입니다.)
        		this.div_01.form.PRD_CLSF_NM.setFocus();
        		return false;
        	 }

        	if(this.div_01.form.LWST_CD_YN.value == "Y")
        	{

        		if(this.gfn_isNull(this.div_02.form.PLN_PRFRT.value))
        		{
        			this.fn_alert("ERRS000144","저장","사전설정매익률(%)","question");      	// 사전설정매익률(%) (&1은(는) 필수입력사항입니다.)
        			this.div_02.form.PLN_PRFRT.setFocus();
        			return false;
        		}

        		if(this.gfn_isNull(this.div_02.form.MRO_PRD_CLCD.value))
        		{
        			this.fn_alert("ERRS000144","저장","S-MRO카테고리 매핑","question");      	// S-MRO카테고리 매핑 (&1은(는) 필수입력사항입니다.)
        			this.div_02.form.MRO_PRD_CLCD.setFocus();
        			return false;
        		}
        		/*
        		if(this.gfn_isNull(this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value))
        		{
        			this.fn_alert("ERRS000144","저장","상품담당자(정)","question");      	// 상품담당자(정) (&1은(는) 필수입력사항입니다.)
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.setFocus();
        			return false;
        		}
        		*/

        		if(this.gfn_isNull(this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value))
        		{
        			this.fn_alert("ERRS000144","저장","구매담당자(정)","question");      	// 구매담당자(정) (&1은(는) 필수입력사항입니다.)
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.setFocus();
        			return false;
        		}
        		if(!this.gfn_isNull(this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value))
        		{
        			if(this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID") == this.ds_detail.getColumn(0,"MD_PRD_CLSF_CHRPSN_ID"))
        			{
        				this.fn_alert("ERRR000184","저장","상품담당자,구매담당자","question");
        				/*
        				this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_ID","");
        				this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_NM","");
        				*/
        				this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.setFocus();
        				return false;
        			}
        		}
        		//  S-MRO카테고리 매핑 or 상품담당자(정) or 구매담당자(정) 정합성 체크
        		if(!this.fn_codeChkYn())
        		{
        			return false;
        		}

        		this.ds_detail.setColumn(0,"FRT_EXPS_YN","Y");
        	}

        	this.fn_rdCategoryDuplicateCheck();

        	if(this.rdCategoryDupChk != "0")
        	{
        		this.fn_alert("ERRP000015","저장"," ","question");      // AM-BO-015 입력한 카테고리명은 이미 존재하는 카테고리명입니다.
        		return false;
        	}

        	var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	if(this.div_01.form.LWST_CD_YN.value == "N")
        	{
        		this.ds_detail.setColumn(0,"PLN_PRFRT",            "");
        		this.ds_detail.setColumn(0,"MRO_PRD_CLCD",         "");
        		this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_ID","");
        		this.ds_detail.setColumn(0,"MD_PRD_CLSF_CHRPSN_ID","");
        		this.ds_detail.setColumn(0,"SEL_MTHD_CD",          "");
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID","");
        	}

        	return true;
        };
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
        	this.ds_detail.setColumn(0,"MNFR_NO","*");//제조사번호
        	this.ds_detail.setColumn(0,"USE_YN","Y");

            var strSvc      = "Save";
            var strUrl      = "/rd/category/save-category.do";
            var strInDs     = "ds_detail=ds_detail:U"
        	                + " ds_saveFileList=ds_saveFileList:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.fn_alert("ERRR000007","저장"," ","question");      // 정상적으로 저장되었습니다
        	var resData 		= {};
        	var resString 		= "";

        	resData.PRD_CLCD 	= this.prdClcd;
        	resString 			= JSON.stringify(resData);
        	this.close(resString);

        };

        this.fn_popupSearch = function (svcId, url)
        {
        	var sSvcId 	= svcId;
        	var sUrl 	= url;
        	var inDs 	= "ds_search=ds_search";
        	var outDs 	= "";
        	var arg 	= "";
        	this.gfn_transaction(sSvcId
        	                     , sUrl
        						 , inDs
        						 , outDs
        						 , arg
        						 , "fn_callBack"
        						 , false);

        };

        /**
         * S-MRO카테고리 매핑 or 상품담당자(정) or 구매담당자(정) 정합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	this.ds_searchChkYn.clearData();
        	var nRow = this.ds_searchChkYn.addRow();

        	this.ds_searchChkYn.setColumn(nRow,"CO_CD",			this.coCd);
        	this.ds_searchChkYn.setColumn(nRow,"MALL_SPR_CD",	this.mallSprCd);
        	this.ds_searchChkYn.setColumn(nRow,"MRO_PRD_CLCD",	this.gfn_trim(this.div_02.form.MRO_PRD_CLCD.value));
        	this.ds_searchChkYn.setColumn(nRow,"PR_EMP_NO",	    this.gfn_trim(this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value));
        	this.ds_searchChkYn.setColumn(nRow,"MD_EMP_NO",	    this.gfn_trim(this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value));

        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/category/select-code-chk-yn.do";
            var strInDs     = "ds_searchChkYn=ds_searchChkYn";
            var strOutDs    = "ds_codeChkYn=ds_codeChkYn";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);


        	var strMrdPrdClcdYn = this.ds_codeChkYn.getColumn(0,"MRO_PRD_CLCD_YN");
        	var strPrEmpNoYn    = this.ds_codeChkYn.getColumn(0,"PR_EMP_NO_YN");
        	var strMdEmpNoYn    = this.ds_codeChkYn.getColumn(0,"MD_EMP_NO_YN");
        	// S-MRO카테고리
        	if(strMrdPrdClcdYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","S-MRO카테고리 매핑","question"); // 존재하지 않는 &1 입니다.
        		this.div_02.form.MRO_PRD_CLCD.setFocus();
        		return false;
        	}

        	// 상품담당자(정)
        	if(!this.gfn_isNull(this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID")))
        	{
        		if(strPrEmpNoYn == "N")
        		{
        			this.fn_alert("ERRR000174","저장정보","상품담당자(정) 코드","question"); // 존재하지 않는 &1 입니다.
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.setFocus();
        			return false;
        		}
        	}
        	// 구매담당자(정)
        	if(strMdEmpNoYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","구매담당자(정) 코드","question"); // 존재하지 않는 &1 입니다.
        		this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.setFocus();
        		return false;
        	}
        	return true;
        };

        //카테고리명 중복체크
        this.fn_rdCategoryDuplicateCheck = function ()
        {
            var strSvc      = "selectRdCategoryDuplicateCheckRD27";
            var strUrl      = "/rd/category/select-rd-category-duplicate-check-rd27.do";
            var strInDs     = "ds_detail=ds_detail";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };


        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRP000013", "저장","", "question" ); // 등록을 취소하시겠습니까?
            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRP000013", "저장","", "question" ); // 등록을 취소하시겠습니까?
            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
        this.fn_setRadioLwstCdYn = function (value)
        {
        	if(value == "Y")
        	{
        		this.set_height("470px");
        		this.div_02.set_visible(true);
        	}else
        	{
        		this.set_height("220px");
        		this.div_02.set_visible(false);

        	}
        };
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        this.div_01_LWST_CD_YN_onitemchanged = function(obj,e)
        {
        	this.fn_setRadioLwstCdYn(obj.value);
        };
        /*
         * 선정방식 에서 공백이냐 / 전시상품[이미지등록]
         */
        this.div_02_SEL_MTHD_CD_onitemchanged = function(obj,e)
        {
        	//선정방식에서 전시상품을 선택한 경우에만 [이미지등록] 버튼 활성
        	if(obj.value == "40")
        	{
        		this.div_02.form.btn_image_del.set_enable(true);
        		this.div_02.form.btn_image_add.set_enable(true);
        		var findRow     = this.ds_saveFileList.findRow("ETC_FDS_1","1") != -1 ? this.ds_saveFileList.findRow("ETC_FDS_1","1") : this.ds_saveFileList.findRow("ETC_FDS_2","90");
        			findRow     = findRow != -1 ? findRow : this.ds_saveFileList.getRowCount()-1;
        		var filePath    = this.ds_saveFileList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileName    = this.ds_saveFileList.getColumn(findRow,"ORI_ATFL_NM");
        		var fileOrgName = this.ds_saveFileList.getColumn(findRow,"ATFL_NM");

        		if(findRow != -1)
        		{
        			this.ds_saveFileList.setColumn(findRow,"ETC_FDS_2","90");
        			this.div_02.form.imgViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        		}
        	}
        	else
        	{
        		this.div_02.form.btn_image_del.set_enable(false);
        		this.div_02.form.btn_image_add.set_enable(false);

        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			this.ds_saveFileList.setColumn(idx,"ETC_FDS_2","del");
        		}
        		this.div_02.form.imgViewer.set_image("");
        	}
        };

        /***********************************************************************************************
        * S-MRO카테고리 매핑 시작
        /***********************************************************************************************/
        /*
         *  돋보기버튼을 클릭(일반버튼)
         */
        this.div_02_btn_mro_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_02.form.MRO_PRD_CLCD.value);
        	this.fn_setCallPopup(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_02_MRO_PRD_CLCD_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_02.form.MRO_PRD_CLSF_NM.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_02_MRO_PRD_CLCD_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_02.form.MRO_PRD_CLCD.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"MRO_PRD_CLCD",sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",		this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",	1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-mroprd-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_popupList=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        		//trace(this.ds_popupList.saveXML());
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"MRO_PRD_CLCD",		this.ds_popupList.getColumn(0,"MRO_PRD_CLCD"));
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"MRO_PRD_CLSF_NM",	this.ds_popupList.getColumn(0,"MRO_PRD_CLSF_NM"));
        	} else
        	{


        		var objParam = {mroPrdClcd : sCodeId
        					   , coCd      : this.coCd};
        		this.gfn_openPopup( "SSP_BO_PA_46"
        						  , "PR_POP::SSP_BO_PA_46.xfdl"
        						  , objParam);

        	}
        };
        /***********************************************************************************************
        * S-MRO카테고리 매핑 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  상품담당자(정) 시작
        /***********************************************************************************************/
        /*
         *  돋보기버튼을 클릭(일반버튼)
         */
        this.div_02_btn_prd_onclick = function(obj,e)
        {

        	var sCodeId = this.gfn_trim(this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value);
        	this.fn_setCallPopup01(sCodeId);

        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_02_PR_PRD_CLSF_CHRPSN_ID_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_02.form.PR_PRD_CLSF_CHRPSN_NM.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_02_PRD_CLSF_CHRPSN_ID_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_oprtr.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	   this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_oprtr=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        		//trace(this.ds_oprtr.saveXML());
        	}

        	if(this.ds_oprtr.rowcount == 1)
        	{
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"PR_PRD_CLSF_CHRPSN_ID", this.ds_oprtr.getColumn(0,"EMP_NO"));
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"PR_PRD_CLSF_CHRPSN_NM", this.ds_oprtr.getColumn(0,"OPRTR_NM"));

        		if(this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID") == this.ds_detail.getColumn(0,"MD_PRD_CLSF_CHRPSN_ID"))
        		{
        			this.fn_alert("ERRR000184","저장","상품담당자,구매담당자","question"); //&1는 &2와 같을수 없습니다.
        			this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_ID","");
        			this.ds_detail.setColumn(0,"PR_PRD_CLSF_CHRPSN_NM","");
        			this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.setFocus();
        		}
        	} else
        	{


        		var objParam = {empNo:this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.value
        	                  , coCd:this.coCd};
        		this.gfn_openPopup( "SSP_BO_PP_27"
        	                 , "CO_POP::SSP_BO_PP_27.xfdl"
        					 , objParam);

        	}
        };
        /***********************************************************************************************
        *  상품담당자(정) 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  구매담당자(정) 시작
        /***********************************************************************************************/
        /*
         * 구매담당자(정)
         */
        this.div_02_btn_md_onclick = function(obj,e)
        {

        	var sCodeId = this.gfn_trim(this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value);
        	this.fn_setCallPopup02(sCodeId);

        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_02_MD_PRD_CLSF_CHRPSN_ID_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_02.form.MD_PRD_CLSF_CHRPSN_NM.set_value("");
        	}
        };
        /*
         *구매담당자(정) 매핑 팝업 처리 이벤트(ENDTER 선택 /BACKSPACE 전체삭제)
         */
        this.div_02_MD_PRD_CLSF_CHRPSN_ID_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup02(sCodeId);
        		}
        	}
        };


        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup02 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_oprtr.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	   this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_oprtr=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        		//trace(this.ds_oprtr.saveXML());
        	}

        	if(this.ds_oprtr.rowcount == 1)
        	{
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"MD_PRD_CLSF_CHRPSN_ID", this.ds_oprtr.getColumn(0,"EMP_NO"));
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"MD_PRD_CLSF_CHRPSN_NM", this.ds_oprtr.getColumn(0,"OPRTR_NM"));

        		if(this.ds_detail.getColumn(0,"MD_PRD_CLSF_CHRPSN_ID") == this.ds_detail.getColumn(0,"PR_PRD_CLSF_CHRPSN_ID"))
        		{
        			this.fn_alert("ERRR000184","저장","구매담당자,상품담당","question");
        			this.ds_detail.setColumn(0,"MD_PRD_CLSF_CHRPSN_ID","");
        			this.ds_detail.setColumn(0,"MD_PRD_CLSF_CHRPSN_NM","");
        			this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.setFocus();
        		}
        	} else
        	{

        		var objParam = {empNo:this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.value
        					  , coCd:this.coCd};
        		this.gfn_openPopup( "SSP_BO_PP_27_MD"
        						 , "CO_POP::SSP_BO_PP_27.xfdl"
        						 , objParam);

        	}
        };
        /***********************************************************************************************
        *  구매담당자(정) 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 이미지 등록처리 하는 함수
        /***********************************************************************************************/
        /*
         * 이미지 등록처리
         */
        this.div_02_btn_image_add_onclick = function(obj,e)
        {
        	this.div_02.form.FileUploadSingle.deleteItem(0);
        	this.div_02.form.FileUploadSingle.appendItem();
        	this.div_02.form.FileUploadSingle.filefindbuttons[0].click();
        };

        /*
         * 이미지 삭제처리
         */
        this.div_02_btn_image_del_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

        	if(result)
        	{
        		var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        		this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        		this.div_02.form.imgViewer.set_image("");
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.div_02.form.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        	{
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.div_02.form.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=90";

        	var bSucc = this.div_02.form.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"") == "")
        	{
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.div_02.form.imgViewer);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_01.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_01.form.LWST_CD_YN.addEventHandler("onitemchanged",this.div_01_LWST_CD_YN_onitemchanged,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.addEventHandler("onkeyup",this.div_02_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.PR_PRD_CLSF_CHRPSN_ID.addEventHandler("oninput",this.div_02_PR_PRD_CLSF_CHRPSN_ID_oninput,this);
            this.div_02.form.btn_prd.addEventHandler("onclick",this.div_02_btn_prd_onclick,this);
            this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.addEventHandler("onkeyup",this.div_02_MD_PRD_CLSF_CHRPSN_ID_onkeyup,this);
            this.div_02.form.MD_PRD_CLSF_CHRPSN_ID.addEventHandler("oninput",this.div_02_MD_PRD_CLSF_CHRPSN_ID_oninput,this);
            this.div_02.form.btn_md.addEventHandler("onclick",this.div_02_btn_md_onclick,this);
            this.div_02.form.btn_image_del.addEventHandler("onclick",this.div_02_btn_image_del_onclick,this);
            this.div_02.form.btn_image_add.addEventHandler("onclick",this.div_02_btn_image_add_onclick,this);
            this.div_02.form.MRO_PRD_CLCD.addEventHandler("onkeyup",this.div_02_MRO_PRD_CLCD_onkeyup,this);
            this.div_02.form.MRO_PRD_CLCD.addEventHandler("oninput",this.div_02_MRO_PRD_CLCD_oninput,this);
            this.div_02.form.btn_mro.addEventHandler("onclick",this.div_02_btn_mro_onclick,this);
            this.div_02.form.SEL_MTHD_CD.addEventHandler("onitemchanged",this.div_02_SEL_MTHD_CD_onitemchanged,this);
            this.div_02.form.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.div_02.form.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.div_02.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.div_02.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
