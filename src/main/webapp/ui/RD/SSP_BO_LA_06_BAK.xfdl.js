(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_06");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">100</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">20</Col><Col id=\"Column2\">200</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">300</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDispStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdPrcDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PCPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prPrdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CATG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN \" type=\"STRING\" size=\"256\"/><Column id=\"DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"HRM_CHM_MTL_YN \" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DP_PRD_DISP_STATS_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_CPRTCP_PRD_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNF_ORI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpPrdStatsInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_SPL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PCPRC_INC_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_main","19","26","164","16",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전용상품 노출판매가 상세");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","778","20","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","btn_clear:4","20","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","btn_update:4","20","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100%","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","67","960","700",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","31",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","136","35","103","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","243","35","216","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","62",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","136","66","103","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","243","66","216","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","93",null,"140","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","232",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","0","263",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","0","294",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04","0","325",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_06","313","232","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("판매통화");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_07","628","232","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("예상매익률");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","136","298","600","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rndUscustDispStatsChgrsn","136","329","600","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("icnPrdIdPop","463","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("icnBizplcPop","464","66","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","450","269","128","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("기준판매가 적용");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","280","267","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","136","267","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","293","267","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","130","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("■ 영업지정가격 정보");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bzplcId","0","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","0","93","130","140",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","232","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","263","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("영업지정판매가\r\n유효기간");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_dispStatsChgrsn","0","294","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("진열상태변경사유");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_rndUscustDispStatsChgrsn","0","325","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("일시품절/단종사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_oprUnitNm","136","99",null,"128","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_binddataset("ds_oprUnit");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"158\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"운영단위\"/><Cell col=\"2\" text=\"진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","136","236","172","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","449","236","172","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","763","236",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","370","347","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("*일시품절/단종사유는 고객에게 노출되니 신중히 작성 바랍니다.\r\n");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","0","357","100%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","387","100%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_01","0","20","100%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","416","179","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("■ 현재 적용 기준가격(VAT 제외)");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","219","416","135","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("적용일: 2021.08.25 14:20");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","820","408",null,"28","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("기준판매가변동현황");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00","0","437","100%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_price","0","448",null,"65","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_binddataset("ds_pcPrdPrcDtls");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"117\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"10\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"최저매입가\"/><Cell col=\"2\" text=\"사전설정매익률\"/><Cell col=\"3\" text=\"R&amp;D기준가\"/><Cell col=\"4\" text=\"List Price\"/><Cell col=\"5\" text=\"기준판매가\"/><Cell col=\"6\" colspan=\"3\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:BSS_PCPRC\"/><Cell col=\"2\" text=\"bind:PLN_PRFRT\"/><Cell col=\"3\" text=\"bind:STPRC\"/><Cell col=\"4\" text=\"bind:DSTRB_STD_PRC\"/><Cell col=\"5\" text=\"bind:SSP_BSS_SALSPRC\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:BSS_SALSPRC_STR_DTM\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"7\" text=\"~\"/><Cell col=\"8\" text=\"bind:BSS_SALSPRC_END_DTM\" displaytype=\"date\" edittype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_00","0","565",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_01","0","596",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_02","0","627",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","514","100%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","538","97","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("■ 상품 기본 정보");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","556","100.00%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_00_00","0","658",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_00_00_00","0","689",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04_00_00_01","0","720",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId2","0","565","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId2","136","569","172","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","313","565","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("R&D 상품상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","628","565","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc","763","569",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","596","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","627","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hubYn","0","658","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_disRsn","0","689","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","0","720","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_brndNm","628","720","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bgNm","628","689","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("배지명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn","628","658","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit","628","627","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","628","596","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","313","658","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","313","689","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_prdStats","449","574","172","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_enable("false");
            var Div00_form_rdo_prdStats_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_prdStats_innerdataset", obj);
            Div00_form_rdo_prdStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">종결</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_prdStats_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("rdo_hubYn","136","662","172","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var Div00_form_rdo_hubYn_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_hubYn_innerdataset", obj);
            Div00_form_rdo_hubYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_hubYn_innerdataset);
            obj.set_text("Combo01");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_hrmChmYn","450","667","130","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var Div00_form_rdo_hrmChmYn_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_hrmChmYn_innerdataset", obj);
            Div00_form_rdo_hrmChmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_hrmChmYn_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySpr","450","693","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var Div00_form_rdo_pubOnlySpr_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_pubOnlySpr_innerdataset", obj);
            Div00_form_rdo_pubOnlySpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_pubOnlySpr_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_disRsn","136","694","162","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var Div00_form_rdo_disRsn_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_disRsn_innerdataset", obj);
            Div00_form_rdo_disRsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_disRsn_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("rdo_bgNm","763","693",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr","763","601",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrUnit","763","631",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_saftInvnYn","763","663",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","763","725",null,"23","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm2","136","600","486","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","136","631","486","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","136","725","486","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","774",null,"320","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_tabindex("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("구매 정보");
            obj.set_url("RD::SSP_BO_LA_06_1.xfdl");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("요청 상품 정보");
            obj.set_url("RD::SSP_BO_LA_06_2.xfdl");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","753","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","980","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_clear:4","20","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,790,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_prdNm","value","ds_search","pgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBizplc00","value","ds_search","pgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_bzplcNm","value","ds_search","pgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.rdo_prdStats","value","ds_prPrdInfo","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.rdo_hubYn","value","ds_prPrdInfo","HUB_HNL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.rdo_hrmChmYn","value","ds_prPrdInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.rdo_pubOnlySpr","value","ds_prPrdInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_prdId2","value","ds_prPrdInfo","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_orgplc","value","ds_prPrdInfo","ORGPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_prdNm2","value","ds_prPrdInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_mnfr","value","ds_prPrdInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_reprSpec","value","ds_prPrdInfo","REPR_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_saftInvnYn","value","ds_prPrdInfo","SAFT_INVN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.Static03_00_04_00_00_01","text","ds_prPrdInfo","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_dispStatsChgrsn","value","ds_dpPrdStatsInfo","DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_rndUscustDispStatsChgrsn","value","ds_dpPrdStatsInfo","RND_USCUST_DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_prdId","value","ds_dpPrdStatsInfo","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_bzplcId","value","ds_dpPrdStatsInfo","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","RD::SSP_BO_LA_06_1.xfdl");
            this._addPreloadList("fdl","RD::SSP_BO_LA_06_2.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_LA_06_BAK.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_06.xfdl
        CREATION DATES : 2022/03/24
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = this.parent.coCd;
        this.prdId = this.parent.prdId;
        this.gubun = this.parent.gubun;
        this.userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	this.ds_search.setColumn(0,"CO_CD","1000");//회사코드
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//SSP : 10, RND : 20
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//버튼권한
        	this.fn_displayGubun(this.gubun);

        	if(this.gubun != "1"){
        		//진열정보
        		this.fn_searchDpPrdStatsInfo();

        		//전용상품정보
        		this.fn_searchPrPrdInfo();

        		//현재 적용 기준가격
        		this.fn_searchPcPrdPrc();
        	}

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회(진열상태)
        this.fn_commonCodeSearch = function(){
        	this.ds_search.setColumn(0, "CODE_LIST", "DISP_STATS_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dsplayStatus=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회(진열정보)
        this.fn_searchDpPrdStatsInfo = function(){

        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.ds_search.setColumn(0,"PRD_ID",this.prdId);
        		this.ds_search.setColumn(0,"BZPLC_ID","*"); // 공용:*
        		this.ds_search.setColumn(0,"OPR_UNIT_ID","*"); //공용:*

        		var sSvcId = "searchDpPrdStatsInfo";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectDpPrdStatsInfo.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_dpPrdStatsInfo=ds_main";
        		var arg;

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회(전용상품정보)
        this.fn_searchPrPrdInfo = function(){
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.ds_search.setColumn(0,"PRD_ID",this.prdId);

        		var sSvcId = "searchPrPrdInfo";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectPrPrdInfo.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_prPrdInfo=ds_main";
        		var arg;

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회(현재 적용 기준가격 )
        this.fn_searchPcPrdPrc = function(bInit){
        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "searchPcPrdPrc";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectPcPrdPrc.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_pcPrdPrcDtls=ds_main";
        		var arg;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var jsonData = JSON.parse(sRetValue);
        	switch(sPopupId){
        		case "searchDpPrdStatsInfo" :
        			break;
        		case "searchPrPrdInfo" :
        			break;
        		case "searchPcPrdPrc" :
        			break;
        		case "icnPrdIdPop" :
        			var prdStr = "";
        			var prdNm = "";
        			if(jsonData.length > 0){
        				for(var i = 0; i<jsonData.length; i++){
        					prdStr += jsonData[i].PRD_ID + ",";
        					prdNm += jsonData[i].PRD_NM + ",";
        				}

        				this.Div00.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        				this.Div00.form.edt_prdNm.set_value(prdNm.substring(0, prdNm.length-1));
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


        	if(objID == 'icnPrdIdPop'){

        	}

        	if(objID == 'Div00_icnBizplcPop'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.BZPLC_ID +",";
        			sNmList += rtnData.BZPLC_NM +",";
        		}
        		this.Div00.form.edt_bzplcId.set_value(sIdList);
        		this.Div00.form.edt_bzplcNm.set_value(sNmList);
        		this.search_ds.setColumn(0, "BZPLC_ID", sIdList);
        	}

        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //버튼권한
        this.fn_displayGubun = function(arg){
        	if(arg == "1"){
        		this.stc_main.set_text("전용상품 노출판매가 등록");
        		this.btn_clear.set_visible(true);
        		this.btn_save.set_visible(true);
        		this.btn_update.set_visible(false);

        		this.Div00.form.edt_dispStatsChgrsn.set_enable(true);
        		this.Div00.form.edt_rndUscustDispStatsChgrsn.set_enable(true);
        	}else if(arg == "2"){
        		this.stc_main.set_text("전용상품 노출판매가 상세");
        		this.btn_clear.set_visible(false);
        		this.btn_save.set_visible(false);
        		this.btn_update.set_visible(true);
        	}else if(arg == "3"){
        		this.stc_main.set_text("전용상품 노출판매가 수정");
        		this.btn_clear.set_visible(true);
        		this.btn_save.set_visible(true);
        		this.btn_update.set_visible(false);

        		this.Div00.form.edt_dispStatsChgrsn.set_enable(true);
        		this.Div00.form.edt_rndUscustDispStatsChgrsn.set_enable(true);
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_update_onclick = function(obj,e)
        {
        	this.fn_displayGubun("3");
        };

        this.Div00_icnPrdIdPop_onclick = function(obj,e)
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_icnBizplcPop_onclick = function(obj,e)
        {
        	var oArg = {};
        	if(e.fromobject.id == 'btn_bzpMulti'){params = { textId : this.btn_bzpMulti }}	 //사업장

        	var oOption = {};

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_searchMultiPopupCallback", oOption);
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd:this.coCd
        		, prdId:this.prdId
        	};
        	this.gfn_openPopup("sspBoLa27", "RD::SSP_BO_LA_27.xfdl", objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Div00.form.icnPrdIdPop.addEventHandler("onclick",this.Div00_icnPrdIdPop_onclick,this);
            this.Div00.form.icnBizplcPop.addEventHandler("onclick",this.Div00_icnBizplcPop_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_LA_06_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
