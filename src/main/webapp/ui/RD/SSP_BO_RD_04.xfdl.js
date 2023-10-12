(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D 시리즈그룹 상품 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_ID\"/><Col id=\"CLASS_NM\"/><Col id=\"USE_CHK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_GRP_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\">REQ_DT</Col><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PRD_GRP_SPR\">PRD_ID</Col><Col id=\"PRD_GRP_ID\"/><Col id=\"KEY_SPR\">PRD_NM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_GRP_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_GRP_DTL_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_PRD_VIEW_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_INFO_ATTR_MAPP_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_GRP_SPR_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_GRP_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\">REQ_DT</Col><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PRD_GRP_SPR\">PRD_ID</Col><Col id=\"PRD_GRP_ID\"/><Col id=\"KEY_SPR\">PRD_NM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grpSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input01", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"178","100","24","16",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"178","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"178","100","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","202","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","796","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"107","1336","10","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","212",null,null,"20","114",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"99\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"97\"/><Column size=\"207\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"그룹ID\"/><Cell col=\"1\" text=\"그룹구분\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"그룹상품수\"/><Cell col=\"4\" text=\"기준상품ID\"/><Cell col=\"5\" text=\"기준상품명\"/><Cell col=\"6\" text=\"기준상품 대표규격\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"등록자ID\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"최종수정일\"/><Cell col=\"12\" text=\"최종수정자ID\"/><Cell col=\"13\" text=\"최종수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_GRP_ID\" textDecoration=\"underline\" color=\"#235da8\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PRD_GRP_SPR_NM\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRD_GRP_NM\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRD_GRP_CNT\" textAlign=\"right\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:BSS_PRD_VIEW_ID\" displaytype=\"text\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:BSS_PRD_NM\" textAlign=\"left\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRVL_LIST\" textAlign=\"left\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:USE_YN_NM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:REG_DTM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:REGPSN_NM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:UPD_DTM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:UPDPSN_NM\" cssclass=\"expr:USE_YN == &apos;N&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","grd_list:32",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","188","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"134","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","5","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdGrpId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("상품·그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_keyword","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle12","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtSpr","140","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_dtSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_dtSpr_innerdataset", obj);
            div_search_form_cmb_dtSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_dtSpr_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","67","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","660","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_grpSpr","660","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_useyn","660","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","930","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","1040","67","152","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","1198","67","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","270","35","238","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_keyword","140","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_keyword_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_keyword_innerdataset", obj);
            div_search_form_cmb_keyword_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PRD_NM</Col><Col id=\"datacolumn\">상품명</Col></Row><Row><Col id=\"codecolumn\">GRP_NM</Col><Col id=\"datacolumn\">그룹명</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_keyword_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpId","270","4","233","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdGrpIdMultiInput","504","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdGrpId","140","5","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_prdGrpId_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_prdGrpId_innerdataset", obj);
            div_search_form_cmb_prdGrpId_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">상품ID</Col><Col id=\"codecolumn\">PRD_ID</Col></Row><Row><Col id=\"datacolumn\">시리즈그룹ID</Col><Col id=\"codecolumn\">GRP_ID</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_prdGrpId_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","800","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chrpsn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsn_innerdataset", obj);
            div_search_form_cmb_chrpsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">등록자</Col><Col id=\"codecolumn\">REGPSN_ID</Col></Row><Row><Col id=\"datacolumn\">최종수정자</Col><Col id=\"codecolumn\">UPDPSN_ID</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsn_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_grpSpr","800","5","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_grpSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_useyn","800","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_useyn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_useyn_innerdataset", obj);
            div_search_form_cmb_useyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_useyn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","67","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"104","60","28","64",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"104","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"104","118","28","btn_init:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","148","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"178","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgUpd",null,"178","80","24","btn_layoutSave:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgReg",null,"178","80","24","btn_pkgUpd:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"178","70","24","btn_pkgReg:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D 시리즈그룹 상품 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item11","div_search.form.chk_newPrdProcStats4","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.chk_newPrdProcStats5","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.chk_newPrdProcStats6","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.chk_newPrdProcStats7","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.chk_newPrdProcStats8","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.chk_newPrdProcStats9","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_dtSpr","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_prdGrpId","value","ds_search","PRD_GRP_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_prdGrpId","value","ds_search","PRD_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cmb_grpSpr","value","ds_search","PRD_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_keyword","value","ds_search","KEY_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_useyn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_chrpsn","value","ds_search","CHRPSN_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_chrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_chrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.edt_keyword","value","ds_search","KEY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_04.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_04.xfdl(R&D 시리즈그룹 상품 관리)
        * 작 성         일 명: 손나라
        * 작 성         일 자: 2022/05/09
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.lv_pageViewCnt         = 10000;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.mallSprCd 				= "20";
        this.lvKeyCode              = "";
        this.lv_btnChkYn            = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //개인화 함수처리
        	this.fn_setInitPersonalization(this,this.grd_list,"true","true");	//this.uGridList폼에사용자 함수/uRightMouse/uPersonalFlag
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);
        	// 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "ds_dateUnitCombo|ds_pageRowCd|ds_grpSpr|ds_rndPrdAuthCombo";  		      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PAGE_ROW_CD|PRD_GRP_SPR_CD|CHRPSN_TEAM_SPR_CD";           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X";  								                                  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      							      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
            this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();

           	this.fn_setResetBtnCall();
        };

        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 화면권한 자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.btn_reg.set_visible(false);	  // 등록 버튼 숨김
        		this.btn_pkgReg.set_visible(false);   // 일괄등록 버튼 숨김
        		this.btn_pkgUpd.set_visible(false);   // 일괄수정 버튼 숨김
        	}
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt         = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
        	this.ds_master.clearData();
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
            this.ds_search.setColumn(nRow,"PRD_GRP_SPR",                  "PRD_ID");            // 상품·그룹ID 구분
        	this.ds_search.setColumn(nRow,"PRD_GRP_ID",                   null);                // 상품·그룹ID
        	this.ds_search.setColumn(nRow,"GRP_SPR",                      null);                // 그룹 구분
        	this.ds_search.setColumn(nRow,"KEY_SPR",                      "GRP_NM");            // KEYWORD 구분
        	this.ds_search.setColumn(nRow,"KEY_NM",                       null);                // KEYWORD
        	this.ds_search.setColumn(nRow,"USE_YN",                       null);                // 사용여부
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR",       "REG_DTM");           // 일자구분
        	this.ds_search.setColumn(nRow,"CHRPSN_SPR",                   "REGPSN_ID");         // 일자구분
        	this.ds_search.setColumn(nRow,"CHRPSN_ID",                     null);               // 담당자ID
        	this.ds_search.setColumn(nRow,"CHRPSN_NM",                     null);               // 담당자명
            this.ds_search.setColumn(nRow,"ROW_COUNT",                     this.lv_pageViewCnt);//현재 레코드 초기화셋팅
        	this.ds_search.setColumn(nRow,"MALL_SPR_CD",                   this.mallSprCd);     // /*10:SSP, 20:RND*/
            this.div_paging.reload();
        	this.fn_pageCallback();

            // 일자 날짜 초기화 Setting
            this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
                                   ,this.div_search.form.cal_reqDtFnlProcDtEnd
                                   ,this.div_search.form.cmb_dtUnit);

            // Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "insertMultiData" :
                            this.fn_Ret(true);
                        break;
                    case "deleteMultiData" :
                            this.ds_select.deleteAll();
                        break;
                    default:
                        break;
                }
            }
        };

        /**
         * 기능 : 팝업 종료후 dsDummy Copy
         */
        this.fn_dsChildCopydsDummy = function(ds)
        {
            this.dsDummy.clearData();
            this.dsDummy.copyData(ds);
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	rtnData = {};
            switch(strId)
            {
        		case "SSP_BO_RD_07" :
        				//시리즈 상품 생성 팝업
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "CLOSE")
        					{
        					}else if(sRtn[0] == "EXIT")
        					{
        					}else
        					{
        						this.lvKeyCode  = sRtn[1];
        						this.fn_Ret(true);
        					}
        				}
                    break;
        		case "SSP_BO_RD_08" :
        				//시리즈 상세/수정 팝업
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "CLOSE")
        					{
        					}else if(sRtn[0] == "EXIT")
        					{
        					}else
        					{
        						this.lvKeyCode  = sRtn[1];
        						this.fn_Ret(true);
        					}
        				}
                    break
        		// 상품·그룹ID 멀티입력팝업 후처리
        		case "SSP_BO_PP_13" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdGrpId.set_value(jsonData.textValue);
        				}else
        				{
        					// 닫기처리
        				}
        			break;
        		case "SSP_BO_PP_27" :
        				if(!this.gfn_isNull(strVal))
        				{
        					 var jsonData = JSON.parse(strVal);
        					 this.div_search.form.edt_chrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        					 this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
        				}else
        				{
        					// 닫기처리
        				}
        			break;
                default:
                    break;
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {
        	// 상품그룹구분코드, 상품그룹아이디
        	var prdGrpIdSpr = this.div_search.form.cmb_prdGrpId.value;
        	var prdGrpId 	= this.div_search.form.edt_prdGrpId.value;

        	if (!this.gfn_isNull(prdGrpId))
        	{
        		var id = this.ds_search.getColumn(0,"PRD_GRP_ID");

        		if (prdGrpIdSpr == "PRD_ID")
        		{
        	    	this.fn_setMultiSearch(this.formId,"PRD_ID", id);  // 상품ID
        		} else {
        			this.fn_setMultiSearch(this.formId,"GRP_ID", id);  // 그룹ID
        		}
        	} else {
        		this.fn_setMultiSearch(this.formId,"PRD_ID", "");  // 상품ID
        		this.fn_setMultiSearch(this.formId,"GRP_ID", "");  // 그룹ID
        	}

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            } else {
                this.fn_Ret(true);
            }
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function(page)
        {
        	// 일자 체크
        	if(!this.fn_getDefaultDateChk(this.div_search.form.cal_reqDtFnlProcDtStr
        	                             ,this.div_search.form.cal_reqDtFnlProcDtEnd
        								 ,this.div_search.form.cmb_dtSpr.text))
        	{
        		return false;
        	}

        	if(page)
        	{
                var oPaging = this.div_paging;
                oPaging.uPage    = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",    0);
                this.ds_search.setColumn(0,"SORT_TYPE",    "");
                this.ds_search.setColumn(0,"INQ_COND_DTLS",this.formId);
                this.ds_search.setColumn(0,"CO_CD",        this.lv_coCd);
                this.ds_search.setColumn(0,"TOTAL_COUNT",  this.totalCount);
        		this.lv_pageViewCnt = this.ds_search.getColumn(0,"ROW_COUNT");

        		// page 처리시 기존 조회조건 검색을 위한 데이터 카피
        		this.ds_searchTemp.copyData(this.ds_search);
            }

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(page)
        {
            if(!this.fn_PreRet(page))
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/srs-grp-prd-mng/select-srs-grp-prd-mng.do";
            var strInDs     = "ds_search=ds_searchTemp";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            if(!this.gfn_isNull(this.lvKeyCode))
            {
        		var strPkCode          = this.lvKeyCode.split("|");
        		var strCoCd            = strPkCode[0];
        		var strPrdGrpId        = strPkCode[1];

        		var strExpr            = "CO_CD == '" + strCoCd + "' && PRD_GRP_ID == '" + strPrdGrpId + "'";
        		var nRow = this.ds_master.findRowExpr(strExpr);
        		if(nRow > -1)
        		{
        			this.ds_master.set_rowposition(nRow);
        			this.lvKeyCode = "";
        		}
            }

        	this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        this.btn_reg_onclick = function(obj,e)
        {
        	var lv_sFlag01 		= "N";						    // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 	= this.lv_coCd;	                // 부모에서 넘어가는 파라미터(프로그래ID)

        	var sPopId 			= "SSP_BO_RD_07";
        	var sUrl 			= "RD::SSP_BO_RD_07.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01
        						  };
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};
        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**********************************************************************
                08_1. 수정 함수 선언
        ***********************************************************************/
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.cell == this.grd_list.getBindCellIndex("body","PRD_GRP_ID"))
        	{
        		var lv_sFlag01 		= "N";						                                                // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02		= "N";						                                                // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sValue01 	= this.ds_master.getColumn(this.ds_master.rowposition,"PRD_GRP_ID");	    // 상품그룹ID
        		var lv_sValue02 	= this.ds_master.getColumn(this.ds_master.rowposition,"PRD_GRP_SPR_CD");	// 상품그룹구분코드
        		var lv_sValue03 	= "";	        // 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue04 	= this.lv_coCd;	   															// 회사코드
        		var lv_sValue05 	= this.mallSprCd;		    												// 몰구분


        		var sPopId 			= "SSP_BO_RD_08";
        		var sUrl 			= "RD::SSP_BO_RD_08.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sVal01:lv_sValue01
        							  , pv_sVal02:lv_sValue02
        							  , pv_sVal03:lv_sValue03
        							  , pv_sVal04:lv_sValue04
        							  , pv_sVal05:lv_sValue05
        							  };
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {titlebar:"false"};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);

        	}
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**
        * 초기화 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.div_search_btn_init_onclick = function(obj,e)
        {
            // 초기화 호출
            this.fn_setResetBtnCall();
        };
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**
        * 엑셀다운로드 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.btn_excelDown_onclick = function(obj,e)
        {
            this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.ds_master.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","EXCEL","question" );    // Excel를 출력하시겠습니까?

        	if(result == 0)
            {
               return false;
            }

            this.gfn_excelExport(this.grd_list, "R&D 시리즈그룹 상품 관리","R&D 시리즈그룹 상품 관리");
        };
        /**********************************************************************
                12_1. 개인화 이벤트처리
        ***********************************************************************/
        /*
         * 헤드팝업 크로즈 할때 처리
         */
        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /*
         * 개인화 저장처리
         */
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };
        /*
         * 개인화 초기화
         */
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 그리드 상단 Sort 처리
         */
        this.fn_sortCallback = function(sGridId)
        {
            var oGrid = null;

            if(sGridId == "grd_list")
            {
        		if(this.ds_master.getRowCount() > 0)
        		{
        			var oSortInfo = this.grd_list.uaSortInfo;
        			this.ds_searchTemp.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_searchTemp.setColumn(0,"SORT_TYPE",  oSortInfo.status);
        			this.fn_Ret(false);
        		}
            }
        };

        /**
         * 그리드 하단 페이지 처리
         */
        this.fn_pageCallback = function(sFlag)
        {
            var oPaging = this.div_paging;

            if(sFlag)
            {
                this.ds_searchTemp.setColumn(0,"START_NUM",oPaging.uPageNum);
                this.ds_searchTemp.setColumn(0,"ROW_COUNT",this.lv_pageViewCnt);
                this.fn_Ret(false);
            }

            var sTotText = "(<b v='true'>총 "+ oPaging.form.fv_nTotRowCount+"건 </b><fc v='red'>"+ (oPaging.form.fv_nPageCnt == 0 ? 0 : oPaging.form.fv_nPage) +"</fc> / "+ oPaging.form.fv_nPageCnt +")";
            this.totalPageCount.set_text(sTotText);
        };

        /**
         * 조회조건 상품·그룹ID 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdGrpIdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdGrpId };
            var options = { title  : this.div_search.form.stc_prdGrpId.text };

            this.gfn_openPopup( "SSP_BO_PP_13"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };


        /***********************************************************************************************
        *  최종수정자/등록자
        /***********************************************************************************************/
        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnPopup_onclick = function(obj,e)
        {

        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);
        	this.fn_setCallPopup(sCodeId);
        };


        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_chrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_chrpsnNm.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_chrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup(sCodeId);
        		}
        	}
        };


        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup = function(sCodeId)
        {
        	this.ds_input01.clearData();
        	this.ds_oprtr.clearData();
        	var nRow = this.ds_input01.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input01.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input01.setColumn(nRow,"CO_CD",	   this.coCd);
        		this.ds_input01.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input01";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_oprtr=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_oprtr.rowcount == 1)
        	{
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_ID", this.ds_oprtr.getColumn(0,"EMP_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_NM", this.ds_oprtr.getColumn(0,"OPRTR_NM"));

        	} else
        	{
        		var params  = {  empNo : sCodeId
        					  ,  coCd  : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_chrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        						  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };
        /***********************************************************************************************
        *  상품담당자(정) 종료
        /***********************************************************************************************/

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };


        /**
         * 대용량다운로드
         */
        this.fn_largeFileDown = function(page){

            if(!this.fn_PreRet(page))
            {
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/srs-grp-prd-mng.do";
        	var inDs = "ds_search=ds_searchTemp";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        };


        /**
         * 엑셀 대용량 다운로드 버튼 클릭 시
         */
        this.div_search_btn_largeExcel_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_excelDownload();
        	}
        };


        /**
         * 일반 엑셀 대용량 다운로드
         */
        this.fn_excelDownload = function ()
        {
        	// 멀티입력 검색조건 Set
        	var prdGrpIdSpr = this.div_search.form.cmb_prdGrpId.value;
        	var prdGrpId 	= this.div_search.form.edt_prdGrpId.value;

        	if ( !this.gfn_isNull(prdGrpId) )
        	{
        		if ( prdGrpIdSpr == "PRD_ID" ) {
        	    	this.fn_setMultiSearch(this.formId,"PRD_ID",this.ds_search.getColumn(0,"PRD_GRP_ID"));  // 상품ID
        		} else {
        			this.fn_setMultiSearch(this.formId,"GRP_ID",this.ds_search.getColumn(0,"PRD_GRP_ID"));  // 그룹ID
        		}
        	}

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0){
                this.fn_insertMultiData("fn_callBackForLargeFileDown");
            } else{
                this.fn_largeFileDown(true);
            }
        };

        this.fn_callBackForLargeFileDown = function()
        {
        	this.fn_largeFileDown(true);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div_search.form.cmb_dtSpr.addEventHandler("onitemchanged",this.div_search_cboRepairCd01_00_onitemchanged,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.edt_keyword.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_keyword.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_prdGrpId.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_prdGrpId.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.btn_prdGrpIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdGrpIdMultiInput_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_pkgUpd.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_pkgReg.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
