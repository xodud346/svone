(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_20");
            this.set_titletext("담당자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNREG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelMetaSeq\" type=\"STRING\" size=\"256\"/><Column id=\"saveFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtrOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClsfChrpsnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_psnType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">담당자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">등록자</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">수정자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNREG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outputlarge", this);
            obj._setContents("<ColumnInfo><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","762","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("담당자 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","762","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("담당팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_categoryPopup","725","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"124","60","28","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66_00","762","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("정/부 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_psnType","160","55","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_psnType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_psnId","294","55","116","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_psnNm","414","55","184","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_psnPopup","602","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","160","24","250","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","160","86","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_dateType_innerdataset", obj);
            Div00_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_dateType_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDtm","294","86","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","438","86","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDtm","451","86","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dateUnit","595","86","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_dateUnit");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_orgCd","901","55","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_oprtrOrg");
            obj.set_codecolumn("ORG_CD");
            obj.set_datacolumn("ORG_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_prdClsfChrpsnSprCd","901","86","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_prdClsfChrpsnSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_prdClsfChrpsnUseYn","901","24","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb_prdClsfChrpsnUseYn_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_prdClsfChrpsnUseYn_innerdataset", obj);
            Div00_form_cmb_prdClsfChrpsnUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">삭제</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_prdClsfChrpsnUseYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","414","24","307","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"184","100","28","342",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일괄등록/수정");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"184","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","222",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"194\"/><Column size=\"279\"/><Column size=\"91\"/><Column size=\"83\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"114\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"카테고리ID\"/><Cell col=\"1\" text=\"카테고리명\"/><Cell col=\"2\" text=\"담당팀\"/><Cell col=\"3\" text=\"담당자사번\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"상태\"/><Cell col=\"7\" text=\"등록일시\"/><Cell col=\"8\" text=\"등록자\"/><Cell col=\"9\" text=\"최종수정일시\"/><Cell col=\"10\" text=\"최종수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_CLCD\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"left\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:PRD_CLSF_NM\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ORG_NM\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:EMP_NO\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:PRD_CLSF_CHRPSN_SPR_CD\" expr=\"PRD_CLSF_CHRPSN_SPR_CD==&apos;10&apos;?&quot;정&quot;:PRD_CLSF_CHRPSN_SPR_CD==&apos;20&apos;?&quot;부&quot;:&quot;&quot;\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:PRD_CLSF_CHRPSN_USEYN\" expr=\"PRD_CLSF_CHRPSN_USEYN==&quot;Y&quot;?&quot;사용&quot;:PRD_CLSF_CHRPSN_USEYN==&quot;N&quot;?&quot;삭제&quot;:&quot;&quot;\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:REGPSN_ID\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:UPDPSN_ID\" autosizerow=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","197","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"184","81","28","446",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"184","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"184","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largedown",null,"184","118","28","532",null,null,null,null,null,this);
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
            obj = new BindItem("item0","Div00.form.edt_prdClcd","value","ds_search2","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cmb_psnType","value","ds_search2","PSN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_psnId","value","ds_search2","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_psnNm","value","ds_search2","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cmb_orgCd","value","ds_search2","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_dateType","value","ds_search2","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cal_startDtm","value","ds_search2","DTM_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cal_endDtm","value","ds_search2","DTM_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.cmb_dateUnit","value","ds_search2","DATE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.cmb_prdClsfChrpsnSprCd","value","ds_search2","PRD_CLSF_CHRPSN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cmb_prdClsfChrpsnUseYn","value","ds_search2","PRD_CLSF_CHRPSN_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_prdClsfNm","value","ds_search2","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_20.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_20.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.totalCount = 0;

        this.unReg10 = false;
        this.unReg20 = false;

        this.searchEmpNo = "";
        this.searchOprtrNm = "";
        this.searchPrdClcd = "";
        this.searchPrdClsfNm = "";
        this.searchCategoryCount = 0;
        this.oprtrCount = 0;

        this.chrpsnTpCd = '';
        this.pageType = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
            this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_USEYN", 'Y');  //상태
           // this.fn_search(true);
            this.fn_commonCodeSearch();
            this.fn_init();

            //추후 파라미터로 메뉴구분 this.getOwnerFrame().arguments["oArgs"]
            //var menuId = this.getOwnerFrame().arguments["menuId"]; //1005010000 상품, 1005020000 MD

        	//메뉴관리에서 비고내용필드(RMKS_CTS)에 해당값이 반드시 들어가 있어야함.
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];	//10:상품담당자, 20:MD담당자 PRD_CLSF_CHRPSN_TP_CD

        	if(this.gfn_isNull(oArgs) || typeof oArgs == 'undefined' || oArgs == ''){
        		alert('담당자구분값을 확인하세요.');
        		return false;
        	}

            if(oArgs == '10'){
                this.chrpsnTpCd = '10';
                this.pageType = '상품';
            }else if(oArgs == '20'){
                this.chrpsnTpCd = '20';
                this.pageType = 'MD';
            }

            this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);
            this.ds_search2.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);
            this.ds_psnType.setColumn(0, "name", this.pageType+"담당자");
        	this.fn_oprtrOrgList();//담당팀조회
        };

        this.fn_onkeyup = function(obj,e){
            var objType = obj.getFocus();

            if( e.keycode == 13 && objType == "[object Edit]"){
                var value = e.fromobject.value;
                if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
                    if( e.fromobject.id == "edt_prdClcd") {
        				this.searchPrdClcd = "";
        				this.searchPrdClsfNm = "";
                        this.ds_search.setColumn(0, "PRD_CLCD", value);
                        this.ds_search.setColumn(0, "LWST_CD_YN", 'Y');
        				this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
                        this.fn_popupSearch("edt_prdClcd", "/pr/prd-popup/select-category-popup-list.do");
                    }

                    if( e.fromobject.id == "edt_psnId") {   //담당자
                        this.ds_search.setColumn(0, "EMP_NO", value);
                        this.fn_popupSearch("edt_psnId", "/co/popup/select-operator-popup-list.do");
                    }

        			if( e.fromobject.id == "edt_prdClsfNm") {
        				this.searchPrdClcd = "";
        				this.searchPrdClsfNm = "";
                        this.ds_search.setColumn(0, "PRD_CLSF_NM", value);
                        this.ds_search.setColumn(0, "LWST_CD_YN", 'Y');
        				this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
                        this.fn_popupSearch("edt_prdClsfNm", "/pr/prd-popup/select-category-popup-list.do");
                    }

                    if( e.fromobject.id == "edt_psnNm") {   //담당자
                        this.ds_search.setColumn(0, "MEM_NM", value);
                        this.fn_popupSearch("edt_psnNm", "/co/popup/select-operator-popup-list.do");
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
            var sUrl = "/pr/prs-mng/select-person-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=personList";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_dateUnit=ds_output1 ds_prdClsfChrpsnSprCd=ds_output2";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,PRD_CLSF_CHRPSN_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //제조원ID 검색
        this.fn_mnfrSearch = function (bInit)
        {
            var sSvcId = "mnfrSearch";
            var sUrl = "/pr/prd-popup/select-manufacturer-popup-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_mnfr=manufacturerList";
            var arg = "";
            this.ds_search.setColumn(0, "MNFR_NO", this.Div00.form.edit_MNFR_NO.value); //제조원ID

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //팀목록 조회
        this.fn_oprtrOrgList = function (bInit)
        {
            var sSvcId = "selectCoMbrOprtrOrgInfoList";
            var sUrl = "/pr/prs-mng/select-person-oprtr-org-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_oprtrOrg=orgList";
            var arg = "";

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

        //대용량 엑셀 다운로드
        this.fn_excelLargeDownload = function(){

            var sSvcId = "largedown";
            var sUrl = "/pr/prs-mng/call-large-excel-download.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_outputlarge=ds_outputlarge";
            var arg = "";


            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
                    break;

                case "commonCodeSearch" :
                    this.ds_dateUnit.insertRow(0);
                    this.ds_dateUnit.setColumn(0, "COM_DTL_CD", "");
                    this.ds_dateUnit.setColumn(0, "COM_DTL_CD_NM", "전체");
                    this.Div00.form.cmb_dateUnit.set_index(0);

                    this.ds_prdClsfChrpsnSprCd.insertRow(0);
                    this.ds_prdClsfChrpsnSprCd.setColumn(0, "COM_DTL_CD", "");
                    this.ds_prdClsfChrpsnSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
                    this.Div00.form.cmb_prdClsfChrpsnSprCd.set_index(0);

        			this.fn_setSearchDate();

                    break;

                case "selectCoMbrOprtrOrgInfoList" :
                    this.ds_oprtrOrg.insertRow(0);
                    this.ds_oprtrOrg.setColumn(0, "ORG_CD", "");
                    this.ds_oprtrOrg.setColumn(0, "ORG_NM", "전체");
                    this.Div00.form.cmb_orgCd.set_index(0);

                    break;

                case "edt_prdClcd" :
                    if(this.searchCategoryCount>0){
                        this.Div00.form.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
                    }else{
        				this.Div00.form.edt_prdClsfNm.set_value("");
                        var params = {
        					'prdClcd':this.Div00.form.edt_prdClcd.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        					mallSprCd:'10'
        				};
                        this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", {});
                    }
                    break;

                case "edt_psnId" :
                    if(this.oprtrCount>0){
                        this.Div00.form.edt_psnNm.set_value(this.searchOprtrNm);
                    }else{
                        var params = {
        					'empNo':this.Div00.form.edt_psnId.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_psnPopup', "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", {});
                    }
                    break;

        		case "edt_prdClsfNm" :
                    if(this.searchCategoryCount==1){
                        this.Div00.form.edt_prdClcd.set_value(this.searchPrdClcd);
        				this.Div00.form.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
                    }else{
        				this.Div00.form.edt_prdClcd.set_value("");
                        var params = {
        					'prdClsfNm':this.Div00.form.edt_prdClsfNm.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"),
        					mallSprCd:'10'
        				};
                        this.gfn_openPopup('btn_categoryPopup', "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", {});
                    }
                    break;

                case "edt_psnNm" :
                    /*if(this.oprtrCount==1){
                        this.Div00.form.edt_psnId.set_value(this.searchEmpNo);
        				this.Div00.form.edt_psnNm.set_value(this.searchOprtrNm);
                    }else{
                        var params = {
        					'memNm':this.Div00.form.edt_psnNm.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_psnPopup', "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", {});
                    }*/
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
                case "btn_categoryPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        				this.Div00.form.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        			}

                    break;

                case "btn_psnPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_psnId.set_value(jsonData.EMP_NO);
        				this.Div00.form.edt_psnNm.set_value(jsonData.OPRTR_NM);
        			}

                    break;

                case "btn_create" :
                    if(args){
                        this.fn_search(false);
                    }

                    break;

                case "prdOprtrDetail" :
                    if(args){
                        this.fn_search(false);
                    }

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
                this.fn_search();
            }
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
        	this.grd_list.uDefaultFormat="PRD_CLCD|PRD_CLSF_NM|ORG_NM|EMP_NO|OPRTR_NM|PRD_CLSF_CHRPSN_SPR_CD|PRD_CLSF_CHRPSN_USEYN|REG_DTM|REGPSN_ID|UPD_DTM|UPDPSN_ID";
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
                this.Div00.form.cal_startDtm.set_value("");
        		this.Div00.form.cal_endDtm.set_value("");
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

        		this.Div00.form.cal_startDtm.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.Div00.form.cal_endDtm.set_value(sToday);
        	}
        };

        this.fn_getUnreg = function(){
            if(this.unReg10){
                return '10';
            }else{
                if(this.unReg20){
                    return '20';
                }else{
                    return '';
                }
            }
        }

        //초기화
        this.fn_init = function() {
            this.unReg10 = false;
            this.unReg20 = false;
            this.ds_search.clearData();
            this.ds_search.insertRow();
            this.ds_search.setColumn(0,"START_NUM",0);
            this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);
            this.Div00.form.edt_prdClcd.set_value('');
            this.Div00.form.edt_prdClsfNm.set_value('');
        	this.Div00.form.edt_psnId.set_value('');
            this.Div00.form.edt_psnNm.set_value('');

            var object = this.Div00.form.all;
            for( var i = 0; i < object.length; i++ ){
                var stype = object[i].valueOf();
                if(stype == '[object Combo]'){
                    this.Div00.form[object[i].id].set_index(0);
                }
            }
            this.Div00.form.cal_startDtm.set_value('');
            this.Div00.form.cal_endDtm.set_value('');
            this.Div00.form.cmb_prdClsfChrpsnUseYn.set_value('Y');
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //달력콤보선택
        this.cmb_dateUnit_onitemchanged = function(obj,e)
        {
            this.fn_setSearchDate();
        };

        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_search2, true);
            this.fn_search(true);
        };

        //카테고리조회팝업
        this.Div00_btn_categoryPopup_onclick = function(obj,e)
        {
            var params = {mallSprCd:'10',coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};	//ssp
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };

        //초기화버튼
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_search2, true);
            this.fn_init();
        };

        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount>0){
        		this.gfn_excelExport(this.grd_list, this.pageType+"담당자 목록", this.pageType+"담당자 목록", null, ["CHK"]);
        	}else{
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');
        	}
        };

        this.Div00_Button33_00_onclick = function(obj,e)
        {
            alert('작업예정');
        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var param = {};
        	if(this.chrpsnTpCd == '10'){
        		param = {pgmId : "SSP_JF_PR_07"};
        	}else if(this.chrpsnTpCd == '20'){
        		param = {pgmId : "SSP_JF_PR_08"};
        	}
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        //담당자 조회 팝업
        this.Div00_btn_psnPopup_onclick = function(obj,e)
        {
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        };

        //등록 버튼
        this.btn_create_onclick = function(obj,e)
        {
            var params = {'chrpsnTpCd':this.chrpsnTpCd};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_23.xfdl", params,  "fn_popupCallback", options);
        };

        //미등록 선택
        this.Div00_chk_unReg10_onclick = function(obj,e)
        {
            if(obj.value==1){
                this.unReg10 = true;
            }else{
                this.unReg10 = false;
            }
        };

        //미등록 선택
        this.Div00_chk_unReg20_onclick = function(obj,e)
        {
            if(obj.value==1){
                this.unReg20 = true;
            }else{
                this.unReg20 = false;
            }
        };

        //담당팀선택
        this.Div00_cmb_orgCd_onitemchanged = function(obj,e)
        {
            //this.ds_search.setColumn(0, "ORG_CD", obj.value);
        };

        //상세화면팝업
        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
            if(bindText == "bind:PRD_CLCD"){
                if(this.gfn_isNull(this.ds_list.getColumn(e.row, "PRD_CLSF_CHRPSN_ID"))){
                    return false;
                }

                var params = {
                    CO_CD:this.ds_list.getColumn(e.row, "CO_CD"),
                    PRD_CLCD:this.ds_list.getColumn(e.row, "PRD_CLCD"),
                    PRD_CLSF_CHRPSN_ID:this.ds_list.getColumn(e.row, "PRD_CLSF_CHRPSN_ID"),
                    PRD_CLSF_CHRPSN_SEQ:this.ds_list.getColumn(e.row, "PRD_CLSF_CHRPSN_SEQ"),
                    chrpsnTpCd:this.chrpsnTpCd
                };
                var options = {};
                this.gfn_openPopup('prdOprtrDetail', "PR_POP::SSP_BO_PA_24.xfdl", params,  "fn_popupCallback", options);
            }
        };

        this.btn_save_onclick = function(obj,e)
        {
            alert('작업예정');
        };

        this.Div00_edt_fullPrdClsfNm_onkeyup = function(obj,e)
        {
            var val = obj.value;
            if(!this.gfn_isNull(val)){
                if(val.indexOf(">", 0) > -1){
                    var last = val.lastIndexOf(">", val.length);
                    var sNewVal = val.substring(last+1, val.length);
                    this.Div00.form.edt_prdClsfNm.set_value(sNewVal);
                }else{
                    this.Div00.form.edt_prdClsfNm.set_value(val);
                }
            }
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

        this.Div00_cmb_prdClsfChrpsnSprCd_onitemchanged = function(obj,e)
        {

        };

        this.btn_largedown_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRP000268"))){
        		this.ds_search.copyData(this.ds_search2, true);
        		this.fn_excelLargeDownload();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.Div00.form.btn_categoryPopup.addEventHandler("onclick",this.Div00_btn_categoryPopup_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.btn_psnPopup.addEventHandler("onclick",this.Div00_btn_psnPopup_onclick,this);
            this.Div00.form.cmb_dateUnit.addEventHandler("onitemchanged",this.cmb_dateUnit_onitemchanged,this);
            this.Div00.form.cmb_orgCd.addEventHandler("onitemchanged",this.Div00_cmb_orgCd_onitemchanged,this);
            this.Div00.form.cmb_prdClsfChrpsnSprCd.addEventHandler("onitemchanged",this.Div00_cmb_prdClsfChrpsnSprCd_onitemchanged,this);
            this.Div00.form.cmb_prdClsfChrpsnUseYn.addEventHandler("onitemchanged",this.Div00_cmb_prdClsfChrpsnUseYn_onitemchanged,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_largedown.addEventHandler("onclick",this.btn_largedown_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
