(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_KA_01");
            this.set_titletext("S-MRP 마스터 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BSS_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZ_DOMN_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_TP_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"MAX_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"GI_DUE_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"APRV_PRGS_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"TRNS_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SO_PRGS_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_ODR_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_AVAIL_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_TEAM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_SAFT_INVN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stockType", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mallSales", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">INVN_TP_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">INVN_STATS_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">REPR_PRD_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">PUB_ONLY_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comReprPrdSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comPubOnlySprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","35",null,"188","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","10",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","41",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","72",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_baseDate","20","10","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_partners","20","41","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mallSales","20","72","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("몰 판매 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_productIdPopup","828","14","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_productIdMemo","851","14","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_partners","428","45","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchasingManager","882","72","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("구매 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_productId","462","10","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_productId","602","14","222","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stockType","462","41","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("재고 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_stockType","602","45","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_stockType");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_mallSales","160","76","290","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_mallSales");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchaseTeam","462","72","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("구매팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_purchaseTeam","848","76","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_purchasingManager","1281","76","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_baseDate","160","14","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_partnersNm","274","45","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_partners","160","45","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_purchaseTeamNm","709","76","135","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_purchaseTeam","602","76","103","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_purchasingManagerNm","1126","76","151","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_purchasingManager","1022","76","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00","40","102",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mallSales00","20","102","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchasingManager00","882","102","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("MD 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_reprPrdSprCd","160","106","290","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_comReprPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchaseTeam00","462","102","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("공용 전용 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_psnMdPopup","1281","106","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","1126","106","151","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","1022","106","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_pubOnlySprCd","602","106","270","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_comPubOnlySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_resList","20","Div00:55",null,null,"20","108",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fillareatype("none");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_resList");
            obj.set_autoenter("none");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"120\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품 ID\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"제조원 ID\"/><Cell col=\"4\" text=\"제조원명\"/><Cell col=\"5\" text=\"주문단위\"/><Cell col=\"6\" text=\"재고 유형\"/><Cell col=\"7\" text=\"협력사 ID\"/><Cell col=\"8\" text=\"협력사명\"/><Cell col=\"9\" text=\"SSP 안전 재고\"/><Cell col=\"10\" text=\"안전 재고\"/><Cell col=\"11\" text=\"최대 재고\"/><Cell col=\"12\" text=\"입고예정수량\"/><Cell col=\"13\" text=\"결재 중 요청\"/><Cell col=\"14\" text=\"상품 재고\"/><Cell col=\"15\" text=\"운송 중 재고\"/><Cell col=\"16\" text=\"Open S/O\"/><Cell col=\"17\" text=\"SSP 진행 중 주문\"/><Cell col=\"18\" text=\"SSP 가용 재고\"/><Cell col=\"19\" text=\"몰 판매 여부\"/><Cell col=\"20\" text=\"대표상품구분\"/><Cell col=\"21\" text=\"공용전용구분\"/><Cell col=\"22\" text=\"구매팀\"/><Cell col=\"23\" text=\"구매 담당자\"/><Cell col=\"24\" text=\"MD 담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\" color=\"#0000ff\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MRO_REPR_ATTR\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MNFR_NO\"/><Cell col=\"4\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"6\" text=\"bind:INVN_TP_CD_NM\"/><Cell col=\"7\" text=\"bind:CPRTCP_ID\"/><Cell col=\"8\" text=\"bind:CPRTCP_KOR_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:SSP_SAFT_INVN_QTY\" displaytype=\"number\" textAlign=\"right\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"10\" text=\"bind:SAFT_INVN_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"11\" text=\"bind:MAX_INVN_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"12\" text=\"bind:GI_DUE_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"13\" text=\"bind:APRV_PRGS_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"14\" text=\"bind:PRD_INVN_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"15\" text=\"bind:TRNS_INVN_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"16\" text=\"bind:SO_PRGS_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"17\" text=\"bind:SSP_ODR_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"18\" text=\"bind:SSP_AVAIL_INVN_QTY\" textAlign=\"right\" displaytype=\"number\" maskeditmaskchar=\"###,###,###\"/><Cell col=\"19\" text=\"bind:INVN_STATS_CD_NM\"/><Cell col=\"20\" text=\"bind:REPR_PRD_SPR_CD_NM\"/><Cell col=\"21\" text=\"bind:PUB_ONLY_SPR_CD_NM\"/><Cell col=\"22\" text=\"bind:PURG_TEAM_NM\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"24\" text=\"bind:MD_OPRTR_ID_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","256","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_1","20","20","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("■  조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_2","21","237","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■  목록");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cNum",null,"Div00:18","100","28","231",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_cNum_innerdataset = new nexacro.NormalDataset("cbo_cNum_innerdataset", obj);
            cbo_cNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cNum_innerdataset);
            obj.set_text("1,000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"Div00:18","110","28","cbo_cNum:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","175","10","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"267","30","10","174",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","150","46","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1305","108","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","1122","107","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00_00","1277","108","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00",null,"210","30","30","86",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelBigDown",null,"Div00:18","128","28","btn_excel00:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("대용량 다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"Div00:18","100","28","126",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"Div00:18","100","28","21",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"180","60","30","146",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"180","60","30","83",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"180","60","30","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.cbo_stockType","value","ds_search","INVN_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cbo_mallSales","value","ds_search","INVN_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cal_baseDate","value","ds_search","BSS_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_partners","value","ds_search","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_purchaseTeam","value","ds_search","PURG_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_purchasingManager","value","ds_search","PURG_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cbo_reprPrdSprCd","value","ds_search","REPR_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_oprtrId","value","ds_search","MD_OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cbo_pubOnlySprCd","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_KA_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_KA_01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 재고 관리 - S-MRP 마스터 조회 목록
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.nOdrInqTgt = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();

        	//달력 현재날짜 디폴트설정
        	this.Div00.form.cal_baseDate.set_value(this.gfn_getDate("date"));
        	this.copyPaste.addGrid(this.grd_resList);
        	//공통코드 사용 콤보박스 설정
        	this.fn_searchCommonCode();

        	this.fn_odCommLoading(); //공통메세지코드 로딩
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_KA_01_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 공통코드
        this.fn_searchCommonCode = function() {
        	var sSvcId = "selectCommonCodeList";
        	var sUrl = "/od/odrPopup/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_searchCoCd";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page)	{
        	var sSvcId = "selectInventoryList";
        	var sUrl = "/iv/inv/select-inventory-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_resList=ds_output1 ds_search=ds_output2";
        	var arg = "";

        	//단일 조회조건 값
        	var sCprtcpId = this.ds_search.getColumn(0,"CPRTCP_ID");  //협력사
        	var sPurgTeamCd = this.ds_search.getColumn(0,"PURG_TEAM_CD");  //구매팀
        	var sPurgChrpsnId = this.ds_search.getColumn(0,"PURG_CHRPSN_ID");  //구매자

        	if (page) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_cNum.value);
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);
        		this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 엑셀 대용량다운로드
        this.fn_excelBigDownload = function(){
        	var sSvcId = "excelBigDownloadKA01";
        	var sUrl = "/od/orderExcel/excelBigDownloadKA01.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectInventoryList"){
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());
        		trace("MRO_MNFR_NM : " + this.ds_resList.getColumn(0, "MRO_MNFR_NM"));

        		this.Div00.form.set_enable(false);
        		this.cbo_cNum.set_enable(false);
        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_cNum.value, "fn_pageCallback");
        	}
        	else if (svcID == "selectCommonCodeList") {
        		this.fn_setCommonCode();
        	}
        	else if (svcID == "insertOdrInqTgtDtls") {
        		if (this.nOdrInqTgt == 0) {
        			this.fn_search(true);
        		}
        		else if (this.nOdrInqTgt == 1) {
        			this.fn_excelBigDownload();
        		}
        	}
        	else if (svcID == "deleteOdrInqTgtDtls") {
        		this.ds_select.deleteAll();
        		trace("### deleteOdrInqTgtDtls");
        	}
        	else if (svcID == "excelBigDownloadKA01") {
        		if (errorCode < 0) {
        			//alert(this.fn_getMessage(errorMsg));
        		}
        		else if (errorCode == -100) {
        			alert(this.fn_getMessage(errorMsg));
        		}
        		else if (errorCode == "0") {
        			alert(this.fn_getMessage("ERRS000461"));
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if (sFlag) {
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_cNum.value);
        		this.fn_search(false);
        	}

        	if( this.gfn_isNull(oPaging.uPageCnt) || oPaging.uPageCnt == 'undefined' || isNaN(oPaging.uPageCnt) ) {
        		oPaging.uPageCnt = 0;
        	}

        	var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if (sGridId == "grd_resList") {
        		oSortInfo = this.grd_resList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search(true);
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	trace("sRetValue: " + sRetValue);
        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}
        	trace("### fn_popupCallback - resData: " + resData);

        	if (sPopupId == "prdIdMultiPopup") {  //상품ID 멀티 팝업
        		if (resData.length > 0) {
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.PRD_ID_VIEW +",";
        				sNmList += rtnData.PRD_NM +",";
        			}
        		}

        		trace("### fn_popupCallback - prdIdMultiPopup - sIdList : " + sIdList);
        		trace("### fn_popupCallback - prdIdMultiPopup - sNmList : " + sNmList);
        		this.Div00.form.edt_productId.set_value(sIdList);
        		this.fn_setMSearch(this.name,"PRD_ID",sIdList);
        	} else if (sPopupId == "SSP_BO_KA_01;PRD_ID") {  //상품ID 멀티 인풋

        		sIdList = "";
        		if (resData.length > 0) {
        			for (var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        		}
        		trace("sIdList : " + sIdList);

        		this.Div00.form.edt_productId.set_value(sIdList);
        		this.fn_setMSearch(this.name,"PRD_ID",sIdList);
        	} else if (sPopupId == "invPcsMngPop") {		// 구매담당자 팝업
        		//this.ds_search.setColumn(0, "PURG_CHRPSN_ID", resData.OPRTR_ID);

        		this.Div00.form.edt_purchasingManager.set_value(resData.OPRTR_ID);
        		this.Div00.form.edt_purchasingManagerNm.set_value(resData.OPRTR_NM);
        	} else if (sPopupId == "invPcsTmPop") {	// 구매팀 팝업
        		//this.ds_search.setColumn(0, "PURG_TEAM_CD", resData.TEAM_CD);

        		this.Div00.form.edt_purchaseTeam.set_value(resData.TEAM_CD);
        		this.Div00.form.edt_purchaseTeamNm.set_value(resData.TEAM_NM);
        	} else if (sPopupId == "invPtnsPop") {	// 협력사 팝업
        		//this.ds_search.setColumn(0, "CPRTCP_ID", resData.CPRTCP_ID);

        		this.Div00.form.edt_partners.set_value(resData.CPRTCP_ID);
        		this.Div00.form.edt_partnersNm.set_value(resData.CPRTCP_KOR_NM);
        	}
        	// MD 담당자
        	else if (sPopupId == "mdOprtrPopup") {
        		this.Div00.form.edt_oprtrId.set_value(resData.OPRTR_ID);
        		this.Div00.form.edt_oprtrNm.set_value(resData.OPRTR_NM);
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//search static 초기 설정
        	this.Div00.form.sta_baseDate.uEssentiel = "true"; //필수값 표시
        	//this.Div00.form.sta_productId.uEssentiel = "true";

        	//grid 초기 설정
        	//sort
        	this.grd_resList.uSortFlag = "false";
        	this.grd_resList.uServerSortFlag = "true";
        	this.grd_resList.uSortCallback = "fn_sortCallback";

        	//grid cell size 변경
        	this.grd_resList.uCellSizeType = "true";

        	this.uGridList = "grd_resList";
        	this.grd_resList.uRightMouse = "true";
        	this.grd_resList.uPersonalFlag = "true";
        };

        this.cfn_personalPopupClose = function(sRet) {
        	this.grd_resList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 재고유형 코드
        	this.ds_comCd.filter("COM_CLSF_CD=='INVN_TP_CD'");
        	this.ds_stockType.copyData(this.ds_comCd, true);

        	// 몰판매여부 코드
        	this.ds_comCd.filter("COM_CLSF_CD=='INVN_STATS_CD'");
        	this.ds_mallSales.copyData(this.ds_comCd, true);

        	// 대표상품구분
        	this.ds_comCd.filter("COM_CLSF_CD=='REPR_PRD_SPR_CD'");
        	this.ds_comReprPrdSprCd.copyData(this.ds_comCd, true);
        	this.ds_comReprPrdSprCd.insertRow(1);
        	this.ds_comReprPrdSprCd.setColumn(1, "COM_DTL_CD", "UNION");
        	this.ds_comReprPrdSprCd.setColumn(1, "COM_DTL_CD_NM", "통합_전체");

        	// 공용전용구분
        	this.ds_comCd.filter("COM_CLSF_CD=='PUB_ONLY_SPR_CD'");
        	this.ds_comPubOnlySprCd.copyData(this.ds_comCd, true);

        	// 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
        	this.Div00.form.cbo_stockType.set_index(0);
        	this.Div00.form.cbo_mallSales.set_index(0);
        	this.Div00.form.cbo_pubOnlySprCd.set_index(0);
        	this.Div00.form.cbo_reprPrdSprCd.set_index(0);
        };


        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("");
        };

        /***********************************************************************************************
        *  BUTTON 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.edt_productId.value);
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	var nCount = this.ds_select.getRowCount();

        	if (nCount == 0) {
        		this.fn_search(true);
        	}
        	else {
        		this.nOdrInqTgt = 0;
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"재고목록"});
        };

        // 상품ID 멀티 INPUT
        this.Div00_btn_productIdMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "PRD_ID", this.Div00.form.edt_productId.value, "fn_popupCallback", 120, 300);
        };

        // 구매담당자 팝업
        this.Div00_btn_purchasingManager_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("invPcsMngPop", "CO_POP::SSP_BO_PP_44.xfdl", objParam);
        };

        // 상품ID 멀티 팝업
        this.Div00_btn_productIdPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("prdIdMultiPopup", "PR_POP::SSP_BO_PP_16.xfdl", objParam);
        };

        // 초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cbo_cNum.set_enable(true);
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.Div00.form.cal_baseDate.set_value(new nexacro.Date());

        	this.Div00.form.edt_productId.set_value("");
        	this.Div00.form.edt_partners.set_value("");
        	this.Div00.form.edt_purchaseTeam.set_value("");
        	this.Div00.form.edt_purchasingManager.set_value("");
        	this.Div00.form.edt_partnersNm.set_value("");
        	this.Div00.form.edt_purchaseTeamNm.set_value("");
        	this.Div00.form.edt_purchasingManagerNm.set_value("");
        	this.Div00.form.edt_oprtrId.set_value("");
        	this.Div00.form.edt_oprtrNm.set_value("");

        	this.Div00.form.cbo_stockType.set_index(0);
        	this.Div00.form.cbo_mallSales.set_index(0);
        	this.Div00.form.cbo_reprPrdSprCd.set_index(0);
        	this.Div00.form.cbo_pubOnlySprCd.set_index(0);
        	this.cbo_cNum.set_index(4);		// 기본 1000개

        	if(this.ds_select.getRowCount() != 0 )
        		this.fn_deleteSelectedData("fn_callBack");
        };

        // 활성화 버튼
        this.btn_active_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cbo_cNum.set_enable(true);
        };

        // 엑셀 대용량 다운로드
        this.btn_excelBigDown_onclick = function(obj,e)
        {
        	var rtn = this.confirm(this.fn_getMessage("ERRC000271"));	// 대용량 엑셀다운로드 하시겠습니까?
        	if (rtn) {	// "확인"
        		this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.edt_productId.value);
        		this.ds_search.setColumn(0, "LANG_CD", "KO");
        		this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        		var nCount = this.ds_select.getRowCount();

        		if (nCount == 0) {
        			this.fn_excelBigDownload();
        		}
        		else {
        			this.nOdrInqTgt = 1;
        			this.fn_insertSelectedData("fn_callBack");
        		}
        	}
        };

        // 구매팀 팝업
        this.Div00_btn_purchaseTeam_onclick = function(obj,e)
        {
        	var objParam = {searchType:"4", coCd:this.fv_coCd};
            this.gfn_openPopup("invPcsTmPop", "CC::SSP_BO_PP_26.xfdl", objParam);
        };

        // 협력사 팝업
        this.Div00_btn_partners_onclick = function(obj,e)
        {
        	var params = {};
            var options = {};
        	this.gfn_openPopup("invPtnsPop", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        };

        this.Div00_edt_partners_onkeyup = function(obj,e)
        {
        	this.Div00.form.edt_partnersNm.set_value("");
        };

        this.Div00_edt_purchaseTeam_onkeyup = function(obj,e)
        {
        	this.Div00.form.edt_purchaseTeamNm.set_value("");
        };

        this.Div00_edt_purchasingManager_onkeyup = function(obj,e)
        {
        	this.Div00.form.edt_purchasingManagerNm.set_value("");
        };

        this.Div00_edt_partners_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_partnersNm,"CPRTCP");
        };

        this.Div00_edt_purchaseTeam_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_purchaseTeamNm,"OPRTR_ORG-Y");
        };

        this.Div00_edt_purchasingManager_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_purchasingManagerNm,"OPRTR-Y");
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_resList", this.grd_resList.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_resList");
        	this.grd_resList.set_formats(this.grd_resList.uOrgFormat);
        };

        this.btn_psnMdPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd};
            var options = {title:"MD 담당자 조회"};
        	this.gfn_openPopup("mdOprtrPopup", "OD::SSP_BO_OA_45.xfdl", params,  "fn_popupCallback", options);
        };

        // MD담당자
        this.edt_oprtrId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj, this.Div00.form.edt_oprtrNm, "MD_OPRTR");
        };

        /***********************************************************************************************
        *  GRID 이벤트 영역
        ************************************************************************************************/
        //cell 클릭시
        this.grd_resList_oncellclick = function(obj,e)
        {
        	var columnId = this.gfn_getBindColumnNameByIndex(obj, e.cell), evtRidx = e.row; //columnId는 dataset바인딩된 컬럼명
        	var ds = obj.getBindDataset();

        	if ( columnId == "PRD_ID" ){
        		var args = { prdId: ds.getColumn(evtRidx, "PRD_ID"), bssDt:this.Div00.form.cal_baseDate.value, coCd:this.fv_coCd };
        		this.gfn_openPopup("invDtl", "IV::SSP_BO_KA_02.xfdl", args, "", { titlebar: "ture", popuptype: "modal", autosize: "ture" });
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_KA_01_onkeyup,this);
            this.Div00.form.btn_productIdPopup.addEventHandler("onclick",this.Div00_btn_productIdPopup_onclick,this);
            this.Div00.form.btn_productIdMemo.addEventHandler("onclick",this.Div00_btn_productIdMemo_onclick,this);
            this.Div00.form.btn_partners.addEventHandler("onclick",this.Div00_btn_partners_onclick,this);
            this.Div00.form.btn_purchaseTeam.addEventHandler("onclick",this.Div00_btn_purchaseTeam_onclick,this);
            this.Div00.form.btn_purchasingManager.addEventHandler("onclick",this.Div00_btn_purchasingManager_onclick,this);
            this.Div00.form.edt_partners.addEventHandler("onchanged",this.Div00_edt_partners_onchanged,this);
            this.Div00.form.edt_partners.addEventHandler("onkeyup",this.Div00_edt_partners_onkeyup,this);
            this.Div00.form.edt_purchaseTeam.addEventHandler("onchanged",this.Div00_edt_purchaseTeam_onchanged,this);
            this.Div00.form.edt_purchaseTeam.addEventHandler("onkeyup",this.Div00_edt_purchaseTeam_onkeyup,this);
            this.Div00.form.edt_purchasingManager.addEventHandler("onchanged",this.Div00_edt_purchasingManager_onchanged,this);
            this.Div00.form.edt_purchasingManager.addEventHandler("onkeyup",this.Div00_edt_purchasingManager_onkeyup,this);
            this.Div00.form.btn_psnMdPopup.addEventHandler("onclick",this.btn_psnMdPopup_onclick,this);
            this.Div00.form.edt_oprtrId.addEventHandler("onchanged",this.edt_oprtrId_onchanged,this);
            this.grd_resList.addEventHandler("oncellclick",this.grd_resList_oncellclick,this);
            this.sta_title1_1.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_title1_2.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_excelBigDown.addEventHandler("onclick",this.btn_excelBigDown_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_KA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
