(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_04");
            this.set_titletext("배송 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNSG_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GI_PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GO_PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_DLV_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HDV_INVC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HPE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DUE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DELAY_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_ORD_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_DOC_CRT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_SHMT_IDC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_PICK_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_GO_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_TMP_LOCK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS07\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS04\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS17\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_DLV_FORM_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_CNSG_CPRTCP_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_SSP_DLV_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_DLV_DELAY_RSN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GO_PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_GI_PLNT_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_GO_PLNT_ID_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DPT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DVPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_VNDR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_VNDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HDV_INVC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_TRC_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_PRM\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"500\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div05","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div05");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","20",null,"95","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div05.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 배송 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div05.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div05.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div05.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","29",null,"66","0",null,null,null,null,null,this.Div05.form.Div00.form);
            obj.set_taborder("2");
            this.Div05.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"32","0",null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","32",null,"32","0",null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","862","1","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_dlvForm","430","32","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("수령인명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","430","1","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","32","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("우편 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","32","130","32",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("상세 주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_zpcd","140","37","280","22",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("642713");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_addr","570","37","282","22",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("경기도 성남시 분당구 대왕판교로");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dtlAddr","1002","37",null,"22","11",null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("N타워 11층");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rcvpsnNm","140","5","280","24",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00","420","34","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_caddr1","570","5","282","24",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("02-123-4567");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_caddr2","1001","5",null,"24","11",null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("010-1234-5678");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","1","10","30",null,null,null,null,null,null,this.Div05.form.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","145",null,"159","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("■ 배송 메모");
            obj.set_cssclass("sta_WF_title01");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","61",null,"32","0",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static65","0","92",null,"32","0",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","123",null,"32","0",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","92","130","32",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("CS 메모");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","0","123","130","32",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("협력사 메모");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("SSP 주문 메모");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","61","130","32",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("배송 메모");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_csMemo","139","97",null,"22","11",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("등록된 문구가 있는 경우 등록 문구 출력");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpMemo","139","128",null,"22","11",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("등록된 문구가 있는 경우 등록 문구 출력");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dlvMemo","139","66",null,"22","11",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("등록된 문구가 있는 경우 등록 문구 출력");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_sspOdrMemo","139","35",null,"22","11",null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("등록된 문구가 있는 경우 등록 문구 출력");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","334",null,"95","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div05.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("■ 배송 기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div05.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div05.form.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div05.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","0","29",null,"66","0",null,null,null,null,null,this.Div05.form.Div02.form);
            obj.set_taborder("2");
            this.Div05.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"32","0",null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","32",null,"32","0",null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_errMsg","430","32","130","32",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("(오류 메시지)");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","130","32",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("주문 Block");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","430","1","130","32",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("거래명세표(출고)");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","32","130","32",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("발주 성공 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","1","10","30",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","1","10","30",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrBlock","140","5","280","24",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("N");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","1","10","30",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_gdoc","570","5",null,"24","11",null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("O1234567890");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","1325","1","10","30",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ordSucYn","140","36","280","24",null,null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_errMsg","570","36",null,"24","11",null,null,null,null,null,this.Div05.form.Div02.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("O1234567890");
            this.Div05.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","0","459",null,"187","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_text("Div03");
            obj.set_background("transparent");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("■ 상세 배송 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","0","61",null,"32","0",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static13","0","92",null,"32","0",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static17","0","123",null,"32","0",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","862","30","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("출고거래명세서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","0","92","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("배송 방식");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static16","0","123","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("17");
            obj.set_text("배송 희망일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta_plantID01","0","61","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("입고 플랜트");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static12_00","430","92","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("송장 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static16_00","430","123","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("납품 가능일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static06_00","430","61","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("출고 플랜트");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static12_00_00","862","92","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("평균 배송일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","862","123","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("배송 예정일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("배송 형태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static22","430","30","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("25");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","30","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","31","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","154",null,"32","0",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static16_00_01","430","154","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("30");
            obj.set_text("고객 수령일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","862","154","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("31");
            obj.set_text("배송 지연 사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta_tltDlvCmplDt","0","154","130","32",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("배송 완료일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_dlvForm","140","34","280","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("03 | 센터");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","29","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcd","570","34","282","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("01121 | 대덕종합상사");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","29","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_goTxnStm","1002","34",null,"24","11",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("O1234567890");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","31","10","30",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_dlvMtd","140","96","280","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("자차");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_plntId01","140","65","280","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("1150");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_plntId02","570","65","282","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("1150");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_invcNo","570","96","282","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("-");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_avgDlvDay","1002","96",null,"24","11",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("3일");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_dlvDelayRsn","1002","158",null,"24","11",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("배송 지연 사유 있는 경우 출력");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dlvPssDt","570","127","282","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_displaynulltext(" ");
            obj.set_type("string");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dlvHpeDt","140","127","280","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_maskchar("#");
            obj.set_type("string");
            obj.set_displaynulltext(" ");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dlvCmplDt","140","158","280","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_format("####-##-## ##:##:##");
            obj.set_maskchar("#");
            obj.set_type("string");
            obj.set_displaynulltext(" ");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dlvDueDt","1002","127",null,"24","11",null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("39");
            obj.set_displaynulltext(" ");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_maskchar("#");
            obj.set_type("string");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("medt_custRcvDt","570","158","282","24",null,null,null,null,null,null,this.Div05.form.Div03.form);
            obj.set_taborder("40");
            obj.set_displaynulltext(" ");
            obj.set_format("####-##-## ##:##:##");
            obj.set_maskchar("#");
            obj.set_type("string");
            obj.set_readonly("true");
            this.Div05.form.Div03.addChild(obj.name, obj);

            obj = new Div("div_dlvMtd02","50%","Div03:40",null,"193","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_text("Div04");
            obj.set_background("aliceblue");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div05.form.div_dlvMtd02.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div05.form.div_dlvMtd02.addChild(obj.name, obj);

            obj = new Grid("grid_dlvCurstInfo02","0","0",null,null,"0","0",null,null,null,null,this.Div05.form.div_dlvMtd02.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"택배사 코드\"/><Cell col=\"2\" text=\"택배사명\"/><Cell col=\"3\" text=\"송장 번호\"/><Cell col=\"4\" text=\"추적 정보\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:TRNS_VNDR_ID\"/><Cell col=\"2\" text=\"bind:TRNS_VNDR_NM\"/><Cell col=\"3\" text=\"bind:HDV_INVC_NO\"/><Cell col=\"4\" text=\"조회\" color=\"blue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.Div05.form.div_dlvMtd02.addChild(obj.name, obj);

            obj = new Div("Div05","0","Div03:10",null,"224","51.00%",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_text("Div05");
            obj.set_background("aliceblue");
            this.Div05.addChild(obj.name, obj);

            obj = new Grid("grid_dlvInfo","0","0",null,"224","0",null,null,null,null,null,this.Div05.form.Div05.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"업무 주체\"/><Cell col=\"1\" text=\"배송 관련일\"/><Cell col=\"2\" text=\"처리 일시\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_OWNER\"/><Cell col=\"1\" text=\"bind:DT_NAME\"/><Cell col=\"2\" text=\"bind:DT\"/></Band></Format></Formats>");
            this.Div05.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta_dlvCurst","Div05:13","Div03:10","240","20",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("6");
            obj.set_text("■ $배송 방식 명$ 배송 현황 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("div_dlvMtd01","Div05:12","Div03:40",null,"193","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("7");
            obj.set_text("Div06");
            obj.set_background("aliceblue");
            this.Div05.addChild(obj.name, obj);

            obj = new Grid("grid_dlvCurstInfo01","0","0",null,null,"0","0",null,null,null,null,this.Div05.form.div_dlvMtd01.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"출발 일자\"/><Cell col=\"1\" text=\"배송 기사명\"/><Cell col=\"2\" text=\"기사 연락처\"/><Cell col=\"3\" text=\"운송 차량 번호\"/></Band><Band id=\"body\"><Cell text=\"bind:DPT_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" maskedittype=\"string\" maskeditmaskchar=\"#\" maskeditformat=\"####-##-## ##:##:##\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:DVPR_NM\"/><Cell col=\"2\" text=\"bind:CADDR_NO\"/><Cell col=\"3\" text=\"bind:CAR_NO\"/></Band></Format></Formats>");
            this.Div05.form.div_dlvMtd01.addChild(obj.name, obj);

            obj = new Button("btn_cancel","45.66%","890","70","30",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:10","890","70","30",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"655","397","25","36",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("아래 그리드에 div_dlvMtd01~02 겹쳐있음");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_color("red");
            this.Div05.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,940,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div05.form.Div00.form.Div00.form.edt_rcvpsnNm","value","ds_list01","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div05.form.Div00.form.Div00.form.edt_caddr1","value","ds_list01","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div05.form.Div00.form.Div00.form.edt_caddr2","value","ds_list01","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div05.form.Div00.form.Div00.form.edt_zpcd","value","ds_list01","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div05.form.Div00.form.Div00.form.edt_addr","value","ds_list01","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div05.form.Div00.form.Div00.form.edt_dtlAddr","value","ds_list01","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div05.form.Div01.form.edt_sspOdrMemo","value","ds_list01","MEMO_CTS07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div05.form.Div01.form.edt_dlvMemo","value","ds_list01","MEMO_CTS04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div05.form.Div01.form.edt_csMemo","value","ds_list01","MEMO_CTS17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div05.form.Div02.form.Div00.form.edt_odrBlock","value","ds_list01","ODR_TMP_LOCK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div05.form.Div02.form.Div00.form.edt_gdoc","value","ds_list01","GDOC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div05.form.Div02.form.Div00.form.edt_errMsg","value","ds_list01","ERR_MSG_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div05.form.Div03.form.edt_dlvForm","value","ds_list01","JNT_DLV_FORM_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div05.form.Div03.form.edt_cprtcd","value","ds_list01","JNT_CNSG_CPRTCP_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div05.form.Div03.form.edt_goTxnStm","value","ds_list01","GDOC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div05.form.Div03.form.edt_dlvMtd","value","ds_list01","JNT_SSP_DLV_MTD_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div05.form.Div03.form.edt_invcNo","value","ds_list01","HDV_INVC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div05.form.Div03.form.edt_avgDlvDay","value","ds_list01","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div05.form.Div03.form.edt_dlvDelayRsn","value","ds_list01","JNT_DLV_DELAY_RSN_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div05.form.Div03.form.medt_dlvPssDt","value","ds_list01","SPL_PSB_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div05.form.Div03.form.medt_dlvHpeDt","value","ds_list01","DLV_HPE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div05.form.Div03.form.medt_dlvCmplDt","value","ds_list01","DLV_CMPL_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div05.form.Div03.form.medt_dlvDueDt","value","ds_list01","DLV_DUE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div05.form.Div03.form.medt_custRcvDt","value","ds_list01","REAL_DLV_CMPL_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div05.form.Div03.form.edt_plntId01","value","ds_list01","JNT_GI_PLNT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div05.form.Div03.form.edt_plntId02","value","ds_list01","JNT_GO_PLNT_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_19.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_19.xfdl", function() {
        // 주문관리 상세 - 배송정보

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";

        // 메모 원본 데이터
        this.memoCts07 = "";	// SSP 주문메모
        this.memoCts04 = "";	// 배송메모

        this.moveType = {UNKNOWN:-1, FIRST:0, PREVIEW:1, NEXT:2, LAST:3, PREVIEW_TAB:10, NEXT_TAB:11};
        this.moveStep = this.moveType.UNKNOWN;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_04_oninit = function(obj,e)
        {
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_02_04_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div05.form.Div05.form.grid_dlvInfo);
        	this.copyPaste.addGrid(this.Div05.form.div_dlvMtd01.form.grid_dlvCurstInfo01);
        	this.copyPaste.addGrid(this.Div05.form.div_dlvMtd02.form.grid_dlvCurstInfo02);
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_02_04_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectDlvInfo";
        	var sUrl = "/od/oderlist/selectDlvInfo.do";
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
        	if (svcID == "selectDlvInfo") {
        		trace("### selectDlvInfo - ds_list01.rowcount : " + this.ds_list01.rowcount); // + ", ds_list02.rowcount : " + this.ds_list02.rowcount);
        		if (this.ds_list01.rowcount > 0) {
        			this.memoCts07 = this.ds_list01.getColumn(0, "MEMO_CTS07");
        			this.memoCts04 = this.ds_list01.getColumn(0, "MEMO_CTS04");
        			// 자차
        			if (this.ds_list01.getColumn(0, "SSP_DLV_MTD_CD") == "2" ||
        				this.ds_list01.getColumn(0, "SSP_DLV_MTD_CD") == "4") {
        					this.fn_showHdvGrid(false);
        				}
        			// 택배
        			else	this.fn_showHdvGrid(true);
        		}
        	}
        	else if (svcID == "selectCommonCodeList") {
        		this.fn_setCommonCode();
        	}
        	else if(svcID == "saveOrderDetail"){
        		trace("### saveOrderDetail - ds_fromServer.count : " + this.ds_fromServer.rowcount);
        		var  strRtnCd  = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_CD"));
        		var  strRtnMsg = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_MSG"));

        		trace("### saveOrderDetail - moveType : " + this.moveType);
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
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	trace("### SSP_BO_OA_19 - fn_searchOdrInfo");
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
        	// 포커스가 변경되어야 메모정보를 수정한 것이 Dataset에 적용되기 때문에 아래한줄 추가
        	this.Div05.form.Div01.form.edt_csMemo.setFocus();

        	var rowType = "";
        	var deletedCount = 0;
        	// ds_list01
        	deletedCount = this.ds_list01.getDeletedRowCount();
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}
        	/*
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
        	trace("### moveStep : " + withMoveStep);
        	this.fn_processToSave();
        };

        // fn_saveChangedDataByParent 저장 후처리 작업
        this.fn_processMoveStep = function(moveStep, strRtnCd, strRtnMsg) {
        	// 저장작업 성공
        	if( strRtnCd == "S") {
        		alert(this.fn_getMessage("ERRS000156"));
        		//this.fn_search();
        		this.fn_changeSavedDataset();
        		this.parent.parent.parent.fn_afterSaveChildForm(moveStep, strRtnCd);
        	}
        	else {
        		alert(strRtnMsg);
        		//this.fn_search();	의견을 듣고 주석을 해제하던지....
        	}
        	this.moveStep = this.moveType.UNKNOWN;
        };

        // 저장 성공시 모든 Dataset 상태를 Dataset.ROWTYPE_NORMAL로 변경
        this.fn_changeSavedDataset = function() {
        	this.ds_list01.updatecontrol = false;
        	var resultValue = false;
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		resultValue = this.ds_list01.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	this.ds_list01.updatecontrol = true;
        };

        // 택배 그리드 보이기
        this.fn_showHdvGrid = function(show) {
        	// 택배
        	if (show) {
        		this.Div05.form.sta_dlvCurst.set_text("■ 택배 배송 현황 정보");
        		this.Div05.form.div_dlvMtd01.set_visible(false);
        		this.Div05.form.div_dlvMtd02.set_visible(true);
        	}
        	// 자차
        	else {
        		this.Div05.form.sta_dlvCurst.set_text("■ 자차 배송 현황 정보");
        		this.Div05.form.div_dlvMtd01.set_visible(true);
        		this.Div05.form.div_dlvMtd02.set_visible(false);
        	}
        }

        // 저장데이터 만들기
        this.fn_makeSaveData = function() {
        	this.ds_forServer.clearData();
        	var nRow = -1;
        	if (this.memoCts07 != this.ds_list01.getColumn(0, "MEMO_CTS07")) {
        		nRow = this.ds_forServer.addRow();
        		// MEMO_CTS07, 주문메모, G26
        		this.ds_forServer.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServer.setColumn(nRow, "BZPLC_ID", this.bzplcId);
        		this.ds_forServer.setColumn(nRow, "ODR_NO", this.odrNo);
        		this.ds_forServer.setColumn(nRow, "ODR_ITM_NO", this.odrItmNo);
        		this.ds_forServer.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer.setColumn(nRow, "IUD_GB", "U");
        		this.ds_forServer.setColumn(nRow, "ITM_GRP_CD", "G26");
        		this.ds_forServer.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer.setColumn(nRow, "MEMO_CTS", this.ds_list01.getColumn(0, "MEMO_CTS07"));
        	}

        	if (this.memoCts04 != this.ds_list01.getColumn(0, "MEMO_CTS04")) {
        		// MEMO_CTS04, 배송메모, G27
        		nRow = this.ds_forServer.addRow();
        		this.ds_forServer.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServer.setColumn(nRow, "BZPLC_ID", this.bzplcId);
        		this.ds_forServer.setColumn(nRow, "ODR_NO", this.odrNo);
        		this.ds_forServer.setColumn(nRow, "ODR_ITM_NO", this.odrItmNo);
        		this.ds_forServer.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer.setColumn(nRow, "IUD_GB", "U");
        		this.ds_forServer.setColumn(nRow, "ITM_GRP_CD", "G27");
        		this.ds_forServer.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer.setColumn(nRow, "MEMO_CTS", this.ds_list01.getColumn(0, "MEMO_CTS04"));
        	}

        	for (var i = 0; i < this.ds_forServer.rowcount; i++) {
        		trace("### i : " + i + ", DATA - " + this.fn_getStrFromDataset(this.ds_forServer, 0));
        	}

        };

        this.fn_processToSave = function() {
        	this.fn_makeSaveData();
        	this.fn_saveToServer();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodCtrlENTER("fn_search");
        	this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	if (this.fn_shouldSave()) {
        		var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        		// 저장하지 않고 진행
        		if (rtn == false) {
        			this.fn_search();
        		}
        		else {
        			// 변경된 내용에 관해서 진행을 물어보는데 "아니요"라고 해서 꼭 저장하는것인지 확인이 필요할 것 같음
        		}
        	}
        	else {
        		this.fn_search();
        	}
        };
        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_processToSave();
        };


        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        this.grid_dlvCurstInfo02_oncellclick = function(obj,e)
        {
        	// "조회" 컬럼 클릭
        	if (e.col == 4) {
        		var serverUrl = this.ds_list04.getColumn(e.row, "TRNS_LINK");
        		trace("### serverUrl : " + serverUrl);
        		system.execDefaultBrowser(serverUrl);
        	}
        };


        this.Div05_Div00_Div00_Static22_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_02_04_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_OA_02_04_oninit,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_02_04_onkeyup,this);
            this.Div05.form.Div00.form.Div00.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div00.form.Div00.form.Static22.addEventHandler("onclick",this.Div05_Div00_Div00_Static22_onclick,this);
            this.Div05.form.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div02.form.Div00.form.sta_errMsg.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div02.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div03.form.sta_plantID01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.Div03.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div05.form.div_dlvMtd02.form.grid_dlvCurstInfo02.addEventHandler("oncellclick",this.grid_dlvCurstInfo02_oncellclick,this);
            this.Div05.form.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.Div05.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
