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
            this.set_titletext("사업장 상세정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZCAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_MNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LGGRP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AGNC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_BGT_FW_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_BGT_CLOS_DD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY_STR_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZDOC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTCI_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DUP_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FNSH_CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDI_DEVI_SELL_PERMIT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DUP_INFO_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RT\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iddtList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bilcltCondList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stlMeanList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeList\">BGT_FW_SPR_CD,BGT_CLOS_DD_CD</Col><Col id=\"langCd\">KO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdBgtFwSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdBgtClosDdCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdQrtBgtUseYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">QRT_BGT_USE_YN</Col><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"SRT_SO\">1</Col></Row><Row><Col id=\"COM_CLSF_CD\">QRT_BGT_USE_YN</Col><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"SRT_SO\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"500\"/><Column id=\"STOR_PLC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buttonId", this);
            obj._setContents("<ColumnInfo><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"excepId\" type=\"STRING\" size=\"256\"/><Column id=\"excepId1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dupInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mediDeviSellPermitAtfls", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILESEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILE_ORI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mediDeviSellPermitAtflsDele", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILESEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILE_ORI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mediDeviSellPermitAtfls_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILESEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_PERMIT_ATTC_FILE_ORI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fluptrnr_mdspAtfl", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basis","20","30",null,"277","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","208",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static17","0","177",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","146",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static65","0","115",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07","0","84",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("1");
            obj.set_text("등록정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04","862","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("3");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06","0","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("4");
            obj.set_text("그룹");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static08","862","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("5");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static10","0","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("6");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static66","862","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("7");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static12","0","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("8");
            obj.set_text("업종");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("9");
            obj.set_text("업태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static14","862","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("10");
            obj.set_text("계약관리명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static16","0","177","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("11");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static18","862","177","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("12");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static19","991","177",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","208","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("13");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static18_00","862","208","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("15");
            obj.set_text("순수 외부구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static32","431","208","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("14");
            obj.set_text("외부구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("21");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("22");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","431","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("25");
            obj.set_text("법인");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_01","431","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("26");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_02","431","177","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("27");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04_00","1003","212","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03_00","1002","181","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_02_00","1002","150","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01_00","1002","119","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00_00","1002","88","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_05","1002","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04_00_00","572","212","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03_00_00","571","181","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_02_00_00","571","150","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01_00_00","571","119","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00_00_00","571","88","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_05_00","571","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04","141","212","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03","140","181","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_02","140","150","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01","140","119","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00","140","88","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01","140","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("edt_01_00_01_01_01","edt_01_00_01_01:-80","119","80","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_text("변경");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("edt_01_00_01_01_02","edt_01_00_01_01:-80","119","80","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_text("중복확인");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("edt_01_00_01_01_03","edt_01_00_01_01:14","119","30","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            obj.set_font("bold 16px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static17_00_00","0","239",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("lbl_consnCustYn","431","239","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("50");
            obj.set_text("특약고객여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_consnCustYn","572","243","43","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("lbl_consnCustDate","862","239","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("52");
            obj.set_text("특약고객 기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_consnCustDate","1003","243","170","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 ~ 2023-12-31");
            obj.set_visible("false");
            obj.set_text("2023-01-01 ~ 2023-12-31");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","0","239","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("54");
            obj.set_text("종업원수");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04_01","140","243","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_fnshConsnCust","620","243","90","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_text("일반고객 전환");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("lbl_consnCustDateInfo","1183","248","97","15",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("57");
            obj.set_text("* 완료까지 999일.");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_consnCustFnlChgDate","715","243","136","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("58");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_save","670","850","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("div_addr","20","317","862","96",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("우편번호");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-5","280","30",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("0");
            obj.set_text("주소 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","720","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00_00","140","35","280","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("3");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","1","62","849","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("상세주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00_01","569","66","280","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("6");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00","137","66","290","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","1","62","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Button("btn_cancel","605","850","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Div("div_acct","20","421",null,"112","454",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","66",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("수금조건");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","430","30",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("0");
            obj.set_text("회계");
            obj.set_cssclass("sta_WF_title02");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","65",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","66",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("결제수단");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","31",null,"65","13",null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_acct.addChild(obj.name, obj);

            obj = new TextArea("txt_bilcltCondList","130","32","302","65",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new TextArea("txt_stlMeanList","560","32","289","65",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new Div("div_ctrl","20","529",null,"126","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00","130","93","450","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("주문대행");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","864",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("0");
            obj.set_text("제어 권한");
            obj.set_cssclass("sta_WF_title02");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹결재");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","31",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("그룹발주");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62","450","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("법인발주");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","560","62",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00","570","35",null,"24","436",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("3");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_00","132","66",null,"24","936",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","132","34",null,"24","936",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","862","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("법인결재");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","62","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산년도 시작월");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_01","1000","35",null,"24","6",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("14");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_02","570","66",null,"24","436",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("15");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_bgtYyStrMm","1000","66","80","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_ctrl_form_cbo_bgtYyStrMm_innerdataset = new nexacro.NormalDataset("div_ctrl_form_cbo_bgtYyStrMm_innerdataset", obj);
            div_ctrl_form_cbo_bgtYyStrMm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">1월</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2월</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3월</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4월</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5월</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6월</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7월</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8월</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9월</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10월</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11월</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12월</Col></Row></Rows>");
            obj.set_innerdataset(div_ctrl_form_cbo_bgtYyStrMm_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","93","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산이월구분");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_01","431","93","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("분기별관리사용");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","570","97",null,"24","436",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("19");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_00","862","93","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산년도 시작월");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_00","560","93",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_01","862","93","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산마감일");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_bzplcBgtFwSprCd","138","97","192","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_comCdBgtFwSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_bzplcBgtClosDdCd","1000","97","150","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_comCdBgtClosDdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdo_bzplcQrtBgtUseYn","567","99","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("26");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_comCdQrtBgtUseYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Div("div_addInfo","20","664",null,"94","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("산업군");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","865",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("0");
            obj.set_text("추가 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("고객등급");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62","450","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("판매가 할인율");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","560","62",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_iddtId","138","35","192","24",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_iddtList");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_bzplcGrdId","138","66","192","24",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_grdList");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_aplyDcrt","570","66",null,"24","436",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("9");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Div("div_atfl","20","759",null,"93","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업자등록증");
            obj.set_visible("true");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","200","30",null,null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("0");
            obj.set_text("첨부 파일");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("true");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            obj.set_visible("true");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("고객사 CI-숨김");
            obj.set_visible("false");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("sta_custciAtflId","570","35","200","24",null,null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("3");
            obj.set_textDecoration("underline");
            obj.set_text("다운로드");
            obj.set_visible("false");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("sta_bizdocAtflId","140","35","280","24",null,null,null,null,null,null,this.div_atfl.form);
            obj.set_taborder("5");
            obj.set_textDecoration("underline");
            obj.set_text("다운로드");
            obj.set_visible("true");
            this.div_atfl.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","8","382","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("사업장 상세정보");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_mediDeviSellPermitAtfls","881","379","435","140",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_mediDeviSellPermitAtfls");
            obj.set_nodatatext("의료기기 판매허가 첨부파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"379\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"의료기기 판매허가 첨부파일          \"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SELL_PERMIT_ATTC_FILENM\" textAlign=\"left\" color=\"blue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","884","312",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("의료기기 판매허가 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","882","348","434","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01_00","881","348","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("의료기기 판매허가");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload","220","14","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mediDeviSellPermitYn","1023","353","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_comCdQrtBgtUseYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apnd4MediDeviSellPermitAtfl",null,"383","50","24","98",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("+ 추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dele4MediDeviSellPermitAtfl",null,"383","50","24","44",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("- 삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("flup_mdspAtfl","347","14","113","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","div_addInfo.form.cbo_iddtId","value","ds_dtl","IDDT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_addInfo.form.cbo_bzplcGrdId","value","ds_dtl","BZPLC_GRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_addInfo.form.sta_aplyDcrt","text","ds_dtl","APLY_DCRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_ctrl.form.Static00_00_00","text","ds_dtl","ODR_AGNC_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_ctrl.form.Static00","text","ds_dtl","GRP_APRV_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_ctrl.form.Static00_01","text","ds_dtl","CORP_APRV_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_ctrl.form.Static00_00","text","ds_dtl","GRP_ORD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_ctrl.form.Static00_02","text","ds_dtl","CORP_ORD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_ctrl.form.cbo_bgtYyStrMm","value","ds_dtl","BGT_YY_STR_MM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_basis.form.edt_01_00_01_04_00","value","ds_dtl","POSD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basis.form.edt_01_00_01_04_00_00","value","ds_dtl","OSD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basis.form.edt_01_00_01_03_00","value","ds_dtl","SALS_CHRPSN_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basis.form.edt_01_00_01_03_00_00","value","ds_dtl","CONT_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basis.form.edt_01_00_01_02_00","value","ds_dtl","CONT_MNG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basis.form.edt_01_00_01_02_00_00","value","ds_dtl","BZTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basis.form.edt_01_00_01_01_00","value","ds_dtl","CEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basis.form.edt_01_00_01_01_00_00","value","ds_dtl","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basis.form.edt_01_00_01_00_00","value","ds_dtl","CORP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basis.form.edt_01_00_01_00_00_00","value","ds_dtl","CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basis.form.edt_01_00_01_05","value","ds_dtl","CUST_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basis.form.edt_01_00_01_05_00","value","ds_dtl","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basis.form.edt_01_00_01_04","value","ds_dtl","LGGRP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basis.form.edt_01_00_01_03","value","ds_dtl","CONT_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basis.form.edt_01_00_01_02","value","ds_dtl","BZCAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basis.form.edt_01_00_01_01","value","ds_dtl","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_basis.form.edt_01_00_01_00","value","ds_dtl","GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basis.form.edt_01_00_01","value","ds_dtl","BZPLC_REG_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_ctrl.form.Static00_02_00","text","ds_dtl","CORP_ORD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_ctrl.form.cbo_bzplcBgtFwSprCd","value","ds_dtl","BZPLC_BGT_FW_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_ctrl.form.cbo_bzplcBgtClosDdCd","value","ds_dtl","BZPLC_BGT_CLOS_DD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_ctrl.form.rdo_bzplcQrtBgtUseYn","value","ds_dtl","BZPLC_QRT_BGT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_basis.form.edt_consnCustYn","value","ds_dtl","CONSN_CUST_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_basis.form.edt_consnCustDate","value","ds_dtl","CONSN_CUST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_basis.form.edt_01_00_01_04_01","value","ds_dtl","EMPCNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_addr.form.Static00_00","text","ds_dtl","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_addr.form.Static00","text","ds_dtl","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_addr.form.Static00_01","text","ds_dtl","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_basis.form.lbl_consnCustDateInfo","text","ds_dtl","CONSN_CUST_DATE_MESG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_basis.form.edt_consnCustFnlChgDate","value","ds_dtl","CONSN_CUST_FNL_CHG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","cbo_mediDeviSellPermitYn","value","ds_dtl","MEDI_DEVI_SELL_PERMIT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_02.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_02.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_02.xfdl","RD::rdMsg.xjs");
        this.registerScript("SSP_BO_MA_02.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
          수정 : 박재광 2022.05.18 : 사업장제어권한 컬럼 추가
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMsg.xjs"); /*include "RD::rdMsg.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.isPrntRefresh=false;  // [2022.04.25] sg.park 저장시 부모창 새로고침용

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //콤보박스 코드 조회
        this.fn_searchCode = function()	{
        	var sSvcId = "selectCode";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/selectCodeList.do";
        	var inDs = "";
        	var outDs = "ds_codeList=ds_codeList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function()	{
        	var sSvcId = "selectDtl";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/selectBizplcDtl.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dtl=ds_dtl ds_bilcltCondList=ds_bilcltCondList ds_stlMeanList=ds_stlMeanList ds_fileList=ds_fileList ds_buttonId=ds_buttonId ds_mediDeviSellPermitAtfls=ds_mediDeviSellPermitAtfls ds_mediDeviSellPermitAtflsDele=ds_mediDeviSellPermitAtflsDele";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //사업자명 중복 조회
        this.fn_searchDupNm = function()	{
        	var sSvcId = "searchDupNm";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/selectBizplcNm.do";
        	var inDs = "ds_dtl=ds_dtl";
        	var outDs = "ds_dupInfo=ds_dupInfo";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{
        	var sSvcId = "saveDtl";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/saveBizplcDtl.do";
        	var inDs = "ds_dtl=ds_dtl ds_mediDeviSellPermitAtfls=ds_mediDeviSellPermitAtfls ds_mediDeviSellPermitAtflsDele=ds_mediDeviSellPermitAtflsDele";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드 조회, 20220518 박재광
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCdSearch";  //BGT_FW_SPR_CD, BGT_CLOS_DD_CD
        	var outDs = "ds_comCdBgtFwSprCd=ds_output1 ds_comCdBgtClosDdCd=ds_output2";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectCode") { //콤보박스 코드 조회
        		var nRow = 0;
        		//선택 항목 삽입
        		nRow = this.ds_iddtList.addRow();
        		this.ds_iddtList.setColumn(nRow,"ID","");
        		this.ds_iddtList.setColumn(nRow,"NM","선택");
        		nRow = this.ds_grdList.addRow();
        		this.ds_grdList.setColumn(nRow,"ID","");
        		this.ds_grdList.setColumn(nRow,"NM","선택");

        		for(i=0; i<this.ds_codeList.getRowCount(); i++) {
        			if(this.ds_codeList.getColumn(i,"GB") == "IDDT") { //산업군 콤보 데이터
        				nRow = this.ds_iddtList.addRow();
        				this.ds_iddtList.setColumn(nRow,"ID",this.ds_codeList.getColumn(i,"ID"));
        				this.ds_iddtList.setColumn(nRow,"NM",this.ds_codeList.getColumn(i,"NM"));
        			}
        			else if(this.ds_codeList.getColumn(i,"GB") == "GRD") { //사업장등급 콤보 데이터
        				nRow = this.ds_grdList.addRow();
        				this.ds_grdList.setColumn(nRow,"ID",this.ds_codeList.getColumn(i,"ID"));
        				this.ds_grdList.setColumn(nRow,"NM",this.ds_codeList.getColumn(i,"ID") + ' | ' + this.ds_codeList.getColumn(i,"NM"));
        				this.ds_grdList.setColumn(nRow,"RT",this.ds_codeList.getColumn(i,"RT"));
        			}
        		}

        		/* 사업장 상세 조회 */
        		if(!this.gfn_isNull(this.parent.coCd) && !this.gfn_isNull(this.parent.bzplcId)) { //목록에서 넘겨준 파라미터 셋팅
        			//this.ds_search.setColumn(0,"coCd","1000");
        			//this.ds_search.setColumn(0,"bzplcId","S000000678");
        			//this.ds_search.setColumn(0,"bzplcId","S000004204");
        			this.ds_search.setColumn(0,"coCd",this.parent.coCd);
        			this.ds_search.setColumn(0,"bzplcId",this.parent.bzplcId);

        			this.fn_search();
        		}

        	}
        	else if(svcID == "selectDtl"){
        		//수금조건 설정
        		var bilcltCondList = "";
        		var bilcltCondListCnt = this.ds_bilcltCondList.getRowCount();
        		for(i=0; i<bilcltCondListCnt; i++) {
        			bilcltCondList += this.ds_bilcltCondList.getColumn(i,"CD_NM")
        			if(i < (bilcltCondListCnt-1)) bilcltCondList += "\r\n";
        		}
        		this.div_acct.form.txt_bilcltCondList.set_value(bilcltCondList);

        		//결제수당 설정
        		var stlMeanList = "";
        		var stlMeanListCnt = this.ds_stlMeanList.getRowCount();
        		for(i=0; i<stlMeanListCnt; i++) {
        			stlMeanList += this.ds_stlMeanList.getColumn(i,"CD_NM");
        			if(i < (stlMeanListCnt-1)) stlMeanList += "\r\n";
        		}
        		this.div_acct.form.txt_stlMeanList.set_value(stlMeanList);

        		//콤보박스 값이 공백일때 첫번째 옵션으로 선택
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BGT_YY_STR_MM"))) this.div_ctrl.form.cbo_bgtYyStrMm.set_index(0);
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"IDDT_ID"))) this.div_addInfo.form.cbo_iddtId.set_index(0);
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BZPLC_GRD_ID"))) this.div_addInfo.form.cbo_bzplcGrdId.set_index(0);

        		// 20220518 박재광
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BZPLC_BGT_FW_SPR_CD"))) this.div_ctrl.form.cbo_bzplcBgtFwSprCd.set_index(0);
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BZPLC_QRT_BGT_USE_YN"))) this.div_ctrl.form.rdo_bzplcQrtBgtUseYn.set_index(-1);
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BZPLC_BGT_CLOS_DD_CD"))) this.div_ctrl.form.cbo_bzplcBgtClosDdCd.set_index(0);

        		if(this.ds_dtl.getColumn(0,"CUST_SPR_CD") == "30") { //일반고객시 제어권한 영역 비활성화 및 첨부파일이 있을경우 사업자등록증 활성화
        			this.fn_enableFormObjects(false, this.div_ctrl, null);

        			this.div_atfl.set_visible(true);
        			if(this.ds_fileList.getRowCount() > 0) {
        				this.div_atfl.form.sta_bizdocAtflId.set_visible(true);
        			}
        			else {
        				this.div_atfl.form.sta_bizdocAtflId.set_visible(false);
        			}
        			// 일반고객 사업장명 변경 버튼 추가
        			if(this.ds_buttonId.getColumn(0,"updpsnId") == this.ds_buttonId.getColumn(0,"excepId")
        			||this.ds_buttonId.getColumn(0,"updpsnId") == this.ds_buttonId.getColumn(0,"excepId1")){
        				this.div_basis.form.edt_01_00_01_01.set_width(162);
        				this.div_basis.form.edt_01_00_01_01_01.set_visible(true);
        				this.div_basis.form.edt_01_00_01_01_02.set_visible(false);
        				this.div_basis.form.edt_01_00_01_01_03.set_text("");
        				this.div_basis.form.edt_01_00_01_01.set_readonly(true);
        			}

        		}
        		else { //일반고객이 아닐시 제어권한 영역 활성화 및 사업자등록증 비활성화
        			this.fn_enableFormObjects(true, this.div_ctrl, null);

        			this.div_atfl.set_visible(false);
        			this.div_atfl.form.sta_bizdocAtflId.set_visible(false);
        		}

        		/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
        		var isConsn={
        			actYn : 'Y'==this.ds_dtl.getColumn(0, 'CONSN_CUST_YN') && '20'==this.ds_dtl.getColumn(0, 'CUST_SPR_CD'),
        			exprYn: 'Y'==this.ds_dtl.getColumn(0, 'CONSN_CUST_YN') && '20'==this.ds_dtl.getColumn(0, 'CUST_SPR_CD') && 'Y' ==this.ds_dtl.getColumn(0, 'CONSN_CUST_EXPIRED_YN'),
        		};
		
				if(this.ds_dtl.getColumn(0, 'CONSN_CUST_YN')=="N" && this.ds_dtl.getColumn(0, 'CUST_SPR_CD')=="20"){
					isConsn.actYn = 'Y';
					isConsn.exprYn = 'Y';
				}
		
        		this.div_basis.form.lbl_consnCustYn         .set_visible(isConsn.actYn );
        		this.div_basis.form.edt_consnCustYn         .set_visible(isConsn.actYn );
        		this.div_basis.form.lbl_consnCustDate       .set_visible(isConsn.actYn );
        		this.div_basis.form.edt_consnCustDate       .set_visible(isConsn.actYn );
        		this.div_basis.form.lbl_consnCustDateInfo   .set_visible(isConsn.actYn );
        		this.div_basis.form.edt_consnCustFnlChgDate .set_visible(isConsn.actYn );
        		this.div_basis.form.btn_fnshConsnCust       .set_visible(isConsn.exprYn);
        		/* /[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */

        		/* [2023-03-31] sg.park AI-018 의료기기 사업장 관리 */
        		this.ds_mediDeviSellPermitAtflsDele.clearData();
        		this.uiCtrl4MediDeviSellPermit();
        		/* /[2023-03-31] sg.park AI-018 의료기기 사업장 관리 */
        	}
        	else if(svcID == "saveDtl"){
        		this.flup_mdspAtfl_reset();  // [2023.04.04] sg.park 의료기기 판매허가 첨부파일 리셋
        		alert(this.fn_getMessage("ERRC000079"));

        		this.fn_search(); //재조회
        		this.isPrntRefresh=true;  // [2022.04.25] sg.park 저장시 부모창 새로고침용
        	}
        	else if(svcID == "commonCodeSearch"){	//공통코드 조회, 20220518 박재광
        		this.ds_comCdBgtFwSprCd.insertRow(0);
        		this.ds_comCdBgtFwSprCd.setColumn(0,"COM_CLSF_CD",this.ds_comCdBgtFwSprCd.getColumn(1,"COM_CLSF_CD"));
        		this.ds_comCdBgtFwSprCd.setColumn(0,"COM_DTL_CD","");
        		this.ds_comCdBgtFwSprCd.setColumn(0,"COM_DTL_CD_NM","선택");
        		this.ds_comCdBgtFwSprCd.setColumn(0,"SRT_SO",0);

        		this.ds_comCdBgtClosDdCd.insertRow(0);
        		this.ds_comCdBgtClosDdCd.setColumn(0,"COM_CLSF_CD",this.ds_comCdBgtFwSprCd.getColumn(1,"COM_CLSF_CD"));
        		this.ds_comCdBgtClosDdCd.setColumn(0,"COM_DTL_CD","");
        		this.ds_comCdBgtClosDdCd.setColumn(0,"COM_DTL_CD_NM","선택");
        		this.ds_comCdBgtClosDdCd.setColumn(0,"SRT_SO",0);
        	}
        	else if(svcID == "searchDupNm"){//중복 확인
        		var bzplcNm = this.ds_dupInfo.getColumn(0,"BZPLC_NM");
        		if(!this.gfn_isNull(bzplcNm)){
        			this.div_basis.form.edt_01_00_01_01_03.set_color("#ff0000");
        			this.div_basis.form.edt_01_00_01_01_03.set_text("X");
        		}
        		if(this.gfn_isNull(bzplcNm)){
        			this.div_basis.form.edt_01_00_01_01_03.set_color("#0000ff");
        			this.div_basis.form.edt_01_00_01_01_03.set_text("O");

        		}
        	}
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	this.fn_commonCodeSearch();	//공통코드 조회, 박재광 20220518
        	this.fn_searchCode(); //콤보코드 조회
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.cbo_bzplcGrdId_onitemchanged = function(obj,e)
        {
        	this.ds_dtl.setColumn(0,"APLY_DCRT",this.ds_grdList.lookup("ID",e.postvalue,"RT"));
        };

        this.btn_save_onclick_prev = function(obj,e)
        {
        	if(this.div_basis.form.edt_01_00_01_01_02.visible==true && this.div_basis.form.edt_01_00_01_01_03.getDisplayText()!="O"){
        		alert(this.fn_getMessage("ERRC000280"));
        		return;
        	}
        	if(!confirm(this.fn_getMessage("ERRC000080"))) return;

        	if(this.div_basis.form.edt_01_00_01_01_02.visible==true && this.div_basis.form.edt_01_00_01_01_03.getDisplayText()=="O"){
        		this.ds_dtl.setColumn(0,"DUP_INFO_YN","Y");
        	}

        	this.fn_save();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	//if(!confirm(this.fn_getMessage("ERRC000087"))) return;

        	this.close(JSON.stringify({ refresh: this.isPrntRefresh }));  // [2022.04.25] sg.park 저장시 부모창 새로고침용
        };

        this.sta_bizdocAtflId_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRC000106",this.ds_fileList.getColumn(0, "ATFL_NM")))) {
        		this.FileDownTransfer.clearPostDataList();
        		this.FileDownTransfer.set_downloadfilename(this.ds_fileList.getColumn(0, "ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_fileList.getColumn(0, "DOC_REG_ID"));	//문서번호
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_fileList.getColumn(0, "DOC_REG_SEQ"));	//문서 순번
        		this.FileDownTransfer.download('/co/file-download.do');
        	}
        };

        this.work04_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        //일반고객 변경버튼 클릭시
        this.div_basis_edt_01_00_01_01_01_onclick = function(obj,e)
        {
        	this.div_basis.form.edt_01_00_01_01_01.set_visible(false);
        	this.div_basis.form.edt_01_00_01_01_02.set_visible(true);
        	this.div_basis.form.edt_01_00_01_01.set_readonly(false);
        	this.div_basis.form.edt_01_00_01_01.set_value("");
        };

        //일반고객 중복확인 버튼 클릭시
        this.div_basis_edt_01_00_01_01_02_onclick = function(obj,e)
        {

        	if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BZPLC_NM")) || nexacro.trim(this.ds_dtl.getColumn(0,"BZPLC_NM")).length==0) {
        		//"사업자명이 빈값일 경우" 메세지 추가 후 아래 메세지코드 수정
        		alert(this.fn_getMessage("ERRC000279"));
        		return;
        	}

        	// 중복확인 서비스 호출
        	this.div_basis.form.edt_01_00_01_01.set_value(nexacro.trim(this.ds_dtl.getColumn(0,"BZPLC_NM")));
        	this.fn_searchDupNm();

        };

        //사업자명 수정시 중복확인 결과 reset
        this.div_basis_edt_01_00_01_01_canchange = function(obj,e)
        {
        	this.div_basis.form.edt_01_00_01_01_03.set_text("");
        };

        // 의료기기 판매허가 첨부파일 클릭
        this.grid_mediDeviSellPermitAtfls_oncellclick = function(obj,e)
        {
        	var evtColID = this.getBindColumnIDByIndex(obj, e.cell), evtRidx = e.row;
        	var ds = obj.getBindDataset();
        	trace('[evtColID:'+ evtColID +']');

        	if ("SELL_PERMIT_ATTC_FILENM" == evtColID) {

        // 		this.fn_fileDownload({ // R&D용 버젼 - opentext 첨부파일이면 작동이 이상함.
        // 			DOC_REG_ID : ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILEID'     ),
        // 			DOC_REG_SEQ: ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILESEQ'    ),
        // 			PATH       : ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILEPATH'   ) || ds.getColumn(evtRidx, 'ATFL_STOR_PATH'),
        // 			ORI_ATFL_NM: ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILE_ORI_NM') || ds.getColumn(evtRidx, 'ORI_ATFL_NM'   ),
        // 			ATFL_NM    : ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILENM'     ) || ds.getColumn(evtRidx, 'ATFL_NM'       ),
        // 		});
        		var atfl={
        			nm : ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILENM' ) || ds.getColumn(evtRidx, 'ATFL_NM'    ),
        			id : ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILEID' ) || ds.getColumn(evtRidx, 'DOC_REG_ID' ),
        			seq: ds.getColumn(evtRidx, 'SELL_PERMIT_ATTC_FILESEQ') || ds.getColumn(evtRidx, 'DOC_REG_SEQ'),
        		};
        		if ( this.gfn_isNull( atfl.seq ) ) { return; }
        		if (!this.confirm( this.fn_getMessage("ERRC000106", atfl.nm) )) { return; }
        		with (this.FileDownTransfer) {
        			clearPostDataList();
        			setPostData('docRegId' , atfl.id );  // 문서번호
        			setPostData('docRegSeq', atfl.seq);  // 문서순번
        			set_downloadfilename   ( atfl.nm );  // runtime 전용 프로퍼티
        			download   ('/co/file-download.do');
        		}
        	}
        };

        this.btn_fnshConsnCust_onclick = function(obj,e) {
        	if (!confirm('일반고객 전환요청을 하시겠습니까?')) { return; }
        	this.ds_dtl.setColumn(0, 'FNSH_CONSN_CUST_YN', 'Y');

        	var sSvcId = 'fnshConsnCust';
        	var sUrl   = '/bo/cust/bgt/ssp_bo_ma_02/fnshConsnCust.do';
        	var inDs   = 'ds_dtl=ds_dtl';
        	var outDs  = '';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fn_fnshConsnCust_callBack');
        };
        this.fn_fnshConsnCust_callBack = function(svcID, errorCode, errorMsg)	{
        	if ('fnshConsnCust'==svcID) {  // 특약고객 일반고객으로 전환
        		if (0==errorCode) {
        			alert('일반고객 전환요청을 하였습니다.');
        			this.fn_search();
        		}
        	}
        };

        /* [2023-03-31] sg.park AI-018 의료기기 사업장 관리 */
        this.uiCtrl4MediDeviSellPermit=function() {
        	var actvMdspYn=false, actvMdspAtfl=false;
        	actvMdspYn  ='30'==this.ds_dtl.getColumn(0, 'CUST_SPR_CD'             );
        	actvMdspAtfl='Y' ==this.ds_dtl.getColumn(0, 'MEDI_DEVI_SELL_PERMIT_YN') && actvMdspYn;

        	this.cbo_mediDeviSellPermitYn       .set_readonly(!actvMdspYn);
        	this.btn_apnd4MediDeviSellPermitAtfl.set_visible(actvMdspAtfl);
        	this.btn_dele4MediDeviSellPermitAtfl.set_visible(actvMdspAtfl);

        	if ( this.ds_mediDeviSellPermitAtfls.rowcount == 0 ) {
        		this.ds_mediDeviSellPermitAtfls.copyData(this.ds_mediDeviSellPermitAtfls_copy);
        	}
        }
        this.cbo_mediDeviSellPermitYn_onitemchanged = function(obj,e)
        {
        	this.uiCtrl4MediDeviSellPermit();
        };

        // 의료기기 판매허가 첨부파일 삭제 클릭
        this.btn_dele4MediDeviSellPermitAtfl_onclick = function(obj,e) {
        	var aGrid=this.grid_mediDeviSellPermitAtfls, aDs=aGrid.getBindDataset(), dDs=this.ds_mediDeviSellPermitAtflsDele;

        	// 멀티삭제용도
            if (aDs.rowcount < 1 || aDs.findRow('CHK', 1) < 0) {
                this.fn_alert('ERRR000188', '삭제정보', '', 'warning');  // 삭제할 데이타가 없습니다.
                return false;
            }
            var result = this.fn_confirm('ERRR000179', '삭제정보', '', 'question');  // 현재선택행을 삭제하시겠습니까?
            if (result == 0) { return false; }

        	aGrid.set_enableevent(false);

            // 멀티 삭제 처리
            for (var i = aDs.rowcount-1; 0 <= i; i--) {
                if ( aDs.getColumn(i, 'CHK') == 1) {
        			var fl={
        				seq: aDs.getColumn(i, 'SELL_PERMIT_ATTC_FILESEQ'),
        				nm : aDs.getColumn(i, 'SELL_PERMIT_ATTC_FILENM' ),
        			};
        			this.flup_mdspAtfl.filelist.pop( this.flup_mdspAtfl.filelist.filter(fitm => fl.nm==fitm.filename) );

        			if (!this.gfn_isNull(fl.seq)) { this.copyDsRow(aDs, i, dDs); }
        			aDs.deleteRow(i);
                }
            }

        	aGrid.set_enableevent(true);
        	return true;
        };
        this.copyDsRow = function(sd, si, td) {
        	if (sd == undefined || si > sd.getRowCount()) { return; }

        	var ti = td.addRow(), dsCols = ['CHK', 'CO_CD', 'BZPLC_ID', 'SELL_PERMIT_SEQ', 'SELL_PERMIT_ATTC_FILEID', 'SELL_PERMIT_ATTC_FILESEQ', 'SELL_PERMIT_ATTC_FILENM', 'SELL_PERMIT_ATTC_FILEPATH', 'SELL_PERMIT_ATTC_FILE_ORI_NM'];
        	for (var i in dsCols) {
        		var tCol=dsCols[i];
        		td.setColumn(ti, tCol, sd.getColumn(si, tCol));
        	}

        	return td;
        };

        // 의료기기 판매허가 첨부파일 추가 클릭
        this.btn_apnd4MediDeviSellPermitAtfl_onclick = function(obj,e) {
        	var aGrid=this.grid_mediDeviSellPermitAtfls, aDs=aGrid.getBindDataset(), dDs=this.ds_mediDeviSellPermitAtflsDele;
        	aGrid.set_enableevent(false);

        	// this.flup_mdspAtfl.deleteItem(0);
        	var fll=this.flup_mdspAtfl.filelist.length, fbl=this.flup_mdspAtfl.filefindbuttons.length;
        	if (fll==fbl) {
        		this.flup_mdspAtfl.appendItem();
        	}

        	var flUpIdx=this.flup_mdspAtfl.filefindbuttons.length-1;
        	this.flup_mdspAtfl.filefindbuttons[flUpIdx].click();

        	aGrid.set_enableevent(true);
        };

        this.upldAuthExts = [
        	  'PPTX', 'PPT', 'DOCX', 'DOC', 'XLSX', 'XLS', 'PDF', 'HWP'  // Office
        	, 'GIF', 'PNG' , 'JPG', 'JPEG'                               // Image
        	, 'TEXT', 'TXT', 'ZIP'                                       // Normal
        ];
        this.flup_mdspAtfl_onitemchanged = function(obj,e) {
        	var aGrid=this.grid_mediDeviSellPermitAtfls, aDs=aGrid.getBindDataset(), dDs=this.ds_mediDeviSellPermitAtflsDele;

        	var sAtflExt=null, sAtflPath=this.flup_mdspAtfl.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sAtflPath.lastIndexOf(".");

        	if (start > -1) { sAtflExt = sAtflPath.substr(start + 1, sAtflPath.length); }  // 확장자명
        	if (this.upldAuthExts.indexOf( sAtflExt.toUpperCase() ) < 0) {
        		this.fn_alert('ERRR000173', '파일 정보', '파일', 'information');  // &1 형식이 아닙니다.
        		return false;
        	}

        	var dirExpt   = nexacro.toNumber(sAtflPath.lastIndexOf('\\'))+1;    // 파일이름 시작위치
        	var sFileName = sAtflPath.substr(dirExpt);                          // 파일명

        	var rMdspRow  = aDs.rowcount > 0 ? aDs.findRowExpr('SELL_PERMIT_ATTC_FILEID!=null && SELL_PERMIT_ATTC_FILEID!=undefined && SELL_PERMIT_ATTC_FILEID!=""') : -1;
        	var sDocRegId = rMdspRow     >-1 ? aDs.getColumn(rMdspRow, 'SELL_PERMIT_ATTC_FILEID') : null;

        	//
        	var rIdx=aDs.addRow();
        	aDs.setColumn(rIdx, 'SELL_PERMIT_ATTC_FILEID', sDocRegId);
        	aDs.setColumn(rIdx, 'SELL_PERMIT_ATTC_FILENM', sFileName);

        	// var sFlupUrl  = '/co/file-upload.do?'+ (this.gfn_isNull(sDocRegId) ? '' : 'docRegId='+ sDocRegId) + '&pgmId=SSP_PW_MP_03_MDSP&mnuSeq=1';
        	// '/co/file-upload.do'
        	// var bSucc = this.FileUploadSingle.upload(sFlupUrl);     // 파일 업로드
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.div_basis.form.edt_01_00_01_01_02.visible==true && this.div_basis.form.edt_01_00_01_01_03.getDisplayText()!="O"){
        		alert(this.fn_getMessage("ERRC000280"));
        		return;
        	}

        	// Validation MSDS
        	var sMdspYn=this.ds_dtl.getColumn(0, 'MEDI_DEVI_SELL_PERMIT_YN'), iMdspAtfl=this.flup_mdspAtfl.filelist;
        	var mediDeviSellPermitAtflsCnt = this.ds_mediDeviSellPermitAtfls.getRowCount();
        	if ('Y'==sMdspYn && mediDeviSellPermitAtflsCnt < 1) {
        		alert('의료기기 판매허가 첨부파일이 존재하지 않습니다.');
        		return;
        	}

        	if(!confirm(this.fn_getMessage("ERRC000080"))) return;

        	if(this.div_basis.form.edt_01_00_01_01_02.visible==true && this.div_basis.form.edt_01_00_01_01_03.getDisplayText()=="O"){
        		this.ds_dtl.setColumn(0,"DUP_INFO_YN","Y");
        	}

        	if (this.flup_mdspAtfl.filelist.length<1) {
        		this.fn_save();
        		return;
        	}

        	var aGrid=this.grid_mediDeviSellPermitAtfls, aDs=aGrid.getBindDataset(), dDs=this.ds_mediDeviSellPermitAtflsDele;

        	var rMdspRow  = aDs.rowcount > 0 ? aDs.findRowExpr('SELL_PERMIT_ATTC_FILEID!=null && SELL_PERMIT_ATTC_FILEID!=undefined && SELL_PERMIT_ATTC_FILEID!=""') : -1;
        	var sDocRegId = rMdspRow     >-1 ? aDs.getColumn(rMdspRow, 'SELL_PERMIT_ATTC_FILEID') : null;

        	// /bo/cust/bgt/ssp_bo_ma_02/file-upload.do? vs '/co/file-upload.do?'
        	var objEnv  = nexacro.getEnvironment();
        	var sFuUrl=objEnv.services["svcUrl"].url+'/bo/cust/bgt/ssp_bo_ma_02/file-upload.do?', sCoCd=this.ds_dtl.getColumn(0, 'CO_CD'), sBzplcId=this.ds_dtl.getColumn(0, 'BZPLC_ID');
        	var sFlupUrl  = sFuUrl+ (this.gfn_isNull(sDocRegId) ? '' : 'docRegId='+ sDocRegId) + '&pgmId=SSP_PW_MP_03_MDSP&mnuSeq=1&coCd='+ sCoCd +'&bzplcId='+ sBzplcId;
        	// this.flup_mdspAtfl._hidden_frame_handle._callbackList.push({ callback: function (node, data, url, errcode, httpcode, errmsg) { } });
        	var  flRslt=this.flup_mdspAtfl.upload(sFlupUrl);
        // 	if (!flRslt) {
        // 		alert('파일업로드 중 오류가 발생했습니다.');
        // 		return;
        // 	}
        // 	var ts=this;
        // 	setTimeout(function() { ts.fn_save(); }, 5 * 1000);
        };

        this.flup_mdspAtfl_onsuccess = function(obj,e) {
        	var aGrid=this.grid_mediDeviSellPermitAtfls, aDs=aGrid.getBindDataset(), dDs=this.ds_mediDeviSellPermitAtflsDele;

        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var bzInf = {
        		coCd    : this.ds_dtl         .getColumn(0, 'CO_CD'     ),
        		bzplcId : this.ds_dtl         .getColumn(0, 'BZPLC_ID'  ),
        		docRegId: this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'),
        	};
        	for (var i=0; i<aDs.rowcount; i++) {
        		aDs.setColumn(i, 'CO_CD'                  , bzInf.coCd    );
        		aDs.setColumn(i, 'BZPLC_ID'               , bzInf.bzplcId );
        		aDs.setColumn(i, 'SELL_PERMIT_ATTC_FILEID', bzInf.docRegId);
        	}

        	this.fn_save();
        };
        // this.flup_mdspAtfl_onerror = function(obj:nexacro.FileUpload,e:nexacro.FileUploadErrorEventInfo) {
        //
        // };

        this.flup_mdspAtfl_reset = function() {

        // 	this.flup_mdspAtfl.filelist = [];
        // 	this.flup_mdspAtfl.filepathedits = new nexacro.Collection();
        // 	this.flup_mdspAtfl.filefindbuttons = new nexacro.Collection();
        // 	this.flup_mdspAtfl._items = [];

        	var l=this.flup_mdspAtfl.filelist.length-1;
        	for (var i=l; i>=0; i--) {
        		this.flup_mdspAtfl.deleteItem(i);
        	}
        };




        this.fluptrnr_mdspAtfl_onprogress = function(obj,e)
        {

        };
        this.fluptrnr_mdspAtfl_onsuccess = function(obj,e)
        {

        };
        this.fluptrnr_mdspAtfl_onerror = function(obj,e)
        {

        };
        /* /[2023-03-31] sg.park AI-018 의료기기 사업장 관리 */




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.work04_onkeyup,this);
            this.div_basis.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.edt_01_00_01_01.addEventHandler("canchange",this.div_basis_edt_01_00_01_01_canchange,this);
            this.div_basis.form.edt_01_00_01_01_01.addEventHandler("onclick",this.div_basis_edt_01_00_01_01_01_onclick,this);
            this.div_basis.form.edt_01_00_01_01_02.addEventHandler("onclick",this.div_basis_edt_01_00_01_01_02_onclick,this);
            this.div_basis.form.btn_fnshConsnCust.addEventHandler("onclick",this.btn_fnshConsnCust_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_00.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_addInfo.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_addInfo.form.cbo_iddtId.addEventHandler("onitemchanged",this.cmb_thmeDownCd_onitemchanged,this);
            this.div_addInfo.form.cbo_bzplcGrdId.addEventHandler("onitemchanged",this.cbo_bzplcGrdId_onitemchanged,this);
            this.div_atfl.form.sta_custciAtflId.addEventHandler("onclick",this.sta_custciAtflId_onclick,this);
            this.div_atfl.form.sta_bizdocAtflId.addEventHandler("onclick",this.sta_bizdocAtflId_onclick,this);
            this.grid_mediDeviSellPermitAtfls.addEventHandler("oncellclick",this.grid_mediDeviSellPermitAtfls_oncellclick,this);
            this.cbo_mediDeviSellPermitYn.addEventHandler("onitemchanged",this.cbo_mediDeviSellPermitYn_onitemchanged,this);
            this.btn_apnd4MediDeviSellPermitAtfl.addEventHandler("onclick",this.btn_apnd4MediDeviSellPermitAtfl_onclick,this);
            this.btn_dele4MediDeviSellPermitAtfl.addEventHandler("onclick",this.btn_dele4MediDeviSellPermitAtfl_onclick,this);
            this.flup_mdspAtfl.addEventHandler("onitemchanged",this.flup_mdspAtfl_onitemchanged,this);
            this.flup_mdspAtfl.addEventHandler("onsuccess",this.flup_mdspAtfl_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.fluptrnr_mdspAtfl.addEventHandler("onprogress",this.fluptrnr_mdspAtfl_onprogress,this);
            this.fluptrnr_mdspAtfl.addEventHandler("onsuccess",this.fluptrnr_mdspAtfl_onsuccess,this);
            this.fluptrnr_mdspAtfl.addEventHandler("onerror",this.fluptrnr_mdspAtfl_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_MA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
