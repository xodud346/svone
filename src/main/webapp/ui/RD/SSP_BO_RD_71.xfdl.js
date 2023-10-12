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
            this.set_titletext("R&D 신규상품등록요청 목록");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_GRP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_COL\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOC_REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEALR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEALR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROPOSAL_STATUS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_ESCALATION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NEW_PRD_REQ_NO\"/><Col id=\"RND_REQ_PRD_ID\"/><Col id=\"REQ_PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"CHM_MTL_PRD_YN\"/><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"PRD_CLSF_CHRPSN_ID\"/><Col id=\"PRD_CLSF_CHRPSN_NM\"/><Col id=\"DISP_PRD_SPR_CD\"/><Col id=\"NEW_PRD_REQ_STATS_CD\"/><Col id=\"PRD_PRPS_STATS_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_STR\"/><Col id=\"REQ_DT_FNL_PROC_DT_END\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\">REG_DTM</Col><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"NEW_PRD_REQ_NO_CNT\"/><Col id=\"RND_REQ_PRD_ID_CNT\"/><Col id=\"REQ_PRD_NM_CNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","183",null,null,"20","114",null,null,null,null,this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"협력사ID\"/><Cell col=\"3\" text=\"협력사명\"/><Cell col=\"4\" text=\"처리상태\"/><Cell col=\"5\" text=\"제안파일\"/><Cell col=\"6\" text=\"이미지\"/><Cell col=\"7\" text=\"MSDS\"/><Cell col=\"8\" text=\"구매담당자ID\"/><Cell col=\"9\" text=\"구매담당자명\"/><Cell col=\"10\" text=\"요청일\"/><Cell col=\"11\" text=\"처리일\"/><Cell col=\"12\" text=\"처리자ID\"/><Cell col=\"13\" text=\"처리자명\"/><Cell col=\"14\" text=\"합의사유\"/><Cell col=\"15\" text=\"등록불가유형\"/><Cell col=\"16\" text=\"등록불가처리사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"expr:(dataset.getColumn(currow, &quot;NEW_PRD_REQ_STATS_CD&quot;) == &quot;22&quot; || dataset.getColumn(currow, &quot;NEW_PRD_REQ_STATS_CD&quot;) == &quot;33&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:NEW_PRD_REQ_GRP_NO\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:CPRTCP_ID\"/><Cell col=\"3\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"4\" text=\"bind:NEW_PRD_REQ_STATS_NM\"/><Cell col=\"5\" text=\"bind:EXCEL_DOC_REG_NM\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"6\" text=\"bind:IMG_DOC_REG_ID\"/><Cell col=\"7\" text=\"bind:MSDS_DOC_REG_ID\"/><Cell col=\"8\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"9\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"10\" text=\"bind:REG_DTM\"/><Cell col=\"11\" text=\"bind:PROC_DTM\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\"/><Cell col=\"13\" text=\"bind:DEALR_NM\"/><Cell col=\"14\" text=\"bind:CONSN_RSN\" color=\"#235da8\" textDecoration=\"underline\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PRD_REG_DIS_TP_NM\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"16\" text=\"bind:REG_DIS_RSN\" color=\"#235da8\" textDecoration=\"underline\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"149","100","24","21",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"149","110","24","cbo_rowCont:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"149","100","24","btn_excelDown:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"149","100","24","btn_layoutInit:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reject",null,"149","82","24","btn_layoutSave:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("반려");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"149","82","24","btn_reject:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("합의");
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

            obj = new Static("Static01_00_01_00_00_00","0","119","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","173","100.00%","10",null,null,null,null,null,null,this);
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

            obj = new Static("sta_totcnt","20","158","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"104","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","5","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqNoPrdId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09","668","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle12","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","36","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqNoPrdIdEdt","403","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqNoPrdId","140","4","258","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dateTitle","140","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_dateTitle_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_dateTitle_innerdataset", obj);
            div_search_form_cbo_dateTitle_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">PROC_DTM</Col><Col id=\"datacolumn\">최종처리일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_dateTitle_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","36","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk","808","35","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal1","873","36","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("요청");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal2","934","36","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("완료");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal3","995","36","81","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("등록불가");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","864","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","-20","63","103.09%","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"73","60","28","66",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"73","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","695","798","10","15",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"73","118","28","btn_init:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","570","4","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","687","4","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","832","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","1112","5","150","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnId","1004","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnId","1267","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D 신규상품등록요청 목록");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item20","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.edt_reqNoPrdId","value","ds_search","NEW_PRD_REQ_NO");
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

            obj = new BindItem("item4","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_purgChrpsnNm","value","ds_search","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_purgChrpsnId","value","ds_search","PURG_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_cprtcpCd","value","ds_search","CPRTCP_ID");
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
        this.addIncludeScript("SSP_BO_RD_71.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_71.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_71.xfdl(R&D 신규상품등록처리)
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
        	// 그리드 헤드클릭이벤트 내부함수 : (헤드클릭시 체크 무력화)
        	this._gfnHeadCheckSelectAll = function(){};


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

        	// TODO 검색
        	this.fn_todoSearch();
        };

        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.ID) this.ds_search.setColumn(0, "PURG_CHRPSN_ID", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_purgChrpsnNm.set_value(oArgs.NM);
        		if (oArgs.STATUS) this.div_search.form["chkVal"+oArgs.STATUS].set_value(true);
        		if (oArgs.DTM) {
        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
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
        		this.btn_reject.set_visible(false);   // 일괄등록 버튼 숨김
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
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_UNIT", "5");					// 일자 초기화 Set
        	this.ds_search.setColumn(nRow,"DISP_PRD_SPR_CD",         null);					// 전시상품 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_SBJ_CD",              null);					// 요청구분 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR",  "REG_DTM");			// 일자 콤보 초기화(REG_DTM:요청일, PROC_DTM:최종처리일); Set
        	this.ds_search.setColumn(nRow,"ROW_COUNT",               this.lv_pageViewCnt);	// 현재 레코드 초기화셋팅 Set
        	this.ds_search.setColumn(nRow,"PURG_CHRPSN_ID",          this.lv_empNo);		// 로그인사번
            this.ds_search.setColumn(nRow,"PURG_CHRPSN_NM",          this.lv_empNm);		// 로그인명
        	this.div_paging.reload();
        	this.fn_pageCallback();

        	// 처리상태 초기화 Set
        	for(var idx=1; idx<=3; idx++)
        	{
        		this.div_search.form["chkVal"+idx].set_value(false);

        		if(idx == 1)
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
        	var reqDtFnlProcDtUnit = this.ds_search.getColumn(0, "REQ_DT_FNL_PROC_DT_UNIT")
        	if(reqDtFnlProcDtUnit=="0" || this.gfn_isNull(reqDtFnlProcDtUnit)){
        		if(this.gfn_isNull(this.ds_search.getColumn(0, "PURG_CHRPSN_ID"))){
        			alert("전체 기간에서 구매담당자는 필수입니다.");
        			this.div_search.form.edt_purgChrpsnId.setFocus();
        			return;
        		}
        	}

        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"NEW_PRD_REQ_NO",this.ds_search.getColumn(0,"NEW_PRD_REQ_NO"));  // 요청번호

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
            var strUrl      = "/rd/new-prd-mlt-req-lst/select-new-prd-mlt-req-lst.do";
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
        	/*복수건 합의 처리 방지*/

        	var chkYn = this.ds_master.getCaseCount( "CHK == '1'" );

        	if(chkYn > 1){
        			this.fn_alert("ERRC000094", "선택" ,"","information");                  // 하나의 항목만 선택해 주세요.
        		return false;
            }


        	var strNewPrdReqGrpNo = "";
        	var strCprtcpId = "";
        	for(var i = 0 ; i < this.ds_master.getRowCount() ; i++){
        		if(this.ds_master.getColumn(i, "CHK") == "1"){
        			/*if(i == 0){
        				strNewPrdReqGrpNo += this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        			}else{
        				strNewPrdReqGrpNo += ","+this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        			}
        			*/
        			strNewPrdReqGrpNo = this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        		}
        	}

        	var params = { newPrdReqNo : strNewPrdReqGrpNo   // 요청번호
        		, newPrdReqStatsCd     : "" // 처리상태코드
        		, cellText             : "btn_reg"     // 팝업 분류
        		, consnRsn             : ""            // 합의사유 내용
        		};

        	if(!this.gfn_isNull(strNewPrdReqGrpNo)){
        		this.fn_setCallPopup(params);
        	}
        };

        this.btn_reject_onclick = function(obj,e)
        {

        	var chkYn = this.ds_master.getCaseCount( "CHK == '1'" );

        	if(chkYn > 1){
        			this.fn_alert("ERRC000094", "선택" ,"","information");                  // 하나의 항목만 선택해 주세요.
        		return false;
            }



        	var lv_sFlag01 		= "N";						                             // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						                             // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)

        	var strNewPrdReqGrpNo = "";
        	for(var i = 0 ; i < this.ds_master.getRowCount() ; i++){
        		if(this.ds_master.getColumn(i, "CHK") == "1"){
        			/*if(i == 0){
        				strNewPrdReqGrpNo += this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        			}else{
        				strNewPrdReqGrpNo += ","+this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        			}
        			*/
        			strNewPrdReqGrpNo = this.ds_master.getColumn(i, "NEW_PRD_REQ_GRP_NO");
        		}
        	}

        	var lv_sValue01 	= strNewPrdReqGrpNo;	         // 부모에서 넘어가는 파라미터(그룹요청번호)
        	var lv_sValue02 	= this.lv_coCd;                  // 부모에서 넘어가는 파라미터(회사번호)
        	var lv_sValue03 	= "20";  	                     // 부모에서 넘어가는 파라미터(몰 구분 20 : G-Lab)
        	var lv_sValue04 	= "30";  	                     // 요청주체코드[10:고객,20:자사,30:협력사]
        	var lv_sValue05 	= "N";  	                     // 처리여부

        	var sPopId 			= "SSP_BO_RD_71_P03";
        	var sUrl 			= "RD::SSP_BO_RD_71_P03.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04
        						  , pv_sVal05:lv_sValue05};     // 파라미터4
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	if(strNewPrdReqGrpNo != ""){
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

            this.gfn_excelExport(this.grd_list, "R&D 신규상품일괄등록처리","R&D신규상품 일괄선제안", null, null, "SSP_BO_RD_71_01");
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
        		// 협력사 조회팝업 후처리
        		case "btn_cprtcpPopup" :
        				if(!this.gfn_isNull(strVal)){
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_cprtcpCd.set_value(jsonData.CPRTCP_ID);
        					this.div_search.form.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM);
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
        		case "SSP_BO_RD_71_P02" :
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
        		case "SSP_BO_RD_71_P03" :
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
        		case "btn_reg" :
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
         * 협력사 조회 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);
        	this.fn_setCallPopup01(sCodeId);
        };

        /**
         * 협력사 Edit 키 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * 협력사 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);

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
        		var options = { title  : "협력사" };

        		this.gfn_openPopup("btn_cprtcpPopup", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
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
        		var options = { title : "구매담당자" };

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

        	for(var idx=1; idx<=3; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			chkAllYn++;
        		}
        	}

        	for(var idx=1; idx<=3; idx++)
        	{
        		if(chkAllYn != 3)
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
        	// [22 or 33 : 요청, 52 : 완료, 42 : 등록불가]
        	var chkVal = ["22,33","52","42"]; //SSP-2294
        	var list   = "";

        	this.ds_search.setColumn(0,"NEW_PRD_REQ_STATS_CD","");
        	this.ds_search.setColumn(0,"NEW_PRD_REQ_ESCALATION_CD","");

        	for(var idx=1; idx<=3; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			if(list != "")
        			{
        				list += ",";
        			}
        			list += chkVal[idx-1];
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
        	// 제안파일 Cell 더블 클릭시
        	var docRegId = this.ds_master.getColumn(this.ds_master.rowposition,"EXCEL_DOC_REG_ID");
        	if(e.cell == obj.getBindCellIndex("body", "EXCEL_DOC_REG_NM") && docRegId != "" && docRegId != null){
        		this.FileDownTransfer.clearPostDataList();

        		this.FileDownTransfer.set_downloadfilename(this.ds_master.getColumn(this.ds_master.rowposition, "ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_master.getColumn(this.ds_master.rowposition, "EXCEL_DOC_REG_ID"));	//문서번호
        		this.FileDownTransfer.setPostData("filePath",this.ds_master.getColumn(this.ds_master.rowposition, "DOC_REG_SEQ"));	//문서 순번
        		this.FileDownTransfer.setPostData("filePath",this.ds_master.getColumn(this.ds_master.rowposition, "ATFL_STOR_PATH"));
        		this.FileDownTransfer.setPostData("fileOrgName",this.ds_master.getColumn(this.ds_master.rowposition, "ORI_ATFL_NM"));
        		this.FileDownTransfer.setPostData("fileName",this.ds_master.getColumn(this.ds_master.rowposition, "ATFL_NM"));
        		this.FileDownTransfer.download('/co/file-download.do');
        	}else{
        		var strNewPrdReqGrpNo      = this.ds_master.getColumn(e.row,"NEW_PRD_REQ_GRP_NO");
        		var strNewPrdReqStatsCd = this.ds_master.getColumn(e.row,"NEW_PRD_REQ_STATS_CD");
        		var cellText            = this.grd_list.getCellProperty("body", e.col, "text");
        		cellText = cellText.replace("bind:", "");
        		var consnRsn = this.ds_master.getColumn(e.row, "CONSN_RSN");
        		var regDisRsn = this.ds_master.getColumn(e.row, "REG_DIS_RSN");
        		var prdRegDisTpCd = this.ds_master.getColumn(e.row, "PRD_REG_DIS_TP_CD");

        		var params = { newPrdReqNo : strNewPrdReqGrpNo   // 요청번호
        			, newPrdReqStatsCd     : strNewPrdReqStatsCd // 처리상태코드
        			, cellText             : cellText            // cell의 text 속성
        			, consnRsn             : consnRsn            // 합의사유 내용
        			, regDisRsn            : regDisRsn           // 반려사유 내용
        			, prdRegDisTpCd        : prdRegDisTpCd       // 반려유형 코드
        			};

        		this.fn_setCallPopup(params);
        	}
        };

        /**
         * 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= "Y";            	 	    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01	= params.newPrdReqNo;		// 부모에서 넘어가는 파라미터(요청번호)
        	var lv_sValue02 = params.newPrdReqStatsCd;	// 부모에서 넘어가는 파라미터(처리상태코드)
        	var lv_sValue03 = params.cellText;			// 부모에서 넘어가는 파라미터(cell text 속성)
        	if(params.cellText=="CONSN_RSN"){
        		var lv_sValue04 = params.consnRsn;			// 부모에서 넘어가는 파라미터(합의사유)
        		var lv_sValue05 = params.strCprtcpId;		// 부모에서 넘어가는 파라미터(협력사ID)
        	}else if(params.cellText=="REG_DIS_RSN"
        			|| params.cellText=="PRD_REG_DIS_TP_NM"){
        		var lv_sValue04 = params.regDisRsn;			// 부모에서 넘어가는 파라미터(반려사유)
        		var lv_sValue05 	= "Y";   	            // 처리여부
        		var lv_sValue06 = params.prdRegDisTpCd;		// 부모에서 넘어가는 파라미터(협력사ID)
        	}

        	var sPopId 		= "";
        	var sUrl 		= "";

        	var popFlag = false;

        	console.log(params.cellText);

        	switch(params.cellText)
        	{
        		case "NEW_PRD_REQ_GRP_NO" :
        			if(lv_sValue02 == "52"){
        				sPopId  = "SSP_BO_RD_71_P01";
        				sUrl 	= "RD::SSP_BO_RD_71_P01.xfdl";
        				popFlag = true;
        			}
        		    break;
        		case "CONSN_RSN" :
        			if(!this.gfn_isNull(lv_sValue04)){
        				sPopId  = "SSP_BO_RD_71_P02";
        				sUrl 	= "RD::SSP_BO_RD_71_P02.xfdl";
        				popFlag = true;
        			}
        			break;
        		case "REG_DIS_RSN" :
        			if(!this.gfn_isNull(lv_sValue04)){
        				sPopId  = "SSP_BO_RD_71_P03";
        				sUrl 	= "RD::SSP_BO_RD_71_P03.xfdl";
        				popFlag = true;
        			}
        			break;
        		case "PRD_REG_DIS_TP_NM" :
        			if(!this.gfn_isNull(lv_sValue04)){
        				sPopId  = "SSP_BO_RD_71_P03";
        				sUrl 	= "RD::SSP_BO_RD_71_P03.xfdl";
        				popFlag = true;
        			}
        			break;
        		case "btn_reg" :
        			sPopId  = "btn_reg";
        			sUrl 	= "RD::SSP_BO_RD_71_P02.xfdl";
        			popFlag = true;
        			break;
        		default : break;
        	}
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05       // 파라미터5
        						  , pv_sVal06:lv_sValue06       // 파라미터6
        						}
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	if(popFlag){
        		this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
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

        // 대용량다운로드
        this.fn_largeFileDown = function(page){

            if(!this.fn_PreRet(page))
            {
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/new-product-multi-regist.do";
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
        	//this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownloadPwdCallback");  //엑셀 대용량 다운로드 암호와

        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_excelDownload();
        	}
        };

        //엑셀 암호화
        this.fn_excelDownloadPwdCallback = function(objId, pwd)
        {
        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId, "NEW_PRD_REQ_NO", this.ds_search.getColumn(0, "NEW_PRD_REQ_NO"));  // 요청번호

        	this.ds_search.setColumn(0, "EXCEL_PASSWD", pwd);

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBackForLargeFileDown");
            } else
            {
                this.fn_largeFileDown(true);
            }
        };

        //일반 엑셀 대용량 다운로드
        this.fn_excelDownload = function ()
        {
        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId, "NEW_PRD_REQ_NO", this.ds_search.getColumn(0, "NEW_PRD_REQ_NO"));  // 요청번호

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

        this.grd_list_onheadclick = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("Body", "CHK")) {
        		var val = obj.getCellProperty("head", e.cell, "text") == "0" ? "1" : "0";
        		obj.setCellProperty("head", e.cell, "text", val);

        		for(var i = 0; i < this.ds_master.rowcount; i++) {
        			if(obj.getCellPropertyValue(i, e.cell, "edittype") != "none") {
        				this.ds_master.setColumn(i, "CHK", val);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_reject.addEventHandler("onclick",this.btn_reject_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.div_search.form.Static05.addEventHandler("onclick",this.div_search_Static05_onclick,this);
            this.div_search.form.btn_reqNoPrdIdEdt.addEventHandler("onclick",this.div_search_btn_reqNoPrdIdEdt_onclick,this);
            this.div_search.form.cbo_dateTitle.addEventHandler("onitemchanged",this.div_search_cbo_dateTitle_onitemchanged,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.btn_allChk.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkVal1.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal2.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal3.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("oninput",this.div_search_edt_cprtcpCd_oninput,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("onkeyup",this.div_search_edt_cprtcpCd_onkeyup,this);
            this.div_search.form.btn_cprtcpPopup.addEventHandler("onclick",this.div_search_btn_cprtcpPopup_onclick,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("onkeyup",this.div_search_edt_purgChrpsnId_onkeyup,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("oninput",this.div_search_edt_purgChrpsnId_oninput,this);
            this.div_search.form.btn_purgChrpsnId.addEventHandler("onclick",this.div_search_btn_purgChrpsnId_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_71.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
