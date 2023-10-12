(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_12");
            this.set_titletext("회원조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1328,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mbrList", this);
            obj._setContents("<ColumnInfo><Column id=\"_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CUST_SPR_CD\" type=\"DATETIME\" size=\"17\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_USE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"TAXINV_LOGN_ID\" type=\"DATETIME\" size=\"17\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNG_AUTH_USE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BGT_AUTH_USE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ADJ_AUTH_USE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_TAXINV_LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OSF_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FNL_LOGN_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_START\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_END\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDI_DEVI_SELL_PERMIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">20</Col><Col id=\"COUNT_NM\">20개씩</Col></Row><Row><Col id=\"COUNT\">50</Col><Col id=\"COUNT_NM\">50개씩</Col></Row><Row><Col id=\"COUNT\">100</Col><Col id=\"COUNT_NM\">100개씩</Col></Row><Row><Col id=\"COUNT\">1000</Col><Col id=\"COUNT_NM\">1000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeList", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCdSrch", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCdSet", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCdSrch", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resMap", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","10",null,"115","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","0","83",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","0","52",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","21",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","1","21","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","435","21","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("고객 유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","860","21","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","1","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22_00","435","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","860","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_mbrUseCd","Static02:10","25","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mbrUseCdSrch");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","Static22:10","25","145","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_custSprCdSrch");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static04:10","25","199","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMltPop","edt_bzplcId:5",null,"24","24",null,"edt_bzplcId:-25",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcTxtPop","btn_bzplcMltPop:0",null,"24","24",null,"btn_bzplcMltPop:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","Static06:10","56","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMltPop","edt_oprUnit:5",null,"24","24",null,"edt_oprUnit:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitTxt","btn_oprUnitMltPop:0",null,"24","24",null,"btn_oprUnitMltPop:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept","Static22_00:10","56","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptMltPop","edt_dept:5",null,"24","24",null,"edt_dept:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptTxt","btn_deptMltPop:0",null,"24","24",null,"btn_deptMltPop:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mbr","Static08:10","56","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mbrMltPop","edt_mbr:5",null,"24","24",null,"edt_mbr:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mbrTxt","btn_mbrMltPop:0",null,"24","24",null,"btn_mbrMltPop:-24",null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00","1","83","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","435","83","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_periodStart","712","87","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_periodEnd","829","87","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","816","87","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","575","87","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_search_form_cbo_periodType_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_periodType_innerdataset", obj);
            div_search_form_cbo_periodType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">최초등록일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">최종로그인일자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_periodType_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_agreeType","Static06_00:10","87","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_search_form_cbo_agreeType_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_agreeType_innerdataset", obj);
            div_search_form_cbo_agreeType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">약관동의여부</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">개인정보사용여부</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">마케팅수신_문자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">마케팅수신_메일</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">업무수신_문자</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">업무수신_메일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_agreeType_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_agreeYn","288","87","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_search_form_cbo_agreeYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_agreeYn_innerdataset", obj);
            div_search_form_cbo_agreeYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_agreeYn_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_periodTerm","935","87","85","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_search_form_cbo_periodTerm_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_periodTerm_innerdataset", obj);
            div_search_form_cbo_periodTerm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1주</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2주</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">1개월</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">3개월</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6개월</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">1년</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_periodTerm_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmbCONSN_CUST_YN","726","25","129","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.set_tooltiptext("특약고객여부");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmbCONSN_CUST_YN_innerdataset = new nexacro.NormalDataset("div_search_form_cmbCONSN_CUST_YN_innerdataset", obj);
            div_search_form_cmbCONSN_CUST_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\"> 전체</Col></Row><Row><Col id=\"datacolumn\">특약고객</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">특약고객 외</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmbCONSN_CUST_YN_innerdataset);
            obj.set_text(" 전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_mainList","1","div_search:5",null,"96","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,null,"110","28","20","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("13");
            obj.set_text("레이아웃 초기화");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,null,"100","28","btn_layoutClear:4","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("12");
            obj.set_text("레이아웃 저장");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,null,"100","30","btn_layoutSave:4","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("9");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT_NM");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,null,"110","28","cbo_page:4","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("10");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_pkgReg",null,null,"80","28","btn_excelDown:4","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("8");
            obj.set_text("일괄등록");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_mbrCpy",null,null,"80","28","btn_pkgReg:5","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("7");
            obj.set_text("회원복사");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_mbrLev",null,null,"80","28","btn_mbrCpy:5","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("6");
            obj.set_text("회원탈퇴");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_mbrReg",null,null,"80","28","btn_mbrLev:5","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("5");
            obj.set_text("회원생성");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_pkgStatsChg",null,null,"80","28","btn_mbrReg:5","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("4");
            obj.set_text("일괄상태변경");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Combo("cbo_mbrUseCdChg",null,null,"150","30","btn_pkgStatsChg:5","10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mbrUseCdSet");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20",null,"200","25",null,"10",null,null,null,null,this.div_mainList.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"1","60","30","20",null,null,null,null,null,this.div_mainList.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"1","60","30","btn_search:5",null,null,null,null,null,this.div_mainList.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"1","100","28","btn_reset:4",null,null,null,null,null,this.div_mainList.form);
            obj.set_taborder("11");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.div_mainList.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","div_mainList:-7",null,null,"21","45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_mbrList");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\" band=\"left\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"170\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"152\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"112\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"고객유형\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"회원ID\"/><Cell col=\"4\" text=\"회원명\"/><Cell col=\"5\" text=\"로그인ID\"/><Cell col=\"6\" text=\"사업장ID\"/><Cell col=\"7\" text=\"사업장명\"/><Cell col=\"8\" text=\"운영단위ID\"/><Cell col=\"9\" text=\"운영단위명\"/><Cell col=\"10\" text=\"부서ID\"/><Cell col=\"11\" text=\"부서명\"/><Cell col=\"12\" text=\"결재 권한\"/><Cell col=\"13\" text=\"발주 권한\"/><Cell col=\"14\" text=\"입고 권한\"/><Cell col=\"15\" text=\"세금계산서 담당\"/><Cell col=\"16\" text=\"카드결제사용\"/><Cell col=\"17\" text=\"UCESSDI ID\"/><Cell col=\"18\" text=\"관리 권한\"/><Cell col=\"19\" text=\"예산 권한\"/><Cell col=\"20\" text=\"정산 권한\"/><Cell col=\"21\" text=\"화학물질 담당자\"/><Cell col=\"22\" text=\"본인인증여부\"/><Cell col=\"23\" text=\"약관동의여부\"/><Cell col=\"24\" text=\"개인정보사용여부\"/><Cell col=\"25\" text=\"마케팅수신_문자\"/><Cell col=\"26\" text=\"마케팅수신_메일\"/><Cell col=\"27\" text=\"업무수신_문자\"/><Cell col=\"28\" text=\"업무수신_메일\"/><Cell col=\"29\" text=\"최초등록일시\"/><Cell col=\"30\" text=\"최종수정일시\"/><Cell col=\"31\" text=\"최종로그인일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:_CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CUST_SPR_CD_NM\"/><Cell col=\"2\" text=\"bind:MBR_USE_CD_NM\"/><Cell col=\"3\" text=\"bind:MBR_ID\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:MSKD_MBR_NM\"/><Cell col=\"5\" text=\"bind:MSKD_LOGN_ID\"/><Cell col=\"6\" text=\"bind:BZPLC_ID\"/><Cell col=\"7\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"9\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DEPT_ID\"/><Cell col=\"11\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:APRV_AUTH_USE_YN\"/><Cell col=\"13\" text=\"bind:ORD_AUTH_USE_YN\"/><Cell col=\"14\" text=\"bind:GI_AUTH_USE_YN\"/><Cell col=\"15\" text=\"bind:TAXINV_AUTH_USE_YN\"/><Cell col=\"16\" text=\"bind:CRD_STL_AUTH_USE_YN\"/><Cell col=\"17\" text=\"bind:MSKD_TAXINV_LOGN_ID\"/><Cell col=\"18\" text=\"bind:MNG_AUTH_USE_CD_NM_CNT\"/><Cell col=\"19\" text=\"bind:BGT_AUTH_USE_CD_NM_CNT\"/><Cell col=\"20\" text=\"bind:ADJ_AUTH_USE_CD_NM_CNT\"/><Cell col=\"21\" text=\"bind:CHM_MTL_AUTH_USE_YN\"/><Cell col=\"22\" text=\"bind:OSF_CERT_YN\"/><Cell col=\"23\" text=\"bind:UT_AGRE_YN\"/><Cell col=\"24\" text=\"bind:CLT_AGRE_YN\"/><Cell col=\"25\" text=\"bind:MKTG_CHAR_RCV_AGRE_YN\"/><Cell col=\"26\" text=\"bind:MKTG_MAIL_RCV_AGRE_YN\"/><Cell col=\"27\" text=\"bind:CHAR_RCV_AGRE_YN\"/><Cell col=\"28\" text=\"bind:MAIL_RCV_AGRE_YN\"/><Cell col=\"29\" text=\"bind:REG_DTM\"/><Cell col=\"30\" text=\"bind:UPD_DTM\"/><Cell col=\"31\" text=\"bind:FNL_LOGN_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1328,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_mainList.form.cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_mbrUseCd","value","ds_search","MBR_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cbo_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_oprUnit","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_dept","value","ds_search","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_mbr","value","ds_search","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cal_periodStart","value","ds_search","PERIOD_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cal_periodEnd","value","ds_search","PERIOD_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cbo_agreeType","value","ds_search","AGREE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cbo_agreeYn","value","ds_search","AGREE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cbo_periodType","value","ds_search","PERIOD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmbCONSN_CUST_YN","value","ds_search","CONSN_CUST_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_12.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_12.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_12.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_MA_12.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 회원목록 조회
          CREATION DATES : 20220404
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
        this.totalCount = 0; //paging
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.copyPaste.addGrid(this.grd_mainList);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//코드리스트 조회
        	this.fn_selectCodeList = function()	{
        		var sSvcId = "selectCodeList";
        		var sUrl = "/bo/cust/mbr/selectCodeList.do";
        		var inDs = ""; //"ds_search=ds_search";
        		var outDs = "ds_codeList=sv_codeList";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_selectCodeListCb");
        	};

        	//검색
        	this.fn_search = function()	{
        		var sSvcId = "searchList";
        		var sUrl = "/bo/cust/mbr/ssp_bo_ma_12.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_mbrList=sv_mbrList";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//일괄변경
        	this.updateMbrUseCdList = function()	{
        		var sSvcId = "updateMbrUseCdList";
        		var sUrl = "/bo/cust/mbr/updateMbrUseCdList.do";
        		var inDs = "ds_updateInfoList=ds_updateInfoList";
        		var outDs = "ds_resMap=ds_resMap";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//탈퇴
        	this.updateStopMbrStatus = function()	{
        		var sSvcId = "updateStopMbrStatus";
        		var sUrl = "/bo/cust/mbr/update-stop-mbr-status.do";
        		var inDs = "ds_updateInfoList=ds_updateInfoList";
        		var outDs = "ds_resMap=ds_resMap";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	// 대용량다운로드
        	this.fn_allExcelDownload = function(){
        		var sSvcId = "allExcelDownload";
        		var sUrl = "/bo/cust/mbr/select-all-excel-download.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "searchList"){
        			this.ds_mbrList.addColumn("_CHK","String");

        			/*입고권한 설정*/
        			var giAuthUseYn = "";
        			var giAuthUseArr1 = null;
        			var giAuthUseArr2 = null;
        			var giAuthUseRet = "";

        			for(i=0; i<this.ds_mbrList.getRowCount(); i++) {
        				giAuthUseYn = this.ds_mbrList.getColumn(i,"GI_AUTH_USE_YN");
        				if(!this.gfn_isNull(giAuthUseYn)) {
        					giAuthUseArr1 = giAuthUseYn.split(':');

        					if(giAuthUseArr1.length > 0) {
        						giAuthUseRet = giAuthUseArr1[0];

        						if(!this.gfn_isNull(giAuthUseArr1[1])) {
        							giAuthUseArr2 = giAuthUseArr1[1].split(',');

        							giAuthUseRet = giAuthUseRet + " (";
        							for(j=0; j<giAuthUseArr2.length; j++) {
        								if(giAuthUseArr2[j] == "1") giAuthUseRet = giAuthUseRet + " " + "운영단위,";
        								if(giAuthUseArr2[j] == "2") giAuthUseRet = giAuthUseRet + " " + "부서입고책임자,";
        								if(giAuthUseArr2[j] == "3") giAuthUseRet = giAuthUseRet + " " + "최종결재자,";
        								if(giAuthUseArr2[j] == "4") giAuthUseRet = giAuthUseRet + " " + "최종발주자,";
        								if(giAuthUseArr2[j] == "5") giAuthUseRet = giAuthUseRet + " " + "주문자,";
        							}

        							giAuthUseRet = giAuthUseRet.replace(/,\s*$/, "") + ")";
        						}
        					}

        					this.ds_mbrList.setColumn(i,"GI_AUTH_USE_YN", giAuthUseRet);
        				}
        			}
        			/*입고권한 설정 끝*/
        			/*본인인증 시작*/
        			var osfCertYnSt = "";
        			var osfCertYn = "";
        			var corpHpYn = "";
        			var frnrHpNmYn = "";

        			for(i=0; i<this.ds_mbrList.getRowCount(); i++) {
        				osfCertYn = this.ds_mbrList.getColumn(i,"OSF_CERT_YN");
        				corpHpYn = this.ds_mbrList.getColumn(i,"CORP_HP_YN");
        				frnrNmHpYn = this.ds_mbrList.getColumn(i,"FRNR_NM_HP_YN");
        				if(osfCertYn=="N" && corpHpYn =="N" && frnrNmHpYn=="N"){
        					osfCertYnSt = "미인증";
        				}else if(osfCertYn=="Y" && corpHpYn =="N" && frnrNmHpYn=="N"){
        					osfCertYnSt = "인증";
        				}else if(osfCertYn=="N" && corpHpYn =="Y" && frnrNmHpYn=="N"){
        					osfCertYnSt = "기타(법인)";
        				}else if(osfCertYn=="N" && corpHpYn =="N" && frnrNmHpYn=="Y"){
        					osfCertYnSt = "기타(외국)";
        				}
        				this.ds_mbrList.setColumn(i,"OSF_CERT_YN", osfCertYnSt);

        			}
        			/*본인인증 끝*/
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.div_mainList.form.cbo_page.value,"fn_pageCallback");
        		}else if(svcID == "updateMbrUseCdList"){
        			alert(this.ds_resMap.getColumn(0,"msg")); //서버측에서 전달받은 결과메세지 출력
        			this.fn_search();
        		}
        		else if(svcID == "updateStopMbrStatus"){
        			alert(this.ds_resMap.getColumn(0,"msg")); //서버측에서 전달받은 결과메세지 출력
        			this.fn_search();
        		}
        		else if(svcID == "allExcelDownload"){
        			if(errorCode == -100){
        				alert(errorMsg);
        			}
        		}
        	};

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.div_paging;

        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.div_mainList.form.cbo_page.value);
        			this.fn_search();
        		}
        		var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.div_mainList.form.sta_totcnt.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	};

        	this.fn_selectCodeListCb = function(){
        		this.ds_codeList.filter("COM_CLSF_CD == 'MBR_USE_CD'");

        		//상태 검색조건 초기화
        		this.ds_mbrUseCdSrch.deleteAll();
        		var nRowCnt = this.ds_mbrUseCdSrch.copyData(this.ds_codeList, true);
        		this.ds_mbrUseCdSrch.deleteRow(this.ds_mbrUseCdSrch.findRow("COM_DTL_CD","Q")); //탈퇴(Q) 삭제

        		this.ds_mbrUseCdSrch.insertRow(0);

        		this.ds_mbrUseCdSrch.setColumn( 0, "COM_CLSF_CD", "MBR_USE_CD" );
        		this.ds_mbrUseCdSrch.setColumn( 0, "COM_DTL_CD", "" );
        		this.ds_mbrUseCdSrch.setColumn( 0, "COM_DTL_CD_NM", "전체" );

        		this.div_search.form.cbo_mbrUseCd.set_index(1); //사용("Y")에 기본값 처리

        		//상태 일괄변경 조건 초기화

        		this.ds_codeList.filter("COM_CLSF_CD == 'MBR_USE_CD' && COM_USR_DEFN_NM_1 == 'Y' ");
        		this.ds_mbrUseCdSet.deleteAll();

        		nRowCnt = this.ds_mbrUseCdSet.copyData(this.ds_codeList, true);

        		this.ds_mbrUseCdSet.insertRow(0);

        		this.ds_mbrUseCdSet.setColumn( 0, "COM_CLSF_CD", "MBR_USE_CD" );
        		this.ds_mbrUseCdSet.setColumn( 0, "COM_DTL_CD", "" );
        		this.ds_mbrUseCdSet.setColumn( 0, "COM_DTL_CD_NM", "선택" );

        		this.div_mainList.form.cbo_mbrUseCdChg.set_index(0);


        		//고객유형 검색조건 초기화
        		this.ds_codeList.filter("COM_CLSF_CD == 'CUST_SPR_CD'");

        		this.ds_custSprCdSrch.deleteAll();

        		nRowCnt = this.ds_custSprCdSrch.copyData(this.ds_codeList, true);

        		this.ds_custSprCdSrch.insertRow(0);

        		this.ds_custSprCdSrch.setColumn( 0, "COM_CLSF_CD", "CUST_SPR_CD" );
        		this.ds_custSprCdSrch.setColumn( 0, "COM_DTL_CD", "" );
        		this.ds_custSprCdSrch.setColumn( 0, "COM_DTL_CD_NM", "전체" );

        		this.div_search.form.cbo_custSprCd.set_index(0);



        		this.ds_codeList.filter("");
        	}

        	//조건 팝업 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		var resData = "";
        		var sIdList = "";
        		var sNmList = "";

        		if(sRetValue == undefined){
        			return;
        		}else{
        			resData = JSON.parse(sRetValue);
        		}

        		switch(sPopupId){
        			case "bzplcMultiPopup":
        				for(var i=0; i<resData.length; i++){
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.BZPLC_ID + ",";
        					sNmList += rtnData.BZPLC_NM + ",";
        				}
        				this.ds_search.setColumn(0,"BZPLC_ID",sIdList.replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"BZPLC_NM",sNmList.replace(/,\s*$/, ""));

        				break;
        			case "oprUntMultiPop":
        				for(var i=0; i<resData.length; i++){
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.OPR_UNIT_ID + ",";
        					sNmList += rtnData.OPR_UNIT_NM + ",";
        				}
        				this.ds_search.setColumn(0,"OPR_UNIT_ID",sIdList.replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"OPR_UNIT_NM",sNmList.replace(/,\s*$/, ""));

        				break;
        			case "deptMultiPop":
        				for(var i=0; i<resData.length; i++){
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.DEPT_ID + ",";
        					sNmList += rtnData.DEPT_NM + ",";
        				}
        				this.ds_search.setColumn(0,"DEPT_ID",sIdList.replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"DEPT_NM",sNmList.replace(/,\s*$/, ""));

        				break;
        			case "mbrMultiPop":
        				for(var i=0; i<resData.length; i++){
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.MBR_ID + ",";
        					sNmList += rtnData.MBR_NM + ",";
        				}
        				this.ds_search.setColumn(0,"MBR_ID",sIdList.replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"MBR_NM",sNmList.replace(/,\s*$/, ""));

        				break;
        			default :
        				break;
        		}
        	};


        	//조건 멀티 텍스트 팝업 콜백
        	this.fn_multiTextPopupCallback = function(objID, rtnValue) {

        		var resParam = JSON.parse(rtnValue);
        		var splitedStringArr = resParam.textValue.split(",");

        		switch(objID){
        			case "bzplcMultiTextPopup":
        				this.ds_search.setColumn(0,"BZPLC_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"BZPLC_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				break;
        			case "oprUntMultiTextPopup":
        				this.ds_search.setColumn(0,"OPR_UNIT_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"OPR_UNIT_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				break;
        			case "deptMultiTextPopup":
        				this.ds_search.setColumn(0,"DEPT_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"DEPT_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				break;
        			case "mbrMultiTextPopup":
        				this.ds_search.setColumn(0,"MBR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				this.ds_search.setColumn(0,"MBR_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        				break;
        			default :
        				break;
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.div_search.uMinSize = 53;
        		this.div_search.uMaxSize = 84;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";

        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.div_paging.uPage = 1;
        		this.div_paging.uPageNum = 0;
        		this.div_paging.uPageRowCnt = 10;
        		this.div_paging.uPageCnt = 0;
        		this.div_paging.uTotCount = 0;

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "CHK,CUST_SPR_CD_NM,MBR_USE_CD_NM,MBR_ID,MSKD_MBR_NM,MSKD_LOGN_ID,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,DEPT_ID,DEPT_NM,APRV_AUTH_USE_YN,ORD_AUTH_USE_YN,GI_AUTH_USE_YN,TAXINV_AUTH_USE_YN,CRD_STL_AUTH_USE_YN,MSKD_TAXINV_LOGN_ID,MNG_AUTH_USE_CD_NM_CNT,BGT_AUTH_USE_CD_NM_CNT,ADJ_AUTH_USE_CD_NM_CNT,UT_AGRE_YN,CLT_AGRE_YN,MKTG_CHAR_RCV_AGRE_YN,MKTG_MAIL_RCV_AGRE_YN,CHAR_RCV_AGRE_YN,MAIL_RCV_AGRE_YN,REG_DTM,UPD_DTM,FNL_LOGN_DTM";

        		//페이징 수 콤보 20개로 기본 설정
        		this.div_mainList.form.cbo_page.set_index(0);
        		//기타 콤보 전체로 설정
        		this.div_search.form.cbo_agreeType.set_index(0);
        		this.div_search.form.cbo_agreeYn.set_index(0);
        		this.div_search.form.cbo_periodType.set_index(0);
        		//기간 선택 콤보 1년으로 설정
        		this.div_search.form.cbo_periodTerm.set_index(6);

        		//조회기간 설정
        		this.fn_setPeriodDate();
        		this.fn_setPeriodEnable();

        		//회사코드 설정
        		this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd);

        		//코드가져오기
        		this.fn_selectCodeList();

        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};

        	//조회기간 설정
        	this.fn_setPeriodDate = function(){
        		var term = this.div_search.form.cbo_periodTerm.value;

        		if(term == "1") { this.div_search.form.cal_periodStart.set_value(this.gfn_addDate(this.gfn_getDate(),-1)); } //1일
        		else if(term == "2") {this.div_search.form.cal_periodStart.set_value(this.gfn_addDate(this.gfn_getDate(),-7)) } //1주
        		else if(term == "3") {this.div_search.form.cal_periodStart.set_value(this.gfn_addDate(this.gfn_getDate(),-14)); } //2주
        		else if(term == "4") {this.div_search.form.cal_periodStart.set_value(this.gfn_addMonth(this.gfn_getDate(),-1)); } //1개월
        		else if(term == "5") {this.div_search.form.cal_periodStart.set_value(this.gfn_addMonth(this.gfn_getDate(),-3)); } //3개월
        		else if(term == "6") {this.div_search.form.cal_periodStart.set_value(this.gfn_addMonth(this.gfn_getDate(),-6)); } //6개월
        		else if(term == "7") {this.div_search.form.cal_periodStart.set_value(this.gfn_addMonth(this.gfn_getDate(),-12)); } //1년

        		this.div_search.form.cal_periodEnd.set_value(this.gfn_getDate());
        	}

        	//조회기간 컨트롤 활성화 or 비활성화
        	this.fn_setPeriodEnable = function(){
        		var periodType = this.div_search.form.cbo_periodType.value;

        		if(this.gfn_isNull(periodType)) {
        			this.div_search.form.cal_periodStart.set_enable(false);
        			this.div_search.form.cal_periodEnd.set_enable(false);
        			this.div_search.form.cbo_periodTerm.set_enable(false);
        		}
        		else {
        			this.div_search.form.cal_periodStart.set_enable(true);
        			this.div_search.form.cal_periodEnd.set_enable(true);
        			this.div_search.form.cbo_periodTerm.set_enable(true);
        		}
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//사업장 조건 팝업
        	this.div_search_btn_bzplcMltPop_onclick = function(obj,e)
        	{
        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcIds: this.div_search.form.edt_bzplcId.value,
        			bzplcNms: ""
        		};

        		this.gfn_openPopup("bzplcMultiPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        	};
        	//사업장 조건 텍스트 입력 팝업
        	this.div_search_btn_bzplcTxtPop_onclick = function(obj,e)
        	{
        		var params = {
        			textId : this.div_search.form.edt_bzplcId
        		};

        		var options = {};
        		options.title = "사업장";

        		this.gfn_openPopup("bzplcMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        	};
        	//운영단위 조건 팝업
        	this.div_search_btn_oprUnitMltPop_onclick = function(obj,e)
        	{
        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcId : this.ds_search.getColumn(0,"BZPLC_ID"),
        			oprUntId: this.div_search.form.edt_oprUnit.value,
        			oprUntNm: ""
        		};

        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        	};
        	//운영단위 조건 텍스트 입력 팝업
        	this.div_search_btn_oprUnitTxt_onclick = function(obj,e)
        	{
        		var params = {
        			textId : this.div_search.form.edt_oprUnit
        		};

        		var options = {};
        		options.title = "운영단위";

        		this.gfn_openPopup("oprUntMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        	};
        	//부서 조건 팝업
        	this.div_search_btn_deptMltPop_onclick = function(obj,e)
        	{
        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcId : this.ds_search.getColumn(0,"BZPLC_ID"),
        			oprUnitId : this.ds_search.getColumn(0,"OPR_UNIT_ID"),
        			deptId: this.div_search.form.edt_dept.value,
        			deptNm: ""
        		};

        		this.gfn_openPopup("deptMultiPop", "CC::SSP_BO_PP_37.xfdl", objParam);
        	};
        	//부서 조건 텍스트 입력 팝업
        	this.div_search_btn_deptTxt_onclick = function(obj,e)
        	{
        		var params = {
        			textId : this.div_search.form.edt_dept
        		};

        		var options = {};
        		options.title = "부서";

        		this.gfn_openPopup("deptMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        	};
        	//회원 조건 팝업
        	this.div_search_btn_mbrMltPop_onclick = function(obj,e)
        	{
        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcId : this.ds_search.getColumn(0,"BZPLC_ID"),
        			oprUnitId : this.ds_search.getColumn(0,"OPR_UNIT_ID"),
        			deptId : this.ds_search.getColumn(0,"DEPT_ID"),
        			mbrId: this.div_search.form.edt_mbr.value,
        			mbrNm: ""
        		};
        		this.gfn_openPopup("mbrMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        	};
        	//회원 조건 텍스트 입력 팝업
        	this.div_search_btn_mbrTxt_onclick = function(obj,e)
        	{
        		var params = {
        			textId : this.div_search.form.edt_mbr
        		};

        		var options = {};
        		options.title = "회원";

        		this.gfn_openPopup("mbrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        	};

        	//초기화 버튼 click 이벤트
        	this.div_mainList_btn_reset_onclick = function(obj,e)
        	{
        		for(i=0; i<this.ds_search.colcount; i++) {
        			if(this.ds_search.getColID(i)=="ROW_COUNT" || this.ds_search.getColID(i)=="SORT_COLUMN" || this.ds_search.getColID(i)=="SORT_TYPE" || this.ds_search.getColID(i)=="CO_CD") {
        				continue;
        			}

        			this.ds_search.setColumn(0, i, "");
        		}

        		this.div_search.form.cbo_mbrUseCd.set_index(1); //사용("Y")에 기본값 처리
        		this.div_search.form.cbo_custSprCd.set_index(0);
        		this.div_search.form.cbo_periodTerm.set_index(6); //기간 선택 콤보 1년으로 설정

        		//조회기간 설정
        		this.fn_setPeriodDate();
        		this.fn_setPeriodEnable();
        	};

        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		if((!this.gfn_isNull(this.ds_search.getColumn(0,"AGREE_TYPE")) && this.gfn_isNull(this.ds_search.getColumn(0,"AGREE_YN")))
        			|| (this.gfn_isNull(this.ds_search.getColumn(0,"AGREE_TYPE")) && !this.gfn_isNull(this.ds_search.getColumn(0,"AGREE_YN")))
        		) {
        			alert("동의여부 조건을 선택하세요.");
        			return;
        		}

        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		//페이징 초기 설정
        		this.div_paging.uPage = 1;
        		this.div_paging.uPageNum = 0;
        		this.div_paging.uPageRowCnt = 10;
        		this.div_paging.uPageCnt = 0;
        		this.div_paging.uTotCount = 0;

        		this.ds_search.setColumn(0,"START_NUM",this.div_paging.uPageNum);

        		this.fn_search();
        	};

        	//일괄상태변경
        	this.div_mainList_btn_pkgStatsChg_onclick = function(obj,e)
        	{
        		var selectedValue = this.div_mainList.form.cbo_mbrUseCdChg.value;

        		if(selectedValue == ""){
        			alert(this.fn_getMessage("ERRC000041"));
        			this.div_mainList.form.cbo_mbrUseCdChg.setFocus(true,true);
        			return;
        		}

        		this.ds_updateInfoList.clearData();
        		var rowArr = this.ds_mbrList.extractRows("_CHK == 1");
        		if(rowArr.length == 0) {
        			alert(this.fn_getMessage("ERRC000050", "항목"));
        			return;
        		}

        		for(var i=0; i<rowArr.length; i++){
        			var nRow = this.ds_updateInfoList.addRow();
        			if(selectedValue == this.ds_mbrList.getColumn(rowArr[i],"MBR_USE_CD")) {
        				alert("사용/미사용 상태가 상이한 경우, 상태변경이 불가합니다.");
        				return;
        			}

        			this.ds_updateInfoList.setColumn(nRow,"MBR_USE_CD",selectedValue);
        			this.ds_updateInfoList.setColumn(nRow,"CO_CD",this.ds_mbrList.getColumn(rowArr[i],"CO_CD"));
        			this.ds_updateInfoList.setColumn(nRow,"MBR_ID",this.ds_mbrList.getColumn(rowArr[i],"MBR_ID"));
        			this.ds_updateInfoList.setColumn(nRow,"MBR_NM",this.ds_mbrList.getColumn(rowArr[i],"MBR_NM"));
        		}

        		if(!confirm(this.fn_getMessage("ERRC000040"))) return;

        		this.updateMbrUseCdList();
        	};

        	//회원생성
        	this.div_mainList_btn_mbrReg_onclick = function(obj,e)
        	{
        		this.gfn_openPopup('mbrDtlPop', "CC::SSP_BO_MA_13.xfdl", null, function(sPopupId, sRetValue) {
        		}, {titlebar:"true"});
        	};

        	//회원탈퇴
        	this.div_mainList_btn_mbrLev_onclick = function(obj,e)
        	{
        		this.ds_updateInfoList.clearData();
        		var rowArr = this.ds_mbrList.extractRows("_CHK == 1");
        		if(rowArr.length == 0) {
        			alert(this.fn_getMessage("ERRC000050", "항목"));
        			return;
        		}

        		if(!confirm(this.fn_getMessage("ERRC000092"))) return;

        		for(var i=0; i<rowArr.length; i++){
        			var nRow = this.ds_updateInfoList.addRow();
        			this.ds_updateInfoList.setColumn(nRow,"CO_CD",this.ds_mbrList.getColumn(rowArr[i],"CO_CD"));
        			this.ds_updateInfoList.setColumn(nRow,"MBR_ID",this.ds_mbrList.getColumn(rowArr[i],"MBR_ID"));
        			this.ds_updateInfoList.setColumn(nRow,"MBR_NM",this.ds_mbrList.getColumn(rowArr[i],"MBR_NM"));
        		}

        		this.updateStopMbrStatus();
        	};

        	//회원복사
        	this.div_mainList_btn_mbrCpy_onclick = function(obj,e)
        	{
        		var rowArr = this.ds_mbrList.extractRows("_CHK == 1");
        		if(rowArr.length == 0) {
        			alert(this.fn_getMessage("ERRC000050", "항목"));
        			return;
        		}
        		if(rowArr.length != 1) {
        			alert(this.fn_getMessage("ERRC000094"));
        			return;
        		}

        		//회원생성 페이지로 이동
        		//TB_CO_MNU_INFO.MNU_LVL_SPR_CD 컬럼값
        		//var param = {coCd : this.ds_mbrList.getColumn(rowArr[0],"CO_CD"), mbrId : this.ds_mbrList.getColumn(rowArr[0],"MBR_ID")};
        		//this.gfn_menuOpen("3501980000", param);

        		this.gfn_openPopup('mbrDtlPop', "CC::SSP_BO_MA_13.xfdl", {coCd : this.ds_mbrList.getColumn(rowArr[0],"CO_CD"), mbrId : this.ds_mbrList.getColumn(rowArr[0],"MBR_ID")}, function(sPopupId, sRetValue) {
        		}, {titlebar:"true"});

        	};

        	//일괄등록
        	this.div_mainList_btn_pkgReg_onclick = function(obj,e)
        	{
        		var param = {pgmId : "SSP_XL_CC_13"};
        		this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        	};

        	//엑셀다운로드
        	this.btn_excel_onclick = function(obj,e)
        	{
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");

        	};

        	// 엑셀다운로드
        	this.fn_excelDownload = function(objId, ret) {
        		var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) { return; }
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"회원목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_MA_12"});

        	}

        	this.grd_mainList_oncellclick = function(obj,e)
        	{
        		if(this.gfn_getBindColumnNameByIndex(obj, e.col) == "MBR_ID") {
        			this.gfn_openPopup('mbrDtlPop', "CC::SSP_BO_CC_T3.xfdl", {coCd:this.ds_mbrList.getColumn(e.row,"CO_CD"), mbrId:this.ds_mbrList.getColumn(e.row,"MBR_ID")}, function(sPopupId, sRetValue) {
        			}, {titlebar:"true"});
        		}
        	};

        	//페이지 리스트 목록 변경시
        	this.cbo_page_onitemchaged = function(obj,e)
        	{
        		this.btn_search_onclick();
        	};

        	this.btn_allExcel_onclick = function(obj,e)
        	{
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        	};

        	// 대용량엑셀 다운로드
        	this.fn_excelDownloadPwdCallback = function(objId, ret)
        	{

        	    var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) return;

        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거
        		this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        		this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        		this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");

        		this.fn_allExcelDownload();
        	}

        	// 레이아웃 저장
        	this.btn_layoutSave_onclick = function(obj,e)
        	{
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        	};

        	// 레이아웃 초기화
        	this.btn_layoutClear_onclick = function(obj,e)
        	{
        		//suOrgFormat
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        		this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        	};

        	this.cbo_periodTerm_onitemchanged = function(obj,e)
        	{
        		this.fn_setPeriodDate();
        	};

        	this.cbo_periodType_onitemchanged = function(obj,e)
        	{
        		this.fn_setPeriodEnable();
        	};

        	this.SSP_BO_MA_12_onkeyup = function(obj,e)
        	{
        		if(e.ctrlkey && e.keycode==13) {
        			this.btn_search_onclick();
        		}
        	};

        this.ds_search_onvaluechanged = function(obj,e)
        {
        	var custSprCd=this[e.fromobject.id].getColumn(0, 'CUST_SPR_CD');
        	this.div_search.form.cmbCONSN_CUST_YN.set_visible('20'==custSprCd);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_12_onkeyup,this);
            this.div_search.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.div_search.form.btn_bzplcMltPop.addEventHandler("onclick",this.div_search_btn_bzplcMltPop_onclick,this);
            this.div_search.form.btn_bzplcTxtPop.addEventHandler("onclick",this.div_search_btn_bzplcTxtPop_onclick,this);
            this.div_search.form.btn_oprUnitMltPop.addEventHandler("onclick",this.div_search_btn_oprUnitMltPop_onclick,this);
            this.div_search.form.btn_oprUnitTxt.addEventHandler("onclick",this.div_search_btn_oprUnitTxt_onclick,this);
            this.div_search.form.btn_deptMltPop.addEventHandler("onclick",this.div_search_btn_deptMltPop_onclick,this);
            this.div_search.form.btn_deptTxt.addEventHandler("onclick",this.div_search_btn_deptTxt_onclick,this);
            this.div_search.form.btn_mbrMltPop.addEventHandler("onclick",this.div_search_btn_mbrMltPop_onclick,this);
            this.div_search.form.btn_mbrTxt.addEventHandler("onclick",this.div_search_btn_mbrTxt_onclick,this);
            this.div_search.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.div_search.form.cbo_periodType.addEventHandler("onitemchanged",this.cbo_periodType_onitemchanged,this);
            this.div_search.form.cbo_periodTerm.addEventHandler("onitemchanged",this.cbo_periodTerm_onitemchanged,this);
            this.div_mainList.form.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.div_mainList.form.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.div_mainList.form.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchaged,this);
            this.div_mainList.form.btn_excelDown.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.div_mainList.form.btn_pkgReg.addEventHandler("onclick",this.div_mainList_btn_pkgReg_onclick,this);
            this.div_mainList.form.btn_mbrCpy.addEventHandler("onclick",this.div_mainList_btn_mbrCpy_onclick,this);
            this.div_mainList.form.btn_mbrLev.addEventHandler("onclick",this.div_mainList_btn_mbrLev_onclick,this);
            this.div_mainList.form.btn_mbrReg.addEventHandler("onclick",this.div_mainList_btn_mbrReg_onclick,this);
            this.div_mainList.form.btn_pkgStatsChg.addEventHandler("onclick",this.div_mainList_btn_pkgStatsChg_onclick,this);
            this.div_mainList.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_mainList.form.btn_reset.addEventHandler("onclick",this.div_mainList_btn_reset_onclick,this);
            this.div_mainList.form.btn_allExcel.addEventHandler("onclick",this.btn_allExcel_onclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.ds_search.addEventHandler("onvaluechanged",this.ds_search_onvaluechanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
