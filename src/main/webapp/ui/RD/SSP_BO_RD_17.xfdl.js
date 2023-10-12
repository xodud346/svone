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
            this.set_titletext("R&D 견적요청 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_DIS_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRC_STPRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PI_EXCEPTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CUST_PREQNO\"/><Col id=\"MAIN_GUBUN\"/><Col id=\"REQ_SBJ_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_estmDisTpCdCombo", this);
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


            obj = new Dataset("ds_rndEstmDtlStatsCdCombo", this);
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


            obj = new Dataset("ds_detail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POOL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reqProcDtls", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_INFO_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_RECV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cprtcpPrdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","-309",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","149",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","118",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","87",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","56",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","20","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcdNm","20","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","165","122","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_attrValList","20","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hubHnlDisTpNm","20","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_basisUnitNm","759","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_txClcdNm","759","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle08_00","759","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","759","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","345","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("견적 요청·회신");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("고객 요청 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","590","1113","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcdNm","165","91","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","905","91","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm","905","122","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txClcdNm","905","153","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hubHnlDisTpNm","165","152","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","165","60","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","905","60","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","179",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprNm","20","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnNm","759","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","905","184","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pubOnlySprNm","165","184","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","261",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","45","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","369","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","1093","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","213","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","231","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("요청 고객 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","0","251","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","885","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("견적불가 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00_00","20","949",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_01","20","917",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","865","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01","0","907","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("tax_estmDisRsn","160","954","1052","90",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlPrdYn","390","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdChrpsnNm","390","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdChrpsnNm","535","184","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chmMtlPrdYn","535","153","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","20","293",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bzplcNm","20","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","165","297","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","390","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","535","297","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mbrNm","759","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","905","297","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("stcBackGround07_01_00_00_00_00_00","905","266","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_odrReqDtm","535","266","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custPreqno","165","266","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_02","0","325","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_purgInfoReg",null,"345","110","24","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("구매정보 등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReqCnc",null,"345","110","24","btn_purgInfoReg:4",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("견적요청 취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReq",null,"345","80","24","btn_estmReqCnc:4",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("견적요청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","20","589","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("+ 추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","btn_add:4","589","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","379",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"225\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\"/><Cell col=\"1\" colspan=\"2\" text=\"협력사\"/><Cell col=\"3\" text=\"메모\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"최소발주수량\"/><Cell col=\"6\" text=\"평균배송일\"/><Cell col=\"7\" text=\"매입가\"/><Cell col=\"8\" text=\"배송비\"/><Cell col=\"9\" text=\"구매정보 유효기간\"/><Cell col=\"10\" text=\"화학물질정보\"/><Cell col=\"11\" text=\"KC인증정보\"/><Cell col=\"12\" text=\"기간할인\"/><Cell col=\"13\" text=\"물량할인\"/><Cell col=\"14\" text=\"견적요청일\"/><Cell col=\"15\" text=\"견적회신일\"/><Cell col=\"16\" text=\"구매정보등록일\"/></Band><Band id=\"body\"><Cell textDecoration=\"underline\" color=\"#235da8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"none\" textAlign=\"left\" editautoselect=\"true\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:CPRTCP_ID\" textareascrolltype=\"none\" textareascrollbartype=\"none\"/><Cell col=\"2\" text=\"bind:CPRTCP_KOR_NM\" displaytype=\"editcontrol\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" expandshow=\"expr:EXISTS_YN == &apos;N&apos; ? &apos;show&apos; : &apos;hide&apos;\" expandsize=\"25\" textAlign=\"left\" editautoselect=\"true\" edittype=\"none\" textareascrolltype=\"none\" textareascrollbartype=\"none\"/><Cell col=\"3\" color=\"#235da8\" textDecoration=\"underline\" text=\"expr:dataset.getColumn(currow, &quot;POOL_YN&quot;) == &quot;Y&quot;  ?  &quot;참고사항&quot; : &quot;&quot; \"/><Cell col=\"4\" text=\"bind:ESTM_DTL_STATS_NM\" displaytype=\"normal\" comboautoselect=\"false\" tooltiptext=\"expr:ESTM_DTL_STATS_CD==&apos;40&apos;?RSN_TXT&apos;:&apos;&apos;\" subsumtext=\"상태\" cssclass=\"expr:ESTM_DTL_STATS_CD==&quot;40&quot;?&quot;grd_Txt_Red_UC&quot;:&quot;&quot;\" edittype=\"none\" suppressalign=\"last\"/><Cell col=\"5\" text=\"bind:MIN_ODR_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DLV_LT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:PRD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:DLV_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PURG_VLD_TERM\"/><Cell col=\"10\" textAlign=\"center\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:ESTM_DTL_STATS_CD == null || ESTM_DTL_STATS_CD == &apos;&apos; || ESTM_DTL_STATS_CD == &apos;10&apos; ? &apos;&apos; : &apos; theme://images/btn_WF_search02.png&apos;\" subsumtext=\"화학물질정보\"/><Cell col=\"11\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:ESTM_DTL_STATS_CD == null || ESTM_DTL_STATS_CD == &apos;&apos; || ESTM_DTL_STATS_CD == &apos;10&apos; ? &apos;&apos; : &apos; theme://images/btn_WF_search02.png&apos;\" subsumtext=\"KC인증정보\"/><Cell col=\"12\" text=\"bind:PERD_DC\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:QTY_DC\" wordWrap=\"char\"/><Cell col=\"14\" text=\"bind:ESTM_REQ_DTM\"/><Cell col=\"15\" text=\"bind:ESTM_CMPL_DTM\"/><Cell col=\"16\" text=\"bind:PURG_INFO_REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02","0","579","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_03","0","613","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_02","20","633","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("요청 처리 내역");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02_00","0","655","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reqProcDtls","20","665",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("ds_reqProcDtls");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("row");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"처리일\"/><Cell col=\"3\" text=\"처리자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ESTM_INFO_STATS_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:UPDPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custPreqno","20","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("견적요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle08_00_01","759","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_estmDisTpCd","20","917","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("견적불가유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_estmDisRsn","20","949","130","100",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("상세 사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_estmDisTpCd","160","921","380","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_estmDisTpCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdUseYn","552","921","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("상품 미사용");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmDisProc",null,"1069","120","24","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("견적불가처리");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","-4","1049","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_odrReqDtm","390","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("견적요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","1069","405","14",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("* 상세사유는 고객/협력사에게 노출 되오니 신중하게 작성하시기 바랍니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","160","16",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("R&D 견적요청 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmCmpl",null,"589","80","24","20",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("처리완료");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,846,this,function(p){});
            obj.set_description("R&D 견적요청 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdClcdNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_attrValList","value","ds_master","ATTR_VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_hubHnlDisTpNm","value","ds_master","HUB_HNL_DIS_TP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_pubOnlySprNm","value","ds_master","PUB_ONLY_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_custPreqno","value","ds_master","CUST_PREQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_bzplcNm","value","ds_master","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_oprUnitNm","value","ds_master","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_odrReqDtm","value","ds_master","ODR_REQ_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_prdChrpsnNm","value","ds_master","PRD_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_chmMtlPrdYn","value","ds_master","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_ctryNm","value","ds_master","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_basisUnitNm","value","ds_master","BASIS_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_txClcdNm","value","ds_master","TX_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_purgChrpsnNm","value","ds_master","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","stcBackGround07_01_00_00_00_00_00","value","ds_master","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_mbrNm","value","ds_master","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cbo_estmDisTpCd","value","ds_master","ESTM_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tax_estmDisRsn","value","ds_master","ESTM_DIS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","chk_prdUseYn","value","ds_master","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_17.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_17.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_17.xfdl(R&D 협력사 견적요청 관리 상세/수정)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/06/22
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
        this.fv_oApp        = nexacro.getApplication();	//application object
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";
        this.sParamArg3     = "";
        this.sParamArg4     = "";
        this.sParamArg5     = "";

        this.lvGetDate      = "";
        this.lvSaveMode     = "";
        this.lv_btnChkYn    = "";
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
        	/* 2022.10.18 sg.park SSP-1572 > SSP-283 가변RAW 처리 요청 */
        	this.grd_list.set_autosizingtype("row");
        	this.grd_list.set_extendsizetype("row");
        	/* /2022.10.18 sg.park SSP-1572 > SSP-283 가변RAW 처리 요청 */

        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
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

            var strDs    = "ds_estmDisTpCdCombo|ds_rndEstmDtlStatsCdCombo|ds_rndPrdAuthCombo";   // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "ESTM_DIS_TP_CD|RND_ESTM_DTL_STATS_CD|CHRPSN_TEAM_SPR_CD";            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|N|X";                                             				 // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                                					 // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
            this.lvGetDate = this.fn_getSvrDate();                      // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"CO_CD",      this.sParamArg1);	     // 회사코드
        	this.ds_search.setColumn(nRow,"CUST_PREQNO",this.sParamArg2);        // 고객요청번호
        	this.ds_search.setColumn(nRow,"MAIN_GUBUN", "N");                    // 메인화면구분

        	this.fn_Ret();
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
            }
        	else
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
        		    case "CprtcpRet":
                            this.fn_PostCprtcpRet();
                        break;
                    case "Save_L":
        				var responseMessage = this.ds_master.getColumn(0, "PI_EXCEPTION_CODE");
        				if (responseMessage == "ERRR000490") {
        					var responce = this.fn_confirm(responseMessage, "일괄 처리", "PI_SYSTEM", "question");	// PI 시스템의 응답이 없습니다. 재시도하시겠습니까?
        					if (responce) {
         						for (var idx = 0; idx < this.ds_detail.getRowCount(); idx++) {
         							var nRow = this.ds_input.addRow();
         							this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
         							this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
         							this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
         							this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
         							this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
         							this.ds_input.setColumn(nRow,"CO_GB",      "30");
         						}
         						this.fn_Save_L();
        					} else {
        						this.close("EXIT");
        					}
        				} else {
        					this.fn_PostSave_L();
        				}
        				break;
                    case "Save_R":
        					this.fn_StatPiCall();
                            this.fn_PostSave_R();
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
        		// 협력사 조회팝업 후처리
        		case "SSP_BO_PP_41" :
        			 if(!this.gfn_isNull(strVal))
        			 {
        			 	 var jsonData    = JSON.parse(strVal);
        				 var strCprtcpId = jsonData.CPRTCP_ID.replace(/,\s*$/,    "");
        				 var strCprtcpNm = jsonData.CPRTCP_KOR_NM.replace(/,\s*$/,"");
        				 var findRow     = this.ds_detail.findRow("CPRTCP_ID",strCprtcpId);

        				 this.ds_detail.setColumn(this.ds_detail.rowposition, "POOL_YN", "N");
        				 this.ds_detail.setColumn(this.ds_detail.rowposition, "RMKS", "");


        				 if(findRow != -1)
        				 {
        					this.fn_alert("ERRR000229","추가정보","","question"); // 협력사가 중복되었습니다. 협력사ID를 확인해주세요.
        					this.ds_detail.set_rowposition(findRow);
        					return false;
        				 }
        				 else
        				 {
        					 this.ds_detail.setColumn(this.ds_detail.rowposition,"CPRTCP_ID",    strCprtcpId);
        					 this.ds_detail.setColumn(this.ds_detail.rowposition,"CPRTCP_KOR_NM",strCprtcpNm);
        					 // 협력사상품정보 조회 호출
        					 this.fn_CprtcpRet(strCprtcpId);
        				 }
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
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/cprtcp-estm-req-mng/select-estm-req-dtl-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_detail=ds_detail"
        					+ " ds_reqProcDtls=ds_reqProcDtls";
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
        	// 견적상태가 [40:처리완료,50:처리불가]인 경우 화면 제어 불가능
        	if(this.ds_master.getColumn(0,"ESTM_INFO_STATS_CD") == "40" || this.ds_master.getColumn(0,"ESTM_INFO_STATS_CD") == "50")
        	{
        		this.fn_compontAllControl();
        	}
        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

        /**
         * 기능 : 협력사상품정보 조회 전 실행
         */
        this.fn_PreCprtcpRet = function(cprtcpId)
        {
        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        	this.ds_input.setColumn(nRow,"CUST_PREQNO",this.edt_custPreqno.value);
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",  cprtcpId);
        	this.ds_input.setColumn(nRow,"PRD_ID",    this.ds_master.getColumn(0,"PRD_ID"));
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 협력사상품정보 조회 실행
         */
        this.fn_CprtcpRet = function(cprtcpId)
        {
            if(!this.fn_PreCprtcpRet(cprtcpId))
            {
                return false;
            }
            var strSvc      = "CprtcpRet";
            var strUrl      = "/rd/cprtcp-estm-req-mng//select-cprtcp-prd-info-inq.do";
            var strInDs     = "ds_search=ds_input";
            var strOutDs    = "ds_cprtcpPrdInfo=ds_cprtcpPrdInfo";
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
         * 기능 : 협력사상품정보 조회 후 실행
         */
        this.fn_PostCprtcpRet = function()
        {
        	if(this.ds_cprtcpPrdInfo.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_cprtcpPrdInfo.getColCount(); idx++)
        		{
        			var colId = this.ds_cprtcpPrdInfo.getColID(idx);
        			var value = this.ds_cprtcpPrdInfo.getColumn(0,colId);
        			this.ds_detail.setColumn(this.ds_detail.rowposition,colId,value);
        		}
        	}
        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 견적요청 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReq_onclick = function(obj,e)
        {
        	if(this.ds_detail.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	// 협력사 정보 없을시
        	if(this.ds_detail.findRowExpr("CHK == '1' && CPRTCP_ID == null") != -1)
        	{
        		this.fn_alert("ERRR000137","저장정보","","question"); // 협력사를 선택해 주세요
        		this.ds_detail.set_rowposition(this.ds_detail.findRowExpr("CHK == '1' && CPRTCP_ID == null"));
        		this.grd_list.setCellPos(this.grd_list.getBindCellIndex("body","CPRTCP_ID"));
        		this.grd_list.showEditor();
        		return false;
        	}

        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_detail.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.gfn_nvl(this.ds_detail.getColumn(idx,"ESTM_DTL_STATS_CD"),"");

        		if(strChk == 1 && (strEstmDtlStatsCd != ""))
        		{
        			this.fn_alert("ERRR000208","저장정보","","question"); // 이미 진행중인 건이 포함되어 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		if(!this.gfn_isNull(this.ds_detail.getColumn(idx,"CPRTCP_ID")))
        		{
        			var nRow = this.ds_input.addRow();
        			this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
        			this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
        			this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
        			this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
        			this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
        			this.ds_input.setColumn(nRow,"CO_GB",      "10");
        		}
        	}

        	this.fn_Save_L();
        };

        /**
         * 견적요청취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReqCnc_onclick = function(obj,e)
        {
        	if(this.ds_detail.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_detail.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.ds_detail.getColumn(idx,"ESTM_DTL_STATS_CD");

        		if(strChk == 1 && (strEstmDtlStatsCd != "10" && strEstmDtlStatsCd != "20" && strEstmDtlStatsCd != "40"))
        		{
        			this.fn_alert("ERRR000213","저장정보","","question"); // 견적상태가 요청 & 제출 & 거부 상태인 경우에만 견적요청취소를 진행 하실수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청 취소","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "20");
        	}

        	this.fn_Save_L();
        };

        /**
         * 구매정보 등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_purgInfoReg_onclick = function(obj,e)
        {
        	if(this.ds_detail.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_detail.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.ds_detail.getColumn(idx,"ESTM_DTL_STATS_CD");

        		if(strChk == 1 && (strEstmDtlStatsCd != "20"))
        		{
        			this.fn_alert("ERRR000209","저장정보","","question"); // 견적상태가 제출 상태인 경우에만 구매정보 등록을 진행 하실수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","구매정보 등록","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "30");
        	}

        	this.fn_Save_L();
        };

        /**
         * 견적완료 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmCmpl_onclick = function(obj,e)
        {
        // 2022.10.20 sg.park SSP-1572 > SSP-1268 [BO 견적요청 목록] 유효구매정보가 1건이상 존재 시 처리가능해야 함
        // 	var cnt = 0;
        // 	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        // 	{
        // 		var strChk            = this.ds_detail.getColumn(idx,"CHK");
        // 		var strEstmDtlStatsCd = this.gfn_nvl(this.ds_detail.getColumn(idx,"ESTM_DTL_STATS_CD"),"");
        // 		var strVldTerm		  = this.gfn_nvl(this.ds_detail.getColumn(idx,"PURG_VLD_TERM"),"");
        //
        // 		if(strChk == 1)
        // 		{
        // 			if(strVldTerm != "" && strEstmDtlStatsCd == "")
        // 			{
        // 				var fVldTerm = strVldTerm.split("~")[0].replace(/\./g, "");
        // 				var rVldTerm = strVldTerm.split("~")[1].replace(/\./g, "");
        // 				var today = this.gfn_getDate("date");
        //
        // 				if(fVldTerm <= today && today <= rVldTerm) cnt++;
        // 			}
        // 			else if(strEstmDtlStatsCd != "")
        // 			{
        // 				if(strEstmDtlStatsCd == "30") cnt++;
        // 			}
        // 		}
        // 	}
        //
        // 	if(!(cnt > 0))
        // 	{
        // 		this.fn_alert("ERRR000212","저장정보","","question"); // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        // 		return false;
        // 	}
        //
        // // 	 if(this.ds_detail.getCaseCount("ESTM_DTL_STATS_CD == '30'") == 0)
        // // 	{
        // // 		this.fn_alert("ERRR000212","저장정보","","question"); // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        // // 		return false;
        // // 	}

        	var prdPrcCunt = 0;
        	for (var idx = 0; idx < this.ds_detail.getRowCount(); idx++) {
        		var sEstmInfoStatsCd = this.gfn_nvl(this.ds_detail.getColumn(idx, 'ESTM_INFO_STATS_CD'), '');
        		var sPurgVldYn = this.gfn_nvl(this.ds_detail.getColumn(idx, 'PURG_VLD_YN'), '');
        		var sPugrInfoRegDtm = this.gfn_nvl(this.ds_detail.getColumn(idx, 'PURG_INFO_REG_DTM'), '');
        		var sPrdPrc = this.gfn_nvl(this.ds_detail.getColumn(idx, 'PRD_PRC'), '');
        		// SSP-2618 구매정보 존재 시 처리완료 기능 오픈
        		var prdPrcStprcYn = this.gfn_nvl(this.ds_master.getColumn(0, "PRD_PRC_STPRC_YN"), "");

        		// 상품 가격정보 존재 시 처리완료 진행
        		if (prdPrcStprcYn == 'Y') {
        			prdPrcCunt++;
        		} else {
        			// 견적요청 상태가 구매정보 등록완료 일때 처리
        			if (
        				(sEstmInfoStatsCd != '' || sEstmInfoStatsCd == '60')
        				&& (sPurgVldYn == 'Y' || sPugrInfoRegDtm != '') && sPrdPrc > '0'
        			) {
        				prdPrcCunt++;
        			}
        		}
        	}

        	if (1 > prdPrcCunt) {
        		this.fn_alert("ERRR000212","저장정보","","question"); // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        		return false;
        	}
        	// /2022.10.20 sg.park SSP-1572 > SSP-1268 [BO 견적요청 목록] 유효구매정보가 1건이상 존재 시 처리가능해야 함

            // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        	var result = this.fn_confirm("ERRR000210", "저장정보","","question" ); // 견적완료 처리를 진행 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CHK",        1);
        	this.ds_input.setColumn(nRow,"CO_CD",      this.ds_master.getColumn(0,"CO_CD"));
        	this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(0,"CUST_PREQNO"));
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",  "*");
        	this.ds_input.setColumn(nRow,"EXISTS_YN",  "Y");
        	this.ds_input.setColumn(nRow,"CO_GB",      "40");

        	this.fn_Save_L();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_L = function()
        {
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save_L = function()
        {
            if (!this.fn_PreSave_L()) {
                return false;
            }

            var strSvc      = "Save_L";
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-cprtcp-estm-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_search:a";
                strInDs    += " ds_input=ds_input:u"
        		strInDs    += " ds_master=ds_master"
        		strInDs    += " ds_detail=ds_detail"
        		strInDs    += " ds_delete=ds_delete:u";
            var strOutDs    = "ds_master=ds_master";
        	    strOutDs   += " ds_detail=ds_detail";
        		strOutDs   += " ds_reqProcDtls=ds_reqProcDtls";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave_L = function()
        {
        	this.fn_alert("ERRR000007", "저장", "", "question"); // 정상적으로 저장되었습니다

        	this.lvSaveMode = "SAVE";

        	// 견적상태가 [40:처리완료,50:처리불가]인 경우 화면 제어 불가능
        	if (
        		this.ds_master.getColumn(0, "ESTM_INFO_STATS_CD") == "40"
        		|| this.ds_master.getColumn(0, "ESTM_INFO_STATS_CD") == "50"
        	) {
        		this.fn_compontAllControl();
        	}
        };

        /**
         * 견적불가처리 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmDisProc_onclick = function(obj,e)
        {
        	// 요청건 진행시 견적불가처리 진행 못함
        	if(this.ds_detail.getCaseCount("ESTM_DTL_STATS_CD == '10'") > 0)
        	{
        		this.fn_alert("ERRR000214","저장","견적불가유형","question"); // 	현재 요청건이 존재합니다. 요청취소 진행후 견적불가처리 진행을 하시길 바랍니다.
        		return false;
        	}

        	// 견적불가유형코드 필수입력 체크
        	if(this.gfn_isNull(this.cbo_estmDisTpCd.value))
        	{
        		this.fn_alert("ERRR000176","저장","견적불가유형","question"); // &1는(은) 필수 선택 입니다. 선택해 주세요.
        		this.cbo_estmDisTpCd.setFocus();
        		return false;
        	}

        	// 견적불가상세사유 필수 입력 체크
        	if(this.gfn_isNull(this.gfn_trim(this.tax_estmDisRsn.value)))
        	{
        		this.fn_alert("ERRR000199","저장","견적불가상세사유","question"); // &1 을(를) 입력해 주세요.
        		this.tax_estmDisRsn.setFocus();
        		return false;
        	}
        	else
        	{
        		var max 		= 500;
        		var totalByte 	= this.fn_lenChk(this.tax_estmDisRsn.value, max);

        		if (totalByte > max)
        		{
        			this.fn_alert("ERRR000489", "저장", "상세사유," + totalByte + "," + max, "question" ); //입력가능한  &1 길이가 초과되었습니다. (현재 : &2 byte, 입력가능 : &3 byte)

        			this.tax_estmDisRsn.setFocus();

        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000211", "저장정보","","question" ); // 견적불가 처리를 진행 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.fn_Save_R();
        };


        /**
         * 기능 : 견적불가 상세사유 글자수 확인
         */
        this.fn_lenChk = function(b, max){
        	var totalByte = 0;
        	for (var i = 0; i < b.length; i++) {
        		var oneChar = b.charAt(i);
        		if (escape(oneChar).length > 4) {
        			totalByte = totalByte + 3;
        		} else {
        			totalByte = totalByte + 1;
        		}
        	}

        	return totalByte;
        }

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_R = function()
        {
        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();

        	this.ds_input.setColumn(nRow, "CO_CD",             this.ds_master.getColumn(0,"CO_CD"));                            	// 회사코드
        	this.ds_input.setColumn(nRow, "CUST_PREQNO",       this.ds_master.getColumn(0,"CUST_PREQNO"));                      	// 고객요청번호
        	this.ds_input.setColumn(nRow, "ESTM_DIS_TP_CD",    this.ds_master.getColumn(0,"ESTM_DIS_TP_CD"));                   	// 견적불가유형코드
        	this.ds_input.setColumn(nRow, "ESTM_DIS_RSN",      this.ds_master.getColumn(0,"ESTM_DIS_RSN"));                     	// 견적불가상세사유
        	this.ds_input.setColumn(nRow, "CPRTCP_ID",         "*");
        	this.ds_input.setColumn(nRow, "CO_GB",             "50");
        	this.ds_input.setColumn(nRow, "ESTM_INFO_STATS_CD","50");                                                           	// 견적정보상태코드[50:처리불가]
        	this.ds_input.setColumn(nRow, "REQ_SBJ_CD",        this.ds_master.getColumn(0,"REQ_SBJ_CD"));

        	// 2022.10.19 sg.park SSP-1265 [BO 견적요청 목록] 상품미사용 버튼 작동 오류
        	this.ds_input.setColumn(nRow, "PRD_ID",			   this.ds_master.getColumn(0, "PRD_ID"));								// 상품 아이디
        	this.ds_input.setColumn(nRow, "PRD_USE_YN",        this.ds_master.getColumn(0, "PRD_USE_YN") == "true" ? "N" : "Y");	// 상품미사용여부

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save_R = function()
        {
            if(!this.fn_PreSave_R())
            {
                return false;
            }

            var strSvc      = "Save_R";
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-estm-dis-proc-stor.do";
            var strInDs     = "ds_input=ds_input:u";
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
        this.fn_PostSave_R = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        };
        /**********************************************************************
                 09. 초기화
        ***********************************************************************/
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
        		var strMnfrNo  = this.ds_master.getColumn(0,"MNFR_NO");
        		var strPrdClcd = this.ds_master.getColumn(0,"PRD_CLCD");

        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq(strMnfrNo,strPrdClcd);

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit : this.btn_exit
        						  , btn_close  : this.btn_close
        	                      };
        	var btnVisibleFalse = {
        						//	btn_rjct  : this.btn_rjct
        						//  , btn_consn : this.btn_consn
        	                      };
        	this.chk_prdUseYn.set_readonly(true);
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

            var nRow = this.ds_detail.addRow();
            this.ds_detail.setColumn(nRow,"CHK",        "0");           		// CHK
        	this.ds_detail.setColumn(nRow,"CO_CD",      this.sParamArg1);       // 회사코드
        	this.ds_detail.setColumn(nRow,"CUST_PREQNO",this.sParamArg2);	    // 고객요청번호
        	this.ds_detail.setColumn(nRow,"EXISTS_YN",  "N");	                // 존재여부
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            // 멀티삭제용도
            if(this.ds_detail.rowcount < 1 || this.ds_detail.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 삭제할 데이타가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_detail.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_detail.getColumn(i,"CHK") == 1)
                {
        			// 요청 및 빈값 데이터 삭제
        			if(this.ds_detail.getColumn(i,"ESTM_DTL_STATS_CD") == "10" || this.gfn_isNull(this.ds_detail.getColumn(i,"ESTM_DTL_STATS_CD")))
        			{
        				if(this.ds_detail.getColumn(i,"EXISTS_YN") == "Y")
        				{
        					var nRow = this.ds_delete.addRow();
        					this.ds_delete.copyRow(nRow,this.ds_detail,i);
        				}
        			}
                    this.ds_detail.deleteRow(i);
                }
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

        };

        this.fn_PostDel = function()
        {
        };
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 마스터 그리드 셀 클릭시 oncellclick 이벤트 발생 처리
         */
        this.grd_list_oncellclick = function(obj,e)
        {
        	var strSubsumtext = this.gfn_nvl(obj.getCellProperty("body",e.cell,"subsumtext"),"");

        	// 참고사항 클릭시
        	if(e.col == 3 && this.ds_detail.getColumn(this.ds_detail.rowposition, "POOL_YN") == "Y") {
        		var param = { rmks:this.ds_detail.getColumn(this.ds_detail.rowposition, "RMKS")};
        		this.gfn_openPopup("SSP_BO_PP_36", "CO_POP::SSP_BO_PP_36.xfdl", param);
        	}

        	if(strSubsumtext != "")
        	{
        		var strEstmDtlStatsCd = this.gfn_nvl(this.ds_detail.getColumn(e.row,"ESTM_DTL_STATS_CD"),"");

        		if(strEstmDtlStatsCd != "" && strEstmDtlStatsCd != "10" && strSubsumtext != "상태")
        		{
        			var params           = "";
        			var strCocd          = this.ds_detail.getColumn(e.row,"CO_CD");
        			var strCustPreqno    = this.ds_detail.getColumn(e.row,"CUST_PREQNO");
        			var strCprtcpId      = this.ds_detail.getColumn(e.row,"CPRTCP_ID");
        			var strPrdId         = this.ds_master.getColumn(e.row,"PRD_ID");
        			var strContNo        = this.ds_detail.getColumn(e.row,"CONT_NO");
        			var strContChgDgrCnt = this.ds_detail.getColumn(e.row,"CONT_CHG_DGRCNT");
        			var strSaveMode      = "R";

        			// 협력사 회신 제출인 경우에만 수정 가능
        			if(strEstmDtlStatsCd == "20")
        			{
        				strSaveMode = "U";
        			}

        			if(strSubsumtext == "화학물질정보")
        			{
        				params = { key1     : strCocd           // 회사코드
        						 , key2     : strCustPreqno     // 고객요청번호
        						 , key3     : strCprtcpId       // 협력사ID
        						 , key4     : strPrdId          // 상품코드
        						 , key5     : ""                // null
        						 , popNm    : "SSP_BO_RD_70"    // 화학물질
        						 , saveMode : strSaveMode
        						 };
        			}
        			else if (strSubsumtext == 'KC인증정보')
        			{
        				params = { key1     : strCocd           // 회사코드
        						 , key2     : strContNo         // 계약번호
        						 , key3     : strCprtcpId       // 협력사ID
        						 , key4     : strPrdId          // 상품코드
        						 , key5     : strContChgDgrCnt  // 계약변경차수
        						 , popNm    : "SSP_BO_RD_55"
        						 , saveMode : strSaveMode
        						 };
        			}

        			this.fn_setCallPopup(params);
        		}
        		// 2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        		else if (strSubsumtext == "상태" && strEstmDtlStatsCd == '40') {
        			var p={ READ_ONLY: 'Y', UPD_RSN: this.ds_detail.getColumn(e.row, 'RSN_TXT') };
        			this.gfn_openPopup(
        				  'SSP_BO_RD_17_P01'
        				, 'RD::SSP_BO_RD_17_P01.xfdl'
        				, p
        			);
        		}
        		// /2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;			// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.key1;		        // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.key2; 				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.key3;             	// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = params.key4;			    // 부모에서 넘어가는 파라미터(폼경로)
        	var lv_sValue05     = params.key5;			    // 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = params.popNm ;
        	var sUrl 		    = "RD::"+params.popNm+".xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05};     // 파라미터5
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**
         * 화면 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm("ERRR000060", "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.close(!this.gfn_isNull(this.lvSaveMode) ? this.lvSaveMode : "CLOSE");
        };

        /**
         * 화면 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	var result = this.fn_confirm("ERRR000060", "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.close(!this.gfn_isNull(this.lvSaveMode) ? this.lvSaveMode :  "EXIT");
        };

        /**
         * 협력사 팝업 버튼 클릭시 onexpandup 이벤트 발생 처리
         */
        this.grd_list_onexpandup = function(obj,e)
        {
        	var params  = { coCd  : this.lv_coCd };
        	var options = { title : "협력사" };

        	this.gfn_openPopup("SSP_BO_PP_41", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_StatPiCall = function()
        {
            var strSvc      = "PiCall";
            var strUrl      = "/rd/cprtcp-estm-req-mng/cms-pi-call-stat.do";
            var strInDs     = " ds_master=ds_master";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.stc_hubHnlDisTpNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.stc_pubOnlySprNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_chmMtlPrdYn.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_prdChrpsnNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_bzplcNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_oprUnitNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_purgInfoReg.addEventHandler("onclick",this.btn_purgInfoReg_onclick,this);
            this.btn_estmReqCnc.addEventHandler("onclick",this.btn_estmReqCnc_onclick,this);
            this.btn_estmReq.addEventHandler("onclick",this.btn_estmReq_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_estmDisProc.addEventHandler("onclick",this.btn_estmDisProc_onclick,this);
            this.btn_estmCmpl.addEventHandler("onclick",this.btn_estmCmpl_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
