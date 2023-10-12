(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_08");
            this.set_titletext("쿠폰 - 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnDcSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnPubcMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnUsePerdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnAplyTgtSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnExcptTgtSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cpnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_PURG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PSB_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_GUDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_CPN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnPubcUseDtls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_APLY_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_EXCPT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_CNC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnAplyTgtPrd20", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_EXCPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnAplyTgtPrd30", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_EXCPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnExcptTgtPrd20", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_EXCPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnExcptTgtPrd30", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_EXCPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdClcdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClcdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","20","1917",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","980","0","20","1917",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","1897","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","43","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnKndCd","20","43","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("쿠폰 종류");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("쿠폰 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnKndCd","160","47","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_comboCpnKndCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","74","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnNm","20","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("쿠폰 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnNm","160","78","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnNmSize","881","78","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(34 / 34 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01","871","75","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","20","105","960","81",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnDesc","20","105","130","81",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("쿠폰 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_cpnDesc","160","109","809","41",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnDescSize","866","150","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","212","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnDcSprCd","160","216","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_comboCpnDcSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnDcSprCd","20","212","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("할인 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dcAmtDcrt","500","212","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("할인 금액/율");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dcAmtDcrt","640","216","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dcAmtDcrtTxt","800","216","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("%");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","243","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_minPurgAmt","20","243","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("최소 구매 금액");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_maxDcAmt","500","243","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("최대 할인 금액");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","490","244","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxDcAmt","640","247","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_maxDcAmtTxt","800","247","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("원");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_minPurgAmt","160","247","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_minPurgAmtTxt","320","247","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("원 이상 구매 시 사용 가능");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02","20","274","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pubcDt","20","274","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("발행 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_pubcStrDt","160","278","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","310","275","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","314","278","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","322","275","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_pubcEndDt","327","278","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_pubcEndDtNo","487","278","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("종료일 없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","305","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnPubcMthdCd","640","309","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_comboCpnPubcMthdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pubcQty","20","305","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("발행 수량");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnPubcMthdCd","500","305","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("발행 방식");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pubcQty","160","309","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_unlmtPubcYn","320","309","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("무제한 발행");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02","20","336","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnboxExpsYn","160","340","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_cpnboxExpsYn_innerdataset = new nexacro.NormalDataset("rdo_cpnboxExpsYn_innerdataset", obj);
            rdo_cpnboxExpsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">노출</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미노출</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cpnboxExpsYn_innerdataset);
            obj.set_text("포함");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnboxExpsYn","20","336","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("쿠폰함 노출 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00","20","367","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_01","20","398","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_02","20","429","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","150","399","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","150","457","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnUsePerdCd","20","367","130","94",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("사용 기간/일 수");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnUsePerdCd","160","371","120","86",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_innerdataset("ds_comboCpnUsePerdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_text("없음");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_03","280","367","1","94",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_02_00_00","281","368","10","92",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_cpnUseStrDt","291","371","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01","441","368","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static59_00","445","371","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","453","368","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_cpnUseEndDt","458","371","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_usePsbDcnt","361","402","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnUsePerdCdTxt20","291","402","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("발행일부터");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","511","399","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnUsePerdCdTxt21","521","402","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("일 (고객이 보유한 시점부터 사용 가능)");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnUsePerdCdTxt30","291","433","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("발행 시점으로부터 당월말까지 사용");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01_00","20","460","960","108",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnGudc","20","460","130","108",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("쿠폰 안내");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_cpnGudc","160","464","809","77",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnGudcSize","866","540","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00","969","461","10","57",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","19","2483","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("개별 발행 대상");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","120","2486","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnPubcUseDtls","20","2514","960","300",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnPubcUseDtls");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"고객 유형\"/><Cell col=\"2\" text=\"회원 ID\"/><Cell col=\"3\" text=\"회원명\"/><Cell col=\"4\" text=\"로그인 ID\"/><Cell col=\"5\" text=\"사업장ID\"/><Cell col=\"6\" text=\"사업장명\"/><Cell col=\"7\" text=\"운영단위ID\"/><Cell col=\"8\" text=\"운영단위명\"/><Cell col=\"9\" text=\"부서ID\"/><Cell col=\"10\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CUST_SPR_CD_NM\"/><Cell col=\"2\" text=\"bind:CPN_PUBC_MBR_ID\" textAlign=\"center\" displaytype=\"decoratetext\" edittype=\"none\" expr=\"CPN_PUBC_MBR_ID  == &apos;&apos; ? CPN_PUBC_MBR_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_PUBC_MBR_ID + &quot;&lt;/u&gt;&quot;\"/><Cell col=\"3\" text=\"bind:MBR_NM\"/><Cell col=\"4\" text=\"bind:LOGN_ID\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:BZPLC_ID\"/><Cell col=\"6\" text=\"bind:BZPLC_NM\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"8\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DEPT_NM\" textAlign=\"center\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteMbrIdD","796","2476","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("선택 삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allMbrId","702","2476","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("일괄 등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchMbrId","890","2476","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("회원 조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static63_00","19","588","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("적용 대상");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00","0","566","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00_00","0","609","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","619","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnAplyTgtSprCd","20","619","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("대상 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","150","620","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00","150","620","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00","150","654","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnAplyTgtSprCd","160","623","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_innerdataset("ds_comboCpnAplyTgtSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00_00","20","650","960","255",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnAplyTgtPrd20","20","650","130","255",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("대상 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_01","969","678","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnAplyTgtPrd20","160","688","809","206",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnAplyTgtPrd20");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"530\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"몰 구분\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품 구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MALL_SPR_CD_NM\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:PRD_CLCD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnAplyTgtPrd20","785","661","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_01","537","685","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteCpnAplyTgtPrd20","691","661","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnAplyTgtPrdMulText20","879","661","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00_00_00","20","904","960","255",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnAplyTgtPrd30","20","904","130","255",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("대상 상품군");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_01_00","969","932","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnAplyTgtPrd30","160","942","809","206",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnAplyTgtPrd30");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"530\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"몰구분\"/><Cell col=\"2\" text=\"상품군ID\"/><Cell col=\"3\" text=\"상품군 구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MALL_SPR_CD_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_CLCD\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:PRD_CLCD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnAplyTgtPrd30","785","915","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("상품군검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_01_00","537","939","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnAplyTgtPrdMulText30","879","915","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteCpnAplyTgtPrd30","691","915","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static63_00_00","19","1181","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("제외 대상");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00","0","1159","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00_00_00","0","1202","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","1212","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnExcptTgtSprCd","20","1212","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("제외 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00","150","1213","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00_00","150","1213","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00_00","150","1240","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cpnExcptTgtSprCd","160","1216","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_innerdataset("ds_comboCpnExcptTgtSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00_00_01","20","1243","960","255",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnExcptTgtPrd20","20","1243","130","255",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("제외 대상 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_01_01","969","1271","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnExcptTgtPrd20","160","1281","809","206",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnExcptTgtPrd20");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"530\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"몰 구분\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품 구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MALL_SPR_CD_NM\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRD_CLCD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnExcptTgtPrd20","785","1254","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_01_01","537","1278","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteCpnExcptTgtPrd20","691","1254","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnExcptTgtPrdMulText20","879","1254","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00_00_00_00","20","1497","960","255",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnExcptTgtPrd30","20","1497","130","255",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("제외 대상 상품군");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_01_00_00","969","1525","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnExcptTgtPrd30","160","1535","809","206",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnExcptTgtPrd30");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"530\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"몰구분\"/><Cell col=\"2\" text=\"상품군ID\"/><Cell col=\"3\" text=\"상품군 구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MALL_SPR_CD_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_CLCD\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRD_CLCD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnExcptTgtPrd30","785","1508","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("상품군검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_01_00_00","537","1532","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnExcptTgtPrdMulText30","879","1508","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteCpnExcptTgtPrd30","691","1508","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","1877","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","1837","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01","0","1795","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","20","1805","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","1805","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","19","1774","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_01","150","1806","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00_01","150","1806","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00_01","150","1833","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_00","969","1806","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_01","0","1752","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","1809","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","428","1847","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write","502","1847","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_00_00","618","1741","350","10",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aplyPrdTotalCount","160","663","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aplyPrdClcdTotalCount","160","918","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_excptPrdTotalCount","160","1258","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_excptPrdClcdTotalCount","160","1510","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_04","20","182","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_unlmtCpnYn","160","186","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_unlmtCpnYn_innerdataset = new nexacro.NormalDataset("rdo_unlmtCpnYn_innerdataset", obj);
            rdo_unlmtCpnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">차감</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">무제한</Col></Row></Rows>");
            obj.set_innerdataset(rdo_unlmtCpnYn_innerdataset);
            obj.set_text("포함");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_unlmtCpnYn","20","182","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("쿠폰 차감방식");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_cpnKndCd","value","ds_cpnInfo","CPN_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_cpnNm","value","ds_cpnInfo","CPN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txt_cpnDesc","value","ds_cpnInfo","CPN_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_cpnDcSprCd","value","ds_cpnInfo","CPN_DC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_dcAmtDcrt","value","ds_cpnInfo","DC_AMT_DCRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_minPurgAmt","value","ds_cpnInfo","MIN_PURG_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_maxDcAmt","value","ds_cpnInfo","MAX_DC_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cal_pubcStrDt","value","ds_cpnInfo","PUBC_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cal_pubcEndDt","value","ds_cpnInfo","PUBC_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_pubcQty","value","ds_cpnInfo","PUBC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","chk_unlmtPubcYn","value","ds_cpnInfo","UNLMT_PUBC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","rdo_cpnPubcMthdCd","value","ds_cpnInfo","CPN_PUBC_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rdo_cpnboxExpsYn","value","ds_cpnInfo","CPNBOX_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","rdo_cpnUsePerdCd","value","ds_cpnInfo","CPN_USE_PERD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_cpnUseStrDt","value","ds_cpnInfo","CPN_USE_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cal_cpnUseEndDt","value","ds_cpnInfo","CPN_USE_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_usePsbDcnt","value","ds_cpnInfo","USE_PSB_DCNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","txt_cpnGudc","value","ds_cpnInfo","CPN_GUDC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","rdo_cpnAplyTgtSprCd","value","ds_cpnInfo","CPN_APLY_TGT_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","rdo_cpnExcptTgtSprCd","value","ds_cpnInfo","CPN_EXCPT_TGT_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","rdo_useYn","value","ds_cpnInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","chk_pubcEndDtNo","value","ds_cpnInfo","PUBC_END_DT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_unlmtCpnYn","value","ds_cpnInfo","UNLMT_CPN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_08.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_08.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_08.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_08.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 쿠폰 - 등록
          CREATION DATES : 2022.03.18
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        this.fv_prdCheck;
        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_08_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("FORM_INIT");
        	this.fn_init("CODE_INIT");
        }

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 공통코드 조회
         */
        this.fn_commonCodeSearch = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "CPN_KND_CD,CPN_DC_SPR_CD,CPN_PUBC_MTHD_CD,CPN_USE_PERD_CD,CPN_APLY_TGT_SPR_CD,CPN_EXCPT_TGT_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboCpnKndCd=ds_output1 ds_comboCpnDcSprCd=ds_output2 ds_comboCpnPubcMthdCd=ds_output3 ds_comboCpnUsePerdCd=ds_output4 ds_comboCpnAplyTgtSprCd=ds_output5 ds_comboCpnExcptTgtSprCd=ds_output6";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 상품ID 유효성 검사
         */
        this.fn_prdIdCheck = function()
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "CO_CD", this.fv_coCd);

        	var sSvcId = "prdIdCheck";
        	var sUrl = "/sa/com/select-prd-id-check-list.do";
        	var sInData = "ds_search=ds_search ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var sOutData = "ds_prdInfoList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 상품군ID 유효성 검사
         */
        this.fn_prdClcdCheck = function()
        {
        	var sSvcId = "prdClcdCheck";
        	var sUrl = "/sa/com/select-prd-clcd-check-list.do";
        	var sInData = "ds_searchPrdClcdCheckList=ds_searchPrdClcdCheckList:A"
        	var sOutData = "ds_prdClcdInfoList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 신규 데이터 등록
         */
        this.fn_saveCpnInfo = function()
        {
        	if (this.edt_cpnNm.value == "" || this.edt_cpnNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "쿠폰 명은")); // 쿠폰 명은 필수 입력항목입니다.
        		this.edt_cpnNm.setFocus();
        		return
        	}

        	if (this.rdo_cpnKndCd.value == "10")
        	{
        		// 10 : 일반

        		if (this.rdo_cpnDcSprCd.value == "10")
        		{
        			// 10 : 정액

        			if (this.edt_dcAmtDcrt.value == "" || this.edt_dcAmtDcrt.value == undefined)
        			{
        				alert(this.fn_getMessage("ERRN000001", "할인 금액/율은")); // 할인 금액/율은 필수 입력항목입니다.
        				this.edt_dcAmtDcrt.setFocus();
        				return
        			}

        			//this.edt_dcAmtDcrt.set_value("");
        			this.edt_maxDcAmt.set_value("");
        		}
        		else
        		{
        			// 20 : 정률

        			if (this.edt_dcAmtDcrt.value == "" || this.edt_dcAmtDcrt.value == undefined)
        			{
        				alert(this.fn_getMessage("ERRN000001", "할인 금액/율은")); // 할인 금액/율은 필수 입력항목입니다.
        				this.edt_dcAmtDcrt.setFocus();
        				return
        			}

        			if (this.edt_maxDcAmt.value == "" || this.edt_maxDcAmt.value == undefined)
        			{
        				alert(this.fn_getMessage("ERRN000001", "최대 할인 금액은")); // 최대 할인 금액은 필수 입력항목입니다.
        				this.edt_maxDcAmt.setFocus();
        				return
        			}

        			//this.edt_dcAmtDcrt.set_value("");
        			//this.edt_maxDcAmt.set_value("");
        		}
        	}
        	else if (this.rdo_cpnKndCd.value == "20")
        	{
        		// 20 : 배송비

        		// 입력 항목 영역
        		this.rdo_cpnDcSprCd.set_index(-1);
        		this.edt_dcAmtDcrt.set_value("");
        		this.edt_maxDcAmt.set_value("");
        	}

        	if (this.edt_minPurgAmt.value == "" || this.edt_minPurgAmt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "최소 구매 금액은")); // 최소 구매 금액은 필수 입력항목입니다.
        		this.edt_minPurgAmt.setFocus();
        		return
        	}

        	if (this.cal_pubcStrDt.value == "" || this.cal_pubcStrDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "발행 시작일은")); // 발행 시작일은 필수 입력항목입니다.
        		this.cal_pubcStrDt.setFocus();
        		return
        	}

        	if (this.cal_pubcEndDt.value == "" || this.cal_pubcEndDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "발행 종료일은")); // 발행 종료일은 필수 입력항목입니다.
        		this.cal_pubcEndDt.setFocus();
        		return
        	}

        	if (this.cal_pubcStrDt.value > this.cal_pubcEndDt.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "발행 종료일이 발행 시작일보다")); // 발행 종료일이 발행 시작일보다 작습니다.
        		this.cal_pubcStrDt.setFocus();
        		return
        	}

        	if (this.edt_pubcQty.value == "" || this.edt_pubcQty.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "발행 수량은")); // 발행 수량은 필수 입력항목입니다.
        		this.edt_pubcQty.setFocus();
        		return
        	}

        	if (this.rdo_cpnUsePerdCd.value == "10")
        	{
        		// 10 : 고정 기간

        		if (this.cal_cpnUseStrDt.value == "" || this.cal_cpnUseStrDt.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "고정 기간 시작일은")); // 고정 기간 시작일은 필수 입력항목입니다.
        			this.cal_cpnUseStrDt.setFocus();
        			return
        		}

        		if (this.cal_cpnUseEndDt.value == "" || this.cal_cpnUseEndDt.value == undefined)
        		{
        			alert("고정 기간 종료일은 필수 입력항목입니다.");
        			alert(this.fn_getMessage("ERRN000001", "고정 기간 종료일은")); // 고정 기간 종료일은 필수 입력항목입니다.
        			this.cal_cpnUseEndDt.setFocus();
        			return
        		}

        		if (this.cal_cpnUseStrDt.value > this.cal_cpnUseEndDt.value)
        		{
        			alert(this.fn_getMessage("ERRN000002", "고정 기간 종료일이 고정 기간 시작일보다")); // 고정 기간 종료일이 고정 기간 시작일보다 작습니다.
        			this.cal_cpnUseStrDt.setFocus();
        			return
        		}

        		//this.cal_cpnUseStrDt.set_value("");
        		//this.cal_cpnUseEndDt.set_value("");
        		this.edt_usePsbDcnt.set_value("");
        	}
        	else if (this.rdo_cpnUsePerdCd.value == "20")
        	{
        		// 20 : 사용 가능 일수

        		if (this.edt_usePsbDcnt.value == "" || this.edt_usePsbDcnt.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "사용 가능 일수는")); // 사용 가능 일수는 필수 입력항목입니다.
        			this.edt_usePsbDcnt.setFocus();
        			return
        		}

        		this.cal_cpnUseStrDt.set_value("");
        		this.cal_cpnUseEndDt.set_value("");
        		//this.edt_usePsbDcnt.set_value("");
        	}
        	else if (this.rdo_cpnUsePerdCd.value == "30")
        	{
        		// 30 : 발행 당월말

        		this.cal_cpnUseStrDt.set_value("");
        		this.cal_cpnUseEndDt.set_value("");
        		this.edt_usePsbDcnt.set_value("");
        	}

        // 	if (this.txt_cpnGudc.value == "" || this.txt_cpnGudc.value == undefined)
        // 	{
        // 		alert(this.fn_getMessage("ERRN000001", "쿠폰 안내는")); // 쿠폰 안내는 필수 입력항목입니다.
        // 		this.txt_cpnGudc.setFocus();
        // 		return
        // 	}

        	if (this.rdo_cpnPubcMthdCd.value == "10")
        	{
        		// 10 : 회원 가입
        	}
        	else if (this.rdo_cpnPubcMthdCd.value == "20")
        	{
        		// 20 : 대상자 지정

        // 		if (this.ds_gridCpnPubcUseDtls.getRowCount() <= 0)
        // 		{
        // 			alert(this.fn_getMessage("ERRN000010")); // 발행 방식 중 대상자 지정을 선택하면 개별 발행 대상을 추가해야 합니다.
        // 			return;
        // 		}

        		if (this.chk_unlmtPubcYn.value == "N")
        		{
        			if (this.ds_gridCpnPubcUseDtls.getRowCount() > parseInt(this.edt_pubcQty.value))
        			{
        				alert(this.fn_getMessage("ERRN000011")); // 개별 발행 대상이 발행 수량보다 많습니다.
        				return;
        			}
        		}
        	}
        	else if (this.rdo_cpnPubcMthdCd.value == "30")
        	{
        		// 30 : 다운로드
        	}

        	if (this.rdo_cpnAplyTgtSprCd.value == "10")
        	{
        		// 10 : 전체상품

        		this.ds_gridCpnAplyTgtPrd20.clearData();
        		this.ds_gridCpnAplyTgtPrd30.clearData();
        	}
        	else if (this.rdo_cpnAplyTgtSprCd.value == "20")
        	{
        		// 20 : 개별 상품

        		if (this.ds_gridCpnAplyTgtPrd20.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000012")); // 적용 대상 구분 중 개별 상품을 선택하면 대상 상품을 추가해야 합니다.
        			return;
        		}

        		//this.ds_gridCpnAplyTgtPrd20.clearData();
        		this.ds_gridCpnAplyTgtPrd30.clearData();
        	}
        	else if (this.rdo_cpnAplyTgtSprCd.value == "30")
        	{
        		// 30 : 상품군

        		if (this.ds_gridCpnAplyTgtPrd30.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000013")); // 적용 대상 구분 중 상품군을 선택하면 대상 상품군을 추가해야 합니다.
        			return;
        		}

        		this.ds_gridCpnAplyTgtPrd20.clearData();
        		//this.ds_gridCpnAplyTgtPrd30.clearData();
        	}

        	if (this.rdo_cpnExcptTgtSprCd.value == "10")
        	{
        		// 10 : 제외없음

        		this.ds_gridCpnExcptTgtPrd20.clearData();
        		this.ds_gridCpnExcptTgtPrd30.clearData();
        	}
        	else if (this.rdo_cpnExcptTgtSprCd.value == "20")
        	{
        		// 20 : 개별 상품

        		if (this.ds_gridCpnExcptTgtPrd20.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000014")); // 제외 대상 구분 중 개별 상품을 선택하면 제외 대상 상품을 추가해야 합니다.
        			return;
        		}

        		//this.ds_gridCpnExcptTgtPrd20.clearData();
        		this.ds_gridCpnExcptTgtPrd30.clearData();
        	}
        	else if (this.rdo_cpnExcptTgtSprCd.value == "30")
        	{
        		// 30 : 상품군

        		if (this.ds_gridCpnExcptTgtPrd30.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000015")); // 제외 대상 구분 중 상품군을 선택하면 제외 대상 상품군을 추가해야 합니다.
        			return;
        		}

        		this.ds_gridCpnExcptTgtPrd20.clearData();
        		//this.ds_gridCpnExcptTgtPrd30.clearData();
        	}

        	if (this.rdo_cpnKndCd.value == "20")
        	{
        		// 20 : 배송비

        		// 적용구분코드, 적용제외구분코드는 기본값으로
        		this.rdo_cpnAplyTgtSprCd.set_value("10");
        		this.rdo_cpnExcptTgtSprCd.set_value("10");

        		this.ds_gridCpnExcptTgtPrd20.clearData();
        		this.ds_gridCpnExcptTgtPrd30.clearData();
        	}

        	if ( confirm(this.fn_getMessage("ERRN000043"))) // 등록하시겠습니까?
        	{
        		this.ds_cpnInfo.setColumn(0,"CO_CD", this.fv_coCd);

        		var sSvcId = "saveCpnInfo";
        		var sUrl = "/sa/cpn/save-cpn-info.do";
        		var sInData = "ds_save=ds_cpnInfo:A ds_save2=ds_gridCpnPubcUseDtls:A ds_save3=ds_gridCpnAplyTgtPrd20:A ds_save4=ds_gridCpnAplyTgtPrd30:A ds_save5=ds_gridCpnExcptTgtPrd20:A ds_save6=ds_gridCpnExcptTgtPrd30:A"
        		var sOutData = "";
        		var sArg = "";
        		var sCallback = "fn_callbackFunction";

        		this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        	}
        }










        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "commonCodeSearch" :

        			this.rdo_cpnKndCd.set_index(0);

        			this.rdo_cpnDcSprCd.set_index(1);

        			this.rdo_cpnPubcMthdCd.set_index(0);

        			this.rdo_cpnUsePerdCd.set_index(0);

        			this.rdo_cpnAplyTgtSprCd.set_index(0);

        			this.rdo_cpnExcptTgtSprCd.set_index(0);

        			break;

        		case "saveCpnInfo" :

        			if( errorCode == -1 || errorCode == -100)
        			{
        				//사용자 지정 에러코드 -100
        				alert(errorMsg);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000029")); // 등록되었습니다.

        				var resData = {};
        				var resString = "";

        				resData.RETURN_YN = "Y";

        				// json string 변경
        				resString = JSON.stringify(resData);

        				// return
        				this.close(resString);
        			}

        			break;

        		case "prdIdCheck" :

        			var tempPrdId = "";
        			var tgtDs = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++)
        			{
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");

        				if (sPrdNm == "" || sPrdNm == undefined)
        				{
        					tempPrdId = tempPrdId + sPrdIdView + ",";
        				}
        			}

        			tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);

        			if (tempPrdId != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000025", tempPrdId));
        				alert(this.fn_getMessage("ERRN000025", tempPrdId)); // 없는 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}

        			if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText20") {
        				tgtDs = this.ds_gridCpnAplyTgtPrd20;
        			} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText20") {
        				tgtDs = this.ds_gridCpnExcptTgtPrd20;
        			}

        			var totalCount2 = 0;
        			tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++)
        			{
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");
        				var sPrdClcdNm = this.ds_prdInfoList.getColumn(x, "PRD_CLCD_NM");
        				var sMallSprCd = this.ds_prdInfoList.getColumn(x, "MALL_SPR_CD");
        				var sMallSprCdNm = this.ds_prdInfoList.getColumn(x, "MALL_SPR_CD_NM");


        				if (sPrdNm != "" && sPrdNm != undefined)
        				{
        					var findRow = tgtDs.findRowExpr("PRD_ID == '" + sPrdId + "'");

        					if(findRow < 0)
        					{
        						var nRow = tgtDs.addRow();

        						tgtDs.setColumn(nRow, "CHK", "0");
        						tgtDs.setColumn(nRow, "CO_CD", this.fv_coCd);
        						tgtDs.setColumn(nRow, "CPN_EVT_NO", "");
        						tgtDs.setColumn(nRow, "CPN_PRD_SEQ", "");

        						//SSP-1986
        						if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText20") {
        							tgtDs.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "10");
        						} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText20") {
        							tgtDs.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "20");
        						}

        						tgtDs.setColumn(nRow, "PRD_CLCD", "");
        						tgtDs.setColumn(nRow, "PRD_ID", sPrdId);
        						tgtDs.setColumn(nRow, "PRD_ID_VIEW", sPrdIdView);
        						tgtDs.setColumn(nRow, "PRD_NM", sPrdNm);
        						tgtDs.setColumn(nRow, "PRD_CLCD_NM", sPrdClcdNm);
        						tgtDs.setColumn(nRow, "MALL_SPR_CD", sMallSprCd);
        						tgtDs.setColumn(nRow, "MALL_SPR_CD_NM", sMallSprCdNm);

        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempPrdId = tempPrdId + sPrdIdView + ",";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText20") {
        				this.sta_aplyPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd20.getRowCount() + "건</b>)");
        			} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText20") {
        				this.sta_excptPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd20.getRowCount() + "건</b>)");
        			}

        			break;

        		case "prdClcdCheck" :

        			var tempPrdClcd = "";
        			var tgtDs = "";

        			for (var x = 0; x < this.ds_prdClcdInfoList.getRowCount(); x++)
        			{
        				var sPrdClcd = this.ds_prdClcdInfoList.getColumn(x, "PRD_CLCD");
        				var sPrdClcdNm = this.ds_prdClcdInfoList.getColumn(x, "PRD_CLCD_NM");

        				if (sPrdClcdNm == "" || sPrdClcdNm == undefined)
        				{
        					tempPrdClcd = tempPrdClcd + sPrdClcd + ",";
        				}
        			}

        			tempPrdClcd = tempPrdClcd.substring(0, tempPrdClcd.length-1);

        			if (tempPrdClcd != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000027", tempPrdClcd));
        				alert(this.fn_getMessage("ERRN000027", tempPrdClcd)); // 없는 상품군ID가 있습니다. 상품군ID를 확인해주세요.\n&1
        			}

        			if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText30") {
        				tgtDs = this.ds_gridCpnAplyTgtPrd30;
        			} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText30") {
        				tgtDs = this.ds_gridCpnExcptTgtPrd30;
        			}

        			var totalCount2 = 0;
        			tempPrdClcd = "";

        			for (var x = 0; x < this.ds_prdClcdInfoList.getRowCount(); x++)
        			{
        				var sPrdClcd = this.ds_prdClcdInfoList.getColumn(x, "PRD_CLCD");
        				var sPrdClcdNm = this.ds_prdClcdInfoList.getColumn(x, "PRD_CLCD_NM");


        				if (sPrdClcdNm != "" && sPrdClcdNm != undefined)
        				{
        					var findRow = tgtDs.findRowExpr("PRD_CLCD == '" + sPrdClcd + "'");

        					if(findRow < 0)
        					{
        						var nRow = tgtDs.addRow();

        						tgtDs.setColumn(nRow, "CHK", "0");
        						tgtDs.setColumn(nRow, "CO_CD", this.fv_coCd);
        						tgtDs.setColumn(nRow, "CPN_EVT_NO", "");
        						tgtDs.setColumn(nRow, "CPN_PRD_SEQ", "");

        						//SSP-1986
        						if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText30") {
        							tgtDs.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "10");
        						} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText30") {
        							tgtDs.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "20");
        						}

        						tgtDs.setColumn(nRow, "PRD_CLCD", sPrdClcd);
        						tgtDs.setColumn(nRow, "PRD_ID", "");
        						tgtDs.setColumn(nRow, "PRD_ID_VIEW", "");
        						tgtDs.setColumn(nRow, "PRD_NM", "");
        						tgtDs.setColumn(nRow, "PRD_CLCD_NM", sPrdClcdNm);
        						tgtDs.setColumn(nRow, "MALL_SPR_CD", this.ds_prdClcdInfoList.getColumn(x, "MALL_SPR_CD_NM"));
        						tgtDs.setColumn(nRow, "MALL_SPR_CD_NM", this.ds_prdClcdInfoList.getColumn(x, "MALL_SPR_CD_NM"));

        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempPrdClcd = tempPrdClcd + sPrdClcd + ",";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				tempPrdClcd = tempPrdClcd.substring(0, tempPrdClcd.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000028", tempPrdClcd));
        				alert(this.fn_getMessage("ERRN000028", tempPrdClcd)); // 상품군이 중복되었습니다. 상품군ID를 확인해주세요.\n&1
        			}

        			if (this.fv_prdCheck == "btn_searchCpnAplyTgtPrdMulText30") {
        				this.sta_aplyPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd30.getRowCount() + "건</b>)");
        			} else if (this.fv_prdCheck == "btn_searchCpnExcptTgtPrdMulText30") {
        				this.sta_excptPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd30.getRowCount() + "건</b>)");
        			}

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_searchMbrId" :

        			if (this.chk_unlmtPubcYn.value == "N")
        			{
        				var totalCount = 0;

        				for(var i=0; i<retObj.length; i++)
        				{
        					var rowData = retObj[i];	//JSON.parse(retObj[i]);

        					var findRow = this.ds_gridCpnPubcUseDtls.findRowExpr("CPN_PUBC_MBR_ID == '" + rowData.MBR_ID + "'");

        					if(findRow < 0)
        					{
        						totalCount = totalCount + 1;
        					}
        				}

        				if (parseInt(this.ds_gridCpnPubcUseDtls.getRowCount() + totalCount) > parseInt(this.edt_pubcQty.value))
        				{
        					alert(this.fn_getMessage("ERRN000011")); // 개별 발행 대상이 발행 수량보다 많습니다.
        					return;
        				}
        			}

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_gridCpnPubcUseDtls.findRowExpr("CPN_PUBC_MBR_ID == '" + rowData.MBR_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridCpnPubcUseDtls.addRow();

        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CHK", "0");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CO_CD", rowData.CO_CD);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_NO", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_EVT_NO", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_PUBC_MBR_ID", rowData.MBR_ID);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_PUBC_DTM", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "BZPLC_ID", rowData.BZPLC_ID);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_APLY_CART_NO", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_APLY_CART_ITM_SEQ", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_CART_APLY_DTM", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_CART_EXCPT_DTM", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_USE_PRD_ID", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_USE_ODR_NO", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_USE_ODR_ITM_NO", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_ODR_DTM", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CPN_ODR_CNC_DTM", "");
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "MBR_NM", rowData.MBR_NM);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "LOGN_ID", rowData.LOGN_ID);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CUST_SPR_CD", rowData.CUST_SPR_CD);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "CUST_SPR_CD_NM", rowData.CUST_SPR_CD_NM);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "BZPLC_NM", rowData.BZPLC_NM);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "DEPT_ID", rowData.DEPT_ID);
        					this.ds_gridCpnPubcUseDtls.setColumn(nRow, "DEPT_NM", rowData.DEPT_NM);
        				}
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_gridCpnPubcUseDtls.rowcount + "건</b>)";
        			this.sta_totalCount.set_text(sTotText);

        			break;

        		case "btn_mbrDtl" :

        			break;

        		case "btn_searchCpnAplyTgtPrd20" :

        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);
        				//var rowData = retObj[i];	//JSON.parse(retObj[i]);

        				var findRow = this.ds_gridCpnAplyTgtPrd20.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridCpnAplyTgtPrd20.addRow();

        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "CHK", "0");
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "CPN_EVT_NO", "");
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "CPN_PRD_SEQ", "");
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "10");
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "PRD_CLCD", "");
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "PRD_CLCD_NM", rowData.FULL_PRD_CLSF_NM);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "MALL_SPR_CD", rowData.MALL_SPR_CD);
        					this.ds_gridCpnAplyTgtPrd20.setColumn(nRow, "MALL_SPR_CD_NM", rowData.MALL_SPR_CD == "10" ? "SSP Mall" : "R&D Mall");
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}
        			if (totalCount2 > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.sta_aplyPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd20.getRowCount() + "건</b>)");

        			break;

        		case "btn_searchCpnAplyTgtPrdMulText20" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sPrdId = sTempValue[x];

        					if (sPrdId != "")
        					{
        						var nRow = this.ds_searchPrdIdCheckList.addRow();

        						this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", sPrdId);
        					}
        				}
        				this.fv_prdCheck = "btn_searchCpnAplyTgtPrdMulText20";

        				this.fn_prdIdCheck();
        			}

        			break;

        		case "btn_searchCpnAplyTgtPrd30" :

        			var rowData = JSON.parse(sRetValue);

        			var findRow = this.ds_gridCpnAplyTgtPrd30.findRowExpr("PRD_CLCD == '" + rowData.PRD_CLCD + "'");

        			if(findRow < 0)
        			{
        				var nRow = this.ds_gridCpnAplyTgtPrd30.addRow();

        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "CHK", "0");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "CO_CD", this.fv_coCd);
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "CPN_EVT_NO", "");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "CPN_PRD_SEQ", "");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "10");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "PRD_CLCD", rowData.PRD_CLCD);
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "PRD_ID", "");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "PRD_NM", "");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "PRD_CLCD_NM", rowData.PRD_CLSF_NM);
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "MALL_SPR_CD", "");
        				this.ds_gridCpnAplyTgtPrd30.setColumn(nRow, "MALL_SPR_CD_NM", "");
        			}
        			else
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000028", rowData.PRD_CLCD));
        				alert(this.fn_getMessage("ERRN000028", rowData.PRD_CLCD)); // 상품군이 중복되었습니다. 상품군ID를 확인해주세요.\n&1
        			}

        			this.sta_aplyPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd30.getRowCount() + "건</b>)");

        			break;

        		case "btn_searchCpnAplyTgtPrdMulText30" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchPrdClcdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sPrdClcd = sTempValue[x];

        					if (sPrdClcd != "")
        					{

        						var nRow = this.ds_searchPrdClcdCheckList.addRow();

        						this.ds_searchPrdClcdCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchPrdClcdCheckList.setColumn(nRow, "PRD_CLCD", sPrdClcd);

        					}
        				}

        				this.fv_prdCheck = "btn_searchCpnAplyTgtPrdMulText30";

        				this.fn_prdClcdCheck();
        			}

        			break;

        		case "btn_searchCpnExcptTgtPrd20" :

        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				//var rowData = retObj[i];	//JSON.parse(retObj[i]);
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_gridCpnExcptTgtPrd20.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridCpnExcptTgtPrd20.addRow();

        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "CHK", "0");
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "CPN_EVT_NO", "");
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "CPN_PRD_SEQ", "");
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "20");
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "PRD_CLCD", "");
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "PRD_CLCD_NM", rowData.FULL_PRD_CLSF_NM);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "MALL_SPR_CD", rowData.MALL_SPR_CD);
        					this.ds_gridCpnExcptTgtPrd20.setColumn(nRow, "MALL_SPR_CD_NM", rowData.MALL_SPR_CD == "10" ? "SSP Mall" : "R&D Mall");
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}
        			if (totalCount2 > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1

        			}

        			this.sta_excptPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd20.getRowCount() + "건</b>)");

        			break;

        		case "btn_searchCpnExcptTgtPrdMulText20" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sPrdId = sTempValue[x];

        					if (sPrdId != "")
        					{
        						var nRow = this.ds_searchPrdIdCheckList.addRow();

        						this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", sPrdId);

        					}
        				}
        				this.fv_prdCheck = "btn_searchCpnExcptTgtPrdMulText20";

        				this.fn_prdIdCheck();
        			}

        			break;

        		case "btn_searchCpnExcptTgtPrd30" :

        			var rowData = JSON.parse(sRetValue);

        			var findRow = this.ds_gridCpnExcptTgtPrd30.findRowExpr("PRD_CLCD == '" + rowData.PRD_CLCD + "'");

        			if(findRow < 0)
        			{
        				var nRow = this.ds_gridCpnExcptTgtPrd30.addRow();

        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "CHK", "0");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "CO_CD", this.fv_coCd);
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "CPN_EVT_NO", "");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "CPN_PRD_SEQ", "");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "CPN_APLY_EXCPT_SPR_CD", "20");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "PRD_CLCD", rowData.PRD_CLCD);
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "PRD_ID", "");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "PRD_NM", "");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "PRD_CLCD_NM", rowData.PRD_CLSF_NM);
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "MALL_SPR_CD", "");
        				this.ds_gridCpnExcptTgtPrd30.setColumn(nRow, "MALL_SPR_CD_NM", "");
        			}
        			else
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000028", rowData.PRD_CLCD));
        				alert(this.fn_getMessage("ERRN000028", rowData.PRD_CLCD)); // 상품군이 중복되었습니다. 상품군ID를 확인해주세요.\n&1

        			}

        			this.sta_excptPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd30.getRowCount() + "건</b>)");

        			break;

        		case "btn_searchCpnExcptTgtPrdMulText30" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sPrdClcd = sTempValue[x];

        					if (sPrdClcd != "")
        					{
        						var nRow = this.ds_searchPrdClcdCheckList.addRow();

        						this.ds_searchPrdClcdCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchPrdClcdCheckList.setColumn(nRow, "PRD_CLCD", sPrdClcd);
        					}
        				}
        				this.fv_prdCheck = "btn_searchCpnExcptTgtPrdMulText30";

        				this.fn_prdClcdCheck();
        			}

        			break;

        		default :

        			break;
        	}
        }










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// 필수 설정
        	this.sta_cpnKndCd.uEssentiel = "true";
        	this.sta_cpnNm.uEssentiel = "true";
        	this.sta_cpnDesc.uEssentiel = "false";
        	this.sta_cpnDcSprCd.uEssentiel = "true";
        	this.sta_dcAmtDcrt.uEssentiel = "true";
        	this.sta_minPurgAmt.uEssentiel = "true";
        	this.sta_maxDcAmt.uEssentiel = "false";
        	this.sta_pubcDt.uEssentiel = "true";
        	this.sta_pubcQty.uEssentiel = "true";
        	this.sta_cpnPubcMthdCd.uEssentiel = "true";
        	this.sta_cpnboxExpsYn.uEssentiel = "false";
        	this.sta_cpnUsePerdCd.uEssentiel = "true";
        	//this.sta_cpnGudc.uEssentiel = "true";
        	this.sta_cpnAplyTgtSprCd.uEssentiel = "true";
        	this.sta_cpnAplyTgtPrd20.uEssentiel = "false";
        	this.sta_cpnAplyTgtPrd30.uEssentiel = "false";
        	this.sta_cpnExcptTgtSprCd.uEssentiel = "true";
        	this.sta_cpnExcptTgtPrd20.uEssentiel = "false";
        	this.sta_cpnExcptTgtPrd30.uEssentiel = "false";
        	this.sta_useYn.uEssentiel = "true";
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 쿠폰 종류 값 변경 시
         */
        this.rdo_cpnKndCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnKndCd.value == "10")
        	{
        		// 10 : 일반

        		// 필수 설정
        		this.sta_cpnDcSprCd.uEssentiel = "true";
        		this.sta_dcAmtDcrt.uEssentiel = "true";

        		if (this.rdo_cpnDcSprCd.value == "10")
        		{
        			// 10 : 정액

        			this.sta_maxDcAmt.uEssentiel = "false";
        		}
        		else
        		{
        			// 20 : 정률

        			this.sta_maxDcAmt.uEssentiel = "true";
        		}

        		// 입력 항목 영역
        		//this.rdo_cpnDcSprCd.set_index(0);
        		//this.edt_dcAmtDcrt.set_value("0");
        		//this.edt_maxDcAmt.set_value("0");

        		// 할인 구분, 할인 금액/율, 최대 할인 금액 항목 항목 활성화
        		this.rdo_cpnDcSprCd.set_enable(true);
        		this.edt_dcAmtDcrt.set_readonly(false);

        		if (this.rdo_cpnDcSprCd.value == "10")
        		{
        			// 10 : 정액

        			this.edt_maxDcAmt.set_readonly(true);
        		}
        		else
        		{
        			// 20 : 정률

        			this.edt_maxDcAmt.set_readonly(false);
        		}

        		// 적용, 적용제외 활성화
        		this.rdo_cpnAplyTgtSprCd.set_enable(true);
        		this.rdo_cpnExcptTgtSprCd.set_enable(true);
        	}
        	else if (this.rdo_cpnKndCd.value == "20")
        	{
        		// 20 : 배송비

        		// 필수 설정
        		this.sta_cpnDcSprCd.uEssentiel = "false";
        		this.sta_dcAmtDcrt.uEssentiel = "false";
        		this.sta_maxDcAmt.uEssentiel = "false";

        		// 입력 항목 영역
        		//this.rdo_cpnDcSprCd.set_index(0);
        		//this.edt_dcAmtDcrt.set_value("0");
        		//this.edt_maxDcAmt.set_value("0");

        		// 할인 구분, 할인 금액/율, 최대 할인 금액 항목 항목 활성화
        		this.rdo_cpnDcSprCd.set_enable(false);
        		this.edt_dcAmtDcrt.set_readonly(true);
        		this.edt_maxDcAmt.set_readonly(true);

        		// 적용, 적용제외 비활성화
        		this.rdo_cpnAplyTgtSprCd.set_enable(false);
        		this.rdo_cpnExcptTgtSprCd.set_enable(false);
        	}
        };

        /**
         * 쿠폰 명 텍스트 입력 시
         */
        this.edt_cpnNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 50, "00");
        };

        /**
         * 쿠폰 설명 텍스트 입력 시
         */
        this.txt_cpnDesc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "01");
        };

        /**
         * 할인 구분 값 변경 시
         */
        this.rdo_cpnDcSprCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnDcSprCd.value == "10")
        	{
        		// 10 : 정액

        		this.sta_dcAmtDcrtTxt.set_text("원");

        		this.edt_maxDcAmt.set_readonly(true);
        	}
        	else if (this.rdo_cpnDcSprCd.value == "20")
        	{
        		// 20 : 정률

        		this.sta_dcAmtDcrtTxt.set_text("%");

        		this.edt_maxDcAmt.set_readonly(false);
        	}
        };

        /**
         * 종료일 없음 값 변경 시
         */
        this.chk_pubcEndDtNo_onchanged = function(obj,e)
        {
        	if (this.chk_pubcEndDtNo.value == "Y")
        	{
        		this.cal_pubcEndDt.set_value("99991231");

        		this.cal_pubcEndDt.set_readonly(true);
        	}
        	else
        	{
        		this.cal_pubcEndDt.set_value("");

        		this.cal_pubcEndDt.set_readonly(false);
        	}
        };

        /**
         * 무제한 발행 값 변경 시
         */
        this.chk_unlmtPubcYn_onchanged = function(obj,e)
        {
        	if (this.chk_unlmtPubcYn.value == "Y")
        	{
        		this.edt_pubcQty.set_value("0");
        		this.edt_pubcQty.set_readonly(true);
        	}
        	else
        	{
        		this.edt_pubcQty.set_value("");
        		this.edt_pubcQty.set_readonly(false);
        	}
        };

        /**
         * 발행 방식 값 변경 시
         */
        this.rdo_cpnPubcMthdCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnPubcMthdCd.value == "10")
        	{
        		// 10 : 회원 가입
        		this.rdo_cpnboxExpsYn.set_value("");
        		this.rdo_cpnboxExpsYn.set_enable(false);

        		// 개별 발행 대상 - 일괄 등록, 선택 삭제, 회원 조회
        		this.btn_allMbrId.set_enable(false);
        		this.btn_deleteMbrIdD.set_enable(false);
        		this.btn_searchMbrId.set_enable(false);

        		this.grd_cpnPubcUseDtls.set_readonly(true);

        		this.cal_pubcStrDt.set_readonly(false);
        		this.cal_pubcEndDt.set_readonly(false);
        		this.chk_pubcEndDtNo.set_enable(true);
        	}
        	else if (this.rdo_cpnPubcMthdCd.value == "20")
        	{
        		// 20 : 대상자 지정
        		this.rdo_cpnboxExpsYn.set_value("");
        		this.rdo_cpnboxExpsYn.set_enable(false);

        		// 개별 발행 대상 - 일괄 등록, 선택 삭제, 회원 조회
        		this.btn_allMbrId.set_enable(true);
        		this.btn_deleteMbrIdD.set_enable(true);
        		this.btn_searchMbrId.set_enable(true);

        		this.grd_cpnPubcUseDtls.set_readonly(false);

        		// 발행 시작일 종료일을 오늘날짜로 지정
        		var objDate = new Date();
        		var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
        		this.cal_pubcStrDt.set_value(sToday);
        		this.cal_pubcEndDt.set_value(sToday);
        		this.cal_pubcStrDt.set_readonly(true);
        		this.cal_pubcEndDt.set_readonly(true);
        		this.chk_pubcEndDtNo.set_enable(false);
        	}
        	else if (this.rdo_cpnPubcMthdCd.value == "30")
        	{
        		// 30 : 다운로드
        		this.rdo_cpnboxExpsYn.set_index(0);
        		this.rdo_cpnboxExpsYn.set_enable(true);

        		// 개별 발행 대상 - 일괄 등록, 선택 삭제, 회원 조회
        		this.btn_allMbrId.set_enable(false);
        		this.btn_deleteMbrIdD.set_enable(false);
        		this.btn_searchMbrId.set_enable(false);

        		this.grd_cpnPubcUseDtls.set_readonly(true);

        		this.cal_pubcStrDt.set_readonly(false);
        		this.cal_pubcEndDt.set_readonly(false);
        		this.chk_pubcEndDtNo.set_enable(true);
        	}
        };

        /**
         * 사용 기간/일 수 값 변경 시
         */
        this.rdo_cpnUsePerdCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnUsePerdCd.value == "10")
        	{
        		// 10 : 고정 기간

        		// 입력 항목 영역
        		//this.cal_cpnUseStrDt.set_value("");
        		//this.cal_cpnUseEndDt.set_value("");
        		//this.edt_usePsbDcnt.set_value("");

        		this.cal_cpnUseStrDt.set_readonly(false);
        		this.cal_cpnUseEndDt.set_readonly(false);
        		this.edt_usePsbDcnt.set_readonly(true);
        	}
        	else if (this.rdo_cpnUsePerdCd.value == "20")
        	{
        		// 20 : 사용 가능 일수

        		// 입력 항목 영역
        		//this.cal_cpnUseStrDt.set_value("");
        		//this.cal_cpnUseEndDt.set_value("");
        		//this.edt_usePsbDcnt.set_value("");

        		this.cal_cpnUseStrDt.set_readonly(true);
        		this.cal_cpnUseEndDt.set_readonly(true);
        		this.edt_usePsbDcnt.set_readonly(false);
        	}
        	else if (this.rdo_cpnUsePerdCd.value == "30")
        	{
        		// 30 : 발행 당월말

        		// 입력 항목 영역
        		//this.cal_cpnUseStrDt.set_value("");
        		//this.cal_cpnUseEndDt.set_value("");
        		//this.edt_usePsbDcnt.set_value("");

        		this.cal_cpnUseStrDt.set_readonly(true);
        		this.cal_cpnUseEndDt.set_readonly(true);
        		this.edt_usePsbDcnt.set_readonly(true);
        	}
        };

        /**
         * 쿠폰 안내 텍스트 입력 시
         */
        this.txt_cpnGudc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "02");
        };

        /**
         * 일괄 등록 버튼 클릭 시
         */
        this.btn_allMbrId_onclick = function(obj,e)
        {

        };

        /**
         * 선택 삭제 버튼 클릭 시
         */
        this.btn_deleteMbrIdD_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_gridCpnPubcUseDtls.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridCpnPubcUseDtls.rowcount; i++)
        		{
        			if(this.ds_gridCpnPubcUseDtls.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_gridCpnPubcUseDtls.deleteMultiRows(aDelArr);

        		var sTotText = "(<b v='true'>총 " + this.ds_gridCpnPubcUseDtls.rowcount + "건</b>)";
        		this.sta_totalCount.set_text(sTotText);

        		this.grd_cpnPubcUseDtls.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 회원 조회 버튼 클릭 시
         */
        this.btn_searchMbrId_onclick = function(obj,e)
        {
        	if ((this.edt_pubcQty.value == "" || this.edt_pubcQty.value == undefined) && this.chk_unlmtPubcYn.value == "N")
        	{
        		alert(this.fn_getMessage("ERRN000016")); // 발행 수량을 먼저 입력하거나 무제한 발행을 먼저 체크하세요.
        		this.edt_pubcQty.setFocus();
        		return
        	}

        	var oArg = { coCd:this.fv_coCd
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
        	              , title : "발행 대상 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_NA_20.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnPubcUseDtls_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_cpnPubcUseDtls.getBindCellIndex("body", "CPN_PUBC_MBR_ID"))
        	{
        		// 회원ID 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var oArg = { coCd : objDs.getColumn(nRow, "CO_CD")
        				   , mbrId : objDs.getColumn(nRow, "CPN_PUBC_MBR_ID")
        				   };

        // 		var oOption = { top : "-1"
        // 					  , left : "-1"
        // 					  , width : "-1"
        // 					  , height : "-1"
        // 					  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        // 					  , layered : "false"
        // 					  , opacity : "100"
        // 					  , autosize : "true"
        // 					  , titlebar : "true"
        // 					  , title : "회원 상세 정보"
        // 					  };

        		//this.gfn_openPopup("btn_mbrDtl", "CC::SSP_BO_MA_15.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        		//this.gfn_openPopup("btn_mbrDtl", "CC::SSP_BO_MA_99.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        		this.gfn_openPopup('btn_mbrDtl', "CC::SSP_BO_CC_T3.xfdl", oArg, "fn_popupCallbackFunction", {titlebar:"true"});
        	}
        };

        /**
         * 적용 대상 구분 값 변경 시
         */
        this.rdo_cpnAplyTgtSprCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnAplyTgtSprCd.value == "10")
        	{
        		// 10 : 전체상품

        		// 적용 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd20.set_enable(false);
        		this.btn_searchCpnAplyTgtPrd20.set_enable(false);
        		this.btn_searchCpnAplyTgtPrdMulText20.set_enable(false);

        		// 적용 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd30.set_enable(false);
        		this.btn_searchCpnAplyTgtPrd30.set_enable(false);
        		this.btn_searchCpnAplyTgtPrdMulText30.set_enable(false);

        		// grid
        		this.grd_cpnAplyTgtPrd20.set_readonly(true);
        		this.grd_cpnAplyTgtPrd30.set_readonly(true);
        	}
        	else if (this.rdo_cpnAplyTgtSprCd.value == "20")
        	{
        		// 20 : 개별 상품

        		// 적용 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd20.set_enable(true);
        		this.btn_searchCpnAplyTgtPrd20.set_enable(true);
        		this.btn_searchCpnAplyTgtPrdMulText20.set_enable(true);

        		// 적용 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd30.set_enable(false);
        		this.btn_searchCpnAplyTgtPrd30.set_enable(false);
        		this.btn_searchCpnAplyTgtPrdMulText30.set_enable(false);

        		// grid
        		this.grd_cpnAplyTgtPrd20.set_readonly(false);
        		this.grd_cpnAplyTgtPrd30.set_readonly(true);
        	}
        	else if (this.rdo_cpnAplyTgtSprCd.value == "30")
        	{
        		// 30 : 상품군

        		// 적용 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd20.set_enable(false);
        		this.btn_searchCpnAplyTgtPrd20.set_enable(false);
        		this.btn_searchCpnAplyTgtPrdMulText20.set_enable(false);

        		// 적용 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnAplyTgtPrd30.set_enable(true);
        		this.btn_searchCpnAplyTgtPrd30.set_enable(true);
        		this.btn_searchCpnAplyTgtPrdMulText30.set_enable(true);

        		// grid
        		this.grd_cpnAplyTgtPrd20.set_readonly(true);
        		this.grd_cpnAplyTgtPrd30.set_readonly(false);
        	}
        };

        /**
         * 선택삭제 버튼 클릭 시
         */
        this.btn_deleteCpnAplyTgtPrd20_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_gridCpnAplyTgtPrd20.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridCpnAplyTgtPrd20.rowcount; i++)
        		{
        			if(this.ds_gridCpnAplyTgtPrd20.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_gridCpnAplyTgtPrd20.deleteMultiRows(aDelArr);

        		this.sta_aplyPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd20.getRowCount() + "건</b>)");

        		this.grd_cpnAplyTgtPrd20.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 상품검색 버튼 클릭 시
         */
        this.btn_searchCpnAplyTgtPrd20_onclick = function(obj,e)
        {
        	var oArg = { coCd:this.fv_coCd, mallSprCd:'0' // 몰구분없이 조회되도록
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
        	              , title : "적용 대상 상품 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 멀티텍스트 버튼 클릭 시
         */
        this.btn_searchCpnAplyTgtPrdMulText20_onclick = function(obj,e)
        {
        	var oArg = { textId : this.btn_searchCpnAplyTgtPrdMulText20
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 선택삭제 버튼 클릭 시
         */
        this.btn_deleteCpnAplyTgtPrd30_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_gridCpnAplyTgtPrd30.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridCpnAplyTgtPrd30.rowcount; i++)
        		{
        			if(this.ds_gridCpnAplyTgtPrd30.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_gridCpnAplyTgtPrd30.deleteMultiRows(aDelArr);

        		this.sta_aplyPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnAplyTgtPrd30.getRowCount() + "건</b>)");

        		this.grd_cpnAplyTgtPrd30.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 상품군검색 버튼 클릭 시
         */
        this.btn_searchCpnAplyTgtPrd30_onclick = function(obj,e)
        {
        	var oArg = { coCd:this.fv_coCd, mallSprCd:'0' // 몰구분없이 조회되도록
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
        	              , title : "상품군 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 멀티텍스트 버튼 클릭 시
         */
        this.btn_searchCpnAplyTgtPrdMulText30_onclick = function(obj,e)
        {
        	var oArg = { textId : this.btn_searchCpnAplyTgtPrdMulText30
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 제외 대상 구분 값 변경 시
         */
        this.rdo_cpnExcptTgtSprCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_cpnExcptTgtSprCd.value == "10")
        	{
        		// 10 : 제외없음

        		// 제외 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd20.set_enable(false);
        		this.btn_searchCpnExcptTgtPrd20.set_enable(false);
        		this.btn_searchCpnExcptTgtPrdMulText20.set_enable(false);

        		// 제외 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd30.set_enable(false);
        		this.btn_searchCpnExcptTgtPrd30.set_enable(false);
        		this.btn_searchCpnExcptTgtPrdMulText30.set_enable(false);

        		// grid
        		this.grd_cpnExcptTgtPrd20.set_readonly(true);
        		this.grd_cpnExcptTgtPrd30.set_readonly(true);
        	}
        	else if (this.rdo_cpnExcptTgtSprCd.value == "20")
        	{
        		// 20 : 개별 상품

        		// 제외 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd20.set_enable(true);
        		this.btn_searchCpnExcptTgtPrd20.set_enable(true);
        		this.btn_searchCpnExcptTgtPrdMulText20.set_enable(true);

        		// 제외 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd30.set_enable(false);
        		this.btn_searchCpnExcptTgtPrd30.set_enable(false);
        		this.btn_searchCpnExcptTgtPrdMulText30.set_enable(false);

        		// grid
        		this.grd_cpnExcptTgtPrd20.set_readonly(false);
        		this.grd_cpnExcptTgtPrd30.set_readonly(true);
        	}
        	else if (this.rdo_cpnExcptTgtSprCd.value == "30")
        	{
        		// 30 : 상품군

        		// 제외 대상 - 선택삭제, 상품검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd20.set_enable(false);
        		this.btn_searchCpnExcptTgtPrd20.set_enable(false);
        		this.btn_searchCpnExcptTgtPrdMulText20.set_enable(false);

        		// 제외 대상 - 선택삭제, 상품군검색, 멀티텍스트
        		this.btn_deleteCpnExcptTgtPrd30.set_enable(true);
        		this.btn_searchCpnExcptTgtPrd30.set_enable(true);
        		this.btn_searchCpnExcptTgtPrdMulText30.set_enable(true);

        		// grid
        		this.grd_cpnExcptTgtPrd20.set_readonly(true);
        		this.grd_cpnExcptTgtPrd30.set_readonly(false);
        	}
        };

        /**
         * 선택삭제 버튼 클릭 시
         */
        this.btn_deleteCpnExcptTgtPrd20_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_gridCpnExcptTgtPrd20.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridCpnExcptTgtPrd20.rowcount; i++)
        		{
        			if(this.ds_gridCpnExcptTgtPrd20.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_gridCpnExcptTgtPrd20.deleteMultiRows(aDelArr);

        		this.sta_excptPrdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd20.getRowCount() + "건</b>)");

        		this.grd_cpnExcptTgtPrd20.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 상품검색 버튼 클릭 시
         */
        this.btn_searchCpnExcptTgtPrd20_onclick = function(obj,e)
        {
        	var oArg = { coCd:this.fv_coCd, mallSprCd:'0' // 몰구분없이 조회되도록
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
        	              , title : "제외 대상 상품 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 멀티텍스트 버튼 클릭 시
         */
        this.btn_searchCpnExcptTgtPrdMulText20_onclick = function(obj,e)
        {
        	var oArg = { textId : this.btn_searchCpnExcptTgtPrdMulText20
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 선택삭제 버튼 클릭 시
         */
        this.btn_deleteCpnExcptTgtPrd30_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_gridCpnExcptTgtPrd30.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridCpnExcptTgtPrd30.rowcount; i++)
        		{
        			if(this.ds_gridCpnExcptTgtPrd30.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_gridCpnExcptTgtPrd30.deleteMultiRows(aDelArr);

        		this.sta_excptPrdClcdTotalCount.set_text("(<b v='true'>총 " + this.ds_gridCpnExcptTgtPrd30.getRowCount() + "건</b>)");

        		this.grd_cpnExcptTgtPrd30.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 상품군검색 버튼 클릭 시
         */
        this.btn_searchCpnExcptTgtPrd30_onclick = function(obj,e)
        {
        	var oArg = { coCd:this.fv_coCd, mallSprCd:'0' // 몰구분없이 조회되도록
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
        	              , title : "상품군 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 멀티텍스트 버튼 클릭 시
         */
        this.btn_searchCpnExcptTgtPrdMulText30_onclick = function(obj,e)
        {
        	var oArg = { textId : this.btn_searchCpnExcptTgtPrdMulText30
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 취소 버튼 클릭 시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if ( confirm(this.fn_getMessage("ERRN000053"))) // 취소하시겠습니까?
        	{
        		var resData = {};
        		var resString = "";

        		resData.RETURN_YN = "N";

        		// json string 변경
        		resString = JSON.stringify(resData);

        		// return
        		this.close(resString);
        	}
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	this.fn_saveCpnInfo();
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 글자 byte 체크 함수
         */
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0)
        	{
        		count = 0;
        	}

        	if(count <= maxByte)
        	{
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "00")
        		{
        			this.sta_cpnNmSize.set_text(expsText);
        		}
        		else if (sGubun == "01")
        		{
        			this.sta_cpnDescSize.set_text(expsText);
        		}
        		else if (sGubun == "02")
        		{
        			this.sta_cpnGudcSize.set_text(expsText);
        		}

        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	//trace(tempVal + " / " + count);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "00")
        	{
        		this.edt_cpnNm.set_value("");
        		this.edt_cpnNm.set_value(tempVal);
        		this.sta_cpnNmSize.set_text(expsText);
        	}
        	else if (sGubun == "01")
        	{
        		this.txt_cpnDesc.set_value("");
        		this.txt_cpnDesc.set_value(tempVal);
        		this.sta_cpnDescSize.set_text(expsText);
        	}
        	else if (sGubun == "02")
        	{
        		this.txt_cpnGudc.set_value("");
        		this.txt_cpnGudc.set_value(tempVal);
        		this.sta_cpnGudcSize.set_text(expsText);
        	}
        };

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			break;

        		case "FORM_INIT" :

        			// 입력 항목 초기화

        			// dataset 영역
        			this.ds_cpnInfo.clearData();
        			var nRow = this.ds_cpnInfo.addRow();

        			this.ds_cpnInfo.setColumn(nRow, "PUBC_END_DT_NO", "N");
        			this.ds_cpnInfo.setColumn(nRow, "UNLMT_PUBC_YN", "N");

        			this.ds_gridCpnPubcUseDtls.clearData();
        			this.ds_gridCpnAplyTgtPrd20.clearData();
        			this.ds_gridCpnAplyTgtPrd30.clearData();
        			this.ds_gridCpnExcptTgtPrd20.clearData();
        			this.ds_gridCpnExcptTgtPrd30.clearData();

        			// 입력 항목 영역
        			this.rdo_cpnKndCd.set_index(0);
        			this.edt_cpnNm.set_value("");
        			this.sta_cpnNmSize.set_text("(<fc v='red'>0</fc> / 50 Byte)");
        			this.txt_cpnDesc.set_value("");
        			this.sta_cpnDescSize.set_text("(<fc v='red'>0</fc> / 2000 Byte)");
        			this.rdo_cpnDcSprCd.set_index(1);
        			this.edt_dcAmtDcrt.set_value("");
        			this.sta_dcAmtDcrtTxt.set_text("%");
        			this.edt_minPurgAmt.set_value("");
        			this.edt_maxDcAmt.set_value("");
        			this.cal_pubcStrDt.set_value("");
        			this.cal_pubcEndDt.set_value("");
        			this.chk_pubcEndDtNo.set_value("N");
        			this.edt_pubcQty.set_value("");
        			this.chk_unlmtPubcYn.set_value("N");
        			this.rdo_cpnPubcMthdCd.set_index(0);
        			//this.rdo_cpnboxExpsYn.set_index(0);
        			this.rdo_cpnUsePerdCd.set_index(0);
        			this.cal_cpnUseStrDt.set_value("");
        			this.cal_cpnUseEndDt.set_value("");
        			this.edt_usePsbDcnt.set_value("");
        			this.txt_cpnGudc.set_value("");
        			this.sta_cpnGudcSize.set_text("(<fc v='red'>0</fc> / 2000 Byte)");
        			this.rdo_cpnAplyTgtSprCd.set_index(0);
        			this.rdo_cpnExcptTgtSprCd.set_index(0);
        			this.rdo_useYn.set_index(1);
        			this.rdo_unlmtCpnYn.set_index(0);

        			// 쿠폰함 노출 여부, 사용 기간/일 수 - 사용 가능 일수 항목 비활성화
        			this.rdo_cpnboxExpsYn.set_enable(false);
        			this.edt_usePsbDcnt.set_readonly(true);

        			// 버튼 영역

        			// 개별 발행 대상 - 일괄 등록, 선택 삭제, 회원 조회
        			this.btn_allMbrId.set_enable(false);
        			this.btn_deleteMbrIdD.set_enable(false);
        			this.btn_searchMbrId.set_enable(false);

        			// 적용 대상 - 선택삭제, 상품검색, 멀티텍스트
        			this.btn_deleteCpnAplyTgtPrd20.set_enable(false);
        			this.btn_searchCpnAplyTgtPrd20.set_enable(false);
        			this.btn_searchCpnAplyTgtPrdMulText20.set_enable(false);

        			// 적용 대상 - 선택삭제, 상품군검색, 멀티텍스트
        			this.btn_deleteCpnAplyTgtPrd30.set_enable(false);
        			this.btn_searchCpnAplyTgtPrd30.set_enable(false);
        			this.btn_searchCpnAplyTgtPrdMulText30.set_enable(false);

        			// 제외 대상 - 선택삭제, 상품검색, 멀티텍스트
        			this.btn_deleteCpnExcptTgtPrd20.set_enable(false);
        			this.btn_searchCpnExcptTgtPrd20.set_enable(false);
        			this.btn_searchCpnExcptTgtPrdMulText20.set_enable(false);

        			// 제외 대상 - 선택삭제, 상품군검색, 멀티텍스트
        			this.btn_deleteCpnExcptTgtPrd30.set_enable(false);
        			this.btn_searchCpnExcptTgtPrd30.set_enable(false);
        			this.btn_searchCpnExcptTgtPrdMulText30.set_enable(false);

        			// 취소, 등록 버튼
        			this.btn_cancel.set_enable(true);
        			this.btn_write.set_enable(true);

        			// grid 영역
        			this.sta_totalCount.set_text("(<b v='true'>총 0건</b>)");

        			this.grd_cpnPubcUseDtls.set_readonly(true);

        			this.grd_cpnAplyTgtPrd20.set_readonly(true);
        			this.grd_cpnAplyTgtPrd30.set_readonly(true);

        			this.grd_cpnExcptTgtPrd20.set_readonly(true);
        			this.grd_cpnExcptTgtPrd30.set_readonly(true);

        			this.grd_cpnPubcUseDtls.nodatatext = "발행 대상이 없습니다.";

        			this.grd_cpnAplyTgtPrd20.nodatatext = "추가한 상품이 없습니다.";
        			this.grd_cpnAplyTgtPrd30.nodatatext = "추가한 상품군이 없습니다.";

        			this.grd_cpnExcptTgtPrd20.nodatatext = "추가한 상품이 없습니다.";
        			this.grd_cpnExcptTgtPrd30.nodatatext = "추가한 상품군이 없습니다.";

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 공통코드 조회
        			this.fn_commonCodeSearch();

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_08_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.rdo_cpnKndCd.addEventHandler("onitemchanged",this.rdo_cpnKndCd_onitemchanged,this);
            this.edt_cpnNm.addEventHandler("onkeyup",this.edt_cpnNm_onkeyup,this);
            this.txt_cpnDesc.addEventHandler("onkeyup",this.txt_cpnDesc_onkeyup,this);
            this.rdo_cpnDcSprCd.addEventHandler("onitemchanged",this.rdo_cpnDcSprCd_onitemchanged,this);
            this.chk_pubcEndDtNo.addEventHandler("onchanged",this.chk_pubcEndDtNo_onchanged,this);
            this.rdo_cpnPubcMthdCd.addEventHandler("onitemchanged",this.rdo_cpnPubcMthdCd_onitemchanged,this);
            this.chk_unlmtPubcYn.addEventHandler("onchanged",this.chk_unlmtPubcYn_onchanged,this);
            this.rdo_cpnUsePerdCd.addEventHandler("onitemchanged",this.rdo_cpnUsePerdCd_onitemchanged,this);
            this.txt_cpnGudc.addEventHandler("onkeyup",this.txt_cpnGudc_onkeyup,this);
            this.grd_cpnPubcUseDtls.addEventHandler("oncellclick",this.grd_cpnPubcUseDtls_oncellclick,this);
            this.btn_deleteMbrIdD.addEventHandler("onclick",this.btn_deleteMbrIdD_onclick,this);
            this.btn_allMbrId.addEventHandler("onclick",this.btn_allMbrId_onclick,this);
            this.btn_searchMbrId.addEventHandler("onclick",this.btn_searchMbrId_onclick,this);
            this.rdo_cpnAplyTgtSprCd.addEventHandler("onitemchanged",this.rdo_cpnAplyTgtSprCd_onitemchanged,this);
            this.grd_cpnAplyTgtPrd20.addEventHandler("oncellclick",this.grid_exhbnCatgPrdDtl_oncellclick,this);
            this.btn_searchCpnAplyTgtPrd20.addEventHandler("onclick",this.btn_searchCpnAplyTgtPrd20_onclick,this);
            this.btn_deleteCpnAplyTgtPrd20.addEventHandler("onclick",this.btn_deleteCpnAplyTgtPrd20_onclick,this);
            this.btn_searchCpnAplyTgtPrdMulText20.addEventHandler("onclick",this.btn_searchCpnAplyTgtPrdMulText20_onclick,this);
            this.grd_cpnAplyTgtPrd30.addEventHandler("oncellclick",this.grid_exhbnCatgPrdDtl_oncellclick,this);
            this.btn_searchCpnAplyTgtPrd30.addEventHandler("onclick",this.btn_searchCpnAplyTgtPrd30_onclick,this);
            this.btn_searchCpnAplyTgtPrdMulText30.addEventHandler("onclick",this.btn_searchCpnAplyTgtPrdMulText30_onclick,this);
            this.btn_deleteCpnAplyTgtPrd30.addEventHandler("onclick",this.btn_deleteCpnAplyTgtPrd30_onclick,this);
            this.rdo_cpnExcptTgtSprCd.addEventHandler("onitemchanged",this.rdo_cpnExcptTgtSprCd_onitemchanged,this);
            this.grd_cpnExcptTgtPrd20.addEventHandler("oncellclick",this.grid_exhbnCatgPrdDtl_oncellclick,this);
            this.btn_searchCpnExcptTgtPrd20.addEventHandler("onclick",this.btn_searchCpnExcptTgtPrd20_onclick,this);
            this.btn_deleteCpnExcptTgtPrd20.addEventHandler("onclick",this.btn_deleteCpnExcptTgtPrd20_onclick,this);
            this.btn_searchCpnExcptTgtPrdMulText20.addEventHandler("onclick",this.btn_searchCpnExcptTgtPrdMulText20_onclick,this);
            this.grd_cpnExcptTgtPrd30.addEventHandler("oncellclick",this.grid_exhbnCatgPrdDtl_oncellclick,this);
            this.btn_searchCpnExcptTgtPrd30.addEventHandler("onclick",this.btn_searchCpnExcptTgtPrd30_onclick,this);
            this.btn_searchCpnExcptTgtPrdMulText30.addEventHandler("onclick",this.btn_searchCpnExcptTgtPrdMulText30_onclick,this);
            this.btn_deleteCpnExcptTgtPrd30.addEventHandler("onclick",this.btn_deleteCpnExcptTgtPrd30_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
