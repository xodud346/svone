(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_09");
            this.set_titletext("신규상품요청 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"REQ_NO_PRD_ID_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_OPR_UNIT_ID_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_EQL_CMPR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelMetaSeq\" type=\"STRING\" size=\"256\"/><Column id=\"saveFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_MULTI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"PRD_NM_EQL_CMPR\">N</Col><Col id=\"NEW_PRD_PROC_STATS_CD\">22</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RVW_REQ_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FNL_PROC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"INT\" size=\"256\"/><Column id=\"MRO_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_allOptnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPrpsStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reprPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"__카테고리__\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__사업장__\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__운영단위__\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__상품담당자_처리자__\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"__요청자__\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newPrdProcStats", this);
            obj.set_useclientlayout("true");
            obj.set_filterstr("COM_USR_DEFN_NM_1.indexOf(\'S\') != -1");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row><Row><Col id=\"COM_USR_DEFN_NM_1\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outputlarge", this);
            obj._setContents("<ColumnInfo><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"255","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("요청번호/상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","849","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("공용전용 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_text("사업장/운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66","849","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"217","60","28","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"217","60","28","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00","849","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("대표상품 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_bzplcIdOprUnitIdSpr","160","55","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_bzplcIdOprUnitIdSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_bzplcIdOprUnitIdSpr_innerdataset", obj);
            div_search_form_cmb_bzplcIdOprUnitIdSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">BZPLC_ID</Col><Col id=\"datacolumn\">사업장</Col></Row><Row><Col id=\"codecolumn\">OPR_UNIT_ID</Col><Col id=\"datacolumn\">운영단위</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_bzplcIdOprUnitIdSpr_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcIdOprUnitId","254","55","115","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("1111111111");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNmOprUnitNm","373","55","438","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdOprUnitIdPop","815","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_reqDtFnlProcDtSpr","160","86","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_reqDtFnlProcDtSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_reqDtFnlProcDtSpr_innerdataset", obj);
            div_search_form_cmb_reqDtFnlProcDtSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REQ_DT</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">FNL_PROC_DT</Col><Col id=\"datacolumn\">최종처리일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_reqDtFnlProcDtSpr_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","254","86","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_value("20220412");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","356","86","10","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","368","86","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_value("20220412");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","472","86","81","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","113",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","849","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_text("제안상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","20","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","144",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00","849","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_text("요청고객");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00","20","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("52");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","20","174",null,"32","20",null,"1296",null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00","849","175","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("54");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00","20","174","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_reqNoPrdIdSpr","160","24","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_reqNoPrdIdSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_reqNoPrdIdSpr_innerdataset", obj);
            div_search_form_cmb_reqNoPrdIdSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NEW_PRD_REQ_NO</Col><Col id=\"datacolumn\">요청번호</Col></Row><Row><Col id=\"codecolumn\">PRD_ID</Col><Col id=\"datacolumn\">상품ID</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_reqNoPrdIdSpr_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqNoPrdId","254","24","205","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("R00000001,R00000001,");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","268","148","73","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_value("12345678");
            obj.set_text("12345678");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","345","148","105","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdChrpsnIdPop","454","148","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdPrpsStatsCd","989","117","316","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_prdPrpsStatsCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySprCd","989","24","316","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","160","178","290","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01","488","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("56");
            obj.set_text("처리자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_00_00","488","174","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdNmEqlCmpr","454","184","13","13",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqNoPrdIdEdt","458","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_procpsnId","628","148","73","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_value("12345678");
            obj.set_text("12345678");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_procpsnNm","705","148","106","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_value("테스트");
            obj.set_text("테스트");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_procpsnIdPop","815","148","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","989","55","92","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClnm","1085","55","192","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPop","1281","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_reprPrdSprCd","989","86","316","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_reprPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00","488","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("58");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_mallSprCd","628","24","211","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdSpec","628","178","211","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqCustId","989","148","92","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqCustNm","1085","148","192","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqCustIdPop","1281","147","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","989","178","92","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1085","178","192","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNoPop","1281","178","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdProcStatsNm","160","117","656","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_tooltiptype("default");
            obj.set_text("AAA");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_newPrdProcStatsNm","815","117","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multiCombo");
            obj.set_text("");
            obj.set_border("1px solid gainsboro");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsnSpr","160","148","104","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_chrpsnSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsnSpr_innerdataset", obj);
            div_search_form_cmb_chrpsnSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PRD_CHRPSN</Col><Col id=\"datacolumn\">상품담당자</Col></Row><Row><Col id=\"codecolumn\">MD_CHRPSN</Col><Col id=\"datacolumn\">MD담당자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsnSpr_innerdataset);
            obj.set_text("전체");
            obj.set_value("PRD_CHRPSN");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"265","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"265","112","28","336",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","304",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("조회 조건 입력 후 조회 버튼을 눌러주세요.");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"S-MRO 요청번호\"/><Cell col=\"3\" text=\"몰구분\"/><Cell col=\"4\" text=\"공용전용구분\"/><Cell col=\"5\" text=\"처리상태\"/><Cell col=\"6\" text=\"MD검토상태\"/><Cell col=\"7\" text=\"대표상품구분\"/><Cell col=\"8\" text=\"제안상태\"/><Cell col=\"9\" text=\"제안/중복상품ID\"/><Cell col=\"10\" text=\"상품명\"/><Cell col=\"11\" text=\"카테고리ID\"/><Cell col=\"12\" text=\"카테고리\"/><Cell col=\"13\" text=\"요청규격\"/><Cell col=\"14\" text=\"제조원ID\"/><Cell col=\"15\" text=\"제조원명\"/><Cell col=\"16\" text=\"상품ID\"/><Cell col=\"17\" text=\"요청일\"/><Cell col=\"18\" text=\"사업장ID\"/><Cell col=\"19\" text=\"사업장명\"/><Cell col=\"20\" text=\"운영단위ID\"/><Cell col=\"21\" text=\"운영단위\"/><Cell col=\"22\" text=\"사업팀담당자\"/><Cell col=\"23\" text=\"요청자\"/><Cell col=\"24\" text=\"상품담당자\"/><Cell col=\"25\" text=\"MD담당자\"/><Cell col=\"26\" text=\"처리자\"/><Cell col=\"27\" text=\"최종처리일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"expr:NEW_PRD_PROC_STATS_CD == &quot;22&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:NEW_PRD_REQ_NO\" wordWrap=\"none\" cssclass=\"grd_Txt_Blue_U\"/><Cell col=\"2\" text=\"bind:MRO_PRD_REQ_NO\"/><Cell col=\"3\" text=\"bind:MALL_SPR_NM\" wordWrap=\"none\"/><Cell col=\"4\" text=\"bind:PUB_ONLY_SPR_NM\" wordWrap=\"none\"/><Cell col=\"5\" text=\"bind:NEW_PRD_PROC_STATS_NM\" wordWrap=\"none\"/><Cell col=\"6\" text=\"bind:RVW_REQ_STATS_NM\"/><Cell col=\"7\" text=\"bind:REPR_PRD_SPR_NM\" wordWrap=\"none\"/><Cell col=\"8\" text=\"bind:PRD_PRPS_STATS_NM\" wordWrap=\"none\"/><Cell col=\"9\" text=\"bind:PRPS_PRD_ID\"/><Cell col=\"10\" text=\"bind:REQ_PRD_NM\" wordWrap=\"none\"/><Cell col=\"11\" text=\"bind:PRD_CLCD\" wordWrap=\"none\"/><Cell col=\"12\" text=\"bind:PRD_CLNM\" wordWrap=\"none\"/><Cell col=\"13\" text=\"bind:REQ_PRVL\" wordWrap=\"none\"/><Cell col=\"14\" text=\"bind:MNFR_NO\" wordWrap=\"none\"/><Cell col=\"15\" text=\"bind:MNFR_NM\" wordWrap=\"none\"/><Cell col=\"16\" text=\"bind:PRD_ID\" wordWrap=\"none\"/><Cell col=\"17\" text=\"bind:REQ_DT\" wordWrap=\"none\"/><Cell col=\"18\" text=\"bind:BZPLC_ID\" wordWrap=\"none\"/><Cell col=\"19\" text=\"bind:BZPLC_NM\" wordWrap=\"none\"/><Cell col=\"20\" text=\"bind:OPR_UNIT_ID\" wordWrap=\"none\"/><Cell col=\"21\" text=\"bind:OPR_UNIT_NM\" wordWrap=\"none\"/><Cell col=\"22\" text=\"bind:OPR_CHRPSN_NM\"/><Cell col=\"23\" text=\"bind:REQPSN_NM\" wordWrap=\"none\"/><Cell col=\"24\" text=\"bind:PRD_CHRPSN_NM\" wordWrap=\"none\"/><Cell col=\"25\" text=\"bind:MD_CHRPSN_NM\" wordWrap=\"none\"/><Cell col=\"26\" text=\"bind:PROCPSN_NM\" wordWrap=\"none\"/><Cell col=\"27\" text=\"bind:FNL_PROC_DT\" wordWrap=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","279","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"265","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_receipt",null,"265","56","28","450",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("접수");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largedown",null,"265","122","28","508",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_newPrdProcStats","687","140","152","360",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_newPrdProcStats");
            obj.set_scrollbartype("none none");
            obj.set_visible("false");
            obj.set_color("transparent");
            obj.set_background("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"전체\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD_NM\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"확인\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"265","104","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("10");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.edt_reqNoPrdId","value","ds_search","REQ_NO_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_bzplcIdOprUnitId","value","ds_search","BZPLC_ID_OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcNmOprUnitNm","value","ds_search","BZPLC_ID_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_chrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_chrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cmb_prdPrpsStatsCd","value","ds_search","PRD_PRPS_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cmb_pubOnlySprCd","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","REQ_DT_FNL_PROC_DT_STR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","REQ_DT_FNL_PROC_DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.cmb_reqNoPrdIdSpr","value","ds_search","REQ_NO_PRD_ID_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.cmb_bzplcIdOprUnitIdSpr","value","ds_search","BZPLC_ID_OPR_UNIT_ID_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.cmb_reqDtFnlProcDtSpr","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.form.chk_prdNmEqlCmpr","value","ds_search","PRD_NM_EQL_CMPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cmb_reprPrdSprCd","value","ds_search","REPR_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_mallSprCd","value","ds_search","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_prdSpec","value","ds_search","PRD_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.edt_prdClnm","value","ds_search","PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_procpsnId","value","ds_search","PROCPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_procpsnNm","value","ds_search","PROCPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_reqCustId","value","ds_search","REQ_CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.form.edt_reqCustNm","value","ds_search","REQ_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_search.form.edt_mnfrNo","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.form.cmb_chrpsnSpr","value","ds_search","CHRPSN_SPR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_09.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_09.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_PA_09.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
            this.fn_commonCodeSearch();	//공통코드조회
        	this.fn_init();
        };

        this.fn_onkeyup = function(obj, e){
            if(e.ctrlkey) {  // Ctrl
        		if( e.keycode == 13) {  // Enter
        	        // 조회실행
        			this.div_search.form.btn_search.setFocus();
        			this.div_search.form.btn_search.click();
        		} else if( e.keycode == 65) { // A
        		    // 접수처리
        			this.btn_receipt.click();
        		}

        		return;
        	}

        	if( e.keycode == 13) {
        		var value = this.gfn_allTrim(e.fromobject.value);
        		if(value != -1 && this.gfn_lengthByte(value) > 0) {
        			// 사업장/운영단위
        			if(e.fromobject.id == this.div_search.form.edt_bzplcIdOprUnitId.id || e.fromobject.id == this.div_search.form.edt_bzplcNmOprUnitNm.id) {
        			    if(this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "BZPLC_ID") {   // 사업장
        					this.ds_popupSearch.setColumn(0, "BZPLC_ID", e.fromobject.id == this.div_search.form.edt_bzplcIdOprUnitId.id ? value : "");
        					this.ds_popupSearch.setColumn(0, "BZPLC_NM", e.fromobject.id == this.div_search.form.edt_bzplcNmOprUnitNm.id ? value : "");
        					this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-bzplc-popup-list.do");
        				} else {
        					this.ds_popupSearch.setColumn(0, "BZPLC_ID" , "");
        					this.ds_popupSearch.setColumn(0, "OPR_UNIT_ID", e.fromobject.id == this.div_search.form.edt_bzplcIdOprUnitId.id ? value : "");
        					this.ds_popupSearch.setColumn(0, "OPR_UNIT_NM", e.fromobject.id == this.div_search.form.edt_bzplcNmOprUnitNm.id ? value : "");
        					this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-operate-popup-list.do");
        				}
        			// 카테고리
        			} else if(e.fromobject.id == this.div_search.form.edt_prdClcd.id || e.fromobject.id == this.div_search.form.edt_prdClnm.id) {
        				this.ds_popupSearch.setColumn(0, "MALL_SPR_CD", this.div_search.form.cmb_mallSprCd.value);
        				this.ds_popupSearch.setColumn(0, "PRD_CLCD"   , e.fromobject.id == this.div_search.form.edt_prdClcd.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "PRD_CLSF_NM", e.fromobject.id == this.div_search.form.edt_prdClnm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_list", "/pr/prd-popup/select-category-popup-list.do");
        			// 담당자
        			} else if(e.fromobject.id == this.div_search.form.edt_chrpsnId.id || e.fromobject.id == this.div_search.form.edt_chrpsnNm.id) {
        				this.ds_popupSearch.setColumn(0, "empNo"  , e.fromobject.id == this.div_search.form.edt_chrpsnId.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "oprtrNm", e.fromobject.id == this.div_search.form.edt_chrpsnNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-operator-popup-list.do");
        			// 처리자
        			} else if(e.fromobject.id == this.div_search.form.edt_procpsnId.id || e.fromobject.id == this.div_search.form.edt_procpsnNm.id) {
        				this.ds_popupSearch.setColumn(0, "empNo"  , e.fromobject.id == this.div_search.form.edt_procpsnId.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "oprtrNm", e.fromobject.id == this.div_search.form.edt_procpsnNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-operator-popup-list.do");
        			// 요청고객
        			}  else if(e.fromobject.id == this.div_search.form.edt_reqCustId.id || e.fromobject.id == this.div_search.form.edt_reqCustNm.id) {
        				this.ds_popupSearch.setColumn(0, "MBR_ID", e.fromobject.id == this.div_search.form.edt_reqCustId.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "MBR_NM", e.fromobject.id == this.div_search.form.edt_reqCustNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-client-popup-list.do");
        			// 제조원
        			} else if(e.fromobject.id == this.div_search.form.edt_mnfrNo.id || e.fromobject.id == this.div_search.form.edt_mnfrNm.id) {
        				this.ds_popupSearch.setColumn(0, "MNFR_NO", e.fromobject.id == this.div_search.form.edt_mnfrNo.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "MNFR_NM", e.fromobject.id == this.div_search.form.edt_mnfrNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "manufacturerList", "/pr/prd-popup/select-manufacturer-popup-list.do");
        			}
        		}
        	}
        }
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 조회
        this.fn_search = function (pgNo){
        	if(!this.gfn_isNull(this.div_search.form.cmb_dtUnit.value)) {
        	    if(!this.gfn_isYMD(this.div_search.form.cal_reqDtFnlProcDtStr.value || "")) {
        			this.gfn_popMessage("ERRN000104"); // 시작일을 입력해주세요.
                    return;
                }
        		if(!this.gfn_isYMD(this.div_search.form.cal_reqDtFnlProcDtEnd.value || "")) {
                    this.gfn_popMessage("ERRN000103"); // 종료일을 입력해주세요.
                    return;
                }

        		if (this.div_search.form.cal_reqDtFnlProcDtStr.value > this.div_search.form.cal_reqDtFnlProcDtEnd.value) {
        			this.gfn_popMessage("ERRS000240"); // 시작날짜가 종료날짜보다 큽니다.
        			return;
        		}
        	}

        	var idx = this.getFocus().id == this.div_search.form.btn_search.id ? 0 : (this.getFocus().id == this.grd_list.id ? 0 : 1);
        	if(idx == 0) { this.ds_search.copyRow(1, this.ds_search, 0); }
            this.div_paging.uPage = pgNo;
        	this.ds_search.setColumn(idx, "PAGE_NO"    , pgNo);
        	this.ds_search.setColumn(idx, "ROW_COUNT"  , this.cmb_viewCount.value);
        	this.ds_search.setColumn(idx, "SORT_COLUMN", this.grd_list.uaSortInfo ? this.grd_list.uaSortInfo.bindCol : "");
        	this.ds_search.setColumn(idx, "SORT_TYPE"  , this.grd_list.uaSortInfo ? this.grd_list.uaSortInfo.status  : "");

            var sSvcId = this.div_search.form.btn_search.id;
            var sUrl   = "/pr/prdNew/select-new-product-req-list.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_list=ds_list";
            var arg    = "idx=" + idx;

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 접수
        this.fn_receipt = function (msgId, flag) {
        	if(!flag) { return; }

            var sSvcId = this.btn_receipt.id;
            var sUrl   = "/pr/prdNew/update-new-prd-req-proc-list.do";
            var inDs   = "ds_list=ds_list:U";
            var outDs  = "";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
            var sSvcId = this.div_search.form.cmb_pubOnlySprCd.id;
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_pubOnlySprCd=ds_output1 ds_dateUnit=ds_output2 ds_reprPrdSprCd=ds_output3 ds_prdPrpsStatsCd=ds_output4 ds_mallSprCd=ds_output5 ds_newPrdProcStats=ds_output6";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "PUB_ONLY_SPR_CD,INQ_PERD_SPR_CD,REPR_PRD_SPR_CD,PRD_PRPS_STATS_CD,MALL_SPR_CD,NEW_PRD_REQ_STATS_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, outDs, url){
        	var sSvcId = svcId;
        	var sUrl   = url;
        	var inDs   = "ds_search=ds_popupSearch";
        	var outDs  = "ds_popupList=" + outDs;
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_excelLargeDownload = function(){

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div_search.form.edt_reqNoPrdId.value)){
        		this.fn_setMSearch(this.name,"PRD_ID_MULTI",this.div_search.form.edt_reqNoPrdId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ID_MULTI", null);
        	}

        	var sSvcId = "largedown";
            var sUrl = "/pr/prd-mng/call-large-excel-down.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_outputlarge=ds_outputlarge";
            var arg = "";

        	this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "coCd", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "pgmId", "SSP_BO_PA_09");
        	this.ds_search.setColumn(0, "excelMetaSeq", "1");
        	this.ds_search.setColumn(0, "saveFileNm", "신규상품요청목록.xlsx");
        	this.ds_search.setColumn(0, "regpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "updpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) {
        			this.ds_newPrdProcStats.setColumn(1, "CHK", '1');
        			this.ds_newPrdProcStats.setColumn(0, "CHK", oArgs.STATUS);
        		}
        		if (oArgs.ID) this.ds_search.setColumn(0, "CHRPSN_ID", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_chrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {
        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        			   ,this.div_search.form.cal_reqDtFnlProcDtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 서비스 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        	    // 조회
                case this.div_search.form.btn_search.id :
        			var  nTotCnt = this.ds_list.getColumn(0, "TOTAL_COUNT") || 0;
        			this.div_paging.set_visible(nTotCnt > 0);
        			this.div_paging.form.cfn_createPage(this.div_paging, nTotCnt, this.cmb_viewCount.value, "fn_pageCallback");
        			this.grd_list.setCellProperty("head", 0, "text", "0");  // 그리드 헤더 체크박스 초기화

                    break;

        		// 접수
                case this.btn_receipt.id :
        			// 재조회
        			//this.div_search.form.btn_search.click();
        			this.ds_list.set_updatecontrol(false);
        			for(var i = 0; i < this.ds_list.rowcount; i++) {
        				if(this.ds_list.getColumn(i, "CHK") == true) {
        				    this.ds_list.setColumn(i, "CHK", false);
        					this.ds_list.setColumn(i, "NEW_PRD_PROC_STATS_CD", "25"   );
        					this.ds_list.setColumn(i, "NEW_PRD_PROC_STATS_NM", "접수");
        					this.ds_list.setRowType(i, Dataset.ROWTYPE_NORMAL);
        				}
        			}
        			this.ds_list.set_updatecontrol(true);

        			break;

                // 공통코드조회
                case this.div_search.form.cmb_pubOnlySprCd.id :
        			this.ds_pubOnlySprCd.copyRow  (this.ds_pubOnlySprCd.insertRow(0)  , this.ds_allOptnCd, 0);  // 전체(공용전용 구분)
        			this.ds_dateUnit.copyRow      (this.ds_dateUnit.insertRow(0)      , this.ds_allOptnCd, 0);  // 전체(일자)
        			this.ds_reprPrdSprCd.copyRow  (this.ds_reprPrdSprCd.insertRow(0)  , this.ds_allOptnCd, 0);  // 전체(대표상품 구분)
        			this.ds_prdPrpsStatsCd.copyRow(this.ds_prdPrpsStatsCd.insertRow(0), this.ds_allOptnCd, 0);  // 전체(제안상태)
        			this.ds_mallSprCd.copyRow     (this.ds_mallSprCd.insertRow(0)     , this.ds_allOptnCd, 0);  // 전체(몰구분)
        			this.ds_newPrdProcStats.setColumn(0, "CHK", '1');                                           // 요청(처리상태)
        			this.fn_todoSearch();
                    break;

        		// 카테고리
        		case this.div_search.form.edt_prdClcd.id :
        		case this.div_search.form.edt_prdClnm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_prdClcd.set_value(this.ds_popupList.getColumn(0, "PRD_CLCD"   ));
        				this.div_search.form.edt_prdClnm.set_value(this.ds_popupList.getColumn(0, "FULL_PRD_CLSF_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_prdClcdPop.click();
        			}

                    break;

        		// 사업장/운영단위
                case this.div_search.form.edt_bzplcIdOprUnitId.id :
        		case this.div_search.form.edt_bzplcNmOprUnitNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				if(this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "BZPLC_ID") {   // 사업장
        					this.div_search.form.edt_bzplcIdOprUnitId.set_value(this.ds_popupList.getColumn(0, "BZPLC_ID"));
        					this.div_search.form.edt_bzplcNmOprUnitNm.set_value(this.ds_popupList.getColumn(0, "BZPLC_NM"));
        				} else {
        					this.div_search.form.edt_bzplcIdOprUnitId.set_value(this.ds_popupList.getColumn(0, "OPR_UNIT_ID"));
        					this.div_search.form.edt_bzplcNmOprUnitNm.set_value(this.ds_popupList.getColumn(0, "OPR_UNIT_NM"));
        				}
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_bzplcIdOprUnitIdPop.click();
        			}

        			break;

        		// 상품담당자
        		case this.div_search.form.edt_chrpsnId.id :
        		case this.div_search.form.edt_chrpsnNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_chrpsnId.set_value(this.ds_popupList.getColumn(0, "EMP_NO"));
        				this.div_search.form.edt_chrpsnNm.set_value(this.ds_popupList.getColumn(0, "OPRTR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        			trace(this.ds_popupList.saveXML());
        				this.div_search.form.btn_prdChrpsnIdPop.click();
        			}

                    break;

        		// 처리자
        		case this.div_search.form.edt_procpsnId.id :
        		case this.div_search.form.edt_procpsnNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_procpsnId.set_value(this.ds_popupList.getColumn(0, "EMP_NO"));
        				this.div_search.form.edt_procpsnNm.set_value(this.ds_popupList.getColumn(0, "OPRTR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_procpsnIdPop.click();
        			}

                    break;

        		// 요청고객
        		case this.div_search.form.edt_reqCustId.id :
        		case this.div_search.form.edt_reqCustNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_reqCustId.set_value(this.ds_popupList.getColumn(0, "MBR_ID"));
        				this.div_search.form.edt_reqCustNm.set_value(this.ds_popupList.getColumn(0, "MBR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_reqCustIdPop.click();
        			}

                    break;

        		// 제조원
        		case this.div_search.form.edt_mnfrNo.id :
        		case this.div_search.form.edt_mnfrNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_mnfrNo.set_value(this.ds_popupList.getColumn(0, "MNFR_NO"));
        				this.div_search.form.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0, "MNFR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_mnfrNoPop.click();
        			}

                    break;
            }
        };

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, args){
            if(!args) { return; }

        	var jsonData = JSON.parse(args);
            switch(svcID) {
        		// 신규상품요청 상세/등록처리 화면
        		case this.grd_list.id :
        			// 팝업에서 데이터의 처리가 있으면...
        			if(eval(jsonData.isProcessed)) {
        				// 조회 실행
        				this.div_search.form.btn_search.click();
        			}

                    break;

        	    // 요청번호/상품ID 텍스트 메모 팝업 버튼
        		case this.div_search.form.btn_reqNoPrdIdEdt.id :
        			this.div_search.form.edt_reqNoPrdId.set_value(jsonData.textValue);

                    break;

        		// 사업장/운영단위 팝업 버튼
        		case this.div_search.form.btn_bzplcIdOprUnitIdPop.id :
        		    // 사업장/운영단위
        			this.div_search.form.edt_bzplcIdOprUnitId.set_value(jsonData[this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "BZPLC_ID" ? "BZPLC_ID" : "OPR_UNIT_ID"]);
        			this.div_search.form.edt_bzplcNmOprUnitNm.set_value(jsonData[this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "BZPLC_ID" ? "BZPLC_NM" : "OPR_UNIT_NM"]);

                    break;

        		// 카테고리 팝업 버튼
        		case this.div_search.form.btn_prdClcdPop.id :
                    this.div_search.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
                    this.div_search.form.edt_prdClnm.set_value(jsonData.FULL_PRD_CLSF_NM);

                    break;

        		// 상품담당자 팝업 버튼
        		case this.div_search.form.btn_prdChrpsnIdPop.id :
                    this.div_search.form.edt_chrpsnId.set_value(jsonData.EMP_NO);
                    this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM);

                    break;

        		// 처리자 팝업 버튼
        		case this.div_search.form.btn_procpsnIdPop.id :
                    this.div_search.form.edt_procpsnId.set_value(jsonData.EMP_NO);
                    this.div_search.form.edt_procpsnNm.set_value(jsonData.OPRTR_NM);

                    break;

        		// 요청고객 팝업
        		case this.div_search.form.btn_reqCustIdPop.id :
                    this.div_search.form.edt_reqCustId.set_value(jsonData.MBR_ID);
                    this.div_search.form.edt_reqCustNm.set_value(jsonData.MBR_NM);

                    break;

        		// 제조원 팝업
        		case this.div_search.form.btn_mnfrNoPop.id :
                    this.div_search.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
                    this.div_search.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);

                    break;
            }
        }

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;
            if(sFlag){  // 페이지 번호 클릭
                //this.fn_search(Math.ceil((oPaging.uPageNum + 1) / this.fv_oApp.gv_pageViewCnt));
        		this.fn_search(oPaging.uPage);
            } else {    // 페이징 DIV 생성

        		var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
        		this.totalPageCount.set_text(sTotText);
        	}
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            if(sGridId ==  this.grd_list.id){
                this.fn_search(this.div_paging.form.fv_nPage);
            }
        };

        this.fn_callBackForSearch = function() {
        	this.fn_search(1);
        };

        this.fn_callBackDeleteSelectedData = function() {
        	this.ds_select.clearData();
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
            //grid 초기 설정
            this.grd_list.uSortFlag       = "false";
            this.grd_list.uServerSortFlag = "true";
            this.grd_list.uSortCallback   = "fn_sortCallback";
            this.grd_list.uCellSizeType   = "true";

            //페이징 초기 설정
            this.div_paging.uPage       = 1;
            this.div_paging.uPageNum    = 0;
            this.div_paging.uPageRowCnt = 10;
            this.div_paging.uPageCnt    = 0;
            this.div_paging.uTotCount   = 0;

        	this.uGridList="grd_list";
        	this.grd_list.uRightMouse="true";
        	this.grd_list.uPersonalFlag="true";
        	this.grd_list.uDefaultFormat="CHK|NEW_PRD_REQ_NO|MALL_SPR_NM|PUB_ONLY_SPR_NM|NEW_PRD_PROC_STATS_NM|RVW_REQ_STATS_NM|REPR_PRD_SPR_NM|PRD_PRPS_STATS_NM|PRPS_PRD_ID|REQ_PRD_NM|PRD_CLCD|PRD_CLNM|REQ_PRVL|MNFR_NO|MNFR_NM|PRD_ID|REQ_DT|BZPLC_ID|BZPLC_NM|OPR_UNIT_ID|OPR_UNIT_NM|REQPSN_NM|PRD_CHRPSN_NM|MD_CHRPSN_NM|PROCPSN_NM|FNL_PROC_DT";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //초기화
        this.fn_init = function() {
            this.copyPaste.addGrid(this.grd_list);

        	this.div_search.form.btn_init.click();  // 초기화 버튼 클릭
        	this.ds_search.setRowType(0, Dataset.ROWTYPE_NORMAL);  // 변경상태 초기화
        	this._gfnHeadCheckSelectAll = function(){};  // 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크) 무력화
        	this.ds_popupSearch.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000');  // 회사코드

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //달력콤보선택
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
            /* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
            var txt = obj.text;
        	if(txt.indexOf("전체") != -1) {
        		this.div_search.form.cal_reqDtFnlProcDtStr.set_value('');
        		this.div_search.form.cal_reqDtFnlProcDtEnd.set_value('');
        		return;
        	}

        	if(!this.gfn_isYMD(this.div_search.form.cal_reqDtFnlProcDtEnd.value || "")) {
        		this.div_search.form.cal_reqDtFnlProcDtEnd.set_value(new nexacro.Date());
        	}

            // 시작일자가 정상이면서 전체 선택시
        	if(this.gfn_isYMD(this.div_search.form.cal_reqDtFnlProcDtStr.value || "") && this.gfn_isNull(obj.value)) {
        		return;
        	}

            var objDate = this.gfn_strToDate(this.div_search.form.cal_reqDtFnlProcDtEnd.value);

            if(txt.indexOf("주일") != -1) {
                objDate.setDate(objDate.getDate() - (parseInt(txt) * 7));
            } else if(txt.indexOf("일") != -1) {
                objDate.setDate(objDate.getDate() - parseInt(txt));
            } else if(txt.indexOf("개월") != -1) {
                objDate.setMonth(objDate.getMonth() - parseInt(txt));
            } else if(txt.indexOf("년") != -1) {
        		objDate.setFullYear(objDate.getFullYear() - parseInt(txt));
            }
        	objDate.setDate(objDate.getDate() + 1);

            this.div_search.form.cal_reqDtFnlProcDtStr.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        };

        // 초기화
        this.div_search_btn_init_onclick = function(obj,e)
        {
        	for(var comps = this.div_search.form.components, i = 0; i < comps.length; i++) {
        	    if(comps[i] instanceof Combo) {
        			comps[i].set_index(0);
        		} else if(comps[i] instanceof Edit || comps[i] instanceof Calendar || comps[i] instanceof CheckBox) {
        			comps[i].set_value(comps[i].falsevalue ? comps[i].falsevalue : '');
        		}
        	}

        	// 처리상태
        	this.grd_newPrdProcStats.setCellProperty("head", this.grd_newPrdProcStats.getBindCellIndex("Body", "CHK"), "text", "1");
            this.grd_newPrdProcStats_onheadclick(this.grd_newPrdProcStats);
        	this.ds_newPrdProcStats_oncolumnchanged();

            // 날짜 초기화
        	this.div_search_cmb_dtUnit_onitemchanged(this.div_search.form.cmb_dtUnit);
        	// 리스트 초기화
        	//this.grd_list.setCellProperty("head", this.grd_list.getBindCellIndex("Body", "CHK"), "text", "0");
        	//this.ds_list.clearData();
            //this.div_paging.form.fv_nTotRowCount = 0;
        	//this.div_paging.form.fv_nPageCnt     = 0;
        	//this.fn_pageCallback();
        	if(this.ds_select.getRowCount() > 0){
        		this.fn_deleteSelectedData('fn_callBackDeleteSelectedData');
        	}
        };

        // 조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	//this.fn_search(1);
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div_search.form.edt_reqNoPrdId.value)){
        		this.fn_setMSearch(this.name,"PRD_ID_MULTI",this.div_search.form.edt_reqNoPrdId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ID_MULTI", null);
        	}

        	if(this.ds_select.getRowCount() > 0){
        		//멀티입력은 시간차때문에 콜백에서 조회처리
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}else{
        		this.fn_search(1);
        	}
        };

        // 접수
        this.btn_receipt_onclick = function(obj,e)
        {
            // 선택된 건 수 확인
        	if(this.ds_list.getCaseCount("CHK == 1") == 0) {
        		return;
        	}

        	this.gfn_popMessage("ERRP000038", null, obj.id, "fn_receipt");  // 해당 요청건을 접수 상태로 변경하시겠습니까?
        };

        // 엑셀 다운로드
        this.btn_exceldown_onclick = function(obj,e)
        {
            if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');

        		return;
        	}

        	if(this.ds_list.getRowCount() == 0) {
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');

        		return;
        	}

            // 엑셀저장
        	//this.gfn_excelExport(this.grd_list, "신규상품요청목록","신규상품요청목록", null, ["CHK"]);
        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"신규상품요청목록"});
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

        // 그리드 셀 클릭
        this.grd_list_oncellclick = function(obj,e)
        {
            if(e.col == this.grd_list.getBindCellIndex("body", "NEW_PRD_REQ_NO")) {
        	    //if(this.ds_list.getColumn(e.row, "MALL_SPR_CD") == "10") {  // SSP MALL이면...
        			var params  = { args : { CO_CD          : this.ds_list.getColumn(e.row, "CO_CD")
        								   , NEW_PRD_REQ_NO : this.ds_list.getColumn(e.row, "NEW_PRD_REQ_NO")
        								   }
        						  };
        			var options = { title:"신규상품요청 상세/등록처리" };
        			this.gfn_openPopup(this.grd_list.id, "PR::SSP_BO_PA_10.xfdl", params,  "fn_popupCallback", options);
        		//}
        	}
        };

        // 그리드헤드클릭
        this.grd_list_onheadclick = function(obj,e)
        {
            if(e.cell == obj.getBindCellIndex("Body", "CHK")) {
        		var val = obj.getCellProperty("head", e.cell, "text") == "0" ? "1" : "0";
        		obj.setCellProperty("head", e.cell, "text", val);

        		for(var i = 0; i < this.ds_list.rowcount; i++) {
        			if(obj.getCellPropertyValue(i, e.cell, "edittype") != "none") {
        			    this.ds_list.setColumn(i, "CHK", val);
        			}
        		}
        	}
        };

        // 처리상태 그리드
        this.grd_newPrdProcStats_onkillfocus = function(obj,e)
        {
        	if(e.newcomponent.id != this.div_search.form.edt_newPrdProcStatsNm.id && e.newcomponent.id != this.div_search.form.btn_newPrdProcStatsNm.id) {
        		this.grd_newPrdProcStats.set_visible(false);
        	}
        };

        // 처리상태 그리드
        this.grd_newPrdProcStats_onkeydown = function(obj,e)
        {
            if(e.keycode == 32 && this.grd_newPrdProcStats.getCellPos() != this.grd_newPrdProcStats.getBindCellIndex("Body", "CHK")) {
        		this.ds_newPrdProcStats.setColumn(this.ds_newPrdProcStats.rowposition, "CHK", (this.ds_newPrdProcStats.getColumn(this.ds_newPrdProcStats.rowposition, "CHK") == '1' ? '0' : '1'));
        	} else if(e.keycode == 13) {
        		this.grd_newPrdProcStats.set_visible(false);
        	}
        };

        // 처리상태 그리드
        this.grd_newPrdProcStats_onheadclick = function(obj,e)
        {
            var cell = obj.getBindCellIndex("Body", "CHK");
        	var val = (obj.getCellProperty("head", cell, "text")||'0') == "0" ? "1" : "0";
        	obj.setCellProperty("head", cell, "text", val);

            this.ds_newPrdProcStats.setColumn(0, 'CHK', '1');  // 요청(기본)
        	for(var i = 1; i < this.ds_newPrdProcStats.rowcount; i++) {
        	    this.ds_newPrdProcStats.setColumn(i, "CHK", val);
        	}
        };

        // 처리상태 그리드 확인 버튼
        this.grd_newPrdProcStats_onsummaryclick = function(obj,e)
        {
        	this.grd_newPrdProcStats.set_visible(false);
        };

        // 처리상태 그리드 클릭
        this.grd_newPrdProcStats_oncellclick = function(obj,e)
        {
        	if(e.cell == this.grd_newPrdProcStats.getBindCellIndex("Body", "COM_DTL_CD_NM")) {
        		this.ds_newPrdProcStats.setColumn(this.ds_newPrdProcStats.rowposition, "CHK", (this.ds_newPrdProcStats.getColumn(this.ds_newPrdProcStats.rowposition, "CHK") == '1' ? '0' : '1'));
        	}
        };

        // 처리상태 Dataset
        this.ds_newPrdProcStats_cancolumnchange = function(obj,e)
        {
        	return e.newvalue == '1' || this.ds_newPrdProcStats.getCaseCount("CHK == '1'") > 1;
        };

        // 처리상태 Dataset
        this.ds_newPrdProcStats_oncolumnchanged = function(obj,e)
        {
            var status = new Array();
        	var stname = new Array();
        	for(var i = 0; i < this.ds_newPrdProcStats.rowcount; i++) {
        		if(this.ds_newPrdProcStats.getColumn(i, "CHK") == '1') {
        			status[status.length] = this.ds_newPrdProcStats.getColumn(i, "COM_DTL_CD"   );
        			stname[stname.length] = this.ds_newPrdProcStats.getColumn(i, "COM_DTL_CD_NM");
        		}
        	}

        	// 처리상태값 설정
        	this.ds_search.setColumn(0, "NEW_PRD_PROC_STATS_CD", status.join(","));
        	this.div_search.form.edt_newPrdProcStatsNm.set_value(stname.join(","));
        	var btooltip = (this.gfn_lengthByte(this.div_search.form.edt_newPrdProcStatsNm.value) * 6) > (this.div_search.form.edt_newPrdProcStatsNm.width - 10);
        	this.div_search.form.edt_newPrdProcStatsNm.set_tooltiptext(btooltip ? this.div_search.form.edt_newPrdProcStatsNm.value : null);
        };

        // 처리상태 버튼
        this.div_search_btn_newPrdProcStatsNm_onclick = function(obj,e)
        {
            this.grd_newPrdProcStats.set_visible(!this.grd_newPrdProcStats.visible);
         	if(this.grd_newPrdProcStats.visible) {
          		this.grd_newPrdProcStats.setFocus();
          	}
        };

        // 코드성 EDIT
        this.Edit_oninput = function(obj,e)
        {
            // 사업장/운영단위
        	if(e.fromobject.id == this.div_search.form.edt_bzplcIdOprUnitId.id || e.fromobject.id == this.div_search.form.edt_bzplcNmOprUnitNm.id) {
        		this.div_search.form.edt_bzplcIdOprUnitId.set_value(e.fromobject.id == this.div_search.form.edt_bzplcIdOprUnitId.id ? obj.value : "");
        		this.div_search.form.edt_bzplcNmOprUnitNm.set_value(e.fromobject.id == this.div_search.form.edt_bzplcNmOprUnitNm.id ? obj.value : "");
        	// 카테고리
        	} else if(e.fromobject.id == this.div_search.form.edt_prdClcd.id || e.fromobject.id == this.div_search.form.edt_prdClnm.id) {
        		this.div_search.form.edt_prdClcd.set_value(e.fromobject.id == this.div_search.form.edt_prdClcd.id ? obj.value : "");
        		this.div_search.form.edt_prdClnm.set_value(e.fromobject.id == this.div_search.form.edt_prdClnm.id ? obj.value : "");
        	// 담당자
        	} else if(e.fromobject.id == this.div_search.form.edt_chrpsnId.id || e.fromobject.id == this.div_search.form.edt_chrpsnNm.id) {
        		this.div_search.form.edt_chrpsnId.set_value(e.fromobject.id == this.div_search.form.edt_chrpsnId.id ? obj.value : "");
        		this.div_search.form.edt_chrpsnNm.set_value(e.fromobject.id == this.div_search.form.edt_chrpsnNm.id ? obj.value : "");
        	// 처리자
        	} else if(e.fromobject.id == this.div_search.form.edt_procpsnId.id || e.fromobject.id == this.div_search.form.edt_procpsnNm.id) {
        		this.div_search.form.edt_procpsnId.set_value(e.fromobject.id == this.div_search.form.edt_procpsnId.id ? obj.value : "");
        		this.div_search.form.edt_procpsnNm.set_value(e.fromobject.id == this.div_search.form.edt_procpsnNm.id ? obj.value : "");
        	// 요청고객
        	} else if(e.fromobject.id == this.div_search.form.edt_reqCustId.id || e.fromobject.id == this.div_search.form.edt_reqCustNm.id) {
        		this.div_search.form.edt_reqCustId.set_value(e.fromobject.id == this.div_search.form.edt_reqCustId.id ? obj.value : "");
        		this.div_search.form.edt_reqCustNm.set_value(e.fromobject.id == this.div_search.form.edt_reqCustNm.id ? obj.value : "");
        	// 제조원
        	} else if(e.fromobject.id == this.div_search.form.edt_mnfrNo.id || e.fromobject.id == this.div_search.form.edt_mnfrNm.id) {
        		this.div_search.form.edt_mnfrNo.set_value(e.fromobject.id == this.div_search.form.edt_mnfrNo.id ? obj.value : "");
        		this.div_search.form.edt_mnfrNm.set_value(e.fromobject.id == this.div_search.form.edt_mnfrNm.id ? obj.value : "");
        	}
        };

        // 팝업(버튼)
        this.Button_onclick = function(obj,e)
        {
        	// 요청번호/상품ID 텍스트 편집 팝업
        	if(e.fromobject.id == this.div_search.form.btn_reqNoPrdIdEdt.id) {
        		var params  = { textId : this.div_search.form.edt_reqNoPrdId };
        		var options = { title  : this.div_search.form.cmb_reqNoPrdIdSpr.text };

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        	// 사업장/운영단위 팝업 버튼
        	} else if(e.fromobject.id ==  this.div_search.form.btn_bzplcIdOprUnitIdPop.id) {
        		if(this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "BZPLC_ID") {   // 사업장
        			var params  = { coCd    : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        						  , bzplcId : this.div_search.form.edt_bzplcIdOprUnitId.value
        						  , bzplcNm : this.div_search.form.edt_bzplcNmOprUnitNm.value
        						  };
        			var options = { };

        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params,  "fn_popupCallback", options);
        		} else if(this.div_search.form.cmb_bzplcIdOprUnitIdSpr.value == "OPR_UNIT_ID") {  // 운영단위
        			var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        		  				  , oprUnitId : this.div_search.form.edt_bzplcIdOprUnitId.value
        						  , oprUnitNm : this.div_search.form.edt_bzplcNmOprUnitNm.value
        						  };
        			var options = {};

        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_15.xfdl", params,  "fn_popupCallback", options);
        		}
        	// 카테고리 팝업
        	} else if(e.fromobject.id ==  this.div_search.form.btn_prdClcdPop.id) {
        		var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        					  , prdClcd   : this.div_search.form.edt_prdClcd.value
        					  , prdClsfNm : this.div_search.form.edt_prdClnm.value
        					  , mallSprCd : this.div_search.form.cmb_mallSprCd.value
        					  };
        		var options = {};

        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        	// 담당자 팝업
        	} else if(e.fromobject.id == this.div_search.form.btn_prdChrpsnIdPop.id) {
        		var params  = { coCd    : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        					  , empNo   : this.div_search.form.edt_chrpsnId.value
        					  , oprtrNm : this.div_search.form.edt_chrpsnNm.value
        					  };
        		var options = { };

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        	// 처리자 팝업
        	} else if(e.fromobject.id == this.div_search.form.btn_procpsnIdPop.id) {
        		var params  =  { coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        					  , empNo   : this.div_search.form.edt_procpsnId.value
        					  , oprtrNm : this.div_search.form.edt_procpsnNm.value
        					  };
        		var options = { };

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        	// 요청고객 팝업
        	} else if(e.fromobject.id == this.div_search.form.btn_reqCustIdPop.id) {
        		var params  = { coCd  : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        					  , mbrId : this.div_search.form.edt_reqCustId.value
        					  , mbrNm : this.div_search.form.edt_reqCustNm.value
        					  };
        		var options = { };

        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_24.xfdl", params,  "fn_popupCallback", options);
        	// 제조원 팝업
        	} else if(e.fromobject.id == this.div_search.form.btn_mnfrNoPop.id) {
        		var params  = { coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")||'1000'
        					  , mnfrNo : this.div_search.form.edt_mnfrNo.value
        					  , mnfrNm : this.div_search.form.edt_mnfrNm.value
        					  };
        		var options = { };

        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        // 사업장/운영단위
        this.div_search_cmb_bzplcIdOprUnitIdSpr_onitemchanged = function(obj,e)
        {
        	this.div_search.form.edt_bzplcIdOprUnitId.set_value("");
        	this.div_search.form.edt_bzplcNmOprUnitNm.set_value("");
        };

        this.btn_largedown_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRP000268"))){
        		this.fn_excelLargeDownload();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.cmb_bzplcIdOprUnitIdSpr.addEventHandler("onitemchanged",this.div_search_cmb_bzplcIdOprUnitIdSpr_onitemchanged,this);
            this.div_search.form.edt_bzplcIdOprUnitId.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_bzplcNmOprUnitNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_bzplcIdOprUnitIdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_reqNoPrdId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div_search.form.edt_reqNoPrdId.addEventHandler("onchanged",this.div_edt_prdId_onchanged,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_chrpsnNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_prdChrpsnIdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.btn_reqNoPrdIdEdt.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.edt_procpsnId.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_procpsnNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_procpsnIdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_prdClnm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_prdClcdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.edt_reqCustId.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_reqCustNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_reqCustIdPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.edt_mnfrNo.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.edt_mnfrNm.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_search.form.btn_mnfrNoPop.addEventHandler("onclick",this.Button_onclick,this);
            this.div_search.form.edt_newPrdProcStatsNm.addEventHandler("oneditclick",this.div_search_btn_newPrdProcStatsNm_onclick,this);
            this.div_search.form.btn_newPrdProcStatsNm.addEventHandler("onclick",this.div_search_btn_newPrdProcStatsNm_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_receipt.addEventHandler("onclick",this.btn_receipt_onclick,this);
            this.btn_largedown.addEventHandler("onclick",this.btn_largedown_onclick,this);
            this.grd_newPrdProcStats.addEventHandler("onkillfocus",this.grd_newPrdProcStats_onkillfocus,this);
            this.grd_newPrdProcStats.addEventHandler("onkeydown",this.grd_newPrdProcStats_onkeydown,this);
            this.grd_newPrdProcStats.addEventHandler("onheadclick",this.grd_newPrdProcStats_onheadclick,this);
            this.grd_newPrdProcStats.addEventHandler("onsummaryclick",this.grd_newPrdProcStats_onsummaryclick,this);
            this.grd_newPrdProcStats.addEventHandler("oncellclick",this.grd_newPrdProcStats_oncellclick,this);
            this.cmb_viewCount.addEventHandler("onitemchanged",this.cmb_viewCount_onitemchanged,this);
            this.ds_newPrdProcStats.addEventHandler("cancolumnchange",this.ds_newPrdProcStats_cancolumnchange,this);
            this.ds_newPrdProcStats.addEventHandler("oncolumnchanged",this.ds_newPrdProcStats_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
