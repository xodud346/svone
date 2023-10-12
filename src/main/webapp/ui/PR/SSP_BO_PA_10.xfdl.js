(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_10");
            this.set_titletext("신규상품요청 상세/등록처리");
            this.getSetter("uVScrollPos").set("0");
            this.getSetter("uHeight").set("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ONLY_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RVW_REQ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RVW_REQ_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RVW_REQ_RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"RVW_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLCD_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_DUP_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_END_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NMASPRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UNIT_QTY_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PI_REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_FST\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_FST_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_HPE_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_HPE_SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"RND_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"OPRUNIT_SALS_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRUNIT_SALS_CHRPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selOptnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdRegDisTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rvwReqCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdAttr", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroClPrdChrpsn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RP_MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_atflList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"256\"/><Column id=\"BO_DOC_REG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATFL_NM\">첨부 파일 테스트 길이 01</Col></Row><Row><Col id=\"ATFL_NM\">첨부 파일 02</Col></Row><Row><Col id=\"ATFL_NM\">첨부 03</Col></Row><Row><Col id=\"ATFL_NM\">첨부 파일 테스트 04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdRegDisTpNm", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_REG_DIS_TP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0",null,"570","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","78",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65","20","109",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02","20","78","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10","20","109","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66","849","109","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","140",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00","849","140","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","140","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","171",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","849","171","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","20","171","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","202",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00","849","202","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00","20","202","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","20","232",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00","20","232","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60_00","18","13","147","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_text("신규상품요청 상세");
            obj.set_cssclass("sta_WF_title04");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","46","147","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("■ 요청 상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00","439","109","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","20","294",null,"108","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00_00","20","294","130","108",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer0","160","298","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_01","20","263",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00_01","20","263","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","456",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","487",null,"32","20",null,"1296",null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","456","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_00","20","487","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_01","849","487","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","439","456","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_text("요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","18","424","147","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("■ 요청 고객 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00_00","439","487","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_atflLink","160","267","1147","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_scrollbartype("indicator none");
            obj.set_scrolltype("horizontal");
            obj.set_scrolldisplaymode("normal");
            obj.set_selectscrollmode("scroll");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_binddataset("ds_selOptnCd");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"1\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"2\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"3\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"4\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdNmEqlCmpr","165","210","95","15",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("화학물질여부");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdNmEqlCmpr00","265","210","70","15",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("전용상품");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer1","270","298","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer2","380","298","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer3","490","298","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer4","600","298","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00","160","82","100","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_00","264","82","575","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01","579","113","73","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_00","656","113","183","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01","989","113","73","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_00_00","1066","113","239","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_02","160","175","100","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_tooltiptext("기본단위코드");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_00_00","264","175","575","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_03","160","113","269","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_03_00","160","144","679","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01_00","989","144","316","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01_00_00","989","175","316","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01_00_00_00","989","205","316","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04","160","460","269","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","849","456","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업팀 담당자");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_00","579","460","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01","160","491","73","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01_00","237","491","192","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01_01","580","491","73","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01_00_00","657","491","182","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01_01_00","989","491","98","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_value("PM00000001");
            obj.set_text("PM00000001");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_04_01_00_00_00","1091","491","214","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01_00_00_00_00","160","236","1145","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitSalsId","989","460","98","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_value("PM00000001");
            obj.set_text("PM00000001");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitSalsNm","1091","460","214","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_receipt",null,"529","96","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("접수");
            this.addChild(obj.name, obj);

            obj = new Div("div_prdRegReqProc","0","576",null,"353","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","585","85","731","32",null,null,"1296",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static03","20","24","1296","32",null,null,"1296",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","584","147","732","32",null,null,"732",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65","20","55","1296","32",null,null,"1296",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static02","20","24","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"상품명<fc v=\'red\'> *</fc>\"");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"카테고리<fc v=\'red\'> *</fc>\"");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static66","849","55","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("26");
            obj.set_text("선정방식");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","86",null,"153","751",null,"1296",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","86","130","153",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"규격\" + (comp.parent.parent.parent.ds_prdAttr.getCaseCount(\"MAND_YN == \'Y\'\") > 0 ? \"<fc v=\'red\'> *</fc>\" : \"\")");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","584","116","732","32",null,null,"732",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","584","208","732","31",null,null,"732",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static04_00","849","24","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_expr("\"공용전용구분<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","140","30",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("32");
            obj.set_text("■ 상품등록요청 처리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","Static02:10","28","554","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_text("R00000001,R00000001,");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_clRcmdInqrPop","718","28","121","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("33");
            obj.set_text("카테고리추천&조회");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySprCd","Static04_00:10","28","316","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_color("black");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","Static10:129","59","91","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("3");
            obj.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_prdClnm","Static10:224","59","340","25",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("4");
            obj.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_prdClPop","690","59","24","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_visible("false");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_rndHstPop","718","59","121","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("34");
            obj.set_text("R&D이관이력");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00_00_00","584","86","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("35");
            obj.set_text("S-MRO카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("sta_basisUnit","584","116","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"주문단위<fc v=\'red\'> *</fc>\"");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new MaskEdit("msk_basisUnitQty","sta_basisUnit:10","120","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("7");
            obj.set_color("black");
            obj.set_maskchar(",");
            obj.set_format("##,###");
            obj.set_limitbymask("integer");
            obj.set_tooltiptext("기본단위수량");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm","sta_basisUnit:87","120","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("8");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_tooltiptext("기본단위코드");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","sta_basisUnit:317","121","51","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("9");
            obj.set_color("black");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_value("이 것은 데이터 정합성 점검을 위한 것임.");
            obj.set_text("이 것은 데이터 정합성 점검을 위한 것임.");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_basisUnitPop","878","120","24","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static59","907","121","9","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("37");
            obj.set_text("/");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitNm","sta_basisUnit:203","120","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("11");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_tooltiptext("판매단위코드");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_sellUnitPop","994","120","24","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static66_00","584","207","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("38");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00_00_00_00_00","584","147","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("39");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"제조원<fc v=\'red\'> *</fc>\"");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","Static66_00_00_00_00_01_00_00_00_00_00:10","151","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("14");
            obj.set_value("A1498883");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_text("A1498883");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","Static66_00_00_00_00_01_00_00_00_00_00:87","151","189","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPop","994","151","24","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Grid("grd_prdAttr","Static10_01:10","90","414","145",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("6");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none indicator");
            obj.set_binddataset("ds_prdAttr");
            obj.set_color("black");
            obj.set_useselcolor("true");
            obj.set_selectscrollmode("scroll");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"147\"/><Column size=\"266\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"속성명\" color=\"black\"/><Cell col=\"1\" text=\"속성값\" color=\"black\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" background=\"#ebebee\" color=\"black\" expr=\"ATTR_NM + (MAND_YN == &quot;Y&quot; ? &quot;&lt;fc v=&apos;red&apos;&gt; *&lt;/fc&gt;&quot; : &quot;&quot;)\"/><Cell col=\"1\" text=\"bind:PRVL\" displaytype=\"text\" edittype=\"text\" color=\"black\"/></Band></Format></Formats>");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_regReqCrt",null,"312","96","28","20",null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("21");
            obj.set_text("등록요청생성");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Combo("cmb_prdClcdSpr","160","59","115","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            var div_prdRegReqProc_form_cmb_prdClcdSpr_innerdataset = new nexacro.NormalDataset("div_prdRegReqProc_form_cmb_prdClcdSpr_innerdataset", obj);
            div_prdRegReqProc_form_cmb_prdClcdSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">SSP카테고리</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">R&amp;D카테고리</Col></Row></Rows>");
            obj.set_innerdataset(div_prdRegReqProc_form_cmb_prdClcdSpr_innerdataset);
            obj.set_text("SSP카테고리");
            obj.set_value("10");
            obj.set_index("0");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_01","584","177","732","32",null,null,"732",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","584","177","130","32",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("40");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_expr("\"원산지<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCd","Static66_00_00:10","181","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("17");
            obj.set_value("1234567890");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_text("1234567890");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryNm","Static66_00_00:87","181","189","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_orgplcCtryPop","994","181","24","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","168","-8","346","30",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("44");
            obj.set_text("(요청상품이 R&D상품인 경우에는 카테고리만 선택해 주세요)");
            obj.set_color("black");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","1091","121","51","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("12");
            obj.set_color("black");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_value("이 것은 수량이 1 이면 필수가 아님");
            obj.set_text("이 것은 수량이 1 이면 필수가 아님");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00","724","89","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("45");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_00","801","89","504","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("46");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01","724","211","73","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("47");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_00_00","801","211","189","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("48");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_02","989","59","316","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("49");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","238",null,"64","20",null,"1296",null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("Static10_00","20","238","130","64",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("51");
            obj.set_text("S-MRO 전달메모");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new TextArea("txt_mroSndMemo","160","242","1091","56",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("20");
            obj.set_color("black");
            obj.set_maxlength("0");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Static("sta_mroSndMemo","1250","273","66","24",null,null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("52");
            obj.set_text("0/500");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Button("btn_saveTemp",null,"312","96","28","120",null,null,null,null,null,this.div_prdRegReqProc.form);
            obj.set_taborder("53");
            obj.set_text("임시저장");
            this.div_prdRegReqProc.addChild(obj.name, obj);

            obj = new Div("div_smroProcInfo","0","1271",null,"132","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","24",null,"32","20",null,"1296",null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static65","20","55",null,"32","20",null,"1296",null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static02","20","24","130","32",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("2");
            obj.set_text("S-MRO 요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","32",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("3");
            obj.set_text("예외종료사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","86",null,"33","20",null,"1296",null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","86","130","32",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("5");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00","849","24","130","32",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("6");
            obj.set_text("중복상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","136","30",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("7");
            obj.set_text("■ S-MRO 처리정보");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Static("Static02_00","449","24","130","32",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("8");
            obj.set_text("최종처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01","160","28","279","24",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("9");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_00","589","28","250","24",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("10");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_00_00","989","28","316","24",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("11");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01","160","59","1145","24",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("12");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm00_01_01_00","160","90","279","24",null,null,null,null,null,null,this.div_smroProcInfo.form);
            obj.set_taborder("13");
            obj.set_color("black");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_smroProcInfo.addChild(obj.name, obj);

            obj = new Div("div_regDisProc","0","1480",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","23",null,"33","20",null,"1296",null,null,null,this.div_regDisProc.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static65","20","55",null,"64","20",null,"1296",null,null,null,this.div_regDisProc.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static02","20","23","130","32",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("5");
            obj.set_text("등록불가유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_expr("\"등록불가유형<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","64",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("6");
            obj.set_text("상세사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_expr("\"상세사유<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","131","30",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("7");
            obj.set_text("■ 등록불가 처리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Combo("cmb_prdRegDisTpCd","Static02:10","28","279","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_prdRegDisTpCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_color("black");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new TextArea("txt_regDisRsn","Static10:10","59","1091","56",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("1");
            obj.set_color("black");
            obj.set_maxlength("0");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Button("btn_regDisProc",null,"129","96","28","20",null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("2");
            obj.set_text("등록불가처리");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("sta_regDisRsn","1250","90","66","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("8");
            obj.set_text("0/500");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","18","119","454","30",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("9");
            obj.set_text("등록불가유형 및 상세사유는 고객에게 노출 되오니 신중하게 작성하시기 바랍니다.");
            obj.set_color("black");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Div("div_prdPrpsDupProc","0","1651",null,"229","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","24",null,"32","20",null,"1296",null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static65","20","55",null,"32","20",null,"1296",null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static02","20","24","130","32",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("9");
            obj.set_text("제안구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_expr("\"제안구분<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","32",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("10");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"상품ID<fc v=\'red\'> *</fc>\"");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","86",null,"33","20",null,"1296",null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("sta_altPrpsRsn","20","86","130","32",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"대체제안사유\" + (comp.text == \"10\" ? \"<fc v=\'red\'> *</fc>\" : \"\")");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static04_00","849","24","130","32",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("13");
            obj.set_text("제안여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","202","30",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("14");
            obj.set_text("■ 대표상품제안•중복상품처리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_02_00_00","980","30","336","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("15");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00_00_00_00","849","55","130","32",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("16");
            obj.set_text("제안상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_02_00_00_00","980","60","336","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("17");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Radio("rdo_prdPrpsSprCd","Static02:10","33","189","15",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_prdPrpsDupProc_form_rdo_prdPrpsSprCd_innerdataset = new nexacro.NormalDataset("div_prdPrpsDupProc_form_rdo_prdPrpsSprCd_innerdataset", obj);
            div_prdPrpsDupProc_form_rdo_prdPrpsSprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">대표상품제안</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">중복상품처리</Col></Row></Rows>");
            obj.set_innerdataset(div_prdPrpsDupProc_form_rdo_prdPrpsSprCd_innerdataset);
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","Static10:10","59","146","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("1");
            obj.set_value("1234567890");
            obj.set_color("black");
            obj.set_text("1234567890");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","Static10:160","59","310","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("2");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Button("btn_prdPop","624","59","24","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Edit("edt_altPrpsRsn","sta_altPrpsRsn:10","90","1145","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","117",null,"64","20",null,"1296",null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Static("Static10_00","20","117","130","64",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("19");
            obj.set_text("고객 합의/거부 사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","160","121","1145","56",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("5");
            obj.set_color("black");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Button("btn_prpsDupProc",null,"191","96","28","20",null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("6");
            obj.set_text("제안•중복처리");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new Edit("edt_selMthdCd","683","59","31","24",null,null,null,null,null,null,this.div_prdPrpsDupProc.form);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.div_prdPrpsDupProc.addChild(obj.name, obj);

            obj = new WebBrowser("web_download","1350","164","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_rndProcInfo","0","1411",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","24",null,"32","20",null,"1296",null,null,null,this.div_rndProcInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_rndProcInfo.addChild(obj.name, obj);

            obj = new Static("Static02","20","24","130","32",null,null,null,null,null,null,this.div_rndProcInfo.form);
            obj.set_taborder("1");
            obj.set_text("최종처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            this.div_rndProcInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","136","30",null,null,null,null,null,null,this.div_rndProcInfo.form);
            obj.set_taborder("2");
            obj.set_text("■ R&D 처리정보");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_rndProcInfo.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_02","150","29","1166","24",null,null,null,null,null,null,this.div_rndProcInfo.form);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_color("black");
            this.div_rndProcInfo.addChild(obj.name, obj);

            obj = new Div("div_mdRvwRqst","0","1100",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","23",null,"33","668",null,"1296",null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static65","20","55",null,"64","668",null,"1296",null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static02","20","23","130","33",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("6");
            obj.set_text("검토 요청 유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_expr("\"검토 요청 유형<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","64",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("7");
            obj.set_text("검토 요청 내용");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","131","30",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("8");
            obj.set_text("■ MD검토 요청");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Combo("cmb_rvwRqstTp","Static02:10","27","279","24",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_rvwReqCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_color("black");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new TextArea("txt_rvwRqstCts","160","59","443","56",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("1");
            obj.set_color("black");
            obj.set_maxlength("0");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Button("btn_mdRvw",null,"129","96","28","20",null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("3");
            obj.set_expr("comp.parent.parent.parent.ds_detail.getColumn(0, \"RVW_REQ_STATS_CD\") == \'01\' ? \"MD검토완료\" : \"MD검토요청\"");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("sta_rvwRqstCts","603","90","66","24",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("9");
            obj.set_text("0/500");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static02_00","667","23","130","96",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"MD 검토 결과\" + (comp.parent.parent.parent.ds_detail.getColumn(0, \"RVW_REQ_STATS_CD\") == \"01\" ? \"<fc v=\'red\'> *</fc>\" : \"\")");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("Static03_00","796","23",null,"96","20",null,"1296",null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new TextArea("txt_mdRvwCts","Static02_00:10","27","443","88",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("2");
            obj.set_color("black");
            obj.set_maxlength("0");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Static("sta_mdRvwCts","1250","90","66","24",null,null,null,null,null,null,this.div_mdRvwRqst.form);
            obj.set_taborder("11");
            obj.set_text("0/500");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_mdRvwRqst.addChild(obj.name, obj);

            obj = new Div("div_memo","0","930",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","25",null,"64","20",null,"1296",null,null,null,this.div_memo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_memo.addChild(obj.name, obj);

            obj = new Static("Static10","20","25","130","64",null,null,null,null,null,null,this.div_memo.form);
            obj.set_taborder("2");
            obj.set_text("메모 내용");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_usedecorate("true");
            obj.set_expr("\"메모 내용<fc v=\'red\'> *</fc>\"");
            this.div_memo.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","18","-8","131","30",null,null,null,null,null,null,this.div_memo.form);
            obj.set_taborder("3");
            obj.set_text("■ 처리 메모");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("black");
            this.div_memo.addChild(obj.name, obj);

            obj = new Button("btn_regMemo",null,"99","96","28","20",null,null,null,null,null,this.div_memo.form);
            obj.set_taborder("0");
            obj.set_text("메모 저장");
            this.div_memo.addChild(obj.name, obj);

            obj = new Static("sta_memoCts","1250","60","66","24",null,null,null,null,null,null,this.div_memo.form);
            obj.set_taborder("4");
            obj.set_text("0/500");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_memo.addChild(obj.name, obj);

            obj = new TextArea("txt_memoCts","155","28","1091","56",null,null,null,null,null,null,this.div_memo.form);
            obj.set_taborder("5");
            obj.set_color("black");
            obj.set_maxlength("0");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_memo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,1940,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item25","div_main.form.chk_prdNmEqlCmpr","value","ds_detail","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_main.form.chk_prdNmEqlCmpr00","value","ds_detail","ONLY_SPR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_prdRegReqProc.form.edt_prdNm","value","ds_detail","RP_REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_prdRegReqProc.form.cmb_pubOnlySprCd","value","ds_detail","RP_PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_prdRegReqProc.form.edt_prdClcd","value","ds_detail","RP_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_prdRegReqProc.form.edt_prdClnm","value","ds_detail","RP_PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_prdRegReqProc.form.msk_basisUnitQty","value","ds_detail","RP_BASIS_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_prdRegReqProc.form.edt_basisUnitNm","value","ds_detail","RP_BASIS_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_prdRegReqProc.form.edt_sellUnitNm","value","ds_detail","RP_SELL_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_prdRegReqProc.form.edt_mnfrNo","value","ds_detail","RP_MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_prdRegReqProc.form.edt_mnfrNm","value","ds_detail","RP_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_prdRegReqProc.form.edt_orgplcCtryCd","value","ds_detail","RP_ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_prdRegReqProc.form.edt_orgplcCtryNm","value","ds_detail","RP_ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_regDisProc.form.cmb_prdRegDisTpCd","value","ds_detail","PRD_REG_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_prdPrpsDupProc.form.edt_prdId","value","ds_detail","PRPS_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_prdPrpsDupProc.form.edt_prdNm","value","ds_detail","PRPS_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_prdPrpsDupProc.form.edt_altPrpsRsn","value","ds_detail","ALT_PRPS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_regDisProc.form.txt_regDisRsn","value","ds_detail","REG_DIS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_prdPrpsDupProc.form.rdo_prdPrpsSprCd","value","ds_detail","PRD_PRPS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_prdPrpsDupProc.form.Static00_01_01_02_00_00","text","ds_detail","PRD_PRPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_prdPrpsDupProc.form.Static00_01_01_02_00_00_00","text","ds_detail","PRD_PRPS_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_prdPrpsDupProc.form.TextArea00","value","ds_detail","CUST_RJT_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_prdRegReqProc.form.edt_basisUnitCd","value","ds_detail","RP_BASIS_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_prdPrpsDupProc.form.sta_altPrpsRsn","text","ds_detail","PRD_PRPS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_prdRegReqProc.form.Static10_01","text","ds_prdAttr","ATTR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_prdRegReqProc.form.edt_sellUnitCd","value","ds_detail","RP_SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_rndProcInfo.form.Static00_01_01_02","text","ds_detail","RND_PROC_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_prdRegReqProc.form.edt_basisUnitNm00","value","ds_detail","RP_MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_prdRegReqProc.form.edt_basisUnitNm00_00","value","ds_detail","RP_MRO_PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_prdRegReqProc.form.edt_basisUnitNm00_01","value","ds_detail","RP_PRD_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_prdRegReqProc.form.edt_basisUnitNm00_00_00","value","ds_detail","RP_PRD_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_basisUnitNm00","value","ds_detail","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.edt_basisUnitNm00_00","value","ds_detail","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_basisUnitNm00_01","value","ds_detail","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.edt_basisUnitNm00_01_00","value","ds_detail","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.edt_basisUnitNm00_01_01","value","ds_detail","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.edt_basisUnitNm00_01_00_00","value","ds_detail","ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.edt_basisUnitNm00_02","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.edt_basisUnitNm00_00_00","value","ds_detail","PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.edt_basisUnitNm00_03","value","ds_detail","REPR_PRD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.edt_basisUnitNm00_03_00","value","ds_detail","REQ_PRVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.edt_basisUnitNm00_01_01_00","value","ds_detail","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.edt_basisUnitNm00_01_01_00_00","value","ds_detail","HPE_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.edt_basisUnitNm00_01_01_00_00_00","value","ds_detail","PUB_ONLY_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.edt_basisUnitNm00_04","value","ds_detail","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.edt_basisUnitNm00_04_00","value","ds_detail","REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.edt_basisUnitNm00_04_01","value","ds_detail","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.edt_basisUnitNm00_04_01_00","value","ds_detail","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.edt_basisUnitNm00_04_01_01","value","ds_detail","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.edt_basisUnitNm00_04_01_00_00","value","ds_detail","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.edt_basisUnitNm00_04_01_01_00","value","ds_detail","REQPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.edt_basisUnitNm00_04_01_00_00_00","value","ds_detail","REQPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_prdRegReqProc.form.edt_basisUnitNm00_02","value","ds_detail","RP_SEL_MTHD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_smroProcInfo.form.edt_basisUnitNm00_01","value","ds_detail","MRO_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_smroProcInfo.form.edt_basisUnitNm00_01_00","value","ds_detail","MRO_PROC_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_smroProcInfo.form.edt_basisUnitNm00_01_00_00","value","ds_detail","MRO_DUP_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_smroProcInfo.form.edt_basisUnitNm00_01_01","value","ds_detail","EXCEPT_END_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_smroProcInfo.form.edt_basisUnitNm00_01_01_00","value","ds_detail","MRO_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_prdRegReqProc.form.cmb_prdClcdSpr","value","ds_detail","RP_MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.edt_basisUnitNm00_01_01_00_00_00_00","value","ds_detail","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_prdRegReqProc.form.txt_mroSndMemo","value","ds_detail","RP_MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_mdRvwRqst.form.cmb_rvwRqstTp","value","ds_detail","RVW_REQ_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_mdRvwRqst.form.txt_rvwRqstCts","value","ds_detail","RVW_REQ_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_mdRvwRqst.form.txt_mdRvwCts","value","ds_detail","RVW_REQ_RSLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_mdRvwRqst.form.btn_mdRvw","text","ds_detail","RVW_REQ_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_mdRvwRqst.form.Static02_00","text","ds_detail","RVW_REQ_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_memo.form.txt_memoCts","value","ds_detail","MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_main.form.edt_oprUnitSalsId","value","ds_detail","OPRUNIT_SALS_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_main.form.edt_oprUnitSalsNm","value","ds_detail","OPRUNIT_SALS_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_10.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.return = {isProcessed : false};  // 데이터 처리 여부
         //2022.10.28
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();

        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_init();
            this.fn_commonCodeSearch();	//공통코드조회
        };

        this.fn_onkeyup = function(obj,e){
        	if( e.keycode == 27) {  // ESC
        		this.close(JSON.stringify(this.return));
        		return;
        	}

        	if( e.keycode == 13) {
        		var value = this.gfn_allTrim(e.fromobject.value);
        		if(value != -1 && this.gfn_lengthByte(value) > 0) {
        		    // 카테고리
        			if(e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClcd.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClnm.id) {
        			    //this.ds_popupSearch.setColumn(0, "MALL_SPR_CD", this.div_prdRegReqProc.form.cmb_prdClcdSpr.value);
        				//this.ds_popupSearch.setColumn(0, "PRD_CLCD"   , e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClcd.id ? value : "");
        				//this.ds_popupSearch.setColumn(0, "PRD_CLSF_NM", e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClnm.id ? value : "");
        				//this.fn_popupSearch(e.fromobject.id, "ds_list", "/pr/prd-popup/select-category-popup-list.do");
        			// 제조원
        			} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNo.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNm.id) {
        				this.ds_popupSearch.setColumn(0, "MNFR_NO", e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNo.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "MNFR_NM", e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "manufacturerList", "/pr/prd-popup/select-manufacturer-popup-list.do");
        			// 원산지
        			} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryCd.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryNm.id) {
        				this.ds_popupSearch.setColumn(0, "CTRY_SPR_CD", e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryCd.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "CTRY_NM"    , e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/pr/prd-popup/select-ctry-popup-list.do");
        			// 주문단위
        			} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_basisUnitNm.id) {
        				this.ds_popupSearch.setColumn(0, "UNIT_CD", value);
        				this.ds_popupSearch.setColumn(0, "UNIT_NM", ""   );
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-odr-unt-popup-list.do");
        			// 주문단위
        			} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_sellUnitNm.id) {
        				this.ds_popupSearch.setColumn(0, "UNIT_CD", value);
        				this.ds_popupSearch.setColumn(0, "UNIT_NM", ""   );
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-odr-unt-popup-list.do");
        			// 상품ID
        			} else if(e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdId.id || e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdNm.id) {
        			if(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == undefined  ) {
        				alert('제안구분을 먼저 선택해 주세요');
        				return ;
        			}
        				this.ds_popupSearch.setColumn(0, "PRD_ID", e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdId.id ? value.padStart(18, '0') : "");
        				this.ds_popupSearch.setColumn(0, "PRD_NM", e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdNm.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "REPR_PRD_YN", "Y");  // 대표상품제안시 대표상태 확인
                        this.ds_popupSearch.setColumn(0, "DISP_STATS_YN"  , "Y");  // 진열상태


        				this.fn_popupSearch(e.fromobject.id, "ds_list", "/pr/prd-popup/select-product-popup-list-for-dup-proc.do");
        			}
        		}
        	}
        }
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (pgNo){
            var sSvcId = this.id;
            var sUrl   = "/pr/prdNew/select-new-product-req-detail.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_detail=ds_detail ds_prdAttr=ds_prdAttr ds_atflList=ds_atflList";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_update = function (msgId, flag) {
        	if(!flag) { return; }

        	// 신규상품요청처리상태 설정
        	if(msgId == this.btn_receipt.id) {  // 접수 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD", "25");  // 접수
        	} else if(msgId == this.div_prdRegReqProc.form.btn_regReqCrt.id) {  // 등록요청생성 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD", "26");  // 처리중
        	} else if(msgId == this.div_regDisProc.form.btn_regDisProc.id) {  // 등록불가처리 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD", "42");  // 등록불가
        	} else if(msgId == this.div_prdPrpsDupProc.form.btn_prpsDupProc.id) {  // 제안•중복처리 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD", (this.ds_detail.getColumn(0, "PRD_PRPS_SPR_CD") == "10" ? "30" : "56"));  // 30:대표상품제안/56:중복상품처리
        	} else if(msgId == this.div_mdRvwRqst.form.btn_mdRvw.id) {  // MD검토요청(완료) 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD"    , "MD");  // MD:MD검토요청(완료) 처리(처리상태 미생성)
        		this.ds_detail.setColumn(0, "RVW_REQ_STATS_CD",  this.div_mdRvwRqst.form.btn_mdRvw.getDisplayText().indexOf("요청") != -1 ? "01" : "02" );           // 검토요청상태코드(01:MD검토요청, 02:MD검토완료)
        		this.ds_detail.setColumn(0, "SEQ"             ,  this.ds_detail.getColumn(0, "RVW_REQ_STATS_CD") == "01" ? '' : this.ds_detail.getColumn(0, "SEQ"));  // 검토요청시는 신규로 생성
        	} else if(msgId == this.div_memo.form.btn_regMemo.id) {
        		this.ds_detail.setColumn(0,"REQ_STATS_CD", "MEMO");
        	} else if (msgId == this.div_prdRegReqProc.form.btn_saveTemp.id) { // 임시저장 버튼
        		this.ds_detail.setColumn(0, "REQ_STATS_CD", "TEMP");
        	}

            this.rsltMsg = "";
            var sSvcId = msgId;
            var sUrl   = "/pr/prdNew/update-new-prd-req-proc.do";
            var inDs   = "ds_detail=ds_detail ds_prdAttr=ds_prdAttr ds_prdRegDisTpNm=ds_prdRegDisTpNm"; //ds_prdRegDisTpNm(등록불가유형 text 전송 dataset 파라미터 추가
            var outDs  = "";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
            var sSvcId = this.div_prdRegReqProc.form.cmb_pubOnlySprCd.id;
            var sUrl   = "/co/select-common-code-list.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_pubOnlySprCd=ds_output1 ds_prdRegDisTpCd=ds_output2 ds_rvwReqCd=ds_output3";
            var arg    = "";

            this.ds_search.setColumn(0, "CODE_LIST", "PUB_ONLY_SPR_CD,PRD_REG_DIS_TP_CD,RVW_REQ_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, outDs, url){
        	var sSvcId = svcId;
        	var sUrl   = url;
        	var inDs   = "ds_search=ds_popupSearch";
        	var outDs  = "ds_popupList=" + outDs;
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // S-MRO 카테고리 및 상품 담당자 조회
        this.fn_mroClPrdChrpsn = function (){
        	var sSvcId = this.div_prdRegReqProc.form.grd_prdAttr.id;
        	var sUrl   = "/pr/prdNew/select-mro-cl-prd-chrpsn.do";
        	var inDs   = "ds_search=ds_detail";
        	var outDs  = "ds_mroClPrdChrpsn=ds_mroClPrdChrpsn ds_prdAttr=ds_prdAttr";
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 서비스 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        	    // 조회
                case this.id :
        			// 화면양식처리
        		    this.fn_setMode();

        			// TextArea 문자 수 제어
        			this.TextArea_oninput(this.div_prdRegReqProc.form.txt_mroSndMemo);  // S-MRO 전달메모(■ 상품등록요청 처리)
        			this.TextArea_oninput(this.div_regDisProc.form.txt_regDisRsn    );  // 상세사유(■ 등록불가 처리)
        			this.TextArea_oninput(this.div_mdRvwRqst.form.txt_rvwRqstCts    );  // 검토 요청 내용(■ MD검토 요청)
        			this.TextArea_oninput(this.div_mdRvwRqst.form.txt_mdRvwCts      );  // MD 검토 결과(■ MD검토 요청)
        			this.TextArea_oninput(this.div_memo.form.txt_memoCts      );  // 메모요청
        			// ■ 대표상품제안•중복상품처리 제안구분

        		    this.div_prdPrpsDupProc_rdo_prdPrpsSprCd_onitemchanged(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd);

        			// 첨부파일 처리
        			var imgUrl = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP") + "/co/file-download.do?";
        			for(var i = 0, j = 0; i < this.div_main.form.grd_atflLink.getCellCount("Body"); i++) {
        				if(i < this.ds_atflList.rowcount) {
        					this.div_main.form.grd_atflLink.setCellProperty("Body", i, "text", this.ds_atflList.getColumn(i, "ATFL_NM"));
        					// 이미지 뷰어 처리
        					if(this.ds_atflList.getColumn(i, "ETC_FDS_1") == 'C3') {
        						this.div_main.form["img_imageViewer" + j  ].set_image(imgUrl + "docRegId=" + this.ds_atflList.getColumn(i, "BO_DOC_REG_ID") + "&docRegSeq=" + this.ds_atflList.getColumn(i, "DOC_REG_SEQ"));
        						this.div_main.form["img_imageViewer" + j++].set_visible(true);
        					}
        				} else {
        					this.div_main.form.grd_atflLink.setFormatColProperty(i, "size", 0);
        				}
        			}

                    break;

                // 접수
                case this.btn_receipt.id :
        			this.return.isProcessed = true;
        			if(!this.gfn_isNull(this.rsltMsg)) {
        				this.gfn_popMessage("ERRC000000", [this.rsltMsg]); // &1
        			}

        			// 화면양식처리
        		    //this.fn_setMode();
        			this.fn_search();

                    break;

                case this.div_prdRegReqProc.form.btn_regReqCrt.id    :  // 등록요청생성
        		case this.div_regDisProc.form.btn_regDisProc.id      :  // 등록불가처리
        		case this.div_prdPrpsDupProc.form.btn_prpsDupProc.id :  // 제안•중복처리
        		case this.div_mdRvwRqst.form.btn_mdRvw.id            :  // MD검토 요청
        		case this.div_memo.form.btn_regMemo.id				 :	// 메모 등록수정
        		case this.div_prdRegReqProc.form.btn_saveTemp.id	 :  // 임시 저장
        			// 화면종료
        			this.return.isProcessed = true;  // 데이터 처리 여부

        			// 화면양식처리
        			if(!this.gfn_isNull(this.rsltMsg)) {
        				this.gfn_popMessage("ERRC000000", [this.rsltMsg]); // &1
        			}

        			// 조회실행
        			this.fn_search();

                    break;

        		// 공통코드 조회
                case this.div_prdRegReqProc.form.cmb_pubOnlySprCd.id :
        			this.ds_pubOnlySprCd.copyRow (this.ds_pubOnlySprCd.insertRow(0) , this.ds_selOptnCd, 0);  // 선택(공용전용 구분)
        			this.ds_prdRegDisTpCd.copyRow(this.ds_prdRegDisTpCd.insertRow(0), this.ds_selOptnCd, 0);  // 선택(등록불가유형)
        			this.ds_rvwReqCd.copyRow     (this.ds_rvwReqCd.insertRow(0)     , this.ds_selOptnCd, 0);  // 선택(검토요청코드)

                    break;

        		// S-MRO카테고리, 상품담당자, 상품속성 조회
        		case this.div_prdRegReqProc.form.grd_prdAttr.id :
        			for(var i = 0; i < this.ds_mroClPrdChrpsn.getColCount(); i++) {
        				this.ds_detail.setColumn(0, this.ds_mroClPrdChrpsn.getColID(i), this.ds_mroClPrdChrpsn.getColumn(0, i));
        			}

        			// 화면양식처리
        		    this.fn_setMode();

        			break;

        		// 카테고리
        		case this.div_prdRegReqProc.form.edt_prdClcd.id :
        		case this.div_prdRegReqProc.form.edt_prdClnm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_prdRegReqProc.form.edt_prdClcd.set_value(this.ds_popupList.getColumn(0, "PRD_CLCD"));
        				this.div_prdRegReqProc.form.edt_prdClnm.set_value(this.ds_popupList.getColumn(0, "FULL_PRD_CLSF_NM"));

        				// S-MRO 카테고리 및 상품 담당자 조회
        				this.fn_mroClPrdChrpsn();
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdRegReqProc.form.btn_prdClPop.click();
        			}

                    break;

        		// 제조원
        		case this.div_prdRegReqProc.form.edt_mnfrNo.id :
        		case this.div_prdRegReqProc.form.edt_mnfrNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_prdRegReqProc.form.edt_mnfrNo.set_value(this.ds_popupList.getColumn(0, "MNFR_NO"));
        				this.div_prdRegReqProc.form.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0, "MNFR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdRegReqProc.form.btn_mnfrPop.click();
        			}

                    break;

        		// 원산지
        		case this.div_prdRegReqProc.form.edt_orgplcCtryCd.id :
        		case this.div_prdRegReqProc.form.edt_orgplcCtryNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_prdRegReqProc.form.edt_orgplcCtryCd.set_value(this.ds_popupList.getColumn(0, "CTRY_SPR_CD"));
        				this.div_prdRegReqProc.form.edt_orgplcCtryNm.set_value(this.ds_popupList.getColumn(0, "CTRY_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdRegReqProc.form.btn_orgplcCtryPop.click();
        			}

                    break;

        		// 주문단위
        		case this.div_prdRegReqProc.form.edt_basisUnitNm.id :
        			if(this.ds_popupList.getRowCount() == 1 && this.ds_popupList.getColumn(0, "UNIT_CD") != this.ds_detail.getColumn(0, "RP_SELL_UNIT_CD")) {
        				this.div_prdRegReqProc.form.edt_basisUnitCd.set_value(this.ds_popupList.getColumn(0, "UNIT_CD"));
        				this.div_prdRegReqProc.form.edt_basisUnitNm.set_value(this.ds_popupList.getColumn(0, "UNIT_CD"));
        				this.div_prdRegReqProc.form.msk_basisUnitQty.set_value(parseInt(this.div_prdRegReqProc.form.msk_basisUnitQty.value) || 1);  // 기본단위수량
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdRegReqProc.form.btn_basisUnitPop.click();
        			} else {
        				this.div_prdRegReqProc.form.edt_basisUnitCd.set_value("");
        				this.div_prdRegReqProc.form.edt_basisUnitNm.set_value("");
        			}

                    break;

        		// 주문단위
        		case this.div_prdRegReqProc.form.edt_sellUnitNm.id :
        			if(this.ds_popupList.getRowCount() == 1 && this.ds_popupList.getColumn(0, "UNIT_CD") != this.ds_detail.getColumn(0, "RP_BASIS_UNIT_CD")) {
        				this.div_prdRegReqProc.form.edt_sellUnitCd.set_value(this.ds_popupList.getColumn(0, "UNIT_CD"));
        				this.div_prdRegReqProc.form.edt_sellUnitNm.set_value(this.ds_popupList.getColumn(0, "UNIT_CD"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdRegReqProc.form.btn_sellUnitPop.click();
        			} else {
        				this.div_prdRegReqProc.form.edt_sellUnitCd.set_value("");
        				this.div_prdRegReqProc.form.edt_sellUnitNm.set_value("");
        			}

                    break;

        		// 상품ID
        		case this.div_prdPrpsDupProc.form.edt_prdId.id :
        		case this.div_prdPrpsDupProc.form.edt_prdNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_prdPrpsDupProc.form.edt_prdId.set_value(this.ds_popupList.getColumn(0, "PRD_ID").replace(/^0+/g, ""));
        				this.div_prdPrpsDupProc.form.edt_prdNm.set_value(this.ds_popupList.getColumn(0, "PRD_NM"));
        				this.div_prdPrpsDupProc.form.edt_selMthdCd.set_value(this.ds_popupList.getColumn(0, "SEL_MTHD_CD"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_prdPrpsDupProc.form.btn_prdPop.click();
        			}

                    break;
            }
        };

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, args){
            if(!args) {
        		// ------------------------------------------------------------------------------
        		// 팝업에서 종료 버튼(X) 클릭하여 전달 받는 값이 없으면 창 높이가 변경되어 원복함
        		// ------------------------------------------------------------------------------
        		this.set_height(this.uHeight);
        		this.scrollTo(0, this.uVScrollPos);

        		return;
        	}

        	var jsonData = JSON.parse(args);
            switch(svcID) {
        	    // 카테고리추천&조회 버튼
        		case this.div_prdRegReqProc.form.btn_clRcmdInqrPop.id :
        			// R&D 이관시
        			if(jsonData.MALL_SPR_CD == "20") {
        				this.return.isProcessed = true;  // 데이터 처리 여부
        				this.close(JSON.stringify(this.return));
        			} else {
        			    this.div_prdRegReqProc.form.cmb_prdClcdSpr.set_value(jsonData["MALL_SPR_CD"]);  // 몰구분
        				this.div_prdRegReqProc.form.edt_prdClcd.set_value(jsonData["PRD_CLCD"]      );  // 카테고리
        				this.div_prdRegReqProc.form.edt_prdClnm.set_value(jsonData["PRD_CLSF_NM"]   );  // 카테고리명
        				this.div_prdRegReqProc.form.edt_prdNm.set_value  (jsonData["PRNM"]          );  // 상품명
        				//this.div_prdRegReqProc.form.edt_prdClnm.set_value("");                           // 카테고리명
        				//this.div_prdRegReqProc.form.edt_prdClnm.set_value(jsonData["PRD_CLSF_LVL_NM"]);  // 카테고리명

        				// S-MRO카테고리 조회
        				this.fn_mroClPrdChrpsn();
        			}

                    break;

        		// 카테고리 팝업 버튼
        		case this.div_prdRegReqProc.form.btn_prdClPop.id :
        			this.div_prdRegReqProc.form.edt_prdClcd.set_value(jsonData["PRD_CLCD"]   );
        			this.div_prdRegReqProc.form.edt_prdClnm.set_value(jsonData["FULL_PRD_CLSF_NM"]);

        			// S-MRO 카테고리 및 상품 담당자 조회
        			this.fn_mroClPrdChrpsn();

                    break;

        		// 주문단위(기본단위코드)
        		case this.div_prdRegReqProc.form.btn_basisUnitPop.id :
        		    if(jsonData["UNIT_CD"] != this.ds_detail.getColumn(0, "RP_SELL_UNIT_CD")) {
        				this.div_prdRegReqProc.form.edt_basisUnitCd.set_value(jsonData["UNIT_CD"]);
        				this.div_prdRegReqProc.form.edt_basisUnitNm.set_value(jsonData["UNIT_CD"]);
        				this.div_prdRegReqProc.form.msk_basisUnitQty.set_value(parseInt(this.div_prdRegReqProc.form.msk_basisUnitQty.value) || 1);  // 기본단위수량
        			} else {
        				this.div_prdRegReqProc.form.edt_basisUnitCd.set_value("");
        				this.div_prdRegReqProc.form.edt_basisUnitNm.set_value("");
        			}

                    break;

        		// 주문단위(판매단위코드)
        		case this.div_prdRegReqProc.form.btn_sellUnitPop.id :
        			if(jsonData["UNIT_CD"] != this.ds_detail.getColumn(0, "RP_BASIS_UNIT_CD")) {
        				this.div_prdRegReqProc.form.edt_sellUnitCd.set_value(jsonData["UNIT_CD"]);
        				this.div_prdRegReqProc.form.edt_sellUnitNm.set_value(jsonData["UNIT_CD"]);
        			} else {
        				this.div_prdRegReqProc.form.edt_sellUnitCd.set_value("");
        				this.div_prdRegReqProc.form.edt_sellUnitNm.set_value("");
        			}

                    break;

        		// 제조원 팝업
        		case this.div_prdRegReqProc.form.btn_mnfrPop.id :
        			this.div_prdRegReqProc.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        			this.div_prdRegReqProc.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);

                    break;

        		// 원산지 팝업
        		case this.div_prdRegReqProc.form.btn_orgplcCtryPop.id :
        			this.div_prdRegReqProc.form.edt_orgplcCtryCd.set_value(jsonData.CTRY_SPR_CD);
        			this.div_prdRegReqProc.form.edt_orgplcCtryNm.set_value(jsonData.CTRY_NM    );

                    break;

        		// 상품ID 팝업
        		case this.div_prdPrpsDupProc.form.btn_prdPop.id :
        			this.div_prdPrpsDupProc.form.edt_prdId.set_value(jsonData.PRD_ID.replace(/^0+/g, ""));
        			this.div_prdPrpsDupProc.form.edt_prdNm.set_value(jsonData.PRD_NM);
        			this.div_prdPrpsDupProc.form.edt_selMthdCd.set_value(jsonData.SEL_MTHD_CD);

                    break;
            }
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
            // grid 초기 설정
            //this.div_prdRegReqProc.form.grd_prdAttr.uSortFlag       = "false";
            //this.div_prdRegReqProc.form.grd_prdAttr.uServerSortFlag = "false";
            //this.div_prdRegReqProc.form.grd_prdAttr.uSortCallback   = "";
            //this.div_prdRegReqProc.form.grd_prdAttr.uCellSizeType   = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 초기화
        this.fn_init = function() {
        	if(this.parent && this.parent.args) {
        		this.ds_search.setColumn(0, "CO_CD"         , this.parent.args.CO_CD         );
        		this.ds_search.setColumn(0, "NEW_PRD_REQ_NO", this.parent.args.NEW_PRD_REQ_NO);
        		this.div_prdRegReqProc.form.edt_basisUnitCd.set_width(0);  // 주문단위 코드 숨김(데이터 점검용)
        		this.div_prdRegReqProc.form.edt_sellUnitCd.set_width(0);   // 판매단위 코드 숨김(데이터 점검용)
        		this.ds_popupSearch.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000');  // 회사코드

        		// 조회실행
        		this.fn_search();
        	}
        }

        // 처리상태에 따른 화면 양식 표출
        this.fn_setMode = function() {
        	/* 신규상품처리상태코드
        	 * --------------------
        	 * 22 : 요청
             * 25 : 접수
             * 26 : 처리중
             * 27 : 추가정보등록요청
             * 30 : 대표상품제안
             * 32 : 처리대기
             * 33 : R&D이관
             * 34 : R&D재이관
             * 35 : R&D이관반려
             * 42 : 등록불가
             * 52 : 처리완료
             * 56 : 중복상품처리
        	 */

            var status = this.ds_detail.getColumn(0, "REQ_STATS_CD");     // 신규상품요청처리상태
        	var prpsCd = this.ds_detail.getColumn(0, "PRD_PRPS_SPR_CD");  // 상품제안구분코드
        	this.btn_receipt.set_enable(status == '22');  // 접수버튼
        	if(status=='56') {
        		this.ds_detail.setColumn(0,"PRD_PRPS_STATS_NM","중복처리")
        	}
        	// 화면양식표출대상
            var show = { pre : this.div_main
        	           , div : [{ obj     : this.div_prdRegReqProc            // 상품등록요청 처리 DIV
        					    , visible : '22'.indexOf(status) == -1        // 보임여부
        						, enable  : '25,32,35'.indexOf(status) != -1  // 활성화여부
        						}
        						,{ obj     : this.div_memo                // MD검토요청(완료)
        					    , visible : '22'.indexOf(status) == -1        // 보임여부
        						, enable  : '52,56'.indexOf(status) == -1     // 활성화여부
        						}
        					   ,{ obj     : this.div_mdRvwRqst                // MD검토요청(완료)
        					    , visible : '22'.indexOf(status) == -1        // 보임여부
        						, enable  : '52,56'.indexOf(status) == -1     // 활성화여부
        						}
        					   ,{ obj     : this.div_smroProcInfo             // S-MRO 처리정보
        					    , visible : !this.gfn_isNull(this.ds_detail.getColumn(0, "MRO_PROC_STATS_NM")) // 보임여부
        						, enable  : true                              // 활성화여부
        						}
        					   ,{ obj     : this.div_rndProcInfo              // R&D 처리정보
        					    , visible : !this.gfn_isNull(this.ds_detail.getColumn(0, "RND_PROC_STATS_NM")) // 보임여부
        						, enable  : true                              // 활성화여부
        						}
        					   ,{ obj     : this.div_regDisProc               // 등록불가 처리
        					    , visible : '22'.indexOf(status) == -1        // 보임여부
        						, enable  : '25,32,35'.indexOf(status) != -1  // 활성화여부
        						}
        					   ,{ obj     : this.div_prdPrpsDupProc           // 대표상품제안•중복상품처리
        					    , visible : '22'.indexOf(status) == -1        // 보임여부
        						, enable  : '25,32,35'.indexOf(status) != -1 && (this.gfn_isNull(prpsCd) ||this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == '10' && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") =='30' )  // 활성화여부
        						}
        					   ]
        			   };
            // 화면양식표출
        	for(var i = 0; i < show.div.length; i++) {
        		if(show.div[i].visible) {
        			show.div[i].obj.set_top(parseInt(show.pre.top) + parseInt(show.pre.height) + 10);
        			show.pre = show.div[i].obj;
        		}

        		show.div[i].obj.set_visible(show.div[i].visible);
        		//show.div[i].obj.set_enable (show.div[i].enable );
        		for(var comps = show.div[i].obj.form.components, ii = 0; ii < comps.length; ii++) {
        			if(comps[ii] instanceof Button || comps[ii] instanceof Radio) {
        				comps[ii].set_enable(show.div[i].enable);
        				if(comps[ii].enable && comps[ii].id == this.div_prdRegReqProc.form.btn_regReqCrt.id) {  // 등록요청생성 버튼
        					comps[ii].set_enable(this.div_prdRegReqProc.form.cmb_prdClcdSpr.value == "10");     // R&D 카테고리인 경우 등록요청생성 불가
        				}
        				else if(comps[ii].id == this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.id) {
        					if(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == '10' && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") =='30') {
        						comps[ii].set_enable(true);
        						if(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == '10'){
        						   this.div_prdPrpsDupProc.form.edt_prdId.set_enable(false)
        						   this.div_prdPrpsDupProc.form.edt_prdNm.set_enable(false)
        						   this.div_prdPrpsDupProc.form.btn_prdPop.set_enable(false);
        						   this.div_prdPrpsDupProc.form.btn_prdPop.set_enableevent(false);
        						   }
        					}
        				}
        			} else if(comps[ii].cssclass != "readonly" && comps[ii].set_readonly) {
        				comps[ii].set_readonly(!show.div[i].enable);
        			}
        		}
        	}

        	// ■ MD검토 요청
        	if(show.div[1].enable) {
        		var bVal = this.ds_detail.getColumn(0, "RVW_REQ_STATS_CD") == "01";
        		this.div_mdRvwRqst.form.cmb_rvwRqstTp.set_readonly (bVal);   // 검토 요청 유형
        		this.div_mdRvwRqst.form.txt_rvwRqstCts.set_readonly(bVal);   // 검토 요청 내용
        		this.div_mdRvwRqst.form.txt_mdRvwCts.set_readonly  (!bVal);  // MD 검토 결과
        	}

        	// 창높이조절
        	var minheight = parseInt(show.pre.top) + parseInt(show.pre.height);
        	var maxheight = parseInt(this.lookup("mainframe").height - 20);
        	this.set_height(minheight > maxheight ? maxheight : minheight);
        }

        this.fn_receipt_update = function() {
        	this.fn_update(this.btn_receipt.id, true);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 항목 변경시
        this.Edit_oninput = function(obj,e)
        {
            // 카테고리 변경시 초기화
            if(e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClcd.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClnm.id) {
        		//this.div_prdRegReqProc.form.edt_prdClcd.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClnm.id ? "" : obj.value);  // 카테고리코드
        		//this.div_prdRegReqProc.form.edt_prdClnm.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_prdClcd.id ? "" : obj.value);  // 카테고리명
            //  제조원
        	} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNo.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNm.id) {
        		this.div_prdRegReqProc.form.edt_mnfrNo.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNm.id ? "" : obj.value);
        		this.div_prdRegReqProc.form.edt_mnfrNm.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_mnfrNo.id ? "" : obj.value);
        	//  원산지
        	} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryCd.id || e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryNm.id) {
        		this.div_prdRegReqProc.form.edt_orgplcCtryCd.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryNm.id ? "" : obj.value);
        		this.div_prdRegReqProc.form.edt_orgplcCtryNm.set_value(e.fromobject.id == this.div_prdRegReqProc.form.edt_orgplcCtryCd.id ? "" : obj.value);
        	//  주문단위
        	} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_basisUnitNm.id) {
        		this.ds_detail.setColumn(0, "RP_BASIS_UNIT_CD", "");
        	//  주문단위
        	} else if(e.fromobject.id == this.div_prdRegReqProc.form.edt_sellUnitNm.id) {
        		this.ds_detail.setColumn(0, "RP_SELL_UNIT_CD", "");
        	//  상품ID
        	} else if(e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdId.id || e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdNm.id) {
        		this.div_prdPrpsDupProc.form.edt_prdId.set_value(e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdNm.id ? "" : obj.value);
        		this.div_prdPrpsDupProc.form.edt_prdNm.set_value(e.fromobject.id == this.div_prdPrpsDupProc.form.edt_prdId.id ? "" : obj.value);
        	}
        };

        // TextArea 글자 수 제어
        this.TextArea_oninput = function(obj,e)
        {
        	var objlength = obj.parent["sta_" + obj.id.split("_")[1]];
            var maxlength = parseInt(objlength.text.split("/")[1]);
         	var txtlength = this.getUtf8Byte(obj.value);
            obj.set_maxlength(0);
         	var sValue = obj.value || "";
         	for(var i = 0, len = 0; i < sValue.length; i++) {
         		len += (sValue.charCodeAt(i) > 127 ? 3 : 1);
         		if(len >= maxlength) {
         			obj.set_maxlength(len == maxlength ? (i + 1) : i);
         			txtlength = len == maxlength ? len : len - 1;
         			break;
         		}
         	}
           	objlength.set_text((txtlength == -1 ? 0 : txtlength) + "/" + maxlength);
        };

        // 버튼 클릭
        this.Button_onclick = function(obj,e)
        {
        	// 접수 버튼
        	if(e.fromobject.id == this.btn_receipt.id) {
        		this.gfn_popMessage("ERRP000038", null, obj.id, "fn_receipt_update");  // 해당 요청건을 접수 상태로 변경하시겠습니까?
        	} else if (e.fromobject.id == this.div_prdRegReqProc.form.btn_saveTemp.id) {
        			this.gfn_popMessage("ERRP000311", null, obj.id, "fn_update");
        			//this.fn_update(obj.id, true);
        	// 등록요청생성, 등록불가처리 버튼, 제안•중복처리 버튼, MD검토요청(완료)
        	} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_regReqCrt.id    ||
        	          e.fromobject.id == this.div_regDisProc.form.btn_regDisProc.id      ||
        			  e.fromobject.id == this.div_prdPrpsDupProc.form.btn_prpsDupProc.id ||
        			  e.fromobject.id == this.div_mdRvwRqst.form.btn_mdRvw.id			 ||
        			  e.fromobject.id == this.div_memo.form.btn_regMemo.id) {
        	    // 주문단위수량이 2 이상이면 판매단위코드는 필수임
        		var qty = this.div_prdRegReqProc.form.msk_basisUnitQty.value;
        		this.div_prdRegReqProc.form.edt_sellUnitCd.set_left(qty == 1 ? "1091" : "sta_basisUnit:377");
        	    this.div_prdRegReqProc.form.edt_sellUnitNm.set_left(qty == 1 ? "917"  : "sta_basisUnit:203");
        		if(e.fromobject.id == this.div_prdPrpsDupProc.form.btn_prpsDupProc.id) {
        			if(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == '10' && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") != undefined) {
        				this.gfn_popMessage("ERRP000307");
        				return;
        			}
        		}

        	    // 필수 입력 항목 점검
        		for(var comps = obj.parent.components, i = 0; i < comps.length; i++) {
        		    var sta = comps[i].left && comps[i].left.indexOf(":") != -1 ? comps[i].left.split(":")[0] : null;
        			if(sta) {
        				var txt = obj.parent[sta].getDisplayText().indexOf("*") != -1 ? obj.parent[sta].getDisplayText().replace("*", "").trim() : null;
         			    if(txt) {
        					if(comps[i] instanceof Grid) {
        						// 규격 필수 항목 점검
        						for(var ii = 0; this.ds_prdAttr.getCaseCount("MAND_YN=='Y' && PRVL") == 0 && ii < comps[i].rowcount; ii++) {
        							var prnm = comps[i].getCellText(ii, 0);
        							if(prnm.indexOf("*") != -1 && this.gfn_isNull(comps[i].getCellValue(ii, 1))) {
        								this.gfn_popMessage("ERRC000009", ["[" + txt + "]" + prnm.substring(0, prnm.indexOf("<fc"))]); // &1 을(를) 입력하세요.
        								return;
        							}
        						}
        					} else {
        						if(this.gfn_isNull(comps[i].value)) {
        							(comps[i].enable ? comps[i] : obj.parent.getPrevComponent(comps[i])).setFocus();
        							var ttt = this.getFocus().tooltiptext ? "[" + this.getFocus().tooltiptext + "]" : "";
        							if(comps[i] instanceof Edit || comps[i] instanceof MaskEdit || comps[i] instanceof TextArea) {
        								this.gfn_popMessage("ERRC000009", [txt + ttt]); // &1 을(를) 입력하세요.
        								return;
        							} else {
        								this.gfn_popMessage("ERRC000008", [txt + ttt]);  // &1 을(를) 선택하세요.
        								return;
        							}
        						}
        					}
        				}
        			}
        		}

                // 등록요청생성 버튼
        		if(e.fromobject.id == this.div_prdRegReqProc.form.btn_regReqCrt.id) {
        		    if(this.ds_detail.getColumn(0, 'RP_SEL_MTHD_CD') == '10') {  // MHS 상품군
        			    this.gfn_popMessage("ERRR000215");  // MHS대표상품 상품군은 신규상품등록이 불가합니다.
        				return;
        			} else {
        				this.gfn_popMessage("ERRR000123", null, obj.id, "fn_update");  // S-MRO에 등록요청생성을 하시겠습니까?
        			}
        		// 등록불가처리 버튼
        		} else if(e.fromobject.id == this.div_regDisProc.form.btn_regDisProc.id) {
        			this.gfn_popMessage("ERRR000125", null, obj.id, "fn_update");  // 등록불가로 처리하시겠습니까?
        		// 제안•중복처리 버튼
        		} else if(e.fromobject.id == this.div_prdPrpsDupProc.form.btn_prpsDupProc.id) {
        			this.gfn_popMessage("ERRR000128", null, obj.id, "fn_update");  // 제안•중복처리 하시겠습니까?
        		// MD검토요청(완료)
        		} else if(e.fromobject.id == this.div_mdRvwRqst.form.btn_mdRvw.id) {
        			if(this.gfn_isNull(this.ds_detail.getColumn(0,"RP_PRD_CLCD"))){
        				this.gfn_popMessage("ERRP000305")
        				return;
        			} else {
        				this.fn_update(obj.id, true);
        			}
        		} else if (e.fromobject.id == this.div_memo.form.btn_regMemo.id) {
        			this.fn_update(obj.id, true);
        		}
        	} else {
        		// 팝업 호출 전 창 정보 저장
                this.uVScrollPos = this.getVScrollPos();
        		this.uHeight = this.height;

        		// 카테고리추천&조회 버튼
        		if(e.fromobject.id == this.div_prdRegReqProc.form.btn_clRcmdInqrPop.id) {
        			var params  = { coCd        : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        			              , newPrdReqNo : this.ds_detail.getColumn(0, "NEW_PRD_REQ_NO")
        			              , prdNm       : this.ds_detail.getColumn(0, "RP_REQ_PRD_NM" )
        			              };
        			var options = { };

        			this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_49.xfdl", params,  "fn_popupCallback", options);
        		// R&D이관이력 버튼
        		} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_rndHstPop.id) {
        			var params  = { coCd        : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        			              , newPrdReqNo : this.ds_detail.getColumn(0, "NEW_PRD_REQ_NO")
        						  };
        			var options = { };

        			this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_50.xfdl", params,  "fn_popupCallback", options);
                // 카테고리 팝업
                } else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_prdClPop.id) {
            		var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        			              , mallSprCd : this.div_prdRegReqProc.form.cmb_prdClcdSpr.value
            					  , prdClcd   : this.ds_detail.getColumn(0, "RP_PRD_CLCD")
            					  , prdClsfNm : this.ds_detail.getColumn(0, "RP_PRD_CLNM")
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
            	// 주문단위(기본단위코드)
            	} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_basisUnitPop.id) {
            		var params  = { coCd   : this.ds_detail.getColumn(0, "CO_CD")
            					  , unitCd : this.div_prdRegReqProc.form.edt_basisUnitNm.value
            					  , unitNm : ""
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params,  "fn_popupCallback", options);
            	// 주문단위(판매단위코드)
            	} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_sellUnitPop.id) {
            		var params  = { coCd   : this.ds_detail.getColumn(0, "CO_CD")
            					  , unitCd : this.div_prdRegReqProc.form.edt_sellUnitNm.value
            					  , unitNm : ""
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params,  "fn_popupCallback", options);
            	// 제조원 팝업
            	} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_mnfrPop.id) {
            		var params  = { coCd   : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        			              , mnfrNo : this.div_prdRegReqProc.form.edt_mnfrNo.value
            					  , mnfrNm : this.div_prdRegReqProc.form.edt_mnfrNm.value
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
            	// 원산지 팝업
            	} else if(e.fromobject.id == this.div_prdRegReqProc.form.btn_orgplcCtryPop.id) {
            		var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        			              , ctrySprCd : this.div_prdRegReqProc.form.edt_orgplcCtryCd.value
            					  , ctryNm    : this.div_prdRegReqProc.form.edt_orgplcCtryNm.value
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_09.xfdl", params,  "fn_popupCallback", options);
            	// 상품ID
            	} else if(e.fromobject.id == this.div_prdPrpsDupProc.form.btn_prdPop.id) {
        			if(this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == undefined  ) {
        				alert('제안구분을 먼저 선택해 주세요');
        				return ;
        			}
            		var params  = { coCd         : this.ds_detail.getColumn(0, "CO_CD")
        			              , prdId        : this.div_prdPrpsDupProc.form.edt_prdId.value || ""
            					  , prdNm        : this.div_prdPrpsDupProc.form.edt_prdNm.value || ""
                                  /*, reprPrdYn    : this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.value == '10' ? "Y" : ""  // 대표상품제안시 대표상태 확인*/
        						  , reprPrdYn    : "Y"
                                  , dispStatsYn  : "Y"  // 진열상태
        						  , dupProc		 : "Y"  // 중복상품처리인지 확인
            					  };
            		var options = { };

            		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
            	}
            }
        };

        // 대표상품제안•중복상품처리 제안구분 변경시
        this.div_prdPrpsDupProc_rdo_prdPrpsSprCd_onitemchanged = function(obj,e)
        {
            // 대체제안사유 (비)활성화 & 초기화
        	this.div_prdPrpsDupProc.form.edt_altPrpsRsn.set_enable(obj.value == "10" && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") == undefined);
        	//this.div_prdPrpsDupProc.form.edt_altPrpsRsn.set_value(obj.value  == "10" && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") != undefined ? this.ds_detail.getColumn(0,"ALT_PRPS_RSN") : "");
        	//this.div_prdPrpsDupProc.form.edt_altPrpsRsn.set_value(this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") != undefined ? this.ds_detail.getColumn(0,"ALT_PRPS_RSN") : "");
             //this.div_prdPrpsDupProc.form.edt_prdId.set_readonly(!obj.enable || this.gfn_isNull(obj.value));  // 상품ID
             //this.div_prdPrpsDupProc.form.edt_prdNm.set_readonly(!obj.enable || this.gfn_isNull(obj.value));  // 상품명
             //this.div_prdPrpsDupProc.form.btn_prdPop.set_enable(!this.div_prdPrpsDupProc.form.edt_prdId.readonly);  // 상품팝업
            if(obj.value == '10' && this.ds_detail.getColumn(0,"PRD_PRPS_STATS_CD") != undefined) {
                 this.div_prdPrpsDupProc.form.edt_prdId.set_enable(false)
                 this.div_prdPrpsDupProc.form.edt_prdNm.set_enable(false)
                 this.div_prdPrpsDupProc.form.btn_prdPop.set_enable(false)
                 this.div_prdPrpsDupProc.form.btn_prdPop.set_enableevent(false)
            } else if(obj.value =='20'){
                 this.div_prdPrpsDupProc.form.edt_prdId.set_enable(true)
                 this.div_prdPrpsDupProc.form.edt_prdNm.set_enable(true)
                 this.div_prdPrpsDupProc.form.btn_prdPop.set_enable(true)
                 this.div_prdPrpsDupProc.form.btn_prdPop.set_enableevent(true)
            }
        };

        // 화면 종료시
        this.SSP_BO_PA_10_onclose = function(obj,e)
        {
        	// 화면종료
            this.close(JSON.stringify(this.return));
        };

        // 첨부파일 그리드
        this.div_main_grd_atflLink_oncellclick = function(obj,e)
        {
        	var strUrl = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP")
        	           + "/co/file-download.do?"
        			   + "docRegId="   + this.ds_atflList.getColumn(e.cell, "BO_DOC_REG_ID")
        			   + "&docRegSeq=" + this.ds_atflList.getColumn(e.cell, "DOC_REG_SEQ")
        			   ;
            this.web_download.set_url(strUrl);
        };

        // Dataset data 수정시
        this.ds_detail_oncolumnchanged = function(obj,e)
        {
            // 주문단위수량
        	if(e.columnid == "RP_BASIS_UNIT_QTY") {
        		this.ds_detail.setColumn(0, e.columnid, e.newvalue == 0 ? '' : e.newvalue);
        	}
        };



        this.div_prdRegReqProc_edt_prdNm_oninput = function(obj,e)
        {
         	var maxlength = 40; //db byte (50) / pi (40)
         	var txtlength = this.getUtf8Byte(obj.value);
         	obj.set_maxlength(0);
         	var sValue = obj.value;
         	for(var i = 0, len = 0; i < sValue.length; i++) {
         		len += (sValue.charCodeAt(i) > 127 ? 3 : 1);
         			if(len >= maxlength) {
         				obj.set_maxlength(len == maxlength ? (i + 1) : i);
         				txtlength = len == maxlength ? len : len - 1;
         				obj.set_value(sValue.slice(0,i))
         				break;
         			}
         		}
        };

        //공통함수에서 한글바이트를 2로 계산 중이어서 3으로 변경한 별도의 함수 구현
        this.getUtf8Byte = function (sVal)
        {
        	var lengthByte = 0;
        	if (this.gfn_isNull(sVal)) {
        		return -1;
        	}

        	for (var i = 0; i < sVal.length; i++)
        	{
        		if (sVal.charCodeAt(i) > 127) {
        			lengthByte += 3;
        		}
        		else {
        			lengthByte += 1;
        		}
        	}
        	return lengthByte;
        };
        this.div_regDisProc_cmb_prdRegDisTpCd_onitemchanged = function(obj,e)
        {
        	//ds_prdRegDisTpNm : 등록불가유형 text 전송용 dataset
        	this.ds_prdRegDisTpNm.setColumn(0, "PRD_REG_DIS_TP_NM", obj.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onclose",this.SSP_BO_PA_10_onclose,this);
            this.div_main.form.Static04_00_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_main.form.grd_atflLink.addEventHandler("oncellclick",this.div_main_grd_atflLink_oncellclick,this);
            this.div_main.form.Static04_00_00_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.btn_receipt.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.Static04_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_prdRegReqProc.form.edt_prdNm.addEventHandler("oninput",this.div_prdRegReqProc_edt_prdNm_oninput,this);
            this.div_prdRegReqProc.form.btn_clRcmdInqrPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_prdClcd.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.edt_prdClnm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.btn_prdClPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.btn_rndHstPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_basisUnitNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.btn_basisUnitPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_sellUnitNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.btn_sellUnitPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_mnfrNo.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.edt_mnfrNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.btn_mnfrPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.btn_regReqCrt.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_orgplcCtryCd.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.edt_orgplcCtryNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.btn_orgplcCtryPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdRegReqProc.form.edt_basisUnitNm00_00.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.edt_basisUnitNm00_00_00.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdRegReqProc.form.txt_mroSndMemo.addEventHandler("oninput",this.TextArea_oninput,this);
            this.div_prdRegReqProc.form.btn_saveTemp.addEventHandler("onclick",this.Button_onclick,this);
            this.div_smroProcInfo.form.Static04_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_regDisProc.form.cmb_prdRegDisTpCd.addEventHandler("onitemchanged",this.div_regDisProc_cmb_prdRegDisTpCd_onitemchanged,this);
            this.div_regDisProc.form.txt_regDisRsn.addEventHandler("oninput",this.TextArea_oninput,this);
            this.div_regDisProc.form.btn_regDisProc.addEventHandler("onclick",this.Button_onclick,this);
            this.div_regDisProc.form.Static60_00_00_00.addEventHandler("onclick",this.div_regDisProc_Static60_00_00_00_onclick,this);
            this.div_prdPrpsDupProc.form.Static04_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_prdPrpsDupProc.form.rdo_prdPrpsSprCd.addEventHandler("onitemchanged",this.div_prdPrpsDupProc_rdo_prdPrpsSprCd_onitemchanged,this);
            this.div_prdPrpsDupProc.form.edt_prdId.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdPrpsDupProc.form.edt_prdNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_prdPrpsDupProc.form.btn_prdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_prdPrpsDupProc.form.btn_prpsDupProc.addEventHandler("onclick",this.Button_onclick,this);
            this.div_mdRvwRqst.form.cmb_rvwRqstTp.addEventHandler("onitemchanged",this.div_mdRvwRqst_cmb_rvwRqstTp_onitemchanged,this);
            this.div_mdRvwRqst.form.txt_rvwRqstCts.addEventHandler("oninput",this.TextArea_oninput,this);
            this.div_mdRvwRqst.form.btn_mdRvw.addEventHandler("onclick",this.Button_onclick,this);
            this.div_mdRvwRqst.form.txt_mdRvwCts.addEventHandler("oninput",this.TextArea_oninput,this);
            this.div_memo.form.btn_regMemo.addEventHandler("onclick",this.Button_onclick,this);
            this.div_memo.form.txt_memoCts.addEventHandler("oninput",this.TextArea_oninput,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
