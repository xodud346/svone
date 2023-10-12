(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_22");
            this.set_titletext("전용상품 노출판매가 개별등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_page", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispStatsCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpDispInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_TASK_SPR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"FST_HST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DUPCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rtnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchNew", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdPrcDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdDlcstDtls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerOprUnitInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerDpDispInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerExItemInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispHist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsPrcInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_STD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_BUY_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveNewPrdReq", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitInfoOrg", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","22","12","750","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_main","0","10","181","16",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("전용상품 노출판매가 등록");
            obj.set_cssclass("sta_WF_title04");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"21","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"21","68","28","btn_close:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","127.62%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","1080","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_replace",null,"21","66","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","59",null,"540","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec2","0","93","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_disRsn","0","277","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","0","386","141","154",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("영업지정판매가\r\n유효기간");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","140","0",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","140","93",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2","583","93","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_00","140","124",null,"154","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_hubYn","0","124","141","154",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("운영단위정보");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2_00","875","93","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","150","4","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("000000000004823858");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","304","4","240","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","549","4","24","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_category00","0","31","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("카테고리ID/명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_dispStatsSelect","10","238","120","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("진열상태 이력");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_01_00_00_00","140","277",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_01_00_00_00_00","140","339",null,"48","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_disRsn00","0","308","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_01_00_00_00_01","140","308",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn","406","277","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn00","406","308","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("판매통화");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn01","781","277","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("안전재고상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn00_00","781","308","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("예상매익율");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","158","135","1114","128",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_binddataset("ds_oprUnitInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"14\"/><Column size=\"20\"/><Column size=\"15\"/><Column size=\"30\"/><Column size=\"15\"/><Column size=\"40\"/><Column size=\"15\"/><Column size=\"60\"/><Column size=\"15\"/><Column size=\"90\"/><Column size=\"135\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"운영단위\"/><Cell col=\"2\" colspan=\"6\" text=\"SSP진열상태\"/><Cell col=\"8\" colspan=\"4\" text=\"자동로직체크여부\"/><Cell col=\"12\" text=\"진열상태 변경사유\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\" displaytype=\"editcontrol\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\" displaytype=\"editcontrol\"/><Cell col=\"2\" displaytype=\"imagecontrol\" expr=\"DISP_STATS_CD==&quot;10&quot;?&quot;theme::default/images/rdo_WF_Radio_S.png&quot;:&quot;theme::default/images/rdo_WF_Radio_O.png&quot;\" cssclass=\"10\" textAlign=\"right\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"3\" text=\"진열\" cssclass=\"expr:DISP_GB==&quot;1&quot; &amp;&amp; DISP_STATS_CD==&quot;10&quot; ? &quot;grd_WF_body_stress&quot; : &quot;&quot;\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\" textAlign=\"left\"/><Cell col=\"4\" expr=\"DISP_STATS_CD==&quot;20&quot;?&quot;theme::default/images/rdo_WF_Radio_S.png&quot;:&quot;theme::default/images/rdo_WF_Radio_O.png&quot;\" cssclass=\"20\" displaytype=\"imagecontrol\" textAlign=\"right\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"5\" text=\"미진열\" cssclass=\"expr:expr:DISP_GB==&quot;1&quot; &amp;&amp; DISP_STATS_CD==&quot;20&quot; ? &quot;grd_WF_body_stress&quot; : &quot;&quot;\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\" textAlign=\"left\"/><Cell col=\"6\" expr=\"DISP_STATS_CD==&quot;30&quot;?&quot;theme::default/images/rdo_WF_Radio_S.png&quot;:&quot;theme::default/images/rdo_WF_Radio_O.png&quot;\" cssclass=\"30\" displaytype=\"imagecontrol\" textAlign=\"right\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"7\" text=\"일시품절\" cssclass=\"expr:DISP_GB==&quot;1&quot; &amp;&amp; DISP_STATS_CD==&quot;30&quot; ? &quot;grd_WF_body_stress&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"imagecontrol\" expr=\"AUTO_LOGIC_EM_YN==&quot;Y&quot;?&quot;theme::default/images/rdo_WF_Radio_S.png&quot;:&quot;theme::default/images/rdo_WF_Radio_O.png&quot;\" cssclass=\"40\" textAlign=\"right\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"9\" text=\"적용(자동적용)\" cssclass=\"40\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\" textAlign=\"left\"/><Cell col=\"10\" expr=\"AUTO_LOGIC_EM_YN==&quot;N&quot;?&quot;theme::default/images/rdo_WF_Radio_S.png&quot;:&quot;theme::default/images/rdo_WF_Radio_O.png&quot;\" displaytype=\"imagecontrol\" cssclass=\"50\" textAlign=\"right\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"11\" text=\"미적용(진열상태유지)\" cssclass=\"50\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:DISP_STATS_CHGRSN\" displaytype=\"editcontrol\" edittype=\"normal\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdPopup","1176","4","24","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","875","4","295","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","720","4","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_text("000000000004823858");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprcUse","164","353","118","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_text("기준판매가 적용");
            obj.set_enable("true");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("edt_salsprc","150","312","248","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            obj.set_format("+###,###,0.999999999");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("edt_calcProfit","918","312","217","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_format("0.99");
            obj.set_postfixtext("%");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01","140","31",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2_01_00","583","31","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("31");
            obj.set_text("제조원ID/명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_01_00_00_00_00_00","140","386",null,"154","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid01","158","397","1114","128",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("33");
            obj.set_binddataset("ds_salsPrcInfo");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"119\"/><Column size=\"107\"/><Column size=\"89\"/><Column size=\"102\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"132\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"산출기준\"/><Cell col=\"2\" text=\"영업지정판매가\"/><Cell col=\"3\" text=\"판매통화\"/><Cell col=\"4\" text=\"최저매입가\"/><Cell col=\"5\" text=\"예상매익율\"/><Cell col=\"6\" text=\"유효기간(FROM)\"/><Cell col=\"7\" text=\"유효기간(TO)\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:CAL_STD_NM\"/><Cell col=\"2\" text=\"bind:SALS_DSGN_SALSPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:MIN_BUY_PRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:EXP_PRFRT\" displaytype=\"mask\" maskeditformat=\"#,0.00\" maskeditpostfixtext=\"%\"/><Cell col=\"6\" text=\"bind:SALS_DSGN_SALSPRC_STR_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:SALS_DSGN_SALSPRC_END_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_categoryId","150","35","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprcRightNow","282","353","58","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("35");
            obj.set_text("즉시");
            obj.set_enable("true");
            obj.set_value("false");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_categoryNm","304","35","269","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_attrVal","150","98","423","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrId","720","35","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","875","34","397","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnit","720","97","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCountry","1012","97","260","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_sspStats","150","281","248","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_mroStats","544","281","226","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_safInvn","918","281","217","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_currUnit","544","312","227","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_category","583","0","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("46");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_disRsn00_00","0","339","141","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("47");
            obj.set_text("영업지정판매가 입력");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_add1",null,"350","66","28","94",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("48");
            obj.set_text("+가격추가");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del1",null,"350","66","28","24",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("49");
            obj.set_text("-삭제");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_extend","120","367","20","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_default");
            obj.set_text("∨");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_regist","1206","2","66","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("51");
            obj.set_text("조회");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_category00_00","0","62","141","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("52");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01_00","140","62",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","150","66","1122","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","20","Div02:20",null,"430","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("true");
            obj.set_visible("true");
            obj.set_cssclass("tab_WF_basic");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("가격 정보");
            obj.set_url("PC::SSP_BO_CA_22_1.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("상품 Condition 정보");
            obj.set_url("PC::SSP_BO_CA_22_2.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab00);
            obj.set_text("등록 상품 정보");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_url("PC::SSP_BO_CA_22_3.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab00);
            obj.set_text("요청 상품 정보");
            obj.set_enable("true");
            obj.set_url("PC::SSP_BO_CA_22_4.xfdl");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Calendar("cal_salsprcStrDtm","363","411","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_headformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","517","411","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_salsprcEndDtm","530","411","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_headformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newPrdPrcPrcess",null,"21","66","28","btn_replace:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("예외종료");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,1080,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div02.form.edt_prdId","value","ds_searchNew","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div02.form.edt_prdNm","value","ds_searchNew","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div02.form.edt_bzplcNm","value","ds_searchNew","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div02.form.edt_bzplcId","value","ds_searchNew","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div02.form.chk_bssSalsprcUse","value","ds_dpDispInfo","BSS_SALSPRC_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div02.form.edt_salsprc","value","ds_dpDispInfo","SALS_DSGN_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div02.form.edt_calcProfit","value","ds_dpDispInfo","EXP_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div02.form.edt_categoryId","value","ds_dpDispInfo","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div02.form.edt_categoryNm","value","ds_dpDispInfo","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div02.form.edt_attrVal","value","ds_dpDispInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div02.form.edt_mnfrId","value","ds_dpDispInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div02.form.edt_mnfrNm","value","ds_dpDispInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div02.form.edt_sellUnit","value","ds_dpDispInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div02.form.edt_mnfrCountry","value","ds_dpDispInfo","ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div02.form.edt_sspStats","value","ds_dpDispInfo","PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div02.form.edt_mroStats","value","ds_dpDispInfo","MRO_PRD_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div02.form.edt_safInvn","value","ds_dpDispInfo","INVN_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div02.form.edt_currUnit","value","ds_dpDispInfo","CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div02.form.chk_bssSalsprcRightNow","value","ds_dpDispInfo","RIGHT_NOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cal_salsprcStrDtm","value","ds_dpDispInfo","SALS_DSGN_SALSPRC_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_salsprcEndDtm","value","ds_dpDispInfo","SALS_DSGN_SALSPRC_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div02.form.edt_sspPrdNm","value","ds_dpDispInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_1.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_2.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_3.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_4.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_39.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_39.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_39.xfdl", function() {
        /******************************************************************************
        PROJECT NAME :
        CREATION DATES :
        CREATER :
        *******************************************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        // 호출에서(parent)에서 전달받는 변수
        this.prdId = "";
        this.prdNm = "";
        this.bzplcId = "";
        this.bzplcNm = "";
        this.strAuth = "";
        this.strIsNew = "";

         this.checkResult = '';
         this.totalCount = 0;
         this.result = '';
         this.saftIInvnYn = '';
         this.displayGubun = 0;
         this.auth = 0;
         this.newPrdReqNo = '';
         this.newPrdReqYn = 'Y';

         this.searchPrdCount = 0;
         this.searchPrdId = '';
         this.searchPrdNm = '';

         this.bzplcCount = 0;
         this.searchBzplcId = '';
         this.searchBzplcNm = '';

         this.tab_pos = 0;
         this.childForm ="";
         this.bExtend = false;
         this.duplication = 'N';
        // 필수값 체크를 위한 필드명 선언

        // 영업지정판매가 "즉시"버튼 체크시 수정되는 일자데이터 이전 값(ds_dpDispInfo.SALS_DSGN_SALSPRC_STR_DTM)
        this.preSalsDsgnSalsprcStrDtm = "";
        // 탭이동 인덱스
        this.canChangeTabIndex = -1;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	trace("### SSP_BO_CA_39 onload ###");
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();
        	//공통코드 조회
        	this.fn_commonCodeSearch();
        	this.fn_changeSearchArea(true);
        	this.tab_pos = 0;
        	this.childForm = this.Div00.form.Tab00.tabpages[this.tab_pos].form;
        	//요청상품정보 탭 숨김처리
        	this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(-1);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };

        // 사용자 초기화
        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm, auth, isNew, newPrdReqNo) {
        	this.prdId = prdId;
        	this.prdNm = prdNm;
        	this.bzplcId = bzplcId;
        	this.bzplcNm = bzplcNm;
        	this.strAuth = auth;
        	this.strIsNew = isNew;
        	this.newPrdReqNo = newPrdReqNo;

        	this.tab_pos = 0;
        	this.childForm = this.Div00.form.Tab00.tabpages[this.tab_pos].form;

        	this.fn_checkData(this.strAuth);
        	// 탭 첫번째 페이지 조회
        	this.Div00_Tab00_onchanged(this.Div00.form.Tab00, {postindex:0});
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회(진열상태)
        this.fn_commonCodeSearch = function() {
        	this.ds_searchCd.setColumn(0, "CODE_LIST", "DISP_STATS_CD");
        	this.ds_searchCd.setColumn(0, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_searchCd";
        	var outDs = "ds_dispStatsCd=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회(등록된 전용상품정보 - 상세)
        this.fn_searchExItemInfo = function() {
        	//ds_dpDispInfo
        	var sSvcId = "getNewExItemInfo";
        	var sUrl = "/pc/pc-ex-prc-mng/get-new-ex-item-info.do";
        	var inDs = "ds_search=ds_searchNew"
        	var outDs = "ds_salsPrcInfo=exItemInfo ds_dpDispInfo=dpDispInfo ds_oprUnitInfo=oprUnitInfo ds_oprUnitInfoOrg=oprUnitInfo";
        	var arg;
        	var callback = "fn_callBack"
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //저장
        this.fn_save = function(inDs) {
        	var sSvcId = "savePrcMngInfo";
        	var sUrl = "/pc/pc-ex-prc-mng/savePrcMngInfo.do";
        	var outDs = "ds_saveReturn=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (errorCode != 0 && errorCode != -100) {
        		alert(errorMsg);
        	}

        	switch(svcID) {
        		case "commonCodeSearch":
        			this.ds_dispStatsCd.deleteRow(3);
        			break;
        		case "savePrcMngInfo" :
        			var  strRtnCd  = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnCd"));
        			var  strRtnMsg = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnMsg"));

        			if( strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				if(this.ds_forServerOprUnitInfo != undefined && this.ds_forServerOprUnitInfo.rowcount != 0 )
        					this.ds_forServerOprUnitInfo.clearData();
        				if(this.ds_forServerDpDispInfo != undefined && this.ds_forServerDpDispInfo.rowcount != 0 )
        					this.ds_forServerDpDispInfo.clearData();
        				if(this.ds_forServerExItemInfo != undefined && this.ds_forServerExItemInfo.rowcount != 0 )
        					this.ds_forServerExItemInfo.clearData();
        				if(this.ds_savePcPrdPrcDtl != undefined && this.ds_savePcPrdPrcDtl.rowcount != 0 )
        					this.ds_savePcPrdPrcDtl.clearData();
        				if(this.ds_savePcPrdQty != undefined && this.ds_savePcPrdQty.rowcount != 0 )
        					this.ds_savePcPrdQty.clearData();
        				if(this.ds_savePcPrdDlcstDtls != undefined && this.ds_savePcPrdDlcstDtls.rowcount != 0 )
        					this.ds_savePcPrdDlcstDtls.clearData();
        				if(this.ds_saveNewPrdReq != undefined && this.ds_saveNewPrdReq.rowcount != 0 )
        					this.ds_saveNewPrdReq.clearData();
        				if(this.ds_dispHist != undefined && this.ds_dispHist.rowcount != 0 )
        					this.ds_dispHist.clearData();

        				if(this.newPrdReqNo != null && this.newPrdReqNo != ""){
        					this.parent.parent.opener.fn_callBackForSearch();
        					this.parent.parent.close(true);
        					return;
        				}

        				this.btn_newPrdPrcPrcess.set_visible(false);
        				this.newPrdReqNo = "";
        				this.strIsNew = "N";
        				this.fn_searchExItemInfo();
        			}
        			else {
        				alert(strRtnMsg);
        				//this.canChangeTabIndex = -1;
        			}
        			break;
        		case "getNewExItemInfo" :
        			var prdSprCd = this.ds_dpDispInfo.getColumn(0,"REPR_PRD_SPR_CD");
        			if(this.ds_dpDispInfo.getColumn(0,"PUB_ONLY_SPR_CD") == 'P'){//전용일 경우

        				//alert("공용상품ID는 입력할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000262"));
        				this.fn_displayInit();

        			}else if(this.ds_dpDispInfo.getColumn(0,"CUST_SPR_CD") != '20'){//전용일 경우

        				//alert("등록할수 없는 사업장입니다.");
        				this.alert(this.fn_getMessage("ERRP000251"));
        				this.fn_displayInit();

        			}else if(prdSprCd == "3"){
        				//alert("피통합상품은 선택할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000214"));
        				this.fn_displayInit();
        				return false;
        			}

        			this.Div00.form.Tab00.set_visible(true);
        			this.fn_searchDetail();

        			this.Div02.form.Grid00.set_binddataset();
        			this.ds_oprUnitInfo.filter("IS_NEW=='Y'");

        			for(var nRow = 0; nRow < this.ds_oprUnitInfo.rowcount; nRow++) {
        				this.ds_oprUnitInfo.set_updatecontrol(false);
        				this.ds_oprUnitInfo.setRowType(nRow,Dataset.ROWTYPE_INSERT);
        				this.ds_oprUnitInfo.set_updatecontrol(true);
        			}
        			this.ds_oprUnitInfo.filter("");
        			this.Div02.form.Grid00.set_binddataset(this.ds_oprUnitInfo);



        			if(this.ds_dpDispInfo.rowcount > 0 && this.ds_dpDispInfo.getColumn(0,"SALS_DSGN_SALSPRC_STR_DTM") != undefined
        			   && this.ds_dpDispInfo.getColumn(0,"SALS_DSGN_SALSPRC_STR_DTM") != ""  && this.ds_salsPrcInfo != null && this.ds_salsPrcInfo.rowcount > 0)
        			{
        				this.Div01.form.stc_main.set_text("전용상품 노출판매가 상세");
        				this.Div02.form.btn_dispStatsSelect.set_visible(true);
        				this.strIsNew = "N"
        			}else{
        				this.strIsNew = "Y"
        			}
        			if(this.ds_dpDispInfo.getColumn(0,'DUPCHECK') == 'Y') {
        				this.duplication = 'Y'
        			}


        			this.fn_displayGubun();

        			this.fn_applyOprUnitInfo();
        			// 컴포넌트 비활성화

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************************
        * Popup Callback 처리 영역
        ************************************************************************************************/

        this.fn_popupCallback = function(sPopupId, args) {
        	switch (sPopupId) {
        		case "btn_prdIdPopup" :
        			var jsonData = JSON.parse(args);

        			this.Div02.form.edt_prdId.set_value(jsonData.PRD_ID_VIEW);
        			this.Div02.form.edt_prdNm.set_value(jsonData.PRD_NM);
        			//this.prdId = jsonData.PRD_ID_VIEW;
        			this.prdNm = jsonData.PRD_NM;
        			break;
        		case "btn_bzplcIdPopup" :
        			var jsonData = JSON.parse(args);
        			this.Div02.form.edt_bzplcId.set_value(jsonData.BZPLC_ID);
        			this.Div02.form.edt_bzplcNm.set_value(jsonData.BZPLC_NM);
        			//this.bzplcId = jsonData.BZPLC_ID;
        			this.bzplcNm = jsonData.BZPLC_NM
        			break;
        		case "btn_newPrdPrcPrcess" :
        			//예외종료처리 콜백
        			if (args) {
        				this.parent.parent.opener.fn_callBackForSearch();
        				this.parent.parent.close(true);
        			}
        		break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
            //search div 초기 설정
        	this.Div02.uMinSize = 387;
        	this.Div02.uMaxSize = 540;
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_displayInit = function(){

        	this.ds_salsPrcInfo.clearData();
        	this.ds_dpDispInfo.clearData();
        	this.ds_oprUnitInfo.clearData();
        	this.ds_oprUnitInfoOrg.clearData();

        	this.Div02.form.edt_prdId.set_value("");
        	this.Div02.form.edt_prdNm.set_value("");
        	this.Div02.form.edt_bzplcId.set_value("");
        	this.Div02.form.edt_bzplcNm.set_value("");

        }
        this.fn_displayGubun = function() {

        	this.btn_replace.set_visible(true);
        	this.btn_close.set_visible(true);
        	//this.btn_clear.set_visible(false); //임시로 처리함

        	if(this.strIsNew == "Y")	{
        		this.Div01.form.stc_main.set_text("전용상품 노출판매가 등록");
        		this.Div02.form.btn_dispStatsSelect.set_visible(false);

        		this.btn_save.set_visible(true);

        		this.Div02.form.edt_prdId.set_readonly(false);
        		this.Div02.form.edt_bzplcId.set_readonly(false);
        		this.Div02.form.btn_regist.set_visible(true);
        		this.Div02.form.btn_prdIdPopup.set_enable(true);
        		this.Div02.form.btn_bzplcIdPopup.set_enable(true);
        	}
        	else	{
        		this.Div01.form.stc_main.set_text("전용상품 노출판매가 상세");
        		this.Div02.form.btn_dispStatsSelect.set_visible(true);

        		this.Div02.form.edt_prdId.set_readonly(true);
        		this.Div02.form.edt_bzplcId.set_readonly(true);
        		this.Div02.form.btn_regist.set_visible(false);
        		this.Div02.form.btn_prdIdPopup.set_enable(false);
        		this.Div02.form.btn_bzplcIdPopup.set_enable(false);

        		if(this.strAuth == "1" || this.strAuth == "2")
        		{
        			this.btn_save.set_visible(true);
        		}
        		else	{
        			this.btn_replace.set_visible(false);
        			this.btn_save.set_visible(false);
        		}
        	}
        	if(this.strAuth == "1")
        	{

        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(true);
        		this.Div00.form.Tab00.Tabpage2.form.fn_setDisplay(false);
        		this.Div02.form.Grid00.set_readonly(true);
        		this.Div02.form.chk_bssSalsprcUse.set_readonly(true);
        		this.Div02.form.chk_bssSalsprcRightNow.set_readonly(true);
        		this.Div02.form.btn_del1.set_enable(false);
        		this.Div02.form.btn_add1.set_enable(false);
        		this.Div02.form.edt_salsprc.set_readonly(true);
        		this.cal_salsprcStrDtm.set_readonly(true);
        		this.gridRadio(true);

        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);
        		}
        	}
        	else if(this.strAuth == "2")
        	{
        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(false);

        		this.Div00.form.Tab00.Tabpage2.form.fn_setDisplay(true);
        		this.Div02.form.Grid00.set_readonly(false);
        		this.gridRadio(false);
        		if(this.strIsNew == "Y")	{
        			this.Div02.form.chk_bssSalsprcUse.set_readonly(false);
        			this.Div02.form.chk_bssSalsprcRightNow.set_readonly(false);
        			this.Div02.form.edt_salsprc.set_readonly(false);
        			this.cal_salsprcStrDtm.set_readonly(false);
        		}else{
        			this.Div02.form.chk_bssSalsprcUse.set_readonly(true);
        			this.Div02.form.chk_bssSalsprcRightNow.set_readonly(true);
        			this.Div02.form.edt_salsprc.set_readonly(true);
        			this.cal_salsprcStrDtm.set_readonly(true);

        		}

        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null && this.newPrdReqYn == "Y"){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);
        			this.btn_newPrdPrcPrcess.set_visible(true);
        			this.Div02.form.btn_prdIdPopup.set_enable(false);
        			this.Div02.form.btn_bzplcIdPopup.set_enable(false);
        			this.Div02.form.edt_prdId.set_readonly(true);
        			this.Div02.form.edt_bzplcId.set_readonly(true);
        			this.Div02.form.btn_regist.set_visible(false);
        		}else if(this.newPrdReqYn == "N"){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(0);
        			this.btn_newPrdPrcPrcess.set_visible(false);
        		}
        	}
        	else
        	{
        		this.Div02.form.Grid00.set_readonly(true);
        		this.Div02.form.edt_salsprc.set_readonly(true);
        		this.cal_salsprcStrDtm.set_readonly(true);
        		this.Div02.form.chk_bssSalsprcUse.set_readonly(true);
        		this.Div02.form.chk_bssSalsprcRightNow.set_readonly(true);
        		this.gridRadio(true);
        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(false);
        		this.Div00.form.Tab00.Tabpage2.form.fn_setDisplay(false);
        		this.Div02.form.btn_del1.set_enable(false);
        		this.Div02.form.btn_add1.set_enable(false);
        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);

        			this.btn_replace.set_visible(false);
        			this.btn_save.set_visible(false);
        			this.Div02.form.edt_prdId.set_readonly(true);
        			this.Div02.form.edt_bzplcId.set_readonly(true);
        			this.Div02.form.btn_regist.set_visible(false);
        			this.Div02.form.btn_prdIdPopup.set_enable(false);
        			this.Div02.form.btn_bzplcIdPopup.set_enable(false);

        			//신규상품요청 상세일때 등록되지않은것들은 진열상태외 자동로직여부 null처리
        			var bfCnt = this.ds_oprUnitInfo.rowcount;
        			this.ds_oprUnitInfo.filter("IS_NEW=='Y'");
        			var isNew = "N";
        			if(this.ds_oprUnitInfo.rowcount == bfCnt) isNew = "Y";
        			this.ds_oprUnitInfo.filter("");

        			if(isNew != null){
        				if(isNew == "Y"){
        					for(var nRow = 0; nRow < this.ds_oprUnitInfo.rowcount; nRow++) {
        						this.ds_oprUnitInfo.set_updatecontrol(false);
        						this.ds_oprUnitInfo.setColumn(nRow,"DISP_STATS_CD",null);
        						this.ds_oprUnitInfo.setColumn(nRow,"AUTO_LOGIC_EM_YN",null);
        						this.ds_oprUnitInfo.set_updatecontrol(true);
        					}
        				}
        			}
        		}
        	}

        };

        this.gridRadio = function(isDisable) {
        	if (isDisable) {
        		this.Div02.form.Grid00.setCellProperty( "body", 2, "expr", 'DISP_STATS_CD=="10"?"theme::default/images/rdo_WF_Radio_DS.png":"theme::default/images/rdo_WF_Radio_D.png"');
        		this.Div02.form.Grid00.setCellProperty( "body", 4, "expr", 'DISP_STATS_CD=="20"?"theme::default/images/rdo_WF_Radio_DS.png":"theme::default/images/rdo_WF_Radio_D.png"');
        		this.Div02.form.Grid00.setCellProperty( "body", 6, "expr", 'DISP_STATS_CD=="30"?"theme::default/images/rdo_WF_Radio_DS.png":"theme::default/images/rdo_WF_Radio_D.png"');

        		this.Div02.form.Grid00.setCellProperty( "body", 8, "expr", 'AUTO_LOGIC_EM_YN=="Y"?"theme::default/images/rdo_WF_Radio_DS.png":"theme::default/images/rdo_WF_Radio_D.png""');
        		this.Div02.form.Grid00.setCellProperty( "body", 10, "expr", 'AUTO_LOGIC_EM_YN=="N"?"theme::default/images/rdo_WF_Radio_DS.png":"theme::default/images/rdo_WF_Radio_D.png""');
        	}
        	else {
        		this.Div02.form.Grid00.setCellProperty( "body", 2, "expr", 'DISP_STATS_CD=="10"?"theme::default/images/rdo_WF_Radio_S.png":"theme::default/images/rdo_WF_Radio_O.png"');
        		this.Div02.form.Grid00.setCellProperty( "body", 4, "expr", 'DISP_STATS_CD=="20"?"theme::default/images/rdo_WF_Radio_S.png":"theme::default/images/rdo_WF_Radio_O.png"');
        		this.Div02.form.Grid00.setCellProperty( "body", 6, "expr", 'DISP_STATS_CD=="30"?"theme::default/images/rdo_WF_Radio_S.png":"theme::default/images/rdo_WF_Radio_O.png"');

        		this.Div02.form.Grid00.setCellProperty( "body", 8, "expr", 'AUTO_LOGIC_EM_YN=="Y"?"theme::default/images/rdo_WF_Radio_S.png":"theme::default/images/rdo_WF_Radio_O.png"');
        		this.Div02.form.Grid00.setCellProperty( "body", 10, "expr", 'AUTO_LOGIC_EM_YN=="N"?"theme::default/images/rdo_WF_Radio_S.png":"theme::default/images/rdo_WF_Radio_O.png"');
        	}
        };

        this.fn_checkData = function(arg) {
        //this.strAuth
        //1:md담당자 , tab1의 기준가 재생성 버튼 활성화, tab2비활성화
        //2:영업담당자 , 수정 : tab1 비활성화, tab2활성화
        //				   신규 : 신규버튼 활성화this.strIsNew
        //3:조회 , tab1,tab2 비활성화

        	this.fn_displayGubun();

        	this.Div02.form.edt_prdId.set_value(this.prdId);
        	this.Div02.form.edt_prdNm.set_value(this.prdNm);
        	this.Div02.form.edt_bzplcId.set_value(this.bzplcId);
        	this.Div02.form.edt_bzplcNm.set_value(this.bzplcNm);
        	this.ds_searchNew.setColumn(0, "PRD_NM", this.prdNm);
        	this.ds_searchNew.setColumn(0, "BZPLC_NM", this.bzplcNm);

        	this.ds_searchNew.setColumn(0, "PRD_ID", this.prdId);
        	this.ds_searchNew.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_searchNew.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_searchNew.setColumn(0, "NEW_PRD_REQ_NO", this.newPrdReqNo);

        	if(this.strIsNew != "Y" || (this.prdId != null && this.prdId != "" && this.bzplcId != null && this.bzplcId != ""))
        	{
        		trace("this.ds_searchNew is " + this.fn_getStrFromDataset(this.ds_searchNew,0));
        		this.fn_searchExItemInfo();
        	}
        };

        this.fn_calcProfit = function(arg) {
        	var salsprcVal = this.Div02.form.edt_salsprc.value;
        	if(salsprcVal != 0){
        		var expPrfrt = this.Div00.form.Tab00.tabpages[0].form.fn_getExpPrfrt(this.Div02.form.edt_salsprc.value, arg);

        		if (arg) {
        			trace("영업지정판매가");
        			if (typeof(expPrfrt) != "undefined") {

        				this.ds_dpDispInfo.setColumn(0, "EXP_PRFRT", expPrfrt);
        			}
        		}
        		else{
        			trace("SSP기준판매가");
        			if (typeof(expPrfrt) != "undefined") {
        				this.ds_dpDispInfo.setColumn(0, "EXP_PRFRT", expPrfrt);
        			}
        		}
        	}else{
        		this.ds_dpDispInfo.setColumn(0, "EXP_PRFRT", 0);
        	}


        };

        // 저장여부 조회
        this.fn_shouldSave = function() {
        	if(this.strAuth == "3" || this.strAuth == "4")	return false;

        	var oprUnitInfo = this.fn_didChange(this.ds_oprUnitInfo);
        	var dispInfo = this.fn_didChange(this.ds_dpDispInfo);
        	var exItemInfo = this.fn_didChange(this.ds_salsPrcInfo);
        	var tabInfo_1 = this.Div00.form.Tab00.Tabpage1.form.fn_shouldSave();
        	var tabInfo_2 = this.Div00.form.Tab00.Tabpage2.form.fn_shouldSave();
        	var newPrdReq = false;
        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        		newPrdReq = true;
        	}

        	if (oprUnitInfo || dispInfo || exItemInfo || tabInfo_1 || tabInfo_2 || newPrdReq)	return true;

        	return false;
        };

        this.fn_makeForServerOprUnitInfo = function() {
        	if (!this.fn_didChange(this.ds_oprUnitInfo)) {
        		return this.ds_forServerOprUnitInfo;
        	}

        	return this.fn_getSaveDataset(this.ds_oprUnitInfo, this.ds_forServerOprUnitInfo);
        };

        this.fn_makeForServerDpDispInfo = function() {
        	if (!this.fn_didChange(this.ds_dpDispInfo)) {
        		return this.ds_forServerDpDispInfo;
        	}
        	if (this.ds_salsPrcInfo == undefined || this.ds_salsPrcInfo.rowcount == 0)
        	{
        		//this.ds_dpDispInfo.setColumn(0, "RIGHT_NOW", "1");
        	}

        	// 날짜 14자리로 정리함.(이동작 안하면 17자리의 값이 설정됨)
        	if (this.ds_dpDispInfo.rowcount > 0) {
        		var strDtm = this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM");
        		var endDtm = this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_END_DTM");
        		strDtm = strDtm.substr(0, 14);
        		endDtm = endDtm.substr(0, 14);
        		this.ds_dpDispInfo.setColumn(0, "SALS_DSGN_SALSPRC_STR_DTM", strDtm);
        		this.ds_dpDispInfo.setColumn(0, "SALS_DSGN_SALSPRC_END_DTM", endDtm);
        	}

        	return this.fn_getSaveDataset(this.ds_dpDispInfo, this.ds_forServerDpDispInfo);
        };

        this.fn_makeForServerExItemInfo = function() {
        	if (!this.fn_didChange(this.ds_salsPrcInfo)) {
        		return this.ds_forServerExItemInfo;
        	}
        	return this.fn_getSaveDataset(this.ds_salsPrcInfo, this.ds_forServerExItemInfo);
        };

        this.fn_saveEvent = function()
        {
        	this.ds_forServerOprUnitInfo = this.fn_makeForServerOprUnitInfo();
        	this.ds_forServerDpDispInfo = this.fn_makeForServerDpDispInfo();
        	this.ds_forServerExItemInfo = this.fn_makeForServerExItemInfo();
        	this.ds_savePcPrdPrcDtl = this.Div00.form.Tab00.Tabpage1.form.fn_getSaveDataset01();		// SSP기준가
        	this.ds_savePcPrdQty = this.Div00.form.Tab00.Tabpage2.form.fn_getSaveDataset01();		// 물량배분
        	this.ds_savePcPrdDlcstDtls = this.Div00.form.Tab00.Tabpage2.form.fn_getSaveDataset02();	// 배송비할증

        	var  strSave = "";
        	if(this.ds_forServerOprUnitInfo != null && this.ds_forServerOprUnitInfo.rowcount > 0)
        		strSave =strSave+ " ds_save1=ds_forServerOprUnitInfo";
        	if(this.ds_savePcPrdPrcDtl != null && this.ds_savePcPrdPrcDtl.rowcount > 0)
        		strSave =strSave+ " ds_save2=ds_savePcPrdPrcDtl";
        	if(this.ds_savePcPrdQty != null && this.ds_savePcPrdQty.rowcount > 0)
        		strSave =strSave+ " ds_save3=ds_savePcPrdQty";
        	if(this.ds_savePcPrdDlcstDtls != null && this.ds_savePcPrdDlcstDtls.rowcount > 0)
        		strSave =strSave+ " ds_save4=ds_savePcPrdDlcstDtls";
        	if(this.ds_forServerDpDispInfo != null && this.ds_forServerDpDispInfo.rowcount > 0)
        		strSave =strSave+ " ds_save5=ds_forServerDpDispInfo";
        	if(this.ds_forServerExItemInfo != null && this.ds_forServerExItemInfo.rowcount > 0)
        		strSave =strSave+ " ds_save6=ds_forServerExItemInfo";

        	if( (this.ds_forServerOprUnitInfo != null  && this.ds_forServerOprUnitInfo.rowcount > 0 ))
        	{
        	   this.add_dispHistData();
        	   strSave += " ds_save7=ds_dispHist";
        	}

        	for(var i=0; i< this.ds_forServerOprUnitInfo; i++)
        	{
        		this.ds_forServerOprUnitInfo.setColumn(i,"RIGHT_NOW",'1');
        	}

        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        		if(this.ds_saveNewPrdReq != null) this.ds_saveNewPrdReq.clearData();
        		this.ds_saveNewPrdReq.addRow();
        		this.ds_saveNewPrdReq.setColumn(0, "CO_CD", this.fv_coCd);
        		this.ds_saveNewPrdReq.setColumn(0, "NEW_PRD_REQ_NO", this.newPrdReqNo);
        		this.ds_saveNewPrdReq.setColumn(0, "PRD_ID", this.prdId);
        		this.ds_saveNewPrdReq.setColumn(0, "PRC_PROC_STATS_CD", "20");
        		if(this.ds_saveNewPrdReq.rowcount > 0 ) strSave =strSave+ " ds_save8=ds_saveNewPrdReq";
        	}
        	if((typeof(this.newPrdReqNo) == "undefined" || this.newPrdReqNo == "" || this.newPrdReqNo == null) && this.strIsNew == 'Y'){
        			if(this.ds_dpDispInfo.getColumn(0,'NEW_PRD_REQ_NO') != null && this.ds_dpDispInfo.getColumn(0, "NEW_PRD_REQ_NO")!= undefined){
        				if(this.ds_saveNewPrdReq != null) this.ds_saveNewPrdReq.clearData();
        				this.ds_saveNewPrdReq.addRow();
        				this.ds_saveNewPrdReq.setColumn(0, "CO_CD", this.fv_coCd);
        				this.ds_saveNewPrdReq.setColumn(0, "NEW_PRD_REQ_NO", this.ds_dpDispInfo.getColumn(0, "NEW_PRD_REQ_NO"));
        				this.ds_saveNewPrdReq.setColumn(0, "PRD_ID", this.prdId);
        				this.ds_saveNewPrdReq.setColumn(0, "PRC_PROC_STATS_CD", "20");
        				if(this.duplication =='Y'){
        					this.ds_saveNewPrdReq.setColumn(0, "DUP_CHECK", this.duplication);
        				}
        				if(this.ds_saveNewPrdReq.rowcount > 0 ) strSave =strSave+ " ds_save8=ds_saveNewPrdReq";
        			}
        		}

        	strSave = nexacro.trim(strSave);
        	//alert("babo is " + strSave);
        	this.fn_save(strSave);
        };

        // 영업지정판매가와 기준판매가 체크박스 관계 검사(기준판매가를 적용하거나, 영업지정판매가를 입력하세요)
        this.fn_checkSalsprcUseAndSalsprc = function() {
        	var checkValue = this.Div02.form.chk_bssSalsprcUse.value;
        	var salsPrc = this.Div02.form.edt_salsprc.value;

        	if (checkValue == "N" && salsPrc <= 0) {
        		return false;
        	}
        	return true;
        };

        this.fn_applyOprUnitInfo = function() {
        	// 추가버튼 화면 표시여부
        	if (this.ds_oprUnitInfo.rowcount > 0)	this.Div02.form.btn_add1.set_visible(true);
        	else	this.Div02.form.btn_add1.set_visible(false);
        };

        // 추가버튼 클릭시 컴포넌트 활성화
        this.fn_enableComponentByAdding = function(flag) {
        	if (flag) {

        		this.Div02.form.chk_bssSalsprcUse.set_readonly(false);
        		this.Div02.form.chk_bssSalsprcRightNow.set_readonly(false);
        		this.cal_salsprcStrDtm.set_readonly(true);
        		this.Div02.form.edt_salsprc.set_readonly(false);

        		this.Div02.form.chk_bssSalsprcRightNow.set_value("1");
        		this.Div02.form.chk_bssSalsprcUse.set_value("N");
        		this.Div02.form.edt_salsprc.set_value("0");


        	}

        };

        // 저장할 때 "추가"할 데이터의 시작일자(SALS_DSGN_SALSPRC_STR_DTM) 검사
        this.fn_checkSalsprcStrDtm = function() {
        	if (this.strIsNew == "Y")	return true;	// 개별등록인 경우 ds_dpDispInfo에 데이터가 없기 때문에 무조건 true.
        	if (this.ds_salsPrcInfo.rowcount <= 0){

        	}else{
        		// SALS_DSGN_SALSPRC_STR_DTM
        		var strDtm = this.ds_salsPrcInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM").substr(0, 14);
        		var calSalsprcStrDtm = this.cal_salsprcStrDtm.value.substr(0, 14);

        		if (calSalsprcStrDtm <= strDtm)	return false;
        	}

        	return true;
        };

        // ds_dpDispInfo 데이터셋 첫번째 ROW의 상태가 업데이트 상태인지 체크
        this.fn_isRowTypeUpdate = function() {
        	if (this.ds_dpDispInfo.rowcount <= 0)	return false;
        	var rowType = this.ds_dpDispInfo.getRowType(0);

        	if (rowType == Dataset.ROWTYPE_UPDATE)	return true;
        	return false;
        };


        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_close_onclick");
        	this.fn_regMethodCtrlENTER("btn_regist_onclick");
        };

        /***********************************************************************************************
        *  컴포넌트별 함수 영역
        ************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.ds_dpDispInfo != null && this.ds_dpDispInfo.rowcount < 1){
        		//alert("상품ID와 사업장선택후 조회버튼를 누르세요.");
        		this.alert(this.fn_getMessage("ERRP000263"));
        		return;
        	}
        	if(this.fn_shouldSave() == false )	{
        		alert(this.fn_getMessage("ERRS000155"));
        		return;
        	}

        	if(this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 0){
        		//alert("유효한 구매정보가 존재하지 않습니다.");
        		this.alert(this.fn_getMessage("ERRP000216"));
        		return false;
        	}

        	if (!this.fn_checkSalsprcUseAndSalsprc()) {
        		//alert("기준판매가를 적용하거나, 영업지정판매가를 입력하세요.");
        		this.alert(this.fn_getMessage("ERRP000257"));
        		return;
        	}

        	if (this.fn_isRowTypeUpdate()) {
        		if (!this.fn_checkSalsprcStrDtm()) {
        			//alert("기등록된 이력의 시작일자보다 과거시점을 등록할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000254"));
        			return;
        		}
        	}

        	if (this.fn_didChange(this.ds_dpDispInfo)) {
        		if (this.ds_dpDispInfo.getColumn(0, "RIGHT_NOW") == "0" &&
        			this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM").substr(0, 14) <= this.fn_todayTime())
        		{
        			//alert("과거시점을 등록할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000256"));
        			return;
        		}

        		var salsPrcValue = this.fn_getDSValue(this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC"));
        		var salsPrcUseYn = this.fn_getDSValue(this.ds_dpDispInfo.getColumn(0, "BSS_SALSPRC_USEYN"));

        		if((salsPrcUseYn == "N" || salsPrcUseYn == "") && (salsPrcValue == "0" || salsPrcValue == ""))
        		{
        			//alert("기준판매가를 적용하거나, 영업지정판매가를 입력하세요.");
        			this.alert(this.fn_getMessage("ERRP000257"));
        			return;
        		}
        	}

        	if(this.ds_salsPrcInfo != null && this.ds_salsPrcInfo.rowcount == 0 && this.strIsNew != "Y" && !this.fn_didChange(this.ds_dpDispInfo)){
        		//alert("영업지정판매가는 최소 1개의 기간은 필수입니다.");
        		this.alert(this.fn_getMessage("ERRP000258"));
        		return;
        	}


        	this.sspBssSalsprc = 0;
        	if(this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 1 ){
        		this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(0,"SSP_BSS_SALSPRC");
        	}else if(this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 2 ){
        		this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(1,"SSP_BSS_SALSPRC");
        	}
        	//Tab1 저장 기준가
        	//this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(0,"SSP_BSS_SALSPRC");

        	//Tab2 저장(물량할인 / 배송비)
        	this.pcPrdQty = this.Div00.form.Tab00.Tabpage2.form.ds_pcPrdQty;
        	this.pcPrdDlcstDtls = this.Div00.form.Tab00.Tabpage2.form.ds_pcPrdDlcstDtls;

        	//수정여부 확인 컬럼
        	var qtyQtyFlag = true;
        	var dlcstDtlsQtyFlag = true;
        	var qtyAmtFlag = true;
        	var dlcstDtlsAmtFlag = true;
        	var qtyAmtSalsprcFlag = true;
        	var dlcstDtlsAmtSalsprcFlag = true;


        	if(this.pcPrdQty != null){
        		for (var i = 0; i < this.pcPrdQty.rowcount; i++) {
        			if (this.pcPrdQty.getColumn(i,"QTY_ITV_STR") == '' || this.pcPrdQty.getColumn(i,"QTY_ITV_STR") == null ||
        				this.pcPrdQty.getColumn(i,"QTY_ITV_END") == '' || this.pcPrdQty.getColumn(i,"QTY_ITV_END") == null) {
        				qtyQtyFlag = false;
        			}
        			if ((this.pcPrdQty.getColumn(i,"DC_AMT") == '' || this.pcPrdQty.getColumn(i,"DC_AMT") == null) &&
        				this.pcPrdQty.getColumn(i,"DC_AMT") != '0') {
        				qtyAmtFlag = false;
        			}
        			if (this.pcPrdQty.getColumn(i,"DC_AMT") >= this.sspBssSalsprc) {
        				qtyAmtSalsprcFlag = false;
        			}
        		}
        	}

        	if(this.pcPrdDlcstDtls != null){
        		for (var i = 0; i < this.pcPrdDlcstDtls.rowcount; i++) {
        			if (this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_STR") == ''||this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_STR") == null ||
        				this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_END") == ''||this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_END") == null) {
        				dlcstDtlsQtyFlag = false;
        			}
        			if ((this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") == ''||this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") == null) &&
        				 this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") != '0') {
        				dlcstDtlsAmtFlag = false;
        			}
        			if (this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") >= this.sspBssSalsprc) {
        				//dlcstDtlsAmtSalsprcFlag = false;
        			}
        		}
        	}

        	if(this.ds_oprUnitInfo != null){
        		for(var i = 0; i < this.ds_oprUnitInfo.rowcount ; i++){
        			if((this.ds_oprUnitInfoOrg.getColumn(i,"DISP_STATS_CD")=="10" && (this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "20" || this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "30")) ||
        				(this.ds_oprUnitInfoOrg.getColumn(i,"DISP_STATS_CD")=="20" && this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "30") ||
        				(this.ds_oprUnitInfoOrg.getColumn(i,"DISP_STATS_CD")=="30" && this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "20") ||
        				(this.displayGubun == 2 && (this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "20" || this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "30"))
        				){
        				if(this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CHGRSN")==null || this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CHGRSN")=='' ){
        					this.Div02.form.Grid00.selectRow(i);
        					//alert("진열상태 변경사유를 입력해주세요.");
        					this.alert(this.fn_getMessage("ERRP000217"));
        					return false;
        				}else if(this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CHGRSN").length < 5){
        					this.Div02.form.Grid00.selectRow(i);
        					//alert("진열상태 변경사유는 5글자 이상이어야합니다.");
        					this.alert(this.fn_getMessage("ERRP000218"));
        					return false;
        				}
        			}

        		}
        	}



        	if (qtyQtyFlag == false) {
        		//alert("상품 Condition 물량할인 - 물량정보를 확인해주세요.");
        		this.alert(this.fn_getMessage("ERRP000219"));
        		return false;
        	}
        	else if (qtyAmtFlag == false) {
        		//alert("상품 Condition 물량할인 - 할인금액 입력이 누락되었습니다.");
        		this.alert(this.fn_getMessage("ERRP000220"));
        		return false;
        	}
        	else if (dlcstDtlsQtyFlag == false) {
        		//alert("상품 Condtion 배송비 - 물량정보를 확인해주세요.");
        		this.alert(this.fn_getMessage("ERRP000221"));
        		return false;
        	}
        	else if (dlcstDtlsAmtFlag == false) {
        		//alert("상품 Condtion 배송비 - 할증금액 입력이 누락되었습니다.");
        		this.alert(this.fn_getMessage("ERRP000222"));
        		return false;
        	}
        	else if (qtyAmtSalsprcFlag == false) {
        		//alert("상품 Condtion 물량할인 - 할인금액이 SSP기준판매가보다 큽니다.");
        		this.alert(this.fn_getMessage("ERRP000223"));
        		return false;
        	}
        	else if (dlcstDtlsAmtSalsprcFlag == false) {
        		//alert("상품 Condtion 배송비 - 할증금액이 SSP기준판매가보다 큽니다.");
        		this.alert(this.fn_getMessage("ERRP000224"));
        		return false;
        	}

        	//이력 모두 삭제후 다시등록시 최초여부 설정
        	if(this.ds_salsPrcInfo.rowcount == 0 && this.fn_didChange(this.ds_dpDispInfo)){
        		this.ds_dpDispInfo.setColumn(0,"FST_HST_YN","Y");
        	}

        	//var sReturn = this.confirm("입력된 내용을 저장하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000225"));
        	if (sReturn) {
        		this.fn_saveEvent();
        	}
        };

        this.btn_replace_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("초기화 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000227"));
        	if (sReturn) {
        		this.fn_searchExItemInfo();
        	}
        };

        this.add_dispHistData = function()
        {
        	if(this.ds_dispHist != undefined && this.ds_dispHist.rowcount != 0 )
        		this.ds_dispHist.clearData();

        	this.ds_dispHist.addRow();
        	this.ds_dispHist.setColumn(0,"CO_CD",this.ds_searchNew.getColumn(0,"CO_CD"));
        	this.ds_dispHist.setColumn(0,"PRD_ID",this.ds_searchNew.getColumn(0,"PRD_ID"));
        	this.ds_dispHist.setColumn(0,"BZPLC_ID",this.ds_searchNew.getColumn(0,"BZPLC_ID"));
        trace("data is " + this.fn_getStrFromDataset(this.ds_dispHist,0));
        };


        this.Div00_Button00_onclick = function(obj,e)//진열상태변경이력 팝업
        {
        	var objParam = {coCd:this.fv_coCd, prdId:this.prdId};
        	this.gfn_openPopup("sspBoLa30", "RD::SSP_BO_LA_30.xfdl", objParam);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	//변경사항 체크하고, 저장할지 물어보고 닫기
        	//this.parent.close(false);
        	trace(this.strIsNew + "||" +this.strAuth);
        	if(this.strAuth == "3"){
        		this.parent.parent.close(false);
        	}else if(this.strIsNew == "Y"){
        		if(this.fn_shouldSave() == false )	{
        			this.parent.parent.close(false);
        			return false;
        		}
        		//var	sReturn = this.confirm("등록을 취소하시겠습니까?");
        		var sReturn = this.alert(this.fn_getMessage("ERRP000013"));
        		if (sReturn) {
        			this.parent.parent.close(false);
        		}
        	}else {
        		if(this.fn_shouldSave() == false )	{
        			this.parent.parent.close(false);
        			return false;
        		}
        		//var sReturn = this.confirm("수정을 취소하시겠습니까?");
        		var sReturn = this.confirm(this.fn_getMessage("ERRP000226"));
        		if (sReturn) {
        			this.parent.parent.close(false);
        		}
        	}

        };

        this.Div00_Tab00_Tabpage1_Button00_onclick = function(obj,e) // 기준판매가변동현황
        {
        	var objParam = {coCd:this.fv_coCd, prdId:this.prdId};
        	this.gfn_openPopup("sspBoLa27", "RD::SSP_BO_LA_27.xfdl", objParam);
        };

        this.Div00_btn_prdIdPopup_onclick = function(obj,e) //PRD_ID 팝업
        {
        	var params = {coCd:this.fv_coCd, pubOnlySprCd:'E'};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_bzplcIdPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd};
        	var option = {};
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params, "fn_popupCallback", option);
        };
        //this.displayGubun : 1 조회 , 2:신규, 3:수정
        //this.strAuth
        //1:md담당자 , tab1의 기준가 재생성 버튼 활성화, tab2비활성화
        //2:영업담당자 , 수정 : tab1 비활성화, tab2활성화
        //				   신규 : 신규버튼 활성화this.strIsNew
        //3:조회 , tab1,tab2 비활성화

        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	var ObjDs = obj.getBindDataset();
            var cssclass = this.Div02.form.Grid00.getCellPropertyValue(e.row, e.col, "cssclass");
        	if (this.strAuth == "2") {
        		if (cssclass == "10" || cssclass == "20" || cssclass == "30") {
        			ObjDs.setColumn(ObjDs.rowposition,"DISP_STATS_CD",cssclass);
        		}
        		else if (cssclass == "40") {
        			ObjDs.setColumn(ObjDs.rowposition,"AUTO_LOGIC_EM_YN","Y");
        		}
        		else if (cssclass == "50") {
        			ObjDs.setColumn(ObjDs.rowposition,"AUTO_LOGIC_EM_YN","N");
        		}
        	}
        };

        this.Div00_edt_salsprc_onchanged = function(obj,e)
        {
        	var splitVal = e.postvalue.split('.');
        	if (splitVal.length == 2) {
        		if (splitVal[1].length > 4) {
        			//alert("올바른 입력방식이 아닙니다.");
        			this.alert(this.fn_getMessage("ERRP000261"));
        			this.Div02.form.edt_salsprc.set_value(splitVal[0]+"."+splitVal[1].substr(0,4));
        			return false;
        		}
        	}
        	if (this.Div02.form.edt_salsprc.value < 0) {
        		//alert("음수를 입력할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000238"));
        		this.Div02.form.edt_salsprc.value = e.prevalue;
        		return;
        	}
        	//예상매입가 계산
        	//영업지정판매가 변경시
        	this.fn_calcProfit(false);
        };

        this.Div00_cal_salsprcStrDtm_onchanged = function(obj,e)
        {
        	if (e.postvalue < this.fn_calcToday() ) {
        		alert(this.fn_getMessage("ERRS000178"));
        		this.cal_salsprcStrDtm.set_value(e.prevalue.substr(0, 14));
        	}
        	else
        		this.cal_salsprcStrDtm.set_value(e.postvalue.substr(0, 14));

        	if(this.cal_salsprcStrDtm.value > this.fn_calcToday(60, 0, 0)){
        		//alert("영업지정판매가는 60일이후로는 선택할수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000259"));
        		this.cal_salsprcStrDtm.set_value(e.prevalue);

        		return true;
        	}
        };

        this.Div00_edt_prdId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_getCodeName(obj,this.Div02.form.edt_prdNm,"PRD");
        	}
        };
        this.Div02_edt_prdId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div02.form.edt_prdNm,"PRD");
        };

        this.Div00_edt_bzplcId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_getCodeName(obj,this.Div02.form.edt_bzplcNm,"BZPLC");
        	}
        };
        this.Div02_edt_bzplcId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div02.form.edt_bzplcNm,"BZPLC");
        };

        this.Div00_btn_dispStatsSelect_onclick = function(obj,e)
        {
        	var objParam = {prdId:this.prdId, bzplcId:this.bzplcId};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_31.xfdl", objParam);
        };

        this.Div00_chk_bssSalsprcUse_onchanged = function(obj,e)
        {
        	if (e.postvalue == "Y") {
        		//alert("기준판매가로 가격을 적용합니다.");
        		this.alert(this.fn_getMessage("ERRP000260"));
        		this.Div02.form.edt_salsprc.set_value(0);
        		this.fn_calcProfit(true);
        		this.Div02.form.edt_salsprc.set_readonly(true);
        	}
        	else {
        		this.Div02.form.edt_calcProfit.set_value(0);
        		this.Div02.form.edt_salsprc.set_readonly(false);
        		this.cal_salsprcStrDtm.set_readonly(false);
        	}
        };

        this.chk_bssSalsprcRightNow_onchanged = function(obj,e)
        {
        	if (e.postvalue == "1") {
        		this.preSalsDsgnSalsprcStrDtm = this.cal_salsprcStrDtm.value.substr(0, 14);
        		this.cal_salsprcStrDtm.set_value(this.fn_todayTime());
        		this.cal_salsprcStrDtm.set_readonly(true);
        	}
        	else {
        		this.cal_salsprcStrDtm.set_readonly(false);
        		if (!this.gfn_isNull(this.preSalsDsgnSalsprcStrDtm)) {
        			this.cal_salsprcStrDtm.set_value(this.preSalsDsgnSalsprcStrDtm);
        		}
        	}
        };

        this.btn_newPrdPrcPrcess_onclick = function(obj,e)
        {
        	//예외종료처리
        	var resArray = [];
        	var resData = {};

        	resData.PRD_ID = this.prdId
        	resData.NEW_PRD_REQ_NO = this.newPrdReqNo;

        	resArray.push(resData);

        	var params = {data : resArray};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_12.xfdl", params, "fn_popupCallback", options);
        };

        this.fn_searchDetail = function()
        {
        	if(this.fn_getDSValue(this.ds_searchNew.getColumn(0,"PRD_ID")) == "" ||
        	  this.fn_getDSValue(this.ds_searchNew.getColumn(0,"BZPLC_ID")) == "")	{
        		return;
        	}

        	this.Div00.form.Tab00.tabpages[0].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	this.Div00.form.Tab00.tabpages[1].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	this.Div00.form.Tab00.tabpages[2].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        		this.Div00.form.Tab00.tabpages[3].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	}
        	this.Div00.form.Tab00.tabpages[0].form.fn_search("1");
        	this.Div00.form.Tab00.tabpages[1].form.fn_searchPcPrdQtyDlcstDtls();
        	this.Div00.form.Tab00.tabpages[2].form.fn_getBasicInfo(true);
        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != "" && this.newPrdReqNo != null){
        		this.Div00.form.Tab00.tabpages[3].form.fn_searchPcPrdReq();
        	}

        };

        // 버튼(확장.접기)
        this.btn_extend_onclick = function(obj,e)
        {
        	if(this.bExtend == false)   this.setExtend(true);
            else                        this.setExtend(false);
        };

        this.setExtend = function(bVal)
        {
            if(bVal)
            {
        		this.Div02.form.btn_extend.set_text("∧");
                this.bExtend = true;
                this.fn_changeSearchArea(false);
            }
            else
            {
        		this.Div02.form.btn_extend.set_text("∨");
                this.bExtend = false;
                this.fn_changeSearchArea(true);
            }
        };

        this.fn_changeSearchArea = function(flag) {
            // 접기
            if (flag == true)	this.Div02.set_height(this.Div02.uMinSize);
            // 펼치기
            else	this.Div02.set_height(this.Div02.uMaxSize);
            this.resetScroll();
        };

        this.btn_regist_onclick = function(obj,e)
        {
        	if(this.fn_getDSValue(this.ds_searchNew.getColumn(0,"PRD_ID")) == ""){
        		//alert("상품ID가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000215"));
        		return false;
        	}
        	if(this.fn_getDSValue(this.ds_searchNew.getColumn(0,"BZPLC_ID")) == ""){
        		//alert("사업장ID가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000252"));
        		return false;
        	}
        	//상품ID와 사업장ID를 비교하여 이전과 달라졋을경우 신규상품Id초기화

        	if(this.prdId != this.ds_searchNew.getColumn(0,"PRD_ID") || this.bzplcId != this.ds_searchNew.getColumn(0,"BZPLC_ID")){
        		this.newPrdReqYn = "N";
        		this.newPrdReqNo = "";
        	}

        	this.ds_searchNew.setColumn(0, "CO_CD", this.fv_coCd);
        	this.prdId = this.ds_searchNew.getColumn(0,"PRD_ID");
        	this.prdNm = this.ds_searchNew.getColumn(0,"PRD_NM");
        	this.bzplcId = this.ds_searchNew.getColumn(0,"BZPLC_ID");
        	this.bzplcNm = this.ds_searchNew.getColumn(0,"BZPLC_NM");
        	this.childForm.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm, this.strIsNew);
        	this.fn_searchExItemInfo();
        };
        this.btn_del1_onclick = function(obj,e)
        {
        	if(this.ds_salsPrcInfo.rowposition == 0) {
        		if (this.ds_salsPrcInfo.getRowType(this.ds_salsPrcInfo.rowposition) != Dataset.ROWTYPE_INSERT &&
        			this.ds_salsPrcInfo.getColumn(this.ds_salsPrcInfo.rowposition, "SALS_DSGN_SALSPRC_STR_DTM") <= this.fn_todayTime()) {
        			//alert("과거이력은 삭제할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000235"));
        			return;
        		}
        		this.ds_salsPrcInfo.deleteRow(this.ds_salsPrcInfo.rowposition);
        	}
        	else {
        		//alert("첫번째 열만 삭제할 수 있습니다.");
        		this.alert(this.fn_getMessage("ERRP000253"));
        	}

        };

        // 영업지정판매가 추가버튼
        this.btn_add1_onclick = function(obj,e)
        {
        	this.fn_enableComponentByAdding(true);
        	this.cal_salsprcStrDtm.set_value(this.fn_todayTime());
        	this.cal_salsprcEndDtm.set_value("99991231235959");
        };

        /***********************************************************************************************
        * TAB EVENT 영역
        ************************************************************************************************/
        this.Div00_Tab00_canchange = function(obj,e)
        {
        	return true;
        };

        this.Div00_Tab00_onchanged = function(obj,e)
        {
        	//trace("### Div00_Tab00_onchanged - tab_pos : " + e.postindex);
        	this.tab_pos = e.postindex;
        	this.childForm = this.Div00.form.Tab00.tabpages[e.postindex].form;
        	this.childForm.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);	// Tab의 preload가 true인 경우만 사용가능

        };

        this.fn_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_replace.addEventHandler("onclick",this.btn_replace_onclick,this);
            this.Div02.form.stc_disRsn.addEventHandler("onclick",this.Div00_stc_disRsn_onclick,this);
            this.Div02.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edt_prdId_onkeyup,this);
            this.Div02.form.edt_prdId.addEventHandler("onchanged",this.Div02_edt_prdId_onchanged,this);
            this.Div02.form.btn_prdIdPopup.addEventHandler("onclick",this.Div00_btn_prdIdPopup_onclick,this);
            this.Div02.form.stc_category00.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div02.form.btn_dispStatsSelect.addEventHandler("onclick",this.Div00_btn_dispStatsSelect_onclick,this);
            this.Div02.form.stc_saftInvnYn00.addEventHandler("onclick",this.Div00_stc_saftInvnYn00_onclick,this);
            this.Div02.form.stc_saftInvnYn00_00.addEventHandler("onclick",this.Div00_stc_saftInvnYn00_onclick,this);
            this.Div02.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div02.form.btn_bzplcIdPopup.addEventHandler("onclick",this.Div00_btn_bzplcIdPopup_onclick,this);
            this.Div02.form.edt_bzplcId.addEventHandler("onkeyup",this.Div00_edt_bzplcId_onkeyup,this);
            this.Div02.form.edt_bzplcId.addEventHandler("onchanged",this.Div02_edt_bzplcId_onchanged,this);
            this.Div02.form.chk_bssSalsprcUse.addEventHandler("onchanged",this.Div00_chk_bssSalsprcUse_onchanged,this);
            this.Div02.form.edt_salsprc.addEventHandler("onchanged",this.Div00_edt_salsprc_onchanged,this);
            this.Div02.form.chk_bssSalsprcRightNow.addEventHandler("onchanged",this.chk_bssSalsprcRightNow_onchanged,this);
            this.Div02.form.stc_category.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div02.form.btn_add1.addEventHandler("onclick",this.btn_add1_onclick,this);
            this.Div02.form.btn_del1.addEventHandler("onclick",this.btn_del1_onclick,this);
            this.Div02.form.btn_extend.addEventHandler("onclick",this.btn_extend_onclick,this);
            this.Div02.form.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.Div02.form.stc_category00_00.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div00.form.Tab00.addEventHandler("onchanged",this.Div00_Tab00_onchanged,this);
            this.Div00.form.Tab00.addEventHandler("canchange",this.Div00_Tab00_canchange,this);
            this.cal_salsprcStrDtm.addEventHandler("onchanged",this.Div00_cal_salsprcStrDtm_onchanged,this);
            this.cal_salsprcEndDtm.addEventHandler("onchanged",this.Div00_cal_salsprcEndDtm_onchanged,this);
            this.btn_newPrdPrcPrcess.addEventHandler("onclick",this.btn_newPrdPrcPrcess_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_39.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
