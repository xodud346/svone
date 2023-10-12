(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_01");
            this.set_titletext("사업장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GRD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LGGRP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_IDS\" type=\"STRING\" size=\"2560\"/><Column id=\"BZPLC_NMS\" type=\"STRING\" size=\"2560\"/><Column id=\"IDDT_IDS\" type=\"STRING\" size=\"2560\"/><Column id=\"IDDT_NMS\" type=\"STRING\" size=\"2560\"/><Column id=\"CORP_IDS\" type=\"STRING\" size=\"2560\"/><Column id=\"CORP_NMS\" type=\"STRING\" size=\"2560\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eIDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eCORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDI_DEVI_SELL_PERMIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"eBIZNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZCAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_MNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LGGRP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIZDOC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTCI_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AGNC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_APRV_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ORD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY_STR_MM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDI_SELL_PERMIT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consnCustYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">특약고객</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">특약고객 외</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSrch","0","0",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("lblRow01","20","20",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblBizplc","20","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtBizplcId","160","24","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("icnBizplcPop","395","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt","450","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("산업군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblCorp","883","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCorpId","lblCorp:10","24","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("icnIddt","824","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("icnCorp","edtCorpId:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblRow01_00","20","51",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblCUST_SPR_CD","20","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbCUST_SPR_CD","160","55","150","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCUST_SPR_CD");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt00","450","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbBZPLC_REG_STATS_CD","591","55","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsBZPLC_REG_STATS_CD");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblSE_YN","883","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("11");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbUSE_YN","1023","55","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00","20","82",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","20","82","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("15");
            obj.set_text("고객등급");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","450","82","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_text("LG그룹구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt00_00","883","82","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("17");
            obj.set_text("외부구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbLG_GRP_YN","590","86","232","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsLG_GRP_YN");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbOSD_SPR_CD","1023","86","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsOSD_SPR_CD");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"lblRow01_00_00:10","60","26","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnInitSrchForm",null,"124","60","26","btnSrch:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("21");
            obj.set_text("초기화");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_reset");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbCUST_GRD_CD","Static30_00_00:10","86","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsCUST_GRD_CD");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtIddtId","591","24","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","423","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_iddtMultiText","853","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_corpMultiText","icnCorp:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"124","100","26","btnInitSrchForm:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("29");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbCONSN_CUST_YN","315","55","129","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.set_tooltiptext("특약고객여부");
            obj.set_innerdataset("ds_consnCustYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text(" 전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00_00","20","113","431","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cmbMEDI_DEVI_SELL_PERMIT_YN","160","117","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_02","20","113","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("33");
            obj.set_text("의료기기 판매허가");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00_00_00","450","113","433","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_02_00","450","113","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("35");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtBizno","590","117","231","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("icnBizno","823","117","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_biznoMultiText","853","117","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Div("divRslt","20","218",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","530",null,"38","20",null,null,null,null,null,this.divRslt.form);
            obj.set_taborder("1");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.divRslt.addChild(obj.name, obj);

            obj = new Combo("cmbPageSz",null,"divSrch:20","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pageOpt");
            obj.set_codecolumn("COL_VALUE");
            obj.set_datacolumn("COL_NM");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"180","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add00",null,"180","110","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","193","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"180","110","28","cmbPageSz:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","cmbPageSz:10",null,"510","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsBzplc");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"104\"/><Column size=\"115\"/><Column size=\"120\"/><Column size=\"117\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"91\"/><Column size=\"84\"/><Column size=\"111\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"고객구분\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"법인명\"/><Cell col=\"4\" text=\"산업군명\"/><Cell col=\"5\" text=\"사업장ID\"/><Cell col=\"6\" text=\"사업장명\"/><Cell col=\"7\" text=\"고객등급\"/><Cell col=\"8\" text=\"사업자등록번호\"/><Cell col=\"9\" text=\"LG그룹구분\"/><Cell col=\"10\" text=\"외부구분\"/><Cell col=\"11\" text=\"순수외부구분\"/><Cell col=\"12\" text=\"계약관리명\"/><Cell col=\"13\" text=\"영업담당자ID\"/><Cell col=\"14\" text=\"영업담당자명\"/><Cell col=\"15\" text=\"등록상태\"/><Cell col=\"16\" text=\"주문대행\"/><Cell col=\"17\" text=\"그룹결재\"/><Cell col=\"18\" text=\"법인결재\"/><Cell col=\"19\" text=\"그룹발주\"/><Cell col=\"20\" text=\"법인발주\"/><Cell col=\"21\" text=\"예산년도 시작월\"/><Cell col=\"22\" text=\"특약고객\"/><Cell col=\"23\" text=\"의료기기 판매허가\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CUST_SPR_CD_NM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USE_YN_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CORP_ID_NM\" edittype=\"none\" tooltiptext=\"bind:CORP_ID_NM\"/><Cell col=\"4\" text=\"bind:IDDT_ID_NM\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_pgmTpCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:BZPLC_ID\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_gThmeDownCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"6\" text=\"bind:BZPLC_NM\" edittype=\"none\" textAlign=\"left\" tooltiptext=\"bind:BZPLC_NM\"/><Cell col=\"7\" text=\"bind:BZPLC_GRD_ID_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BIZNO\"/><Cell col=\"9\" text=\"bind:LGGRP_YN_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:OSD_SPR_CD_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:POSD_SPR_CD_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:CONT_MNG_NM\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"13\" text=\"bind:SALS_CHRPSN_ID1\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:SALS_CHRPSN_ID1_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:BZPLC_REG_STATS_CD_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"16\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:ODR_AGNC_USE_YN\"/><Cell col=\"17\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:GRP_APRV_USE_YN\"/><Cell col=\"18\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:CORP_APRV_USE_YN\"/><Cell col=\"19\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:GRP_ORD_USE_YN\"/><Cell col=\"20\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:CORP_ORD_USE_YN\"/><Cell col=\"21\" text=\"bind:BGT_YY_STR_MM\"/><Cell col=\"22\" text=\"bind:CONSN_CUST_YNNM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:MEDI_DEVI_SELL_PERMIT_YNNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSrch.form.cmbCUST_SPR_CD","value","dsParam","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.cmbUSE_YN","value","dsParam","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.cmbLG_GRP_YN","value","dsParam","LGGRP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSrch.form.cmbCUST_GRD_CD","value","dsParam","BZPLC_GRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSrch.form.cmbBZPLC_REG_STATS_CD","value","dsParam","BZPLC_REG_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSrch.form.cmbOSD_SPR_CD","value","dsParam","OSD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSrch.form.edtBizplcId","value","dsParam","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSrch.form.edtIddtId","value","dsParam","eIDDT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSrch.form.edtCorpId","value","dsParam","eCORP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmbPageSz","value","dsParam","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSrch.form.cmbCONSN_CUST_YN","value","dsParam","CONSN_CUST_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSrch.form.cmbMEDI_DEVI_SELL_PERMIT_YN","value","dsParam","MEDI_DEVI_SELL_PERMIT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.edtBizno","value","dsParam","eBIZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_01.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_01.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.preSelectRowPosition = 0;
        this.uTotCunt = 0;
        this.uGrid    = this.grdList    ;
        this.uPaging  = this.divRslt.form.divPaging  ;
        this.uPageSz  = this.cmbPageSz;
        this.uPageIf  = this.lblPageInfo;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	trace("this.fn_onLoad");
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	// 고객파트 공통
        	this.dsParam.setColumn(0, 'CO_CD', this.getSession().coCd);  // Session

        	// 검색조건 초기화
        	this.fnInitSrchForm();

        	this.copyPaste.addGrid(this.grdList);
        }


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, "codeList", "USE_YN");
        	this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCodeSearch";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_comCodeCallBack");
        }

        // 조회
        this.fnSearch = function(page)	{
        	trace("<page:"+ page +"/>");
        //	alert("P1>"+ this.divSrch.form.edtBizplc.value);
        // 	//this.dsParam.setColumn(0,"USE_YN",this.cmb_useYn.value);
        // 	// 검색조건 입력
        // 	this.dsParam.addColumn("BZPLC_ID", "string", "256");d
        //
        // 	this.dsParam.setColumn(0, "BZPLC_ID", ["111", "222"]);
        // 	alert(this.dsParam.getColumn(0, "BZPLC_ID"));

        //	dsParam = (dsParam == null) ? this.fnGetDsSrch() : dsParam;
        //	//alert(dsParam.id);

        	var ofrmSrch = this.divSrch.form;
        	var param = {
        		  BZPLC_REG_STATS_CD: ofrmSrch.cmbBZPLC_REG_STATS_CD.value
        		, LGGRP_YN          : ofrmSrch.cmbLG_GRP_YN         .value

        	};
        	trace(JSON.stringify( param ));

        	var sSvcId = "listBzplc"        ;
        	var sUrl   = "/cc/bzplc/list.do";
        	var inDs   = "dsParam=dsParam"; // "dsParam=dsParam";  // + dsParam.id;
        	var outDs  = "dsBzplc=dsBzplc"  ;
        	var arg    = "";

        	// Paging
        	if( page == 0 || page == undefined ) {
        		this.uPaging.uPage    = 1 ;
        		this.uPaging.uPageNum = 0 ;
        		this.dsParam.setColumn(0, "START_NUM", this.uPaging.uPageNum);
        		this.dsParam.setColumn(0, "ROW_COUNT", this.uPageSz.value   );
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fnSearchClbk");
        }

        // 상세
        this.fnDetail = function()	{
        	//this.dsParam.setColumn(0,"USE_YN",this.cmb_useYn.value);
        	var sSvcId = "detailBzplc";
        	var sUrl   = "/cc/bzplc/detail.do";
        	var inDs   = "dsParam=dsParam";
        	var outDs  = "dsBzplc=dsBzplc";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fnDetailClbk");
        }

        // 엑셀다운
        this.fnExcelSearch = function()	{
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/cc/bzplc/select-all-excel-download.do";
        	var inDs   = "dsParam=dsParam";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 조회 트랜잭션 콜백함수
        this.fnSearchClbk = function(svcID, rCode, rMesg)	{
        	this.preSelectRowPosition = 0;

        	var totCunt = this.dsBzplc.getColumn(0, "TOT_CUNT");
        	this.uPaging.uTotCunt = totCunt == undefined ? 0 : totCunt;  //this.uPaging.uTotCount = this.dsBzplc.getColumn(0, "TOT_CUNT");

        	this.uPaging.form.cfn_createPage(this.uPaging, this.uPaging.uTotCunt, this.uPageSz.value, "fnPageClbk");
        }

        // Page Callback
        this.fnPageClbk = function(flg){  //trace(' fnPageClbk >>> ['+ p +']');
        	trace("<flg:"+ flg +"/>");

        	if (flg) {
        		this.dsParam.setColumn(0, "START_NUM", this.uPaging.uPageNum);
        		this.dsParam.setColumn(0, "ROW_COUNT", this.uPageSz.value   );

        		this.fnSearch(this.uPaging.uPageNum);
        	}

        	this.uPageIf.set_text("(총 "+ this.uPaging.uTotCunt +"건, "+ this.uPaging.uPage +" / "+ this.uPaging.uPageCnt +")");
        }

        this.fnDetailClbk = function(svcID, errorCode, errorMsg) {
        	alert("[svcID:"+ svcID +"]");

        }

        this.fn_comCodeCallBack = function(svcID, rCode, rMesg)	{
        	this.ds_useYn.insertRow(0);
        	this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit");

        	var oGrid = this.grdList, oPage = this.divRslt.form.div_paging;

        // 	this.oGrid.uSortFlag     = "true";
        // 	this.oGrid.uCellSizeType = "true";
        // 	this.oPage.uPageNum      =  0;
        // 	this.oPage.uPageRowCnt   = 10;

        	//grid 초기 설정
        	this.grdList.uSortFlag = "false";
        	this.grdList.uServerSortFlag = "true";
        	this.grdList.uSortCallback = "fn_sortCallback";
        	this.grdList.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grdList";
        	this.grdList.uRightMouse = "true";
        	this.grdList.uPersonalFlag = "true";
        	this.grdList.uDefaultFormat = "CHK,CUST_SPR_CD_NM,USE_YN_NM,CORP_ID_NM,IDDT_ID_NM,BZPLC_ID,BZPLC_NM,BZPLC_GRD_ID_NM,LGGRP_YN_NM,OSD_SPR_CD_NM,POSD_SPR_CD_NM,CONT_MNG_NM,SALS_CHRPSN_ID1,SALS_CHRPSN_ID1_NM,BZPLC_REG_STATS_CD_NM";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grdList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fnInitSrchForm = function() {
        	trace("this.fnInitSrchForm");  //return;

        	this.ccBindCode('cmbCUST_SPR_CD:CUST_SPR_CD'              , {cd:null, nm:'전체', useYn: 'Y'}, '');  // 고객구분: cmbCUST_SPR_CD
        	this.ccBindCode('cmbBZPLC_REG_STATS_CD:BZPLC_REG_STATS_CD', {cd:null, nm:'전체', useYn: 'Y'}, '');  // 사업장 등록상태: cmbBZPLC_REG_STATS_CD
        	//this.ccBindCode('cmbUSE_YN:USE_YN'                        , {cd:null, nm:'전체', useYn: 'Y'}, 'Y');  // 사용여부: cmbUSE_YN

        	this.ccBindCode('cmbCUST_GRD_CD:CUST_GRD_CD'              , {cd:null, nm:'전체', useYn: 'Y'}, '');  // 고객등급: cmbCUST_GRD_CD
        	this.ccBindCode('cmbLG_GRP_YN:LG_GRP_YN'                  , {cd:null, nm:'전체', useYn: 'Y'}, '');  // LG그룹구분: cmbLG_GRP_YN
        	this.ccBindCode('cmbOSD_SPR_CD:OSD_SPR_CD'                , {cd:null, nm:'전체', useYn: 'Y'}, '');  // 외부구분: cmbOSD_SPR_CD
        	this.ccBindCode('cmbPOSD_SPR_CD:POSD_SPR_CD'              , {cd:null, nm:'전체', useYn: 'Y'}, '');  // 순수외부구분: cmbPOSD_SPR_CD

        	this.dsParam.deleteAll();
        	this.dsParam.addRow();
        	this.dsParam.setColumn(0, "CO_CD"    ,  this.getSession().coCd);
        	this.dsParam.setColumn(0, "START_NUM",  0);
        	this.dsParam.setColumn(0, "ROW_COUNT", 20);
        	this.dsParam.setColumn(0, "USE_YN"   , 'Y');
        }






        this.fnNewDataset = function(dsName) {
        	var app = nexacro.getApplication();

        	var ds  = new Dataset();
        	ds.set_name(dsName);
        	ds.id = dsName;

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	//var oPaging = this.divRslt.form.divPaging;
        	this[dsName].setColumn(0, "START_NUM", 0);
        	this[dsName].setColumn(0, "ROW_COUNT", this.divRslt.form.cboPageSize.value);

        // 		this.Div00.form.div_paging.uPage=1;
        // 		this.Div00.form.div_paging.uPageNum=0;

        	app.addVariable(dsName, ds);
        }
        this.fnGetDsParams = function() {
        	var dsParam = this.fnNewDataset("dsParam");

        	return dsParam;
        }

        this.multipleTextBtn_onclick = function(obj,e) {
        	switch(e.fromobject.id) {
        		case 'btn_oprMultiText' :  // 사업장
        			this.fn_showTareaInput(this.name,"BZPLC_ID",this.divSrch.form.edtBizplcId.value, "multipleTextClbk",120,300);
        			break;

        		case 'btn_iddtMultiText' :
        			this.fn_showTareaInput(this.name,"IDDT_ID",this.divSrch.form.edtIddtId.value, "multipleTextClbk",120,300);
        			break;

        		case 'btn_corpMultiText' :
        			this.fn_showTareaInput(this.name,"CORP_ID",this.divSrch.form.edtCorpId.value, "multipleTextClbk",120,300);
        			break;

        		case 'btn_biznoMultiText' :
        			this.fn_showTareaInput(this.name,"BIZNO", this.divSrch.form.edtBizno.value, "multipleTextClbk",120,300);
        			break;

        	}
        }
        this.multipleTextClbk = function(sPopupId, sRetValue){
        	var rObj = JSON.parse(sRetValue);
        	var sIdList = "";
        	switch(sPopupId){
        		case 'SSP_BO_MA_01;BZPLC_ID':
        			for(var i=0; i < rObj.length; i++) {
        				rRow = JSON.parse(rObj[i]);
        				sIdList += rRow.VALUE +",";
        			}
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			this.divSrch.form.edtBizplcId.set_value(sIdList);
        			this.fn_setMSearch(this.name, rDataNm, sIdList);
        			break;

        		case 'SSP_BO_MA_01;IDDT_ID':
        			for(var i=0; i < rObj.length; i++) {
        				rRow = JSON.parse(rObj[i]);
        				sIdList += rRow.VALUE +",";
        			}
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			this.divSrch.form.edtIddtId.set_value(sIdList);
        			this.fn_setMSearch(this.name, rDataNm, sIdList);
        			break;

        		case 'SSP_BO_MA_01;CORP_ID':
        			for(var i=0; i < rObj.length; i++) {
        				rRow = JSON.parse(rObj[i]);
        				sIdList += rRow.VALUE +",";
        			}
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			this.divSrch.form.edtCorpId.set_value(sIdList);
        			this.fn_setMSearch(this.name, rDataNm, sIdList);
        			break;

        		case 'SSP_BO_MA_01;BIZNO':
        			for(var i=0; i < rObj.length; i++) {
        				rRow = JSON.parse(rObj[i]);
        				sIdList += rRow.VALUE +",";
        			}
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			this.divSrch.form.edtBizno.set_value(sIdList);
        			this.fn_setMSearch(this.name, rDataNm, sIdList);
        			break;
        	}
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 버튼 > 초기화
        this.divSrch_btnInitSrchForm_onclick = function(obj,e) {
        	this.fnInitSrchForm();
        }
        // 버튼 > 검색
        this.btnSrch_onclick = function(obj,e) {
        	if (e!=undefined && e.ctrlkey!=undefined && e.ctrlkey) {
        		alert(nexacro.getApplication().gds_userInfo.saveXML());
        		alert(nexacro.getApplication().gds_userInfo.getColumn(0, 'OPRTR_ID'));
        	}

        	//dsParam
        	//this.fnSearch();

        	// 화면ID set
        	this.dsParam.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr = this.divSrch.form.edtBizplcId.value;
        	var iddtStr = this.divSrch.form.edtIddtId.value;
        	var corpStr = this.divSrch.form.edtCorpId.value;
        	var biznoStr = this.divSrch.form.edtBizno.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BZPLC_ID", null);
        	}

        	if(iddtStr!="" && iddtStr!=null){
        		this.fn_setMSearch(this.name,"IDDT_ID",iddtStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "IDDT_ID", null);
        	}

        	if(corpStr!="" && corpStr!=null){
        		this.fn_setMSearch(this.name,"CORP_ID",corpStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "CORP_ID", null);
        	}

        	if(biznoStr!="" && biznoStr!=null){
        		this.fn_setMSearch(this.name,"BIZNO",biznoStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BIZNO", null);
        	}

        	//this.Div01.form.div_paging.uPage = 1;
        	this.divRslt.form.divPaging.uPage = 1;
        	this.dsParam.setColumn(0, "START_NUM", 0);

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fnSearch();
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}
        }

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grdList"){
        		oSortInfo = this.grdList.uaSortInfo;
        		this.dsParam.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.dsParam.setColumn(0,"SORT_TYPE",oSortInfo.status);
        	}

        	// 화면ID set
        	this.dsParam.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr = this.divSrch.form.edtBizplcId.value;
        	var iddtStr = this.divSrch.form.edtIddtId.value;
        	var corpStr = this.divSrch.form.edtCorpId.value;
        	var biznoStr = this.divSrch.form.edtBizno.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BZPLC_ID", null);
        	}

        	if(iddtStr!="" && iddtStr!=null){
        		this.fn_setMSearch(this.name,"IDDT_ID",iddtStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "IDDT_ID", null);
        	}

        	if(corpStr!="" && corpStr!=null){
        		this.fn_setMSearch(this.name,"CORP_ID",corpStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "CORP_ID", null);
        	}

        	if(biznoStr!="" && biznoStr!=null){
        		this.fn_setMSearch(this.name,"BIZNO",biznoStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BIZNO", null);
        	}

        	//this.Div01.form.div_paging.uPage = 1;
        	this.divRslt.form.divPaging.uPage = 1;
        	this.dsParam.setColumn(0, "START_NUM", 0);

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fnSearch();
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}






        };

        this.fn_callBackForSearch = function(){
        	this.fnSearch();
        }

        this.fn_callBackForExcelSearch = function(){
        	this.fnExcelSearch();
        }

        /**
         * Grid Cell Click
        **/
        // 그리드 > Row > 상세정보
        this.grdList_oncellclick = function(obj,e) {
        	var evtColID = this.getBindColumnIDByIndex(obj, e.cell), evtRidx = e.row;
        	var ds = obj.getBindDataset();
        	trace('[evtColID:'+ evtColID +']');

        	if ("BZPLC_ID" == evtColID) {
        		var o = { coCd: ds.getColumn(evtRidx, "CO_CD"), bzplcId: ds.getColumn(evtRidx, "BZPLC_ID") };
        		//this.gfn_openPopup("bzplcPop", "CC::SSP_BO_MA_02.xfdl", args, "", { title: '사업장 정보', titlebar: "true" });
        		this.$popup(this).iBzplc(o, function(p, r){
        			trace(JSON.stringify( r ));
        			// [2022.04.25] sg.park 저장시 부모창 새로고침용
        			if (r==undefined || r==null) { return; }
        			var R=JSON.parse( r );  if (R['refresh']!=undefined && R['refresh']==true) { this.fnSearch(); }
        		});
        	}
        }

        // 사업장 팝업아이콘
        this.divSrch_icnBizplcPop_onclick = function(obj,e) {
         	var p = {
        		coCd   : this.dsParam.getColumn(0, 'CO_CD'   ),
        //		bzplcId: this.dsParam.getColumn(0, 'BZPLC_ID'),
        //		bzplcNm: this.dsParam.getColumn(0, 'BZPLC_NM'),
        	};

        // 	this.$popup(init).sBzplc(p, function(p, r) {
        // 		let o=JSON.parse(r), keys=Object.keys(o), key=undefined;
        // 		for (var i in keys) {
        // 			key=keys[i];
        // 			if (key=='CO_CD') { continue; }
        // 			this.dsParam.setColumn(0, key, o[key]);
        // 		}
        // 	});

        	this.$popup(this).mBzplc(p, function(p, r) {
        		trace(JSON.stringify( r ));
        		var arry=JSON.parse(r), ids='', nms='';

        		for (var i in arry) {
        			var sRow=arry[i], oRow=JSON.parse( sRow );

        			ids += (ids==''?'':',') + oRow.BZPLC_ID;
        			//nms += (nms==''?'':',') + oRow.BZPLC_NM;
        		}

        		//this.dsParam.setColumn(0, 'BZPLC_IDS', ids);
        		//this.dsParam.setColumn(0, 'BZPLC_NMS', nms);
        		this.dsParam.setColumn(0,"BZPLC_ID", ids.length);
        		this.divSrch.form.edtBizplcId.set_value(ids.replace(/,\s*$/, ""));
        	});
        }

        // 산업군 팝업
        this.divSrch_icnIddt_onclick = function(obj,e) {
        	var p = { coCd: this.dsParam.getColumn(0, 'CO_CD'), };
        	this.$popup(this).sIddt(p, function(p, r) {
        		trace(JSON.stringify( r ));
        		var arry=JSON.parse(r), ids='', nms='';

        		for (var i in arry) {
        			var sRow=arry[i], oRow=JSON.parse( sRow );

        			ids += (ids==''?'':',') + oRow.IDDT_ID;
        			//nms += (nms==''?'':',') + oRow.IDDT_NM;
        		}

        		//this.dsParam.setColumn(0, 'IDDT_IDS', ids);
        		//this.dsParam.setColumn(0, 'IDDT_NMS', nms);
        		this.dsParam.setColumn(0,"IDDT_ID", ids.length);
        		this.divSrch.form.edtIddtId.set_value(ids.replace(/,\s*$/, ""));
        	});
        }

        // 법인 팝업
        this.divSrch_icnCorp_onclick = function(obj,e) {
        	var p = { coCd: this.dsParam.getColumn(0, 'CO_CD'), };
        	this.$popup(this).mCorp(p, function(p, r) {
        		trace(JSON.stringify( r ));
        		var arry=JSON.parse(r), ids='', nms='';

        		for (var i in arry) {
        			var oRow=arry[i];
        			ids += (ids==''?'':',') + oRow.CORP_ID;
        			//nms += (nms==''?'':',') + oRow.CORP_NM;
        		}

        		//this.dsParam.setColumn(0, 'CORP_IDS', ids);
        		//this.dsParam.setColumn(0, 'CORP_NMS', nms);
        		this.dsParam.setColumn(0,"CORP_ID", ids.length);
        		this.divSrch.form.edtCorpId.set_value(ids.replace(/,\s*$/, ""));
        	});
        };


        // 사업자번호 팝업
        this.divSrch_icnBizno_onclick = function(obj,e) {
        trace("dda");
        	var p = { coCd: this.dsParam.getColumn(0, 'CO_CD'), };
        	this.$popup(this).mBzplc(p, function(p, r) {
        		trace(JSON.stringify( r ));
        		var arry=JSON.parse(r), ids='', nms='';

        		for (var i in arry) {
        			var sRow=arry[i], oRow=JSON.parse( sRow );

        			ids += (ids==''?'':',') + oRow.BIZNO;
        			//nms += (nms==''?'':',') + oRow.IDDT_NM;
        		}

        		//this.dsParam.setColumn(0, 'IDDT_IDS', ids);
        		//this.dsParam.setColumn(0, 'IDDT_NMS', nms);
        		this.dsParam.setColumn(0,"BIZNO", ids.length);
        		this.divSrch.form.edtBizno.set_value(ids.replace(/,\s*$/, ""));
        	});
        }

        this.cmbPageSz_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grdList, fileName:"사업장 목록"});
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grdList", this.grdList.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grdList");
        	this.grdList.set_formats(this.grdList.uOrgFormat);

        };

        // 대용량 다운로드
        this.Div00_btn_allExcel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		// 대용량 엑셀을 다운로드 하시겠습니까?
        		return;
        	}

        	// 화면ID set
        	this.dsParam.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr = this.divSrch.form.edtBizplcId.value;
        	var iddtStr = this.divSrch.form.edtIddtId.value;
        	var corpStr = this.divSrch.form.edtCorpId.value;
        	var biznoStr = this.divSrch.form.edtBizno.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BZPLC_ID", null);
        	}

        	if(iddtStr!="" && iddtStr!=null){
        		this.fn_setMSearch(this.name,"IDDT_ID",iddtStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "IDDT_ID", null);
        	}

        	if(corpStr!="" && corpStr!=null){
        		this.fn_setMSearch(this.name,"CORP_ID",corpStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "CORP_ID", null);
        	}

        	if(biznoStr!="" && biznoStr!=null){
        		this.fn_setMSearch(this.name,"BIZNO",biznoStr,"dsParam");
        	}else{
        		this.dsParam.setColumn(0, "BIZNO", null);
        	}

        	//this.Div01.form.div_paging.uPage = 1;
        	this.divRslt.form.divPaging.uPage = 1;
        	this.dsParam.setColumn(0, "START_NUM", 0);

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fnExcelSearch();
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForExcelSearch");
        	}
        };

        this.SSP_BO_MA_01_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btnSrch_onclick();
        	}
        };

        this.dsParam_onvaluechanged = function(obj,e)
        {
        	var custSprCd=this[e.fromobject.id].getColumn(0, 'CUST_SPR_CD');
        	this.divSrch.form.cmbCONSN_CUST_YN.set_visible('20'==custSprCd);
        };

        this.divSrch_Static30_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_01_onkeyup,this);
            this.divSrch.form.icnBizplcPop.addEventHandler("onclick",this.divSrch_icnBizplcPop_onclick,this);
            this.divSrch.form.icnIddt.addEventHandler("onclick",this.divSrch_icnIddt_onclick,this);
            this.divSrch.form.icnCorp.addEventHandler("onclick",this.divSrch_icnCorp_onclick,this);
            this.divSrch.form.btnSrch.addEventHandler("onclick",this.btnSrch_onclick,this);
            this.divSrch.form.btnInitSrchForm.addEventHandler("onclick",this.divSrch_btnInitSrchForm_onclick,this);
            this.divSrch.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btn_iddtMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btn_corpMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btn_allExcel.addEventHandler("onclick",this.Div00_btn_allExcel_onclick,this);
            this.divSrch.form.Static30_00_00_02_00.addEventHandler("onclick",this.divSrch_Static30_00_00_02_00_onclick,this);
            this.divSrch.form.edtBizno.addEventHandler("onchanged",this.divSrch_edtBizno_onchanged,this);
            this.divSrch.form.icnBizno.addEventHandler("onclick",this.divSrch_icnBizno_onclick,this);
            this.divSrch.form.btn_biznoMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.cmbPageSz.addEventHandler("onitemchanged",this.cmbPageSz_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_add00.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.grdList.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.dsParam.addEventHandler("onvaluechanged",this.dsParam_onvaluechanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
