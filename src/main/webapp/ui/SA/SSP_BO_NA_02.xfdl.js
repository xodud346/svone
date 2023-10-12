(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_02");
            this.set_titletext("기획전 - 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboExhbnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exhbnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exhbnCatgPrdDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnCatgDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnCatgPrdDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnCatgDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnCatgPrdDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboLstViewTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","20","105","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","74","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","1168",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","980","0","20","1168",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","1232","1020","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","44","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","43","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","136","960","139",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","141","150","109",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_comboNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_text("없음");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnit","945","140","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exhbnSprCd","20","43","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기획전 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","20","136","130","139",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_OprUnit","332","140","609","128",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_gridExhbnOprUnitList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("기획전 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_exhbnSprCd","160","47","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_comboExhbnSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","275","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mainExpsYn","640","278","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_mainExpsYn_innerdataset = new nexacro.NormalDataset("rdo_mainExpsYn_innerdataset", obj);
            rdo_mainExpsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">노출</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미노출</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mainExpsYn_innerdataset);
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mallSprCd","20","275","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainExpsYn","500","275","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("메인 노출 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cbx_mallSprCd","160","278","330","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_comboMallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","304","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispDt","20","305","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","160","308","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","264","308","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","277","308","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","335","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exhbnNm","20","335","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("기획전 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_exhbnNm","160","338","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exhbnNmSize","881","338","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("(100 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","149","365","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","149","365","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","149","396","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","149","396","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainImage","20","365","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("메인 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01","20","426","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prdIdNm","20","426","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("메인 노출 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdId0","917","430","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdNm","160","430","753","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01","149","458","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","149","458","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","149","489","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","149","489","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bnrImage","20","458","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("배너 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01_00","149","520","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","149","520","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00_00","150","548","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","149","548","130","33",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lpageImage","20","520","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("LP 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01_00_00","149","609","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","228","611","51","32",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00_00_00","149","640","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","228","641","51","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","20","580","130","95",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("쿠폰 설정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01_00","149","580","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","149","580","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("쿠폰 선택");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNoNm","289","585","624","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_01","1110","645","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_02","1108","669","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNo","254","583","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_01_00","969","159","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnEvtNo","917","585","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","149","611","80","62",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("쿠폰 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00_01","150","744","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","20","672","960","96",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","20","672","130","95",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("기획전 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_exhbnDesc","160","682","809","59",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exhbnDescSize","866","740","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","19","770","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("기본 상품 구성");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00","0","791","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_exhbnCatgDtl","20","801","130","286",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridExhbnCatgDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 명\"/><Cell col=\"1\" text=\"순서\"/></Band><Band id=\"body\"><Cell text=\"bind:CATG_NM\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CATG_DISP_SO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_02_00","150","801","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02","160","801","820","32",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgNm","160","801","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("카테고리 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgDispSo","570","801","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("카테고리 순서");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgNm","300","805","260","24",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgDispSo","710","805","259","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00","160","832","820","255",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exhbnCatgPrdDtl","160","832","130","255",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("등록 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03","290","833","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_00_00","629","1090","350","3",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00","969","843","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_exhbnCatgPrdDtl","300","870","669","206",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridExhbnCatgPrdDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"제조원\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"대표상품구분\"/><Cell col=\"7\" text=\"SSP상품상태\"/><Cell col=\"8\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;삭제&lt;/u&gt;&quot;\" text=\"bind:DELETE_ROW\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:ATTR_VAL\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:MNFR\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"7\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","1212","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","1172","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01","0","1130","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","1140","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","1140","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","19","1109","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","150","1141","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00","150","1141","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00","150","1168","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_00","969","1141","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00","0","1087","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","1144","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","428","1182","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write","502","1182","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdId1","771","843","97","24",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00_01","300","867","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgDelete","569","843","97","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("카테고리 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgAdd","670","843","97","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("카테고리 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdIdClear0","945","430","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnEvtNoClear","945","585","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnitMulText","945","168","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","1108","620","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","1110","600","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdIdMulText1","872","843","97","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mainPcDocRegIdNm","289","368","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainPcDocRegId","523","369","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainPcDocRegIdClear","607","369","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mainMblDocRegIdNm","289","400","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainMblDocRegId","523","400","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainMblDocRegIdClear","607","400","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bnrPcDocRegIdNm","289","462","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bnrPcDocRegId","523","462","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bnrMblDocRegIdNm","289","493","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bnrMblDocRegId","523","493","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lpagePcDocRegIdNm","289","522","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpagePcDocRegId","523","522","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lpageMblDocRegIdNm","289","553","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpageMblDocRegId","523","553","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnPcDocRegIdNm","289","615","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnPcDocRegId","523","615","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnPcDocRegIdClear","607","615","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnMblDocRegIdNm","289","645","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnMblDocRegId","523","645","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnMblDocRegIdClear","607","645","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bnrPcDocRegIdClear","607","462","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bnrMblDocRegIdClear","607","493","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpagePcDocRegIdClear","607","522","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpageMblDocRegIdClear","607","553","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","250","140","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountPrdDtl","300","849","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","641","369","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 2,560*560)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","641","400","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 822*240)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","641","462","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 1,216*200)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","641","493","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 984*420)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","641","522","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 2,560*FREE)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","641","553","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 1,080*FREE)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","641","615","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 1,216*200)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","641","645","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG (최적 사이즈 : 1,080*390)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lstViewTypeCd","20","74","130","64",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("목록보기타입코드");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pcLstViewTypeCd","287","78","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_comboLstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcLstViewTypeCd","149","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblLstViewTypeCd","149","105","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mblLstViewTypeCd","287","109","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_comboLstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_expsYn","295","1146","99","20",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("목록 미노출");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","161","255","134","20",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_exhbnSprCd","value","ds_exhbnInfo","EXHBN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_noticSprCd","value","ds_exhbnInfo","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbx_mallSprCd","value","ds_exhbnInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_mainExpsYn","value","ds_exhbnInfo","MAIN_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_dispStrDt","value","ds_exhbnInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_dispEndDt","value","ds_exhbnInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_exhbnNm","value","ds_exhbnInfo","EXHBN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_cpnEvtNo","value","ds_exhbnInfo","CPN_EVT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","txt_exhbnDesc","value","ds_exhbnInfo","EXHBN_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_catgNm","value","ds_gridExhbnCatgDtl","CATG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_catgDispSo","value","ds_gridExhbnCatgDtl","CATG_DISP_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_useYn","value","ds_exhbnInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_mainPcDocRegIdNm","value","ds_exhbnInfo","MAIN_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_mainMblDocRegIdNm","value","ds_exhbnInfo","MAIN_MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bnrPcDocRegIdNm","value","ds_exhbnInfo","BNR_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_bnrMblDocRegIdNm","value","ds_exhbnInfo","BNR_MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_lpagePcDocRegIdNm","value","ds_exhbnInfo","LPAGE_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_lpageMblDocRegIdNm","value","ds_exhbnInfo","LPAGE_MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_cpnPcDocRegIdNm","value","ds_exhbnInfo","CPN_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_cpnMblDocRegIdNm","value","ds_exhbnInfo","CPN_MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdo_pcLstViewTypeCd","value","ds_exhbnInfo","PC_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_mblLstViewTypeCd","value","ds_exhbnInfo","MBL_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","chk_expsYn","value","ds_exhbnInfo","EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","chk_notLogn_Inc_Yn","value","ds_exhbnInfo","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_02.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_02.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_02.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_02.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 기획전 - 등록
          CREATION DATES : 2022.03.07
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        this.fv_oApp = nexacro.getApplication();
        var fv_coCd = "";			// 선택한 회사코드
        var fv_mallSprCd = "";		// 선택한 몰구분코드

        var curImgBtnName = "";
        this.maxFileSize = "10";
        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_02_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("FORM_INIT");
        	this.fn_init("CODE_INIT");

        }

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 공통코드 값 조회
         */
        this.fn_comCdList = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();
        	// SSP-2971
        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "MALL_SPR_CD,EXHBN_SPR_CD,EXPS_NOTIC_SPR_CD,LST_VIEW_TYPE_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "comCdList";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboMallSprCd=ds_output1 ds_comboExhbnSprCd=ds_output2 ds_comboNoticSprCd=ds_output3 ds_comboLstViewTypeCd=ds_output4";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 운영단위ID 유효성 검사
         */
        this.fn_oprUnitCheck = function()
        {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_oprUnitList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 상품ID 유효성 검사
         */
        this.fn_prdIdCheck = function()
        {
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.cbx_mallSprCd.value);

        	var sSvcId = "prdIdCheck";
        	var sUrl = "/sa/com/select-prd-id-check-list.do";
        	var sInData = "ds_search=ds_search:A ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var sOutData = "ds_prdInfoList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 신규 데이터 등록
         */
        this.fn_saveExhbnInfo = function()
        {
        	var sSvcId = "saveExhbnInfo";
        	var sUrl = "/sa/exhbn/save-exhbn-info.do";
        	var sInData = "ds_save=ds_exhbnInfo:A ds_save2=ds_gridExhbnOprUnitList:A ds_save3=ds_exhbnCatgPrdDtl:A ds_save4=ds_gridExhbnCatgDtl:A ds_save5=ds_gridExhbnCatgPrdDtl:A"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }










        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "comCdList" :

        			this.rdo_exhbnSprCd.set_index(0);

        			this.rdo_pcLstViewTypeCd.set_index(0);
        			this.rdo_mblLstViewTypeCd.set_index(0);

        			this.rdo_noticSprCd.set_index(0);

        			this.cbx_mallSprCd.set_index(0);

        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined)
        				{
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined)
        				{
        					var findRow = this.ds_gridExhbnOprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_gridExhbnOprUnitList.addRow();

        						this.ds_gridExhbnOprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_gridExhbnOprUnitList.setColumn(nRow, "EXHBN_SEQ", "");
        						this.ds_gridExhbnOprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_gridExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_gridExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "prdIdCheck" :

        			var tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++)
        			{
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");

        				if (sPrdNm == "" || sPrdNm == undefined)
        				{
        					tempPrdId = tempPrdId + sPrdIdView + ",";
        				}
        			}

        			tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);

        			if (tempPrdId != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000025", tempPrdId));
        				alert(this.fn_getMessage("ERRN000025", tempPrdId)); // 없는 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}

        			var nRow = this.ds_gridExhbnCatgDtl.rowposition;	// this.grid_exhbnCatgDtl.currentrow;
        			var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(nRow, "EXHBN_CATG_SEQ");

        			var totalCount2 = 0;
        			tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++)
        			{
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");
        				var sAttrVal = this.ds_prdInfoList.getColumn(x, "ATTR_VAL");
        				var sMnfr = this.ds_prdInfoList.getColumn(x, "MNFR");
        				var sPubOnlySprNm = this.ds_prdInfoList.getColumn(x, "PUB_ONLY_SPR_NM");
        				var sReprPrdSprNm = this.ds_prdInfoList.getColumn(x, "REPR_PRD_SPR_NM");
        				var sPrdUseYnNm = this.ds_prdInfoList.getColumn(x, "PRD_USE_YN_NM");
        				var sDispStatsNm = this.ds_prdInfoList.getColumn(x, "DISP_STATS_NM");

        				if (sPrdNm != "" && sPrdNm != undefined)
        				{
        					var findRow = this.ds_gridExhbnCatgPrdDtl.findRowExpr("PRD_ID == '" + sPrdId + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_gridExhbnCatgPrdDtl.addRow();

        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "EXHBN_SEQ", "");
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "EXHBN_CATG_SEQ", sExhbnCatgSeq);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_ID", sPrdId);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", sPrdIdView);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_NM", sPrdNm);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "ATTR_VAL", sAttrVal);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "MNFR", sMnfr);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", sPubOnlySprNm);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", sReprPrdSprNm);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", sPrdUseYnNm);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", sDispStatsNm);
        						this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempPrdId = tempPrdId + sPrdIdView + ",";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == '" + sExhbnCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "saveExhbnInfo" :

        			if( errorCode == -1 || errorCode == -100)
        			{
        				//사용자 지정 에러코드 -100
        				alert(errorMsg);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000029")); // 등록되었습니다.

        				var resData = {};
        				var resString = "";

        				resData.RETURN_YN = "Y";

        				// json string 변경
        				resString = JSON.stringify(resData);

        				// return
        				this.close(resString);
        			}

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_searchOprUnit" :

        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_gridExhbnOprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridExhbnOprUnitList.addRow();

        					this.ds_gridExhbnOprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_gridExhbnOprUnitList.setColumn(nRow, "EXHBN_SEQ", "");
        					this.ds_gridExhbnOprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_gridExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_gridExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_searchOprUnitMulText" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined)
        					{
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_searchPrdId0" :

        			var totalCount = 0;

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_exhbnCatgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0)
        				{
        					totalCount = totalCount + 1;
        				}
        			}

        			if ((this.ds_exhbnCatgPrdDtl.getRowCount() + totalCount) > 3)
        			{
        				alert(this.fn_getMessage("ERRN000003")); // 최대 3개까지만 추가할 수 있습니다.
        			}
        			else
        			{
        				var totalCount2 = 0;
        				var tempPrdId = "";

        				for(var i=0; i<retObj.length; i++)
        				{
        					var rowData = JSON.parse(retObj[i]);

        					var findRow = this.ds_exhbnCatgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_exhbnCatgPrdDtl.addRow();

        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "EXHBN_SEQ", "");
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "EXHBN_CATG_SEQ", "0");
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "ATTR_VAL", rowData.ATTR_VAL);
        						this.ds_exhbnCatgPrdDtl.setColumn(nRow, "MNFR", rowData.MNFR_NM);
        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        					}
        				}

        				if (totalCount2 > 0)
        				{
        					tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        					this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        					alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        				}

        				var sNmList = "";

        				for(var i=0; i<this.ds_exhbnCatgPrdDtl.getRowCount(); i++)
        				{
        					sNmList += this.ds_exhbnCatgPrdDtl.getColumn(i, "PRD_ID_VIEW") + ",";
        				}

        				sNmList = sNmList.substring(0, sNmList.length-1);

        				this.edt_prdIdNm.set_value(sNmList);
        			}

        			break;

        		case "btn_searchCpnEvtNo" :

        			var rowData = JSON.parse(sRetValue);

        			this.edt_cpnEvtNo.set_value(rowData.CPN_EVT_NO);
        			this.edt_cpnEvtNoNm.set_value(rowData.CPN_NM);

        			break;

        		case "btn_searchPrdId1" :

        			var nRow = this.ds_gridExhbnCatgDtl.rowposition;	// this.grid_exhbnCatgDtl.currentrow;
        			var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(nRow, "EXHBN_CATG_SEQ");

        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_gridExhbnCatgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridExhbnCatgPrdDtl.addRow();

        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "EXHBN_SEQ", "");
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "EXHBN_CATG_SEQ", sExhbnCatgSeq);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "ATTR_VAL", rowData.ATTR_VAL);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "MNFR", rowData.MNFR_NM);
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", "");
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", "");
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", "");
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", "");
        					this.ds_gridExhbnCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == '" + sExhbnCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "btn_searchPrdIdMulText1" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sPrdId = sTempValue[x];

        					if (sPrdId != "")
        					{
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










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// 필수 설정
        	this.sta_exhbnSprCd.uEssentiel = "true";
        	this.sta_noticSprCd.uEssentiel = "true";
        	this.sta_mallSprCd.uEssentiel = "true";
        	this.sta_mainExpsYn.uEssentiel = "true";
        	this.sta_dispDt.uEssentiel = "true";
        	this.sta_exhbnNm.uEssentiel = "true";
        	this.sta_mainImage.uEssentiel = "false";
        	this.sta_prdIdNm.uEssentiel = "false";
        	this.sta_bnrImage.uEssentiel = "false";
        	this.sta_lpageImage.uEssentiel = "true";
        	this.sta_catgNm.uEssentiel = "true";
        	this.sta_catgDispSo.uEssentiel = "true";
        	this.sta_exhbnCatgPrdDtl.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";

        	// grid 초기 설정
        	this.grid_OprUnit.uSortFlag = "true";
        	this.grid_OprUnit.uServerSortFlag = "false";
        	this.grid_OprUnit.uCellSizeType = "true";
        }





        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 기획전 구분 값 변경 시
         */
        this.rdo_exhbnSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_exhbnSprCdSet();
        };

        /**
         * 게시구분 값 변경 시
         */
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_noticSprCdSet();
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grid_OprUnit_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button")
        	{
        		if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        		{
        			this.ds_gridExhbnOprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        /**
         * 로그인운영단위 검색 아이콘 클릭 시
         */
        this.btn_searchOprUnit_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
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
        	              , title : "운영단위 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 로그인운영단위 멀티텍스트 아이콘 클릭 시
         */
        this.btn_searchOprUnitMulText_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.btn_searchOprUnitMulText
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

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 몰 구분 값 변경 시
         */
        this.cbx_mallSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_mallSprCdSet();
        };

        /**
         * 메인 노출 여부 값 변경 시
         */
        this.rdo_mainExpsYn_onitemchanged = function(obj,e)
        {
        	this.fn_mainExpsYnSet();
        };

        /**
         * 기획전 명 텍스트 입력 시
         */
        this.edt_exhbnNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "00");
        };

        /**
         * 메인 이미지 - PC 파일첨부 버튼 클릭 시
         */
        this.btn_mainPcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 메인 이미지 - PC 삭제 아이콘 클릭 시
         */
        this.btn_mainPcDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_mainPcDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("mainPcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mainPcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 메인 이미지 - 모바일 파일첨부 버튼 클릭 시
         */
        this.btn_mainMblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 메인 이미지 - 모바일 삭제 아이콘 클릭 시
         */
        this.btn_mainMblDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_mainMblDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("mainMblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mainMblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 메인 노출 상품 상품검색 아이콘 클릭 시
         */
        this.btn_searchPrdId0_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        			   , mallSprCd : this.cbx_mallSprCd.value
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
        	              , title : "메인 노출 상품 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 메인 노출 상품 삭제 아이콘 클릭 시
         */
        this.btn_searchPrdIdClear0_onclick = function(obj,e)
        {
        	// dataset 영역
        	this.ds_exhbnCatgPrdDtl.clearData();

        	// 입력 항목 영역
        	this.edt_prdIdNm.set_value("");
        };

        /**
         * 배너 이미지 - PC 파일첨부 버튼 클릭 시
         */
        this.btn_bnrPcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 배너 이미지 - PC 삭제 아이콘 클릭 시
         */
        this.btn_bnrPcDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_bnrPcDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("bnrPcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'bnrPcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 배너 이미지 - 모바일 파일첨부 버튼 클릭 시
         */
        this.btn_bnrMblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 배너 이미지 - 모바일 삭제 아이콘 클릭 시
         */
        this.btn_bnrMblDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_bnrMblDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("bnrMblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'bnrMblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * LP 이미지 - PC 파일첨부 버튼 클릭 시
         */
        this.btn_lpagePcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * LP 이미지 - PC 삭제 아이콘 클릭 시
         */
        this.btn_lpagePcDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_lpagePcDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("lpagePcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'lpagePcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * LP 이미지 - 모바일 파일첨부 버튼 클릭 시
         */
        this.btn_lpageMblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * LP 이미지 - 모바일 삭제 아이콘 클릭 시
         */
        this.btn_lpageMblDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_lpageMblDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("lpageMblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'lpageMblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 쿠폰 선택 검색 아이콘 클릭 시
         */
        this.btn_searchCpnEvtNo_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
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
        	              , title : "쿠폰 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_PP_29.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 쿠폰 선택 삭제 아이콘 클릭 시
         */
        this.btn_searchCpnEvtNoClear_onclick = function(obj,e)
        {
        	this.edt_cpnEvtNo.set_value("");
        	this.edt_cpnEvtNoNm.set_value("");
        };

        /**
         * 쿠폰 이미지 - PC 파일첨부 버튼 클릭 시
         */
        this.btn_cpnPcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 쿠폰 이미지 - PC 삭제 아이콘 클릭 시
         */
        this.btn_cpnPcDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_cpnPcDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("cpnPcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'cpnPcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 쿠폰 이미지 - 모바일 파일첨부 버튼 클릭 시
         */
        this.btn_cpnMblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 쿠폰 이미지 - 모바일 삭제 아이콘 클릭 시
         */
        this.btn_cpnMblDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_cpnMblDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("cpnMblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'cpnMblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 기획전 설명 텍스트 입력 시
         */
        this.txt_exhbnDesc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "09");
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grid_exhbnCatgDtl_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = objDs.rowposition;

        	var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(nRow, "EXHBN_CATG_SEQ");

        	this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == '" + sExhbnCatgSeq + "'");

        	var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnCatgPrdDtl.getRowCount() + "건 </b>)";
        	this.sta_totalCountPrdDtl.set_text(sTotText);
        };

        /**
         * 카테고리 삭제 버튼 클릭 시
         */
        this.btn_catgDelete_onclick = function(obj,e)
        {
        	var nRow = this.grid_exhbnCatgDtl.currentrow;

        	if (nRow < 0)
        	{
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var nRow = this.ds_gridExhbnCatgDtl.rowposition;

        		var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(nRow, "EXHBN_CATG_SEQ");

        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridExhbnCatgPrdDtl.rowcount; i++)
        		{
        			if(this.ds_gridExhbnCatgPrdDtl.getColumn(i, "EXHBN_CATG_SEQ") == sExhbnCatgSeq)
        			{
        				aDelArr.push(i);
        			}
        		}

        		// 기본 상품 삭제
        		this.ds_gridExhbnCatgPrdDtl.deleteMultiRows(aDelArr);

        		// 기본 상품 카테고리 삭제
        		this.ds_gridExhbnCatgDtl.deleteRow(nRow);

        		var nRow2 = this.ds_gridExhbnCatgDtl.rowposition;

        		if (nRow2 >= 0)
        		{
        			var sExhbnCatgSeq2 = this.ds_gridExhbnCatgDtl.getColumn(nRow2, "EXHBN_CATG_SEQ");

        			this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == '" + sExhbnCatgSeq2 + "'");
        		}
        		else
        		{
        			this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == 'NOTHING'");
        		}

        		var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnCatgPrdDtl.getRowCount() + "건 </b>)";
        		this.sta_totalCountPrdDtl.set_text(sTotText);
        	}
        };

        /**
         * 카테고리 추가 버튼 클릭 시
         */
        this.btn_catgAdd_onclick = function(obj,e)
        {
        	var nRowCurr = this.ds_gridExhbnCatgDtl.rowposition;

        	if (nRowCurr >= 0)
        	{
        		var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(nRowCurr, "EXHBN_CATG_SEQ");
        		var sCatgNm = this.ds_gridExhbnCatgDtl.getColumn(nRowCurr, "CATG_NM");
        		var sCatgDispSo = this.ds_gridExhbnCatgDtl.getColumn(nRowCurr, "CATG_DISP_SO");

        		if (this.edt_catgNm.value == "" || this.edt_catgNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "카테고리 명은")); // 카테고리 명은 필수 입력항목입니다.
        			this.edt_catgNm.setFocus();
        			return;
        		}

        		if (this.edt_catgDispSo.value == "" || this.edt_catgDispSo.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "카테고리 순서는")); // 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_gridExhbnCatgDtlTemp.clearData();

        		for(var i=0; i<this.ds_gridExhbnCatgDtl.getRowCount(); i++)
        		{
        			if (nRowCurr != i)
        			{
        				var nRowAdd = this.ds_gridExhbnCatgDtlTemp.addRow();

        				this.ds_gridExhbnCatgDtlTemp.setColumn(nRowAdd, "CO_CD", this.ds_gridExhbnCatgDtl.getColumn(i, "CO_CD"));
        				this.ds_gridExhbnCatgDtlTemp.setColumn(nRowAdd, "EXHBN_SEQ", this.ds_gridExhbnCatgDtl.getColumn(i, "EXHBN_SEQ"));
        				this.ds_gridExhbnCatgDtlTemp.setColumn(nRowAdd, "EXHBN_CATG_SEQ", this.ds_gridExhbnCatgDtl.getColumn(i, "EXHBN_CATG_SEQ"));
        				this.ds_gridExhbnCatgDtlTemp.setColumn(nRowAdd, "CATG_NM", this.ds_gridExhbnCatgDtl.getColumn(i, "CATG_NM"));
        				this.ds_gridExhbnCatgDtlTemp.setColumn(nRowAdd, "CATG_DISP_SO", this.ds_gridExhbnCatgDtl.getColumn(i, "CATG_DISP_SO"));
        			}
        		}

        		var findRow = this.ds_gridExhbnCatgDtlTemp.findRowExpr("CATG_DISP_SO == '" + this.edt_catgDispSo.value + "'");

        		if(findRow >= 0)
        		{
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		if (this.ds_gridExhbnCatgPrdDtl.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000006")); // 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	var nRow = this.ds_gridExhbnCatgDtl.addRow();

        	this.ds_gridExhbnCatgDtl.setColumn(nRow, "CO_CD", "1000");
        	this.ds_gridExhbnCatgDtl.setColumn(nRow, "EXHBN_SEQ", "");
        	this.ds_gridExhbnCatgDtl.setColumn(nRow, "EXHBN_CATG_SEQ", "C" + nRow);

        	this.ds_gridExhbnCatgPrdDtl.filter("EXHBN_CATG_SEQ == '" + "C" + nRow + "'");
        };

        /**
         * 상품검색 버튼 클릭 시
         */
        this.btn_searchPrdId1_onclick = function(obj,e)
        {
        	var nRow = this.grid_exhbnCatgDtl.currentrow;

        	if (nRow < 0)
        	{
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        			   , mallSprCd : this.cbx_mallSprCd.value
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
        	              , title : "기본 상품 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 상품검색 멀티텍스트 버튼 클릭 시
         */
        this.btn_searchPrdIdMulText1_onclick = function(obj,e)
        {
        	var nRow = this.grid_exhbnCatgDtl.currentrow;

        	if (nRow < 0)
        	{
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.btn_searchPrdIdMulText1
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

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grid_exhbnCatgPrdDtl_oncellclick = function(obj,e)
        {
        	if(e.col == this.grid_exhbnCatgPrdDtl.getBindCellIndex("body", "DELETE_ROW"))
        	{
        		if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        		{
        			var objDs = obj.getBindDataset();
        			var nRow = objDs.rowposition;

        			objDs.deleteRow(nRow);

        			var sTotText = "(<b v='true'>총 " + this.ds_gridExhbnCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);
        		}
        	}
        };

        /**
         * 취소 버튼 클릭 시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if ( confirm(this.fn_getMessage("ERRN000053"))) // 취소하시겠습니까?
        	{
        		var resData = {};
        		var resString = "";

        		resData.RETURN_YN = "N";

        		// json string 변경
        		resString = JSON.stringify(resData);

        		// return
        		this.close(resString);
        	}
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	if (this.rdo_noticSprCd.value == "30")
        	{
        		if (this.ds_gridExhbnOprUnitList.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000021")); // 게시구분(로그인운영단위)을 선택하면 운영단위를 선택해야 합니다.
        			return;
        		}
        	}

        	if (this.cal_dispStrDt.value == "" || this.cal_dispStrDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "전시 시작일은")); // 전시 시작일은 필수 입력항목입니다.
        		this.cal_dispStrDt.setFocus();
        		return
        	}

        	if (this.cal_dispEndDt.value == "" || this.cal_dispEndDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "전시 종료일은")); // 전시 종료일은 필수 입력항목입니다.
        		this.cal_dispEndDt.setFocus();
        		return
        	}

        	if (this.cal_dispStrDt.value > this.cal_dispEndDt.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "전시 종료일이 전시 시작일보다")); // 전시 종료일이 전시 시작일보다 작습니다.
        		this.cal_dispStrDt.setFocus();
        		return
        	}

        	if (this.edt_exhbnNm.value == "" || this.edt_exhbnNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "기획전 명은")); // 기획전 명은 필수 입력항목입니다.
        		this.edt_exhbnNm.setFocus();
        		return;
        	}

        	if (this.rdo_mainExpsYn.value == "Y")
        	{
        		if (this.edt_mainPcDocRegIdNm.value == "" || this.edt_mainPcDocRegIdNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "메인 이미지(PC)는")); // 메인 이미지(PC)는 필수 입력항목입니다.
        			return;
        		}

        		if (this.edt_mainMblDocRegIdNm.value == "" || this.edt_mainMblDocRegIdNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "메인 이미지(모바일)는")); // 메인 이미지(모바일)는 필수 입력항목입니다.
        			return;
        		}

        		if (this.edt_prdIdNm.value == "" || this.edt_prdIdNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "메인 노출 상품은")); // 메인 노출 상품은 필수 입력항목입니다.
        			return;
        		}

        		if (this.ds_exhbnCatgPrdDtl.getRowCount() > 3)
        		{
        			alert(this.fn_getMessage("ERRN000001", "메인 노출 상품은 최대 3개까지")); // 메인 노출 상품은 최대 3개까지 필수 입력항목입니다.
        			return;
        		}
        	}
        	else
        	{
        		this.ds_exhbnInfo.setColumn(0, "MAIN_PC_DOC_REG_ID", "");
        		this.ds_exhbnInfo.setColumn(0, "MAIN_MBL_DOC_REG_ID", "");

        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_exhbnCatgPrdDtl.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_exhbnCatgPrdDtl.deleteMultiRows(aDelArr);

        		this.edt_mainPcDocRegIdNm.set_value("");
        		this.edt_mainMblDocRegIdNm.set_value("");
        		this.edt_prdIdNm.set_value("");

        		this.fileUpTrans.removeFile("mainPcDocRegId");

        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mainPcDocRegId'");

        		if (findRow >= 0)
        		{
        			this.ds_file.deleteRow(findRow);
        		}

        		this.fileUpTrans.removeFile("mainMblDocRegId");

        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mainMblDocRegId'");

        		if (findRow >= 0)
        		{
        			this.ds_file.deleteRow(findRow);
        		}
        	}

        	if (this.rdo_exhbnSprCd.value == "10")
        	{
        		// 10 : 서브원추천상품

        		this.ds_exhbnInfo.setColumn(0, "BNR_PC_DOC_REG_ID", "");
        		this.ds_exhbnInfo.setColumn(0, "BNR_MBL_DOC_REG_ID", "");

        		this.edt_bnrPcDocRegIdNm.set_value("");
        		this.edt_bnrMblDocRegIdNm.set_value("");

        		this.fileUpTrans.removeFile("bnrPcDocRegId");

        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'bnrPcDocRegId'");

        		if (findRow >= 0)
        		{
        			this.ds_file.deleteRow(findRow);
        		}

        		this.fileUpTrans.removeFile("bnrMblDocRegId");

        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'bnrMblDocRegId'");

        		if (findRow >= 0)
        		{
        			this.ds_file.deleteRow(findRow);
        		}
        	}
        	else
        	{
        		// 20 : 기획전

        		if (this.edt_bnrPcDocRegIdNm.value == "" || this.edt_bnrPcDocRegIdNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "배너 이미지(PC)는")); // 배너 이미지(PC)는 필수 입력항목입니다.
        			return;
        		}

        		if (this.edt_bnrMblDocRegIdNm.value == "" || this.edt_bnrMblDocRegIdNm.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "배너 이미지(모바일)는")); // 배너 이미지(모바일)는 필수 입력항목입니다.
        			return;
        		}
        	}

        	if (this.edt_lpagePcDocRegIdNm.value == "" || this.edt_lpagePcDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "LP 이미지(PC)는")); // LP 이미지(PC)는 필수 입력항목입니다.
        		return;
        	}

        	if (this.edt_lpageMblDocRegIdNm.value == "" || this.edt_lpageMblDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "LP 이미지(모바일)는")); // LP 이미지(모바일)는 필수 입력항목입니다.
        		return;
        	}

        	if (this.ds_gridExhbnCatgDtl.getRowCount() == 0)
        	{
        		alert(this.fn_getMessage("ERRN000001", "기본 상품은")); // 기본 상품은 필수 입력항목입니다.
        		return;
        	}

        	for(var i = 0; i< this.ds_gridExhbnCatgDtl.rowcount; i++)
        	{
        		var sExhbnCatgSeq = this.ds_gridExhbnCatgDtl.getColumn(i, "EXHBN_CATG_SEQ");
        		var sCatgNm = this.ds_gridExhbnCatgDtl.getColumn(i, "CATG_NM");
        		var sCatgDispSo = this.ds_gridExhbnCatgDtl.getColumn(i, "CATG_DISP_SO");

        		if (sCatgNm == "" || sCatgNm == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 명은")); // 카테고리를 추가하면 카테고리 명은 필수 입력항목입니다.
        			return;
        		}

        		if (sCatgDispSo == "" || sCatgDispSo == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 순서는")); // 카테고리를 추가하면 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_gridExhbnCatgDtlTemp.clearData();
        		this.ds_gridExhbnCatgDtlTemp.copyData(this.ds_gridExhbnCatgDtl);
        		this.ds_gridExhbnCatgDtlTemp.filter("CATG_DISP_SO == '" + this.edt_catgDispSo.value + "'");
        		var nCnt = this.ds_gridExhbnCatgDtlTemp.getRowCount();

        		if(nCnt > 1)
        		{
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_gridExhbnCatgPrdDtlTemp.clearData();
        		this.ds_gridExhbnCatgPrdDtlTemp.copyData(this.ds_gridExhbnCatgPrdDtl);
        		this.ds_gridExhbnCatgPrdDtlTemp.filter("EXHBN_CATG_SEQ == '" + sExhbnCatgSeq + "'");

        		if (this.ds_gridExhbnCatgPrdDtlTemp.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000007")); // 카테고리를 추가하면 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	if ( !confirm(this.fn_getMessage("ERRN000043"))) // 등록하시겠습니까?
        	{
        		return;
        	}


        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.rdo_noticSprCd.value != "30" && this.rdo_noticSprCd.value != "50"
        		&& this.rdo_noticSprCd.value != "60" && this.rdo_noticSprCd.value != "70") {
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridExhbnOprUnitList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_gridExhbnOprUnitList.deleteMultiRows(aDelArr);
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 )
        	{
        		if(this.fn_dataCheck(this.ds_file) )
        		{
        			var jsonArray = new Array();

        			for(var i=0; i<this.ds_file.rowcount; i++)
        			{
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				var jsonObj = new Object();

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "mainPcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mainMblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "MAIN_MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "bnrPcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "bnrMblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "BNR_MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "lpagePcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "lpageMblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "cpnPcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "cpnMblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_exhbnInfo.getColumn(0, "CPN_MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}

        				jsonArray.push(jsonObj);
        			}

        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		}
        		else
        		{
        			this.fn_saveExhbnInfo();
        		}
        	}
        	else
        	{
        		this.fn_saveExhbnInfo();
        	}
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 기획전 구분 값 변경 시 항목 설정 함수
         */
        this.fn_exhbnSprCdSet = function()
        {
        	if (this.rdo_exhbnSprCd.value == "10")
        	{
        		// 10 : 서브원추천상품

        		this.cbx_mallSprCd.set_index(0);

        		this.cbx_mallSprCd.set_readonly(true);
        		this.rdo_mainExpsYn.set_enable(true);

        		// 배너 이미지 - PC 파일첨부, 모바일 파일첨부
        		this.btn_bnrPcDocRegId.set_enable(false);
        		this.btn_bnrMblDocRegId.set_enable(false);
        	}
        	else
        	{
        		// 20 : 기획전

        		this.cbx_mallSprCd.set_readonly(false);
        		this.rdo_mainExpsYn.set_enable(true);

        		// 배너 이미지 - PC 파일첨부, 모바일 파일첨부
        		this.btn_bnrPcDocRegId.set_enable(true);
        		this.btn_bnrMblDocRegId.set_enable(true);
        	}
        };

        /**
         * 게시구분 값 변경 시 항목 설정 함수
         */
        this.fn_noticSprCdSet = function()
        {	// SSP-2971
        	if (this.rdo_noticSprCd.value == "30" || this.rdo_noticSprCd.value == "50"
        		|| this.rdo_noticSprCd.value == "60" || this.rdo_noticSprCd.value == "70")
        	{
        		this.grid_OprUnit.set_enable(true);

        		// 로그인운영단위 검색 아이콘
        		this.btn_searchOprUnit.set_enable(true);
        		this.btn_searchOprUnitMulText.set_enable(true);

        		this.chk_notLogn_Inc_Yn.set_enable(true);
        	}
        	else
        	{
        		this.grid_OprUnit.set_enable(false);

        		// 로그인운영단위 검색 아이콘
        		this.btn_searchOprUnit.set_enable(false);
        		this.btn_searchOprUnitMulText.set_enable(false);

        		this.chk_notLogn_Inc_Yn.set_value(false);
        		this.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_exhbnInfo.setColumn(0, "NOTLOGN_INC_YN", "N");
        	}
        };

        /**
         * 몰 구분 값 변경 시 항목 설정 함수
         */
        this.fn_mallSprCdSet = function()
        {
        	if (this.cbx_mallSprCd.value == "10")
        	{
        		// 10 : SSP Mall
        		this.grid_exhbnCatgPrdDtl.setFormatColProperty(6, "size", 80); // 대표상품구분
        	}
        	else
        	{
        		// 20 : R&D Mall
        		this.grid_exhbnCatgPrdDtl.setFormatColProperty(6, "size", 0); // 대표상품구분
        	}

        	if (this.ds_gridExhbnCatgPrdDtl.getCount() == 0)
        	{
        		// 등록된 상품이 없으면

        		if (this.cbx_mallSprCd.value == "10")
        		{
        			// 10 : SSP Mall

        			this.rdo_mainExpsYn.set_enable(true);
        		}
        		else
        		{
        			// 20 : R&D Mall

        			this.rdo_mainExpsYn.set_index(1);

        			this.rdo_mainExpsYn.set_enable(false);

        			this.fn_mainExpsYnSet();
        		}

        		this.fv_mallSprCd = this.cbx_mallSprCd.value;
        	}
        	else
        	{
        		if ( confirm(this.fn_getMessage("ERRN000113"))) // 추가된 기본 상품이 삭제됩니다. 변경하시겠습니까?
        		{
        			// 변경하면

        			if (this.cbx_mallSprCd.value == "10")
        			{
        				// 10 : SSP Mall

        				this.rdo_mainExpsYn.set_enable(true);
        			}
        			else
        			{
        				// 20 : R&D Mall

        				this.rdo_mainExpsYn.set_index(1);

        				this.rdo_mainExpsYn.set_enable(false);

        				this.fn_mainExpsYnSet();
        			}

        			this.ds_gridExhbnCatgDtl.clearData();
        			this.ds_gridExhbnCatgDtlTemp.clearData();
        			this.ds_gridExhbnCatgPrdDtl.clearData();
        			this.ds_gridExhbnCatgPrdDtlTemp.clearData();

        			var sTotText = "(<b v='true'>총 0건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			this.fv_mallSprCd = this.cbx_mallSprCd.value;
        		}
        		else
        		{
        			// 변경안하면

        			if (this.fv_mallSprCd == "10")
        			{
        				this.cbx_mallSprCd.set_index(0);
        			}
        			else if (this.fv_mallSprCd == "20")
        			{
        				this.cbx_mallSprCd.set_index(1);
        			}
        		}
        	}
        };

        /**
         * 메인 노출 여부 값 변경 시 항목 설정 함수
         */
        this.fn_mainExpsYnSet = function()
        {
        	if (this.rdo_mainExpsYn.value == "Y")
        	{
        		// dataset 영역
        		//this.ds_exhbnCatgPrdDtl.clearData();

        		// Static 영역
        		this.sta_mainImage.uEssentiel = "true";
        		this.sta_prdIdNm.uEssentiel = "true";

        		// 입력 항목 영역
        		//this.edt_mainPcDocRegIdNm.set_value("");
        		//this.edt_mainMblDocRegIdNm.set_value("");
        		//this.edt_prdIdNm.set_value("");

        		// 메인 이미지 - PC 첨부, 모바일 첨부, 메인 노출 상품  항목 활성화
        		this.edt_mainPcDocRegIdNm.set_readonly(true);
        		this.edt_mainMblDocRegIdNm.set_readonly(true);
        		this.edt_prdIdNm.set_readonly(true);

        		// 메인 이미지 - PC 파일첨부, PC 삭제 아이콘, 모바일 파일첨부, 모바일 삭제 아이콘
        		this.btn_mainPcDocRegId.set_enable(true);
        		this.btn_mainPcDocRegIdClear.set_enable(true);
        		this.btn_mainMblDocRegId.set_enable(true);
        		this.btn_mainMblDocRegIdClear.set_enable(true);

        		// 메인 노출 상품 검색 아이콘, 메인 노출 상품 삭제 아이콘
        		this.btn_searchPrdId0.set_enable(true);
        		this.btn_searchPrdIdClear0.set_enable(true);
        	}
        	else
        	{
        		// dataset 영역
        		//this.ds_exhbnCatgPrdDtl.clearData();

        		// Static 영역
        		this.sta_mainImage.uEssentiel = "false";
        		this.sta_prdIdNm.uEssentiel = "false";

        		// 입력 항목 영역
        		//this.edt_mainPcDocRegIdNm.set_value("");
        		//this.edt_mainMblDocRegIdNm.set_value("");
        		//this.edt_prdIdNm.set_value("");

        		// 메인 이미지 - PC 첨부, 모바일 첨부, 메인 노출 상품  항목 비활성화
        		this.edt_mainPcDocRegIdNm.set_readonly(true);
        		this.edt_mainMblDocRegIdNm.set_readonly(true);
        		this.edt_prdIdNm.set_readonly(true);

        		// 메인 이미지 - PC 파일첨부, PC 삭제 아이콘, 모바일 파일첨부, 모바일 삭제 아이콘
        		this.btn_mainPcDocRegId.set_enable(false);
        		this.btn_mainPcDocRegIdClear.set_enable(true);
        		this.btn_mainMblDocRegId.set_enable(false);
        		this.btn_mainMblDocRegIdClear.set_enable(true);

        		// 메인 노출 상품 검색 아이콘, 메인 노출 상품 삭제 아이콘
        		this.btn_searchPrdId0.set_enable(false);
        		this.btn_searchPrdIdClear0.set_enable(false);
        	}
        };

        /**
         * 글자 byte 체크 함수
         */
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0)
        	{
        		count = 0;
        	}

        	if(count <= maxByte)
        	{
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "00")
        		{
        			this.sta_exhbnNmSize.set_text(expsText);
        		}
        		else if (sGubun == "09")
        		{
        			this.sta_exhbnDescSize.set_text(expsText);
        		}

        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	//trace(tempVal + " / " + count);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "00")
        	{
        		this.edt_exhbnNm.set_value("");
        		this.edt_exhbnNm.set_value(tempVal);
        		this.sta_exhbnNmSize.set_text(expsText);
        	}
        	else if (sGubun == "09")
        	{
        		this.txt_exhbnDesc.set_value("");
        		this.txt_exhbnDesc.set_value(tempVal);
        		this.sta_exhbnDescSize.set_text(expsText);
        	}
        };

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        			this.fv_mallSprCd = "10";

        			break;

        		case "FORM_INIT" :

        			// 입력 항목 초기화

        			// dataset 영역
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "CO_CD", this.fv_coCd);

        			this.ds_searchOprUnitCheckList.clearData();
        			this.ds_oprUnitList.clearData();
        			this.ds_searchPrdIdCheckList.clearData();
        			this.ds_prdInfoList.clearData();

        			this.ds_exhbnInfo.clearData();
        			var nRow = this.ds_exhbnInfo.addRow();

        			this.ds_exhbnInfo.setColumn(nRow, "CO_CD", this.fv_coCd);

        			this.ds_gridExhbnOprUnitList.clearData();
        			this.ds_exhbnCatgPrdDtl.clearData();
        			this.ds_gridExhbnCatgDtl.clearData();
        			this.ds_gridExhbnCatgPrdDtl.clearData();

        			// 입력 항목 영역
        			this.rdo_exhbnSprCd.set_index(0);
        			this.rdo_noticSprCd.set_index(0);
        			this.cbx_mallSprCd.set_index(0);
        			this.rdo_mainExpsYn.set_index(1);
        			this.cal_dispStrDt.set_value("");
        			this.cal_dispEndDt.set_value("");
        			this.edt_exhbnNm.set_value("");
        			this.sta_exhbnNmSize.set_text("(<fc v='red'>0</fc> / 300 Byte)");
        			this.edt_mainPcDocRegIdNm.set_value("");
        			this.edt_mainMblDocRegIdNm.set_value("");
        			this.edt_prdIdNm.set_value("");
        			this.edt_bnrPcDocRegIdNm.set_value("");
        			this.edt_bnrMblDocRegIdNm.set_value("");
        			this.edt_lpagePcDocRegIdNm.set_value("");
        			this.edt_lpageMblDocRegIdNm.set_value("");
        			this.edt_cpnEvtNo.set_value("");
        			this.edt_cpnEvtNoNm.set_value("");
        			this.edt_cpnPcDocRegIdNm.set_value("");
        			this.edt_cpnMblDocRegIdNm.set_value("");
        			this.txt_exhbnDesc.set_value("");
        			this.sta_exhbnDescSize.set_text("(<fc v='red'>0</fc> / 2000 Byte)");

        			this.edt_catgNm.set_value("");
        			this.edt_catgDispSo.set_value("");

        			this.rdo_useYn.set_index(0);

        			this.cbx_mallSprCd.set_readonly(true);

        			// SSP-2971
        			this.chk_notLogn_Inc_Yn.set_enable(true);
        			this.chk_notLogn_Inc_Yn.set_value(false);
        			this.ds_exhbnInfo.setColumn(0, "NOTLOGN_INC_YN", "N");

        			// 메인 이미지 - PC 첨부, 모바일 첨부, 메인 노출 상품  항목 비활성화
        			this.edt_mainPcDocRegIdNm.set_readonly(true);
        			this.edt_mainMblDocRegIdNm.set_readonly(true);
        			this.edt_prdIdNm.set_readonly(true);
        			this.edt_bnrPcDocRegIdNm.set_readonly(true);
        			this.edt_bnrMblDocRegIdNm.set_readonly(true);
        			this.edt_lpagePcDocRegIdNm.set_readonly(true);
        			this.edt_lpageMblDocRegIdNm.set_readonly(true);
        			this.edt_cpnEvtNoNm.set_readonly(true);
        			this.edt_cpnPcDocRegIdNm.set_readonly(true);
        			this.edt_cpnMblDocRegIdNm.set_readonly(true);

        			// 버튼 영역

        			// 로그인운영단위 검색, 로그인운영단위 멀티텍스트 아이콘
        			this.btn_searchOprUnit.set_enable(false);
        			this.btn_searchOprUnitMulText.set_enable(false);

        			//SSP-2637 : 목록 미노출 체크박스 추가
        			this.chk_expsYn.set_enable(true);
        			this.chk_expsYn.set_value("Y");
        			this.ds_exhbnInfo.setColumn(nRow, "EXPS_YN", "Y");


        			// 메인 이미지 - PC 파일첨부, PC 삭제 아이콘, 모바일 파일첨부, 모바일 삭제 아이콘
        			this.btn_mainPcDocRegId.set_enable(false);
        			this.btn_mainPcDocRegIdClear.set_enable(true);
        			this.btn_mainMblDocRegId.set_enable(false);
        			this.btn_mainMblDocRegIdClear.set_enable(true);

        			// 메인 노출 상품 검색 아이콘, 메인 노출 상품 삭제 아이콘
        			this.btn_searchPrdId0.set_enable(false);
        			this.btn_searchPrdIdClear0.set_enable(false);

        			// 배너 이미지 - PC 파일첨부, 모바일 파일첨부
        			this.btn_bnrPcDocRegId.set_enable(false);
        			this.btn_bnrMblDocRegId.set_enable(false);

        			// LP 이미지 - PC 파일첨부, 모바일 파일첨부
        			this.btn_lpagePcDocRegId.set_enable(true);
        			this.btn_lpageMblDocRegId.set_enable(true);

        			// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘
        			this.btn_searchCpnEvtNo.set_enable(true);
        			this.btn_searchCpnEvtNoClear.set_enable(true);

        			// 쿠폰 이미지 - PC 파일첨부, PC 삭제 아이콘, 모바일 파일첨부, 모바일 삭제 아이콘
        			this.btn_cpnPcDocRegId.set_enable(true);
        			this.btn_cpnPcDocRegIdClear.set_enable(true);
        			this.btn_cpnMblDocRegId.set_enable(true);
        			this.btn_cpnMblDocRegIdClear.set_enable(true);

        			// 카테고리 삭제, 카테고리 추가, 상품검색 버튼
        			this.btn_catgDelete.set_enable(true);
        			this.btn_catgAdd.set_enable(true);
        			this.btn_searchPrdId1.set_enable(true);
        			this.btn_searchPrdIdMulText1.set_enable(true);

        			// 취소, 등록 버튼
        			this.btn_cancel.set_enable(true);
        			this.btn_write.set_enable(true);

        			// grid 영역
        			this.grid_OprUnit.nodatatext = "추가한 항목이 없습니다.";
        			this.grid_exhbnCatgDtl.nodatatext = "추가한 항목이 없습니다.";
        			this.grid_exhbnCatgPrdDtl.nodatatext = "추가한 항목이 없습니다.";

        			// 운영단위 grid 항목 비활성화
        			this.grid_OprUnit.set_enable(false);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 공통코드 값 조회
        			this.fn_comCdList();

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }










        /* ===============================================================
         * 6-1. 파일
         * =============================================================== */

        /**
         * 해당 row에 파일 추가
         */
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        /**
         * 업로드용 Virtual 파일 onsuccess 이벤트
         */
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1)
        	{
        		// 파일사이즈 체크

        		obj.getFileSize();
        	}

        	if (e.reason == 9)
        	{
        		if( !this.fn_fileSizeCheck(obj, e.filesize) )
        		{
        			return false;
        		}

        		// 같은 이름의 파일을 업로드했을 경우 대비

        		//this.ds_exhbnInfo.set_updatecontrol(false);
        		//this.ds_exhbnInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		//this.ds_exhbnInfo.set_updatecontrol(true);

        		if(this.curImgBtnName == "btn_mainPcDocRegId")
        		{
        			this.fileUpTrans.removeFile("mainPcDocRegId");

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mainPcDocRegId");

        			this.edt_mainPcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("mainPcDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_mainMblDocRegId")
        		{
        			this.fileUpTrans.removeFile("mainMblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mainMblDocRegId");

        			this.edt_mainMblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("mainMblDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_bnrPcDocRegId")
        		{
        			this.fileUpTrans.removeFile("bnrPcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "bnrPcDocRegId");

        			this.edt_bnrPcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("bnrPcDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_bnrMblDocRegId")
        		{
        			this.fileUpTrans.removeFile("bnrMblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "bnrMblDocRegId");

        			this.edt_bnrMblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("bnrMblDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_lpagePcDocRegId")
        		{
        			this.fileUpTrans.removeFile("lpagePcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "lpagePcDocRegId");

        			this.edt_lpagePcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("lpagePcDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_lpageMblDocRegId")
        		{
        			this.fileUpTrans.removeFile("lpageMblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "lpageMblDocRegId");

        			this.edt_lpageMblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("lpageMblDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_cpnPcDocRegId")
        		{
        			this.fileUpTrans.removeFile("cpnPcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "cpnPcDocRegId");

        			this.edt_cpnPcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("cpnPcDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_cpnMblDocRegId")
        		{
        			this.fileUpTrans.removeFile("cpnMblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "cpnMblDocRegId");

        			this.edt_cpnMblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("cpnMblDocRegId", obj)
        		}
        	}
        };

        /**
         * 업로드용 Virtual 파일 oneroor 이벤트
         */
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : " + e.errortype + "\n";
        	msg += "errormsg : " + e.errormsg + "\n";
        	msg += "statuscode : " + e.statuscode;

        	alert(msg);

        	this.nRow = -1;
        };

        /**
         * 파일 확장자 검증
         */
        this.fn_fileSizeCheck = function(obj, fileSize)
        {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1);	// 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize )
        	{
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 )
        	{
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        /**
         * 파일 DIALOG CLOSE 이벤트
         */
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles))
        	{
        		return;
        	}

        	var vFile = e.virtualfiles[0];

        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        /**
         * 다운 완료
         */
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        /**
         * 다운 실패
         */
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        /**
         * 저장 -> 파일 업로드 성공 시
         */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];

        	if(objCallDs.rowcount  == 0 )
        	{
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++)
        	{
        		/*
        		if(objCallDs.getColumn(i, "result") == "none")
        		{
        			alert("파일이 없습니다.");
        			return;
        		}
        		*/

        		if(objCallDs.getColumn(i, "imgType") == "mainPcDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "MAIN_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "mainMblDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "MAIN_MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "bnrPcDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "BNR_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "bnrMblDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "BNR_MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "lpagePcDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "LPAGE_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "lpageMblDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "LPAGE_MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "cpnPcDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "CPN_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "cpnMblDocRegId")
        		{
        			this.ds_exhbnInfo.setColumn(0, "CPN_MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.ds_file.clearData();			// 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	// 신규 데이터 등록
        	this.fn_saveExhbnInfo();
        };

        /**
         * 파일전송 실패
         */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_02_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.btn_searchOprUnit.addEventHandler("onclick",this.btn_searchOprUnit_onclick,this);
            this.grid_OprUnit.addEventHandler("oncellclick",this.grid_OprUnit_oncellclick,this);
            this.rdo_exhbnSprCd.addEventHandler("onitemchanged",this.rdo_exhbnSprCd_onitemchanged,this);
            this.rdo_mainExpsYn.addEventHandler("onitemchanged",this.rdo_mainExpsYn_onitemchanged,this);
            this.cbx_mallSprCd.addEventHandler("onitemchanged",this.cbx_mallSprCd_onitemchanged,this);
            this.edt_exhbnNm.addEventHandler("onkeyup",this.edt_exhbnNm_onkeyup,this);
            this.btn_searchPrdId0.addEventHandler("onclick",this.btn_searchPrdId0_onclick,this);
            this.btn_searchCpnEvtNo.addEventHandler("onclick",this.btn_searchCpnEvtNo_onclick,this);
            this.txt_exhbnDesc.addEventHandler("onkeyup",this.txt_exhbnDesc_onkeyup,this);
            this.grid_exhbnCatgDtl.addEventHandler("oncellclick",this.grid_exhbnCatgDtl_oncellclick,this);
            this.grid_exhbnCatgPrdDtl.addEventHandler("oncellclick",this.grid_exhbnCatgPrdDtl_oncellclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_searchPrdId1.addEventHandler("onclick",this.btn_searchPrdId1_onclick,this);
            this.btn_catgDelete.addEventHandler("onclick",this.btn_catgDelete_onclick,this);
            this.btn_catgAdd.addEventHandler("onclick",this.btn_catgAdd_onclick,this);
            this.btn_searchPrdIdClear0.addEventHandler("onclick",this.btn_searchPrdIdClear0_onclick,this);
            this.btn_searchCpnEvtNoClear.addEventHandler("onclick",this.btn_searchCpnEvtNoClear_onclick,this);
            this.btn_searchOprUnitMulText.addEventHandler("onclick",this.btn_searchOprUnitMulText_onclick,this);
            this.btn_searchPrdIdMulText1.addEventHandler("onclick",this.btn_searchPrdIdMulText1_onclick,this);
            this.btn_mainPcDocRegId.addEventHandler("onclick",this.btn_mainPcDocRegId_onclick,this);
            this.btn_mainPcDocRegIdClear.addEventHandler("onclick",this.btn_mainPcDocRegIdClear_onclick,this);
            this.btn_mainMblDocRegId.addEventHandler("onclick",this.btn_mainMblDocRegId_onclick,this);
            this.btn_mainMblDocRegIdClear.addEventHandler("onclick",this.btn_mainMblDocRegIdClear_onclick,this);
            this.btn_bnrPcDocRegId.addEventHandler("onclick",this.btn_bnrPcDocRegId_onclick,this);
            this.btn_bnrMblDocRegId.addEventHandler("onclick",this.btn_bnrMblDocRegId_onclick,this);
            this.btn_lpagePcDocRegId.addEventHandler("onclick",this.btn_lpagePcDocRegId_onclick,this);
            this.btn_lpageMblDocRegId.addEventHandler("onclick",this.btn_lpageMblDocRegId_onclick,this);
            this.btn_cpnPcDocRegId.addEventHandler("onclick",this.btn_cpnPcDocRegId_onclick,this);
            this.btn_cpnPcDocRegIdClear.addEventHandler("onclick",this.btn_cpnPcDocRegIdClear_onclick,this);
            this.btn_cpnMblDocRegId.addEventHandler("onclick",this.btn_cpnMblDocRegId_onclick,this);
            this.btn_cpnMblDocRegIdClear.addEventHandler("onclick",this.btn_cpnMblDocRegIdClear_onclick,this);
            this.btn_bnrPcDocRegIdClear.addEventHandler("onclick",this.btn_bnrPcDocRegIdClear_onclick,this);
            this.btn_bnrMblDocRegIdClear.addEventHandler("onclick",this.btn_bnrMblDocRegIdClear_onclick,this);
            this.btn_lpagePcDocRegIdClear.addEventHandler("onclick",this.btn_lpagePcDocRegIdClear_onclick,this);
            this.btn_lpageMblDocRegIdClear.addEventHandler("onclick",this.btn_lpageMblDocRegIdClear_onclick,this);
            this.sta_lstViewTypeCd.addEventHandler("onclick",this.sta_lstViewTypeCd_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
