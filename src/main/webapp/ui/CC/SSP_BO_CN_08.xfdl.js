(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_08");
            this.set_titletext("VOC 현황 조회 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_NM\" type=\"STRING\" size=\"26\"/><Column id=\"VOC_PROC_SPR_CD\" type=\"INT\" size=\"256\"/><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_GCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_ODRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_CMPL_HPE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"ACP_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STR_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_CLOS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_SUB_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VOC_STATS_SUB_CD\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gclsList", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SPR_ITM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCls", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mclasList", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MCLAS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sclsList", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_GCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_MCLAS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCLS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","5",null,"125","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static31_01","40","62",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","93",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("서비스 담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("주문 품목 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","458","31","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","458","0","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("서비스 담당팀");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00","869","0","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("VOC No");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsChrCd","430","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamCd","838","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrCd","136","4","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamCd","575","4","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_odrItmNm","136","35","290","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrNm","232","4","193","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamNm","660","4","173","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_vocItmNm","985","4","299","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","869","31","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_vocNo","1284","4","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_odrItmNm","428","35","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdId","838","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_period","985","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_period_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_period_innerdataset", obj);
            div_search_form_cbo_period_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">접수일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">처리시작일</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">처리완료일</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">완료일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_period_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_fromYymm","1090","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_headformat("yyyy.MM.dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_toYymm","1207","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_headformat("yyyy.MM.dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","1194","35","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_vocGclsCd","136","66","102","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_innerdataset("ds_gclsList");
            obj.set_codecolumn("VOC_GCLS_CD");
            obj.set_datacolumn("GCLS_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_vocMclasCd","243","66","102","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_innerdataset("ds_mclasList");
            obj.set_codecolumn("VOC_MCLAS_CD");
            obj.set_datacolumn("MCLAS_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_vocSclsCd","349","66","102","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_innerdataset("ds_sclsList");
            obj.set_codecolumn("VOC_SCLS_CD");
            obj.set_datacolumn("SCLS_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","62","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("VOC 분류");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08_00","458","62","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("VOC 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_vocStatsCd","575","66","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_vocStatsCd_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_vocStatsCd_innerdataset", obj);
            div_search_form_cbo_vocStatsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">처리시작</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">처리종료</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">95</Col><Col id=\"datacolumn\">예외종료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_vocStatsCd_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","869","62","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("고객 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","20","93","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","136","97","266","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdText","428","98","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","458","93","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","869","93","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","575","97","243","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitIdText","843","98","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_odrpsnId","985","97","295","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_odrpsnId","1286","97","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_custSprCd","985","66","173","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_custSprCd_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_custSprCd_innerdataset", obj);
            div_search_form_rdo_custSprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">계약</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">일반</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_custSprCd_innerdataset);
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","575","35","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","720","35","113","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcId","408","97","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitId","823","97","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("vocStatsCdChkBox","722","69","73","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_text("미완료");
            obj.set_tabstop("false");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_extend","0","div_search:0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_extend","20","0","130","28",null,null,null,null,null,null,this.div_extend.form);
            obj.set_taborder("0");
            obj.set_text("상세조회");
            obj.set_cssclass("btn_WF_default");
            this.div_extend.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"10","60","30","83",null,null,null,null,null,this.div_extend.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.div_extend.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","30","20",null,null,null,null,null,this.div_extend.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.div_extend.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","div_extend:14","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"div_extend:10","110","28","132",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"div_extend:10","100","28","btn_layoutClear:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"div_extend:9","112","30","btn_layoutSave:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pageViewCnt",null,"div_extend:8","107","30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var cbo_pageViewCnt_innerdataset = new nexacro.NormalDataset("cbo_pageViewCnt_innerdataset", obj);
            cbo_pageViewCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageViewCnt_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","cbo_pageViewCnt:4",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"VOC No\"/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"소분류\"/><Cell col=\"4\" text=\"주문품목번호\"/><Cell col=\"5\" text=\"상품ID\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"회원명\"/><Cell col=\"8\" text=\"완료예정일\"/><Cell col=\"9\" text=\"VOC 상태\"/><Cell col=\"10\" text=\"요청일시\"/><Cell col=\"11\" text=\"접수일시\"/><Cell col=\"12\" text=\"처리완료일시\"/><Cell col=\"13\" text=\"완료일시\"/></Band><Band id=\"body\"><Cell text=\"bind:VOC_ITM_NM\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"1\" text=\"bind:VOC_GCLS_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:VOC_MCLAS_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:VOC_SCLS_NM\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:ODR_ITM_NM\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"5\" text=\"bind:PRD_ID_VIEW\" textDecoration=\"none\" displaytype=\"text\" expr=\"PRD_ID_VIEW == 0 ? &quot;상품정보없음&quot; : PRD_ID_VIEW\"/><Cell col=\"6\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MSKD_ODRPSN_NM\"/><Cell col=\"8\" text=\"bind:VOC_CMPL_HPE_DTM\"/><Cell col=\"9\" text=\"bind:VOC_STATS_NM\"/><Cell col=\"10\" text=\"bind:REG_DTM\"/><Cell col=\"11\" text=\"bind:ACP_CLOS_DTM\"/><Cell col=\"12\" text=\"bind:PROC_CLOS_DTM\"/><Cell col=\"13\" text=\"bind:CMPL_CLOS_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_salsChrCd","value","ds_search","SALS_CHR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_salsTeamCd","value","ds_search","SALS_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_odrItmNm","value","ds_search","ODR_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_salsChrNm","value","ds_search","SALS_CHR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_salsTeamNm","value","ds_search","SALS_TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_vocItmNm","value","ds_search","VOC_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_fromYymm","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_toYymm","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cbo_period","value","ds_search","PERIOD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cbo_vocGclsCd","value","ds_search","VOC_GCLS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cbo_vocMclasCd","value","ds_search","VOC_MCLAS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cbo_vocSclsCd","value","ds_search","VOC_SCLS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cbo_vocStatsCd","value","ds_search","VOC_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.rdo_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.edt_oprUnitId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.edt_odrpsnId","value","ds_search","ODRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_08.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_08.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_08.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_08.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
        this.fv_totalCount = 0;
        this.bExtend = false;
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

        	//상세조회영역 숨김
        	this.fn_changeSearchArea(true);
        	this.setExtend(false);

        	this.copyPaste.addGrid(this.grd_list);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //VOC대분류조회
        this.fn_searchGclsList = function()	{
        	var sSvcId = "selectGclsList";
        	var sUrl = "/bo/voc/cust/ssp_bo_cn_08/select-voc-gcls-list.do";
        	var inDs = "ds_searchCls=ds_searchCls";
        	var outDs = "ds_gclsList=ds_gclsList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //VOC중분류조회
        this.fn_searchMclasList = function()	{
        	var sSvcId = "selectMclasList";
        	var sUrl = "/bo/voc/cust/ssp_bo_cn_08/select-voc-mclas-list.do";
        	var inDs = "ds_searchCls=ds_searchCls";
        	var outDs = "ds_mclasList=ds_mclasList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //VOC소분류조회
        this.fn_searchSclsList = function()	{
        	var sSvcId = "selectSclsList";
        	var sUrl = "/bo/voc/cust/ssp_bo_cn_08/select-voc-scls-list.do";
        	var inDs = "ds_searchCls=ds_searchCls";
        	var outDs = "ds_sclsList=ds_sclsList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //조회
        this.fn_search = function()	{
        	var sSvcId = "selectList";
        	var sUrl = "/bo/voc/cust/ssp_bo_cn_08/select-voc-status-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
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
        	}
        	else if(svcID == "selectGclsList") {
        		this.div_search.form.cbo_vocGclsCd.set_index(0);
        	}
        	else if(svcID == "selectMclasList") {
        		this.div_search.form.cbo_vocMclasCd.set_index(0);
        	}
        	else if(svcID == "selectSclsList") {
        		this.div_search.form.cbo_vocSclsCd.set_index(0);
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
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//search div 초기 설정
        	this.div_search.uMinSize = 94;
        	this.div_search.uMaxSize = 125;

        	this.div_search.form.Static04_00_00.uEssentiel = "true";

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

        	this.div_search.form.cbo_period.set_index(0);
        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd); //회사코드 설정
        	this.ds_search.setColumn(0,"FROM_DATE", this.gfn_addMonth(this.gfn_getDate(),-1));
        	this.ds_search.setColumn(0,"TO_DATE", this.gfn_getDate());

        	//VOC분류 조회 및 설정
        	this.fn_searchGclsList();
        	this.ds_mclasList.addRow();
        	this.ds_mclasList.setColumn(0,"MCLAS_NM","전체");
        	this.ds_sclsList.addRow();
        	this.ds_sclsList.setColumn(0,"SCLS_NM","전체");

        	this.div_search.form.cbo_vocStatsCd.set_index(0);

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList					= "grd_list";
        	this.grd_list.uRightMouse		= "true";
        	this.grd_list.uPersonalFlag		= "true";
        	this.grd_list.uDefaultFormat	= "VOC_ITM_NM,VOC_GCLS_NM,VOC_MCLAS_NM,VOC_SCLS_NM,ODR_ITM_NM,PRD_ID_VIEW,PRD_NM,MSKD_ODRPSN_NM,VOC_CMPL_HPE_DTM,VOC_STATS_NM,REG_DTM,ACP_CLOS_DTM,PROC_CLOS_DTM,CMPL_CLOS_DTM";
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.setExtend = function(bVal)
        {
        	if(bVal)
        	{
        		this.div_extend.form.btn_extend.set_text("기본조회 ∧");
        		this.bExtend = true;
        		this.fn_changeSearchArea(false);
        	}
        	else
        	{
        		this.div_extend.form.btn_extend.set_text("상세조회 ∨");
        		this.bExtend = false;
        		this.fn_changeSearchArea(true);
        	}
        }

        this.fn_changeSearchArea = function(flag) {
        	// 접기
        	if (flag == true) {
        		this.div_search.set_height(this.div_search.uMinSize);
        	}
        	// 펼치기
        	else {
        		this.div_search.set_height(this.div_search.uMaxSize);
        	}
        	this.resetScroll();
        };

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
        	/*
        	수정요청사항
        	조회기간 1개월 제한 삭제
        	2022-05-24 유창호
        	if(this.gfn_addMonth(this.ds_search.getColumn(0,"FROM_DATE"),1) < this.ds_search.getColumn(0,"TO_DATE")) {
        		alert(this.fn_getMessage("ERRS000241", "1개월 이상")); //조회기간은 &1을(를) 초과할 수 없습니다.
        		return;
        	}
        	*/

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        	this.ds_search.setColumn(0,"START_NUM",this.div_paging.uPageNum);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);

        	this.fn_search();
        };


        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"VOC목록"});
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	for(i=0; i<this.ds_search.colcount; i++) {
        		this.ds_search.setColumn(0, i, "");
        	}

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        	this.ds_search.setColumn(0,"START_NUM",this.div_paging.uPageNum);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);

        	this.div_search.form.cbo_period.set_index(0);
        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd); //회사코드 설정
        	this.ds_search.setColumn(0,"FROM_DATE", this.gfn_addMonth(this.gfn_getDate(),-1));
        	this.ds_search.setColumn(0,"TO_DATE", this.gfn_getDate());

        	this.ds_mclasList.clearData();
        	this.ds_mclasList.addRow();
        	this.ds_mclasList.setColumn(0,"MCLAS_NM","전체");
        	this.ds_sclsList.clearData();
        	this.ds_sclsList.addRow();
        	this.ds_sclsList.setColumn(0,"SCLS_NM","전체");

        	this.div_search.form.cbo_vocGclsCd.set_index(0);
        	this.div_search.form.cbo_vocMclasCd.set_index(0);
        	this.div_search.form.cbo_vocSclsCd.set_index(0);
        	this.div_search.form.cbo_vocStatsCd.set_index(0);
        	this.div_search.form.rdo_custSprCd.set_index(0);
        };

        this.cbo_pageViewCnt_onitemchanged = function(obj,e)
        {
        	this.btn_search_onclick();
        };

        this.btn_salsChrCd_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				, empNo : this.ds_search.getColumn(0,"SALS_CHR_CD")
        				, oprtrNm : this.ds_search.getColumn(0,"SALS_CHR_NM")
        			};

        	var options = {title : "서비스담당자조회"};
        	this.gfn_openPopup("salsChrCdPopup", "CC::SSP_BO_CN_30.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"SALS_CHR_CD",retJson.EMP_NO);
        		this.ds_search.setColumn(0,"SALS_CHR_NM",retJson.OPRTR_NM);

        	}, options);

        };

        this.btn_salsTeamCd_onclick = function(obj,e)
        {
        	var params = { searchType : "2"
        				, coCd : this.ds_search.getColumn(0,"CO_CD")
        				, teamCd : this.ds_search.getColumn(0,"SALS_TEAM_CD")
        			};

        	var options = {title : "담당팀조회"};
        	this.gfn_openPopup("salsTeamCdPopup", "CC::SSP_BO_PP_26.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"SALS_TEAM_CD",retJson.TEAM_CD);
        		this.ds_search.setColumn(0,"SALS_TEAM_NM",retJson.TEAM_NM);

        	}, options);

        };

        this.btn_vocItmNm_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_vocItmNm };

        	this.gfn_openPopup('vocItmNmPopup', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"VOC_ITM_NM",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});
        };


        this.btn_odrItmNm_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_odrItmNm };

        	this.gfn_openPopup('odrItmNmPopup', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"ODR_ITM_NM",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});

        };

        this.btn_prdId_onclick = function(obj,e)
        {
        	var params = { coCd      : '1000'
        	             , prdLikeYn : 'Y'
        	};

        	var options = {title : "상품조회"};
        	this.gfn_openPopup("prdIdPopup", "PR_POP::SSP_BO_PP_38.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"PRD_ID", retJson.PRD_ID);
        		this.ds_search.setColumn(0,"PRD_NM", retJson.PRD_NM);
        	}, options);

        };

        this.btn_bzplcId_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				, bzplcId : this.ds_search.getColumn(0, "BZPLC_ID")
        			};

        	var options = {title : "사업장조회"};
        	this.gfn_openPopup("bzplcIdPopup", "CO_POP::SSP_BO_PP_14.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		var sIdList = "";
        		var sNmList = "";
        		for(var i=0; i<retJson.length; i++){
        			var rowData = JSON.parse(retJson[i]);
        			sIdList += rowData.BZPLC_ID +",";
        		}
        		this.ds_search.setColumn(0,"BZPLC_ID", sIdList.replace(/,\s*$/, ""));

        	}, options);

        };

        this.btn_bzplcIdText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_bzplcId };

        	this.gfn_openPopup('bzplcIdTextPopup', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"BZPLC_ID",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});

        };

        this.btn_oprUnitId_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				, bzplcId : this.ds_search.getColumn(0, "BZPLC_ID")
        				, oprUnitId : this.ds_search.getColumn(0, "OPR_UNIT_ID")
        			};

        	var options = {title : "운영단위조회"};
        	this.gfn_openPopup("bzplcIdPopup", "CO_POP::SSP_BO_PP_23.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		var sIdList = "";
        		var sNmList = "";
        		for(var i=0; i<retJson.length; i++){
        			var rowData = JSON.parse(retJson[i]);
        			sIdList += rowData.OPR_UNIT_ID +",";
        		}
        		this.ds_search.setColumn(0,"OPR_UNIT_ID", sIdList.replace(/,\s*$/, ""));

        	}, options);

        };

        this.btn_oprUnitIdText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_oprUnitId };

        	this.gfn_openPopup('oprUnitIdTextPopup', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"OPR_UNIT_ID",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});

        };

        this.btn_odrpsnId_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				, bzplcId : this.ds_search.getColumn(0, "BZPLC_ID")
        				, oprUnitId : this.ds_search.getColumn(0, "OPR_UNIT_ID")
        				, mbrId : this.ds_search.getColumn(0, "ODRPSN_ID")
        			};

        	var options = {title : "회원조회"};
        	this.gfn_openPopup("odrpsnIdPopup", "CO_POP::SSP_BO_PP_24.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_search.setColumn(0,"ODRPSN_ID", retJson.MBR_ID);
        	}, options);

        };

        this.cbo_vocGclsCd_onitemchanged = function(obj,e)
        {
        	//소분류 초기화
        	this.ds_sclsList.clearData();
        	this.ds_sclsList.addRow();
        	this.ds_sclsList.setColumn(0,"SCLS_NM","전체");
        	this.div_search.form.cbo_vocSclsCd.set_index(0);

        	this.ds_searchCls.setColumn(0,"VOC_GCLS_CD",e.postvalue);
        	this.fn_searchMclasList();
        };

        this.cbo_vocMclasCd_onitemchanged = function(obj,e)
        {
        	this.ds_searchCls.setColumn(0,"VOC_MCLAS_CD",e.postvalue);
        	this.fn_searchSclsList();

        };

        this.btn_extend_onclick = function(obj,e)
        {
        	if(this.bExtend == false)	this.setExtend(true);
        	else						this.setExtend(false);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(this.gfn_getBindColumnNameByIndex(obj, e.col) == "VOC_ITM_NM") {
        		var width = this.getOwnerFrame().width; //1336;
        		var height = this.getOwnerFrame().height;//846;
        		var nLeft = 0;
        		var nTop = 0;
        		nLeft = system.clientToScreenX(this, nLeft);
        		nTop  = system.clientToScreenY(this, nTop);

        		var coCd = this.ds_list.getColumn(e.row,"CO_CD");
        		var vocNo = this.ds_list.getColumn(e.row,"VOC_NO");
        		var vocItmNo = this.ds_list.getColumn(e.row,"VOC_ITM_NO");

        		var bzplcId 			= this.ds_list.getColumn(e.row,"BZPLC_ID"				);
        		var exceptProcOdrNo 	= this.ds_list.getColumn(e.row,"EXCEPT_PROC_ODR_NO"		);
        		var exceptProcOdrItmNo 	= this.ds_list.getColumn(e.row,"EXCEPT_PROC_ODR_ITM_NO"	);


        		var objectId =""
        		var nRow = -1;
        		var isExisted = false;

        		objectId =vocNo + "_" + vocItmNo;//+ "-" + odrItmNo;
        		isExisted = this.fn_getDetail(objectId);

        		if( isExisted == false ) 	{
        			var objParam = { coCd:coCd, vocNo:vocNo, vocItmNo:vocItmNo, bzplcId:bzplcId, exceptProcOdrNo:exceptProcOdrNo, exceptProcOdrItmNo:exceptProcOdrItmNo };
        			var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        			nexacro.open(objectId, "CC::SSP_BO_CN_10.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
        			//this.gfn_openPopup(objectId, 'OD::SSP_BO_OA_02.xfdl', objParam, '', { title: '주문품목번호 상세정보', titlebar: 'true', autosize: 'false' });
        		}
        		else	{
        			this.fn_topmost(objectId,odrNo,odrItmNo,bzplcId,odrpsnId);
        		}
        	}
        	else if(this.gfn_getBindColumnNameByIndex(obj, e.col) == "ODR_ITM_NM") {
        		var width = this.getOwnerFrame().width; //1336;
        		var height = this.getOwnerFrame().height;//846;
        		var nLeft = 0;
        		var nTop = 0;
        		nLeft = system.clientToScreenX(this, nLeft);
        		nTop  = system.clientToScreenY(this, nTop);

        		var odrNo = this.ds_list.getColumn(e.row,"ODR_NO");
        		var odrItmNo = this.ds_list.getColumn(e.row,"ODR_ITM_NO");
        		var odrItmNm = this.ds_list.getColumn(e.row,"ODR_ITM_NM");
        		var bzplcId = this.ds_list.getColumn(e.row,"BZPLC_ID");
        		var odrpsnId = this.ds_list.getColumn(e.row,"ODRPSN_ID");
        		var objectId =""
        		var nRow = -1;
        		var isExisted = false;

        		if(this.gfn_isNull(odrItmNm)) {
        			//alert(this.fn_getMessage("ERRS000226", "주문번호")); //올바른 &1 형식이 아닙니다.
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
        	else if(this.gfn_getBindColumnNameByIndex(obj, e.col) == "PRD_ID_VIEW") {
        		//상품주문번호 클릭이벤트 제거 2022-06-17
        		return false
        		var prdId = this.ds_list.getColumn(e.row,"PRD_ID");
        		if(this.gfn_isNull(prdId)) {
        			//alert(this.fn_getMessage("ERRS000226", "상품번호")); //올바른 &1 형식이 아닙니다.
        			return;
        		}

        		var params = { coCd : this.ds_list.getColumn(e.row,"CO_CD")
        					  , prdId : prdId }
        		this.gfn_openPopup("prdDtlPop", "PR::SSP_BO_PA_13.xfdl", params, function(sPopupId, sRetValue) {
        		}, {titlebar:"true"});

        	}
        };

        //체크박스 체크여부
        this.div_search_CheckBox00_onclick = function(obj,e)
        {
        	var chkVal = obj.value;
        	if(chkVal == '1'){
        		this.div_search.form.cbo_vocStatsCd.set_enable(false);
        		this.ds_search.setColumn(0, "VOC_STATS_CD", "00");
        	} //체크
        	if(chkVal == '0'){
        		this.div_search.form.cbo_vocStatsCd.set_enable(true);
        		this.ds_search.setColumn(0, "VOC_STATS_CD", "");
        	} //해제
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        this.SSP_BO_CN_08_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_CN_08_onkeyup,this);
            this.div_search.form.btn_salsChrCd.addEventHandler("onclick",this.btn_salsChrCd_onclick,this);
            this.div_search.form.btn_salsTeamCd.addEventHandler("onclick",this.btn_salsTeamCd_onclick,this);
            this.div_search.form.btn_vocNo.addEventHandler("onclick",this.btn_vocItmNm_onclick,this);
            this.div_search.form.btn_odrItmNm.addEventHandler("onclick",this.btn_odrItmNm_onclick,this);
            this.div_search.form.btn_prdId.addEventHandler("onclick",this.btn_prdId_onclick,this);
            this.div_search.form.cbo_period.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.div_search.form.cbo_vocGclsCd.addEventHandler("onitemchanged",this.cbo_vocGclsCd_onitemchanged,this);
            this.div_search.form.cbo_vocMclasCd.addEventHandler("onitemchanged",this.cbo_vocMclasCd_onitemchanged,this);
            this.div_search.form.cbo_vocSclsCd.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.div_search.form.cbo_vocStatsCd.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.div_search.form.btn_bzplcIdText.addEventHandler("onclick",this.btn_bzplcIdText_onclick,this);
            this.div_search.form.btn_oprUnitIdText.addEventHandler("onclick",this.btn_oprUnitIdText_onclick,this);
            this.div_search.form.btn_odrpsnId.addEventHandler("onclick",this.btn_odrpsnId_onclick,this);
            this.div_search.form.btn_bzplcId.addEventHandler("onclick",this.btn_bzplcId_onclick,this);
            this.div_search.form.btn_oprUnitId.addEventHandler("onclick",this.btn_oprUnitId_onclick,this);
            this.div_search.form.vocStatsCdChkBox.addEventHandler("onclick",this.div_search_CheckBox00_onclick,this);
            this.div_extend.form.btn_extend.addEventHandler("onclick",this.btn_extend_onclick,this);
            this.div_extend.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_extend.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.cbo_pageViewCnt.addEventHandler("onitemchanged",this.cbo_pageViewCnt_onitemchanged,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
