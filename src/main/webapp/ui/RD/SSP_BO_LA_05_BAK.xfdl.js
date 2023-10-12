(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_05");
            this.set_titletext("전용상품가격관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SELL_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_comboDispStatsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboPrdStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\"/><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">20</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">종결</Col><Col id=\"COM_DTL_CD\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDispYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">공급가능상태</Col><Col id=\"COM_DTL_CD\">20</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\">0</Col></Row><Row><Col id=\"COM_DTL_CD\">10</Col><Col id=\"COM_DTL_CD_NM\">미선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bssSalsprcAplyYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00",null,"241","110","24","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("대용량다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"241","110","24","Button00:4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","250","370","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"187","60","24","22",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_srchInit",null,"187","60","24","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","277",null,null,"20","113",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"160\"/><Column size=\"320\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"CO_CD\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"공급가능상태\"/><Cell col=\"4\" text=\"사업장ID\"/><Cell col=\"5\" text=\"사업장\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위\"/><Cell col=\"8\" text=\"영업팀\"/><Cell col=\"9\" text=\"카테고리ID\"/><Cell col=\"10\" text=\"카테고리\"/><Cell col=\"11\" text=\"공용전용구분\"/><Cell col=\"12\" text=\"상품상태\"/><Cell col=\"13\" text=\"진열상태\"/><Cell col=\"14\" text=\"상품명\"/><Cell col=\"15\" text=\"대표규격\"/><Cell col=\"16\" text=\"제조원ID\"/><Cell col=\"17\" text=\"제조원명\"/><Cell col=\"18\" text=\"주문단위\"/><Cell col=\"19\" text=\"원산지\"/><Cell col=\"20\" text=\"최저매입가\"/><Cell col=\"21\" text=\"최저매입협력사ID\"/><Cell col=\"22\" text=\"최저매입협력사명\"/><Cell col=\"23\" text=\"RnD기준가\"/><Cell col=\"24\" text=\"List Price\"/><Cell col=\"25\" text=\"기준판매가\"/><Cell col=\"26\" text=\"가격유효기간\"/><Cell col=\"27\" text=\"일반고객노출판매가\"/><Cell col=\"28\" text=\"최소주문수량\"/><Cell col=\"29\" text=\"배수주문수량\"/><Cell col=\"30\" text=\"재고여부\"/><Cell col=\"31\" text=\"평균배송일\"/><Cell col=\"32\" text=\"구매담당자ID\"/><Cell col=\"33\" text=\"구매담당자명\"/><Cell col=\"34\" text=\"등록일\"/><Cell col=\"35\" text=\"가격정보갱신일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:PRD_ID\" displaytype=\"decoratetext\" expr=\"PRD_ID  == &apos;&apos; ? PRD_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+PRD_ID+&quot;&lt;/u&gt;&quot;\" color=\"blue\"/><Cell col=\"3\" text=\"\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"bind:PRD_CLCD\"/><Cell col=\"10\" text=\"bind:FULL_PRD_CLSF_NM\"/><Cell col=\"11\" text=\"expr:comp.parent.fn_pubOnlySprCd(PUB_ONLY_SPR_CD)\"/><Cell col=\"12\" text=\"expr:comp.parent.fn_prdStats(MRO_PRD_STATS_CD)\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"13\" text=\"expr:comp.parent.fn_dispStats(DISP_STATS_CD)\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"14\" text=\"bind:PRD_NM\"/><Cell col=\"15\" text=\"bind:MRO_REPR_ATTR\"/><Cell col=\"16\" text=\"bind:MNFR_NO\"/><Cell col=\"17\" text=\"bind:MNFR_NM\"/><Cell col=\"18\" text=\"bind:&apos;&apos;--주문단위\"/><Cell col=\"19\" text=\"bind:ORGPLC_CTRY_CD\"/><Cell col=\"20\" text=\"bind:BSS_PCPRC\"/><Cell col=\"21\" text=\"bind:BZPLC_ID\"/><Cell col=\"22\" text=\"bind:&apos;&apos;협력사명\"/><Cell col=\"23\" text=\"bind:STPRC\"/><Cell col=\"24\" text=\"bind:DSTRB_STD_PRC\"/><Cell col=\"25\" text=\"bind:BSS_SALSPRC\"/><Cell col=\"26\" text=\"bind:BSS_SALSPRC_STR_DTM\"/><Cell col=\"27\" text=\"bind:&apos;&apos;일반고객노출판매가\"/><Cell col=\"28\" text=\"bind:&apos;&apos;최소주문수량\"/><Cell col=\"29\" text=\"bind:&apos;&apos;배수주문수량\"/><Cell col=\"30\" text=\"bind:SAFT_INVN_YN\"/><Cell col=\"31\" text=\"bind:&apos;&apos;평균배송일\"/><Cell col=\"32\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"33\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"34\" text=\"bind:REG_DTM\"/><Cell col=\"35\" text=\"bind:REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"30","20","52",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","164","237","100","30",null,null,null,null,null,null,this);
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

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bzplcNm","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","51",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","20","82",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","20","113",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClsfNm","20","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","20","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","20","113","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","450","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_salsTeamNm","450","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dispStats","450","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("진열상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","880","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bssSellAplyYn","880","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("기준판매가적용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dispYn","880","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("진열이상여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","1016","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bssSellAplyYn","1016","55","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_bssSalsprcAplyYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","1016","117","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1096","117","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNoMulti","edt_mnfrNm:4","116","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNoMultiText","btn_mnfrNoMulti:4","117","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"241","82","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","20","144",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dateType","20","144","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("기준일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","595","148","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_comboDate");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_END","447","148","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("cal_WF_calendar");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","434","148","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_START","290","148","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dateType","156","148","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_dateType_innerdataset = new nexacro.NormalDataset("cbo_dateType_innerdataset", obj);
            cbo_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mroReprAttr","450","113","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","880","113","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsnNm","750","144","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","156","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","236","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","586","24","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","666","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","886","148","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","966","148","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regpsnId","edt_regpsnNm:4","148","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdMultiText","btn_regpsnId:4","148","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispYn","1016","86","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_comboDispYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("공급가능상태");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispStats","586","86","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_comboDispStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","156","117","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroReprAttr","586","117","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_00","0","176","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","210","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","266","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzpMulti","edt_bzplcNm:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzpMultiText","btn_bzpMulti:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","edt_oprUnitNm:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","btn_oprMulti:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm2","1095","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMulti","edt_prdNm2:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiText","btn_prdIdMulti:4","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","156","55","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","236","55","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_categoryPopup","edt_prdClsfNm:4","55","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamId","586","55","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"241","82","24","Button01:4",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("개별등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamMulti","edt_salsTeamId:4","56","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamMultiText","btn_salsTeamMulti:4","56","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_prdStats","156","86","230","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_comboPrdStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_taborder("72");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdNmMultiText","edt_prdNm:4","117","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
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
        this.registerScript("SSP_BO_LA_05_BAK.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_05.xfdl
        CREATION DATES : 2022/03/10
        CREATER : 이택우
        *******************************************************************************/

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
        	this.fn_setSearchDate();

        	this.ds_search.setColumn(0,"CO_CD","1000");//회사코드
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//SSP : 10, RND : 20
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분

        	//this.fn_search(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //공통코드조회
        this.fn_commonCodeSearch = function(){

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comboDateTemp=ds_output1 ds_comboDispStatsTemp=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,DISP_STATS_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
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
        			this.cbo_prdStats.set_value('');
        			this.cbo_dispYn.set_value(20);
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
        		case "btn_bzpMulti":
        			const cmpObj = JSON.parse(sRetValue);

        			var sIdList = "";
        			var sNmList = "";
        			for(var i=0; i<cmpObj.length; i++){
        				var rowData = JSON.parse(cmpObj[i]);
        				sIdList += rowData.BZPLC_ID +",";
        				sNmList += rowData.BZPLC_NM +",";
        			}
        			//this.Div00.form.edt_bzplcNm.set_value(sIdList.replace(/,\s*$/, ""));
        			//this.ds_search.setColumn(0,"BZPLC_ID", sIdList);
        			break;
        		case "btn_categoryPopup" :
        			this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        			this.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        			break;
        		case "btn_mnfrNoMulti" :
        			this.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        			this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        			break;
        		case "btn_regpsnId" :
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

        //멀티검색팝업 콜백함수
        this.fn_searchMultiPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	var sIdList = "";
        	var sNmList = "";
        	if(objID == 'btn_bzpMulti'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.BZPLC_ID +",";
        			sNmList += rtnData.BZPLC_NM +",";
        		}
        		this.edt_bzplcId.set_value(sIdList);
        		this.edt_bzplcNm.set_value(sNmList);
        		this.search_ds.setColumn(0, "BZPLC_ID", sIdList);
        	}

        	if(objID == 'btn_oprMulti'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);

        			sIdList += rtnData.OPR_UNIT_ID +",";
        			sNmList += rtnData.OPR_UNIT_NM +",";
        		}
        		this.edt_oprUnitId.set_value(sIdList);
        		this.edt_oprUnitNm.set_value(sNmList);
        		this.search_ds.setColumn(0, "OPR_UNIT_ID", sIdList);
        	}

        }

        //멀티텍스트팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'btn_bzpMultiText'){
        		this.edt_bzplcId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"BZPLC_ID", resParam.textValue);
        	}

        	if(objID == 'btn_oprMultiText'){
        		this.edt_oprUnitId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"OPR_UNIT_ID", resParam.textValue);
        	}

        	if(objID == 'btn_prdIdMultiText'){
        		this.edt_prdId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"PRD_ID", resParam.textValue);
        	}

        	if(objID == 'btn_salsTeamMultiText'){
        		this.edt_salsTeamId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"SALS_TEAM_ID", resParam.textValue);
        	}

        	if(objID == 'btn_prdNmMultiText'){
        		this.edt_prdNm.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"PRD_NM", resParam.textValue);
        	}

        	//제조원
        	if(objID == 'btn_mnfrNoMultiText'){
        		this.edt_mnfrNo.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"MNFR_NO", resParam.textValue);
        	}

        	//담당자
        	if(objID == 'btn_regpsnIdMultiText'){
        		this.edt_regpsnId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"REGPSN_ID", resParam.textValue);
        	}

        }

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

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

        	var term = this.cmb_inqPerdSprCd.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1주일
        	2	2주일
        	3	1개월
        	4	2개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "3" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -2);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}

            this.cal_DTM_START.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	this.cal_DTM_END.set_value(sToday);
        };

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
        	if(arg == ""){
        		return "전체";
        	}else if(arg == "10"){
        		return "사용";
        	}else if(arg == "20"){
        		return "미사용";
        	}else if(arg == "30"){
        		return "종결";
        	}else{
        		return "전체";
        	}
        }

        this.btn_bzpMulti_onclick = function(obj,e)
        {
        	var oArg = {};
        	if(e.fromobject.id == 'btn_bzpMulti'){params = { textId : this.btn_bzpMulti }}	 //사업장

        	var oOption = {};

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_searchMultiPopupCallback", oOption);
        };

        this.btn_bzpMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_bzpMultiText'){params = { textId : this.btn_bzpMultiText }}	//사업장

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_oprMulti_onclick = function(obj,e)
        {
        	var oArg = {};
        	if(e.fromobject.id == 'btn_oprMulti'){params = { textId : this.btn_oprMulti }}	 //운영단위

        	var oOption = {};

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_searchMultiPopupCallback", oOption);
        };

        this.btn_oprMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_oprMultiText'){params = { textId : this.btn_oprMultiText }}	//운영단위

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

        this.btn_categoryPopup_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };

        this.btn_prdIdMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_prdIdMultiText'){params = { textId : this.btn_prdIdMultiText }}	//상품ID

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_salsTeamMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_salsTeamMultiText'){params = { textId : this.btn_salsTeamMultiText }}	//영업팀

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_salsTeamMulti_onclick = function(obj,e)
        {
        	alert("영업팀");
        };

        this.btn_mnfrNoMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_mnfrNoMultiText'){params = { textId : this.btn_mnfrNoMultiText }}	//제조원

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_mnfrNoMulti_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        };

        this.btn_regpsnId_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_CN_26.xfdl", params, "fn_popupCallback", options);
        };

        this.btn_regpsnIdMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_regpsnIdMultiText'){params = { textId : this.btn_regpsnIdMultiText }}	//담당자

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_prdNmMultiText_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'btn_prdNmMultiText'){params = { textId : this.btn_prdNmMultiText }}	//상품명

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "BZPLC_ID", this.edt_bzplcId.value);	//사업장
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.edt_oprUnitId.value);	//운영단위
        	this.ds_search.setColumn(0, "PRD_ID", this.edt_prdId.value);	//상품ID
        	this.ds_search.setColumn(0, "PRD_CLCD", this.edt_prdClcd.value);	//카테고리ID
        	this.ds_search.setColumn(0, "SALS_TEAM_ID", this.edt_salsTeamId.value);	//영업팀
        	this.ds_search.setColumn(0, "BSS_SELL_APLY_YN", this.cbo_bssSellAplyYn.value);	//기준판매가적용여부

        	//진열상태
        	if(this.cbo_dispStats.value == '0') this.ds_search.setColumn(0,"DISP_STATS_CD","");
        	else this.ds_search.setColumn(0, "DISP_STATS_CD",this.cbo_dispStats.value);
        	//상품상태
        	this.ds_search.setColumn(0, "MRO_PRD_STATS_CD",this.cbo_prdStats.value);

        	this.ds_search.setColumn(0, "DISP_YN",this.cbo_dispYn.value);	//진열이상여부?
        	this.ds_search.setColumn(0, "PRD_NM", this.edt_prdNm.value);	//상품명
        	this.ds_search.setColumn(0, "MRO_REPR_ATTR",this.edt_mroReprAttr.value);//대표규격
        	this.ds_search.setColumn(0, "MNFR_NO",this.edt_mnfrNo.value) //제조사ID
        	this.ds_search.setColumn(0, "REGPSN_ID",this.edt_regpsnId.value); //등록자
        	this.ds_search.setColumn(0, "DATE_UNIT", this.cmb_inqPerdSprCd.value);	//날짜단위
        	this.ds_search.setColumn(0, "REG_DTM_START", this.cal_DTM_START.value);	//등록일자시작
        	this.ds_search.setColumn(0, "REG_DTM_END", this.cal_DTM_END.value);	//등록일자종료

        	this.fn_search(true);
        };

        //초기화 click 이벤트
        this.btn_srchInit_onclick = function(obj,e)
        {
        	var objDate = new Date();
        	var today = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
        	this.ds_search.reset();

        	this.edt_bzplcId.set_value('');
        	this.edt_bzplcNm.set_value('');
        	this.edt_oprUnitId.set_value('');
        	this.edt_oprUnitNm.set_value('');
        	this.edt_prdId.set_value('');
        	this.edt_prdNm.set_value('');
        	this.edt_prdNm2.set_value('');
        	this.edt_prdClcd.set_value('');
        	this.edt_prdClsfNm.set_value('');
        	this.edt_salsTeamId.set_value('');
        	this.cbo_bssSellAplyYn.set_value('');
        	this.cbo_prdStats.set_value('');
        	this.cbo_dispStats.set_value(0);
        	this.cbo_dispYn.set_value(20);
        	this.edt_prdNm.set_value('');
        	this.edt_mroReprAttr.set_value('');
        	this.edt_mnfrNo.set_value('');
        	this.edt_mnfrNm.set_value('');
        	this.edt_regpsnId.set_value('');
        	this.edt_regpsnNm.set_value('');
        	this.cal_DTM_START.set_value(today);	//시작일
        	this.cal_DTM_END.set_value(today);	//종료일
        	this.cmb_inqPerdSprCd.set_value(0);	//일자단위

        };

        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 2){ //상품ID 클릭

        		trace("CO_CD="+this.ds_main.getColumn(this.ds_main.rowposition,"CO_CD"));

        		var objParam = {
        			coCd:this.ds_main.getColumn(this.ds_main.rowposition,"CO_CD")
        			, prdId:this.ds_main.getColumn(this.ds_main.rowposition,"PRD_ID")
        			, userId:this.userId
        			, gubun:"2" //상세페이지
        		};
        		this.gfn_openPopup("sspBoLa04", "RD::SSP_BO_LA_06.xfdl", objParam);

        	}
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd:this.ds_main.getColumn(this.ds_main.rowposition,"CO_CD")
        		, prdId:this.ds_main.getColumn(this.ds_main.rowposition,"PRD_ID")
        		, userId:this.userId
        		, gubun:"1" //등록페이지
        	};
        	this.gfn_openPopup("sspBoLa04", "RD::SSP_BO_LA_06.xfdl", objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_srchInit.addEventHandler("onclick",this.btn_srchInit_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Static05.addEventHandler("onclick",this.Static05_onclick,this);
            this.btn_mnfrNoMulti.addEventHandler("onclick",this.btn_mnfrNoMulti_onclick,this);
            this.btn_mnfrNoMultiText.addEventHandler("onclick",this.btn_mnfrNoMultiText_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.btn_regpsnId.addEventHandler("onclick",this.btn_regpsnId_onclick,this);
            this.btn_regpsnIdMultiText.addEventHandler("onclick",this.btn_regpsnIdMultiText_onclick,this);
            this.btn_bzpMulti.addEventHandler("onclick",this.btn_bzpMulti_onclick,this);
            this.btn_bzpMultiText.addEventHandler("onclick",this.btn_bzpMultiText_onclick,this);
            this.btn_oprMulti.addEventHandler("onclick",this.btn_oprMulti_onclick,this);
            this.btn_oprMultiText.addEventHandler("onclick",this.btn_oprMultiText_onclick,this);
            this.btn_prdIdMulti.addEventHandler("onclick",this.btn_prdIdMulti_onclick,this);
            this.btn_prdIdMultiText.addEventHandler("onclick",this.btn_prdIdMultiText_onclick,this);
            this.btn_categoryPopup.addEventHandler("onclick",this.btn_categoryPopup_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.btn_salsTeamMulti.addEventHandler("onclick",this.btn_salsTeamMulti_onclick,this);
            this.btn_salsTeamMultiText.addEventHandler("onclick",this.btn_salsTeamMultiText_onclick,this);
            this.btn_prdNmMultiText.addEventHandler("onclick",this.btn_prdNmMultiText_onclick,this);
            this.ds_main.addEventHandler("cancolumnchange",this.ds_pgmMng_cancolumnchange,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_pgmMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_LA_05_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
