(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_01");
            this.set_titletext("고객 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID_RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PURG_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_CHG_REQR_RSN\" type=\"STRING\" size=\"500\"/><Column id=\"BLNG_DEPT_CHG_REQR_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_DLGTE_ID_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_CHG_TGT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_EXPS_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_5\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"500\"/><Column id=\"MEMO_CTSD\" type=\"STRING\" size=\"500\"/><Column id=\"CUST_PURG_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_3\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_4\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_5\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS_G41\" type=\"STRING\" size=\"500\"/><Column id=\"CHG_MEMO_CTS_G42\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orgList01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID_RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PURG_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_5\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_3\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_4\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itmGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_UPDATE_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div03","0","0",null,"840","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","50",null,"66","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"32","0",null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","32",null,"32","0",null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","862","1","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("주문 부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_dlvForm","430","32","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("수령인");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","430","1","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("운영 단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","32","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("주문자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","1","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","1","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc","140","5","280","24",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("S000000693 | 엘지전자㈜");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","0","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","570","5","282","24",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("S000002603 | LGE창원2공장MRO");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrDept","1002","5",null,"24","11",null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("D036281648 | 커머셜세탁기개발");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","0","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","0","10","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrpsn","140","36","280","24",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("M000670409 | 안주한");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rcvpsn","570","36","282","24",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("0004764523 | 안주한");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","32","130","32",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("대행자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dlgteIdNm","1002","36",null,"24","11",null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("D036281648 | 커머셜세탁기개발");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","0","20","200","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("■ 고객 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"40","30","10","1286",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta_dlvplcInfo","0","Div00:30","200","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("■ 배송지 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div01","0","sta_dlvplcInfo:10",null,"64","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","31",null,"32","0",null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","31","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("상세 주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","31","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("우편 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","31","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","35","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","35","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","1",null,"32","0",null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","1","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","1","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("수령인명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22_00","430","1","130","32",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","130","1","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","560","1","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_zpcd","396","5","24","24",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_rcvpsnNm","140","5","253","24",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00","420","33","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_telNo","570","5","282","24",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("02-123-4567");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_01","852","0","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_hpNo","1002","5",null,"24","11",null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("010-1234-5678");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00_00","1325","1","10","30",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_zpcd","140","36","280","24",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("642713");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_reprAddr","570","36","282","24",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("경기도 성남시 분당구 대왕판교로");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_addrDtl","1002","36",null,"24","11",null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("N타워 11층");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_etcInfo","0","Div01:123","200","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("■ 기타 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","0","sta_etcInfo:10",null,"276","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("Div02");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","0","32",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static65","0","63",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","0","94",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","862","1","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("계정명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","0","63","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("42");
            obj.set_text("구매 사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","0","94","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("43");
            obj.set_text("상품별 구매 사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_dlvForm","430","32","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("44");
            obj.set_text("귀속 부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("45");
            obj.set_text("비용 이체 부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static22","430","1","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("46");
            obj.set_text("계정 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","32","130","32",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("47");
            obj.set_text("고객사 부서 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","1","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","1","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_purgRsn","139","68",null,"22","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("5");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","130","63","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_prdPurgRsn","139","99",null,"22","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("6");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_costTrnsfDept","140","6","242","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("D036281648 | 커머셜세탁기개발");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_costTrnsfDeptChg","edt_costTrnsfDept:4","5","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("52");
            obj.set_text("변경");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_blngDept","570","37","282","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_blngDeptChg","edt_blngDept:4","36","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("53");
            obj.set_text("변경");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","124",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00_00","130","124","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefMngCd01","139","128","112","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","0","154",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefMngCd02","139","158","112","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13_00_00_00","0","184",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefMngCd03","139","188","112","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13_00_00_00_00","0","214",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefMngCd04","139","218","112","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13_00_00_00_00_00","0","244",null,"32","0",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_refcd1","0","126","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("60");
            obj.set_text("참조 코드 1");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefMngCd05","139","248","112","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_oshtCd1","668","124","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("61");
            obj.set_text("일회성 코드 1");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00_00_01","798","124","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("62");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCd01","sta_oshtCd1:10","129","320","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCd02","sta_oshtCd1:10","159","320","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCd03","sta_oshtCd1:10","189","320","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCd04","sta_oshtCd1:10","219","320","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00_00_00_00_00_00_00","613","124","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("63");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCd05","sta_oshtCd1:10","249","320","22",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ccoRefCd01","edt_ccoRefMngCd01:4","128","24","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ccoRefCd02","edt_ccoRefMngCd02:4","158","24","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ccoRefCd03","edt_ccoRefMngCd03:4","187","24","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ccoRefCd04","edt_ccoRefMngCd04:4","218","24","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ccoRefCd05","edt_ccoRefMngCd05:4","248","24","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCdNm01","377","128","130","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCd01","283","128","90","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCdNm02","377","158","130","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCd02","283","158","90","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCdNm03","377","188","130","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCd03","283","188","90","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCdNm04","377","218","130","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCd04","283","218","90","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCdNm05","377","248","130","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoRefCd05","283","248","90","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_deleteCcoRefCd01","623","128","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("69");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_deleteCcoRefCd02","623","158","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("70");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_deleteCcoRefCd03","623","187","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("71");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_deleteCcoRefCd04","623","217","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("72");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_deleteCcoRefCd05","623","248","40","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("73");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_oshtCd2","668","154","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("74");
            obj.set_text("일회성 코드 2");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_oshtCd3","668","184","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("75");
            obj.set_text("일회성 코드 3");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_oshtCd4","668","214","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("76");
            obj.set_text("일회성 코드 4");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_oshtCd5","668","244","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("77");
            obj.set_text("일회성 코드 5");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_refcd2","0","156","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("78");
            obj.set_text("참조 코드 2");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_refcd3","0","186","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("79");
            obj.set_text("참조 코드 3");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_refcd4","0","216","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("80");
            obj.set_text("참조 코드 4");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta_refcd5","0","246","130","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("81");
            obj.set_text("참조 코드 5");
            obj.set_cssclass("sta_cm_box01L");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_refcd1","511","128","102","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_refcd2","511","158","102","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_refcd3","511","188","102","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_refcd4","511","218","102","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_refcd5","511","248","102","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCdStats1","1132","128",null,"24","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCdStats2","1132","158",null,"24","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCdStats3","1132","188",null,"24","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCdStats5","1132","248",null,"24","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_oshtCdStats4","1132","218",null,"24","6",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_ccoDeptId","140","36","280","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("DFZ:30091");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_acctId","570","5","282","24",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("0000019188");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","0","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("82");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm","1002","5",null,"24","11",null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("73497777 | 제조경비_경상연구개발비_기타비용(기타)");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","0","10","30",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("83");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_cancel","44.99%","Div02:30","70","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:10","Div02:30","70","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta_odrInfo","0","Div01:30","200","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("■ 주문 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div03","0","sta_odrInfo:10",null,"33","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("Div03");
            obj.set_background("aliceblue");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","1",null,"32","0",null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","1","130","32",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("고객구매번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","130","1","10","30",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_custPurgNo","139","5","281","24",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("0");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","430","1","130","32",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("Stock No");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00","560","1","10","30",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_stockNo","570","305","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","Div03.form.Div02.form.edt_costTrnsfDept","value","ds_list01","COST_TRNSF_DEPT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div03.form.Div02.form.edt_blngDept","value","ds_list01","BLNG_DEPT_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div03.form.Div02.form.edt_purgRsn","value","ds_list01","MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div03.form.Div02.form.edt_prdPurgRsn","value","ds_list01","ITM_MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div03.form.Div03.form.edt_custPurgNo","value","ds_list01","CUST_PURG_ODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_stockNo","value","ds_list01","STOCK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div03.form.Div00.form.edt_bzplc","value","ds_list01","BZPLC_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div03.form.Div00.form.edt_oprUnit","value","ds_list01","OPR_UNIT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div03.form.Div00.form.edt_odrDept","value","ds_list01","DEPT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div03.form.Div00.form.edt_odrpsn","value","ds_list01","ODRPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div03.form.Div00.form.edt_rcvpsn","value","ds_list01","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div03.form.Div01.form.edt_rcvpsnNm","value","ds_list01","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div03.form.Div01.form.edt_telNo","value","ds_list01","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div03.form.Div01.form.edt_hpNo","value","ds_list01","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div03.form.Div01.form.edt_zpcd","value","ds_list01","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div03.form.Div01.form.edt_reprAddr","value","ds_list01","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div03.form.Div01.form.edt_addrDtl","value","ds_list01","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div03.form.Div02.form.edt_ccoDeptId","value","ds_list01","CCO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div03.form.Div02.form.edt_acctId","value","ds_list01","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div03.form.Div02.form.edt_acctNm","value","ds_list01","ACCT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div03.form.Div00.form.edt_dlgteIdNm","value","ds_list01","JNT_ODR_DLGTE_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_02_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_02_01.xfdl", function() {
        // 주문관리 상세 - 고객정보

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";

        this.moveType = {UNKNOWN:-1, FIRST:0, PREVIEW:1, NEXT:2, LAST:3, PREVIEW_TAB:10, NEXT_TAB:11};
        this.moveStep = this.moveType.UNKNOWN;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_01_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_02_01_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectCustOderInfo";
        	var sUrl = "/od/oderlist/selectCustOderInfo.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2 ds_list03=ds_output3 ds_list04=ds_output4";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_saveToServer = function() {
        	var sSvcId = "saveOrderDetail";
        	var sUrl = "/od/orderChange/saveOrderDetail.do";
        	var inDs = "ds_update=ds_forServer";
        	var outDs = "ds_fromServer=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectCustOderInfo") {
        		trace("### ds_list01.count : " + this.ds_list01.rowcount + ", ds_list2.count : " + this.ds_list02.rowcount + ", ds_list03.count : " + this.ds_list03.rowcount + ", ds_list04.count : " + this.ds_list04.rowcount);
        		this.fn_setPermissionToModify();
        		this.fn_showCustRefCode();
        		this.fn_showOshtCd();

        		// 원본데이터 복사(ds_list01, ds_list02, ds_list03)
        		this.fn_copyOriginalData();
        	}
        	else if(svcID == "selectOdrNumberCount"){
        		if (this.totalCount > 0) {
        			this.fn_search();
        		}
        	}
        	else if(svcID == "saveOrderDetail"){
        		trace("### saveOrderDetail - ds_fromServer.count : " + this.ds_fromServer.rowcount);
        		var  strRtnCd  = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_CD"));
        		var  strRtnMsg = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_MSG"));

        		if (errorCode == "0") {
        			// 일반적인 저장(사용자가 저장버튼을 클릭한 경우)
        			if (this.moveStep == this.moveType.UNKNOWN) {
        				if( strRtnCd == "S") {
        					alert(this.fn_getMessage("ERRS000156"));
        					this.fn_search();
        				}
        				else	alert(strRtnMsg);
        			}
        			else {
        				this.fn_processMoveStep(this.moveStep, strRtnCd, strRtnMsg);
        			}
        		}
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
        	else {
        		resData = JSON.parse(sRetValue);
        	}

        	switch (sPopupId) {
        		// 우편번호 팝업
        		case "dlvplcInfoZpcd":
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "ZPCD", resData.ZPCD);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "REPR_ADDR", resData.REPR_ADDR);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "DTL_ADDR", resData.DTL_ADDR);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "RCVR_NM", resData.RCVR_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "TEL_NO", resData.TEL_NO);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "HP_NO", resData.HP_NO);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "DLVPLC_ID", resData.DLVPLC_ID);
        			break;
        		// 비용이체부서 변경 팝업
        		case "costTrnsfDeptChgPopup":
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "COST_TRNSF_DEPT_ID", resData.COST_TRNSF_DEPT_ID);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "COST_TRNSF_DEPT_NM", resData.COST_TRNSF_DEPT_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "ACCT_ID", resData.ACCT_ID);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "ACCT_NM", resData.ACCT_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "ACCT_ID_NM", resData.ACCT_ID_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "COST_TRNSF_DEPT_ID_NM", resData.COST_TRNSF_DEPT_ID + "|" + resData.COST_TRNSF_DEPT_NM);
        			// 비용이체부서 변경사유(서버에서는 전달받지 않는 데이터)
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "COST_TRNSF_DEPT_CHG_REQR_RSN", resData.REASON);
        			break;
        		// 귀속부서 변경 팝업
        		case "blngDeptChgPopup":
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "BLNG_DEPT_ID", resData.BLNG_DEPT_ID);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "BLNG_DEPT_NM", resData.BLNG_DEPT_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "BLNG_DEPT_INFO", resData.BLNG_DEPT_INFO);
        			// 귀속부서 변경사유(서버에서는 전달받지 않는 데이터)
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "BLNG_DEPT_CHG_REQR_RSN", resData.REASON);
        			break;
        		// 고객사 참조코드 팝업 1
        		case "ccoRefCd01Popup":
        			this.fn_updateCcoRefCd(1, resData.REF_CD_GRP_SEQ, resData.REF_CD_SEQ, resData.REF_CD_NM, resData.REF_CD);
        			break;
        		// 고객사 참조코드 팝업 2
        		case "ccoRefCd02Popup":
        			this.fn_updateCcoRefCd(2, resData.REF_CD_GRP_SEQ, resData.REF_CD_SEQ, resData.REF_CD_NM, resData.REF_CD);
        			break;
        		// 고객사 참조코드 팝업 3
        		case "ccoRefCd03Popup":
        			this.fn_updateCcoRefCd(3, resData.REF_CD_GRP_SEQ, resData.REF_CD_SEQ, resData.REF_CD_NM, resData.REF_CD);
        			break;
        		// 고객사 참조코드 팝업 4
        		case "ccoRefCd04Popup":
        			this.fn_updateCcoRefCd(4, resData.REF_CD_GRP_SEQ, resData.REF_CD_SEQ, resData.REF_CD_NM, resData.REF_CD);
        			break;
        		// 고객사 참조코드 팝업 5
        		case "ccoRefCd05Popup":
        			this.fn_updateCcoRefCd(5, resData.REF_CD_GRP_SEQ, resData.REF_CD_SEQ, resData.REF_CD_NM, resData.REF_CD);
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/



        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "ODRPSN_ID", this.odrpsnId);

        	this.fn_search();
        };
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수)
        this.fn_shouldSave = function() {
        	this.Div03.form.Div00.form.edt_bzplc.setFocus();

        	var rowType = "";
        	var deletedCount = 0;
        	// ds_list01 - 고객정보
        	deletedCount = this.ds_list01.getDeletedRowCount();
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0)	return true;
        	}

        	deletedCount = 0;
        	// ds_list02 - 고객사 참조코드
        	deletedCount = this.ds_list02.getDeletedRowCount();
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0)	return true;
        	}

        	deletedCount = 0;
        	// ds_list03 - 일회성코드
        	deletedCount = this.ds_list03.getDeletedRowCount();
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		rowType = this.ds_list03.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0)	return true;
        	}

        	return false;
        };

        // 주문상세 화면에서 저장기능 사용(저장기능을 포함한 모든 탭 폼에 있어야되는 함수)
        this.fn_saveChangedDataByParent = function(withMoveStep) {
        	this.moveStep = withMoveStep;

        	var bChanged = this.fn_analyze();
        	if(bChanged == true)	this.fn_saveToServer();
        	else {
        		alert(this.fn_getMessage("ERRS000155"));
        		this.moveStep = this.moveType.UNKNOWN;
        	}
        };

        // fn_saveChangedDataByParent 저장 후처리 작업
        this.fn_processMoveStep = function(moveStep, saveResult, strRtnMsg) {
        	// 저장작업 성공
        	if(saveResult == "S") {
        		alert(this.fn_getMessage("ERRS000156"));
        		this.fn_changeSavedDataset();
        		this.parent.parent.parent.fn_afterSaveChildForm(moveStep, saveResult);
        	}
        	else {
        		alert(strRtnMsg);
        	}
        	this.moveStep = this.moveType.UNKNOWN;
        };

        // 저장 성공시 모든 Dataset 상태를 Dataset.ROWTYPE_NORMAL로 변경
        this.fn_changeSavedDataset = function() {
        	this.ds_list01.updatecontrol = false;
        	this.ds_list02.updatecontrol = false;
        	this.ds_list03.updatecontrol = false;
        	var resultValue = false;
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		resultValue = this.ds_list01.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		resultValue = this.ds_list02.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		resultValue = this.ds_list03.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	this.ds_list01.updatecontrol = true;
        	this.ds_list02.updatecontrol = true;
        	this.ds_list03.updatecontrol = true;
        };

        // 비용이체부서 팝업버튼 Visible
        this.fn_showCostTrnsfDeptChgButton = function() {
        	// 비용이체부서 ID가 존재하면 버튼을 화면에 표시
        	var costTrnsfDeptId = this.ds_list01.getColumn(0, "COST_TRNSF_DEPT_ID");

        	if (this.gfn_isNull(costTrnsfDeptId))	this.Div03.form.Div02.form.btn_costTrnsfDeptChg.set_visible(false);
        	else	this.Div03.form.Div02.form.btn_costTrnsfDeptChg.set_visible(true);
        };
        // 귀속부서 팝업버튼 Visible
        this.fn_showBlngDeptChg = function() {
        	// 귀속부서 ID가 존재하면 버튼을 화면에 표시
        	var blngDeptId = this.ds_list01.getColumn(0, "BLNG_DEPT_INFO");

        	if (this.gfn_isNull(blngDeptId))	this.Div03.form.Div02.form.btn_blngDeptChg.set_visible(false);
        	else	this.Div03.form.Div02.form.btn_blngDeptChg.set_visible(true);
        };

        // 서버에서 데이터 조회 완료 후 수정전 원본 데이터를 ds_orgList01에 저장한다.
        this.fn_copyOriginalData = function() {
        	this.ds_orgList01.clearData();
        	this.ds_orgList01.addRow();

        	// ds_list01 복사
        	if (this.ds_list01.rowcount > 0)	this.ds_orgList01.copyRow(0, this.ds_list01, 0);

        	// ds_list02 복사
        	//var refCdGrpSeq = "";
        	var refCdSeq = "";
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		//refCdGrpSeq = this.ds_list02.getColumn(i, "REF_CD_GRP_SEQ");
        		refCdSeq = this.ds_list02.getColumn(i, "REF_CD_SEQ");
        		this.ds_orgList01.setColumn(0, "REF_CD_SEQ_" + (i + 1), refCdSeq)
        	}

        	// ds_list03 복사
        	var oshtCd = "";
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		oshtCd = this.ds_list03.getColumn(i, "OSHT_CD");
        		this.ds_orgList01.setColumn(0, "OSHT_CD_" + (i + 1), oshtCd);
        	}
        };

        this.fn_getCustRefCodeStatus = function(nRow,nSeq)
        {
        	if( nSeq == undefined || nSeq == 0 )  {
        		var oshtCdSeq = this.ds_list02.getColumn(nRow, "MAND_YN");
        		return oshtCdSeq;
        	}
        	else	{
        		var oshtCdNm = this.ds_list02.getColumn(nRow, "REF_CD_GRP_NM");
        		return oshtCdNm;
        	}
        };

        this.fn_getCustOshtCodeStatus = function(nRow,nSeq)
        {
        	if( nSeq == undefined || nSeq == 0 )  {
        		var oshtCdSeq = this.ds_list03.getColumn(nRow, "MAND_YN");
        		return oshtCdSeq;
        	}
        	else	{
        		var oshtCdNm = this.ds_list03.getColumn(nRow, "OSHT_CD_NM");
        		return oshtCdNm;
        	}
        };
        // 고객사 참조코드 : ds_list02
        this.fn_showCustRefCode = function() {
        	var refCdGrpSeq = "";
        	var refCdSeq = "";
        	var refCdNm = "";
        	var refCd = "";
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		refCdGrpSeq = this.ds_list02.getColumn(i, "REF_CD_GRP_SEQ");
        		refCdSeq = this.ds_list02.getColumn(i, "REF_CD_SEQ");
        		refCdNm = this.ds_list02.getColumn(i, "REF_CD_NM");
        		refCd = this.ds_list02.getColumn(i, "REF_CD");
        		refMand = this.ds_list02.getColumn(i, "MAND_YN");

        		if (i == 0) {
        			this.Div03.form.Div02.form.edt_ccoRefMngCd01.set_value(refCdSeq);
        			//if(refMand != "3")
        			//	this.Div03.form.Div02.form.edt_ccoRefCdNo01.set_value(refCdGrpSeq);
        			this.Div03.form.Div02.form.edt_ccoRefCdNm01.set_value(refCdNm);
        			this.Div03.form.Div02.form.edt_ccoRefCd01.set_value(refCd);

        			if (this.gfn_isNull(refCd)) {
        				//this.Div03.form.Div02.form.btn_ccoRefCd01.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd01.set_visible(false);
        			}
        		}
        		else if (i == 1) {
        			this.Div03.form.Div02.form.edt_ccoRefMngCd02.set_value(refCdSeq);
        			//if(refMand != "3")
        			//	this.Div03.form.Div02.form.edt_ccoRefCdNo02.set_value(refCdGrpSeq);
        			this.Div03.form.Div02.form.edt_ccoRefCdNm02.set_value(refCdNm);
        			this.Div03.form.Div02.form.edt_ccoRefCd02.set_value(refCd);

        			if (this.gfn_isNull(refCd)) {
        				//this.Div03.form.Div02.form.btn_ccoRefCd02.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd02.set_visible(false);
        			}
        		}
        		else if (i == 2) {
        			this.Div03.form.Div02.form.edt_ccoRefMngCd03.set_value(refCdSeq);
        			//if(refMand != "3")
        			//	this.Div03.form.Div02.form.edt_ccoRefCdNo03.set_value(refCdGrpSeq);
        			this.Div03.form.Div02.form.edt_ccoRefCdNm03.set_value(refCdNm);
        			this.Div03.form.Div02.form.edt_ccoRefCd03.set_value(refCd);

        			if (this.gfn_isNull(refCd)) {
        				//this.Div03.form.Div02.form.btn_ccoRefCd03.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd03.set_visible(false);
        			}
        		}
        		else if (i == 3) {
        			this.Div03.form.Div02.form.edt_ccoRefMngCd04.set_value(refCdSeq);
        			//if(refMand != "3")
        			//	this.Div03.form.Div02.form.edt_ccoRefCdNo04.set_value(refCdGrpSeq);
        			this.Div03.form.Div02.form.edt_ccoRefCdNm04.set_value(refCdNm);
        			this.Div03.form.Div02.form.edt_ccoRefCd04.set_value(refCd);

        			if (this.gfn_isNull(refCd)) {
        				//this.Div03.form.Div02.form.btn_ccoRefCd04.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd04.set_visible(false);
        			}
        		}
        		else if (i == 4) {
        			this.Div03.form.Div02.form.edt_ccoRefMngCd05.set_value(refCdSeq);
        			//if(refMand != "3")
        			//	this.Div03.form.Div02.form.edt_ccoRefCdNo05.set_value(refCdGrpSeq);
        			this.Div03.form.Div02.form.edt_ccoRefCdNm05.set_value(refCdNm);
        			this.Div03.form.Div02.form.edt_ccoRefCd05.set_value(refCd);

        			if (this.gfn_isNull(refCd)) {
        				//this.Div03.form.Div02.form.btn_ccoRefCd05.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd05.set_visible(false);
        			}
        		}
        	}
        };

        // 일회성 참조코드 : ds_list03
        this.fn_showOshtCd = function() {
        	var oshtCd = "";
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		oshtCd = this.ds_list03.getColumn(i, "OSHT_CD");

        		if (i == 0)			this.Div03.form.Div02.form.edt_oshtCd01.set_value(oshtCd);
        		else if (i == 1)	this.Div03.form.Div02.form.edt_oshtCd02.set_value(oshtCd);
        		else if (i == 2)	this.Div03.form.Div02.form.edt_oshtCd03.set_value(oshtCd);
        		else if (i == 3)	this.Div03.form.Div02.form.edt_oshtCd04.set_value(oshtCd);
        		else if (i == 4)	this.Div03.form.Div02.form.edt_oshtCd05.set_value(oshtCd);
        	}
        };

        // 고객사 참조코드 업데이트(dataset 업데이트). ds_list02 (참조코드 순번, 관리코드ID, No(순번), 상세코드명, 상세코드)
        // no : 1 ~ 5 사이의 값을 사용해야됨
        this.fn_updateCcoRefCd = function(no, mngCdId, cdSeq, cdNm, cd) {
        	// ds_list02의 rowcount를 5로 설정
        	this.ds_list02.setColumn((no - 1), "REF_CD_GRP_SEQ", mngCdId);
        	this.ds_list02.setColumn((no - 1), "REF_CD_SEQ", cdSeq);
        	this.ds_list02.setColumn((no - 1), "REF_CD_NM", cdNm);
        	this.ds_list02.setColumn((no - 1), "REF_CD", cd);
        	this.fn_showCustRefCode();
        };

        // 일회성 참조코드 업데이트(dataset 업데이트). ds_list03
        this.fn_updateOshtCd = function(no, oshtCd) {
        	this.ds_list03.setColumn((no - 1), "OSHT_CD", oshtCd);
        };

        this.fn_clearRefCode = function() {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd01.set_value("");
        	//this.Div03.form.Div02.form.edt_ccoRefCdNo01.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm01.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd01.set_value("");
        	this.Div03.form.Div02.form.edt_refcd1.set_value("");

        	this.Div03.form.Div02.form.edt_ccoRefMngCd02.set_value("");
        	//this.Div03.form.Div02.form.edt_ccoRefCdNo02.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm02.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd02.set_value("");
        	this.Div03.form.Div02.form.edt_refcd2.set_value("");

        	this.Div03.form.Div02.form.edt_ccoRefMngCd03.set_value("");
        	//this.Div03.form.Div02.form.edt_ccoRefCdNo03.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm03.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd03.set_value("");
        	this.Div03.form.Div02.form.edt_refcd3.set_value("");

        	this.Div03.form.Div02.form.edt_ccoRefMngCd04.set_value("");
        	//this.Div03.form.Div02.form.edt_ccoRefCdNo04.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm04.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd04.set_value("");
        	this.Div03.form.Div02.form.edt_refcd4.set_value("");

        	this.Div03.form.Div02.form.edt_ccoRefMngCd05.set_value("");
        	//this.Div03.form.Div02.form.edt_ccoRefCdNo05.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm05.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd05.set_value("");
        	this.Div03.form.Div02.form.edt_refcd5.set_value("");

        	this.Div03.form.Div02.form.edt_oshtCd01.set_value("");
        	this.Div03.form.Div02.form.edt_oshtCd02.set_value("");
        	this.Div03.form.Div02.form.edt_oshtCd03.set_value("");
        	this.Div03.form.Div02.form.edt_oshtCd04.set_value("");
        	this.Div03.form.Div02.form.edt_oshtCd05.set_value("");
        };

        // INSERT, UPDATE, DELETE 데이터 분류 작업
        // S15 - 구매사유 : MEMO_CTS
        // S14 - 상품별 구매사유 : ITM_MEMO_CTS
        // G23 - 고객사 참조코드 : REF_CD_SEQ_1 ~ 5
        // G29 - 고객구매번호 : CUST_PURG_ODR_NO
        // G30 - Stock No : STOCK_NO
        // G41 - 비용이체부서(ID + 명) : COST_TRNSF_DEPT_ID_NM(비용이체부서ID : COST_TRNSF_DEPT_ID)
        // G42 - 귀속부서(ID + 명) : BLNG_DEPT_INFO(귀속부서ID : BLNG_DEPT_ID)
        // G62 - 배송지정보 -  배송지ID : DLVPLC_ID
        //						수령인명 : RCVR_NM
        //						우편번호 : ZPCD
        //						상세주소 : DTL_ADDR
        //						대표주소 : REPR_ADDR
        //						전화번호 : TEL_NO
        //						휴대폰번호 : HP_NO
        // G80 - 일회성코드 : OSHT_CD_1 ~ 5
        // 원본 데이터셋 또는 화면의 데이터와 비교, INSERT/UPDATE/DELETE 구분자 필요함
        this.fn_analyze = function() {

        	var bChanged = false;
        	this.ds_itmGrp.clearData();
        	this.ds_forServer.clearData();
        	this.ds_forServer.addRow();

        	// G23 - 고객사 참조코드 : REF_CD_SEQ_1 ~ 5, Dataset : ds_list02, INSERT와 UPDATE를 구분해야되나?
        	var refCdSeq01 = this.ds_list02.getColumn(0, "REF_CD_SEQ");
        	var refCdSeq02 = this.ds_list02.getColumn(1, "REF_CD_SEQ");
        	var refCdSeq03 = this.ds_list02.getColumn(2, "REF_CD_SEQ");
        	var refCdSeq04 = this.ds_list02.getColumn(3, "REF_CD_SEQ");
        	var refCdSeq05 = this.ds_list02.getColumn(4, "REF_CD_SEQ");
        	var orgSeq01 = this.ds_orgList01.getColumn(0, "REF_CD_SEQ_1");
        	var orgSeq02 = this.ds_orgList01.getColumn(0, "REF_CD_SEQ_2");
        	var orgSeq03 = this.ds_orgList01.getColumn(0, "REF_CD_SEQ_3");
        	var orgSeq04 = this.ds_orgList01.getColumn(0, "REF_CD_SEQ_4");
        	var orgSeq05 = this.ds_orgList01.getColumn(0, "REF_CD_SEQ_5");

        	if (this.fn_getDSValue(orgSeq01) != this.fn_getDSValue(refCdSeq01) ||
        		this.fn_getDSValue(orgSeq02) != this.fn_getDSValue(refCdSeq02) ||
        		this.fn_getDSValue(orgSeq03) != this.fn_getDSValue(refCdSeq03) ||
        		this.fn_getDSValue(orgSeq04) != this.fn_getDSValue(refCdSeq04) ||
        		this.fn_getDSValue(orgSeq05) != this.fn_getDSValue(refCdSeq05))
        	{
        		this.fn_setRefCdForServer(refCdSeq01,refCdSeq02,refCdSeq03,refCdSeq04,refCdSeq05,"G23");
        		bChanged = true;
        	}

        	// S15 - 구매사유 : MEMO_CTS
        	var memoCts =  this.fn_getDSValue(this.Div03.form.Div02.form.edt_purgRsn.value);
        	var originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "MEMO_CTS"));

        	if (memoCts != originalValue) {
        		this.fn_setForServer("MEMO_CTS", memoCts, "S15");
        		bChanged = true;
        	}
        	// S14 - 상품별 구매사유 : ITM_MEMO_CTS
        	var itmMemoCts =  this.fn_getDSValue(this.Div03.form.Div02.form.edt_prdPurgRsn.value);
        	originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "ITM_MEMO_CTS"));
        	if (itmMemoCts != originalValue) {
        		this.fn_setForServer("MEMO_CTSD", itmMemoCts, "S14");
        		bChanged = true;
        	}

        	// G29 - 고객구매번호 : CUST_PURG_ODR_NO
        	var custPurgOdrNo =  this.fn_getDSValue(this.Div03.form.Div03.form.edt_custPurgNo.value);
        	originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "CUST_PURG_ODR_NO"));
        	if (custPurgOdrNo != originalValue) {
        		this.fn_setForServer("CUST_PURG_ODR_NO", custPurgOdrNo, "G29");
        		bChanged = true;
        	}

        	// G30 - Stock No : STOCK_NO
        	var stockNo =  this.fn_getDSValue(this.edt_stockNo.value);
        	originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "STOCK_NO"));
        	if (stockNo != originalValue) {
        		this.fn_setForServer("STOCK_NO", stockNo, "G30");
        		bChanged = true;
        	}

        	// G41 - 비용이체부서(ID + 명) : COST_TRNSF_DEPT_ID_NM(비용이체부서ID : COST_TRNSF_DEPT_ID)
        	var costTrnsfDeptId =  this.fn_getDSValue(this.ds_list01.getColumn(0, "COST_TRNSF_DEPT_ID"));
        	var ori_costTrnsfDeptId = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "COST_TRNSF_DEPT_ID"));
        	var acct_id =  this.fn_getDSValue(this.ds_list01.getColumn(0, "ACCT_ID"));
        	var ori_acct_id = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "ACCT_ID"));

        	if (this.fn_getDSValue(costTrnsfDeptId) != this.fn_getDSValue(ori_costTrnsfDeptId) ||
        		this.fn_getDSValue(acct_id) != this.fn_getDSValue(ori_acct_id)	) {

        		this.fn_setForServer("COST_TRNSF_DEPT_ID", costTrnsfDeptId, "G41");
        		this.ds_forServer.setColumn(0, "ACCT_ID", acct_id);
        		this.ds_forServer.setColumn(0, "CHG_MEMO_CTS_G41", this.fn_getDSValue(this.ds_list01.getColumn(0, "COST_TRNSF_DEPT_CHG_REQR_RSN")));
        		bChanged = true;
        	}

        	// G42 - 귀속부서(ID + 명) : BLNG_DEPT_INFO(귀속부서ID : BLNG_DEPT_ID)
        	var blngDeptId =  this.fn_getDSValue(this.ds_list01.getColumn(0, "BLNG_DEPT_ID"));
        	originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "BLNG_DEPT_ID"));
        	if (blngDeptId != originalValue) {
        		this.fn_setForServer("BLNG_DEPT_ID", blngDeptId, "G42");
        		this.ds_forServer.setColumn(0, "CHG_MEMO_CTS_G42", this.fn_getDSValue(this.ds_list01.getColumn(0, "BLNG_DEPT_CHG_REQR_RSN")));
        		bChanged = true;
        	}

        	var dlvplcId =  this.fn_getDSValue(this.ds_list01.getColumn(0, "DLVPLC_ID"));
        	originalValue = this.fn_getDSValue(this.ds_orgList01.getColumn(0, "DLVPLC_ID"));
        	if (dlvplcId != originalValue) {
        		this.fn_setForServer("DLVPLC_ID", dlvplcId, "G62");

        		this.ds_forServer.setColumn(0, "RCVR_NM", this.fn_getDSValue(this.ds_list01.getColumn(0, "RCVR_NM")));
        		this.ds_forServer.setColumn(0, "ZPCD", this.fn_getDSValue(this.ds_list01.getColumn(0, "ZPCD")));
        		this.ds_forServer.setColumn(0, "DTL_ADDR", this.fn_getDSValue(this.ds_list01.getColumn(0, "DTL_ADDR")));
        		this.ds_forServer.setColumn(0, "REPR_ADDR", this.fn_getDSValue(this.ds_list01.getColumn(0, "REPR_ADDR")));
        		this.ds_forServer.setColumn(0, "TEL_NO", this.fn_getDSValue(this.ds_list01.getColumn(0, "TEL_NO")));
        		this.ds_forServer.setColumn(0, "HP_NO", this.fn_getDSValue(this.ds_list01.getColumn(0, "HP_NO")));

        		bChanged = true;
        	}

        	// G80 - 일회성코드 : OSHT_CD_1 ~ 5, Dataset : ds_list03
        	var oshtCd01 = this.ds_list03.getColumn(0, "OSHT_CD");
        	var oshtCd02 = this.ds_list03.getColumn(1, "OSHT_CD");
        	var oshtCd03 = this.ds_list03.getColumn(2, "OSHT_CD");
        	var oshtCd04 = this.ds_list03.getColumn(3, "OSHT_CD");
        	var oshtCd05 = this.ds_list03.getColumn(4, "OSHT_CD");
        	var orgOshtCd01 = this.ds_orgList01.getColumn(0, "OSHT_CD_1")
        	var orgOshtCd02 = this.ds_orgList01.getColumn(0, "OSHT_CD_2")
        	var orgOshtCd03 = this.ds_orgList01.getColumn(0, "OSHT_CD_3")
        	var orgOshtCd04 = this.ds_orgList01.getColumn(0, "OSHT_CD_4")
        	var orgOshtCd05 = this.ds_orgList01.getColumn(0, "OSHT_CD_5")

        	if (this.fn_getDSValue(oshtCd01) != this.fn_getDSValue(orgOshtCd01) ||
        		this.fn_getDSValue(oshtCd02) != this.fn_getDSValue(orgOshtCd02) ||
        		this.fn_getDSValue(oshtCd03) != this.fn_getDSValue(orgOshtCd03) ||
        		this.fn_getDSValue(oshtCd04) != this.fn_getDSValue(orgOshtCd04) ||
        		this.fn_getDSValue(oshtCd05) != this.fn_getDSValue(orgOshtCd05))
        	{
        		this.fn_setOshtCdForServer(oshtCd01,oshtCd02,oshtCd03,oshtCd04,oshtCd05,"G80");
        		bChanged = true;
        	}

        	if(bChanged == true)
        	{
        		this.ds_forServer.setColumn(0, "ODR_NO", this.odrNo);
        		this.ds_forServer.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        		this.ds_forServer.setColumn(0, "BZPLC_ID", this.bzplcId);
        		this.ds_forServer.setColumn(0, "CO_CD", this.fv_coCd);
        		this.ds_forServer.setColumn(0, "ODRPSN_ID", this.fn_getDSValue(this.ds_list01.getColumn(0, "ODRPSN_ID")));
        		this.ds_forServer.setColumn(0, "IUD_GB", "U");
        		this.ds_forServer.setColumn(0, "CHN_GB", "BO");
        		this.ds_forServer.setColumn(0, "CHG_MEMO_CTS", "");
        		this.fn_getStrFromDataset(this.ds_forServer,0);
        	}
        	return bChanged;
        };


        this.fn_setOshtCdForServer = function(value1,value2,value3,value4,value5, grpCd) {
        	if(value1 == undefined )
        		this.ds_forServer.setColumn(0, "OSHT_CD_1", "");
        	else
        		this.ds_forServer.setColumn(0, "OSHT_CD_1", value1);

        	if(value2 == undefined )
        		this.ds_forServer.setColumn(0, "OSHT_CD_2", "");
        	else
        		this.ds_forServer.setColumn(0, "OSHT_CD_2", value2);

        	if(value3 == undefined )
        		this.ds_forServer.setColumn(0, "OSHT_CD_3", "");
        	else
        		this.ds_forServer.setColumn(0, "OSHT_CD_3", value3);

        	if(value4 == undefined )
        		this.ds_forServer.setColumn(0, "OSHT_CD_4", "");
        	else
        		this.ds_forServer.setColumn(0, "OSHT_CD_4", value4);

        	if(value5 == undefined )
        		this.ds_forServer.setColumn(0, "OSHT_CD_5", "");
        	else
        		this.ds_forServer.setColumn(0, "OSHT_CD_5", value5);

        	var data = this.ds_forServer.getColumn(0, "ITM_GRP_CD");

        	if (this.gfn_isNull(data)) {
        		data = grpCd + ";";
        	}
        	else {
        		data = data + grpCd + ";";
        	}
        	this.ds_forServer.setColumn(0, "ITM_GRP_CD", data);
        };

        this.fn_setRefCdForServer = function(value1,value2,value3,value4,value5, grpCd) {
        	if(value1 == undefined )
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_1", "");
        	else
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_1", value1);

        	if(value2 == undefined )
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_2", "");
        	else
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_2", value2);

        	if(value3 == undefined )
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_3", "");
        	else
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_3", value3);

        	if(value4 == undefined )
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_4", "");
        	else
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_4", value4);

        	if(value5 == undefined )
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_5", "");
        	else
        		this.ds_forServer.setColumn(0, "REF_CD_SEQ_5", value5);

        	var data = this.ds_forServer.getColumn(0, "ITM_GRP_CD");
        	if (this.gfn_isNull(data)) {
        		data = grpCd + ";";
        	}
        	else {
        		data = data + grpCd + ";";
        	}

        	this.ds_forServer.setColumn(0, "ITM_GRP_CD", data);
        };

        this.fn_setForServer = function(columnId, value, grpCd) {
        	if(value == undefined )
        		this.ds_forServer.setColumn(0, columnId, "");
        	else
        		this.ds_forServer.setColumn(0, columnId, value);

        	var data = this.ds_forServer.getColumn(0, "ITM_GRP_CD");
        	if (this.gfn_isNull(data)) {
        		data = grpCd + ";";
        	}
        	else {
        		data = data + grpCd + ";";
        	}

        	this.ds_forServer.setColumn(0, "ITM_GRP_CD", data);
        };

        // 주문상태별 화면 입력(수정) 제한기능
        /*
        CHG_ITM_GRP_CD,			변경아이템그룹코드
        CHG_ITM_GRP_NM,			변경아이템그룹명
        ODR_UPDATE_SPR,			수정구분 ( 0:수정불가, 1:ssp수정, 2:mro수정 )
        ODR_STATS_CD,			주문상태코드
        SALE_ADJ_STATS_CD,		정산상태코드
        =============================================================================
        ** 고객정보 화면 변경아이템 그룹코드 **
         S14 - 상품별 구매사유 : ITM_MEMO_CTS
         S15 - 구매사유 : MEMO_CTS
         G23 - 고객사 참조코드 : REF_CD_SEQ_1 ~ 5
         G29 - 고객구매번호 : CUST_PURG_ODR_NO
         G30 - Stock No : STOCK_NO
         G41 - 비용이체부서(ID + 명) : COST_TRNSF_DEPT_ID_NM(비용이체부서ID : COST_TRNSF_DEPT_ID)
         G42 - 귀속부서(ID + 명) : BLNG_DEPT_INFO(귀속부서ID : BLNG_DEPT_ID)
         G62 - 배송지정보 -  배송지ID : DLVPLC_ID
         G80 - 일회성코드 : OSHT_CD_1 ~ 5
        */
        this.fn_setPermissionToModify = function() {
        	var odrUpdateSpr = "";
        	var chgItmGrpCd = "";
        	var chgItmGrpNm = "";
        	var useSprCd = "";
        	var strText = "";

        	for (var i = 0; i < this.ds_list04.rowcount; i++) {
        		odrUpdateSpr = this.ds_list04.getColumn(i, "ODR_UPDATE_SPR");
        		chgItmGrpCd = this.ds_list04.getColumn(i, "CHG_ITM_GRP_CD");
        		chgItmGrpNm = this.ds_list04.getColumn(i, "CHG_ITM_GRP_NM");
        		useSprCd = this.ds_list04.getColumn(i, "USE_SPR_CD");

        		//trace("GRP_CD: " + chgItmGrpCd + ", GRP_CD: " + chgItmGrpNm + ", UPDATE_SPR: " + odrUpdateSpr + " useSprCd: " + useSprCd);

        		switch (chgItmGrpCd) {
        		case "S14":		// 상품별 구매사유 : ITM_MEMO_CTS
        			if (odrUpdateSpr == "0" || useSprCd == "N" )	this.Div03.form.Div02.form.edt_prdPurgRsn.set_readonly(true);
        			else						this.Div03.form.Div02.form.edt_prdPurgRsn.set_readonly(false);
        			break;
        		case "S15":		// 구매사유 : MEMO_CTS
        			if (odrUpdateSpr == "0" || useSprCd == "N" )	this.Div03.form.Div02.form.edt_purgRsn.set_readonly(true);
        			else						this.Div03.form.Div02.form.edt_purgRsn.set_readonly(false);
        			break;
        		case "G29":		// 고객구매번호 : CUST_PURG_ODR_NO
        			if (odrUpdateSpr == "0" || useSprCd == "N" )	this.Div03.form.Div03.form.edt_custPurgNo.set_readonly(true);
        			else						this.Div03.form.Div03.form.edt_custPurgNo.set_readonly(false);
        			break;
        		case "G30":		// Stock No : STOCK_NO
        			//if (odrUpdateSpr == "0" || useSprCd == "N")	this.edt_stockNo.set_readonly(true);
        			//else						this.edt_stockNo.set_readonly(false);
        			break;
        		case "G41":		// 비용이체부서(ID + 명) : COST_TRNSF_DEPT_ID_NM(비용이체부서ID : COST_TRNSF_DEPT_ID)
        			if (odrUpdateSpr == "0" || useSprCd == "3" )	this.Div03.form.Div02.form.btn_costTrnsfDeptChg.set_visible(false);
        			else						this.Div03.form.Div02.form.btn_costTrnsfDeptChg.set_visible(true);
        			break;
        		case "G42":		// 귀속부서(ID + 명) : BLNG_DEPT_INFO(귀속부서ID : BLNG_DEPT_ID)
        			if (odrUpdateSpr == "0" || useSprCd == "N" )	this.Div03.form.Div02.form.btn_blngDeptChg.set_visible(false);
        			else						this.Div03.form.Div02.form.btn_blngDeptChg.set_visible(true);
        			break;
        		case "G62":		// 배송지정보 -  배송지ID : DLVPLC_ID
        			if (odrUpdateSpr == "0")	this.Div03.form.Div01.form.btn_zpcd.set_visible(false);
        			else						this.Div03.form.Div01.form.btn_zpcd.set_visible(true);
        			break;
        		case "G23":		// 고객사 참조코드 : REF_CD_SEQ_1 ~ 5
        			if (odrUpdateSpr == "0") {
        				this.Div03.form.Div02.form.btn_ccoRefCd01.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd01.set_visible(false);

        				this.Div03.form.Div02.form.btn_ccoRefCd02.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd02.set_visible(false);

        				this.Div03.form.Div02.form.btn_ccoRefCd03.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd03.set_visible(false);

        				this.Div03.form.Div02.form.btn_ccoRefCd04.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd04.set_visible(false);

        				this.Div03.form.Div02.form.btn_ccoRefCd05.set_visible(false);
        				this.Div03.form.Div02.form.btn_deleteCcoRefCd05.set_visible(false);
        			}
        			else {
        				if(this.fn_getCustRefCodeStatus(1-1,0) != "3")	{
        					this.Div03.form.Div02.form.btn_ccoRefCd01.set_visible(true);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd01.set_visible(true);
        				}
        				else {
        					this.Div03.form.Div02.form.btn_ccoRefCd01.set_visible(false);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd01.set_visible(false);
        				}

        				trace("###### this.fn_getCustRefCodeStatus(2-1,0) : " + this.fn_getCustRefCodeStatus(2-1,0));
        				if(this.fn_getCustRefCodeStatus(2-1,0) != "3")	{
        					this.Div03.form.Div02.form.btn_ccoRefCd02.set_visible(true);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd02.set_visible(true);
        					//trace("babo is " + this.Div03.form.Div02.form.btn_deleteCcoRefCd02.text);
        				}
        				else {
        					trace("### fn_setPermissionToModify 02 - ccoRefCd02 visible false");
        					this.Div03.form.Div02.form.btn_ccoRefCd02.set_visible(false);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd02.set_visible(false);
        				}

        				if(this.fn_getCustRefCodeStatus(3-1,0) != "3")	{
        					this.Div03.form.Div02.form.btn_ccoRefCd03.set_visible(true);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd03.set_visible(true);
        				}
        				else {
        					this.Div03.form.Div02.form.btn_ccoRefCd03.set_visible(false);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd03.set_visible(false);
        				}

        				if(this.fn_getCustRefCodeStatus(4-1,0) != "3")	{
        					this.Div03.form.Div02.form.btn_ccoRefCd04.set_visible(true);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd04.set_visible(true);
        				}
        				else {
        					this.Div03.form.Div02.form.btn_ccoRefCd04.set_visible(false);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd04.set_visible(false);
        				}

        				if(this.fn_getCustRefCodeStatus(5-1,0) != "3")	{
        					this.Div03.form.Div02.form.btn_ccoRefCd05.set_visible(true);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd05.set_visible(true);
        				}
        				else {
        					this.Div03.form.Div02.form.btn_ccoRefCd05.set_visible(false);
        					this.Div03.form.Div02.form.btn_deleteCcoRefCd05.set_visible(false);
        				}
        			}
        			this.Div03.form.Div02.form.edt_refcd1.set_value(this.fn_getCustRefCodeStatus(1-1, 1));
        			this.Div03.form.Div02.form.edt_refcd2.set_value(this.fn_getCustRefCodeStatus(2-1, 1));
        			this.Div03.form.Div02.form.edt_refcd3.set_value(this.fn_getCustRefCodeStatus(3-1, 1));
        			this.Div03.form.Div02.form.edt_refcd4.set_value(this.fn_getCustRefCodeStatus(4-1, 1));
        			this.Div03.form.Div02.form.edt_refcd5.set_value(this.fn_getCustRefCodeStatus(5-1, 1));
        			break;
        		case "G80":		// 일회성코드 : OSHT_CD_1 ~ 5
        			if (odrUpdateSpr == "0") {
        				this.Div03.form.Div02.form.edt_oshtCd01.set_readonly(true);
        				this.Div03.form.Div02.form.edt_oshtCd02.set_readonly(true);
        				this.Div03.form.Div02.form.edt_oshtCd03.set_readonly(true);
        				this.Div03.form.Div02.form.edt_oshtCd04.set_readonly(true);
        				this.Div03.form.Div02.form.edt_oshtCd05.set_readonly(true);
        			}
        			else {
        				if( this.fn_getCustOshtCodeStatus(1-1) !="3")	{
        					this.Div03.form.Div02.form.edt_oshtCd01.set_readonly(false);
        				}
        				else
        					this.Div03.form.Div02.form.edt_oshtCd01.set_readonly(true);

        				if( this.fn_getCustOshtCodeStatus(2-1) !="3")	{
        					this.Div03.form.Div02.form.edt_oshtCd02.set_readonly(false);
        				}
        				else
        					this.Div03.form.Div02.form.edt_oshtCd02.set_readonly(true);

        				if( this.fn_getCustOshtCodeStatus(3-1) !="3")	{
        					this.Div03.form.Div02.form.edt_oshtCd03.set_readonly(false);
        				}
        				else
        					this.Div03.form.Div02.form.edt_oshtCd03.set_readonly(true);

        				if( this.fn_getCustOshtCodeStatus(4-1) !="3")	{
        					this.Div03.form.Div02.form.edt_oshtCd04.set_readonly(false);
        				}
        				else
        					this.Div03.form.Div02.form.edt_oshtCd04.set_readonly(true);

        				if( this.fn_getCustOshtCodeStatus(5-1) !="3")	{
        					this.Div03.form.Div02.form.edt_oshtCd05.set_readonly(false);
        				}
        				else
        					this.Div03.form.Div02.form.edt_oshtCd05.set_readonly(true);
        			}
        			this.Div03.form.Div02.form.edt_oshtCdStats1.set_value(this.fn_getCustOshtCodeStatus(1-1, 1));
        			this.Div03.form.Div02.form.edt_oshtCdStats2.set_value(this.fn_getCustOshtCodeStatus(2-1, 1));
        			this.Div03.form.Div02.form.edt_oshtCdStats3.set_value(this.fn_getCustOshtCodeStatus(3-1, 1));
        			this.Div03.form.Div02.form.edt_oshtCdStats4.set_value(this.fn_getCustOshtCodeStatus(4-1, 1));
        			this.Div03.form.Div02.form.edt_oshtCdStats5.set_value(this.fn_getCustOshtCodeStatus(5-1, 1));
        			break;
        		default:
        		}
        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodCtrlENTER("fn_search");
        	this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 우편번호 팝업
        this.btn_zpcd_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.ds_list01.getColumn(0, "ODRPSN_ID"),
        					pv2:this.ds_list01.getColumn(0, "DLVPLC_ID")};
        	this.gfn_openPopup("dlvplcInfoZpcd", "OD::SSP_BO_OA_51.xfdl", objParam);
        };
        // 비용이체부서 변경 버튼
        this.btn_costTrnsfDeptChg_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.fv_coCd,
        					pv2:this.ds_list01.getColumn(0, "ODRPSN_ID"),
        					pv3:this.ds_list01.getColumn(0, "MBR_NM"),
        					pv4:this.ds_list01.getColumn(0, "COST_TRNSF_DEPT_ID"),
        					pv5:this.ds_list01.getColumn(0, "COST_TRNSF_DEPT_NM"),
        					pv6:this.ds_list01.getColumn(0, "ACCT_ID"),
        					pv7:this.ds_list01.getColumn(0, "ACCT_NM"),
        					pv8:this.ds_list01.getColumn(0, "ACCT_ID_NM")};
        	this.gfn_openPopup("costTrnsfDeptChgPopup", "OD::SSP_BO_OA_11.xfdl", objParam);
        };
        // 귀속부서 변경 버튼
        this.btn_blngDeptChg_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.fv_coCd,
        					pv2:this.ds_list01.getColumn(this.ds_list01.rowposition, "ODRPSN_ID"),
        					pv3:this.ds_list01.getColumn(this.ds_list01.rowposition, "MBR_NM"),
        					pv4:this.ds_list01.getColumn(this.ds_list01.rowposition, "BLNG_DEPT_ID"),
        					pv5:this.ds_list01.getColumn(this.ds_list01.rowposition, "BLNG_DEPT_NM")};
        	this.gfn_openPopup("blngDeptChgPopup", "OD::SSP_BO_OA_56.xfdl", objParam);
        };
        this.fn_ccoRefCdParam = function(nRow)
        {
        	var objParam = {pv1:this.bzplcId,
        					pv2:this.odrNo,
        					pv3:this.odrItmNo,
        					pv4:this.ds_list02.getColumn(nRow, "REF_CD_GRP_SEQ")};
        	return objParam;
        }

        // 고객사 참조 팝업 01
        this.btn_ccoRefCd01_onclick = function(obj,e)
        {
        	this.gfn_openPopup("ccoRefCd01Popup", "OD::SSP_BO_OA_52.xfdl", this.fn_ccoRefCdParam(1-1));
        };
        // 고객사 참조 팝업 02
        this.btn_ccoRefCd02_onclick = function(obj,e)
        {
        	this.gfn_openPopup("ccoRefCd02Popup", "OD::SSP_BO_OA_52.xfdl", this.fn_ccoRefCdParam(2-1));
        };
        // 고객사 참조 팝업 03
        this.btn_ccoRefCd03_onclick = function(obj,e)
        {
        	this.gfn_openPopup("ccoRefCd03Popup", "OD::SSP_BO_OA_52.xfdl", this.fn_ccoRefCdParam(3-1));
        };
        // 고객사 참조 팝업 04
        this.btn_ccoRefCd04_onclick = function(obj,e)
        {
        	this.gfn_openPopup("ccoRefCd04Popup", "OD::SSP_BO_OA_52.xfdl", this.fn_ccoRefCdParam(4-1));
        };
        // 고객사 참조 팝업 05
        this.btn_ccoRefCd05_onclick = function(obj,e)
        {
        	this.gfn_openPopup("ccoRefCd05Popup", "OD::SSP_BO_OA_52.xfdl", this.fn_ccoRefCdParam(5-1));
        };

        // 고객사 참조코드 삭제 01
        this.btn_deleteCcoRefCd01_onclick = function(obj,e)
        {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd01.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm01.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd01.set_value("");

        	// 그룹코드는 삭제 안하기로함.
        	//this.ds_list02.setColumn(0, "REF_CD_GRP_SEQ", "");
        	this.ds_list02.setColumn(0, "REF_CD_SEQ", "");
        	this.ds_list02.setColumn(0, "REF_CD_NM", "");
        	this.ds_list02.setColumn(0, "REF_CD", "");
        };
        // 고객사 참조코드 삭제 02
        this.btn_deleteCcoRefCd02_onclick = function(obj,e)
        {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd02.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm02.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd02.set_value("");

        	// 그룹코드는 삭제 안하기로함.
        	//this.ds_list02.setColumn(1, "REF_CD_GRP_SEQ", "");
        	this.ds_list02.setColumn(1, "REF_CD_SEQ", "");
        	this.ds_list02.setColumn(1, "REF_CD_NM", "");
        	this.ds_list02.setColumn(1, "REF_CD", "");
        };
        // 고객사 참조코드 삭제 03
        this.btn_deleteCcoRefCd03_onclick = function(obj,e)
        {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd03.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm03.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd03.set_value("");

        	// 그룹코드는 삭제 안하기로함.
        	//this.ds_list02.setColumn(2, "REF_CD_GRP_SEQ", "");
        	this.ds_list02.setColumn(2, "REF_CD_SEQ", "");
        	this.ds_list02.setColumn(2, "REF_CD_NM", "");
        	this.ds_list02.setColumn(2, "REF_CD", "");
        };
        // 고객사 참조코드 삭제 04
        this.btn_deleteCcoRefCd04_onclick = function(obj,e)
        {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd04.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm04.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd04.set_value("");

        	// 그룹코드는 삭제 안하기로함.
        	//this.ds_list02.setColumn(3, "REF_CD_GRP_SEQ", "");
        	this.ds_list02.setColumn(3, "REF_CD_SEQ", "");
        	this.ds_list02.setColumn(3, "REF_CD_NM", "");
        	this.ds_list02.setColumn(3, "REF_CD", "");
        };
        // 고객사 참조코드 삭제 05
        this.btn_deleteCcoRefCd05_onclick = function(obj,e)
        {
        	this.Div03.form.Div02.form.edt_ccoRefMngCd05.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCdNm05.set_value("");
        	this.Div03.form.Div02.form.edt_ccoRefCd05.set_value("");

        	// 그룹코드는 삭제 안하기로함.
        	//this.ds_list02.setColumn(4, "REF_CD_GRP_SEQ", "");
        	this.ds_list02.setColumn(4, "REF_CD_SEQ", "");
        	this.ds_list02.setColumn(4, "REF_CD_NM", "");
        	this.ds_list02.setColumn(4, "REF_CD", "");
        };

        // 저장버튼
        this.btn_save_onclick = function(obj,e)
        {
        	var bChanged = this.fn_analyze();
        	if(bChanged == true)	this.fn_saveToServer();
        	else	alert(this.fn_getMessage("ERRS000155"));
        };
        // 취소버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if (this.fn_shouldSave()) {
        		var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        		// 저장하지 않고 진행
        		if (rtn == false) {
        			this.fn_search();
        		}
        		else {
        			var bChanged = this.fn_analyze();
        			if(bChanged == true)	this.fn_saveToServer();
        			else	alert(this.fn_getMessage("ERRS000155"));
        		}
        	}
        	else {
        		this.fn_search();
        	}
        };

        // 일회성코드 01
        this.edt_oshtCd01_onchanged = function(obj,e)
        {
        	this.ds_list03.setColumn(0, "OSHT_CD", this.Div03.form.Div02.form.edt_oshtCd01.value);
        };

        // 일회성코드 02
        this.edt_oshtCd02_onchanged = function(obj,e)
        {
        	this.ds_list03.setColumn(1, "OSHT_CD", this.Div03.form.Div02.form.edt_oshtCd02.value);
        };

        // 일회성코드 03
        this.edt_oshtCd03_onchanged = function(obj,e)
        {
        	this.ds_list03.setColumn(2, "OSHT_CD", this.Div03.form.Div02.form.edt_oshtCd03.value);
        };

        // 일회성코드 04
        this.edt_oshtCd04_onchanged = function(obj,e)
        {
        	this.ds_list03.setColumn(3, "OSHT_CD", this.Div03.form.Div02.form.edt_oshtCd04.value);
        };

        // 일회성코드 05
        this.edt_oshtCd05_onchanged = function(obj,e)
        {
        	this.ds_list03.setColumn(4, "OSHT_CD", this.Div03.form.Div02.form.edt_oshtCd05.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_02_01_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_02_01_onkeyup,this);
            this.Div03.form.Div00.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div03.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div03.form.Div01.form.btn_zpcd.addEventHandler("onclick",this.btn_zpcd_onclick,this);
            this.Div03.form.Div02.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div03.form.Div02.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div03.form.Div02.form.btn_costTrnsfDeptChg.addEventHandler("onclick",this.btn_costTrnsfDeptChg_onclick,this);
            this.Div03.form.Div02.form.btn_blngDeptChg.addEventHandler("onclick",this.btn_blngDeptChg_onclick,this);
            this.Div03.form.Div02.form.edt_oshtCd01.addEventHandler("onchanged",this.edt_oshtCd01_onchanged,this);
            this.Div03.form.Div02.form.edt_oshtCd02.addEventHandler("onchanged",this.edt_oshtCd02_onchanged,this);
            this.Div03.form.Div02.form.edt_oshtCd03.addEventHandler("onchanged",this.edt_oshtCd03_onchanged,this);
            this.Div03.form.Div02.form.edt_oshtCd04.addEventHandler("onchanged",this.edt_oshtCd04_onchanged,this);
            this.Div03.form.Div02.form.edt_oshtCd05.addEventHandler("onchanged",this.edt_oshtCd05_onchanged,this);
            this.Div03.form.Div02.form.btn_ccoRefCd01.addEventHandler("onclick",this.btn_ccoRefCd01_onclick,this);
            this.Div03.form.Div02.form.btn_ccoRefCd02.addEventHandler("onclick",this.btn_ccoRefCd02_onclick,this);
            this.Div03.form.Div02.form.btn_ccoRefCd03.addEventHandler("onclick",this.btn_ccoRefCd03_onclick,this);
            this.Div03.form.Div02.form.btn_ccoRefCd04.addEventHandler("onclick",this.btn_ccoRefCd04_onclick,this);
            this.Div03.form.Div02.form.btn_ccoRefCd05.addEventHandler("onclick",this.btn_ccoRefCd05_onclick,this);
            this.Div03.form.Div02.form.btn_deleteCcoRefCd01.addEventHandler("onclick",this.btn_deleteCcoRefCd01_onclick,this);
            this.Div03.form.Div02.form.btn_deleteCcoRefCd02.addEventHandler("onclick",this.btn_deleteCcoRefCd02_onclick,this);
            this.Div03.form.Div02.form.btn_deleteCcoRefCd03.addEventHandler("onclick",this.btn_deleteCcoRefCd03_onclick,this);
            this.Div03.form.Div02.form.btn_deleteCcoRefCd04.addEventHandler("onclick",this.btn_deleteCcoRefCd04_onclick,this);
            this.Div03.form.Div02.form.btn_deleteCcoRefCd05.addEventHandler("onclick",this.btn_deleteCcoRefCd05_onclick,this);
            this.Div03.form.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.Div03.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_02_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
