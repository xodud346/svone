(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_01");
            this.set_titletext("공용상품가격관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_EXPS_SALSPRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDate", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDateTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDispStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboPrdStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\"/><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">0</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">종결</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDispYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">공급가능상태</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\"/></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDispStatsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_download",null,"156","110","24","149",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("대용량다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_srchInit","btn_download:4","156","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"212","82","24","343",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown","Button01:4","212","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","221","370","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","btn_srchInit:4","156","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","246",null,null,"20","112",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"160\"/><Column size=\"320\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"CO_CD\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"공급가능상태\"/><Cell col=\"4\" text=\"카테고리ID\"/><Cell col=\"5\" text=\"카테고리\"/><Cell col=\"6\" text=\"공용전용구분\"/><Cell col=\"7\" text=\"상품상태\"/><Cell col=\"8\" text=\"진열상태\"/><Cell col=\"9\" text=\"상품명\"/><Cell col=\"10\" text=\"대표규격\"/><Cell col=\"11\" text=\"제조원ID\"/><Cell col=\"12\" text=\"제조원명\"/><Cell col=\"13\" text=\"주문단위\"/><Cell col=\"14\" text=\"원산지\"/><Cell col=\"15\" text=\"최저매입가\"/><Cell col=\"16\" text=\"최저매입협력사ID\"/><Cell col=\"17\" text=\"최저매입협력사명\"/><Cell col=\"18\" text=\"RnD기준가\"/><Cell col=\"19\" text=\"List Price\"/><Cell col=\"20\" text=\"기준판매가\"/><Cell col=\"21\" text=\"가격유효기간\"/><Cell col=\"22\" text=\"일반고객노출판매가\"/><Cell col=\"23\" text=\"최소주문수량\"/><Cell col=\"24\" text=\"배수주문수량\"/><Cell col=\"25\" text=\"재고여부\"/><Cell col=\"26\" text=\"평균배송일\"/><Cell col=\"27\" text=\"구매담당자ID\"/><Cell col=\"28\" text=\"구매담당자명\"/><Cell col=\"29\" text=\"등록일\"/><Cell col=\"30\" text=\"가격정보갱신일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:PRD_ID\" displaytype=\"decoratetext\" expr=\"PRD_ID  == &apos;&apos; ? PRD_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+PRD_ID+&quot;&lt;/u&gt;&quot;\" color=\"blue\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_dispYn(SPL_PSB_YN)\"/><Cell col=\"4\" text=\"bind:PRD_CLCD\"/><Cell col=\"5\" text=\"bind:PRD_CLCD_NM\"/><Cell col=\"6\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_prdStats(MRO_PRD_STATS_CD)\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"9\" text=\"bind:PRD_NM\"/><Cell col=\"10\" text=\"bind:ATTR_VAL\"/><Cell col=\"11\" text=\"bind:MNFR_NO\"/><Cell col=\"12\" text=\"bind:MNFR_NM\"/><Cell col=\"13\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"14\" text=\"bind:ORGPLC_CTRY_CD\"/><Cell col=\"15\" text=\"bind:PRD_PRC\"/><Cell col=\"16\" text=\"bind:CPRTCP_ID\"/><Cell col=\"17\" text=\"bind:CPRTCP_NM\"/><Cell col=\"18\" text=\"bind:STPRC\"/><Cell col=\"19\" text=\"bind:DSTRB_STD_PRC\"/><Cell col=\"20\" text=\"bind:SSP_CURR_BSS_SALSPRC\"/><Cell col=\"21\" text=\"bind:BSS_SALSPRC_DTM\"/><Cell col=\"22\" text=\"bind:CUST_EXPS_SALSPRC\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:MIN_ODR_QTY\"/><Cell col=\"24\" text=\"bind:MULT_SELL_UNIT_QTY\"/><Cell col=\"25\" text=\"bind:INVN_STATS_NM\"/><Cell col=\"26\" text=\"bind:DLV_LT\"/><Cell col=\"27\" text=\"bind:OPRTR_ID\"/><Cell col=\"28\" text=\"bind:OPRTR_NM\"/><Cell col=\"29\" text=\"bind:REG_DTM\"/><Cell col=\"30\" text=\"bind:REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","grd_list:30",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","174","209","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","25","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","25","51",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","25","82",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","25","113",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","20","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","20","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dateType","20","113","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("기준일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","450","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dispStats","450","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("진열상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mroReprAttr","450","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsnNm","880","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dispYn","880","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("진열이상여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","880","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_prdStats","155","55","230","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_comboPrdStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_taborder("21");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","155","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm2","235","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMulti","edt_prdNm2:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiText","btn_prdIdMulti:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","664","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMulti","edt_prdClsfNm:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiText","btn_prdClcdMulti:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","585","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","1015","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","1094","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdMulti","edt_regpsnNm:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdMultiText","btn_regpsnIdMulti:5","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispStats","585","55","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_comboDispStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispYn","1015","55","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_comboDispYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","155","86","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdNmMultiText","390","86","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroReprAttr","585","86","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","1015","86","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1094","86","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNoMulti","edt_mnfrNm:5","86","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNoMultiText","btn_mnfrNoMulti:5","86","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dateType","155","117","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_dateType_innerdataset = new nexacro.NormalDataset("cbo_dateType_innerdataset", obj);
            cbo_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_START","290","117","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","435","117","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_END","449","117","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("cal_WF_calendar");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","594","117","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_comboDate");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","btn_excelDown:4","212","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","Button02:4","212","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","146","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","237","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","796","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","180","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_01_BAK.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_LA_01_BAK.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_01.xfdl
        CREATION DATES : 2022/03/11
        CREATER : 이택우
        *******************************************************************************/
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//기간 설정
        	this.fn_setSearchDate();

        	this.ds_search.setColumn(0,"CO_CD","1000");//회사코드
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//SSP : 10, RND : 20
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분

        	this.fn_search(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //공통코드조회
        this.fn_commonCodeSearch = function(){

            var strDs    = "ds_comboDateTemp|ds_comboDispStatsTemp";                      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|DISP_STATS_CD";         					  // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T";                                   					  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      					  // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                     , strLgcd
                                     , strComb
                                     , strOptn
                                     , svcId);

        	/*
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comboDateTemp=ds_output1 ds_comboDispStatsTemp=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,DISP_STATS_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	*/
        };

        //조회
        this.fn_search = function(bInit)	{
        	var sSvcId = "search";
        	var sUrl = "/rd/pubPrdPrcMng/selectPcPrdPrcDtls.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_main=ds_output1";
        	var arg = "";
        	var callback = "fn_callBack";

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_page.value,"fn_pageCallback");
        			this.grd_list.setCellProperty("head", 0, "text", "0");
        			break;
        		case "commonCodeSearch" :
        			//진열상태
        // 			this.ds_comboDispStats.insertRow(0);
        // 			this.ds_comboDispStats.setColumn(0,"COM_DTL_CD","0");
        // 			this.ds_comboDispStats.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.cbo_prdStats.set_value('');
        			this.cbo_dispYn.set_value("Y");
        			this.ds_comboDispStats.appendData(this.ds_comboDispStatsTemp,true);
        			this.ds_comboDate.appendData(this.ds_comboDateTemp, true);
        			break;
        		default:
        			break;
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){

        	var jsonData = JSON.parse(sRetValue);

        	switch(sPopupId){
        		case "sspBoLa04":
        			this.fn_search(true);
        			break;
        		case "btn_prdClcdMulti" :
        			this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        			this.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        			break;
        		case "btn_mnfrNoMulti" :
        			this.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        			this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        			break;
        		case "oprtrInfoPop" :
        			this.edt_regpsnId.set_value(jsonData.OPRTR_ID);
        			this.edt_regpsnNm.set_value(jsonData.OPRTR_NM);
        			break;
        		case "btn_prdIdMulti" :
        			var prdStr = "";
        			var prdNm = "";
        			if(jsonData.length > 0){
        				for(var i = 0; i<jsonData.length; i++){
        					prdStr += jsonData[i].PRD_ID + ",";
        					prdNm += jsonData[i].PRD_NM + ",";
        				}

        				this.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        				this.edt_prdNm2.set_value(prdNm.substring(0, prdNm.length-1));
        			}
        			break;
        		default :
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //멀티텍스트팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'btn_prdIdMultiText'){
        		this.edt_prdId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"PRD_ID", resParam.textValue);
        	}

        	if(objID == 'btn_prdClcdMultiText'){
        		this.edt_prdClcd.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"PRD_CLCD", resParam.textValue);
        	}

        	if(objID == 'btn_regpsnIdMultiText'){
        		this.edt_regpsnId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"REGPSN_ID", resParam.textValue);
        	}

        	if(objID == 'btn_prdNmMultiText'){
        		this.edt_prdNm.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"PRD_NM", resParam.textValue);
        	}

        	if(objID == 'btn_mnfrNoMultiText'){
        		this.edt_mnfrNo.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"MNFR_NO", resParam.textValue);
        	}

        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
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
        this.cfn_formInit = function(){
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
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

        	var term = this.cmb_inqPerdSprCd.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1   1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	2개월
        	6	3개월
        	7	6개월
        	8	1년
        	*/
        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -1);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -2);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "8" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}

            this.cal_DTM_START.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	this.cal_DTM_END.set_value(sToday);
        };

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {};

        	if( type == "TARGET" ){
        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::operateUnitMultiPopup.xfdl", objParam, "fn_popupCallback");

        	} else if( type == "OPRTR_INFO" ){
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_CN_26.xfdl", objParam, "fn_popupCallback");

        	}
        }

        //프로그램ID 수정여부 체크
        this.fn_pgmIdUpdCheck = function(currow){
        	var sPgmId = this.ds_pgmMng.getColumn(currow, "PGM_ID");
        	var rowType = this.ds_pgmMng.getRowType(currow);

        	if(sPgmId == undefined || rowType == 2){
        		return "normal";
        	}else{
        		return "none";
        	}
        };

         /**
         * @class dataSet의 Row 중에서 변경된 내용이 있는지 여부.CHK 제외
         */
        this.fn_gridUpdateCheck = function (objDs){
        	var bFlag = false;
        	var arrayIds = objDs.colinfos._idArray;

        	for(var i = 0; i < objDs.rowcount; i++){
        		var sRowType = objDs.getRowType(i);

        		if(sRowType == 2 || sRowType == 4){
        			for(var idx in arrayIds){
        				if( arrayIds[idx] != "CHK"){
        					if(this.gfn_isUpdateColumn(objDs, i, arrayIds[idx])){
        						bFlag = true;
        					}
        				}
        			}
        		}
        	}
        	return bFlag;
        };

        //그리드 헤더 특수문자 제거
        this.gfn_removeCharValue = function(strValue){
        	var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>▲▼";

	for (i = 0; i < strValue.length; i++) {
        		for (j = 0; j < strSpecial.length; j++) {
        			if (strValue.charAt(i) == strSpecial.charAt(j))
        			strValue = strValue.replace(strValue.charAt(i), "");
        		}
        	}

        	return strValue;
        };

        //공급가능상태
        this.fn_dispYn = function(arg)
        {
        	if(arg == "Y"){
        		return "O";
        	}
        }

        //공용전용
        this.fn_pubOnlySprCd = function(arg)
        {
        	if(arg == "P"){
        		return "공용";
        	}else if(arg == "O"){
        		return "전용";
        	}
        }

        // 진열상태
        this.fn_dispStats = function(arg)
        {
        	if(arg == ""){
        		return "전체";
        	}else if(arg == "10"){
        		return "진열";
        	}else if(arg == "20"){
        		return "미진열";
        	}else if(arg == "30"){
        		return "일시품절";
        	}else if(arg == "40"){
        		return "단종";
        	}else{
        		return "전체";
        	}
        }

        // 상품상태
        this.fn_prdStats = function(arg)
        {
        	if(arg == "0"){
        		return "사용";
        	}else if(arg == "10"){
        		return "미사용";
        	}else if(arg == "20"){
        		return "종결";
        	}else{
        		return "";
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //추가 click 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = this.ds_pgmMng.addRow();
        	this.ds_pgmMng.setColumn(nRow, "USE_YN", "Y");
        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제 click 이벤트
        this.btn_del_onclick = function(obj,e){
        	var delArr = [];
        	var chkCnt = this.ds_pgmMng.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_pgmMng.rowcount; i++){
        			if(this.ds_pgmMng.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_pgmMng.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delPgmMng.addRow();
        					this.ds_delPgmMng.setColumn(nRow, "PGM_ID", "Y");
        					this.ds_delPgmMng.copyRow(nRow, this.ds_pgmMng, i);
        				}
        			}
        		}
        		this.ds_pgmMng.deleteMultiRows(delArr);
        		if(this.ds_delPgmMng.rowcount > 0){
        			this.fn_delete();
        		}
        	}
        };

        //엑셀 click 이벤트
        this.btn_excelDown_onclick = function(obj,e)
        {
        	alert("엑셀다운로드");
        	var sFileName = "EXCEPL_EXPORT"; //file Name
        	var aGrid = [this.grd_list];
        	var aSht  = ["main_list"];

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);
        };

        //레이아웃 저장 click 이벤트
        this.btn_saveLayout_onclick = function(obj,e)
        {
        	alert("레이아웃 저장");
        };

        //레이아웃 초기화 click 이벤트
        this.btn_clearLayout_onclick = function(obj,e)
        {
        	alert("레이아웃 초기화");
        };


        //enterkey 입력시 다음 cell로 이동
        this.grd_list_onkeyup = function(obj,e){
        	if(e.keycode == 13){
        		obj.moveToNextCell();
        	}
        };


        this.ds_pgmMng_cancolumnchange = function(obj,e){
        	var eRow = e.row;

        	//프로그램ID 신규 입력시 중복체크 click 이벤트
        	if(e.columnid == "PGM_ID"){
        		var nCnt = this.ds_pgmMng.extractRowsNF("PGM_ID == '" + this.gfn_trim(e.newvalue) + "'");
        		if(nCnt.length >= 1){
        			alert("프로그램ID : "+ e.newvalue + "가 중복되었습니다.");
        			return false;
        		}
        	}
        };

        //초기화 click 이벤트
        this.btn_srchInit_onclick = function(obj,e)
        {
        	var objDate = new Date();
        	var today = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
        	this.ds_search.reset();

        	this.ds_search.setColumn(this.ds_search.rowposition,"PRD_ID","");
        	this.ds_search.setColumn(this.ds_search.rowposition,"PRD_NM","");
        	this.edt_prdId.set_value('');
        	this.edt_prdNm.set_value('');
        	this.edt_prdNm2.set_value('');
        	this.edt_prdClcd.set_value('');
        	this.edt_prdClsfNm.set_value('');
        	this.edt_regpsnId.set_value('');
        	this.edt_regpsnNm.set_value('');
        	this.edt_mroReprAttr.set_value('');
        	this.edt_mnfrNo.set_value('');
        	this.edt_mnfrNm.set_value('');
        	this.cbo_prdStats.set_value('');
        	this.cbo_dispStats.set_value(0);
        	this.cbo_dispYn.set_value("Y");
        	this.cal_DTM_START.set_value(today);	//시작일
        	this.cal_DTM_END.set_value(today);	//종료일
        	this.cmb_inqPerdSprCd.set_value(0);	//일자단위
        };

        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "PRD_ID", this.edt_prdId.value);	//상품ID
        	this.ds_search.setColumn(0, "PRD_NM", this.edt_prdNm.value);	//상품명
        	this.ds_search.setColumn(0, "PRD_CLCD", this.edt_prdClcd.value);	//카테고리ID
        	this.ds_search.setColumn(0, "REGPSN_ID",this.edt_regpsnId.value); //등록자
        	//진열상태
        	if(this.cbo_dispStats.value == '0') this.ds_search.setColumn(0,"DISP_STATS_CD","");
        	else this.ds_search.setColumn(0, "DISP_STATS_CD",this.cbo_dispStats.value);
        	this.ds_search.setColumn(0, "MRO_PRD_STATS_CD",this.cbo_prdStats.value);//상품상태
        	this.ds_search.setColumn(0, "SPL_PSB_YN",this.cbo_dispYn.value);//진열이상여부
        	this.ds_search.setColumn(0, "MRO_REPR_ATTR",this.edt_mroReprAttr.value);//대표규격
        	this.ds_search.setColumn(0, "MNFR_NO",this.edt_mnfrNo.value) //제조사ID
        	this.ds_search.setColumn(0, "DATE_TYPE", this.cbo_dateType.value);	//등록일, 수정일 여부
        	this.ds_search.setColumn(0, "DATE_UNIT", this.cmb_inqPerdSprCd.value);	//날짜단위
        	this.ds_search.setColumn(0, "REG_DTM_START", this.cal_DTM_START.value);	//등록일자시작
        	this.ds_search.setColumn(0, "REG_DTM_END", this.cal_DTM_END.value);	//등록일자종료

        	this.fn_search(true);
        };


        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 2){ //상품ID 클릭
        	var objParam = {
        		coCd:this.ds_main.getColumn(this.ds_main.rowposition,"CO_CD")
        		, prdId:this.ds_main.getColumn(this.ds_main.rowposition,"PRD_ID")
        		, userId:this.userId
        	};
        	this.gfn_openPopup("sspBoLa04", "RD::SSP_BO_LA_04.xfdl", objParam);

        	}
        };


        this.btn_prdClcdMulti_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };


        this.btn_mnfrNoMulti_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        };

        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        this.btn_prdNmMultiText_onclick = function(obj,e)
        {
        	var params = {};
        		if(e.fromobject.id == 'btn_prdNmMultiText'){params = { textId : this.btn_prdNmMultiText }}	//상품명

        		var options = {};
        		options.title = "멀티 텍스트 팝업";

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);

        };

        this.btn_regpsnIdMultiText_onclick = function(obj,e)
        {
        	var params = {};
        		if(e.fromobject.id == 'btn_regpsnIdMultiText'){params = { textId : this.btn_regpsnIdMultiText }}	//담당자

        		var options = {};
        		options.title = "멀티 텍스트 팝업";

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);

        };

        this.btn_mnfrNoMultiText_onclick = function(obj,e)
        {
        	var params = {};
        		if(e.fromobject.id == 'btn_mnfrNoMultiText'){params = { textId : this.btn_mnfrNoMultiText }}	//제조원

        		var options = {};
        		options.title = "멀티 텍스트 팝업";

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);

        };

        this.btn_regpsnIdMulti_onclick = function(obj,e)
        {
        	this.fn_popup("OPRTR_INFO");
        };

        this.Button01_onclick = function(obj,e)
        {
        	alert('작업예정');
        };

        this.Button00_onclick = function(obj,e)
        {
        	alert('작업예정');
        };

        this.btn_prdIdMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_prdIdMultiText'){params = { textId : this.btn_prdIdMultiText }}	//상품ID

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_prdClcdMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_prdClcdMultiText'){params = { textId : this.btn_prdClcdMultiText }}	//카테고리

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_prdIdMulti_onclick = function(obj,e)
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        this.Button02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_download.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_srchInit.addEventHandler("onclick",this.btn_srchInit_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.cbo_prdStats.addEventHandler("onitemchanged",this.Combo00_00_onitemchanged,this);
            this.btn_prdIdMulti.addEventHandler("onclick",this.btn_prdIdMulti_onclick,this);
            this.btn_prdIdMultiText.addEventHandler("onclick",this.btn_prdIdMultiText_onclick,this);
            this.edt_prdClsfNm.addEventHandler("onchanged",this.edt_prdClsfNm_onchanged,this);
            this.btn_prdClcdMulti.addEventHandler("onclick",this.btn_prdClcdMulti_onclick,this);
            this.btn_prdClcdMultiText.addEventHandler("onclick",this.btn_prdClcdMultiText_onclick,this);
            this.btn_regpsnIdMulti.addEventHandler("onclick",this.btn_regpsnIdMulti_onclick,this);
            this.btn_regpsnIdMultiText.addEventHandler("onclick",this.btn_regpsnIdMultiText_onclick,this);
            this.btn_prdNmMultiText.addEventHandler("onclick",this.btn_prdNmMultiText_onclick,this);
            this.btn_mnfrNoMulti.addEventHandler("onclick",this.btn_mnfrNoMulti_onclick,this);
            this.btn_mnfrNoMultiText.addEventHandler("onclick",this.btn_mnfrNoMultiText_onclick,this);
            this.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.ds_main.addEventHandler("cancolumnchange",this.ds_pgmMng_cancolumnchange,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_pgmMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_LA_01_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
