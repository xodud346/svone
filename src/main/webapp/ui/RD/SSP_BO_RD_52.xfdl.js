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
            this.set_titletext("구매정보 일괄변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"CPRTCP_ID\"/><Col id=\"ELC_CONT_APPR_STATS_CD\"/><Col id=\"CHRPSN_GUBUN\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRPS_SPR_CD\"/><Col id=\"CHRPSN_ID\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/><Col id=\"CPRTCP_NM\"/><Col id=\"CHRPSN_NM\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"GUBUN\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRPS_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PRPS_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ELC_CONT_APPR_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TB_RD_REQ_CPRTCP_CONSN_STATS_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PI_EXCEPTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"CPRTCP_ID\"/><Col id=\"ELC_CONT_APPR_STATS_CD\"/><Col id=\"CHRPSN_GUBUN\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRPS_SPR_CD\"/><Col id=\"CHRPSN_ID\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/><Col id=\"CPRTCP_NM\"/><Col id=\"CHRPSN_NM\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prpsSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT1\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT1\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT2\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT2\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT3\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT3\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT4\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT4\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT5\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_excel","50","272","748","247",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_grdExcel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"대표규격\"/><Cell col=\"3\" text=\"제조원\"/><Cell col=\"4\" text=\"주문단위\"/><Cell col=\"5\" text=\"구매담당자\"/><Cell col=\"6\" text=\"구매담당자명\"/><Cell col=\"7\" text=\"협력사ID\"/><Cell col=\"8\" text=\"협력사명\"/><Cell col=\"9\" text=\"공급가능여부\"/><Cell col=\"10\" text=\"최소발주수량\"/><Cell col=\"11\" text=\"매입가\"/><Cell col=\"12\" text=\"배송비\"/><Cell col=\"13\" text=\"배송L/T\"/><Cell col=\"14\" text=\"유효기간(From)\"/><Cell col=\"15\" text=\"유효기간(To)\"/><Cell col=\"16\" text=\"KC인증여부\"/><Cell col=\"17\" text=\"기간할인금액\"/><Cell col=\"18\" text=\"기간할인기간(From)\"/><Cell col=\"19\" text=\"기간할인기간(To)\"/><Cell col=\"20\" text=\"물량할인금액\"/><Cell col=\"21\" text=\"물량할인 수량(From)\"/><Cell col=\"22\" text=\"물량할인금액2\"/><Cell col=\"23\" text=\"물량할인 수량(From)2\"/><Cell col=\"24\" text=\"물량할인금액3\"/><Cell col=\"25\" text=\"물량할인 수량(From)3\"/><Cell col=\"26\" text=\"물량할인금액4\"/><Cell col=\"27\" text=\"물량할인 수량(From)4\"/><Cell col=\"28\" text=\"물량할인금액5\"/><Cell col=\"29\" text=\"물량할인 수량(From)5\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:PRD_NM\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:ATTR_VAL_LIST\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:MNFR_NM\"/><Cell col=\"4\" text=\"bind:SELL_UNIT\"/><Cell col=\"5\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"6\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"7\" text=\"bind:CPRTCP_ID\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"9\" text=\"bind:SPL_PSB_YN\"/><Cell col=\"10\" textAlign=\"right\" displaytype=\"number\" text=\"bind:MIN_ODR_QTY\"/><Cell col=\"11\" textAlign=\"right\" displaytype=\"number\" text=\"bind:PRD_PRC\"/><Cell col=\"12\" displaytype=\"number\" textAlign=\"right\" text=\"bind:DLV_AMT\"/><Cell col=\"13\" text=\"bind:DLV_LT\"/><Cell col=\"14\" text=\"bind:VLD_STR_DT\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"15\" text=\"bind:VLD_END_DT\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"16\" textAlign=\"left\" text=\"bind:KC_CERT_YN\"/><Cell col=\"17\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RND_DC_QTY\"/><Cell col=\"18\" text=\"bind:RND_DC_VLD_STR_DTM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"19\" text=\"bind:RND_DC_VLD_END_DTM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"20\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY_DC_AMT1\"/><Cell col=\"21\" displaytype=\"number\" textAlign=\"right\" text=\"bind:STR_QTY_CNT1\"/><Cell col=\"22\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY_DC_AMT2\"/><Cell col=\"23\" displaytype=\"number\" textAlign=\"right\" text=\"bind:STR_QTY_CNT2\"/><Cell col=\"24\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY_DC_AMT3\"/><Cell col=\"25\" displaytype=\"number\" textAlign=\"right\" text=\"bind:STR_QTY_CNT3\"/><Cell col=\"26\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY_DC_AMT4\"/><Cell col=\"27\" displaytype=\"number\" textAlign=\"right\" text=\"bind:STR_QTY_CNT4\"/><Cell col=\"28\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY_DC_AMT5\"/><Cell col=\"29\" displaytype=\"number\" textAlign=\"right\" text=\"bind:STR_QTY_CNT5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","116","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","206","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","796","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","150","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
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

            obj = new Combo("cbo_rowCont",null,"180","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"180","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"180","101","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("stc_totcnt","20","191","370","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","216",null,null,"20","114",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("col");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"합의번호\"/><Cell col=\"2\" text=\"협력사ID\"/><Cell col=\"3\" text=\"협력사명\"/><Cell col=\"4\" text=\"제안구분\"/><Cell col=\"5\" text=\"처리상태\"/><Cell col=\"6\" text=\"요청주체\"/><Cell col=\"7\" text=\"제안파일\"/><Cell col=\"8\" text=\"구매담당자ID\"/><Cell col=\"9\" text=\"구매담당자명\"/><Cell col=\"10\" text=\"요청일\"/><Cell col=\"11\" text=\"처리일\"/><Cell col=\"12\" text=\"처리자ID\"/><Cell col=\"13\" text=\"처리자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"expr:ELC_CONT_APPR_STATS_CD == &apos;22&apos; ? &apos;checkbox&apos; : &apos;none&apos;\"/><Cell col=\"1\" text=\"bind:CUST_PREQNO\"/><Cell col=\"2\" text=\"bind:CPRTCP_ID\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:CPRTCP_KOR_NM\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRPS_SPR_NM\"/><Cell col=\"5\" text=\"bind:ELC_CONT_APPR_STATS_NM\"/><Cell col=\"6\" text=\"bind:REQ_SBJ_NM\"/><Cell col=\"7\" text=\"bind:PRPS_FILE_NM\" textAlign=\"left\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"8\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"9\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"10\" text=\"bind:REG_DTM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:UPD_DTM\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\"/><Cell col=\"13\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","grd_list:31",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","21",null,"127","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_consnNo","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("합의번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_01","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_procStats","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_dateType","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","745","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","745","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prpsSpr","450","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("제안구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_procStats","stc_procStats:10","35","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_procStats_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_procStats_innerdataset", obj);
            div_search_form_cmb_procStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">등록불가</Col></Row><Row><Col id=\"codecolumn\">52</Col><Col id=\"datacolumn\">처리완료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_procStats_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_consnNo","stc_consnNo:10","4","280","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_consnNoMultiInput","edt_consnNo:5","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","stc_cprtcp:10","4","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","edt_cprtcpCd:5","4","178","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","edt_cprtcpNm:5","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","stc_chrpsn:10","66","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chrpsn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsn_innerdataset", obj);
            div_search_form_cmb_chrpsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">구매담당자</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">처리자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsn_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prpsSpr","stc_prpsSpr:10","4","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_prpsSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("미선택");
            obj.set_value("10");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dateTitle","140","66","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cbo_dateTitle_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_dateTitle_innerdataset", obj);
            div_search_form_cbo_dateTitle_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">처리일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_dateTitle_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","cbo_dateTitle:5","66","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","cal_reqDtFnlProcDtStr:5","66","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","Static59:5","66","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","cal_reqDtFnlProcDtEnd:5","66","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","cmb_chrpsn:5","66","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","edt_chrpsnId:5","66","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","edt_chrpsnNm:5","66","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"103","61","24","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"103","60","24","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_reqSbj","590","35","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_reqSbj_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_reqSbj_innerdataset", obj);
            div_search_form_cmb_reqSbj_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">자사</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">협력사</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_reqSbj_innerdataset);
            obj.set_text("미선택");
            obj.set_value("10");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_req_sbj","450","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("요청주체");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn00","745","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"180","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reqCnc",null,"180","82","24","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("요청취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgRjct",null,"180","82","24","btn_reqCnc:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일괄반려");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgConsn",null,"180","82","24","btn_pkgRjct:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("일괄합의");
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

            obj = new BindItem("item1","div_search.form.cbo_dateTitle","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_consnNo","value","ds_search","CUST_PREQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_cprtcpCd","value","ds_search","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_cprtcpNm","value","ds_search","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_prpsSpr","value","ds_search","PRPS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_procStats","value","ds_search","ELC_CONT_APPR_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cmb_chrpsn","value","ds_search","CHRPSN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_chrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_chrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cmb_reqSbj","value","ds_search","REQ_SBJ_CD");
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
        this.addIncludeScript("SSP_BO_RD_52.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_52.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_52.xfdl(구매정보 일괄변경 관리)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/06/02
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
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼 아이디를 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_empNo               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"EMP_NO"),"");
        this.lv_empNm               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");
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
            var strDs    = "ds_dateUnitCombo|ds_pageRowCd|ds_prpsSprCdCombo|ds_rndPrdAuthCombo";         // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PAGE_ROW_CD|PRPS_SPR_CD|CHRPSN_TEAM_SPR_CD";                 // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X";					                                                 // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                          					                             // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드, 콤보 옵션, svcId);
            this.fn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };


        this.fn_PostformInit = function()
        {
            this.lvGetDate = this.fn_getSvrDate();	// 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.
        	this.ds_prpsSprCdCombo.filter("COM_DTL_CD != '30' && COM_DTL_CD != '40'")

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
           	this.fn_setResetBtnCall();
        	this.fn_todoSearch();
        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.ID) this.ds_search.setColumn(0, "CHRPSN_ID", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_chrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {

        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        			   ,this.div_search.form.cal_reqDtFnlProcDtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        };
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
        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq();

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자는 수정만 가능 등록은 불가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.btn_pkgConsn.set_visible(false);	// 일괄합의
        		this.btn_pkgRjct.set_visible(false);	// 일괄반려
        		this.btn_reqCnc.set_visible(false);		// 요청취소
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
            this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR","REG_DTM");           // 일자 초기화
        	this.ds_search.setColumn(nRow,"ELC_CONT_APPR_STATS_CD","22");                // 처리상태 초기화
        	this.ds_search.setColumn(nRow,"CHRPSN_GUBUN",          "10");                // 담당자 구분 초기화
        	this.ds_search.setColumn(nRow,"PRPS_SPR_CD",           null);                // 제안구분 초기화
        	this.ds_search.setColumn(nRow,"REQ_SBJ_CD",            "30");				 // 요청주체 초기화
        	this.ds_search.setColumn(nRow,"ROW_COUNT",             this.lv_pageViewCnt); // 현재 레코드 초기화셋팅
            this.ds_search.setColumn(nRow,"CHRPSN_ID",             this.lv_empNo);       // 로그인사번
            this.ds_search.setColumn(nRow,"CHRPSN_NM",             this.lv_empNm);       // 로그인명
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
        			case "Save":
        				var responseMessage = this.ds_master.getColumn(0, "PI_EXCEPTION_CODE");
        				if (responseMessage == "ERRR000490") {
        					var responce = this.fn_confirm(responseMessage, "일괄 처리", "PI_SYSTEM", "question");	// PI 시스템의 응답이 없습니다. 재시도하시겠습니까?
        					if (responce) {
        						var nRow = this.ds_input.addRow();
        						this.ds_input.setColumn(nRow,"CO_CD", this.ds_input.getColumn(0, "CO_CD"));
        						this.ds_input.setColumn(nRow,"CONT_NO", this.ds_input.getColumn(0, "CONT_NO"));
        						this.ds_input.setColumn(nRow,"CONT_CHG_DGRCNT", this.ds_input.getColumn(0, "CONT_CHG_DGRCNT"));
        						this.ds_input.setColumn(nRow,"CPRTCP_ID", this.ds_input.getColumn(0, "CPRTCP_ID"));
        						this.ds_input.setColumn(nRow,"ELC_CONT_APPR_STATS_CD", this.ds_input.getColumn(0, "ELC_CONT_APPR_STATS_CD"));

        						this.fn_Save();
        					} else {
        						this.fn_Ret(true);
        					}
        				} else {
        					this.fn_PostSave();
        				}
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
            switch(strId)
            {
        		// 합의번호 멀티조회팝업 후처리
        		case "btn_consnNoMultiInput":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 var jsonData = JSON.parse(strVal);
        				 this.div_search.form.edt_consnNo.set_value(jsonData.textValue);
        			 }
        			 break;
        		// 협력사 조회팝업 후처리
        		case "btn_cprtcpPopup":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 var jsonData = JSON.parse(strVal);
        				 this.div_search.form.edt_cprtcpCd.set_value(jsonData.CPRTCP_ID);
        				 this.div_search.form.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM);
        			 }
        		     break;
        		// 구매담당자 조회팝업 후처리
        		case "btn_chrpsnPopup" :
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 var jsonData  = JSON.parse(strVal);
        				 this.div_search.form.edt_chrpsnId.set_value(jsonData.EMP_NO);
        				 this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM);
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
        	this.fn_setMultiSearch(this.formId,"CUST_PREQNO",this.ds_search.getColumn(0,"CUST_PREQNO"));  // 합의번호

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
            var strUrl      = "/rd/purg-info-pkg-chg/select-purg-info-pkg-chg.do";
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

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 일괄합의 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_pkgConsn_onclick = function(obj,e)
        {
        	if(this.ds_master.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	if(this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"REQ_SBJ_CD") == "20") {
        		this.fn_alert("ERRR000237","저장정보","일괄합의","error"); // 요청주체가 협력사인 경우만 &1가 가능합니다.
        		return false;
        	}

        	var result = this.fn_confirm("ERRR000193", "저장정보","","question" );    // 선택한 건들을 모두 합의 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",                 this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CO_CD"));
        	this.ds_input.setColumn(nRow,"CONT_NO",               this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_NO"));
        	this.ds_input.setColumn(nRow,"CONT_CHG_DGRCNT",       this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_CHG_DGRCNT"));
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",             this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CPRTCP_ID"));
        	this.ds_input.setColumn(nRow,"ELC_CONT_APPR_STATS_CD","50");

        	this.fn_Save();
        };

        /**
         * 일괄반려 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_pkgRjct_onclick = function(obj,e)
        {
        	if(this.ds_master.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	if(this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"REQ_SBJ_CD") == "20") {
        		this.fn_alert("ERRR000237","저장정보","일괄반려","error"); // 요청주체가 협력사인 경우만 &1가 가능합니다.
        		return false;
        	}

        	// N건 선택 불가로 메시지 수정
        	/*var result = this.fn_confirm("ERRR000194", "저장정보","","question" );*/    // 선택한 건들을 모두 반려 처리 하시겠습니까?
        	var result = this.fn_confirm("ERRR000232", "저장정보","","question");    // 선택한 건을 반려 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow, "CO_CD", this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CO_CD"));
        	this.ds_input.setColumn(nRow, "CONT_NO", this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_NO"));
        	this.ds_input.setColumn(nRow, "CONT_CHG_DGRCNT", this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_CHG_DGRCNT"));
        	this.ds_input.setColumn(nRow, "CPRTCP_ID", this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CPRTCP_ID"));
        	this.ds_input.setColumn(nRow, "ELC_CONT_APPR_STATS_CD", "40");

        	this.fn_Save();
        };

        /**
         * 요청취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_reqCnc_onclick = function(obj,e)
        {
        	if(this.ds_master.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	if(this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"REQ_SBJ_CD") == "30")
        	{
        		this.fn_alert("ERRR000192","저장정보","","question"); // 협력사 요청건은 취소가 불가합니다.
        		return false;
        	}

        	var result = this.fn_confirm("ERRR000195", "저장정보","","question" );    // 요청취소 시 합의요청은 취소되고 기존 구매정보로 유지됩니다. 요청취소하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",                 this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CO_CD"));
        	this.ds_input.setColumn(nRow,"CONT_NO",               this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_NO"));
        	this.ds_input.setColumn(nRow,"CONT_CHG_DGRCNT",       this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CONT_CHG_DGRCNT"));
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",             this.ds_master.getColumn(this.ds_master.findRow("CHK","1"),"CPRTCP_ID"));
        	this.ds_input.setColumn(nRow,"ELC_CONT_APPR_STATS_CD","36");

        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	this.ds_search.setColumn(0,"GUBUN", "52");
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
            var strUrl      = "/rd/purg-info-pkg-chg/save-req-cprtcp-consn-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_search:a ";
                strInDs    += "ds_input=ds_input:u";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    // 공백 시 기본 fn_callBack
            var strASync    = true;             // 생략이나 공백은 ASync=true, 싱크는 false
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
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
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

            this.gfn_excelExport(this.grd_list, "구매정보 일괄변경 관리","구매정보 일괄변경 관리");
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
         * 마스터 그리드 셀 클릭시 oncellclick 이벤트 발생 처리
         */
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(obj.getBindCellIndex("body","CHK") == e.cell)
        	{
        		obj.set_selectchangetype("up");
        		this.ds_master.set_enableevent(false);
        	    for(var idx=0; idx<this.ds_master.rowcount; idx++)
                {
                    if(e.row == idx)
                    {
                        continue;
                    }

                    this.ds_master.setColumn(idx,"CHK","0");
                }
        		this.ds_master.set_enableevent(true);
        	}
        };

        /**
         * 마스터 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	// 제안파일 Cell 더블 클릭시
        	if(e.cell == obj.getBindCellIndex("body","PRPS_FILE_NM"))
        	{
        		var strPrpsFileNm = this.ds_master.getColumn(this.ds_master.rowposition,"PRPS_FILE_NM");

        		if(!this.gfn_isNull(strPrpsFileNm))
        		{
        			var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","EXCEL","question" );    // Excel를 출력하시겠습니까?

        			if(result == 0)
        			{
        			   return false;
        			}

        			var strSvc      = "Ret";
        			var strUrl      = "/rd/purg-info-pkg-chg/select-prps-file-excel-down.do";
        			var strInDs     = "";
        			var strOutDs    = "ds_grdExcel=ds_grdExcel";
        			var strArg      = "CONT_NO="          + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CONT_NO"))
        							+ " CONT_CHG_DGRCNT=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CONT_CHG_DGRCNT"))
        							+ " CO_CD="           + nexacro.wrapQuote(this.lv_coCd);
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);

        			var strPrpsFileNm = strPrpsFileNm.replace(".xlsx","");
        			this.gfn_excelExport(this.grd_excel, strPrpsFileNm,strPrpsFileNm);
        		}
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
            this.stc_totcnt.set_text(sTotText);
        };

        /**
         * 조회조건 합의번호 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_consnNoMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_consnNo };
        	var options = { title  : this.div_search.form.stc_consnNo.text };
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 협력사 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);
        	this.fn_setCallPopup4(sCodeId);
        };

        /**
         * 조회조건 협력사 Edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * 조회조건 협력사 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup4(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup4 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"CPRTCP_ID", sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
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
        		this.div_search.form.edt_cprtcpCd.set_value(this.ds_popupList.getColumn(0,"CPRTCP_ID"));
        		this.div_search.form.edt_cprtcpNm.set_value(this.ds_popupList.getColumn(0,"CPRTCP_KOR_NM"));
        	}
        	else
        	{
        		var params  = { cprtcpId : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_cprtcp.text };

        		this.gfn_openPopup("btn_cprtcpPopup", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 조회조건 구매담당자 Edit 값 변경시 이벤트 발생 처리
         */
        this.div_search_edt_chrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_chrpsnNm.set_value("");
        	}
        };

        /**
         * 조회조건 구매담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_chrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);

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
        		this.div_search.form.edt_chrpsnId.set_value(this.ds_popupList.getColumn(0,"EMP_NO"));
        		this.div_search.form.edt_chrpsnNm.set_value(this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd, empNo : sCodeId };
        		var options = { title : this.div_search.form.cmb_chrpsn.text };

        		this.gfn_openPopup("btn_chrpsnPopup", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_search.form.cmb_procStats.addEventHandler("onitemchanged",this.Combo00_00_onitemchanged,this);
            this.div_search.form.btn_consnNoMultiInput.addEventHandler("onclick",this.div_search_btn_consnNoMultiInput_onclick,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("oninput",this.div_search_edt_cprtcpCd_oninput,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("onkeyup",this.div_search_edt_cprtcpCd_onkeyup,this);
            this.div_search.form.edt_cprtcpNm.addEventHandler("onchanged",this.edt_prdClsfNm_onchanged,this);
            this.div_search.form.btn_cprtcpPopup.addEventHandler("onclick",this.div_search_btn_cprtcpPopup_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnNm.addEventHandler("onchanged",this.edt_prdClsfNm_onchanged,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_reqCnc.addEventHandler("onclick",this.btn_reqCnc_onclick,this);
            this.btn_pkgRjct.addEventHandler("onclick",this.btn_pkgRjct_onclick,this);
            this.btn_pkgConsn.addEventHandler("onclick",this.btn_pkgConsn_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_52.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
