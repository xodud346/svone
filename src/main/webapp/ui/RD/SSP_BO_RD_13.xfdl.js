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
            this.set_titletext("R&D 구매정보 관리 등록");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PC_PRD_PRC_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VAL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_ID\"/><Col id=\"CPRTCP_ID\"/><Col id=\"PRD_NM\"/><Col id=\"CPRTCP_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgInfo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_PRC_COND_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_GB_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_DIS_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_REQ_SPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qtyDcList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_COND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_kcCertInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","145",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","114",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","83",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","52",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02","555","52","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_valList","159","119","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_valList","20","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dstrbStdPrc","20","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_basisUnitCd","599","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnNm","599","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","599","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","599","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","739","56","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","837","56","289","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","1130","56","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","191","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","615","805","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("합의요청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","543","805","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","159","56","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","257","56","289","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","551","56","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","159","86","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","739","87","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","739","118","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","739","149","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dstrbStdPrc","159","149","415","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","313",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","20","282",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","20","251",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","220",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02_00","555","220","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_splPsbYn","20","220","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("공급가능상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_minOdrQty","20","251","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("최소발주수량");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdPrc","20","282","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("매입가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvAmt","20","313","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("배송비");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","20","343",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","20","373",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","20","403",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvLt","20","343","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("평균배송일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00","20","373","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("가격유효기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_kcCertYn","20","403","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("KC인증대상여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00","20","433",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00","20","463",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00","20","523",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00","20","553",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00_00","20","583",null,"207","20",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fileName","135","433","115","32",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_rndMsdsUrl","135","463","115","32",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_01","20","523","116","62",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("기간할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_01","135","523","115","32",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_00_00","135","553","115","32",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("할인금액");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_01","20","583","230","207",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("물량할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_splPsbYn","265","225","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_splPsbYn_innerdataset = new nexacro.NormalDataset("rdo_splPsbYn_innerdataset", obj);
            rdo_splPsbYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_splPsbYn_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_minOdrQty","263","255","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_prdPrc","263","286","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_dlvAmt","263","317","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvLt","263","347","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qtyDcList","266","635","444","144",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_qtyDcList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("물량할인이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" cssclass=\"grd_WF_bg_image\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" editinputtype=\"number\" editmaxlength=\"15\" maskeditlimitbymask=\"both\" maskeditformat=\"+###,###,###,##0\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" text=\"bind:QTY_DC_AMT\" edittype=\"mask\" editinputtype=\"number\" textAlign=\"right\" editmaxlength=\"15\" maskeditautoselect=\"true\" maskeditformat=\"+###,###,###,###,###,##0\" maskeditlimitbymask=\"both\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","635","600","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","563","600",null,"24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("+ 추가");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldStrDt","263","378","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","397","378","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldEndDt","413","378","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYn","265","406","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_kcCertYn_innerdataset = new nexacro.NormalDataset("rdo_kcCertYn_innerdataset", obj);
            rdo_kcCertYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kcCertYn_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","605","285","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","605","315","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","605","345","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","607","437","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("파일 등록");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","263","437","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl","263","467","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldStrDtm","263","528","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","397","528","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldEndDtm","413","528","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rndDcQty","263","557","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","605","555","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_01","20","493",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFnlChgDtm","135","493","115","32",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm","263","497","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00","20","433","116","92",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("MSDS");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","160","16",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("R&D 구매정보 생성");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","580","149","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","700","440","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","994","440","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYnTemp","265","406","62","25",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var rdo_kcCertYnTemp_innerdataset = new nexacro.NormalDataset("rdo_kcCertYnTemp_innerdataset", obj);
            rdo_kcCertYnTemp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kcCertYnTemp_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,846,this,function(p){});
            obj.set_description("R&D 구매정보 관리 등록");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_purgChrpsnNm","value","ds_master","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdClcd","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_valList","value","ds_master","VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","msk_dstrbStdPrc","value","ds_master","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_basisUnitCd","value","ds_master","BASIS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_cprtcpCd","value","ds_search","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_cprtcpNm","value","ds_search","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","rdo_splPsbYn","value","ds_purgInfo","SPL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","msk_minOdrQty","value","ds_purgInfo","MIN_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","msk_prdPrc","value","ds_purgInfo","PRD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","msk_dlvLt","value","ds_purgInfo","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_vldStrDt","value","ds_purgInfo","VLD_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cal_vldEndDt","value","ds_purgInfo","VLD_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_kcCertYn","value","ds_purgInfo","KC_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_rndMsdsUrl","value","ds_purgInfo","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cal_msdsFnlChgDtm","value","ds_purgInfo","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cal_rndDcVldStrDtm","value","ds_purgInfo","RND_DC_VLD_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_rndDcVldEndDtm","value","ds_purgInfo","RND_DC_VLD_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","msk_rndDcQty","value","ds_purgInfo","RND_DC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_13.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_13.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_13.xfdl(R&D 구매정보 관리 등록)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/24
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
        this.fv_oApp         = nexacro.getApplication();	//application object
        this.lv_coCd         = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvchkColidDs1   = "PRD_ID$CPRTCP_ID";                       					  // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs1 = "상품ID$협력사";
        this.lvchkColidDs2   = "PRD_PRC$DLV_LT$VLD_STR_DT$VLD_END_DT$KC_CERT_YN";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs2 = "매입가$평균배송일$가격유효시작일$가격유효종료일$KC인증대상여부";
        this.strServerMsg    = "";
        this.lvGetDate       = "";
        this.lvSaveMode      = "";
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
            //사용자 화면  초기화 함수
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
            var strDs    = "dsUserYn|dsGUserYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "000002|000002";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
            this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.
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
            }
        	else
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 상품ID 조회팝업 후처리
        		case "btn_prdIdPopup" :
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 var jsonData = JSON.parse(strVal);
        				 this.edt_prdId.set_value(jsonData.PRD_ID_VIEW);
        				 this.edt_prdNm.set_value(jsonData.PRD_NM);
        				 this.fn_Ret();
        			 }
        			 break;
        		// 협력사 조회팝업 후처리
        		case "btn_cprtcpPopup":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 var jsonData = JSON.parse(strVal);
        				 this.edt_cprtcpCd.set_value(jsonData.CPRTCP_ID);
        				 this.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM);
        				 this.fn_Ret();
        			 }
        		     break;
        		case "SSP_BO_RD_55":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 // 일반
        				 var sRtn = strVal.split(",");

        				 if(sRtn[0] == "CLOSE" || sRtn[0] == "EXIT")
        				 {
        					// KC인증대상 리스트 미존재시 'N' Set
        					if(this.ds_kcCertInfoList.getRowCount() == 0)
        					{
        						this.rdo_kcCertYn.set_value("N");
        						this.rdo_kcCertYnTemp.set_value(false);
        					}
        				 }
        			 }
        			 break;
                default:
                    break;
            }
        };

        /**
         * KC인증정보 등록/변경 팝업에선 저장후 넘어온 데이터셋
         */
        this.fn_dsChildCopydsDummy = function(dsKcCertInfoList,dsUploadResult)
        {
        	// KC인증대상 리스트 Copy
        	this.ds_kcCertInfoList.clearData();
        	this.ds_kcCertInfoList.copyData(dsKcCertInfoList);

        	// KC인증대상 리스트 미존재시 'N' Set
        	if(this.ds_kcCertInfoList.getRowCount() == 0)
        	{
        		this.rdo_kcCertYn.set_value("N");
        		this.rdo_kcCertYnTemp.set_value(false);
        	}

        	// 첨부파일 리스트 Copy
        	this.ds_saveFileList.clearData();
        	this.ds_saveFileList.copyData(dsUploadResult);
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	this.fn_saveMultiFileDelUpdate();
        	this.ds_kcCertInfoList.clearData();

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
            var strUrl      = "/rd/purg-info-mng/select-purg-prd-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_purgInfo=ds_purgInfo"
        					+ " ds_qtyDcList=ds_qtyDcList"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList"
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
        	this.ds_search.setColumn(0,"PRD_NM",this.ds_master.getColumn(0,"PRD_NM"));
        	this.edt_fileName.set_value("");
        	this.edt_fileName_onchanged(this.edt_fileName,nexacro.ChangeEventInfo());

        	if(!this.gfn_isNull(this.edt_prdId.value) && !this.gfn_isNull(this.edt_cprtcpCd.value))
        	{
        		if(this.ds_purgInfo.getRowCount() == 0)
        		{
        			this.lvSaveMode = "I";
        			this.fn_setResetBtnCall();
        		}
        		else
        		{
        			this.lvSaveMode = "R";
        			this.fn_compontAllControl();

        			// MSDS첨부파일 존재시
        			var findRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
        			this.edt_fileName.set_value(this.ds_saveFileList.getColumn(findRow,"ATFL_NM"));
        			this.edt_fileName_onchanged(this.edt_fileName,nexacro.ChangeEventInfo());

        			if(this.gfn_nvl(this.strServerMsg,"") != "")
        			{
        				var msg = "ERRR000186"; // 구매정보가 존재 합니다.

        				if(this.strServerMsg == "TMP")
        				{
        					msg = "ERRR000187"; // 생성 진행 중인 건이 있습니다.
        				}
        				this.fn_alert(msg,"조회정보","","question"); // 변경된 이력이 없습니다.!
        			}
        		}
        	}
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
            if(!this.gfn_dsIsUpdated(this.ds_purgInfo) && !this.gfn_dsIsUpdated(this.ds_qtyDcList))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.!
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_search, this.lvchkColidDs1, this.lvchkColNameDs1, "", chkFocusFlg, this, true);

            if (result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_purgInfo, this.lvchkColidDs2, this.lvchkColNameDs2, "", chkFocusFlg, this, true);

            if(result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                return false;
            }

        	// 평균배송일 0일 불가능
        	if(nexacro.toNumber(this.ds_purgInfo.getColumn(0,"DLV_LT")) == 0)
        	{
                this.fn_alert("ERRR000230","저장정보","","question"); // 평균배송일은 최소 1일 이상 입력 하셔야 합니다.
        		this.msk_dlvLt.setFocus();
                return false;
        	}

        	// 기간할인 금액 존재시 매입가보다 크면 안됨
        	if(!this.gfn_isNull(this.msk_rndDcQty.value))
        	{
        		if(nexacro.toNumber(this.msk_rndDcQty.value) > nexacro.toNumber(this.msk_prdPrc.value))
        		{
        			this.fn_alert("ERRR000223","저장정보","","question"); // 기간할인 금액은 매입가 금액을 넘을수 없습니다.
        			this.msk_rndDcQty.setFocus();
        			return false;
        		}
        	}

        	// 가격유효기간 일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_vldStrDt
        	                             ,this.cal_vldEndDt
        								 ,"가격유효기간"))
        	{
        		return false;
        	}

        	// 최종개정일 일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_msdsFnlChgDtm
        	                             ,this.cal_msdsFnlChgDtm
        								 ,"최종개정일"
        								 ,true))
        	{
        		return false;
        	}

        	// 할인금액 존재시 기간할인 필수 체크
        	if(!this.gfn_isNull(this.msk_rndDcQty.value) || nexacro.toNumber(this.msk_rndDcQty.value) > 0)
        	{
        		// 기간할인 일자 체크
        		if(!this.fn_getDefaultDateChk(this.cal_rndDcVldStrDtm
        									 ,this.cal_rndDcVldEndDtm
        									 ,"기간할인"))
        		{
        			return false;
        		}
        	}

        	// 가격유효기간내에 기간할인 범위가 넘어 갔을 경우엔 체크
        	if(!this.gfn_isNull(this.cal_rndDcVldStrDtm.value) && !this.gfn_isNull(this.cal_rndDcVldEndDtm.value))
        	{
        		if(nexacro.toNumber(this.cal_rndDcVldStrDtm.value) < nexacro.toNumber(this.cal_vldStrDt.value))
        		{
        			this.fn_alert("ERRR000175","날짜체크","기간할인 시작날짜,가격유효 기간","information"); //	&1는(은) &2보다 작거나 같아야 합니다.
        			this.cal_rndDcVldStrDtm.setFocus();
        			return false;
        		}
        		if(nexacro.toNumber(this.cal_rndDcVldEndDtm.value) > nexacro.toNumber(this.cal_vldEndDt.value))
        		{
        			this.fn_alert("ERRR000175","날짜체크","기간할인 종료날짜,가격유효 기간","information"); //	&1는(은) &2보다 작거나 같아야 합니다.
        			this.cal_rndDcVldEndDtm.setFocus();
        			return false;
        		}
        	}

        	// 물량할인 수량 2이상이여야 함.
        	if(this.ds_qtyDcList.getRowCount() > 0)
        	{
        		var strRandDcQty = this.msk_rndDcQty.value;

        		if(this.gfn_isNull(strRandDcQty))
        		{
        			this.fn_alert("ERRS000144","저장정보","물량할인 존재시 기간할인 금액","question"); //&1은(는) 필수입력사항입니다.
        			this.msk_rndDcQty.setFocus();
        			return false;
        		}

        		for(var idx=0; idx<this.ds_qtyDcList.getRowCount(); idx++)
        		{
        			var strQtyCnt   = this.ds_qtyDcList.getColumn(idx,"STR_QTY_CNT");
        			var strQtyDcAmt = this.ds_qtyDcList.getColumn(idx,"QTY_DC_AMT");

        			if(!this.gfn_isNull(strQtyCnt) && strQtyCnt < 2)
        			{
        				this.fn_alert("ERRR000222","저장정보","","question"); // 물량할인 수량은 2이상이여야 합니다.
        				this.ds_qtyDcList.set_rowposition(idx);
        				this.grd_qtyDcList.setCellPos(this.grd_qtyDcList.getBindCellIndex("body","STR_QTY_CNT"));
        				this.grd_qtyDcList.showEditor();
        				return false;
        			}
        			// 기간할인금액보다 할인금액이 클 경우
        			if(nexacro.toNumber(strQtyDcAmt) > nexacro.toNumber(strRandDcQty))
        			{
        				this.fn_alert("ERRR000224","저장정보","","question"); // 물량할인 할인금액이 입력된 기간할인 할인금액을 초과 하실수 없습니다.
        				this.ds_qtyDcList.set_rowposition(idx);
        				this.grd_qtyDcList.setCellPos(this.grd_qtyDcList.getBindCellIndex("body","QTY_DC_AMT"));
        				this.grd_qtyDcList.showEditor();
        				return false;
        			}
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

        	this.ds_purgInfo.setColumn(0,"MNFR_NO",      this.ds_master.getColumn(0,"MNFR_NO"));
         	this.ds_purgInfo.setColumn(0,"PRD_CLCD",     this.ds_master.getColumn(0,"PRD_CLCD"));
        	this.ds_purgInfo.setColumn(0,"CONSN_REQ_SPR","I");

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
            var strUrl      = "/rd/purg-info-mng/save-purg-info-mng.do";
            var strInDs     = "ds_purgInfo=ds_purgInfo:u"
        					+ " ds_qtyDcList=ds_qtyDcList:u"
        					+ " ds_saveFileList=ds_saveFileList:a"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList:a";
            var strOutDs    = "ds_master=ds_master";
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

        	var resString = "";
        	var resData = {};
        	resData.PRD_ID = this.edt_prdId.value;
        	resData.PRD_ID_CNT = 1;
        	resString = JSON.stringify(resData);

        	this.close(resString);
        };
        /**********************************************************************
                 09. 초기화
        ***********************************************************************/
        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit        : this.btn_exit
        						  , btn_close       : this.btn_close
        						  , btn_prdIdPopup  : this.btn_prdIdPopup
        						  , btn_cprtcpPopup : this.btn_cprtcpPopup
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);

        	// 예외 처리
        	this.edt_prdId.set_readonly(false);
        	this.edt_cprtcpCd.set_readonly(false);

        	// KC인증대상여부가 Y인 경우에만 팝업창 호출을 위해 임시 라디오 활성화
        	if(this.rdo_kcCertYn.value == "Y")
        	{
        		this.rdo_kcCertYnTemp.set_visible(true);
        		this.rdo_kcCertYnTemp.set_readonly(false);
        	}
        };

        /**
         * 화면 최초 초기화 작업 함수
         */
        this.fn_setResetBtnCall = function()
        {
        	this.ds_purgInfo.clearData();
        	this.ds_purgInfo.set_updatecontrol(false);
        	var nRow = this.ds_purgInfo.addRow();
        	this.ds_purgInfo.setColumn(nRow,"CO_CD",     this.lv_coCd);
        	this.ds_purgInfo.setColumn(nRow,"PRD_ID",    this.ds_search.getColumn(0,"PRD_ID"));
        	this.ds_purgInfo.setColumn(nRow,"CPRTCP_ID", this.ds_search.getColumn(0,"CPRTCP_ID"));
        	this.ds_purgInfo.setColumn(nRow,"SPL_PSB_YN","Y");
        	this.ds_purgInfo.setColumn(nRow,"MIN_ODR_QTY","1");
        	this.ds_purgInfo.setColumn(nRow,"VLD_STR_DT",this.lvGetDate);
        	this.ds_purgInfo.setColumn(nRow,"VLD_END_DT",this.gfn_addDate(this.gfn_addMonth(this.lvGetDate,12), -1));
        	this.ds_purgInfo.set_updatecontrol(true);
        	this.btn_exit.set_left("543");
        	this.btn_save.set_visible(true);

        	var btnList = ["btn_file","btn_add","btn_del","btn_save"];

        	for(var idx=0; idx<btnList.length; idx++)
        	{
        		this[btnList[idx]].set_enable(true);
        	}

        	var arryList = ["rdo_splPsbYn","msk_minOdrQty","msk_prdPrc","msk_dlvLt","cal_vldStrDt","cal_vldEndDt","rdo_kcCertYn","edt_rndMsdsUrl"
        	               ,"cal_msdsFnlChgDtm","cal_rndDcVldStrDtm","cal_rndDcVldEndDtm","msk_rndDcQty","grd_qtyDcList"];

        	for(var idx=0; idx<arryList.length; idx++)
        	{
        		this[arryList[idx]].set_readonly(false);
        	}
        }
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
        	if(this.ds_master.getRowCount() == 0)
        	{
        		this.fn_alert("ERRR000185","추가정보","","warning"); // 상품ID 먼저 등록하셔야 합니다.
        		this.edt_prdId.setFocus();
        		return false;
        	}

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

            var nRow = this.ds_qtyDcList.addRow();
            this.ds_qtyDcList.setColumn(nRow,"CHK",   "0");           							// CHK
        	this.ds_qtyDcList.setColumn(nRow,"CO_CD", this.lv_coCd);           					// 업체코드
        	this.ds_qtyDcList.setColumn(nRow,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));	// 상품ID
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
            if(this.ds_qtyDcList.rowcount < 1 || this.ds_qtyDcList.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 삭제할 데이터가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_qtyDcList.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_qtyDcList.getColumn(i,"CHK") == 1)
                {
                    this.ds_qtyDcList.deleteRow(i);
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

        };

        this.fn_PostDel = function()
        {
        };
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 상품ID 조회 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_prdIdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdId.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 상품ID Edit 키 값 변경시 이벤트 발생 처리
         */
        this.edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edt_prdNm.set_value("");
        	}
        };

        /**
         * 상품ID Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_prdId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdId.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup1(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup1 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_ID",     sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD","20");
        		this.ds_input.setColumn(nRow,"START_NUM",  "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

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
        		this.edt_prdId.set_value(this.ds_popupList.getColumn(0,"PRD_ID_VIEW"));
        		this.edt_prdNm.set_value(this.ds_popupList.getColumn(0,"PRD_NM"));
        		this.fn_Ret();
        	}
        	else
        	{
        		var params  = { prdId : sCodeId, coCd : this.lv_coCd , mallSprCd : "20" };
        		var options = { title  : "상품ID 단일조회" };

        		this.gfn_openPopup("btn_prdIdPopup", "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 협력사 조회 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_cprtcpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpCd.value);
        	this.fn_setCallPopup2(sCodeId);
        };

        /**
         * 협력사 Edit 키 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_cprtcpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * 협력사 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_cprtcpCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpCd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup2(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup2 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"CPRTCP_ID", sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                      // 물리적 생성 ds_popupList
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
        		this.edt_cprtcpCd.set_value(this.ds_popupList.getColumn(0,"CPRTCP_ID"));
        		this.edt_cprtcpNm.set_value(this.ds_popupList.getColumn(0,"CPRTCP_KOR_NM"));
        		this.fn_Ret();
        	}
        	else
        	{
        		var params  = { cprtcpId : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : "협력사" };

        		this.gfn_openPopup("btn_cprtcpPopup", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
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
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.edt_fileName.set_value("");
        			this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow    = this.ds_uploadResult.addRow();
        		var findRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
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

        	if(obj.value != "")
        	{
        		obj.set_cursor("pointer");
        		this.btn_file.set_text("삭제");
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

        	var sFilePath = this.FileUploadSingle.value;  						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_purgInfo.getColumn(0,"PRD_ATTC_FILEID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=95";

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

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_purgInfo.getColumn(0,"PRD_ATTC_FILEID"),"") == "")
        	{
        		this.ds_purgInfo.setColumn(0,"PRD_ATTC_FILEID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	var findRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
        	this.edt_fileName.set_value(this.ds_saveFileList.getColumn(findRow,"ATFL_NM"));
        	this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        };

        /**
         * KC인증대상여부 Radio 클릭시 onitemclick 이벤트 발생 처리
         */
        this.rdo_kcCertYn_onitemclick = function(obj,e)
        {
        	if(e.index == 0)
        	{
        		// 상품ID & 협력사 존재시에만 팝업 호출
        		if(!this.gfn_isNull(this.edt_prdId.value) && !this.gfn_isNull(this.edt_cprtcpCd.value))
        		{
        			var params  = { prdId    : this.edt_prdId.value
        						  , cprtcpId : this.edt_cprtcpCd.value
        						  , coCd     : this.lv_coCd
        						  , saveMode : this.lvSaveMode
        						  , popId    : "SSP_BO_RD_13"
        						  };

        			this.fn_setCallPopup(params);
        		}
        	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;	    	// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.coCd;				// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.prdId;				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.cprtcpId;	    	// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = params.popId;				// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_55";
        	var sUrl 		    = "RD::SSP_BO_RD_55.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04};     // 파라미터4
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**
         * 화면 닫기 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000076", "취소","", "question" ); // 등록을 취소하고 목록으로 이동하시겠습니까?

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
        	var result = this.fn_confirm( "ERRR000076", "취소","", "question" ); // 등록을 취소하고 목록으로 이동하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.stc_dstrbStdPrc.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.edt_cprtcpCd.addEventHandler("oninput",this.edt_cprtcpCd_oninput,this);
            this.edt_cprtcpCd.addEventHandler("onkeyup",this.edt_cprtcpCd_onkeyup,this);
            this.btn_cprtcpPopup.addEventHandler("onclick",this.btn_cprtcpPopup_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.edt_prdId.addEventHandler("oninput",this.edt_prdId_oninput,this);
            this.edt_prdId.addEventHandler("onkeyup",this.edt_prdId_onkeyup,this);
            this.btn_prdIdPopup.addEventHandler("onclick",this.btn_prdIdPopup_onclick,this);
            this.stc_dlvAmt.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_dlvLt.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_kcCertYn.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_fileName.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_rndMsdsUrl.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.rdo_kcCertYn.addEventHandler("onitemclick",this.rdo_kcCertYn_onitemclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_fileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.stc_msdsFnlChgDtm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.rdo_kcCertYnTemp.addEventHandler("onitemclick",this.rdo_kcCertYn_onitemclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
