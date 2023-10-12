(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_14");
            this.set_titletext("SSP카테고리 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelMetaSeq\" type=\"STRING\" size=\"256\"/><Column id=\"saveFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLS_LVL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HIER_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_FILE_ATTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PR_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CNT\" type=\"INT\" size=\"256\"/><Column id=\"PRD_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_ATTR_PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/><Column id=\"TOP_CNT\" type=\"INT\" size=\"256\"/><Column id=\"SSP_PRD_CONF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PRD_CNT\" type=\"INT\" size=\"256\"/><Column id=\"LOSS_LEADER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIAL_IDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sel_mthd_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"0\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"0\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"0\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"0\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outputlarge", this);
            obj._setContents("<ColumnInfo><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("mainDiv","21","11","560",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","10","69",null,null,"10","44",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"317\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:PRD_CLSF_NM\" tooltiptext=\"bind:PRD_CLSF_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:HIER_LVL\"/><Cell col=\"1\" text=\"expr:LWST_CD_YN==&apos;Y&apos;?&apos;상품군&apos;:HIER_LVL\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Edit("edtName","10","40",null,"24","38",null,null,null,null,null,this.mainDiv.form);
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

            obj = new Button("btn_add_level","10",null,"129","28",null,"10",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("4");
            obj.set_text("대분류 카테고리추가");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_largedown",null,null,"120","28","10","10",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("5");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,null,"90","28","136","10",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("6");
            obj.set_text("일괄 등록");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Div("div01","583","11",null,null,"30","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","39","136","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","135","39",null,"35","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","140","44",null,"25","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","135","73",null,"35","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPrdClsfLwCnt","141","78",null,"25","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","73","136","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("하위 카테고리 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02","135","107",null,"80","1",null,null,null,null,"680",this.div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","107","136","80",null,null,null,null,null,"680",this.div01.form);
            obj.set_taborder("8");
            obj.set_text("하위 카테고리 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"6","90","28","1",null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grd_subList","141","142",null,"33","7",null,null,null,null,"632",this.div01.form);
            obj.set_taborder("2");
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

            obj = new Static("Static28","149","119","255","15",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("※ 하위 카테고리의 순서를 변경할 수 있습니다.");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","583","236",null,"830","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","39","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("16");
            obj.set_text("카테고리ID");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","135","39",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLCD","140","44",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","135","107",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","141","112",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staPrdClsfNm","0","107","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("18");
            obj.set_text("카테고리명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static02","135","345",null,"80","1",null,null,null,null,"443",this.div02.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","345","136","80",null,null,null,null,null,"443",this.div02.form);
            obj.set_taborder("20");
            obj.set_text("하위 카테고리 정렬");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("21");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"6","90","28","95",null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,"6","90","28","189",null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grd_subList","141","380",null,"33","7",null,null,null,null,"395",this.div02.form);
            obj.set_taborder("14");
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

            obj = new Static("Static28","149","357","255","15",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("22");
            obj.set_text("※ 하위 카테고리의 순서를 변경할 수 있습니다.");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_chgHist",null,"6","90","28","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("변경이력");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","135","73",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","141","78",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","73","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("24");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","135","141",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","0","141","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("26");
            obj.set_text("카테고리 사용여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Radio("USE_YN","141","147",null,"25","358",null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div02_form_USE_YN_innerdataset = new nexacro.NormalDataset("div02_form_USE_YN_innerdataset", obj);
            div02_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_USE_YN_innerdataset);
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","135","175",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","141","180",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","0","175","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("28");
            obj.set_text("등록일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","135","209",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","141","214","225","25",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","0","209","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("30");
            obj.set_text("등록자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","135","243",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","141","248",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_01","0","243","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("32");
            obj.set_text("최종수정일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","135","277",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","0","277","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("34");
            obj.set_text("최종수정자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","135","311",null,"35","1",null,null,null,null,null,this.div02.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtPrdClsfLwCnt","141","316",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","0","311","136","35",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("36");
            obj.set_text("하위 카테고리 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","371","214",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_ID","141","282","225","25",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_NM","371","282",null,"25","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div03","1353","11",null,"835","-740",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","39","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("35");
            obj.set_text("카테고리ID");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","135","39",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLCD","140","44",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","135","107",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_NM","141","112",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_maxlength("50");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staPrdClsfNm","0","107","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("37");
            obj.set_text("카테고리명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("38");
            obj.set_text("카테고리 상세");
            obj.set_cssclass("sta_WF_title01");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"6","90","28","95",null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_add_level",null,"6","129","28","284",null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_text("하위 카테고리추가");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_chgHist",null,"6","90","28","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_text("변경이력");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","135","73",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLS_LVL_NM","141","78",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","73","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("40");
            obj.set_text("현재위치");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","135","141",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","0","141","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("42");
            obj.set_text("카테고리 사용여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Radio("USE_YN","141","147",null,"25","358",null,null,null,null,null,this.div03.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div03_form_USE_YN_innerdataset = new nexacro.NormalDataset("div03_form_USE_YN_innerdataset", obj);
            div03_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div03_form_USE_YN_innerdataset);
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","135","551",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","141","556","195","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","0","551","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("44");
            obj.set_text("등록일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","341","551","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("45");
            obj.set_text("등록자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","135","585",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","141","590","195","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_01","0","585","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("47");
            obj.set_text("최종수정일");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","341","585","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("48");
            obj.set_text("최종수정자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","135","619",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CL_NM","141","624",null,"25","97",null,null,null,null,null,this.div03.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","0","619","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("50");
            obj.set_text("상품군 SSP속성");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02_00","135","175",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_02_00","0","175","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("52");
            obj.set_text("프론트 노출여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Radio("FRT_EXPS_YN","141","181",null,"25","358",null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div03_form_FRT_EXPS_YN_innerdataset = new nexacro.NormalDataset("div03_form_FRT_EXPS_YN_innerdataset", obj);
            div03_form_FRT_EXPS_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div03_form_FRT_EXPS_YN_innerdataset);
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","135","209",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLCD","141","214","236","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta_mroPrdClcd","0","209","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("54");
            obj.set_text("S-MRO카테고리 매핑");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_mro",null,"214","25","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","135","243",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("NOTI_ITM_ID","141","248","236","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","243","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("56");
            obj.set_text("고시품목 매핑");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_noti",null,"248","25","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("14");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_02","135","345",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_02","0","345","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("58");
            obj.set_text("시황상품 여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_02_00","135","379",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta_selMthdCd","0","379","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("60");
            obj.set_text("선정방식");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Combo("SEL_MTHD_CD","141","384",null,"25","347",null,null,null,null,null,this.div03.form);
            obj.set_taborder("16");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_sel_mthd_cd");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new CheckBox("MCND_PRD_YN","145","352","100","21",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("15");
            obj.set_text("시황상품");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_02_00_00","135","413",null,"105","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_02_00_00","0","413","136","105",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("62");
            obj.set_text("전시상품군 이미지");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_03","135","517",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_03","0","517","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("64");
            obj.set_text("카테고리 상품 수");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","135","653",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_CLSF_ATTR_PRNM","141","658",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01","0","653","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("66");
            obj.set_text("S-MRO 속성");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00","135","687",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PRD_ATTR_NM","141","692",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_01_00","0","687","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("68");
            obj.set_text("속성 노출 순서");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01","135","721",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_ID","141","726","86","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01","0","721","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("70");
            obj.set_text("상품담당자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_ID","500","726","86","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00","361","721","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("71");
            obj.set_text("MD담당자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","141","419","108","93",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_cssclass("productImage");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_image_del","253","419","24","24",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_close_small_red");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_image_add",null,"419","104","24","8",null,null,null,null,null,this.div03.form);
            obj.set_taborder("19");
            obj.set_text("이미지 등록");
            obj.set_enable("false");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("PR_PRD_CLSF_CHRPSN_NM","232","726","125","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MD_PRD_CLSF_CHRPSN_NM","590","726",null,"25","8",null,null,null,null,null,this.div03.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"6","90","28","189",null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("MRO_PRD_CLSF_NM","381","214",null,"25","36",null,null,null,null,null,this.div03.form);
            obj.set_taborder("10");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("NOTI_ITM_NM","381","248",null,"25","36",null,null,null,null,null,this.div03.form);
            obj.set_taborder("13");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","482","556","95","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","583","556",null,"25","6",null,null,null,null,null,this.div03.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_ID","482","590","95","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_NM","583","590",null,"25","6",null,null,null,null,null,this.div03.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_attr",null,"624","84","24","8",null,null,null,null,null,this.div03.form);
            obj.set_taborder("27");
            obj.set_text("속성관리");
            this.div03.addChild(obj.name, obj);

            obj = new MaskEdit("PRD_CNT","141","522",null,"25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_format("###,###,##0");
            obj.set_textAlign("left");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("DISP_PRD_FILE_ATTC_ID","667","465","36","25",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("73");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","277","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("74");
            obj.set_text("SSP상품명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","135","277",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","141","282",null,"25","112",null,null,null,null,null,this.div03.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_sspPrdNm",null,"282","99","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("77");
            obj.set_text("SSP상품명관리");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","0","311","136","35",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("78");
            obj.set_text("특화산업군");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","135","311",null,"35","1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_cm_box02L");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt_pecialIddt","141","316",null,"25","112",null,null,null,null,null,this.div03.form);
            obj.set_taborder("80");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn_specialIddt",null,"316","99","25","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("81");
            obj.set_text("산업군관리");
            this.div03.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","180","802","45","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","680","24","300","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 카테고리명에 \'<>\'는 입력금지");
            obj.set_color("red");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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

            obj = new BindItem("item11","div03.form.PRD_CLCD","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div03.form.PRD_CLSF_NM","value","ds_detail","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div03.form.PRD_CLS_LVL_NM","value","ds_detail","PRD_CLS_LVL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div03.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div03.form.REG_DTM","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div03.form.UPD_DTM","value","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div03.form.FRT_EXPS_YN","value","ds_detail","FRT_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div03.form.MRO_PRD_CLCD","value","ds_detail","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div03.form.NOTI_ITM_ID","value","ds_detail","NOTI_ITM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div03.form.SEL_MTHD_CD","value","ds_detail","SEL_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div03.form.PR_PRD_CLSF_CHRPSN_ID","value","ds_detail","PR_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div03.form.MD_PRD_CLSF_CHRPSN_ID","value","ds_detail","MD_PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div03.form.PR_PRD_CLSF_CHRPSN_NM","value","ds_detail","PR_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div03.form.MCND_PRD_YN","value","ds_detail","MCND_PRD_YN");
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

            obj = new BindItem("item19","div03.form.MRO_PRD_CLSF_NM","value","ds_detail","MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div03.form.NOTI_ITM_NM","value","ds_detail","NOTI_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div03.form.REGPSN_ID","value","ds_detail","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div03.form.REGPSN_NM","value","ds_detail","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div03.form.UPDPSN_ID","value","ds_detail","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div03.form.UPDPSN_NM","value","ds_detail","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div03.form.MD_PRD_CLSF_CHRPSN_NM","value","ds_detail","MD_PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div03.form.PRD_CLSF_ATTR_PRNM","value","ds_detail","PRD_CLSF_ATTR_PRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div03.form.PRD_CL_NM","value","ds_detail","PRD_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div03.form.PRD_ATTR_NM","value","ds_detail","PRD_ATTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div03.form.PRD_CNT","value","ds_detail","PRD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div03.form.DISP_PRD_FILE_ATTC_ID","value","ds_detail","DISP_PRD_FILE_ATTC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div03.form.edt_sspPrdNm","value","ds_detail","SSP_PRD_CONF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div03.form.edt_pecialIddt","value","ds_detail","SPECIAL_IDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_14.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_14.xfdl","RD::rdMain.xjs");
        this.addIncludeScript("SSP_BO_PA_14.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_14.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP카테고리 관리
          CREATION DATES : 2022.01.26
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        // 필수값 체크를 위한 필드명 선언
        this.valiFormIds = [
         	  {"name" : "카테고리명", "id" : "PRD_CLSF_NM"}
        ];
        this.valiFormIds1 = [
        	  {"name" : "S-MRO카테고리 매핑", "id" : "MRO_PRD_CLCD"}
        	, {"name" : "선정방식", "id" : "SEL_MTHD_CD"}
        ];
        this.valiFormIds2 = [
        	  {"name" : "전시상품군 이미지", "id" : "DISP_PRD_FILE_ATTC_ID"}
        ];

        this.fv_oApp = nexacro.getApplication();	//application object
        this.prdClcd = "";
        this.mallSprCd = "10";
        this.coCd = this.gfn_isNull(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"))?"1000":this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD");

        // S-MRO카테고리 매핑 변수
        this.searchMroPrdClcd = "";
        this.searchMroPrdClsfNm = "";
        this.mroPrdCount = 0;

        // 고시품목 매핑 변수
        this.searchNotiItmId = "";
        this.searchNotiItmNm = "";
        this.searchNotiItmCount = 0;

        this.prdNmCnt = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	this.ds_search.setColumn(0,"CO_CD", this.coCd);
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);
        	this.fn_codeSearch();
        	this.fn_mainSearch();

        	// 파일업로드 확장자 필터기능
        	this.FileUploadSingle.set_filefilter("Image Files |*.jpg;*.jpeg;*.png;*.gif;*.ico|JPEG(*.jpg,jpeg)|*.jpg;*.jpeg|PNG(*.png)|*.png|GIF(*.gif)|*.gif|ICO(*.ico)|*.ico|");
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_codeSearch = function() {

        	var sSvcId = "codeSelect";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sel_mthd_cd=ds_output1";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "codeList", "SEL_MTHD_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회
        this.fn_mainSearch = function() {

        	var sSvcId = "selectCategoryList";
        	var sUrl = "/pr/ctg-mng/select-categoryList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1 ds_subList=ds_output2";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 하위카테고리 조회
        this.fn_subSearch = function(){
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);

        	var sSvcId = "selectCategory";
        	var sUrl = "/pr/ctg-mng/select-category.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_detail=ds_output1 ds_subList=ds_output2 ds_fileSingle=ds_output3";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 저장
        this.fn_save = function() {

        	var	validation = this.fn_validationForm(this.div03, this.valiFormIds, this.ds_detail);
        	var validation1 = true;
        	var validation2 = true;
        	// 상품인경우
        	if(this.ds_detail.getColumn(0,"LWST_CD_YN") == "Y"){
        		validation1 = this.fn_validationForm(this.div03, this.valiFormIds1, this.ds_detail);

        		// 선정방식 - 전시상품
        		if(this.div03.form.SEL_MTHD_CD.value == "40"){
        			validation2 = this.fn_validationForm(this.div03, this.valiFormIds2, this.ds_detail);
        		}
        	}

        	if(validation && validation1 && validation2){
        		var sSvcId = "saveCategoryInfo";
        		var sUrl = "/pr/ctg-mng/save-category-info.do";
        		var inDs = "ds_list=ds_list:U ds_detail=ds_detail:U ds_subList=ds_subList:U ds_fileSingle=ds_fileSingle:U";
        		var outDs = "";
        		var arg = "";
        		var callback = "fn_callBack";

        		if(this.confirm(this.fn_getMessage("ERRP000006"))){
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        		}
        	}
        }

        // 팝업호출
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //엑셀 대용량 다운로드 호출
        this.fn_excelLargeDownload = function(){

            var sSvcId = "largedown";
            var sUrl = "/pr/ctg-mng/call-large-excel-download.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_outputlarge=ds_outputlarge";
            var arg = "";

        	this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "coCd", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0, "pgmId", "SSP_BO_PA_14");
        	this.ds_search.setColumn(0, "excelMetaSeq", "1");
        	this.ds_search.setColumn(0, "saveFileNm", "카테고리관리.xlsx");
        	this.ds_search.setColumn(0, "regpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "updpsnId", this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_deleteCategory = function () {

        	var sSvcId = "deleteCategory";
        	var sUrl = "/pr/ctg-mng/delete-category.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        	this.div03.set_visible(false);
        	this.div01.set_visible(true);
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

        	if(svcID == "selectCategoryList"){

        		if(this.gfn_isNull(this.prdClcd)){
        			//set_rowposition 초기 클릭값을 갖지 못하게
        			this.ds_list.set_rowposition(-1);
        			this.ds_subList.set_rowposition(-1);

        			var nH = this.div01.form.grd_subList.getRealRowFullSize();
        			this.div01.form.grd_subList.set_height(nH + 2);
        			this.div01.form.Static01.set_height(nH+50);
        			this.div01.form.Static02.set_height(nH+50);

        			this.div01.form.PRD_CLS_LVL_NM.set_value("메인");
        			this.div01.form.edtPrdClsfLwCnt.set_value(this.ds_subList.getRowCount());
        		}else{

        			//parent row tree status update -> parent tree status "expand"
        			var grdTree	 = this.mainDiv.form.grd_mainList;
        			var nCellIndex = this.fnGetTreeCellIndex(grdTree);
        			var findRow = this.ds_list.findRow("PRD_CLCD",this.prdClcd);
        			var nStartLvl = grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        			var nEndLvl = 0;

        			var arrRoot = new Array();
        			grdTree.set_enableevent(false);
        			if(!grdTree.isTreeRootRow(findRow,true))
        			{
        				nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");
        				var parentsRow = 0;
        				var nRowFindRow = findRow;
        				for(var i=nStartLvl; i<nEndLvl; i++)
        				{
        					parentsRow = grdTree.getTreeParentRow(nRowFindRow);
        					if (parentsRow>-1)
        					{
        						arrRoot.push(parentsRow);
        						nRowFindRow = parentsRow;
        					}
        					else
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
        			this.ds_list.set_rowposition(findRow);
        			this.ds_search.setColumn(0,"PRD_CLCD", this.prdClcd);
        			this.fn_subSearch();
        		}

        	} else if(svcID == "selectCategory"){
        		this.mainDiv.form.btn_add_level.set_text("하위 카테고리추가");
        		this.div01.set_visible(false);

        		if(this.ds_detail.getColumn(0,"CNT") > 0 || this.ds_detail.getColumn(0,"TOP_CNT") > 0 || this.ds_detail.getColumn(0,"USE_PRD_CNT") > 0){
        			this.div02.form.USE_YN.set_enable(false);
        			this.div03.form.USE_YN.set_enable(false);
        		}else{
        			this.div02.form.USE_YN.set_enable(true);
        			this.div03.form.USE_YN.set_enable(true);
        		}

        		if(this.ds_detail.getColumn(0,"USE_YN") != "Y"){
         			this.mainDiv.form.btn_add_level.set_enable(false);
        			this.div03.form.FRT_EXPS_YN.set_readonly(true);
         		}else{
         			this.mainDiv.form.btn_add_level.set_enable(true);
        			this.div03.form.FRT_EXPS_YN.set_readonly(false);
         		}

        		if(this.ds_detail.getColumn(0,"SEL_MTHD_CD") == "40"){
        			this.div03.form.btn_image_del.set_enable(true);
        			this.div03.form.btn_image_add.set_enable(true);
        			this.div03.form.MCND_PRD_YN.set_value("N");
        			this.div03.form.MCND_PRD_YN.set_enable(false);

        			var findRow     = this.ds_fileSingle.findRow("ETC_FDS_1","1") != -1 ? this.ds_fileSingle.findRow("ETC_FDS_1","1") : this.ds_fileSingle.findRow("ETC_FDS_2","90");
        				findRow     = findRow != -1 ? findRow : this.ds_fileSingle.getRowCount()-1;
        			var filePath    = this.ds_fileSingle.getColumn(findRow,"ATFL_STOR_PATH");
        			var fileName    = this.ds_fileSingle.getColumn(findRow,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_fileSingle.getColumn(findRow,"ATFL_NM");

        			if(findRow != -1){
        				this.ds_fileSingle.setColumn(findRow,"ETC_FDS_2","90");
        				this.div03.form.imgViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        			}else{
        				this.div03.form.imgViewer.set_image("");
        			}
        		}else{
        			this.div03.form.btn_image_del.set_enable(false);
        			this.div03.form.btn_image_add.set_enable(false);
        			this.div03.form.MCND_PRD_YN.set_enable(true);

        			this.div03.form.imgViewer.set_image("");
        		}

        		if(this.ds_detail.getColumn(0,"LWST_CD_YN") != "Y"){
        			this.ds_subList.set_rowposition(-1);
        			this.div03.set_visible(false);
        			this.div02.set_visible(true);
        			this.div02.set_top(11);
        			this.mainDiv.form.btn_add_level.set_visible(true);
        			if(this.ds_subList.getRowCount() == 0 ){
        				this.div02.form.btn_Del.set_visible(true);
        			} else {
        				this.div02.form.btn_Del.set_visible(false);
        			}

        			var nH = null;
        			if(this.div02.form.grd_subList.rowcount == 0){
        				nH = 33;
        				this.div02.form.grd_subList.set_height(nH + 2);
        			}else{
        				nH = this.div02.form.grd_subList.getRealRowFullSize();
        				this.div02.form.grd_subList.set_height(nH + 2);
        			}
        			this.div02.form.Static01.set_height(nH+50);
        			this.div02.form.Static02.set_height(nH+50);

        			this.div02.form.edtPrdClsfLwCnt.set_value(this.ds_subList.getRowCount());

        			if(this.gfn_isNull(this.ds_detail.getColumn(0,"USE_YN"))){
        				this.div02.form.USE_YN.set_value("Y");
        			}

        		}else{
        			this.div02.set_visible(false);
        			this.div03.set_visible(true);
        			this.div03.set_right(30);
        			this.div03.set_left(583);
        			this.mainDiv.form.btn_add_level.set_visible(false);
        			if(this.ds_detail.getColumn(0,'PRD_CNT') == 0 ) {
        				this.div03.form.btn_del.set_visible(true);
        			}else {
        				this.div03.form.btn_del.set_visible(false);
        			}
        		}
        		this.prdClcd = null;
        	} else if(svcID == "codeSelect"){

        	} else if(svcID == "saveCategoryInfo"){
        		if(this.prdNmCnt > 0){
        			//this.alert("입력한 카테고리명은 이미 존재하는 카테고리명입니다.");
        			this.alert(this.fn_getMessage("ERRP000015"));
        			return;
        		}else{
        			this.prdClcd = this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD");
        			//this.alert("저장되었습니다.");
        			this.alert(this.fn_getMessage("ERRS000156"));
        			this.fn_mainSearch();
        		}
        	} else if(svcID == "mroPrdPopup"){
        		if(this.mroPrdCount == 1){
        			this.div03.form.MRO_PRD_CLCD.set_value(this.searchMroPrdClcd);
        			this.div03.form.MRO_PRD_CLSF_NM.set_value(this.searchMroPrdClsfNm);
        		}else{
        			var objParam = {};
        			objParam.mroPrdClcd = this.div03.form.MRO_PRD_CLCD.value;
        			objParam.mroPrdClsfNm = this.div03.form.MRO_PRD_CLSF_NM.value;
        			objParam.coCd = this.coCd;
        			this.gfn_openPopup("ssp_bo_pa_46", "PR_POP::SSP_BO_PA_46.xfdl", objParam);
        		}
        	} else if(svcID == "notiItmPopup"){
        		if(this.searchNotiItmCount == 1){
        			this.div03.form.NOTI_ITM_ID.set_value(this.searchNotiItmId);
        			this.div03.form.NOTI_ITM_NM.set_value(this.searchNotiItmNm);
        		}else{
        			var objParam = {};
        			objParam.notiItmId = this.div03.form.NOTI_ITM_ID.value;
        			objParam.notiItmNm = this.div03.form.NOTI_ITM_NM.value;
        			objParam.coCd = this.coCd;
        			this.gfn_openPopup("ssp_bo_pa_47", "PR_POP::SSP_BO_PA_47.xfdl", objParam);
        		}
        	} else if(svcID == "largedown"){
        			trace("RSLT_CD  " + this.ds_outputlarge.getColumn(0, "RSLT_CD"));
        			trace("RSLT_MSG  " + this.ds_outputlarge.getColumn(0, "RSLT_MSG"));
            } else if (svcID == "deleteCategory"){
        		this.fn_mainSearch();
        	}
        }

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(sRetValue == undefined){
        		if(sPopupId == 'SSP_BO_PP_34'){
        			this.fn_mainSearch();
        		} else {
        			return;
        		}
            }else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId)
        	{
        		case "ssp_bo_pa_15" :
        			this.prdClcd = resData.PRD_CLCD;
        			this.fn_mainSearch();
        			break;
        		case "ssp_bo_pa_16" :
        			this.prdClcd = resData.PRD_CLCD;
        			this.ds_search.setColumn(0,"PRD_CLCD",this.prdClcd);
        			this.fn_subSearch();
        			break;
        		case "ssp_bo_pa_46" :
        			this.div03.form.MRO_PRD_CLCD.set_value(resData.MRO_PRD_CLCD);
        			this.div03.form.MRO_PRD_CLSF_NM.set_value(resData.MRO_PRD_CLSF_NM);
        			break;
        		case "ssp_bo_pa_47" :
        			this.div03.form.NOTI_ITM_ID.set_value(resData.NOTI_ITM_ID);
        			this.div03.form.NOTI_ITM_NM.set_value(resData.NOTI_ITM_NM);
        			break;
        		case "ssp_bo_na_27" :
        			this.ds_detail.setColumn(0,"UPD_RSN",resData.UPD_RSN);
        			this.fn_save();
        			break;
        		case "ssp_bo_pa_21" :
        			this.prdClcd = resData.PRD_CLCD;
        			this.ds_search.setColumn(0,"PRD_CLCD",this.prdClcd);
        			this.fn_subSearch();
        			break;
        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//static 필수값 표시 초기 설정
        	this.div02.form.staPrdClsfNm.uEssentiel = "true";
        	this.div03.form.staPrdClsfNm.uEssentiel = "true";
        	this.div03.form.sta_mroPrdClcd.uEssentiel = "true";
        	this.div03.form.sta_selMthdCd.uEssentiel = "true";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //트리 셀 인덱스 가져온다.
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount = objGrid.getCellCount("body");
        	var nCellType;
        	var nCol = 0;
        	for(nCol=0; nCol<nCellCount; nCol++)
        	{
        		nCellType = objGrid.getCellProperty("body",nCol,"displaytype");
        		//get first treecell num
        		if(nCellType = "treeitemcontrol")
        		{
        			break;
        		}
        	}
        	return nCol;
        }

        //입력값 찾기
        this.setFindeCodeRow = function (objForm)
        {
        	var edtValue = this.mainDiv.form.edtName.value;
        	var dsTree	 = this.ds_list;
        	var grdTree	 = this.mainDiv.form.grd_mainList;

        	var nTreeCellIndex = this.fnGetTreeCellIndex(grdTree);
        	var nStartLvl = grdTree.getCellProperty("body",nTreeCellIndex,"treestartlevel");
        	var nCellIndex = this.fnGetTreeCellIndex(grdTree);

        	var nRowPos	 = dsTree.rowposition;

        	if(!this.gfn_isNull(edtValue)) {
        		var strSearchId = "PRD_CLSF_NM";
        		var sFilterstr = strSearchId +".indexOf('"+edtValue+"') > -1";

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
        	if(!grdTree.isTreeRootRow(findRow,true))
        	{
        		nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");

        		var parentsRow = 0;
        		var nRowFindRow = findRow;
        		for(var i=nStartLvl; i<nEndLvl; i++){
        			parentsRow = grdTree.getTreeParentRow(nRowFindRow);

        			if (parentsRow>-1){
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			}else{
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--){
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	if( findRow == -1 ){
        		findRow = 0;
        	}
        	//set_rowposition
        	dsTree.set_rowposition(findRow);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 조회버튼 이벤트
        this.mainDiv_btn_find_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	this.setFindeCodeRow(objForm);
        };

        //검색 input
        this.mainDiv_edtName_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.mainDiv.form.btn_find.click();
        	}
        };

        // 트리 클릭시 상세 조회
        this.mainDiv_grd_mainList_oncellclick = function(obj,e)
        {
        	this.ds_fileSingle.clearData();
        	this.ds_uploadResult.clearData();

        	if(this.ds_list.getColumn(e.row,"HIER_LVL") == "7" || this.ds_list.getColumn(e.row,"LWST_CD_YN") == "Y"){
        		this.mainDiv.form.btn_add_level.set_visible(false);
        	}else{
        		this.mainDiv.form.btn_add_level.set_visible(true);
        	}


        	// 하위카테고리 조회
        	this.ds_search.setColumn(0,"PRD_CLCD", this.ds_list.getColumn(e.row,"PRD_CLCD"));
        	this.fn_subSearch();

        	if(e.clickitem == "treeitembutton"){
        		return;
        	}

        	//그리드 자동 펼치기
        	var gridObj = this.mainDiv.form.grd_mainList;
        	var nGridRow = gridObj.getTreeRow(e.row);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);
        	gridObj.setTreeStatus(nGridRow, nStatus);
        };

        // 하위 카테고리 순서변경
        this.div_grd_subList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0 || e.cell == 1){
        		if(e.cell == 0){
        			var nTRow = this.ds_subList.rowposition;
        			if(nTRow == 0){
        				//this.alert("더 이상 이동할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRN000038"));
        				return false;
        			}
        			this.ds_subList.moveRow(nTRow, (nTRow-1));
        		}else if(e.cell == 1){
        			var nTRow = this.ds_subList.rowposition;
        			if(nTRow == (this.ds_subList.getRowCount()-1)){
        				//this.alert("더 이상 이동할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRN000038"));
        				return false;
        			}
        			this.ds_subList.moveRow(nTRow, (nTRow+1));
        		}

        		for(var i=0; i<this.ds_subList.rowcount; i++){
        			this.ds_subList.setColumn(i,"SRT_SO", i+1);
        		}
        	}

        };

        // 카테고리 추가 팝업
        this.btn_add_level_onclick = function(obj,e)
        {
        	var hierLvl = this.ds_list.getColumn(this.ds_list.rowposition,"HIER_LVL");

        	if( hierLvl < 7  || this.gfn_isNull(hierLvl)){
        		var objParam = {level:hierLvl
        					   , lvlNm:this.ds_detail.getColumn(0,"PRD_CLS_LVL_NM")
        					   , prdClcd:this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD")
        					   , coCd:this.coCd
        					   };
        		this.gfn_openPopup("ssp_bo_pa_15", "PR::SSP_BO_PA_15.xfdl", objParam);
        	}else{
        		//this.alert("더이상 하위 카테고리를 추가 할수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000269"));
        		return;
        	}
        };

        this.btn_del_onclick = function(obj,e)
        {
        	if(this.confirm("정말로 삭제하시겠습니까?")){
        		this.ds_detail.clearData();
        		this.ds_search.setColumn(0,"PRD_CLCD", this.ds_list.getColumn(this.ds_list.rowposition,"PRD_CLCD"));
        		this.ds_list.deleteRow(this.ds_list.rowposition);
        		this.fn_deleteCategory();
        	}
        };
        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	if( !this.fn_dataCheck(this.ds_list) && !this.fn_dataCheck(this.ds_detail) && !this.fn_dataCheck(this.ds_subList) && !this.fn_dataCheck(this.ds_fileSingle)) {
        		//alert("변경된 내용이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000129"));
        		return false;
        	} else {
        		// 변경사유 팝업호출
        		var objParam = {};
        		this.gfn_openPopup("ssp_bo_na_27", "PR_POP::SSP_BO_NA_27.xfdl", objParam);
        	}
        };
        // S-MRO카테고리 매핑
        this.div03_btn_mro_onclick = function(obj,e)
        {
        	var objParam = {mroPrdClcd:this.div03.form.MRO_PRD_CLCD.value
        	              , mroPrdClsfNm:this.div03.form.MRO_PRD_CLSF_NM.value
        	              , coCd:this.coCd};
        	this.gfn_openPopup("ssp_bo_pa_46", "PR_POP::SSP_BO_PA_46.xfdl", objParam);
        };
        // 고시품목 매핑
        this.div03_btn_noti_onclick = function(obj,e)
        {
        	var objParam = {notiItmId:this.div03.form.NOTI_ITM_ID.value
        	              , notiItmNm:this.div03.form.NOTI_ITM_NM.value
        				  , coCd:this.coCd};
        	this.gfn_openPopup("ssp_bo_pa_47", "PR_POP::SSP_BO_PA_47.xfdl", objParam);
        };
        // KEY 이벤트
        this.div03_MRO_PRD_CLCD_onkeyup = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.ds_search.setColumn(0,"MRO_PRD_CLCD",this.div03.form.MRO_PRD_CLCD.value);
        		this.ds_search.setColumn(0,"MRO_PRD_CLSF_NM",this.div03.form.MRO_PRD_CLSF_NM.value);
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.fn_popupSearch("mroPrdPopup", "/pr/prd-popup/select-mroprd-popup-list.do");
        	}else if(e.keycode == '8'){
        		this.div03.form.MRO_PRD_CLCD.set_value("");
        		this.div03.form.MRO_PRD_CLSF_NM.set_value("");
        	}
        };

        this.div03_NOTI_ITM_ID_onkeyup = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.ds_search.setColumn(0,"NOTI_ITM_ID",this.div03.form.NOTI_ITM_ID.value);
        		this.ds_search.setColumn(0,"NOTI_ITM_NM",this.div03.form.NOTI_ITM_NM.value);
        		this.ds_search.setColumn(0,"CO_CD",this.coCd);
        		this.fn_popupSearch("notiItmPopup", "/pr/prd-popup/select-product-notice-popup-list.do");
        	}else if(e.keycode == '8'){
        		this.div03.form.NOTI_ITM_ID.set_value("");
        		this.div03.form.NOTI_ITM_NM.set_value("");
        	}
        };
        // 속성관리 팝업호출
        this.div03_btn_attr_onclick = function(obj,e)
        {
        	if( this.fn_dataCheck(this.ds_detail) ) {
        		//alert("변경사항이 있습니다.\n저장 후 실행해 주세요.");
        		this.alert(this.fn_getMessage("ERRP000272"));
        		return false;
        	}else{
        		var objParam = {prdClcd:this.ds_detail.getColumn(0,"PRD_CLCD")
        					  , mroPrdClcd:this.ds_detail.getColumn(0, "MRO_PRD_CLCD")
        					  , coCd:this.coCd};
        		this.gfn_openPopup("ssp_bo_pa_16", "PR::SSP_BO_PA_16.xfdl", objParam);
        	}
        };

        // 카테고리 사용여부 변경
        this.div03_USE_YN_onitemchanged = function(obj,e)
        {
        	//카테고리 사용여부에서 '미사용' 선택 시에는 '미사용' 선택으로 고정
        	if(obj.value == "N"){
        		this.div03.form.FRT_EXPS_YN.set_readonly(true);
        		this.div03.form.FRT_EXPS_YN.set_value("N");
        	}else{
        		this.div03.form.FRT_EXPS_YN.set_readonly(false);
        	}
        };

        // 선정방식 변경이벤트
        this.div03_SEL_MTHD_CD_onitemchanged = function(obj,e)
        {
        	//'전시상품'을 선택한 경우에만 [이미지등록] 버튼 활성
        	if(obj.value == "40"){
        		this.div03.form.btn_image_del.set_enable(true);
        		this.div03.form.btn_image_add.set_enable(true);

        		this.div03.form.MCND_PRD_YN.set_value("N");
        		this.div03.form.MCND_PRD_YN.set_enable(false);

        		var findRow     = this.ds_fileSingle.findRow("ETC_FDS_1","1") != -1 ? this.ds_fileSingle.findRow("ETC_FDS_1","1") : this.ds_fileSingle.findRow("ETC_FDS_2","90");
        			findRow     = findRow != -1 ? findRow : this.ds_fileSingle.getRowCount()-1;
        		var filePath    = this.ds_fileSingle.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileName    = this.ds_fileSingle.getColumn(findRow,"ORI_ATFL_NM");
        		var fileOrgName = this.ds_fileSingle.getColumn(findRow,"ATFL_NM");

        		if(findRow != -1)
        		{
        			this.ds_fileSingle.setColumn(findRow,"ETC_FDS_2","90");
        			this.div03.form.imgViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        		}

        	}else{
        		this.div03.form.btn_image_del.set_enable(false);
        		this.div03.form.btn_image_add.set_enable(false);

        		this.div03.form.MCND_PRD_YN.set_enable(true);

        		for(var idx=0; idx<this.ds_fileSingle.getRowCount(); idx++)
        		{
        			this.ds_fileSingle.setColumn(idx,"ETC_FDS_2","del");
        			this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID","");
        		}
        		this.div03.form.imgViewer.set_image("");
        	}
        };

        // 변경이력 팝업 조회
        this.div_btn_chgHist_onclick = function(obj,e)
        {
        	var objParam = {historyType:"category",key1:this.ds_detail.getColumn(0,"PRD_CLCD"),key2:this.mallSprCd};
        	this.gfn_openPopup("ssp_bo_pa_48", "PR_POP::SSP_BO_PA_48.xfdl", objParam);
        };

        // 저장이벤트
        this.div03_btn_save_onclick = function(obj,e)
        {
        	if( !this.fn_dataCheck(this.ds_list) && !this.fn_dataCheck(this.ds_detail) && !this.fn_dataCheck(this.ds_subList) && !this.fn_dataCheck(this.ds_fileSingle) ) {
        		//alert("변경된 내용이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000129"));
        		return false;
        	} else {
        		// 변경사유 팝업호출
        		var objParam = {};
        		this.gfn_openPopup("ssp_bo_na_27", "PR_POP::SSP_BO_NA_27.xfdl", objParam);
        	}
        };

        /********************* 첨부파일 관련 *************************/
        this.div03_btn_image_add_onclick = function(obj,e)
        {
        	// 첨부파일정보 초기화
        	this.ds_uploadResult.clearData();

        	this.FileUploadSingle.deleteItem(0);               // FileUpload 0번째 삭제
        	this.FileUploadSingle.appendItem();                // FileUpload 0번째 추가
        	this.FileUploadSingle.filefindbuttons[0].click();  // 파일 선택 다일로그박스 활성화
        };

        this.div03_btn_image_del_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

        	if(result)
        	{
        		var delRow = this.ds_fileSingle.findRow("ETC_FDS_2","90");
        		this.ds_fileSingle.setColumn(delRow,"ETC_FDS_2","del");
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID","");
        		this.div03.form.imgViewer.set_image("");
        	}
        };

        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value;   					// 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]
        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        	{
        		this.gfn_alert("MSG00046","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}
        	var sFilePath = this.FileUploadSingle.value;                        // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			// web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=90";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 					// 파일 업로드
        };

        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	/**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        		파일업로드 성공시에 Dataset으로 리턴합니다.
        	*/
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_fileSingle.findRow("ETC_FDS_2","90");
        	this.ds_fileSingle.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_fileSingle.addRow();
        	this.ds_fileSingle.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_isNull(this.ds_detail.getColumn(0,"DISP_PRD_FILE_ATTC_ID"))){
        		this.ds_detail.setColumn(0,"DISP_PRD_FILE_ATTC_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.div03.form.imgViewer);

        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        // 대용량 다운로드
        this.btn_largedown_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRP000268"))){
        		this.fn_excelLargeDownload();
        	}
        };

        // 단축키
        this.SSP_BO_PA_14_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.btn_save_onclick();
        	}

        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_PA_14"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        this.div03_btn_sspPrdNm_onclick = function(obj,e)
        {
        	var PRD_CLCD = this.ds_detail.getColumn(0,"PRD_CLCD");
        	if( this.gfn_isNull(PRD_CLCD) ) {
                this.alert("카테고리코드가 없습니다.");
                return false;
            }else{
                var objParam = {
                    coCd:this.coCd,
                    prdClcd:this.ds_detail.getColumn(0,"PRD_CLCD")
                };
        		var options = {title:'SSP상품명관리'};
                this.gfn_openPopup("ssp_bo_pa_28", "PR::SSP_BO_PA_28.xfdl", objParam, "", options);
            }
        };

        this.div03_MCND_PRD_YN_onchanged = function(obj,e)
        {
        	if(obj.value == 'Y'){
        		if(this.ds_detail.getColumn(0,'LOSS_LEADER_CNT')  > 0 ) {
        			alert('상품군 내 미끼상품이 있을 경우, 시황자재 등록이 불가능합니다.')
        			obj.set_value('N');
        		}
        	}
        };

        this.div03_btn_specialIddt_onclick = function(obj,e)
        {
        var PRD_CLCD = this.ds_detail.getColumn(0,"PRD_CLCD");
        	if( this.gfn_isNull(PRD_CLCD) ) {
                this.alert("카테고리코드가 없습니다.");
                return false;
            }else{
                var objParam = {
                    coCd:this.coCd,
                    prdClcd:this.ds_detail.getColumn(0,"PRD_CLCD")
                };
        		var options = {title:'특화산업군 관리'};
                this.gfn_openPopup("ssp_bo_pa_21", "PR::SSP_BO_PA_21.xfdl", objParam, "", options);
            }

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PA_14_onkeyup,this);
            this.mainDiv.form.grd_mainList.addEventHandler("oncellclick",this.mainDiv_grd_mainList_oncellclick,this);
            this.mainDiv.form.edtName.addEventHandler("onkeyup",this.mainDiv_edtName_onkeyup,this);
            this.mainDiv.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.mainDiv.form.btn_find.addEventHandler("onclick",this.mainDiv_btn_find_onclick,this);
            this.mainDiv.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
            this.mainDiv.form.btn_largedown.addEventHandler("onclick",this.btn_largedown_onclick,this);
            this.mainDiv.form.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.div01.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div01.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div01.form.grd_subList.addEventHandler("oncellclick",this.div_grd_subList_oncellclick,this);
            this.div02.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div02.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div02.form.btn_Del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div02.form.grd_subList.addEventHandler("oncellclick",this.div_grd_subList_oncellclick,this);
            this.div02.form.btn_chgHist.addEventHandler("onclick",this.div_btn_chgHist_onclick,this);
            this.div03.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.div03.form.btn_save.addEventHandler("onclick",this.div03_btn_save_onclick,this);
            this.div03.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
            this.div03.form.btn_chgHist.addEventHandler("onclick",this.div_btn_chgHist_onclick,this);
            this.div03.form.USE_YN.addEventHandler("onitemchanged",this.div03_USE_YN_onitemchanged,this);
            this.div03.form.MRO_PRD_CLCD.addEventHandler("onkeyup",this.div03_MRO_PRD_CLCD_onkeyup,this);
            this.div03.form.btn_mro.addEventHandler("onclick",this.div03_btn_mro_onclick,this);
            this.div03.form.NOTI_ITM_ID.addEventHandler("onkeyup",this.div03_NOTI_ITM_ID_onkeyup,this);
            this.div03.form.btn_noti.addEventHandler("onclick",this.div03_btn_noti_onclick,this);
            this.div03.form.SEL_MTHD_CD.addEventHandler("onitemchanged",this.div03_SEL_MTHD_CD_onitemchanged,this);
            this.div03.form.MCND_PRD_YN.addEventHandler("onchanged",this.div03_MCND_PRD_YN_onchanged,this);
            this.div03.form.btn_image_del.addEventHandler("onclick",this.div03_btn_image_del_onclick,this);
            this.div03.form.btn_image_add.addEventHandler("onclick",this.div03_btn_image_add_onclick,this);
            this.div03.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div03.form.MRO_PRD_CLSF_NM.addEventHandler("onkeyup",this.div03_MRO_PRD_CLCD_onkeyup,this);
            this.div03.form.NOTI_ITM_NM.addEventHandler("onkeyup",this.div03_NOTI_ITM_ID_onkeyup,this);
            this.div03.form.btn_attr.addEventHandler("onclick",this.div03_btn_attr_onclick,this);
            this.div03.form.edt_sspPrdNm.addEventHandler("onkeyup",this.div03_NOTI_ITM_ID_onkeyup,this);
            this.div03.form.btn_sspPrdNm.addEventHandler("onclick",this.div03_btn_sspPrdNm_onclick,this);
            this.div03.form.edt_pecialIddt.addEventHandler("onkeyup",this.div03_NOTI_ITM_ID_onkeyup,this);
            this.div03.form.btn_specialIddt.addEventHandler("onclick",this.div03_btn_specialIddt_onclick,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_PA_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
