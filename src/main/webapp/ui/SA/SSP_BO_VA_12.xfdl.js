(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_12");
            this.set_titletext("전문관 등록/상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_expsNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_brndhlInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PC_BNR_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_BNR_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_MNU_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_BNR_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_BNR_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_BNR_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_BNR_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_BNR_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_BNR_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_BNR_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_BNR_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_MNU_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_MNU_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_MNU_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_MNU_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBrndhlCatgDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBrndhlCatgPrdDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBrndhlCatgDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_DISP_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBrndhlCatgPrdDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BRNDHL_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lstViewTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static21","20","262",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","510",null,"99","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","465",null,"70","30",null,"-226",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"70","30","btn_cancel:4","-226",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","539",null,"70","30",null,"-226",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","418",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","901",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","293",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","83",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expsNoticSprCd","20","83","130","180",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_expsNoticSprCd","158","97","151","134",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_expsNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","319","93","591","157",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","grd_oprUnitList:4","92","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","btn_oprUnitMulti:2","92","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","20","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","160","297","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","277","297","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","264","277","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","901","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","905","150","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("19");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcBnrAtflNm","260","422","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("11111");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcBnrImgAdd","684","422","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcBnrImgDelete","748","422","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","245","95","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","324",null,"35","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_brndhlNm","20","324","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전문관 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_brndhlNm","160","328",null,"24","120",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_brndhlNmSize","edt_brndhlNm:4","328","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_brndhlDesc","20","510","130","99",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("전문관 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_brndhlDesc","160","515",null,"75","30",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_brndhlDescSize","835","590",null,"18","35",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("(0 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","986","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcBnrImgSize","777","422","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mallSprCd","20","262","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mallSprCd","160","266","330","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_mallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","20","449",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblBnrAtflNm","260","453","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("11111");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblBnrImgAdd","684","453","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblBnrImgDelete","748","453","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblBnrImgSize","777","453","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","480",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnuImg","20","480","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("GNB 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcMnuAtflNm","260","484","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("11111");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcMnuImgAdd","684","484","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcMnuImgDelete","748","484","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcMnuImgSize","777","484","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_brndhlCatgDtl","20","639","130","230",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdBrndhlCatgDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 명\"/><Cell col=\"1\" text=\"순서\"/></Band><Band id=\"body\"><Cell text=\"bind:CATG_NM\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CATG_DISP_SO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","160","639",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgNm","160","639","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("카테고리 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgDispSo","550","639","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("카테고리 순서");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgNm","300","643","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgDispSo","690","643","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","160","670",null,"199","20",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pnbStoryCatgPrdDtl","160","670","130","199",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("등록 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_brndhlCatgPrdDtl","300","708",null,"161","30",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdBrndhlCatgPrdDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"제조원\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"대표상품구분\"/><Cell col=\"7\" text=\"SSP상품상태\"/><Cell col=\"8\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;삭제&lt;/u&gt;&quot;\" text=\"bind:DELETE_ROW\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:ATTR_VAL\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:MNFR\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"7\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdIdMulText",null,"681","79","24","31",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdId","807","681",null,"24","btn_searchPrdIdMulText:4",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgAdd","724","681",null,"24","btn_searchPrdId:4",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("카테고리 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgDelete","641","681",null,"24","btn_catgAdd:4",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("카테고리 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountPrdDtl","300","687","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","19","609","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("기본 상품 구성");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","19","871","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bnrImg","20","418","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("배너이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1040","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcBnrImg","149","418","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblBnrImg","149","449","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcGnbImg","149","480","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","51",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lstViewTypeCd","20","20","130","64",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("목록보기타입코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pcLstViewTypeCd","287","24","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_lstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcLstViewTypeCd","149","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblLstViewTypeCd","149","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mblLstViewTypeCd","287","55","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_lstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","159","239","134","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02","20","356","752","32",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20","356","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("URL(PC)");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","704","360","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("미리보기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_foUrl","160","360","540","24",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02_00","20","387","752","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00","20","387","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("URL(모바일)");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mobilePrev","704","391","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("미리보기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_foMobileUrl","160","391","540","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_expsYn","306","907","99","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("목록 미노출");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","770","356",null,"63","20",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcBnrImgSize00","790","360","172","26",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_textAlign("left");
            obj.set_text("미리보기 및 등록 상품 노출은");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcBnrImgSize00_00","790","389","173","26",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_textAlign("left");
            obj.set_text("색인 이후 확인 가능합니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_brndhlNm","value","ds_brndhlInfo","BRNDHL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_expsNoticSprCd","value","ds_brndhlInfo","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_dispStrDt","value","ds_brndhlInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_dispEndDt","value","ds_brndhlInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdo_useYn","value","ds_brndhlInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_pcBnrAtflNm","value","ds_brndhlInfo","PC_BNR_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_brndhlDesc","value","ds_brndhlInfo","BRNDHL_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cbo_mallSprCd","value","ds_brndhlInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mblBnrAtflNm","value","ds_brndhlInfo","MBL_BNR_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_pcMnuAtflNm","value","ds_brndhlInfo","PC_MNU_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_catgNm","value","ds_grdBrndhlCatgDtl","CATG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_catgDispSo","value","ds_grdBrndhlCatgDtl","CATG_DISP_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdo_pcLstViewTypeCd","value","ds_brndhlInfo","PC_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","rdo_mblLstViewTypeCd","value","ds_brndhlInfo","MBL_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","chk_notLogn_Inc_Yn","value","ds_brndhlInfo","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","chk_expsYn","value","ds_brndhlInfo","EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_12.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_12.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_12.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_VA_12.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 전문관 등록/상세/수정
        CREATION DATES : 2023.03.14
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.parent.coCd;
        this.brndhlSeq = this.parent.brndhlSeq;
        this.maxFileSize = "10";
        var fv_foDomainUrl = "";			// fo 도메인 주소
        var fv_foBoDomainUrl = "";			// fo bo 미리보기 도메인 주소
        var fv_foMobileDomainUrl = "";		// fo 모바일 도메인 주소
        var fv_foBoMobileDomainUrl = "";	// fo bo 미리보기 모바일 도메인 주소
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "BRNDHL_SEQ", this.brndhlSeq);

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_expsNoticSprCd=ds_output1 ds_mallSprCd=ds_output2 ds_lstViewTypeCd=ds_output3";
        	var arg = "";

        	//조회 값 담기
        	// SSP-2971
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD,MALL_SPR_CD,LST_VIEW_TYPE_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회
        this.fn_search = function() {
        	var sSvcId = "selectBrndhlInfo";
        	var sUrl = "/sa/brndhl/select-brndhl-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_brndhlInfo=ds_output1 ds_oprUnitList=ds_output2 ds_grdBrndhlCatgDtl=ds_output3 ds_grdBrndhlCatgPrdDtl=ds_output4";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "saveBrndhlInfo";
        	var sUrl = "/sa/brndhl/save-brndhl-info.do";
        	var inDs = "ds_save=ds_brndhlInfo:A ds_oprUnitList=ds_oprUnitList:A ds_save2=ds_grdBrndhlCatgDtl:U ds_save3=ds_grdBrndhlCatgPrdDtl:U"
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 삭제
        this.fn_delete = function() {
        	var sSvcId = "deleteBrndhlnfo";
        	var sUrl = "/sa/brndhl/delete-brndhl-info.do";
        	var inDs = "ds_delete=ds_brndhlInfo"
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var inDs = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var outDs = "ds_rtnOprUnitCheckList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /**
         * 상품ID 유효성 검사
         */
        this.fn_prdIdCheck = function()
        {
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.cbo_mallSprCd.value);

        	var sSvcId = "prdIdCheck";
        	var sUrl = "/sa/com/select-prd-id-check-list.do";
        	var inDs = "ds_search=ds_search:A ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var outDs = "ds_prdInfoList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			if(!this.gfn_isNull(this.brndhlSeq)) {

        				this.fn_search();

        				this.btn_save.set_text("저장");

        			} else {

        				// 등록 위한 화면 세팅
        				this.ds_brndhlInfo.addRow();
        				this.ds_brndhlInfo.setColumn(0, "CO_CD", this.fv_coCd);
        				this.ds_brndhlInfo.setColumn(0, "BRNDHL_SEQ", this.brndhlSeq);
        				this.rdo_pcLstViewTypeCd.set_index(0);
        				this.rdo_mblLstViewTypeCd.set_index(0);
        				this.rdo_expsNoticSprCd.set_index(0);
        				this.cbo_mallSprCd.set_index(0);
        				this.rdo_useYn.set_index(0);

        				// 미로그인 포함 체크박스
        				this.chk_notLogn_Inc_Yn.set_enable(true);
        			    this.chk_notLogn_Inc_Yn.set_value(false);
        			    this.ds_brndhlInfo.setColumn(0, "NOTLOGN_INC_YN", "N");

        				// SSP-3010
        				// URL 미리보기 비활성화
        				this.edt_foUrl.set_enable(false);
        				this.edt_foMobileUrl.set_enable(false);
        				this.btn_prev.set_enable(false);
        				this.btn_mobilePrev.set_enable(false);

        				// 목록 미노출 체크박스
        				this.chk_expsYn.set_enable(true);
        				this.chk_expsYn.set_value("Y");
        				this.ds_brndhlInfo.setColumn(nRow, "EXPS_YN", "Y");

        				this.fn_chgExpsNoticSprCd();

        				this.btn_delete.set_visible(false); // 삭제버튼 미노출
        				this.btn_save.set_left(this.btn_save.getOffsetLeft() - 37);
        				this.btn_cancel.set_left(this.btn_cancel.getOffsetLeft() - 37);

        				this.btn_save.set_text("등록");
        			}

        			break;

        		case "selectBrndhlInfo" :
        			this.fn_setLenByte(this.edt_brndhlNm.value, 300, "brndhlNm");
        			this.fn_setLenByte(this.edt_brndhlDesc.value, 2000, "brndhlDesc");
        			if( this.ds_oprUnitList.rowcount == 0 ) {
        				this.ds_oprUnitList.copyData(this.ds_oprUnitList_copy);
        			}

        			this.fn_chgExpsNoticSprCd();

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			// 첫번째 카테고리의 상품 조회
        			var nRow = this.ds_grdBrndhlCatgDtl.rowposition;
        			if(nRow >= 0) {
        				var sBrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRow, "BRNDHL_CATG_SEQ");
        				this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + sBrndhlCatgSeq + "'");
        			} else {
        				this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == 'NOTHING'");
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			// SSP-3010
        			// URL 미리보기 활성화
        			this.edt_foUrl.set_readonly(true);
        			this.edt_foMobileUrl.set_readonly(true);
        			this.btn_prev.set_enable(true);
        			this.btn_mobilePrev.set_enable(true);

        			// 미리보기 설정
        			var sFoDomain = "";	// 도메인
        			var sFoParameter = ""; // 파라미터

        			if (this.cbo_mallSprCd.value == "10") {	    // SSP Mall

        				sFoDomain = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP");
        			}
        			else if (this.cbo_mallSprCd.value == "20") {	// R&D Mall

        				sFoDomain = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_RND");
        			}

        			sFoParameter = sFoParameter + "?brndhlSeq=" + this.ds_brndhlInfo.getColumn(0, "BRNDHL_SEQ");

        			var sFoUrl = ""; // PC URL
        			var sFoMobileUrl = ""; // MOBILE URL

        			sFoUrl = sFoDomain + "/sa/disp/ssp-pw-jm-01-bo.do" + sFoParameter;
        			sFoMobileUrl = sFoDomain + "/mo/sa/disp/ssp-mw-jm-01-bo.do" + sFoParameter;

        			// PC
        			this.fv_foDomainUrl = sFoUrl.replace("-bo", ""); // 화면에 보여지는 URL
        			this.fv_foBoDomainUrl = sFoUrl; // 실제 URL(미리보기 URL)
        			// MOBILE
        			this.fv_foMobileDomainUrl  = sFoMobileUrl.replace("-bo", ""); // 화면에 보여지는 URL
        			this.fv_foBoMobileDomainUrl = sFoMobileUrl; // 실제 URL(미리보기 URL)

        			this.edt_foUrl.set_value(this.fv_foDomainUrl);
        			this.edt_foMobileUrl.set_value(this.fv_foMobileDomainUrl);

        			break;

        		case "saveBrndhlInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.opener.fn_search(0);
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        			break;
        		case "deleteBrndhlnfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        				this.opener.fn_search();
        				this.close();
        			} else {
        				alert(this.fn_getMessage("ERRN000032")); // 삭제에 실패하였습니다.
        			}
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if(sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if(tempOprUnitId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if(sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_oprUnitList.setColumn(nRow, "BRNDHL_SEQ", "");
        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if(totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "prdIdCheck" :

        			var tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++) {
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");

        				if(this.gfn_isNull(sPrdNm)) {
        					tempPrdId = tempPrdId + sPrdIdView + ",";
        				}
        			}

        			tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);

        			if(tempPrdId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000025", tempPrdId));
        				alert(this.fn_getMessage("ERRN000025", tempPrdId)); // 없는 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}

        			var nRow = this.ds_grdBrndhlCatgDtl.rowposition;	// this.grd_brndhlCatgDtl.currentrow;
        			var sbrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRow, "BRNDHL_CATG_SEQ");

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

        				if(!this.gfn_isNull(sPrdNm)) {
        					var findRow = this.ds_grdBrndhlCatgPrdDtl.findRowExpr("PRD_ID == '" + sPrdId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_grdBrndhlCatgPrdDtl.addRow();

        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "BRNDHL_SEQ", "");
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "BRNDHL_CATG_SEQ", sbrndhlCatgSeq);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_ID", sPrdId);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", sPrdIdView);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_NM", sPrdNm);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "ATTR_VAL", sAttrVal);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "MNFR", sMnfr);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", sPubOnlySprNm);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", sReprPrdSprNm);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", sPrdUseYnNm);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", sDispStatsNm);
        						this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempPrdId = tempPrdId + sPrdIdView + ",";
        					}
        				}
        			}

        			if(totalCount2 > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + sbrndhlCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		default :

        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");
        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_oprUnitList.setColumn(nRow, "BRNDHL_SEQ", "");
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if(totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_oprUnitMultiText" :

        			var retValue = retObj.textValue;

        			if(retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if(sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_searchPrdId" :

        			var nRow = this.ds_grdBrndhlCatgDtl.rowposition;	// this.grd_brndhlCatgDtl.currentrow;
        			var sBrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRow, "BRNDHL_CATG_SEQ");

        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_grdBrndhlCatgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_grdBrndhlCatgPrdDtl.addRow();
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "BRNDHL_SEQ", "");
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "BRNDHL_CATG_SEQ", sBrndhlCatgSeq);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "ATTR_VAL", rowData.ATTR_VAL);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "MNFR", rowData.MNFR_NM);
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", "");
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", "");
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", "");
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "DISP_STATS_NM", "");
        					this.ds_grdBrndhlCatgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        				} else {
        					totalCount2 = totalCount2 + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}

        			if(totalCount2 > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + sBrndhlCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "btn_searchPrdIdMulText" :

        			var retValue = retObj.textValue;

        			if(retValue != "") {
        				this.ds_searchPrdIdCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sPrdId = sTempValue[x];

        					if(sPrdId != "") {
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
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 초기 설정
        	this.sta_expsNoticSprCd.uEssentiel = "true";
        	this.sta_mallSprCd.uEssentiel = "true";
        	this.sta_brndhlNm.uEssentiel = "true";
        	this.sta_dispPeriod.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";

        	// grid 초기 설정
        	this.grd_oprUnitList.uSortFlag = "true";
        	this.grd_oprUnitList.uServerSortFlag = "false";
        	this.grd_oprUnitList.uCellSizeType = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var expsText = "";

        	var count = 0;
        	if(!this.gfn_isNull(sVal)) {
        		count = nexacro._getUtf8Length(sVal);
        	}

        	if(count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if(sGubun == "brndhlNm") {
        			this.sta_brndhlNmSize.set_text(expsText);
        		} else if(sGubun == "brndhlDesc") {
        			this.sta_brndhlDescSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if(sGubun == "brndhlNm") {
        		this.edt_brndhlNm.set_value("");
        		this.edt_brndhlNm.set_value(tempVal);
        		this.sta_brndhlNmSize.set_text(expsText);
        	} else if(sGubun == "brndhlDesc") {
        		this.edt_brndhlDesc.set_value("");
        		this.edt_brndhlDesc.set_value(tempVal);
        		this.sta_brndhlDescSize.set_text(expsText);
        	}
        };

        // 게시구분코드 변경
        this.fn_chgExpsNoticSprCd = function() {
        	//SSP-2971
        	if(this.rdo_expsNoticSprCd.value == "30" || this.rdo_expsNoticSprCd.value == "50"
        		|| this.rdo_expsNoticSprCd.value == "60" || this.rdo_expsNoticSprCd.value == "70") {
        		this.grd_oprUnitList.set_enable(true);

        		this.btn_oprUnitMulti.set_enable(true);
        		this.btn_oprUnitMultiText.set_enable(true);

        		this.chk_notLogn_Inc_Yn.set_enable(true);
        	} else {
        		this.grd_oprUnitList.set_enable(false);

        		this.btn_oprUnitMulti.set_enable(false);
        		this.btn_oprUnitMultiText.set_enable(false);

        		this.chk_notLogn_Inc_Yn.set_value(false);
        		this.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_brndhlInfo.setColumn(0, "NOTLOGN_INC_YN", "N");

        	}
        }

        /**
         * 몰 구분 값 변경 시 항목 설정 함수
         */
        this.fn_mallSprCdSet = function()
        {
        	// 등록된 상품이 있으면
        	if(this.ds_grdBrndhlCatgPrdDtl.getCount() != 0) {
        		if(confirm(this.fn_getMessage("ERRN000114"))) { // 등록/추가된 기본 상품이 삭제됩니다. 변경하시겠습니까?
        			var aDelArr1 = new Array();

        			for(var i = 0; i< this.ds_grdBrndhlCatgDtl.rowcount; i++) {
        				aDelArr1.push(i);
        			}

        			// 기본 상품 카테고리 삭제
        			this.ds_grdBrndhlCatgDtl.deleteMultiRows(aDelArr1);

        			var aDelArr2 = new Array();
        			this.ds_grdBrndhlCatgPrdDtl.filter(""); // 적용된 필터 해제
        			for(var i = 0; i< this.ds_grdBrndhlCatgPrdDtl.rowcount; i++) {
        				aDelArr2.push(i);
        			}

        			// 기본 상품 삭제
        			this.ds_grdBrndhlCatgPrdDtl.deleteMultiRows(aDelArr2);

        			this.ds_grdBrndhlCatgDtlTemp.clearData();
        			this.ds_grdBrndhlCatgPrdDtlTemp.clearData();

        			var sTotText = "(<b v='true'>총 0건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        		} else { // 변경안하면 다시 기존 몰구분코드로 돌아가기
        			if(this.cbo_mallSprCd.value == "10") {
        				this.cbo_mallSprCd.set_index(1);
        			} else if(this.cbo_mallSprCd.value == "20") {
        				this.cbo_mallSprCd.set_index(0);
        			}
        		}
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 몰구분코드 변경
        this.cbo_mallSprCd_onitechanged = function(obj,e)
        {
        	this.fn_mallSprCdSet();
        };

        //운영단위 멀티 검색 버튼
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_coCd
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

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트 검색 버튼
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //게시구분 변경 이벤트
        this.rdo_expsNoticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgExpsNoticSprCd();
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000053"))) { // 취소하시겠습니까?
        		this.close();
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_expsNoticSprCd.value)) {
        		alert(this.fn_getMessage("ERRN000001", "게시구분은")); // 게시구분은 필수 입력항목입니다.
        		this.rdo_expsNoticSprCd.setFocus();
        		return;
        	}
        	// SSP-2971
        	if(this.rdo_expsNoticSprCd.value == "30") {
        		if(this.ds_oprUnitList.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000001", "로그인 운영단위를 선택하시면, 최소 1개의 운영단위는")); // 로그인 운영단위를 선택하시면, 최소 1개의 운영단위는 필수 입력항목입니다.
        			return;
        		}
        	}
        	if(this.gfn_isNull(this.cal_dispStrDt.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전시 시작일은")); // 전시 시작일은 필수 입력항목입니다.
        		this.cal_dispStrDt.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.cal_dispEndDt.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전시 종료일은")); // 전시 종료일은 필수 입력항목입니다.
        		this.cal_dispEndDt.setFocus();
        		return;
        	}
        	if(this.cal_dispStrDt.value > this.cal_dispEndDt.value) {
        		alert(this.fn_getMessage("ERRN000002", "전시 종료일이 전시 시작일보다")); // 전시 종료일이 전시 시작일보다 작습니다.
        		return;
        	}
        // 	if(this.gfn_isNull(this.edt_dispSo.value)) {
        // 		alert(this.fn_getMessage("ERRN000001", "전시순서는")); // 전시순서는 필수 입력항목입니다.
        // 		this.edt_dispSo.setFocus();
        // 		return;
        // 	}
        	if(this.gfn_isNull(this.edt_brndhlNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전문관 명은")); // 전문관 명은 필수 입력항목입니다.
        		this.edt_brndhlNm.setFocus();
        		return;
        	}
        // 	if(this.gfn_isNull(this.edt_pcBnrAtflNm.value)) {
        // 		alert(this.fn_getMessage("ERRN000001", "PC 배너 이미지는")); // PC 배너 이미지는 필수 입력항목입니다.
        // 		this.edt_atflNm.setFocus();
        // 		return;
        // 	}
        // 	if(this.gfn_isNull(this.edt_mblBnrAtflNm.value)) {
        // 		alert(this.fn_getMessage("ERRN000001", "모바일 배너 이미지는")); // 모바일 배너 이미지는 필수 입력항목입니다.
        // 		this.edt_atflNm.setFocus();
        // 		return;
        // 	}
        // 	if(this.gfn_isNull(this.edt_pcMnuAtflNm.value)) {
        // 		alert(this.fn_getMessage("ERRN000001", "PC GNB 이미지는")); // PC GNB 이미지는 필수 입력항목입니다.
        // 		this.edt_atflNm.setFocus();
        // 		return;
        // 	}

        	if (this.ds_grdBrndhlCatgDtl.getRowCount() == 0) {
        		alert(this.fn_getMessage("ERRN000001", "카테고리는")); // 카테고리는 필수 입력항목입니다.
        		return;
        	}

        	for(var i = 0; i< this.ds_grdBrndhlCatgDtl.rowcount; i++) {
        		var sBrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(i, "BRNDHL_CATG_SEQ");
        		var sCatgNm = this.ds_grdBrndhlCatgDtl.getColumn(i, "CATG_NM");
        		var sCatgDispSo = this.ds_grdBrndhlCatgDtl.getColumn(i, "CATG_DISP_SO");

        		if(this.gfn_isNull(sCatgNm)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 명은")); // 카테고리를 추가하면 카테고리 명은 필수 입력항목입니다.
        			return;
        		}

        		if(this.gfn_isNull(sCatgDispSo)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 순서는")); // 카테고리를 추가하면 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdBrndhlCatgDtlTemp.clearData();
        		this.ds_grdBrndhlCatgDtlTemp.copyData(this.ds_grdBrndhlCatgDtl);
        		this.ds_grdBrndhlCatgDtlTemp.filter("CATG_DISP_SO == '" + this.edt_catgDispSo.value + "'");
        		var nCnt = this.ds_grdBrndhlCatgDtlTemp.getRowCount();

        		if(nCnt > 1) {
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdBrndhlCatgPrdDtlTemp.clearData();
        		this.ds_grdBrndhlCatgPrdDtlTemp.copyData(this.ds_grdBrndhlCatgPrdDtl);
        		this.ds_grdBrndhlCatgPrdDtlTemp.filter("BRNDHL_CATG_SEQ == '" + sBrndhlCatgSeq + "'");

        		if(this.ds_grdBrndhlCatgPrdDtlTemp.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000007")); // 카테고리를 추가하면 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	var saveMsg = this.fn_getMessage("ERRN000043"); // 등록하시겠습니까?
        	if(!this.gfn_isNull(this.brndhlSeq)) { // 수정일 경우
        		saveMsg = this.fn_getMessage("ERRN000044"); // 저장하시겠습니까?
        	}
        	if(!confirm(saveMsg)) {
        		return;
        	}

        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.rdo_expsNoticSprCd.value != "30" && this.rdo_expsNoticSprCd.value != "50"
        		&& this.rdo_expsNoticSprCd.value != "60" && this.rdo_expsNoticSprCd.value != "70") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcBnr") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_SEQ") == undefined ? 1 :this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_ID") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_brndhlInfo.getColumn(0, "PC_BNR_ATFL_STOR_PATH") == undefined ? "" :this.ds_brndhlInfo.getColumn(0, "PC_BNR_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_brndhlInfo.getColumn(0, "PC_BNR_ORI_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_BNR_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_brndhlInfo.getColumn(0, "PC_BNR_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_BNR_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblBnr") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_SEQ") == undefined ? 1 :this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_ID") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ATFL_STOR_PATH") == undefined ? "" :this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ORI_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "MBL_BNR_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcMnu") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_SEQ") == undefined ? 1 :this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_ID") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_brndhlInfo.getColumn(0, "PC_MNU_ATFL_STOR_PATH") == undefined ? "" :this.ds_brndhlInfo.getColumn(0, "PC_MNU_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_brndhlInfo.getColumn(0, "PC_MNU_ORI_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_MNU_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_brndhlInfo.getColumn(0, "PC_MNU_ATFL_NM") == undefined ? "" : this.ds_brndhlInfo.getColumn(0, "PC_MNU_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        			}
        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		} else {
        			this.fn_save();
        		}
        	} else {
        		this.fn_save();
        	}
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        // 배너 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		this.fn_delete();
        	}
        };

        //  제목 keyup
        this.edt_brndhlNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "brndhlNm");
        };

        //  프로모션 팝업 설명 keyup
        this.edt_brndhlDesc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "brndhlDesc");
        };

        // 이미지 업로드
        this.btn_imgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 삭제
        this.btn_imgDelete_onclick = function(obj,e)
        {
        	var findRow = -1;
        	if(e.fromobject.id == "btn_pcBnrImgDelete") {
        		this.ds_brndhlInfo.setColumn(0,"PC_BNR_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pcBnr");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcBnr'");
        	} else if(e.fromobject.id == "btn_mblBnrImgDelete") {
        		this.ds_brndhlInfo.setColumn(0,"MBL_BNR_ATFL_NM", "");
        		this.fileUpTrans.removeFile("mblBnr");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblBnr'");
        	} else if(e.fromobject.id == "btn_pcMnuImgDelete") {
        		this.ds_brndhlInfo.setColumn(0,"PC_MNU_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pcMnu");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcMnu'");
        	}

        	if(findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 첨부파일 클릭
        this.edt_atflNm_onclick = function(obj,e)
        {
        // 	if(e.fromobject.id == "edt_pcBnrAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_pcBnrAtflNm.value)) {
        // 			if(this.confirm(this.edt_pcBnrAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("pcBnr");
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_mblBnrAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_mblBnrAtflNm.value)) {
        // 			if(this.confirm(this.edt_mblBnrAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("mblBnr");
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_pcMnuAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_pcMnuAtflNm.value)) {
        // 			if(this.confirm(this.edt_pcMnuAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("pcMnu");
        // 			}
        // 		}
        // 	}
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = "";
        	var docRegSeq = "";

        	if(e.fromobject.id == "edt_pcBnrAtflNm") {
        		docRegId = this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_ID");
        		docRegSeq = this.ds_brndhlInfo.getColumn(0, "PC_BNR_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_mblBnrAtflNm") {
        		docRegId = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_ID");
        		docRegSeq = this.ds_brndhlInfo.getColumn(0, "MBL_BNR_DOC_REG_SEQ");
        	} else if(e.fromobject.id == "edt_pcMnuAtflNm") {
        		docRegId = this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_ID");
        		docRegSeq = this.ds_brndhlInfo.getColumn(0, "PC_MNU_DOC_REG_SEQ");
        	}

        	this.img_view.set_width(300);
        	this.img_view.set_height(300);

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };

        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
        };

        // 카테고리 추가
        this.btn_catgAdd_onclick = function(obj,e)
        {
        	var nRowCurr = this.ds_grdBrndhlCatgDtl.rowposition;

        	if(nRowCurr >= 0) {
        		var sBrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRowCurr, "BRNDHL_CATG_SEQ");
        		var sCatgNm = this.ds_grdBrndhlCatgDtl.getColumn(nRowCurr, "CATG_NM");
        		var sCatgDispSo = this.ds_grdBrndhlCatgDtl.getColumn(nRowCurr, "CATG_DISP_SO");

        		if(this.gfn_isNull(this.edt_catgNm.value)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 명은")); // 카테고리 명은 필수 입력항목입니다.
        			this.edt_catgNm.setFocus();
        			return;
        		}

        		if(this.gfn_isNull(this.edt_catgDispSo.value)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 순서는")); // 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		this.ds_grdBrndhlCatgDtlTemp.clearData();

        		for(var i=0; i<this.ds_grdBrndhlCatgDtl.getRowCount(); i++) {
        			if(nRowCurr != i) {
        				var nRowAdd = this.ds_grdBrndhlCatgDtlTemp.addRow();

        				this.ds_grdBrndhlCatgDtlTemp.setColumn(nRowAdd, "CO_CD", this.ds_grdBrndhlCatgDtl.getColumn(i, "CO_CD"));
        				this.ds_grdBrndhlCatgDtlTemp.setColumn(nRowAdd, "BRNDHL_SEQ", this.ds_grdBrndhlCatgDtl.getColumn(i, "BRNDHL_SEQ"));
        				this.ds_grdBrndhlCatgDtlTemp.setColumn(nRowAdd, "BRNDHL_CATG_SEQ", this.ds_grdBrndhlCatgDtl.getColumn(i, "BRNDHL_CATG_SEQ"));
        				this.ds_grdBrndhlCatgDtlTemp.setColumn(nRowAdd, "CATG_NM", this.ds_grdBrndhlCatgDtl.getColumn(i, "CATG_NM"));
        				this.ds_grdBrndhlCatgDtlTemp.setColumn(nRowAdd, "CATG_DISP_SO", this.ds_grdBrndhlCatgDtl.getColumn(i, "CATG_DISP_SO"));
        			}
        		}

        		var findRow = this.ds_grdBrndhlCatgDtlTemp.findRowExpr("CATG_DISP_SO == '" + this.edt_catgDispSo.value + "'");

        		if(findRow >= 0)
        		{
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.edt_catgDispSo.setFocus();
        			return;
        		}

        		if(this.ds_grdBrndhlCatgPrdDtl.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000006")); // 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	var nRow = this.ds_grdBrndhlCatgDtl.addRow();

        	this.ds_grdBrndhlCatgDtl.setColumn(nRow, "CO_CD", "1000");
        	this.ds_grdBrndhlCatgDtl.setColumn(nRow, "BRNDHL_SEQ", "");
        	this.ds_grdBrndhlCatgDtl.setColumn(nRow, "BRNDHL_CATG_SEQ", "C" + nRow);

        	this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + "C" + nRow + "'");
        };

        // 카테고리 삭제
        this.btn_catgDelete_onclick = function(obj,e)
        {
        	var nRow = this.grd_brndhlCatgDtl.currentrow;

        	if(nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		var nRow = this.ds_grdBrndhlCatgDtl.rowposition;

        		var sBrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRow, "BRNDHL_CATG_SEQ");

        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_grdBrndhlCatgPrdDtl.rowcount; i++) {
        			if(this.ds_grdBrndhlCatgPrdDtl.getColumn(i, "BRNDHL_CATG_SEQ") == sBrndhlCatgSeq) {
        				aDelArr.push(i);
        			}
        		}

        		// 상품 삭제
        		this.ds_grdBrndhlCatgPrdDtl.deleteMultiRows(aDelArr);

        		// 카테고리 삭제
        		this.ds_grdBrndhlCatgDtl.deleteRow(nRow);

        		var nRow2 = this.ds_grdBrndhlCatgDtl.rowposition;

        		if(nRow2 >= 0) {
        			var sBrndhlCatgSeq2 = this.ds_grdBrndhlCatgDtl.getColumn(nRow2, "BRNDHL_CATG_SEQ");

        			this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + sBrndhlCatgSeq2 + "'");
        		} else {
        			this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == 'NOTHING'");
        		}

        		var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        		this.sta_totalCountPrdDtl.set_text(sTotText);
        	}
        };

        // 상품 검색
        this.btn_searchPrdId_onclick = function(obj,e)
        {
        	var nRow = this.grd_brndhlCatgDtl.currentrow;

        	if(nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        			   , mallSprCd : this.cbo_mallSprCd.value
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
        	var nRow = this.grd_brndhlCatgDtl.currentrow;

        	if(nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.btn_searchPrdIdMulText
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
        this.grd_brndhlCatgDtl_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = objDs.rowposition;

        	var sbrndhlCatgSeq = this.ds_grdBrndhlCatgDtl.getColumn(nRow, "BRNDHL_CATG_SEQ");

        	this.ds_grdBrndhlCatgPrdDtl.filter("BRNDHL_CATG_SEQ == '" + sbrndhlCatgSeq + "'");

        	var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        	this.sta_totalCountPrdDtl.set_text(sTotText);
        };

        // 카테고리 상품 cell 클릭 시
        this.grd_brndhlCatgPrdDtl_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_brndhlCatgPrdDtl.getBindCellIndex("body", "DELETE_ROW"))
        	{
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			var objDs = obj.getBindDataset();
        			var nRow = objDs.rowposition;

        			objDs.deleteRow(nRow);

        			var sTotText = "(<b v='true'>총 " + this.ds_grdBrndhlCatgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);
        		}
        	}
        }

        // PC 미리보기 버튼 클릭 시
        this.btn_prev_onclick = function(obj,e)
        {
        	system.execBrowser(this.fv_foBoDomainUrl);
        };
        // MOBILE 미리보기 버튼 클릭시
        this.btn_mobilePrev_onclick = function(obj,e)
        {
        	system.execBrowser(this.fv_foBoMobileDomainUrl);
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
        	if(e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if(e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;

        		var imgType = "";
        		var colName = "";
        		if(curImgBtnName == "btn_pcBnrImgAdd") {
        			imgType = "pcBnr";
        			colName = "PC_BNR_ATFL_NM";
        		} else if(curImgBtnName == "btn_mblBnrImgAdd") {
        			imgType = "mblBnr";
        			colName = "MBL_BNR_ATFL_NM";
        		} else if(curImgBtnName == "btn_pcMnuImgAdd") {
        			imgType = "pcMnu";
        			colName = "PC_MNU_ATFL_NM";
        		}

        		this.fileUpTrans.removeFile(imgType);
        		var findRow = this.ds_file.findRowExpr("IMG_TYPE == '" + imgType + "'");
        		if(findRow >= 0) {
        			this.ds_file.deleteRow(findRow);
        		}

        		// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        		var nRowIdx = this.ds_file.addRow();
        		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_file.setColumn(nRowIdx, "IMG_TYPE", imgType);
        		this.ds_brndhlInfo.setColumn(0, colName, obj.filename);
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
        this.downloadfile = function() {

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
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		if(objCallDs.getColumn(i, "imgType") == "pcBnr") {
        			this.ds_brndhlInfo.setColumn(0, "PC_BNR_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mblBnr") {
        			this.ds_brndhlInfo.setColumn(0, "MBL_BNR_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "pcMnu") {
        			this.ds_brndhlInfo.setColumn(0, "PC_MNU_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}
        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	this.fn_save();

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
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.rdo_expsNoticSprCd.addEventHandler("onitemchanged",this.rdo_expsNoticSprCd_onitemchanged,this);
            this.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.edt_pcBnrAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_pcBnrAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_pcBnrAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_pcBnrImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_pcBnrImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.edt_brndhlNm.addEventHandler("onkeyup",this.edt_brndhlNm_onkeyup,this);
            this.edt_brndhlDesc.addEventHandler("onkeyup",this.edt_brndhlDesc_onkeyup,this);
            this.cbo_mallSprCd.addEventHandler("onitemchanged",this.cbo_mallSprCd_onitechanged,this);
            this.edt_mblBnrAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mblBnrAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_mblBnrAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_mblBnrImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_mblBnrImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.edt_pcMnuAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_pcMnuAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_pcMnuAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_pcMnuImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_pcMnuImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.grd_brndhlCatgDtl.addEventHandler("oncellclick",this.grd_brndhlCatgDtl_oncellclick,this);
            this.grd_brndhlCatgPrdDtl.addEventHandler("oncellclick",this.grd_brndhlCatgPrdDtl_oncellclick,this);
            this.btn_searchPrdIdMulText.addEventHandler("onclick",this.btn_searchPrdIdMulText_onclick,this);
            this.btn_searchPrdId.addEventHandler("onclick",this.btn_searchPrdId_onclick,this);
            this.btn_catgAdd.addEventHandler("onclick",this.btn_catgAdd_onclick,this);
            this.btn_catgDelete.addEventHandler("onclick",this.btn_catgDelete_onclick,this);
            this.sta_lstViewTypeCd.addEventHandler("onclick",this.sta_lstViewTypeCd_onclick,this);
            this.btn_prev.addEventHandler("onclick",this.btn_prev_onclick,this);
            this.btn_mobilePrev.addEventHandler("onclick",this.btn_mobilePrev_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_VA_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
