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
            this.set_titletext("R&D카테고리 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM_UPPER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLS_LVL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HIER_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_ATTR_PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_CONF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_DTM\"/><Col id=\"UPDPSN_ID\"/><Col id=\"UPDPSN_NM\"/><Col id=\"CO_CD\"/><Col id=\"MRO_PRD_CLCD\"/><Col id=\"MRO_PRD_CLSF_NM\"/><Col id=\"HRNK_PRD_CLCD\"/><Col id=\"MCND_PRD_YN\"/><Col id=\"PRD_CLCD\"/><Col id=\"SEL_MTHD_CD\"/><Col id=\"LWST_CD_YN\"/><Col id=\"NOTI_ITM_ID\"/><Col id=\"NOTI_ITM_NM\"/><Col id=\"SRT_SO\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"PRD_CLS_LVL_NM\"/><Col id=\"DEL_YN\"/><Col id=\"REGPSN_ID\"/><Col id=\"REGPSN_NM\"/><Col id=\"USE_YN\"/><Col id=\"HIER_LVL\"/><Col id=\"UPD_DTM\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"FRT_EXPS_YN\"/><Col id=\"DISP_PRD_FILE_ATTC_ID\"/><Col id=\"PR_PRD_CLSF_CHRPSN_ID\"/><Col id=\"MD_PRD_CLSF_CHRPSN_ID\"/><Col id=\"PR_PRD_CLSF_CHRPSN_NM\"/><Col id=\"MD_PRD_CLSF_CHRPSN_NM\"/><Col id=\"PRD_CNT\"/><Col id=\"PRD_CL_NM\"/><Col id=\"PRD_CLSF_ATTR_PRNM\"/><Col id=\"UPD_RSN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sel_mthd_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"0\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"0\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_dupChk", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLS_LVL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HIER_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_ATTR_PRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selMthdCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"0\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"0\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"MRO_PRD_CLCD\"/><Col id=\"NOTI_ITM_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_CLCD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_ID_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MRO_PRD_CLCD_YN\"/><Col id=\"NOTI_ITM_ID_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("mainDiv","21","11","560",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","9","69",null,null,"9","40",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"317\"/><Column size=\"0\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:PRD_CLSF_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:HIER_LVL\" tooltiptext=\"bind:PRD_CLSF_NM\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Edit("edtName","9","40",null,"24","40",null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("1");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","10","130","20",null,null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("2");
            obj.set_text("카테고리 목록");
            obj.set_cssclass("sta_WF_title01");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"40","24","24","10",null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_add_level","10",null,"129","24",null,"10",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("4");
            obj.set_text("대분류 카테고리추가");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_top",null,"10","129","24","10",null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("5");
            obj.set_text("TOP");
            obj.set_visible("true");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Div("div01","583","11",null,"700","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staPrdClsLvlNm","0","39","136","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staBag01","135","39",null,"35","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","140","44",null,"25","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staBag02","135","73",null,"35","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPrdClsfLwCnt","141","78",null,"25","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staMnuSeq","0","73","136","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("하위 카테고리 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staBag03","135","107",null,"80","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staSubList","0","107","136","80",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("하위 카테고리 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","90","24","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grd_subList","141","142",null,"33","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_binddataset("ds_subList");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"182\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" text=\"▲\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"▼\"/><Cell col=\"2\" text=\"bind:PRD_CLSF_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staTitle","149","119","255","15",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("※ 하위 카테고리의 순서를 변경할 수 있습니다.");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","583","236",null,"700","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTit01","0","39","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("카테고리ID");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag01","135","39",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLCD","140","44",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag03","135","107",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","141","112",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_maxlength("50");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staPrdClsfNm","0","107","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_text("카테고리명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag10","135","345",null,"80","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit09","0","345","136","80",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_text("하위 카테고리 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","90","24","95",null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_add_level",null,"10","129","24","189",null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_text("하위 카테고리추가");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grd_subList","141","380",null,"33","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_binddataset("ds_subList");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"182\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" text=\"▲\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"▼\"/><Cell col=\"2\" text=\"bind:PRD_CLSF_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTitle01","149","357","255","15",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_text("※ 하위 카테고리의 순서를 변경할 수 있습니다.");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"10","90","24","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("13");
            obj.set_text("변경이력");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag02","135","73",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","141","78",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit02","0","73","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("16");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag04","135","141",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit03","0","141","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("18");
            obj.set_text("카테고리 사용여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Radio("USE_YN","141","147",null,"25","358",null,null,null,null,null,this.div02.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div02_form_USE_YN_innerdataset = new nexacro.NormalDataset("div02_form_USE_YN_innerdataset", obj);
            div02_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_USE_YN_innerdataset);
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag05","135","175",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","141","180",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit04","0","175","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("22");
            obj.set_text("등록일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag06","135","209",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","141","214","225","25",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit05","0","209","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("25");
            obj.set_text("등록자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag07","135","243",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","141","248",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit06","0","243","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("28");
            obj.set_text("최종수정일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag08","135","277",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit07","0","277","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("30");
            obj.set_text("최종수정자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staBag09","135","311",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtPrdClsfLwCnt","141","316",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTit08","0","311","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("33");
            obj.set_text("하위 카테고리 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","371","214",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_ID","141","282","225","25",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_NM","371","282",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div03","1353","11",null,"830","-740",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBag15","135","311",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","90","24","95",null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_add_level",null,"10","129","24","284",null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_text("하위 카테고리추가");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"10","90","24","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_text("변경이력");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"10","90","24","189",null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag01","135","39",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLCD","140","44",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag03","135","107",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","141","112",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdClsfNm","0","107","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_text("카테고리명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.getSetter("uEssentiel").set("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag02","135","73",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","141","78",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdClsLvlNm","0","73","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag04","135","141",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staUseYn","0","141","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("14");
            obj.set_text("카테고리 사용여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Radio("USE_YN","141","147",null,"25","358",null,null,null,null,null,this.div03.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div03_form_USE_YN_innerdataset = new nexacro.NormalDataset("div03_form_USE_YN_innerdataset", obj);
            div03_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div03_form_USE_YN_innerdataset);
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag10","135","483",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","141","488",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staRegDtm","0","483","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("18");
            obj.set_text("등록일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag11","135","517",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staRegPsnId","0","517","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("20");
            obj.set_text("등록자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag12","135","551",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","141","556",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staUpdDtm","0","551","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("23");
            obj.set_text("최종수정일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag13","135","585",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staUpdpsnId","0","585","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("25");
            obj.set_text("최종수정자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag14","135","619",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CL_NM","141","624",null,"25","96",null,null,null,null,null,this.div03.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdClNm","0","619","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("28");
            obj.set_text("상품군 R&D속성");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag05","135","175",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staFrdExpsYn","0","175","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("30");
            obj.set_text("프론트 노출여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Radio("FRT_EXPS_YN","141","181",null,"25","358",null,null,null,null,null,this.div03.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div03_form_FRT_EXPS_YN_innerdataset = new nexacro.NormalDataset("div03_form_FRT_EXPS_YN_innerdataset", obj);
            div03_form_FRT_EXPS_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div03_form_FRT_EXPS_YN_innerdataset);
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag06","135","209",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLCD","141","214","236","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staMroPrdClcd","0","209","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("34");
            obj.set_text("S-MRO카테고리 매핑");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_mro",null,"214","25","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("35");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag07","135","243",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("NOTI_ITM_ID","141","248","236","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staNotiItmId","0","243","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("38");
            obj.set_text("고시품목 매핑");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_noti",null,"248","25","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("39");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag08","135","345",null,"105","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staImageView","0","345","136","105",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("41");
            obj.set_text("전시상품군 이미지");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag09","135","449",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CNT","141","454",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdCnt","0","449","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("44");
            obj.set_text("카테고리 상품 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","141","357","108","80",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("45");
            obj.set_cssclass("productImage");
            obj.set_text("");
            obj.set_stretch("fit");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_image_del","261","351","24","24",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_close_small_red");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_image_add",null,"351","104","24","8",null,null,null,null,null,this.div03.form);
            obj.set_taborder("47");
            obj.set_text("이미지 등록");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLSF_NM","381","214",null,"25","36",null,null,null,null,null,this.div03.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("NOTI_ITM_NM","381","248",null,"25","36",null,null,null,null,null,this.div03.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","141","522","225","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","371","522",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_ID","141","590","225","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_NM","371","590",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdClcd","0","39","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("54");
            obj.set_text("카테고리ID");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_attr",null,"624","84","24","8",null,null,null,null,null,this.div03.form);
            obj.set_taborder("55");
            obj.set_text("속성관리");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staSelMthdCd","0","311","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("56");
            obj.set_text("선정방식");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Combo("SEL_MTHD_CD","141","316","235","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("57");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_selMthdCdCombo");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","410","425","205","19",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("59");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","619","425","98","19",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("60");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staNotiItmId00","0","277","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("61");
            obj.set_text("SSP상품명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staBag07_00","135","277",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","141","282",null,"25","96",null,null,null,null,null,this.div03.form);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_sspPrdNm",null,"282","84","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("64");
            obj.set_text("SSP상품명");
            this.div03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div01.form.PRD_CLS_LVL_NM","value","ds_detail","PRD_CLS_LVL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.edtPrdClsfLwCnt","value","ds_menu","MNU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div02.form.PRD_CLCD","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div02.form.PRD_CLSF_NM","value","ds_detail","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div02.form.PRD_CLS_LVL_NM","value","ds_detail","PRD_CLS_LVL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div02.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div02.form.REG_DTM","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div02.form.REGPSN_ID","value","ds_detail","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div02.form.UPD_DTM","value","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div02.form.REGPSN_NM","value","ds_detail","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div02.form.UPDPSN_ID","value","ds_detail","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div02.form.UPDPSN_NM","value","ds_detail","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div03.form.PRD_CLCD","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div03.form.PRD_CLSF_NM","value","ds_detail","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div03.form.PRD_CLS_LVL_NM","value","ds_detail","PRD_CLS_LVL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div03.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div03.form.REG_DTM","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div03.form.UPD_DTM","value","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div03.form.FRT_EXPS_YN","value","ds_detail","FRT_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div03.form.MRO_PRD_CLCD","value","ds_detail","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div03.form.NOTI_ITM_ID","value","ds_detail","NOTI_ITM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div03.form.MRO_PRD_CLSF_NM","value","ds_detail","MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div03.form.NOTI_ITM_NM","value","ds_detail","NOTI_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div03.form.REGPSN_ID","value","ds_detail","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div03.form.REGPSN_NM","value","ds_detail","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div03.form.UPDPSN_ID","value","ds_detail","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div03.form.UPDPSN_NM","value","ds_detail","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div03.form.PRD_CNT","value","ds_detail","PRD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div03.form.PRD_CL_NM","value","ds_detail","PRD_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div03.form.SEL_MTHD_CD","value","ds_detail","SEL_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div03.form.edt_sspPrdNm","value","ds_detail","SSP_PRD_CONF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_26.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_26.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_26.xfdl(R&D카테고리 관리)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/05/16
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
        this.fv_oApp 			= nexacro.getApplication();				// application object
        this.prdClcd 			= "";
        this.mallSprCd 			= "20";

        this.lv_coCd        	= this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd           = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lvchkColidDs       = "CLASS_NM";                        	// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs     = "설명";								// 필수 입력명

        this.searchMroPrdClcd 	= "";
        this.searchMroPrdClsfNm = "";
        this.mroPrdCount 		= 0;

        this.rdCategoryDupChk 	= ""; 									// 카테고리명 중복체크
        this.formId             = this.fn_getFormId(this);      		// 등록한 폼의 아디을 기지고 오는 함수
        this.lvGetDate          = "";									// 현재일자
        this.lv_btnChkYn        = "";
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
        	// 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);
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
            var strDs    = "ds_selMthdCdCombo|ds_rndPrdAuthCombo";         		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "RD_SEL_MTHD_CD|CHRPSN_TEAM_SPR_CD";          		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "N|X";		                          				// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";          				                        // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {};
        	var btnVisibleFalse = {};

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);

        	this.mainDiv.form.btn_top.set_enable(true);
        	this.mainDiv.form.edtName.set_readonly(false);
        	this.mainDiv.form.btn_find.set_enable(true);
        	this.div02.form.btn_history_popup.set_enable(true);
        	this.div03.form.btn_history_popup.set_enable(true);
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
          	this.ds_search.setColumn(nRow,"CO_CD",       this.lv_coCd);
        	this.ds_search.setColumn(nRow,"MALL_SPR_CD", this.mallSprCd);

        	this.fn_Ret();
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
        		    case "DRet":
        					this.fn_PostDRet();
        				break;
        			case "Save":
        					this.fn_PostSave();
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
        		case "SSP_BO_RD_27" :
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
        						var jsonData = JSON.parse(strVal);
        						this.prdClcd = jsonData.PRD_CLCD;
        						this.fn_Ret();
        					}
        				}
        			break;
        		case "SSP_BO_RD_28" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.prdClcd = jsonData.PRD_CLCD;
        					this.ds_search.setColumn(0,"PRD_CLCD",this.prdClcd);
        					this.fn_DRet();
        				}else
        				{
        				}
        			break;
        		case "SSP_BO_PA_46" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div03.form.MRO_PRD_CLCD.set_value(jsonData.MRO_PRD_CLCD);
        					this.div03.form.MRO_PRD_CLSF_NM.set_value(jsonData.MRO_PRD_CLSF_NM);
        				}else
        				{

        				}

        			break;
        		case "SSP_BO_PA_47" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div03.form.NOTI_ITM_ID.set_value(jsonData.NOTI_ITM_ID);
        					this.div03.form.NOTI_ITM_NM.set_value(jsonData.NOTI_ITM_NM);
        				}else
        				{

        				}

        			break;
        		case "SSP_BO_NA_27" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.ds_detail.setColumn(0,"UPD_RSN",jsonData.UPD_RSN);
        					this.fn_save();
        				}else
        				{

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
            var strUrl      = "/rd/category/select-category-list.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_list=ds_output1 ";
        		strOutDs   += "ds_subList=ds_output2";
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
        	if(this.gfn_isNull(this.prdClcd))
        	{
        		//set_rowposition 초기 클릭값을 갖지 못하게
        		this.ds_list.set_rowposition(-1);
        		this.ds_subList.set_rowposition(-1);

        		var nH = this.div01.form.grd_subList.getRealRowFullSize();
        		this.div01.form.grd_subList.set_height(nH + 2);
        		this.div01.form.staSubList.set_height(nH+50);
        		this.div01.form.staBag03.set_height(nH+50);

        		//	this.ds_detail.addRow();
        		this.ds_detail.setColumn(0,"PRD_CLS_LVL_NM","메인");
        		this.div01.form.edtPrdClsfLwCnt.set_value(this.ds_subList.getRowCount());
        		this.mainDiv.form.btn_add_level.set_enable(true);
        		this.mainDiv.form.btn_add_level.set_visible(true);
        		this.div01.set_visible(true);
        		this.div02.set_visible(false);
        		this.div03.set_visible(false);
        	} else
        	{
        		//this.mainDiv.form.grd_mainList.set_treeinitstatus("expand,all");

        		var grdTree	 	= this.mainDiv.form.grd_mainList;
        		var nCellIndex 	= this.fnGetTreeCellIndex(grdTree);
        		var nRow 		= this.ds_list.findRow("PRD_CLCD",this.prdClcd);

        		var nStartLvl 	= grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        		var nEndLvl 	= 0;

        		var arrRoot 	= new Array();
        		grdTree.set_enableevent(false);
        		if(!grdTree.isTreeRootRow(nRow,true))
        		{
        			nEndLvl = grdTree.getCellPropertyValue(nRow,nCellIndex,"treelevel");
        			var parentsRow 	= 0;
        			var nRowFindRow = nRow;
        			for(var i=nStartLvl; i<nEndLvl; i++)
        			{
        				parentsRow = grdTree.getTreeParentRow(nRowFindRow);
        				if (parentsRow>-1)
        				{
        					arrRoot.push(parentsRow);
        					nRowFindRow = parentsRow;
        				} else
        				{
        					break;
        				}
        			}
        		}
        		grdTree.set_enableevent(true);

        		for(var i=arrRoot.length; i>-1; i--)
        		{
        			grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        		}

        		this.ds_list.set_rowposition(nRow);

        		this.ds_search.setColumn(0,"PRD_CLCD", this.prdClcd);
        		this.fn_DRet();
        	}

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
        };
        /**********************************************************************
                05_1. 조회 함수 선언(상세조회 함수)
        ***********************************************************************/
        /**
         * 기능 : 상세 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	// 저장 전 조회시 미등록 이미지 파일 삭제
        	if(this.gfn_nvl(this.ds_detail.getColumn(0,"UPD_RSN"),"") == "")
        	{
        		this.fn_saveMultiFileDelUpdate("");
        	}
        	this.ds_saveFileList.clearData();
        	this.div03.form.ImageViewer.set_image("");
        	// 조회조건 셋팅
        	return true;
        };

        /**
         * 기능 : 상세 디테일 조회 실행
         */
        this.fn_DRet = function()
        {
            if(!this.fn_PreDRet())
            {
                return false;
            }

            var strSvc      = "DRet";
            var strUrl      = "/rd/category/select-category.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_detail=ds_output1 ";
        		strOutDs   += "ds_subList=ds_output2 ";
        		strOutDs   += "ds_saveFileList=ds_saveFileList";
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
         * 기능 : 상세 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
        	this.mainDiv.form.btn_add_level.set_text("하위 카테고리추가");
        	this.div01.set_visible(false);

        	if(this.ds_detail.getColumn(0,"CNT") > 0 || this.ds_detail.getColumn(0,"TOP_CNT") > 0 || this.ds_detail.getColumn(0,"PRD_CNT") > 0)
        	{
        			this.div02.form.USE_YN.set_enable(false);
        			this.div03.form.USE_YN.set_enable(false);
        	} else
        	{
        			this.div02.form.USE_YN.set_enable(true);
        			this.div03.form.USE_YN.set_enable(true);
        	}

        	if(this.ds_detail.getColumn(0,"LWST_CD_YN") != "Y")
        	{
        		this.ds_subList.set_rowposition(-1);
        		this.div03.set_visible(false);
        		this.div02.set_visible(true);
        		this.div02.set_top(11);

        		var nH = null;
        		if(this.div02.form.grd_subList.rowcount == 0)
        		{
        			nH = 33;
        			this.div02.form.grd_subList.set_height(nH + 2);
        		} else
        		{
        			nH = this.div02.form.grd_subList.getRealRowFullSize();
        			this.div02.form.grd_subList.set_height(nH + 2);
        		}
        		this.div02.form.staTit09.set_height(nH+50);
        		this.div02.form.staBag10.set_height(nH+50);

        		this.div02.form.edtPrdClsfLwCnt.set_value(this.ds_subList.getRowCount());

        		if(this.gfn_isNull(this.ds_detail.getColumn(0,"USE_YN")))
        		{
        			this.div02.form.USE_YN.set_value("Y");
        		}

        		//alert("gggg11===>" + this.ds_detail.getColumn(0,"HRNK_PRD_CLCD"));
        		//alert("gggg22===>" + this.ds_detail.getColumn(0,"PRD_CLCD"));

        	} else
        	{
        		this.div02.set_visible(false);
        		this.div03.set_visible(true);
        		this.div03.set_right(30);
        		this.div03.set_left(583);

        		if(this.gfn_isNull(this.ds_detail.getColumn(0,"USE_YN")))
        		{
        			this.div03.form.USE_YN.set_value("Y");
        		}

        		if(this.gfn_isNull(this.ds_detail.getColumn(0,"FRT_EXPS_YN")))
        		{
        			this.div03.form.FRT_EXPS_YN.set_value("Y");
        		}
        	}

        	if(this.ds_detail.getColumn(0,"USE_YN") != "Y")
        	{
        		this.mainDiv.form.btn_add_level.set_enable(false);
        	} else
        	{
        		this.mainDiv.form.btn_add_level.set_enable(true);
        	}

        	// R&D 상품 선전방식에 따라 이미지 등록여부
        	this.fn_setSelMthdCdChanded(this.ds_detail.getColumn(0,"SEL_MTHD_CD"));

        	this.prdClcd = null;

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        this.btn_del_onclick = function(obj,e)
        {
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        	this.ds_detail.clearData();
        	this.ds_search.setColumn(0,"PRD_CLCD", this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD"));

        	this.fn_DRet();
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfn_dsIsUpdated(this.ds_list) && !this.gfn_dsIsUpdated(this.ds_detail) && !this.gfn_dsIsUpdated(this.ds_subList)
        	&& !this.gfn_dsIsUpdated(this.ds_saveFileList))
        	{
        		this.fn_alert("ERRC000035","저장","","question");      						                        // 변경된 내용이 없습니다.
        		return false;
        	}else
        	{
        		var objParam = {};
        		this.gfn_openPopup( "SSP_BO_NA_27"
        		                  , "PR_POP::SSP_BO_NA_27.xfdl"
        						  , objParam);
        	}

        };

        /**
         * 기능 :  저장전 처리
         */
        this.fn_PreSave = function()
        {
        	if(this.ds_detail.getColumn(0,"PRD_CLSF_NM") == "기타")
        	{
        		this.fn_alert("ERRR000016","저장","","question");      	         // '기타’는 카테고리명으로 사용할 수 없습니다.
        		return false;
        	}

        	//저장시 카테고리명 중복 체크
        	this.fn_rdCategoryDuplicateCheck();

        	if(this.rdCategoryDupChk != "0")
        	{
        		this.fn_alert("ERRP000015","저장","","question");            	// 입력한 카테고리명은 이미 존재하는 카테고리명입니다.
        		this.ds_detail.setColumn(this.ds_detail.rowposition,"PRD_CLSF_NM",this.ds_detail.getOrgColumn(this.ds_detail.rowposition,"PRD_CLSF_NM"));
        		return false;
        	}

        	//메인 화면에서의 저장처리는  카테고리명 입력항목을 체크안함
        	if(this.ds_detail.getColumn(0, "PRD_CLS_LVL_NM") != "메인")
        	{
        		if(this.div02.visible == true)
        		{

        			if(this.gfn_isNull(this.div02.form.PRD_CLSF_NM.value))
        			{
        				this.fn_alert("ERRS000144","저장","카테고리명","question");      // 그룹구분 (&1은(는) 필수입력사항입니다.)
        				this.div02.form.PRD_CLSF_NM.setFocus();
        				return false;
        			}
        		}else
        		{
        			if(this.gfn_isNull(this.div03.form.PRD_CLSF_NM.value))
        			{
        				this.fn_alert("ERRS000144","저장","카테고리명","question");      // 그룹구분 (&1은(는) 필수입력사항입니다.)
        				this.div03.form.PRD_CLSF_NM.setFocus();
        				return false;
        			}

        			//  S-MRO카테고리 매핑 or 고시품목 매핑
        			if(!this.fn_codeChkYn())
        			{
        				return false;
        			}
        		}
        	}
        	var result = this.fn_confirm( "ERRR000070", "저장","", "question" ); // 수정된 내용으로 저장하시겠습니까?

        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };
        /*
         *
         */
        this.fn_save = function()
        {
        	if(!this.fn_PreSave())
            {
                return false;
            }

        	var strSvc      = "Save";
            var strUrl      = "/rd/category/save-category-info.do";
            var strInDs     = "ds_list=ds_list:U ";
        	    strInDs    += "ds_detail=ds_detail:U ";
        		strInDs    += "ds_subList=ds_subList:U ";
        		strInDs    += "ds_saveFileList=ds_saveFileList:U";
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

        this.fn_PostSave = function ()
        {
        	this.prdClcd = this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD");
        	this.fn_alert("ERRR000007","저장"," ","question");      // 정상적으로 저장되었습니다
        	this.fn_Ret();
        };

        //카테고리명 중복체크
        this.fn_rdCategoryDuplicateCheck = function ()
        {

        	this.ds_detail_dupChk.clearData();
        	this.ds_detail_dupChk.addRow();
        	this.ds_detail_dupChk.copyRow(0, this.ds_detail, 0);

        	var strSvc      = "DuplChk";
            var strUrl      = "/rd/category/select-rd-category-duplicate-check.do";
            var strInDs     = "ds_detail_dupChk=ds_detail_dupChk";
        	 var strOutDs   = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);


        };
        /**
         * S-MRO카테고리 매핑 or 고시품목 매핑
         */
        this.fn_codeChkYn = function()
        {
        	this.ds_searchChkYn.clearData();
        	var nRow = this.ds_searchChkYn.addRow();

        	this.ds_searchChkYn.setColumn(nRow,"CO_CD",			this.lv_coCd);
        	this.ds_searchChkYn.setColumn(nRow,"MALL_SPR_CD",	this.mallSprCd);
        	this.ds_searchChkYn.setColumn(nRow,"MRO_PRD_CLCD",	this.gfn_trim(this.div03.form.MRO_PRD_CLCD.value));
        	this.ds_searchChkYn.setColumn(nRow,"NOTI_ITM_ID",	this.gfn_trim(this.div03.form.NOTI_ITM_ID.value));

        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/category/select-up-code-chk-yn.do";
            var strInDs     = "ds_searchChkYn=ds_searchChkYn";
            var strOutDs    = "ds_codeChkYn=ds_codeChkYn";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);


        	var strMrdPrdClcdYn = this.ds_codeChkYn.getColumn(0,"MRO_PRD_CLCD_YN");
        	var strNotiItmIdYn  = this.ds_codeChkYn.getColumn(0,"NOTI_ITM_ID_YN");

        	// S-MRO카테고리
        	if(!this.gfn_isNull(this.gfn_trim(this.div03.form.MRO_PRD_CLCD.value)))
        	{
        		if(strMrdPrdClcdYn == "N")
        		{
        			this.fn_alert("ERRR000174","저장정보","S-MRO카테고리 매핑","question"); // 존재하지 않는 &1 입니다.
        			this.div03.form.MRO_PRD_CLCD.setFocus();
        			return false;
        		}
        	}

        	// 고시품목 매핑
        	if(!this.gfn_isNull(this.gfn_trim(this.div03.form.NOTI_ITM_ID.value)))
        	{
        		if(strNotiItmIdYn == "N")
        		{
        			this.fn_alert("ERRR000174","저장정보","고시품목 매핑","question"); // 존재하지 않는 &1 입니다.
        			this.div03.form.NOTI_ITM_ID.setFocus();
        			return false;
        		}
        	}

        	return true;

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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        //입력값 찾기
        this.setFindeCodeRow = function (objForm)
        {
        	var edtValue 		= this.mainDiv.form.edtName.value;
        	var dsTree	 		= this.ds_list;
        	var grdTree	 		= this.mainDiv.form.grd_mainList;

        	var nTreeCellIndex 	= this.fnGetTreeCellIndex(grdTree);
        	var nStartLvl 		= grdTree.getCellProperty("body",nTreeCellIndex,"treestartlevel");
        	var nCellIndex 		= this.fnGetTreeCellIndex(grdTree);
        	var nRowPos	 		= dsTree.rowposition;

        	if(!this.gfn_isNull(edtValue))
        	{
        		var strSearchId = "PRD_CLSF_NM_UPPER";
        		var sFilterstr 	= strSearchId +".indexOf('"+edtValue.toUpperCase()+"') > -1";
        		var findRow 	= 0;
        			nRowPos++;
        			findRow = dsTree.findRowExpr(sFilterstr,nRowPos);
        	} else
        	{
        		this.fn_alert("ERRS000220","저장","","question");      // 검색어를 입력해 주세요.
        		return false;
        	}

        	//parent row tree status update -> parent tree status "expand"
        	var nTreeRow 		= 0;
        	var nStartLvl 		= grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl 		= 0;
        	var arrRoot 		= new Array();
        	grdTree.set_enableevent(false);
        	if(!grdTree.isTreeRootRow(findRow,true))
        	{
        		nEndLvl 		= grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");
        		var parentsRow 	= 0;
        		var nRowFindRow = findRow;
        		for(var i=nStartLvl; i<nEndLvl; i++)
        		{
        			parentsRow 		= grdTree.getTreeParentRow(nRowFindRow);
        			if (parentsRow>-1)
        			{
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			} else
        			{
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--)
        	{
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	if( findRow == -1 )
        	{
        		this.fn_alert("CSMS000003","저장","","question");      //마지막까지 찾았습니다. 처음부터 검색합니다.
        		findRow = 0;
        	}
        	dsTree.set_rowposition(findRow);
        };
        //트리 셀 인덱스 가져온다.
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount 	= objGrid.getCellCount("body");
        	var nCellType;
        	var nCol 		= 0;
        	for(nCol=0; nCol<nCellCount; nCol++)
        	{
        		nCellType 	= objGrid.getCellProperty("body",nCol,"displaytype");
        		//get first treecell num
        		if(nCellType = "treeitemcontrol")
        		{
        			break;
        		}
        	}
        	return nCol;
        };

        this.fn_history = function()
        {

        	var lv_sFlag01 			= "FORMAT01";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_CLSF_INFO_HST";			                 // 로그테이블 이름(담당자 로그-구매/상품담당자)
        	var lv_sValue01 		= this.ds_detail.getColumn(0, "PRD_CLCD");	             // 상품분류코드
        	var lv_sValue02 		= this.mallSprCd;
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


        }


        /*
         * R&D 상품 선전방식에 따라 이미지 등록여부
         */
        this.fn_setSelMthdCdChanded = function (prmValueCd)
        {
        	if(prmValueCd == "40") //'전시상품'을 선택한 경우에만 [이미지등록] 버튼 활성
        	{
        		this.div03.form.btn_image_del.set_enable(true);
        		this.div03.form.btn_image_add.set_enable(true);
        		var findRow     = this.ds_saveFileList.findRow("ETC_FDS_1","1") != -1 ? this.ds_saveFileList.findRow("ETC_FDS_1","1") : this.ds_saveFileList.findRow("ETC_FDS_2","90");
        			findRow     = findRow != -1 ? findRow : this.ds_saveFileList.getRowCount()-1;
        		var filePath    = this.ds_saveFileList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileName    = this.ds_saveFileList.getColumn(findRow,"ORI_ATFL_NM");
        		var fileOrgName = this.ds_saveFileList.getColumn(findRow,"ATFL_NM");

        		if(findRow != -1)
        		{
        			this.ds_saveFileList.setColumn(findRow,"ETC_FDS_2","90");
        			this.div03.form.ImageViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        		}
        	}
        	else
        	{
        		this.div03.form.btn_image_del.set_enable(false);
        		this.div03.form.btn_image_add.set_enable(false);

        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			this.ds_saveFileList.setColumn(idx,"ETC_FDS_2","del");
        		}
        		this.div03.form.ImageViewer.set_image("");
        	}
        };
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /*
         * 카테코드 조회버튼을 클릭시 처리
         */
        this.mainDiv_btn_find_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	this.setFindeCodeRow(objForm);
        };
        /*
         * 카테코드 입력후 엔터를 치면 조회버튼을 클릭처리
         */
        this.mainDiv_edtName_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.mainDiv.form.btn_find.click();
        	}
        };

        /**
         *  TOP 버튼 클릭시 처리
         */
        this.mainDiv_btn_top_onclick = function(obj,e)
        {
        	//set_rowposition 초기 클릭값을 갖지 못하게
        	this.mainDiv.form.btn_add_level.set_text("대분류 카테고리추가");
        	this.fn_setResetBtnCall();

        };

        // 트리 클릭시 상세 조회
        this.mainDiv_grd_mainList_oncellclick = function(obj,e)
        {
        	if(this.ds_list.getColumn(e.row,"HIER_LVL") == "7" || this.ds_list.getColumn(e.row,"LWST_CD_YN") == "Y")
        	{
        		this.mainDiv.form.btn_add_level.set_visible(false);
        	}else
        	{
        		this.mainDiv.form.btn_add_level.set_visible(true);
        	}

        	this.ds_search.setColumn(0,"PRD_CLCD", this.ds_list.getColumn(e.row,"PRD_CLCD"));

        	this.fn_DRet();

        	if(e.clickitem == "treeitembutton")
        	{
        		return false;
        	}

        	//그리드 자동 펼치기
        	var gridObj 	= this.mainDiv.form.grd_mainList;
        	var nGridRow 	= gridObj.getTreeRow(e.row);
        	var nStatus  	= gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3)
        	{
        		return false;
        	}
        	nStatus = (nStatus == 0 ? 1 : 0);
        	gridObj.setTreeStatus(nGridRow, nStatus);
        };


        /*
         *  R&D 상품 선전방식에 따라 이미지 등록여부
         */
        this.div03_SEL_MTHD_CD_onitemchanged = function(obj,e)
        {
        	//'전시상품'을 선택한 경우에만 [이미지등록] 버튼 활성
        	this.fn_setSelMthdCdChanded(obj.value);
        };


        // 하위 카테고리 순서변경
        this.div_grd_subList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0 || e.cell == 1)
        	{
        		if(e.cell == 0)
        		{
        			var nTRow = this.ds_subList.rowposition;
        			if(nTRow == 0)
        			{
        				this.fn_alert("ERRN000038","저장","","question");      // 더 이상 이동할 수 없습니다.
        				return false;
        			}
        			this.ds_subList.moveRow(nTRow, (nTRow-1));
        		} else if(e.cell == 1)
        		{
        			var nTRow = this.ds_subList.rowposition;
        			if(nTRow == (this.ds_subList.getRowCount()-1))
        			{
        				this.fn_alert("ERRN000038","저장","","question");      // 더 이상 이동할 수 없습니다.
        				return false;
        			}
        			this.ds_subList.moveRow(nTRow, (nTRow+1));
        		}

        		for(var i=0; i<this.ds_subList.rowcount; i++)
        		{
        			this.ds_subList.setColumn(i,"SRT_SO", i+1);
        		}
        	}

        };
        /*
         * 히스토리 처리 하는 팝업 div2
         */
        this.div02_btn_history_popup_onclick = function(obj,e)
        {
        	this.fn_history();
        };
        /*
         * 히스토리 처리 하는 팝업 div3
         */
        this.div03_btn_history_popup_onclick = function(obj,e)
        {
        	this.fn_history();
        };
        /*
         * 카테고리 사용여부에서 '미사용' 선택 시에는 '미사용' 선택으로 고정
         */
        this.div03_USE_YN_onitemchanged = function(obj,e)
        {
        	if(obj.value == "N")
        	{
        		this.div03.form.FRT_EXPS_YN.set_readonly(true);
        		this.div03.form.FRT_EXPS_YN.set_value("N");
        	} else
        	{
        		this.div03.form.FRT_EXPS_YN.set_readonly(false);
        	}
        };

        /*
         * 대분류 카테고리추가 버튼을 클릭처리
         */
        // 카테고리 추가 팝업
        this.btn_add_level_onclick = function(obj,e)
        {
        	var hierLvl = this.ds_list.getColumn(this.ds_list.rowposition,"HIER_LVL");

        	if(hierLvl > 6 && !this.gfn_isNull(hierLvl))
        	{
        		this.fn_alert("ERRR000178","저장","카테고리","question");      // 더이상 하위 &1을(를) 추가 할수 없습니다.
        		return false;
        	}

        	var objParam = { level  : hierLvl
        				   , lvlNm  : this.ds_detail.getColumn(0,"PRD_CLS_LVL_NM")
        				   , prdClcd: this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD")
        				   , coCd   : this.lv_coCd};
        	var oOption = {titlebar:"false"};
        	this.gfn_openPopup( "SSP_BO_RD_27"
        					  , "RD::SSP_BO_RD_27.xfdl"
        					  , objParam
        					  , "fn_popupCallback"
        					  , oOption);

        };
        /*
         * 속성관리 버튼을 클릭시 처리
         */
        this.div03_btn_attr_onclick = function(obj,e)
        {
        	var objParam = { prdClcd : this.ds_detail.getColumn(0,"PRD_CLCD")
        	               , coCd    : this.lv_coCd};
        	this.gfn_openPopup( "SSP_BO_RD_28"
        	                  , "RD::SSP_BO_RD_28.xfdl"
        					  , objParam);
        };

        /***********************************************************************************************
        * S-MRO카테고리 매핑 시작
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div03_btn_mro_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div03.form.MRO_PRD_CLCD.value);
        	this.fn_setCallPopup(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div03_MRO_PRD_CLCD_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div03.form.MRO_PRD_CLSF_NM.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */

        this.div03_MRO_PRD_CLCD_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div03.form.MRO_PRD_CLCD.value);

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
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"MRO_PRD_CLCD",sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",		this.lv_coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",	1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-mroprd-popup-list.do";
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
        		//trace(this.ds_popupList.saveXML());

        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div03.form.MRO_PRD_CLCD.set_value(this.ds_popupList.getColumn(0,"MRO_PRD_CLCD"));
        		this.div03.form.MRO_PRD_CLSF_NM.set_value(this.ds_popupList.getColumn(0,"MRO_PRD_CLSF_NM"));
        	} else
        	{
        		var objParam = { mroPrdClcd : sCodeId
        					   , coCd       : this.lv_coCd
        					   };
        		this.gfn_openPopup("SSP_BO_PA_46"
        						  , "PR_POP::SSP_BO_PA_46.xfdl"
        						  , objParam);
        	}
        };
        /***********************************************************************************************
        * S-MRO카테고리 매핑 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 고시품목 매핑 시작
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div03_btn_noti_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div03.form.NOTI_ITM_ID.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div03_NOTI_ITM_ID_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div03.form.NOTI_ITM_NM.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div03_NOTI_ITM_ID_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div03.form.NOTI_ITM_ID.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
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
        		this.ds_input.setColumn(nRow,"NOTI_ITM_ID", sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",		this.lv_coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",	1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-product-notice-popup-list.do";
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

        		//trace(this.ds_popupList.saveXML());
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div03.form.NOTI_ITM_ID.set_value(this.ds_popupList.getColumn(0,"NOTI_ITM_ID"));
        		this.div03.form.NOTI_ITM_NM.set_value(this.ds_popupList.getColumn(0,"NOTI_ITM_NM"));
        	} else
        	{
        		var objParam = { mroPrdClcd : sCodeId
        					   , coCd       : this.lv_coCd
        					   };
        		this.gfn_openPopup("SSP_BO_PA_47"
        						  , "PR_POP::SSP_BO_PA_47.xfdl"
        						  , objParam);
        	}
        };
        /***********************************************************************************************
        * 고시품목 매핑 종료
        /***********************************************************************************************/
        /**
         * 이미지 등록처리
         */
        this.div03_btn_image_add_onclick = function(obj,e)
        {
        	this.div03.form.FileUploadSingle.deleteItem(0);
        	this.div03.form.FileUploadSingle.appendItem();
        	this.div03.form.FileUploadSingle.filefindbuttons[0].click();
        };

        /**
         * 이미지 삭제처리
         */
        this.div03_btn_image_del_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

        	if(result)
        	{
        		var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        		this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        		this.div03.form.ImageViewer.set_image("");
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.div03.form.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        	{
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.div03.form.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=90";

        	var bSucc = this.div03.form.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"") == "")
        	{
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.div03.form.ImageViewer);
        };
        this.div03_btn_sspPrdNm_onclick = function(obj,e)
        {
        	var PRD_CLCD = this.ds_detail.getColumn(0,"PRD_CLCD");
        	if( this.gfn_isNull(PRD_CLCD) ) {
                this.alert("카테고리코드가 없습니다.");
                return false;
            }else{
                var objParam = {
                    coCd:this.ds_detail.getColumn(0,"CO_CD"),
                    prdClcd:PRD_CLCD
                };
        		var options = {title:'SSP상품명관리'};
                this.gfn_openPopup("ssp_bo_pa_28", "PR::SSP_BO_PA_28.xfdl", objParam, "", options);
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.mainDiv.form.grd_mainList.addEventHandler("oncellclick",this.mainDiv_grd_mainList_oncellclick,this);
            this.mainDiv.form.edtName.addEventHandler("onkeyup",this.mainDiv_edtName_onkeyup,this);
            this.mainDiv.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.mainDiv.form.btn_find.addEventHandler("onclick",this.mainDiv_btn_find_onclick,this);
            this.mainDiv.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
            this.mainDiv.form.btn_top.addEventHandler("onclick",this.mainDiv_btn_top_onclick,this);
            this.div01.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div01.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div01.form.grd_subList.addEventHandler("oncellclick",this.div_grd_subList_oncellclick,this);
            this.div02.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div02.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div02.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
            this.div02.form.grd_subList.addEventHandler("oncellclick",this.div_grd_subList_oncellclick,this);
            this.div02.form.btn_history_popup.addEventHandler("onclick",this.div02_btn_history_popup_onclick,this);
            this.div03.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div03.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div03.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
            this.div03.form.btn_history_popup.addEventHandler("onclick",this.div03_btn_history_popup_onclick,this);
            this.div03.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div03.form.USE_YN.addEventHandler("onitemchanged",this.div03_USE_YN_onitemchanged,this);
            this.div03.form.MRO_PRD_CLCD.addEventHandler("onkeyup",this.div03_MRO_PRD_CLCD_onkeyup,this);
            this.div03.form.MRO_PRD_CLCD.addEventHandler("oninput",this.div03_MRO_PRD_CLCD_oninput,this);
            this.div03.form.btn_mro.addEventHandler("onclick",this.div03_btn_mro_onclick,this);
            this.div03.form.NOTI_ITM_ID.addEventHandler("oninput",this.div03_NOTI_ITM_ID_oninput,this);
            this.div03.form.NOTI_ITM_ID.addEventHandler("onkeyup",this.div03_NOTI_ITM_ID_onkeyup,this);
            this.div03.form.btn_noti.addEventHandler("onclick",this.div03_btn_noti_onclick,this);
            this.div03.form.ImageViewer.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.div03.form.btn_image_del.addEventHandler("onclick",this.div03_btn_image_del_onclick,this);
            this.div03.form.btn_image_add.addEventHandler("onclick",this.div03_btn_image_add_onclick,this);
            this.div03.form.btn_attr.addEventHandler("onclick",this.div03_btn_attr_onclick,this);
            this.div03.form.SEL_MTHD_CD.addEventHandler("onitemchanged",this.div03_SEL_MTHD_CD_onitemchanged,this);
            this.div03.form.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.div03.form.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.div03.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.div03.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.div03.form.btn_sspPrdNm.addEventHandler("onclick",this.div03_btn_sspPrdNm_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
