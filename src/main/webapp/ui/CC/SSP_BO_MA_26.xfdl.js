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
            this.set_titletext("계정관리 목록");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"eACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD_MAX_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("useYn_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctLvl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCT_LVL\"/><Col id=\"ACCT_LVL_NM\">선택하세요.</Col></Row><Row><Col id=\"ACCT_LVL\">1</Col><Col id=\"ACCT_LVL_NM\">1</Col></Row><Row><Col id=\"ACCT_LVL\">2</Col><Col id=\"ACCT_LVL_NM\">2</Col></Row><Row><Col id=\"ACCT_LVL\">3</Col><Col id=\"ACCT_LVL_NM\">3</Col></Row><Row><Col id=\"ACCT_LVL\">4</Col><Col id=\"ACCT_LVL_NM\">4</Col></Row><Row><Col id=\"ACCT_LVL\">5</Col><Col id=\"ACCT_LVL_NM\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("useYn_ds2", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">ALL</Col><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acct", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"UNDER_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_beforeIdx", this);
            obj._setContents("<ColumnInfo><Column id=\"BEFORE_IDX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD_MAX_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_USE_HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_USE_HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctListEmpty", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD_MAX_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info","14","-38",null,"128","3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","54","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("사업장 *");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","129","54",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","54","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","890","54","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("구분");
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

            obj = new Button("searchPopupBtn01","403","58","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("SEARCH_BZPLC_ID","135","58","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn02","835","58","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("SEARCH_ACCT_NM","567","58","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn02","858","59","30","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"92","77","24","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"92","90","24","btn_search:5",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("SEARCH_USE_YN","1026","58","264","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_innerdataset("useYn_ds2");
            obj.set_codecolumn("USE_YN");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("SEARCH_BZPLC_NM","269","58","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("SEARCH_ACCT_ID","700","58","130","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01",null,"90","100","28","197",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            obj.set_textPadding("0px");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Div("Div00","7","80",null,"675","3",null,null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_acctTree","7","66","295","609",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_acctList");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selectscrollmode("default");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_selectchangetype("down");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"296\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\" text=\"bind:ACCT_NM\" tooltiptext=\"bind:ACCT_NM\" expr=\"UNDER_CNT  == &apos;0&apos; ? ACCT_NM : ACCT_NM + &quot; (&quot; + UNDER_CNT +&quot;)&quot;\" cssclass=\"expr:String(LVL).valueOf()==&quot;0&quot;?&quot;error&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("dlvplcAddBtn",null,"31","95","28","106",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록/수정");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"31","81","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("계정생성");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","322","66","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("계정 유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","483","66",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00","825","66","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("계정 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","322","97","164","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("계정명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","483","97",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","825","97","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("계정 코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ACCT_NM","491","101","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ACCT_CD","965","101","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","322","128","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("계정 레벨");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","483","128",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","825","128","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("상위 계정명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("HRNK_ACCT_ID","965","132","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","322","159","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("계정사용 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","483","159",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("ACCT_TP_CD_NM","501","69","234","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("-");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("USE_YN","491","163","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_innerdataset("useYn_ds");
            obj.set_codecolumn("USE_YN");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_rowcount("1");
            obj.set_enable("false");
            obj.set_text("포함");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("ACCT_LVL","491","133","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_acctLvl");
            obj.set_codecolumn("ACCT_LVL");
            obj.set_datacolumn("ACCT_LVL_NM");
            obj.set_enable("false");
            obj.set_value("20");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"230","90","30","597",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"230","98","30","btn_save:5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_openAcctPopup","1204","132","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ACCT_CD00","966","71","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_hrnk_remove","btn_openAcctPopup:20","132","54","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00_00","825","159","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("예산사용상위계정명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("BGT_USE_HRNK_ACCT_ID","965","163","233","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_openBgtAcctPopup","1204","163","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bgtHrnk_remove","1248","163","54","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div_top_info.form.SEARCH_BZPLC_ID","value","ds_search","SEARCH_BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div_top_info.form.SEARCH_ACCT_NM","value","ds_search","eACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.ACCT_TP_CD_NM","text","ds_acctDtl","ACCT_TP_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.ACCT_NM","value","ds_acctDtl","ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.ACCT_CD","value","ds_acctDtl","ACCT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.ACCT_LVL","value","ds_acctDtl","LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.HRNK_ACCT_ID","value","ds_acctDtl","HRNK_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.USE_YN","value","ds_acctDtl","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div_top_info.form.SEARCH_BZPLC_NM","value","ds_search","SEARCH_BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div_top_info.form.SEARCH_ACCT_ID","value","ds_search","SEARCH_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.ACCT_CD00","value","ds_acctDtl","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.BGT_USE_HRNK_ACCT_ID","value","ds_acctDtl","BGT_USE_HRNK_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_26.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_26.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_26.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_MA_26.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 계정설정
          CREATION DATES : 2022.02.23
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;

        this.RETURN_MSG = "";
        this.SUCCESS_YN = "";
        this.fv_sessionData = this.getSession(); //session object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };
        /* 검색DIV ENTER KEY EVENT */
        this.enterDown = function(obj,e)
        {
        	if(e.keycode == '13'){
        		//this.fn_treeSearch();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //트리 조회
        this.fn_treeSearch= function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0, "SEARCH_BZPLC_ID"))){
        		//alert("사업장을 먼저 설정하고 조회해 주세요.");
        		alert(this.fn_getMessage("ERRC000007", "사업장"));
        		return false;
        	}else{
        		this.ds_acctDtl.reset();
        		this.ds_search.setColumn(0, "SEARCH_USE_YN", this.Div_top_info.form.SEARCH_USE_YN.value);

        		var sSvcId = "selectAcctSettingTree";
        		var sUrl   = "/cc/acct/select-acct-setting-tree.do";
        		var inDs   = "ds_search=ds_search";
        //		var outDs  = "ds_acctList=ds_output";
        		var outDs  = "ds_acctList=ds_acctList";
        		var arg    = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };
        //저장
        this.fn_save = function() {
        	if( !this.fn_dataCheck(this.ds_acctDtl) ) {
        		//alert("변경된 내용이 없습니다.");
        		alert(this.fn_getMessage("ERRC000035"));
        		return false;
        	} else {
        		if(this.ds_acctList.getColumn(this.ds_acctList.rowcount, "ACCT_NM") == ""){
        			//alert("계정명은 필수 입니다.");
        			alert(this.fn_getMessage("ERRC000004", "계정명"));
        			return false;
        		}
        		//폼 필수값 체크
        		var sSvcId = "updateAcctBasisList";
        		var sUrl = "/cc/acct/update-acct-basis.do";
        		var inDs = "ds_save=ds_acctDtl"
        		var outDs = "";
        		var arg;
        		var callback = "fn_callBack";

        		//if( this.confirm("저장 하시겠습니까?") ) {
        		if( this.confirm(this.fn_getMessage("ERRC000080")) ) {
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        		}
        	}
        }
        //트리상세정보 조회
        this.fn_treeDtlSearch= function()
        {
        	var sSvcId = "selectBgtAcctDetail";
        	var sUrl   = "/cc/acct/select-bgt-acct-id-detail.do";
        	var inDs   = "ds_dtlSearch=ds_dtlSearch";
        	var outDs  = "ds_acctDtl=ds_output";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //선택한 계정 하위에 존재하는 계정 선택여부 조회
        this.fn_selectCheckHrnkAcct= function()
        {
        	var sSvcId = "selectCheckHrnkAcct";
        	var sUrl   = "/cc/acct/select-check-hrnk-acct.do";
        	var inDs   = "ds_searchCnt=ds_searchCnt";
        	var outDs  = "ds_cnt=ds_cnt";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false); //동기방식으로 실행
        };
        // 대용량다운로드
        this.fn_allExcelDownload = function(){
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/cc/acct/select-all-acct-excel-download.do";
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
        	if(objID == 'selectAcctSettingTree'){
        		if(this.SUCCESS_YN == 'Y'){
        			this.Div00.form.ACCT_NM.set_enable(false);
        			this.Div00.form.ACCT_CD.set_enable(false);
        			this.Div00.form.USE_YN.set_enable(false);
        			this.Div00.form.btn_add.set_enable(true);
        		}else{
        			alert(this.RETURN_MSG);
        			return false;
        		}
        	}

        	if(objID == 'updateAcctBasisList'){
        		if(this.SUCCESS == 'Y'){
        			alert(this.RETURN_MSG);
        		}else{
        			alert(this.RETURN_MSG);
        		}
        		this.fn_treeSearch();

        	}

        	if(objID == 'selectBgtAcctDetail'){
        		//
        	}

        	if(objID == 'selectCheckHrnkAcct') {

        	}
        }
        //팝업 콜백함수
        this.fn_popupCallback = function(objID, rtnValue)
        {
        	if(rtnValue == undefined){return false;}

        	var resParam = JSON.parse(rtnValue);

        	var sIdList = "";
        	var sNmList = "";

        	if(objID == 'searchPopupBtn01'){
        		this.ds_search.setColumn(0, "SEARCH_BZPLC_NM", resParam.BZPLC_NM);
        		this.ds_search.setColumn(0, "SEARCH_BZPLC_ID", resParam.BZPLC_ID);
        		this.ds_search.setColumn(0, "SEARCH_CO_CD", resParam.CO_CD);

        		//사업장 조회 트리, 트리상세 초기화
        		this.ds_acctList.copyData(this.ds_acctListEmpty);

        		this.ds_acctDtl.clearData();
        		this.ds_acctDtl.addRow();
        		this.ds_acctDtl.setColumn(0, "LVL"           , "" );
        		this.Div00.form.USE_YN.set_index(0);

        		this.ds_search.setColumn(0, "eACCT_ID", "");
        	}
        	if(objID == 'searchPopupBtn02'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.ACCT_ID +",";
        			sNmList += rtnData.ACCT_NM +",";
        		}
        		this.ds_search.setColumn(0, "SEARCH_ACCT_NM" , sNmList );
        		this.ds_search.setColumn(0, "eACCT_ID"       , sIdList );
        	}
        	if(objID == 'btn_openAcctPopup'){
        		if(resParam.ACCT_TP_CD != this.ds_acctDtl.getColumn(0, "ACCT_TP_CD")){
        			alert('다른 유형의 계정으로 상위계정을 선택할 수 없습니다.');
        			return false;
        		}

        		//선택한 계정 하위에 존재하는 계정여부 체크 20220803 csy
        		this.ds_searchCnt.setColumn(0,"CO_CD",this.ds_acctDtl.getColumn(0, "CO_CD"));
        		this.ds_searchCnt.setColumn(0,"BZPLC_ID",this.ds_acctDtl.getColumn(0, "BZPLC_ID"));
        		this.ds_searchCnt.setColumn(0,"ACCT_ID",this.ds_acctDtl.getColumn(0, "ACCT_ID"));
        		this.ds_searchCnt.setColumn(0,"HRNK_ACCT_ID",resParam.ACCT_ID);
        		this.fn_selectCheckHrnkAcct();
        		var cnt = this.ds_cnt.getColumn(0,"CNT");
        		if(cnt > 0) {
        			alert("선택한 계정 하위에 존재하는 계정은 선택할 수 없습니다.");
        			return;
        		}

        		//상위계정 선택 콜백 시
        		this.childMaxLvl = this.ds_acctDtl.getColumn(0, "CHILD_MAX_LVL");  //현재 내 자식 최대레벨
        		this.myLvl       = this.ds_acctDtl.getColumn(0, "LVL");            //내 레벨
        		this.hrnkAcctLvl = resParam.A_LVL.hi;                                 //선택한 상위계정 레벨

        		this.lvlChk = (nexacro.toNumber(this.childMaxLvl) - nexacro.toNumber(this.myLvl)) + 1;

        		console.log('this.childMaxLvl : '+this.childMaxLvl);
        		console.log('this.myLvl : '+this.myLvl);
        		console.log('this.hrnkAcctLvl : '+this.hrnkAcctLvl);

        		if(this.hrnkAcctLvl + this.lvlChk > 5){
        			//alert("하위레벨 계정 포함 계정레벨 5를 초과할 수 없습니다.");
        			alert(this.fn_getMessage("ERRC000095"));
        			return false;
        		}

        		// 나 포함 내 자식들이 있는 구간 (시작행과 마지막행) : 박재광 2022.06.15
        		var strChildRow = this.ds_acctList.rowposition;				//시작은 현재 트리 데이터셋 현재 행 위치
        		var endChildRow = strChildRow;
        		var thisLvl = Number(this.ds_acctList.getColumn(strChildRow,"LVL"));

        		for(var i=strChildRow+1; i<this.ds_acctList.getRowCount(); i++) {
        			var nextLvl = Number(this.ds_acctList.getColumn(i,"LVL"));
        			if(thisLvl < nextLvl) {
        				endChildRow = i;
        			} else {
        				break;
        			}
        		}

        		// 내 자식 구간안에서 선택한 계정과 같은 계정이 있는지 비교
        		var underMyAcct = this.ds_acctList.findRow("ACCT_ID", resParam.ACCT_ID, strChildRow, endChildRow+1);
        		if(underMyAcct > -1) {
        			alert(this.fn_getMessage("ERRC000246"));	// 현재 계정을 포함한 하위계정을 현재 계정의 상위계정으로 선택할 수 없습니다.
        			return false;
        		}

        		this.ds_acctDtl.setColumn(0, "HRNK_ACCT_ID"    , resParam.ACCT_ID                   );
        		this.ds_acctDtl.setColumn(0, "HRNK_ACCT_NM"    , resParam.ACCT_NM                   );
        		this.ds_acctDtl.setColumn(0, "LVL"             , nexacro.toNumber(resParam.A_LVL)+1 );
        		this.ds_acctDtl.setColumn(0, "BGT_ACCT_TP_CD"  ,resParam.ACCT_TP_CD                 );
        	}
        	if(objID == 'btn_openBgtAcctPopup') {

        		//선택한 계정 하위에 존재하는 계정여부 체크 20220803 csy
        		this.ds_searchCnt.setColumn(0,"CO_CD",this.ds_acctDtl.getColumn(0, "CO_CD"));
        		this.ds_searchCnt.setColumn(0,"BZPLC_ID",this.ds_acctDtl.getColumn(0, "BZPLC_ID"));
        		this.ds_searchCnt.setColumn(0,"ACCT_ID",this.ds_acctDtl.getColumn(0, "ACCT_ID"));
        		this.ds_searchCnt.setColumn(0,"HRNK_ACCT_ID",resParam.ACCT_ID);
        		this.fn_selectCheckHrnkAcct();
        		var cnt = this.ds_cnt.getColumn(0,"CNT");
        		if(cnt > 0) {
        			alert("선택한 계정 하위에 존재하는 계정은 선택할 수 없습니다.");
        			return;
        		}

        		//예산사용상위계정
        		this.ds_acctDtl.setColumn(0,"BGT_USE_HRNK_ACCT_ID",resParam.ACCT_ID    );
        		this.ds_acctDtl.setColumn(0,"BGT_USE_HRNK_ACCT_NM",resParam.ACCT_NM    );
        		this.ds_acctDtl.setColumn(0,"BGT_ACCT_TP_CD"      ,resParam.ACCT_TP_CD );
        	}
        }
        //팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'multipleTextBtn02'){
        		this.ds_search.setColumn(0, "eACCT_ID", resParam.textValue);
        		if(resParam.textValue == ''){
        			this.ds_search.setColumn(0, 'SEARCH_ACCT_NM', '');
        		}
        	}
        }

        this.fn_callBackForSearch = function(){
        	this.fn_treeSearch();
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	var acctStr = this.Div_top_info.form.SEARCH_ACCT_NM.value;
        	this.fn_setMSearch(this.name,"SEARCH_ACCT_ID",acctStr);
        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_treeSearch();
        	}else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}
        };

        //조회팝업
        this.searchPopupBtn_onclick = function(obj,e)
        {
        	var params = { coCd : this.fv_sessionData.coCd };
        	var options = {};
        	//사업장
        	if(e.fromobject.id == 'searchPopupBtn01'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params,  "fn_popupCallback", options); }

        	//계정멀티 조회
        	if(e.fromobject.id == 'searchPopupBtn02'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_31.xfdl", {coCd : this.fv_sessionData.coCd, bzplcId : this.ds_search.getColumn(0, "SEARCH_BZPLC_ID" )},  "fn_popupCallback", options); }

        };

        //계정생성버튼
        this.fn_registAcctBasis = function(obj,e)
        {
        	if(this.ds_search.getColumn(0, "SEARCH_BZPLC_ID") != undefined && this.ds_search.getColumn(0, "SEARCH_BZPLC_ID") != ""){
        		var params = { coCd       : this.gfn_allTrim(this.ds_search.getColumn(0, "SEARCH_CO_CD"                             ))
        					 , bzplcId    : this.gfn_allTrim( this.ds_search.getColumn(0, "SEARCH_BZPLC_ID"                         ))
        					 , bzplcNm    : this.gfn_allTrim(this.ds_search.getColumn(0, "SEARCH_BZPLC_NM"                          ))
        					 , acctLvl    : this.gfn_allTrim(this.ds_acctList.getColumn(this.ds_acctList.rowposition, "LVL"         ))
        					 , hrnkAcctId : this.gfn_allTrim(this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID"     ))
        					 , hrnkAcctNm : this.gfn_allTrim(this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_NM"     ))
        					 , acctTpCd   : this.gfn_allTrim(this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_TP_CD"  ))
        					 };
        		var options = {};
        		//사업장
        		if(e.fromobject.id == 'btn_add'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_71.xfdl", params,  "fn_popupCallback", options); }
        	}else{
        		//alert("사업장을 먼저 설정하고 조회해 주세요.");
        		alert(this.fn_getMessage("ERRC000007", "사업장"));
        	}
        };
        /* 저장버튼 */
        this.fn_btn_save = function(obj,e)
        {
        	/*
        	if(!this.gfn_dsIsUpdated(this.ds_acctDtl)) {
        		alert(this.fn_getMessage("ERRC000039"));
        		return;
        	}
        	*/
        	if(this.ds_acctDtl.getColumn(0,"BGT_ACCT_TP_CD") != null && this.ds_acctDtl.getColumn(0,"BGT_ACCT_TP_CD") != '' && this.ds_acctDtl.getColumn(0,"BGT_ACCT_TP_CD") != undefined){
        		if(this.ds_acctDtl.getColumn(0,"ACCT_TP_CD") != this.ds_acctDtl.getColumn(0,"BGT_ACCT_TP_CD")){
        			alert("상위 계정의 유형이 상이합니다.");
        			return false;
        		}
        	}
        	if(this.ds_acctDtl.getColumn(0, "LVL") == '0'){
        	}else{
        		this.fn_save();
        	}
        };
        //멀티서치
        this.multipleTextBtn_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'multipleTextBtn02'){
        		params = { textId : this.Div_top_info.form.SEARCH_ACCT_NM }
        	}

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };
        //상위계정 조회 팝업
        this.Div00_btn_openAcctPopup_onclick = function(obj,e)
        {
        	if(this.ds_acctDtl.getColumn(0, "LVL") == '0'){
        	}else{
        		if(this.gfn_isNull(this.ds_search.getColumn(0, "SEARCH_BZPLC_ID"))){
        			//alert("사업장을 먼저 설정하고 조회해 주세요.");
        			alert(this.fn_getMessage("ERRC000007", "사업장"));
        			return false;
        		}

        		var params = { coCd : this.fv_sessionData.coCd
        					 , bzplcId : this.ds_search.getColumn(0, "SEARCH_BZPLC_ID" )
        					 , lvl : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "LVL")
        					 , acctTpCd : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_TP_CD")
        					 , excAcctId : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID")
        					 };
        		var options = {};
        		//계정단일팝업
        		if(e.fromobject.id == 'btn_openAcctPopup'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_75.xfdl", params,  "fn_popupCallback", options); }
        	}
        };
        //예산사용 상위계정 조회 팝업
        this.Div00_btn_openBgtAcctPopup_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_acctDtl.getColumn(0, "ACCT_ID"))){
        		return;
        	}
        	if(this.ds_acctDtl.getColumn(0,"ACCT_TP_CD") != "1") { //일반계정이 아니면 처리하지 않음
        		return;
        	}

        	/* 20220803 상위계정조회 버튼과 같은 로직으로 구성해달라는 요청으로 주석처리
        	var params = { coCd : this.ds_acctDtl.getColumn(0,"CO_CD")
                         , bzplcId : this.ds_acctDtl.getColumn(0,"BZPLC_ID")
                         , acctTpCd : this.ds_acctDtl.getColumn(0, "ACCT_TP_CD")
                       //, acctId : this.ds_acctDtl.getColumn(0,"ACCT_ID")
                         , hrnkAcctSearchYn : "Y"  //상위계정대상 조회여부
                         , acctTpCdHoldYn : "Y"		//
        				};
        	*/
        	var params = { coCd : this.fv_sessionData.coCd
        				 , bzplcId : this.ds_search.getColumn(0, "SEARCH_BZPLC_ID" )
        				 , lvl : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "LVL")
        				 , acctTpCd : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_TP_CD")
        				 , excAcctId : this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID")
        				 };
        	var options = {};
        	//계정단일팝업
        	if(e.fromobject.id == 'btn_openBgtAcctPopup'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_75.xfdl", params,  "fn_popupCallback", options); }
        };

        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "SEARCH_CO_CD", this.fv_sessionData.coCd);
        	this.ds_search.setColumn(0, "SEARCH_BZPLC_NM", "");
        	this.ds_search.setColumn(0, "SEARCH_BZPLC_ID", "");
        	this.ds_search.setColumn(0, "eACCT_ID"       , "");
        	this.ds_search.setColumn(0, "SEARCH_ACCT_NM" , "");
        	this.Div_top_info.form.SEARCH_USE_YN.set_index(0);
        };

        //취소버튼
        this.fn_cancel = function(obj,e)
        {
        	if(this.ds_acctDtl.getColumn(0, "LVL") == '0'){
        	}else{
        		if(this.ds_acctDtl.getRowCount()==1 && this.ds_acctDtl.getRowType(0)==Dataset.ROWTYPE_UPDATE) {
        			if( this.confirm(this.fn_getMessage("ERRC000087")) ) {	//	취소하시겠습니까?
        				this.ds_acctDtl.reset();
        			}
        		} else {
        			this.confirm(this.fn_getMessage("ERRC000035"))	// 변경된 내용이 없습니다.
        		}
        	}
        };

        //엑셀다운로드
        this.Div00_Button01_onclick = function(obj,e)
        {
        	//this.ofn_exportExcel({form:this, grid:this.Div00.form.grd_acctTree, fileName:"계정관리 목록"});

        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		return;
        	}

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	var acctStr = this.Div_top_info.form.SEARCH_ACCT_ID.value;
        	this.fn_setMSearch(this.name,"SEARCH_ACCT_ID",acctStr);

        	this.fn_allExcelDownload();

        };

        //일괄등록/수정
        this.dlvplcAddBtn_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_XL_CC_15"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        //트리 행선택이 바뀐경우
        this.ds_acctList_onrowposchanged = function(obj,e)
        {
        	if(this.ds_acctList.getColumn(this.ds_acctList.rowposition, "LVL") == '0'){
        		this.Div00.form.ACCT_NM.set_enable(false);
        		this.Div00.form.ACCT_CD.set_enable(false);
        		this.Div00.form.USE_YN.set_enable(false);

        		this.ds_acctDtl.clearData();
        		this.ds_acctDtl.addRow();
        		this.ds_acctDtl.setColumn(0, "USE_YN", "Y");
        		this.ds_acctDtl.setColumn(0, "LVL", "0");

        	}else{
        		if(e.newrow == -1) {
        			this.Div00.form.btn_add.set_enable(false);
        			this.Div00.form.ACCT_NM.set_enable(false);
        			this.Div00.form.ACCT_CD.set_enable(false);
        			this.Div00.form.USE_YN.set_enable(false);

        			this.ds_dtlSearch.clearData();
        			this.ds_dtlSearch.addRow();
        			this.ds_acctDtl.clearData();
        			this.ds_acctDtl.addRow();
        			this.ds_acctDtl.setColumn(0, "LVL", "" );
        		} else {
        			this.Div00.form.btn_add.set_enable(true);
        			this.Div00.form.ACCT_NM.set_enable(true);
        			this.Div00.form.ACCT_CD.set_enable(true);
        			this.Div00.form.USE_YN.set_enable(true);

        			//현 row복사(취소용)
        			//this.ds_acctListCopy.copyRow(0, this.ds_acctList, this.ds_acctList.rowposition);

        			this.ds_dtlSearch.setColumn(0, "CO_CD"    , this.ds_acctList.getColumn(this.ds_acctList.rowposition, "CO_CD")    );
        			this.ds_dtlSearch.setColumn(0, "BZPLC_ID" , this.ds_acctList.getColumn(this.ds_acctList.rowposition, "BZPLC_ID") );
        			this.ds_dtlSearch.setColumn(0, "ACCT_ID"  , this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID")  );

        			if(this.ds_dtlSearch.getColumn(0, "CO_CD") != null && this.ds_dtlSearch.getColumn(0, "CO_CD") != null && this.ds_dtlSearch.getColumn(0, "CO_CD") != null){
        				this.fn_treeDtlSearch();
        			} else {
        				this.ds_dtlSearch.clearData();
        				this.ds_dtlSearch.addRow();
        				this.ds_acctDtl.clearData();
        				this.ds_acctDtl.addRow();
        				this.ds_acctDtl.setColumn(0, "LVL", "" );
        			}
        		}
        	}


        };
        /* 상위계정 삭제버튼 */
        this.fn_hrnk_remove = function(obj,e)
        {
        	this.ds_acctDtl.setColumn(0, "HRNK_ACCT_ID", null);
        	this.ds_acctDtl.setColumn(0, "HRNK_ACCT_NM", null);
        };
        /*예산사용상위부서 삭제버튼*/
        this.fn_bgtHrnk_remove = function(obj,e)
        {
        	this.ds_acctDtl.setColumn(0, "BGT_USE_HRNK_ACCT_ID", null);
        	this.ds_acctDtl.setColumn(0, "BGT_USE_HRNK_ACCT_NM", null);
        };

        this.dlvplcMngList_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        	console.log("test");
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcMngList_onkeyup,this);
            this.Div_top_info.addEventHandler("onkeydown",this.enterDown,this);
            this.Div_top_info.form.searchPopupBtn01.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn02.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn02.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div_top_info.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div_top_info.form.SEARCH_USE_YN.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.Div_top_info.form.SEARCH_ACCT_ID.addEventHandler("onchanged",this.Div_top_info_SEARCH_ACCT_ID_onchanged,this);
            this.Div_top_info.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.dlvplcAddBtn.addEventHandler("onclick",this.dlvplcAddBtn_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.fn_registAcctBasis,this);
            this.Div00.form.ACCT_TP_CD_NM.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.USE_YN.addEventHandler("onitemchanged",this.Div00_USE_YN_onitemchanged,this);
            this.Div00.form.ACCT_LVL.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.fn_btn_save,this);
            this.Div00.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.Div00.form.btn_openAcctPopup.addEventHandler("onclick",this.Div00_btn_openAcctPopup_onclick,this);
            this.Div00.form.btn_hrnk_remove.addEventHandler("onclick",this.fn_hrnk_remove,this);
            this.Div00.form.btn_openBgtAcctPopup.addEventHandler("onclick",this.Div00_btn_openBgtAcctPopup_onclick,this);
            this.Div00.form.btn_bgtHrnk_remove.addEventHandler("onclick",this.fn_bgtHrnk_remove,this);
            this.ds_acctList.addEventHandler("onrowposchanged",this.ds_acctList_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
