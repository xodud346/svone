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
            this.set_titletext("R&D 화학물질정보관리 등록/수정");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PHASE_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_DTM\"/><Col id=\"UPDPSN_ID\"/><Col id=\"CO_CD\"/><Col id=\"UPDPSN_NM\"/><Col id=\"PRD_DOC_REG_ID\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NM\"/><Col id=\"PHASE_SPR_NM\"/><Col id=\"PHASE_SPR_CD\"/><Col id=\"REGPSN_ID\"/><Col id=\"MTL_GRAVITY\"/><Col id=\"VAL_LIST\"/><Col id=\"REGPSN_NM\"/><Col id=\"UPD_DTM\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_phaseSprCdCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","149",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","118",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","87",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","56",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","415","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","20","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mtlGravity","20","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("물질비중");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_phase","20","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("성상");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsn","809","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdr","809","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("변경자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","160","91","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_phase","160","153","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_phaseSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDd","415","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdr","949","153","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","208","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("화학물질정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","32","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdDd","415","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("변경일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","542","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("추가규제정보 (<fc v=\'red\'><b v=\'true\'>*</b></fc>는 체크 시 취급불가)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","617","904","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit",null,"904","68","24","631",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","160","60","209","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","374","60","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","560","61",null,"24","53",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqPrvlList","415","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqPrvlList","560","91",null,"24","53",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_mtlGravity","160","122","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.getSetter("maxlength").set("10");
            obj.set_format("###.####");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsn","949","123","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDd","559","123","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdDd","559","153","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","184","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlList","20","244",null,"239","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("화학물질 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"화학물질명\"/><Cell col=\"2\" rowspan=\"2\" text=\"CAS No.\"/><Cell col=\"3\" colspan=\"5\" text=\"유해화학물질구분\"/><Cell col=\"8\" colspan=\"3\" text=\"함량\"/><Cell row=\"1\" col=\"3\" text=\"유독물질\"/><Cell row=\"1\" col=\"4\" text=\"제한물질\"/><Cell row=\"1\" col=\"5\" text=\"사고대비물질\"/><Cell row=\"1\" col=\"6\" text=\"금지물질\"/><Cell row=\"1\" col=\"7\" text=\"허가물질\"/><Cell row=\"1\" col=\"8\" text=\"FROM\"/><Cell row=\"1\" col=\"9\" text=\"TO\"/><Cell row=\"1\" col=\"10\" text=\"AVG\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CHM_MTL_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CAS_NO\" displaytype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;normal&quot; : &quot;none&quot;\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TOXIC_MTL1\"/><Cell col=\"4\" text=\"bind:LMT_MTL1\"/><Cell col=\"5\" text=\"bind:ACCD_PSB_MTL1\"/><Cell col=\"6\" text=\"bind:PHBT_MTL1\"/><Cell col=\"7\" text=\"bind:PERMIT_MTL1\"/><Cell col=\"8\" text=\"bind:MIN_CONTENT\" textAlign=\"right\" displaytype=\"maskeditcontrol\" edittype=\"mask\" editautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0.###\" maskeditautoselect=\"true\" maskeditlimitbymask=\"both\"/><Cell col=\"9\" text=\"bind:MAX_CONTENT\" textAlign=\"right\" displaytype=\"maskeditcontrol\" edittype=\"mask\" editautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0.###\" maskeditautoselect=\"true\" maskeditlimitbymask=\"both\"/><Cell col=\"10\" text=\"bind:AVG_CONTENT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","0","233","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"207","68","24","20",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"207","67","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","0","519","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00","0","565","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","850",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fileName","20","850","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("시약정보요약서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","829","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rgntInfo",null,"854","86","24","611",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("시약정보 URL");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","153","854","315","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_text("파일명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","0","883","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regulation",null,"494","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("규제정보 확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_01","0","483","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"29","80","24","20",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("변경이력");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","475","854",null,"24","btn_rgntInfo:4",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("R&D화학물질정보등록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlAddList","20","575",null,"254","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("추가규제 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"화평/화관법\"/><Cell col=\"2\" colspan=\"2\" text=\"산업안전보건법\"/><Cell col=\"4\" colspan=\"2\" text=\"마약류관리법\"/><Cell col=\"6\" colspan=\"2\" text=\"위험물안전관리법\"/></Band><Band id=\"body\"><Cell text=\"bind:A_LAW2_VAL\" displaytype=\"expr:A_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" text=\"bind:A_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:B_LAW2_VAL\" displaytype=\"expr:B_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" text=\"bind:B_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:C_LAW2_VAL\" displaytype=\"expr:C_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" text=\"bind:C_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"bind:D_LAW2_VAL\" displaytype=\"expr:D_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:D_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","720","857","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1014","857","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,950,this,function(p){});
            obj.set_description("R&D 화학물질정보관리 등록/수정");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item26","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_newPrdReqPrvlList","value","ds_master","VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mtlGravity","value","ds_master","MTL_GRAVITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_phase","value","ds_master","PHASE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_regDd","value","ds_master","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_regpsn","value","ds_master","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_fnlUpdDd","value","ds_master","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_fnlUpdr","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_45.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_45.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_45.xfdl(화학물질정보등록수정팝업)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/16
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;

        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp        = nexacro.getApplication();			 // application object

        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";
        this.sParamArg3     = "";

        this.lv_casNo       = "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvchkColidDs   = "CAS_NO$MIN_CONTENT$MAX_CONTENT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "CAS_NO$함량 FROM$함량 TO";
        this.strKeyValue    = "";
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            // 폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);

        	if(this.getOwnerFrame().pv_sOp02 == "U")
        	{
        		this.stc_title.set_text("R&D화학물질정보수정");
        		this.edt_prdId.set_readonly(true);
        		this.btn_prdIdPopup.set_enable(false);
        	}

        	if(this.getOwnerFrame().pv_sVal03 == "SSP_BO_RD_03")
        	{
        		this.btn_exit.set_text("취소");
        	}

            // 사용자 화면  초기화 함수
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
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

            var strDs    = "ds_phaseSprCdCombo|ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "PHASE_SPR_CD|CHRPSN_TEAM_SPR_CD";                          // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|X";                                    				   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                     					   // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.ds_master.setColumn(0,"PHASE_SPR_CD",null);
        	this.btn_save.set_enable(false);

        	// 수정 모드인 경우
        	if(this.sOptinoArg2 == "U")
        	{
        		this.ds_search.setColumn(0,"PRD_ID",this.sParamArg1);
        		this.ds_search.setColumn(0,"CO_CD", this.sParamArg2);

        		// 조회 호출
        		this.fn_Ret();
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "CasNoCnfYn":
        					this.fn_PostCasNoCnfYn();
        				break;
                    case "Save":
        					this.fn_PiCall();
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
            }
        };

        // Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 상품ID 단일 팝업 조회 후 처리
                case "SSP_BO_PP_38" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdId.set_value(jsonData.PRD_ID_VIEW);
        					this.edt_prdNm.set_value(jsonData.PRD_NM);
        					this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        					this.edt_newPrdReqPrvlList.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.fn_Ret();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
                    break;
        		case "SSP_BO_RD_61" :                         // CLOB상세변경시 콜빽함수
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
        		    break;
                default:
                    break;
            }
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            this.fn_saveMultiFileDelUpdate("");
        	// 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/chm-mtl-info-mng/select-chm-mtl-info-reg-upd-list-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_chmMtlList=ds_chmMtlList"
        					+ " ds_chmMtlAddList=ds_chmMtlAddList"
        					+ " ds_saveFileList=ds_saveFileList";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	this.btn_rgntInfo.set_enable(false);
        	this.btn_save.set_enable(false);

        	// 이미지 & 첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.rowcount; idx++)
        		{
        			var filePath    = this.ds_saveFileList.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName    = this.ds_saveFileList.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx,"ETC_FDS_2");
        			var strAtflNm   = this.ds_saveFileList.getColumn(idx,"ATFL_NM");

        			this.edt_fileName.set_value(fileOrgName);
        			this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        		}
        	}

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

        /**
         * 기능 : 규제정보 조회 전 실행
         */
        this.fn_PreCasNoCnfYn = function()
        {
        	if(this.ds_chmMtlList.getRowCount() == 0)
        	{
        		this.fn_alert("ERRR000180","규제정보","","warning"); // 화학물질 리스트 정보가 존재하지 않습니다.
                return false;
        	}

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		var strCasNo      = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"CAS_NO"),     "");
        		var strMinContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MIN_CONTENT"),"");
        		var strMaxContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT"),"");

        		if(this.ds_chmMtlList.getCaseCount("CAS_NO == '" + strCasNo + "'") > 1)
        		{
        			this.fn_alert("ERRR000181","규제정보",(idx+1)+",CAS_NO","question"); 							// &1번째 화학물질 &2가 중복으로 존재 합니다.
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strCasNo == "")
        		{
        			this.fn_alert("ERRR000182","규제정보",(idx+1)+",CAS_NO","question");  							// &1번째 화학물질 &2를 입력 하셔야 합니다.
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strMinContent == "")
        		{
        			this.fn_alert("ERRR000182","규제정보",(idx+1)+",함량 FROM","question");       				// &1번째 화학물질 &2를 입력 하셔야 합니다.
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MIN_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strMaxContent == "")
        		{
        			this.fn_alert("ERRR000182","규제정보",(idx+1)+",함량 TO","question");   						// &1번째 화학물질 &2를 입력 하셔야 합니다.
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MAX_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        	}

        	this.ds_chmMtlListTemp.copyData(this.ds_chmMtlList);

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 규제정보 조회 실행
         */
        this.fn_CasNoCnfYn = function()
        {
            if(!this.fn_PreCasNoCnfYn())
            {
                return false;
            }
            var strSvc      = "CasNoCnfYn";
            var strUrl      = "/rd/chm-mtl-info-mng/select-regulation-info-cnf-yn.do";
            var strInDs     = "ds_chmMtlList=ds_chmMtlListTemp:a";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"CO_CD"))
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 규제정보 조회 후 실행
         */
        this.fn_PostCasNoCnfYn = function()
        {
        	if(this.gfn_nvl(this.lv_casNo,"") != "Y")
        	{
        		var findRow = this.ds_chmMtlList.findRow("CAS_NO",this.lv_casNo);
        		this.fn_alert("ERRR000183","규제정보",(findRow+1) + ",CAS_NO","question");
        		this.ds_chmMtlList.set_rowposition(findRow);
        		this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        		this.grd_chmMtlList.showEditor();
        		return false;
        	}
        	else
        	{
        		this.ds_chmMtlList.set_updatecontrol(false);
        		for(var idx=0; idx<this.ds_chmMtlListTemp.getRowCount(); idx++)
        		{
        			var strCasNo      = this.ds_chmMtlListTemp.getColumn(idx,"CAS_NO");
        			var strMinContent = this.ds_chmMtlListTemp.getColumn(idx,"MIN_CONTENT");
        			var strMaxContent = this.ds_chmMtlListTemp.getColumn(idx,"MAX_CONTENT");
        			var findRow       = this.ds_chmMtlList.findRowExpr("CAS_NO == '"+ strCasNo +"' && MIN_CONTENT == '" + strMinContent + "' && MAX_CONTENT == '" + strMaxContent + "'");

        			for(var jdx=0; jdx<this.ds_chmMtlListTemp.getColCount(); jdx++)
        			{
        				var colId  = this.ds_chmMtlListTemp.getColID(jdx);
        				var colVal = this.ds_chmMtlListTemp.getColumn(idx,colId);
        				this.ds_chmMtlList.setColumn(findRow,colId,colVal);
        			}
        		}
        		this.ds_chmMtlList.set_updatecontrol(true);
        		this.ds_chmMtlAddList.copyData(this.ds_chmMtlAddListTemp);
        		this.btn_rgntInfo.set_enable(true);
        		this.btn_save.set_enable(true);
        	}
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.ds_chmMtlList.addRow();
            this.ds_chmMtlList.setColumn(nRow,"CHK","0");           // 업체코드
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            // 멀티삭제용도
            if(this.ds_chmMtlList.rowcount < 1 || this.ds_chmMtlList.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000011","삭제정보","","warning"); // 선택된 값이 없습니다.
                return false;
            }

            var result = this.fn_confirm("ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_chmMtlList.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_chmMtlList.getColumn(i,"CHK") == 1)
                {
                    this.ds_chmMtlList.deleteRow(i);
                }
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
        	this.btn_save.set_enable(true);
        };

        this.fn_PostDel = function()
        {

        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            // 상품ID 필수 입력 체크
        	if(this.gfn_isNull(this.edt_prdId.value))
        	{
        		this.fn_alert("ERRS000144","저장정보","상품ID","question"); // &1은(는) 필수입력사항입니다.
        		this.edt_prdId.setFocus();
        		return false;
        	}
        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_chmMtlList, this.lvchkColidDs, this.lvchkColNameDs, this.grd_chmMtlList, chkFocusFlg, this);

            if(result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	//  상품ID 정합성 체크
        	if(!this.fn_codeChkYn())
        	{
        		return false;
        	}

        	// 유해화학물질 존재시 시약정보요약서 파일 필수 체크
        	if(this.ds_chmMtlList.getCaseCount("TOXIC_MTL1 == 'Y'")    > 0       /*유독물질*/
        	|| this.ds_chmMtlList.getCaseCount("LMT_MTL1 == 'Y'")      > 0       /*제한물질*/
        	|| this.ds_chmMtlList.getCaseCount("ACCD_PSB_MTL1 == 'Y'") > 0       /*사고대비물질*/
        	|| this.ds_chmMtlList.getCaseCount("PHBT_MTL1 == 'Y'")     > 0       /*금지물질*/
        	|| this.ds_chmMtlList.getCaseCount("PERMIT_MTL1 == 'Y'")   > 0)      /*허가물질*/
        	{
        		if(this.gfn_isNull(this.edt_fileName.value))
        		{
        			this.fn_alert("ERRR000206","저장정보","","question");   // 유해화학물질이 존재하여 시약정보요약서 파일은 필수로 등록 하셔야 합니다.
        			this.edt_fileName.setFocus();
        			return false;
        		}
        	}

        	// 30 * 1,024 * 1,024 = 31,457,280 size
        	// 1 * 1,024 * 1,024  =  1,048,576 size
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "del")
        			{
        				continue;
        			}

        			if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        			{
        				this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 &1를 초과 합니다.
        				return false;
        			}
        		}
        	}

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

             if(result == 0)
             {
                 return false;
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

            var strSvc      = "Save";
            var strUrl      = "/rd/chm-mtl-info-mng/save-chm-mtl-info-cnf.do";
            var strInDs     = "ds_search=ds_search:a"
        	                + " ds_master=ds_master:a"
                            + " ds_chmMtlList=ds_chmMtlList:u"
        		            + " ds_saveFileList=ds_saveFileList:u";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
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
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	// R&D등록상세 팝업에서 호출시
        	if(this.sParamArg3 == "SSP_BO_RD_03")
        	{
        		var objRtnArr = new Array(3);
        		objRtnArr[0] = "SAVE";
        		objRtnArr[1] = this.gfn_nvl(this.ds_master.getColumn(0,"MTL_GRAVITY"),"");
        		objRtnArr[2] = this.gfn_nvl(this.ds_master.getColumn(0,"PHASE_SPR_CD"),"");

        		this.opener.fn_dsChildCopydsDummy(this.ds_chmMtlListTemp,this.ds_chmMtlAddListTemp,this.ds_uploadResult);
        		this.close(objRtnArr.toString());
        	}
        	else
        	{
        		//화확물질 정보관리 호출시
        		if(this.sParamArg3 == "SSP_BO_RD_42")
        		{
        			this.strKeyValue = this.sParamArg2 + "|" + this.ds_search.getColumn(0,"PRD_ID");
        			this.opener.fn_setGridCellPos(this.strKeyValue);
        		}
        		this.close("SAVE");
        	}
        };

        /**
         * 상품ID 정합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	this.ds_searchChkYn.clearData();
        	var nRow = this.ds_searchChkYn.addRow();

        	this.ds_searchChkYn.setColumn(nRow,"CO_CD",			this.lv_coCd);
        	this.ds_searchChkYn.setColumn(nRow,"MALL_SPR_CD",	"20");
        	this.ds_searchChkYn.setColumn(nRow,"PRD_ID",	    this.gfn_trim(this.edt_prdId.value));

        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/chm-mtl-info-mng/select-code-chk-yn.do";
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


        	var strPrdIdYn = this.ds_codeChkYn.getColumn(0,"PRD_ID_YN");

        	// 상품ID
        	if(strPrdIdYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장/수정정보","상품ID","question"); // 존재하지 않는 &1 입니다.
        		this.edt_prdId.setFocus();
        		return false;
        	}

        	return true;
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1 && this.ds_rndPrdAuthCombo.getColumn(strRndPrdAuth,"COM_USR_DEFN_NM_1") == "S")
        	{
        		this.lv_btnChkYn = "P";
        	}
        	else
        	{
        		var strMnfrNo  = this.ds_master.getColumn(0,"MNFR_NO");
        		var strPrdClcd = this.ds_master.getColumn(0,"PRD_CLCD");

        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq(strMnfrNo,strPrdClcd);

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_close         : this.btn_close
        						  , btn_exit          : this.btn_exit
        						  , btn_history_popup : this.btn_history_popup
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 상품정보 [상품ID & 물질비중 & 성상] 컬럼 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MTL_GRAVITY" || e.columnid == "PHASE_SPR_CD")
        	{
        		this.btn_save.set_enable(true);
        	}
        };

        /**
         * 화학물질정보 데이터셋 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_chmMtlList_oncolumnchanged = function(obj,e)
        {
        	// CAS_NO or MIN_CONTENT or MAX_CONTENT
        	if(e.columnid == "CAS_NO" || e.columnid == "MIN_CONTENT" || e.columnid == "MAX_CONTENT")
        	{
        		this.btn_rgntInfo.set_enable(false);
        		this.btn_save.set_enable(false);
        	}
        };

        /***********************************************************************************************
        *  상품 조회팝업 시작
        /***********************************************************************************************/

        /**
         * 조회조건 상품ID 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_prdIdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdId.value);
        	this.fn_setCallPopup("");
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		/*
        		this.edt_prdNm.set_value("");
        		this.edt_mnfrNm.set_value("");
        		this.edt_newPrdReqPrvlList.set_value("");
        		this.edt_regDd.set_value("");
        		*/
        		this.ds_master.clearData();
        		var nRow = this.ds_master.addRow();
        		this.ds_master.setColumn(nRow,"PHASE_SPR_CD",null);
        		this.ds_chmMtlList.clearData();
        		this.ds_chmMtlAddList.clearData();
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.edt_prdId_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.edt_prdId.value);

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
        	/*
        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD", 			this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_ID",  		sCodeId);
        		this.ds_input.setColumn(nRow,"PUB_ONLY_SPR_CD",	this.gfn_nvl(this.ds_search.getColumn(0,"PUB_ONLY_SPR_CD"),""));
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",		"20");
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  		1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  		0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-product-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_list";                               // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_ID",  		this.ds_popupList.getColumn(0,"PRD_ID_VIEW"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_NM", 		this.ds_popupList.getColumn(0,"PRD_NM"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"MNFR_NM", 		this.ds_popupList.getColumn(0,"MNFR_NM"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"VAL_LIST", 	this.ds_popupList.getColumn(0,"FULL_PRD_CLSF_NM"));
        		this.fn_Ret();
        	} else
        	{
        	*/
        		var params  = { prdId        : sCodeId
        					  , pubOnlySprCd : this.gfn_nvl(this.ds_search.getColumn(0,"PUB_ONLY_SPR_CD"),"")
        					  , coCd         : this.lv_coCd
        					  , mallSprCd    : "20"
        					  };

        		var options = { title        : "상품ID 단일조회"};

        		this.gfn_openPopup( "SSP_BO_PP_38"
        					  , "PR_POP::SSP_BO_PP_38.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);

        	//}
        };
        /***********************************************************************************************
        *  상품 조회팝업 종료
        /***********************************************************************************************/

        /**
         * 규제정보 확인 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_regulation_onclick = function(obj,e)
        {
        	// 규제정보 확인 호출
        	this.fn_CasNoCnfYn();
        };

        /**
         * 파일등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {
        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","S2");
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.edt_fileName.set_value("");
        			this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        			this.btn_save.set_enable(true);
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        	  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        	  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        	  || sCompValue.toUpperCase() == "HWP"))
        	{
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value; 						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DOC_REG_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=S2";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","S2");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var strAtflNm = this.ds_uploadResult.getColumn(0,"ATFL_NM");
        	var textArry  = "";

        	for(var idx=0; idx<strAtflNm.length; idx++)
        	{
        		if(strAtflNm.charCodeAt(idx) != "32")
        		{
        		    textArry += String.fromCharCode(strAtflNm.charCodeAt(idx));
        		}
        	}

        	if(!this.gfn_isNull(textArry))
        	{
        		this.ds_uploadResult.setColumn(0,"ATFL_NM",textArry);
        	}

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DOC_REG_ID"),"") == "")
        	{
        		this.ds_master.setColumn(0,"PRD_DOC_REG_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	this.btn_save.set_enable(true);
        	this.edt_fileName.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        	this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.edt_fileName_oneditclick = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow    = this.ds_uploadResult.addRow();
        		var findRow = this.ds_saveFileList.findRow("ETC_FDS_2","S2");
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e)
        {
        	this.btn_file.set_text("파일 등록");
        	obj.set_cursor("");

        	if(this.gfn_nvl(obj.value,"") != "")
        	{
        		obj.set_cursor("pointer");
        		this.btn_file.set_text("삭제");
        	}
        };

        /**
         * 시약정보URL 버튼 클릭시 onclick  이벤트 발생 처리
         */
        this.btn_rgntInfo_onclick = function(obj,e)
        {
        	var strCasNo = "";
        	var strTo    = "";

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		if(strCasNo != "")
        		{
        			strCasNo += ",";
        			strTo    += ",";
        		}

        		strCasNo += this.ds_chmMtlList.getColumn(idx,"CAS_NO");
        		strTo    += this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT");
        	}

        	var objApp = nexacro.getApplication();
            var appUrl      = objApp.xadl;
            var appUrlSplit = appUrl.split("/");
        	var objEnv 		= nexacro.getEnvironment();
         	var service     = objEnv.services["svcurl"];	// TypeDefinition 접근하기위한객체
        	var protocol 	= appUrlSplit[0];   			// 프로토콜이 : RUNTIME(file:),WEB(http)
        	var url         = "http://121.50.29.169:18080";

            if(appUrlSplit[2] == "adminssp.serveone.co.kr")
            {
                // 운영 시약정보 Site
        		url = "https://cms.serveone.co.kr:18081";
            }

        	// 시약정보 Site
        	system.execBrowser(url+"/nextMsds/business/interface/reagentView?reagent_key=copa&cas_no="+strCasNo+"&cas_ratio="+strTo);
        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	// ERRR000076 : 등록을 취소하고 목록으로 이동하시겠습니까?
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "I" ? "ERRR000076" : "ERRR000060";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	// ERRR000076 : 등록을 취소하고 목록으로 이동하시겠습니까?
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "I" ? "ERRR000076" : "ERRR000060";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_PiCall = function()
        {
            var strSvc      = "PiCall";
            var strUrl      = "/rd/chm-mtl-info-mng/cms-pi-call-stat.do";
            var strInDs     = " ds_master=ds_master";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList";
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
        /*
         * 히스토리 관리
         */
        this.btn_history_popup_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "FORMAT02";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_CHM_MTL_DTLS_HST";			                 // 테이블 이름(화학물질 테이블 )
        	var lv_sFlag03			= "S";			                                         // 상세화면에서 조회:S/메인화면 조회:M
        	var lv_sFlag04			= "Y";			                                         // 화면로드시 자동조회:Y,미자동조회/N
        	var lv_sValue01 		= this.ds_master.getColumn(0, "PRD_ID");	             // 상품코드
        	var lv_sValue02 		= this.ds_master.getColumn(0, "PRD_NM");                 // 상품명
        	var lv_sValue03 		= this.ds_master.getColumn(0, "MNFR_NO");                // 제조원ID
        	var lv_sValue04 		= this.ds_master.getColumn(0, "MNFR_NM");                // 제조원명
        	var lv_sValue05		    = this.ds_master.getColumn(0, "PRD_CLCD");               // 카테고리ID
        	var lv_sValue06 	    = this.ds_master.getColumn(0, "PRD_CLSF_NM");            // 카네고리명


        	var sPopId 			= "SSP_BO_RD_61";
        	var sUrl 			= "RD::SSP_BO_RD_61.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	  // GRID(그리드)에 formatid:포멧ID
        						  , pv_sOp02:lv_sFlag02       	  // 로그테이블 이름
        						  , pv_sOp03:lv_sFlag03           // 상세화면에서 조회:S/메인화면 조회:M
        						  , pv_sOp04:lv_sFlag04       	  // 화면로드시 자동조회:Y,미자동조회/N
        						  , pv_sVal01:lv_sValue01          // 상품코드
        						  , pv_sVal02:lv_sValue02         // 상품명
        						  , pv_sVal03:lv_sValue03         // 제조원ID
        						  , pv_sVal04:lv_sValue04         // 제조원명
        						  , pv_sVal05:lv_sValue05         // 카테고리ID
        						  , pv_sVal06:lv_sValue06};       // 카네고리명
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.edt_mnfrNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_mnfrNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.edt_prdId.addEventHandler("onkeyup",this.edt_prdId_onkeyup,this);
            this.edt_prdId.addEventHandler("oninput",this.edt_prdId_oninput,this);
            this.btn_prdIdPopup.addEventHandler("onclick",this.btn_prdIdPopup_onclick,this);
            this.edt_newPrdReqPrvlList.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_newPrdReqPrvlList.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_rgntInfo.addEventHandler("onclick",this.btn_rgntInfo_onclick,this);
            this.edt_fileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.btn_regulation.addEventHandler("onclick",this.btn_regulation_onclick,this);
            this.btn_history_popup.addEventHandler("onclick",this.btn_history_popup_onclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_chmMtlList.addEventHandler("oncolumnchanged",this.ds_chmMtlList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_45.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
