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
            this.set_titletext("R&D 신규상품등록요청목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prpsStatsSprCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProcSt", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_ID\">01</Col><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">요청</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">등록불가</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqDiv", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_ID\"/><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">고객</Col></Row><Row><Col id=\"CLASS_ID\">02</Col><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">협력사</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">자사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_ESCALATION_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NEW_PRD_REQ_NO\"/><Col id=\"RND_REQ_PRD_ID\"/><Col id=\"REQ_PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"CHM_MTL_PRD_YN\"/><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"PRD_CLSF_CHRPSN_ID\"/><Col id=\"PRD_CLSF_CHRPSN_NM\"/><Col id=\"DISP_PRD_SPR_CD\"/><Col id=\"NEW_PRD_REQ_STATS_CD\"/><Col id=\"PRD_PRPS_STATS_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_STR\"/><Col id=\"REQ_DT_FNL_PROC_DT_END\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\">REQ_DT</Col><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"NEW_PRD_REQ_NO_CNT\"/><Col id=\"RND_REQ_PRD_ID_CNT\"/><Col id=\"REQ_PRD_NM_CNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlYnSprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_USR_DEFN_NM_2\"/><Col id=\"LANG_CD\"/><Col id=\"COM_USR_DEFN_NM_1\"/><Col id=\"USE_YN\"/><Col id=\"COM_CLSF_CD\"/><Col id=\"SRT_SO\"/><Col id=\"COM_DTL_CD\"/><Col id=\"COM_USR_DEFN_NM_4\"/><Col id=\"COM_USR_DEFN_NM_3\"/><Col id=\"COM_USR_DEFN_NM_5\"/></Row><Row><Col id=\"COM_DTL_CD_NM\">Y</Col><Col id=\"COM_USR_DEFN_NM_2\"/><Col id=\"LANG_CD\"/><Col id=\"COM_USR_DEFN_NM_1\"/><Col id=\"USE_YN\"/><Col id=\"COM_CLSF_CD\"/><Col id=\"SRT_SO\"/><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_USR_DEFN_NM_4\"/><Col id=\"COM_USR_DEFN_NM_3\"/><Col id=\"COM_USR_DEFN_NM_5\"/></Row><Row><Col id=\"COM_DTL_CD_NM\">N</Col><Col id=\"COM_USR_DEFN_NM_2\"/><Col id=\"LANG_CD\"/><Col id=\"COM_USR_DEFN_NM_1\"/><Col id=\"USE_YN\"/><Col id=\"COM_CLSF_CD\"/><Col id=\"SRT_SO\"/><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_USR_DEFN_NM_4\"/><Col id=\"COM_USR_DEFN_NM_3\"/><Col id=\"COM_USR_DEFN_NM_5\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispPrdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reqSprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROPOSAL_STATUS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">1000</Col><Col id=\"COM_DTL_CD_NM\">1000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">5000</Col><Col id=\"COM_DTL_CD_NM\">5000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">10000</Col><Col id=\"COM_DTL_CD_NM\">10000개씩</Col></Row></Rows>");
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
            obj = new Grid("grd_list","20","274",null,null,"20","114",null,null,null,null,this);
            obj.set_taborder("6");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"요청번호\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"요청구분\"/><Cell col=\"3\" text=\"제안상태\"/><Cell col=\"4\" text=\"상품ID\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"카테고리ID\"/><Cell col=\"7\" text=\"카테고리\"/><Cell col=\"8\" text=\"대표규격\"/><Cell col=\"9\" text=\"제조원ID\"/><Cell col=\"10\" text=\"제조원명\"/><Cell col=\"11\" text=\"주문단위\"/><Cell col=\"12\" text=\"화학물질여부\"/><Cell col=\"13\" text=\"과면세\"/><Cell col=\"14\" text=\"공용전용구분\"/><Cell col=\"15\" text=\"전시상품\"/><Cell col=\"16\" text=\"요청일\"/><Cell col=\"17\" text=\"사업장ID\"/><Cell col=\"18\" text=\"사업장명\"/><Cell col=\"19\" text=\"운영단위ID\"/><Cell col=\"20\" text=\"운영단위명\"/><Cell col=\"21\" text=\"요청자ID\"/><Cell col=\"22\" text=\"요청자명\"/><Cell col=\"23\" text=\"담당자ID\"/><Cell col=\"24\" text=\"담당자명\"/><Cell col=\"25\" text=\"처리일\"/><Cell col=\"26\" text=\"처리자ID\"/><Cell col=\"27\" text=\"처리자명\"/></Band><Band id=\"body\"><Cell text=\"bind:NEW_PRD_REQ_NO\" textDecoration=\"underline\" color=\"#235da8\"/><Cell col=\"1\" text=\"bind:NEW_PRD_REQ_STATS_CD_NM\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:REQ_SBJ_NM\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:PRD_PRPS_STATS_NM\"/><Cell col=\"4\" text=\"bind:RND_REQ_PRD_ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:REQ_PRD_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRD_CLCD\"/><Cell col=\"7\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:NEW_PRD_REQ_PRVL_LIST\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MNFR_NO\"/><Cell col=\"10\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:BASIS_NM\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:CHM_MTL_PRD_YN\"/><Cell col=\"13\" text=\"bind:TX_CLCD_NM\"/><Cell col=\"14\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"15\" text=\"bind:DISP_PRD_SPR_NM\"/><Cell col=\"16\" text=\"bind:REQ_DTM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" text=\"bind:BZPLC_ID\"/><Cell col=\"18\" text=\"bind:BZPLC_NM\"/><Cell col=\"19\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"20\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"21\" text=\"bind:REQ_ID\"/><Cell col=\"22\" text=\"bind:REQ_NM\"/><Cell col=\"23\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"24\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"25\" text=\"bind:PROC_DTM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"26\" text=\"bind:PROC_ID\"/><Cell col=\"27\" text=\"bind:PROC_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"240","100","24","21",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"240","110","24","cbo_rowCont:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"240","100","24","btn_excelDown:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"240","100","24","btn_layoutInit:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"240","82","24","btn_layoutSave:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"240","82","24","btn_create:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","210","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","264","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","grd_list:32",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","796","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","250","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"199","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","124",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","93",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","5","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlPrdYn","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqNoPrdId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle07","475","62","150","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09","0","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboProgressDiv","636","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_pubOnlySprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle12","0","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","129","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","129","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_chmMtlPrdYn","140","67","123","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_chmMtlYnSprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqNoPrdIdEdt","402","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqNoPrdId","140","4","258","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","140","36","123","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","635","37","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","268","36","358","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","570","4","233","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","807","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","834","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","1000","4","262","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","662","37","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnId","1000","36","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","1110","36","152","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnId","1268","36","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboDispPrdSprCd","1000","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_dispPrdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboPrpsStatsSpr","1000","99","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_prpsStatsSprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboReqSpr","1000","130","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_reqSprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dateTitle","140","129","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_dateTitle_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_dateTitle_innerdataset", obj);
            div_search_form_cbo_dateTitle_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REQ_DT</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">FNL_PROC_DT</Col><Col id=\"datacolumn\">최종처리일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_dateTitle_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","129","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","129","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk","140","98","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal1","200","98","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("요청");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal2","255","98","96","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("대체상품제안");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal3","360","98","96","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("중복상품처리");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal4","460","98","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("완료");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal5","510","98","81","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("등록불가");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal6","585","98","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("SSP이관");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal7","660","98","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("SSP반려");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcDispPrdSprCd","860","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_text("전시상품");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle11","860","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_text("제안상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcReqSpr","860","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_text("요청구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnId","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdNmMultiInput","1266","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","-20","157","103.09%","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"167","60","28","64",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"167","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","695","798","10","15",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"167","118","28","btn_init:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal8","730","98","121","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("54");
            obj.set_text("가격정보등록요청");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_duplChk",null,"240","100","24","btn_reg:5",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("중복상품확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D 신규상품등록요청목록");
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

            obj = new BindItem("item19","div_search.form.cboProgressDiv","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.cbo_chmMtlPrdYn","value","ds_search","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.edt_reqNoPrdId","value","ds_search","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_search.form.edt_purgChrpsnId","value","ds_search","PURG_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_search.form.edt_purgChrpsnNm","value","ds_search","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.form.cboDispPrdSprCd","value","ds_search","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_search.form.cboPrpsStatsSpr","value","ds_search","PRD_PRPS_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_search.form.cboReqSpr","value","ds_search","REQ_SBJ_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_search.form.cbo_dateTitle","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_prdId","value","ds_search","RND_REQ_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_prdNm","value","ds_search","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_18.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_18.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_18.xfdl(R&D 신규상품등록처리)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/04/21
        * 변 경         일 자: 2022/09/02
        * 변 경         자 명: 박성진
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
        this.formId                 = this.fn_getFormId(this);

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_empNo               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"EMP_NO"),"");
        this.lv_empNm               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
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
            var strDs    = "ds_pubOnlySprCombo|ds_prpsStatsSprCombo|ds_dateUnitCombo|ds_dispPrdCombo|";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
                strDs   += "ds_reqSprCombo|ds_pageRowCd|ds_rndPrdAuthCombo";
        	var strLgcd  = "PUB_ONLY_SPR_CD|PRD_PRPS_STATS_CD|INQ_PERD_SPR_CD|DISP_PRD_SPR_CD|";             // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
                strLgcd += "REQ_SBJ_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";
        	var strComb  = "T|T|T|T|";                                   									// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
                strComb += "T|X|X";
        	var strOptn  = "";                                      										// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();

        	// 화면 초기화 상태 작업
        	this.fn_setResetBtnCall();

        	this.fn_todoSearch();
        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) {  // 1 : 요청, 7 반려
        			this.div_search.form["chkVal1"].set_value(false);
        			this.div_search.form["chkVal7"].set_value(false);

        			this.div_search.form["chkVal"+oArgs.STATUS].set_value(true);
        		}
        		if (oArgs.ID) this.ds_search.setColumn(0, "PURG_CHRPSN_ID", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_purgChrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {

        			if(oArgs.DTM == 1)this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        			   ,this.div_search.form.cal_reqDtFnlProcDtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        }
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1 && this.ds_rndPrdAuthCombo.getColumn(strRndPrdAuth,"COM_USR_DEFN_NM_1") == "S")
        	{
        		this.lv_btnChkYn = "P";
        	}
        	else
        	{
        		// RND상품권한조회 구매담당자 정/부 체크
        		this.fn_getRndPrdAuthInq();

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.btn_reg.set_visible(false);	  // 신규등록 버튼 숨김
        		this.btn_create.set_visible(false);   // 일괄등록 버튼 숨김
        	}
        };

        /**
         * 화면 최초 초기화 작업 함수
         */
        this.fn_setResetBtnCall = function()
        {

        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
        	this.ds_master.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
            this.ds_search.setColumn(nRow,"PUB_ONLY_SPR_CD",         null);					// 공용전용구분 초기화 Set
        	this.ds_search.setColumn(nRow,"PROPOSAL_STATUS_CD",      null);					// 제안상태 초기화 Set
        	this.ds_search.setColumn(nRow,"CHM_MTL_PRD_YN",          "");					// 화학물질여부 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_UNIT", null);					// 일자 초기화 Set
        	this.ds_search.setColumn(nRow,"DISP_PRD_SPR_CD",         null);					// 전시상품 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_SBJ_CD",              null);					// 요청구분 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR",  "REQ_DT");				// 일자 콤보 초기화(REQ_DT:요청일, FNL_PROC_DT:최종처리일); Set
        	this.ds_search.setColumn(nRow,"ROW_COUNT",               this.lv_pageViewCnt);	// 현재 레코드 초기화셋팅 Set
        	this.ds_search.setColumn(nRow,"PURG_CHRPSN_ID",          this.lv_empNo);		// 로그인사번
            this.ds_search.setColumn(nRow,"PURG_CHRPSN_NM",          this.lv_empNm);		// 로그인명
        	this.div_paging.reload();
        	this.fn_pageCallback();

        	// 처리상태 초기화 Set
        	for(var idx=1; idx<=7; idx++)
        	{
        		this.div_search.form["chkVal"+idx].set_value(false);

        		if(idx == 1 || idx == 7)
        		{
        			this.div_search.form["chkVal"+idx].set_value(true);
        		}
        	}
        	this.div_search_chkVal_onchanged(this.div_search.form["chkVal"+idx],new nexacro.CheckBoxChangedEventInfo());

        	// 일자 날짜 초기화 Setting
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        	                       ,this.div_search.form.cal_reqDtFnlProcDtEnd
        						   ,this.div_search.form.cmb_dtUnit);

        	// Multi검색조회 데이터 존재시 초기화
        	this.fn_deleteMultiData("fn_callBack");
        };

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

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {
        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"NEW_PRD_REQ_NO",this.ds_search.getColumn(0,"NEW_PRD_REQ_NO"));  // 요청번호
        	this.fn_setMultiSearch(this.formId,"RND_REQ_PRD_ID",this.ds_search.getColumn(0,"RND_REQ_PRD_ID"));  // 상품ID
        	this.fn_setMultiSearch(this.formId,"REQ_PRD_NM",    this.ds_search.getColumn(0,"REQ_PRD_NM"));      // 상품명
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",      this.ds_search.getColumn(0,"PRD_CLCD"));        // 카테고리

        	// 멀티입력조건 임시 테이블 저장 서비스 호출
        	if(this.ds_select.getRowCount() > 0)
        	{
        		this.fn_insertMultiData("fn_callBack");
        	}
        	else
        	{
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
        								 ,this.div_search.form.cbo_dateTitle.text))
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
            var strUrl      = "/rd/new-prd-req-lst/select-new-prd-req-lst.do";
            var strInDs     = "ds_search=ds_searchTemp:a";
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
         * 초기화 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_init_onclick = function(obj,e)
        {
        	// 초기화 호출
        	this.fn_setResetBtnCall();
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 신규 등록 버튼 클릭시
         */
        this.btn_reg_onclick = function(obj,e)
        {
        	var params = { newprdReqNo : ""       // 요청번호
        				 , reqGubun    : "20"     // 요청구분 [고객:10,자사:20,협력사:30]
        				 , autoSearch  : "N"      // 팝업 오픈시 자동조회 여부
        				 };

        	this.fn_setCallPopup(params);
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
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

            this.gfn_excelExport(this.grd_list, "R&D 신규상품등록처리","R&D 신규상품등록처리", null, null, "SSP_BO_RD_18_01");
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
        // 팝업 콜백
        this.fn_popupCallback = function(svcID, strVal)
        {
            switch(svcID)
        	{
        		// 요청번호 멀티입력팝업 후처리
        		case "btn_reqNoPrdIdEdt" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_reqNoPrdId.set_value(jsonData.textValue);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		// 상품ID 멀티조회팝업 후처리
        		case "btn_prdIdMultiPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					var prdStr   = "";
        					var prdNm    = "";

        					if(jsonData.length > 0)
        					{
        						 for(var i = 0; i<jsonData.length; i++)
        						 {
        							 var rtnData = JSON.parse(jsonData[i]);
        								 prdStr += rtnData.PRD_ID_VIEW + ",";
        								  prdNm += rtnData.PRD_NM + ",";
        						 }
        						 this.div_search.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        						 //this.div_search.form.edt_prdNm.set_value(prdNm.substring(0, prdNm.length-1));
        					}
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			 break;
        		// 상품ID 멀티입력팝업 후처리
        		case "btn_prdIdMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품명 멀티입력팝업 후처리
        		case "btn_prdNmMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdNm.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 카테고리 조회팝업 후처리
        		case "btn_prdClcdPopup" :
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
        		// 구매담당자 조회팝업 후처리
        		case "btn_purgChrpsnId" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData  = JSON.parse(strVal);
        					this.div_search.form.edt_purgChrpsnId.set_value(jsonData.EMP_NO);
        					this.div_search.form.edt_purgChrpsnNm.set_value(jsonData.OPRTR_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_RD_20" :
        		case "SSP_BO_RD_23" :
        			if (!this.gfn_isNull(strVal)) {
        				if (strVal == "SAVE") {
        					// 저장 후 리스트 재조회
        					this.fn_Ret(true);
        				}
        			}
        			break;
        		case "SSP_BO_RD_25" :
        				if(!this.gfn_isNull(strVal))
        				{
        					if(strVal == "SAVE")
        					{
        						// 저장후 리스트 재조회
        						this.fn_Ret(true);
        					}
        				}else
        				{
        				// 닫기 버튼 처리
        				}

        			break;
        		default :
        			break;
            }
        }

        /**
         * 조회조건 요청번호 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqNoPrdIdEdt_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqNoPrdId };
        	var options = { title  : this.div_search.form.stc_reqNoPrdId.text };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : this.gfn_nvl(this.ds_search.getColumn(0,"PUB_ONLY_SPR_CD"),"")
        	              , coCd         : this.lv_coCd
        				  , mallSprCd    : "20"
        				  };

            var options = { title        : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품ID 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdId };
            var options = { title  : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품명 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdNmMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdNm };
            var options = { title  : this.div_search.form.stc_prdNm.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 조회조건 카테고리 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 카테고리 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
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
        			this.fn_setCallPopup1(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup1 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_CLCD",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD","20");
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
        		this.div_search.form.edt_prdClcd.set_value(this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.div_search.form.edt_prdClNm.set_value(this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	}
        	else
        	{
        		var params  = { mallSprCd : "20"
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId
        					  };

        		var options = { title  : this.div_search.form.stc_prdClcd.text };

        		this.gfn_openPopup("btn_prdClcdPopup", "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 구매담당자 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_purgChrpsnId_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 조회조건 구매담당자 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_purgChrpsnId_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.div_search.form.edt_purgChrpsnNm.set_value("");
        	}
        };

        /**
         * 조회조건 구매담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_purgChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);

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
        		this.ds_input.setColumn(nRow,"EMP_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	 this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",1000);

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
        		this.div_search.form.edt_purgChrpsnId.set_value(this.ds_popupList.getColumn(0,"EMP_NO"));
        		this.div_search.form.edt_purgChrpsnNm.set_value(this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd, empNo : sCodeId };
        		var options = { title : this.div_search.form.stc_purgChrpsnId.text };

        		this.gfn_openPopup("btn_purgChrpsnId", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };

        /**
         * 처리상태 전체 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_allChk_onclick = function(obj,e)
        {
        	var chkAllYn = 0;

        	for(var idx=1; idx<=8; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			chkAllYn++;
        		}
        	}

        	for(var idx=1; idx<=8; idx++)
        	{
        		if(chkAllYn != 8)
        		{
        			this.div_search.form["chkVal"+idx].set_value(true);
        		}
        		else
        		{
        			this.div_search.form["chkVal"+idx].set_value(false);
        		}
        		this.div_search_chkVal_onchanged(this.div_search.form["chkVal"+idx],new nexacro.CheckBoxChangedEventInfo());
        	}
        };

        /**
         * 처리상태 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.div_search_chkVal_onchanged = function(obj,e)
        {
        	// [22 or 33 : 요청, 30 : 대체상품제안, 56 : 중복상품처리, 52 : 완료, 42 : 등록불가, 35 : SSP이관, 34 : SSP반려, 29 : 가격정보등록요청]
        	var chkVal = ["22,33","30","56","52","42","35","34","29"]; //SSP-2294
        	var list   = "";

        	this.ds_search.setColumn(0,"NEW_PRD_REQ_STATS_CD","");
        	this.ds_search.setColumn(0,"NEW_PRD_REQ_ESCALATION_CD","");

        	for(var idx=1; idx<=8; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			if(idx == 6)
        			{
        				this.ds_search.setColumn(0,"NEW_PRD_REQ_ESCALATION_CD",chkVal[idx-1]);
        			} else
        			{
        				if(list != "")
        				{
        					list += ",";
        				}
        				list += chkVal[idx-1];
        			}
        		}
        	}

        	if(list == "")
        	{
        		list = null;
        	}

        	this.ds_search.setColumn(0,"NEW_PRD_REQ_STATS_CD",list);
        };

        /**
         * 메인 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var strNewPrdReqNo = this.ds_master.getColumn(e.row,"NEW_PRD_REQ_NO");
        	var strReqGubun    = this.ds_master.getColumn(e.row,"REQ_SBJ_CD");
        	var autoSearch     = this.ds_master.getColumn(e.row,"NEW_PRD_REQ_STATS_CD");
        		autoSearch     = autoSearch == "22" || autoSearch == "33" ? "N" : "Y";

        	// 요청번호 더블 클릭시 이벤트 발생 처리
        	if(e.cell == obj.getBindCellIndex("body","NEW_PRD_REQ_NO"))
        	{
        		var params = { newprdReqNo : strNewPrdReqNo      // 요청번호
        		             , reqGubun    : strReqGubun    	 // 요청구분 [자사,협력사,고객]
        					 , autoSearch  : autoSearch          // 팝업 오픈시 자동조회 여부
        					 };

        		this.fn_setCallPopup(params);
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
            this.sta_totcnt.set_text(sTotText);
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.newprdReqNo;		// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.reqGubun;			// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = "";						// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = "";						// 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 없을 경우 팝업 안함
        	if(this.gfn_isNull(params.reqGubun))
        	{
        		return false;
        	}

        	// 요청구분 [고객:10,자사:20,협력사:30]
        	switch(params.reqGubun)
        	{
        		case "20" :
        		     sPopId = "SSP_BO_RD_20";
        		     sUrl 	= "RD::SSP_BO_RD_20.xfdl";
        		     break;
        		case "30" :
        		     sPopId = "SSP_BO_RD_23";
        		     sUrl 	= "RD::SSP_BO_RD_23.xfdl";
        		     break;
        		case "10" :
        		     sPopId = "SSP_BO_RD_25";
        		     sUrl 	= "RD::SSP_BO_RD_25.xfdl";
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
         * 엑셀 대용량다운로드
         */
        this.fn_largeFileDown = function(page)
        {
            if(!this.fn_PreRet(page))
            {
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/new-product-regist.do";
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
        	this.fn_setMultiSearch(this.formId, "NEW_PRD_REQ_NO", this.ds_search.getColumn(0, "NEW_PRD_REQ_NO"));  // 요청번호
        	this.fn_setMultiSearch(this.formId, "RND_REQ_PRD_ID", this.ds_search.getColumn(0, "RND_REQ_PRD_ID"));  // 상품 ID
        	this.fn_setMultiSearch(this.formId, "REQ_PRD_NM", this.ds_search.getColumn(0, "REQ_PRD_NM"));          // 상품명
        	this.fn_setMultiSearch(this.formId, "PRD_CLCD", this.ds_search.getColumn(0, "PRD_CLCD"));              // 카테고리 번호

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBackForLargeFileDown");
            } else
            {
                this.fn_largeFileDown(true);
            }
        };

        this.fn_callBackForLargeFileDown = function()
        {
        	this.fn_largeFileDown(true);
        }

        /***********************************************************************************************
        *  엑셀 업로드
        /***********************************************************************************************/

        /**
         * 엑셀 업로드 버튼 클릭 시
         */
        this.Button01_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_RD_18"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };
        /*중복상품확인 버튼*/
        this.btn_duplChk_onclick = function(obj,e)
        {
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( "SSP_BO_RD_18_P01"
        					  , "RD::SSP_BO_RD_18_P01.xfdl"
        					  , ""
        					  , sPopupCallBack
        					  , oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_create.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.div_search.form.btn_reqNoPrdIdEdt.addEventHandler("onclick",this.div_search_btn_reqNoPrdIdEdt_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("oninput",this.div_search_edt_purgChrpsnId_oninput,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("onkeyup",this.div_search_edt_purgChrpsnId_onkeyup,this);
            this.div_search.form.btn_purgChrpsnId.addEventHandler("onclick",this.div_search_btn_purgChrpsnId_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.btn_allChk.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkVal1.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal2.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal3.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal4.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal5.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal6.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal7.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.btn_prdNmMultiInput.addEventHandler("onclick",this.div_search_btn_prdNmMultiInput_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.div_search.form.chkVal8.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.btn_duplChk.addEventHandler("onclick",this.btn_duplChk_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
