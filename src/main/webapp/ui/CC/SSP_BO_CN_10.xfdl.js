(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_10");
            this.set_titletext("VOC 현황 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VO_CLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"26\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"INT\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PATH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RTNGDS_EXCH_CNC_AS_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNGDS_EXCH_CNC_AS_PSB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_PROC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_GCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_CMPL_HPE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ACP_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STR_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REQ_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_DTL_CTS\" type=\"STRING\" size=\"4000\"/><Column id=\"VOC_PROC_RSLT_CTS\" type=\"STRING\" size=\"4000\"/><Column id=\"VOC_DEALR_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_NOTC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"RTNGDS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_RQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CADDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_DPSLAY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CHRPSN_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vocProcList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_REAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exceptionDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"DLV_FORM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_EXCEPT_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_EXCEPT_KND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_PLNT\" type=\"STRING\" size=\"256\"/><Column id=\"GO_PLNT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_EXCEPT_KND_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exceptionList1", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCEPT_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REL_TASK_SBJ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exceptionList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DLV_LT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STR_PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"500\"/><Column id=\"STOR_PLC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlvList", this);
            obj._setContents("<ColumnInfo><Column id=\"TRNS_VNDR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_VNDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HDV_INVC_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jcList", this);
            obj._setContents("<ColumnInfo><Column id=\"DVPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_order","20","247",null,"203","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","126",null,"32","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","95",null,"32","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static65","0","64",null,"32","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static03","0","33",null,"32","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static00","0","2","300","30",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("0");
            obj.set_text("주문 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static02","0","33","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("1");
            obj.set_text("주문품목번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static10","0","64","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("2");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static12","0","95","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("3");
            obj.set_text("요청수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","95","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("4");
            obj.set_text("주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static14","862","95","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("5");
            obj.set_text("현 판매금액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static16","0","126","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("6");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static18","862","126","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("7");
            obj.set_text("원 판매금액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static22_01_01","431","64","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("12");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static22_01_02","431","126","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("14");
            obj.set_text("원주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("sta_dupIdMsg","129","63","303","31",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static22_01_01_00","431","33","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("15");
            obj.set_text("주문상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static66_00","862","33","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("16");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","156",null,"32","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.div_order.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","156","130","32",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("17");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01","136","37","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_00","566","37","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_00_00","996","37","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01","136","68","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_00","566","68","717","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01","136","99","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00","566","99","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00","996","99","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00","996","129","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00","566","129","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00","136","129","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","136","160","287","24",null,null,null,null,null,null,this.div_order.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_order.addChild(obj.name, obj);

            obj = new Div("div_reqPerson","20","146",null,"114","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","130","62",null,"32","0",null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업장");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-2",null,"30","11",null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("0");
            obj.set_text("요청자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","862","31","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("운영단위");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("회원명");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","431","62","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("연락처");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","62","130","32",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("이메일");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01","137","35","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_00","567","35","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_00_00","997","35","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01","137","66","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_00","567","66","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_00_00","997","66","287","24",null,null,null,null,null,null,this.div_reqPerson.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqPerson.addChild(obj.name, obj);

            obj = new Div("div_workReqHst","20","1151",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_reqInfo","20","444",null,"286","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("VOC title");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("0");
            obj.set_text("요청 내역");
            obj.set_cssclass("sta_WF_title02");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","122",null,null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("VOC 상세내역");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62",null,"122","0",null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","135","35","718","24",null,null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","135","66","718","114",null,null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Grid("grd_fileList00","856","31","428","149",null,null,null,null,null,null,this.div_reqInfo.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_fileList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"첨부파일\"/></Band><Band id=\"body\"><Cell text=\"bind:ATFL_NM\" color=\"blue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.div_reqInfo.addChild(obj.name, obj);

            obj = new Div("div_vocProcInfo","20","640",null,"230","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","122",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("VOC 처리 결과");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("0");
            obj.set_text("VOC 처리 내역");
            obj.set_cssclass("sta_WF_title02");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"122","0",null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","152","130","32",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("담당자");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","152",null,"32","0",null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","152","130","32",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("부서명");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","182","130","32",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("담당자 메모");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00","130","182",null,"32","0",null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","152","130","31",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("연락처");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","135","155","287","24",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01","566","155","287","24",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00","996","155","287","24",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_00_00","135","186","1148","24",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","135","35","1148","114",null,null,null,null,null,null,this.div_vocProcInfo.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_vocProcInfo.addChild(obj.name, obj);

            obj = new Div("div_vocInfo","20","11",null,"129","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("VOC 상태");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-2",null,"30","11",null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("0");
            obj.set_text("VOC정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("VOC 분류");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","862","31","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("VOC No");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","130","62",null,"32","0",null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("접수 채널");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","93","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("처리가능여부");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","130","93",null,"32","0",null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","431","62","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("요청일");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","62","130","32",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("완료일시");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM","138","35","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM00","568","35","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM00_00","998","35","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01","138","66","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_00","568","66","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_00_00","998","66","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01","138","97","287","24",null,null,null,null,null,null,this.div_vocInfo.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocInfo.addChild(obj.name, obj);

            obj = new Div("div_vocProcStatus","20","865",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("접수 채널");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("0");
            obj.set_text("VOC 처리 현황");
            obj.set_cssclass("sta_WF_title02");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","230","130","32",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("업무메일수신여부");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","230",null,"32","0",null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","31","130","32",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("담당자");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","31","130","32",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서명");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01","1","62","130","169",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("처리현황");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Grid("grd_vocProc","10.87%","70","87.54%","155",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_vocProcList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"138\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"518\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"VOC처리상태\"/><Cell col=\"1\" text=\"실 처리자\"/><Cell col=\"2\" text=\"처리시간\"/><Cell col=\"3\" text=\"메모\"/></Band><Band id=\"body\"><Cell text=\"bind:PROC_STATS\"/><Cell col=\"1\" text=\"bind:PROC_REAL_NM\"/><Cell col=\"2\" text=\"bind:PROC_DTM\"/><Cell col=\"3\" text=\"bind:PROC_CTS\"/></Band></Format></Formats>");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","135","35","287","24",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_00","565","35","287","24",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_00_00","995","35","287","24",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01","135","233","287","24",null,null,null,null,null,null,this.div_vocProcStatus.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_vocProcStatus.addChild(obj.name, obj);

            obj = new Div("div_asProcStatus","20","1141",null,"439","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("배송 형태");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("0");
            obj.set_text("반품/교환/AS진행상태");
            obj.set_cssclass("sta_WF_title02");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예외처리상태");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62",null,"32","0",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("입고플랜트");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","62","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("출고플랜트");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_01","431","31","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("협력사");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList1","1","123",null,"112","708",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_exceptionList1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"190\"/><Column size=\"190\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"처리상태\"/><Cell col=\"1\" text=\"업무담당\"/><Cell col=\"2\" text=\"처리일시\"/></Band><Band id=\"body\"><Cell text=\"bind:EXCEPT_PROC_STATS_NM\"/><Cell col=\"1\" text=\"bind:DLV_REL_TASK_SBJ_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PROC_DTM\"/></Band></Format></Formats>");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList2","607","123",null,"112","17",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_exceptionList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"162\"/><Column size=\"162\"/><Column size=\"170\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"유형\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"처리L/T\"/></Band><Band id=\"body\"><Cell text=\"bind:DLV_LT_TP_NM\"/><Cell col=\"1\" text=\"bind:STR_PROC_DTM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:END_PROC_DTM\"/><Cell col=\"3\" text=\"bind:LT\"/></Band></Format></Formats>");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00","134","35","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00","564","35","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00","564","66","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00_00","995","66","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00_00_00","135","66","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_00","862","32","130","32",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("반품물류정보");
            obj.set_visible("false");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Edit("VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00_00_01","995","36","287","24",null,null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList1_00","1","284",null,"112","708",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("17");
            obj.set_binddataset("ds_jcList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"190\"/><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"배송기사명\"/><Cell col=\"1\" text=\"기사연락처\"/><Cell col=\"2\" text=\"운송차량정보\"/></Band><Band id=\"body\"><Cell text=\"bind:DVPR_NM\"/><Cell col=\"1\" text=\"bind:CADDR_NO\"/><Cell col=\"2\" text=\"bind:CAR_NO\"/></Band></Format></Formats>");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList2_00","607","284",null,"112","17",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("18");
            obj.set_binddataset("ds_dlvList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"218\"/><Column size=\"218\"/><Column size=\"218\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"택배사코드\"/><Cell col=\"1\" text=\"택배사명\"/><Cell col=\"2\" text=\"택배송장번호\"/></Band><Band id=\"body\"><Cell text=\"bind:TRNS_VNDR_ID\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:TRNS_VNDR_NM\"/><Cell col=\"2\" text=\"bind:HDV_INVC_NO\"/></Band></Format></Formats>");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","-1","252",null,"30","1",null,null,null,null,null,this.div_asProcStatus.form);
            obj.set_taborder("19");
            obj.set_text("반품배송정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_asProcStatus.addChild(obj.name, obj);

            obj = new Div("div_btn","593","div_asProcStatus:5","218","92",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","49","-5","60","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.div_btn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,810,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item36","div_basis.form.edt_01_00_01_04_00","value","ds_dtl","POSD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_basis.form.edt_01_00_01_04_00_00","value","ds_dtl","OSD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_basis.form.edt_01_00_01_03_00","value","ds_dtl","SALS_CHRPSN_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_basis.form.edt_01_00_01_03_00_00","value","ds_dtl","CONT_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_basis.form.edt_01_00_01_02_00","value","ds_dtl","CONT_MNG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_basis.form.edt_01_00_01_02_00_00","value","ds_dtl","BZTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_basis.form.edt_01_00_01_01_00","value","ds_dtl","CEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_basis.form.edt_01_00_01_01_00_00","value","ds_dtl","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_basis.form.edt_01_00_01_00_00","value","ds_dtl","CORP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_basis.form.edt_01_00_01_00_00_00","value","ds_dtl","CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_basis.form.edt_01_00_01_05","value","ds_dtl","CUST_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_basis.form.edt_01_00_01_05_00","value","ds_dtl","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_basis.form.edt_01_00_01_04","value","ds_dtl","LGGRP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_basis.form.edt_01_00_01_03","value","ds_dtl","CONT_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_basis.form.edt_01_00_01_02","value","ds_dtl","BZCAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_basis.form.edt_01_00_01_01","value","ds_dtl","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_basis.form.edt_01_00_01_00","value","ds_dtl","GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_vocInfo.form.VOC_STATS_NM","value","ds_dtl","VOC_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_vocInfo.form.VOC_STATS_NM00","value","ds_dtl","VO_CLS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_vocInfo.form.VOC_STATS_NM00_00","value","ds_dtl","VOC_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_vocInfo.form.VOC_STATS_NM01","value","ds_dtl","RTNGDS_EXCH_CNC_AS_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_vocInfo.form.VOC_STATS_NM01_00","value","ds_dtl","VOC_REQDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_vocInfo.form.VOC_STATS_NM01_00_00","value","ds_dtl","CMPL_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_reqPerson.form.VOC_STATS_NM01_01","value","ds_dtl","BZPLC_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_reqPerson.form.VOC_STATS_NM01_01_00","value","ds_dtl","OPR_UNIT_DPSLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_reqPerson.form.VOC_STATS_NM01_01_00_00","value","ds_dtl","DEPT_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_reqPerson.form.VOC_STATS_NM01_01_01","value","ds_dtl","ODRPSN_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_reqPerson.form.VOC_STATS_NM01_01_01_00","value","ds_dtl","CADDR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_reqPerson.form.VOC_STATS_NM01_01_01_00_00","value","ds_dtl","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_order.form.VOC_STATS_NM01_01_01","value","ds_dtl","ODR_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_order.form.VOC_STATS_NM01_01_01_00","value","ds_dtl","ODR_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_order.form.VOC_STATS_NM01_01_01_00_00","value","ds_dtl","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_order.form.VOC_STATS_NM01_01_01_01","value","ds_dtl","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_order.form.VOC_STATS_NM01_01_01_01_00","value","ds_dtl","REPR_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_order.form.VOC_STATS_NM01_01_01_01_01","value","ds_dtl","REQ_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_order.form.VOC_STATS_NM01_01_01_01_01_00","value","ds_dtl","ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_order.form.VOC_STATS_NM01_01_01_01_01_00_00","value","ds_dtl","SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_order.form.VOC_STATS_NM01_01_01_01_01_00_00_00","value","ds_dtl","ORI_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_order.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00","value","ds_dtl","ORI_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_order.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00","value","ds_exceptionDtl","CPRTCP_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_order.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","value","ds_dtl","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_reqInfo.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","value","ds_dtl","REG_REQ_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_vocProcInfo.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","value","ds_dtl","PROC_CHRPSN_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_vocProcInfo.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01","value","ds_dtl","PROC_DEPT_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_vocProcInfo.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00","value","ds_dtl","PROC_CADDR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_vocProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00","value","ds_dtl","REG_PATH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_vocProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_00","value","ds_dtl","PROC_CHRPSN_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_vocProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_00_00","value","ds_dtl","PROC_DEPT_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_vocProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01","value","ds_dtl","MAIL_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_asProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00","value","ds_exceptionDtl","DLV_FORM_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_asProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00","value","ds_exceptionDtl","CPRTCP_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_asProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00","value","ds_exceptionDtl","GI_PLNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_asProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00_00","value","ds_exceptionDtl","GO_PLNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_asProcStatus.form.VOC_STATS_NM01_01_01_01_01_00_00_00_00_00_00_01_00_00_00_00_00","value","ds_exceptionDtl","EXCEPT_PROC_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_reqInfo.form.TextArea00","value","ds_dtl","VOC_DTL_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_vocProcInfo.form.TextArea00","value","ds_dtl","VOC_PROC_RSLT_CTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_10.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_10.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_10.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
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
        //조회
        this.fn_search = function()	{
        	var sSvcId = "selectDtl";
        	var sUrl = "/bo/voc/cust/ssp_bo_cn_10/select-voc-dtl-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dtl=ds_dtl ds_vocProcList=ds_vocProcList ds_exceptionDtl=ds_exceptionDtl ds_exceptionList1=ds_exceptionList1 ds_exceptionList2=ds_exceptionList2 ds_fileList=ds_fileList ds_jcList=ds_jcList ds_dlvList=ds_dlvList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectDtl") {
        		if(this.ds_dtl.getColumn(0,"RTNGDS_EXCH_CNC_AS_PSB_YN") == "Y") {
        			this.ds_dtl.setColumn(0,"RTNGDS_EXCH_CNC_AS_PSB_NM","반품/교환/취소/AS 가능");
        			//this.ds_dtl.setColumn(0,"VOC_PROC_RSLT_CTS",""); //VOC처리결과내용
        		}
        		else {
        			this.ds_dtl.setColumn(0,"RTNGDS_EXCH_CNC_AS_PSB_NM","불가능");
        			//this.ds_dtl.setColumn(0,"CLOS_RQTY",""); //요청수량
        		}

        		this.ds_dtl.setColumn(0,"TRSF_PROC_DTM", this.ds_vocProcList.lookup("NO","4","PROC_DTM")); //VOC처리현황 리스트의 완료시점(4)의 일자를 완료일자로 설정
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	this.ds_search.setColumn(0,"CO_CD",this.parent.coCd);
        	this.ds_search.setColumn(0,"VOC_NO",this.parent.vocNo);
        	this.ds_search.setColumn(0,"VOC_ITM_NO",this.parent.vocItmNo);
        	this.ds_search.setColumn(0,"BZPLC_ID",this.parent.bzplcId);
        	this.ds_search.setColumn(0,"EXCEPT_PROC_ODR_NO",this.parent.exceptProcOdrNo);
        	this.ds_search.setColumn(0,"EXCEPT_PROC_ODR_ITM_NO",this.parent.exceptProcOdrItmNo);

        	this.fn_search();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_topmost = function(sId,odrNo,odrItmNo,bzplcId,odrpsnId) {
            if(sId == undefined)
            {
                var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
                trace("s1 is " + arrPopFrame.length );
                for(var i = 0; i < arrPopFrame.length; i++) {
                    //arrPopFrame[i].set_openstatus("minimize");
                    //arrPopFrame[i].move(10,840,10,10);
                }
            }
            else    {
                var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
                for(var i = 0; i < arrPopFrame.length; i++) {
                    if(sId == arrPopFrame[i].id )
                    {
                        arrPopFrame[i].form.fn_onReload(false,odrNo,odrItmNo,bzplcId,odrpsnId);
        				if (system.navigatorname == "nexacro") {
        					arrPopFrame[i].setFocus();
        				} else {
        					arrPopFrame[i]._getWindowHandle().focus();
        				}
                    }
                    else
                    {
                        //arrPopFrame[i].set_openstatus("minimize");
                        //arrPopFrame[i].move(10,840,10,10);
                    }
                }
            }
        };

        this.fn_getDetail = function(sObjectId) {
            if(sObjectId == undefined)  return false;
            var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            for(var i = 0; i < arrPopFrame.length; i++) {
                if(sObjectId == arrPopFrame[i].id )
                    return true;
            }
            return false;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.sta_odrItmNm_onclick = function(obj,e)
        {
        	if(this.ds_dtl.getColumn(0,"ODR_NO") != null && this.ds_dtl.getColumn(0,"ODR_NO") != ""){
        		var width = this.getOwnerFrame().width; //1336;
        		var height = this.getOwnerFrame().height;//846;
        		var nLeft = 0;
        		var nTop = 0;
        		nLeft = system.clientToScreenX(this, nLeft);
        		nTop  = system.clientToScreenY(this, nTop);

        		var odrNo = this.ds_dtl.getColumn(0,"ODR_NO");
        		var odrItmNo = this.ds_dtl.getColumn(0,"ODR_ITM_NO");
        		var bzplcId = this.ds_dtl.getColumn(0,"BZPLC_ID");
        		var odrpsnId = this.ds_dtl.getColumn(0,"ODRPSN_ID");
        		var objectId =""
        		var nRow = -1;
        		var isExisted = false;

        		if(this.gfn_isNull(odrNo) || this.gfn_isNull(odrItmNo)) {
        			alert(this.fn_getMessage("ERRS000226", "주문번호")); //올바른 &1 형식이 아닙니다.
        			return;
        		}

        		objectId =odrNo + "_" + odrItmNo;//+ "-" + odrItmNo;
        		isExisted = this.fn_getDetail(objectId);

        		if( isExisted == false ) 	{
        			var objParam = {param1:odrNo, param2:odrItmNo, param3:bzplcId, param4:odrpsnId};
        			var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        			nexacro.open(objectId, "OD::SSP_BO_OA_02.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
        			//this.gfn_openPopup(objectId, 'OD::SSP_BO_OA_02.xfdl', objParam, '', { title: '주문품목번호 상세정보', titlebar: 'true', autosize: 'false' });
        		}
        		else	{
        			this.fn_topmost(objectId,odrNo,odrItmNo,bzplcId,odrpsnId);
        		}
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.grd_fileList_oncellclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRC000106",this.ds_fileList.getColumn(e.row, "ATFL_NM")))) {
        		this.FileDownTransfer.clearPostDataList();
        		this.FileDownTransfer.set_downloadfilename(this.ds_fileList.getColumn(e.row, "ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_fileList.getColumn(e.row, "DOC_REG_ID"));	//문서번호
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_fileList.getColumn(e.row, "DOC_REG_SEQ"));	//문서 순번
        		this.FileDownTransfer.download('/co/file-download.do');
        	}
        };

        this.SSP_BO_CN_10_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_CN_10_onkeyup,this);
            this.div_order.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_order.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_order.form.sta_dupIdMsg.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_reqInfo.form.grd_fileList00.addEventHandler("oncellclick",this.grd_fileList_oncellclick,this);
            this.div_reqInfo.form.grd_fileList00.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_vocProcInfo.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_vocProcInfo.form.Static21_00_01_01_00.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_vocProcStatus.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_asProcStatus.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_asProcStatus.form.grd_exceptionList1.addEventHandler("oncellclick",this.grd_aprvlList_oncellclick,this);
            this.div_asProcStatus.form.grd_exceptionList1.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_asProcStatus.form.grd_exceptionList2.addEventHandler("oncellclick",this.grd_aprvlList_oncellclick,this);
            this.div_asProcStatus.form.grd_exceptionList2.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_asProcStatus.form.grd_exceptionList1_00.addEventHandler("oncellclick",this.grd_aprvlList_oncellclick,this);
            this.div_asProcStatus.form.grd_exceptionList1_00.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_asProcStatus.form.grd_exceptionList2_00.addEventHandler("oncellclick",this.grd_aprvlList_oncellclick,this);
            this.div_asProcStatus.form.grd_exceptionList2_00.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_btn.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CN_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
