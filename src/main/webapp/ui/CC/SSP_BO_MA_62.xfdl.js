(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ssp_bo_ma_62");
            this.set_titletext("일반 예산 이체 탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"dspBzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"dspBzplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"dspOprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"dspOprUnitNm\" type=\"STRING\" size=\"256\"/><Column id=\"dspDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"dspDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"dspAcctId\" type=\"STRING\" size=\"256\"/><Column id=\"dspAcctNm\" type=\"STRING\" size=\"256\"/><Column id=\"dspBgtYy\" type=\"STRING\" size=\"256\"/><Column id=\"dspBgtAplyPerdCd\" type=\"STRING\" size=\"256\"/><Column id=\"dspAcctBal\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"dspTrnsfAmt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"dspTrnsfRsn\" type=\"STRING\" size=\"2000\"/><Column id=\"rcvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"rcvDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcvAcctId\" type=\"STRING\" size=\"256\"/><Column id=\"rcvAcctNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcvBgtYy\" type=\"STRING\" size=\"256\"/><Column id=\"rcvBgtAplyPerdCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcvPreAcctBal\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"rcvAfthAcctBal\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bal", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_BAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qrtBgtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_CLOS_DD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgtAplyPerdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dspBgtYy", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchBal", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"acctId\" type=\"STRING\" size=\"256\"/><Column id=\"bgtYy\" type=\"STRING\" size=\"256\"/><Column id=\"bgtAplyPerdCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rcvBgtYy", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","25",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","432","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","862","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzpSingle","393","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprSingle","808","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","134","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","567","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","998","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","235","4","154","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","667","4","137","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","1099","4","137","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptSingle","1240","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchReset",null,"62","60","30","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Div("div_dsp","0","100",null,"180","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","146",null,"32","0",null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static65","0","115",null,"32","0",null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"63","0",null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("0");
            obj.set_text("발신 부서");
            obj.set_cssclass("sta_WF_title01");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static10","0","115","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("2");
            obj.set_text("조정년월/분기");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static12","0","146","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("3");
            obj.set_text("이체금액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static22_01","611","146","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("4");
            obj.set_text("이체사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static22_01_01","611","115","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("10");
            obj.set_text("계정잔액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","84",null,"32","0",null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","84","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("13");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static22_01_01_00","611","84","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("14");
            obj.set_text("발신계정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Edit("edt_dspAcctNm","745","88","269","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("15");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static22_01_01_00_00","611","53","130","32",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("16");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static01","1020","121","22","21",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("21");
            obj.set_text("원");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Button("btn_dspBalSearch","Static01:6","119","66","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("11");
            obj.set_text("잔액조회");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Edit("edt_dspTrnsfRsn","745","150","376","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("17");
            obj.set_maxlength("30");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Combo("cbo_dspBgtYy","135","119","80","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_dspBgtYy");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Combo("cbo_dspBgtAplyPerdCd","219","119","80","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_bgtAplyPerdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Button("btn_dspAcctSingle","1020","88","24","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspBzplcId","135","54","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspBzplcNm","305","54","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspDeptId","135","84","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspDeptNm","305","84","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspOprUnitId","745","54","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspOprUnitNm","915","54","150","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspBzplc00","283","53","25","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("|");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspBzplc00_00","283","83","25","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("|");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("sta_dspBzplc00_00_00","893","53","25","31",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("|");
            this.div_dsp.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dspAcctBal","745","119","269","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_dsp.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dspTrnsfAmt","135","150","269","24",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Static("Static01_00","410","151","22","21",null,null,null,null,null,null,this.div_dsp.form);
            obj.set_taborder("33");
            obj.set_text("원");
            this.div_dsp.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"118","60","30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveReset",null,"118","60","30","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Div("div_rcv","0","269",null,"161","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","0","115",null,"32","0",null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"63","0",null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("0");
            obj.set_text("수신 부서");
            obj.set_cssclass("sta_WF_title01");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static10","0","115","130","32",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("2");
            obj.set_text("수신 후 잔액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Edit("edt_rcvAcctNm","745","57","269","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","84",null,"32","0",null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("1");
            obj.set_text("수신부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","84","130","32",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("10");
            obj.set_text("수신년월/분기");
            obj.set_cssclass("sta_cm_box01L");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static22_01_01_00","611","84","130","32",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("11");
            obj.set_text("수신 전 잔액");
            obj.set_cssclass("sta_cm_box01L");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static22_01_01_00_00","611","53","130","32",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("12");
            obj.set_text("수신계정");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static01","1020","91","22","21",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("16");
            obj.set_text("원");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Button("btn_rcvBalSearch","Static01:6","88","66","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("7");
            obj.set_text("잔액조회");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Combo("cbo_rcvBgtYy","135","88","80","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_rcvBgtYy");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_index("-1");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Combo("cbo_rcvBgtAplyPerdCd","219","88","80","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_bgtAplyPerdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_index("-1");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Button("btn_rcvAcctSingle","1020","57","24","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Edit("edt_rcvDeptNm","236","57","137","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Edit("edt_rcvDeptId","135","57","95","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Button("btn_rcvDeptSingle","378","57","24","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            this.div_rcv.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rcvPreAcctBal","745","88","269","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_rcv.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rcvAfthAcctBal","135","119","269","24",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_rcv.addChild(obj.name, obj);

            obj = new Static("Static01_00","410","121","22","21",null,null,null,null,null,null,this.div_rcv.form);
            obj.set_taborder("22");
            obj.set_text("원");
            this.div_rcv.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_bzplcId","value","ds_search","bzplcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_oprUnitId","value","ds_search","oprUnitId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_deptId","value","ds_search","deptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcNm","value","ds_search","bzplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_oprUnitNm","value","ds_search","oprUnitNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_deptNm","value","ds_search","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_dsp.form.edt_dspAcctNm","value","ds_param","dspAcctNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_rcv.form.edt_rcvAcctNm","value","ds_param","rcvAcctNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_dsp.form.edt_dspTrnsfRsn","value","ds_param","dspTrnsfRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_dsp.form.cbo_dspBgtYy","value","ds_param","dspBgtYy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_deliver.form.cbo_bgtYyStrMm00","value","ds_dtl","DLV_HP_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_dsp.form.cbo_dspBgtAplyPerdCd","value","ds_param","dspBgtAplyPerdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_rcv.form.cbo_rcvBgtYy","value","ds_param","rcvBgtYy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_rcv.form.cbo_rcvBgtAplyPerdCd","value","ds_param","rcvBgtAplyPerdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_rcv.form.edt_rcvDeptNm","value","ds_param","rcvDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_rcv.form.edt_rcvDeptId","value","ds_param","rcvDeptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_dsp.form.sta_dspBzplcId","text","ds_param","dspBzplcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_basis.form.Static29_00_00_00_00_00","text","ds_dtl","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_dsp.form.sta_dspBzplcNm","text","ds_param","dspBzplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_dsp.form.sta_dspDeptId","text","ds_param","dspDeptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_dsp.form.sta_dspDeptNm","text","ds_param","dspDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_dsp.form.sta_dspOprUnitId","text","ds_param","dspOprUnitId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_dsp.form.sta_dspOprUnitNm","text","ds_param","dspOprUnitNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_dsp.form.sta_dspBzplc00","text","ds_dtl","CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_dsp.form.sta_dspBzplc00_00","text","ds_dtl","CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_dsp.form.sta_dspBzplc00_00_00","text","ds_dtl","CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_dsp.form.msk_dspAcctBal","value","ds_param","dspAcctBal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_dsp.form.msk_dspTrnsfAmt","value","ds_param","dspTrnsfAmt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_rcv.form.msk_rcvPreAcctBal","value","ds_param","rcvPreAcctBal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_rcv.form.msk_rcvAfthAcctBal","value","ds_param","rcvAfthAcctBal");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_62.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_62.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_62.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_62.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
          박재광
          2022.03.28
          최초작성
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_sessionData = this.getSession(); //session object
        this.fv_coCd = this.fv_sessionData.coCd; //회사코드
        this.today = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//조회조건 초기화
        	this.initSearchParam();

        	//입력영역 초기화
        	this.initInput();

        	//예산기간 년도 데이터셋 설정
        	this.today = this.gfn_getDate();
        	var year = Number(this.gfn_left(this.today,4));

        	var nRow = this.ds_dspBgtYy.addRow();
        	this.ds_dspBgtYy.setColumn(nRow, "COM_DTL_CD", year-1);
        	this.ds_dspBgtYy.setColumn(nRow, "COM_DTL_CD_NM", year-1);
        	nRow = this.ds_dspBgtYy.addRow();
        	this.ds_dspBgtYy.setColumn(nRow, "COM_DTL_CD", year);
        	this.ds_dspBgtYy.setColumn(nRow, "COM_DTL_CD_NM", year);
        	this.div_dsp.form.cbo_dspBgtYy.set_value(year);

        	nRow = this.ds_rcvBgtYy.addRow();
        	this.ds_rcvBgtYy.setColumn(nRow, "COM_DTL_CD", year);
        	this.ds_rcvBgtYy.setColumn(nRow, "COM_DTL_CD_NM", year);
        	nRow = this.ds_rcvBgtYy.addRow();
        	this.ds_rcvBgtYy.setColumn(nRow, "COM_DTL_CD", year+1);
        	this.ds_rcvBgtYy.setColumn(nRow, "COM_DTL_CD_NM", year+1);
        	this.div_rcv.form.cbo_rcvBgtYy.set_value(year);

        	//검색 영역 최소size 적용
        	this.div_search.set_height(this.div_search.uMinSize);
        	this.resetScroll();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, "codeList", "BGT_APLY_PERD_CD");
        	this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCodeSearch";
        	var outDs = "ds_bgtAplyPerdCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBackComCode");
        }

        //분기예산사용여부 조회(사업장,운영단위 파라미터만 있으면 됨)
        this.fn_searchQrtYn = function()	{
        	var sSvcId = "selectQrtYn";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_84/select-qrt-bgt-use-yn.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_qrtBgtUseYn=ds_qrtBgtUseYn";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //발신 계정잔액 조회
        this.fn_searchDspBal = function()	{
        	this.ds_searchBal.clearData();
        	this.ds_searchBal.addRow();
        	this.ds_searchBal.setColumn(0,"coCd",this.fv_coCd);
        	this.ds_searchBal.setColumn(0,"bzplcId",this.ds_param.getColumn(0,"dspBzplcId"));
        	this.ds_searchBal.setColumn(0,"acctId",this.ds_param.getColumn(0,"dspAcctId"));
        	this.ds_searchBal.setColumn(0,"deptId",this.ds_param.getColumn(0,"dspDeptId"));
        	this.ds_searchBal.setColumn(0,"bgtYy",this.ds_param.getColumn(0,"dspBgtYy"));
        	this.ds_searchBal.setColumn(0,"bgtAplyPerdCd",this.ds_param.getColumn(0,"dspBgtAplyPerdCd"));

        	var sSvcId = "selectDspBal";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_62/select-acct-bal.do";
        	var inDs = "ds_searchBal=ds_searchBal";
        	var outDs = "ds_bal=ds_bal";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //수신 계정잔액 조회
        this.fn_searchRcvBal = function()	{
        	this.ds_searchBal.clearData();
        	this.ds_searchBal.addRow();
        	this.ds_searchBal.setColumn(0,"coCd",this.fv_coCd);
        	this.ds_searchBal.setColumn(0,"bzplcId",this.ds_param.getColumn(0,"dspBzplcId"));
        	this.ds_searchBal.setColumn(0,"acctId",this.ds_param.getColumn(0,"rcvAcctId"));
        	this.ds_searchBal.setColumn(0,"deptId",this.ds_param.getColumn(0,"rcvDeptId"));
        	this.ds_searchBal.setColumn(0,"bgtYy",this.ds_param.getColumn(0,"rcvBgtYy"));
        	this.ds_searchBal.setColumn(0,"bgtAplyPerdCd",this.ds_param.getColumn(0,"rcvBgtAplyPerdCd"));

        	var sSvcId = "selectRcvBal";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_62/select-acct-bal.do";
        	var inDs = "ds_searchBal=ds_searchBal";
        	var outDs = "ds_bal=ds_bal";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{
        	var sSvcId = "save";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_62/save-gen-bgt-trnsf.do";
        	var inDs = "ds_param=ds_param";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //공통코드 조회후 콜백
        this.fn_callBackComCode = function(svcID, errorCode, errorMsg)	{
        	this.ds_bgtAplyPerdCd.insertRow(0);
        	this.ds_bgtAplyPerdCd.setColumn(0,"COM_DTL_CD","");
        	this.ds_bgtAplyPerdCd.setColumn(0,"COM_DTL_CD_NM","선택");
        	//this.ds_bgtAplyPerdCd.filter("COM_DTL_CD==''");
        	this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_value("");
        	this.div_rcv.form.cbo_rcvBgtAplyPerdCd.set_value("");
        };

        // 트랜잭션 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode == -1) {
        		alert(this.fn_getMessage("ERRC000058"));	//오류가 발생했습니다.
        	} else {
        		if(svcID == "selectQrtYn") {	//분기예산사용여부 조회
        			trace("=====분기예산사용여부 조회=====");
        			//this.ds_bgtAplyPerdCd.filter("1==0");
        			if(this.ds_qrtBgtUseYn.getRowCount()==1 ) {
        				var qrtYn = this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN");
        				//var dd = this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD");

        				this.today = this.gfn_getDate();
        				var dspYyyy = this.today.substr(0,4);
        				var dspMm = this.today.substr(4,2);
        				var dspQrt = this.getQrt(dspMm);

        				/*
        				var todayAfter1Mon = this.gfn_addMonth(this.today, 1);
        				var todayAfter1Qrt = this.gfn_addMonth(this.today, 3);

        				var rcvMonYyyy = todayAfter1Mon.substr(0,4);
        				var rcvMon = todayAfter1Mon.substr(4,2);
        				var rcvQrtYyyy = todayAfter1Qrt.substr(0,4);
        				var rcvQrt = this.getQrt(todayAfter1Qrt.substr(4,2));
        				*/
        				if(qrtYn=="Y") {	//분기
        					this.ds_bgtAplyPerdCd.filter("COM_DTL_CD==''||COM_DTL_CD=='21'||COM_DTL_CD=='22'||COM_DTL_CD=='23'||COM_DTL_CD=='24'");
        					this.div_dsp.form.Static10.set_text("조정년분기");
        					this.div_dsp.form.cbo_dspBgtYy.set_value(dspYyyy);
        					this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_value(dspQrt);
        					this.div_rcv.form.Static10_00.set_text("수신년분기");
        					this.div_rcv.form.cbo_rcvBgtYy.set_value(dspYyyy);
        					this.div_rcv.form.cbo_rcvBgtAplyPerdCd.set_value(dspQrt);
        				} else {	//월
        					this.ds_bgtAplyPerdCd.filter("COM_DTL_CD==''||COM_DTL_CD=='01'||COM_DTL_CD=='02'||COM_DTL_CD=='03'||COM_DTL_CD=='04'||COM_DTL_CD=='05'||COM_DTL_CD=='06'||COM_DTL_CD=='07'||COM_DTL_CD=='08'||COM_DTL_CD=='09'||COM_DTL_CD=='10'||COM_DTL_CD=='11'||COM_DTL_CD=='12'");
        					this.div_dsp.form.Static10.set_text("조정년월");
        					this.div_dsp.form.cbo_dspBgtYy.set_value(dspYyyy);
        					this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_value(dspMm);
        					this.div_rcv.form.Static10_00.set_text("수신년월");
        					this.div_rcv.form.cbo_rcvBgtYy.set_value(dspYyyy);
        					this.div_rcv.form.cbo_rcvBgtAplyPerdCd.set_value(dspMm);
        				}

        				/*
        				if(Number(this.today.substr(6,2)) >= Number(dd)) {
        					this.div_dsp.form.cbo_dspBgtYy.set_enable(true);
        					this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_enable(true);
        				} else {
        					this.div_dsp.form.cbo_dspBgtYy.set_enable(false);
        					this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_enable(false);
        					//alert();	//마감일이 지났다
        				}
        				*/
        			}
        		} else if(svcID == "selectDspBal") {	//발신 계정잔액 조회
        			if(this.ds_bal.getRowCount()==1) {
        				var bal = this.ds_bal.getColumn(0,"ACCT_BAL");
        				this.ds_param.setColumn(0,"dspAcctBal",bal);
        				this.ds_bal.clearData();
        				this.ds_param.setColumn(0,"dspTrnsfAmt",null)	//이체금액칸을 비우기
        				this.ds_param.setColumn(0,"rcvAfthAcctBal",null);	//수신후잔액칸을 비우기
        			}
        		} else if(svcID == "selectRcvBal") {	//수신 계정잔액 조회
        			if(this.ds_bal.getRowCount()==1) {
        				var bal = this.ds_bal.getColumn(0,"ACCT_BAL");
        				trace("수신계정잔액 : " + bal);
        				this.ds_param.setColumn(0,"rcvPreAcctBal",bal);	//수신_전잔액
        				this.ds_bal.clearData();

        				var dspTrnsfAmt = this.ds_param.getColumn(0,"dspTrnsfAmt");		//이체금액
        				if(this.gfn_isNull(dspTrnsfAmt)) {	//이체금액을 입력하지 않았다면
        					this.ds_param.setColumn(0,"rcvAfthAcctBal",null);	//수신_후잔액
        				} else {
        					this.ds_param.setColumn(0,"rcvAfthAcctBal",bal + dspTrnsfAmt);	//수신_후잔액
        				}
        			}
        		} else if(svcID == "save") {
        			alert(this.fn_getMessage("ERRC000079"));	//정상적으로 저장되었습니다
        			this.initSearchParam();	//조회조건 초기화
        			this.initInput();	//입력영역 초기화
        		} else if(svcID == "commonCodeSearch") {
        			this.ds_bgtAplyPerdCd.filter("1==0");
        		}
        	}
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//search static 필수표시 설정
        	this.div_search.form.Static02.uEssentiel = "true";
        	this.div_search.form.Static04.uEssentiel = "true";
        	this.div_search.form.Static06.uEssentiel = "true";

        	//search div 초기 설정
        	this.div_search.uMinSize = this.div_search.height;
        	this.div_search.uMaxSize = 157;
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //조회조건 초기화
        this.initSearchParam = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0,"coCd",this.fv_coCd);
        }

        //입력영역 초기화
        this.initInput = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0,"coCd",this.fv_coCd);
        	this.ds_qrtBgtUseYn.clearData();	//분기예산사용여부 초기화
        	this.ds_bal.clearData();	//
        // 	this.div_dsp.form.cbo_dspBgtYy.set_value("");
        // 	this.div_rcv.form.cbo_rcvBgtYy.set_value("");
        // 	this.div_dsp.form.cbo_dspBgtAplyPerdCd.set_value("");
        // 	this.div_rcv.form.cbo_rcvBgtAplyPerdCd.set_value("");
        }

        // 월로 분기 구하기
        this.getQrt = function(mm)
        {
        	var qrt = "";
        	if(mm=="01"||mm=="02"||mm=="03") {
        		qrt = "21";
        	} else if(mm=="04"||mm=="05"||mm=="06") {
        		qrt = "22";
        	} else if(mm=="07"||mm=="08"||mm=="09") {
        		qrt = "23";
        	} else if(mm=="10"||mm=="11"||mm=="12") {
        		qrt = "24";
        	}
        	return qrt;
        }

        /***********************************************************************************************
        *  큰 버튼 이벤트들
        ************************************************************************************************/
        //조회 버튼 클릭
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"bzplcId"))) {
        		alert(this.fn_getMessage("ERRC000004","사업장"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"oprUnitId"))) {
        		alert(this.fn_getMessage("ERRC000004","운영단위"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"deptId"))) {
        		alert(this.fn_getMessage("ERRC000004","부서"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	this.ds_param.setColumn(0,"dspBzplcId",this.ds_search.getColumn(0,"bzplcId"));	//사업장ID
        	this.ds_param.setColumn(0,"dspBzplcNm",this.ds_search.getColumn(0,"bzplcNm"));	//사업장명
        	this.ds_param.setColumn(0,"dspOprUnitId",this.ds_search.getColumn(0,"oprUnitId"));	//운영단위ID
        	this.ds_param.setColumn(0,"dspOprUnitNm",this.ds_search.getColumn(0,"oprUnitNm"));	//운영단위명
        	this.ds_param.setColumn(0,"dspDeptId",this.ds_search.getColumn(0,"deptId"));	//부서ID
        	this.ds_param.setColumn(0,"dspDeptNm",this.ds_search.getColumn(0,"deptNm"));	//부서명

        	this.fn_searchQrtYn();
        };

        //초기화 버튼(조회조건영역) 클릭
        this.btn_searchReset_onclick = function(obj,e)
        {
        	this.initSearchParam();	//조회조건 초기화
        	this.initInput();	//입력영역 초기화
        };

        //저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	var dspBzplcId = this.ds_param.getColumn(0,"dspBzplcId"); //사업장
        	var dspDeptId = this.ds_param.getColumn(0,"dspDeptId"); //발신부서
        	var dspAcctId = this.ds_param.getColumn(0,"dspAcctId"); //발신계정
        	var dspBgtYy = this.ds_param.getColumn(0,"dspBgtYy"); //발신조정년
        	var dspBgtAplyPerdCd = this.ds_param.getColumn(0,"dspBgtAplyPerdCd"); //발신조정월분기
        	var dspAcctBal = this.ds_param.getColumn(0,"dspAcctBal"); //발신 계정잔액
        	var dspTrnsfAmt = this.ds_param.getColumn(0,"dspTrnsfAmt"); //이체금액
        	var dspTrnsfRsn = this.ds_param.getColumn(0,"dspTrnsfRsn"); //이체사유
        	var rcvDeptId = this.ds_param.getColumn(0,"rcvDeptId"); //수신부서
        	var rcvAcctId = this.ds_param.getColumn(0,"rcvAcctId"); //수신계정
        	var rcvBgtYy = this.ds_param.getColumn(0,"rcvBgtYy"); //수신년
        	var rcvBgtAplyPerdCd = this.ds_param.getColumn(0,"rcvBgtAplyPerdCd"); //수신월분기
        	var rcvPreAcctBal = this.ds_param.getColumn(0,"rcvPreAcctBal"); //수신전 잔액
        	var rcvAfthAcctBal = this.ds_param.getColumn(0,"rcvAfthAcctBal"); //수신후 잔액

        	if(this.gfn_isNull(dspBzplcId)) { //사업장
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		//this.div_search.form.btn_bzpSingle.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspDeptId)) { //발신부서
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		//this.div_search.form.btn_deptSingle.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspAcctId)) {	//발신계정
        		alert(this.fn_getMessage("ERRC000009","발신계정"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.btn_dspAcctSingle.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspBgtYy)) {	//발신조정년
        		alert(this.fn_getMessage("ERRC000009","조정년도"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.cbo_dspBgtYy.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspBgtAplyPerdCd)) { //발신조정월분기
        		alert(this.fn_getMessage("ERRC000009","조정 월이나 분기"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.cbo_dspBgtAplyPerdCd.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspAcctBal)) { //발신 계정잔액
        		alert(this.fn_getMessage("ERRC000009","발신계정잔액"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.btn_dspBalSearch.setFocus();
        		return;
        	} else if (Number(dspAcctBal)<1) { //발신 계정잔액
        		alert(this.fn_getMessage("ERRC000072"));	//이체할 수 있는 잔액이 없습니다.
        		//this.div_dsp.form.btn_dspBalSearch.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspTrnsfAmt)) { //이체금액
        		alert(this.fn_getMessage("ERRC000009","이체금액"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.msk_dspTrnsfAmt.setFocus();
        		return;
        	} else if (Number(dspTrnsfAmt)<1) { //이체금액
        		alert(this.fn_getMessage("ERRC000009","1이상의 이체금액"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.msk_dspTrnsfAmt.setFocus();
        		return;
        	} else if (this.gfn_isNull(dspTrnsfRsn)) { //이체사유
        		alert(this.fn_getMessage("ERRC000009","이체사유"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.msk_dspTrnsfRsn.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvDeptId)) { //수신부서
        		alert(this.fn_getMessage("ERRC000009","수신부서"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.btn_rcvDeptSingle.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvAcctId)) { //수신계정
        		alert(this.fn_getMessage("ERRC000009","수신계정"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.btn_rcvAcctSingle.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvBgtYy)) {	//수신년
        		alert(this.fn_getMessage("ERRC000009","수신년도"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.cbo_rcvBgtYy.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvBgtAplyPerdCd)) {	//수신월분기
        		alert(this.fn_getMessage("ERRC000009","수신 월이나 분기"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.cbo_rcvBgtAplyPerdCd.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvPreAcctBal)) { //수신 계정잔액
        		alert(this.fn_getMessage("ERRC000010","수신전 잔액"));	//&1 을(를) 조회하세요
        		//this.div_rcv.form.btn_rcvBalSearch.setFocus();
        		return;
        	} else if (this.gfn_isNull(rcvAfthAcctBal)) { //수신후 잔액
        		alert(this.fn_getMessage("ERRC000007","수신전 잔액"));	//&1 을(를) 먼저 조회하세요.
        		//this.div_rcv.form.btn_rcvBalSearch.setFocus();
        		return;
        	} else if (Number(dspTrnsfAmt)<1) {	// 이체금액이 0 이상이어야함
        		alert(this.fn_getMessage("ERRC000009","정확한 이체금액"));	//&1 을(를) 입력하세요.
        		return;
        	}
        	  /*else if (Number(dspBgtAplyPerdCd) > Number(rcvBgtAplyPerdCd)) {
        		alert(this.fn_getMessage("ERRC000086"));	//지난 기간에 이체할 수 없습니다.
        		return;
        	}*/
        	  else if (dspDeptId==rcvDeptId && dspAcctId==rcvAcctId && dspBgtYy==rcvBgtYy && dspBgtAplyPerdCd==rcvBgtAplyPerdCd) {	//부서 계정 년도 기간적용코드
        		alert(this.fn_getMessage("ERRC000014"));	//같은 부서,계정,년도,기간에 이체할 수 없습니다.
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRC000080"))) {	//저장하시겠습니까?
        		this.fn_save();
        	}
        };

        //초기화 버튼(입력영역) 버큰 클릭
        this.btn_saveReset_onclick = function(obj,e)
        {
        	this.initInput();	//입력영역 초기화
        };

        //발신 잔액조회 버튼 클릭
        this.div_dsp_btn_dspBalSearch_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_param.getColumn(0,"dspBzplcId"))) {
        		alert(this.fn_getMessage("ERRC000010","사업장"));	//&1 을(를) 조회하세요
        		return;
        	}

        	if(this.gfn_isNull(this.ds_param.getColumn(0,"dspDeptId"))) {
        		alert(this.fn_getMessage("ERRC000010","발신부서"));	//&1 을(를) 조회하세요
        		return;
        	}

        	if(this.gfn_isNull(this.ds_param.getColumn(0,"dspAcctId"))) {
        		alert(this.fn_getMessage("ERRC000009","발신계정"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.btn_dspAcctSingle.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(this.div_dsp.form.cbo_dspBgtYy.value)) {
        		alert(this.fn_getMessage("ERRC000009","발신 조정년도"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.cbo_dspBgtYy.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(this.div_dsp.form.cbo_dspBgtAplyPerdCd.value)) {
        		alert(this.fn_getMessage("ERRC000009","발신 조정 월이나 분기"));	//&1 을(를) 입력하세요.
        		//this.div_dsp.form.cbo_dspBgtAplyPerdCd.setFocus();
        		return;
        	}

        	this.fn_searchDspBal();
        };

        //수신 잔액조회 버튼 클릭
        this.div_rcv_btn_rcvBalSearch_onclick = function(obj,e)
        {
        	var dspDeptId = this.ds_param.getColumn(0,"dspDeptId");
        	var dspAcctId = this.ds_param.getColumn(0,"dspAcctId");
        	var dspBgtYy = this.ds_param.getColumn(0,"dspBgtYy");
        	var dspBgtAplyPerdCd = this.ds_param.getColumn(0,"dspBgtAplyPerdCd");
        	var rcvDeptId = this.ds_param.getColumn(0,"rcvDeptId");
        	var rcvAcctId = this.ds_param.getColumn(0,"rcvAcctId");
        	var rcvBgtYy = this.ds_param.getColumn(0,"rcvBgtYy");
        	var rcvBgtAplyPerdCd = this.ds_param.getColumn(0,"rcvBgtAplyPerdCd");

        	if(this.gfn_isNull(this.ds_param.getColumn(0,"dspBzplcId"))) {
        		alert(this.fn_getMessage("ERRC000010","사업장"));	//&1 을(를) 조회하세요
        		return;
        	}

        	if(this.gfn_isNull(rcvDeptId)) {
        		alert(this.fn_getMessage("ERRC000009","수신부서"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.btn_rcvDeptSingle.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(rcvAcctId)) {
        		alert(this.fn_getMessage("ERRC000009","수신계정"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.btn_rcvAcctSingle.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(rcvBgtYy)) {
        		alert(this.fn_getMessage("ERRC000009","수신 조정년도"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.cbo_rcvBgtYy.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(rcvBgtAplyPerdCd)) {
        		alert(this.fn_getMessage("ERRC000009","수신 조정 월이나 분기"));	//&1 을(를) 입력하세요.
        		//this.div_rcv.form.cbo_rcvBgtAplyPerdCd.setFocus();
        		return;
        	}

        	if(dspDeptId==rcvDeptId && dspAcctId==rcvAcctId && dspBgtYy==rcvBgtYy && dspBgtAplyPerdCd==rcvBgtAplyPerdCd) {
        		alert(this.fn_getMessage("ERRC000014"));	//같은 부서,계정,년도,기간에 이체할 수 없습니다.
        		return;
        	}

        	this.fn_searchRcvBal();
        };


        /***********************************************************************************************
        *  팝업 버튼 이벤트들
        ************************************************************************************************/

        // 조회조건 사업장 팝업 버튼 클릭
        this.div_search_btn_bzpSingle_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : this.fv_coCd
        	};
        	this.gfn_openPopup('bizPop', "CO_POP::SSP_BO_PP_22.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 조회조건 운영단위 팝업 버튼 클릭
        this.div_search_btn_oprSingle_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_search.getColumn(0, "bzplcId");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000005","사업장"));	//&1 을(를) 먼저 선택하세요.
        		return;
        	}

        	var oArg = {
        		 coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        	};
        	this.gfn_openPopup('oprUnit', "CO_POP::SSP_BO_PP_15.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 조회조건 부서 팝업 버튼 클릭
        this.div_search_btn_deptSingle_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_search.getColumn(0, "bzplcId");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000005","사업장"));	//&1 을(를) 먼저 선택하세요.
        		return;
        	}

        	var paramOprUnitId = this.ds_search.getColumn(0, "oprUnitId");

        	if(this.gfn_isNull(paramOprUnitId)) {
        		alert(this.fn_getMessage("ERRC000005","운영단위"));	//&1 을(를) 먼저 선택하세요.
        		return;
        	}

        	var oArg = {
        		coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        		,oprUnitId : paramOprUnitId
        	};
        	this.gfn_openPopup('dept', "CC::SSP_BO_PP_39.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 수신 부서 팝업 버튼 클릭
        this.div_rcv_btn_rcvDeptSingle_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_search.getColumn(0, "bzplcId");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		return;
        	}

        	var paramOprUnitId = this.ds_search.getColumn(0, "oprUnitId");

        	if(this.gfn_isNull(paramOprUnitId)) {
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		return;
        	}

        	var oArg = {
        		coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        		,oprUnitId : paramOprUnitId
        	};
        	this.gfn_openPopup('rcvDept', "CC::SSP_BO_PP_39.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 발신 계정 팝업 버튼 클릭
        this.div_dsp_btn_dspAcctSingle_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_param.getColumn(0, "dspBzplcId");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		return;
        	}

        	var paramDeptId = this.ds_param.getColumn(0, "dspDeptId");

        	if(this.gfn_isNull(paramDeptId)) {
        		alert(this.fn_getMessage("ERRC000009","발신부서"));	//&1 을(를) 입력하세요.
        		return;
        	}

        	var oArg = {
        		coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        		,deptId : paramDeptId
        	};
        	this.gfn_openPopup('dspAcct', "CC::SSP_BO_MA_75.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 수신 계정 팝업 버튼 클릭
        this.div_rcv_btn_rcvAcctSingle_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_param.getColumn(0, "dspBzplcId");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000084"));	//조회를 먼저 실행하세요.
        		return;
        	}

        	var paramDeptId = this.ds_param.getColumn(0, "rcvDeptId");

        	if(this.gfn_isNull(paramDeptId)) {
        		alert(this.fn_getMessage("ERRC000009","수신부서"));	//&1 을(를) 입력하세요.
        		return;
        	}

        	var oArg = {
        		coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        		,deptId : paramDeptId
        	};
        	this.gfn_openPopup('rcvAcct', "CC::SSP_BO_MA_75.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	if(this.gfn_isNull(sRetValue)) return;

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "bizPop":	//사업장
        			this.ds_search.setColumn(0,"bzplcId", retObj.BZPLC_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"bzplcNm", retObj.BZPLC_NM.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"oprUnitId", null);
        			this.ds_search.setColumn(0,"oprUnitNm", null);
        			this.ds_search.setColumn(0,"deptId", null);
        			this.ds_search.setColumn(0,"deptNm", null);
        			break;
        		case "oprUnit": //운영단위
        			this.ds_search.setColumn(0,"oprUnitId", retObj.OPR_UNIT_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"oprUnitNm", retObj.OPR_UNIT_NM.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"deptId", null);
        			this.ds_search.setColumn(0,"deptNm", null);
        			break;
        		case "dept": //부서
        			this.ds_search.setColumn(0,"deptId", retObj.DEPT_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"deptNm", retObj.DEPT_NM.replace(/,\s*$/, ""));
        			break;
        		case "rcvDept": //수신 부서
        			this.ds_param.setColumn(0,"rcvDeptId", retObj.DEPT_ID.replace(/,\s*$/, ""));
        			this.ds_param.setColumn(0,"rcvDeptNm", retObj.DEPT_NM.replace(/,\s*$/, ""));
        			this.ds_param.setColumn(0,"rcvAcctId",null);	//수신계정id
        			this.ds_param.setColumn(0,"rcvAcctNm",null);	//수신계정명
        			//this.ds_param.setColumn(0,"rcvBgtYy","");	//수신년
        			//this.ds_param.setColumn(0,"rcvBgtAplyPerdCd","");	//수신월
        			this.ds_param.setColumn(0,"rcvPreAcctBal",null);	//수신전잔액
        			this.ds_param.setColumn(0,"rcvAfthAcctBal",null);	//수신후잔액
        			break;
        		case "dspAcct": //발신 계정
        			this.ds_param.setColumn(0,"dspAcctId", retObj.ACCT_ID.replace(/,\s*$/, ""));
        			this.ds_param.setColumn(0,"dspAcctNm", retObj.ACCT_NM.replace(/,\s*$/, ""));
        			//this.ds_param.setColumn(0,"dspBgtYy","");	//발신년
        			//this.ds_param.setColumn(0,"dspBgtAplyPerdCd","");	//발신월
        			this.ds_param.setColumn(0,"dspAcctBal",null);	//발신_계정잔액
        			this.ds_param.setColumn(0,"dspTrnsfAmt",null);	//발신_이체금액
        			this.ds_param.setColumn(0,"dspTrnsfRsn",null);	//발신_이체사유
        			this.ds_param.setColumn(0,"rcvAfthAcctBal",null);	//수신후잔액
        			break;
        		case "rcvAcct": //수신 계정
        			this.ds_param.setColumn(0,"rcvAcctId", retObj.ACCT_ID.replace(/,\s*$/, ""));
        			this.ds_param.setColumn(0,"rcvAcctNm", retObj.ACCT_NM.replace(/,\s*$/, ""));
        			//this.ds_param.setColumn(0,"rcvBgtYy","");	//수신년
        			//this.ds_param.setColumn(0,"rcvBgtAplyPerdCd","");	//수신월
        			this.ds_param.setColumn(0,"rcvPreAcctBal",null);	//수신전잔액
        			this.ds_param.setColumn(0,"rcvAfthAcctBal",null);	//수신후잔액
        			break;
        	}
        }

        //발신 조정 년도 선택전에
        this.div_dsp_cbo_dspBgtYy_canitemchange = function(obj,e)
        {
        	var dspYyyy = e.postvalue;
        	var dspPerd = this.div_dsp.form.cbo_dspBgtAplyPerdCd.value;
        	return this.canDspYyyyPerdChange(dspYyyy,dspPerd);
        };

        //발신 조정 월/분기 선택전에
        this.div_dsp_cbo_dspBgtAplyPerdCd_canitemchange = function(obj,e)
        {
        	var dspYyyy = this.div_dsp.form.cbo_dspBgtYy.value;
        	var dspPerd = e.postvalue;
        	return this.canDspYyyyPerdChange(dspYyyy,dspPerd);
        };

        //발신 년도나 월/분기를 선택하려고 할때
        this.canDspYyyyPerdChange = function(dspYyyy, dspPerd)
        {
        	if(this.gfn_isNull(dspYyyy)) {
        		alert(this.fn_getMessage("ERRC000005","발신년도"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}
        	if(this.gfn_isNull(dspPerd)) {
        		alert(this.fn_getMessage("ERRC000005","발신월/분기(from)"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}

        	var yyyyPerdSelect = Number("" + dspYyyy + dspPerd);

        	if(Number(dspPerd) >= 1 && Number(dspPerd) <= 12) {	//기간코드가 월일 경우
        		var yyyyMmToday = Number(this.gfn_left(this.today,6));

        		/*if(yyyyMmToday >= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRS000241", "현재"));  //조회기간은 &1을(를) 초과할 수 없습니다.
        			return false;
        		}*/
        	} else if(Number(dspPerd) >= 21 && Number(dspPerd) <= 24) {	//기간코드가 분기일 경우 21,22,23,24
        		var mm = this.gfn_right(this.gfn_left(this.today,6),2);
        		var qrt = "";
        		if(mm=="01"||mm=="02"||mm=="03") {
        			qrt = "21";
        		} else if(mm=="04"||mm=="05"||mm=="06") {
        			qrt = "22";
        		} else if(mm=="07"||mm=="08"||mm=="09") {
        			qrt = "23";
        		} else if(mm=="10"||mm=="11"||mm=="12") {
        			qrt = "24";
        		}

        		var yyyyQrtToday = Number(this.gfn_left(this.today,4) + qrt);
        		trace("yyyyQrtTodayyyyyQrtToday : " + yyyyQrtToday);
        		trace("yyyyPerdSelectyyyyPerdSelect : " + yyyyPerdSelect);
        		/*if(yyyyQrtToday >= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRS000241", "현재"));  //조회기간은 &1을(를) 초과할 수 없습니다.
        			return false;
        		}*/
        	}
        }

        //발신 조정 년도나 월/분기 선택됐을때
        this.div_dsp_cbo_dspBgtAplyPerdCd_onitemchanged = function(obj,e)
        {
        	this.ds_param.setColumn(0,"dspAcctBal",null);	//발신 잔액
        	this.ds_param.setColumn(0,"dspTrnsfAmt",null);	//발신 이체금액
        	this.ds_param.setColumn(0,"dspTrnsfRsn",null);	//발신 이체사유
        	this.ds_param.setColumn(0,"rcvAfthAcctBal",null); //수신후 잔액
        };

        //수신 조정 년도 선택시
        this.div_rcv_cbo_rcvBgtYy_canitemchange = function(obj,e)
        {
        	var rcvYyyy = e.postvalue;
        	var rcvPerd = this.div_rcv.form.cbo_rcvBgtAplyPerdCd.value;
        	return this.canRcvYyyyPerdChange(rcvYyyy,rcvPerd);
        };

        //수신 조정 월/분기 선택시
        this.div_rcv_cbo_rcvBgtAplyPerdCd_canitemchange = function(obj,e)
        {
        	var rcvYyyy = this.div_rcv.form.cbo_rcvBgtYy.value;
        	var rcvPerd = e.postvalue;
        	return this.canRcvYyyyPerdChange(rcvYyyy,rcvPerd);
        };

        //수신 년도나 월/분기를 선택하려고 할때
        this.canRcvYyyyPerdChange = function(rcvYyyy, rcvPerd)
        {
        	if(this.gfn_isNull(rcvYyyy)) {
        		alert(this.fn_getMessage("ERRC000005","수신년도"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}
        	if(this.gfn_isNull(rcvPerd)) {
        		alert(this.fn_getMessage("ERRC000005","수신월/분기(from)"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}

        	var yyyyPerdSelect = Number("" + rcvYyyy + rcvPerd);

        	if(Number(rcvPerd) >= 1 && Number(rcvPerd) <= 12) {	//기간코드가 월일 경우
        		var yyyyMmToday = Number(this.gfn_left(this.today,6));
        		if(yyyyMmToday <= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        			return false;
        		}
        	} else if(Number(rcvPerd) >= 21 && Number(rcvPerd) <= 24) {	//기간코드가 분기일 경우 21,22,23,24
        		var mm = this.gfn_right(this.gfn_left(this.today,6),2);
        		var qrt = "";
        		if(mm=="01"||mm=="02"||mm=="03") {
        			qrt = "21";
        		} else if(mm=="04"||mm=="05"||mm=="06") {
        			qrt = "22";
        		} else if(mm=="07"||mm=="08"||mm=="09") {
        			qrt = "23";
        		} else if(mm=="10"||mm=="11"||mm=="12") {
        			qrt = "24";
        		}

        		var yyyyQrtToday = Number(this.gfn_left(this.today,4) + qrt);
        		trace("yyyyQrtTodayyyyyQrtToday : " + yyyyQrtToday);
        		trace("yyyyPerdSelectyyyyPerdSelect : " + yyyyPerdSelect);
        		if(yyyyQrtToday <= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        			return false;
        		}
        	}
        }

        //수신 조정 년도나 월/분기 선택됐을때
        this.div_rcv_cbo_rcvBgtAplyPerdCd_onitemchanged = function(obj,e)
        {
        	this.ds_param.setColumn(0,"rcvPreAcctBal",null); //수신전 잔액
        	this.ds_param.setColumn(0,"rcvAfthAcctBal",null); //수신후 잔액
        };

        // 이체금액 입력전
        this.div_dsp_msk_dspTrnsfAmt_canchange = function(obj,e)
        {
        	var bal = this.div_dsp.form.msk_dspAcctBal.value;

        	if(this.gfn_isNull(bal)) {
        		alert(this.fn_getMessage("ERRC000018"));	//계정잔액이 조회되지 않았습니다.
        		return false;
        	} else if(Number(bal) <= 0) {
        		alert(this.fn_getMessage("ERRC000072"));	//이체할 수 있는 잔액이 없습니다.
        		return false;
        	} else if(this.gfn_isNull(e.postvalue)) {
        		alert(this.fn_getMessage("ERRC000009","이체금액"));	//&1 을(를) 입력하세요.
        		return false;
        	} else if (Number(e.postvalue) <=0) {
        		alert(this.fn_getMessage("ERRC000070"));	//이체할 금액을 1보다 크게 입력해 주세요.
        		return false;
        	} else if (bal < Number(e.postvalue) ) {
        		alert(this.fn_getMessage("ERRC000020"));	//계정잔액 이내에서 이체금액을 입력하여 주십시오.
        		return false;
        	} else {
        		trace("이체금액 ok!!!");
        		return true;
        	}
        };

        // 이체금액 입력후
        this.div_dsp_msk_dspTrnsfAmt_onchanged = function(obj,e)
        {
        	if(!this.gfn_isNull(e.postvalue) && Number(e.postvalue) > 0) {
        		var rcvPreAcctBal = Number(this.ds_param.getColumn(0,"rcvPreAcctBal"));

        		if(!this.gfn_isNull(rcvPreAcctBal) && Number(rcvPreAcctBal) > 0) {
        			this.ds_param.setColumn(0,"rcvAfthAcctBal",rcvPreAcctBal + Number(e.postvalue));
        		} else {
        			this.ds_param.setColumn(0,"rcvAfthAcctBal",null);
        		}
        	} else {
        		this.ds_param.setColumn(0,"rcvAfthAcctBal",null);
        	}
        };

        // 사업장id 입력시
        this.div_search_edt_bzplcId_canchange = function(obj,e)
        {
        	return this.fn_isBzplcId(this.gfn_trim(obj.value));
        };

        // 사업장id 입력완료시
        this.div_search_edt_bzplcId_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfn_trim(obj.value));
        	this.fn_getCodeName(obj,this.div_search.form.edt_bzplcNm,"BZPLC","fn_bzplcCodeNameCallback");
        };

        // 사업장id 입력완료후 콜백
        this.fn_bzplcCodeNameCallback = function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"bzplcId"))) {
        		this.ds_search.setColumn(0,"bzplcNm","");
        	}
        	this.ds_search.setColumn(0,"oprUnitId","");
        	this.ds_search.setColumn(0,"oprUnitNm","");
        	this.ds_search.setColumn(0,"deptId","");
        	this.ds_search.setColumn(0,"deptNm","");
        }

        // 운영단위id 입력시
        this.div_search_edt_oprUnitId_canchange = function(obj,e)
        {
        	return this.fn_isOprUnitId(this.gfn_trim(obj.value))
        };

        // 운영단위id 입력완료시
        this.div_search_edt_oprUnitId_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfn_trim(obj.value));
        	this.fn_getCodeName(obj,this.div_search.form.edt_oprUnitNm,"OPR_UNIT","fn_oprUnitCodeNameCallback");
        };

        // 운영단위id 입력완료후 콜백
        this.fn_oprUnitCodeNameCallback = function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"oprUnitId"))) {
        		this.ds_search.setColumn(0,"oprUnitNm","");
        	}
        	this.ds_search.setColumn(0,"deptId","");
        	this.ds_search.setColumn(0,"deptNm","");
        }

        // 부서id 입력시
        this.div_search_edt_deptId_canchange = function(obj,e)
        {
        	return this.fn_isDeptId(this.gfn_trim(obj.value));
        };

        // 부서id 입력완료시
        this.div_search_edt_deptId_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfn_trim(obj.value));
        	this.fn_getCodeName(obj,this.div_search.form.edt_deptNm,"DEPT","fn_deptCodeNameCallback");
        };

        // 부서id 입력완료후 콜백
        this.fn_deptCodeNameCallback = function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"deptId"))) {
        		this.ds_search.setColumn(0,"deptNm","");
        	}
        }
        this.ssp_bo_ma_62_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.ssp_bo_ma_62_onkeyup,this);
            this.div_search.form.btn_bzpSingle.addEventHandler("onclick",this.div_search_btn_bzpSingle_onclick,this);
            this.div_search.form.btn_oprSingle.addEventHandler("onclick",this.div_search_btn_oprSingle_onclick,this);
            this.div_search.form.edt_bzplcId.addEventHandler("onchanged",this.div_search_edt_bzplcId_onchanged,this);
            this.div_search.form.edt_bzplcId.addEventHandler("canchange",this.div_search_edt_bzplcId_canchange,this);
            this.div_search.form.edt_oprUnitId.addEventHandler("onchanged",this.div_search_edt_oprUnitId_onchanged,this);
            this.div_search.form.edt_oprUnitId.addEventHandler("canchange",this.div_search_edt_oprUnitId_canchange,this);
            this.div_search.form.edt_deptId.addEventHandler("onchanged",this.div_search_edt_deptId_onchanged,this);
            this.div_search.form.edt_deptId.addEventHandler("canchange",this.div_search_edt_deptId_canchange,this);
            this.div_search.form.btn_deptSingle.addEventHandler("onclick",this.div_search_btn_deptSingle_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_searchReset.addEventHandler("onclick",this.btn_searchReset_onclick,this);
            this.div_dsp.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_dsp.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_dsp.form.btn_dspBalSearch.addEventHandler("onclick",this.div_dsp_btn_dspBalSearch_onclick,this);
            this.div_dsp.form.cbo_dspBgtYy.addEventHandler("onitemchanged",this.div_dsp_cbo_dspBgtAplyPerdCd_onitemchanged,this);
            this.div_dsp.form.cbo_dspBgtYy.addEventHandler("canitemchange",this.div_dsp_cbo_dspBgtYy_canitemchange,this);
            this.div_dsp.form.cbo_dspBgtAplyPerdCd.addEventHandler("canitemchange",this.div_dsp_cbo_dspBgtAplyPerdCd_canitemchange,this);
            this.div_dsp.form.cbo_dspBgtAplyPerdCd.addEventHandler("onitemchanged",this.div_dsp_cbo_dspBgtAplyPerdCd_onitemchanged,this);
            this.div_dsp.form.btn_dspAcctSingle.addEventHandler("onclick",this.div_dsp_btn_dspAcctSingle_onclick,this);
            this.div_dsp.form.sta_dspBzplcId.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspBzplcNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspDeptId.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspDeptNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspOprUnitId.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspOprUnitNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspBzplc00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspBzplc00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.sta_dspBzplc00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_dsp.form.msk_dspTrnsfAmt.addEventHandler("canchange",this.div_dsp_msk_dspTrnsfAmt_canchange,this);
            this.div_dsp.form.msk_dspTrnsfAmt.addEventHandler("onchanged",this.div_dsp_msk_dspTrnsfAmt_onchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_saveReset.addEventHandler("onclick",this.btn_saveReset_onclick,this);
            this.div_rcv.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_rcv.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_rcv.form.btn_rcvBalSearch.addEventHandler("onclick",this.div_rcv_btn_rcvBalSearch_onclick,this);
            this.div_rcv.form.cbo_rcvBgtYy.addEventHandler("onitemchanged",this.div_rcv_cbo_rcvBgtAplyPerdCd_onitemchanged,this);
            this.div_rcv.form.cbo_rcvBgtYy.addEventHandler("canitemchange",this.div_rcv_cbo_rcvBgtYy_canitemchange,this);
            this.div_rcv.form.cbo_rcvBgtAplyPerdCd.addEventHandler("canitemchange",this.div_rcv_cbo_rcvBgtAplyPerdCd_canitemchange,this);
            this.div_rcv.form.cbo_rcvBgtAplyPerdCd.addEventHandler("onitemchanged",this.div_rcv_cbo_rcvBgtAplyPerdCd_onitemchanged,this);
            this.div_rcv.form.btn_rcvAcctSingle.addEventHandler("onclick",this.div_rcv_btn_rcvAcctSingle_onclick,this);
            this.div_rcv.form.btn_rcvDeptSingle.addEventHandler("onclick",this.div_rcv_btn_rcvDeptSingle_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_62.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
