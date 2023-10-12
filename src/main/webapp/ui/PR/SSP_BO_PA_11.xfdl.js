(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_11");
            this.set_titletext("SSP상품추가 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reprPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_stats_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertData", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","0","0",null,"190","0",null,null,null,null,null,this);
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
            obj.set_text("상품,그룹,요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04","762","20","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("S-MRO분류");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66","762","51","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("대표상품구분");
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

            obj = new Button("btn_search",null,"154","60","28","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"154","60","28","84",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static66_00","762","82","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClcd","160","55","150","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClsfNm","314","55","288","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_categoryPopup","606","55","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","160","86","150","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("div_form_cmb_dateType_innerdataset", obj);
            div_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대표상품그룹등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SSP등록일</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_startDtm","314","86","136","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static59","453","86","9","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_endDtm","466","86","136","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_dateUnit","cal_endDtm:4","86","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_prdIdType","160","24","150","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_prdIdType_innerdataset = new nexacro.NormalDataset("div_form_cmb_prdIdType_innerdataset", obj);
            div_form_cmb_prdIdType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">대표상품그룹ID</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">요청번호</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_prdIdType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","314","24","288","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","606","24","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_reprPrdSprCd","901","55","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_reprPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySprCd","901","24","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_procStatsCd","901","86","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_cmb_procStatsCd_innerdataset = new nexacro.NormalDataset("div_form_cmb_procStatsCd_innerdataset", obj);
            div_form_cmb_procStatsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">REQ</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">ACCEPT</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">COMP</Col><Col id=\"datacolumn\">완료</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cmb_procStatsCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","113",null,"32","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","20","113","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_text("S-MRO대분류");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mainMroPrdClsfNm","160","117","442","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_mainMroPrdClsfNm","606","117","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"210","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"210","110","28","336",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","248",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("조회 조건 입력 후 조회 버튼을 눌러주세요.");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" accessibilitydesclevel=\"self\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"대표상품그룹ID\"/><Cell col=\"3\" text=\"대표상품ID\"/><Cell col=\"4\" text=\"공용전용구분\"/><Cell col=\"5\" text=\"대표상품구분\"/><Cell col=\"6\" text=\"처리상태\"/><Cell col=\"7\" text=\"S-MRO분류ID\"/><Cell col=\"8\" text=\"S-MRO분류명\"/><Cell col=\"9\" text=\"상품명\"/><Cell col=\"10\" text=\"대표규격\"/><Cell col=\"11\" text=\"대표상품그룹등록일\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"요청번호\"/><Cell col=\"14\" text=\"등록자\"/><Cell col=\"15\" text=\"SSP등록일시\"/></Band><Band id=\"body\"><Cell edittype=\"expr:PROC_STATS_CD == &apos;REQ&apos; ? &apos;checkbox&apos;: &apos;none&apos; \" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" cssclass=\"grd_WF_body_stress\" displaytype=\"text\" textAlign=\"center\" color=\"blue\" textDecoration=\"underline\" padding=\"0px 10px\"/><Cell col=\"2\" text=\"bind:REPR_PRD_GRP_ID_VIEW\" displaytype=\"text\" textAlign=\"center\" padding=\"0px 10px\"/><Cell col=\"3\" text=\"bind:REPR_PRD_ID_VIEW\" displaytype=\"text\" textAlign=\"center\" padding=\"0px 10px\"/><Cell col=\"4\" text=\"bind:PUB_ONLY_SPR_CD\" padding=\"0px 10px\"/><Cell col=\"5\" text=\"bind:REPR_PRD_SPR_CD\" padding=\"0px 10px\"/><Cell col=\"6\" text=\"bind:PROC_STATS_CD_NM\" padding=\"0px 10px\"/><Cell col=\"7\" text=\"bind:MRO_PRD_CLCD\" padding=\"0px 10px\"/><Cell col=\"8\" text=\"bind:MRO_PRD_CLSF_NM\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"9\" text=\"bind:PRD_NM\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"10\" text=\"bind:ATTR_VAL\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"11\" text=\"bind:REPR_REG_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"none\" padding=\"0px 10px\"/><Cell col=\"12\" text=\"bind:REPR_REGPSN_ID\" padding=\"0px 10px\"/><Cell col=\"13\" text=\"bind:NEW_PRD_REQ_NO\" padding=\"0px 10px\"/><Cell col=\"14\" text=\"bind:SSP_REGPSN_ID\" padding=\"0px 10px\"/><Cell col=\"15\" text=\"bind:SSP_REG_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"none\" padding=\"0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","223","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"210","100","28","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"210","81","28","450",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_accept",null,"210","81","28","535",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("접수");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"210","104","28","btn_layoutSave:4",null,null,null,null,null,this);
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
            obj = new BindItem("item0","div.form.cmb_prdIdType","value","ds_search","PRD_ID_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.cmb_pubOnlySprCd","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.form.edt_mroPrdClcd","value","ds_search","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_mroPrdClsfNm","value","ds_search","MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div.form.cmb_reprPrdSprCd","value","ds_search","REPR_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.cmb_dateType","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.cal_startDtm","value","ds_search","START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.cal_endDtm","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cmb_dateUnit","value","ds_search","DATE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.cmb_procStatsCd","value","ds_search","PROC_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.edt_mainMroPrdClsfNm","value","ds_search","MAIN_MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_11.xfdl","PR::prUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_11.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_PA_11.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("PR::prUtils.xjs"); /*include "PR::prUtils.xjs"*/;
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.mroPrdCount = 0;          //mro카테고리
        this.searchMroPrdClcd = '';    //mro카테고리
        this.searchMroPrdClsfNm = '';  //mro카테고리
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_init();
            this.fn_commonCodeSearch();	//공통코드조회

        	//ctrl+c v
        	this.copyPaste.addGrid(this.grd_list);
        	this.fn_odCommLoading();

        	// 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크) 무력화
        	this._gfnHeadCheckSelectAll = function(){};
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if(e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if(e.fromobject.id == "edt_mroPrdClcd") {
        				this.ds_search.setColumn(0, "MRO_PRD_CLCD", value);
        				this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        				this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-mroprd-popup-list.do");
        			} else if(e.fromobject.id == "edt_mroPrdClsfNm"){
        				this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", value);
        				this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        				this.fn_popupSearch(e.fromobject.id, "/pr/prd-popup/select-mroprd-popup-list.do");
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
        		this.btn_accept_onclick();
        		event.preventDefault();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/pr/prd-add/select-product-add-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=productAddList";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
            }

        	var mroPrdClcd = this.ds_search.getColumn(0, "MRO_PRD_CLCD");
        	var mroPrdClsfNm = this.ds_search.getColumn(0, "MRO_PRD_CLSF_NM");
        	var mainMroPrdClsfNm = this.ds_search.getColumn(0, "MAIN_MRO_PRD_CLSF_NM");

        	if(!this.gfn_isNull(mroPrdClcd)){
        		var prdClcd = nexacro.replaceAll(mroPrdClcd, ",", "|");
        		this.ds_search.setColumn(0, "MRO_PRD_CLCD", prdClcd);
        	}

        	if(!this.gfn_isNull(mroPrdClsfNm)){
        		var prdClsfNm = nexacro.replaceAll(mroPrdClsfNm, ",", "|");
        		this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", prdClsfNm);
        	}

        	if(!this.gfn_isNull(mainMroPrdClsfNm)){
        		var mainPrdClsfNm = nexacro.replaceAll(mainMroPrdClsfNm, ",", "|");
        		this.ds_search.setColumn(0, "MAIN_MRO_PRD_CLSF_NM", mainPrdClsfNm);
        	}

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_dateUnit=ds_output1 ds_pubOnlySprCd=ds_output2 ds_reprPrdSprCd=ds_output3";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,PUB_ONLY_SPR_CD,REPR_PRD_SPR_CD");
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

        //접수
        this.fn_accept = function (bInit){

            var sSvcId = "accept";
            var sUrl = "/pr/prd-add/insert-product-reg-proc-accept.do";
            var inDs = "ds_insertData=ds_insertData";
            var outDs = "";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) this.ds_search.setColumn(0, "PROC_STATS_CD", oArgs.STATUS);
        		if (oArgs.DTM) {
        			if(oArgs.DTM == 1) this.div.form.cmb_dateUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div.form.cmb_dateUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div.form.cal_startDtm
        			   ,this.div.form.cal_endDtm
        			   ,this.div.form.cmb_dateUnit);
        		}
        		this.div.form.btn_search.click();
        	}
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cmb_viewCount.value,"fn_pageCallback");
        			this.grd_list.setCellProperty("head", 0, "text", "0");  // 그리드 헤더 체크박스 초기화

        			//if(this.ds_select.getRowCount() > 0){
        			//	this.fn_deleteSelectedData('fn_callBackDeleteSelectedData');
        			//}

        			var mroPrdClcd = this.ds_search.getColumn(0, "MRO_PRD_CLCD");
        			var mroPrdClsfNm = this.ds_search.getColumn(0, "MRO_PRD_CLSF_NM");
        			var mainMroPrdClsfNm = this.ds_search.getColumn(0, "MAIN_MRO_PRD_CLSF_NM");

        			if(!this.gfn_isNull(mroPrdClcd)){
        				var prdClcd = nexacro.replaceAll(mroPrdClcd, "|", ",");
        				this.ds_search.setColumn(0, "MRO_PRD_CLCD", prdClcd);
        			}

        			if(!this.gfn_isNull(mroPrdClsfNm)){
        				var prdClsfNm = nexacro.replaceAll(mroPrdClsfNm, "|", ",");
        				this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", prdClsfNm);
        			}

        			if(!this.gfn_isNull(mainMroPrdClsfNm)){
        				var mainPrdClsfNm = nexacro.replaceAll(mainMroPrdClsfNm, "|", ",");
        				this.ds_search.setColumn(0, "MAIN_MRO_PRD_CLSF_NM", mainPrdClsfNm);
        			}

        			if(this.ds_list.rowcount < 1){
        				this.grd_list.set_nodatatext("검색 결과가 없습니다.");
        			}

                    break;

                case "commonCodeSearch" :
        			this.ds_dateUnit.insertRow(0);
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD", "");
        			this.ds_dateUnit.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_dateUnit.set_index(0);

        			this.ds_pubOnlySprCd.insertRow(0);
        			this.ds_pubOnlySprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_pubOnlySprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_pubOnlySprCd.set_value('');

        			this.ds_reprPrdSprCd.insertRow(0);
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_reprPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.div.form.cmb_reprPrdSprCd.set_value('');

        			this.fn_setSearchDate();	//날짜초기화

        			this.fn_todoSearch();
                    break;

        		case "edt_mroPrdClcd" :
        			if(this.mroPrdCount>0){
        				var cl = this.searchMroPrdClsfNm;
        				var newCl = cl.substring(cl.lastIndexOf('>', cl.length)+1, cl.length);
                        this.div.form.edt_mroPrdClsfNm.set_value(newCl);
                    }else{
                        var params = {
        					'mroPrdClcd':this.div.form.edt_mroPrdClcd.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_categoryMultiPopup', "PR_POP::SSP_BO_PA_46_01.xfdl", params,  "fn_popupCallback", {});
                    }

                    break;

        		case "edt_mroPrdClsfNm" :
        			if(this.mroPrdCount==1){
        				this.div.form.edt_mroPrdClcd.set_value(this.searchMroPrdClcd);
        				var newCl = cl.substring(cl.lastIndexOf('>', cl.length)+1, cl.length);
                        this.div.form.edt_mroPrdClsfNm.set_value(newCl);
                    }else{
                        var params = {
        					'mroPrdClsfNm':this.div.form.edt_mroPrdClsfNm.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_categoryMultiPopup', "PR_POP::SSP_BO_PA_46_01.xfdl", params,  "fn_popupCallback", {});
                    }

                    break;

        		case "accept" :
        			//trace('접수처리가 완료 되었습니다.');
        			//this.fn_search();

        			break;

        		case "productAddDetail" :
                    //if(args){
                    //    this.fn_search();
                    //}

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
        		case "btn_categoryPopup" : //S-MRO 카테고리 단일 조회
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_mroPrdClcd.set_value(jsonData.MRO_PRD_CLCD);
        			}

                    break;

        		case "btn_categoryMultiPopup" : //S-MRO 카테고리 멀티 조회
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);

        				var mroPrdClcd = "";
        				var mroPrdClsfNm = "";
        				var tempMroPrdClsfNm = "";
        				if(jsonData.length > 0){
        					for(var i = 0; i<jsonData.length; i++){
        						var rtnData = JSON.parse(jsonData[i]);
        						mroPrdClcd += rtnData.MRO_PRD_CLCD + ",";
        						mroPrdClsfNm += rtnData.MRO_PRD_CLSF_NM + ",";
        						tempMroPrdClsfNm += rtnData.TEMP_MRO_PRD_CLSF_NM + ",";
        					}

        					this.div.form.edt_mroPrdClcd.set_value(mroPrdClcd.substring(0, mroPrdClcd.length-1));
        					//this.div.form.edt_mroPrdClsfNm.set_value(mroPrdClsfNm.substring(0, mroPrdClsfNm.length-1));        //S-MRO 카테고리명
        					this.div.form.edt_mroPrdClsfNm.set_value(tempMroPrdClsfNm.substring(0, tempMroPrdClsfNm.length-1));  //S-MRO 상품군명

        				}
        			}

                    break;

        		case "btn_prdIdMultiInput" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_prdId.set_value(jsonData.textValue.replace(/,\s*$/, ""));
        			}

                    break;

        		case "btn_mainMroPrdClsfNm" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.div.form.edt_mainMroPrdClsfNm.set_value(jsonData.textValue.replace(/,\s*$/, ""));
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
        	this.grd_list.uDefaultFormat="CHK|PRD_ID_VIEW|REPR_PRD_GRP_ID_VIEW|REPR_PRD_ID_VIEW|PUB_ONLY_SPR_CD|REPR_PRD_SPR_CD|MRO_PRD_CLCD|MRO_PRD_CLSF_NM|PRD_NM|ATTR_VAL|REPR_REG_DTM|REPR_REGPSN_ID|NEW_PRD_REQ_NO|PROC_STATS_CD_NM|SSP_REGPSN_ID|SSP_REG_DTM";

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
        		if(stype == '[object Combo]'){
        			this.div.form[object[i].id].set_index(0);
        			if(object[i].id == 'cmb_procStatsCd'){
        				this.div.form[object[i].id].set_index(1);
        			}
        		}
        	}

        	this.div.form.cal_startDtm.set_value("");
        	this.div.form.cal_endDtm.set_value("");
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
        	//날짜 전체선택시 속도 이슈날경우 상품ID필수로 체크
        	//if(!this.fn_dateUnitFilltn()){
        	//	return false;
        	//}

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div.form.edt_prdId.value)){
        		this.fn_setMSearch(this.name,"PRD_ID_MULTI",this.div.form.edt_prdId.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ID_MULTI", null);
        	}

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

        	if(this.ds_select.getRowCount() > 0){
        		//멀티입력은 시간차때문에 콜백에서 조회처리
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}else{
        		this.fn_search(true);
        	}
        };

        //상품ID 조회
        this.div_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:this.div.form.edt_prdId};
            var options = {title:this.div.form.cmb_prdIdType.text};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        //S-MRO 대분류 조회
        this.div_btn_mainMroPrdClsfNm_onclick = function(obj,e)
        {
        	var params = {textId:this.div.form.edt_mainMroPrdClsfNm};
            var options = {title:this.div.form.edt_mainMroPrdClsfNm.text};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };


        //카테고리팝업
        this.div_btn_categoryPopup_onclick = function(obj,e)
        {
        	var params = {
        		coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        		mroPrdClcd:this.ds_search.getColumn(0, "MRO_PRD_CLCD"),
        		mroPrdClsfNm:this.ds_search.getColumn(0, "MRO_PRD_CLSF_NM")
        	};
            var options = {};
            //this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_46.xfdl", params,  "fn_popupCallback", options);             //S-MRO 카테고리 단일 조회
        	this.gfn_openPopup("btn_categoryMultiPopup", "PR_POP::SSP_BO_PA_46_01.xfdl", params,  "fn_popupCallback", options);   //S-MRO 카테고리 멀티 조회
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.fn_init();
        	if(this.ds_select.getRowCount() > 0){
        		this.fn_deleteSelectedData('fn_callBackDeleteSelectedData');
        	}
        };

        //체크박스 전체 선택
        this.grd_list_onheadclick = function(obj,e)
        {
            if(e.cell == obj.getBindCellIndex("Body", "CHK")) {
        		var cnt = this.ds_list.getCaseCount("PROC_STATS_CD == 'REQ'");
        		if(cnt < 1){
        			this.alert("요청건이 없습니다.");
        			return false;
        		} else{
        			var val = obj.getCellProperty("head", e.cell, "text") == "0" ? "1" : "0";
        			obj.setCellProperty("head", e.cell, "text", val);

        			for(var i = 0; i < this.ds_list.rowcount; i++) {
        				if(obj.getCellPropertyValue(i, e.cell, "edittype") != "none") {
        					this.ds_list.setColumn(i, "CHK", val);
        				}
        			}
        		}
        	}
        };

        //상세화면팝업
        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
            if(bindText == "bind:PRD_ID_VIEW"){
                var params = {
        			coCd:this.ds_list.getColumn(e.row, "CO_CD"),
                    prdId:this.ds_list.getColumn(e.row, "PRD_ID")
                };
                var options = {};
                this.gfn_openPopup('productAddDetail', "PR::SSP_BO_PA_13.xfdl", params,  "fn_popupCallback", options);
            }
        	if(bindText == "bind:CHK"){
                var proc = this.ds_list.getColumn(e.row, "PROC_STATS_CD");
        		if(proc != "REQ"){
        			this.alert("요청건만 선택하세요.");
        			return false;
        		}
            }
        };

        //접수처리
        this.btn_accept_onclick = function(obj,e)
        {
        	var checkedRow = new Array();
        	for(var i=0; i<this.ds_list.rowcount; i++) {
                if(this.ds_list.getColumn(i, "CHK") == "1"){
        			checkedRow.push(i);
                }
        		if(this.ds_list.getColumn(i, "PROC_STATS_CD") != 'REQ'){
        			alert('요청건만 선택하세요.');
        			return false;
        		}
            }

        	if(checkedRow.length <= 0){
        		alert('선택된 데이터가 없습니다.');
        		return false;
        	}

        	this.ds_insertData.clearData();
        	for(var i=0; i<checkedRow.length; i++){
        		var CO_CD = this.ds_list.getColumn(checkedRow[i], "CO_CD");
        		var PRD_ID = this.ds_list.getColumn(checkedRow[i], "PRD_ID");
        		this.ds_insertData.insertRow(0);
        		this.ds_insertData.setColumn(0, "CO_CD", CO_CD);
        		this.ds_insertData.setColumn(0, "PRD_ID", PRD_ID);
        		this.ds_insertData.setColumn(0, "REG_PROC_PRD_STATS_CD", "10");	//접수상태
        		this.ds_insertData.setColumn(0, "REGPSN_ID", this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_ID"));
        	}

        	if(this.confirm('접수처리 하시겠습니까?')){
        		this.fn_accept();
        		this.btn_search_onclick(true);
        	}
        };

        this.SSP_BO_PA_11_onbeforeclose = function(obj,e)
        {
        	trace('SSP_BO_PA_11_onbeforeclose');
        };

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

        	this.ofn_exportExcel({ form : this, grid : this.grd_list, fileName : "상품추가 조회 목록" });
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

        this.btn_create_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_JF_PR_05"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onbeforeclose",this.SSP_BO_PA_11_onbeforeclose,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.div.form.btn_categoryPopup.addEventHandler("onclick",this.div_btn_categoryPopup_onclick,this);
            this.div.form.cmb_dateUnit.addEventHandler("onitemchanged",this.cmb_dateUnit_onitemchanged,this);
            this.div.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_prdId.addEventHandler("onchanged",this.div_edt_prdId_onchanged,this);
            this.div.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_btn_prdIdMultiInput_onclick,this);
            this.div.form.btn_mainMroPrdClsfNm.addEventHandler("onclick",this.div_btn_mainMroPrdClsfNm_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_accept.addEventHandler("onclick",this.btn_accept_onclick,this);
            this.cmb_viewCount.addEventHandler("onitemchanged",this.cmb_viewCount_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
