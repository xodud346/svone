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
            this.set_titletext("R&D 상품정보 관리 상세/수정");
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
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ATTR_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_API_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_phaseSprCdCombo", this);
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


            obj = new Dataset("dsBuyInfo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"NO\" type=\"STRING\" size=\"32\"/><Column id=\"NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRICE\" type=\"STRING\" size=\"32\"/><Column id=\"MINCNT\" type=\"STRING\" size=\"32\"/><Column id=\"BAE\" type=\"STRING\" size=\"32\"/><Column id=\"BAEDAY\" type=\"STRING\" size=\"32\"/><Column id=\"YN\" type=\"STRING\" size=\"32\"/><Column id=\"DAY\" type=\"STRING\" size=\"32\"/><Column id=\"KC\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"NO\">1</Col><Col id=\"NM\">(B235689)아마존실업</Col><Col id=\"PRICE\">127.4원</Col><Col id=\"MINCNT\">200</Col><Col id=\"BAE\">3,000원</Col><Col id=\"BAEDAY\">5일</Col><Col id=\"YN\">가능</Col><Col id=\"DAY\">2021.09.03~2022-07-31</Col><Col id=\"KC\">N</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"NO\">2</Col><Col id=\"NM\">(B125478)애플상사</Col><Col id=\"PRICE\">127.4원</Col><Col id=\"MINCNT\">100</Col><Col id=\"BAE\">2,500원</Col><Col id=\"BAEDAY\">3일</Col><Col id=\"YN\">가능</Col><Col id=\"DAY\">2021.09.03~2022-07-31</Col><Col id=\"KC\">N</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"NO\">3</Col><Col id=\"NM\">(B126587)구글통상</Col><Col id=\"PRICE\">127.4원</Col><Col id=\"MINCNT\">150</Col><Col id=\"BAE\">6,000원</Col><Col id=\"BAEDAY\">2일</Col><Col id=\"YN\">가능</Col><Col id=\"DAY\">2020-05-08~2021-04-30 (만료)</Col><Col id=\"KC\">N</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"NO\">4</Col><Col id=\"NM\">(B316498)마소소프트</Col><Col id=\"PRICE\">127.4원</Col><Col id=\"MINCNT\">50</Col><Col id=\"BAE\">0원</Col><Col id=\"BAEDAY\">7일</Col><Col id=\"YN\">불가</Col><Col id=\"DAY\">2021.09.03~2022-07-31</Col><Col id=\"KC\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMul", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NM\" type=\"STRING\" size=\"32\"/><Column id=\"CASNO\" type=\"STRING\" size=\"32\"/><Column id=\"GB_U\" type=\"STRING\" size=\"32\"/><Column id=\"GB_J\" type=\"STRING\" size=\"32\"/><Column id=\"GB_S\" type=\"STRING\" size=\"32\"/><Column id=\"GB_G\" type=\"STRING\" size=\"32\"/><Column id=\"GB_H\" type=\"STRING\" size=\"32\"/><Column id=\"FROM\" type=\"STRING\" size=\"32\"/><Column id=\"TO\" type=\"STRING\" size=\"32\"/><Column id=\"AVG\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"NM\">붕산</Col><Col id=\"CASNO\">10043-35-3</Col><Col id=\"GB_U\">N</Col><Col id=\"GB_J\">N</Col><Col id=\"GB_S\">N</Col><Col id=\"GB_G\">N</Col><Col id=\"GB_H\">N</Col><Col id=\"FROM\">0.006</Col><Col id=\"TO\">0.006</Col><Col id=\"AVG\">0.006</Col></Row><Row><Col id=\"NM\">텅스덴 플라즈마 표준</Col><Col id=\"CASNO\">11120-25-5</Col><Col id=\"GB_U\">N</Col><Col id=\"GB_J\">N</Col><Col id=\"GB_S\">N</Col><Col id=\"GB_G\">N</Col><Col id=\"GB_H\">N</Col><Col id=\"FROM\">0.001</Col><Col id=\"TO\">0.001</Col><Col id=\"AVG\">0.001</Col></Row><Row><Col id=\"NM\">사수화 파라-몰리브데넘산 암모늄</Col><Col id=\"CASNO\">12054-85-2</Col><Col id=\"GB_U\">N</Col><Col id=\"GB_J\">N</Col><Col id=\"GB_S\">N</Col><Col id=\"GB_G\">N</Col><Col id=\"GB_H\">N</Col><Col id=\"FROM\">0.002</Col><Col id=\"TO\">0.002</Col><Col id=\"AVG\">0.002</Col></Row><Row><Col id=\"NM\">나이오븀 산화물</Col><Col id=\"CASNO\">1313-96-8</Col><Col id=\"GB_U\">N</Col><Col id=\"GB_J\">N</Col><Col id=\"GB_S\">N</Col><Col id=\"GB_G\">N</Col><Col id=\"GB_H\">N</Col><Col id=\"FROM\">0.001</Col><Col id=\"TO\">0.001</Col><Col id=\"AVG\">0.001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMulAdd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GB_H\" type=\"STRING\" size=\"32\"/><Column id=\"GB_S\" type=\"STRING\" size=\"32\"/><Column id=\"GB_M\" type=\"STRING\" size=\"32\"/><Column id=\"GB_O\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"GB_H\">신규화학물질</Col><Col id=\"GB_S\">작업환경측정대상유해인자</Col><Col id=\"GB_M\">마약 *</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hubHnlDisTpCdCombo", this);
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


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_catgRcmdInq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notiItmList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reqProcDtlsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srsGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srsGrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reltPrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdCertInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_apiUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">-- 선택 --</Col><Col id=\"COM_DTL_CD\">%</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","-1924",null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00","629","400",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00_00","629","463",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00","629","369",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02","629","339",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00","20","401","600","193",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00","20","370","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00","20","339","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","238",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","207",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","176",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","114",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","83",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02","555","83","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mroPrdStatsCd","415","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("R&D 상품상태 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","160","87","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reqPrdNm","20","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상품명 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","160","180","640","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","20","176","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_rndHubHnlDisTpCd","20","207","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Hub취급가능여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_txClcd","20","238","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("과면세구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12","160","243","256","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_basisUnitCd","809","176","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주문단위 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_invnYn","809","207","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqPrdNm","160","118","493","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ctrySprCd","809","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("원산지 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNo","809","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("제조원 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","339","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("R&D카테고리 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqPrvlList","20","370","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("대표규격 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00","20","401","120","193",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","1111","180","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rndHubHnlDisTpCd","160","211","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_hubHnlDisTpCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlYn","415","207","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("화학물질여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprCd","415","238","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("공용전용구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_01","555","243",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_invnYn","949","211",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgRcmdInq","658","118","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("카테고리 추천&조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","949","118","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1047","118",null,"24","58",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNo",null,"118","24","24","29",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_basisUnitQty","950","180","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.getSetter("maxlength").set("10");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","1033","180","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_unitCd","1082","180","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","1126","180","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sellUnitCd","1176","180","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprCd","949","88","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","1047","88",null,"24","58",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrySprCd",null,"88","24","24","29",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySprCd","555","242","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var rdo_pubOnlySprCd_innerdataset = new nexacro.NormalDataset("rdo_pubOnlySprCd_innerdataset", obj);
            rdo_pubOnlySprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pubOnlySprCd_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_txClcd","162","242","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_txClcd_innerdataset = new nexacro.NormalDataset("rdo_txClcd_innerdataset", obj);
            rdo_txClcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_txClcd_innerdataset);
            obj.set_text("과세");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chmMtlYn","555","211","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_chmMtlYn_innerdataset = new nexacro.NormalDataset("rdo_chmMtlYn_innerdataset", obj);
            rdo_chmMtlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chmMtlYn_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","313","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("R&D카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","631","313","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("R&D 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_brndNm","629","339","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","629","370","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00","629","401","120","63",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("배지적용");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dispPrdSpr","629","463","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdSpr","759","467",null,"24","29",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","155","343","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","273","343","307","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","2318",null,"393","20",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.tabMain);
            obj.set_text("가격정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","13",null,"32","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00","0","13","180","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("1");
            obj.set_text("기준가");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00_00","612","13","170","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("2");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_stprc","285","17","299","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dstrbStdPrc","871","17",null,"24","34",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","591","19","20","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("5");
            obj.set_text("원");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00",null,"18","20","24","8",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("6");
            obj.set_text("원");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.tabMain);
            obj.set_text("화학물질정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlList","0","11",null,"139","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("화학물질 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"화학물질명\"/><Cell col=\"1\" rowspan=\"2\" text=\"CAS No.\"/><Cell col=\"2\" colspan=\"5\" text=\"유해화학물질구분\"/><Cell col=\"7\" colspan=\"3\" text=\"함량\"/><Cell row=\"1\" col=\"2\" text=\"유독물질\"/><Cell row=\"1\" col=\"3\" text=\"제한물질\"/><Cell row=\"1\" col=\"4\" text=\"사고대비물질\"/><Cell row=\"1\" col=\"5\" text=\"금지물질\"/><Cell row=\"1\" col=\"6\" text=\"허가물질\"/><Cell row=\"1\" col=\"7\" text=\"FROM\"/><Cell row=\"1\" col=\"8\" text=\"TO\"/><Cell row=\"1\" col=\"9\" text=\"AVG\"/></Band><Band id=\"body\"><Cell text=\"bind:CHM_MTL_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CAS_NO\"/><Cell col=\"2\" text=\"bind:TOXIC_MTL1\"/><Cell col=\"3\" text=\"bind:LMT_MTL1\"/><Cell col=\"4\" text=\"bind:ACCD_PSB_MTL1\"/><Cell col=\"5\" text=\"bind:PHBT_MTL1\"/><Cell col=\"6\" text=\"bind:PERMIT_MTL1\"/><Cell col=\"7\" text=\"bind:MIN_CONTENT\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:MAX_CONTENT\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:AVG_CONTENT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00","16","160","50","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("1");
            obj.set_text("물질비중");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new MaskEdit("edt_mtlGravity","76","160","113","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("2");
            obj.set_text("1.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###.####");
            obj.set_limitbymask("both");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00","230","160","30","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("3");
            obj.set_text("성상");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Combo("cbo_phaseSprCd","266","160","126","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_phaseSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","10","195","240","22",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("5");
            obj.set_text("추가규제정보 (<fc v=\'red\'><b v=\'true\'>*</b></fc>는 체크 시 취급불가)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlAddList","0","225",null,"139","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("추가규제 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"화평/화관법\"/><Cell col=\"2\" colspan=\"2\" text=\"산업안전보건법\"/><Cell col=\"4\" colspan=\"2\" text=\"마약류관리법\"/><Cell col=\"6\" colspan=\"2\" text=\"위험물안전관리법\"/></Band><Band id=\"body\"><Cell text=\"bind:A_LAW2_VAL\" displaytype=\"expr:A_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" text=\"bind:A_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:B_LAW2_VAL\" displaytype=\"expr:B_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" text=\"bind:B_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:C_LAW2_VAL\" displaytype=\"expr:C_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" text=\"bind:C_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"bind:D_LAW2_VAL\" displaytype=\"expr:D_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:D_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_chmMtlInfoUpd",null,"160","112","24","2",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("7");
            obj.set_text("화학물질정보 수정");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.tabMain);
            obj.set_text("상품인증정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Grid("grd_prdCertInfoList","0","10",null,"139","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("구매 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_prdCertInfoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"인증명\"/><Cell col=\"1\" text=\"인증번호\"/><Cell col=\"2\" text=\"첨부파일\"/><Cell col=\"3\" text=\"구매담당자 메모\"/></Band><Band id=\"body\"><Cell text=\"bind:KC_CERT_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:KC_CERT_ITM_NO\"/><Cell col=\"2\" text=\"bind:ATFL_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:KC_CERT_NO\"/></Band></Format></Formats>");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Tabpage("tabSub04",this.tabMain);
            obj.set_text("상품고시정보 ");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_01_00","0","31",null,"32","18",null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Static("stc_09_00","6","84","330","22",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("1");
            obj.set_text("상품정보제공 고시 상세");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Static("stc_notiItmId","0","31","180","32",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmIdNm","193","35","313","24",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","6","4","330","22",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("4");
            obj.set_text("상품정보제공 고시 품목");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Button("btn_notiItmId","510","35","24","24",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Grid("grd_notiItmList","0","110",null,"250","19",null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("상품고시 품목을 선택하세요");
            obj.set_binddataset("ds_notiItmList");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"480\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:NOTI_ITM_DTL_NM\" background=\"#ebebee\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRD_NOTI_ITM_MAPP_CTS\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmId","538","35","313","24",null,null,null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqPrvlList","155","374","454","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","759","343",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","759","373",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sbiDocRegId","817","406","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_bgList");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM_DETAIL");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyStrDtm","817","435","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","950","433","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyEndDtm","966","433","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_lmt","1099","432","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("제한없음");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","156","407","454","179",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_catgRcmdInq");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"190\"/><Column size=\"70\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"속성명 (&lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;필수)\"/><Cell col=\"1\" text=\"속성값\"/><Cell col=\"2\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell cssclass=\"grd_WF_bg_image\" displaytype=\"decoratetext\" text=\"bind:PRNM\" textAlign=\"left\" expr=\"CHK_YN == 0 ? &quot;(미맵핑) &quot; + PRNM : MAND_YN == &quot;Y&quot; ? PRNM +&quot; &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;* &lt;/b&gt;&lt;/fc&gt;&quot; : PRNM\"/><Cell col=\"1\" text=\"bind:PRVL\" displaytype=\"expr:CHK_YN == 1 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:CHK_YN == 1 ? &quot;text&quot; : &quot;none&quot;\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","59","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mroPrdStatsCd","555","87","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_mroPrdStatsCd_innerdataset = new nexacro.NormalDataset("rdo_mroPrdStatsCd_innerdataset", obj);
            rdo_mroPrdStatsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">종결</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mroPrdStatsCd_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","269",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsn","20","269","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdr","809","269","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdDd","415","269","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdr","949","273",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDd","809","238","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDd","949","242",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("2021-04-29 13:54:04");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdDd","559","273","235","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsn","160","273","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","613","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("시리즈그룹상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00_00","20","842",null,"193","20",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_01","20","639",null,"203","20",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_01","20","842","120","193",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("연관상품");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_srsPrdList","155","677",null,"159","40",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_srsGrpList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("시리즈상품이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_SEQ_NM\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ATTR_LIST\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ODR_UNIT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_01_00","140","640",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_02","20","640","120","203",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("시리즈상품");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdGrpId","140","639","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdGrpNm","513","639","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDtm","863","639","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("그룹생성일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpId","263","644","215","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("RS125485");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpNm","637","644","215","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("스크류드바이알세트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","988","644",null,"24","41",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("2021-05-26 09:14:57");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reltPrdList","155","849",null,"179","40",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("연관상품이 존재하지 않습니다");
            obj.set_binddataset("ds_reltPrdList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹ID\"/><Cell col=\"1\" text=\"그룹명\"/><Cell col=\"2\" text=\"그룹생성일\"/><Cell col=\"3\" text=\"번호\"/><Cell col=\"4\" text=\"상품ID\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"대표규격\"/><Cell col=\"7\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_GRP_ID\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:PRD_GRP_NM\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:REG_DTM\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:PRD_SEQ\"/><Cell col=\"4\" text=\"bind:PRD_ID\"/><Cell col=\"5\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ATTR_LIST\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_UNIT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"2728","67","24","558",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit",null,"2728","68","24","629",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_001","20","1074",null,"248","20",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer1","61","1110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_image1","89","1286","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("이미지등록");
            this.addChild(obj.name, obj);

            obj = new Static("staHelp02_00","32","1338","478","19",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("* 상품이미지 사이즈 (1000px * 1000px)");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer2","301","1110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_image2","333","1286","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("이미지등록");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer3","544","1110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer4","787","1110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_image3","577","1286","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("이미지등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_image4","821","1286","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("이미지등록");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer5","1030","1110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_image5","1065","1286","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("이미지등록");
            this.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00","32","1358","478","19",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("* 상품이미지 등록 시 PC와 Mobile에 상세, 목록, 축소 이미지에 자동 리사이징이 적용됩니다");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00","32","1378","478","19",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("* 비율이 맞지 않는 이미지를 등록하면, 이미지가 일부 잘리거나 왜곡될 수 있습니다");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00_00","32","1398","478","19",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("* 등록 가능 이미지: 용량 1M 이하 / 확장자: gif, png. jpg(jpeg)");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00_00_00","32","1418","478","19",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("* 새로운 이미지를 등록할 경우 기존에 등록된 이미지는 자동 삭제됩니다 ");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","20","1437","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("상품 상세 설명");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","311","1081","10.37%","20",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","1081","10.37%","20",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("상세이미지");
            obj.set_textAlign("center");
            obj.set_color("blue");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","554","1081","10.37%","20",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","797","1081","10.37%","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","71","1081","10.37%","20",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1","216","1110","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear2","456","1110","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear3","699","1110","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear4","942","1110","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear5","1185","1110","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","20","1046","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("이미지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","20","2266",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","20","2235",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","20","2204",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","20","2173",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","23","2144","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("파일 첨부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00_01","20","2173","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("LOC");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00_00_00","20","2204","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("CAO");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00_00","20","2235","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("화학물질확인명세서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00","20","2266","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("등록결과(면제확인)통지서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName1","210","2177","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName2","210","2208","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_enable("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("COA파일이름.pdf");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00_00_01","616","2173","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("비공개물질확인서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00_00_00_00","616","2204","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("비공개물질체크시트");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00_00_00","616","2235","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("등록결정통지서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00","616","2266","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("시약정보요약서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName5","792","2177",null,"24","129",null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName6","792","2208",null,"24","129",null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName3","210","2239","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName4","210","2270","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file1","524","2177","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName7","792","2239",null,"24","129",null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName8","792","2270",null,"24","129",null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file2","524","2208","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file3","524","2239","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file4","524","2270","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file5",null,"2177","87","24","37",null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file6",null,"2208","87","24","37",null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file7",null,"2239","87","24","37",null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_prdDetail","20","1472",null,"399","29",null,null,null,null,null,this);
            obj.set_taborder("155");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_00","20","1877","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_purgInfoList","20","1912",null,"139","20",null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("구매 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_purgInfoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"협력사\"/><Cell col=\"3\" text=\"매입가\"/><Cell col=\"4\" text=\"최소발주수량\"/><Cell col=\"5\" text=\"배송비\"/><Cell col=\"6\" text=\"평균배송일\"/><Cell col=\"7\" text=\"공급가능\"/><Cell col=\"8\" text=\"가격유효기간\"/><Cell col=\"9\" text=\"KC인증대상\"/><Cell col=\"10\" text=\"MSDS\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"3\" text=\"bind:PRD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:MIN_ODR_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:DLCST_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DLV_LT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:SPL_PSB_YN\"/><Cell col=\"8\" text=\"bind:VLD_DATE\"/><Cell col=\"9\" text=\"bind:KC_CERT_YN\"/><Cell col=\"10\" text=\"bind:MSDS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_00_00","20","2067","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("담당자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","2095",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02_00","548","2095","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdOprtrNm","616","2095","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgOprtrNm","213","2100","366","22",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("7218376");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgOprtrNm","20","2095","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("R&D등록상품 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgHstPop",null,"57","80","24","19",null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("변경이력");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdOprtrNm","799","2100","366","22",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("R&D등록상품 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","759","406","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","365","2325","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","330","1046","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","624","1046","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file8",null,"2270","87","24","37",null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("파일 등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClPop","584","343","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save2",null,"57","67","24","104",null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","20","145",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","160","149","639","24",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_autoselect("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNo00","809","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("SSP상품명 변경여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reqPrdNm00","20","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sspPrdNmChgYn","952","150","14","24",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_00","633","511","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("API 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_bg_01","631","532",null,"32","18",null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_apiUseYn","631","532","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("API연동여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_apiUseYn","761","535","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_innerdataset("ds_apiUseYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpId","895","532","94","31",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("API연동업체");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","995","536","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","1077","536",null,"24","59",null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpId",null,"536","24","24","30",null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_bg_02","631","562",null,"32","18",null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpPrdId","631","562","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("협력사SKU");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpPrdId","761","565",null,"24","29",null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,846,this,function(p){});
            obj.set_description("R&D 상품정보 관리 상세/수정");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_bgAplyStrDtm","value","ds_master","BG_APLY_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_bgAplyEndDtm","value","ds_master","BG_APLY_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdId","value","ds_master","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_mroPrdStatsCd","value","ds_master","MRO_PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_ctrySprCd","value","ds_master","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_ctryNm","value","ds_master","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_mnfrNo","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_reprSpec","value","ds_master","OLD_ATTR_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_basisUnitQty","value","ds_master","BASIS_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_basisUnitCd","value","ds_master","BASIS_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_sellUnitCd","value","ds_master","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cbo_rndHubHnlDisTpCd","value","ds_master","HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","rdo_chmMtlYn","value","ds_master","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_invnYn","value","ds_master","INVN_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdo_txClcd","value","ds_master","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_pubOnlySprCd","value","ds_master","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_regDd","value","ds_master","SSP_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_regpsn","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_fnlUpdDd","value","ds_master","SSP_UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_fnlUpdr","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_prdClsfNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_newPrdReqPrvlList","value","ds_master","ATTR_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt_brndNm","value","ds_master","BRND_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_hashTag","value","ds_master","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_reqPrdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cbo_sbiDocRegId","value","ds_master","BG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_dispPrdSpr","value","ds_master","DISP_PRD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tabMain.tabSub01.form.msk_stprc","value","ds_master","STPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tabMain.tabSub01.form.msk_dstrbStdPrc","value","ds_master","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_purgOprtrNm","value","ds_master","PURG_OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_prdOprtrNm","value","ds_master","PRD_OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_prdGrpId","value","ds_srsGrp","PRD_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edt_prdGrpNm","value","ds_srsGrp","PRD_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edt_regDtm","value","ds_srsGrp","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tabMain.tabSub02.form.edt_mtlGravity","value","ds_master","MTL_GRAVITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tabMain.tabSub02.form.cbo_phaseSprCd","value","ds_master","PHASE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tabMain.tabSub04.form.edt_notiItmIdNm","value","ds_master","NOTI_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tabMain.tabSub04.form.edt_notiItmId","value","ds_master","NOTI_ITM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","edt_sspPrdNm","value","ds_master","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","chk_sspPrdNmChgYn","value","ds_master","SSP_PRD_NM_CHG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cbo_rndHubHnlDisTpCd00","value","ds_master","HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cbo_apiUseYn","value","ds_master","INVN_API_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","edt_cprtcpId","value","ds_master","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","edt_cprtcpNm","value","ds_master","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","edt_cprtcpPrdId","value","ds_master","CPRTCP_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_03.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_20.xfdl(R&D상품등록(자사))
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/04/27
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
        this.fv_oApp        = nexacro.getApplication();
        this.lvchkColidDs   = "MRO_PRD_STATS_CD$ORGPLC_CTRY_CD$PRD_NM$MNFR_NO$HUB_HNL_DIS_TP_CD$CHM_MTL_PRD_YN$TX_CLCD$PUB_ONLY_SPR_CD$PRD_CLCD$ATTR_LIST";
        this.lvchkColNameDs = "R&D 상품상태$원산지$상품명$제조원$Hub취급가능여부$화학물질여부$과면세구분$공용전용구분$RND카테고리$대표규격";

        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";
        this.sParamArg3     = "";

        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.webEdit        = "";								 // 스마트에디트 변수 값
        this.lvGetDate      = "";								 // 현재일자 가져오기 위한 변수 값
        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.imageFileYn    = false;							 // 이미지 및 첨부파일 구분을 위한 변수 값
        this.lv_ctryCdYn    = "";                                // 국가코드 정합성 여부
        this.lv_mnfrNoYn    = "";                                // 제조원코드 정합성 여부
        this.lv_btnChkYn    = "";
        this.lv_catgRcmdInq = false;                             // 카테고리속성 변경 여부
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

        	// 웹에디터.초기세팅 - 뷰어
        	var URL = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/index.html";
            this.wbs_prdDetail.set_url(URL);
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

            var strDs    = "ds_hubHnlDisTpCdCombo|ds_phaseSprCdCombo|ds_rndPrdAuthCombo";            // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "HUB_HNL_DIS_TP_CD|PHASE_SPR_CD|CHRPSN_TEAM_SPR_CD";                      // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|N|X";                                                                  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                                  					 // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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

        	this.ds_search.setColumn(0,"CO_CD", this.lv_coCd);
        	this.ds_search.setColumn(0,"PRD_ID",this.sParamArg1);

        	// API 사용 콤보박스 기본값 설정 : -- 선택 --
        	this.cbo_apiUseYn.set_index(0);

        	// 스마트 에디터 웹로딩후 조회 처리
        	this.fn_BgList();
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
        			case "selectBgList" :
        					this.fn_PostBgList();
        					break;
        			case "CatgAttrInfo" :
        					this.fn_PostCatgAttrInfo();
        					break;
        			case "PrdNotiPrdInq" :
        					this.fn_PostPrdNotiPrdInq();
        					break;
                    case "Save":
        					this.fn_PrdInfoCall();
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /**
         * 화학물질수정 팝업에선 저장후 넘어온 데이터셋
         */
        this.fn_dsChildCopydsDummy = function(dsChmMtlList,dsChmMtlAddList,dsUploadResult)
        {
        	this.ds_chmMtlList.copyData(dsChmMtlList);
        	this.ds_chmMtlAddList.copyData(dsChmMtlAddList);

        	if(dsUploadResult.getRowCount() > 0)
        	{
        		this.ds_saveFileList.set_updatecontrol(false);
        		var nRow = this.ds_saveFileList.addRow();
        		this.ds_saveFileList.copyRow(nRow,dsUploadResult,0);
        		this.ds_saveFileList.setColumn(nRow,"ETC_FDS_1","1");
        		this.ds_saveFileList.set_updatecontrol(true);
        		this.edt_fileName8.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        		this.edt_fileName_onchanged(this["edt_fileName8"],new nexacro.ChangeEventInfo());
        	}
        	else
        	{
        		var findRow = this.ds_saveFileList.findRow("ETC_FDS_2","S2");

        		if(findRow != -1)
        		{
        			this.edt_fileName8.set_value("");
        			this.ds_saveFileList.set_updatecontrol(false);
        			this.ds_saveFileList.deleteRow(findRow);
        			this.ds_saveFileList.set_updatecontrol(true);
        		}
        	}
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_PreBgList = function()
        {
        	return true;
        }

        /**
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_BgList = function()
        {
            if(!this.fn_PreBgList())
            {
                return false;
            }

            var strSvc      = "selectBgList";
            var strUrl      = "/rd/new-prd-req-lst/select-bg-list-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_bgList=ds_bgList";
            var strArg      = "";
            var strCallBack = "fn_callBack";     //공백일시 기본 fn_callBack
            var strASync    = true;              //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_PostBgList = function()
        {
        	var nRow = this.ds_bgList.insertRow(0);
        	this.ds_bgList.setColumn(nRow,"BG_SEQ",null);
        	this.ds_bgList.setColumn(nRow,"BG_NM", "선택");

        	// 조회 호출
        	this.fn_Ret();
        };

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
            var strUrl      = "/rd/prd-info-mng/select-prd-info-mng-dtl-upd-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        		            + " ds_catgRcmdInq=ds_catgRcmdInq"
        		            + " ds_notiItmList=ds_notiItmList"
        		            + " ds_saveFileList=ds_saveFileList"
        					+ " ds_srsGrp=ds_srsGrp"
        					+ " ds_srsGrpList=ds_srsGrpList"
        					+ " ds_reltPrdList=ds_reltPrdList"
        					+ " ds_purgInfoList=ds_purgInfoList"
        					+ " ds_chmMtlList=ds_chmMtlList"
        					+ " ds_chmMtlAddList=ds_chmMtlAddList"
        					+ " ds_prdCertInfoList=ds_prdCertInfoList";
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
        	var contents = "";
        		contents = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DTL_DESC"),"");
        		contents = this.fn_getDecodeString(contents);

        	//에디터의 editorData textarea에 세팅한다.
        	this.webEdit.getProperty("editorData").setProperty("value",this.gfn_nvl(contents,""));
        	//에디터 내의 이벤트 강제 호출로 에디터 안으로 값 넣는다.
        	this.webEdit.getProperty("setData").callMethod("click");

        	// 배지 이미지 조회
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"BG_SEQ"),"") != "")
        	{
        		var findRow     = this.ds_bgList.findRow("BG_SEQ",this.ds_master.getColumn(0,"BG_SEQ"))
        		var filePath 	= this.ds_bgList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(findRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(findRow,"ORI_ATFL_NM");

        		this.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화
        		this.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화

        		// 제한없음 체크
        		if(this.gfn_nvl(this.ds_master.getColumn(0,"BG_APLY_END_DTM"),"").indexOf("99991231") != -1)
        		{
        			this.cal_bgAplyStrDtm.set_readonly(true);			// 배지 적용시작일자 비활성화
        			this.cal_bgAplyEndDtm.set_readonly(true);			// 배지 적용종료일자 비활성화
        			this.chk_lmt.set_value(true);
        		}

        		this.ImageViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        	}
        	else
        	{
        		this.ds_master.setColumn(0,"BG_SEQ",null);
        	}

        	// 이미지 & 첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		var imgList  = [["60","1"],["61","2"],["62","3"],["63","4"],["80","5"]];
        		var fileList = [["9A","1"],["9B","2"],["9C","3"],["9D","4"],["9E","5"],["9F","6"],["9G","7"],["S2","8"]];

        		for(var idx=0; idx<this.ds_saveFileList.rowcount; idx++)
        		{
        			var filePath    = this.ds_saveFileList.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName    = this.ds_saveFileList.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx,"ETC_FDS_2");

        			// 이미지 파일 Set
        			for(var jdx=0; jdx<imgList.length; jdx++)
        			{
        				if(strEtcFds2 == imgList[jdx][0])
        				{
        					this["ImageViewer"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        				}
        			}
        			// 첨부파일 Set
        			for(var kdx=0; kdx<fileList.length; kdx++)
        			{
        				if(strEtcFds2 == fileList[kdx][0])
        				{
        					this["edt_fileName"+fileList[kdx][1]].set_value(fileOrgName);
        					this.edt_fileName_onchanged(this["edt_fileName"+fileList[kdx][1]],new nexacro.ChangeEventInfo());
        				}
        			}
        		}
        	}

        	// 취급불가물질(*)인 경우 상품상태를 사용, 미사용으로 변경 불가
        	if(this.ds_chmMtlAddList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_chmMtlAddList.getRowCount(); idx++)
        		{
        			var strAVal = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"A_LAW2_VAL"),"");
        			var strANm  = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"A_LAW2_NM"), "");
        			var strBVal = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"B_LAW2_VAL"),"");
        			var strBNm  = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"B_LAW2_NM"), "");
        			var strCVal = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"C_LAW2_VAL"),"");
        			var strCNm  = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"C_LAW2_NM"), "");
        			var strDVal = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"D_LAW2_VAL"),"");
        			var strDNm  = this.gfn_nvl(this.ds_chmMtlAddList.getColumn(idx,"D_LAW2_NM"), "");

         			if((strANm.indexOf("*") != -1 && strAVal == 1)
         			|| (strBNm.indexOf("*") != -1 && strBVal == 1)
         			|| (strCNm.indexOf("*") != -1 && strCVal == 1)
         			|| (strDNm.indexOf("*") != -1 && strDVal == 1))
         			{
         				this.rdo_mroPrdStatsCd.set_readonly(true);
         				return false;
         			}
        		}
        	}

        	// List Price값 세팅. List Price가 바뀌었을 경우에만 상품가격이력 테이블에 넣음
        	this.ds_master.setColumn(0,"OLD_DSTRB_STD_PRC", this.ds_master.getColumn(0, "DSTRB_STD_PRC"));

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();

        	//ssp상품명 제어
            this.fn_sspPrdNmChgControl(this.ds_master.getColumn(0, "SSP_PRD_NM_CHG_YN"));
        };

        /**
         * 기능 : 카테고리속성 조회 전 실행
         */
        this.fn_PreCatgAttrInfo = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 카테고리속성 조회 실행
         */
        this.fn_CatgAttrInfo = function()
        {
            if(!this.fn_PreCatgAttrInfo())
            {
                return false;
            }
            var strSvc      = "CatgAttrInfo";
            var strUrl      = "/rd/prd-info-mng/select-catg-attr-info.do";
            var strInDs     = "";
            var strOutDs    = "ds_catgRcmdInq=ds_catgRcmdInq";
            var strArg      = "PRD_ID="        + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"PRD_ID"))
        	                + " PRD_CLCD="     + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"PRD_CLCD"))
        					+ " OLD_PRD_CLCD=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"OLD_PRD_CLCD"))
        	                + " CO_CD="        + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"));
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
         * 기능 : 카테고리속성 조회 후 실행
         */
        this.fn_PostCatgAttrInfo = function()
        {
        	// 카테고리 속성 변경 초기화
        	this.lv_catgRcmdInq = false;
        	this.edt_newPrdReqPrvlList.set_value("");

        	// 카테고리속성에 맵핑된 상품고시 존재시
        	if(this.ds_catgRcmdInq.getRowCount() > 0)
        	{
        		var textLen = "";

        		for(var idx=0; idx<this.ds_catgRcmdInq.getRowCount(); idx++)
        		{
        			var val      = this.ds_catgRcmdInq.getColumn(idx,"PRVL");
        			var strChkYn = this.ds_catgRcmdInq.getColumn(idx,"CHK_YN");

        			if(this.gfn_nvl(val,"") != "" && strChkYn == 1)
        			{
        				if(textLen != "")
        				{
        					textLen += ";";
        				}
        				textLen += val;
        			}
        		}

        		this.edt_newPrdReqPrvlList.set_value(textLen);

        		var strNotiItmId = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_ID");
        		var strNotiItmNm = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_NM");

        		if(!this.gfn_isNull(strNotiItmId))
        		{
        			this.tabMain.tabSub04.form.edt_notiItmId.set_value(strNotiItmId);
        			this.tabMain.tabSub04.form.edt_notiItmIdNm.set_value(strNotiItmNm);
        			this.fn_PrdNotiPrdInq();
        		}
        	}
        };

        /**
         * 기능 : 상품고시정보 조회 전 실행
         */
        this.fn_PrePrdNotiPrdInq = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 상품고시정보 조회 실행
         */
        this.fn_PrdNotiPrdInq = function()
        {
            if(!this.fn_PrePrdNotiPrdInq())
            {
                return false;
            }
            var strSvc      = "PrdNotiPrdInq";
            var strUrl      = "/rd/new-prd-req-lst/select-prd-noti-prd-inq.do";
            var strInDs     = "";
            var strOutDs    = "ds_notiItmList=ds_notiItmList";
            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"CO_CD"))
        	                + " NOTI_ITM_ID=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"NOTI_ITM_ID"));
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
         * 기능 : 상품고시정보 조회 후 실행
         */
        this.fn_PostPrdNotiPrdInq = function()
        {

        };

        this.fn_sspPrdNmChgControl = function(val){
        	if(val == 'Y'){
        		this.edt_sspPrdNm.set_readonly(false);
        	}else{
        		this.edt_sspPrdNm.set_readonly(true);
        	}
        }
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_PreSave();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	// 웹에디터.변경전 값과 변경 후 값을 세팅
        	this.webEdit.getProperty("getData").callMethod("click");
            var isUpdateEditor = this.gfn_nvl(this.webEdit.getProperty("editorData").getProperty("value"),"");
        	var strPrdDtlDesc  = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DTL_DESC"),"");

            if(!this.gfn_dsIsUpdated(this.ds_master) && !this.gfn_dsIsUpdated(this.ds_saveFileList)
        	&& !this.gfn_dsIsUpdated(this.ds_catgRcmdInq) && !this.gfn_dsIsUpdated(this.ds_notiItmList)
        	&& (isUpdateEditor == strPrdDtlDesc))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.!
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_master, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this, true);

            if (result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 주문단위 기본단위코드 & 판매단위코드가 같으면 안됨!!
        	if(this.edt_basisUnitCd.value == this.edt_sellUnitCd.value)
        	{
        		this.fn_alert("ERRR000207","저장정보","","question"); // 기본주문단위와 판매주문단위를 동일하게 입력을 하실수 없습니다.
        		this.edt_sellUnitCd.setFocus();
        		return false;
        	}

        	// 주문단위 수량이 2이상인 경우, 판매단위 필수 입력 체크
        	if(this.edt_basisUnitQty.value > 1)
        	{
        		if(this.gfn_isNull(this.edt_sellUnitCd.value))
        		{
        			this.fn_alert("ERRR000221","저장정보","","question"); // 기본주문단위 수량이 2 이상인 경우 판매주문단위를 필수로 입력 하셔야 합니다.
        			this.edt_sellUnitCd.setFocus();
        			return false;
        		}
        	}

        	if(this.ds_catgRcmdInq.getRowCount() == 0)
        	{
        		this.fn_alert("ERRS000144","저장정보","R&D카테고리속성","question"); //&1은(는) 필수입력사항입니다.
        		this.scrollTo(150,240);
        		this.grd_mroAttr.setFocus();
        		return false;
        	}

        	for(var idx=0; idx<this.ds_catgRcmdInq.getRowCount(); idx++)
        	{
        		var strPrnm          = this.ds_catgRcmdInq.getColumn(idx,"PRNM");
        		var strMandYn        = this.ds_catgRcmdInq.getColumn(idx,"MAND_YN");
        		var strNewPrdReqPrvl = this.gfn_trim(this.gfn_nvl(this.ds_catgRcmdInq.getColumn(idx,"PRVL"),""));

        		if(strMandYn == "Y")
        		{
        			if(strNewPrdReqPrvl == "")
        			{
        				this.fn_alert("ERRR000170","저장정보",strPrnm,"question"); // 카테고리 필수입력 &1 속성값을 입력 하셔야 합니다.
        				this.scrollTo(150,240);
        				this.grd_mroAttr.setFocus();
        				this.ds_catgRcmdInq.set_rowposition(idx);
        				this.grd_mroAttr.setCellPos(this.grd_mroAttr.getBindCellIndex("body","PRVL"));
        				this.grd_mroAttr.showEditor();
        				return false;
        			}
        		}
        	}

        	// 카테고리속성 값 변경 되었을 경우 카테고리 속성 전체 재정리
        	if(this.ds_master.getColumn(0,"PRD_CLCD") != this.ds_master.getColumn(0,"OLD_PRD_CLCD"))
        	{
        		this.lv_catgRcmdInq = true;
        	}

        	// 상품고시정보 미입력시 필수 사항 체크
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"NOTI_ITM_NM"),"") == "")
        	{
        		this.fn_alert("ERRS000144.","저장정보","상품고시정보","question"); //&1은(는) 필수입력사항입니다.
        		this.tabMain.set_tabindex(2);
        		return false;
        	}
        	/* 2022-07-07 고시상품품목 필수 체크 해지 요청 나중에 혹시 몰라 주석으로 막아둡니다.
        	else
        	{
        		for(var idx=0; idx<this.ds_notiItmList.getRowCount(); idx++)
        		{
        			var strNotiItmDtlNm      = this.ds_notiItmList.getColumn(idx,"NOTI_ITM_DTL_NM");
        			var strPrdNotiItmMappCts = this.ds_notiItmList.getColumn(idx,"PRD_NOTI_ITM_MAPP_CTS");

        			if(this.gfn_nvl(strPrdNotiItmMappCts,"") == "")
        			{
        				this.fn_alert("ERRR000171","저장정보", (idx+1) + "," + strNotiItmDtlNm ,"question");    //상품고시정보 &1번째 &2 고시 상세를 입력 하셔야 합니다.
        				this.tabMain.set_tabindex(3);
        				this.ds_notiItmList.set_rowposition(idx);
        				this.tabMain.tabSub04.form.grd_notiItmList.setCellPos(this.tabMain.tabSub04.form.grd_notiItmList.getBindCellIndex("body","PRD_NOTI_ITM_MAPP_CTS"));
        				this.tabMain.tabSub04.form.grd_notiItmList.showEditor();
        				return false;
        			}
        		}
        	}
        	*/

        	// 30 * 1,024 * 1,024 = 31,457,280 size
        	// 1 * 1,024 * 1,024  =  1,048,576 size
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "del")
        			{
        				continue;
        			}

        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2").substr(0,1) == "9")
        			{
        				if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        				{
        					this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 &1를 초과 합니다.
        					return false;
        				}
        			}
        			else
        			{
        				// 상세이미지는 용량 제한 해제
        				if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "80")
        				{
        					continue;
        				}

        				if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        				{
        					this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 &1를 초과 합니다.
        					return false;
        				}
        			}
        		}
        	}

        	// 배지적용일자 같은날은 등록 불가 체크
        	if(!this.gfn_isNull(this.cbo_sbiDocRegId.value))
        	{
        		if(this.cal_bgAplyStrDtm.value == this.cal_bgAplyEndDtm.value)
        		{
        			this.fn_alert("ERRR000228","저장정보","","question"); // 배지적용 시작일자와 종료일자가 동일 하면 안됩니다.
        			this.cal_bgAplyEndDtm.setFocus();
        			return false;
        		}
        	}

        	// 배지적용일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_bgAplyStrDtm
        	                             ,this.cal_bgAplyEndDtm
        								 ,"배지적용"
        								 ,true))
        	{
        		return false;
        	}

        	// 웹에디터 변경전, 후 값 세팅
        	this.webEdit.getProperty("getData").callMethod("click");
            this.ds_master.setColumn(0,"PRD_DTL_DESC", this.webEdit.getProperty("editorData").getProperty("value"));

        	// 국가코드 & 제조원 정합성 체크
        	if(!this.fn_codeChkYn())
        	{
        		return false;
        	}

        	// API연동여부 = 'Y'일 떄, API연동업체와 협력사SKU 필수선택 정합성확인
        	if(this.cbo_apiUseYn.value == "Y"  )
        	{
        		if(this.edt_cprtcpNm.value == null || this.edt_cprtcpNm.value == '' || this.edt_cprtcpId.value == null || this.edt_cprtcpId.value == '')
        		{
        			this.fn_alert("ERRP000314","저장정보","","question"); // API연동업체를 선택해주세요.
        			this.edt_cprtcpId.setFocus();
        			return false;
        		}

        		if(this.edt_cprtcpPrdId.value == null || this.edt_cprtcpPrdId.value == '')
        		{
        			this.fn_alert("ERRP000315","저장정보","","question"); // 협력사SKU를 입력해주세요.
        			this.edt_cprtcpPrdId.setFocus();
        			return false;
        		}
        	}

            var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            this.gfn_openPopup("btn_save", "PR_POP::SSP_BO_NA_27.xfdl", null, "fn_popupCallback", null);

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	var catgRcmdInq = this.lv_catgRcmdInq ? " ds_catgRcmdInq=ds_catgRcmdInq:a" : " ds_catgRcmdInq=ds_catgRcmdInq:u";
            var strSvc      = "Save";
            var strUrl      = "/rd/prd-info-mng/save-prd-info-mng.do";
            var strInDs     = "ds_master=ds_master:u"
        		            + catgRcmdInq
        		            + " ds_notiItmList=ds_notiItmList:u"
        		            + " ds_saveFileList=ds_saveFileList:u";
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
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        };

        /**
         * 기능 : 상품 동기화 I/F 실행
         */
        this.fn_PrdInfoCall = function()
        {
            var strSvc      = "CallPi";
            var strUrl      = "/rd/prd-info-mng/call-prd-info-mng.do";
            var strInDs     = "ds_master=ds_master";
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
        // /**********************************************************************
        //         09. 초기화
        // ***********************************************************************/
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
        							btn_exit  : this.btn_exit
        						  , btn_close : this.btn_close
        						  , btn_chgHstPop : this.btn_chgHstPop
        	                      };
        	var btnVisibleFalse = {
        							btn_Save  : this.btn_Save
        						  , btn_Save2 : this.btn_Save2
        						// , btn_rjct : this.btn_rjct
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        // /**********************************************************************
        //         14. 기타 Control Event
        // ***********************************************************************/
        /**
         * R&D카테고리 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PRD_CLCD")
        	{
        		if(!this.gfn_isNull(e.newvalue))
        		{
        			obj.set_enableevent(false);
        			this.fn_setCallPopup3(e.newvalue);
        			obj.set_enableevent(true);
        		}
        	}
        };

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, strVal)
        {
            switch(svcID)
        	{
        		// 카테고리 추천&조회 팝업 후처리
        		case "btn_catgRcmdInq" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// R&D카테고리 조회 팝업 후처리
        		case "btn_prdClPop" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 제조원 조회팝업 후처리
        		case "btn_mnfrNo" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);

        					this.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        					this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 원산지 조회팝업 후처리
        		case "btn_ctrySprCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_ctrySprCd.set_value(jsonData.CTRY_SPR_CD);
        					this.edt_ctryNm.set_value(jsonData.CTRY_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 기본주문단위 조회팝업 후처리
        		case "btn_unitCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_basisUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 판매주문단위 조회팝업 후처리
        		case "btn_sellUnitCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_sellUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품고시 조회 팝업 후처리
        		case "btn_notiItmId" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.tabMain.tabSub04.form.edt_notiItmId.set_value(jsonData.NOTI_ITM_ID);
        					this.tabMain.tabSub04.form.edt_notiItmIdNm.set_value("("+jsonData.NOTI_ITM_ID + ") " + jsonData.NOTI_ITM_NM);
        					this.fn_PrdNotiPrdInq();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// API협력업체 조회팝업 후처리
        		case "btn_cprtcpId" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(JSON.parse(strVal))

        					this.edt_cprtcpId.set_value(jsonData.COM_DTL_CD);
        					this.edt_cprtcpNm.set_value(jsonData.COM_DTL_CD_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 화학물질정보 수정 팝업 후처리
        		case "SSP_BO_RD_45" :
        				 if(!this.gfn_isNull(strVal))
        				 {
        					 // 일반
        					 var sRtn = strVal.split(",");

        					 if(sRtn[0] == "SAVE")
        					 {
        						  this.ds_master.setColumn(0,"MTL_GRAVITY", sRtn[1]);	// 물질비중
        						  this.ds_master.setColumn(0,"PHASE_SPR_CD",sRtn[2]);	// 성상
        					 }
        				 }
        		     break;
        		// 저장 버튼 클릭후 수정사유 등록시
        		case "btn_save" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.ds_master.setColumn(0,"UPD_RSN",jsonData.UPD_RSN);
        					this.fn_Save();
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_RD_56" :                         // 변경 이력 처리시
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

        				}
                    }
        		    break;
        		default :
        			break;
            }
        }

        /**
         * 카테고리 추천&조회 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_catgRcmdInq_onclick = function(obj,e)
        {
        	var params  = { mnfrNo    : this.edt_mnfrNo.value
        	              , mnfrNm    : this.edt_mnfrNm.value
        				  , prdNm     : this.edt_reqPrdNm.value
        				  , coCd      : this.lv_coCd
        				  , mallSprCd : "20" };

            var options = { title : "카테고리 추천&조회" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_49.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * R&D카테고리 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_prdClPop_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdClcd.value);
        	this.fn_setCallPopup3(sCodeId);
        };

        /**
         * R&D카테고리 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_prdClcd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_prdClsfNm.set_value("");
        	}
        };

        /**
         * R&D카테고리 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdClcd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup3(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup3 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_CLCD",  sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

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
        		this.edt_prdClcd.set_value(this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.edt_prdClsfNm.set_value(this.ds_popupList.getColumn(0,"FULL_PRD_CLSF_NM"));
        		this.fn_CatgAttrInfo();
        	}
        	else
        	{
        		var params  = { coCd      : this.lv_coCd
        				      , mallSprCd : "20"
        				      , prdClcd   : sCodeId
        				      , prdClsfNm : this.ds_master.getColumn(0,"PRD_CLCD_NM")
        					  }

        		var options = { title : "카테고리" };

        		this.gfn_openPopup("btn_prdClPop", "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 제조원 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_mnfrNo_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_mnfrNm.set_value("");
        	}
        };

        /**
         * 조회조건 제조원 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_mnfrNo_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_mnfrNo.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup2(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup2 = function(sCodeId)
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
        		this.edt_mnfrNo.set_value(this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0,"MNFR_NM"));
        	}
        	else
        	{
        		var params  = { mnfrNo : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : "제조원" };

        		this.gfn_openPopup("btn_mnfrNo", "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 제조원 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_mnfrNo_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_mnfrNo.value);
        	this.fn_setCallPopup2(sCodeId);
        };

        /**
         * 원산지 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_ctrySprCd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_ctryNm.set_value("");
        	}
        };

        /**
         * 원산지 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_ctrySprCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_ctrySprCd.value);

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
         * 기본주문단위 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_unitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_basisUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "기본 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 판매주문단위 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_sellUnitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_sellUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "판매 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
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
        		this.ds_input.setColumn(nRow,"CTRY_SPR_CD",sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-ctry-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_output1";                            // 물리적 생성 ds_popupList
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
        		this.edt_ctrySprCd.set_value(this.ds_popupList.getColumn(0,"CTRY_SPR_CD"));
        		this.edt_ctryNm.set_value(this.ds_popupList.getColumn(0,"CTRY_NM"));
        	}
        	else
        	{
        		var params  = { ctrySprCd : sCodeId
        					  , coCd      : this.lv_coCd };

        		var options = { title : "원산지" };

        		this.gfn_openPopup("btn_ctrySprCd", "PR_POP::SSP_BO_PP_09.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 원산지 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_ctrySprCd_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_ctrySprCd.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 기본주문단위 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_unitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_basisUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "기본 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 판매주문단위 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_sellUnitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_sellUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "판매 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * Hub취급가능여부 콤보값 변경시 canitemchange 이벤트 발생 처리
         */
        this.cbo_rndHubHnlDisTpCd_canitemchange = function(obj,e)
        {
        	// 유해화학물질 존재시 시약정보요약서 파일 필수 체크
        	if(this.ds_chmMtlList.getCaseCount("TOXIC_MTL1 == 'Y'")    > 0       /*유독물질*/
        	|| this.ds_chmMtlList.getCaseCount("LMT_MTL1 == 'Y'")      > 0       /*제한물질*/
        	|| this.ds_chmMtlList.getCaseCount("ACCD_PSB_MTL1 == 'Y'") > 0       /*사고대비물질*/
        	|| this.ds_chmMtlList.getCaseCount("PHBT_MTL1 == 'Y'")     > 0       /*금지물질*/
        	|| this.ds_chmMtlList.getCaseCount("PERMIT_MTL1 == 'Y'")   > 0)      /*허가물질*/
        	{
        		if(e.postvalue != "9" && e.postvalue != "A")
        		{
        			this.fn_alert("ERRR000225","알림정보","","question");   // 유해화학물질인 경우 허브취급가능여부를 불가(유해화학물질), 불가(택배운송 금지물질)외에 다른 유형으로 변경 불가 합니다.
        			obj.setFocus();
        			return false;
        		}
        	}
        };

        /**
         * 배지 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.cbo_sbiDocRegId_onitemchanged = function(obj,e)
        {
        	var nRow     = this.ds_bgList.findRow("BG_SEQ",e.postvalue);
        	var imageUrl = "";

        	this.cal_bgAplyStrDtm.set_readonly(true);	// 배지 적용시작일자 비활성화
        	this.cal_bgAplyEndDtm.set_readonly(true);	// 배지 적용종료일자 비활성화
        	this.chk_lmt.set_enable(false);				// 배지 제한없음 체크박스 비활성화

        	if(nRow > 0)
        	{
        		var filePath 	= this.ds_bgList.getColumn(nRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(nRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(nRow,"ORI_ATFL_NM");

        		imageUrl = this.fn_imageViewerUrl(filePath,fileOrgName,fileName);

        		this.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화

        		var date 	= new Date();
        	    var iYear 	= parseInt(this.lvGetDate.substr(0, 4));
                var iMonth 	= parseInt(this.lvGetDate.substr(4, 2) - 1);
                var iDate 	= parseInt(this.lvGetDate.substr(6, 2)-(1*-1));
                date.setFullYear(iYear,iMonth,iDate);

        		this.cal_bgAplyEndDtm.set_value(date);	            // 배지 적용종료일자 오늘 날짜 기본 Set
        		this.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.chk_lmt.set_value(false);						// 배지 제한없음 체크박스 값 초기화
        		this.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화
        	}

        	this.ImageViewer.set_image(imageUrl);
        };

        /**
         * 배지 [제한없음] 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.chk_lmt_onchanged = function(obj,e)
        {
        	this.cal_bgAplyStrDtm.set_readonly(false);	// 배지 적용시작일자 활성화
        	this.cal_bgAplyEndDtm.set_readonly(false);	// 배지 적용종료일자 활성화

        	if(e.postvalue)
        	{
        		this.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.cal_bgAplyStrDtm.set_readonly(true);			// 배지 적용시작일자 비활성화
        		this.cal_bgAplyEndDtm.set_value("99991231");		// 배지 적용종료일자 99991231 기본 Set
        		this.cal_bgAplyEndDtm.set_readonly(true);			// 배지 적용종료일자 비활성화
        	}
        };

        /**
         * 상품고시정보 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.tabMain_tabSub04_btn_notiItmId_onclick = function(obj,e)
        {
        	var params  = { notiItmId : this.tabMain.tabSub04.form.edt_notiItmId.value
        				  , notiItmNm : ""
        				  , coCd      : this.lv_coCd};

            var options = { title : this.tabMain.tabSub04.form.stc_notiItmId.text };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_47.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 이미지취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_clear_onclick = function(obj,e)
        {
        	var fileList       = ["","60","61","62","63","80"];
        	this.imageViewerId = this["ImageViewer"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];

        	var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

        	if(result)
        	{
        		var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        		this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        		this.imageViewerId.set_image("");
        	}
        };

        /**
         * 이미지등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_image_onclick = function(obj,e)
        {
        	var fileList       = ["","60","61","62","63","80"];
        	this.imageViewerId = this["ImageViewer"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.imageFileYn   = true;

        	this.FileUploadSingle.deleteItem(0);
        	this.FileUploadSingle.appendItem();
        	this.FileUploadSingle.filefindbuttons[0].click();
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	//SSP-1859_SA_김윤호_20221101_기획전썸네일이미지오류
        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2", "del");

        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(this.imageFileYn)
        	{
        		if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        		  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        		{
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        			return false;
        		}
        	}
        	else
        	{
        		if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        		  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        		  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        		  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        		  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        		  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        		  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        		  || sCompValue.toUpperCase() == "HWP"))
        		{
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        			return false;
        		}
        	}

        	var sFilePath = this.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DOC_REG_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + this.fileIndex;

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        	var etcFds5 = this.ds_saveFileList.findRow("ETC_FDS_5",this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2",etcFds5);

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DOC_REG_ID"),"") == "")
        	{
        		this.ds_master.setColumn(0,"PRD_DOC_REG_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	if(this.imageFileYn)
        	{
        		this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.imageViewerId);
        	}
        	else
        	{
        		this.imageViewerId.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        		this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        	}
        };

        /*
        	이미지 첨부파일 업로드 실패 시 onerror 이벤트 처리
        */
        this.FileUploadSingle_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> 파일 업로드 에러 발생 >>>>>>>>\n";
        	msg += "error type : " + e.errortype + "\n";
        	msg += "error message : " + e.errormsg + "\n";
        	msg += "status code : " + e.statuscode;

        	this.nRow = -1;

        	this.alert(msg);
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭 시 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {
        	var fileList       = ["","9A","9B","9C","9D","9E","9F","9G","S2"];
        	this.imageViewerId = this["edt_fileName"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.imageFileYn   = false;

        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.imageViewerId.set_value("");
        			this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 첨부파일 다운로드 클릭 시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	var fileList       = ["","9A","9B","9C","9D","9E","9F","9G","S2"];
        	this.imageViewerId = this["edt_fileName"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	var findRow        = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);

        	if(this.gfn_nvl(this.imageViewerId.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경 시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e)
        {
        	this["btn_file"+obj.name.substr(obj.name.length-1,obj.name.length)].set_text("파일 등록");
        	obj.set_cursor("");

        	if(obj.value != "")
        	{
        		obj.set_cursor("pointer");
        		this["btn_file"+obj.name.substr(obj.name.length-1,obj.name.length)].set_text("삭제");
        	}
        };

        /**
         * 화학물질정보수정 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.tabMain_tabSub02_btn_chmMtlInfoUpd_onclick = function(obj,e)
        {
        	var params  = { prdId    : this.edt_prdId.value
        				  , coCd     : this.lv_coCd
        				  , popId    : "SSP_BO_RD_03"
        				  , saveMode : "U"
        				  };

        	this.fn_setCallPopup(params);
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;	    	// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.prdId;				// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.coCd;				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.popId;	  		    // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = "";						// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_45";
        	var sUrl 		    = "RD::SSP_BO_RD_45.xfdl";
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
         * 에디터 뷰어 웹페이지 활성화 후 onloadcompleted 이벤트 발생 처리
         */
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.webEdit = this.wbs_prdDetail.getProperty("document").getProperty("all");

        	this.fn_formInit();
        };

        /**
         * 카테고리속성 속성값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_catgRcmdInq_oncolumnchanged = function(obj,e)
        {
        	var textLen = "";
        	this.edt_newPrdReqPrvlList.set_value("");

        	for(var idx=0; idx<obj.getRowCount(); idx++)
        	{
        		var val = obj.getColumn(idx,"PRVL");

        		if(this.gfn_nvl(val,"") != "")
        		{
        			if(textLen != "")
        			{
        				textLen += ";";
        			}
        			textLen += val;
        		}
        	}

        	this.edt_newPrdReqPrvlList.set_value(textLen);
        };

        /**
         * 국가코드 or 제조원코드 정합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	// 국가코드 & 제조원 정합성 체크
        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/new-prd-req-lst/select-cd-chk-yn-inq.do";
            var strInDs     = "";
            var strOutDs    = "";
            var strArg      = "CO_CD="           + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"))
        	                + " ORGPLC_CTRY_CD=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"ORGPLC_CTRY_CD"))
        					+ " MNFR_NO="        + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"MNFR_NO"));
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	// 제조원코드 정합성 불일치시
        	if(this.lv_mnfrNoYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","제조원 코드","question"); // 존재하지 않는 &1 입니다.
        		this.edt_mnfrNo.setFocus();
        		return false;
        	}
        	// 국가코드 정합성 불일치시
        	if(this.lv_ctryCdYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","원산지 코드","question"); // 존재하지 않는 &1 입니다.
        		this.edt_ctrySprCd.setFocus();
        		return false;
        	}

        	return true;
        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000060", "취소","", "question" ); // 수정을 취소하고 목록으로 이동하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000060", "취소","", "question" ); // 수정을 취소하고 목록으로 이동하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        this.btn_chgHstPop_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "FORMAT01";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_INFO_HST";			                         // 로그테이블 이름(담당자 로그-구매/상품담당자)
        	var lv_sValue01 		= this.ds_master.getColumn(0, "PRD_ID_VIEW");	         // 상품코드
        	var lv_sValue02 		= "";
        	var lv_sValue03 		= "";
        	var lv_sValue04 		= "";
        	var lv_sValue05		    = "";

        	var sPopId 			= "SSP_BO_RD_56";
        	var sUrl 			= "RD_POP::SSP_BO_RD_56.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	  // GRID(그리드)에 formatid:포멧ID
        						  , pv_sOp02:lv_sFlag02       	  // 로그테이블 이름
        						  , pv_sVal01:lv_sValue01         // 파라미터1
        						  , pv_sVal02:lv_sValue02         // 파라미터2
        						  , pv_sVal03:lv_sValue03         // 파라미터3
        						  , pv_sVal04:lv_sValue04         // 파라미터4
        						  , pv_sVal05:lv_sValue05};       // 파라미터5
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };
        this.chk_sspPrdNmChgYn_onchanged = function(obj,e)
        {
        	this.fn_sspPrdNmChgControl(e.postvalue);
        };


        /**
         * API 연동업체 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_cprtcpId_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * API 연동업체 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_cprtcpId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpId.value);

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
         * API 연동업체 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_cprtcpId_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpId.value);
        	this.fn_setCallPopup4(sCodeId);
        };

        /**
         * API 연동업체 팝업오픈 함수
         */
        this.fn_setCallPopup4 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();
        	var xComClsfCd = "API_CPRTCP_ID";

        	var params  = { comClsfCd : xComClsfCd, comCdDtl : sCodeId, coCd : this.lv_coCd };
        	var options = { title  : "API연동업체" };
        	this.gfn_openPopup("btn_cprtcpId", "CO_POP::SSP_BO_PP_45.xfdl", params, "fn_popupCallback", options);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.edt_reqPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_reqPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.cbo_rndHubHnlDisTpCd.addEventHandler("canitemchange",this.cbo_rndHubHnlDisTpCd_canitemchange,this);
            this.btn_catgRcmdInq.addEventHandler("onclick",this.btn_catgRcmdInq_onclick,this);
            this.edt_mnfrNo.addEventHandler("oninput",this.edt_mnfrNo_oninput,this);
            this.edt_mnfrNo.addEventHandler("onkeyup",this.edt_mnfrNo_onkeyup,this);
            this.btn_mnfrNo.addEventHandler("onclick",this.btn_mnfrNo_onclick,this);
            this.edt_basisUnitQty.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_basisUnitQty.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_unitCd.addEventHandler("onclick",this.btn_unitCd_onclick,this);
            this.btn_sellUnitCd.addEventHandler("onclick",this.btn_sellUnitCd_onclick,this);
            this.edt_ctrySprCd.addEventHandler("oninput",this.edt_ctrySprCd_oninput,this);
            this.edt_ctrySprCd.addEventHandler("onkeyup",this.edt_ctrySprCd_onkeyup,this);
            this.btn_ctrySprCd.addEventHandler("onclick",this.btn_ctrySprCd_onclick,this);
            this.edt_prdClcd.addEventHandler("oninput",this.edt_prdClcd_oninput,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.edt_prdClcd_onkeyup,this);
            this.tabMain.tabSub01.form.stcTitle01_00_00.addEventHandler("onclick",this.tabMain_tabSub01_stcTitle01_00_00_onclick,this);
            this.tabMain.tabSub02.form.btn_chmMtlInfoUpd.addEventHandler("onclick",this.tabMain_tabSub02_btn_chmMtlInfoUpd_onclick,this);
            this.tabMain.tabSub04.form.btn_notiItmId.addEventHandler("onclick",this.tabMain_tabSub04_btn_notiItmId_onclick,this);
            this.cbo_sbiDocRegId.addEventHandler("onitemchanged",this.cbo_sbiDocRegId_onitemchanged,this);
            this.chk_lmt.addEventHandler("onchanged",this.chk_lmt_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.ImageViewer1.addEventHandler("onclick",this.ImageViewer1_onclick,this);
            this.btn_image1.addEventHandler("onclick",this.btn_image_onclick,this);
            this.btn_image2.addEventHandler("onclick",this.btn_image_onclick,this);
            this.btn_image3.addEventHandler("onclick",this.btn_image_onclick,this);
            this.btn_image4.addEventHandler("onclick",this.btn_image_onclick,this);
            this.btn_image5.addEventHandler("onclick",this.btn_image_onclick,this);
            this.btn_clear1.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_clear2.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_clear3.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_clear4.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_clear5.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.stcTitle01_00_00_01.addEventHandler("onclick",this.tabMain_tabSub01_stcTitle01_00_00_onclick,this);
            this.edt_fileName1.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName1.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName2.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName2.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName5.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName5.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName6.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName6.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName3.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName3.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName4.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName4.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.btn_file1.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_fileName7.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName7.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName8.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName8.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.btn_file2.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file3.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file4.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file5.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file6.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file7.addEventHandler("onclick",this.btn_file_onclick,this);
            this.wbs_prdDetail.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.wbs_prdDetail.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.wbs_prdDetail.addEventHandler("onsize",this.div_prdDetail_wbs_prdDetail_onsize,this);
            this.stc_prdOprtrNm.addEventHandler("onclick",this.stcTitle02_00_onclick,this);
            this.btn_chgHstPop.addEventHandler("onclick",this.btn_chgHstPop_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.btn_file8.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_prdClPop.addEventHandler("onclick",this.btn_prdClPop_onclick,this);
            this.btn_Save2.addEventHandler("onclick",this.btn_save_onclick,this);
            this.edt_sspPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_sspPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.chk_sspPrdNmChgYn.addEventHandler("onchanged",this.chk_sspPrdNmChgYn_onchanged,this);
            this.cbo_apiUseYn.addEventHandler("canitemchange",this.cbo_apiUseYn_itemchange,this);
            this.edt_cprtcpId.addEventHandler("oninput",this.edt_cprtcpId_oninput,this);
            this.edt_cprtcpId.addEventHandler("onkeyup",this.edt_cprtcpId_onkeyup,this);
            this.btn_cprtcpId.addEventHandler("onclick",this.btn_cprtcpId_onclick,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_catgRcmdInq.addEventHandler("oncolumnchanged",this.ds_catgRcmdInq_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
