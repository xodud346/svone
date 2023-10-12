(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_25");
            this.set_titletext("재입고알림관리");
            this.set_dragscrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_MULTI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_RCV_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_RCV_MTD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveRow", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notcStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteRow", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_RCV_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTC_RCV_MTD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","123",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","21","123","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","295","127","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","438","127","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","451","127","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dateUnit","595","127","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"161","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"161","60","28","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","30",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01","20","61",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","20","92",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","21","92","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","160","96","296","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","463","96","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            obj.set_tooltiptext("멀티팝업 참조용");
            obj.set_enable("true");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","486","96","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","731","92","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_notcStats","871","96","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_notcStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00","21","30","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","21","61","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_custSprCd","160","34","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_custSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","160","65","199","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMltPop","366",null,"24","24",null,"111",null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcTxtPop","390",null,"24","24",null,"111",null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","731","30","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mbr","871","34","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.getSetter("onclick").set("Common_onclick");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrMltPop","1076",null,"24","24",null,"143",null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrTxt","1100",null,"24","24",null,"143",null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","731","61","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","871","66","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMltPop","1076",null,"24","24",null,"111",null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitTxt","1100",null,"24","24",null,"111",null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","159","127","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_dateType_innerdataset", obj);
            Div00_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">요청일시</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발송일시</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_dateType_innerdataset);
            obj.set_text("SSP등록일");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"216","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"216","104","28","btn_layoutSave:2",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("50개씩");
            obj.set_value("50");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"216","110","28","cmb_viewCount:1",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"216","81","28","btn_exceldown:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("알림제외");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","254",null,null,"20","76",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_autosizingtype("col");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"97\"/><Column size=\"155\"/><Column size=\"102\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"128\"/><Column size=\"136\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"회원구분\"/><Cell col=\"4\" text=\"회원ID\"/><Cell col=\"5\" text=\"회원명\"/><Cell col=\"6\" text=\"업무용 SMS 수신여부\"/><Cell col=\"7\" text=\"업무용 E-MAIL 수신여부\"/><Cell col=\"8\" text=\"상품ID\"/><Cell col=\"9\" text=\"상품명\"/><Cell col=\"10\" text=\"대표규격\"/><Cell col=\"11\" text=\"주문단위\"/><Cell col=\"12\" text=\"상품가격\"/><Cell col=\"13\" text=\"상품상태\"/><Cell col=\"14\" text=\"진열상태\"/><Cell col=\"15\" text=\"수신방법\"/><Cell col=\"16\" text=\"요청일시\"/><Cell col=\"17\" text=\"알림일시\"/><Cell col=\"18\" text=\"완료여부\"/><Cell col=\"19\" text=\"수정자ID\"/></Band><Band id=\"body\"><Cell edittype=\"expr:NOTC_STATS_YN == &apos;N&apos; ? &apos;checkbox&apos; : &apos;none&apos;\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CUST_SPR_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:MBR_ID\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"5\" text=\"bind:MSKD_MBR_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CHAR_RCV_AGRE_YN\"/><Cell col=\"7\" text=\"bind:MAIL_RCV_AGRE_YN\"/><Cell col=\"8\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"9\" text=\"bind:PRD_NM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"10\" text=\"bind:ATTR_VAL\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"11\" text=\"bind:SELL_UNIT_CD\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"12\" text=\"bind:SALS_PRC\" textAlign=\"center\" displaytype=\"number\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizecol=\"limitmin\"/><Cell col=\"13\" text=\"bind:PRD_USE_NM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"14\" text=\"bind:DISP_STATS_NM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"15\" text=\"bind:NOTC_RCV_MTD_NM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"16\" text=\"bind:REG_DTM\" textAlign=\"center\" displaytype=\"normal\" calendardisplaynulltype=\"default\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"17\" text=\"bind:SEND_DTM\" textAlign=\"center\" displaytype=\"normal\" calendardisplaynulltype=\"default\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtype=\"default\"/><Cell col=\"18\" text=\"bind:NOTC_STATS_NM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"default\" calendardateformat=\"bind:NOTC_STATS_YN\"/><Cell col=\"19\" text=\"bind:UPDPSN_ID\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","229","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"216","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cmb_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_mbr","value","ds_search","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_oprUnit","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_notcStats","value","ds_search","NOTC_STATS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cmb_dateType","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_25.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_25.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_25.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_25.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.notificationTotalCount = 0;

        this.fv_oApp = nexacro.getApplication();
        //this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        this.fv_coCd = '1000';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
            this.fn_commonCodeSearch();
        	this._gfnHeadCheckSelectAll = function(){};
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 조회
        		this.btn_search_onclick();
        	}

        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.btn_save_onclick();
        		event.preventDefault();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/pr/notc-mng/select-notification-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=notificationList";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_delete = function (bInit){
        	var sSvcId = "delete";
            var sUrl = "/pr/notc-mng/delete-notification.do";
            var inDs = "ds_deleteRow=ds_deleteRow";
            var outDs = "ds_list=notificationList";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_dateUnit=ds_output1 ds_custSprCd=ds_output2 ds_notcStats=ds_output3";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,CUST_SPR_CD,NOTC_STATS_YN");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.notificationTotalCount,this.cmb_viewCount.value,"fn_pageCallback");
                    break;

                case "commonCodeSearch" :
        			//일자단위
        			this.ds_dateUnit.insertRow(0);
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD", "");
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.Div00.form.cmb_dateUnit.set_index(0);

        			// 고객구분코드
        			this.ds_custSprCd.insertRow(0);
        			this.ds_custSprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_custSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.Div00.form.cmb_custSprCd.set_index(0);

        			// 알림상품상태코드
        			this.ds_notcStats.insertRow(0);
                    this.ds_notcStats.setColumn(0, "COM_DTL_CD", "");
                    this.ds_notcStats.setColumn(0, "COM_DTL_CD_NM", "전체");
                    this.Div00.form.cmb_notcStats.set_index(0);

        			// 일자구분
        			this.Div00.form.cmb_dateType.set_index(0);

        			this.fn_setSearchDate();

                    break;

                case "delete" :
                    this.fn_search(false);
                    break;
            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
                this.fn_search();
            }

            var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
            this.totalPageCount.set_text(sTotText);
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_mnfrPopup" :
                    var jsonData = JSON.parse(args);
                    this.Div00.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
                    this.Div00.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);

                    break;

        		case "btn_psnPopup" :
                    var jsonData = JSON.parse(args);
                    this.Div00.form.edt_updpsnId.set_value(jsonData.EMP_NO);
                    this.Div00.form.edt_oprtrNm.set_value(jsonData.OPRTR_NM);

                    break;

            }
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            var oGrid=null;
            if(sGridId == "grd_list"){
                oSortInfo = this.grd_list.uaSortInfo;
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
                this.fn_search(true);
            }
        };

        this.fn_callBackForSearch = function(){
        	this.fn_search(true);
        }

        //조건 팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){
        		case "mbrMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID + ",";
        				sNmList += rtnData.MBR_NM + ",";
        			}
        			this.ds_search.setColumn(0,"MBR_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"MBR_NM",sNmList.replace(/,\s*$/, ""));

        			break;
        		case "bzplcMultiPopup":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.BZPLC_ID + ",";
        				sNmList += rtnData.BZPLC_NM + ",";
        			}
        			this.ds_search.setColumn(0,"BZPLC_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"BZPLC_NM",sNmList.replace(/,\s*$/, ""));

        			break;
        		case "oprUntMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.OPR_UNIT_ID + ",";
        				sNmList += rtnData.OPR_UNIT_NM + ",";
        			}
        			this.ds_search.setColumn(0,"OPR_UNIT_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"OPR_UNIT_NM",sNmList.replace(/,\s*$/, ""));

        			break;
        		case "prdMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.PRD_ID_VIEW + ",";
        				sNmList += rtnData.PRD_NM + ",";
        			}
        			this.ds_search.setColumn(0,"PRD_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"PRD_NM",sNmList.replace(/,\s*$/, ""));

        			break;
        		default :
        			break;
        	}
        };

        //조건 멀티 텍스트 팝업 콜백
        this.fn_multiTextPopupCallback = function(objID, rtnValue) {

        	var resParam = JSON.parse(rtnValue);
        	var splitedStringArr = resParam.textValue.split(",");

        	switch(objID){
        		case "mbrMultiTextPopup":
        			this.ds_search.setColumn(0,"MBR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"MBR_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;
        		case "bzplcMultiTextPopup":
        			this.ds_search.setColumn(0,"BZPLC_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"BZPLC_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;
        		case "oprUntMultiTextPopup":
        			this.ds_search.setColumn(0,"OPR_UNIT_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"OPR_UNIT_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;
        		case "prdMultiTextPopup":
        			this.ds_search.setColumn(0,"PRD_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"PRD_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;
        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
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

        	this.uGridList="grd_list";
        	this.grd_list.uRightMouse="true";
        	this.grd_list.uPersonalFlag="true";
        	//this.grd_list.uDefaultFormat="CHK|MNFR_NO|MRO_MNFR_NM|MNFR_NM|MNFR_NM_DIFF_YN|UPD_DTM|UPDPSN_ID|UPDPSN_NM";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

            var term = this.Div00.form.cmb_dateUnit.value;
            var objDate = new Date();
            var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

            /* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
        	if( term == "" ) {
                this.Div00.form.cal_startDate.set_value("");
        		this.Div00.form.cal_endDate.set_value("");
            } else {
        		if( term == "1" ) {
        			objDate.setDate(objDate.getDate());
        		} else if( term == "2" ) {
        			objDate.setDate(objDate.getDate() -6);
        		} else if( term == "3" ) {
        			objDate.setDate(objDate.getDate() -13);
        		} else if( term == "4" ) {
        			objDate.setMonth(objDate.getMonth() -1);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "5" ) {
        			objDate.setMonth(objDate.getMonth() -3);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "6" ) {
        			objDate.setMonth(objDate.getMonth() -6);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "7" ) {
        			objDate.setMonth(objDate.getMonth() -12);
        			objDate.setDate(objDate.getDate() +1);
        		}

        		this.Div00.form.cal_startDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.Div00.form.cal_endDate.set_value(sToday);
        	}
        };

        // 그리드 해드 클릭
        this.grd_list_onheadclick = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body", "CHK")) {
        		var val = obj.getCellProperty("head", e.cell, "text") == "0" ? "1" : "0";
        		obj.setCellProperty("head", e.cell, "text", val);

        		for(var i = 0; i < this.ds_list.rowcount; i++) {
        			if(obj.getCellPropertyValue(i, e.cell, "edittype") != "none") {
        			    this.ds_list.setColumn(i, "CHK", val);
        			}
        		}
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //달력콤보선택
        this.Div00_cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
            this.fn_setSearchDate();
        };

        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "CUST_SPR_CD", this.Div00.form.cmb_custSprCd.value); 		//회원구분코드
        	this.ds_search.setColumn(0, "NOTC_STATS_YN", this.Div00.form.cmb_notcStats.value); 		//알림상태코드
        	this.ds_search.setColumn(0, "MBR_ID", this.Div00.form.edt_mbr.value);  					// 회원ID
        	this.ds_search.setColumn(0, "BZPLC_ID", this.Div00.form.edt_bzplcId.value);  			// 사업장ID
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.Div00.form.edt_oprUnit.value);  		// 운영단위ID
        	this.ds_search.setColumn(0, "PRD_ID", this.Div00.form.edt_prdId.value);  				// 상품id
        	this.ds_search.setColumn(0, "START_DTM", this.Div00.form.cal_startDate.value);  		//일자시작
        	this.ds_search.setColumn(0, "END_DTM", this.Div00.form.cal_endDate.value);   		 	//일자종료
        	this.ds_search.setColumn(0, "DATE_TYPE", this.Div00.form.cmb_dateType.value);  			//날짜타입
        	this.ds_search.setColumn(0, "DATE_UNIT", this.Div00.form.cmb_dateUnit.value);  			//날짜단위
        	this.ds_search.setColumn(0, "ROW_COUNT"  , this.cmb_viewCount.value);
        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	// edt 입력 기준으로 조회조건 다시 세팅
        	this.fn_setMSearch(this.name,"MBR_ID_MULTI",this.Div00.form.edt_mbr.value);					// 회원ID
        	this.fn_setMSearch(this.name,"BZPLC_ID_MULTI",this.Div00.form.edt_bzplcId.value);				// 사업장ID
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID_MULTI",this.Div00.form.edt_oprUnit.value);			// 운영단위ID
        	this.fn_setMSearch(this.name,"PRD_ID_MULTI",this.Div00.form.edt_prdId.value);					// 상품id

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_search(true);
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}
        };

        //초기화버튼
        this.Div00_btn_clear_onclick = function(obj,e)
        {
            var objDate = new Date();
            var today = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
            this.ds_search.reset();
        	this.Div00.form.cmb_custSprCd.set_index(0);
        	this.Div00.form.edt_mbr.set_value('');
        	this.Div00.form.edt_bzplcId.set_value('');
        	this.Div00.form.edt_oprUnit.set_value('');
        	this.Div00.form.edt_prdId.set_value('');
        	this.Div00.form.cmb_notcStats.set_index(0);
        	this.Div00.form.cmb_dateType.set_index(0);
        	this.Div00.form.cal_startDate.set_value('');
            this.Div00.form.cal_endDate.set_value('');
        	this.Div00.form.cmb_dateUnit.set_index(0);
        };


        //엑셀다운로드
        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount>0){
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}else{
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');
        	}
        };

        // 엑셀다운로드
        this.fn_excelDownload = function(objId, ret) {

        	var answr = ret.split("||||");
        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"재입고알림목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_PA_25"});

        }

        //회원 조건 팝업
        this.div_search_btn_mbrMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		bzplcId : this.ds_search.getColumn(0,"BZPLC_ID"),
        		oprUnitId : this.ds_search.getColumn(0,"OPR_UNIT_ID"),
        		deptId : this.ds_search.getColumn(0,"DEPT_ID"),
        		mbrId: this.Div00.form.edt_mbr,
        		mbrNm: ""
        	};
        	this.gfn_openPopup("mbrMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //회원 조건 텍스트 입력 팝업
        this.div_search_btn_mbrTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_mbr
        	};

        	var options = {};
        	options.title = "회원";

        	this.gfn_openPopup("mbrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //사업장 조건 팝업
        this.div_search_btn_bzplcMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		bzplcIds: this.Div00.form.edt_bzplcId,
        		bzplcNms: ""
        	};

        	this.gfn_openPopup("bzplcMultiPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        };
        //사업장 조건 텍스트 입력 팝업
        this.div_search_btn_bzplcTxtPop_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_bzplcId
        	};

        	var options = {};
        	options.title = "사업장";

        	this.gfn_openPopup("bzplcMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //운영단위 조건 팝업
        this.div_search_btn_oprUnitMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		bzplcId : this.ds_search.getColumn(0,"BZPLC_ID"),
        		oprUntId: this.Div00.form.edt_oprUnit,
        		oprUntNm: ""
        	};

        	this.gfn_openPopup("oprUntMultiPop", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };
        //운영단위 조건 텍스트 입력 팝업
        this.div_search_btn_oprUnitTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_oprUnit
        	};

        	var options = {};
        	options.title = "운영단위";

        	this.gfn_openPopup("oprUntMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //상품ID 조건 팝업
        this.div_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		prdId : this.Div00.form.edt_prdId.value,
        		prdNm: ""
        	};

        	this.gfn_openPopup("prdMultiPop", "PR_POP::SSP_BO_PP_16.xfdl", objParam);
        };
        //상품ID 조건 텍스트 입력 팝업
        this.div_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_prdId
        	};

        	var options = {};
        	options.title = "상품 ID 조회";

        	this.gfn_openPopup("prdMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        // 알림제외 버튼
        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_list.filter("CHK==1");
        	this.ds_deleteRow.copyData(this.ds_list, true);
        	this.ds_list.filter("");

        	var sReturn = this.confirm("선택한 목록을 알림제외하시겠습니까?");
            if(sReturn){
                this.fn_delete();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.Div00.form.Static10.addEventHandler("onclick",this.Div00_Static10_onclick,this);
            this.Div00.form.cmb_dateUnit.addEventHandler("onitemchanged",this.Div00_cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.Static03_00.addEventHandler("onclick",this.Div00_Static03_onclick,this);
            this.Div00.form.Static03_01.addEventHandler("onclick",this.Div00_Static03_onclick,this);
            this.Div00.form.Static03_01_00.addEventHandler("onclick",this.Div00_Static03_onclick,this);
            this.Div00.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.Div00.form.edt_prdId.addEventHandler("onchanged",this.div_edt_prdId_onchanged,this);
            this.Div00.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_btn_prdIdMultiPopup_onclick,this);
            this.Div00.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_btn_prdIdMultiInput_onclick,this);
            this.Div00.form.btn_bzplcMltPop.addEventHandler("onclick",this.div_search_btn_bzplcMltPop_onclick,this);
            this.Div00.form.btn_bzplcTxtPop.addEventHandler("onclick",this.div_search_btn_bzplcTxtPop_onclick,this);
            this.Div00.form.Static08.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.btn_mbrMltPop.addEventHandler("onclick",this.div_search_btn_mbrMltPop_onclick,this);
            this.Div00.form.btn_mbrTxt.addEventHandler("onclick",this.div_search_btn_mbrTxt_onclick,this);
            this.Div00.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.btn_oprUnitMltPop.addEventHandler("onclick",this.div_search_btn_oprUnitMltPop_onclick,this);
            this.Div00.form.btn_oprUnitTxt.addEventHandler("onclick",this.div_search_btn_oprUnitTxt_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.cmb_viewCount.addEventHandler("onitemchanged",this.cmb_viewCount_onitemchanged,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
