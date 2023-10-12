(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvplcMngList");
            this.set_titletext("계정설정");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DISPLAY_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_treeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UNDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_display", this);
            obj._setContents("<ColumnInfo><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISPLAY_TYPE\">1</Col><Col id=\"DISPLAY_TYPE_NM\">계정/부서</Col></Row><Row><Col id=\"DISPLAY_TYPE_NM\">부서/계정</Col><Col id=\"DISPLAY_TYPE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subGrdList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SRT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("displayCount_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"DISPLAY_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_COUNT_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISPLAY_COUNT\">20</Col><Col id=\"DISPLAY_COUNT_TEXT\">20개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT\">50</Col><Col id=\"DISPLAY_COUNT_TEXT\">50개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT_TEXT\">100개씩</Col><Col id=\"DISPLAY_COUNT\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"500\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_OVER_AGD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_TRNSF_AGD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ACCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info","23","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("title01","0",null,"130","20",null,"121",null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("sta_WF_title01");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","80","34",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","389","34","90","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","778","34","90","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_bzplc","334","38","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchBzplcNm","200","38","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchOprUnitNm","589","38","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMemo","746","39","30","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03_00","80","64",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","389","64","90","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("searchDisplayDiv","95","68","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_innerdataset("ds_display");
            obj.set_codecolumn("DISPLAY_TYPE");
            obj.set_datacolumn("DISPLAY_TYPE_NM");
            obj.set_text("계정/부서");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchDeptNm","979","38","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_deptMemo","1135","39","30","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchAcctNm","590","68","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_acctMemo","748","68","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static03_00:10","60","28","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"106","70","28","btn_search:5",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_oprUnit","724","38","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_dept","1114","38","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_acct","724","68","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchBzplcId","95","38","100","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchAcctId","485","68","100","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchOprUnitId","485","38","100","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("searchDeptId","875","38","100","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","34","90","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","64","90","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"106","100","28","btn_reset:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("28");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Div("Div01_01","19","150","327",null,null,"2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("tree");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_acctTree","7","27","295","596",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_treeList");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selectscrollmode("default");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_selectchangetype("down");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"294\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:TREE_TEXT\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LVL\" expr=\"UNDER_CNT  == &apos;0&apos; ? TREE_TEXT : TREE_TEXT + &quot; (&quot; + UNDER_CNT +&quot;)&quot;\" cssclass=\"expr:String(LVL).valueOf()==&quot;0&quot;?&quot;error&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("title02","7","0","130",null,null,"grd_acctTree:10",null,null,null,null,this.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_title01");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div02_01","339","138",null,"212","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("dtl");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","161","49",null,"32","20",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static02","0","49","162","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("0");
            obj.set_text("계정유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static22_00","496","49","130","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("2");
            obj.set_text("계정ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("title03","0","22","130",null,null,"Static02:10",null,null,null,null,this.Div02_01.form);
            obj.set_taborder("3");
            obj.set_text("계정 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","80","164","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("4");
            obj.set_text("계정명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static03_00","161","80",null,"32","20",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","496","80","130","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("6");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","111","162","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("7");
            obj.set_text("계정레벨");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","161","111",null,"32","20",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","142","162","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("9");
            obj.set_text("계정 사용 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","161","142",null,"32","20",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("sta_acctTpNm","169","54","234","23",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("11");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","496","111","130","32",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("12");
            obj.set_text("상위계정명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("sta_acctLvl","169","116","234","23",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("13");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("sta_useYn","169","147","234","23",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("14");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("sta_hrnkAcctNm","633","117","234","23",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("16");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Edit("sta_acctNm","168","84","284","24",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Edit("sta_acctCd","631","84","191","24",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Edit("edt_accttId","631","53","191","24",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Div("Div02_02","339","138",null,"212","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("dtl");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","161","49",null,"32","20",null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static02","0","49","162","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("0");
            obj.set_text("부서명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("sta_deptId","496","49","130","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("2");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("title03","0","22","130",null,null,"Static02:10",null,null,null,null,this.Div02_02.form);
            obj.set_taborder("3");
            obj.set_text("부서 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","80","164","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("4");
            obj.set_text("상위부서명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static03_00","161","80",null,"32","20",null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","496","80","130","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("6");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","111","162","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("7");
            obj.set_text("예산이체허용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","161","111",null,"32","20",null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","142","162","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","161","142",null,"32","20",null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("ACCT_NM","169","85","234","23",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("11");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","496","111","130","32",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("12");
            obj.set_text("예산초과허용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("ACCT_LVL","169","116","234","23",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("13");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("USE_YN","169","147","676","23",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("14");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("ACCT_CD","633","85","234","23",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("15");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Static("ACCT_CD00","633","115","234","23",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("16");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","Static02:4","53","284","24",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","sta_deptId:4","53","191","24",null,null,null,null,null,null,this.Div02_02.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.Div02_02.addChild(obj.name, obj);

            obj = new Div("Div03_01","329","333",null,null,"0","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("grid");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_deptList","13","50",null,"390","20",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selectscrollmode("default");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_selectchangetype("down");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_subGrdList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위ID\"/><Cell col=\"2\" text=\"운영단위명\"/><Cell col=\"3\" text=\"부서ID\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"3\" text=\"bind:DEPT_ID\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CCO_DEPT_CD\"/></Band></Format></Formats>");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Grid("grd_acctList","13","50",null,"390","20",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selectscrollmode("default");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_selectchangetype("down");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_subGrdList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정유형\"/><Cell col=\"2\" text=\"계정ID\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" text=\"계정코드\"/><Cell col=\"5\" text=\"상위계정명\"/><Cell col=\"6\" text=\"최상위계정명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ACCT_TP_NM\"/><Cell col=\"2\" text=\"bind:ACCT_ID\"/><Cell col=\"3\" text=\"bind:ACCT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ACCT_CD\"/><Cell col=\"5\" text=\"bind:HRNK_ACCT_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOP_HRNK_ACCT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"16","110","24","20",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DISPLAY_COUNT");
            obj.set_datacolumn("DISPLAY_COUNT_TEXT");
            obj.set_innerdataset("displayCount_ds");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("btn_addPopup",null,"14","60","28","cbo_page:5",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"14","95","28","btn_addPopup:5",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("2");
            obj.set_text("선택 삭제");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("div_paging","14","447",null,"38","20",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("title04","12","22","130",null,null,"grd_deptList:10",null,null,null,null,this.Div03_01.form);
            obj.set_taborder("5");
            obj.set_text("부서 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"14","110","28","btn_delete:5",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","88","20","121","25",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("8");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"140","320","46","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"14","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_batchUpdate",null,"14","95","28","btn_save:5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("일괄등록/수정");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div_top_info.form.searchBzplcNm","value","ds_search","SEARCH_BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div_top_info.form.searchOprUnitNm","value","ds_search","SEARCH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div_top_info.form.searchDeptNm","value","ds_search","SEARCH_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div_top_info.form.searchAcctNm","value","ds_search","SEARCH_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div02_01.form.sta_acctTpNm","text","ds_dtlInfo","ACCT_TP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div02_01.form.sta_acctLvl","text","ds_dtlInfo","ACCT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div02_01.form.sta_hrnkAcctNm","text","ds_dtlInfo","HRNK_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div02_01.form.sta_useYn","text","ds_dtlInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div02_01.form.sta_acctNm","value","ds_dtlInfo","ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div02_01.form.sta_acctCd","value","ds_dtlInfo","ACCT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div_top_info.form.searchBzplcId","value","ds_search","SEARCH_BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div_top_info.form.searchAcctId","value","ds_search","SEARCH_ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div_top_info.form.searchOprUnitId","value","ds_search","SEARCH_OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div_top_info.form.searchDeptId","value","ds_search","SEARCH_DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div_top_info.form.searchDisplayDiv","value","ds_search","SEARCH_DISPLAY_DIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div02_02.form.ACCT_CD","text","ds_dtlInfo","CCO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div02_02.form.ACCT_NM","text","ds_dtlInfo","HRNK_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div02_02.form.ACCT_LVL","text","ds_dtlInfo","BGT_TRNSF_AGD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div02_02.form.ACCT_CD00","text","ds_dtlInfo","BGT_OVER_AGD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div02_02.form.USE_YN","text","ds_dtlInfo","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div02_02.form.edt_deptNm","value","ds_dtlInfo","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div02_02.form.edt_deptId","value","ds_dtlInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div02_01.form.edt_accttId","value","ds_dtlInfo","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_74.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_74.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_74.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_74.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 계정설정
          CREATION DATES : 2022.02.23
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_sessionData = this.getSession(); //session object
        this.fv_totalCount = 0;
        this.preSelectRowPosition = 0;
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
        //트리 조회
        this.fn_treeSearch= function(page)
        {
        	var sSvcId = "selectTreeList";
        	var sUrl   = "/cc/acct/select-tree-list.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_treeList=ds_treeList";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //계정,부서정보와 매핑목록 저장
        this.fn_save = function() {

        	var sSvcId = "saveAcctDeptMapp";
        	var sUrl = "/cc/acct/save-acct-dept-mapp.do";
        	var inDs = "ds_dtlInfo=ds_dtlInfo ds_subGrdList=ds_subGrdList:U"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }
        //계정, 부서 상세 정보 조회
        this.fn_selectAcctDeptDtlInfo = function()
        {
        	var sSvcId = "selectAcctDeptDtlInfo";
        	var sUrl   = "/cc/acct/select-acct-dept-dtl-info.do";
        	var inDs   = "ds_dtlParam=ds_dtlParam";
        	var outDs  = "ds_dtlInfo=ds_dtlInfo";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //부서 목록 정보 조회
        this.fn_selectAcctDeptMappListById = function()
        {
        	var sSvcId = "selectAcctDeptMappListById";
        	var sUrl   = "/cc/acct/select-acct-dept-mapp-list-by-id.do";
        	var inDs   = "ds_dtlParam=ds_dtlParam";
        	var outDs  = "ds_subGrdList=ds_subGrdList";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 대용량다운로드
        this.fn_allExcelDownload = function(){
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/cc/acct/select-all-excel-download.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //트랜잭션 콜백함수
        this.fn_callBack = function(objID, rtnValue)
        {

        	if(objID == 'selectTreeList'){
        		this.ds_dtlInfo.clearData();
        		this.ds_subGrdList.clearData();
        	}
        	else if(objID == 'selectAcctDeptMappListById'){
        		if(this.ds_subGrdList.getRowCount() > 0) {
        			this.fv_totalCount = this.ds_subGrdList.getColumn(0,"TOT_CUNT");
        			//this.div_paging.form.cfn_createPage(this.div_paging,this.fv_totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			this.Div03_01.form.div_paging.form.cfn_createPage(this.Div03_01.form.div_paging, this.fv_totalCount, this.Div03_01.form.cbo_page.value, "fn_pageCallback");
        		}
        		else {
        			this.Div03_01.form.sta_totCount.set_text("(총 0건 1/1)");
        		}
        	}
        	else if(objID == 'saveAcctDeptMapp'){
        		alert(this.fn_getMessage("ERRC000081"));
        		this.fn_treeSearch();
        	}else if(objID == "allExcelDownload"){
        		if(errorCode == -100){
        			alert(errorMsg);
        		}
        	}
        }
        //팝업 콜백함수
        this.fn_popupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);

        	var sIdList = "";
        	var sNmList = "";

        	if(objID == 'btn_bzplc'){
        		this.ds_search.setColumn(0, "SEARCH_BZPLC_NM", resParam.BZPLC_NM);
        		this.ds_search.setColumn(0, "SEARCH_BZPLC_ID", resParam.BZPLC_ID);
        	}
        	if(objID == 'btn_oprUnit'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.OPR_UNIT_ID +",";
        			sNmList += rtnData.OPR_UNIT_NM +",";
        		}
        		this.ds_search.setColumn(0, "SEARCH_OPR_UNIT_NM", sNmList.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0, "SEARCH_OPR_UNIT_ID", sIdList.replace(/,\s*$/, ""));
        	}
        	if(objID == 'btn_dept'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.DEPT_ID +",";
        			sNmList += rtnData.DEPT_NM +",";
        		}
        		this.ds_search.setColumn(0, "SEARCH_DEPT_NM", sNmList.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0, "SEARCH_DEPT_ID", sIdList.replace(/,\s*$/, ""));
        	}
        	if(objID == 'btn_acct'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.ACCT_ID +",";
        			sNmList += rtnData.ACCT_NM +",";
        		}
        		this.ds_search.setColumn(0, "SEARCH_ACCT_NM", sNmList.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0, "SEARCH_ACCT_ID", sIdList.replace(/,\s*$/, ""));
        	}

        }
        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.Div03_01.form.div_paging;

        	if(sFlag){
        		this.ds_dtlParam.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_dtlParam.setColumn(0, "ROW_COUNT", this.Div03_01.form.cbo_page.value);
        		this.fn_selectAcctDeptMappListById();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.Div03_01.form.sta_totCount.set_text(sTotText);

        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 필수표시 설정
        	this.Div_top_info.form.Static02.uEssentiel = "true";

        	//페이징 초기 설정
        	this.Div03_01.form.div_paging.uPage = 1;
        	this.Div03_01.form.div_paging.uPageNum = 0;
        	this.Div03_01.form.div_paging.uPageRowCnt = 10;
        	this.Div03_01.form.div_paging.uPageCnt = 0;
        	this.Div03_01.form.div_paging.uTotCount = 0;

        	//구분 콤보 설정
        	this.Div_top_info.form.searchDisplayDiv.set_index(0);
        	this.displayType();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //조회조건 구분 기준으로 보여줄 화면 처리
        this.displayType = function()
        {
        	this.Div03_01.form.sta_totCount.set_text("(총 0건 1/1)");

        	this.ds_treeList.clearData();
        	this.ds_dtlInfo.clearData();
        	this.ds_subGrdList.clearData();

        	this.ds_search.setColumn(0,"SEARCH_OPR_UNIT_ID","");
        	this.ds_search.setColumn(0,"SEARCH_OPR_UNIT_NM","");
        	this.ds_search.setColumn(0,"SEARCH_DEPT_ID","");
        	this.ds_search.setColumn(0,"SEARCH_DEPT_NM","");
        	this.ds_search.setColumn(0,"SEARCH_ACCT_ID","");
        	this.ds_search.setColumn(0,"SEARCH_ACCT_NM","");

        	//1 : 계정/부서, 2 : 부서/계정
        	var displayDiv = this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV");
        	if(displayDiv == '1')
        	{
        		this.Div_top_info.form.searchOprUnitId.set_enable(false);
        		this.Div_top_info.form.searchOprUnitNm.set_enable(false);
        		this.Div_top_info.form.btn_oprUnit.set_enable(false);
        		this.Div_top_info.form.btn_oprUnitMemo.set_enable(false);
        		this.Div_top_info.form.searchDeptId.set_enable(false);
        		this.Div_top_info.form.searchDeptNm.set_enable(false);
        		this.Div_top_info.form.btn_dept.set_enable(false);
        		this.Div_top_info.form.btn_deptMemo.set_enable(false);
        		this.Div_top_info.form.searchAcctId.set_enable(true);
        		this.Div_top_info.form.searchAcctNm.set_enable(true);
        		this.Div_top_info.form.btn_acct.set_enable(true);
        		this.Div_top_info.form.btn_acctMemo.set_enable(true);

        		this.Div02_01.set_visible(true);
        		this.Div02_02.set_visible(false);
        		this.Div03_01.form.title04.set_text("부서 목록");
        		this.Div03_01.form.grd_deptList.set_visible(true);
        		this.Div03_01.form.grd_acctList.set_visible(false);
        	}
        	if(displayDiv == '2'){
        		this.Div_top_info.form.searchOprUnitId.set_enable(true);
        		this.Div_top_info.form.searchOprUnitNm.set_enable(true);
        		this.Div_top_info.form.btn_oprUnit.set_enable(true);
        		this.Div_top_info.form.btn_oprUnitMemo.set_enable(true);
        		this.Div_top_info.form.searchDeptId.set_enable(true);
        		this.Div_top_info.form.searchDeptNm.set_enable(true);
        		this.Div_top_info.form.btn_dept.set_enable(true);
        		this.Div_top_info.form.btn_deptMemo.set_enable(true);
        		this.Div_top_info.form.searchAcctId.set_enable(false);
        		this.Div_top_info.form.searchAcctNm.set_enable(false);
        		this.Div_top_info.form.btn_acct.set_enable(false);
        		this.Div_top_info.form.btn_acctMemo.set_enable(false);

        		this.Div02_01.set_visible(false);
        		this.Div02_02.set_visible(true);
        		this.Div03_01.form.title04.set_text("계정 목록");
        		this.Div03_01.form.grd_deptList.set_visible(false);
        		this.Div03_01.form.grd_acctList.set_visible(true);
        	}

        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	if(this.gfn_isNull(this.ds_search.getColumn(0, "SEARCH_BZPLC_ID"))){
        		alert(this.fn_getMessage("ERRC000005", "사업장"));
        		return false;
        	}

        	this.ds_search.setColumn(0,"SEARCH_CO_CD", this.fv_sessionData.coCd);
        	this.fn_treeSearch();
        };
        //조회팝
        this.searchPopupBtn_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_search.getColumn(0,"SEARCH_BZPLC_ID")
        			,oprUnitId : this.ds_search.getColumn(0,"SEARCH_OPR_UNIT_ID")
        		};
        	var options = {};

        	//사업장
        	if(e.fromobject.id == 'btn_bzplc'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params,  "fn_popupCallback", options); }
        	//운영단위
        	if(e.fromobject.id == 'btn_oprUnit'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", params,  "fn_popupCallback", options); }
        	//부서조회
        	if(e.fromobject.id == 'btn_dept'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", params,  "fn_popupCallback", options); }
        	//계정조회
        	if(e.fromobject.id == 'btn_acct'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_31.xfdl", params,  "fn_popupCallback", options); }

        };
        //트리메뉴 클릭
        this.grd_acctTreeOnCellClick = function(obj,e)
        {
        	this.ds_dtlParam.setColumn(0,"CO_CD", this.ds_treeList.getColumn(this.ds_treeList.rowposition, "CO_CD"));
        	this.ds_dtlParam.setColumn(0,"BZPLC_ID", this.ds_treeList.getColumn(this.ds_treeList.rowposition, "BZPLC_ID"));


        	//페이징 변수 설정
        	var oPaging = this.Div03_01.form.div_paging;
        	oPaging.uPageNum = 0;
        	this.ds_dtlParam.setColumn(0,"START_NUM",oPaging.uPageNum);
        	//this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	this.ds_dtlParam.setColumn(0,"ROW_COUNT",this.Div03_01.form.cbo_page.value);

        	if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "1") { //계정/부서
        		this.ds_dtlParam.setColumn(0,"OPR_UNIT_ID", this.ds_search.getColumn(0, "SEARCH_OPR_UNIT_ID"));
        		this.ds_dtlParam.setColumn(0,"ACCT_ID", this.ds_treeList.getColumn(this.ds_treeList.rowposition, "ACCT_ID"));
        		this.ds_dtlParam.setColumn(0,"DEPT_ID", "");

        	}
        	else if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "2") { //부서/계정
        		this.ds_dtlParam.setColumn(0,"OPR_UNIT_ID", this.ds_treeList.getColumn(this.ds_treeList.rowposition, "OPR_UNIT_ID"));
        		this.ds_dtlParam.setColumn(0,"ACCT_ID", "");
        		this.ds_dtlParam.setColumn(0,"DEPT_ID", this.ds_treeList.getColumn(this.ds_treeList.rowposition, "DEPT_ID"));
        	}

        	this.fn_selectAcctDeptDtlInfo(); //계정,부서 상세 조회
        	this.fn_selectAcctDeptMappListById(); //목록 조회


        };
        //부서추가팝업
        this.btn_addPopup_onclick = function(obj,e)
        {
        	if(this.ds_dtlInfo.getRowCount() < 1) {
        		alert(this.fn_getMessage("ERRC000085")); //조회후 목록의 계정이나 부서를 클릭하세요.
        		return;
        	}

        	if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "1") { //계정/부서
        		var params = {
        				coCd : this.fv_sessionData.coCd
        				,bzplcId : this.ds_dtlInfo.getColumn(0, "BZPLC_ID")
        			};
        		var options = {};
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", params,  function(objID, rtnValue) { //부서팝업 호출
        			var resParam = JSON.parse(rtnValue);

        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);

        				if(this.ds_subGrdList.findRow("DEPT_ID", rtnData.DEPT_ID) < 0) {
        					var nRow = this.ds_subGrdList.insertRow(0);
        					this.ds_subGrdList.setColumn(nRow, "CO_CD"   , rtnData.CO_CD);		//회사코드
        					this.ds_subGrdList.setColumn(nRow, "BZPLC_ID", rtnData.BZPLC_ID);				//사업장 아이디
        					this.ds_subGrdList.setColumn(nRow, "OPR_UNIT_ID", rtnData.OPR_UNIT_ID);				//운영단위 아이디
        					this.ds_subGrdList.setColumn(nRow, "OPR_UNIT_NM", rtnData.OPR_UNIT_NM);				//운영단위명
        					this.ds_subGrdList.setColumn(nRow, "DEPT_ID", rtnData.DEPT_ID);				//부서ID
        					this.ds_subGrdList.setColumn(nRow, "DEPT_NM", rtnData.DEPT_NM);				//부서명
        					this.ds_subGrdList.setColumn(nRow, "ACCT_ID" , this.ds_dtlInfo.getColumn(0, "ACCT_ID") );
        					this.ds_subGrdList.setColumn(nRow, "DEPT_SRT_SEQ", rtnData.DEPT_SRT_SEQ);	//부서레벨
        					this.ds_subGrdList.setColumn(nRow, "CCO_DEPT_CD", rtnData.CCO_DEPT_CD);		//부서코드
        				}
        				else {
        					alert(this.fn_getMessage("ERRC000003", rtnData.DEPT_NM)); //는 이미 등록된 부서입니다.
        				}
        			}
        		}, options);
        	}
        	else if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "2") { //부서/계정
        		var params = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_dtlInfo.getColumn(0, "BZPLC_ID")
        		};
        		var options = {};
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_76.xfdl", params,  function(objID, rtnValue) { //계정팝업 호출
        			var resParam = JSON.parse(rtnValue);

        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);

        				if(this.ds_subGrdList.findRow("ACCT_ID", rtnData.ACCT_ID) < 0) {
        					var nRow = this.ds_subGrdList.insertRow(0);

        					//계정유형명 설정
        					var acctTpNm = "";
        					if(rtnData.ACCT_TP_CD == "1") acctTpNm = "일반";
        					else if(rtnData.ACCT_TP_CD == "2") acctTpNm = "공통";

        					this.ds_subGrdList.setColumn(nRow, "CO_CD"   , rtnData.CO_CD);	//회사코드
        					this.ds_subGrdList.setColumn(nRow, "BZPLC_ID", rtnData.BZPLC_ID);
        					this.ds_subGrdList.setColumn(nRow, "DEPT_ID", this.ds_dtlInfo.getColumn(0, "DEPT_ID"));				//부서ID
        					this.ds_subGrdList.setColumn(nRow, "ACCT_ID" , rtnData.ACCT_ID );
        					this.ds_subGrdList.setColumn(nRow, "ACCT_NM", rtnData.ACCT_NM);				//계정명
        					this.ds_subGrdList.setColumn(nRow, "ACCT_LVL", rtnData.ACCT_LVL);	//계정레벨
        					this.ds_subGrdList.setColumn(nRow, "ACCT_CD", rtnData.ACCT_CD);		//계정코드
        					this.ds_subGrdList.setColumn(nRow, "HRNK_ACCT_ID", rtnData.HRNK_ACCT_ID);	//상위계정ID
        					this.ds_subGrdList.setColumn(nRow, "HRNK_ACCT_NM", rtnData.HRNK_ACCT_NM);	//상위계정명
        					this.ds_subGrdList.setColumn(nRow, "TOP_HRNK_ACCT_NM", rtnData.TOP_HRNK_ACCT_NM);		//최상위계정명
        					this.ds_subGrdList.setColumn(nRow, "ACCT_TP_NM", acctTpNm);		//계정유형
        				}
        				else {
        					alert(this.fn_getMessage("ERRC000002", rtnData.ACCT_NM)); //은(는) 이미 등록된 계정입니다.
        				}
        			}
        		}, options);
        	}

        };
        //선택삭제버튼
        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.ds_subGrdList.getCaseCount("CHK==1") == 0) {
        		alert(this.fn_getMessage("ERRC000050", "행"));
        		return;
        	}

        	this.ds_subGrdList.deleteMultiRows(this.ds_subGrdList.extractRows("CHK == 1"));
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	for(i=0; i<this.ds_search.colcount; i++) {
        		this.ds_search.setColumn(0, i, "");
        	}

        	//구분 콤보 설정
        	this.Div_top_info.form.searchDisplayDiv.set_index(0);
        	this.displayType();
        };

        this.fn_searchDisplayDiv_onitemchanged = function(obj,e)
        {
        	//구분 변경시
        	this.displayType();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "1") { //계정/부서
        		if(this.gfn_isNull(this.ds_dtlInfo.getColumn(0,"ACCT_NM"))) {
        			alert(this.fn_getMessage("ERRC000009", "계정명"));
        			return;
        		}
        	}
        	else if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "2") { //부서/계정
        		if(!this.gfn_dsIsUpdated(this.ds_subGrdList)) {
        			alert(this.fn_getMessage("ERRC000034"));
        			return;
        		}
        	}

        	if(!confirm(this.fn_getMessage("ERRC000080"))) return;

        	this.fn_save();
        };


        this.cbo_page_onitemchanged = function(obj,e)
        {
        	//페이징 변수 설정
        	var oPaging = this.Div03_01.form.div_paging;
        	oPaging.uPageNum = 0;
        	this.ds_dtlParam.setColumn(0,"START_NUM",oPaging.uPageNum);
        	//this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	this.ds_dtlParam.setColumn(0,"ROW_COUNT",this.Div03_01.form.cbo_page.value);

        	this.fn_selectAcctDeptMappListById();
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "1") { //계정/부서
        		this.ofn_exportExcel({form:this, grid:this.Div03_01.form.grd_deptList, fileName:"계정설정_부서목록"});
        	}
        	else if(this.ds_search.getColumn(0,"SEARCH_DISPLAY_DIV") == "2") { //부서/계정
        		this.ofn_exportExcel({form:this, grid:this.Div03_01.form.grd_acctList, fileName:"계정설정_계정목록"});
        	}
        };


        this.btn_oprUnitMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.Div_top_info.form.searchOprUnitId };

        	var options = {title : "운영단위"};
        	this.gfn_openPopup("oprUnitMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"SEARCH_OPR_UNIT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"SEARCH_OPR_UNIT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);

        };

        this.btn_deptMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.Div_top_info.form.searchDeptId };

        	var options = {title : "부서"};
        	this.gfn_openPopup("oprUnitMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"SEARCH_DEPT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"SEARCH_DEPT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);

        };

        this.btn_acctMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.Div_top_info.form.searchAcctId };

        	var options = {title : "계정"};
        	this.gfn_openPopup("oprUnitMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"SEARCH_ACCT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"SEARCH_ACCT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);

        };

        this.btn_batchUpdate_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_XL_CC_17"};
        	var options = {};
        	options.title = "계정부서매핑 일괄등록";
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, function() {

        	}, options);
        };

        this.Div_top_info_btn_allExcel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		return;
        	}

        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	// 대용량다운로드
        	this.fn_allExcelDownload();
        };

        this.dlvplcMngList_onkeyup = function(obj,e)
        {
        	if(e.ctrlkey && e.keycode==13) {
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcMngList_onkeyup,this);
            this.Div_top_info.form.title01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div_top_info.form.btn_bzplc.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.btn_oprUnitMemo.addEventHandler("onclick",this.btn_oprUnitMemo_onclick,this);
            this.Div_top_info.form.searchDisplayDiv.addEventHandler("onitemchanged",this.fn_searchDisplayDiv_onitemchanged,this);
            this.Div_top_info.form.btn_deptMemo.addEventHandler("onclick",this.btn_deptMemo_onclick,this);
            this.Div_top_info.form.btn_acctMemo.addEventHandler("onclick",this.btn_acctMemo_onclick,this);
            this.Div_top_info.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div_top_info.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div_top_info.form.btn_oprUnit.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.btn_dept.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.btn_acct.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.btn_allExcel.addEventHandler("onclick",this.Div_top_info_btn_allExcel_onclick,this);
            this.Div01_01.form.grd_acctTree.addEventHandler("oncellclick",this.grd_acctTreeOnCellClick,this);
            this.Div01_01.form.title02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_01.form.title03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_01.form.sta_acctTpNm.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_01.form.sta_acctLvl.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_01.form.sta_useYn.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_01.form.sta_hrnkAcctNm.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_02.form.title03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02_02.form.Static02_00.addEventHandler("onclick",this.Div02_02_Static02_00_onclick,this);
            this.Div02_02.form.Static03_00_00.addEventHandler("onclick",this.Div02_02_Static03_00_00_onclick,this);
            this.Div03_01.form.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchanged,this);
            this.Div03_01.form.btn_addPopup.addEventHandler("onclick",this.btn_addPopup_onclick,this);
            this.Div03_01.form.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.Div03_01.form.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div00.form.btn_batchUpdate.addEventHandler("onclick",this.btn_batchUpdate_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_74.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
