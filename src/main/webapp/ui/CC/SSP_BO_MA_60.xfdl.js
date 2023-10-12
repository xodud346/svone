(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form1");
            this.set_titletext("예산목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"26\"/><Column id=\"BGT_YYMM\" type=\"STRING\" size=\"16\"/><Column id=\"BGT_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_ADD_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_DEC_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TOT_ODR_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_CHG_SPR_CD_3_ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_4_ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_3_DEC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_4_DEC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHG_BGT_AMT_10\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_20\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_30\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_40\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"ODR_AVIL_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TOT_CUNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"acctId\" type=\"STRING\" size=\"256\"/><Column id=\"acctNm\" type=\"STRING\" size=\"256\"/><Column id=\"fromYymm\" type=\"STRING\" size=\"256\"/><Column id=\"toYymm\" type=\"STRING\" size=\"256\"/><Column id=\"acctTpCd\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qrtBgtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"26\"/><Column id=\"BGT_YYMM\" type=\"STRING\" size=\"16\"/><Column id=\"BGT_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_ADD_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_DEC_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TOT_ODR_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_CHG_SPR_CD_3_ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_4_ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_3_DEC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BGT_CHG_SPR_CD_4_DEC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHG_BGT_AMT_10\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_20\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_30\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_40\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"ODR_AVIL_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TOT_CUNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","5",null,"66","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("계정유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","452","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_yearMonth","882","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("예산 년/월");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","452","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_oprUnit","882","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_acctSingle","851","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","1121","35","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzpSingle","851","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprSingle","1280","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptSingle","419","34","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","591","4","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","1022","4","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","159","35","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_acctId","591","35","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","687","4","160","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm","687","35","160","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","1117","4","160","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","255","35","160","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_fromYymm","1021","35","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmCalMM.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_toYymm","1132","35","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmCalMM.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_acctTpCd","161","6","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_acctTpCd_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_acctTpCd_innerdataset", obj);
            div_search_form_rdo_acctTpCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공통</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_acctTpCd_innerdataset);
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"div_search:10","60","30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","btn_search:59",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"계정ID\"/><Cell col=\"3\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"예산 년/월\"/><Cell col=\"5\" rowspan=\"2\" text=\"예산 설정액\"/><Cell col=\"6\" colspan=\"2\" text=\"이월\"/><Cell col=\"8\" colspan=\"2\" text=\"이체\"/><Cell col=\"10\" colspan=\"5\" text=\"주문액\"/><Cell row=\"1\" col=\"6\" text=\"추가\"/><Cell row=\"1\" col=\"7\" text=\"삭감\"/><Cell row=\"1\" col=\"8\" text=\"추가\"/><Cell row=\"1\" col=\"9\" text=\"삭감\"/><Cell row=\"1\" col=\"10\" text=\"결재중\"/><Cell row=\"1\" col=\"11\" text=\"상품준비중\"/><Cell row=\"1\" col=\"12\" text=\"배송중\"/><Cell row=\"1\" col=\"13\" text=\"배송완료\"/><Cell row=\"1\" col=\"14\" text=\"주문가능\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" suppress=\"1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ACCT_ID\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:ACCT_NM\" suppress=\"2\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:BGT_YYMM\"/><Cell col=\"5\" text=\"bind:ODR_AVIL_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"6\" text=\"bind:BGT_CHG_SPR_CD_4_ADD_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\" textAlign=\"right\" text=\"bind:BGT_CHG_SPR_CD_4_DEC_AMT\"/><Cell col=\"8\" text=\"bind:BGT_CHG_SPR_CD_3_ADD_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\" textAlign=\"right\" text=\"bind:BGT_CHG_SPR_CD_3_DEC_AMT\"/><Cell col=\"10\" text=\"bind:CHG_BGT_AMT_10\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"11\" text=\"bind:CHG_BGT_AMT_20\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"12\" text=\"bind:CHG_BGT_AMT_30\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"13\" text=\"bind:CHG_BGT_AMT_40\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"14\" text=\"bind:BGT_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"div_search:10","60","30","83",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","div_search:70","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"div_search:60","110","30","125",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pageViewCnt",null,"div_search:60","100","30","22",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var cbo_pageViewCnt_innerdataset = new nexacro.NormalDataset("cbo_pageViewCnt_innerdataset", obj);
            cbo_pageViewCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageViewCnt_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"div_search:10","100","30","btn_reset:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_copyExcel","140","706",null,null,"211","44",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_copyExcel");
            obj.set_selecttype("area");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"계정ID\"/><Cell col=\"3\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"예산 년/월\"/><Cell col=\"5\" rowspan=\"2\" text=\"예산 설정액\"/><Cell col=\"6\" colspan=\"2\" text=\"이월\"/><Cell col=\"8\" colspan=\"2\" text=\"이체\"/><Cell col=\"10\" colspan=\"5\" text=\"주문액\"/><Cell row=\"1\" col=\"6\" text=\"추가\"/><Cell row=\"1\" col=\"7\" text=\"삭감\"/><Cell row=\"1\" col=\"8\" text=\"추가\"/><Cell row=\"1\" col=\"9\" text=\"삭감\"/><Cell row=\"1\" col=\"10\" text=\"결재중\"/><Cell row=\"1\" col=\"11\" text=\"상품준비중\"/><Cell row=\"1\" col=\"12\" text=\"배송중\"/><Cell row=\"1\" col=\"13\" text=\"배송왼료\"/><Cell row=\"1\" col=\"14\" text=\"주문가능\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ACCT_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCT_NM\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:BGT_YYMM\"/><Cell col=\"5\" text=\"bind:ODR_AVIL_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"6\" text=\"bind:BGT_CHG_SPR_CD_4_ADD_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\" textAlign=\"right\" text=\"bind:BGT_CHG_SPR_CD_4_DEC_AMT\"/><Cell col=\"8\" text=\"bind:BGT_CHG_SPR_CD_3_ADD_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\" textAlign=\"right\" text=\"bind:BGT_CHG_SPR_CD_3_DEC_AMT\"/><Cell col=\"10\" text=\"bind:CHG_BGT_AMT_10\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"11\" text=\"bind:CHG_BGT_AMT_20\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"12\" text=\"bind:CHG_BGT_AMT_30\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"13\" text=\"bind:CHG_BGT_AMT_40\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/><Cell col=\"14\" text=\"bind:BGT_AMT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_copyExcel","33.46%","770","29.27%","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("일반 엑셀다운로드 복사용 그리드(셀병합 셀 라인 보이도록 처리)");
            obj.set_color("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
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

            obj = new BindItem("item3","div_search.form.edt_acctId","value","ds_search","acctId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_bzplcNm","value","ds_search","bzplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_acctNm","value","ds_search","acctNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_oprUnitNm","value","ds_search","oprUnitNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_deptNm","value","ds_search","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.rdo_acctTpCd","value","ds_search","acctTpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmCalMM.xfdl");
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_60.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_60.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_60.xfdl", function() {
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
        this.fv_totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.div_search.set_height(this.div_search.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_list);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //운영단위 분기예산사용여부 조회
        this.fn_searchQrtBgtUseYn = function (bInit){
        	var sSvcId = "searchQrtBgtUseYn";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_84/selectQrtBgtUseYn.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_qrtBgtUseYn=ds_qrtBgtUseYn";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function()	{
        	oSortInfo = this.grd_list.uaSortInfo;
        	if(oSortInfo != null){
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        	}

        	var sSvcId = "selectList";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_60/selectBgtList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 대용량다운로드
        this.fn_allExcelDownload = function(){
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_60/select-all-excel-download.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectList"){
        		if(this.ds_list.getRowCount() > 0) {
        			this.fv_totalCount = this.ds_list.getColumn(0,"TOT_CUNT");
        			//this.div_paging.form.cfn_createPage(this.div_paging,this.fv_totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			this.div_paging.form.cfn_createPage(this.div_paging,this.fv_totalCount,this.cbo_pageViewCnt.value,"fn_pageCallback");
        		}
        		else {
        			this.sta_totCount.set_text("(총 0건 1/1)");
        		}
        	}else if(svcID == "searchQrtBgtUseYn"){
        		if(this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN") == "Y") {
        			this.div_search.form.sta_yearMonth.set_text("예산 분기");
        		}
        		else {
        			this.div_search.form.sta_yearMonth.set_text("예산 년/월");
        		}
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
        		//this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		if(this.ds_search.getColumn(0,"SEARCH_YN") != "Y") {
        			alert("조회후 정렬기능을 이용하세요.");
        			return;
        		}
        		this.fn_search();
        	}
        };


        // 싱글팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	if(this.gfn_isNull(sRetValue)) return;

        	var retObj = JSON.parse(sRetValue);
        	switch(sPopupId){
        		case "btn_deptSingle":
        			this.ds_search.setColumn(0,"deptId", retObj.DEPT_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"deptNm", retObj.DEPT_NM.replace(/,\s*$/, ""));

        			break;

        		case "btn_bzpSingle":
        			this.ds_search.setColumn(0,"bzplcId", retObj.BZPLC_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"bzplcNm", retObj.BZPLC_NM.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"oprUnitId", ""); //운영단위 초기화
        			this.ds_search.setColumn(0,"oprUnitNm", ""); //운영단위 초기화

        			break;

        		case "btn_oprSingle":
        			this.ds_search.setColumn(0,"oprUnitId", retObj.OPR_UNIT_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"oprUnitNm", retObj.OPR_UNIT_NM.replace(/,\s*$/, ""));

        			this.fn_searchQrtBgtUseYn(); //운영단위분기사용여부 조회
        			break;

        		case "btn_acctSingle":
        			this.ds_search.setColumn(0,"acctId", retObj.ACCT_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"acctNm", retObj.ACCT_NM.replace(/,\s*$/, ""));

        			break;

        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//search div 초기 설정
        	this.div_search.uMinSize = this.div_search.height;
        	this.div_search.uMaxSize = 157;

        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//예산년월 설정
        	var today = this.gfn_getDate();
        	this.div_search.form.cal_fromYymm.form.cfn_setValue(this.gfn_left(today,4) + "01");
        	this.div_search.form.cal_toYymm.form.cfn_setValue(this.gfn_left(today,4) + "12");

        	//회사코드 설정
        	this.ds_search.setColumn(0,"coCd",this.fv_sessionData.coCd);
        	this.div_search.form.rdo_acctTpCd.set_index(0);
        	this.displayType();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.displayType = function()
        {
        	this.sta_totCount.set_text("(총 0건 1/1)");

        	this.ds_list.clearData();
        	this.ds_search.setColumn(0,"oprUnitId","");
        	this.ds_search.setColumn(0,"oprUnitNm","");
        	this.ds_search.setColumn(0,"deptId","");
        	this.ds_search.setColumn(0,"deptNm","");

        	var acctTpCd = this.ds_search.getColumn(0,"acctTpCd");
        	if(acctTpCd == "1") { //일반계정
        		this.div_search.form.edt_oprUnitId.set_enable(true);
        		this.div_search.form.btn_oprSingle.set_enable(true);
        		this.div_search.form.edt_deptId.set_enable(true);
        		this.div_search.form.btn_deptSingle.set_enable(true);
        		this.div_search.form.sta_oprUnit.set_cssclass("sta_cm_box01L_tdt_necessary");
        		this.grd_list.setFormatColProperty(0,"size",120);
        		this.grd_list.setFormatColProperty(1,"size",120);
        		this.grd_copyExcel.setFormatColProperty(0,"size",120);
        		this.grd_copyExcel.setFormatColProperty(1,"size",120);
        	}
        	else if(acctTpCd == "2") { //공통계정
        		this.div_search.form.edt_oprUnitId.set_enable(false);
        		this.div_search.form.btn_oprSingle.set_enable(false);
        		this.div_search.form.edt_deptId.set_enable(false);
        		this.div_search.form.btn_deptSingle.set_enable(false);
        		this.div_search.form.sta_oprUnit.set_cssclass("sta_cm_box01L_tdt");
        		this.grd_list.setFormatColProperty(0,"size",0);
        		this.grd_list.setFormatColProperty(1,"size",0);
        		this.grd_copyExcel.setFormatColProperty(0,"size",0);
        		this.grd_copyExcel.setFormatColProperty(1,"size",0);
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"bzplcId"))) {
        		alert(this.fn_getMessage("ERRC000009", "사업장"));
        		return;
        	}
        	if(this.ds_search.getColumn(0,"acctTpCd") == "1") { //계정유형이 일반(1)시
        		if(this.gfn_isNull(this.ds_search.getColumn(0,"oprUnitId"))) {
        			alert(this.fn_getMessage("ERRC000009", "운영단위"));
        			return;
        		}
        	}

        	if(this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN") == "Y") { //분기 사용할 경우
        		var calFromYymm = this.div_search.form.cal_fromYymm.form.cfn_getValue();
        		var calToYymm = this.div_search.form.cal_toYymm.form.cfn_getValue();

        		//카렌다에서 선택한 월을 그분기의 첫번째 월에 매핑
        		var calFromYy = this.gfn_left(calFromYymm,4);
        		var calFromMm = calFromYymm.substr(4,2);
        		var calToYy = this.gfn_left(calToYymm,4);
        		var calToMm = calToYymm.substr(4,2);

        		if(calFromMm >= 1 && calFromMm <= 3) calFromMm = "01"; //1분기
        		else if(calFromMm >= 4 && calFromMm <= 6) calFromMm = "04"; //2분기
        		else if(calFromMm >= 7 && calFromMm <= 9) calFromMm = "07"; //3분기
        		else if(calFromMm >= 10 && calFromMm <= 12) calFromMm = "10"; //4분기

        		if(calToMm >= 1 && calToMm <= 3) calToMm = "01"; //1분기
        		else if(calToMm >= 4 && calToMm <= 6) calToMm = "04"; //2분기
        		else if(calToMm >= 7 && calToMm <= 9) calToMm = "07"; //3분기
        		else if(calToMm >= 10 && calToMm <= 12) calToMm = "10"; //4분기

        		this.ds_search.setColumn(0, "fromYymm", calFromYy + calFromMm);
        		this.ds_search.setColumn(0, "toYymm", calToYy + calToMm);
        	}
        	else { //분기 사용하지 않을 경우
        		this.ds_search.setColumn(0, "fromYymm", this.div_search.form.cal_fromYymm.form.cfn_getValue());
        		this.ds_search.setColumn(0, "toYymm", this.div_search.form.cal_toYymm.form.cfn_getValue());
        	}

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	this.ds_search.setColumn(0,"START_NUM",this.div_paging.uPageNum);
        	//this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);

        	this.ds_search.setColumn(0,"SEARCH_YN","Y");

        	this.fn_search();
        };


        this.btn_excel_onclick = function(obj,e)
        {
        	this.ds_copyExcel.clearData();
        	this.ds_copyExcel.copyData(this.ds_list); //화면목록을 엑셀다운로드 그리드 데이터셋에 복사

        	if(this.ds_search.getColumn(0,"acctTpCd") == "1") { //일반계정
        		this.ofn_exportExcel({form:this, grid:this.grd_copyExcel, fileName:"예산목록_일반계정"});
        	}
        	else if(this.ds_search.getColumn(0,"acctTpCd") == "2") { //공통계정
        		this.ofn_exportExcel({form:this, grid:this.grd_copyExcel, fileName:"예산목록_공통계정"});
        	}
        };


        this.btn_reset_onclick = function(obj,e)
        {
        	for(i=0; i<this.ds_search.colcount; i++) {
        		this.ds_search.setColumn(0, i, "");
        	}

        	//예산년월 설정
        	var today = this.gfn_getDate();
        	this.div_search.form.cal_fromYymm.form.cfn_setValue(this.gfn_left(today,4) + "01");
        	this.div_search.form.cal_toYymm.form.cfn_setValue(this.gfn_left(today,4) + "12");

        	this.ds_search.setColumn(0,"coCd",this.fv_sessionData.coCd); //회사코드 설정
        	this.div_search.form.rdo_acctTpCd.set_index(0);
        	this.displayType();
        };

        this.cbo_pageViewCnt_onitemchanged = function(obj,e)
        {
        	this.btn_search_onclick();
        };


        // 싱글팝업
        this.btn_singlePopOpen_onclick = function(obj,e)
        {
        	var oOption = {titlebar:"true"};

        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	if(e.fromobject.id == 'btn_deptSingle'){
        		if(this.gfn_isNull(this.ds_search.getColumn(0, "bzplcId"))) {
        			alert(this.fn_getMessage("ERRC000009", "사업장"));
        			return;
        		}

        		var oArg = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_search.getColumn(0, "bzplcId")
        			,oprUnitId : this.ds_search.getColumn(0, "oprUnitId")
        		};
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_39.xfdl", oArg, "fn_popupCallback", oOption);
        	}
        	if(e.fromobject.id == 'btn_bzpSingle'){
        		var oArg = {
        			coCd : this.fv_sessionData.coCd
        		};
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", oArg, "fn_popupCallback", oOption);
        	}
        	if(e.fromobject.id == 'btn_oprSingle'){
        		if(this.gfn_isNull(this.ds_search.getColumn(0, "bzplcId"))) {
        			alert(this.fn_getMessage("ERRC000009", "사업장"));
        			return;
        		}

        		var oArg = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_search.getColumn(0, "bzplcId")
        		};
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_15.xfdl", oArg, "fn_popupCallback", oOption);
        	}
        	if(e.fromobject.id == 'btn_acctSingle') {
        		var oArg = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_search.getColumn(0, "bzplcId")
        		};
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_75.xfdl", oArg, "fn_popupCallback", oOption);
        	}
        };

        this.rdo_acctTpCd_onitemchanged = function(obj,e)
        {
        	this.displayType();
        };

        this.btn_allExcel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		return;
        	}

        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	// 대용량다운로드
        	this.fn_allExcelDownload();
        };

        this.form1_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.form1_onkeyup,this);
            this.div_search.form.btn_acctSingle.addEventHandler("onclick",this.btn_singlePopOpen_onclick,this);
            this.div_search.form.btn_bzpSingle.addEventHandler("onclick",this.btn_singlePopOpen_onclick,this);
            this.div_search.form.btn_oprSingle.addEventHandler("onclick",this.btn_singlePopOpen_onclick,this);
            this.div_search.form.btn_deptSingle.addEventHandler("onclick",this.btn_singlePopOpen_onclick,this);
            this.div_search.form.rdo_acctTpCd.addEventHandler("onitemchanged",this.rdo_acctTpCd_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.cbo_pageViewCnt.addEventHandler("onitemchanged",this.cbo_pageViewCnt_onitemchanged,this);
            this.btn_allExcel.addEventHandler("onclick",this.btn_allExcel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_60.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
