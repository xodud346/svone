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
            this.set_titletext("R&D MSDS관리");
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
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"DT_SPR\">REQ_DT</Col><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"PRD_NM_CNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_CLSF_CHRPSN_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_PRD_INFO_ATTR_MAPP_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"DT_SPR\">REQ_DT</Col><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"PRD_NM_CNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xlsx", this);
            obj._setContents("<ColumnInfo><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"I_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"I_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATCH_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"I_RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILE_ORI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"I_SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"I_SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RaonkUpload("Raonkupload","110","320","1184","130",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_FolderTransfer("1");
            obj.getSetter("RAONKUPLOAD_OnExcelLoadedWithOnlyData").set("Raonkupload_RAONKUPLOAD_OnExcelLoadedWithOnlyData");
            obj.set_text("");
            obj.set_UseTrace("true");
            obj.set_RunTimes("agent");
            obj.set_DisableDeleteConfirm("1");
            obj.set_AllowDuplicationFile("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","219",null,null,"20","109",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"142\"/><Column size=\"112\"/><Column size=\"150\"/><Column size=\"106\"/><Column size=\"150\"/><Column size=\"175\"/><Column size=\"150\"/><Column size=\"175\"/><Column size=\"75\"/><Column size=\"86\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"제조원ID\"/><Cell col=\"5\" text=\"제조원\"/><Cell col=\"6\" text=\"카테고리ID\"/><Cell col=\"7\" text=\"카테고리\"/><Cell col=\"8\" text=\"협력사ID\"/><Cell col=\"9\" text=\"협력사\"/><Cell col=\"10\" text=\"MSDS 파일\"/><Cell col=\"11\" text=\"MSDS 파일 url\"/><Cell col=\"12\" text=\"레터 파일\"/><Cell col=\"13\" text=\"자체 인증\"/><Cell col=\"14\" text=\"구매담당자ID\"/><Cell col=\"15\" text=\"구매담당자\"/><Cell col=\"16\" text=\"등록일\"/><Cell col=\"17\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" textDecoration=\"underline\" color=\"#235da8\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_NM\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRVL_LIST\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MNFR_NO\"/><Cell col=\"5\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRD_CLCD\"/><Cell col=\"7\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CPRTCP_ID\"/><Cell col=\"9\" text=\"bind:CPRTCP_KOR_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:MSDS_ATTC_FILENM\" textDecoration=\"underline\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:RND_MSDS_URL\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:LOC_ATTC_FILENM\" textDecoration=\"underline\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SRVON_CERT_YN\"/><Cell col=\"14\" text=\"bind:PRD_CLSF_CHRPSN_ID\"/><Cell col=\"15\" text=\"bind:PRD_CLSF_CHRPSN_NM\"/><Cell col=\"16\" text=\"bind:REG_DTM\"/><Cell col=\"17\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"185","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"185","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"185","100","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"185","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","209","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","grd_list:0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","Static01_00_01_00_00:0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","div_paging:0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","195","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"137","20",null,null,null,null,null,this);
            obj.set_taborder("11");
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

            obj = new Edit("edt_prdClcd","570","4","103","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","678","4","122","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle12","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","807","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","834","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsn","860","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnId","1000","68","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","1110","68","152","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnPopup","1268","68","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","1000","4","103","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","1109","4","122","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","1238","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpMultiInput","1265","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","1000","36","103","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1109","36","122","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1238","36","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","1265","36","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","35","258","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","430","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","570","35","258","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","4","233","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","377","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","404","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dateTitle","140","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_dateTitle_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_dateTitle_innerdataset", obj);
            div_search_form_cbo_dateTitle_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_dateTitle_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","67","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","67","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"109","60","28","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"109","60","28","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1056","116","98","19",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_fullPrdNmYn","410","36","13","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","155","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","-20","113","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgDwnLoad",null,"185","80","24","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일괄다운로드");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgDownRegUpd",null,"185","75","24","btn_pkgDwnLoad:4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("일괄업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"185","60","24","btn_pkgDownRegUpd:5",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D MSDS관리");
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

            obj = new BindItem("item1","div_search.form.edt_purgChrpsnId","value","ds_search","PURG_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_purgChrpsnNm","value","ds_search","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cbo_dateTitle","value","ds_search","DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_cprtcpCd","value","ds_search","CPRTCP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_cprtcpNm","value","ds_search","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.edt_reprSpec","value","ds_search","PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.chk_fullPrdNmYn","value","ds_search","FULL_PRD_NM_YN");
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
        this.addIncludeScript("SSP_BO_RD_46.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_46.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_46.xfdl(R&D MSDS관리)
        * 작 성         일 명: 손나라
        * 작 성         일 자: 2022/05/06
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
        this.mallSprCd              = "20";
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.lvKeyCode              = "";
        this.trId                   = "";
        this.sheets                 = [];  this.upFiles = [];
        this.lv_btnChkYn            = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	var navigatorName = system.navigatorname;            // Browser명("nexacro","IE","Chrome","Gecko")

        	if(navigatorName != "nexacro") {
        		this.trId = this.uuidv4();
        	}

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
            var strDs    = "ds_dateUnitCombo|ds_pageRowCd|ds_rndPrdAuthCombo";         // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X";                                					   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                   					   // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        		this.btn_reg.set_visible(false);	  // 일괄수정 버튼 숨김
        		this.btn_pkgDownRegUpd.set_visible(false);   // IMG일괄업로드 버튼 숨김
        	}
        };

        /**m
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
        	this.ds_master.clearData();
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"PRD_ID",         		null);                      // 상품ID
            this.ds_search.setColumn(nRow,"PRD_CLCD",         		null);                   	// 카테고리CD
        	this.ds_search.setColumn(nRow,"PRD_CLCD_CNT",         	null);               		// 카테고리선택갯수
        	this.ds_search.setColumn(nRow,"PRD_CLCD_NM",         	null);                		// 카테고리명
        	this.ds_search.setColumn(nRow,"CPRTCP_CD",         		null);                    	// 협력사
        	this.ds_search.setColumn(nRow,"CPRTCP_CD_CNT",         	null);                		// 협력사선택갯수
        	this.ds_search.setColumn(nRow,"CPRTCP_NM",         		null);                    	// 협력사명
        	this.ds_search.setColumn(nRow,"PRD_NM",         		null);                    	// 상품명
        	this.ds_search.setColumn(nRow,"PRVL_LIST",         		null);                    	// 대표규격
        	this.ds_search.setColumn(nRow,"MNFR_NO",         		null);                    	// 제조원
        	this.ds_search.setColumn(nRow,"MNFR_NO_CNT",         	null);                		// 제조원선택갯수
        	this.ds_search.setColumn(nRow,"MNFR_NM",         		null);                    	// 제조원명
        	this.ds_search.setColumn(nRow,"PURG_CHRPSN_ID",    		null);                     	// 구매담당자ID
        	this.ds_search.setColumn(nRow,"PURG_CHRPSN_NM",    		null);                     	// 구매담당자명
        	this.ds_search.setColumn(nRow,"DT_SPR",         		"REG_DTM");                	// 일자구분
            this.ds_search.setColumn(nRow,"ROW_COUNT",               this.lv_pageViewCnt); //현재 레코드 초기화셋팅
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
            switch(strId)
            {
        		//MSDS관리 등록 팝업
        		case "SSP_BO_RD_48" :
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
        		//MSDS관리 상세 팝업
        		case "SSP_BO_RD_49" :
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
        		// 상품ID 멀티조회팝업 후처리
                case "btn_prdIdMultiPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					var prdId = new Array();
        					//var prdNm = new Array();
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						prdId.push(jsonSubData.PRD_ID.replace(/,\s*$/, ""));
        						//prdNm.push(jsonSubData.PRD_NM.replace(/,\s*$/, ""));
        					}
        					this.div_search.form.edt_prdId.set_value(prdId);
        					//this.div_search.form.edt_prdNm.set_value(prdNm);
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
        		// 협력사 조회팝업 후처리
        		case "SSP_BO_PP_41" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_cprtcpCd.set_value(jsonData.CPRTCP_ID.replace(/,\s*$/, ""));
        					this.div_search.form.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM.replace(/,\s*$/, ""));
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        		     break;
         		// 협력사 멀티입력팝업 후처리
         		case "btn_cprtcpMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_cprtcpCd.set_value(jsonData.textValue);
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
        	    case "SSP_BO_PP_27" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_purgChrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        					this.div_search.form.edt_purgChrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
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

        	this.fn_setMultiSearch(this.formId,"PRD_ID",     this.ds_search.getColumn(0,"PRD_ID"));                // 상품ID
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",   this.ds_search.getColumn(0,"PRD_CLCD"));            // 카테고리
        	this.fn_setMultiSearch(this.formId,"CPRTCP_CD",  this.ds_search.getColumn(0,"CPRTCP_CD"));      // 협력사
        	this.fn_setMultiSearch(this.formId,"PRD_NM",     this.ds_search.getColumn(0,"PRD_NM"));            // 상품명
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",    this.ds_search.getColumn(0,"MNFR_NO"));        // 제조원


            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            }else
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
            var strUrl      = "/rd/msds-mng/select-msds-mng.do";
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
        		var strPrdViewId       = strPkCode[1];
        		var strCprtcpId        = strPkCode[2];

        		var strExpr            = "CO_CD == '" + strCoCd + "' && PRD_ID_VIEW == '" + strPrdViewId + "' && CPRTCP_ID == '" + strCprtcpId + "'";
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
        /**
         * 기능 : 신규 등록 버튼 클릭시
         */
        this.btn_reg_onclick = function(obj,e)
        {
        	var params = { reqGubun    : "10"     // 요청구분 [등록:10,상세:20]
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

            this.gfn_excelExport(this.grd_list, "R&D MSDS관리","R&D MSDS관리");
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
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "P",coCd : this.lv_coCd,mallSprCd : this.mallSprCd, prdId : this.div_search.form.edt_prdId.value };
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD",		this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLSF_NM",	this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	} else
        	{
        		var params  = { mallSprCd : this.mallSprCd
        				      , coCd      : this.lv_coCd
        				      , prdClcd   : sCodeId };
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

            this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  카테고리 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  협력사 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 협력사 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);
        	this.fn_setCallPopup03(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_cprtcpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_cprtcpNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_cprtcpCd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);

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
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"CPRTCP_CD", this.ds_popupList.getColumn(0,"CPRTCP_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"CPRTCP_NM", this.ds_popupList.getColumn(0,"CPRTCP_KOR_NM"));
        	} else
        	{
        		var params  = { coCd     : this.lv_coCd
        					  , cprtcpId : sCodeId };
        		var options = { title    : this.div_search.form.stc_cprtcp.text };
        		this.gfn_openPopup( "SSP_BO_PP_41"
        						  , "PP_POP::SSP_BO_PP_41.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);
        	}
        };

        /**
         * 조회조건 협력사 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_cprtcpCd };
        	var options = { title  : this.div_search.form.stc_cprtcp.text };
        	this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  협력사 조회팝업 종료
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NO",	this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NM",	this.ds_popupList.getColumn(0,"MNFR_NM"));
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
        	this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  구매담당자 시작
        /***********************************************************************************************/
        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_purgChrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);
        	this.fn_setCallPopup04(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_purgChrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_purgChrpsnNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_purgChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup04(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup04 = function(sCodeId)
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PURG_CHRPSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PURG_CHRPSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	} else
        	{

        		var params  = { coCd      : this.lv_coCd
        					  , mallSprCd : this.mallSprCd
        					  , empNo     : sCodeId};
        		var options = { title : this.div_search.form.stc_purgChrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        						  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };


        /***********************************************************************************************
        *  구매담당자 종료
        /***********************************************************************************************/

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };

        /**
         * 메인 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
         	var strCoCd               = this.ds_master.getColumn(e.row,"CO_CD");
         	var strPrdId              = this.ds_master.getColumn(e.row,"PRD_ID");
        	var strCprtcpId           = this.ds_master.getColumn(e.row,"CPRTCP_ID");

         	// 담당자ID, 담당자 더블 클릭시 이벤트 발생 처리
         	if(e.cell == obj.getBindCellIndex("body","PRD_ID_VIEW") )
         	{
         		var params = { coCd            : strCoCd               // CO_CD
        		             , prdId           : strPrdId             // 상품ID
        					 , cprtcpId        : strCprtcpId          // 협력사ID
         		             , reqGubun        : "20"    	          // 요청구분 [등록:10,상세:20]
         					 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
         					 };

         		this.fn_setCallPopup(params);
         	}
        	else if ( e.cell == obj.getBindCellIndex("body","MSDS_ATTC_FILENM") )
        	{
        		var strFileId = this.ds_master.getColumn(e.row,"MSDS_ATTC_FILENM");
        		var strAtflStorPath = this.ds_master.getColumn(e.row,"ATFL_STOR_PATH");
        		var strAtflNm = this.ds_master.getColumn(e.row,"ATFL_NM");
        		var strOriAtflNm = this.ds_master.getColumn(e.row,"ORI_ATFL_NM");
        		if(this.gfn_nvl(strFileId,"") != "")
        		{
        			this.ds_uploadResult.clearData();
        			var nRow = this.ds_uploadResult.addRow();
        			this.ds_uploadResult.setColumn(nRow,"ATFL_STOR_PATH",strAtflStorPath);
        			this.ds_uploadResult.setColumn(nRow,"ATFL_NM",strAtflNm);
        			this.ds_uploadResult.setColumn(nRow,"ORI_ATFL_NM",strOriAtflNm);

        			this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.div_search.form.FileDownload);
        		}
        	}
        	else if ( e.cell == obj.getBindCellIndex('body', 'LOC_ATTC_FILENM') ) {
        		var strFileId       = this.ds_master.getColumn(e.row, 'LOC_ATTC_FILENM'     );
        		var strAtflStorPath = this.ds_master.getColumn(e.row, 'LOC_ATTC_FILEPATH'   );
        		var strAtflNm       = this.ds_master.getColumn(e.row, 'LOC_ATTC_FILENM'     );
        		var strOriAtflNm    = this.ds_master.getColumn(e.row, 'LOC_ATTC_FILE_ORI_NM');
        		if (this.gfn_nvl(strFileId, '') == '') { return; }

        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.setColumn(nRow, 'ATFL_STOR_PATH', strAtflStorPath);
        		this.ds_uploadResult.setColumn(nRow, 'ATFL_NM'       , strAtflNm      );
        		this.ds_uploadResult.setColumn(nRow, 'ORI_ATFL_NM'   , strOriAtflNm   );

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.div_search.form.FileDownload);
        	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						         // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		         // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.coCd;		                 // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.prdId;		                 // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = params.cprtcpId;		    		 // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = "";		             			 // 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_RD_48";
        		     sUrl 	= "RD::SSP_BO_RD_48.xfdl";
        		     break;
        		case "20" :
        		     sPopId = "SSP_BO_RD_49";
        		     sUrl 	= "RD::SSP_BO_RD_49.xfdl";
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
        /***********************************************************************************************
        *  Kupload
        /***********************************************************************************************/
        /**
         * K-Upload 업로드 취소시 발생하는 UploadingCancel 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadingCancel = function(obj, paramObj)
        {
        	console.log("전송 취소 이벤트 : " + obj.id);
            console.log(paramObj);
        	console.log(paramObj.arrUploadedFileList);

        	if(paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != "")
        	{
        		console.log("업로드 된 파일 리스트 -");

        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for(var idx=0; idx<uploadedFileLen; idx++)
        		{
        			console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ", " + paramObj.userdata.arrUploadedFileList[i].uploadPath);
        		}
        	}
        };

        /**
         * K-Upload 오류가 발생하는 OnError 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	this.Raonkupload.ResetUpload();
        	this.sheets = [];  console.log('this.sheets 초기화 #2 < Raonkupload_RAONKUPLOAD_OnError');

        	console.log("Error : " + paramObj.userdata.strCode + ", " + paramObj.userdata.strMessage);
        	console.log("업로드 된 파일 리스트");

        	if(paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != "")
        	{
        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for(var idx=0; idx<uploadedFileLen; idx++)
        		{
        			console.log(paramObj.userdata.arrUploadedFileList[idx].uploadName + ", " + paramObj.userdata.arrUploadedFileList[idx].uploadPath);
        		}
        	}
        };

        this.uuidv4 = function()
        {
        	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        };

        this.fn_delArrayToString = function(arrayDel)
        {
            var str = "-- 삭제된 파일 정보 --\n";
            str += this.fn_RPAD("Key", " ", 8) + " : {0}\n";
            str += this.fn_RPAD("FileName", " ", 8) + " : {1}\n";
            str += this.fn_RPAD("Size", " ", 8) + " : {2}\n";
            str += "-- 삭제된 파일 정보 끝 --\n";

            var sUniqKey      = "";
            var sOriginalName = "";
            var sSize         = "";

            var filesArrLen = arrayDel.length;

            for(var idx=0; idx<filesArrLen; idx++)
        	{
                sUniqKey      += arrayDel[idx].uniqKey;
                sOriginalName += arrayDel[idx].originalName;
                sSize         += arrayDel[idx].size;

                if(idx != (filesArrLen-1))
        		{
                    sUniqKey      += ",";
                    sOriginalName += ",";
                    sSize         += ",";
                }
            }

            str = str.replace("{0}", sUniqKey);
            str = str.replace("{1}", sOriginalName);
            str = str.replace("{2}", sSize);

            console.log(str);
        };

        this.fn_newArrayToString = function(arrayNew)
        {
        	console.dir(arrayNew);
        	return;

            var str = "-- 업로드 파일 정보 시작 --\n";
            str += this.fn_RPAD("RealFileName",        " ", 20) + " : {0}\n";
            str += this.fn_RPAD("ServerFileName",      " ", 20) + " : {1}\n";
            str += this.fn_RPAD("IsLargeFile",         " ", 20) + " : {2}\n";
            str += this.fn_RPAD("Size",                " ", 20) + " : {3}\n";
            str += this.fn_RPAD("UploadPath",          " ", 20) + " : {4}\n";
            str += this.fn_RPAD("LogicalPath",         " ", 20) + " : {5}\n";
            str += this.fn_RPAD("fileExtention",       " ", 20) + " : {6}\n";
            str += this.fn_RPAD("LocalPath",           " ", 20) + " : {7}\n";
            str += this.fn_RPAD("CustomValue",         " ", 20) + " : {8}\n";
            str += this.fn_RPAD("ResponseCustomValue", " ", 20) + " : {9}\n";
            str += this.fn_RPAD("Order",               " ", 20) + " : {10}\n";
            str += "-- 업로드 파일 정보 끝 --\n";

            var originalName        = "";
            var uploadName          = "";
            var size                = "";
            var uploadPath          = "";
            var logicalPath         = "";
            var fileExtension       = "";
            var localPath           = "";
            var customValue         = "";
            var responseCustomValue = "";
            var order               = "";
            var isLargeFile         = "";

            var fileLen = arrayNew.length;

            for(var idx=0; idx<fileLen; idx++)
        	{
                originalName        += arrayNew[idx].originalName;
                uploadName          += arrayNew[idx].uploadName;
                isLargeFile         += arrayNew[idx].isLargeFile;
                size                += arrayNew[idx].size;
                uploadPath          += arrayNew[idx].uploadPath;
                logicalPath         += arrayNew[idx].logicalPath;
                fileExtension       += arrayNew[idx].extension;
                localPath           += arrayNew[idx].localPath;
                customValue         += arrayNew[idx].customValue;
                responseCustomValue += arrayNew[idx].responseCustomValue;
                order               += arrayNew[idx].order;

                if(idx != (fileLen-1))
        		{
                    originalName        += ",";
                    uploadName          += ",";
                    size                += ",";
                    uploadPath          += ",";
                    logicalPath         += ",";
                    fileExtension       += ",";
                    localPath           += ",";
                    customValue         += ",";
                    responseCustomValue += ",";
                    order               += ",";
                    isLargeFile         += ",";
                }
            }

            str = str.replace("{0}",  originalName);
            str = str.replace("{1}",  uploadName);
            str = str.replace("{2}",  isLargeFile);
            str = str.replace("{3}",  size);
            str = str.replace("{4}",  uploadPath);
            str = str.replace("{5}",  logicalPath);
            str = str.replace("{6}",  fileExtension);
            str = str.replace("{7}",  localPath);
            str = str.replace("{8}",  customValue);
            str = str.replace("{9}",  responseCustomValue);
            str = str.replace("{10}", order);

        	console.log(str);
        };

        this.fn_RPAD = function(s, c, n)
        {
            if(!s || !c || s.length >= n)
        	{
                return s;
            }

            var max = (n-s.length)/c.length;

            for(var idx=0; idx<max; idx++)
        	{
                s += c;
            }

            return s;
        };

        this.Raonkupload_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        	this.Raonkupload.set_MassFileMode(1);
        };

        /**
         * K-Upload 객체 생성이 완료 되었을때 발생하는 CreationComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	console.log("업로드 생성 완료 : " + obj.id);
        	console.log(paramObj);
        };


        /**
         * K-Upload에 파일이 모두 추가 완료 되었을때 발생되는 AfterAddAllFile 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	this.Raonkupload.Transfer(obj.id);
        };

        /**
         * MSDS파일 일괄다운로드 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_pkgDwnLoad_onclick = function(obj,e)
        {
        	this.Raonkupload.ResetUpload();
        	var strCnt = 0;
        	for (var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		// MSDS
        		var strChk       = this.ds_master.getColumn(idx,"CHK");
        		var strPrdId     = this.ds_master.getColumn(idx,"PRD_ID_VIEW");
        		var strCprtcpId  = this.ds_master.getColumn(idx,"CPRTCP_ID");
        		var strAtflNm    = this.ds_master.getColumn(idx,"MSDS_ATTC_FILENM");
        		var strfilePath  = this.ds_master.getColumn(idx,"ATFL_STOR_PATH");
        		var strOriAtflNm = this.ds_master.getColumn(idx,"ORI_ATFL_NM");
        		var strAtflLen   = this.ds_master.getColumn(idx,"ATFL_LEN");
        		var strFileNm    = strPrdId + "_" + strCprtcpId + "_" + strAtflNm;
        		var strFilePath  = strfilePath + strOriAtflNm;

        		if (!this.gfn_isNull(strAtflNm) && strChk == 1) {
        			this.Raonkupload.AddUploadedFile(strCnt++, strFileNm, strFilePath, strAtflLen, '');
        		}

        		// LOC
        		var locAttcFilenm = this.ds_master.getColumn(idx, 'LOC_ATTC_FILENM');
        		if (!this.gfn_isNull(locAttcFilenm) && strChk == 1) {
        			strFileNm   = strPrdId + "_" + strCprtcpId + "_LOC_" + locAttcFilenm;
        			strFilePath = this.ds_master.getColumn(idx, 'LOC_ATTC_FILEPATH') + this.ds_master.getColumn(idx, 'LOC_ATTC_FILE_ORI_NM');
        			strAtflLen  = this.ds_master.getColumn(idx, 'LOC_ATTC_FILESIZE');

        			this.Raonkupload.AddUploadedFile(strCnt++, strFileNm, strFilePath, strAtflLen, '');
        		}

        	}

        	if(strCnt == 0)
        	{
        		this.fn_alert("ERRR000220","저장정보","","question"); // MSDS파일 일괄다운로드할 대상 파일이 한건도 존재하질 않습니다.
        		return false;
        	}

        	this.Raonkupload.DownloadAllFile();
        };

        // 업로드 엑셀양식 정의
        this.upldXlsxOpts={
        	"LoadKindOfType": 1,
        	"data_sheets"   : [{
        		"sheet_data_name": "MSDS",
        		"data"           : [
        				{ "data_title": "A1", "data_start": "A2", "return_name": "coCd"              },  // 회사코드
        				{ "data_title": "B1", "data_start": "B2", "return_name": "productId"         },  // 상품ID
        				{ "data_title": "C1", "data_start": "C2", "return_name": "partnerId"         },  // 협력사ID
        				{ "data_title": "D1", "data_start": "D2", "return_name": "msdsFnlChgDt"      },  // 최종개정일 (YYYYMMDD)
        				{ "data_title": "E1", "data_start": "E2", "return_name": "etcFds"            },  // 유형
        				{ "data_title": "F1", "data_start": "F2", "return_name": "msdsUrl"           },  // MSDS URL
        				{ "data_title": "G1", "data_start": "G2", "return_name": "msdsFile"          },  // MSDS 파일위치

        				{ "data_title": "H1", "data_start": "H2", "return_name": "locAttcFile"       },  // 레터 파일위치  => LOC_ATTC_FILEID  파일유형은 '9A'
        				{ "data_title": "I1", "data_start": "I2", "return_name": "locAtflFnlChgDt"   },  // LOC첨부파일최종변경일자 (YYYYMMDD) => LOC_ATFL_FNL_CHG_DT
        				{ "data_title": "J1", "data_start": "J2", "return_name": "srvonCertYn"       },  // 서브원인증여부 => SRVON_CERT_YN
        				{ "data_title": "K1", "data_start": "K2", "return_name": "srvonCertFnlChgDt" },  // 서브원인증최종변경일자 (YYYYMMDD) => SRVON_CERT_FNL_CHG_DT
        		]
        	}],
        	xlsx : [],
        	files: [],
        };

        /*PG08 MSDS파일 일괄등록 오류 개선 및 양식다운로드 개발*/
        this.btn_pkgDownRegUpd_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_RD_46"};
        	var oOption 		= {titlebar:"false"};
        	this.gfn_openPopup("SSP_BO_RD_46", "RD::SSP_BO_RD_46_P01.xfdl", param);

        };
        /**
         * 일괄등록·일괄수정 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_pkgDownRegUpd_onclick_old = function(obj,e) {
        	var param = { options: this.upldXlsxOpts };
        	this.Raonkupload.GetExcelData(param);
        };


        this.Raonkupload_RAONKUPLOAD_GetExcelData = function(obj, paramObj)
        {
        	/*
        	GetExcelData CallBack Event
        	paramObj.userdata.resultMsg  : "OK" or "FAIL"
        	paramObj.userdata.resultData : object or null
        	paramObj.userdata.errorMsg   : resultMsg 값이 "FAIL" 인 경우에 string 값이 있음
        	paramObj.userdata.uploadID    : 업로드 ID
        	*/
        	var resultData = "resultMsg : " + paramObj.userdata.resultMsg + "\n"
        	+ "errorMsg : " + paramObj.userdata.errorMsg + "\n"
        	+ "-------------------- resultData --------------------\n" ;
        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'CANCEL'==paramObj.userdata.resultMsg) {
        		console.log('업로드 취소되었습니다.');
        		return;
        	}
        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'OK'!=paramObj.userdata.resultMsg) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ paramObj.userdata.errorMsg);
        		return;
        	}

        	/* Orgl
        	if(paramObj.userdata.resultData && paramObj.userdata.resultData.Sheets)
        	{
        		var arrayFileList = [];
        		for(var idx=0; idx<paramObj.userdata.resultData.Sheets.length; idx++)
        		{
        			var sheet = paramObj.userdata.resultData.Sheets[idx];
        			resultData += "-------------------- sheetName : " + sheet.sheet_name + " --------------------\n";
        			for(var jdx=0; jdx<sheet.Data.length; jdx++)
        			{
        				arrayFileList.push({ path : sheet.Data[jdx].msdsFile });
        				this.sheets.push(sheet.Data[jdx]);
        			}
        		}

        		console.log(resultData);

        		// 업로드 컴포넌트에 파일 추가
        		this.Raonkupload.AddLocalFileDirectlyEx(arrayFileList);
        	}
        	*/
        	if(!paramObj.userdata.resultData || !paramObj.userdata.resultData.Sheets) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 시트정보 확인이 필요합니다.');
        		return;
        	}

        	this.upldXlsxOpts.files=[];  this.sheets=[];  console.log('this.sheets 초기화 #1 < Raonkupload_RAONKUPLOAD_GetExcelData');
        	var lUpldFiles=[], lSheets=paramObj.userdata.resultData.Sheets;
        	for (var sIdx in lSheets) {
        		var oSheet=lSheets[sIdx], oRows=oSheet.Data;
        		this.upldXlsxOpts.xlsx = oRows;

        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		var cvIdx=0;
        		for (var rIdx in oRows) {
        			var oRow=oRows[rIdx];  oRow.trId=this.uuidv4();
        			rObj={ coCd: oRow.coCd, productId: oRow.productId, partnerId: oRow.partnerId, trId: oRow.trId }, cvObj=null;

        			if (!this.gfn_isNull(oRow.msdsFile)) {
        				lUpldFiles.push({ path: oRow.msdsFile   , fType: 'msds' });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : oRow.etcFds           ,
        					msdsUrl          : oRow.msdsUrl          ,
        					//msdsFile         : oRow.msdsFile         ,
        					msdsFileNm       : oRow.msdsFile.substr(oRow.msdsFile.lastIndexOf('\\')+1),
        					msdsFnlChgDt     : oRow.msdsFnlChgDt     ,
        				}));
        			}
        			if (!this.gfn_isNull(oRow.locAttcFile )) {
        				lUpldFiles.push({ path: oRow.locAttcFile, fType: 'loc'  });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : '9A'                  ,
        					locAttcFile      : oRow.locAttcFile      ,
        					//locAttcFileNm    : oRow.locAttcFile.substr(oRow.locAttcFile.lastIndexOf('\\')+1),
        					locAtflFnlChgDt  : oRow.locAtflFnlChgDt  ,
        					srvonCertYn      : oRow.srvonCertYn      ,
        					srvonCertFnlChgDt: oRow.srvonCertFnlChgDt,
        				}));
        			}

        			// this.sheets.push(oRow);
        			console.log('[lUpldFiles:'+ lUpldFiles.length +']');
        		}
        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		//this.sheets = oRows;
        	}

        	if (lUpldFiles.length < 1) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 데이터 확인이 필요합니다.');
        		return;
        	}
        	if (lUpldFiles.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFiles); }  // 업로드 컴포넌트에 파일 추가
        // 	if (lUpldMsds.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldMsds); }  // 업로드 컴포넌트에 파일 추가
        // 	if (lUpldLoc .length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldLoc ); }  // 업로드 컴포넌트에 파일 추가
        };

        /**
         * K-Upload 전송 시작전 발생하는 파일전송 여부 BeforeUpload 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_BeforeUpload = function(obj, paramObj)
        {
        	/*
        	for(var idx=0; idx<this.sheets.length; idx++)
        	{
        		var cv = this.trId + "|" + this.sheets[idx].cocd + "|"
        		       + this.sheets[idx].productId + "|"
        			   + this.sheets[idx].partnerId + "|"
        			   + this.sheets[idx].modDate + "|"
        			   + this.sheets[idx].etcFds + "|"
        			   + this.sheets[idx].msdsUrl + "|"
        			   + this.sheets[idx].msdsFile;
        		this.Raonkupload.SetFileCustomValue(idx, cv);
        	}
        	*/
        	var rIdx=0, fObj=null, sRows=this.upldXlsxOpts.files, rCols=this.upldXlsxOpts.data_sheets[0].data;
        	for (var rIdx in sRows) {
        		var oRow=sRows[rIdx];  // , rObj={ coCd: oRow.coCd, productId: oRow.productId, partnerId: oRow.partnerId, trId: this.trId }, rbData=[];

        		this.Raonkupload.SetFileCustomValue(rIdx++, JSON.stringify( oRow ));
        		console.log('row.customValue: '+ JSON.stringify(oRow, null, 2));
        	}
        };

        /**
         * K-Upload 업로드 완료시 발생하는 UploadComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	// K Upload는 array, json, xml, text delimit 방식으로 결과값을 제공합니다.
        	// 파일에 대한 정보 중 업로드가 완료된 파일의 정보(업로드 된 파일경로,업로드 된 파일명)는
        	// RAONKUPLOAD_UploadComplete 이벤트 안에서만 추출이 가능합니다.
        	var dataArray = this.Raonkupload.GetListInfo();

        	// 신규 업로드된 파일, 삭제된 파일
        	var arrayNew = dataArray.newFile, arrayDel = dataArray.deleteFile;

        	if (arrayNew) { this.fn_newArrayToString(arrayNew); }
        	if (arrayDel) { this.fn_delArrayToString(arrayDel); }

        	console.log("업로드 완료 : " + obj.id);
        	if (arrayNew.length < 1) {
        		this.uploadClear();  console.log('this.sheets 초기화 #4 < Raonkupload_RAONKUPLOAD_UploadComplete < 신규 업로드파일 없음. ');
        		return;
        	}

        	/*
        	{ "data_title": "A1", "data_start": "A2", "return_name": "coCd"              },  // 회사코드
        	{ "data_title": "B1", "data_start": "B2", "return_name": "productId"         },  // 상품ID
        	{ "data_title": "C1", "data_start": "C2", "return_name": "partnerId"         },  // 협력사ID
        	{ "data_title": "D1", "data_start": "D2", "return_name": "msdsFnlChgDt"      },  // 최종개정일 (YYYYMMDD)
        	{ "data_title": "E1", "data_start": "E2", "return_name": "etcFds"            },  // 유형
        	{ "data_title": "F1", "data_start": "F2", "return_name": "msdsUrl"           },  // MSDS URL
        	{ "data_title": "G1", "data_start": "G2", "return_name": "msdsFile"          },  // MSDS 파일위치

        	{ "data_title": "H1", "data_start": "H2", "return_name": "locAttcFile"       },  // 레터 파일위치  => LOC_ATTC_FILEID  파일유형은 '9A'
        	{ "data_title": "I1", "data_start": "I2", "return_name": "locAtflFnlChgDt"   },  // LOC첨부파일최종변경일자 (YYYYMMDD) => LOC_ATFL_FNL_CHG_DT
        	{ "data_title": "J1", "data_start": "J2", "return_name": "srvonCertYn"       },  // 서브원인증여부 => SRVON_CERT_YN
        	{ "data_title": "K1", "data_start": "K2", "return_name": "srvonCertFnlChgDt" },  // 서브원인증최종변경일자 (YYYYMMDD) => SRVON_CERT_FNL_CHG_DT

        	{
        		"originalName": "01.MSDS샘플파일.png",
        		"uploadName": "9aaa9f1b2f384f39837944ad6d19013c.png",
        		"size": 6734,
        		"uploadPath": "Z:/SSP_TEST/attachFile/msds/2023/03/9aaa9f1b2f384f39837944ad6d19013c.png",
        		"status": "complete",
        		"extension": "png",
        		"localPath": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\01.MSDS샘플파일.png",
        		"customValue": "{\"coCd\":\"1000\",\"productId\":\"7000221602\",\"partnerId\":\"92712\",\"trId\":\"b64e5fa4-bd0d-4890-a3f6-8b67f0b12ca4\",\"etcFds\":\"95\",\"msdsUrl\":\"\",\"msdsFileNm\":\"01.MSDS샘플파일.png\",\"msdsFnlChgDt\":\"20190202\"}",
        		"responseCustomValue": "",
        		"isLargeFile": "0",
        		"order": 0,
        		"logicalPath": "",
        		"lastModifiedDate": "2023.02.09 14:20:06",
        		"mimeType": "image/png",
        		"hashValue": "",
        		"fileObject": {
        			"name": "01.MSDS샘플파일.png",
        			"type": "image/png",
        			"uniqValue": "",
        			"isFolder": "0",
        			"localPath": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\01.MSDS샘플파일.png",
        			"size": 6734,
        			"subFolderCount": "",
        			"fileCount": "",
        			"lastModifiedDate": "2023.02.09 14:20:06"
        		},
        		"extraDataObject": null,
        		"isFolder": "0",
        		"transferId": "2023-03-16_c17a5bfa30404e1aab338be184fea099",
        		"fileId": "9aaa9f1b2f384f39837944ad6d19013c",
        		"coCd": "1000",
        		"productId": "7000221602",
        		"partnerId": "92712",
        		"trId": "b64e5fa4-bd0d-4890-a3f6-8b67f0b12ca4",
        		"etcFds": "95",
        		"msdsUrl": "",
        		"msdsFileNm": "01.MSDS샘플파일.png",
        		"msdsFnlChgDt": "20190202"
        	}

        	*/
        	// 업로드 완료한 파일 정보 엑셀 데이터에 재비치 - this.upldXlsxOpts.xlsx
        	for (var i in arrayNew) {
        		var cf=arrayNew[i], cv=arrayNew[i].customValue;
        		if (!this.gfn_isNull(cv)) { cf.customValue = Object.assign(cf, JSON.parse(cv)); }

        		var xr=this.getXlsxRowByTrid(cf.trId);
        		if ( this.gfn_isNull(xr)) { continue; }

        		cf.atflStorPath = this.gfn_isNull(cf.uploadPath) ? null : cf.uploadPath.substr(cf.uploadPath.indexOf('/attachFile')).replaceAll(cf.uploadName, '');
        		Object.assign(xr, {
        			docRegId: cf.trId,

        			msdsAttcFileid    : this.nvl(('95'==cf.etcFds ? cf.trId              : null) || xr['msdsAttcFileid'   ], null),  // MSDS
        			etcFds            : this.nvl(('95'==cf.etcFds ? cf.etcFds            : null) || xr['etcFds'           ], null),
        			msdsFileNm        : this.nvl(('95'==cf.etcFds ? cf.originalName      : null) || xr['msdsFileNm'       ], null),
        			atflNm            : this.nvl(('95'==cf.etcFds ? cf.originalName      : null) || xr['atflNm'           ], null),
        			oriAtflNm         : this.nvl(('95'==cf.etcFds ? cf.uploadName        : null) || xr['oriAtflNm'        ], null),
        			atflLen           : this.nvl(('95'==cf.etcFds ? cf.size              : null) || xr['atflLen'          ], null),
        			msdsUrl           : this.nvl((true            ? cf.msdsUrl           : null) || xr['msdsUrl'          ], null),
        			msdsFnlChgDt      : this.nvl((true            ? cf.msdsFnlChgDt      : null) || xr['msdsFnlChgDt'     ], null),
        			locAttcFileid     : this.nvl(('9A'==cf.etcFds ? cf.trId              : null) || xr['locAttcFileid'    ], null),  // LOC
        			locAttcFilenm     : this.nvl(('9A'==cf.etcFds ? cf.originalName      : null) || xr['locAttcFilenm'    ], null),
        			locAttcFileOriNm  : this.nvl(('9A'==cf.etcFds ? cf.uploadName        : null) || xr['locAttcFileOriNm' ], null),
        			locAttcFilesize   : this.nvl(('9A'==cf.etcFds ? cf.size              : null) || xr['locAttcFilesize'  ], null),
        			srvonCertYn       : this.nvl((true            ? cf.srvonCertYn       : null) || xr['srvonCertYn'      ], null),  // 자체인증
        			srvonCertFnlChgDt : this.nvl((true            ? cf.srvonCertFnlChgDt : null) || xr['srvonCertFnlChgDt'], null),
        			atflStorPath      : this.nvl(('95'==cf.etcFds ? cf.atflStorPath      : null) || xr['atflStorPath'     ], null),
        			locAttcFilepath   : this.nvl(('9A'==cf.etcFds ? cf.atflStorPath      : null) || xr['locAttcFileOriNm' ], null),
        		});
        		Object.assign(xr, {
        			I_CO_CD                 : xr.coCd             ,
        			I_PRD_ID                : xr.productId        ,
        			I_CPRTCP_ID             : xr.partnerId        ,

        			I_MSDS_FNL_CHG_DT       : xr.msdsFnlChgDt     ,  // MSDS
        			I_ATCH_TP_CD            : xr.etcFds           ,
        			I_RND_MSDS_URL          : xr.msdsUrl          ,
        			I_ORI_ATFL_NM           : xr.oriAtflNm        ,
        			I_ATFL_STOR_PATH        : xr.atflStorPath     ,
        			I_ATFL_LEN              : xr.atflLen          ,
        			I_ATFL_NM               : xr.atflNm           ,

        			I_LOC_ATTC_FILENM       : xr.locAttcFilenm    ,  // LOC
        			I_LOC_ATTC_FILEPATH     : xr.locAttcFilepath  ,
        			I_LOC_ATTC_FILESIZE     : xr.locAttcFilesize  ,
        			I_LOC_ATTC_FILE_ORI_NM  : xr.locAttcFileOriNm ,
        			I_LOC_ATFL_FNL_CHG_DT   : xr.locAtflFnlChgDt  ,

        			I_SRVON_CERT_YN         : xr.srvonCertYn      ,  // 자체인증
        			I_SRVON_CERT_FNL_CHG_DT : xr.srvonCertFnlChgDt,
        		});
        		this.trimObj(xr);
        	}
        	var oSrce=this.upldXlsxOpts.xlsx, oTrgt=this.ds_xlsx;
        	var rPos=0, rSize=oSrce.length, cSize=oTrgt.getColCount(), cClnm=[];  for (var i=0; i<cSize; i++) { cClnm.push(oTrgt.getColumnInfo(i).id); }
        	oTrgt.clearData();
        	for (var i in oSrce) {
        		var osRow=oSrce[i];  rPos=oTrgt.addRow();
        		for (var j in cClnm) {
        			var clnm=cClnm[j], clvl=osRow[clnm];
        			if (!osRow.hasOwnProperty(clnm) || this.gfn_isNull(clvl)) continue;
        			oTrgt.setColumn(rPos, clnm, clvl);
        		}
        	}

        	this.fn_upladAftrProc();  // 엑셀정보 전달
        };

        this.nvl = function(kcvl, rpvl) {
        	if (null==kcvl || undefined==kcvl || ''==new String(kcvl).replace(/ /g, '').replace(/[undefined]/g, '')) { return rpvl; }
        	return kcvl;
        }
        this.trimObj=function(o) {
        	if (null==this.nvl(o, null)) { return null; }

        	var keys=Object.keys(o), k=null, v=null;
        	for (var i in keys) {
        		k=keys[i];
        		if ('object' == typeof o[k]) { o[k] = this.trimObj(o[k]); }
        		o[k]=this.nvl(o[k], null);
        		if (null==o[k]) { delete o[k]; }
        	}

        	return o;
        }
        this.uploadClear=function() {
        		this.Raonkupload.ResetUpload();
        		this.sheets=[];
        		this.trId = this.uuidv4();
        }

        this.getXlsxRow=function(k, v) {
        	var rs = this.upldXlsxOpts.xlsx;

        	for (var i in rs) {
        		var r=rs[i];
        		if (!r.hasOwnProperty(k)) continue;
        		if (r[k] === v) { return r; }
        	}

        	return null;
        }
        this.getXlsxRowByTrid=function(v) {
        	return this.getXlsxRow('trId', v);
        }

        /** K-Upload 완료 후 처리호출 **/
        this.fn_upladAftrProc=function() {
        	this.setWaitCursor(true);

        	var strSvc 		= "upladAftrProc";
        	var strUrl 		= "/rd/msds-mng/xlsx-upload-aftr-proc.do";
        	var strInDs  	= "ds_xlsx=ds_xlsx";                  // 물리적 생성 ds_input
        	var strOutDs 	= "ds_xlsx=ds_xlsx";                  // 물리적 생성 ds_popupList
        	var strArg 		= "";
        	var strCallBack = "fn_upladAftrProc_callBack";    						// 공백일시 기본 fn_callBack
        	var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction( strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        this.fn_upladAftrProc_callBack=function(sSvcId, nErrorCode, sErrorMsg) {
        	this.uploadClear();  console.log('this.sheets 초기화 #4 < fn_upladAftrProc_callBack < 처리완료 후. ');

        	if ('SUCCESS'==sErrorMsg) { alert('일괄 업로드 처리를 완료했습니다.'); }
        	this.setWaitCursor(false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadingCancel",this.Raonkupload_RAONKUPLOAD_UploadingCancel,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_OnError",this.Raonkupload_RAONKUPLOAD_OnError,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadComplete",this.Raonkupload_RAONKUPLOAD_UploadComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_CreationComplete",this.Raonkupload_RAONKUPLOAD_CreationComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeUpload",this.Raonkupload_RAONKUPLOAD_BeforeUpload,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.Raonkupload_RAONKUPLOAD_AfterAddAllFile,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeCreation",this.Raonkupload_RAONKUPLOAD_BeforeCreation,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_GetExcelData",this.Raonkupload_RAONKUPLOAD_GetExcelData,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("oninput",this.div_search_edt_purgChrpsnId_oninput,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("onkeyup",this.div_search_edt_purgChrpsnId_onkeyup,this);
            this.div_search.form.btn_purgChrpsnPopup.addEventHandler("onclick",this.div_search_btn_purgChrpsnPopup_onclick,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("oninput",this.div_search_edt_cprtcpCd_oninput,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("onkeyup",this.div_search_edt_cprtcpCd_onkeyup,this);
            this.div_search.form.btn_cprtcpPopup.addEventHandler("onclick",this.div_search_btn_cprtcpPopup_onclick,this);
            this.div_search.form.btn_cprtcpMultiInput.addEventHandler("onclick",this.div_search_btn_cprtcpMultiInput_onclick,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.edt_prdNm.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_prdNm.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_reprSpec.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_reprSpec.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_prdId.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.div_search.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.btn_pkgDwnLoad.addEventHandler("onclick",this.btn_pkgDwnLoad_onclick,this);
            this.btn_pkgDownRegUpd.addEventHandler("onclick",this.btn_pkgDownRegUpd_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_46.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
