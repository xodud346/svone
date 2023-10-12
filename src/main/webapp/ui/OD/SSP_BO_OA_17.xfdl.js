(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_03");
            this.set_titletext("영업 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZCRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_PATH_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DECI_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_QTY_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QTY_MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PRD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PRD_AMT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DLCST_AMT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AMT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT_VAT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_PRC_DECI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_BSS_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_VAT_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_QTY_DC_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOT_ODR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_VAT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COND_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COND_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRC\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NRML_RTNGDS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PRD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"876","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","20",null,"155","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("transparent");
            obj.set_formscrolltype("none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("■ 영업 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","92",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","0","123",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","862","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","123","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("추가 옵션");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","92","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("StockNo");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","430","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","92","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","31","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","862","123","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("Cat.Killer");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","0","20","30","10",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_hubYn","145","129","150","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Hub 취급 가능여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_fastDlvYn","415","129","150","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("빠른배송");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_bzCrdPrd","665","129","150","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("명함 상품");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_chgBzcrd","751","125","102","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("명함정보변경");
            obj.set_cssclass("btn_WF_default");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdNm","140","34","280","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("2900528 | 니퍼");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfIdNm","570","34","282","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("A1019082 | 세신버팔로(주)");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","29","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCdNm","1002","35",null,"24","11",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("KR | 한국");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_spec","140","96","712","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("ST6EA014;150mm(6inch);1.9mm;160g");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_01","852","92","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_stockNo","1002","96",null,"24","11",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("- | -");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_catKiller","1002","127",null,"24","11",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("SSP_전용");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","61",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","61","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","140","65",null,"24","11",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("2900528 | 니퍼");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","204",null,"196","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","10","200","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("■ 수량/가격 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_dstrbPath",null,"0","102","30","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("유통 경로 변경");
            obj.set_cssclass("btn_WF_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","39",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","70",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static65","0","101",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","132",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","39","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("가격 결정일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","101","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("판매가(VAT제외)");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","430","132","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("상품배송비금액");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_dlvForm","430","70","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("원 주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00","430","101","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("판매금액(VAT제외)");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","132","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("물량할인");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","70","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("최소/배수 수량 단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("유통 경로");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","39","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("매출세금코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","70","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("주문 수량");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","39","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","39","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","40","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"30","30","10","71",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"30","30","10","1296",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","163",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_01","430","163","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("판매금액(VAT포함)");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00","862","163","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("부가세");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","0","163","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("판매가(VAT포함)");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dstrbPath","140","43","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("10 | 내수");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","39","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_saleTxCd","570","43","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("A1 | 10% 과세");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","39","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrQty","140","74","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("2 | EA");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsprc","140","105","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("9,500 | KRW");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_prdDlcstAmt","570","136","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_saleAmt","570","167","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oriOdrQty","570","74","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("2 | EA");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsPrdAmt","570","105","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("12,000 | KRW");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_qtyDcAplyYn","140","136","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("9,500 | KRW");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_vatAmt","1002","167",null,"24","11",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("13,200 | KRW");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_saleAmtVat","140","167","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("0 | KRW");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","993","163","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00_00","1325","162","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_minMultQtyUnit","1002","74",null,"24","11",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("- | -");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","1002","43",null,"24","11",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_format("####-##-## ##:##:##");
            obj.set_displaynulltext(" ");
            obj.set_type("string");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","862","101","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("42");
            obj.set_text("가격결정기준");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_condPrcDeciCd","1002","105",null,"24","11",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_text("- | -");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","862","132","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("44");
            obj.set_text("쿠폰할인");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_cpnDc","1002","136",null,"24","11",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_text("- | -");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","410",null,null,"0","26",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_list02","0","100","33%",null,null,"0",null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list04");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"가격유형\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:COND_TP_NM\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:QTY\" displaytype=\"normal\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\" background=\"aliceblue\"/><Cell col=\"2\" text=\"bind:PRC\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,##0.####\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/></Band></Format></Formats>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grid_list03",null,"0","66%",null,"0","0",null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list03");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"140\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"항목번호\" wordWrap=\"english\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"판매가\"/><Cell col=\"3\" text=\"주문수량\"/><Cell col=\"4\" text=\"판매금액(vat제외)\" wordWrap=\"english\"/><Cell col=\"5\" text=\"판매금액(vat포함)\" wordWrap=\"english\"/><Cell col=\"6\" text=\"주문 상태\"/><Cell col=\"7\" text=\"반품 여부\"/><Cell col=\"8\" text=\"정산 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR_ITM_NO\"/><Cell col=\"1\" text=\"bind:PRD_NM\"/><Cell col=\"2\" text=\"bind:SALSPRC\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0.####\" maskeditmaskchar=\"#\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:ODR_QTY\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,##0.####\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SALE_AMT\" displaytype=\"mask\" maskeditformat=\"###,###,###,###\" maskeditmaskchar=\"#\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALE_AMT_VAT\" maskeditformat=\"###,###,###,###\" maskeditmaskchar=\"#\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:ODR_STATS_CD_NM\"/><Cell col=\"7\" text=\"bind:NRML_RTNGDS_YN\"/><Cell col=\"8\" text=\"bind:ADJ_STATS_CD_NM\"/></Band></Format></Formats>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","0","32.93%","80",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list02");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"총주문금액\"/><Cell col=\"1\" text=\"카트배송비\"/><Cell col=\"2\" text=\"할인금액\"/><Cell col=\"3\" text=\"부가세금액\"/><Cell col=\"4\" text=\"매출금액\"/></Band><Band id=\"body\"><Cell text=\"bind:TOT_ODR_AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:DLCST_AMT\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:DC_AMT\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:TOT_VAT_AMT\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SALE_AMT\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.Div00.form.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,870,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","Div00.form.Div00.form.chk_hubYn","value","ds_list01","HUB_HNL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Div00.form.chk_fastDlvYn","value","ds_list01","QCK_DLV_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Div00.form.chk_bzCrdPrd","value","ds_list01","BZCRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Div00.form.edt_mnfIdNm","value","ds_list01","MNFR_NO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.Div00.form.edt_prdIdNm","value","ds_list01","PRD_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div00.form.edt_orgplcCdNm","value","ds_list01","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div00.form.edt_spec","value","ds_list01","REPR_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div00.form.edt_stockNo","value","ds_list01","STOCK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div00.form.edt_catKiller","value","ds_list01","CATG_KILR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div01.form.edt_dstrbPath","value","ds_list01","DSTRB_PATH_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Div01.form.edt_saleTxCd","value","ds_list01","TXTN_TP_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.Div01.form.edt_odrQty","value","ds_list01","ODR_QTY_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.Div01.form.edt_salsprc","value","ds_list01","SALSPRC_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.Div01.form.edt_prdDlcstAmt","value","ds_list01","PRD_DLCST_AMT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.Div01.form.edt_saleAmt","value","ds_list01","SALE_AMT_VAT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.Div01.form.edt_oriOdrQty","value","ds_list01","ORI_ODR_QTY_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.Div01.form.edt_salsPrdAmt","value","ds_list01","ODR_PRD_AMT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.Div01.form.edt_qtyDcAplyYn","value","ds_list01","QTY_DC_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.Div01.form.edt_vatAmt","value","ds_list01","VAT_AMT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.Div01.form.edt_saleAmtVat","value","ds_list01","SALSPRC_VAT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.Div01.form.edt_minMultQtyUnit","value","ds_list01","MIN_ODR_QTY_MULT_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.Div01.form.MaskEdit00","value","ds_list01","PRC_DECI_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.Div01.form.edt_condPrcDeciCd","value","ds_list01","COND_PRC_DECI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.Div01.form.edt_cpnDc","value","ds_list01","DC_AMT_CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div00.form.Div00.form.edt_sspPrdNm","value","ds_list01","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_17.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_17.xfdl", function() {
        // 주문관리 상세 - 영업정보

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
        this.requestState = {UNKNOWN:-1, REQUESTED:0, RECEIVED:1};
        this.requestStep = this.requestState.UNKNOWN;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_03_oninit = function(obj,e)
        {
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_02_03_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div00.form.Div02.form.grid_list01);
        	this.copyPaste.addGrid(this.Div00.form.Div02.form.grid_list02);
        	this.copyPaste.addGrid(this.Div00.form.Div02.form.grid_list03);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectSalsInfoList";
        	var sUrl = "/od/oderlist/selectSalsInfoList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2 ds_list03=ds_output3";
        	var arg = "";

        	this.ds_list04.clearData();
        	this.requestStep = this.requestState.REQUESTED;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchSalsInfo04 = function() {
        	var sSvcId = "selectSalsInfoList04";
        	var sUrl = "/od/oderlist/selectSalsInfoList04.do";
        	var inDs = "ds_search=ds_search02";
        	var outDs = "ds_list04=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectSalsInfoList") {
        		this.requestStep = this.requestState.RECEIVED;
        		this.fn_showBtnChgBzcrd();
        		this.fn_selectItmNo(this.odrItmNo);
        	}
        	else if (svcID == "selectSalsInfoList04") {
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
        		// 명함정보 팝업
        		case "bzcrdPopup":
        			break;
        		case "DstrPathPopup":
        			this.ds_list01.setColumn(0, "DSTRB_PATH_CD", resData.DSTRB_PATH_CD);
        			this.ds_list01.setColumn(0, "DSTRB_PATH_CD_NM", resData.DSTRB_PATH_CD_NM);
        			this.fn_search();
        			break;
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	trace("### SSP_BO_OA_17 - fn_searchOdrInfo");
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.fn_search();
        };
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수)
        this.fn_shouldSave = function() {
        /*
        	var rowType = "";
        	var deletedCount = 0;
        	// ds_list01
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);
        		deletedCount = this.ds_list01.getDeletedRowCount();

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}
        	// ds_list02
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);
        		deletedCount = this.ds_list02.getDeletedRowCount();

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}
        	// ds_list03
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		rowType = this.ds_list03.getRowType(i);
        		deletedCount = this.ds_list03.getDeletedRowCount();

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}
        	*/

        	return false;
        };

        // 주문상세 화면에서 저장기능 사용(저장기능을 포함한 모든 탭 폼에 있어야되는 함수)
        this.fn_saveChangedDataByParent = function(withMoveStep) {
        	this.moveStep = withMoveStep;

        	if (this.fn_saveToServer() == false) {
        		this.moveStep = this.moveType.UNKNOWN;
        	}
        };

        this.fn_searchMapSetting = function(odrNo, odrItmNo, bzplcId) {
        	this.ds_search02.setColumn(0, "BZPLC_ID", bzplcId);
        	this.ds_search02.setColumn(0, "ODR_NO", odrNo);
        	this.ds_search02.setColumn(0, "ODR_ITM_NO", odrItmNo);
        	this.ds_search02.setColumn(0, "CO_CD", this.fv_coCd);
        };

        // BZCRD_YN 값에 따라서 "명함정보변경" 버튼 표시
        this.fn_showBtnChgBzcrd = function() {
        	if (this.ds_list01.rowcount <= 0) {
        		this.Div00.form.Div00.form.btn_chgBzcrd.set_visible(false);
        		//this.Div00.form.btn_chgBzcrd.set_visible(false);
        		return;
        	}

        	if (this.ds_list01.getColumn(this.ds_list01.rowposition, "BZCRD_YN") == "Y")	this.Div00.form.Div00.form.btn_chgBzcrd.set_visible(true);
        	else	this.Div00.form.Div00.form.btn_chgBzcrd.set_visible(false);
        };

        // 조회 후 List03의 데이터중에 현재의 항목번호와 일치하는 행을 선택
        this.fn_selectItmNo = function(itmNo) {
        	var localItmNo = "";
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		localItmNo = this.ds_list03.getColumn(i, "ODR_ITM_NO");

        		if (itmNo == localItmNo) {
        			if (this.Div00.form.Div02.form.grid_list03.currentrow == i) {
        				this.Div00_Div02_grid_list03_oncellposchanged(this.Div00.form.Div02.form.grid_list03, {row:i});
        			}
        			else	this.Div00.form.Div02.form.grid_list03.selectRow(i, true);

        			break;
        		}
        	}
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 명함정보 팝업
        this.btn_chgBzcrd_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.fv_coCd, pv2:this.bzplcId, pv3:this.odrNo, pv4:this.odrItmNo};
        	this.gfn_openPopup("bzcrdPopup", "OD::SSP_BO_OA_53.xfdl", objParam);
        };
        // 유통경로변경 팝업
        this.btn_dstrbPath_onclick = function(obj,e)
        {
        	var mbrNm = this.ds_list01.getColumn(0, "MBR_NM");
        	var objParam = {pv1:this.bzplcId, pv2:this.odrNo, pv3:this.odrItmNo, pv4:this.odrpsnId, pv5:mbrNm};
        	this.gfn_openPopup("DstrPathPopup", "OD::SSP_BO_OA_18.xfdl", objParam);
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.Div00_Div02_grid_list03_oncellposchanged = function(obj,e)
        {
        	trace("### Div00_Div02_grid_list03_oncellposchanged - e.row : " + e.row);
        	if (this.requestStep == this.requestState.REQUESTED)	return;
        	if (e.row < 0)	return;

        	var bzplcId = this.ds_list03.getColumn(e.row, "BZPLC_ID");
        	var odrNo = this.ds_list03.getColumn(e.row, "ODR_NO");
        	var odrItmNo = this.ds_list03.getColumn(e.row, "ODR_ITM_NO");
        	this.fn_searchMapSetting(odrNo, odrItmNo, bzplcId);

        	this.fn_searchSalsInfo04();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_02_03_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_OA_02_03_oninit,this);
            this.Div00.form.Div00.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div00.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div00.form.btn_chgBzcrd.addEventHandler("onclick",this.btn_chgBzcrd_onclick,this);
            this.Div00.form.Div01.form.btn_dstrbPath.addEventHandler("onclick",this.btn_dstrbPath_onclick,this);
            this.Div00.form.Div01.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div02.form.grid_list03.addEventHandler("oncellposchanged",this.Div00_Div02_grid_list03_oncellposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
