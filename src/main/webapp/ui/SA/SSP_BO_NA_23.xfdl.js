(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_23");
            this.set_titletext("프리패키지 - 등록/상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prePkgInfo", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_DSGN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_VIEW_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"URL_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prePkgIddtDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lstViewTypeCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPrePkgPrdDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPrePkgCatgDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPrePkgCatgDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdPrePkgPrdDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_CATG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboMallSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","20","1080",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","980","0","20","1060",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","43","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","168","960","102",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","75","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("프리패키지 등록/수정/상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","269","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgNm","20","269","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("패키지 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","362","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImage","20","362","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[PC] 패키지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","635","365","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 :2560*FREE)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","393","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImage","20","393","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[MO] 패키지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","635","396","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 :1,080*FREE)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","20","485","960","108",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDesc","20","485","130","108",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("패키지 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_prePkgDesc","160","493","809","77",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prePkgNm","160","273","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_iddtDsgnYn","160","173","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_iddtDsgnYn_innerdataset = new nexacro.NormalDataset("rdo_iddtDsgnYn_innerdataset", obj);
            rdo_iddtDsgnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">없음</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">산업군</Col></Row></Rows>");
            obj.set_innerdataset(rdo_iddtDsgnYn_innerdataset);
            obj.set_text("없음");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchIddt","945","172","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prePkgSeq","160","47","810","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01","0","1052","1000","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","21","965","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","965","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","23","929","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","969","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
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

            obj = new Button("btn_cancel","427","1007","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","501","1007","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgSeq","20","43","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("패키지순번");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_iddtDsgn","20","168","130","102",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("산업군");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mallSpr","20","75","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDescSize","866","570","103","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgNmSize","881","273","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("(100 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02","20","330","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_iddt","290","172","651","94",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("ds_prePkgIddtDtlList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"290\"/><Column size=\"290\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"산업군ID\"/><Cell col=\"1\" text=\"산업군명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:IDDT_ID\"/><Cell col=\"1\" text=\"bind:IDDT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcDocRegIdNm","160","366","353","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblDocRegIdNm","160","397","353","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDocRegId","517","396","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDocRegId","517","365","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDocRegIdClear","601","365","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDocRegIdClear","601","396","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_foUrl","161","334","709","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","353","1007","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgCatgDtl","22","627","130","257",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdPrePkgCatgDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 명\"/><Cell col=\"1\" text=\"순서\"/></Band><Band id=\"body\"><Cell text=\"bind:CATG_NM\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:EXPS_SO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","162","627",null,"32","38",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgNm","162","627","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("카테고리 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgDispSo","552","627","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("카테고리 순서");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgNm","302","631","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_catgExpsSo","692","631","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","162","658",null,"259","38",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pnbStoryCatgPrdDtl","162","658","130","259",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("등록 상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgPrdDtl","302","696",null,"221","48",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_grdPrePkgPrdDtl");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"67\"/><Column size=\"33\"/><Column size=\"33\"/><Column size=\"66\"/><Column size=\"139\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"노출순번\"/><Cell col=\"2\" colspan=\"2\" text=\"노출순서\"/><Cell col=\"4\" text=\"대표상품\"/><Cell col=\"5\" text=\"상품ID\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"대표규격\"/><Cell col=\"8\" text=\"제조원\"/><Cell col=\"9\" text=\"상품군\"/><Cell col=\"10\" text=\"산업군\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EXPS_SO\" textAlign=\"center\"/><Cell col=\"2\" text=\"&lt;fs v=&apos;13&apos;&gt;▲&lt;/fs&gt;\" border=\"1px solid #d4d4d4\" textAlign=\"center\" displaytype=\"decoratetext\"/><Cell col=\"3\" text=\"&lt;fs v=&apos;13&apos;&gt;▼&lt;/fs&gt;\" textAlign=\"center\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:REPR_PRD_YN\" textAlign=\"left\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:PRD_ID_VIEW\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:PRD_NM\"/><Cell col=\"7\" text=\"bind:ATTR_VAL\"/><Cell col=\"8\" text=\"bind:MNFR_NM\"/><Cell col=\"9\" text=\"bind:FULL_PRD_CLSF_NM\"/><Cell col=\"10\" text=\"bind:IDDT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdIdMulText",null,"669","79","24","49",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdId",null,"669","79","24","132",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgAdd",null,"669","80","24","214",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("카테고리 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgDelete",null,"669","80","24","297",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("카테고리 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountPrdDtl","302","669","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_01","20","424","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImage00","150","424","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","636","428","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 608*558)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","20","455","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImage00","150","455","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","636","456","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,080*480)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lpagePcDocRegIdNm","230","428","283","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lpageMblDocRegIdNm","230","459","283","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpageMblDocRegId","517","459","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpagePcDocRegId","517","428","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpagePcDocRegIdClear","600","428","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lpageMblDocRegIdClear","601","459","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDesc00","20","424","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("상세 페이지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_03","20","300","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_frtPrePkgNm","20","300","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("MRO  패키지 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_frtPrePkgNm","160","304","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Static("sta_frtPrePkgNmSize","881","304","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("(100 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02_01","20","106","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urlTitle01","149","106","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_02_00_00","20","137","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urlTitle00_00","149","137","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("모바일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDesc00_00_00","21","106","128","63",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("목록보기타입코드");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pcLstViewTypeCd","230","111","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_lstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mblLstViewTypeCd","230","141","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_lstViewTypeCd");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","22","597","117","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("기본 상품 구성");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_catgUseYn","29","897","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("카테고리 미사용");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dispSave",null,"669","66","24","380",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deletePrd",null,"669","66","24","450",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("선택 삭제");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mallSprCd","160","79","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_innerdataset("ds_comboMallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDesc00_00","20","330","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("패키지 랜딩 URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_urlUseYn","881","336","89","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("URL 미사용");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgNmSize00","161","600","193","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("*대표상품 6개 필수 등록(최대18개)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","1040","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1030","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prePkgSeq","value","ds_prePkgInfo","PRE_PKG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_iddtDsgnYn","value","ds_prePkgInfo","IDDT_DSGN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_prePkgNm","value","ds_prePkgInfo","PRE_PKG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txt_prePkgDesc","value","ds_prePkgInfo","PRE_PKG_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdo_useYn","value","ds_prePkgInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_pcDocRegIdNm","value","ds_prePkgInfo","PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mblDocRegIdNm","value","ds_prePkgInfo","MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_catgNm","value","ds_grdPrePkgCatgDtl","CATG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_catgExpsSo","value","ds_grdPrePkgCatgDtl","EXPS_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_lpagePcDocRegIdNm","value","ds_prePkgInfo","LPAGE_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_lpageMblDocRegIdNm","value","ds_prePkgInfo","LPAGE_MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_frtPrePkgNm","value","ds_prePkgInfo","FRT_PKG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","rdo_pcLstViewTypeCd","value","ds_prePkgInfo","PC_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","rdo_mblLstViewTypeCd","value","ds_prePkgInfo","MBL_LST_VIEW_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","chk_catgUseYn","value","ds_prePkgInfo","CATG_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","rdo_mallSprCd","value","ds_prePkgInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","chk_urlUseYn","value","ds_prePkgInfo","URL_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_23.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_23.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_23.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_23.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 프리패키지 - 등록
          CREATION DATES : 2022.02.28
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
        var fv_foDomainUrl = "";			// fo 도메인 주소
        var fv_foBoDomainUrl = "";			// fo bo 미리보기 도메인 주소
        var fv_foMobileDomainUrl = "";		// fo 모바일 도메인 주소
        var fv_foBoMobileDomainUrl = "";	// fo bo 미리보기 모바일 도메인 주소

        this.fv_coCd = this.parent.coCd;	        // 회사코드
        this.prePkgSeq = this.parent.prePkgSeq;		// 프리패키지순번

        var fv_pageNum = "";				// 현재 페이지번호
        var curImgBtnName = "";
        this.maxFileSize = "10";
        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_23_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 세팅
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "PRE_PKG_SEQ", this.prePkgSeq);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

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

        // 공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_lstViewTypeCd=ds_output1 ds_comboMallSprCd=ds_output2";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.ds_search.setColumn(0, "CODE_LIST", "LST_VIEW_TYPE_CD,MALL_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }

        // 프리패키지 상세 정보 조회
        this.fn_prePkgInfo = function ()
        {
        	var sSvcId = "prePkgInfo";
        	var sUrl = "/sa/pre-pkg/select-pre-pkg-info.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_prePkgInfo=ds_output1 ds_prePkgIddtDtlList=ds_output2 ds_grdPrePkgCatgDtl=ds_output3 ds_grdPrePkgPrdDtl=ds_output4";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };


        // 프리패키지 데이터 등록/수정
        this.fn_savePrePkgInfo = function()
        {
        	var sSvcId = "savePrePkgInfo";
        	var sUrl = "/sa/pre-pkg/save-pre-pkg-info.do";
        	var sInData = "ds_save=ds_prePkgInfo:A ds_save2=ds_prePkgIddtDtlList:A ds_save3=ds_grdPrePkgCatgDtl:A ds_save4=ds_grdPrePkgPrdDtl:A"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        // 프리패키지 삭제
        this.fn_delete = function()
        {
        	var sSvcId = "deletePrePkglnfo";
        	var sUrl = "/sa/pre-pkg/delete-pre-pkg-info.do";
        	var inDs = "ds_delete=ds_prePkgInfo"
        	var outDs = "";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }

        // 상품 순서 저장
        this.fn_dispSave = function()
        {
        	this.ds_type.setColumn(0, "TYPE_NM", "prePkgPrd");

        	var sSvcId = "updatePrePkgPrdExpsSo";
        	var sUrl = "/sa/pre-pkg/update-exps-so.do";
        	var inDs = "ds_save1=ds_grdPrePkgPrdDtl:U ds_save2=ds_type";
        	var outDs = "";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }


        // 상품ID 유효성 검사
        this.fn_prdIdCheck = function()
        {
        	var sSvcId = "prdIdCheck";
        	var sUrl = "/sa/com/select-prd-id-check-list.do";
        	var sInData = "ds_search=ds_search:A ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var sOutData = "ds_prdInfoList=ds_output1";
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
        		case "commonCodeSearch" :

        			if(!this.gfn_isNull(this.prePkgSeq)){		//1.수정
        				this.fn_prePkgInfo();
        				this.btn_save.set_text("저장");

        			} else {		//2.등록

        				// dataset 영역
        				var nRow = this.ds_prePkgInfo.addRow();

        				this.ds_prePkgInfo.setColumn(nRow, "CO_CD", this.fv_coCd);
        				this.ds_prePkgInfo.setColumn(nRow, "PRE_PKG_SEQ", this.prePkgSeq);

        				// 입력 항목 영역
        				this.edt_prePkgSeq.set_value("");
        				this.rdo_pcLstViewTypeCd.set_index(0);
        				this.rdo_mblLstViewTypeCd.set_index(0);
        				this.rdo_iddtDsgnYn.set_index(0);
        				this.rdo_mallSprCd.set_index(0);
        				this.chk_urlUseYn.set_value(false);
        				this.ds_prePkgInfo.setColumn(nRow, "URL_USE_YN", "Y");

        				this.edt_prePkgNm.set_value("");
        				this.sta_prePkgNmSize.set_text("(<fc v='red'>0</fc> / 100 Byte)");

        				this.edt_frtPrePkgNm.set_value("");
        				this.sta_frtPrePkgNmSize.set_text("(<fc v='red'>0</fc> / 100 Byte)");

        				this.txt_prePkgDesc.set_value("");
        				this.sta_prePkgDescSize.set_text("(<fc v='red'>0</fc> / 2000 Byte)");

        				this.edt_pcDocRegIdNm.set_value("");
        				this.edt_mblDocRegIdNm.set_value("");

        				this.edt_lpagePcDocRegIdNm.set_value("");
        				this.edt_lpageMblDocRegIdNm.set_value("");

        				this.sta_totalCountPrdDtl.set_text("(<b v='true'>총 0건</b>)");

        				this.rdo_useYn.set_index(0);

        				// 읽기전용 세팅
        				this.edt_prePkgSeq.set_readonly(true);
        				this.edt_pcDocRegIdNm.set_readonly(true);
        				this.edt_mblDocRegIdNm.set_readonly(true);
        				this.edt_foUrl.set_readonly(true);
        				this.edt_lpagePcDocRegIdNm.set_readonly(true);
        				this.edt_lpageMblDocRegIdNm.set_readonly(true);

        				// 카테고리 미사용 체크박스
        				this.chk_catgUseYn.set_enable(true);
        				this.chk_catgUseYn.set_value("Y");
        				this.ds_prePkgInfo.setColumn(nRow, "CATG_USE_YN", "Y");

        				// 버튼
        				this.btn_delete.set_visible(false);
        				this.btn_save.set_left(this.btn_save.getOffsetLeft() - 37);
        				this.btn_cancel.set_left(this.btn_cancel.getOffsetLeft() - 37);

        				this.btn_save.set_text("등록");

        			}

        			break;


        		case "prePkgInfo" :

        			// 산업군 지정 여부 라디오박스 이벤트
        			this.fn_IddtDsgnYnSet();

        			//읽기 전용 속성 체크
        			this.edt_prePkgSeq.set_readonly(true);
        			this.edt_pcDocRegIdNm.set_readonly(true);
        			this.edt_mblDocRegIdNm.set_readonly(true);
        			this.edt_lpagePcDocRegIdNm.set_readonly(true);
        			this.edt_lpageMblDocRegIdNm.set_readonly(true);

        			// 글자수 체크
        			this.fn_setLenByte(this.edt_prePkgNm.value, 100, "00");
        			if(!this.gfn_isNull(this.txt_prePkgDesc.value)) {
        				this.fn_setLenByte(this.txt_prePkgDesc.value, 2000, "03");
        			}

        			// 카테고리 미사용 데이터가 아니라면 첫번째 카테고리의 상품 조회
        			if(this.ds_prePkgInfo.getColumn(0, "CATG_USE_YN") != "N"){

        				var nRow = this.ds_grdPrePkgCatgDtl.rowposition;
        				if(nRow >= 0) {
        					var sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRow, "PRE_PKG_CATG_SEQ");
        					this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq + "'");
        				} else {
        					this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == 'NOTHING'");
        				}
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건</b>)";

        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			//  패키지 랜딩 URL 세팅
        			this.edt_foUrl.set_readonly(true);

        			var sFoDomain = "";
        			var sFoParameter = "";

        			if (this.rdo_mallSprCd.value == "10") {
        				// 10 : SSP Mall
        				sFoDomain = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP");

        			} else if (this.rdo_mallSprCd.value == "20") {
        				// 20 : R&D Mall
        				sFoDomain = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_RND");
        			}

        			sFoParameter = sFoParameter + "?searchCoCd=" + this.ds_prePkgInfo.getColumn(0, "CO_CD");
        			sFoParameter = sFoParameter + "&searchPrePkgSeq=" + this.ds_prePkgInfo.getColumn(0, "PRE_PKG_SEQ");

        			this.fv_foDomainUrl = sFoDomain + "/sa/pmt/ssp-pw-md-03.do" + sFoParameter;

        			this.edt_foUrl.set_value(this.fv_foDomainUrl);

        			break;

        		case "prdIdCheck" :

        			// 없는 상품ID 인지 검증
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

        			// 진열, 기존 그리드 상품 중복 검증
        			var nRow = this.ds_grdPrePkgCatgDtl.rowposition;
        			var sPrePkgCatgSeq = "0";

        			// 카테고리미사용이 아닐경우
        			if(this.chk_catgUseYn.value == "Y"){
        				sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRow, "PRE_PKG_CATG_SEQ"); // c  + ROWNUMBER
        			}

        			var totalCount = 0;
        			var dPrdId = "";
        			tempPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++)
        			{
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");
        				var sAttrVal = this.ds_prdInfoList.getColumn(x, "ATTR_VAL");
        				var sMnfrNm = this.ds_prdInfoList.getColumn(x, "MNFR_NM");
        				var sPubOnlySprNm = this.ds_prdInfoList.getColumn(x, "PUB_ONLY_SPR_NM");
        				var sReprPrdSprNm = this.ds_prdInfoList.getColumn(x, "REPR_PRD_SPR_NM");
        				var sPrdUseYnNm = this.ds_prdInfoList.getColumn(x, "PRD_USE_YN_NM");
        				var sDispStatsNm = this.ds_prdInfoList.getColumn(x, "DISP_STATS_NM");
        				var sFullPrdClsfNm = this.ds_prdInfoList.getColumn(x, "FULL_PRD_CLSF_NM");
        				var sIddtNm = this.ds_prdInfoList.getColumn(x, "IDDT_NM");

        				if (sPrdNm != "" && sPrdNm != undefined && sDispStatsNm == "진열")
        				{
        					var findRow = this.ds_grdPrePkgPrdDtl.findRowExpr("PRD_ID == '" + sPrdId + "'");

        					// 그리드에 상품이 존재하지 않는다면 등록
        					if(findRow < 0 )
        					{
        						var nRow = this.ds_grdPrePkgPrdDtl.addRow();

        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRE_PKG_SEQ", "");
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRE_PKG_CATG_SEQ", sPrePkgCatgSeq);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_ID", sPrdId);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", sPrdIdView);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "REPR_PRD_YN", "N");
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_NM", sPrdNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "ATTR_VAL", sAttrVal);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "MNFR_NM", sMnfrNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", sPubOnlySprNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", sReprPrdSprNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", sPrdUseYnNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "DISP_STATS_NM", sDispStatsNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "FULL_PRD_CLSF_NM", sFullPrdClsfNm);
        						this.ds_grdPrePkgPrdDtl.setColumn(nRow, "IDDT_NM", sIddtNm);
        					}
        					else
        					{	// 존재한다면 중복되는거니 카운트업
        						totalCount = totalCount + 1;

        						tempPrdId = tempPrdId + sPrdIdView + ",";
        					}
        				}
        				if(sDispStatsNm != "진열")
        				{
        					dPrdId = dPrdId.concat(sPrdIdView, ',');
        				}

        			}

        			if (dPrdId != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000486", dPrdId));
        				alert(this.fn_getMessage("ERRN000486", dPrdId)); // 미진열 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}

        			if (totalCount > 0)
        			{
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건</b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;

        		case "savePrePkgInfo" :

        			if( errorCode == -1 || errorCode == -100)
        			{
        				//사용자 지정 에러코드 -100
        				alert(errorMsg);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.

        				var resData = {};
        				var resString = "";

        				resData.RETURN_YN = "Y";

        				// json string 변경
        				resString = JSON.stringify(resData);

        				// return
        				this.close(resString);
        			}

        			break;

        		case "deletePrePkglnfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        				this.opener.fn_gridPrePkgInfoList();
        				this.close();
        			} else {
        				alert(this.fn_getMessage("ERRN000032")); // 삭제에 실패하였습니다.
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
        		case "btn_searchIddt" :

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_prePkgIddtDtlList.findRowExpr("IDDT_ID == '" + rowData.IDDT_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_prePkgIddtDtlList.addRow();

        					this.ds_prePkgIddtDtlList.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_prePkgIddtDtlList.setColumn(nRow, "PRE_PKG_SEQ", "");
        					this.ds_prePkgIddtDtlList.setColumn(nRow, "IDDT_ID", rowData.IDDT_ID);
        					this.ds_prePkgIddtDtlList.setColumn(nRow, "IDDT_NM", rowData.IDDT_NM);
        				}
        			}

        			break;

        		case "btn_searchPrdId" :

        			var nRow = this.ds_grdPrePkgCatgDtl.rowposition;
        			var sPrePkgCatgSeq = "0";

        			// 카테고리미사용이 아닐경우
        			if(this.chk_catgUseYn.value == "Y") {
        				sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRow, "PRE_PKG_CATG_SEQ"); // c  + ROWNUMBER
        			}
        			var totalCount = 0;
        			var tempPrdId = "";

        			for(var i=0; i<retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_grdPrePkgPrdDtl.findRowExpr("PRD_ID == '" + rowData.PRD_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_grdPrePkgPrdDtl.addRow();
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRE_PKG_SEQ", "");
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRE_PKG_CATG_SEQ", sPrePkgCatgSeq);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_ID", rowData.PRD_ID);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_NM", rowData.PRD_NM);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "ATTR_VAL", rowData.ATTR_VAL);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "MNFR_NM", rowData.MNFR_NM);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "REPR_PRD_YN", "N"); // 대표상품여부 초기값 N
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "FULL_PRD_CLSF_NM", rowData.FULL_PRD_CLSF_NM);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "IDDT_NM", rowData.IDDT_NM);
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PUB_ONLY_SPR_NM", "");
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "REPR_PRD_SPR_NM", "");
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "PRD_USE_YN_NM", "");
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "DISP_STATS_NM", "");
        					this.ds_grdPrePkgPrdDtl.setColumn(nRow, "DELETE_ROW", "");
        				} else {
        					totalCount = totalCount + 1;

        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}

        			if(totalCount > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq + "'");

        			var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        			break;



        		case "btn_searchPrdIdMulText" :

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

        				this.fv_PrdIdCheck = "btn_searchPrdIdMulText"

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
        	this.sta_iddtDsgn.uEssentiel = "true";
        	this.sta_prePkgNm.uEssentiel = "true";
        	this.sta_frtPrePkgNm.uEssentiel = "true";
        	this.sta_pcImage.uEssentiel = "true";
        	this.sta_mblImage.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";

        }

        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 산업군지정여부 radio를 클릭 시
         */
        this.rdo_iddtDsgnYn_onitemchanged = function(obj,e)
        {
        	this.fn_IddtDsgnYnSet();
        };

        /**
         * 산업군 그리드 cell 클릭 시
         */
        this.grd_iddt_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button")
        	{
        		if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        		{
        			this.ds_prePkgIddtDtlList.deleteRow(e.row);
        		}
        	}
        };

        /**
         * 산업군 검색 아이콘을 클릭 시
         */
        this.btn_searchIddt_onclick = function(obj,e)
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
        	              , title : "산업군 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_30.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 몰구분코드값 변경시
         */
        this.rdo_mallSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_mallSprCdSet();
        };


        /**
         * 패키지 명 텍스트 입력 시
         */
        this.edt_prePkgNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 100, "00");
        };

        /**
         * MRO패키지 명 텍스트 입력 시
         */
        this.edt_frtPrePkgNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 100, "02");
        };

        /**
         * 패키지 설명 텍스트 입력 시
         */
        this.txt_prePkgDesc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "03");
        };



        /**
         * [PC] 패키지 이미지 파일첨부 버튼 클릭 시
         */
        this.btn_pcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [PC] 패키지 이미지 삭제 아이콘 클릭 시
         */
        this.btn_pcDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_pcDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("pcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * [Mobile] 패키지 이미지 파일첨부 버튼 클릭 시
         */
        this.btn_mblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [Mobile] 패키지 이미지 삭제 아이콘 클릭 시
         */
        this.btn_mblDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_mblDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("mblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * [PC] 상세페이지 이미지 파일첨부 버튼 클릭 시
         */
        this.btn_lpagePcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [PC] 상세페이지 이미지 삭제 아이콘 클릭 시
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
         * [Mobile] 상세페이지 이미지 파일첨부 버튼 클릭 시
         */
        this.btn_lpageMblDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [Mobile] 상세페이지 이미지 삭제 아이콘 클릭 시
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
        * 상품 상세 그리드 클릭
        */
        this.grd_prePkgPrdDtl_oncellclick = function(obj,e)
        {
        	if(e.col == 4) { // 대표상품 체크박스 18개 넘어가면 얼럿
        		var rowCount = this.ds_grdPrePkgPrdDtl.getCaseCountNF("REPR_PRD_YN == 'Y'");
        		if(rowCount > 18){
        			alert(this.fn_getMessage("ERRN000123")); // 대표상품은 최대 18개 등록가능합니다
        			this.ds_grdPrePkgPrdDtl.setColumn(e.row, "REPR_PRD_YN", "N"); // 체크박스값 원복
        			return false;
        		}

        	} else if(e.col == 2) {
        		if(e.row == 0){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_grdPrePkgPrdDtl.moveRow(e.row, (e.row-1));

        	} else if(e.col == 3) {
        		if(e.row == (this.ds_grdPrePkgPrdDtl.getRowCount()-1)){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_grdPrePkgPrdDtl.moveRow(e.row, (e.row+1));
        	}
        };

        // 순서 저장
        this.btn_dispSave_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRN000045"))) { // 전시순서를 저장하시겠습니까?
        		return false;
        	}

        	for(var i = 0; i< this.ds_grdPrePkgPrdDtl.rowcount; i++) {
        		this.ds_grdPrePkgPrdDtl.setColumn(i, "EXPS_SO", i+1);
        	}

        	if(!this.fn_dataCheck(this.ds_grdPrePkgPrdDtl)) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	}

        	//this.fn_dispSave();
        };




        /**
         * 삭제 버튼 클릭 시
         */
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		this.fn_delete();
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
         * 저장/등록 버튼 클릭 시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	// 산업군 검증
        	if (this.rdo_iddtDsgnYn.value == "Y")
        	{
        		if (this.ds_prePkgIddtDtlList.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000019")); // 산업군을 선택하시면 산업군을 추가해야 합니다.
        			return;
        		}
        	}
        	else
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_prePkgIddtDtlList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}
        		this.ds_prePkgIddtDtlList.deleteMultiRows(aDelArr);
        	}

        	// 필수 입력 필드 검증
        	if (this.edt_prePkgNm.value == "" || this.edt_prePkgNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "패키지 명은")); // 패키지 명은 필수 입력항목입니다.
        		this.edt_prePkgNm.setFocus();
        		return;
        	}

        	if (this.edt_frtPrePkgNm.value == "" || this.edt_frtPrePkgNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "프론트 패키지 명은")); // 프론트 패키지 명은 필수 입력항목입니다.
        		this.edt_frtPrePkgNm.setFocus();
        		return;
        	}

        	if (this.edt_pcDocRegIdNm.value == "" || this.edt_pcDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[PC] 패키지 이미지는")); // [PC] 패키지 이미지는 필수 입력항목입니다."
        		return;
        	}

        	if (this.edt_mblDocRegIdNm.value == "" || this.edt_mblDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[Mobile] 패키지 이미지는")); // [Mobile] 패키지 이미지는 필수 입력항목입니다.
        		return;
        	}

        	// 카테고리 사용시
        	if(this.chk_catgUseYn.value == "Y") {

        		if(this.ds_grdPrePkgCatgDtl.getRowCount() == 0) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리는")); // 카테고리는 필수 입력항목입니다.
        			return;
        		}

        		// 카테고리 검증
        		for(var i = 0; i< this.ds_grdPrePkgCatgDtl.rowcount; i++) {
        			var sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(i, "PRE_PKG_CATG_SEQ");
        			var sCatgNm = this.ds_grdPrePkgCatgDtl.getColumn(i, "CATG_NM");
        			var sCatgExpsSo = this.ds_grdPrePkgCatgDtl.getColumn(i, "EXPS_SO");

        			if(this.gfn_isNull(sCatgNm)) {
        				alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 명은")); // 카테고리를 추가하면 카테고리 명은 필수 입력항목입니다.
        				this.edt_catgNm.setFocus();
        				return;
        			}

        			if(this.gfn_isNull(sCatgExpsSo)) {
        				alert(this.fn_getMessage("ERRN000001", "카테고리를 추가하면 카테고리 순서는")); // 카테고리를 추가하면 카테고리 순서는 필수 입력항목입니다.
        				this.edt_catgExpsSo.setFocus();
        				return;
        			}

        			// 동일 순서 검증
        			this.ds_grdPrePkgCatgDtlTemp.clearData();
        			this.ds_grdPrePkgCatgDtlTemp.copyData(this.ds_grdPrePkgCatgDtl);
        			this.ds_grdPrePkgCatgDtlTemp.filter("EXPS_SO == '" + this.edt_catgExpsSo.value + "'");

        			if(this.ds_grdPrePkgCatgDtlTemp.getRowCount() > 1) {
        				alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        				this.edt_catgExpsSo.setFocus();
        				return;
        			}

        			// 최소 상품 등록 검증
        			this.ds_grdPrePkgPrdDtlTemp.clearData();
        			this.ds_grdPrePkgPrdDtlTemp.copyData(this.ds_grdPrePkgPrdDtl);
        			this.ds_grdPrePkgPrdDtlTemp.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq + "'");

        			if(this.ds_grdPrePkgPrdDtlTemp.getRowCount() <= 0) {
        				alert(this.fn_getMessage("ERRN000007")); // 카테고리를 추가하면 기본 상품은 최소 1개는 추가해야 합니다.
        				return;
        			}
        		}
        	// 카테고리 미사용시
        	} else {
        		if(this.ds_grdPrePkgPrdDtl.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000006")); // 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}

        	}




        	// 최소 대표상품 6개 검증
        	var rowCount = this.ds_grdPrePkgPrdDtl.getCaseCountNF("REPR_PRD_YN == 'Y'");
        	if(rowCount < 6){
        		alert(this.fn_getMessage("ERRN000001", "대표상품은 6개까지")); // 대표상품은 6개까지 필수 입력항목입니다.
        		return;
        	}

        	var saveMsg = this.fn_getMessage("ERRN000043"); // 등록하시겠습니까?

        	if(!this.gfn_isNull(this.prePkgSeq)) { // 수정일 경우
        		saveMsg = this.fn_getMessage("ERRN000044"); // 저장하시겠습니까?
        	}

        	if(!confirm(saveMsg)) {
        		return;
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

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "lpagePcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "lpageMblDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_prePkgInfo.getColumn(0, "LPAGE_MBL_DOC_REG_ID_ORI_ATFL_NM");
        				}

        				jsonArray.push(jsonObj);
        			}

        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload("/sa/com/file-upload.do");
        		}
        		else
        		{
        			this.fn_savePrePkgInfo();
        		}
        	}
        	else
        	{
        		this.fn_savePrePkgInfo();
        	}
        };

        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 산업군지정여부 radio를 클릭 시 항목 설정 함수
         */
        this.fn_IddtDsgnYnSet = function()
        {
        	if (this.rdo_iddtDsgnYn.value == "Y")
        	{
        		this.grd_iddt.set_enable(true);

        		// 산업군 검색 아이콘
        		this.btn_searchIddt.set_enable(true);
        	}
        	else
        	{
        		this.grd_iddt.set_enable(false);

        		// 산업군 검색 아이콘
        		this.btn_searchIddt.set_enable(false);
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
        			this.sta_prePkgNmSize.set_text(expsText);
        		}
        		else if (sGubun == "02")
        		{
        			this.sta_frtPrePkgNmSize.set_text(expsText);
        		}
        		else if (sGubun == "03")
        		{
        			this.sta_prePkgDescSize.set_text(expsText);
        		}

        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "00")
        	{
        		this.edt_prePkgNm.set_value("");
        		this.edt_prePkgNm.set_value(tempVal);
        		this.sta_prePkgNmSize.set_text(expsText);
        	}
        	else if (sGubun == "03")
        	{
        		this.txt_prePkgDesc.set_value("");
        		this.txt_prePkgDesc.set_value(tempVal);
        		this.sta_prePkgDescSize.set_text(expsText);
        	}
        };


        // 이미지 노출 처리(mouseenter)
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = "";
        	var docRegSeq = "";

        	if(e.fromobject.id == "edt_pcDocRegIdNm") {
        		docRegId = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID");
        		docRegSeq = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_REG_SEQ");
        	} else if(e.fromobject.id == "edt_mblDocRegIdNm") {
        		docRegId = this.ds_prePkgInfo.getColumn(0, "MBL_DOC_REG_ID");
        		docRegSeq = this.ds_prePkgInfo.getColumn(0, "PC_DOC_REG_ID_REG_SEQ");
        	}

        	this.img_view.set_width(300);
         	this.img_view.set_height(300);

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };

        // 이미지 미노출 처리(mouseleave)
        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
        };

        // 카테고리 추가
        this.btn_catgAdd_onclick = function(obj,e)
        {
        	if(this.chk_catgUseYn.value == "N") {
        		alert(this.fn_getMessage("ERRN000122")); // 카테고리 미사용 체크박스 해제후 가능합니다
        		return;
        	}

        	// 카테고리 추가후 또 추가버튼클릭시
        	var nRowCurr = this.ds_grdPrePkgCatgDtl.rowposition;

        	if(nRowCurr >= 0) {
        		var sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRowCurr, "PRE_PKG_CATG_SEQ");
        		var sCatgNm = this.ds_grdPrePkgCatgDtl.getColumn(nRowCurr, "CATG_NM");
        		var sCatgExpsSo = this.ds_grdPrePkgCatgDtl.getColumn(nRowCurr, "EXPS_SO");

        		if(this.gfn_isNull(this.edt_catgNm.value)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 명은")); // 카테고리 명은 필수 입력항목입니다.
        			this.edt_catgNm.setFocus();
        			return;
        		}

        		if(this.gfn_isNull(this.edt_catgExpsSo.value)) {
        			alert(this.fn_getMessage("ERRN000001", "카테고리 순서는")); // 카테고리 순서는 필수 입력항목입니다.
        			this.edt_catgExpsSo.setFocus();
        			return;
        		}

        		// 동일순서체크
        		this.ds_grdPrePkgCatgDtlTemp.clearData();

        		for(var i=0; i<this.ds_grdPrePkgCatgDtl.getRowCount(); i++) {
        			if(nRowCurr != i) {
        				var nRowAdd = this.ds_grdPrePkgCatgDtlTemp.addRow();

        				this.ds_grdPrePkgCatgDtlTemp.setColumn(nRowAdd, "CO_CD", this.ds_grdPrePkgCatgDtl.getColumn(i, "CO_CD"));
        				this.ds_grdPrePkgCatgDtlTemp.setColumn(nRowAdd, "PRE_PKG_SEQ", this.ds_grdPrePkgCatgDtl.getColumn(i, "PRE_PKG_SEQ"));
        				this.ds_grdPrePkgCatgDtlTemp.setColumn(nRowAdd, "PRE_PKG_CATG_SEQ", this.ds_grdPrePkgCatgDtl.getColumn(i, "PRE_PKG_CATG_SEQ"));
        				this.ds_grdPrePkgCatgDtlTemp.setColumn(nRowAdd, "CATG_NM", this.ds_grdPrePkgCatgDtl.getColumn(i, "CATG_NM"));
        				this.ds_grdPrePkgCatgDtlTemp.setColumn(nRowAdd, "EXPS_SO", this.ds_grdPrePkgCatgDtl.getColumn(i, "EXPS_SO"));
        			}
        		}

        		var findRow = this.ds_grdPrePkgCatgDtlTemp.findRowExpr("EXPS_SO == '" + this.edt_catgExpsSo.value + "'");

        		if(findRow >= 0) {
        			alert(this.fn_getMessage("ERRN000005")); // 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        			this.edt_catgExpsSo.setFocus();
        			return;
        		}

        		// 상품추가체크
        		if(this.ds_grdPrePkgPrdDtl.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000006")); // 기본 상품은 최소 1개는 추가해야 합니다.
        			return;
        		}
        	}

        	// 처음 카테고리 추가시
        	var nRow = this.ds_grdPrePkgCatgDtl.addRow();

        	this.ds_grdPrePkgCatgDtl.setColumn(nRow, "CO_CD", "1000");
        	this.ds_grdPrePkgCatgDtl.setColumn(nRow, "PRE_PKG_SEQ", "");
        	this.ds_grdPrePkgCatgDtl.setColumn(nRow, "PRE_PKG_CATG_SEQ", "C" + nRow);

        	this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + "C" + nRow + "'");

        };

        // 카테고리 삭제
        this.btn_catgDelete_onclick = function(obj,e)
        {
        	var nRow = this.grd_prePkgCatgDtl.currentrow;

        	if(nRow < 0) {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		var nRow = this.ds_grdPrePkgCatgDtl.rowposition;

        		var sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRow, "PRE_PKG_CATG_SEQ");

        		// 상품 삭제
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_grdPrePkgPrdDtl.rowcount; i++) {
        			if(this.ds_grdPrePkgPrdDtl.getColumn(i, "PRE_PKG_CATG_SEQ") == sPrePkgCatgSeq) {
        				aDelArr.push(i);
        			}
        		}
        		this.ds_grdPrePkgPrdDtl.deleteMultiRows(aDelArr);

        		// 카테고리 삭제
        		this.ds_grdPrePkgCatgDtl.deleteRow(nRow);

        		// 기존카테고리 삭제후 다음 선택된 카테고리에 매핑된 상품데이터를 노출
        		var nRow2 = this.ds_grdPrePkgCatgDtl.rowposition;

        		if(nRow2 >= 0) {
        			var sPrePkgCatgSeq2 = this.ds_grdPrePkgCatgDtl.getColumn(nRow2, "PRE_PKG_CATG_SEQ");

        			this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq2 + "'");
        		} else {
        			this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == 'NOTHING'");
        		}

        		var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건 </b>)";
        		this.sta_totalCountPrdDtl.set_text(sTotText);
        	}
        };

        // 카테고리 그리드 cell 클릭 시
        this.grd_prePkgCatgDtl_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = objDs.rowposition;

        	//선택한 카테고리에 매핑된 상품데이터를 노출
        	var sPrePkgCatgSeq = this.ds_grdPrePkgCatgDtl.getColumn(nRow, "PRE_PKG_CATG_SEQ");

        	this.ds_grdPrePkgPrdDtl.filter("PRE_PKG_CATG_SEQ == '" + sPrePkgCatgSeq + "'");

        	var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건 </b>)";
        	this.sta_totalCountPrdDtl.set_text(sTotText);
        };



        // 상품 검색
        this.btn_searchPrdId_onclick = function(obj,e)
        {
        	var nRow = this.grd_prePkgCatgDtl.currentrow;

        	// 카테고리가 없고 카테고리 미사용이 아닐때
        	if(nRow < 0 && this.chk_catgUseYn.value == "Y") {
        		alert(this.fn_getMessage("ERRN000004")); // 카테고리를 먼저 선택해야 합니다.
        		return;
        	}

        	var oArg = { coCd : this.fv_coCd
        			   , mallSprCd : this.rdo_mallSprCd.value
        			   , reprPrdYn : "Y"
        			   , dispStatsYn : "Y"
        			   , selMthdCd : "Y"
        			   , pgmId : "SSP_BO_NA_23"
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

        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        // 상품검색 멀티텍스트
        this.btn_searchPrdIdMulText_onclick = function(obj,e)
        {
        	var nRow = this.grd_prePkgCatgDtl.currentrow;

        	// 카테고리가 없고 카테고리 미사용이 아닐때
        	if(nRow < 0 && this.chk_catgUseYn.value == "Y") {
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

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 상품 선택 삭제 버튼 클릭 시
         */
        this.btn_deletePrd_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_grdPrePkgPrdDtl.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if (confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_grdPrePkgPrdDtl.rowcount; i++)
        		{
        			if(this.ds_grdPrePkgPrdDtl.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        			}
        		}

        		this.ds_grdPrePkgPrdDtl.deleteMultiRows(aDelArr);

        		this.grd_prePkgPrdDtl.setCellProperty("head", 0, "text", "0");

        		var sTotText = "(<b v='true'>총 " + this.ds_grdPrePkgPrdDtl.getRowCount() + "건</b>)";

        		this.sta_totalCountPrdDtl.set_text(sTotText);
        	}
        };


        // 카테고리 미사용 체크박스 이벤트
        this.chk_catgUseYn_onitemchanged = function(obj,e)
        {
        	if(this.chk_catgUseYn.value == "N") {

        		if(!confirm("기존에 등록한 카테고리 정보가 전부 초기화 됩니다. 계속 진행하시겠습니까")) {
        			this.chk_catgUseYn.set_value("Y");
        			return;
        		}

        		this.ds_grdPrePkgCatgDtl.clearData();
        		this.ds_grdPrePkgPrdDtl.clearData();

        		this.grd_prePkgCatgDtl.set_enable(false);
        		this.edt_catgNm.set_enable(false);
        		this.edt_catgExpsSo.set_enable(false);

        	} else {
        		if(!confirm("기존에 등록한 상품 정보가 전부 초기화 됩니다. 계속 진행하시겠습니까")) {
        			this.chk_catgUseYn.set_value("N");
        			return;
        		}

        		this.ds_grdPrePkgPrdDtl.clearData();

        		this.grd_prePkgCatgDtl.set_enable(true);
        		this.edt_catgNm.set_enable(true);
        		this.edt_catgExpsSo.set_enable(true);
        	}
        };



        // 몰 구분 값 변경 시 항목 설정 함수
        this.fn_mallSprCdSet = function()
        {
        	// 등록된 상품이 있으면
        	if(this.ds_grdPrePkgPrdDtl.getCount() != 0) {
        		if(confirm(this.fn_getMessage("ERRN000114"))) { // 등록/추가된 기본 상품이 삭제됩니다. 변경하시겠습니까?

        			// 기본 상품 카테고리 삭제
        			var aDelArr1 = new Array();
        			for(var i = 0; i< this.ds_grdPrePkgCatgDtl.rowcount; i++) {
        				aDelArr1.push(i);
        			}
        			this.ds_grdPrePkgCatgDtl.deleteMultiRows(aDelArr1);

        			// 기본 상품 삭제
        			var aDelArr2 = new Array();
        			this.ds_grdPrePkgPrdDtl.filter(""); // 적용된 필터 해제
        			for(var i = 0; i< this.ds_grdPrePkgPrdDtl.rowcount; i++) {
        				aDelArr2.push(i);
        			}
        			this.ds_grdPrePkgPrdDtl.deleteMultiRows(aDelArr2);

        			this.ds_grdPrePkgCatgDtlTemp.clearData();
        			this.ds_grdPrePkgPrdDtlTemp.clearData();

        			var sTotText = "(<b v='true'>총 0건 </b>)";
        			this.sta_totalCountPrdDtl.set_text(sTotText);

        		} else { // 변경안하면 다시 기존 몰구분코드로 돌아가기
        			if(this.rdo_mallSprCd.value == "10") {
        				this.rdo_mallSprCd.set_index(1);
        			} else if(this.rdo_mallSprCd.value == "20") {
        				this.rdo_mallSprCd.set_index(0);
        			}
        		}
        	}
        };

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

        		//this.ds_prePkgInfo.set_updatecontrol(false);
        		//this.ds_prePkgInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		//this.ds_prePkgInfo.set_updatecontrol(true);

        		// [PC] 패키지 이미지
        		if(this.curImgBtnName == "btn_pcDocRegId")
        		{
        			this.fileUpTrans.removeFile("pcDocRegId");

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "pcDocRegId");

        			this.edt_pcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("pcDocRegId", obj)
        		}
        		// [MO] 패키지 이미지
        		else if(this.curImgBtnName == "btn_mblDocRegId")
        		{
        			this.fileUpTrans.removeFile("mblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mblDocRegId");

        			this.edt_mblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("mblDocRegId", obj)
        		}
        		// [PC] 상세페이지 이미지
        		else if(this.curImgBtnName == "btn_lpagePcDocRegId")
        		{
        			this.fileUpTrans.removeFile("lpagePcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "lpagePcDocRegId");

        			this.edt_lpagePcDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("lpagePcDocRegId", obj)
        		}
        		// [MO] 상세페이지 이미지
        		else if(this.curImgBtnName == "btn_lpageMblDocRegId")
        		{
        			this.fileUpTrans.removeFile("lpageMblDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "lpageMblDocRegId");

        			this.edt_lpageMblDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("lpageMblDocRegId", obj)
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

        		if(objCallDs.getColumn(i, "imgType") == "pcDocRegId")
        		{
        			this.ds_prePkgInfo.setColumn(0, "PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "mblDocRegId")
        		{
        			this.ds_prePkgInfo.setColumn(0, "MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "lpagePcDocRegId")
        		{
        			this.ds_prePkgInfo.setColumn(0, "LPAGE_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "lpageMblDocRegId")
        		{
        			this.ds_prePkgInfo.setColumn(0, "LPAGE_MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.ds_file.clearData();			// 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	// 신규 데이터 등록
        	this.fn_savePrePkgInfo();
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
            this.addEventHandler("onload",this.SSP_BO_NA_23_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.txt_prePkgDesc.addEventHandler("onkeyup",this.txt_prePkgDesc_onkeyup,this);
            this.edt_prePkgNm.addEventHandler("onkeyup",this.edt_prePkgNm_onkeyup,this);
            this.rdo_iddtDsgnYn.addEventHandler("onitemchanged",this.rdo_iddtDsgnYn_onitemchanged,this);
            this.btn_searchIddt.addEventHandler("onclick",this.btn_searchIddt_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_iddt.addEventHandler("oncellclick",this.grd_iddt_oncellclick,this);
            this.edt_pcDocRegIdNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_pcDocRegIdNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_mblDocRegIdNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_mblDocRegIdNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.btn_mblDocRegId.addEventHandler("onclick",this.btn_mblDocRegId_onclick,this);
            this.btn_pcDocRegId.addEventHandler("onclick",this.btn_pcDocRegId_onclick,this);
            this.btn_pcDocRegIdClear.addEventHandler("onclick",this.btn_pcDocRegIdClear_onclick,this);
            this.btn_mblDocRegIdClear.addEventHandler("onclick",this.btn_mblDocRegIdClear_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.grd_prePkgCatgDtl.addEventHandler("oncellclick",this.grd_prePkgCatgDtl_oncellclick,this);
            this.grd_prePkgPrdDtl.addEventHandler("oncellclick",this.grd_prePkgPrdDtl_oncellclick,this);
            this.btn_searchPrdIdMulText.addEventHandler("onclick",this.btn_searchPrdIdMulText_onclick,this);
            this.btn_searchPrdId.addEventHandler("onclick",this.btn_searchPrdId_onclick,this);
            this.btn_catgAdd.addEventHandler("onclick",this.btn_catgAdd_onclick,this);
            this.btn_catgDelete.addEventHandler("onclick",this.btn_catgDelete_onclick,this);
            this.edt_lpagePcDocRegIdNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_lpagePcDocRegIdNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_lpageMblDocRegIdNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_lpageMblDocRegIdNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.btn_lpageMblDocRegId.addEventHandler("onclick",this.btn_lpageMblDocRegId_onclick,this);
            this.btn_lpagePcDocRegId.addEventHandler("onclick",this.btn_lpagePcDocRegId_onclick,this);
            this.btn_lpagePcDocRegIdClear.addEventHandler("onclick",this.btn_lpagePcDocRegIdClear_onclick,this);
            this.btn_lpageMblDocRegIdClear.addEventHandler("onclick",this.btn_lpageMblDocRegIdClear_onclick,this);
            this.edt_frtPrePkgNm.addEventHandler("onkeyup",this.edt_frtPrePkgNm_onkeyup,this);
            this.sta_urlTitle01.addEventHandler("onclick",this.sta_urlTitle_onclick,this);
            this.sta_urlTitle00_00.addEventHandler("onclick",this.sta_urlTitle00_onclick,this);
            this.chk_catgUseYn.addEventHandler("onchanged",this.chk_catgUseYn_onitemchanged,this);
            this.btn_dispSave.addEventHandler("onclick",this.btn_dispSave_onclick,this);
            this.btn_deletePrd.addEventHandler("onclick",this.btn_deletePrd_onclick,this);
            this.rdo_mallSprCd.addEventHandler("onitemchanged",this.rdo_mallSprCd_onitemchanged,this);
            this.chk_urlUseYn.addEventHandler("onclick",this.chk_urlUseYn_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
