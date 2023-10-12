(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSSP_BO_MA_06");
            this.set_titletext("운영단위 상세정보");
            this.set_scrollbartype("auto");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZCAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_MNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LGGRP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AGNC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY_STR_MM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RT\" type=\"FLOAT\" size=\"10\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iddtList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RT\" type=\"FLOAT\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bilcltCondList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stlMeanList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComSRVON_OCAR_UT_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"NM\">허용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"NM\">미허용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOprunitBasis", this);
            obj.set_serverdatasetid("dsOprunitBasis");
            obj._setContents("<ColumnInfo><Column id=\"SRVON_OCAR_UT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SRVON_OCAR_UT_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOshtCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefCdGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComMALL_SPR_CD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">10</Col><Col id=\"NM\">SSP Mall</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"NM\">R&amp;D Mall</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_YN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComMAND_YN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComNO_CHAR_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComREF_CD_CHG_TGT_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComREF_CD_EXPS_MTHD_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStlMean", this);
            obj._setContents("<ColumnInfo><Column id=\"STL_MEAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STL_MEAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basis","20","0",null,"240","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","204",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","144",null,"61","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static65","0","113",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07","0","82",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03","0","52",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06","0","82","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("1");
            obj.set_text("자재구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static08","862","82","138","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static10","0","113","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("3");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static66","862","113","138","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("4");
            obj.set_text("운영팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static12","0","144","130","61",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("5");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","144","130","61",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("6");
            obj.set_text("서비스담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static14","862","144","138","61",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("7");
            obj.set_text("운영담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static16","0","204","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("8");
            obj.set_text("유통경로");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","431","82","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("16");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_01","431","113","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("17");
            obj.set_text("서비스팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("ltrUSE_YN","0","52","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","52","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("19");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04","862","52","138","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("20");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01","ltrUSE_YN:10","56","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00","Static06:10","86","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01","Static10:10","117","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03","Static16:10","208","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01_00","Static22_01_01:10","117","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00_00","Static22_01_00:10","86","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04","Static22_00:10","56","280","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_04_00","Static04:10","56","260","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00_00_00","Static08:10","86","260","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01_00_00","Static66:10","117","260","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","Static12:10","148","280","53",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","Static22_01:10","148","280","53",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","Static14:10","148","260","53",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Div("div_addr","20","256",null,"54","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","21","129","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("우편번호");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-5",null,"26","737",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("0");
            obj.set_text("주소정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","21","302","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","21","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","21",null,"32","0",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00","563","25",null,"24","444",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00_00","131","25",null,"24","928",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","862","21","138","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상세주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00_01","1001","25",null,"24","9",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addr.addChild(obj.name, obj);

            obj = new Div("div_acct","20","318",null,"126","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","60","130","61",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("수금조건");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","866",null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("0");
            obj.set_text("회계");
            obj.set_cssclass("sta_WF_title02");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","60","450","61",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","60","130","61",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("결제수단");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","60",null,"61","0",null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static03","1","29",null,"32","0",null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("ltrUSE_YN","1","29","130","32",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("6");
            obj.set_text("정산구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","29","130","32",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("7");
            obj.set_text("정산일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","60","138","61",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("8");
            obj.set_text("세금계산서발행시스템");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_acct.addChild(obj.name, obj);

            obj = new Static("Static04","862","29","138","32",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("9");
            obj.set_text("세금계산서발행구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_acct.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03_00","ltrUSE_YN:10","33","280","24",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03_00_00","Static22_00:10","33","280","24",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_03_00_00_00","Static04:10","33","260","24",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00_00","Static04_00:10","63","260","53",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00_00_00","Static21_00:10","63","280","53",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00_00_00_00","Static21_00_02:10","63","280","53",null,null,null,null,null,null,this.div_acct.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div_acct.addChild(obj.name, obj);

            obj = new Div("div_ctrl","19","456",null,"84","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("이관고객");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","735",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("0");
            obj.set_text("운영정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","862","31","138","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("택배배송(숨김처리)");
            obj.set_visible("false");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","143","34",null,"24","986",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","431","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("Only Serveone");
            obj.set_visible("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static00_01","1001","35",null,"24","15",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdoSRVON_OCAR_UT_YN","572","39","146","19",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("7");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComSRVON_OCAR_UT_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_visible("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdoHDV_DLV_USE_YN","1019","38","146","19",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("8");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComSRVON_OCAR_UT_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_visible("false");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new CheckBox("chkTrsfYn","Static21_00:10","38","150","20",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("9");
            obj.set_text("이관고객");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Div("div_addInfo","20","533",null,"67","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("몰사용여부");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","735",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("0");
            obj.set_text("몰관리정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Radio("rdoOPR_UNIT_MALL_SPR_CD","Static21_00:10","38","146","19",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("3");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComMALL_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("bind:OPR_UNIT_MALL_SPR_CD");
            obj.set_index("-1");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Div("divCcoRefCd","19","783",null,"227","21",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-5",null,"30","733",null,null,null,null,null,this.divCcoRefCd.form);
            obj.set_taborder("0");
            obj.set_text("참조코드관리");
            obj.set_cssclass("sta_WF_title02");
            this.divCcoRefCd.addChild(obj.name, obj);

            obj = new Grid("grdRefCd","0","25",null,"202","0",null,null,null,null,null,this.divCcoRefCd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRefCdGrp");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"318\"/><Column size=\"99\"/><Column size=\"155\"/><Column size=\"149\"/><Column size=\"127\"/><Column size=\"87\"/><Column size=\"106\"/><Column size=\"130\"/><Column size=\"88\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"참조코드명\"/><Cell col=\"2\" rowspan=\"2\" text=\"사용여부\"/><Cell col=\"3\" rowspan=\"2\" text=\"필수여부\"/><Cell col=\"4\" rowspan=\"2\" text=\"변경여부\"/><Cell col=\"5\" rowspan=\"2\" text=\"노출방식\"/><Cell col=\"6\" colspan=\"3\" text=\"최종수정이력\"/><Cell col=\"9\" rowspan=\"2\" text=\"상세보기\"/><Cell row=\"1\" col=\"6\" text=\"수정자\"/><Cell row=\"1\" col=\"7\" text=\"수정자명\"/><Cell row=\"1\" col=\"8\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell text=\"bind:REF_CD_GRP_SEQ\"/><Cell col=\"1\" text=\"bind:REF_CD_GRP_NM\" displaytype=\"editcontrol\" edittype=\"text\" controlautosizingtype=\"width\" editmaxlength=\"30\"/><Cell col=\"2\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComUSE_YN\" combocodecol=\"CD\" combodatacol=\"NM\"/><Cell col=\"3\" text=\"bind:MAND_YN\" edittype=\"expr:String(USE_YN).valueOf()==&quot;N&quot;?&apos;none&apos;:&apos;combo&apos;\" displaytype=\"combocontrol\" combodataset=\"dsComMAND_YN\" combocodecol=\"CD\" combodatacol=\"NM\"/><Cell col=\"4\" text=\"bind:REF_CD_CHG_TGT_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComREF_CD_CHG_TGT_CD\" combodatacol=\"NM\" combocodecol=\"CD\"/><Cell col=\"5\" text=\"bind:REF_CD_EXPS_MTHD_CD\" combodataset=\"dsComREF_CD_EXPS_MTHD_CD\" combodatacol=\"NM\" combocodecol=\"CD\" edittype=\"expr:String(REF_CD_CHG_TGT_CD).valueOf()==&quot;2&quot;?&apos;none&apos;:&apos;combo&apos;\" displaytype=\"combocontrol\"/><Cell col=\"6\" text=\"bind:UPDPSN_ID\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID_NM\"/><Cell col=\"8\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" text=\"상세설정\"/></Band></Format></Formats>");
            this.divCcoRefCd.addChild(obj.name, obj);

            obj = new Div("div_addInfo00","19","615",null,"72","21",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addInfo00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("장바구니문구");
            this.div_addInfo00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","735",null,null,null,null,null,this.div_addInfo00.form);
            obj.set_taborder("0");
            obj.set_text("장바구니문구");
            obj.set_cssclass("sta_WF_title02");
            this.div_addInfo00.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_addInfo00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addInfo00.addChild(obj.name, obj);

            obj = new Edit("edtCART_PHS_CTS","137","36",null,"22","8",null,null,null,null,null,this.div_addInfo00.form);
            obj.set_taborder("3");
            this.div_addInfo00.addChild(obj.name, obj);

            obj = new Div("div_addInfo01","19","697",null,"63","21",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addInfo01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("거래명세서양식선택");
            this.div_addInfo01.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","735",null,null,null,null,null,this.div_addInfo01.form);
            obj.set_taborder("0");
            obj.set_text("거래명세서관리");
            obj.set_cssclass("sta_WF_title02");
            this.div_addInfo01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_addInfo01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addInfo01.addChild(obj.name, obj);

            obj = new Edit("edt_rptNm","134","35","350","24",null,null,null,null,null,null,this.div_addInfo01.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_addInfo01.addChild(obj.name, obj);

            obj = new Button("btn_goStmPop","edt_rptNm:4","35","24","24",null,null,null,null,null,null,this.div_addInfo01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            this.div_addInfo01.addChild(obj.name, obj);

            obj = new Div("divCcoOshtCd","20","1030",null,"227","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-5",null,"30","733",null,null,null,null,null,this.divCcoOshtCd.form);
            obj.set_taborder("0");
            obj.set_text("일회성코드관리");
            obj.set_cssclass("sta_WF_title02");
            this.divCcoOshtCd.addChild(obj.name, obj);

            obj = new Grid("grdOshtCd","0","25",null,"202","0",null,null,null,null,null,this.divCcoOshtCd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOshtCd");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"318\"/><Column size=\"99\"/><Column size=\"155\"/><Column size=\"149\"/><Column size=\"127\"/><Column size=\"87\"/><Column size=\"106\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"일회성코드명\"/><Cell col=\"2\" rowspan=\"2\" text=\"사용여부\"/><Cell col=\"3\" rowspan=\"2\" text=\"필수여부\"/><Cell col=\"4\" rowspan=\"2\" text=\"최대입력문자(Byte)\"/><Cell col=\"5\" rowspan=\"2\" text=\"숫자/문자구분\"/><Cell col=\"6\" colspan=\"3\" text=\"최종수정이력\"/><Cell row=\"1\" col=\"6\" text=\"수정자\"/><Cell row=\"1\" col=\"7\" text=\"수정자명\"/><Cell row=\"1\" col=\"8\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell text=\"bind:OSHT_CD_SEQ\"/><Cell col=\"1\" text=\"bind:OSHT_CD_NM\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"30\"/><Cell col=\"2\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComUSE_YN\" combocodecol=\"CD\" combodatacol=\"NM\"/><Cell col=\"3\" text=\"bind:MAND_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodatacol=\"NM\" combodataset=\"dsComMAND_YN\" combocodecol=\"CD\"/><Cell col=\"4\" text=\"bind:MAX_IPT_LEN\" displaytype=\"maskeditcontrol\" editinputtype=\"digit\" editmaxlength=\"4\" textAlign=\"right\" editautoselect=\"true\" maskeditlimitbymask=\"both\" edittype=\"mask\" maskeditmaskchar=\"###,##0\"/><Cell col=\"5\" text=\"bind:NO_CHAR_SPR_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComNO_CHAR_SPR_CD\" combocodecol=\"CD\" combodatacol=\"NM\"/><Cell col=\"6\" text=\"bind:UPDPSN_ID\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID_NM\"/><Cell col=\"8\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.divCcoOshtCd.addChild(obj.name, obj);

            obj = new Div("div_LOGN_AFTH_FST_PAGE","20","1280",null,"130","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static_LOGN_SUB_TITLE","0","0",null,"30","735",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("1");
            obj.set_text("로그인 후 첫 페이지 지정");
            obj.set_cssclass("sta_WF_title02");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static_FST_PAGE_USEYN","1","31","130","32",null,null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사용여부");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static_FST_PAGE_USEYN_BACK","130","31",null,"32","0",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Radio("rdoFST_PAGE_USEYN","Static_FST_PAGE_USEYN:10","38","250","19",null,null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("4");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_LOGN_AFTH_FST_PAGE_form_rdoFST_PAGE_USEYN_innerdataset = new nexacro.NormalDataset("div_LOGN_AFTH_FST_PAGE_form_rdoFST_PAGE_USEYN_innerdataset", obj);
            div_LOGN_AFTH_FST_PAGE_form_rdoFST_PAGE_USEYN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row></Rows>");
            obj.set_innerdataset(div_LOGN_AFTH_FST_PAGE_form_rdoFST_PAGE_USEYN_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static_FST_PAGE_PC_URL","1","62","130","32",null,null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_text("PC");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static_FST_PAGE_PC_URL_BACK","130","62",null,"32","0",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Edit("edtFST_PAGE_PC_URL","Static_FST_PAGE_PC_URL:10","67",null,"22","8",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("PC URL을 입력해 주세요");
            obj.set_maxlength("700");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static_FST_PAGE_MBL_URL","1","93","130","32",null,null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_text("MOBILE");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Static("Static21_FST_PAGE_MBL_URL_BACK","130","93",null,"32","0",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Edit("edtFST_PAGE_MBL_URL","Static_FST_PAGE_MBL_URL:10","98",null,"22","8",null,null,null,null,null,this.div_LOGN_AFTH_FST_PAGE.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("MOBILE URL을 입력해 주세요");
            obj.set_maxlength("700");
            this.div_LOGN_AFTH_FST_PAGE.addChild(obj.name, obj);

            obj = new Div("div_FO_LOGO","19","div_LOGN_AFTH_FST_PAGE:23",null,"95","21",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static_FO_LOGO_SUB_TITLE","0","0",null,"30","735",null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("0");
            obj.set_text("특정 로고 사용");
            obj.set_cssclass("sta_WF_title02");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static_PC_LOGO_DOC_REG_ID","1","31","130","32",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("[PC] 이미지");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static_PC_LOGO_DOC_REG_ID_BACK","130","31",null,"32","0",null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Edit("edt_PC_LOGO_DOC_REG_ID_NM","134","35","350","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Button("btn_PC_LOGO_DOC_REG_ID_ADD","edt_PC_LOGO_DOC_REG_ID_NM:4","35","80","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("4");
            obj.set_text("파일첨부");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Button("btn_PC_LOGO_DOC_REG_ID_CLEAR","btn_PC_LOGO_DOC_REG_ID_ADD:4","35","24","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("5");
            obj.set_text("X");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static05","btn_PC_LOGO_DOC_REG_ID_CLEAR:10","35","328","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("6");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 220*60)");
            obj.set_textAlign("left");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static_MBL_LOGO_DOC_REG_ID","1","62","130","32",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("[Mobile] 이미지");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static_MBL_LOGO_DOC_REG_ID_BACK","130","62",null,"32","0",null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Edit("edt_MBL_LOGO_DOC_REG_ID_NM","134","67","350","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Button("btn_MBL_LOGO_DOC_REG_ID_ADD","edt_PC_LOGO_DOC_REG_ID_NM:4","67","80","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("10");
            obj.set_text("파일첨부");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Button("btn_MBL_LOGO_DOC_REG_ID_CLEAR","btn_MBL_LOGO_DOC_REG_ID_ADD:4","67","24","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("11");
            obj.set_text("X");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Static("Static06","btn_MBL_LOGO_DOC_REG_ID_CLEAR:10","67","328","24",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("12");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 323*66)");
            obj.set_textAlign("left");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","972","12","100","100",null,null,null,null,null,null,this.div_FO_LOGO.form);
            obj.set_taborder("13");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("none");
            obj.set_text("");
            obj.set_visible("false");
            this.div_FO_LOGO.addChild(obj.name, obj);

            obj = new Div("div_mainBtn","0","div_FO_LOGO:23",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnCncl","590","0","70","30",null,null,null,null,null,null,this.div_mainBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_visible("false");
            this.div_mainBtn.addChild(obj.name, obj);

            obj = new Button("btnList","631","0","70","30",null,null,null,null,null,null,this.div_mainBtn.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_select");
            obj.set_visible("false");
            this.div_mainBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","675","0","70","30",null,null,null,null,null,null,this.div_mainBtn.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            obj.set_visible("false");
            this.div_mainBtn.addChild(obj.name, obj);

            obj = new Button("btnCtlAuth","1215","22",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("제어권한 설정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","593","1323","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","600","1258","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","159","div_addInfo00:-9",null,"19","605",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("※ 등록된 메시지는 고객사 장바구니에 고정 출력됩니다. 메시지는 Text만 입력 가능합니다.");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btnMUpdate4Dept",null,"781","91",null,"20","divCcoRefCd:-20",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("일괄등록");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_addr.form.Static00_00","text","dsOprunitBasis","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_addr.form.Static00","text","dsOprunitBasis","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_addr.form.Static00_01","text","dsOprunitBasis","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_ctrl.form.rdoSRVON_OCAR_UT_YN","value","dsOprunitBasis","SRVON_OCAR_UT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divCcoOshtCd.form.grdOshtCd","binddataset","dsOprunitBasis.OSHT_CD","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_addInfo.form.rdoOPR_UNIT_MALL_SPR_CD","value","dsOprunitBasis","OPR_UNIT_MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_addInfo00.form.edtCART_PHS_CTS","value","dsOprunitBasis","CART_PHS_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_ctrl.form.rdoHDV_DLV_USE_YN","value","dsOprunitBasis","HDV_DLV_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_ctrl.form.chkTrsfYn","value","dsOprunitBasis","TRSF_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basis.form.edt_01_00_01_04_00","value","dsOprunitBasis","CUST_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_basis.form.edt_01_00_01_04_00_00","value","ds_dtl","OSD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_basis.form.edt_01_00_01_01_00","value","dsOprunitBasis","SVC_TEAM_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_basis.form.edt_01_00_01_01_00_00","value","dsOprunitBasis","OPR_TEAM_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_basis.form.edt_01_00_01_00_00","value","dsOprunitBasis","BZPLC_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_basis.form.edt_01_00_01_00_00_00","value","dsOprunitBasis","OPR_UNIT_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_basis.form.edt_01_00_01_05","value","ds_dtl","CUST_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_basis.form.edt_01_00_01_05_00","value","ds_dtl","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_basis.form.edt_01_00_01_04","value","dsOprunitBasis","OPR_UNIT_REG_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_basis.form.edt_01_00_01_03","value","dsOprunitBasis","DSTRB_PATH_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_basis.form.edt_01_00_01_01","value","dsOprunitBasis","SALS_TEAM_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_basis.form.edt_01_00_01_00","value","dsOprunitBasis","MAT_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_basis.form.edt_01_00_01","value","dsOprunitBasis","USE_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_basis.form.TextArea00","value","dsOprunitBasis","SALS_CHRPSN_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basis.form.TextArea00_00","value","dsOprunitBasis","SVC_CHRPSN_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basis.form.TextArea00_00_00","value","dsOprunitBasis","OPR_CHRPSN_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_acct.form.edt_01_00_01_03_00","value","dsOprunitBasis","ADJ_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basis.form.edt_01_00_01_03_00_00","value","ds_dtl","CONT_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_acct.form.edt_01_00_01_03_00_00","value","dsOprunitBasis","ADJ_DD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_acct.form.edt_01_00_01_03_00_00_00","value","dsOprunitBasis","TAXINV_PUBC_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_acct.form.TextArea00_00_00_00","value","dsOprunitBasis","TAXINV_PUBC_SYS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_acct.form.TextArea00_00_00_00_00","value","dsOprunitBasis","BILCLT_COND_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_acct.form.TextArea00_00_00_00_00_00","value","dsStlMean","STL_MEAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_addInfo01.form.edt_rptNm","value","dsOprunitBasis","RPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_LOGN_AFTH_FST_PAGE.form.rdoFST_PAGE_USEYN","value","dsOprunitBasis","FST_PAGE_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_LOGN_AFTH_FST_PAGE.form.edtFST_PAGE_PC_URL","value","dsOprunitBasis","FST_PAGE_PC_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_LOGN_AFTH_FST_PAGE.form.edtFST_PAGE_MBL_URL","value","dsOprunitBasis","FST_PAGE_MBL_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM","value","dsOprunitBasis","PC_LOGO_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM","value","dsOprunitBasis","MBL_LOGO_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_06.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_06.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_06.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_06.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.maxFileSize = 10;						//10MB
        var imgViewObj = this.div_FO_LOGO.form.img_view;
        var curImgBtnName = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//this.fnTestDtlOprunit();

        	this.ccComCodes([
        		  'MALL_SPR_CD'
        		, '선택:USE_YN'
        		, '선택:MAND_YN'
        		, '선택:REF_CD_CHG_TGT_CD'
        		, '선택:REF_CD_EXPS_MTHD_CD'
        		, 'NO_CHAR_SPR_CD'
        	], 'fnCcComCodesClbk');

        	this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', ['coCd', 'bzplcId', 'oprUnitId']);
        	trace('this.dsParam > [coCd:'+ this.dsParam.getColumn(0, 'coCd') +'][bzplcId:'+ this.dsParam.getColumn(0, 'bzplcId') +'][oprUnitId:'+ this.dsParam.getColumn(0, 'oprUnitId') +']');

        	//this.$page.init(this.page);
        	this.fnLoadOprunitBasis();

        	this.copyPaste.addGrid(this.divCcoRefCd.form.grdRefCd, this, false);
        	this.copyPaste.addGrid(this.divCcoOshtCd.form.grdOshtCd, this, false);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //콤보박스 코드 조회
        // this.fn_searchCode = function()	{
        // 	var sSvcId = "selectCode";
        // 	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/selectCodeList.do";
        // 	var inDs = "";
        // 	var outDs = "ds_codeList=ds_codeList";
        // 	var arg = "";
        // 	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        // };
        //
        // //조회
        // this.fn_search = function()	{
        // 	var sSvcId = "selectDtl";
        // 	var sUrl = "/bo/cust/bgt/ssp_bo_ma_02/selectBizplcDtl.do";
        // 	var inDs = "ds_search=ds_search";
        // 	var outDs = "ds_dtl=ds_dtl ds_bilcltCondList=ds_bilcltCondList ds_stlMeanList=ds_stlMeanList";
        // 	var arg = "";
        // 	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        // };

        // 운영단위 상세조회
        this.fnLoadOprunitBasis = function() {
        	var sSvcId = 'loadOprunitBasis';
        	var sUrl   = '/bo/cust/oprunit/basis.do';
        	var inDs   = 'dsParam=dsParam';
        	var outDs  = 'dsOprunitBasis=dsOprunitBasis dsRefCdGrp=dsRefCdGrp dsOshtCd=dsOshtCd dsStlMean=dsStlMean';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fnOprunitBasisClbk');
        }

        //저장
        this.fnSaveOprunitBasis = function() {
        	//alert('[window:'+ top.window +']');
        	/*
        	var dsSets=[ 'dsOprunitBasis', 'dsRefCdGrp', 'dsOshtCd' ], dsPostfix='Chgd', sInDs='dsKey=dsKey';
        	for (var i in dsSets) {
        		var dsSrce=dsSets[i], dsChgd=dsSrce+dsPostfix;
        		this[dsChgd] = this.getChgdRowsDataset(this[dsSrce]);
        	}
        	*/
        	var dsOprunitBasisNm='dsOprunitBasis', dsRefGrpNm='dsRefCdGrp', dsOshtCdNm='dsOshtCd', pfix='Chgd', dsOprunitBasisChgdNm=dsOprunitBasisNm+pfix, dsRefGrpChgdNm=dsRefGrpNm+pfix, dsOshtCdChgdNm=dsOshtCdNm+pfix;

        	this[dsOprunitBasisNm].set_enableevent(false);
        	this[dsRefGrpNm      ].set_enableevent(false);
        	this[dsOshtCdNm      ].set_enableevent(false);

        	this[dsOprunitBasisChgdNm] = this.getChgdRowsDataset(this[dsOprunitBasisNm]);
        	this[dsRefGrpChgdNm      ] = this.getChgdRowsDataset(this[dsRefGrpNm      ]);
        	this[dsOshtCdChgdNm      ] = this.getChgdRowsDataset(this[dsOshtCdNm      ]);
        	var isModified = (this[dsOprunitBasisChgdNm].rowcount + this[dsRefGrpChgdNm].rowcount + this[dsOshtCdChgdNm].rowcount) > 0;

        	this[dsOprunitBasisNm].set_enableevent(true);
        	this[dsRefGrpNm      ].set_enableevent(true);
        	this[dsOshtCdNm      ].set_enableevent(true);
        	trace('[dsOprunitBasis:'+ this[dsOprunitBasisChgdNm].rowcount +'][dsRefCdGrp:'+ this[dsRefGrpChgdNm].rowcount +'][dsOshtCd:'+ this[dsOshtCdChgdNm].rowcount +'][isModified:'+ isModified +']');

        	if(!isModified) { alert('변경된 내용이 없습니다.'); return; }

        	// 최대입력문자는 50을 초과 할 수 없음
        	for(var i=0; i<this.dsOshtCd.rowcount; i++){
        		if(this.dsOshtCd.getColumn(i, "MAX_IPT_LEN") > 50){
        			alert(this.fn_getMessage("ERRC000251")); // 최대입력문자는 50Byte를 초과할 수 없습니다.
        			return;
        		}
        	}

        	if(this.fn_chkGrid1NullData()){
        		// 변동이 있는 경우 참조코드의 참조코드명은 필수입력값 입니다.
        		alert(this.fn_getMessage("ERRC000004", "변동이 있는 경우 참조코드의 참조코드명"));
        		return;
        	}

        	if(this.fn_chkGrid2NullData()){
        		// 변동이 있는 경우 일회성코드의 일회성코드명은 필수입력값 입니다.
        		alert(this.fn_getMessage("ERRC000004", "변동이 있는 경우 일회성코드의 일회성코드명"));
        		return;
        	}

        	// 변경권한이 법인만인경우 노출방식은 검색만 가능
        	for(var i=0; i<this.dsRefCdGrp.getRowCount(); i++){
        		if("2" == this.dsRefCdGrp.getColumn(i, "REF_CD_CHG_TGT_CD")){
        			if("1" == this.dsRefCdGrp.getColumn(i, "REF_CD_EXPS_MTHD_CD")){
        				alert(this.fn_getMessage("ERRC000000", "변경여부가 주문자포함인 경우 노출방식은 검색만 저장가능합니다."));
        				return;
        			}
        		}

        		if("N" == this.dsRefCdGrp.getColumn(i, "USE_YN")){
        			if("N" != this.dsRefCdGrp.getColumn(i, "MAND_YN")){
        				alert(this.fn_getMessage("ERRC000000", "참조코드 사용여부가 미사용인경우 필수여부는 아니오 상태만 저장가능합니다."));
        				return;
        			}
        		}
        	}

        	// 일회성코드 사용여부가 미사용인경우 필수여부는 아니오 상태만 저장
        	for(var i=0; i<this.dsOshtCd.getRowCount(); i++){
        		if("N" == this.dsOshtCd.getColumn(i, "USE_YN")){
        			if("N" != this.dsOshtCd.getColumn(i, "MAND_YN")){
        				alert(this.fn_getMessage("ERRC000000", "일회성코드 사용여부가 미사용인경우 필수여부는 아니오 상태만 저장가능합니다."));
        				return;
        			}
        		}
        	}

        	// 로그인 후 첫 페이지 지정 유효성 검사
        	if(this.fn_chkFstPageUseYnData()){
        		return;
        	}

        	if(this.gfn_isNull(this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM.value)) {
        		this.dsOprunitBasis.setColumn(0, "PC_LOGO_DOC_REG_ID", null);
        	}

        	if(this.gfn_isNull(this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM.value)) {
        		this.dsOprunitBasis.setColumn(0, "MBL_LOGO_DOC_REG_ID", null);
        	}

        	// 저장하시겠습니까?
        	if(!confirm(this.fn_getMessage("ERRC000080"))) return;

        	if(this.ds_file.rowcount>0) {
        		if(this.fn_dataCheck(this.ds_file)) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++) {
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				var jsonObj = new Object();

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcDocRegId") {
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_ID") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_ID_NM") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_SEQ") == undefined ? 1 : this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.dsOprunitBasis.getColumn(0, "PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.dsOprunitBasis.getColumn(0, "PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "PC_DOC_REG_ID_ORI_ATFL_NM");
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblDocRegId") {
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_ID") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_ID_NM") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_SEQ") == undefined ? 1 : this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.dsOprunitBasis.getColumn(0, "MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.dsOprunitBasis.getColumn(0, "MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.dsOprunitBasis.getColumn(0, "MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}

        				jsonArray.push(jsonObj);
        			}

        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload("/bo/cust/oprunit/logo-file-upload.do");
        		} else {
        			this.fnSaveOprunitBasisData();
        		}
        	} else {
        		this.fnSaveOprunitBasisData();
        	}
        };

        // 운영단위 정보 저장
        this.fnSaveOprunitBasisData = function() {
        	var dsOprunitBasisNm='dsOprunitBasis', dsRefGrpNm='dsRefCdGrp', dsOshtCdNm='dsOshtCd', pfix='Chgd', dsOprunitBasisChgdNm=dsOprunitBasisNm+pfix, dsRefGrpChgdNm=dsRefGrpNm+pfix, dsOshtCdChgdNm=dsOshtCdNm+pfix;

        	var sSvcId = 'saveOprunitBasis';
        	var sUrl = '/bo/cust/oprunit/basis/save.do';
        	var inDs = 'dsOprunitBasis=dsOprunitBasis '+ dsRefGrpNm +'='+ dsRefGrpChgdNm +' '+ dsOshtCdNm +'='+ dsOshtCdChgdNm;
        	var outDs = '';  // "dsResult=dsResult";
        	var arg = '';

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fnSaveOprunitBasisClbk');
        }

        this.fnSelectChkCcoDetail = function(){
        	var sSvcId = "fnSelectChkCcoDetail";
        	var sUrl = '/bo/cust/oprunit/basis/selectChkCcoDetail.do';
        	var inDs = "ds_search=dsOprunitBasis";
        	var outDs = "ds_chk=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fnSelectChkCcoDetailCallBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fnSelectChkCcoDetailCallBack = function()
        {
        	if(Number(this.ds_chk.getColumn(0, "NM")) > "0"){
        		alert(this.fn_getMessage("ERRC000081")+'\n'+this.fn_getMessage("ERRC000000", "상세코드를 설정하지 않으면 장바구니에서 코드가 보이지 않습니다.")); // 저장되었습니다. 상세코드를 설정하지 않으면 장바구니에서 코드가 보이지 않습니다.
        	}else{
        		alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        	}
        }

        this.fnOprunitBasisClbk = function(svcID, errorCode, errorMsg) {
        	trace('[dsOprunitBasis:'+ this.dsOprunitBasis.saveXML() +'][dsRefCdGrp:'+ this.dsRefCdGrp +'][dsOshtCd:'+ this.dsOshtCd +']')

        	/*
        	제어 권한 설정 (BTN)
        	- 고객 구분이 일반인 경우 해당 버튼 Hidden
        	- 제어 권한 설정 팝업(SSP_BO_MA_47) 호출

        	취소, 저장, 목록 버튼제어 (권한별) - 고객 구분에 따라 출력 버튼 타입 변경
        	- 계약 고객인 경우 = 취소, 저장 버튼 출력
        	- 일반 고객인 경우 = 목록 버튼 출력
        	  목록(BTN) 클릭 시 목록 화면으로 이동
        	*/

        	var sCustSprCd=this.dsOprunitBasis.getColumn(0, 'CUST_SPR_CD');  trace('[sCustSprCd:'+ sCustSprCd +']');
        	this.btnCtlAuth.set_visible('20'==sCustSprCd);

        // 	this.div_mainBtn.form.btnCncl.set_visible('20'==sCustSprCd);
        // 	this.div_mainBtn.form.btnSave.set_visible('20'==sCustSprCd);
        // 	this.div_mainBtn.form.btnList.set_visible('20'!=sCustSprCd);
        	this.div_mainBtn.form.btnCncl.set_visible(true);
        	this.div_mainBtn.form.btnSave.set_visible(true);
        	this.div_mainBtn.form.btnList.set_visible(false);

        	// 단위테스트 수정 (22.05.11 문주환) -> 일반고객일 시 운영정보 아래 모든정보 disable
        	this.div_ctrl.form.rdoSRVON_OCAR_UT_YN.set_enable('20'==sCustSprCd);
        	this.div_ctrl.form.rdoHDV_DLV_USE_YN.set_enable('20'==sCustSprCd);
        	this.div_ctrl.form.chkTrsfYn.set_enable('20'==sCustSprCd);
        	this.div_addInfo.form.rdoOPR_UNIT_MALL_SPR_CD.set_enable('20'==sCustSprCd);
        	this.div_addInfo00.form.edtCART_PHS_CTS.set_enable('20'==sCustSprCd);
        	this.div_addInfo01.form.btn_goStmPop.set_visible('20'==sCustSprCd);
        	this.divCcoRefCd.form.grdRefCd.set_enable('20'==sCustSprCd);
        	this.divCcoOshtCd.form.grdOshtCd.set_enable('20'==sCustSprCd);
        	this.btnMUpdate4Dept.set_enable('20'==sCustSprCd);

        	if(sCustSprCd != '20'){
        		this.dsRefCdGrp.clearData();
        		this.dsOshtCd.clearData();
        	}

        	this.fn_fstPageUrl_visible();
        }

        this.fnSaveOprunitBasisClbk = function(svcID, errorCode, errorMsg) {
        	trace('fnSaveOprunitBasisClbk[errorCode:'+errorCode+'][errorMsg:'+errorMsg+']');

        	if (0!=errorCode) {
        		alert('['+errorCode+'] '+ errorMsg);
        		return;
        	}

        	this.fnLoadOprunitBasis();

        	// 22.07.22 통테 : 참조코드관리 해더값이 존재하는데 디테일이 존재하지않는 경우 alert
        	this.fnSelectChkCcoDetail();

        	//alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        }

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	this.fnLoadOprunitBasis();
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', ['coCd', 'bzplcId', 'oprUnitId']) == null) { return; }
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnCcComCodesClbk >>' + rCodes);

        // 	var pProp=['coCd', 'bzplcId', 'oprUnitId'];
        // 	for (var i in pProp) {
        // 		if (this.gfn_isNull( this.dsParam.getColumn(0, pProp[i]) )) { return null; }
        // 	}
        	//if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', ['coCd', 'bzplcId', 'oprUnitId']) == null) { return; }
        }

        this.fnTestDtlOprunit = function() {
        	trace('Load fnTestDtlOprunit');
        	var pKey = 'dsParam', pIds = ['CO_CD', 'BZPLC_ID', 'OPR_UNIT_ID'];
        	var dsParam = new Dataset(pKey);
        	for (var id in pIds) { dsParam.addColumn(pIds[id], 'String'); }

        	var ttParam = { CO_CD: '1000', BZPLC_ID: 'S000000001', OPR_UNIT_ID: 'S000006713' };  // S000000001	S000006713  /{ CO_CD: '1000', BZPLC_ID: 'S000000782', OPR_UNIT_ID: 'S000007343' }

        	var rIdx = dsParam.addRow();
        	for (var k in pIds) {
        		dsParam.setColumn(rIdx, pIds[k], ttParam[pIds[k]]);
        	}
        	this[pKey] = dsParam;
        	//this.fnLoadOprunitBasis();
        }

        this.fn_chkGrid1NullData = function()
        {
        	for(var i=0; i<this.dsRefCdGrpChgd.rowcount; i++){
        		if(this.gfn_isNull(this.gfn_trim(this.dsRefCdGrpChgd.getColumn(i, "REF_CD_GRP_NM")))){
        			return true;
        		}
        	}
        	return false;
        }

        this.fn_chkGrid2NullData = function()
        {
        	for(var i=0; i<this.dsOshtCdChgd.rowcount; i++){
        		if(this.gfn_isNull(this.gfn_trim(this.dsOshtCdChgd.getColumn(i, "OSHT_CD_NM")))){
        			return true;
        		}
        	}
        	return false;
        }

        this.fn_chkFstPageUseYnData = function()
        {
        	var fstPageUseYn = this.dsOprunitBasis.getColumn(0, 'FST_PAGE_USEYN');
        	var fstPagePcUrl = this.dsOprunitBasis.getColumn(0, 'FST_PAGE_PC_URL');
        	var fstPageMblUrl = this.dsOprunitBasis.getColumn(0, 'FST_PAGE_MBL_URL');
        	if(fstPageUseYn == "Y" && this.gfn_isNull(fstPagePcUrl)) {
        		alert(this.gfn_getMessage("COMS000011", ["로그인 후 첫 페이지 지정 PC URL"]));
        		return true;
        	}
        	if(fstPageUseYn == "Y" && this.gfn_isNull(fstPageMblUrl)) {
        		alert(this.gfn_getMessage("COMS000011", ["로그인 후 첫 페이지 지정 MOBILE URL"]));
        		return true;
        	}

        	return false;
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btnSave_onclick = function(obj,e) {
        	//if(!confirm("저장하시겠습니까?")) return;
        	this.fnSaveOprunitBasis();
        };

        this.divCcoRefCd_grdRefCd_oncellclick = function(obj,e) {
        	var eRix=e.row, eCix=e.cell, eCid=this.getBindColumnIDByIndex(obj, e.cell), eDs=obj.getBindDataset();  trace('[eCix:'+ eCix +'][eCid:'+ eCid +']');

        	if (eCix == 9) {  // "REF_CD" == eCid
        		// 데이터 값이 없을 경우, 관리정보 저장 후 상세설정을 해야한다는 메세지 출력
        		var refCdSeq = eDs.getColumn(eRix, 'REF_CD_GRP_SEQ'), refCdExist = eDs.getColumn(eRix, 'REF_CD_GRP_SEQ_EXIST');  // trace('[refCdSeq:'+ refCdSeq +'][refCdExist:'+ refCdExist +']['+ (refCdSeq != refCdExist) +']');
        		if (refCdExist == undefined) {
        			alert(this.fn_getMessage("ERRC000264")); // 미등록 참조코드는 참조코드 관리 저장 후 상세설정이 가능합니다.
        			return;
        		}

        		var args = {
        			  coCd       : eDs.getColumn(eRix, 'CO_CD'         )
        			, bzplcId    : eDs.getColumn(eRix, 'BZPLC_ID'      )
        			, oprUnitId  : eDs.getColumn(eRix, 'OPR_UNIT_ID'   )
        			, refCdGrpSeq: eDs.getColumn(eRix, 'REF_CD_GRP_SEQ')
        			, refCdGrpNm : eDs.getColumn(eRix, 'REF_CD_GRP_NM' )
        			//, useYn      : eDs.getColumn(eRix, 'USE_YN'      )
        			, createYn   : eDs.getColumn(eRix, 'USE_YN'        )
        		};
        		this.gfn_openPopup('bzplcRefCdPop', 'CC::SSP_BO_MA_66.xfdl', args, 'fn_popupCallback', { title: '참조코드 상세설정', titlebar: 'true' });
        	}

        	var i = e.row;
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID

        	if(columnId == "REF_CD_EXPS_MTHD_CD"){
        		if("2" == this.dsRefCdGrp.getColumn(i, "REF_CD_CHG_TGT_CD")){
        			alert(this.fn_getMessage("ERRC000000", "변경여부가 주문자포함인 경우 노출방식은 검색만 저장가능합니다."));
        		}
        	}else if(columnId == "MAND_YN"){
        		if("N" == this.dsRefCdGrp.getColumn(i, "USE_YN")){
        			alert(this.fn_getMessage("ERRC000000","참조코드 사용여부가 미사용인경우 필수여부는 수정이 불가능합니다."));
        			this.dsRefCdGrp.setColumn(i, "MAND_YN", "N");
        		}
        	}

        	obj.dropdownCombo();
        };

        // 제어권한 설정
        this.btnCtlAuth_onclick = function(obj,e)
        {
        	var args = {
        		  coCd       : this.dsOprunitBasis.getColumn(0, 'CO_CD'         )
        		, bzplcId    : this.dsOprunitBasis.getColumn(0, 'BZPLC_ID'      ), bzplcNm    : this.dsOprunitBasis.getColumn(0, 'BZPLC_NM'      )
        		, oprUnitId  : this.dsOprunitBasis.getColumn(0, 'OPR_UNIT_ID'   ), oprUnitNm  : this.dsOprunitBasis.getColumn(0, 'OPR_UNIT_NM'   )
        		//, useYn      : eDs.getColumn(eRix, 'USE_YN'        )
        	};
        	this.gfn_openPopup('bzplcCtlAuthPop', 'CC::SSP_BO_MA_47.xfdl', args, '', { title: '제어권한 설정', titlebar: 'true' });
        };

        this.btnCncl_onclick = function(obj,e)
        {
        	this.close();
        };

        // 출고거래명세서 검색 팝업 클릭, 박재광 2022.05.10
        this.div_addInfo01_btn_goStmPop_onclick = function(obj,e)
        {
        	// 팝업 인자는 없어도 빈값("")으로 주시면 감사감사
        	var args = {
        		 rptId	  : ""	//보고서ID
        		,rptNm    : ""	//보고서명
        		,salsprcYn: ""	//판매가여부
        	};
        	this.gfn_openPopup('goStmPop', 'CC::SSP_BO_MA_48.xfdl', args, 'fn_goStmPopupCallback', { title: '출고거래명세서 검색', titlebar: 'true' });
        };

        // 출고거래명세서 검색 팝업 콜백, 박재광 2022.05.10
        this.fn_goStmPopupCallback = function(sPopupId, sRetValue){
        	const cmpObj = JSON.parse(sRetValue);

        	var RPT_ID = cmpObj.RPT_ID      //보고서ID
        	var RPT_NM = cmpObj.RPT_NM      //보고서명
        	//var RPT_URL = cmpObj.RPT_URL     //보고서URL
        	//var SALSPRC_YN = cmpObj.SALSPRC_YN	//판매가여부
        	// this.div_addInfo01.form.edt_rptNm.set_value(RPT_NM);

        	this.dsOprunitBasis.setColumn(0, 'RPT_ID', RPT_ID);
        	this.dsOprunitBasis.setColumn(0, 'RPT_NM', RPT_NM);
        }

        this.divCcoOshtCd_grdOshtCd_oncellclick = function(obj,e)
        {
        	var i = e.row;
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID

        	if(columnId == "MAX_IPT_LEN"){
        		var MAX_IPT_LEN = this.dsOshtCd.getColumn(i, "MAX_IPT_LEN");
        		if(MAX_IPT_LEN > 50){
        			this.dsOshtCd.setColumn(i, "MAX_IPT_LEN", 50);
        		}
        	}else if(columnId == "MAND_YN"){
        		if("N" == this.dsOshtCd.getColumn(i, "USE_YN")){
        			alert(this.fn_getMessage("ERRC000000","일회성코드 사용여부가 미사용인경우 필수여부는 수정이 불가능합니다."));
        			this.dsOshtCd.setColumn(i, "MAND_YN", "N");
        		}
        	}

        	obj.dropdownCombo();
        };


        this.dsRefCdGrp_oncolumnchanged = function(obj,e)
        {
        	var columnRow = e.row;

        	if(e.columnid == "REF_CD_CHG_TGT_CD"){
        		if("2" == this.dsRefCdGrp.getColumn(columnRow, "REF_CD_CHG_TGT_CD")){
        			// 변경권한이 법인만인경우 노출방식은 검색만 가능
        			this.dsRefCdGrp.setColumn(columnRow, "REF_CD_EXPS_MTHD_CD", "2");
        			return;
        		}
        	}

        	if(e.columnid == "USE_YN"){
        		if("N" == this.dsRefCdGrp.getColumn(columnRow, "USE_YN")){
        			// 사용여부가 미사용인 경우 필수여부 아니오
        			this.dsRefCdGrp.setColumn(columnRow, "MAND_YN", "N");
        			return;
        		}
        	}
        };

        this.dsOshtCd_oncolumnchanged = function(obj,e)
        {
        	var columnRow = e.row;
        	if(e.columnid == "USE_YN"){
        		if("N" == this.dsOshtCd.getColumn(columnRow, "USE_YN")){
        			// 사용여부가 미사용인 경우 필수여부 아니오
        			this.dsOshtCd.setColumn(columnRow, "MAND_YN", "N");
        			return;
        		}
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	var param = {
        		  pgmId : "SSP_BO_MA_05"
        	};

        	param.coCd = this.dsOprunitBasis.getColumn(0,"CO_CD");
        	param.bzplcId = this.dsOprunitBasis.getColumn(0,"BZPLC_ID");
        	param.oprUnitId = this.dsOprunitBasis.getColumn(0, "OPR_UNIT_ID");

        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, "fn_popupCallback");
        };

        this.frmSSP_BO_MA_06_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        this.edt_LOGO_DOC_REG_ID_NM_onmouseenter = function(obj,e)
        {
        	var docRegId = "";
        	var docRegSeq = "";
        	var width = 400;
        	var height = 50;

        	if(obj.id == "edt_PC_LOGO_DOC_REG_ID_NM") {
        		docRegId = this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_ID");
        		docRegSeq = this.dsOprunitBasis.getColumn(0, "PC_LOGO_DOC_REG_SEQ");
        	} else if(obj.id == "edt_MBL_LOGO_DOC_REG_ID_NM") {
        		docRegId = this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_ID");
        		docRegSeq = this.dsOprunitBasis.getColumn(0, "MBL_LOGO_DOC_REG_SEQ");
        	}

        	if(!this.gfn_isNull(docRegId)) {
        		var svcUrl = nexacro.getEnvironment().services["svcUrl"].url;
        		var left = nexacro.toNumber(obj.left);
        		var top = nexacro.toNumber(obj.top) - height;

        		imgViewObj.set_image(svcUrl + "/co/image.do?docRegId=" + docRegId + "&docRegSeq=" + docRegSeq);
        		imgViewObj.set_width(width);
         		imgViewObj.set_height(height);
        		imgViewObj.set_left(left);
        		imgViewObj.set_top(top);
        		imgViewObj.set_visible(true);
        	}
        };

        this.edt_LOGO_DOC_REG_ID_NM_onmouseleave = function(obj,e)
        {
        	imgViewObj.set_visible(false);
        };


        // 파일첨부 버튼 클릭
        this.btn_LOGO_DOC_REG_ID_ADD_onclick = function(obj,e)
        {
        	this.curImgBtnName = obj.id;

        	this.fileDialog.set_accept(".png, .jpg");
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 파일 DIALOG CLOSE
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles))	return;

        	var vFile = e.virtualfiles[0];

        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        // virtualfiles onsuccess
        this.fileList_onsuccess = function(obj, e)
        {
        	var type = "";
        	var edtObj = null;
        	if(obj.id == "btn_PC_LOGO_DOC_REG_ID_CLEAR") {
        		type = "pcDocRegId";
        		edtObj = this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM;
        	} else if(obj.id == "btn_MBL_LOGO_DOC_REG_ID_CLEAR") {
        		type = "mblDocRegId";
        		edtObj = this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM;
        	}

        	var reason = e.reason;
        	if(reason == 1) {
        		// 파일사이즈 체크
        		obj.getFileSize();
        	}

        	if(reason == 9) {
        		if(!this.fn_fileCheck(obj, e.filesize)) {
        			return false;
        		}

        		if(this.curImgBtnName == "btn_PC_LOGO_DOC_REG_ID_ADD") {
        			type = "pcDocRegId";
        			edtObj = this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM;
        		} else if(this.curImgBtnName == "btn_MBL_LOGO_DOC_REG_ID_ADD") {
        			type = "mblDocRegId";
        			edtObj = this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM;
        		}

        		this.dsOprunitBasis.set_updatecontrol(false);
        		this.dsOprunitBasis.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.dsOprunitBasis.set_updatecontrol(true);

        		this.fileUpTrans.removeFile(type);

        		var nRowIdx = this.ds_file.addRow();
        		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_file.setColumn(nRowIdx, "IMG_TYPE", type);

        		edtObj.set_value(obj.filename);
        		this.fileUpTrans.addFile(type, obj)
        	}
        };

        // 첨부파일 검증
        this.fn_fileCheck = function(obj, fileSize)
        {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1).toLowerCase();
        	var fileGbn = ".jpg, .png";
        	var mbSize = fileSize / 1024 / 1024;

        	if(this.maxFileSize < mbSize) {
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if(fileGbn.indexOf(extNm) == -1) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        // virtualfiles onerror
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : " + e.errortype + "\n";
        	msg += "errormsg : " + e.errormsg + "\n";
        	msg += "statuscode : " + e.statuscode;

        	alert(msg);

        	this.nRow = -1;
        };

        // 이미지 삭제 버튼 클릭
        this.btn_LOGO_DOC_REG_ID_CLEAR_onclick = function(obj,e)
        {

        	var type = "";
        	var edtObj = null;
        	if(obj.id == "btn_PC_LOGO_DOC_REG_ID_CLEAR") {
        		type = "pcDocRegId";
        		edtObj = this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM;
        	} else if(obj.id == "btn_MBL_LOGO_DOC_REG_ID_CLEAR") {
        		type = "mblDocRegId";
        		edtObj = this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM;
        	}

        	if(this.gfn_isNull(edtObj.value))       return;
        	if(!confirm("첨부파일을 삭제하시겠습니까?")) return;

        	edtObj.set_value("");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == '"+ type + "'");
        	this.fileUpTrans.removeFile(type);
        	if(findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 저장 버튼 > 파일 업로드 성공
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];

        	if(objCallDs.rowcount  == 0 ) {
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i=0; i<objCallDs.rowcount; i++) {
        		if(objCallDs.getColumn(i, "imgType") == "pcDocRegId") {
        			this.dsOprunitBasis.setColumn(0, "PC_LOGO_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mblDocRegId") {
        			this.dsOprunitBasis.setColumn(0, "MBL_LOGO_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.ds_file.clearData();			// 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	// 신규 데이터 등록
        	this.fnSaveOprunitBasisData();
        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        this.edtFST_PAGE_URL_onkillfocus = function(obj,e)
        {
        	var value = obj.value;
        	if(this.gfn_isNull(value))	obj.set_value(null);
        };

        this.rdoFST_PAGE_USEYN_onitemchanged = function(obj,e)
        {
        	this.fn_fstPageUrl_visible();
        };

        this.fn_fstPageUrl_visible = function()
        {
        	var formObj = this.div_LOGN_AFTH_FST_PAGE.form;
        	var flag = formObj.rdoFST_PAGE_USEYN.value == "Y";

        	formObj.Static_FST_PAGE_PC_URL.set_visible(flag);
        	formObj.Static_FST_PAGE_PC_URL_BACK.set_visible(flag);
        	formObj.edtFST_PAGE_PC_URL.set_visible(flag);
        	formObj.Static_FST_PAGE_MBL_URL.set_visible(flag);
        	formObj.Static21_FST_PAGE_MBL_URL_BACK.set_visible(flag);
        	formObj.edtFST_PAGE_MBL_URL.set_visible(flag);

        	this.div_LOGN_AFTH_FST_PAGE.set_height(flag ? 130 : 66);
        	if(!flag) {
        		formObj.edtFST_PAGE_PC_URL.set_value(null);
        		formObj.edtFST_PAGE_MBL_URL.set_value(null);
        	}

        	this.resetScroll();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.frmSSP_BO_MA_06_onkeyup,this);
            this.div_basis.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.ltrUSE_YN.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_acct.form.ltrUSE_YN.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.divCcoRefCd.form.grdRefCd.addEventHandler("oncellclick",this.divCcoRefCd_grdRefCd_oncellclick,this);
            this.div_addInfo01.form.btn_goStmPop.addEventHandler("onclick",this.div_addInfo01_btn_goStmPop_onclick,this);
            this.divCcoOshtCd.form.grdOshtCd.addEventHandler("oncellclick",this.divCcoOshtCd_grdOshtCd_oncellclick,this);
            this.div_LOGN_AFTH_FST_PAGE.form.rdoFST_PAGE_USEYN.addEventHandler("onitemchanged",this.rdoFST_PAGE_USEYN_onitemchanged,this);
            this.div_LOGN_AFTH_FST_PAGE.form.edtFST_PAGE_PC_URL.addEventHandler("onkillfocus",this.edtFST_PAGE_URL_onkillfocus,this);
            this.div_LOGN_AFTH_FST_PAGE.form.edtFST_PAGE_MBL_URL.addEventHandler("onkillfocus",this.edtFST_PAGE_URL_onkillfocus,this);
            this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM.addEventHandler("onmouseenter",this.edt_LOGO_DOC_REG_ID_NM_onmouseenter,this);
            this.div_FO_LOGO.form.edt_PC_LOGO_DOC_REG_ID_NM.addEventHandler("onmouseleave",this.edt_LOGO_DOC_REG_ID_NM_onmouseleave,this);
            this.div_FO_LOGO.form.btn_PC_LOGO_DOC_REG_ID_ADD.addEventHandler("onclick",this.btn_LOGO_DOC_REG_ID_ADD_onclick,this);
            this.div_FO_LOGO.form.btn_PC_LOGO_DOC_REG_ID_CLEAR.addEventHandler("onclick",this.btn_LOGO_DOC_REG_ID_CLEAR_onclick,this);
            this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM.addEventHandler("onmouseenter",this.edt_LOGO_DOC_REG_ID_NM_onmouseenter,this);
            this.div_FO_LOGO.form.edt_MBL_LOGO_DOC_REG_ID_NM.addEventHandler("onmouseleave",this.edt_LOGO_DOC_REG_ID_NM_onmouseleave,this);
            this.div_FO_LOGO.form.btn_MBL_LOGO_DOC_REG_ID_ADD.addEventHandler("onclick",this.btn_LOGO_DOC_REG_ID_ADD_onclick,this);
            this.div_FO_LOGO.form.btn_MBL_LOGO_DOC_REG_ID_CLEAR.addEventHandler("onclick",this.btn_LOGO_DOC_REG_ID_CLEAR_onclick,this);
            this.div_mainBtn.form.btnCncl.addEventHandler("onclick",this.btnCncl_onclick,this);
            this.div_mainBtn.form.btnList.addEventHandler("onclick",this.btnCncl_onclick,this);
            this.div_mainBtn.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCtlAuth.addEventHandler("onclick",this.btnCtlAuth_onclick,this);
            this.btnMUpdate4Dept.addEventHandler("onclick",this.btn_add_onclick,this);
            this.dsOshtCd.addEventHandler("oncolumnchanged",this.dsOshtCd_oncolumnchanged,this);
            this.dsRefCdGrp.addEventHandler("oncolumnchanged",this.dsRefCdGrp_oncolumnchanged,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_MA_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
