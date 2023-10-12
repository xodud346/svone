(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_24");
            this.set_titletext("전시 상품 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnfr", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_teamList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_teamInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_number", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","129","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","129","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","610","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00","129","81",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static06_00:4","60","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static06_00:4","60","24","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","610","81","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","Static05_01_01_00:4","85","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","edt_regpsnId:4","85","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_regpsnPop","edt_regpsnNm:4","85","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","81","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm00","Static01:4","24","361","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","edt_bgNm00:3","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDate","238","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","cal_fromDate:4","55","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_toDate","Static08:4","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","cal_toDate:4","55","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboGubun","Static05:4","55","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cboGubun_innerdataset = new nexacro.NormalDataset("div_search_form_cboGubun_innerdataset", obj);
            div_search_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cboGubun_innerdataset);
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","Static05_00:4","85","179","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","edt_mnfrNo:4","85","179","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPop","edt_mnfrNm:4","85","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_01_01","610","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("담당팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_teamId","Static05_01_01:4","55","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_teamNm","edt_teamId:4","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_teamPop","edt_teamNm:4","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productId","Static04:4","24","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productNm","edt_productId:4","24","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_productPop","edt_productNm:4","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","1013","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("전시상품타입");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","1013","51","130","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","Static05_01_00:4","55","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("12");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_pdtType","Static03:4","24","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_dispPrdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("27");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_bgList","20","208",null,null,"20","56",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bgList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"진열순서\"/><Cell col=\"2\" text=\"상품군ID\"/><Cell col=\"3\" text=\"상품군명\"/><Cell col=\"4\" text=\"전시상품명\"/><Cell col=\"5\" text=\"대표상품ID\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"대표규격\" autosizecol=\"default\"/><Cell col=\"8\" text=\"제조원\"/><Cell col=\"9\" text=\"원산지\"/><Cell col=\"10\" text=\"주문단위\"/><Cell col=\"11\" text=\"전시상품타입\"/><Cell col=\"12\" text=\"추가정보수취\"/><Cell col=\"13\" text=\"담당팀\"/><Cell col=\"14\" text=\"담당자\"/><Cell col=\"15\" text=\"등록일\"/><Cell col=\"16\" text=\"변경일\"/><Cell col=\"17\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/btn_WF_spin.png&quot;\" text=\"bind:CHG\"/><Cell col=\"1\" text=\"bind:BG_SEQ\" displaytype=\"number\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"normal\" cursor=\"pointer\" color=\"blue\" imagestretch=\"fixaspectratio\" text=\"bind:PRD_CLCD\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:PRD_CLSF_NM\" displaytype=\"normal\" color=\"#000000\"/><Cell col=\"4\" text=\"bind:DISP_PRD_NM\"/><Cell col=\"5\" text=\"bind:PRD_ID\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:PRD_NM\" displaytype=\"normal\" color=\"#000000\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:ATTR_VAL\"/><Cell col=\"8\" text=\"bind:MNFR_NM\"/><Cell col=\"9\" text=\"bind:ORGPLC_CTRY_CD\"/><Cell col=\"10\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"11\" text=\"bind:DISP_PRD_SPR_CD\"/><Cell col=\"12\" text=\"bind:ADD_INFO_SET_YN\"/><Cell col=\"13\" text=\"bind:ORG_NM\"/><Cell col=\"14\" text=\"bind:OPRTR_NM\"/><Cell col=\"15\" text=\"bind:REG_DTM\"/><Cell col=\"16\" text=\"bind:UPD_DTM\" displaytype=\"normal\"/><Cell col=\"17\" text=\"bind:USE_YN\" expr=\"USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","7","grd_bgList:10",null,"38","23",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"170","110","28","135",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist00",null,"170","110",null,"363","grd_bgList:10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("진열순서 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"170","110","28","btn_regist00:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","150","300",null,null,"grd_bgList:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건, 1 / 1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutReset",null,"170","110","28","21",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"170","110",null,"btn_layoutSave:4","grd_bgList:10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_regpsnId","value","ds_search","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_regpsnNm","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_fromDate","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_toDate","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_mnfrNo","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cbo_pdtType","value","ds_search","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_teamNm","value","ds_search","TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_teamId","value","ds_search","TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_productNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_productId","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cmb_inqPerdSprCd","value","ds_search","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bgNm00","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_24.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_24.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_NA_24.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배지 목록
        CREATION DATES : 2022.02.22
        CREATER        : 이민호
        *******************************************************/

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        //공통형 스크립트 인클루드
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        this.totalCount = 0;
        this.preSelectRowPosition = 0;

        //담당자 자동조회 위한 변후
        this.oprtrInfoCount = 0;
        this.selectRegpsnId = "";
        this.selectRegpsnNm = "";

        //담당팀 자동조회 위한 변후
        this.TeamInfoCount = 0;
        this.selectTeamCd = "";
        this.selectTeamNm = "";

        //제조원 자동조회 위한 변후
        this.searchMnfrCount = 0;
        this.searchMnfrNo = "";
        this.searchMnfrNm = "";

        //상품군 자동조회 위한 변후
        this.searchCategoryCount = 0;
        this.searchPrdClcd = "";
        this.searchPrdClsfNm = "";
        this.searchFullPrdClsfNm = "";

        this.fv_oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//조회기간 셋(초기화 여부)
        	this.fn_setSearchDate("Y");

        	this.ds_search.setColumn(0, "SEL_MTHD_CD", 40);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)
        {
        	var sSvcId = "selectBgList";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_bgList=ds_output";
        	var arg = "";

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);

        		oSortInfo = this.grd_bgList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        	}

        	var prd = this.div_search.form.edt_bgNm00.value;
        	var gubun = this.div_search.form.cboGubun.value;

        	if(!this.gfn_isNull(prd)){
        		var prdId = nexacro.replaceAll(prd, ",", "|");

        		var prdId2 = nexacro.trimRight(prdId, "|");

        		this.ds_search.setColumn(0, "PRD_ID", prdId2);
        	}

        	this.ds_search.setColumn(0, "CO_CD", "1000");
        	this.ds_search.setColumn(0, "CAL_GUBUN", gubun);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1 ds_useYn=ds_output2 ds_dispPrdSprCd=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,USE_YN,DISP_PRD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //담당자 입력창에 입력 후 엔터 칠 경우.
        this.fn_oprtrInfoSearch = function() {
        	var sSvcId = "selectMbrOprtrInfoList";
        	var sUrl = "/co/popup/select-mbr-oprtr-info-list.do";
        	var inDs = "ds_search=ds_optrInfo";
        	var outDs = "ds_optrInfo=ds_search";
        	var arg = "";

        	this.ds_optrInfo.setColumn(0, "LANG_CD", "KO");
        	this.ds_optrInfo.setColumn(0, "CO_CD", "1000");
        	this.ds_optrInfo.setColumn(0, "EMP_NO", this.ds_search.getColumn(0, "REGPSN_ID"));
        	this.ds_optrInfo.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "REGPSN_NM"));

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }

        //담당팀 입력창에 입력 후 엔터 칠 경우.
        this.fn_teamInfoSearch = function() {
        	var sSvcId = "selectMbrOprtrOrgInfoList";
        	var sUrl = "/bo/cust/cmn/popup/select-mbr-oprtr-org-info-list.do";
        	var inDs = "ds_search=ds_teamInfo";
        	var outDs = "";
        	var arg = "";

        	this.ds_teamInfo.setColumn(0, "LANG_CD", "KO");
        	this.ds_teamInfo.setColumn(0, "TEAM_CD", this.ds_search.getColumn(0, "TEAM_CD"));
        	this.ds_teamInfo.setColumn(0, "TEAM_NM", this.ds_search.getColumn(0, "TEAM_NM"));
        	this.ds_search.setColumn(0, "CO_CD", "1000");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }

        //제조원 입력창에 입력 후 엔터 칠 경우.
        this.fn_mnfrInfoSearch = function() {
        	var sSvcId = "selectMnfrInfoList";
        	var sUrl = "/pr/prd-popup/select-manufacturer-popup-list.do";
        	var inDs = "ds_search=ds_mnfr";
        	var outDs = "manufacturerList=ds_mnfr";
        	var arg = "";

        	this.ds_mnfr.setColumn(0, "LANG_CD", "KO");
        	this.ds_mnfr.setColumn(0, "CO_CD", "1000");
        	this.ds_mnfr.setColumn(0, "MNFR_NO", this.ds_search.getColumn(0, "MNFR_NO"));
        	this.ds_mnfr.setColumn(0, "MNFR_NM", this.ds_search.getColumn(0, "MNFR_NM"));

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }

        //상품군 입력창에 입력 후 엔터 칠 경우.
        this.fn_productInfoSearch = function() {
        	var sSvcId = "selectProductInfoList";
        	var sUrl = "/pr/prd-popup/select-category-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_product=ds_list";
        	var arg = "";

        	this.ds_search.setColumn(0, "CO_CD", "1000");
        	this.ds_search.setColumn(0, "MALL_SPR_CD", "10");
        	this.ds_search.setColumn(0, "ROW_COUNT", "1000");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }

        //진열 순서 변경
        this.fn_updateSrtSo = function() {
        	var sSvcId = "updateSrtSo";
        	var sUrl = "/pr/ctg-mng/update-list-srt.do";
        	var inDs = "ds_bgList=ds_bgList";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }

        //개인화 저장
        this.fn_gridSave = function() {
        	var sSvcId = "grd_bgList";
        	var sUrl = "/co/Prsn/saveScrnPrsn.do";
        	var inDs = "ds_save=ds_save";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_callback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "selectBgList"){
        		this.preSelectRowPosition = 0;

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallback");

        		//대표 상품 검색 다시 처리
        		var prd = this.div_search.form.edt_bgNm00.value;
        		prdId = nexacro.replaceAll(prd, "|", ",");

        		if(!this.gfn_isNull(prd)){
        			this.div_search.form.edt_bgNm00.set_value(prdId);
        		}

        	} else if( svcID == "commonCodeSearch" ) {
        		//날짜
        		this.ds_inqPerdSprCd.insertRow(0);
        		this.ds_inqPerdSprCd.setColumn(0, "COM_DTL_CD", "");
        		this.ds_inqPerdSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.div_search.form.cmb_inqPerdSprCd.set_index(0);

        		//사용여부
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        		this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.div_search.form.cbo_useYn.set_index(1);

        		//전시상품타입
        		this.ds_dispPrdSprCd.insertRow(0);
        		this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD", "");
        		this.ds_dispPrdSprCd.setColumn(0, "COM_DTL_CD_NM", "선택");
        		this.div_search.form.cbo_pdtType.set_index(0);

        	} else if( svcID == "selectMbrOprtrInfoList" ) { //담당자
        		if( this.oprtrInfoCount > 1 ) {
        			this.fn_popup("oprtrInfoPop");
        		} else if( this.oprtrInfoCount == 1 ) {
        			this.ds_search.setColumn(0, "REGPSN_ID", this.selectRegpsnId);
        			this.ds_search.setColumn(0, "REGPSN_NM", this.selectRegpsnNm);
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "selectMnfrInfoList" ) { //제조원
        		if( this.searchMnfrCount > 1 ) {
        			this.fn_popup("mnfrInfoPop");
        		} else if( this.searchMnfrCount == 1 ) {
        			this.ds_search.setColumn(0, "MNFR_NO", this.searchMnfrNo);
        			this.ds_search.setColumn(0, "MNFR_NM", this.searchMnfrNm);
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "selectMbrOprtrOrgInfoList" ) { //담당팀
        		if( this.TeamInfoCount > 1 ) {
        			this.fn_popup("teamInfoPop");
        		} else if( this.TeamInfoCount == 1 ) {
        			this.ds_search.setColumn(0, "TEAM_CD", this.selectTeamCd);
        			this.ds_search.setColumn(0, "TEAM_NM", this.selectTeamNm);
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "selectProductInfoList" ) { //상품군
        		if( this.searchCategoryCount > 1 ) {
        			this.fn_popup("productInfoPop");
        		} else if( this.searchCategoryCount == 1 ) {
        			this.ds_search.setColumn(0, "PRD_CLCD", this.searchPrdClcd);
        			this.ds_search.setColumn(0, "PRD_CLSF_NM", this.searchPrdClsfNm);
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "updateSrtSo" ) { //진열 순서 변경
        		this.alert("진열순서 변경 완료");
        		this.fn_search();
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.totalCount+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_bgList"){
        		oSortInfo = this.grd_bgList.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var jsonData = JSON.parse(sRetValue);

        	//var resData = "";
        	var sIdList = "";
        	var sNmList = "";
        	var prdStr = "";

        	if( sPopupId == "oprtrInfoPop" ){ //등록자
        		this.ds_search.setColumn(0, "REGPSN_ID", jsonData.EMP_NO);
        		this.ds_search.setColumn(0, "REGPSN_NM", jsonData.OPRTR_NM);
        	} else if ( sPopupId == "mnfrInfoPop" ) { //제조원
        		this.ds_search.setColumn(0, "MNFR_NO", jsonData.MNFR_NO);
        		this.ds_search.setColumn(0, "MNFR_NM", jsonData.MNFR_NM);
        	} else if ( sPopupId == "teamInfoPop" ) { //담당팀
        		this.ds_search.setColumn(0, "TEAM_CD", jsonData.TEAM_CD);
        		this.ds_search.setColumn(0, "TEAM_NM", jsonData.TEAM_NM);
        	} else if ( sPopupId == "productInfoPop" ) { //상품군
        		this.ds_search.setColumn(0, "PRD_CLCD", jsonData.PRD_CLCD);
        		this.ds_search.setColumn(0, "PRD_CLSF_NM", jsonData.PRD_CLSF_NM);
        	} else if ( sPopupId == "btn_prdIdMultiInput" ) { //상품ID
        		if(jsonData.length > 0){
        			for(var i = 0; i<jsonData.length; i++){
        				prdStr += jsonData[i].PRD_ID + ",";
        			}
        			this.div_search.form.edt_bgNm00.set_value(prdStr.substring(0, prdStr.length-1));
        		} else{
        			this.div_search.form.edt_bgNm00.set_value(jsonData.textValue);
        		}
        	} else if ( sPopupId == "detailPop" ) { //수정 후 다시 검색
        		this.fn_search();
        	} else if ( sPopupId == "registPop" ) { //등록 후 다시 검색
        		this.fn_search();
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_bgList.uSortFlag = "false";
        	this.grd_bgList.uServerSortFlag = "true";
        	this.grd_bgList.uSortCallback = "fn_sortCallback";
        	this.grd_bgList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//등록일
        	this.div_search.form.cboGubun.set_index(0);

        	//전시상품타입
        	this.div_search.form.cbo_pdtType.set_index(0);

        	//사용 여부
        	this.div_search.form.cbo_useYn.set_index(1);

        	//grid 개인화
        	this.uGridList = "";
        	this.grd_bgList.uRigntMouse = "true";
        	this.grd_bgList.uPersonalFlag = "true";
        	this.grd_bgList.uDefaultFormat = "CO_CD, PRD_CLCD, PRD_CLSF_NM, DISP_PRD_NM, PRD_ID, PRD_NM, PRFRT, ATTR_VAL";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //조회기간 재설정
        this.fn_setSearchDate = function(resetYn) {

        	var term = this.div_search.form.cmb_inqPerdSprCd.value;

        	if(resetYn == "Y") {
        		term = "";
        	}
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if(term == ""){
        		this.div_search.form.cal_fromDate.set_value("");
        		this.div_search.form.cal_toDate.set_value("");
        	} else {
        		if( term == "1" ) {
        			objDate.setDate(objDate.getDate());
        		} else if( term == "2" ) {
        			objDate.setDate(objDate.getDate() -6);
        		} else if( term == "3" ) {
        			objDate.setDate(objDate.getDate() -13);
        		} else if( term == "4" ) {
        			objDate.setMonth(objDate.getMonth() -1);
        		} else if( term == "5" ) {
        			objDate.setMonth(objDate.getMonth() -3);
        		} else if( term == "6" ) {
        			objDate.setMonth(objDate.getMonth() -6);
        		} else if( term == "7" ) {
        			objDate.setMonth(objDate.getMonth() -12);
        		}
        		this.div_search.form.cal_fromDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.div_search.form.cal_toDate.set_value(sToday);
        	}
        }

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {/*coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")*/
        					coCd : '1000'
        				   , empNo : this.div_search.form.edt_regpsnId.value
        				   , oprtrNm : this.div_search.form.edt_regpsnNm.value
        				   , mnfrNo : this.div_search.form.edt_mnfrNo.value
        				   , mnfrNm : this.div_search.form.edt_mnfrNm.value
        				   , teamCd : this.div_search.form.edt_teamId.value
        				   , teamNm : this.div_search.form.edt_teamNm.value
        				   , prdClcd : this.div_search.form.edt_productId.value
        				   , prdClsfNm : this.div_search.form.edt_productNm.value
        				   };

        	if( type == "oprtrInfoPop" ){ // 담당자 조회 팝업
        		objParam.empNo = this.ds_search.getColumn(0, "REGPSN_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "REGPSN_NM");
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_PP_27.xfdl", objParam, "fn_popupCallback");

        	} else if ( type == "mnfrInfoPop" ) { //제조원 조회 팝업
        		objParam.mnfrNo = this.ds_search.getColumn(0, "MNFR_NO");
        		objParam.mnfrNm = this.ds_search.getColumn(0, "MNFR_NM");
        		this.gfn_openPopup("mnfrInfoPop", "PR_POP::SSP_BO_PP_08.xfdl", objParam, "fn_popupCallback");
        	} else if ( type == "teamInfoPop" ) { //담당팀 조회 팝업
        		objParam.teamCd = this.ds_search.getColumn(0, "TEAM_CD");
        		objParam.teamNm = this.ds_search.getColumn(0, "TEAM_NM");
        		this.gfn_openPopup("teamInfoPop", "CC::SSP_BO_PP_26.xfdl", objParam, "fn_popupCallback");
        	} else if ( type == "productInfoPop" ) { //상품군 조회 팝업
        		objParam.prdClcd = this.ds_search.getColumn(0, "PRD_CLCD");
        		objParam.prdClsfNm = this.ds_search.getColumn(0, "PRD_CLSF_NM");
        		objParam.coCd = this.ds_search.getColumn(0, "CO_CD");
        		objParam.mallSprCd = this.ds_search.getColumn(0, "MALL_SPR_CD");
        		objParam.selMthdCd = this.ds_search.getColumn(0, "SEL_MTHD_CD");

        		this.gfn_openPopup("productInfoPop", "PR_POP::SSP_BO_PP_10.xfdl", objParam, "fn_popupCallback");
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.div_search.form.cbo_useYn.set_index(1);
        	this.div_search.form.cmb_inqPerdSprCd.set_index(0);
        	this.div_search.form.cboGubun.set_index(0);
        	this.div_search.form.cbo_pdtType.set_index(0);

        	this.fn_setSearchDate("Y");
        };

        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.div_search.form.cal_fromDate.value > this.div_search.form.cal_toDate.value){
        		this.alert("종료일이 시작일보다 작습니다.");
        		this.fn_setSearchDate();
        		return;
        	}

        	this.fn_search();
        };

        //등록버튼
        this.btn_regist_onclick = function(obj,e)
        {
        	var objParam = {
        			useYn: 'A'
        		};
        	this.gfn_openPopup("registPop", "SA::SSP_BO_NA_25.xfdl", objParam);
        };

        //그리드 ONCLICK
        this.grd_bgList_oncellclick = function(obj,e)
        {
        	this.columnRow = e.row;
        	this.columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID

        	if(this.columnId == "PRD_CLCD"){
        		var params = {
        			coCd : this.ds_bgList.getColumn(this.columnRow, "CO_CD")
        			, prdClcd : this.ds_bgList.getColumn(this.columnRow, "PRD_CLCD")
        			, prdClsfNm : this.ds_bgList.getColumn(this.columnRow, "PRD_CLSF_NM")
        			, dispPrdNm : this.ds_bgList.getColumn(this.columnRow, "DISP_PRD_NM")
        			, prdId : this.ds_bgList.getColumn(this.columnRow, "REPR_PRD_ID")
        			, prdIdView : this.ds_bgList.getColumn(this.columnRow, "PRD_ID")
        			, prdNm : this.ds_bgList.getColumn(this.columnRow, "PRD_NM")
        			, prfrt : this.ds_bgList.getColumn(this.columnRow, "PRFRT")
        			, attrVal : this.ds_bgList.getColumn(this.columnRow, "ATTR_VAL")
        			, mnfrNm : this.ds_bgList.getColumn(this.columnRow, "MNFR_NM")
        			, ctryNm : this.ds_bgList.getColumn(this.columnRow, "CTRY_NM")
        			, orgplcCtryCd : this.ds_bgList.getColumn(this.columnRow, "ORGPLC_CTRY_CD")
        			, sellUnitCd : this.ds_bgList.getColumn(this.columnRow, "SELL_UNIT_CD")
        			, dispPrdSprCd : this.ds_bgList.getColumn(this.columnRow, "DISP_PRD_SPR_CD")
        			, addInfoSetYn : this.ds_bgList.getColumn(this.columnRow, "ADD_INFO_SET_YN")
        			, orgNm : this.ds_bgList.getColumn(this.columnRow, "ORG_NM")
        			, oprtrId : this.ds_bgList.getColumn(this.columnRow, "OPRTR_ID")
        			, oprtrNm : this.ds_bgList.getColumn(this.columnRow, "OPRTR_NM")
        			, useYn : this.ds_bgList.getColumn(this.columnRow, "USE_YN")
        			, prdUseYn : this.ds_bgList.getColumn(this.columnRow, "PRD_USE_YN")
        			, salsprc : this.ds_bgList.getColumn(this.columnRow, "SALSPRC")
        		};
        		var options = {};
        		this.gfn_openPopup("detailPop", "SA::SSP_BO_NA_25.xfdl", params,  "fn_popupCallback", options);
        	}

        	if(this.columnId == "CHG"){
        		var size = this.ds_bgList.rowposition; //클릭된 행
        		var nCellSize2 = obj.getRealRowSize(size); //클릭할 행의 높이
        		var nHalfPos  = nexacro.round(nCellSize2/2); //클릭한 행의 높이 1/2
        		var yy = e.canvasy; //그리드 내 y좌표
        		var num = nexacro.toNumber(size); //그리드 인덱스 숫자 변환



        		if(yy-(24+(num*32)) > nHalfPos){
        			this.ds_bgList.moveRow(e.row, e.row + 1);
        		} else {
        			this.ds_bgList.moveRow(e.row, e.row - 1);
        		}
        	}
        };

        //조회 기간 변경 이벤트
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //담당자 팝업
        this.btn_regpsnPop_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : '1000'
        	};
        	var opts = { }
        	this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_PP_27.xfdl", oArg, "fn_popupCallback", opts);
        };

        //담당팀 팝업
        this.div_search_btn_teamPop_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : '1000'
        		, searchType: "1"
        		, searchType: "2"
        		, searchType: "3"
        		, searchType: "4"
        		, searchType: "5"
        	};
        	var opts = { }
        	this.gfn_openPopup("teamInfoPop", "CC::SSP_BO_PP_26.xfdl", oArg, "fn_popupCallback", opts);
        };

        //제조원 팝업
        this.btn_mnfrPop_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : '1000'
        	};
        	var opts = { }
        	this.gfn_openPopup("mnfrInfoPop", "PR_POP::SSP_BO_PP_08.xfdl", oArg, "fn_popupCallback", opts);
        };

        //상품군 팝업
        this.div_search_btn_productPop_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : '1000'
        		, mallSprCd : "10"
        		, selMthdCd : "40"
        	};
        	var opts = { }
        	this.gfn_openPopup("productInfoPop", "PR_POP::SSP_BO_PP_10.xfdl", oArg, "fn_popupCallback", opts);
        };

        //대표상품ID 팝업
        this.div_search_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId: this.div_search.form.edt_bgNm00};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        //레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_bgList", this.grd_bgList.getCurFormatString());
        };

        //레이아웃 초기화
        this.btn_layoutReset_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_bgList");
        	this.grd_bgList.set_formats(this.grd_bgList.uOrgFormat);
        };

        //조회영역 엔터 칠 경우
        this.div_search_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if(e.fromobject.id == "edt_regpsnId" || e.fromobject.id == "edt_regpsnNm") {
        				this.fn_oprtrInfoSearch();
        			} else if (e.fromobject.id == "edt_mnfrNo" || e.fromobject.id == "edt_mnfrNm") {
        				this.fn_mnfrInfoSearch();
        			} else if (e.fromobject.id == "edt_teamId" || e.fromobject.id == "edt_teamNm") {
        				this.fn_teamInfoSearch();
        			} else if (e.fromobject.id == "edt_productId" || e.fromobject.id == "edt_productNm") {
        				this.fn_productInfoSearch();
        			}
        			else {
        				this.fn_search(0);
        			}
        		}
        	}
        };

        //엑셀 다운로드 버튼
        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_bgList.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.grd_bgList, fileName:"전시상품조회"});
        	}else{
        		alert("다운로드 가능한 데이터가 없습니다.");
        	}
        };

        //진열 순서 변경 버튼
        this.btn_regist00_onclick = function(obj,e)
        {
        	this.fn_updateSrtSo();
        };

        //진열 순서 변경 시 SRTS_SO 값 변경
        this.ds_bgList_canrowposchange = function(obj,e)
        {
        	var rowNum = this.ds_bgList.rowcount;

        	for(var i = 0; i < rowNum; i++){
        		this.ds_bgList.setColumn(i, "SRT_SO", i+1);
        	}
        };

        //컬럼 ID 구하는 함수
        this.getBindColumnIDByIndex = function(grid, index)
        {
          var text = "";
          var columnid = null;
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }

          if ( text && text.length > 0 )
          {
            if ( text.search(/^bind:/) > -1 )
            {
              columnid = text.replace(/^bind:/, "");
            }
            else if ( text.search(/^BIND\(/) > -1 )
            {
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            }
          }

          return columnid;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_search.addEventHandler("onkeyup",this.div_search_onkeyup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_search.form.Static01.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.div_search.form.btn_regpsnPop.addEventHandler("onclick",this.btn_regpsnPop_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.div_search.form.cboGubun.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.div_search.form.btn_mnfrPop.addEventHandler("onclick",this.btn_mnfrPop_onclick,this);
            this.div_search.form.Static05_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.div_search.form.btn_teamPop.addEventHandler("onclick",this.div_search_btn_teamPop_onclick,this);
            this.div_search.form.btn_productPop.addEventHandler("onclick",this.div_search_btn_productPop_onclick,this);
            this.div_search.form.Static03.addEventHandler("onclick",this.Div_top_info_Static22_00_onclick,this);
            this.grd_bgList.addEventHandler("oncellclick",this.grd_bgList_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_regist00.addEventHandler("onclick",this.btn_regist00_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.btn_layoutReset.addEventHandler("onclick",this.btn_layoutReset_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.ds_bgList.addEventHandler("canrowposchange",this.ds_bgList_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_NA_24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
