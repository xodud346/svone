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
            this.set_titletext("R&D 화학물질정보 변경이력");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,1010);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL53\" type=\"STRING\" size=\"32\"/><Column id=\"MNG_TGT_HRM_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL13\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL33\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_CHG_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PRT_INV_TGT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"WRK_ENV_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"PSM_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"SPCL_MNG_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"EXPS_BSS_SET_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"SPC_HLTH_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FIRST_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_DATA_CHG_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL23\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL43\" type=\"STRING\" size=\"32\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_CHM_MTL_DTLS_HST_PRD_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_TGT_EXST_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_CHG_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PERMIT_MTL2\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlist", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL53\" type=\"STRING\" size=\"32\"/><Column id=\"MNG_TGT_HRM_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL13\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL33\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_CHG_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PRT_INV_TGT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"WRK_ENV_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"PSM_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"SPCL_MNG_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"EXPS_BSS_SET_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"SPC_HLTH_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FIRST_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_DATA_CHG_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL23\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL43\" type=\"STRING\" size=\"32\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_CHM_MTL_DTLS_HST_PRD_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_TGT_EXST_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_CHG_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PERMIT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"HIS_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY1_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"KEY3\" type=\"STRING\" size=\"256\"/><Column id=\"KEY3_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"KEY4\" type=\"STRING\" size=\"256\"/><Column id=\"KEY5\" type=\"STRING\" size=\"256\"/><Column id=\"KEY5_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"KEY6\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"CO_CD\"/><Col id=\"HIS_TABLE\"/><Col id=\"KEY1\"/><Col id=\"KEY2\"/><Col id=\"KEY3\"/><Col id=\"KEY4\"/><Col id=\"KEY5\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"TOTAL_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">100</Col><Col id=\"COM_DTL_CD_NM\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dsearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"PRD_ID\"/><Col id=\"UPD_DTM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_BSS\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","589","960","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","940","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","10","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화학물질정보 변경이력");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00","0","Static60_00:77","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","189",null,"441","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("cell");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/><Column size=\"80\" band=\"right\"/><Column size=\"130\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"변경구분\"/><Cell col=\"2\" text=\"신규화학물질\" background=\"#b2ffff\"/><Cell col=\"3\" text=\"등록대상기준&#13;&#10;화학물질\" background=\"#b2ffff\"/><Cell col=\"4\" text=\"유독물질\" background=\"#b2ffff\"/><Cell col=\"5\" text=\"허가물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#b2ffff\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"제한물질\" background=\"#b2ffff\"/><Cell col=\"7\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#b2ffff\" displaytype=\"decoratetext\"/><Cell col=\"8\" text=\"사고대비물질\" background=\"#b2ffff\"/><Cell col=\"9\" text=\"배출량조사대&#13;&#10;상물질\" background=\"#b2ffff\"/><Cell col=\"10\" text=\"작업환경측정&#13;&#10;대상유해인자\" background=\"#ffc6cf\"/><Cell col=\"11\" text=\"특수건강진단&#13;&#10;대상유해인자\" background=\"#ffc6cf\"/><Cell col=\"12\" text=\"노출기준&#13;&#10;설정물질\" background=\"#ffc6cf\"/><Cell col=\"13\" text=\"관리대상&#13;&#10;유해물질\" background=\"#ffc6cf\"/><Cell col=\"14\" text=\"허가물질\" background=\"#ffc6cf\"/><Cell col=\"15\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffc6cf\" displaytype=\"decoratetext\"/><Cell col=\"16\" text=\"특별관리&#13;&#10;대상물질\" background=\"#ffc6cf\"/><Cell col=\"17\" text=\"PSM &#13;&#10;대상물질\" background=\"#ffc6cf\"/><Cell col=\"18\" text=\"마약 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/><Cell col=\"19\" text=\"향정신성의약품  &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/><Cell col=\"20\" text=\"화학적합성품\" background=\"#ffe3e0\"/><Cell col=\"21\" text=\"마약류&#13;&#10;원료물질\" background=\"#ffe3e0\"/><Cell col=\"22\" text=\"임시마약류 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/><Cell col=\"23\" text=\"변경자ID\"/><Cell col=\"24\" text=\"변경자\"/><Cell col=\"25\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\"/><Cell col=\"1\" text=\"bind:DATA_CHG_TP_NM\"/><Cell col=\"2\" text=\"bind:NEW_CHM_MTL\" cssclass=\"expr:NEW_CHM_MTL== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:REG_TGT_EXST_CHM_MTL\" cssclass=\"expr:REG_TGT_EXST_CHM_MTL== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:TOXIC_MTL1\" cssclass=\"expr:TOXIC_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PERMIT_MTL1\" cssclass=\"expr:PERMIT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:LMT_MTL1\" cssclass=\"expr:LMT_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:PHBT_MTL1\" cssclass=\"expr:PHBT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:ACCD_PSB_MTL1\" cssclass=\"expr:ACCD_PSB_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:PRT_INV_TGT_MTL1\" cssclass=\"expr:PRT_INV_TGT_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:WRK_ENV_TGT_HRM_ARG2\" cssclass=\"expr:WRK_ENV_TGT_HRM_ARG2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:SPC_HLTH_TGT_HRM_ARG2\" cssclass=\"expr:SPC_HLTH_TGT_HRM_ARG2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:EXPS_BSS_SET_MTL2\" cssclass=\"expr:EXPS_BSS_SET_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:MNG_TGT_HRM_MTL2\" cssclass=\"expr:MNG_TGT_HRM_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:PERMIT_MTL2\" cssclass=\"expr:PERMIT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:PHBT_MTL2\" cssclass=\"expr:PHBT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:SPCL_MNG_TGT_MTL2\" cssclass=\"expr:SPCL_MNG_TGT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:PSM_TGT_MTL2\" cssclass=\"expr:PSM_TGT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:TOXIC_MTL13\" cssclass=\"expr:TOXIC_MTL13 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:TOXIC_MTL23\" cssclass=\"expr:TOXIC_MTL23 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:TOXIC_MTL33\" cssclass=\"expr:TOXIC_MTL33== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:TOXIC_MTL43\" cssclass=\"expr:TOXIC_MTL43== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:TOXIC_MTL53\" cssclass=\"expr:TOXIC_MTL53 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:UPDPSN_ID\"/><Cell col=\"24\" text=\"bind:UPDPSN_NM\"/><Cell col=\"25\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","179","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00","0","679","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","700","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("CAS No.별 변경이력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","722","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-1","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlist","10","732",null,"206","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_dlist");
            obj.set_selecttype("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"변경구분\"/><Cell col=\"1\" text=\"켐토피아&#13;&#10;변경일\"/><Cell col=\"2\" text=\"CAS No.\"/><Cell col=\"3\" text=\"함량(From)\"/><Cell col=\"4\" text=\"함량(To)\"/><Cell col=\"5\" text=\"신규화학물질\" background=\"#b2ffff\"/><Cell col=\"6\" text=\"등록대상기&#13;&#10;준화학물질\" background=\"#b2ffff\"/><Cell col=\"7\" text=\"유독물질\" background=\"#b2ffff\"/><Cell col=\"8\" text=\"허가물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#b2ffff\" displaytype=\"decoratetext\"/><Cell col=\"9\" text=\"제한물질\" background=\"#b2ffff\"/><Cell col=\"10\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#b2ffff\" displaytype=\"decoratetext\"/><Cell col=\"11\" text=\"사고대비물질\" background=\"#b2ffff\"/><Cell col=\"12\" text=\"배출량조사&#13;&#10;대상물질\" background=\"#b2ffff\"/><Cell col=\"13\" text=\"작업환경측정&#13;&#10;대상유해인자\" background=\"#ffc6cf\"/><Cell col=\"14\" text=\"특수건강진단&#13;&#10;대상유해인자\" background=\"#ffc6cf\"/><Cell col=\"15\" text=\"노출기준&#13;&#10;설정물질\" background=\"#ffc6cf\"/><Cell col=\"16\" text=\"관리대상&#13;&#10;유해물질\" background=\"#ffc6cf\"/><Cell col=\"17\" text=\"허가물질\" background=\"#ffc6cf\"/><Cell col=\"18\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffc6cf\" displaytype=\"decoratetext\"/><Cell col=\"19\" text=\"특별관리&#13;&#10;대상물질\" background=\"#ffc6cf\"/><Cell col=\"20\" text=\"PSM&#13;&#10;대상물질\" background=\"#ffc6cf\"/><Cell col=\"21\" text=\"마약 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/><Cell col=\"22\" text=\"향정신성의약품 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/><Cell col=\"23\" text=\"화학적합성품\" background=\"#ffe3e0\"/><Cell col=\"24\" text=\"마약류&#13;&#10;원료물질\" background=\"#ffe3e0\"/><Cell col=\"25\" text=\"임시마약류 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" background=\"#ffe3e0\" displaytype=\"decoratetext\"/></Band><Band id=\"body\"><Cell text=\"bind:DATA_CHG_TP_NM\"/><Cell col=\"1\" text=\"bind:UPD_DTM\"/><Cell col=\"2\" text=\"bind:CAS_NO\"/><Cell col=\"3\" text=\"bind:MIN_CONTENT\"/><Cell col=\"4\" text=\"bind:MAX_CONTENT\"/><Cell col=\"5\" text=\"bind:NEW_CHM_MTL\" cssclass=\"expr:NEW_CHM_MTL== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:REG_TGT_EXST_CHM_MTL\" cssclass=\"expr:REG_TGT_EXST_CHM_MTL== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:TOXIC_MTL1\" cssclass=\"expr:TOXIC_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:PERMIT_MTL1\" cssclass=\"expr:PERMIT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:LMT_MTL1\" cssclass=\"expr:LMT_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:PHBT_MTL1\" cssclass=\"expr:PHBT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:ACCD_PSB_MTL1\" cssclass=\"expr:ACCD_PSB_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PRT_INV_TGT_MTL1\" cssclass=\"expr:PRT_INV_TGT_MTL1== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:WRK_ENV_TGT_HRM_ARG2\" cssclass=\"expr:WRK_ENV_TGT_HRM_ARG2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:SPC_HLTH_TGT_HRM_ARG2\" cssclass=\"expr:SPC_HLTH_TGT_HRM_ARG2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:EXPS_BSS_SET_MTL2\" cssclass=\"expr:EXPS_BSS_SET_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:MNG_TGT_HRM_MTL2\" cssclass=\"expr:MNG_TGT_HRM_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:PERMIT_MTL2\" cssclass=\"expr:PERMIT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:PHBT_MTL2\" cssclass=\"expr:PHBT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:SPCL_MNG_TGT_MTL2\" cssclass=\"expr:SPCL_MNG_TGT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:PSM_TGT_MTL2\" cssclass=\"expr:PSM_TGT_MTL2== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:TOXIC_MTL13\" cssclass=\"expr:TOXIC_MTL13 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:TOXIC_MTL23\" cssclass=\"expr:TOXIC_MTL23 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:TOXIC_MTL33\" cssclass=\"expr:TOXIC_MTL33== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:TOXIC_MTL43\" cssclass=\"expr:TOXIC_MTL43== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:TOXIC_MTL53\" cssclass=\"expr:TOXIC_MTL53 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","69",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","5","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle04","0","31","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("변경일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","810","0","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","412","0","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","920","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1028","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1155","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","1182","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","782","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","755","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","628","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","522","5","101","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","110","5","120","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","235","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","362","5","22","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","btn_prdIdMultiPopup:0","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","110","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","260","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","244","36","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","394","36","117","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00","521","31","101","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","631","35","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chrpsn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsn_innerdataset", obj);
            div_search_form_cmb_chrpsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PRD_CLSF_CHRPSN_ID</Col><Col id=\"datacolumn\">구매담당자</Col></Row><Row><Col id=\"codecolumn\">UPDPSN_ID</Col><Col id=\"datacolumn\">변경자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsn_innerdataset);
            obj.set_text("구매담당자");
            obj.set_value("PRD_CLSF_CHRPSN_ID");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","766","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","871","35","184","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","1060","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_01","0","49","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("변경이력관리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","42","644",null,"30","42",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","11","164","200","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"150","100","28","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("true");
            obj.set_text("100");
            obj.set_value("100");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"35","60","28","73",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"35","60","28","9",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"150","110","28","115",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,1260,this,function(p){});
            obj.set_description("R&D 화학물질정보 변경이력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.chk_newPrdProcStats4","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.chk_newPrdProcStats5","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.chk_newPrdProcStats6","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.chk_newPrdProcStats7","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.chk_newPrdProcStats8","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.chk_newPrdProcStats9","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_prdId","value","ds_search","KEY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_prdNm","value","ds_search","KEY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_mnfrCd","value","ds_search","KEY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_mnfrNm","value","ds_search","KEY4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_prdClcd","value","ds_search","KEY5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_prdClNm","value","ds_search","KEY6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cmb_chrpsnStats","value","ds_search","PRD_CLSF_CHRPSN_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmb_chrpsn","value","ds_search","PSN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_chrpsnId","value","ds_search","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.edt_chrpsnNm","value","ds_search","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_list");
            this._addPreloadList("data","","ds_dlist");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_61.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_61.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_56.xfdl(공통 히스트로 팝업관리)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2018/09/17
        * 변 경     	일 자:
        * 변 경			자 명:
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
        this.lv_pageViewCnt 		= 100;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.mallSprCd              = "20";
        this.formId                 = "SSP_BO_RD_61";           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvGetDate              = "";

        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sOptinoArg3;
        this.sOptinoArg4;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.sParamArg5;
        this.sParamArg6;
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
        	//사용자 초기화 함수
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
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp03))
        	{
        		 this.sOptinoArg3 = this.getOwnerFrame().pv_sOp03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp04))
        	{
        		 this.sOptinoArg4 = this.getOwnerFrame().pv_sOp04;
        	}
        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal06))
        	{
        		 this.sParamArg6 = this.getOwnerFrame().pv_sVal06;
        	}


        	var strDs   = "ds_pageRowCd";		    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "PAGE_HST_CNT";         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);

        };

        /**
         *  초기화셋팅
         */
        this.fn_setInitForm = function()
        {
        	this.fn_setControlView(this.sOptinoArg3);                           // 화면 상세냐(S) / 리스트냐 컨포넌트 제어(M)
        	this.lvGetDate = this.fn_getSvrDate();                              // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.
        	this.fn_setResetBtnCall();

        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.ds_list.clearData();
        	this.ds_dlist.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.lv_pageViewCnt = this.cbo_rowCont.text;

        	this.ds_search.setColumn(nRow, "GRD_FORMAT", this.sOptinoArg1);      // 그리드 화면 포멧
        	this.ds_search.setColumn(nRow, "HIS_TABLE" , this.sOptinoArg2);      // 로그 테이블 이름
        	this.ds_search.setColumn(nRow, "FORM_DIV"  , this.sOptinoArg3);      // 상세화면에서 조회:S/메인화면 조회:M
        	this.ds_search.setColumn(nRow, "KEY1"      , this.sParamArg1);       // 상품ID
        	this.ds_search.setColumn(nRow, "KEY2"      , this.sParamArg2);       // 상품명
        	this.ds_search.setColumn(nRow, "KEY3"      , this.sParamArg3);       // 제조원ID
        	this.ds_search.setColumn(nRow, "KEY4"      , this.sParamArg4);       // 제조원명
        	this.ds_search.setColumn(nRow, "KEY5"      , this.sParamArg5);       // 카테고리 ID
        	this.ds_search.setColumn(nRow, "KEY6"      , this.sParamArg6);       // 카테고리명
        	this.ds_search.setColumn(nRow,"PSN_TYPE"   , "PRD_CLSF_CHRPSN_ID");  // 담당자 구분(구매담당자:PRD_CLSF_CHRPSN_ID  /변경담당자:UPDPSN_ID)
        	this.ds_search.setColumn(nRow,"START_NUM"  , 0);
        	this.ds_search.setColumn(nRow,"SORT_COLUMN", "");
        	this.ds_search.setColumn(nRow,"SORT_TYPE"  , "");
        	this.ds_search.setColumn(nRow,"CO_CD"      , this.lv_coCd);
        	this.ds_search.setColumn(nRow,"MALL_SPR_CD", this.mallSprCd);         // 몰구분
        	this.ds_search.setColumn(nRow,"ROW_COUNT"  , this.lv_pageViewCnt);    // 현재 레코드 페이즈크기

        	// 일자 날짜 초기화 Setting
            this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
                                   ,this.div_search.form.cal_reqDtFnlProcDtEnd
                                   ,this.div_search.form.cmb_dtUnit);

            // Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");

        	if(this.sOptinoArg4 == "Y")
        	{
        		this.div_search_btn_search_onclick(this.btn_search,new nexacro.ClickEventInfo());
        	}
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
        					this.fn_setInitForm();
        				break;
        			case "Ret":
        					this.postRet();
        				break;
        			case "DRet":
        					this.postDRet();
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


        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 상품ID 멀티조회팝업 후처리
        		case "SSP_BO_PP_16" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData 	= JSON.parse(strVal);
        					var prdId 		= new Array();
        					var prdNm 		= new Array();
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						prdId.push(jsonSubData.PRD_ID_VIEW.replace(/,\s*$/, ""));
        						prdNm.push(jsonSubData.PRD_NM.replace(/,\s*$/, ""));
        					}
        					this.div_search.form.edt_prdId.set_value(prdId);
        					this.div_search.form.edt_prdNm.set_value(prdNm);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        		    break;
        		// 상품ID 멀티입력팝업 후처리
        	    case "SSP_BO_PP_13_01" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
                // 카테고리 조회팝업 후처리
        		case "SSP_BO_PP_07" :
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
         		case "SSP_BO_PP_13_02" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdClcd.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
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
        		case "SSP_BO_PP_13_03" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_mnfrCd.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 담당자 조회팝업 후처리
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
        	05. 메인 조회 함수 선언
        ***********************************************************************/
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	// 멀티입력 검색조건 Set
            this.fn_setMultiSearch(this.formId,"KEY1",	this.ds_search.getColumn(0,"KEY1"));   // 상품ID
        	this.fn_setMultiSearch(this.formId,"KEY5",	this.ds_search.getColumn(0,"KEY5"));   // 카테고리
        	this.fn_setMultiSearch(this.formId,"KEY3",	this.ds_search.getColumn(0,"KEY3"));   // 제조원

        	 // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");

        	} else
            {
                this.fn_Ret(true);
            }
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.preRet = function(page)
        {
        	// 일자 체크
        	if(!this.fn_getDefaultDateChk(this.div_search.form.cal_reqDtFnlProcDtStr
        	                             ,this.div_search.form.cal_reqDtFnlProcDtEnd
        								 ,this.div_search.form.stcTitle04.text))
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
                this.ds_search.setColumn(0,"TOTAL_COUNT",  this.totalCount);

        		// page 처리시 기존 조회조건 검색을 위한 데이터 카피
        		this.ds_searchTemp.copyData(this.ds_search);
            }
        	// 조회조건 셋팅
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_Ret = function(page)
        {
        	if(!this.preRet(page))
        	{
        		return false;
        	}
        	var strSvc 		= "Ret";
        	var strUrl 		= "/rd/rd-product-com-history/select-rd-product-com-history.do";
        	var strInDs  	= "ds_search=ds_searchTemp";
        	var strOutDs 	= "ds_list=ds_list";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.postRet = function()
        {
        	this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };
        /**********************************************************************
        	05-1. 상세 조회 함수 선언
        ***********************************************************************/
        this.ds_list_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.preDRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_dsearch.clearData();
        	var nRow = this.ds_dsearch.addRow();
        	this.ds_dsearch.setColumn(nRow,"CO_CD"      , this.lv_coCd);        // 회사코드
        	this.ds_dsearch.setColumn(nRow,"MALL_SPR_CD", this.mallSprCd);      // 몰구분
        	this.ds_dsearch.setColumn(nRow,"PRD_ID",      this.ds_list.getColumn(this.ds_list.rowposition,"PRD_ID"));   // 상품아이디(메인쪽상품아이디)
        	this.ds_dsearch.setColumn(nRow,"UPD_DTM",     this.ds_list.getColumn(this.ds_list.rowposition,"UPD_DTM"));  // 등록일자
        	return true;
        };

        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_DRet = function()
        {
        	if(!this.preDRet())
        	{
        		return false;
        	}
        	var strSvc 		= "DRet";
        	var strUrl 		= "/rd/rd-product-com-history/select-rd-product-com-dtl-history.do";
        	var strInDs  	= "ds_dsearch=ds_dsearch";
        	var strOutDs 	= "ds_dlist=ds_dlist";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.postDRet = function()
        {
        	//trace(this.ds_dlist.saveXML());
        };
        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };
        /**********************************************************************
        	07.Get, Set Method
        ***********************************************************************/
        this.fn_setControlView = function (chFlage)
        {
        	if(chFlage == 'S')
        	{
        		this.div_search.form.edt_prdId.set_readonly(true);
        		this.div_search.form.btn_prdIdMultiPopup.set_enable(false);
        		this.div_search.form.btn_prdIdMultiInput.set_enable(false);
        		this.div_search.form.edt_prdClcd.set_readonly(true);
        		this.div_search.form.btn_prdClcdPopup.set_enable(false);
        		this.div_search.form.btn_prdClcdMultiInput.set_enable(false);
        		this.div_search.form.edt_mnfrCd.set_readonly(true);
        		this.div_search.form.btn_mnfrPopup.set_enable(false);
        		this.div_search.form.btn_mnfrMultiInput.set_enable(false);
        		this.div_search.form.cmb_chrpsn.set_readonly(true);
        		this.div_search.form.edt_chrpsnId.set_readonly(true);
        		this.div_search.form.btn_chrpsnPopup.set_enable(false);
        	}else
        	{
        		this.div_search.form.edt_prdId.set_readonly(false);
        		this.div_search.form.btn_prdIdMultiPopup.set_enable(true);
        		this.div_search.form.btn_prdIdMultiInput.set_enable(true);
        		this.div_search.form.edt_prdClcd.set_readonly(false);
        		this.div_search.form.btn_prdClcdPopup.set_enable(true);
        		this.div_search.form.btn_prdClcdMultiInput.set_enable(true);
        		this.div_search.form.edt_mnfrCd.set_readonly(false);
        		this.div_search.form.btn_mnfrPopup.set_enable(true);
        		this.div_search.form.btn_mnfrMultiInput.set_enable(true);
        		this.div_search.form.cmb_chrpsn.set_readonly(false);
        		this.div_search.form.edt_chrpsnId.set_readonly(false);
        		this.div_search.form.btn_chrpsnPopup.set_enable(true);
        	}
        };

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
        /**********************************************************************
        	08.기타 Control Event
        ***********************************************************************/

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
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
            if(this.ds_list.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information"); // 출력할 엑셀데이타가 없습니다.!
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","Excel","question" ); // Excel를 출력하시겠습니까?

            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grd_list, "R&D 화학물질정보관리","R&D 화학물질정보관리");
        };
        /***********************************************************************************************
        *  상품 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "P"
        	              , coCd         : this.lv_coCd
        				  , mallSprCd    : this.mallSprCd
        				  , prdId        : this.div_search.form.edt_prdId.value };
            var options = { title        : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup( "SSP_BO_PP_16"
        	                  , "PR_POP::SSP_BO_PP_16.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /**
         * 조회조건 상품ID 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdId };
            var options = { title  : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup( "SSP_BO_PP_13_01"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  상품 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  카테고리 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup01(sCodeId);

        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdClNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_prdClcd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"KEY5",	this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"KEY6",	this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	} else
        	{
        		var params  = { mallSprCd : this.mallSprCd
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId};
        		var options = { title     : this.div_search.form.edt_prdClcd.text };

        		this.gfn_openPopup( "SSP_BO_PP_07"
        						  , "PR_POP::SSP_BO_PP_07.xfdl"
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

            this.gfn_openPopup( "SSP_BO_PP_13_02"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  카테고리 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  제조원 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup02(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_mnfrCd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
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
        		this.ds_input.setColumn(nRow,"MNFR_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-manufacturer-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                               // 물리적 생성 ds_popupList
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"KEY3",	this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"KEY4",	this.ds_popupList.getColumn(0,"MNFR_NM"));
        	} else
        	{
        		var params  = { mnfrNo : sCodeId
        					  , coCd   : this.lv_coCd};
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
        	this.gfn_openPopup( "SSP_BO_PP_13_03"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  담당자 시작
        /***********************************************************************************************/
        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnPopup_onclick = function(obj,e)
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	} else
        	{

        		var params  = { empNo : sCodeId
        		              , coCd  : this.lv_coCd };
        		var options = { title : this.div_search.form.cmb_chrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        						  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };
        /***********************************************************************************************
        *  담당자 종료
        /***********************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_61.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
