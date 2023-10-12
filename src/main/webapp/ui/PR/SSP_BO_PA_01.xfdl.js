(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_01");
            this.set_titletext("등록상품 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelMetaSeq\" type=\"STRING\" size=\"256\"/><Column id=\"saveFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM_MULTI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_CHG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdAplySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroPrdStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reprPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outputlarge", this);
            obj._setContents("<ColumnInfo><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","0","0",null,"286","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("상품/그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04","762","20","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66","762","51","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"248","60","28","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"248","60","28","84",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00","762","82","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_prdClcdType","160","55","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_prdClcdType_innerdataset = new nexacro.NormalDataset("div_form_cmb_prdClcdType_innerdataset", obj);
            div_form_cmb_prdClcdType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">SSP카테고리</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">S-MRO카테고리</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_prdClcdType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","294","55","100","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","398","55","192","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_categoryPopup","594","55","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","160","86","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("div_form_cmb_dateType_innerdataset", obj);
            div_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">SSP등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_startDtm","294","86","140","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static59","438","86","9","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("~");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_endDtm","451","86","140","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_dateUnit","595","86","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","113",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","762","113","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("대표상품 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","20","113","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","144",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00","762","144","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_text("공용전용 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00","20","144","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","20","175",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00","762","175","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_text("예외가격관리대상");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00","20","175","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","20","206",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_00","762","206","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("산업군");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00_00","20","206","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("33");
            obj.set_text("배지명");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_prdIdType","160","24","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_prdIdType_innerdataset = new nexacro.NormalDataset("div_form_cmb_prdIdType_innerdataset", obj);
            div_form_cmb_prdIdType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">시리즈그룹ID</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">대표상품그룹ID</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">대표상품ID</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_prdIdType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","294","24","296","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("35");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_keywordType","160","117","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_keywordType_innerdataset = new nexacro.NormalDataset("div_form_cmb_keywordType_innerdataset", obj);
            div_form_cmb_keywordType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">브랜드명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">해시Tag</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_keywordType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","294","117","297","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("37");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_oprtrType","160","148","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_oprtrType_innerdataset = new nexacro.NormalDataset("div_form_cmb_oprtrType_innerdataset", obj);
            div_form_cmb_oprtrType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품담당자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">MD담당자</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_oprtrType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","294","148","100","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("39");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","398","148","192","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_psnPopup","594","148","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_reprPrdSprCd","901","117","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("42");
            obj.set_innerdataset("ds_reprPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySprCd","901","148","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_prdAplySprCd","901","179","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("44");
            obj.set_innerdataset("ds_prdAplySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","902","86","100","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("45");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1006","86","184","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1194","86","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","902","24","288","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("48");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prvl","902","55","288","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("49");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01","412","175","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("50");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_00_00","412","206","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("51");
            obj.set_text("전시상품 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_mroPrdStatsCd","551","179","181","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("52");
            obj.set_innerdataset("ds_mroPrdStatsCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_dispPrdSprCd","551","210","181","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("53");
            obj.set_innerdataset("ds_dispPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_prdStatsCd","160","179","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_prdStatsCd_innerdataset = new nexacro.NormalDataset("div_form_cmb_prdStatsCd_innerdataset", obj);
            div_form_cmb_prdStatsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_prdStatsCd_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","160","210","184","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_bgPopup","348","210","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new CheckBox("chk_fullPrdNmYn","1198","29","13","13",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("57");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","619","24","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_multi");
            obj.set_tooltiptext("멀티팝업 참조용");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","591","24","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_document");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_iddtId","903","210","296","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("60");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_iddtIdMultiInput00","1200","210","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("61");
            obj.set_cssclass("btn_WF_document");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_iddtIdMultiPopup00","1228","210","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_multi");
            obj.set_tooltiptext("멀티팝업 참조용");
            obj.set_enable("true");
            obj.set_visible("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"300","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"300","110","28","336",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","338",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("조회 조건 입력 후 조회 버튼을 눌러주세요.");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"89\"/><Column size=\"129\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"94\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"시리즈그룹ID\"/><Cell col=\"2\" text=\"카테고리ID\"/><Cell col=\"3\" text=\"카테고리명\"/><Cell col=\"4\" text=\"산업군\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"SSP상품명\"/><Cell col=\"7\" text=\"SSP상품명 수정여부\"/><Cell col=\"8\" text=\"대표규격\"/><Cell col=\"9\" text=\"대표규격(전체)\"/><Cell col=\"10\" text=\"제조원ID\"/><Cell col=\"11\" text=\"제조원명\"/><Cell col=\"12\" text=\"주문단위\"/><Cell col=\"13\" text=\"브랜드명\"/><Cell col=\"14\" text=\"해시Tag\"/><Cell col=\"15\" text=\"대표상품그룹ID\"/><Cell col=\"16\" text=\"대표상품구분\"/><Cell col=\"17\" text=\"대표상품ID\"/><Cell col=\"18\" text=\"공용전용구분\"/><Cell col=\"19\" text=\"SSP상품상태\"/><Cell col=\"20\" text=\"S-MRO상품상태\"/><Cell col=\"21\" text=\"예외가격관리대상\"/><Cell col=\"22\" text=\"배지명\"/><Cell col=\"23\" text=\"전시상품구분\"/><Cell col=\"24\" text=\"상품담당자ID\"/><Cell col=\"25\" text=\"상품담당자명\"/><Cell col=\"26\" text=\"MD담당자ID\"/><Cell col=\"27\" text=\"MD담당자명\"/><Cell col=\"28\" text=\"SSP등록일\"/><Cell col=\"29\" text=\"최종수정일시\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID_VIEW\" wordWrap=\"none\" color=\"blue\" textDecoration=\"underline\" displaytype=\"text\" font=\"normal 700 12px/normal &quot;Malgun Gothic,맑은고딕,Apple SD Gothic Neo,dotum,돋움,arial,sans-serif&quot;\" textAlign=\"right\" padding=\"0px 10px\"/><Cell col=\"1\" text=\"bind:PRD_GRP_ID\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"2\" text=\"bind:PRD_CLCD\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"3\" text=\"bind:PRD_CLSF_NM\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"4\" text=\"bind:IDDT_NM\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"5\" text=\"bind:PRD_NM\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"6\" padding=\"0px 10px\" wordWrap=\"none\" text=\"bind:SSP_PRD_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:SSP_PRD_NM_CHG_YN\"/><Cell col=\"8\" text=\"bind:ATTR_VAL\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"9\" text=\"bind:ATTR_VAL_ALL\" textAlign=\"left\" padding=\"0px 10px\" wordWrap=\"none\"/><Cell col=\"10\" text=\"bind:MNFR_NO\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"11\" text=\"bind:MNFR_NM\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"12\" text=\"bind:SELL_UNIT_CD\" wordWrap=\"none\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"13\" text=\"bind:BRND_NM\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"14\" text=\"bind:HASH_TAG\" wordWrap=\"none\" padding=\"0px 10px\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:REPR_PRD_GRP_ID_VIEW\" wordWrap=\"none\" padding=\"0px 10px\" displaytype=\"text\"/><Cell col=\"16\" text=\"bind:REPR_PRD_SPR_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"17\" text=\"bind:REPR_PRD_ID_VIEW\" wordWrap=\"none\" padding=\"0px 10px\" displaytype=\"text\"/><Cell col=\"18\" text=\"bind:PUB_ONLY_SPR_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"19\" text=\"bind:PRD_STATS_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"20\" text=\"bind:MRO_PRD_STATS_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"21\" text=\"bind:PRC_APLY_SPR_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"22\" text=\"bind:BG_NM\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"23\" text=\"bind:DISP_PRD_SPR_CD\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"24\" text=\"bind:PRD_OPRTR_ID\"/><Cell col=\"25\" text=\"bind:PRD_OPRTR_NM\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"26\" text=\"bind:MD_OPRTR_ID\"/><Cell col=\"27\" text=\"bind:MD_OPRTR_NM\" wordWrap=\"none\" padding=\"0px 10px\"/><Cell col=\"28\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" padding=\"0px 10px\" wordWrap=\"none\"/><Cell col=\"29\" text=\"bind:UPD_DTM\" wordWrap=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" padding=\"0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","313","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"300","100","28","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"300","81","28","450",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largedown",null,"300","118","28","btn_create:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"300","104","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj = new BindItem("item0","div.form.edt_bgNm","value","ds_search","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.form.edt_prdClsfNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_keyword","value","ds_search","KEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div.form.edt_oprtrId","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.edt_oprtrNm","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.cmb_dispPrdSprCd","value","ds_search","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.cmb_mroPrdStatsCd","value","ds_search","MRO_PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cmb_prdStatsCd","value","ds_search","PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.edt_prvl","value","ds_search","PRVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div.form.edt_mnfrNo","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.cmb_reprPrdSprCd","value","ds_search","REPR_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div.form.cmb_pubOnlySprCd","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div.form.cmb_prdAplySprCd","value","ds_search","PRC_APLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div.form.cal_startDtm","value","ds_search","START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div.form.cal_endDtm","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div.form.cmb_prdIdType","value","ds_search","PRD_ID_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div.form.cmb_prdClcdType","value","ds_search","PRD_CLCD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div.form.cmb_dateType","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div.form.cmb_keywordType","value","ds_search","KEYWORD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div.form.cmb_oprtrType","value","ds_search","OPRTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div.form.chk_fullPrdNmYn","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div.form.cmb_dateUnit","value","ds_search","DATE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div.form.edt_iddtId","value","ds_search","IDDT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.searchCategoryCount = 0;  //카테고리
        this.searchPrdClcd = '';       //카테고리
        this.searchPrdClsfNm = '';	   //카테고리

        this.mroPrdCount = 0;	           //mro카테고리
        this.searchMroPrdClcd = '';        //mro카테고리
        this.searchMroPrdClsfNm = '';      //mro카테고리
        this.searchMroPrdClsfNmTemp = '';  //mro카테고리

        this.searchMnfrCount = 0;	   //제조원
        this.searchMnfrNo = '';        //제조원
        this.searchMnfrNm = '';	       //제조원

        this.oprtrCount = 0;	       //담당자
        this.searchEmpNo = '';         //담당자
        this.searchOprtrNm = '';	   //담당자
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_init();
            //this.fn_search(true);	//조회
        	this.grd_list.setFormatColProperty(24,"size",0);
            this.fn_commonCodeSearch();	//공통코드조회
        	//alert(this.getOwnerFrame().arguments["menuId"]);

        	//ctrl+c v
        	this.copyPaste.addGrid(this.grd_list);
        	this.fn_odCommLoading();
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        			if(e.fromobject.id == "edt_prdClcd") {
        				if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        					this.ds_search.setColumn(0, "PRD_CLCD", value);
        					this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
        					this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-category-popup-list.do");
        				}else{	//MRO일경우
        					this.ds_search.setColumn(0, "MRO_PRD_CLCD", value);
        					this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
        					this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-mroprd-popup-list.do");
        				}

        			} else if(e.fromobject.id == "edt_prdClsfNm"){
        				if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        					this.ds_search.setColumn(0, "PRD_CLSF_NM", value);
        					this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
        					this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-category-popup-list.do");
        				}else{	//MRO일경우
        					this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", value);
        					this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
        					this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-mroprd-popup-list.do");
        				}
        			}

        			if(e.fromobject.id == "edt_mnfrNo") {
        				this.ds_search.setColumn(0, "MNFR_NO", value);
        				this.ds_search.setColumn(0, "UPD_DTM_START", "00010101");
        				this.ds_search.setColumn(0, "UPD_DTM_END", "99991231");
        				this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-manufacturer-popup-list.do");
        			} else if(e.fromobject.id == "edt_mnfrNm"){
        				this.ds_search.setColumn(0, "MNFR_NM", value);
        				this.ds_search.setColumn(0, "UPD_DTM_START", "00010101");
        				this.ds_search.setColumn(0, "UPD_DTM_END", "99991231");
        				this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-manufacturer-popup-list.do");
        			}

        			if(e.fromobject.id == "edt_oprtrId") {
        				this.ds_search.setColumn(0, "EMP_NO", value);
        				this.fn_popupSearch(e.fromobject.id, "/co/popup/select-operator-popup-list.do");
        			} else if(e.fromobject.id == "edt_oprtrNm"){
        				this.ds_search.setColumn(0, "OPRTR_NM", value);
        				this.fn_popupSearch(e.fromobject.id, "/co/popup/select-operator-popup-list.do");
        			}
        		}
        	}
        }

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 조회
        		this.btn_search_onclick();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/pr/prd-mng/select-regist-product-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=productList";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
            }

        	//REG_EXP 사용하기 위해 변환
        	var multiPrdId = this.div.form.edt_prdId.value;
        	var prdIdType = this.div.form.cmb_prdIdType.value;
        	if(prdIdType == 2 && !this.gfn_isNull(multiPrdId)){
        		var prdId = nexacro.replaceAll(multiPrdId, ",", "|");

        		this.ds_search.setColumn(0, "PRD_ID", prdId);
        	}

        	var multiIddtId = this.div.form.edt_iddtId.value;
        	if(!this.gfn_isNull(multiIddtId)){
        	//	var iddtId = nexacro.replaceAll(multiIddtId, ",", "|");

        		this.ds_search.setColumn(0, "IDDT_NM", multiIddtId);
        	}

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_dateUnit=ds_output1 ds_pubOnlySprCd=ds_output2 ds_mroPrdStatsCd=ds_output3 ds_prdAplySprCd=ds_output4 ds_dispPrdSprCd=ds_output5 ds_reprPrdSprCd=ds_output6";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,PUB_ONLY_SPR_CD,MRO_PRD_STATS_CD,PRC_APLY_SPR_CD,DISP_PRD_SPR_CD,REPR_PRD_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀 대용량 다운로드 호출
        this.fn_excelLargeDownload = function(){

            var sSvcId = "largedown";
            var sUrl = "/pr/prd-mng/call-large-excel-download.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_outputlarge=ds_outputlarge";
            var arg = "";

        	this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "coCd", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "pgmId", "SSP_BO_PA_01");
        	this.ds_search.setColumn(0, "excelMetaSeq", "1");
        	this.ds_search.setColumn(0, "saveFileNm", "등록상품목록.xlsx");
        	this.ds_search.setColumn(0, "regpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "updpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cmb_viewCount.value,"fn_pageCallback");

        			//this.grd_list.setFormatColProperty(24,"size",0);	//그리드 넓이 allBand시 0으로 감춰놨던 컬럼 감추기용.

        			if(this.ds_list.rowcount < 1){
        				this.grd_list.set_nodatatext("검색 결과가 없습니다.");
        			}

        			//REG_EXP 사용 후 문자열 다시 변환
        			var prdId = this.div.form.edt_prdId.value;
        			if(!this.gfn_isNull(prdId)){
        				multiPrdId = nexacro.replaceAll(prdId, "|", ",");
        				this.div.form.edt_prdId.set_value(multiPrdId);
        			}
        // 			var iddtId = this.div.form.edt_iddtId.value;
        // 			if(!this.gfn_isNull(iddtId)){
        // 				multiIddtId = nexacro.replaceAll(iddtId, "|", ",");
        // 				this.div.form.edt_iddtId.set_value(multiIddtId);
        // 			}
                    break;

                case "commonCodeSearch" :
        			this.ds_dateUnit.insertRow(0);	//일자단위
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD", "");
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_dateUnit.set_index(0);

        			this.ds_pubOnlySprCd.insertRow(0);	//공용전용
        			this.ds_pubOnlySprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_pubOnlySprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_mroPrdStatsCd.set_value('');

        			this.ds_prdAplySprCd.insertRow(0);	//가격대상
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD", "NA");
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD_NM", "해당없음");
        			this.ds_prdAplySprCd.insertRow(0);
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_pubOnlySprCd.set_index(0);

        			this.ds_dispPrdSprCd.insertRow(0);	//전시상품
        			this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD", "NA");
        			this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "해당없음");
        			this.ds_dispPrdSprCd.insertRow(0);
        			this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_prdAplySprCd.set_index(0);

        			this.ds_mroPrdStatsCd.insertRow(0);	//MRO상태
        			this.ds_mroPrdStatsCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_mroPrdStatsCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_dispPrdSprCd.set_index(0);

        			this.ds_reprPrdSprCd.insertRow(0);	//대표상품구분
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD", "UNION");
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "통합_전체");
        			this.ds_reprPrdSprCd.insertRow(0);
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");

        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");

        			var nodataRow = this.ds_reprPrdSprCd.getRowCount()

        			this.ds_reprPrdSprCd.insertRow(nodataRow); //대표

        			this.ds_reprPrdSprCd.setColumn(nodataRow, "COM_DTL_CD", "NONE");

        			this.ds_reprPrdSprCd.setColumn(nodataRow, "COM_DTL_CD_NM", "미사용");
        			this.div.form.cmb_reprPrdSprCd.set_index(0);

        			this.fn_setSearchDate();	//날짜초기화

                    break;

                case "edt_prdClcd" :
        			if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        				if(this.searchCategoryCount>0){
        					this.div.form.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
        				}else{
        					var params = {
        						'prdClcd':this.div.form.edt_prdClcd.value,
        						'mallSprCd':this.ds_search.getColumn(0, "MALL_SPR_CD"),
        						'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					};
        					this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", {});
        				}
        			}else{	//MRO일경우
        				if(this.mroPrdCount>0){
        					var cl = this.searchMroPrdClsfNm;
        					var newCl = cl.substring(cl.lastIndexOf('>', cl.length)+1, cl.length);
        					this.div.form.edt_prdClsfNm.set_value(newCl);
        				}else{
        					var params = {
        						'mroPrdClcd':this.div.form.edt_prdClcd.value,
        						'mallSprCd':this.ds_search.getColumn(0, "MALL_SPR_CD"),
        						'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					};
        					this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PA_46.xfdl", params,  "fn_popupCallback", {});
        				}
        			}

                    break;

        		case "edt_prdClsfNm" :
        			if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        				if(this.searchCategoryCount==1){
        					this.div.form.edt_prdClcd.set_value(this.searchPrdClcd);
        					this.div.form.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
        				}else{
        					var params = {
        						'prdClsfNm':this.div.form.edt_prdClsfNm.value,
        						'mallSprCd':this.ds_search.getColumn(0, "MALL_SPR_CD"),
        						'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					};
        					this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", {});
        				}
        			}else{	//MRO일경우
        				if(this.mroPrdCount==1){
        					this.div.form.edt_prdClcd.set_value(this.searchMroPrdClcd);
        					this.div.form.edt_prdClsfNm.set_value(this.searchMroPrdClsfNmTemp);
        				}else{
        					var params = {
        						'mroPrdClsfNm':this.div.form.edt_prdClsfNm.value,
        						'mallSprCd':this.ds_search.getColumn(0, "MALL_SPR_CD"),
        						'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					};
        					this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PA_46.xfdl", params,  "fn_popupCallback", {});
        				}
        			}

        			break;

        		case "edt_mnfrNo" :
        			if(this.searchMnfrCount==1){
        				this.div.form.edt_mnfrNo.set_value(this.searchMnfrNo);
        				this.div.form.edt_mnfrNm.set_value(this.searchMnfrNm);
        			}else{
        				var params = {
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        					'mnfrNo':this.ds_search.getColumn(0, "MNFR_NO")
        				};
                        this.gfn_openPopup('btn_mnfrPopup', "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", {});
        			}
                    break;

        		case "edt_mnfrNm" :
        			if(this.searchMnfrCount==1){
        				this.div.form.edt_mnfrNo.set_value(this.searchMnfrNo);
        				this.div.form.edt_mnfrNm.set_value(this.searchMnfrNm);
        			}else{
        				var params = {
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        					'mnfrNm':this.ds_search.getColumn(0, "MNFR_NM")
        				};
                        this.gfn_openPopup('btn_mnfrPopup', "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", {});
        			}
                    break;

        		case "edt_oprtrId" :
        			if(this.oprtrCount>0){
        				this.div.form.edt_oprtrNm.set_value(this.searchOprtrNm);
        			}else{
        				var params = {
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_psnPopup', "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", {});
        			}
                    break;

        		case "edt_oprtrNm" :
        			if(this.oprtrCount==1){
        				this.div.form.edt_oprtrId.set_value(this.searchEmpNo);
        				this.div.form.edt_oprtrNm.set_value(this.searchOprtrNm);
        			}else{
        				var params = {
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        					'oprtrNm':this.ds_search.getColumn(0, "OPRTR_NM")
        				};
                        this.gfn_openPopup('btn_psnPopup', "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", {});
        			}
                    break;

        		case "largedown" :
        			trace("RSLT_CD  " + this.ds_outputlarge.getColumn(0, "RSLT_CD"));
        			trace("RSLT_MSG  " + this.ds_outputlarge.getColumn(0, "RSLT_MSG"));
                    break;



            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.cmb_viewCount.value);
                this.fn_search();
            }

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
            this.totalPageCount.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            var oGrid=null;
            if(sGridId == "grd_list"){
                oSortInfo = this.grd_list.uaSortInfo;
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
                this.fn_search();
            }
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
        //         case "btn_prdIdMultiPopup" :
        // 			if(typeof args != 'undefined'){
        // 				var jsonData = JSON.parse(args);
        // 				var prdStr = "";
        // 				if(jsonData.length > 0){
        // 					for(var i = 0; i<jsonData.length; i++){
        // 						var rowData = JSON.parse(jsonData[i]);
        // 						prdStr += rowData.PRD_ID_VIEW + ",";
        // 					}
        // 					this.div.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        // 				}
        // 			}
        //
        //             break;

        		case "btn_prdIdMultiInput" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_prdId.set_value(jsonData.textValue);
        			}

                    break;
        		case "btn_iddtIdMultiInput00" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_iddtId.set_value(jsonData.textValue);
        			}

                    break;
        		 case "btn_iddtIdMultiPopup00" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				var iddtStr = "";
        				if(jsonData.length > 0){
        					for(var i = 0; i<jsonData.length; i++){
        						var rowData = JSON.parse(jsonData[i]);
        						iddtStr += rowData.IDDT_NM + ",";
        					}
        					this.div.form.edt_iddtId.set_value(iddtStr.substring(0, iddtStr.length-1));
        				}
        			}

                    break;
        		case "btn_categoryPopup" :
        			if(typeof args != 'undefined'){
        				  var jsonData = JSON.parse(args);
        				if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        					this.div.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.div.form.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        				}else{	//MRO일경우
        					this.div.form.edt_prdClcd.set_value(jsonData.MRO_PRD_CLCD);
        					this.div.form.edt_prdClsfNm.set_value(jsonData.TEMP_MRO_PRD_CLSF_NM);  //NAME
        					//this.div.form.edt_prdClsfNm.set_value(jsonData.MRO_PRD_CLSF_NM);     //FULL NAME
        				}
        			}

                    break;

        		case "btn_mnfrPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        				this.div.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        			}

                    break;

        		case "btn_psnPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_oprtrId.set_value(jsonData.OPRTR_ID);
        				this.div.form.edt_oprtrNm.set_value(jsonData.OPRTR_NM);
        			}

                    break;

        		case "btn_bgPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_bgNm.set_value(jsonData.BG_NM);
        			}

                    break;

            }
        }

        //멀티입력처리 콜백
        this.fn_callBackForSearch = function() {
        	this.fn_search(true);
        };

        //멀티삭제 콜백
        this.fn_callBackDeleteSelectedData = function() {
        	this.ds_select.clearData();
        };
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
        	this.grd_list.uDefaultFormat="PRD_ID_VIEW|PRD_GRP_ID|PRD_CLCD|PRD_CLSF_NM|PRD_NM|ATTR_VAL|MNFR_NO|MNFR_NM|SELL_UNIT_CD|BRND_NM|HASH_TAG|REPR_PRD_GRP_ID_VIEW|REPR_PRD_SPR_CD|REPR_PRD_ID_VIEW|PUB_ONLY_SPR_CD|PRD_STATS_CD|MRO_PRD_STATS_CD|PRC_APLY_SPR_CD|BG_NM|DISP_PRD_SPR_CD|PRD_OPRTR|MD_OPRTR|REG_DTM|UPD_DTM";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

            var term = this.div.form.cmb_dateUnit.value;
            var objDate = new Date();
            var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

            /* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
        	if( term == "" ) {
                this.div.form.cal_startDtm.set_value("");
        		this.div.form.cal_endDtm.set_value("");
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

        		this.div.form.cal_startDtm.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.div.form.cal_endDtm.set_value(sToday);
        	}
        };

        //초기화
        this.fn_init = function() {
        	this.ds_search.clearData();
        	this.ds_search.insertRow();
        	this.ds_search.setColumn(0,"START_NUM",0);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        	var object = this.div.form.all;
        	for( var i = 0; i < object.length; i++ ){
        		var stype = object[i].valueOf();
        		var id = object[i].id;
        		if(stype == '[object Combo]'){
        			if(id == 'cmb_dateUnit'){
        				this.div.form[id].set_index(2);
        			}else{
        				this.div.form[id].set_index(0);
        			}
        		}
        		if(stype == '[object CheckBox]'){
        			if(id == 'chk_fullPrdNmYn'){
        				this.div.form.chk_fullPrdNmYn.set_value(0);
        			}
        		}
        	}

        	this.div.form.cmb_dateUnit.set_index(0);
        	this.fn_setSearchDate();	//날짜초기화
        }

        this.fn_dateUnitFilltn = function() {
        	var rs = true;
        	if(this.div.form.cmb_dateUnit.value == ""){
        		for(var i=0; i<this.ds_search.getColCount(); i++){
        			var colId = this.ds_search.getColID(i);
        			var val = this.ds_search.getColumn(0, colId);

        			if('PRD_ID' == colId && this.gfn_isNull(val)){
        				alert('상품ID를 입력하세요.');
        				rs = false;
        				break;
        			}
        		}
        	}
        	return rs;
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //달력콤보선택
        this.cmb_dateUnit_onitemchanged = function(obj,e)
        {
            this.fn_setSearchDate();
        };

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	//this.fn_search(true);

        	//날짜 전체선택시 속도 이슈날경우 상품ID필수로 체크
        	//if(!this.fn_dateUnitFilltn()){
        	//	return false;
        	//}

        	if(!this.gfn_isNull(this.div.form.cmb_dateUnit.value)){
        		if(this.gfn_isNull(this.div.form.cal_startDtm.value)){
        			this.alert("시작 날짜를 선택하세요.");
        			return false;
        		}
        		if(this.gfn_isNull(this.div.form.cal_endDtm.value)){
        			this.alert("종료 날짜를 선택하세요.");
        			return false;
        		}
        	}

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div.form.edt_prdId.value)){
        		this.fn_setMSearch(this.name,"PRD_ID_MULTI",this.div.form.edt_prdId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ID_MULTI", null);
        	}
        	if(!this.gfn_isNull(this.div.form.edt_iddtId.value)){
        		this.fn_setMSearch(this.name,"IDDT_NM_MULTI",this.div.form.edt_iddtId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "IDDT_NM_MULTI", null);
        	}

        	if(this.ds_select.getRowCount() > 0){
        		//멀티입력은 시간차때문에 콜백에서 조회처리
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}else{
        		this.fn_search(true);
        	}
        };

        this.div_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {title:this.div.form.cmb_prdIdType.text+' 조회'};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        this.div_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:this.div.form.edt_prdId};
            var options = {title:this.div.form.cmb_prdIdType.text+' 조회'};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };


        this.div_btn_largeSearch_onclick = function(obj,e)
        {
        	alert('작업예정');
        };

        this.btn_create_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_JF_PR_01"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        //엑셀다운로드
        this.btn_exceldown_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.ds_list.rowcount < 1)
            {
                this.alert("엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.");
                return false;
            }

        	this.ofn_exportExcel({ form : this, grid : this.grd_list, fileName : "등록상품 조회 목록" });
        };

        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //컬럼 우클릭
        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        //카테고리팝업
        this.div_btn_categoryPopup_onclick = function(obj,e)
        {
        	var params = {'mallSprCd':'10', coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {title:this.div.form.cmb_prdClcdType.text+' 조회'};
        	if(this.div.form.cmb_prdClcdType.value=='1'){//SSP일경우
        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        	}else{	//MRO일경우
        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_46.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        //담당자팝업
        this.div_btn_psnPopup_onclick = function(obj,e)
        {
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {title:this.div.form.cmb_oprtrType.text+' 조회'};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        };

        //제조원팝업
        this.div_btn_mnfrPopup_onclick = function(obj,e)
        {
            var params = {
        		coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        		mnfrNo : this.ds_search.getColumn(0, "MNFR_NO"),
        		mnfrNm : this.ds_search.getColumn(0, "MNFR_NM")
        	};
            var options = {title:'제조원 조회'};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.fn_init();
        	if(this.ds_select.getRowCount() > 0){
        		this.fn_deleteSelectedData('fn_callBackDeleteSelectedData');
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
            if(bindText == "bind:PRD_ID_VIEW"){
                var params = {
        			coCd:this.ds_list.getColumn(e.row, "CO_CD"),
                    prdId:this.ds_list.getColumn(e.row, "PRD_ID")
                };
                var options = {};
                this.gfn_openPopup('productAddDetail', "PR::SSP_BO_PA_03.xfdl", params,  "fn_popupCallback", options);
            }
        };

        this.div_btn_bgPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {title:'배지 조회'};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_51.xfdl", params,  "fn_popupCallback", options);
        };

        this.btn_largedown_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_excelLargeDownload();
        	}
        };
        this.div_btn_iddtIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:this.div.form.edt_iddtId};
            var options = {title:this.div.form.Static66_00_00_00_00_00.text+' 조회'};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        this.div_btn_iddtIdMultiPopup_onclick = function(obj,e)
        {
        	 var params = {
        					coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					, IDDT_NM: this.div.form.edt_iddtId.value
        					, USE_YN : 'Y'
        				};
            var options = {title:this.div.form.Static66_00_00_00_00_00.text+' 조회'};
            this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_30.xfdl", params,  "fn_popupCallback", options);
        };

        this.div_edt_iddtId_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.div.form.edt_prdClcd.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.btn_categoryPopup.addEventHandler("onclick",this.div_btn_categoryPopup_onclick,this);
            this.div.form.cmb_dateUnit.addEventHandler("onitemchanged",this.cmb_dateUnit_onitemchanged,this);
            this.div.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_prdId.addEventHandler("onchanged",this.div_edt_prdId_onchanged,this);
            this.div.form.edt_keyword.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_oprtrId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.btn_psnPopup.addEventHandler("onclick",this.div_btn_psnPopup_onclick,this);
            this.div.form.edt_mnfrNo.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.btn_mnfrPopup.addEventHandler("onclick",this.div_btn_mnfrPopup_onclick,this);
            this.div.form.edt_prdNm.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_prvl.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_bgNm.addEventHandler("onchanged",this.div_edt_bgNm_onchanged,this);
            this.div.form.btn_bgPopup.addEventHandler("onclick",this.div_btn_bgPopup_onclick,this);
            this.div.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_btn_prdIdMultiPopup_onclick,this);
            this.div.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_btn_prdIdMultiInput_onclick,this);
            this.div.form.edt_iddtId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_iddtId.addEventHandler("onchanged",this.div_edt_iddtId_onchanged,this);
            this.div.form.btn_iddtIdMultiInput00.addEventHandler("onclick",this.div_btn_iddtIdMultiInput_onclick,this);
            this.div.form.btn_iddtIdMultiPopup00.addEventHandler("onclick",this.div_btn_iddtIdMultiPopup_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_largedown.addEventHandler("onclick",this.btn_largedown_onclick,this);
            this.cmb_viewCount.addEventHandler("onitemchanged",this.cmb_viewCount_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
