(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_30");
            this.set_titletext("견적요청 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_CMPL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_VLD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_date", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_statsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"__전시상품군__\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__사업장__\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__운영단위__\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__담당자__\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"__요청자__\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"__담당팀__\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"teamCd\" type=\"STRING\" size=\"256\"/><Column id=\"teamNm\" type=\"STRING\" size=\"256\"/><Column id=\"teamAttrClcdNm\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"225","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqNo","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_dispPrdGrp","762","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bzplcOprUnit","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_text("사업장/운영단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_taborder("31");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqr","762","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("요청고객");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"184","60","28","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"184","60","28","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66","20","82",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static70","762","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","294","55","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","418","55","164","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","586","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_date","160","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_date_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_date_innerdataset", obj);
            div_search_form_cmb_date_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REQ_DT</Col><Col id=\"datacolumn\">고객요청일</Col></Row><Row><Col id=\"codecolumn\">FNL_DT</Col><Col id=\"datacolumn\">견적/처리완료일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_date_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","505","86","106","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdId","160","24","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_prdId_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_prdId_innerdataset", obj);
            div_search_form_cmb_prdId_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">견적요청번호</Col><Col id=\"codecolumn\">ESTI_NO</Col></Row><Row><Col id=\"datacolumn\">S-MRO 신규요청번호</Col><Col id=\"codecolumn\">NEW_NO</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_prdId_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","294","24","288","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdId","586","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_StatsCd","901","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_statsCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static68","20","113",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrTeam","20","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("담당팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","762","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static67","20","144",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static71","762","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_dispPrdNm","20","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_text("전시상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrTeamCd","160","117","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrTeamNm","294","117","288","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdNm","160","148","422","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdGrpCd","901","24","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdGrpNm","1035","24","178","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dispPrdGrpPopup","1218","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqrId","901","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqrNm","1035","55","178","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqrPopup","1218","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","901","117","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","1035","117","178","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPop","1218","117","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dtStr","295","87","94","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","393","87","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dtEnd","407","87","94","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_bzplcId","160","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_bzplcId_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_bzplcId_innerdataset", obj);
            div_search_form_cmb_bzplcId_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">BZPLC_ID</Col><Col id=\"datacolumn\">사업장</Col></Row><Row><Col id=\"codecolumn\">OPR_UNIT_ID</Col><Col id=\"datacolumn\">운영단위</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_bzplcId_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrTeamPop","586","117","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"239","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"239","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","277",null,null,"20","62",null,null,null,null,this);
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_list");
            obj.set_nodatatext("조회 조건 입력 후 조회 버튼을 눌러주세요.");
            obj.set_font("normal 12px/normal \"Arial\",\"맑은 고딕\"");
            obj.set_taborder("6");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("area");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"견적요청번호\"/><Cell col=\"2\" text=\"S-MRO 신규요청번호\"/><Cell col=\"3\" text=\"처리상태\"/><Cell col=\"4\" text=\"사업장\"/><Cell col=\"5\" text=\"운영단위\"/><Cell col=\"6\" text=\"요청고객ID\"/><Cell col=\"7\" text=\"요청고객명\"/><Cell col=\"8\" text=\"상품군\"/><Cell col=\"9\" text=\"전시상품명\"/><Cell col=\"10\" text=\"담당팀ID\"/><Cell col=\"11\" text=\"담당팀명\"/><Cell col=\"12\" text=\"담당MD ID\"/><Cell col=\"13\" text=\"담당MD명\"/><Cell col=\"14\" text=\"등록상품ID\"/><Cell col=\"15\" text=\"고객요청일\"/><Cell col=\"16\" text=\"견적요청일\"/><Cell col=\"17\" text=\"견적/처리완료일\"/><Cell col=\"18\" text=\"견적유효기간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"expr:ESTM_REQ_PROC_STATS_CD == &quot;10&quot; ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:ESTM_REQ_NO\" cssclass=\"grd_Txt_Blue_U\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MRO_REQ_NO\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ESTM_REQ_PROC_STATS_NM\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BZPLC_NM\"/><Cell col=\"5\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"6\" text=\"bind:MBR_ID\"/><Cell col=\"7\" text=\"bind:MBR_NM\"/><Cell col=\"8\" text=\"bind:PRD_CLNM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:DISP_PRD_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ORG_CD\"/><Cell col=\"11\" text=\"bind:ORG_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:OPRTR_ID\"/><Cell col=\"13\" text=\"bind:OPRTR_NM\"/><Cell col=\"14\" text=\"bind:NEW_PRD_ID\"/><Cell col=\"15\" text=\"bind:REG_DTM\"/><Cell col=\"16\" text=\"bind:ESTM_REQDT\"/><Cell col=\"17\" text=\"bind:ESTM_CMPL_DT\"/><Cell col=\"18\" text=\"bind:ESTM_VLD_DT\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:22",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","251","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"239","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_receipt",null,"239","81","28","342",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("접수");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_prdId","value","ds_search","PRD_ID_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcId","value","ds_search","BZPLC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_date","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_dtUnit","value","ds_search","DATE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_StatsCd","value","ds_search","PROC_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_chrTeamCd","value","ds_search","TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_chrTeamNm","value","ds_search","TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_dispPrdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_dispPrdGrpCd","value","ds_search","PRD_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_dispPrdGrpNm","value","ds_search","PRD_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_reqrId","value","ds_search","REQ_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_reqrNm","value","ds_search","REQ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_chrpsnId","value","ds_search","CHAR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.edt_chrpsnNm","value","ds_search","CHAR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cmb_bzplcId","value","ds_search","BZPLC_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cal_dtStr","value","ds_search","START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cal_dtEnd","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_30.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_30.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_NA_30.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        this.totalCount = 0;
        this.mallSprCd = '10';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            this.gfn_formOnLoad(this);		// 공통 함수 호출
            this.fn_init();					// 사용자 화면 초기화
        	this.fn_commonCodeSearch();		// 공통코드조회
        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) this.ds_search.setColumn(0, "PROC_STATS_CD", oArgs.STATUS);
        		if (oArgs.ID) this.ds_search.setColumn(0, "CHAR_CD", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_chrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {
        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_dtStr
        			   ,this.div_search.form.cal_dtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        }

        this.fn_onkeyup = function(obj,e){
        	if( e.keycode == 13) {
        		var value = this.gfn_allTrim(e.fromobject.value);
        		if(value != -1 && this.gfn_lengthByte(value) > 0) {
        			// 요청번호
        			if(e.fromobject.id == this.div_search.form.edt_prdId.id){
        				this.div_search.form.btn_prdId.click();
        			// 전시상품군
        			}else if(e.fromobject.id == this.div_search.form.edt_dispPrdGrpCd.id || e.fromobject.id == this.div_search.form.edt_dispPrdGrpNm.id){
        				this.ds_popupSearch.setColumn(0, "MALL_SPR_CD", "10");
        				this.ds_popupSearch.setColumn(0, "PRD_CLCD"   , e.fromobject.id == this.div_search.form.edt_dispPrdGrpCd.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "PRD_CLSF_NM", e.fromobject.id == this.div_search.form.edt_dispPrdGrpNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_list", "/pr/prd-popup/select-category-popup-list.do");
        			// 사업장/운영단위
        			}else if(e.fromobject.id == this.div_search.form.edt_bzplcId.id || e.fromobject.id == this.div_search.form.edt_bzplcNm.id) {
        				if(this.div_search.form.cmb_bzplcId.value == "BZPLC_ID") {		// 사업장
        					this.ds_popupSearch.setColumn(0, "BZPLC_ID", e.fromobject.id == this.div_search.form.edt_bzplcId.id ? value : "");
        					this.ds_popupSearch.setColumn(0, "BZPLC_NM", e.fromobject.id == this.div_search.form.edt_bzplcNm.id ? value : "");
        					this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-bzplc-popup-list.do");
        				} else {
        					this.ds_popupSearch.setColumn(0, "BZPLC_ID" , "");			// 운영단위
        					this.ds_popupSearch.setColumn(0, "OPR_UNIT_ID", e.fromobject.id == this.div_search.form.edt_bzplcId.id ? value : "");
        					this.ds_popupSearch.setColumn(0, "OPR_UNIT_NM", e.fromobject.id == this.div_search.form.edt_bzplcNm.id ? value : "");
        					this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-operate-popup-list.do");
        				}
        			// 요청자
        			}else if(e.fromobject.id == this.div_search.form.edt_reqrId.id || e.fromobject.id == this.div_search.form.edt_reqrNm.id) {
        				this.ds_popupSearch.setColumn(0, "MBR_ID", e.fromobject.id == this.div_search.form.edt_reqrId.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "MBR_NM", e.fromobject.id == this.div_search.form.edt_reqrNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-client-popup-list.do");
        			// 담당팀
        			}else if(e.fromobject.id == this.div_search.form.edt_chrTeamCd.id || e.fromobject.id == this.div_search.form.edt_chrTeamNm.id) {
        				this.ds_popupSearch.setColumn(0, "coCd", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
                        this.ds_popupSearch.setColumn(0, "teamAttrClcdNm", this.fv_oApp.gds_userInfo.getColumn(0, "ORG_CD").substr(0, 1));
        				this.ds_popupSearch.setColumn(0, "teamCd", e.fromobject.id == this.div_search.form.edt_chrTeamCd.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "teamNm", e.fromobject.id == this.div_search.form.edt_chrTeamNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/bo/cust/cmn/popup/select-mbr-oprtr-org-info-list.do");
        			// 담당자
        			}else if(e.fromobject.id == this.div_search.form.edt_chrpsnId.id || e.fromobject.id == this.div_search.form.edt_chrpsnNm.id) {
        				this.ds_popupSearch.setColumn(0, "empNo"  , e.fromobject.id == this.div_search.form.edt_chrpsnId.id ? value : "");
        				this.ds_popupSearch.setColumn(0, "oprtrNm", e.fromobject.id == this.div_search.form.edt_chrpsnNm.id ? value : "");
        				this.fn_popupSearch(e.fromobject.id, "ds_output1", "/co/popup/select-operator-popup-list.do");
        			// 상품명
        			}else if(e.fromobject.id == this.div_search.form.edt_dispPrdNm.id) {	//  && this.div_search.form.edt_dispPrdNm.value != ""
        				this.div_search.form.btn_search.click();
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

        	// CTRL + A
        	if (e.keycode == 65 && e.ctrlkey == true) {
        		// 접수
        		this.btn_receipt_onclick();
        		event.preventDefault();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 조회
        this.fn_search = function (pgNo){
        	var sSvcId = this.div_search.form.btn_search.id;
            var sUrl   = "/pr/prdMng/select-product-estimate-list.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_list=ds_list";
            var arg    = "";

            this.div_paging.uPage = pgNo;
        	this.ds_search.setColumn(0, "PAGE_NO", pgNo);
        	this.ds_search.setColumn(0, "ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.mallSprCd)

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 접수
        this.fn_receipt = function () {
            var sSvcId = this.btn_receipt.id;
            var sUrl   = "/pr/prdMng/pr-product-estimate-status-list.do";
            var inDs   = "ds_list=ds_list:U";
            var outDs  = "";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        //    var sSvcId = this.div_search.form.cmb_pubOnlySprCd.id;
        	var sSvcId = "selectCommonCode";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_date=ds_output1 ds_statsCd=ds_output2";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,ESTM_REQ_PROC_STATS_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // //폼 엔터처리용
        this.fn_popupSearch = function (svcId, outDs, url){
        	var sSvcId = svcId;
        	var sUrl   = url;
        	var inDs   = "ds_search=ds_popupSearch";
        	var outDs  = "ds_popupList=" + outDs;
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	switch(svcID) {
        	    // 조회
                case this.div_search.form.btn_search.id :
        //  		var nTotCnt = this.ds_list.getColumn(0, "TOTAL_COUNT") || 0;
        //  		this.div_paging.set_visible(nTotCnt > 0);
         			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        // 			this.ds_search.setRowType(0, Dataset.ROWTYPE_NORMAL);   // 조회 조건 변경상태 초기화
         			this.grd_list.setCellProperty("head", 0, "text", "0");  // 그리드 헤더 체크박스 초기화

        			break;

        		// 접수
                case this.btn_receipt.id :
        			this.div_search.form.btn_search.click();	// 재조회

        			break;

        		// 접수 confirm
        		case "gfn_confirm" :
        			if(errorCode){
        				this.fn_receipt();						// 접수
        			}

        			break;

                // 공통코드조회
                case "selectCommonCode" :
        // 			this.ds_statsCd.copyRow(this.ds_statsCd.insertRow(0), this.ds_allOptnCd, 0);	// 전체(일자)
        			this.ds_statsCd.insertRow(0);
        			this.ds_statsCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div_search.form.cmb_StatsCd.set_index(0);
        			this.ds_date.insertRow(0);
        			this.ds_date.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div_search.form.cmb_dtUnit.set_index(0);
        			this.cmb_dateUnit_onitemchanged(this.div_search.form.cmb_dtUnit)
        			this.fn_todoSearch();
                    break;
        		// 레이아웃 저장
         		case this.btn_layoutInit.id :
        			this.reload();

        			break;

        		// 전시상품군
        		case this.div_search.form.edt_dispPrdGrpCd.id :
        		case this.div_search.form.edt_dispPrdGrpNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_dispPrdGrpCd.set_value(this.ds_popupList.getColumn(0, "PRD_CLCD"));
        				this.div_search.form.edt_dispPrdGrpNm.set_value(this.ds_popupList.getColumn(0, "FULL_PRD_CLSF_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_dispPrdGrpPopup.click();
        			}

                    break;

        		// 사업장/운영단위
                case this.div_search.form.edt_bzplcId.id :
        		case this.div_search.form.edt_bzplcNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				if(this.div_search.form.cmb_bzplcId.value == "BZPLC_ID") {   // 사업장
        					this.div_search.form.edt_bzplcId.set_value(this.ds_popupList.getColumn(0, "BZPLC_ID"));
        					this.div_search.form.edt_bzplcNm.set_value(this.ds_popupList.getColumn(0, "BZPLC_NM"));
        				} else {
        					this.div_search.form.edt_bzplcId.set_value(this.ds_popupList.getColumn(0, "OPR_UNIT_ID"));
        					this.div_search.form.edt_bzplcNm.set_value(this.ds_popupList.getColumn(0, "OPR_UNIT_NM"));
        				}
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_bzplcPopup.click();
        			}

        			break;

        		// 요청자
        		case this.div_search.form.edt_reqrId.id :
        		case this.div_search.form.edt_reqrNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_reqrId.set_value(this.ds_popupList.getColumn(0, "MBR_ID"));
        				this.div_search.form.edt_reqrNm.set_value(this.ds_popupList.getColumn(0, "MBR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_reqrPopup.click();
        			}

                    break;

        		// 담당팀
        		case this.div_search.form.edt_chrTeamCd.id :
        		case this.div_search.form.edt_chrTeamNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_chrTeamCd.set_value(this.ds_popupList.getColumn(0, "TEAM_CD"));
        				this.div_search.form.edt_chrTeamNm.set_value(this.ds_popupList.getColumn(0, "TEAM_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_chrTeamPop.click();
        			}

                    break;

         		// 담당자
        		case this.div_search.form.edt_chrpsnId.id :
        		case this.div_search.form.edt_chrpsnNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_search.form.edt_chrpsnId.set_value(this.ds_popupList.getColumn(0, "EMP_NO"));
        				this.div_search.form.edt_chrpsnNm.set_value(this.ds_popupList.getColumn(0, "OPRTR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_search.form.btn_chrpsnPop.click();
        			}

                    break;
        	}
        };

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, args){
            if(!args) { return; }

        	var jsonData = JSON.parse(args);
            switch(svcID) {
        		case this.grd_list.id :
        			// 조회 실행
        			this.div_search.form.btn_search.click();

                    break;
        	    // 요청번호
        		case this.div_search.form.btn_prdId.id :

        			this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        			//this.fn_setMSearch(this.name, "ESTM_REQ_NO", jsonData.textValue);

        			break;
        		// 전시상품군
        		case this.div_search.form.btn_dispPrdGrpPopup.id :
        			this.div_search.form.edt_dispPrdGrpCd.set_value(jsonData.PRD_CLCD);
        			this.div_search.form.edt_dispPrdGrpNm.set_value(jsonData.PRD_CLSF_NM);
                    break;

        		// 사업장/운영단위 팝업 버튼
        		case this.div_search.form.btn_bzplcPopup.id :
        			var cd = "";
        			var nm = "";

        			for(var i = 0; i < jsonData.length; i++) {
        				var rtnData = JSON.parse(jsonData[i]);
        				if(this.div_search.form.cmb_bzplcId.value == "BZPLC_ID"){
        					cd += rtnData.BZPLC_ID + ",";
        					nm += rtnData.BZPLC_NM + ",";
        				}else{
        					cd += rtnData.OPR_UNIT_ID + ",";
        					nm += rtnData.OPR_UNIT_NM + ",";
        				}
        			}

        			this.div_search.form.edt_bzplcId.set_value(cd);
        			this.div_search.form.edt_bzplcNm.set_value(nm);

                    break;
        		// 요청자
        		case this.div_search.form.btn_reqrPopup.id :
        			var cd = "";
        			var nm = "";

        			for(var i = 0; i < jsonData.length; i++) {
        				var rtnData = JSON.parse(jsonData[i]);
        				cd += rtnData.MBR_ID + ",";
        				nm += rtnData.MBR_NM + ",";
        			}

        			this.div_search.form.edt_reqrId.set_value(cd);
        			this.div_search.form.edt_reqrNm.set_value(nm);
        // 			this.fn_setMSearch(this.name, "ESTM_MBR_NO", cd);
        // 			this.fn_setMSearch(this.name, "ESTM_MBR_NM", nm);

                    break;
        		// 담당팀
        		case this.div_search.form.btn_chrTeamPop.id :
                    this.div_search.form.edt_chrTeamCd.set_value(jsonData.TEAM_CD);
                    this.div_search.form.edt_chrTeamNm.set_value(jsonData.TEAM_NM);

                    break;
        		// 담당자
        		case this.div_search.form.btn_chrpsnPop.id :
                    this.div_search.form.edt_chrpsnId.set_value(jsonData.EMP_NO);
                    this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM);

                    break;
            }
        }

        // 페이징 콜백
        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;
            if(sFlag){  // 페이지 번호 클릭
        		this.fn_search(oPaging.uPage);
            } else {    // 페이징 DIV 생성

        		var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
         		this.totalPageCount.set_text(sTotText);
        	}
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            if(sGridId ==  this.grd_list.id){
                this.ds_search.setColumn(0, "SORT_COLUMN", this[sGridId].uaSortInfo.bindCol);
                this.ds_search.setColumn(0, "SORT_TYPE"  , this[sGridId].uaSortInfo.status );
                this.fn_search(this.div_paging.form.fv_nPage);
            }
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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "CHK,ESTM_REQ_NO,NEW_PRD_REQ_NO,ESTM_REQ_PROC_STATS_NM,BZPLC_NM,OPR_UNIT_NM,MBR_NM,PRD_CLNM,DISP_PRD_NM,ORG_NM,OPRTR_NM,REPR_PRD_ID,REG_DTM,ESTM_REQDT,ESTM_CMPL_DT,ESTM_VLD_DT";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //초기화
        this.fn_init = function() {
        	this.copyPaste.addGrid(this.grd_list);

        	this.div_search.form.btn_clear.click();  						// 초기화 버튼 클릭
        	//this.ds_search.setRowType(0, Dataset.ROWTYPE_NORMAL);			// 변경상태 초기화
        	this._gfnHeadCheckSelectAll = function(){}; 					 // 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크) 무력화
        	this.ds_popupSearch.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));  // 회사코드
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 달력 콤보 선택
        this.cmb_dateUnit_onitemchanged = function(obj,e)
        {
        	/* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
            var txt = obj.text;

        	if(txt.indexOf("전체") != -1) {
        		this.div_search.form.cal_dtStr.set_value("");
        		this.div_search.form.cal_dtEnd.set_value("");
        		return;
        	}

        	if(!this.gfn_isYMD(this.div_search.form.cal_dtEnd.value || "")) {
        		this.div_search.form.cal_dtEnd.set_value(new nexacro.Date());
        	}

            // 시작일자가 정상이면서 전체 선택시
        	if(this.gfn_isYMD(this.div_search.form.cal_dtStr.value || "") && this.gfn_isNull(obj.value)) {
        		return;
        	}

            var objDate = this.gfn_strToDate(this.div_search.form.cal_dtEnd.value);

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

            this.div_search.form.cal_dtStr.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        };

        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
         	var initInfo = { LANG_CD:"KO", PRD_ID_TYPE:"ESTI_NO", BZPLC_TYPE:"BZPLC_ID", DATE_TYPE:"REQ_DT", PRD_NM_EQL_CMPR:"N" };
         	for(var i = 0; i < this.ds_search.getColCount(); i++) {
         		this.ds_search.setColumn(0, i, initInfo[this.ds_search.getColID(i)] || "");
         	}

        	this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));  // 회사코드
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	this.div_search.form.cmb_StatsCd.set_index(0);						// 처리상태 초기화
        	this.div_search.form.cmb_dtUnit.set_index(0);						// 일자콤보 초기화
        	this.cmb_dateUnit_onitemchanged(this.div_search.form.cmb_dtUnit);	// 날짜 초기화
        	//this.ds_list.clearData();											// 리스트 초기화
        };

        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.div_search.form.cmb_bzplcId.value == "BZPLC_ID"){
        		this.fn_setMSearch(this.name, "ESTM_BZP_NO", this.div_search.form.edt_bzplcId.value, "ds_search");
        		this.fn_setMSearch(this.name, "ESTM_BZP_NM", this.div_search.form.edt_bzplcNm.value, "ds_search");
        	}else{
        		this.fn_setMSearch(this.name, "ESTM_OPR_NO", this.div_search.form.edt_bzplcId.value, "ds_search");
        		this.fn_setMSearch(this.name, "ESTM_OPR_NM", this.div_search.form.edt_bzplcNm.value, "ds_search");
        	}
        	this.fn_setMSearch(this.name,"ESTM_REQ_NO", this.div_search.form.edt_prdId.value, "ds_search");
        	this.fn_setMSearch(this.name, "ESTM_MBR_NO", this.div_search.form.edt_reqrId.value, "ds_search");
        	this.fn_setMSearch(this.name, "ESTM_MBR_NM", this.div_search.form.edt_reqrNm.value, "ds_search");

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_search(1);
        	}else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}
        };

        // 접수
        this.btn_receipt_onclick = function(obj,e)
        {
        	// 선택된 건 수 확인
        	if(this.ds_list.getCaseCount("CHK == 1") == 0) {
        		this.gfn_popMessage("ERRC000050", ["항목"]);
        		return;
        	}

        	var flag = false;
        	for(var i = 0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i, "CHK") == "1" && this.ds_list.getColumn(i, "ESTM_REQ_PROC_STATS_CD") != "10"){
        			flag = true;
        		}
        	}

        	if(flag){
        		this.gfn_popMessage("ERRP000130");
        		return;
        	}

        	this.gfn_popMessage("COMS000013", ["접수"], "gfn_confirm", "fn_callBack");
        };

        // 엑셀 다운로드
        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount < 1){
        		this.gfn_popMessage("ERRS000202");
        		return;
        	}

        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"견적상품 목록"});
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list",this.grd_list.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
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

        // 그리드 셀 클릭
        this.grd_list_oncellclick = function(obj,e)
        {
            if(e.col == this.grd_list.getBindCellIndex("body", "ESTM_REQ_NO")) {
        		var params  = { args : { CO_CD          : this.ds_list.getColumn(e.row, "CO_CD")
        							   , ESTM_REQ_NO : this.ds_list.getColumn(e.row, "ESTM_REQ_NO")
        							   , PRD_CLCD : this.ds_list.getColumn(e.row, "PRD_CLCD")
        							   }
        					  };
        		var options = { title:"견적요청 상세/등록처리" };
        		this.gfn_openPopup(this.grd_list.id, "PR::SSP_BO_NA_31.xfdl", params, "fn_popupCallback", options);
        	}
        };

        // 요청번호 팝업
        this.div_search_btn_prdId_onclick = function(obj,e)
        {
          	var params  = { textId : this.div_search.form.edt_prdId };
        	var options = { };

         	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        //	this.fn_showTareaInput(e.fromobject.id, "ESTM_REQ_NO", this.div_search.form.edt_prdId.value, "fn_popupCallback", 120, 300);
        };

        // 전시상품군 팝업
        this.div_search_btn_dispPrdGrpPopup_onclick = function(obj,e)
        {
        	var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				  , mallSprCd : "10"
         				  , prdClcd : this.div_search.form.edt_dispPrdGrpCd.value
         				  , prdClsfNm : this.div_search.form.edt_dispPrdGrpNm.value
         				  };
        	var options = { title : '전시 상품군 조회', titlebar: 'true', width: 600, height: 530 };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        };

        // 사업장/운영단위 팝업
        this.div_search_btn_bzplcPopup_onclick = function(obj,e)
        {
         	if(this.div_search.form.cmb_bzplcId.value == "BZPLC_ID") {   // 사업장
         		var params  = { coCd    : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
         					  , bzplcId : this.div_search.form.edt_bzplcId.value
         					  , bzplcNm : this.div_search.form.edt_bzplcNm.value
         					  };
         		var options = { };

         		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", params,  "fn_popupCallback", options);
         	} else if(this.div_search.form.cmb_bzplcId.value == "OPR_UNIT_ID") {  // 운영단위
         		var params  = { coCd      : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
         					  , oprUnitId : this.div_search.form.edt_bzplcId.value
         					  , oprUnitNm : this.div_search.form.edt_bzplcNm.value
         					  };
         		var options = {};

         		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", params,  "fn_popupCallback", options);
         	}
        };

        // 담당자 팝업
        this.div_search_btn_chrpsnPop_onclick = function(obj,e)
        {
         	var params  = { coCd    : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
         				  , empNo   : this.div_search.form.edt_chrpsnId.value
         				  , oprtrNm : this.div_search.form.edt_chrpsnNm.value
         				  };
         	var options = { };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        };

        // 요청자 팝업
        this.div_search_btn_reqrPopup_onclick = function(obj,e)
        {
         	var params  = { coCd  : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
         				  , mbrId : this.div_search.form.edt_reqrId.value
         				  , mbrNm : this.div_search.form.edt_reqrNm.value
         				  };
         	var options = { };

         	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_25.xfdl", params,  "fn_popupCallback", options);
        };

        // 담당팀 팝업
        this.div_search_btn_chrTeamPop_onclick = function(obj,e)
        {
        	var params  = { coCd  : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        					  , searchType : this.fv_oApp.gds_userInfo.getColumn(0, "ORG_CD").substr(0, 1)//"1" // 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6]
        					 // , teamCd : this.fv_oApp.gds_userInfo.getColumn(0, "ORG_CD")
        					 // , salsChrCd : this.fv_oApp.gds_userInfo.getColumn(0, "SALS_CHR_CD")
        					 // , salsTeamCd : this.fv_oApp.gds_userInfo.getColumn(0, "SALS_TEAM_CD")
        					 // , useYn : this.fv_oApp.gds_userInfo.getColumn(0, "USE_YN")
         				  };
         	var options = { };

        	this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_26.xfdl", params, "fn_popupCallback", options);
        };

        // 사업장/운영단위 콤보 선택
        this.cmb_bzplcId_onitemchanged = function(obj,e)
        {
        	this.div_search.form.edt_bzplcId.set_value("");
        	this.div_search.form.edt_bzplcNm.set_value("");
        };

        //멀티입력처리 콜백
        this.fn_callBackForSearch = function() {
        	this.fn_search(1);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.div_search.form.btn_bzplcPopup.addEventHandler("onclick",this.div_search_btn_bzplcPopup_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.cmb_dateUnit_onitemchanged,this);
            this.div_search.form.cmb_prdId.addEventHandler("onitemchanged",this.div_search_cmb_prdId_onitemchanged,this);
            this.div_search.form.btn_prdId.addEventHandler("onclick",this.div_search_btn_prdId_onclick,this);
            this.div_search.form.btn_dispPrdGrpPopup.addEventHandler("onclick",this.div_search_btn_dispPrdGrpPopup_onclick,this);
            this.div_search.form.btn_reqrPopup.addEventHandler("onclick",this.div_search_btn_reqrPopup_onclick,this);
            this.div_search.form.btn_chrpsnPop.addEventHandler("onclick",this.div_search_btn_chrpsnPop_onclick,this);
            this.div_search.form.cmb_bzplcId.addEventHandler("onitemchanged",this.cmb_bzplcId_onitemchanged,this);
            this.div_search.form.btn_chrTeamPop.addEventHandler("onclick",this.div_search_btn_chrTeamPop_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_receipt.addEventHandler("onclick",this.btn_receipt_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
