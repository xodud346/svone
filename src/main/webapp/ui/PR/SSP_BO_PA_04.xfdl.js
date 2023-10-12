(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_04");
            this.set_titletext("상품그룹 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelMetaSeq\" type=\"STRING\" size=\"256\"/><Column id=\"saveFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdGrpSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">사용</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outputlarge", this);
            obj._setContents("<ColumnInfo><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"194","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("상품/그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","762","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66","762","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,null,"60","28","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,null,"60","28","84","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00","762","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","113",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","762","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdIdType","160","24","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_prdIdType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_prdIdType_innerdataset", obj);
            div_search_form_cmb_prdIdType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그룹ID</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_prdIdType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","294","24","288","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_keywordType","160","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_keywordType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_keywordType_innerdataset", obj);
            div_search_form_cmb_keywordType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">그룹명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_keywordType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","294","55","288","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_oprtrType","160","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_oprtrType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_oprtrType_innerdataset", obj);
            div_search_form_cmb_oprtrType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_oprtrType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","294","86","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","398","86","184","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_psnPopup","586","86","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdGrpSprCd","901","24","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_prdGrpSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","901","55","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","581","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","160","117","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_dateType_innerdataset", obj);
            div_search_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_startDtm","294","117","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","438","117","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_endDtm","451","117","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dateUnit","595","117","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"224","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"224","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","262",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"그룹ID\"/><Cell col=\"1\" text=\"그룹구분\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"그룹상품수\"/><Cell col=\"4\" text=\"기준상품ID\"/><Cell col=\"5\" text=\"기준상품명\"/><Cell col=\"6\" text=\"기준상품 대표규격\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"등록자ID\"/><Cell col=\"10\" text=\"등록자명\"/><Cell col=\"11\" text=\"최종수정일\"/><Cell col=\"12\" text=\"최종수정자ID\"/><Cell col=\"13\" text=\"최종수정자명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_GRP_ID\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:PRD_GRP_SPR_NM\"/><Cell col=\"2\" text=\"bind:PRD_GRP_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRD_GRP_CNT\"/><Cell col=\"4\" text=\"bind:PRD_ID\"/><Cell col=\"5\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRD_ATTR_VAL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:USE_YN\"/><Cell col=\"8\" text=\"bind:REG_DTM\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\"/><Cell col=\"10\" text=\"bind:REGPSN_NM\"/><Cell col=\"11\" text=\"bind:UPD_DTM\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\"/><Cell col=\"13\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","238","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"224","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"224","60","28","342",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"224","101","28","406",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("일괄등록/수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largedown",null,"224","120","28","511",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","div_search.form.edt_keyword","value","ds_search","KEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_oprtrId","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_oprtrNm","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cmb_prdGrpSprCd","value","ds_search","PRD_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.cmb_prdIdType","value","ds_search","PRD_ID_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.cmb_keywordType","value","ds_search","KEYWORD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_search.form.cmb_oprtrType","value","ds_search","OPRTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_dateType","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_startDtm","value","ds_search","START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cal_endDtm","value","ds_search","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cmb_dateUnit","value","ds_search","DATE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_prdId","value","ds_search","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_04.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_04.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_04.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.totalCount = 0;

        this.searchPrdClsfNm = '';
        this.searchMnfrNm = '';
        this.searchOprtrNm = '';

        this.searchEmpNo = "";
        this.searchOprtrNm = "";
        this.oprtrCount = 0;

        this.coCd = this.gfn_isNull(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"))?"1000":this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD");
        this.mallSprCd = "10";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.copyPaste.addGrid(this.grd_list);

        	this.fn_commonCodeSearch();
        	this.fn_init();
        };

        // 단축키
        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;

        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if( e.fromobject.id == "edt_prdClcd") {
        				this.ds_search.setColumn(0, "PRD_CLCD", value);
        				this.fn_popupSearch("edt_prdClcd", "/pr/prd-popup/select-category-popup-list.do");
        			}

        			if( e.fromobject.id == "edt_oprtrId" ) {
        				this.ds_search.setColumn(0, "EMP_NO", value);
        				this.ds_search.setColumn(0, "CO_CD", this.coCd);
        				this.fn_popupSearch("edt_oprtrId", "/co/popup/select-operator-popup-list.do");
        			}

        			if( e.fromobject.id == "edt_oprtrNm" ) {
        				this.ds_search.setColumn(0, "OPRTR_NM", value);
        				this.ds_search.setColumn(0, "CO_CD", this.coCd);
        				this.fn_popupSearch("edt_oprtrId", "/co/popup/select-operator-popup-list.do");
        			}
        		}
        	}

        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		this.btn_search_onclick();
        	}

        }
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/pr/prd-mng/select-product-series-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=ds_output";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            }
        	this.ds_search.setColumn(0,"CO_CD",this.coCd);
        	this.ds_search.setColumn(0,"MALL_SPR_CD",this.mallSprCd);

        // 	var prdId = this.div_search.form.edt_prdId.value;
        // 	if(!this.gfn_isNull(prdId)) {
        // 		prdId = prdId.replace(/,\s*$/, "");
        // 		prdId = nexacro.replaceAll(prdId,",","|");
        // 		this.ds_search.setColumn(0,"PRD_ID",prdId);
        // 	}else{
        // 		this.ds_search.setColumn(0,"PRD_ID",null);
        // 	}

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_prdGrpSprCd=ds_output1 ds_dateUnit=ds_output2";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "PRD_GRP_SPR_CD,INQ_PERD_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
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

        //엑셀 대용량 다운로드 호출
        this.fn_excelLargeDownload = function(){

            var sSvcId = "largedown";
            var sUrl = "/pr/prd-mng/call-large-excel-down.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_outputlarge=ds_outputlarge";
            var arg = "";


        	this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "coCd", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "pgmId", "SSP_BO_PA_04");
        	this.ds_search.setColumn(0, "excelMetaSeq", "1");
        	this.ds_search.setColumn(0, "saveFileNm", "시리즈그룹상품관리.xlsx");
        	this.ds_search.setColumn(0, "regpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "updpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");

                    break;

                case "commonCodeSearch" :
        			this.ds_prdGrpSprCd.insertRow(0);
        			this.ds_prdGrpSprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_prdGrpSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div_search.form.cmb_prdGrpSprCd.set_index(0);

        			this.ds_dateUnit.insertRow(0);
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD", "");
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div_search.form.cmb_dateUnit.set_index(0);

                    break;

                case "edt_prdClcd" :
                    this.div_search.form.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
                    break;

        		case "edt_oprtrId":
        			if(this.oprtrCount  == 1){
        				this.div_search.form.edt_oprtrId.set_value(this.searchEmpNo);
        				this.div_search.form.edt_oprtrNm.set_value(this.searchOprtrNm);
        			}else{
        				var objParam = {};
        				objParam.empNo = this.div_search.form.edt_oprtrId.value;
        				objParam.oprtrNm = this.div_search.form.edt_oprtrNm.value;
        				objParam.coCd = this.coCd;
        				this.gfn_openPopup("ssp_bo_pp_27", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        			}
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

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            var oGrid=null;
        	var oPaging = this.div_paging;

            if(sGridId == "grd_list"){
                oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
                this.fn_search();
            }
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_prdIdMultiPopup" :
                    var jsonData = JSON.parse(args);
        			var prdStr = "";

        			if(jsonData.length > 0){
        				for(var i = 0; i<jsonData.length; i++){
        					prdStr += jsonData[i].PRD_ID + ",";
        				}
        				this.div_search.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        			}
                    break;

        		case "btn_prdIdMultiInput" :
        			var jsonData = JSON.parse(args);
        			this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        			this.fn_setMSearch(this.name,"PRD_ID",jsonData.textValue);
                    break;

        		case "btn_psnPopup" :
                    var jsonData = JSON.parse(args);
                    this.div_search.form.edt_oprtrId.set_value(jsonData.EMP_NO);
                    this.div_search.form.edt_oprtrNm.set_value(jsonData.OPRTR_NM);

        		case "btn_reg" :
        			if(args){
        				this.fn_search(true);
        			}
        			break;

        		case "ssp_bo_pa_08" :
        			if(args){
        				this.fn_search();
        			}
        			break;

            }
        }


        //멀티입력처리 콜백
        this.fn_callBackForSearch = function() {
        	this.fn_search(true);
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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "PRD_GRP_ID,PRD_GRP_SPR_NM,PRD_GRP_NM,PRD_GRP_CNT,PRD_ID,PRD_NM,PRD_ATTR_VAL,USE_YN,REG_DTM,REGPSN_ID,REGPSN_NM,UPD_DTM,UPDPSN_ID,UPDPSN_NM";
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        //초기화
        this.fn_init = function() {
        	this.div_search.form.cmb_prdIdType.set_index(0);
        	this.div_search.form.cmb_prdGrpSprCd.set_index(0);
        	this.div_search.form.cmb_keywordType.set_index(0);
        	this.div_search.form.cmb_useYn.set_index(0);
        	this.div_search.form.cmb_oprtrType.set_index(0);
        	this.div_search.form.cmb_dateType.set_index(0);
        	this.div_search.form.cmb_dateUnit.set_index(0);

        	this.div_search.form.cal_startDtm.set_value('');
        	this.div_search.form.cal_endDtm.set_value('');
        	this.div_search.form.edt_prdId.set_value('');
        	this.div_search.form.edt_keyword.set_value('');
        	this.div_search.form.edt_oprtrId.set_value('');
        	this.div_search.form.edt_oprtrNm.set_value('');
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div_search.form.edt_prdId.value)){
        		this.fn_setMSearch(this.name,"PRD_ID",this.div_search.form.edt_prdId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ID", null);
        	}

        	if(this.ds_select.getRowCount() > 0){
        		//멀티입력은 시간차때문에 콜백에서 조회처리
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}else{
        		this.fn_search(true);
        	}
        };

        this.div_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:'PRD_ID'};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params);
        };

        this.div_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        // 	var params = {};
        //     var options = {};
        //     this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        //담당자팝업
        this.div_btn_psnPopup_onclick = function(obj,e)
        {
        	var params = {empNo:this.div_search.form.edt_oprtrId.value, oprtrNm:this.div_search.form.edt_oprtrNm.value, coCd:this.coCd};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params);
        };

        this.div_cmb_dateUnit_onitemchanged = function(obj,e)
        {
        	var objCurr = new nexacro.Date();
        	var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	var sFrom = this.fn_CalDate(this.div_search.form.cmb_dateUnit.value,objCurr);

        	// "전체"를 선택한 경우
        	if (e.postindex == 0) {
        		this.div_search.form.cal_startDtm.set_value("");
        		this.div_search.form.cal_endDtm.set_value("");
        	}
        	// "1일"을 선택한 경우 동일한 일자 설정
        	else if (e.postindex == 1) {
        		this.div_search.form.cal_startDtm.set_value(sToday);
        		this.div_search.form.cal_endDtm.set_value(sToday);
        	}
        	else {
        		this.div_search.form.cal_startDtm.set_value(sFrom);
        		this.div_search.form.cal_endDtm.set_value(sToday);
        	}

        };

        this.btn_reg_onclick = function(obj,e)
        {
        	var params = {coCd:this.coCd};
            this.gfn_openPopup(e.fromobject.id, "PR::SSP_BO_PA_07.xfdl", params);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		var params = {prdGrpId:this.ds_list.getColumn(e.row,"PRD_GRP_ID")
        		            , prdGrpSprCd:this.ds_list.getColumn(e.row,"PRD_GRP_SPR_CD")
        					, prdClcd:this.ds_list.getColumn(e.row,"PRD_CLCD")
        					, coCd:this.coCd};
        		this.gfn_openPopup("ssp_bo_pa_08", "PR::SSP_BO_PA_08.xfdl", params);
        	}

        };

        this.btn_create_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_JF_PR_03"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount > 0){
        		this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"상품그룹 목록"});
        	}
        	else
        	{
        		//this.alert("엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.");
        		this.alert(this.fn_getMessage("ERRS000202"));
        	}
        };

        this.div_search_btn_init_onclick = function(obj,e)
        {
        	this.div_search.form.cmb_dateType.set_index(0);
        	this.div_search.form.cmb_dateUnit.set_index(0);
        	this.div_search.form.cmb_keywordType.set_index(0);
        	this.div_search.form.cmb_oprtrType.set_index(0);
        	this.div_search.form.cmb_prdGrpSprCd.set_index(0);
        	this.div_search.form.cmb_prdIdType.set_index(0);
        	this.div_search.form.cmb_useYn.set_index(0);

        	this.div_search.form.edt_keyword.set_value("");
        	this.div_search.form.edt_oprtrId.set_value("");
        	this.div_search.form.edt_oprtrNm.set_value("");
        	this.div_search.form.edt_prdId.set_value("");
        	this.div_search.form.cal_startDtm.set_value("");
        	this.div_search.form.cal_endDtm.set_value("");
        };

        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list",this.grd_list.getCurFormatString());
        };

        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        // 대용량 다운로드
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
            this.div_search.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("onchanged",this.div_edt_prdId_onchanged,this);
            this.div_search.form.edt_keyword.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div_search.form.edt_oprtrId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div_search.form.btn_psnPopup.addEventHandler("onclick",this.div_btn_psnPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.cmb_dateUnit.addEventHandler("onitemchanged",this.div_cmb_dateUnit_onitemchanged,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_largedown.addEventHandler("onclick",this.btn_largedown_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
