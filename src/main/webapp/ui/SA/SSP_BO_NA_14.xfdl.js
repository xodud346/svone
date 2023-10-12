(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_14");
            this.set_titletext("PNB스토리 - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryThmList", this);
            obj._setContents("<ColumnInfo><Column id=\"PNB_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_SRWR\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"UI_DISP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pnbStoryInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PNB_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_SRWR\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"UI_DISP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryList", this);
            obj._setContents("<ColumnInfo><Column id=\"PNB_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_SRWR\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"UI_DISP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"PNB_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_SRWR\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"UI_DISP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryCatgDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryCatgPrdDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryCatgDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPnbStoryCatgPrdDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelPnbStoryList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_THM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_SRWR\" type=\"STRING\" size=\"256\"/><Column id=\"UI_DISP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PNB_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_dtl1","600","0",null,"800","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_thmItmBack","10","42",null,"80","10",null,null,null,null,"443",this.div_dtl1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","130","20",null,null,null,null,null,null,this.div_dtl1.form);
            obj.set_taborder("0");
            obj.set_text("테마 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Static("sta_thmItm","10","42","130","80",null,null,null,null,null,"443",this.div_dtl1.form);
            obj.set_taborder("1");
            obj.set_text("테마 아이템\r\n순서 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Grid("grd_pnbStoryList","141","77",null,"33","10",null,null,null,null,"395",this.div_dtl1.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_binddataset("ds_grdPnbStoryList");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/><Column size=\"30\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:TTL\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"☰\"/></Band></Format></Formats>");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Static("Static28","149","54","255","15",null,null,null,null,null,null,this.div_dtl1.form);
            obj.set_taborder("3");
            obj.set_text("※ 테마 아이템의 순서를 변경할 수 있습니다.");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Button("btn_saveThmDispSo",null,"9","81","28","8",null,null,null,null,null,this.div_dtl1.form);
            obj.set_taborder("5");
            obj.set_text("순서저장");
            this.div_dtl1.addChild(obj.name, obj);

            obj = new Div("div_mst","0","0","560",null,null,"0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pnbStoryThmList","20","69",null,null,"9","40",null,null,null,null,this.div_mst.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grdPnbStoryThmList");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"317\"/><Column size=\"0\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:TTL\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:PNB_LVL\" tooltiptext=\"bind:TTL\" cssclass=\"expr:PNB_LVL ==  &apos;2&apos; ? &apos;expsLeafColor&apos; : &apos;&apos;\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("edt_searchNm","20","40",null,"24","40",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("1");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static01","20","10","130","20",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("2");
            obj.set_text("매거진 테마 목록");
            obj.set_cssclass("sta_WF_title01");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"40","24","24","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btn_itmAdd","20",null,"129","24",null,"10",null,null,null,null,this.div_mst.form);
            obj.set_taborder("4");
            obj.set_text("테마 아이템 추가");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"9","118","26","12",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("5");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btn_thmAdd","340","7","81","28",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("6");
            obj.set_text("테마 추가");
            this.div_mst.addChild(obj.name, obj);

            obj = new Div("div_dtl2","600","233",null,"800","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_thmItmBack","10","418",null,"80","10",null,null,null,null,"363",this.div_dtl2.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01_00","10","262",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","130","20",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("0");
            obj.set_text("테마 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static12","10","387",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static04","10","47",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","150","51",null,"24","126",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("3");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_useYn","10","387","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","150","391","150","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("5");
            obj.set_direction("vertical");
            var div_dtl2_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("div_dtl2_form_rdo_useYn_innerdataset", obj);
            div_dtl2_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_dtl2_form_rdo_useYn_innerdataset);
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_ttl","10","47","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("6");
            obj.set_text("테마 명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","edt_ttl:4","51","88","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("7");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static05","10","201",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static10","10","109",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regpsnId","156","109","300","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("10");
            obj.set_text("등록자사번");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regpsnIdSta","10","109","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("11");
            obj.set_text("등록자 사번");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updpsnId","156","200","300","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("12");
            obj.set_text("수정자사번");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updpsnIdSta","10","201","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("13");
            obj.set_text("수정자 사번");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static08","10","170",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static09","10","78",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regDtmSta","10","78","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("16");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regDtm","156","78",null,"32","226",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("17");
            obj.set_text("등록일시");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updDtmSta","10","170","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("18");
            obj.set_text("수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updDtm","156","169",null,"32","226",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("19");
            obj.set_text("수정일시");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static07","10","140",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regpsnNm","156","140","300","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("21");
            obj.set_text("등록자");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_regpsnNmSta","10","140","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("22");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static06","10","231",null,"32","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updpsnNm","156","230","300","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("24");
            obj.set_text("수정자");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_updpsnNmSta","10","231","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("25");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_expsCnt","10","262","130","32",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("26");
            obj.set_text("노출개수설정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_thmItm","10","418","130","80",null,null,null,null,null,"363",this.div_dtl2.form);
            obj.set_taborder("28");
            obj.set_text("테마 아이템\r\n순서 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Grid("grd_pnbStoryList","141","453",null,"33","10",null,null,null,null,"315",this.div_dtl2.form);
            obj.set_taborder("29");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_binddataset("ds_grdPnbStoryList");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/><Column size=\"30\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:TTL\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"☰\"/></Band></Format></Formats>");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static28","149","430","255","15",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("30");
            obj.set_text("※ 테마 아이템의 순서를 변경할 수 있습니다.");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_saveThm",null,"9","81","28","8",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("32");
            obj.set_text("저장");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_deleteThm",null,"9","81","28","94",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("33");
            obj.set_text("삭제");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static15","10","293",null,"48","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_pcImg","10","293","130","48",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("35");
            obj.set_text("PC 공통\r\n표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Edit("edt_pcAtflNm","sta_pcImg:10","297","440","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_pcImgAdd","602","297","60","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("37");
            obj.set_text("파일찾기");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_pcImgDelete","666","297","24","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("38");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("Static16","10","340",null,"48","10",null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_mblImg","10","340","130","48",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("40");
            obj.set_text("모바일 공통\r\n표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Edit("edt_mblAtflNm","sta_mblImg:10","344","440","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_mblImgAdd","602","344","60","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("42");
            obj.set_text("파일찾기");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Button("btn_mblImgDelete","666","344","24","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("43");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_pcImgSizeRef","150","318","334","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("44");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 60*420)");
            obj.set_textAlign("left");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_mblImgSizeRef","150","365","334","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("45");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 25*175)");
            obj.set_textAlign("left");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_pcExpsCnt","154","265","33","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("46");
            obj.set_text("PC");
            obj.set_textAlign("left");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Combo("cbo_pcExpsCnt","180","266","120","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_dtl2_form_cbo_pcExpsCnt_innerdataset = new nexacro.NormalDataset("div_dtl2_form_cbo_pcExpsCnt_innerdataset", obj);
            div_dtl2_form_cbo_pcExpsCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row></Rows>");
            obj.set_innerdataset(div_dtl2_form_cbo_pcExpsCnt_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Static("sta_mblExpsCnt","316","265","49","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("48");
            obj.set_text("Mobile");
            obj.set_textAlign("left");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Combo("cbo_mblExpsCnt","360","266","120","24",null,null,null,null,null,null,this.div_dtl2.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_dtl2_form_cbo_mblExpsCnt_innerdataset = new nexacro.NormalDataset("div_dtl2_form_cbo_mblExpsCnt_innerdataset", obj);
            div_dtl2_form_cbo_mblExpsCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row></Rows>");
            obj.set_innerdataset(div_dtl2_form_cbo_mblExpsCnt_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_dtl2.addChild(obj.name, obj);

            obj = new Div("div_dtl3","1400","10",null,"800","-790",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancelThmItm",null,"9","81","28","94",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("56");
            obj.set_text("취소");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_itmInfo","10","10","130","20",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("0");
            obj.set_text("아이템 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static12","10","326",null,"32","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static04","10","47",null,"32","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","150","51",null,"24","126",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("3");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_useYn","10","326","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","150","330","150","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("5");
            obj.set_direction("vertical");
            var div_dtl3_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("div_dtl3_form_rdo_useYn_innerdataset", obj);
            div_dtl3_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_dtl3_form_rdo_useYn_innerdataset);
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_ttl","10","47","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","edt_ttl:4","51","88","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("7");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static05","10","249",null,"48","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static10","10","109",null,"48","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_pcLstImg","10","109","130","48",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("10");
            obj.set_text("[PC] 표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_mblDtlImg","10","249","130","48",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("11");
            obj.set_text("[Mobile] 상세이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static08","10","202",null,"48","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static09","10","78",null,"32","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_subTtl","10","78","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("14");
            obj.set_text("서브 타이틀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_mblLstImg","10","202","130","48",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("15");
            obj.set_text("[Mobile] 표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static07","10","156",null,"48","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_pcDtlImg","10","156","130","48",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("17");
            obj.set_text("[PC] 상세이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static06","10","295",null,"32","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_cnsolSrwr","10","295","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("19");
            obj.set_text("연결 검색어");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_subTtl","150","81",null,"24","126",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("20");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_subTtlSize","edt_subTtl:4","81","88","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("21");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_pcLstAtflNm","150","113","230","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_pcLstImgAdd","384","113","80","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("23");
            obj.set_text("파일첨부");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_pcLstImgDelete","468","113","24","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("24");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_pcDtlAtflNm","150","160","230","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_pcDtlImgAdd","384","160","80","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("26");
            obj.set_text("파일첨부");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_pcDtlImgDelete","468","160","24","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("27");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_mblLstAtflNm","150","206","230","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_mblLstImgAdd","384","206","80","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("29");
            obj.set_text("파일첨부");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_mblLstImgDelete","468","206","24","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("30");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_mblDtlAtflNm","150","253","230","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_mblDtlImgAdd","384","253","80","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("32");
            obj.set_text("파일첨부");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_mblDtlImgDelete","468","253","24","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("33");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_cnsolSrwr","150","299",null,"24","20",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("34");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Grid("grd_pnbStoryCatgDtl","10","396","130","286",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("35");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdPnbStoryCatgDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 명\"/><Cell col=\"1\" text=\"순서\"/></Band><Band id=\"body\"><Cell text=\"bind:CATG_NM\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CATG_DISP_SO\"/></Band></Format></Formats>");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static11","150","396",null,"32","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_catgNm","150","396","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("37");
            obj.set_text("카테고리 명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_catgDispSo","540","396","130","32",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("38");
            obj.set_text("카테고리 순서");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_catgNm","290","400","240","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("39");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Edit("edt_catgDispSo","680","400","30","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("40");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static13","150","427",null,"255","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_pnbStoryCatgPrdDtl","150","427","130","255",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("42");
            obj.set_text("등록 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Grid("grd_pnbStoryCatgPrdDtl","290","465",null,"206","10",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("43");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdPnbStoryCatgPrdDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"제조원\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"대표상품구분\"/><Cell col=\"7\" text=\"SSP상품상태\"/><Cell col=\"8\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;삭제&lt;/u&gt;&quot;\" text=\"bind:DELETE_ROW\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:ATTR_VAL\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:MNFR\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"7\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdId","549","438","79","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("44");
            obj.set_text("상품검색");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_catgDelete","383","438","79","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("45");
            obj.set_text("카테고리 삭제");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_catgAdd","466","438","79","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("46");
            obj.set_text("카테고리 추가");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdIdMulText","632","438","79","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("47");
            obj.set_text("멀티텍스트");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_totalCountPrdDtl","290","444","80","25",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("48");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("Static01","9","365","300","30",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("49");
            obj.set_text(" 상품 목록");
            obj.set_cssclass("sta_WF_title02");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_saveThmItm",null,"9","81","28","8",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("50");
            obj.set_text("저장");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Button("btn_deleteThmItm",null,"9","81","28","94",null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("51");
            obj.set_text("삭제");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_pcLstImgSizeRef","150","135","334","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("52");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 324*420)");
            obj.set_textAlign("left");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_pcDtlImgSizeRef","150","181","334","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("53");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 1,216*250)");
            obj.set_textAlign("left");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_mblLstImgSizeRef","150","226","334","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("54");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 135*175)");
            obj.set_textAlign("left");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new Static("sta_mblDtlImgSizeRef","150","274","334","24",null,null,null,null,null,null,this.div_dtl3.form);
            obj.set_taborder("55");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 370*240)");
            obj.set_textAlign("left");
            this.div_dtl3.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","2240","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excelPnbStoryList","20","930",null,null,"20","-214",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_excelPnbStoryList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"56\"/><Column size=\"55\"/><Column size=\"59\"/><Column size=\"58\"/><Column size=\"115\"/><Column size=\"131\"/><Column size=\"89\"/><Column size=\"65\"/><Column size=\"58\"/><Column size=\"85\"/><Column size=\"57\"/><Column size=\"129\"/><Column size=\"159\"/><Column size=\"171\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"테마제목\"/><Cell col=\"1\" text=\"PC&#13;&#10;노출개수\"/><Cell col=\"2\" text=\"모바일&#13;&#10;노출개수\"/><Cell col=\"3\" text=\"테마&#13;&#10;전시순서\"/><Cell col=\"4\" text=\"테마&#13;&#10;사용여부\"/><Cell col=\"5\" text=\"아이템제목\"/><Cell col=\"6\" text=\"아이템서브타이틀\"/><Cell col=\"7\" text=\"연결검색어\"/><Cell col=\"8\" text=\"아이템&#13;&#10;전시순서\"/><Cell col=\"9\" text=\"아이템&#13;&#10;사용여부\"/><Cell col=\"10\" text=\"카테고리명\"/><Cell col=\"11\" text=\"카테고리&#13;&#10;전시순서\"/><Cell col=\"12\" text=\"상품ID\"/><Cell col=\"13\" text=\"상품명\"/><Cell col=\"14\" text=\"규격\"/><Cell col=\"15\" text=\"공용전용구분\"/><Cell col=\"16\" text=\"대표상품구분\"/><Cell col=\"17\" text=\"SSP상품상태\"/><Cell col=\"18\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:THM_TTL\"/><Cell col=\"1\" text=\"bind:PC_EXPS_CNT\"/><Cell col=\"2\" text=\"bind:MBL_EXPS_CNT\"/><Cell col=\"3\" text=\"bind:DISP_SO\"/><Cell col=\"4\" text=\"bind:USE_YN_NM\"/><Cell col=\"5\" text=\"bind:TTL\"/><Cell col=\"6\" text=\"bind:SUB_TTL\"/><Cell col=\"7\" text=\"bind:CNSOL_SRWR\"/><Cell col=\"8\" text=\"bind:UI_DISP_SEQ\"/><Cell col=\"9\" text=\"bind:ITM_USE_YN_NM\"/><Cell col=\"10\" text=\"bind:CATG_NM\"/><Cell col=\"11\" text=\"bind:CATG_DISP_SO\"/><Cell col=\"12\" text=\"bind:PRD_ID_VIEW\"/><Cell col=\"13\" text=\"bind:PRD_NM\"/><Cell col=\"14\" text=\"bind:ATTR_VAL\"/><Cell col=\"15\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"16\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"17\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"18\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","edt_searchRegpsnIdNm","value","ds_search","REGPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_dtl2.form.edt_ttl","value","ds_pnbStoryInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_dtl2.form.rdo_useYn","value","ds_pnbStoryInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_dtl2.form.sta_regpsnId","text","ds_pnbStoryInfo","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_dtl2.form.sta_regDtm","text","ds_pnbStoryInfo","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_dtl2.form.sta_regpsnNm","text","ds_pnbStoryInfo","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_dtl2.form.sta_updDtm","text","ds_pnbStoryInfo","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_dtl2.form.sta_updpsnId","text","ds_pnbStoryInfo","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_dtl2.form.sta_updpsnNm","text","ds_pnbStoryInfo","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_dtl3.form.edt_ttl","value","ds_pnbStoryInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_dtl3.form.rdo_useYn","value","ds_pnbStoryInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_dtl3.form.edt_subTtl","value","ds_pnbStoryInfo","SUB_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_dtl3.form.edt_pcLstAtflNm","value","ds_pnbStoryInfo","PC_LST_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_dtl3.form.edt_pcDtlAtflNm","value","ds_pnbStoryInfo","PC_DTL_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_dtl3.form.edt_mblLstAtflNm","value","ds_pnbStoryInfo","MBL_LST_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_dtl3.form.edt_mblDtlAtflNm","value","ds_pnbStoryInfo","MBL_DTL_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_dtl3.form.edt_cnsolSrwr","value","ds_pnbStoryInfo","CNSOL_SRWR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_dtl3.form.edt_catgNm","value","ds_grdPnbStoryCatgDtl","CATG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_dtl3.form.edt_catgDispSo","value","ds_grdPnbStoryCatgDtl","CATG_DISP_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_dtl2.form.edt_pcAtflNm","value","ds_pnbStoryInfo","PC_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_dtl2.form.edt_mblAtflNm","value","ds_pnbStoryInfo","MBL_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_dtl2.form.cbo_pcExpsCnt","value","ds_pnbStoryInfo","PC_EXPS_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_dtl2.form.cbo_mblExpsCnt","value","ds_pnbStoryInfo","MBL_EXPS_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_14.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_14.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_14.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_14.xfdl", function() {
        /*******************************************************
          PROJECT NAME : PNB스토리 - 목록
          CREATION DATES : 2022.03.30
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        this.totalCount = 0;
        this.preSelectRowPosition = -1;
        this.selPnbThmSeq = "";
        this.selPnbSeq = "";
        this.selPnbLvl = 0;
        var curImgBtnName = "";
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

         	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.fn_grdPnbStoryThmList();
        }

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey) {
        		this.div_search_btn_search_onclick();
        	}
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        /**
         * PNB스토리 grid 값 조회
         */
        this.fn_grdPnbStoryThmList = function ()
        {
        	var sSvcId = "grdPnbStoryThmList";
        	var sUrl = "/sa/pnb-story/select-pnb-story-thm-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_grdPnbStoryThmList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * PNB스토리 테마 전시 순서 저장
         */
        this.fn_saveThmDispSo = function()
        {
        	var sSvcId = "saveThmDispSo";
        	var sUrl = "/sa/pnb-story/save-thm-disp-so.do";
        	var sInData = "ds_save=ds_grdPnbStoryList:U"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * PNB스토리 테마 저장
         */
        this.fn_saveThmInfo = function()
        {
        	var sSvcId = "saveThmInfo";
        	var sUrl = "/sa/pnb-story/save-thm-info.do";
        	var sInData = "ds_save=ds_pnbStoryInfo:A ds_save2=ds_grdPnbStoryList:U"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * PNB스토리 테마 삭제
         */
        this.fn_deleteThmInfo = function()
        {
        	var sSvcId = "deleteThmInfo";
        	var sUrl = "/sa/pnb-story/delete-thm-info.do";
        	var sInData = "ds_delete=ds_pnbStoryInfo:A"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * PNB스토리 테마 아이템 저장(PNB_STORY_INFO)
         */
        this.fn_savePnbStoryInfo = function()
        {
        	var sSvcId = "savePnbStoryInfo";
        	var sUrl = "/sa/pnb-story/save-pnb-story-info.do";
        	var sInData = "ds_save=ds_pnbStoryInfo:A ds_save2=ds_grdPnbStoryCatgDtl:U ds_save3=ds_grdPnbStoryCatgPrdDtl:U"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * PNB스토리 테마 아이템 삭제(PNB_STORY_INFO)
         */
        this.fn_deletePnbStoryInfo = function()
        {
        	var sSvcId = "deletePnbStoryInfo";
        	var sUrl = "/sa/pnb-story/delete-pnb-story-info.do";
        	var sInData = "ds_delete=ds_pnbStoryInfo:A"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * PNB스토리 카테고리, 카테고리 상품 조회
         */
        this.fn_grdPnbStoryCatgPrdList = function ()
        {
        	var sSvcId = "grdPnbStoryCatgPrdList";
        	var sUrl = "/sa/pnb-story/select-pnb-story-catg-prd-list.do";
        	var sInData = "ds_search=ds_pnbStoryInfo"
        	var sOutData = "ds_grdPnbStoryCatgDtl=ds_output1 ds_grdPnbStoryCatgPrdDtl=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 상품ID 유효성 검사
         */
        this.fn_prdIdCheck = function()
        {
        	var sSvcId = "prdIdCheck";
        	var sUrl = "/sa/com/select-prd-id-check-list.do";
        	var sInData = "ds_search=ds_search:A ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var sOutData = "ds_prdInfoList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        // 대용량 엑셀 다운로드
        this.fn_largeExcelDown = function()
        {
        	var sSvcId = "selectPnbStoryExcel";
        	var sUrl = "/sa/pnb-story/select-pnb-story-excel.do";
        	var sInData = "ds_search=ds_search";
        	var sOutData    = "ds_excelPnbStoryList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        /**
         * 공통 callback
         */
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0) {
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID) {
        		case "grdPnbStoryThmList" :

        			this.fn_pnbStorySelect(this.preSelectRowPosition);

        			// 트리에서 선택된 것이 아이템일 경우 트리 열면서 위치 찾기
        			if(this.selPnbLvl == 2) {
        				this.fn_grdSetPosition();
        			} else { // 아이템이 아닐 경우 선택위치만 세팅
        				this.ds_grdPnbStoryThmList.set_rowposition(this.preSelectRowPosition);
        			}
        			break;

        		case "saveThmDispSo" :
        			if(errorCode == "") {
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_grdPnbStoryThmList();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "saveThmInfo" :
        			if(errorCode == "") {
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_grdPnbStoryThmList();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "deleteThmInfo" :
        			if(errorCode == "") {
        				alert(this.fn_getMessage("ERRC000047")); // 삭제되었습니다.
        				this.preSelectRowPosition = -1; // 초기화
        				this.fn_grdPnbStoryThmList();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "savePnbStoryInfo" :
        			if(errorCode == "") {
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_grdPnbStoryThmList();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "deletePnbStoryInfo" :
        			if(errorCode == "") {
        				alert(this.fn_getMessage("ERRC000047")); // 삭제되었습니다.
        				this.preSelectRowPosition = -1; // 초기화
        				this.fn_grdPnbStoryThmList();
        			} else {
        				alert(errorMsg);
        			}
        			break;

        		case "grdPnbStoryCatgPrdList" :

        			// 첫번째 카테고리의 상품 조회
        			var nRow = this.ds_grdPnbStoryCatgDtl.rowposition;
        			if (nRow >= 0) {
        				var sPnbStoryCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRow, "PNB_CATG_SEQ");
        				this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + sPnbStoryCatgSeq + "'");
        			} else {
        				this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == 'NOTHING'");
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "selectPnbStoryExcel" :
        			var sFileName = "PNB스토리_상품상태_EXCEL_EXPORT";
        			var aGrid = [this.grd_excelPnbStoryList];
        			var aSht  = ["PNB스토리"];
        			var sToday = this.fn_todayTime();
        			sFileName = sFileName + "_" + sToday;

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

        			break;

        		case "prdIdCheck" :

        			var tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++) {
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");

        				if (this.gfn_isNull(sPrdNm)) {
        					tempPrdId = tempPrdId + sPrdIdView + ",";
        				}
        			}

        			tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);

        			if (tempPrdId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000025", tempPrdId));
        				alert(this.fn_getMessage("ERRN000025", tempPrdId)); // 없는 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}

        			var nRow = this.ds_grdPnbStoryCatgDtl.rowposition;	// this.grd_pnbStoryCatgDtl.currentrow;
        			var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRow, "PNB_CATG_SEQ");

        			var totalCount2 = 0;
        			tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++) {
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");
        				var sAttrVal = this.ds_prdInfoList.getColumn(x, "ATTR_VAL");
        				var sMnfr = this.ds_prdInfoList.getColumn(x, "MNFR");
        				var sPubOnlySprNm = this.ds_prdInfoList.getColumn(x, "PUB_ONLY_SPR_NM");
        				var sReprPrdSprNm = this.ds_prdInfoList.getColumn(x, "REPR_PRD_SPR_NM");
        				var sPrdUseYnNm = this.ds_prdInfoList.getColumn(x, "PRD_USE_YN_NM");
        				var sDispStatsNm = this.ds_prdInfoList.getColumn(x, "DISP_STATS_NM");

        				if (!this.gfn_isNull(sPrdNm)) {
        					var findRow = this.ds_grdPnbStoryCatgPrdDtl.findRowExpr("PRD_ID == '" + sPrdId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_grdPnbStoryCatgPrdDtl.addRow();

        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_THM_SEQ", this.selPnbThmSeq);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_SEQ", "");
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_CATG_SEQ", sPnbCatgSeq);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_ID", sPrdId);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", sPrdIdView);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_NM", sPrdNm);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "ATTR_VAL", sAttrVal);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "MNFR", sMnfr);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", sPubOnlySprNm);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", sReprPrdSprNm);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", sPrdUseYnNm);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", sDispStatsNm);
        						this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempPrdId = tempPrdId + sPrdIdView + ",";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + sPnbCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		default :

        			break;
        	}
        }

        // 팝업 callback
        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_searchPrdId" :

        			var nRow = this.ds_grdPnbStoryCatgDtl.rowposition;	// this.grd_pnbStoryCatgDtl.currentrow;
        			var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRow, "PNB_CATG_SEQ");

        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_grdPnbStoryCatgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_grdPnbStoryCatgPrdDtl.addRow();
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_THM_SEQ", this.selPnbThmSeq);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_SEQ", "");
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PNB_CATG_SEQ", sPnbCatgSeq);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "ATTR_VAL", rowData.ATTR_VAL);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "MNFR", rowData.MNFR_NM);
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", "");
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", "");
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", "");
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", "");
        					this.ds_grdPnbStoryCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        				} else {
        					totalCount2 = totalCount2 + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}

        			if (totalCount2 > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + sPnbCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "btn_searchPrdIdMulText" :

        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sPrdId = sTempValue[x];

        					if (sPrdId != "") {
        						var nRow = this.ds_searchPrdIdCheckList.addRow();

        						this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", sPrdId);
        					}
        				}

        				this.fn_prdIdCheck();
        			}

        			break;

        		default :

        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// 필수 설정
        	this.div_dtl2.form.sta_ttl.uEssentiel = "true";
        	this.div_dtl2.form.sta_expsCnt.uEssentiel = "true";
        	this.div_dtl2.form.sta_pcImg.uEssentiel = "true";
        	this.div_dtl2.form.sta_mblImg.uEssentiel = "true";

        	this.div_dtl3.form.sta_ttl.uEssentiel = "true";
        	this.div_dtl3.form.sta_pcLstImg.uEssentiel = "true";
        	this.div_dtl3.form.sta_pcDtlImg.uEssentiel = "true";
        	this.div_dtl3.form.sta_mblLstImg.uEssentiel = "true";
        	this.div_dtl3.form.sta_mblDtlImg.uEssentiel = "true";
        	this.div_dtl3.form.sta_useYn.uEssentiel = "true";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 트리 선택
        this.fn_pnbStorySelect = function(selRow) {
        	this.preSelectRowPosition = selRow; //선택한 로우 저장
        	var dtlHeight = 33;
        	var leafStatus = this.div_mst.form.grd_pnbStoryThmList.isTreeLeafRow(selRow);
        	var vCoCd = this.ds_grdPnbStoryThmList.getColumn(selRow, "CO_CD");
        	this.selPnbThmSeq = this.ds_grdPnbStoryThmList.getColumn(selRow, "PNB_THM_SEQ");
        	this.selPnbSeq = this.ds_grdPnbStoryThmList.getColumn(selRow, "PNB_SEQ");
        	this.selPnbLvl = this.ds_grdPnbStoryThmList.getColumn(selRow, "PNB_LVL");
        	var activeDiv = this.div_dtl1;
        	this.ds_pnbStoryInfo.copyRow(0, this.ds_grdPnbStoryThmList, selRow);

        	// selRow == -1(테마전체조회) or vPnbLvl == 1(테마의 아이템 목록 조회) 일 경우
        	if(this.selPnbLvl != 2) {
        		this.ds_grdPnbStoryListTemp.clearData();
        		this.ds_grdPnbStoryList.clearData();
        		this.ds_grdPnbStoryListTemp.copyData(this.ds_grdPnbStoryThmList);
        		if(selRow == -1) {
        			this.ds_grdPnbStoryListTemp.filter("PNB_LVL == 1");
        			this.div_dtl2.set_visible(false);
        			this.div_dtl3.set_visible(false);

        			this.div_mst.form.btn_itmAdd.set_visible(false);
        		} else if(this.selPnbLvl == 1) {
        			this.ds_grdPnbStoryListTemp.filter("PNB_THM_SEQ == '" + this.selPnbThmSeq + "' && PNB_LVL == '" + (this.selPnbLvl+1) + "'");
        			activeDiv = this.div_dtl2;
        			this.div_dtl1.set_visible(false);
        			this.div_dtl3.set_visible(false);
        			// 테마 삭제 버튼 노출, 취소버튼 미노출
        			this.div_dtl3.form.btn_deleteThmItm.set_visible(true);
        			this.div_dtl3.form.btn_cancelThmItm.set_visible(false);

        			this.fn_setLenByte(this.div_dtl2.form.edt_ttl.value, 300, "thmNm"); // 글자수 체크

        			this.div_mst.form.btn_itmAdd.set_visible(true);
        			this.div_dtl3.form.sta_itmInfo.set_text("아이템 상세");
        		}
        		// 필터된 PNB리스트 복사
        		this.ds_grdPnbStoryList.copyData(this.ds_grdPnbStoryListTemp, true);

        		// 테마 아이템 크기 조정
        		if(activeDiv.form.grd_pnbStoryList.rowcount == 0) {
        			activeDiv.form.grd_pnbStoryList.set_height(dtlHeight + 2);
        		}else{
        			dtlHeight = activeDiv.form.grd_pnbStoryList.getRealRowFullSize();
        			activeDiv.form.grd_pnbStoryList.set_height(dtlHeight + 2);
        		}
        		activeDiv.form.sta_thmItmBack.set_height(dtlHeight+50);
        		activeDiv.form.sta_thmItm.set_height(dtlHeight+50);
        	} else {
        		activeDiv = this.div_dtl3;
        		this.div_dtl1.set_visible(false);
        		this.div_dtl2.set_visible(false);
        		// 테마 삭제 버튼 노출, 취소버튼 미노출
        		this.div_dtl3.form.btn_deleteThmItm.set_visible(true);
        		this.div_dtl3.form.btn_cancelThmItm.set_visible(false);

        		this.div_mst.form.btn_itmAdd.set_visible(true);
        		this.div_dtl3.form.sta_itmInfo.set_text("아이템 상세");

        		// 글자수 체크
        		this.fn_setLenByte(this.div_dtl3.form.edt_ttl.value, 300, "ttl");
        		this.fn_setLenByte(this.div_dtl3.form.edt_subTtl.value, 300, "subTtl");

        		// 카테고리 상품 조회
        		this.fn_grdPnbStoryCatgPrdList();
        	}
        	activeDiv.set_visible(true);

        	// div 위치값 조정
        	activeDiv.set_left(600);
        	activeDiv.set_top(0);
        	activeDiv.set_right(0);

        	//그리드 자동 펼치기
        	var gridObj = this.div_mst.form.grd_pnbStoryThmList;
        	var nGridRow = gridObj.getTreeRow(selRow);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);
        	gridObj.setTreeStatus(nGridRow, nStatus);
        }

        // 테마 아이템 등록 화면 세팅
        this.fn_thmItmAdd = function() {
        	var activeDiv = this.div_dtl3;
        	this.div_dtl1.set_visible(false);
        	this.div_dtl2.set_visible(false);
        	this.div_dtl3.set_visible(true);
        	activeDiv.set_left(600);
        	activeDiv.set_top(0);
        	activeDiv.set_right(0);
        	// 테마 삭제 버튼 미노출, 취소버튼 노출
        	this.div_dtl3.form.btn_deleteThmItm.set_visible(false);
        	this.div_dtl3.form.btn_cancelThmItm.set_visible(true);

        	this.ds_grdPnbStoryCatgDtl.clearData();
        	this.ds_grdPnbStoryCatgPrdDtl.clearData();
        	this.ds_grdPnbStoryCatgDtlTemp.clearData();
        	this.ds_grdPnbStoryCatgPrdDtlTemp.clearData();
        	this.ds_pnbStoryInfo.clearData();

        	this.div_dtl3.form.sta_ttlSize.set_text("(0 / 300 Byte)");
        	this.div_dtl3.form.sta_subTtlSize.set_text("(0 / 300 Byte)");

        	this.ds_pnbStoryInfo.addRow();
        	this.ds_pnbStoryInfo.setColumn(0, "CO_CD", this.fv_coCd)
        	this.ds_pnbStoryInfo.setColumn(0, "PNB_THM_SEQ", this.ds_grdPnbStoryThmList.getColumn(this.preSelectRowPosition, "PNB_THM_SEQ"));
        	this.div_dtl3.form.rdo_useYn.set_index(1);

        	this.div_dtl3.form.sta_itmInfo.set_text("아이템 추가");
        };

        /**
         * 글자 byte 체크 함수
         */
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var expsText = "";

        	var count = 0;
        	if(!this.gfn_isNull(sVal)) {
        		count = nexacro._getUtf8Length(sVal);
        	}

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if(sGubun == "thmNm") {
        			this.div_dtl2.form.sta_ttlSize.set_text(expsText);
        		} else if(sGubun == "ttl") {
        			this.div_dtl3.form.sta_ttlSize.set_text(expsText);
        		}  else if(sGubun == "subTtl") {
        			this.div_dtl3.form.sta_subTtlSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";
        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if(sGubun == "thmNm") {
        		this.div_dtl2.form.edt_ttl.set_value("");
        		this.div_dtl2.form.edt_ttl.set_value(tempVal);
        		this.div_dtl2.form.sta_ttlSize.set_text(expsText);
        	} else if(sGubun == "ttl") {
        		this.div_dtl3.form.edt_ttl.set_value("");
        		this.div_dtl3.form.edt_ttl.set_value(tempVal);
        		this.div_dtl3.form.sta_ttlSize.set_text(expsText);
        	} else if(sGubun == "subTtl") {
        		this.div_dtl3.form.edt_subTtl.set_value("");
        		this.div_dtl3.form.edt_subTtl.set_value(tempVal);
        		this.div_dtl3.form.sta_subTtlSize.set_text(expsText);
        	}
        };

        //트리 셀 인덱스 가져온다.
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount = objGrid.getCellCount("body");
        	var nCellType;
        	var nCol = 0;
        	for(nCol=0; nCol<nCellCount; nCol++) {
        		nCellType = objGrid.getCellProperty("body",nCol,"displaytype");
        		//get first treecell num
        		if(nCellType = "treeitemcontrol") {
        			break;
        		}
        	}
        	return nCol;
        }

        // 선택된 위치로 이동
        this.fn_grdSetPosition = function()
        {
        	var grdTree	 	= this.div_mst.form.grd_pnbStoryThmList;
        	var nCellIndex 	= this.fnGetTreeCellIndex(grdTree);
        	var nRow 		= this.ds_grdPnbStoryThmList.findRow("PNB_SEQ",this.selPnbSeq);

        	var nStartLvl 	= grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl 	= 0;

        	var arrRoot 	= new Array();
        	grdTree.set_enableevent(false);
        	if(!grdTree.isTreeRootRow(nRow,true)) {
        		nEndLvl = grdTree.getCellPropertyValue(nRow,nCellIndex,"treelevel");
        		var parentsRow 	= 0;
        		var nRowFindRow = nRow;
        		for(var i=nStartLvl; i<nEndLvl; i++) {
        			parentsRow = grdTree.getTreeParentRow(nRowFindRow);
        			if (parentsRow>-1) {
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			} else {
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--) {
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	this.ds_grdPnbStoryThmList.set_rowposition(nRow);
        }

        //입력값 찾기
        this.setFindeCodeRow = function (objForm)
        {
        	var edtValue = this.div_mst.form.edt_searchNm.value;
        	var dsTree	 = this.ds_grdPnbStoryThmList;
        	var grdTree	 = this.div_mst.form.grd_pnbStoryThmList;

        	var nTreeCellIndex = this.fnGetTreeCellIndex(grdTree);
        	var nStartLvl = grdTree.getCellProperty("body",nTreeCellIndex,"treestartlevel");
        	var nCellIndex = this.fnGetTreeCellIndex(grdTree);

        	var nRowPos	 = dsTree.rowposition;

        	if(!this.gfn_isNull(edtValue)) {
        		var strSearchId = "TTL";
        		var sFilterstr = strSearchId.toUpperCase() +".indexOf('"+edtValue.toUpperCase()+"') > -1";

        		var findRow = 0;
        			nRowPos++;
        			findRow = dsTree.findRowExpr(sFilterstr,nRowPos);
        	} else {
        		//alert("검색어를 입력해 주세요.");
        		this.alert(this.fn_getMessage("ERRS000220"));
        		return false;
        	}

        	//parent row tree status update -> parent tree status "expand"
        	var nTreeRow = 0;
        	var nStartLvl = grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl = 0;

        	var arrRoot = new Array();
        	grdTree.set_enableevent(false);
        	if(!grdTree.isTreeRootRow(findRow,true)) {
        		nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");

        		var parentsRow = 0;
        		var nRowFindRow = findRow;
        		for(var i=nStartLvl; i<nEndLvl; i++) {
        			parentsRow = grdTree.getTreeParentRow(nRowFindRow);

        			if (parentsRow>-1){
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			} else {
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--) {
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	if( findRow == -1 ) {
        		alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        		findRow = 0;
        	}
        	//set_rowposition
        	dsTree.set_rowposition(findRow);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 트리 클릭
        this.grd_pnbStoryThmList_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "treeitembutton") {
        		return false;
        	}
        	this.fn_pnbStorySelect(e.row);
        };

        // 카테고리 추가
        this.btn_catgAdd_onclick = function(obj,e)
        {
        	var nRowCurr = this.ds_grdPnbStoryCatgDtl.rowposition;

        	if (nRowCurr >= 0) {
        		var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRowCurr, "PNB_CATG_SEQ");
        		var sCatgNm = this.ds_grdPnbStoryCatgDtl.getColumn(nRowCurr, "CATG_NM");
        		var sCatgDispSo = this.ds_grdPnbStoryCatgDtl.getColumn(nRowCurr, "CATG_DISP_SO");

        		if (this.div_dtl3.form.edt_catgNm.value == "" || this.div_dtl3.form.edt_catgNm.value == undefined) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 명은")); // 카테고리 명은 필수 입력항목입니다.
        			this.div_dtl3.form.edt_catgNm.setFocus();
        			return;
        		}

        		if (this.div_dtl3.form.edt_catgDispSo.value == "" || this.div_dtl3.form.edt_catgDispSo.value == undefined) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 순서는")); // 카테고리 순서는 필수 입력항목입니다.
        			this.div_dtl3.form.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdPnbStoryCatgDtlTemp.clearData();

        		for(var i=0; i<this.ds_grdPnbStoryCatgDtl.getRowCount(); i++) {
        			if (nRowCurr != i) {
        				var nRowAdd = this.ds_grdPnbStoryCatgDtlTemp.addRow();

        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "CO_CD", this.ds_grdPnbStoryCatgDtl.getColumn(i, "CO_CD"));
        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "PNB_THM_SEQ", this.ds_grdPnbStoryCatgDtl.getColumn(i, "PNB_THM_SEQ"));
        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "PNB_SEQ", this.ds_grdPnbStoryCatgDtl.getColumn(i, "PNB_SEQ"));
        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "PNB_CATG_SEQ", this.ds_grdPnbStoryCatgDtl.getColumn(i, "PNB_CATG_SEQ"));
        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "CATG_NM", this.ds_grdPnbStoryCatgDtl.getColumn(i, "CATG_NM"));
        				this.ds_grdPnbStoryCatgDtlTemp.setColumn(nRowAdd, "CATG_DISP_SO", this.ds_grdPnbStoryCatgDtl.getColumn(i, "CATG_DISP_SO"));
        			}
        		}

        		var findRow = this.ds_grdPnbStoryCatgDtlTemp.findRowExpr("CATG_DISP_SO == '" + this.div_dtl3.form.edt_catgDispSo.value + "'");

        		if(findRow >= 0) {
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.div_dtl3.form.edt_catgDispSo.setFocus();
        			return;
        		}

        		if (this.ds_grdPnbStoryCatgPrdDtl.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000006")); // 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	var nRow = this.ds_grdPnbStoryCatgDtl.addRow();

        	this.ds_grdPnbStoryCatgDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        	this.ds_grdPnbStoryCatgDtl.setColumn(nRow, "PNB_THM_SEQ", this.selPnbThmSeq);
        	this.ds_grdPnbStoryCatgDtl.setColumn(nRow, "PNB_SEQ", "");
        	this.ds_grdPnbStoryCatgDtl.setColumn(nRow, "PNB_CATG_SEQ", "C" + nRow);

        	this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + "C" + nRow + "'");
        };

        // 카테고리 삭제
        this.btn_catgDelete_onclick = function(obj,e)
        {
        	var nRow = this.div_dtl3.form.grd_pnbStoryCatgDtl.currentrow;

        	if (nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?

        		var nRow = this.ds_grdPnbStoryCatgDtl.rowposition;

        		var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRow, "PNB_CATG_SEQ");

        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_grdPnbStoryCatgPrdDtl.rowcount; i++) {
        			if(this.ds_grdPnbStoryCatgPrdDtl.getColumn(i, "PNB_CATG_SEQ") == sPnbCatgSeq) {
        				aDelArr.push(i);
        			}
        		}

        		// 상품 삭제
        		this.ds_grdPnbStoryCatgPrdDtl.deleteMultiRows(aDelArr);

        		// 카테고리 삭제
        		this.ds_grdPnbStoryCatgDtl.deleteRow(nRow);

        		var nRow2 = this.ds_grdPnbStoryCatgDtl.rowposition;

        		if (nRow2 >= 0) {
        			var sPnbCatgSeq2 = this.ds_grdPnbStoryCatgDtl.getColumn(nRow2, "PNB_CATG_SEQ");

        			this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + sPnbCatgSeq2 + "'");
        		} else {
        			this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == 'NOTHING'");
        		}

        		var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        		this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);
        	}
        };

        // 상품 검색
        this.btn_searchPrdId_onclick = function(obj,e)
        {
        	var nRow = this.div_dtl3.form.grd_pnbStoryCatgDtl.currentrow;

        	if (nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        			   , mallSprCd : "0" // 몰구분없이 조회되도록
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "카테고리 상품 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallback", oOption);
        };

        // 상품검색 멀티텍스트
        this.btn_searchPrdIdMulText_onclick = function(obj,e)
        {
        	var nRow = this.div_dtl3.form.grd_pnbStoryCatgDtl.currentrow;

        	if (nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.div_dtl3.form.btn_searchPrdIdMulText
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallback", oOption);
        };

        // 카테고리 그리드 cell 클릭 시
        this.grd_pnbStoryCatgDtl_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = objDs.rowposition;

        	var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(nRow, "PNB_CATG_SEQ");

        	this.ds_grdPnbStoryCatgPrdDtl.filter("PNB_CATG_SEQ == '" + sPnbCatgSeq + "'");

        	var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        	this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);
        };


        // 카테고리 상품 cell 클릭 시
        this.grd_pnbStoryCatgPrdDtl_oncellclick = function(obj,e)
        {
        	if(e.col == this.div_dtl3.form.grd_pnbStoryCatgPrdDtl.getBindCellIndex("body", "DELETE_ROW")) {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?

        			var objDs = obj.getBindDataset();
        			var nRow = objDs.rowposition;

        			objDs.deleteRow(nRow);

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPnbStoryCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.div_dtl3.form.sta_totalCountPrdDtl.set_text(sTotText);
        		}
        	}
        }

        // 테마 추가
        this.btn_thmAdd_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("thmRegPop", "SA::SSP_BO_NA_15.xfdl", objParam);
        };

        // 아이템 추가
        this.btn_itmAdd_onclick = function(obj,e)
        {
        	this.fn_thmItmAdd();
        };

        // 테마 전시 순서 저장
        this.btn_saveThmDispSo_onclick = function(obj,e)
        {
        	// 테마 아이템 순서
        	for(var i = 0; i< this.ds_grdPnbStoryList.rowcount; i++) {
        		this.ds_grdPnbStoryList.setColumn(i, "DISP_SO", i+1);
        	}
        	if( !this.fn_dataCheck(this.ds_grdPnbStoryList) ) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	}
        	this.fn_saveThmDispSo();
        };

        // 테마 저장
        this.btn_saveThm_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_dtl2.form.edt_ttl.value)) {
        		alert(this.fn_getMessage("COMS000011", "테마 명")); // 테마 명을(를) 입력해 주십시오
        		this.div_dtl2.form.edt_ttl.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl2.form.edt_pcAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "PC 공통 표지 이미지는")); // PC 공통 표지 이미지는 필수 입력항목입니다.
        		this.div_dtl2.form.edt_pcAtflNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl2.form.edt_mblAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "Mobile 공통 표지 이미지는")); // Mobile 공통 표지 이미지는 필수 입력항목입니다.
        		this.div_dtl2.form.edt_mblAtflNm.setFocus();
        		return;
        	}

        	// 테마 아이템 순서
        	for(var i = 0; i< this.ds_grdPnbStoryList.rowcount; i++) {
        		this.ds_grdPnbStoryList.setColumn(i, "UI_DISP_SEQ", i+1);
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pc") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mbl") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        			}
        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		} else {
        			this.fn_saveThmInfo();
        		}
        	} else {
        		this.fn_saveThmInfo();
        	}

        };

        // 테마 아이템 등록 취소
        this.btn_cancelThmItm_onclick = function(obj,e)
        {
        	this.fn_pnbStorySelect(this.preSelectRowPosition);
        };

        // 테마 삭제
        this.btn_deleteThm_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        	   this.fn_deleteThmInfo();
        	}
        };

        // 테마 아이템 저장(PNB_STORY_INFO)
        this.btn_saveThmItm_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_dtl3.form.edt_ttl.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제목은")); // 제목은 필수 입력항목입니다.
        		this.div_dtl3.form.edt_ttl.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl3.form.edt_pcLstAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "[PC] 이미지")); // [PC] 이미지는 필수 입력항목입니다.
        		this.div_dtl3.form.edt_pcLstAtflNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl3.form.edt_pcDtlAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "[PC] 상세이미지")); // [PC] 상세이미지는 필수 입력항목입니다.
        		this.div_dtl3.form.edt_pcDtlAtflNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl3.form.edt_mblLstAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "[Mobile] 이미지")); // [Mobile] 이미지는 필수 입력항목입니다.
        		this.div_dtl3.form.edt_mblLstAtflNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.div_dtl3.form.edt_mblDtlAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "[Mobile] 상세이미지")); // [Mobile] 상세이미지는 필수 입력항목입니다.
        		this.div_dtl3.form.edt_mblDtlAtflNm.setFocus();
        		return;
        	}

        	for(var i = 0; i< this.ds_grdPnbStoryCatgDtl.rowcount; i++) {
        		var sPnbCatgSeq = this.ds_grdPnbStoryCatgDtl.getColumn(i, "PNB_CATG_SEQ");
        		var sCatgNm = this.ds_grdPnbStoryCatgDtl.getColumn(i, "CATG_NM");
        		var sCatgDispSo = this.ds_grdPnbStoryCatgDtl.getColumn(i, "CATG_DISP_SO");

        		if (this.gfn_isNull(sCatgNm)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 명은")); // 카테고리를 추가하면 카테고리 명은 필수 입력항목입니다.
        			return;
        		}

        		if (this.gfn_isNull(sCatgDispSo)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 순서는")); // 카테고리를 추가하면 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdPnbStoryCatgDtlTemp.clearData();
        		this.ds_grdPnbStoryCatgDtlTemp.copyData(this.ds_grdPnbStoryCatgDtl);
        		this.ds_grdPnbStoryCatgDtlTemp.filter("CATG_DISP_SO == '" + this.div_dtl3.form.edt_catgDispSo.value + "'");
        		var nCnt = this.ds_grdPnbStoryCatgDtlTemp.getRowCount();

        		if(nCnt > 1) {
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.div_dtl3.form.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdPnbStoryCatgPrdDtlTemp.clearData();
        		this.ds_grdPnbStoryCatgPrdDtlTemp.copyData(this.ds_grdPnbStoryCatgPrdDtl);
        		this.ds_grdPnbStoryCatgPrdDtlTemp.filter("PNB_CATG_SEQ == '" + sPnbCatgSeq + "'");

        		if (this.ds_grdPnbStoryCatgPrdDtlTemp.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000007")); // 카테고리를 추가하면 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcLst") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_LST_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblLst") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcDtl") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblDtl") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        			}
        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		} else {
        			this.fn_savePnbStoryInfo();
        		}
        	} else {
        		this.fn_savePnbStoryInfo();
        	}
        };

        // 테마 아이템 삭제(PNB_STORY_INFO)
        this.btn_deleteThmItm_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		this.fn_deletePnbStoryInfo();
        	}
        };

        // 검색
        this.btn_find_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	this.setFindeCodeRow(objForm);
        };

        //검색 input
        this.edt_searchNm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.div_mst.form.btn_find.click();
        	}
        };

        //drag 시작
        this.grd_pnbStoryList_ondrag = function(obj,e)
        {
        	// 그리드의 ☰ 표시 눌러서만 드래그되게
        	if(e.col != 1) {
        		return;
        	}

        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"TTL");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10 + 600; //600px left값을 더해줌
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;
        };

        //이동
        this.grd_pnbStoryList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10 + 600; //600px left값을 더해줌
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        //row 변경
        this.grd_pnbStoryList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        // 이미지 삭제
        this.btn_imgDelete_onclick = function(obj,e)
        {
        	var findRow = -1;
        	if(e.fromobject.id == "btn_pcImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"PC_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pc");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pc'");
        	} else if(e.fromobject.id == "btn_mblImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"MBL_ATFL_NM", "");
        		this.fileUpTrans.removeFile("mbl");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mbl'");
        	} else if(e.fromobject.id == "btn_pcLstImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"PC_LST_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pcLst");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcLst'");
        	} else if(e.fromobject.id == "btn_pcDtlImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"PC_DTL_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pcDtl");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcDtl'");
        	} else if(e.fromobject.id == "btn_mblLstImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"MBL_LST_ATFL_NM", "");
        		this.fileUpTrans.removeFile("mblLst");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblLst'");
        	} else if(e.fromobject.id == "btn_mblDtlImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"MBL_DTL_ATFL_NM", "");
        		this.fileUpTrans.removeFile("mblDtl");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblDtl'");
        	}

        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 이미지 등록
        this.btn_imgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = "";
        	var docRegSeq = "";

        	if(e.fromobject.id == "edt_pcAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_mblAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_pcLstAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "PC_LST_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_mblLstAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "MBL_LST_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_pcDtlAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "PC_DTL_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_mblDtlAtflNm") {
        		docRegId = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_ID");
        		docRegSeq = this.ds_pnbStoryInfo.getColumn(0, "MBL_DTL_DOC_REG_SEQ");
        	}
        	this.img_view.set_width(200);
         	this.img_view.set_height(300);

        	if(!this.gfn_isNull(docRegId)) {
        		// 화면을 띄우기에 obj.left는 150px이고 좌측에 떨어진 600px 을 더해야해서 하드코딩
        		obj.left = 750;
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };

        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
        };

        // 테마명 keyup
        this.edt_thmNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "thmNm");
        };

        // 제목 keyup
        this.edt_ttl_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "ttl");
        };
        // 서브 제목 keyup
        this.edt_subTtl_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "subTtl");
        };

        // 대용량 엑셀 다운로드
        this.btn_largeExcel_onclick = function(obj,e)
        {
        	if(!this.confirm(this.fn_getMessage("ERRP000268"))) { // 대용량 다운로드를 실행하시겠습니까?
        	   return false;
        	}

        	this.fn_largeExcelDown();
        };

        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/

        //해당 row에 파일 추가
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if (e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;


        		// 같은 이름의 파일을 업로드했을 경우 대비
        // 		this.ds_pnbStoryInfo.set_updatecontrol(false);
        // 		this.ds_pnbStoryInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        // 		this.ds_pnbStoryInfo.set_updatecontrol(true);
        		var imgType = "";
        		var colName = "";
        		if(curImgBtnName == "btn_pcImgAdd") {
        			imgType = "pc";
        			colName = "PC_ATFL_NM";
        		} else if(curImgBtnName == "btn_mblImgAdd") {
        			imgType = "mbl";
        			colName = "MBL_ATFL_NM";
        		} else if(curImgBtnName == "btn_pcLstImgAdd") {
        			imgType = "pcLst";
        			colName = "PC_LST_ATFL_NM";
        		} else if(curImgBtnName == "btn_mblLstImgAdd") {
        			imgType = "mblLst";
        			colName = "MBL_LST_ATFL_NM";
        		} else if(curImgBtnName == "btn_pcDtlImgAdd") {
        			imgType = "pcDtl";
        			colName = "PC_DTL_ATFL_NM";
        		} else if(curImgBtnName == "btn_mblDtlImgAdd") {
        			imgType = "mblDtl";
        			colName = "MBL_DTL_ATFL_NM";
        		}

        		this.fileUpTrans.removeFile(imgType);
        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == '" + imgType + "'");
        		if (findRow >= 0) {
        			this.ds_file.deleteRow(findRow);
        		}

        		// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        		var nRowIdx = this.ds_file.addRow();
        		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_file.setColumn(nRowIdx, "IMG_TYPE", imgType);
        		this.ds_pnbStoryInfo.setColumn(0, colName, obj.filename);
        		this.fileUpTrans.addFile(imgType, obj)
        	}
        };

        //업로드용 Virtual 파일 oneroor 이벤트
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;
        	this.nRow = -1;
        	alert(msg);
        };

        // 파일 다운로드
        this.downloadfile = function(imgType) {
        	tthis.FileDownTransfer.clearPostDataList();
        	if(imgType == "pc") {
        		this.FileDownTransfer.set_downloadfilename(this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ"));
        	} else if(imgType == "mbl") {
        		this.FileDownTransfer.set_downloadfilename(this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ"));
        	}
        	this.FileDownTransfer.download('/co/file-download.do');
        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        //파일 DIALOG CLOSE 이벤트
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var thmSaveYn = "N";
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		if(objCallDs.getColumn(i, "imgType") == "pc") {
        			this.ds_pnbStoryInfo.setColumn(0, "PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        			thmSaveYn = "Y";
        		} else if(objCallDs.getColumn(i, "imgType") == "mbl") {
        			this.ds_pnbStoryInfo.setColumn(0, "MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        			thmSaveYn = "Y";
        		} else if(objCallDs.getColumn(i, "imgType") == "pcLst") {
        			this.ds_pnbStoryInfo.setColumn(0, "PC_LST_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mblLst") {
        			this.ds_pnbStoryInfo.setColumn(0, "MBL_LST_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "pcDtl") {
        			this.ds_pnbStoryInfo.setColumn(0, "PC_DTL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mblDtl") {
        			this.ds_pnbStoryInfo.setColumn(0, "MBL_DTL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	if(thmSaveYn == "Y") { // 테마
        		this.fn_saveThmInfo();
        	} else { // 테마 아이템
        		this.fn_savePnbStoryInfo();
        	}

        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_dtl1.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_dtl1.form.grd_pnbStoryList.addEventHandler("ondrop",this.grd_pnbStoryList_ondrop,this);
            this.div_dtl1.form.grd_pnbStoryList.addEventHandler("ondragmove",this.grd_pnbStoryList_ondragmove,this);
            this.div_dtl1.form.grd_pnbStoryList.addEventHandler("ondrag",this.grd_pnbStoryList_ondrag,this);
            this.div_dtl1.form.btn_saveThmDispSo.addEventHandler("onclick",this.btn_saveThmDispSo_onclick,this);
            this.div_mst.form.grd_pnbStoryThmList.addEventHandler("oncellclick",this.grd_pnbStoryThmList_oncellclick,this);
            this.div_mst.form.edt_searchNm.addEventHandler("onkeyup",this.edt_searchNm_onkeyup,this);
            this.div_mst.form.btn_find.addEventHandler("onclick",this.btn_find_onclick,this);
            this.div_mst.form.btn_itmAdd.addEventHandler("onclick",this.btn_itmAdd_onclick,this);
            this.div_mst.form.btn_largeExcel.addEventHandler("onclick",this.btn_largeExcel_onclick,this);
            this.div_mst.form.btn_thmAdd.addEventHandler("onclick",this.btn_thmAdd_onclick,this);
            this.div_dtl2.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_dtl2.form.edt_ttl.addEventHandler("onkeyup",this.edt_thmNm_onkeyup,this);
            this.div_dtl2.form.sta_regpsnIdSta.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl2.form.sta_updpsnIdSta.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl2.form.sta_regpsnNmSta.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl2.form.sta_updpsnNmSta.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl2.form.grd_pnbStoryList.addEventHandler("ondrag",this.grd_pnbStoryList_ondrag,this);
            this.div_dtl2.form.grd_pnbStoryList.addEventHandler("ondragmove",this.grd_pnbStoryList_ondragmove,this);
            this.div_dtl2.form.grd_pnbStoryList.addEventHandler("ondrop",this.grd_pnbStoryList_ondrop,this);
            this.div_dtl2.form.btn_saveThm.addEventHandler("onclick",this.btn_saveThm_onclick,this);
            this.div_dtl2.form.btn_deleteThm.addEventHandler("onclick",this.btn_deleteThm_onclick,this);
            this.div_dtl2.form.edt_pcAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.div_dtl2.form.edt_pcAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl2.form.edt_pcAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl2.form.btn_pcImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl2.form.btn_pcImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl2.form.edt_mblAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.div_dtl2.form.edt_mblAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl2.form.edt_mblAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl2.form.btn_mblImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl2.form.btn_mblImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl3.form.btn_cancelThmItm.addEventHandler("onclick",this.btn_cancelThmItm_onclick,this);
            this.div_dtl3.form.sta_itmInfo.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_dtl3.form.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.div_dtl3.form.sta_pcLstImg.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl3.form.sta_mblDtlImg.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl3.form.sta_pcDtlImg.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl3.form.sta_cnsolSrwr.addEventHandler("onclick",this.Div02_Static02_onclick,this);
            this.div_dtl3.form.edt_subTtl.addEventHandler("onkeyup",this.edt_subTtl_onkeyup,this);
            this.div_dtl3.form.edt_pcLstAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl3.form.edt_pcLstAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl3.form.btn_pcLstImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl3.form.btn_pcLstImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl3.form.edt_pcDtlAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl3.form.edt_pcDtlAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl3.form.btn_pcDtlImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl3.form.btn_pcDtlImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl3.form.edt_mblLstAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl3.form.edt_mblLstAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl3.form.btn_mblLstImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl3.form.btn_mblLstImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl3.form.edt_mblDtlAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.div_dtl3.form.edt_mblDtlAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.div_dtl3.form.btn_mblDtlImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.div_dtl3.form.btn_mblDtlImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.div_dtl3.form.edt_cnsolSrwr.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.div_dtl3.form.grd_pnbStoryCatgDtl.addEventHandler("oncellclick",this.grd_pnbStoryCatgDtl_oncellclick,this);
            this.div_dtl3.form.grd_pnbStoryCatgPrdDtl.addEventHandler("oncellclick",this.grd_pnbStoryCatgPrdDtl_oncellclick,this);
            this.div_dtl3.form.btn_searchPrdId.addEventHandler("onclick",this.btn_searchPrdId_onclick,this);
            this.div_dtl3.form.btn_catgDelete.addEventHandler("onclick",this.btn_catgDelete_onclick,this);
            this.div_dtl3.form.btn_catgAdd.addEventHandler("onclick",this.btn_catgAdd_onclick,this);
            this.div_dtl3.form.btn_searchPrdIdMulText.addEventHandler("onclick",this.btn_searchPrdIdMulText_onclick,this);
            this.div_dtl3.form.btn_saveThmItm.addEventHandler("onclick",this.btn_saveThmItm_onclick,this);
            this.div_dtl3.form.btn_deleteThmItm.addEventHandler("onclick",this.btn_deleteThmItm_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
