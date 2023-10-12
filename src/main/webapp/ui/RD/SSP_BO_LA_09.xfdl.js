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
            this.set_titletext("사전설정매익률 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STATS\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"STATS\"/><Col id=\"PRFRT_SPR\"/><Col id=\"CHRPSN_ID\"/><Col id=\"CHRPSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"PRD_CLCD_CNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RND_PRFRT_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_PRFRT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_HTS\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PLN_PRFRT\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_USE_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prfrtSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">1000</Col><Col id=\"COM_DTL_CD_NM\">1000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">5000</Col><Col id=\"COM_DTL_CD_NM\">5000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">10000</Col><Col id=\"COM_DTL_CD_NM\">10000개씩</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STATS\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"STATS\"/><Col id=\"PRFRT_SPR\"/><Col id=\"CHRPSN_ID\"/><Col id=\"CHRPSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"PRD_CLCD_CNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgChrpsnYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PURG_CHRPSN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_CLCD\"/><Col id=\"ROW_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cbo_rowCont",null,"179","100","24","21",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"179","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveAll",null,"180","89","24","btn_excelDown:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일괄등록/수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"180","81","24","btn_saveAll:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"180","81","24","btn_reg:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","186","370","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","204","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","Static01_00_00:0",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_master");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"수정\" displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"CO_CD\"/><Cell col=\"2\" text=\"SEQ\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"매익률 구분\"/><Cell col=\"5\" text=\"제조원ID\"/><Cell col=\"6\" text=\"제조원\"/><Cell col=\"7\" text=\"상품군ID\"/><Cell col=\"8\" text=\"상품군\"/><Cell col=\"9\" text=\"상품군&#13;&#10;상태\"/><Cell col=\"10\" text=\"사전설정&#13;&#10;매익률\"/><Cell col=\"11\" text=\"등록·변경담당자\"/><Cell col=\"12\" text=\"변경이력\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:SEQ\"/><Cell col=\"3\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"expr:RND_PRFRT_SPR_CD==&apos;30&apos; &amp;&amp; PRD_CLCD_USE_YN==&apos;Y&apos;?&apos;none&apos;:&apos;combo&apos;\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"4\" text=\"bind:RND_PRFRT_SPR_NM\"/><Cell col=\"5\" text=\"bind:MNFR_NO\"/><Cell col=\"6\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRD_CLCD\"/><Cell col=\"8\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:USE_YN_NM\"/><Cell col=\"10\" text=\"bind:PLN_PRFRT\" displaytype=\"editcontrol\" edittype=\"mask\" border=\"1px solid #d4d4d4\" expr=\"PLN_PRFRT==null?&apos;&apos;:PLN_PRFRT+&apos; %&apos;\" maskeditclipmode=\"excludespace\" maskeditformat=\"+#0.##\" textAlign=\"right\" maskeditlimitbymask=\"both\"/><Cell col=\"11\" text=\"bind:REG_UPD_NM\" expr=\"REG_UPD_ID==null?&apos;&apos;:&apos;(&apos;+REG_UPD_ID+&apos;) &apos; + REG_UPD_NM\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" text=\"bind:CHG_HTS\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"SEQ\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"매익률 구분\"/><Cell col=\"5\" text=\"제조원ID\"/><Cell col=\"6\" text=\"제조원\"/><Cell col=\"7\" text=\"상품군ID\"/><Cell col=\"8\" text=\"상품군\"/><Cell col=\"9\" text=\"상품군&#13;&#10;상태\"/><Cell col=\"10\" text=\"사전설정&#13;&#10;매익률\"/><Cell col=\"11\" text=\"등록·변경담당자\"/><Cell col=\"12\" text=\"변경이력\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:SEQ\"/><Cell col=\"3\" text=\"bind:USE_YN\" displaytype=\"text\" edittype=\"none\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" expr=\"USE_YN==&apos;Y&apos;?&apos;사용&apos;:&apos;미사용&apos;\"/><Cell col=\"4\" text=\"bind:RND_PRFRT_SPR_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MNFR_NO\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRD_CLCD\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:USE_YN_NM\"/><Cell col=\"10\" text=\"bind:PLN_PRFRT\" displaytype=\"text\" edittype=\"none\" border=\"1px solid #d4d4d4\" expr=\"PLN_PRFRT==null?&apos;&apos;:PLN_PRFRT+&apos; %&apos;\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:REG_UPD_NM\" expr=\"&apos;(&apos;+REG_UPD_ID+&apos;) &apos; + REG_UPD_NM\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" text=\"bind:CHG_HTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","grd_list:0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","Static01_00_01_00_00:0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","Static01_00_01:0",null,"132","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_02","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_regChgDt","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("등록·변경 일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_stats","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","650","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","650","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("등록·변경 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_stats","140","66","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("8");
            var div_search_form_cmb_stats_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_stats_innerdataset", obj);
            div_search_form_cmb_stats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_stats_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","868","4","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiPopup","1022","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","1050","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","790","4","74","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","790","35","74","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","868","35","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnMultiPopup","1022","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","140","4","74","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","219","4","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiPopup","373","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","401","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","140","35","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","290","35","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","303","35","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","451","35","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prfrtSpr","650","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("매익률 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prfrtSpr","790","66","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_prfrtSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"105","60","24","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"105","60","24","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","1","95","103.09%","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","150","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","div_paging:0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_chrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_chrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_stats","value","ds_search","STATS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cmb_prfrtSpr","value","ds_search","PRFRT_SPR");
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
        this.addIncludeScript("SSP_BO_LA_09.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_09.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_09.xfdl(사전설정매익률관리)
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2022/04/28
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
        this.lv_pageViewCnt 		= 10000;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.mallSprCd              = "20";
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.lv_btnChkYn            = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);
        	// 로컬 로그인 사용 않할시 false
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
            var strDs    = "ds_dateUnitCombo|ds_prfrtSpr|ds_pageRowCd|ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|RND_PRFRT_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
          	this.fn_setResetBtnCall();
        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
        	//this.fn_PurgChrpsnYn();
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"MNFR_NO",             null); // 제조원NO 초기화
        	this.ds_search.setColumn(nRow,"MNFR_NM",             null); // 제조원 초기화
        	this.ds_search.setColumn(nRow,"PRD_CLCD",            null); // 카테고리CD 초기화
        	this.ds_search.setColumn(nRow,"PRD_CLSF_NM",         null); // 카테고리 초기화
        	this.ds_search.setColumn(nRow,"CHRPSN_ID",           null); // 담당자ID 초기화
        	this.ds_search.setColumn(nRow,"CHRPSN_NM",           null); // 담당자 초기화
        	this.ds_search.setColumn(nRow,"STATS",               null); // 상태구분 초기화
        	this.ds_search.setColumn(nRow,"PRFRT_SPR",           null); // 매익률구분 초기화
        	this.ds_search.setColumn(nRow,"ROW_COUNT",           this.lv_pageViewCnt); //현재 레코드 초기화셋팅
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
        			case "Save" :
        			        this.fn_PostSave();
        			    break;
                    case "insertMultiData" :
                            this.fn_Ret(true);
                        break;
                    case "deleteMultiData" :
                            this.ds_select.deleteAll();
                        break;
        			case "PurgChrpsnYn" :
        			        this.fn_PostPurgChrpsnYn();
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
            switch(strId)
            {
        	    //사전설정매익률 등록 팝업
        		case "SSP_BO_LA_10" :
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
        		// 제조원 조회팝업 후처리
        		case "SSP_BO_PP_08" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_mnfrCd.set_value(jsonData.MNFR_NO.replace(/,\s*$/, ""));
        				this.div_search.form.edt_mnfrNm.set_value(jsonData.MNFR_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        		    break;
        		// 제조원 멀티입력팝업 후처리
        		case "btn_mnfrMultiInput" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_mnfrCd.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		// 카테고리 조회팝업 후처리
        		case "SSP_BO_PP_10" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdClcd.set_value(jsonData.PRD_CLCD.replace(/,\s*$/, ""));
        				this.div_search.form.edt_prdClNm.set_value(jsonData.PRD_CLSF_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        		    break;
         		// 카테고리 멀티입력팝업 후처리
         		case "btn_prdClcdMultiInput" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdClcd.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
         			break;
        		// 등록·변경 담당자 조회팝업 후처리
        		case "SSP_BO_PP_27" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_chrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        				this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
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
            // 멀티입력 검색조건 Set

        	this.fn_setMultiSearch(this.formId,"MNFR_NO",this.ds_search.getColumn(0,"MNFR_NO"));    // 제조원NO
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",this.ds_search.getColumn(0,"PRD_CLCD"));  // 카테고리CD

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            } else
            {
                this.fn_Ret(true);
            }
        };

        this.fn_PreRet = function(page)
        {
        	// 일자 체크
        	if(!this.fn_getDefaultDateChk(this.div_search.form.cal_reqDtFnlProcDtStr
        	                             ,this.div_search.form.cal_reqDtFnlProcDtEnd
        								 ,this.div_search.form.stc_regChgDt.text))
        	{
        		return false;
        	}

            if(page)
        	{
                var oPaging = this.div_paging;
                oPaging.uPage    = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",    0);
                this.ds_search.setColumn(0,"SORT_COLUMN",  "");
                this.ds_search.setColumn(0,"SORT_TYPE",    "");
                this.ds_search.setColumn(0,"INQ_COND_DTLS",this.formId);
                this.ds_search.setColumn(0,"CO_CD",        this.lv_coCd);
                this.ds_search.setColumn(0,"TOTAL_COUNT",  this.totalCount);
        		this.lv_pageViewCnt = this.ds_search.getColumn(0,"ROW_COUNT");

        		// page 처리시 기존 조회조건 검색을 위한 데이터 카피
        		this.ds_searchTemp.copyData(this.ds_search);
             }

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
            var strUrl      = "/rd/bf-set-prfrt-mng/select-bf-set-prfrt-mng.do";
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
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };

        /**
         * 기능 : 구매담당자 조회 실행
         */
        this.fn_PurgChrpsnYn = function()
        {
            var strSvc      = "PurgChrpsnYn";
            var strUrl      = "/rd/bf-set-prfrt-mng/select-purg-chrpsn-yn.do";
            var strInDs     = "";
            var strOutDs    = "ds_purgChrpsnYn=ds_purgChrpsnYn";
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
         * 기능 : 구매담당자 조회 후 실행
         */
        this.fn_PostPurgChrpsnYn = function()
        {
            var strPurgChrpsnYn = this.ds_purgChrpsnYn.getColumn(0,"PURG_CHRPSN_YN");
        	if ( strPurgChrpsnYn == "N" )
        	{
        		this.grd_list.setFormat("format00");
        		this.btn_save.set_visible(false);
        		this.btn_reg.set_visible(false);
        		this.btn_saveAll.set_visible(false);
        	}
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        this.btn_reg_onclick = function(obj,e)
        {
        	var params = { reqGubun    : "10"     // 요청구분 [등록:10]
        				 , autoSearch  : "N"      // 팝업 오픈시 자동조회 여부
        				 };

        	this.fn_setCallPopup(params);
        };
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	var cnt = 0;
            // 필수 입력사항 체크
        	for(var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		if ( this.ds_master.getColumn(idx,"CHK") == "1" )
        		{
        			if ( this.gfn_isNull(this.ds_master.getColumn(idx,"PLN_PRFRT")) ) {
        				this.fn_alert("ERRS000144","저장","사전설정매익률 ","question");      // 일반고객할인율 (&1은(는) 필수입력사항입니다.)
        				return false
        			}
        			var plnPrfrt = parseFloat(this.ds_master.getColumn(idx,"PLN_PRFRT"));
        			var oldPlnPrfrt = parseFloat(this.ds_master.getColumn(idx,"OLD_PLN_PRFRT"));
        			if (  this.ds_master.getColumn(idx,"PLN_PRFRT") != this.ds_master.getColumn(idx,"OLD_PLN_PRFRT")
        			    || this.ds_master.getColumn(idx,"USE_YN") != this.ds_master.getColumn(idx,"OLD_USE_YN") )
        			{
        				cnt++;
        			}
        		}
        	}
        	if ( cnt == 0 ) {
        		this.fn_alert("ERRC000039", "선택" ,"","information");                  // 변경된 행이 없습니다.
                return false;
        	}

        	if ( cnt > 1 )
        	{
        		this.fn_alert("ERRC000094", "선택" ,"","information");                  // 하나의 항목만 선택해 주세요.
        		return false;
        	}

            var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/rd/bf-set-prfrt-mng/save-bf-set-prfrt-mng.do";
            var strInDs     = "ds_master=ds_master:u";
            var strOutDs    = "";
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
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.fn_alert("저장되었습니다","저장"," ","question");      // 저장되었습니다
        	this.fn_Ret(true);
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

        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 슈퍼권한 혹은 구매담당자가 아닐 경우 등록 불가 조회만 가능
        	if(this.lv_btnChkYn != "P" )
        	{
        		this.grd_list.setFormat("format00");    // format 변경
        		this.btn_save.set_visible(false);       // 저장버튼 숨김
        		this.btn_reg.set_visible(false);        // 등록버튼 숨김
        		this.btn_saveAll.set_visible(false);    // 일괄등록/수정 버튼 숨김
        	}

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
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");                  // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","EXCEL","question" );    // Excel를 출력하시겠습니까?

            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grd_list, "사전설정매익률 관리","사전설정매익률 관리");
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
                var oSortInfo = this.grd_list.uaSortInfo;
                this.ds_searchTemp.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_searchTemp.setColumn(0,"SORT_TYPE",  oSortInfo.status);
                this.fn_Ret(false);
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

            var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.sta_totcnt.set_text(sTotText);
        };

        /***********************************************************************************************
        *  제조원 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 제조원 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrMultiPopup_onclick = function(obj,e)
        {

        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup01(sCodeId);
        };


        /**
         * 제조원 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };

        /**
         * 조회조건 제조원 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_mnfrCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"MNFR_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-manufacturer-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                      // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.ds_popupList.rowcount == 1)
        	{

        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NO",this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NM",this.ds_popupList.getColumn(0,"MNFR_NM"));

        	}else
        	{
        		var params  = { mnfrNo : sCodeId
        		              , coCd   : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_mnfr.text };

        		this.gfn_openPopup( "SSP_BO_PP_08"
        		                  , "PR_POP::SSP_BO_PP_08.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        /**
         * 조회조건 제조원 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_mnfrCd };
        	var options = { title  : this.div_search.form.stc_mnfr.text };
        	this.gfn_openPopup( e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  카테고리 시작
        /***********************************************************************************************/
        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         * mallSprCd(몰구분코드) : 10(SSP Mall),20(R&D Mall)
         */
        this.div_search_btn_prdClcdMultiPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 조회조건 카테고리 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdClNm.set_value("");
        	}
        };

        /**
         * 조회조건 카테고리 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup02(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup02 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_CLCD",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-category-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_list";                               // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}
        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD",		this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLSF_NM",	this.ds_popupList.getColumn(0,"PRD_CLSF_NM"))

        	} else
        	{
        		var params  = { mallSprCd : this.mallSprCd
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId
        					  };

        		var options = { title  : this.div_search.form.stc_prdClcd.text };

        		this.gfn_openPopup( "SSP_BO_PP_10"
        		                  , "PR_POP::SSP_BO_PP_10.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        /**
         * 조회조건 카테고리 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup( e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  카테고리 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  등록·변경 담당자 시작
        /***********************************************************************************************/
        /**
         * 조회조건 등록·변경 담당자 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnMultiPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);
        	this.fn_setCallPopup03(sCodeId);

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
        			this.fn_setCallPopup03(sCodeId);
        		}
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup03 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	   this.lv_coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_popupList=ds_output1";                   // 물리적 생성 ds_popupList
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

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	} else
        	{
        		var params  = {empNo  : sCodeId
        	                  , coCd  : this.lv_coCd};
        		var options = { title : this.div_search.form.stc_chrpsn.text };

        		this.gfn_openPopup( "SSP_BO_PP_27"
        		                  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };
        /***********************************************************************************************
        *  등록·변경 담당자 종료
        /***********************************************************************************************/

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };

        /**
         * 신규등록 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						         // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		         // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.coCd;		                 // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.mnfrNo;		             // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = params.prdClcd;		        		 // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = "";		   		 // 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_LA_10";
        		     sUrl 	= "RD::SSP_BO_LA_10.xfdl";
        		     break;
        		case "20" :
        			 sPopId = "SSP_BO_LA_11";
        			 sUrl 	= "RD::SSP_BO_LA_11.xfdl";
        			 break;
        		default : break;
        	}

        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04};     // 파라미터4
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**
          * 그리드 클릭 이벤트
          */
        this.grd_list_oncellclick = function(obj,e)
        {
        	var strCoCd               = this.ds_master.getColumn(e.row,"CO_CD");
        	var strMnfrNo             = this.ds_master.getColumn(e.row,"MNFR_NO");
        	var strPrdClcd            = this.ds_master.getColumn(e.row,"PRD_CLCD");
        	if(e.cell == obj.getBindCellIndex("body","CHG_HTS") )
        	{
        		var params = { coCd            : strCoCd             // 회사코드
        					 , mnfrNo          : strMnfrNo           // 제조원
        					 , prdClcd         : strPrdClcd          // 카테고리
        					 , reqGubun        : "20"    	          // 요청구분 [이력:10]
        					 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
        					 };

        		this.fn_setCallPopup(params);
        	}
        };


        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if ( e.columnid == "PLN_PRFRT" )
        	{
        		var plnPrfrt = this.ds_master.getColumn(e.row,"PLN_PRFRT");
        		var oldPlnPrfrt = this.ds_master.getColumn(e.row,"OLD_PLN_PRFRT");

        		if ( !this.gfn_isNull(oldPlnPrfrt) && parseFloat(plnPrfrt) == parseFloat(oldPlnPrfrt) )
        		{
        			var useYn = this.ds_master.getColumn(e.row,"USE_YN");
        			var oldUseYn = this.ds_master.getColumn(e.row,"OLD_USE_YN");
        			if ( useYn == oldUseYn )
        			{
        				this.ds_master.setColumn(e.row,"CHK",0)	;
        			} else
        			{
        				this.ds_master.setColumn(e.row,"CHK",1)	;
        			}
        		} else
        		{
        			if ( plnPrfrt > 0 )
        			{
        			this.ds_master.setColumn(e.row,"CHK",1)	;
        			}
        		}
        	}
        };

        this.grd_list_oncloseup = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body","USE_YN") )
         	{
        		obj.updateToDataset();
        		//기간할인단위 수정시 금액기본값 수정
        		if ( this.ds_master.getColumn(e.row,"USE_YN") == this.ds_master.getColumn(e.row,"OLD_USE_YN") )
        		{
        			var plnPrfrt = this.ds_master.getColumn(e.row,"PLN_PRFRT");
        			var oldPlnPrfrt = this.ds_master.getColumn(e.row,"OLD_PLN_PRFRT");
        			if ( !this.gfn_isNull(oldPlnPrfrt) && parseFloat(plnPrfrt) == parseFloat(oldPlnPrfrt) )
        			{
        				this.ds_master.setColumn(e.row,"CHK",0)	;
        			} else
        			{
        				this.ds_master.setColumn(e.row,"CHK",1)	;
        			}
        		} else {
        			this.ds_master.setColumn(e.row,"CHK",1)	;
        		}
        	}
        };

        this.ds_master_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid == "PLN_PRFRT" )
        	{
        		var plnPrfrt = new nexacro.Decimal(e.newvalue);
        		if ( plnPrfrt <= 0 )
        		{
        			return false;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_saveAll.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("oncloseup",this.grd_list_oncloseup,this);
            this.div_search.form.cmb_stats.addEventHandler("onitemchanged",this.Combo00_00_onitemchanged,this);
            this.div_search.form.edt_prdClNm.addEventHandler("onchanged",this.edt_prdClsfNm_onchanged,this);
            this.div_search.form.btn_prdClcdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdClcdMultiPopup_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.btn_chrpsnMultiPopup.addEventHandler("onclick",this.div_search_btn_chrpsnMultiPopup_onclick,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.btn_mnfrMultiPopup.addEventHandler("onclick",this.div_search_btn_mnfrMultiPopup_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_master.addEventHandler("cancolumnchange",this.ds_master_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
