(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_25");
            this.set_titletext("전시 상품 등록 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,802);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iptTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basic", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CON_DIFF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reprPrd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optnBasis", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optnDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdCon", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optnDtlMapp", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOptnBasis", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOptnDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ADD_OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optnDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delOptn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdConTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdConBackup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDel", this);
            obj._setContents("<ColumnInfo><Column id=\"docRegId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOptnDtlTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ADD_OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupSerach", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history",null,"17","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("변경 이력");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","50",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","50","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","655","50","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","Static03:4","54","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","edt_prdClcd:4","54","341","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_categoryPopup","edt_prdClsfNm:3","54","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","81",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01","20","81","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전시상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","655","81","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","112",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01","20","112","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","20","143",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_00","20","143","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("추가정보수취");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","201","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("대표 상품 정보");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","Static01_00:8",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","231","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","655","231","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","20","262",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01","655","262","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("대표 규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","20","293",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","20","324",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","20","355",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00","20","293","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_00","655","293","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00_00","20","324","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_00_00","655","324","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("상품 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00_00_00","20","355","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("SSP 기준가");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","Static03_00:4","235","464","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","edt_prdId:4","235","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdNm","159","85","492","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_auto","804","116",null,"24","50",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_format("99.999999");
            obj.set_displayinvalidtext("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","edt_auto:4","115","15","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","Static04:128","54",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","Static05_01_01_00:6","85","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_dispPrdSprCd","Static05_01_01_01:6","116","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_columncount("2");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_dispPrdSprCd");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_addInfoSetYn","Static05_01_01_01_00:6","147","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_addInfoSetYn_innerdataset = new nexacro.NormalDataset("rdo_addInfoSetYn_innerdataset", obj);
            rdo_addInfoSetYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_addInfoSetYn_innerdataset);
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","Static05_01_01_02_00:4","297","492","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","Static05_01_01_02_00_00:4","328","492","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","Static05_01_01_00_01:4","266",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","Static05_01_01_00_01_00:4","297",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdStatus","Static05_01_01_00_01_00_00:4","328",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02","20","262","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","Static05_01_01_02:4","266","492","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productIdInfo","Static04_00:4","235","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productNmInfo","edt_productIdInfo:4","235",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_01_00","655","112","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("견적 제출가 자동계산");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","414","69","18",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            obj.set_text("옵션 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addOptnBasis","20","Static01_00_00:10","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("추가");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOptnBasis","130","Static01_00_00:10","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_optnBasis","20","btn_addOptnBasis:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_optnBasis");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"73\"/><Column size=\"727\"/><Column size=\"114\"/><Column size=\"271\"/><Column size=\"30\" band=\"right\"/><Column size=\"30\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"옵션명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"필수여부\"/><Cell col=\"4\" text=\"입력타입\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"5\" colspan=\"2\" text=\"순서변경\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:OPTN_NM\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:MAND_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" text=\"bind:IPT_TYPE_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_iptTypeCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" comboautoselect=\"false\" editautoselect=\"false\"/><Cell col=\"5\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/grd_WF_Asending.png&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4\" text=\"UP\"/><Cell col=\"6\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/grd_WF_Descending.png&quot;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" text=\"DOWN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noti","20","grd_optnBasis:10","285","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("※ 옵션수량 변경 시, 상품연결 항목이 초기화 됩니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addOptnDtl","20","sta_noti:20","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("상세옵션 생성");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_optnDtl","20","btn_addOptnDtl:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_binddataset("ds_optnDtl");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/><Column size=\"91\"/><Column size=\"235\"/><Column size=\"450\"/><Column size=\"284\"/><Column size=\"30\"/><Column size=\"29\" band=\"right\"/><Column size=\"30\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"옵션개수\"/><Cell col=\"2\" text=\"상세항목\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"상세설명\"/><Cell col=\"4\" colspan=\"2\" text=\"상세옵션 이미지\"/><Cell col=\"6\" colspan=\"2\" text=\"순서변경\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band><Band id=\"body\"><Cell text=\"bind:OPTN_NM\" displaytype=\"normal\" edittype=\"none\" border=\"1px solid #d4d4d4\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:OPTN_CNT\" suppress=\"2\" displaytype=\"expr:IPT_TYPE_CD==3?&apos;none&apos;:&apos;editcontrol&apos;\" edittype=\"expr:IPT_TYPE_CD==3?&apos;none&apos;:SRT_SO==1?&apos;text&apos;:&apos;none&apos;\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:OPTN_DTL_NM\" edittype=\"expr:IPT_TYPE_CD==3?&apos;none&apos;:&apos;text&apos;\" displaytype=\"expr:IPT_TYPE_CD==3?&apos;none&apos;:&apos;editcontrol&apos;\"/><Cell col=\"3\" text=\"bind:OPTN_DTL_CTS\" displaytype=\"expr:IPT_TYPE_CD==&apos;4&apos;?&apos;editcontrol&apos;:&apos;none&apos;\" edittype=\"expr:IPT_TYPE_CD==&apos;4&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:ATFL_NM\" expandimage=\"url(&apos;theme::default/images/btn_WF_add_file.png&apos;)\" expandshow=\"expr:IPT_TYPE_CD==&apos;4&apos;?&apos;show&apos;:&apos;hide&apos;\" displaytype=\"expr:IPT_TYPE_CD==&apos;4&apos;?&apos;normal&apos;:&apos;none&apos;\" expandsize=\"22\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" displaytype=\"expr:IPT_TYPE_CD==&apos;4&apos;?&apos;imagecontrol&apos;:&apos;none&apos;\" expr=\"expr:&quot;theme::default/images/grd_WF_FileDel.png&quot;\" imagestretch=\"none\" text=\"DEL_FILE\"/><Cell col=\"6\" border=\"1px solid #d4d4d4,0px solid #d4d4d4\" expr=\"expr:&quot;theme::default/images/grd_WF_Asending.png&quot;\" displaytype=\"imagecontrol\" text=\"UP\"/><Cell col=\"7\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" expr=\"expr:&quot;theme::default/images/grd_WF_Descending.png&quot;\" displaytype=\"imagecontrol\" text=\"DOWN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdCon","20","grd_optnDtl:20","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("상품 연결");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prdCon","20","btn_prdCon:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_price","Static05_01_01_02_00_00_00:4","359","492","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_format("#,#.###");
            this.addChild(obj.name, obj);

            obj = new Static("sta_addOptn","20","grd_prdCon:20","101","18",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            obj.set_text("추가정보 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addAddOptnBasis","20","sta_addOptn:10","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("추가");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delAddOptnBasis","130","sta_addOptn:10","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_addOptnBasis","20","btn_addAddOptnBasis:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_addOptnBasis");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"73\"/><Column size=\"690\"/><Column size=\"114\"/><Column size=\"100\"/><Column size=\"218\"/><Column size=\"30\" band=\"right\"/><Column size=\"30\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"추가정보명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"필수여부\"/><Cell col=\"4\" text=\"첨부파일\"/><Cell col=\"5\" text=\"입력타입\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"6\" colspan=\"2\" text=\"순서변경\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ADD_OPTN_NM\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:MAND_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ATFL_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:IPT_TYPE_CD\" displaytype=\"combocontrol\" edittype=\"expr:ATFL_YN==&apos;Y&apos;?&apos;readonly&apos;:&apos;combo&apos;\" combodataset=\"ds_iptTypeCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" comboautoselect=\"false\"/><Cell col=\"6\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/grd_WF_Asending.png&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4\" text=\"UP\"/><Cell col=\"7\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/grd_WF_Descending.png&quot;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" text=\"DOWN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addAddOptnDtl","20","grd_addOptnBasis:20","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("상세옵션 생성");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_addOptnDtl","20","btn_addAddOptnDtl:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_binddataset("ds_addOptnDtl");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"484\"/><Column size=\"145\"/><Column size=\"606\"/><Column size=\"30\" band=\"right\"/><Column size=\"30\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"추가정보명\"/><Cell col=\"1\" text=\"상세 추가 정보 개수\"/><Cell col=\"2\" text=\"상세 추가 정보\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" colspan=\"2\" text=\"순서변경\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band><Band id=\"body\"><Cell text=\"bind:ADD_OPTN_NM\" displaytype=\"normal\" edittype=\"none\" border=\"1px solid #d4d4d4\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:ADD_OPTN_CNT\" edittype=\"expr:IPT_TYPE_CD==3 || ATFL_YN==&apos;Y&apos;?&apos;none&apos;:SRT_SO==1?&apos;text&apos;:&apos;none&apos;\" displaytype=\"expr:IPT_TYPE_CD==3 || ATFL_YN==&apos;Y&apos;?&apos;none&apos;:&apos;editcontrol&apos;\" suppress=\"2\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:ADD_OPTN_DTL_NM\" edittype=\"expr:IPT_TYPE_CD==3 || ATFL_YN==&apos;Y&apos;?&apos;none&apos;:&apos;text&apos;\" displaytype=\"expr:IPT_TYPE_CD==3  || ATFL_YN==&apos;Y&apos;?&apos;none&apos;:&apos;editcontrol&apos;\"/><Cell col=\"3\" expr=\"expr:&quot;theme::default/images/grd_WF_Asending.png&quot;\" displaytype=\"imagecontrol\" border=\"1px solid #d4d4d4,0px solid #d4d4d4\" text=\"UP\"/><Cell col=\"4\" expr=\"expr:&quot;theme::default/images/grd_WF_Descending.png&quot;\" displaytype=\"imagecontrol\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" text=\"DOWN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_btn","20","grd_addOptnDtl:33",null,"87","20",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","44.52%","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_close:4","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_save00","1130","-1118","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00_00",null,"17","70","28","btn_history:4",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","Static04:4","54","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","grd_optnDtl:44","538","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_preview","grd_optnDtl:44","570","250","250",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_visible("false");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdConMultiPrdId",null,"grd_optnDtl:23","100","27","56",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_visible("false");
            obj.set_text("상품연결용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput",null,"grd_optnDtl:25","34","30","20",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_document");
            obj.set_tooltiptext("상품연결 일괄맵핑");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,802,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_dispPrdSprCd","value","ds_basic","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_useYn","value","ds_basic","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdo_addInfoSetYn","value","ds_basic","ADD_INFO_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_dispPrdNm","value","ds_basic","DISP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_prdNm","value","ds_reprPrd","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_productIdInfo","value","ds_reprPrd","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_productNmInfo","value","ds_reprPrd","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_attrValList","value","ds_reprPrd","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_mnfrNm","value","ds_reprPrd","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_ctryNm","value","ds_reprPrd","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_sellUnitCd","value","ds_reprPrd","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_prdStatus","value","ds_reprPrd","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_price","value","ds_price","STPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_auto","value","ds_basic","PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_NA_25_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP 전시상품 상세
        CREATION DATES : 2022.06.17
        *******************************************************/
        // 공통형 스크립트 인클루드
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.selectedPrdConRow = 0;
        this.selectedPrdConCol = "";
        this.selectedPrdConCellIdx = 0;

        this.productDispExists = "";
        this.dispOprtrId = '';
        this.dispOprtrNm = '';

        this.selPrdClcd = "";
        this.selPrdClsfNm = "";
        this.selPrdFullClsfNm = "";

        this.coCd = '';

        this.fileType = "image/*"; //첨부파일 종류
        this.maxFileSize = 10; //MB단위
        this.seletedImgRow = -1;
        this.fileOnTop = 0;
        this.fileOnLeft = 0;
        this.fileName = "";

        this.searchPrdCount = 0;	//상품연결 엔터처리용
        this.searchPrdIdView = "";
        this.searchPrdNm = "";
        this.searchAttrVal = "";

        this.pageMode = 'I';
        this.mallSprCd = '';
        this.svcUrl = nexacro.getEnvironment().services["svcUrl"].url;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
        	this.Static03.uEssentiel = "true";
        	this.Static05_01_01.uEssentiel = "true";
        	this.Static05_01_01_01_01_00.uEssentiel = "true";

            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

        	this.mallSprCd = this.parent.mallSprCd;
        	if(this.gfn_isNull(this.mallSprCd)){
        		alert(this.gfn_getMessage('ERRP000275')); //'몰구분코드가 비었습니다.'
        		this.close();
        	}
        	this.coCd = this.parent.coCd;
        	if(this.gfn_isNull(this.coCd)){
        		this.coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        	}
        	var prdClcd = this.parent.prdClcd;

        	this.fn_commonCodeSearch();
        	this.ds_search.setColumn(0, "CO_CD", this.coCd);
        	this.ds_delOptn.clearData();

        	if(!this.gfn_isNull(prdClcd)){
        		this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);
        		this.fn_dispInfo();
        		this.pageMode = 'U';
        	}else{
        		this.rdo_addInfoSetYn.set_value("N");
        		this.fn_addInfoControl("N");
        		this.rdo_useYn.set_value("Y");
        	}

        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.div_btn_btn_save_onclick();
        		event.preventDefault();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.div_btn_btn_close_onclick();
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dispPrdSprCd=ds_output1 ds_iptTypeCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "DISP_PRD_SPR_CD,IPT_TYPE_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //전시상품 정보 조회
        this.fn_dispInfo = function(){
        	var sSvcId = "dispInfo";
        	var sUrl = "/pr/prd-disp/select-product-disp-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_basic=ds_basic ds_optnBasis=ds_optnBasis ds_optnDtl=ds_optnDtl ds_optnDtlMapp=ds_prdCon ds_addOptnBasis=ds_addOptnBasis ds_addOptnDtl=ds_addOptnDtl";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //대표상품 정보 조회
        this.fn_reprPrdInfo = function(){
        	var sSvcId = "reprPrdInfo";
        	var sUrl = "/pr/prd-disp/select-disp-repr-product-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_reprPrd=ds_reprPrd";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //대표상품 정보 조회
        this.fn_dispExists = function(){
        	var sSvcId = "dispExists";
        	var sUrl = "/pr/prd-disp/select-product-disp-exists.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_reprPrd=ds_reprPrd";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //등록처리
        this.fn_save = function (bInit){
            var sSvcId = "save";
            var sUrl = "/pr/prd-disp/save-product-disp-info.do";
            var inDs = "ds_basic=ds_basic ds_optnBasis=ds_optnBasis ds_optnDtl=ds_optnDtl ds_prdCon=ds_prdCon ds_addOptnBasis=ds_addOptnBasis ds_addOptnDtl=ds_addOptnDtl ds_delOptn=ds_delOptn";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_fileDel = function (oCallBack){
            var sSvcId = "fileDel";
            var sUrl = "/pr/prd-disp/file-delete.do";
            var inDs = "ds_fileDel=ds_fileDel";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, oCallBack);
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_popupSerach";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        		return;
        	}
            switch(svcID) {
                case "commonCodeSearch" :
        			//this.ds_iptTypeCd.insertRow(0);
        			//this.ds_iptTypeCd.setColumn(0, "COM_DTL_CD", null);
        			//this.ds_iptTypeCd.setColumn(0, "COM_DTL_CD_NM", "선택");
                    break;

        		case "dispInfo" :
        			this.edt_prdClcd.set_value(this.ds_basic.getColumn(0, "PRD_CLCD"));
        			this.edt_prdClsfNm.set_value(this.ds_basic.getColumn(0, "PRD_CLSF_NM"));
        			this.edt_prdId.set_value(this.ds_basic.getColumn(0, "REPR_PRD_ID"));
        			this.edt_oprtrId.set_value(this.dispOprtrId);
        			this.edt_oprtrNm.set_value(this.dispOprtrNm);
        			this.selPrdClcd = this.ds_basic.getColumn(0, "PRD_CLCD");

        			this.ds_search.setColumn(0, "PRD_ID", this.ds_basic.getColumn(0, "REPR_PRD_ID"));
        			this.fn_reprPrdInfo();

        			//상품타입 B일경우 상품연결 숨김처리
        			var DISP_PRD_SPR_CD = this.ds_basic.getColumn(0, "DISP_PRD_SPR_CD");
        			if(DISP_PRD_SPR_CD == 'A'){
        				//상품연결 세팅
        				this.makeProductConnectGrid();

        				//초기화된 데이터셋에 상품정보 바인딩
        				for(var i=0; i<this.ds_optnDtlMapp.rowcount; i++){
        					var MAPP_PRD_ID = this.ds_optnDtlMapp.getColumn(i, "MAPP_PRD_ID");
        					var PRD_NM = this.ds_optnDtlMapp.getColumn(i, "PRD_NM");
        					var ATTR_VAL = this.ds_optnDtlMapp.getColumn(i, "ATTR_VAL");
        					this.ds_prdCon.setColumn(i, "MAPP_PRD_ID", MAPP_PRD_ID);
        					this.ds_prdCon.setColumn(i, "PRD_NM", PRD_NM);
        					this.ds_prdCon.setColumn(i, "ATTR_VAL", ATTR_VAL);
        				}

        				this.ds_prdConBackup.copyData(this.ds_prdCon, true);	//값비교를 위한
        				this.btn_prdIdMultiInput.set_visible(true);
        			}else{
        				this.btn_prdCon.set_enable(false);
        				this.btn_prdIdMultiInput.set_visible(false);
        				this.grd_prdCon.set_height(0);
        			}
        			this.ds_optnDtlTemp.copyData(this.ds_optnDtl, true);
        			this.ds_addOptnDtlTemp.copyData(this.ds_addOptnDtl, true);

        			var ADD_INFO_SET_YN = this.ds_basic.getColumn(0, "ADD_INFO_SET_YN");
        			this.fn_addInfoControl(ADD_INFO_SET_YN);

        			//그리드 높이조절
        			this.fn_resize_grd(this.grd_optnBasis);
        			this.fn_resize_grd(this.grd_optnDtl);

                    break;

        		case "reprPrdInfo" :
        			this.edt_price.set_value(this.ds_reprPrd.getColumn(0, "STPRC"));
        			this.ds_basic.setColumn(i, "REPR_PRD_ID", this.edt_prdId.value);
        			break;

        		case "dispExists" :
        			if(this.productDispExists == "0"){
        				this.edt_prdClcd.set_value(this.selPrdClcd);
        				this.edt_prdClsfNm.set_value(this.selPrdFullClsfNm);
        				this.edt_dispPrdNm.set_value(this.selPrdClsfNm);
        				this.edt_oprtrId.set_value(this.dispOprtrId);
        				this.edt_oprtrNm.set_value(this.dispOprtrNm);

        				this.ds_reprPrd.clearData();
        				this.edt_prdId.set_value("");
        				this.ds_basic.setColumn(0, "REPR_PRD_ID", "");
        			}else{
        				this.selPrdClcd = this.ds_basic.getColumn(0, "PRD_CLCD");
        				//alert('이미 등록된 전시상품군입니다.');
        				alert(this.gfn_getMessage('ERRP000276'));
        				return;
        			}
        			break;

        		case "save" :
        			//alert('저장되었습니다.');
        			alert(this.gfn_getMessage('ERRP000277'));
        			//this.close();
        			this.reload();
        			break;

        		case "fileDel" :
        			this.ds_optnDtl.setColumn(this.seletedImgRow, "ATFL_NM", "");
        			this.ds_optnDtl.setColumn(this.seletedImgRow, "DOC_REG_ID", "");
        			//alert('삭제되었습니다.');
        			break;

        		case "prdConMappPrdId" :
        			if(this.searchPrdCount>0){
        				this.ds_prdCon.setColumn(this.grd_prdCon.getSelectedRows(), "MAPP_PRD_ID", this.searchPrdIdView);
        				this.ds_prdCon.setColumn(this.grd_prdCon.getSelectedRows(), "PRD_NM", this.searchPrdNm);
        				this.ds_prdCon.setColumn(this.grd_prdCon.getSelectedRows(), "ATTR_VAL", this.searchAttrVal);

        			}else{
        				var params = {coCd:this.coCd,prdClcd:this.selPrdClcd, dispStatsYn:'Y', pubOnlySprCd:'P', prdId:this.ds_prdCon.getColumn(this.grd_prdCon.getSelectedRows(), "MAPP_PRD_ID"), mallSprCd:this.mallSprCd};	//카테고리, 진열여부Y, 공용
        				var options = {title:'상품ID 조회'};
        				this.gfn_openPopup('prdConPopup', "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        			}
        			break;


            }
        };

        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_prdIdPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.edt_prdId.set_value(jsonData.PRD_ID_VIEW);

        				this.ds_search.setColumn(0, "PRD_ID", jsonData.PRD_ID_VIEW);
        				this.fn_reprPrdInfo();
        			}

                    break;

        		case "btn_categoryPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);

        				this.selPrdClcd = jsonData.PRD_CLCD;
        				this.selPrdClsfNm = jsonData.PRD_CLSF_NM;
        				this.selPrdFullClsfNm = jsonData.FULL_PRD_CLSF_NM;

        				this.ds_search.setColumn(0, "PRD_CLCD", jsonData.PRD_CLCD);
        				this.fn_dispExists();
        			}

                    break;

        		case "prdConPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				var PRD_ID = jsonData.PRD_ID;
        				var PRD_ID_VIEW = jsonData.PRD_ID_VIEW;
        				var PRD_NM = jsonData.PRD_NM;
        				var ATTR_VAL = jsonData.ATTR_VAL;

        				this.ds_prdCon.setColumn(this.selectedPrdConRow, "MAPP_PRD_ID", PRD_ID_VIEW);
        				this.ds_prdCon.setColumn(this.selectedPrdConRow, "PRD_NM", PRD_NM);
        				this.ds_prdCon.setColumn(this.selectedPrdConRow, "ATTR_VAL", ATTR_VAL);
        			}

                    break;

        		case "btn_save" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.ds_basic.setColumn(0, "UPD_RSN", jsonData.UPD_RSN); //수정사유팝업
        				this.fn_procSave();
        			}

                    break;

        		case "btn_prdConMultiPrdId" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				if(typeof jsonData.textValue != 'undefined' && !this.gfn_isNull(jsonData.textValue)){
        					var arr = jsonData.textValue.split(',');
        					for(var i = 0; i<arr.length; i++){
        						var rowData = arr[i];
        						this.ds_prdCon.setColumn(i, "MAPP_PRD_ID", rowData);
        					}
        				}
        			}

                    break;


            }
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /**
        *	상품연결 그리드 바인딩 재귀함수
        *	배열, 0(시작번호 고정), 옵션명, 옵션상세명, 리턴문자열, 뎁스, 마지막 뎁스
        *	배열양식
        *	var optnArr = [
        *		{"OPTN_CNT": 2, "OPTN_NM":"11", "OPTN_DTL_NM":"111", "OPTN_DTL_ITM_NO":"1"},
        *		{"OPTN_CNT": 2, "OPTN_NM":"11", "OPTN_DTL_NM":"222", "OPTN_DTL_ITM_NO":"2"},
        *		{"OPTN_CNT": 3, "OPTN_NM":"22", "OPTN_DTL_NM":"333", "OPTN_DTL_ITM_NO":"1"},
        *		{"OPTN_CNT": 3, "OPTN_NM":"22", "OPTN_DTL_NM":"444", "OPTN_DTL_ITM_NO":"2"},
        *		{"OPTN_CNT": 3, "OPTN_NM":"22", "OPTN_DTL_NM":"555", "OPTN_DTL_ITM_NO":"3"},
        *		{"OPTN_CNT": 2, "OPTN_NM":"33", "OPTN_DTL_NM":"666", "OPTN_DTL_ITM_NO":"1"},
        *		{"OPTN_CNT": 2, "OPTN_NM":"33", "OPTN_DTL_NM":"777", "OPTN_DTL_ITM_NO":"2"},
        *	];
        */
        this.bindProductConnect = function(arr, startRow, optnNm, optnDtlNm, str, optnDtlItmNo, nos, depth, lastDepth){
        	var recoverYn = this.ds_prdConTemp.rowcount>0;
        	for(var i=startRow; i<arr.length; i++){
        		var OPTN_NM = arr[i].get('OPTN_NM');
        		var OPTN_DTL_NM = arr[i].get('OPTN_DTL_NM');
        		var OPTN_DTL_ITM_NO = arr[i].get('OPTN_DTL_ITM_NO');
        		if(OPTN_NM != optnNm){
        			var d = depth + 1; //뎁스
        			var c = i+1; //다음
        			if(typeof str == 'undefined' || this.gfn_isNull(str)){
        				str = optnDtlNm
        			}
        			if(this.gfn_isNull(nos)){
        				nos = optnDtlItmNo
        			}
        			var s = str + ',' + OPTN_DTL_NM; //리턴 문자열
        			var nos_s = nos+'_'+OPTN_DTL_ITM_NO;
        			if(d == lastDepth){	//마지막 뎁스일때 값 세팅
        				var lastStr = this.gfn_allTrim(s);
        				var lastNos = this.gfn_allTrim(nos_s);
        				var optnSplit = lastStr.split(",");
        				var nRow = this.ds_prdCon.addRow();

        				var findStr = "";	//맵핑상품ID복구용
        				for(var j=0; j<optnSplit.length; j++){
        					var bindOptnNm = optnSplit[j];
        					if(typeof bindOptnNm == 'undefined' || bindOptnNm == 'undefined'){ bindOptnNm = ""; }
        					this.ds_prdCon.setColumn(nRow, j, bindOptnNm);

        					if(recoverYn){
        						findStr = findStr + (this.gfn_isNull(findStr)?"":" && ") + this.ds_prdConTemp.getColID(j) + "== '" + optnSplit[j] + "'";
        					}
        				}
        				this.ds_prdCon.setColumn(nRow, "OPTN_DTL_ITM_MAPP_CTS", lastNos);

        				if(recoverYn){//상품연결 기존값이 존재할경우 맵핑상품ID 재세팅
        					var fRow = this.ds_prdConTemp.findRowExpr(findStr);
        					if(fRow > -1){
        						var MAPP_PRD_ID = this.ds_prdConTemp.getColumn(fRow, "MAPP_PRD_ID");
        						var PRD_NM = this.ds_prdConTemp.getColumn(fRow, "PRD_NM");
        						var ATTR_VAL = this.ds_prdConTemp.getColumn(fRow, "ATTR_VAL");

        						this.ds_prdCon.addColumn("MAPP_PRD_ID", "string");
        						this.ds_prdCon.addColumn("PRD_NM", "string");
        						this.ds_prdCon.addColumn("ATTR_VAL", "string");
        						this.ds_prdCon.setColumn(nRow, "MAPP_PRD_ID", MAPP_PRD_ID);
        						this.ds_prdCon.setColumn(nRow, "PRD_NM", PRD_NM);
        						this.ds_prdCon.setColumn(nRow, "ATTR_VAL", ATTR_VAL);
        					}
        				}

        			}else{
        				//조건에 만족할때까지 자신호출
        				this.bindProductConnect(arr, c, OPTN_NM, OPTN_DTL_NM, s, optnDtlItmNo, nos_s, d, lastDepth);
        			}
        		}
        	}
        };

        //상품연결 그리드 생성
        this.makeProductConnectGrid = function(){
        	if(this.rdo_dispPrdSprCd.value=='A'){

        		for(var i=0; i<this.ds_optnBasis.rowcount; i++){
        			var fRow = this.ds_optnDtl.findRowExpr("OPTN_ITM_NO=="+this.ds_optnBasis.getColumn(i, "OPTN_ITM_NO"));
        			if(fRow < 0){
        				//alert(this.ds_optnBasis.getColumn(i, "OPTN_NM")+' 옵션에대한 상세옵션이 존재하지 않습니다.');
        				alert(this.ds_optnBasis.getColumn(i, "OPTN_NM")+this.gfn_getMessage('ERRP000278'));
        				return;
        			}
        		}

        		this.ds_prdConTemp.clearData();
        		this.ds_prdConTemp.copyData(this.ds_prdCon, true);	//기존데이터 복구용
        		//초기화
        		this.ds_prdCon.clear();
        		this.grd_prdCon.deleteContentsRow("head", 0);
        		this.grd_prdCon.deleteContentsRow("body", 0);
        		this.grd_prdCon.appendContentsRow("head");
        		this.grd_prdCon.appendContentsRow("body");

        		//그리드 설정
        		var basisCnt = this.ds_optnBasis.rowcount;
        		var colCnt = 0;
        		var optnArr = new Array;
        		var dtlMapCnt = 0;
        		var TMP_OPTN_CNT = 0;
        		for(var i=0; i<basisCnt; i++){
        			var OPTN_NM = this.ds_optnBasis.getColumn(i, "OPTN_NM");
        			var MAND_YN = this.ds_optnBasis.getColumn(i, "MAND_YN");
        			var IPT_TYPE_CD = this.ds_optnBasis.getColumn(i, "IPT_TYPE_CD");

        			if(MAND_YN == "Y" && (IPT_TYPE_CD == '1' || IPT_TYPE_CD == '4')){
        				//데이터셋 컬럼 세팅
        				this.ds_prdCon.addColumn(OPTN_NM, "string");

        				//그리드 컬럼세팅
        				this.grd_prdCon.appendContentsCol();
        				var size = 250;
        				if(typeof OPTN_NM != 'undefined'){
        					size = OPTN_NM.length*40>250?OPTN_NM.length*40:250;
        				}
        				this.grd_prdCon.setFormatColProperty(colCnt, "size", size);
        				this.grd_prdCon.setCellProperty("head", colCnt, "text", OPTN_NM);
        				this.grd_prdCon.setCellProperty("body", colCnt, "text", "bind:"+OPTN_NM);

        				for(var j=0; j<this.ds_optnDtl.rowcount; j++){
        					var OPTN_CNT = this.ds_optnDtl.getColumn(j, "OPTN_CNT");
        					var OPTN_NM_SUB = this.ds_optnDtl.getColumn(j, "OPTN_NM");
        					var OPTN_DTL_NM = this.ds_optnDtl.getColumn(j, "OPTN_DTL_NM");
        					var OPTN_DTL_ITM_NO = this.ds_optnDtl.getColumn(j, "OPTN_DTL_ITM_NO");
        					var dtlMap = new Map();
        					if(OPTN_NM == OPTN_NM_SUB){
        						if(typeof OPTN_CNT != 'undefined'){
        							TMP_OPTN_CNT = OPTN_CNT;
        						}
        						dtlMap.set("OPTN_CNT", TMP_OPTN_CNT);
        						dtlMap.set("OPTN_NM", OPTN_NM_SUB);
        						dtlMap.set("OPTN_DTL_NM", OPTN_DTL_NM);
        						dtlMap.set("OPTN_DTL_ITM_NO", OPTN_DTL_ITM_NO);
        						optnArr[dtlMapCnt] = dtlMap;
        						dtlMapCnt = dtlMapCnt + 1;
        					}
        				}
        				colCnt = colCnt + 1;
        			}
        		}
        		this.ds_prdCon.addColumn('OPTN_DTL_ITM_MAPP_CTS', "string");

        		if(colCnt == 0){
        			//alert('상품연결 조건에 만족하는 옵션이 없습니다.');
        			return;
        		}

        		//데이터 바인드 호출
        		this.ds_prdCon.clearData();
        		var tmp = "";
        		var singleStr = '';
        		for(var i=0; i<optnArr.length; i++){
        			var OPTN_NM = optnArr[i].get("OPTN_NM");
        			var OPTN_DTL_NM = optnArr[i].get("OPTN_DTL_NM");
        			var OPTN_DTL_ITM_NO = optnArr[i].get("OPTN_DTL_ITM_NO");
        			if(colCnt == 1){	//옵션 1개일경우 조건
        				var nRow = this.ds_prdCon.addRow();
        				this.ds_prdCon.setColumn(i, 0, OPTN_DTL_NM);
        				this.ds_prdCon.setColumn(i, 1, OPTN_DTL_ITM_NO);

        				var fRow = this.ds_prdConTemp.findRowExpr(OPTN_NM + "== '" + OPTN_DTL_NM + "'");
        				if(fRow > -1){
        					var MAPP_PRD_ID = this.ds_prdConTemp.getColumn(fRow, "MAPP_PRD_ID");
        					var PRD_NM = this.ds_prdConTemp.getColumn(fRow, "PRD_NM");
        					var ATTR_VAL = this.ds_prdConTemp.getColumn(fRow, "ATTR_VAL");

        					this.ds_prdCon.addColumn("MAPP_PRD_ID", "string");
        					this.ds_prdCon.addColumn("PRD_NM", "string");
        					this.ds_prdCon.addColumn("ATTR_VAL", "string");
        					this.ds_prdCon.setColumn(nRow, "MAPP_PRD_ID", MAPP_PRD_ID);
        					this.ds_prdCon.setColumn(nRow, "PRD_NM", PRD_NM);
        					this.ds_prdCon.setColumn(nRow, "ATTR_VAL", ATTR_VAL);
        				}
        			}else{
        				if(tmp == '' || tmp == OPTN_NM){
        					if(this.gfn_isNull(OPTN_DTL_NM)){
        						//alert('상세옵션명을 설정해주세요.');
        						//break;
        					}
        					this.bindProductConnect(optnArr, i, OPTN_NM, OPTN_DTL_NM, null, OPTN_DTL_ITM_NO, "", 1, colCnt);
        				}else{
        					break;
        				}
        			}
        			tmp = OPTN_NM;
        		}

        		//상품연결
        		this.grd_prdCon.appendContentsCol();
        		this.grd_prdCon.appendContentsCol();
        		for(var i=0; i<3; i++){
        			this.grd_prdCon.setCellProperty("head", colCnt+i, "align", "center");
        			this.grd_prdCon.setFormatColProperty(colCnt+i, "size", 100);
        			this.grd_prdCon.setCellProperty("head", colCnt+i, "text", "상품 연결");
        			this.grd_prdCon.setCellProperty("head", colCnt+i, "cssclass", "grd_WF_bg_image");
        			this.grd_prdCon.setCellProperty("body", colCnt+i, "displaytype", "editcontrol");
        			this.grd_prdCon.setCellProperty("body", colCnt+i, "edittype", "text");

        			if(i==0){	//상품ID
        				this.ds_prdCon.addColumn("MAPP_PRD_ID", "string");
        				this.grd_prdCon.setCellProperty("body", colCnt+i, "text", "bind:MAPP_PRD_ID");
        			}else if(i==1){	//상품명
        				this.ds_prdCon.addColumn("PRD_NM", "string");
        				this.grd_prdCon.setCellProperty("body", colCnt+i, "text", "bind:PRD_NM");
        			}else if(i==2){	//대표규격
        				this.ds_prdCon.addColumn("ATTR_VAL", "string");
        				this.grd_prdCon.setCellProperty("body", colCnt+i, "text", "bind:ATTR_VAL");
        			}

        		}
        		this.grd_prdCon.setCellProperty("body", colCnt+2, "expandshow", "show");
        		this.grd_prdCon.setCellProperty("body", colCnt+2, "expandsize", "22");
        		this.grd_prdCon.mergeContentsCell("head", 0, colCnt, 0, colCnt+2, colCnt, false);
        		for(var i=0; i<(this.ds_prdCon.rowcount+1); i++){
        			this.grd_prdCon.setFormatRowProperty(i, "size", 31);
        		}

        		//그리드 바인드 데이타셋
        		this.grd_prdCon.set_binddataset(this.ds_prdCon);
        		this.fn_resize_grd(this.grd_prdCon);

        	}
        };

        //상세옵션 생성 (Basis 데이터셋, Dtl 데이터셋, dtl임시저장데이터셋, dtl그리드셋, 추가여부)
        this.fn_optnDtlAddRow = function(oDs1, oDs2, oGrd1, addCol){
        	for(var i=0; i<oDs1.rowcount; i++){
        		var optnNm = oDs1.getColumn(i, addCol+"OPTN_NM");
        		if(this.gfn_isNull(optnNm)){
        			//alert('먼저 옵션을 설정해주세요.');
        			alert(this.gfn_getMessage('ERRP000279'));
        			return false;
        		}
        	}
        	var optnCnt = oDs1.rowcount;
        	if(optnCnt>0){
        		oGrd1.set_enableredraw(false);

        		oDs2.clearData();
        		for(var i=0; i<oDs1.rowcount; i++){
        			var optnNm = oDs1.getColumn(i, addCol+"OPTN_NM");
        			var optnItmNo = oDs1.getColumn(i, addCol+"OPTN_ITM_NO");
        			var iptTypeCd = oDs1.getColumn(i, "IPT_TYPE_CD");
        			var atflYn = oDs1.getColumn(i, "ATFL_YN");

        			var nRow = oDs2.addRow();
        			oDs2.setColumn(nRow, addCol+"OPTN_NM", optnNm);
        			oDs2.setColumn(nRow, addCol+"OPTN_ITM_NO", optnItmNo);
        			oDs2.setColumn(nRow, addCol+"OPTN_CNT", 1);
        			oDs2.setColumn(nRow, "SRT_SO", 1);
        			oDs2.setColumn(nRow, "IPT_TYPE_CD", iptTypeCd);
        			oDs2.setColumn(nRow, "ATFL_YN", atflYn);
        		}

        		this.resetOptnDtlItmNo(oDs2, addCol);

        		oGrd1.set_enableredraw(true);
        	}else{
        		//alert('먼저 옵션을 설정해주세요.');
        		alert(this.gfn_getMessage('ERRP000279'));
        	}

        	this.fn_resize_grd(oGrd1);
        }

        //옵션 번호 재설정
        this.resetOptnItmNo = function(oDs1, addCol){
        	var tmpCnt = 0;
        	for(var i=0; i<oDs1.rowcount; i++){
        		var OPTN_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_ITM_NO");
        		if(typeof OPTN_ITM_NO != 'undefined' || !this.gfn_isNull(OPTN_ITM_NO)){
        			oDs1.setColumn(i, addCol+"OPTN_ITM_NO", OPTN_ITM_NO);
        			if(OPTN_ITM_NO > nexacro.toNumber(tmpCnt)){
        				tmpCnt = OPTN_ITM_NO;
        			}
        		}else{
        			oDs1.setColumn(i, addCol+"OPTN_ITM_NO", nexacro.toNumber(tmpCnt)+1);
        		}
        	}
        };

        //상세옵션 번호 재설정
        this.resetOptnDtlItmNoByItmNo = function(oDs1, optnItmNo, addCol){
        	var tmpItmDtlNo = 0;
        	var fRows = oDs1.extractRows(addCol+"OPTN_ITM_NO=="+optnItmNo);
        	for(var i=fRows[0]; i<(fRows[0] + fRows.length); i++){
        		var OPTN_DTL_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_DTL_ITM_NO");
        		if(typeof OPTN_DTL_ITM_NO != 'undefined' && !this.gfn_isNull(OPTN_DTL_ITM_NO)){
        			oDs1.setColumn(i, addCol+"OPTN_DTL_ITM_NO", OPTN_DTL_ITM_NO);
        			if(OPTN_DTL_ITM_NO > nexacro.toNumber(tmpItmDtlNo)){
        				tmpItmDtlNo = OPTN_DTL_ITM_NO;
        			}else{
        				if(nexacro.toNumber(tmpItmDtlNo) > 0){
        					tmpItmDtlNo = nexacro.toNumber(tmpItmDtlNo);
        				}else{
        					tmpItmDtlNo = 1;
        				}
        			}
        		}else{
        			tmpItmDtlNo = nexacro.toNumber(tmpItmDtlNo)+1;
        			oDs1.setColumn(i, addCol+"OPTN_DTL_ITM_NO", tmpItmDtlNo);
        		}
        	}
        };

        //상세옵션 번호 전체 재설정
        this.resetOptnDtlItmNo = function(oDs1, addCol){
        	var tmpItmNo = '';
        	var tmpItmDtlNo = 0;
        	for(var i=0; i<oDs1.rowcount; i++){
        		var OPTN_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_ITM_NO");
        		var OPTN_DTL_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_DTL_ITM_NO");

        		if(typeof OPTN_DTL_ITM_NO != 'undefined' && !this.gfn_isNull(OPTN_DTL_ITM_NO)){
        			oDs1.setColumn(i, addCol+"OPTN_DTL_ITM_NO", OPTN_DTL_ITM_NO);
        			if(OPTN_DTL_ITM_NO > nexacro.toNumber(tmpItmDtlNo)){
        				tmpItmDtlNo = OPTN_DTL_ITM_NO;
        			}else{
        				if(nexacro.toNumber(tmpItmDtlNo) > 0){
        					tmpItmDtlNo = nexacro.toNumber(tmpItmDtlNo);
        				}else{
        					tmpItmDtlNo = 1;
        				}
        			}
        		}else{
        			if(tmpItmNo != OPTN_ITM_NO){
        				tmpItmDtlNo = 1;
        				oDs1.setColumn(i, addCol+"OPTN_DTL_ITM_NO", tmpItmDtlNo);
        			}else{
        				tmpItmDtlNo = nexacro.toNumber(tmpItmDtlNo)+1;
        				oDs1.setColumn(i, addCol+"OPTN_DTL_ITM_NO", tmpItmDtlNo);
        			}
        		}
        		tmpItmNo = OPTN_ITM_NO;
        	}
        };

        //전시구분 컨트롤
        this.fn_dispSprControl = function(val){
        	if(val == 'A'){
        		this.btn_prdCon.set_enable(true);
        		this.btn_prdIdMultiInput.set_visible(true);
        		this.makeProductConnectGrid();
        		this.fn_resize_grd(this.grd_prdCon);
        	}else{
        		this.btn_prdCon.set_enable(false);
        		this.btn_prdIdMultiInput.set_visible(false);
        		this.grd_prdCon.set_height(0);
        	}
        	this.resetScroll();
        }

        //추가정보 세팅여부 컨트롤
        this.fn_addInfoControl = function(val){
        	if(val == 'Y'){
        		this.btn_addAddOptnBasis.set_enable(true);
        		this.btn_delAddOptnBasis.set_enable(true);
        		this.fn_resize_grd(this.grd_addOptnBasis);

        		this.btn_addAddOptnDtl.set_enable(true);
        		this.fn_resize_grd(this.grd_addOptnDtl);
        	}else{
        		this.btn_addAddOptnBasis.set_enable(false);
        		this.btn_delAddOptnBasis.set_enable(false);
        		this.grd_addOptnBasis.set_height(0);

        		this.btn_addAddOptnDtl.set_enable(false);
        		this.grd_addOptnDtl.set_height(0);
        	}
        	this.resetScroll();
        }

        //그리드 리사이징
        this.fn_resize_grd = function(grdId, pHeight){
        	var nH = grdId.getRealRowFullSize();
        	if(typeof pHeight == 'undefined'){ pHeight = 62; }
        	if(pHeight > nH){
        		nH = pHeight;
        	}
        	grdId.set_height(nH + 2);

        	this.resetScroll();
        }

        //상세 데이터셋 이벤트 (개수 조정)
        //이벤트 DTL그리드, 이벤트 Dtl 데이터셋 , 삭제데이터셋, e, addcol
        this.fn_dtlDataSetCntEvent = function(oGrd1, oDs1, oDs2, e, addCol){
        	if(e.newvalue > 0){
        		oGrd1.set_enableredraw(false);
        		var oldvalue = nexacro.toNumber(e.oldvalue);
        		var newvalue = nexacro.toNumber(e.newvalue);

        		if(oldvalue > newvalue){	//개수줄었을때
        			for(var i=e.row+oldvalue-1; i>=e.row+newvalue; i--){
        				var PRD_CLCD = oDs1.getColumn(i, "PRD_CLCD");
        				if(!this.gfn_isNull(PRD_CLCD)){	//DB삭제 항목
        					var nRow = oDs2.addRow();
        					oDs2.setColumn(nRow, "OPTN_ITM_NO", oDs1.getColumn(i, addCol+"OPTN_ITM_NO"));
        					oDs2.setColumn(nRow, "OPTN_DTL_ITM_NO", oDs1.getColumn(i, addCol+"OPTN_DTL_ITM_NO"));
        					oDs2.setColumn(nRow, "DOC_REG_ID", oDs1.getColumn(i, "DOC_REG_ID"));
        					oDs2.setColumn(nRow, "ASIS_DOC_REG_ID", oDs1.getColumn(i, "ASIS_DOC_REG_ID"));
        					oDs2.setColumn(nRow, "IPT_TYPE_CD", oDs1.getColumn(i, "IPT_TYPE_CD"));
        					oDs2.setColumn(nRow, "TYPE", addCol+"OPTN_DTL");
        				}

        				oDs1.deleteRow(i);
        			}

        			//순서변경후 개수 대입
        			for(var j=e.row; j<e.row+newvalue; j++){
        				oDs1.setColumn(j, addCol+"OPTN_CNT", oDs1.getColumn(e.row, addCol+"OPTN_CNT"));
        			}
        		}else{	//늘었을때
        			for(var i=e.row+oldvalue; i<e.row+newvalue; i++){
        				var nRow = oDs1.insertRow(i);
        				oDs1.setColumn(nRow, addCol+"OPTN_NM", oDs1.getColumn(e.row, addCol+"OPTN_NM"));
        				oDs1.setColumn(nRow, addCol+"OPTN_ITM_NO", oDs1.getColumn(e.row, addCol+"OPTN_ITM_NO"));
        				oDs1.setColumn(nRow, "IPT_TYPE_CD", oDs1.getColumn(e.row, "IPT_TYPE_CD"));
        				oDs1.setColumn(nRow, addCol+"OPTN_CNT", oDs1.getColumn(e.row, addCol+"OPTN_CNT"));
        			}
        			//순서변경후 개수 대입
        			for(var j=e.row; j<e.row+newvalue; j++){
        				oDs1.setColumn(j, addCol+"OPTN_CNT", oDs1.getColumn(e.row, addCol+"OPTN_CNT"));
        			}
        			this.resetOptnDtlItmNoByItmNo(oDs1, oDs1.getColumn(e.row, addCol+"OPTN_ITM_NO"), addCol);
        			//this.resetOptnDtlItmNo(oDs1, addCol);
        		}
        		this.fn_resetSrtSo(oDs1, oDs1.getColumn(e.row, addCol+"OPTN_ITM_NO"), addCol);
        		oGrd1.set_enableredraw(true);

        		if(addCol == ""){
        			var OPTN_ITM_NO = oDs1.getColumn(e.row, "OPTN_ITM_NO");
        			var fRow = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+OPTN_ITM_NO);
        			var IPT_TYPE_CD = this.ds_optnBasis.getColumn(fRow, "IPT_TYPE_CD");
        			var MAND_YN = this.ds_optnBasis.getColumn(fRow, "MAND_YN");
        			if(MAND_YN=='Y' && (IPT_TYPE_CD == '1' || IPT_TYPE_CD == '4')){
        				this.makeProductConnectGrid();
        			}
        		}
        	}else{
        		oDs1.setColumn(e.row, addCol+"OPTN_CNT", e.oldvalue);
        	}
        }

        //삭제 버튼 클릭 이벤트
        //basis데이터셋, dtl데이터셋, del데이터셋
        this.fn_deleteOptnBasis = function(oDs1, oDs2, oDs3, addCol){
        	var checkedRow = new Array();
        	for(var i=0; i<oDs1.rowcount; i++) {
        		if(oDs1.getColumn(i, "CHK") == "1"){
        			checkedRow.push(i);
        		}
        	}

        	if(checkedRow.length <= 0){
        		//alert('선택된 데이터가 없습니다.');
        		alert(this.gfn_getMessage('ERRP000280'));
        		return false;
        	}
        	checkedRow = new Array();

        	if(this.confirm(this.gfn_getMessage('ERRP000281'))){	//'선택항목을 삭제하시겠습니까?'

        		for(var i=0; i<oDs1.rowcount; i++) {
        			var PRD_CLCD = oDs1.getColumn(i, "PRD_CLCD");
        			var OPTN_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_ITM_NO");
        			if(oDs1.getColumn(i, "CHK") == "1"){
        				checkedRow.push(i);
        				if(!this.gfn_isNull(PRD_CLCD)){	//DB삭제 항목
        					var nRow = oDs3.addRow();
        					oDs3.setColumn(nRow, "OPTN_ITM_NO", OPTN_ITM_NO);
        					oDs3.setColumn(nRow, "TYPE", addCol+"OPTN_BASIS");
        				}
        			}
        		}

        		var refreshPrdCon = false;
        		//상세옵션 삭제
        		if(checkedRow.length>0){
        			for(var i=0; i<checkedRow.length; i++){
        				var erow = checkedRow[i];
        				var OPTN_ITM_NO = oDs1.getColumn(erow, addCol+"OPTN_ITM_NO");
        				if(!refreshPrdCon){
        					var IPT_TYPE_CD = oDs1.getColumn(erow, "IPT_TYPE_CD");
        					var MAND_YN = oDs1.getColumn(erow, "MAND_YN");
        					if(addCol=='' && MAND_YN=='Y' && (IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4')){
        						refreshPrdCon = true;
        					}
        				}
        				var arrRows = oDs2.extractRows(addCol+"OPTN_ITM_NO=="+OPTN_ITM_NO);
        				for(var j=0; j<arrRows.length; j++){
        					var dtlRow = arrRows[i];
        					var CO_CD = oDs2.getColumn(dtlRow, "CO_CD");
        					var PRD_CLCD = oDs2.getColumn(dtlRow, "PRD_CLCD");
        					if(!this.gfn_isNull(CO_CD) && !this.gfn_isNull(PRD_CLCD)){
        						oDs2.getColumn(dtlRow, addCol+"OPTN_ITM_NO")
        						var nRow = oDs3.addRow();
        						oDs3.setColumn(nRow, "OPTN_ITM_NO", oDs2.getColumn(dtlRow, addCol+"OPTN_ITM_NO"));
        						oDs3.setColumn(nRow, "OPTN_DTL_ITM_NO", oDs2.getColumn(dtlRow, addCol+"OPTN_DTL_ITM_NO"));
        						oDs3.setColumn(nRow, "DOC_REG_ID", oDs2.getColumn(dtlRow, addCol+"DOC_REG_ID"));
        						oDs3.setColumn(nRow, "ASIS_DOC_REG_ID", oDs2.getColumn(dtlRow, addCol+"ASIS_DOC_REG_ID"));
        						oDs3.setColumn(nRow, "IPT_TYPE_CD", oDs2.getColumn(dtlRow, addCol+"IPT_TYPE_CD"));
        						oDs3.setColumn(nRow, "TYPE", addCol+"OPTN_DTL");
        					}
        				}
        				oDs2.deleteMultiRows(arrRows);
        			}
        		}
        		oDs1.deleteMultiRows(checkedRow);

        		if(refreshPrdCon){	//상품연결에 해당하는 옵션 삭제시 상품연결 갱신
        			this.makeProductConnectGrid();
        		}
        	}
        }

        //옵션정렬값 재적용
        this.fn_resetSrtSoBasis = function(oDs){
        	for(var i=0; i<oDs.rowcount; i++){
        		oDs.setColumn(i, "SRT_SO", (i+1));
        	}
        }

        //상세옵션 정렬값 재적용
        this.fn_resetSrtSo = function(oDs, itmNo, addCol){
        	var arrRows = oDs.extractRows(addCol+"OPTN_ITM_NO ==" +itmNo);
        	if(arrRows.length>0){
        		var tCnt = 1;
        		for(var i=arrRows[0]; i<(arrRows[0]+arrRows.length); i++){
        			oDs.setColumn(i, "SRT_SO", tCnt);
        			tCnt = tCnt + 1;
        		}
        	}
        }

        //상세옵션 옵션타입 재적용
        this.fn_resetIptTypeCd = function(oDs, oGrd, itmNo, typeCd, addCol){
        	if(typeCd=='3'){
        		var arrRows = oDs.extractRows(addCol+"OPTN_ITM_NO ==" +itmNo);
        		if(arrRows.length>0){	//타입이 텍스트면 1개만 남김
        			var forlen = (arrRows[0]+arrRows.length);
        			for(var i=arrRows[0]; i<forlen; i++){
        				if(i==arrRows[0]){
        					oDs.setColumn(i, "IPT_TYPE_CD", typeCd);
        					oDs.setColumn(i, addCol+"OPTN_CNT", 1);
        					break;
        				}
        			}
        		}
        		this.fn_resize_grd(oGrd);
        	}else{
        		var arrRows = oDs.extractRows(addCol+"OPTN_ITM_NO ==" +itmNo);
        		if(arrRows.length>0){
        			for(var i=arrRows[0]; i<(arrRows[0]+arrRows.length); i++){
        				oDs.setColumn(i, "IPT_TYPE_CD", typeCd);
        			}
        		}
        	}
        }

        //저장데이터 rowtype세팅
        this.fn_setRowtype = function(oDs, i){
        	var rowType = oDs.getRowType(i);
        	var newtype = rowType==1?0:rowType==2?1:rowType==4?2:rowType==8?3:0;
        	oDs.setColumn(i, "ROW_TYPE", newtype);
        }

        //저장데이터 dtl rowtype세팅
        this.fn_setRowtypeDtl = function(oDs1, oDs2, addCol){
        	for(var i=0; i<oDs1.rowcount; i++){
        		var diffYn = false;
        		var rowType = oDs1.getRowType(i);
        		var newtype = rowType==1?0:rowType==2?1:rowType==4?2:rowType==8?3:0;
        		if(newtype==2){
        			//OPTN_DTL_NM, OPTN_DTL_CTS, DOC_REG_ID, ASIS_DOC_REG_ID, SRT_SO
        			//ADD_OPTN_DTL_NM, OPTN_DTL_CTS, SRT_SO, ATFL_YN
        			var OPTN_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_ITM_NO");
        			var OPTN_DTL_ITM_NO = oDs1.getColumn(i, addCol+"OPTN_DTL_ITM_NO");
        			var OPTN_DTL_NM = oDs1.getColumn(i, addCol+"OPTN_DTL_NM");
        			var OPTN_DTL_CTS = oDs1.getColumn(i, "OPTN_DTL_CTS");
        			var DOC_REG_ID = oDs1.getColumn(i, "DOC_REG_ID");
        			var ASIS_DOC_REG_ID = oDs1.getColumn(i, "ASIS_DOC_REG_ID");
        			var SRT_SO = oDs1.getColumn(i, "SRT_SO");
        			var ATFL_YN = oDs1.getColumn(i, "ATFL_YN");

        			var fRow = oDs2.findRowExpr(addCol+"OPTN_ITM_NO=='"+OPTN_ITM_NO+"' &&" + addCol+"OPTN_DTL_ITM_NO=='"+OPTN_DTL_ITM_NO+"'");
        			var OPTN_DTL_NM_TEMP = oDs2.getColumn(fRow, addCol+"OPTN_DTL_NM");
        			var OPTN_DTL_CTS_TEMP = oDs2.getColumn(fRow, "OPTN_DTL_CTS");
        			var DOC_REG_ID_TEMP = oDs2.getColumn(fRow, "DOC_REG_ID");
        			var ASIS_DOC_REG_ID_TEMP = oDs2.getColumn(fRow, "ASIS_DOC_REG_ID");
        			var SRT_SO_TEMP = oDs2.getColumn(fRow, "SRT_SO");
        			var ATFL_YN_TEMP = oDs2.getColumn(fRow, "ATFL_YN");

        			if(OPTN_DTL_NM == OPTN_DTL_NM_TEMP && OPTN_DTL_CTS == OPTN_DTL_CTS_TEMP && DOC_REG_ID == DOC_REG_ID_TEMP
        				&& ASIS_DOC_REG_ID == ASIS_DOC_REG_ID_TEMP && SRT_SO == SRT_SO_TEMP && ATFL_YN == ATFL_YN_TEMP){
        				//trace('같다');
        				oDs1.setColumn(i, "ROW_TYPE", 0);
        			}else{
        				//trace('다르다');
        				oDs1.setColumn(i, "ROW_TYPE", newtype);
        			}
        		}else{
        			oDs1.setColumn(i, "ROW_TYPE", newtype);
        		}
        	}
        }

        //데이터셋 비교
        this.fn_isDiffDataSet = function() {
        	var bResult = false;

        	var row1 = this.ds_prdCon.rowcount;
        	var row2 = this.ds_prdConBackup.rowcount;
        	var col1 = this.ds_prdCon.getColCount();
        	var col2 = this.ds_prdConBackup.getColCount();

        	if(row1 != row2 || col1 != col2){
        		bResult = true;
        	}

        	if(!bResult){
        		for(var j=0; j<this.ds_prdConBackup.rowcount; j++){
        			for(var i=0; i<this.ds_prdConBackup.getColCount(); i++){
        				var colId = this.ds_prdConBackup.getColID(i);
        				var a = this.ds_prdConBackup.getColumn(j, colId);	//백업
        				var b = this.ds_prdCon.getColumn(j, colId);	//수정본

        				if(a!=b){
        					bResult = true;
        					break;
        					//trace('다르다');
        				}else{
        					//trace('같다');
        				}
        			}
        			if(bResult) { break; }
        		}
        	}
        	if(bResult){
        		this.ds_basic.setColumn(0, "PRD_CON_DIFF", "Y");
        	}

        	return bResult;
        };

        //저장 밸리데이션 체크
        this.fn_validation = function(){
        	if(this.gfn_isNull(this.edt_prdClcd.value) || this.gfn_isNull(this.edt_dispPrdNm.value) || this.gfn_isNull(this.edt_auto.value)){
        		//alert('필수값을 확인하세요.');
        		alert(this.gfn_getMessage('ERRP000282'));
        		return false;
        	}
        	if(this.ds_optnBasis.rowcount <= 0 || this.ds_optnDtl.rowcount <= 0){
        		//alert('옵션정보를 확인하세요.');
        		alert(this.gfn_getMessage('ERRP000283'));
        		return false;
        	}else{
        		//A타입일경우 상품연결을 위한 조건 체크
        		if(this.rdo_dispPrdSprCd.value == 'A'){
        			var mandRs = false;
        			for(var i=0; i<this.ds_optnBasis.rowcount; i++){
        				var MAND_YN = this.ds_optnBasis.getColumn(i, "MAND_YN");
        				var IPT_TYPE_CD = this.ds_optnBasis.getColumn(i, "IPT_TYPE_CD");
        				if(MAND_YN == 'Y' && (IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4')){
        					mandRs = true;
        					break;
        				}
        			}
        			if(!mandRs){
        				//alert('A타입일경우 필수옵션을 선택하세요.');
        				alert(this.gfn_getMessage('ERRP000284'));
        				return false;
        			}
        			for(var i=0; i<this.ds_prdCon.rowcount; i++){
        				var MAPP_PRD_ID = this.ds_prdCon.getColumn(i, "MAPP_PRD_ID");
        				if(this.gfn_isNull(MAPP_PRD_ID)){
        					//alert("상품연결항목을 확인하세요.");
        					alert(this.gfn_getMessage('ERRP000285'));
        					return false;
        				}
        			}
        		}

        		//입력타입 및 상세옵션 항목 체크
        		for(var i=0; i<this.ds_optnBasis.rowcount; i++){
        			var OPTN_NM = this.ds_optnBasis.getColumn(i, "OPTN_NM");
        			var IPT_TYPE_CD = this.ds_optnBasis.getColumn(i, "IPT_TYPE_CD");
        			if(this.gfn_isNull(OPTN_NM)){
        				//alert("옵션명을 입력하세요.");
        				alert(this.gfn_getMessage('ERRP000286'));
        				return false;
        			}
        			if(this.gfn_isNull(IPT_TYPE_CD)){
        				//alert("입력타입을 선택하세요.");
        				alert(this.gfn_getMessage('ERRP000287'));
        				return false;
        			}
        			var fRow = this.ds_optnDtl.findRowExpr("OPTN_ITM_NO=="+this.ds_optnBasis.getColumn(i, "OPTN_ITM_NO"));
        			if(fRow < 0){
        				//alert(this.ds_optnBasis.getColumn(i, "OPTN_NM")+' 옵션에대한 상세옵션이 존재하지 않습니다.');
        				alert(this.ds_optnBasis.getColumn(i, "OPTN_NM")+this.gfn_getMessage('ERRP000278'));
        				return false;
        			}
        		}

        		//상세항목 체크
        		var isNotNullCts = false;
        		var tmpOPTN_ITM_NO = '';
        		for(var i=0; i<this.ds_optnDtl.rowcount; i++){
        			var IPT_TYPE_CD = this.ds_optnDtl.getColumn(i, "IPT_TYPE_CD");
        			var OPTN_DTL_NM = this.ds_optnDtl.getColumn(i, "OPTN_DTL_NM");
        			if(IPT_TYPE_CD != '3' && this.gfn_isNull(OPTN_DTL_NM)){
        				//alert('상세항목을 입력하세요.');
        				alert(this.gfn_getMessage('ERRP000288'));
        				return false;
        			}
        			if(IPT_TYPE_CD == '4'){
        				var OPTN_ITM_NO = this.ds_optnDtl.getColumn(i, "OPTN_ITM_NO");
        				var OPTN_DTL_CTS = this.ds_optnDtl.getColumn(i, "OPTN_DTL_CTS");
        				var DOC_REG_ID = this.ds_optnDtl.getColumn(i, "DOC_REG_ID");
        				if(!isNotNullCts || tmpOPTN_ITM_NO!=OPTN_ITM_NO){
        					isNotNullCts = false;
        					var fRows = this.ds_optnDtl.extractRows("OPTN_ITM_NO=="+OPTN_ITM_NO);
        					var forLen = fRows.length;
        					for(var j=fRows[0]; j<(fRows[0]+forLen); j++){
        						var OPTN_DTL_CTS2 = this.ds_optnDtl.getColumn(j, "OPTN_DTL_CTS");
        						if(!this.gfn_isNull(OPTN_DTL_CTS2)){
        							isNotNullCts = true;
        						}
        					}
        				}
        				if(isNotNullCts && this.gfn_isNull(OPTN_DTL_CTS)){
        					//alert('상세설명을 모두 입력하세요.');
        					alert(this.gfn_getMessage('ERRP000289'));
        					return false;
        				}
        				if(!this.gfn_isNull(OPTN_DTL_CTS) && this.gfn_isNull(DOC_REG_ID)){
        					//alert('상세옵션 이미지를 등록하세요.');
        					alert(this.gfn_getMessage('ERRP000290'));
        					return false;
        				}
        				tmpOPTN_ITM_NO = OPTN_ITM_NO;
        			}
        		}
        	}

        	var sprCd = this.rdo_dispPrdSprCd.value;
        	if(sprCd == "A"){
        		if(this.ds_prdCon.rowcount <= 0){
        			//alert('상품연결정보를 확인하세요.');
        			alert(this.gfn_getMessage('ERRP000291'));
        			return false;
        		}
        	}
        	var addYn = this.rdo_addInfoSetYn.value;
        	if(addYn == "Y"){
        		if(this.ds_addOptnBasis.rowcount <= 0 || this.ds_addOptnDtl.rowcount <= 0){
        			//alert('추가정보를 확인하세요.');
        			alert(this.gfn_getMessage('ERRP000292'));
        			return false;
        		}else{
        			for(var i=0; i<this.ds_addOptnBasis.rowcount; i++){	//옵션 항목 체크
        				var OPTN_NM = this.ds_addOptnBasis.getColumn(i, "ADD_OPTN_NM");
        				var IPT_TYPE_CD = this.ds_addOptnBasis.getColumn(i, "IPT_TYPE_CD");
        				var ATFL_YN = this.ds_addOptnBasis.getColumn(i, "ATFL_YN");
        				if(this.gfn_isNull(OPTN_NM)){
        					//alert("추가정보명을 입력하세요.");
        					alert(this.gfn_getMessage('ERRP000293'));
        					return false;
        				}
        				if(ATFL_YN != 'Y' && this.gfn_isNull(IPT_TYPE_CD)){
        					//alert("추가정보 입력타입을 선택하세요.");
        					alert(this.gfn_getMessage('ERRP000294'));
        					return false;
        				}
        				var fRow = this.ds_addOptnDtl.findRowExpr("ADD_OPTN_ITM_NO=="+this.ds_addOptnBasis.getColumn(i, "ADD_OPTN_ITM_NO"));
        				if(fRow < 0){
        					//alert(this.ds_addOptnBasis.getColumn(i, "ADD_OPTN_NM")+' 추가정보에 대한 상세옵션이 존재하지 않습니다.');
        					alert(this.ds_addOptnBasis.getColumn(i, "ADD_OPTN_NM")+this.gfn_getMessage('ERRP000295'));
        					return false;
        				}
        			}

        			//상세항목 체크
        			for(var i=0; i<this.ds_addOptnDtl.rowcount; i++){
        				var ADD_OPTN_ITM_NO = this.ds_addOptnDtl.getColumn(i, "ADD_OPTN_ITM_NO");
        				var ADD_OPTN_DTL_NM = this.ds_addOptnDtl.getColumn(i, "ADD_OPTN_DTL_NM");
        				var ATFL_YN = this.ds_addOptnDtl.getColumn(i, "ATFL_YN");
        				var IPT_TYPE_CD = this.ds_addOptnDtl.getColumn(i, "IPT_TYPE_CD");
        				if(ATFL_YN != 'Y' && IPT_TYPE_CD != '3' && this.gfn_isNull(ADD_OPTN_DTL_NM)){
        					//alert('상세 추가정보를 입력하세요.');
        					alert(this.gfn_getMessage('ERRP000296'));
        					return false;
        				}
        			}

        		}
        	}

        	return true;
        }

        this.fn_procSave = function(){
        	for(var i=0; i<this.ds_basic.rowcount; i++){
        		this.ds_basic.setColumn(i, "CO_CD", this.coCd);
        		this.ds_basic.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);
        	}
        	for(var i=0; i<this.ds_optnBasis.rowcount; i++){
        		this.ds_optnBasis.setColumn(i, "CO_CD", this.coCd);
        		this.ds_optnBasis.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);

        		this.fn_setRowtype(this.ds_optnBasis, i);	//rowType 수기세팅
        	}
        	for(var i=0; i<this.ds_optnDtl.rowcount; i++){
        		this.ds_optnDtl.setColumn(i, "CO_CD", this.coCd);
        		this.ds_optnDtl.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);

        		this.fn_setRowtypeDtl(this.ds_optnDtl, this.ds_optnDtlTemp, "");	//rowType 수기세팅
        	}
        	for(var i=0; i<this.ds_addOptnBasis.rowcount; i++){
        		this.ds_addOptnBasis.setColumn(i, "CO_CD", this.coCd);
        		this.ds_addOptnBasis.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);

        		this.fn_setRowtype(this.ds_addOptnBasis, i);	//rowType 수기세팅
        	}
        	for(var i=0; i<this.ds_addOptnDtl.rowcount; i++){
        		this.ds_addOptnDtl.setColumn(i, "CO_CD", this.coCd);
        		this.ds_addOptnDtl.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);

        		this.fn_setRowtypeDtl(this.ds_addOptnDtl, this.ds_addOptnDtlTemp, "ADD_");	//rowType 수기세팅
        	}
        	for(var i=0; i<this.ds_delOptn.rowcount; i++){
        		this.ds_delOptn.setColumn(i, "CO_CD", this.coCd);
        		this.ds_delOptn.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);
        	}
        	this.ds_prdCon.addColumn("CO_CD", "string");
        	this.ds_prdCon.addColumn("PRD_CLCD", "string");
        	this.ds_prdCon.addColumn("OPTN_DTL_MAPP_ITM_NO", "string");
        	for(var i=0; i<this.ds_prdCon.rowcount; i++){
        		this.ds_prdCon.setColumn(i, "CO_CD", this.coCd);
        		this.ds_prdCon.setColumn(i, "PRD_CLCD", this.edt_prdClcd.value);
        		this.ds_prdCon.setColumn(i, "OPTN_DTL_MAPP_ITM_NO", (i+1));
        	}

        	this.fn_save();
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////첨부파일 관련
        //파일 선택 후 창 닫았을 때
        this.fileDialog_onclose = function(obj,e)
        {
        	for (var i = 0, len = e.virtualfiles.length, vFile; i < len; i++){
        		vFile = e.virtualfiles[i];
        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
        		vFile.open(null, VirtualFile.openRead);
        	}
        };

        //업로드 완료된 후 성공코드 값이 전달되었을 때
        this.FileDialog_VirtualFile_onsuccess = function(obj, e)
        {
        	switch (e.reason) {
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.fileName = obj.filename;
        			//this.ds_optnDtl.setColumn(this.seletedImgRow, "ATFL_NM", obj.filename);

        			//파일리스트 초기화
        			this.FileUpTransfer.clearFileList();
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			this.FileUpTransfer.setPostData("pgmId", 'SSP_BO_NA_25');
        			this.FileUpTransfer.setPostData("mnuSeq", '1');
        			this.FileUpTransfer.upload("/co/file-upload.do");

        			obj.close();

        			break;
        	}
        }

        //이미지 업로드 실행
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	//파일 재첨부시 기존파일 삭제
        	var DOC_REG_ID = this.ds_optnDtl.getColumn(this.seletedImgRow, "DOC_REG_ID");
        	var ASIS_DOC_REG_ID = this.ds_optnDtl.getColumn(this.seletedImgRow, "ASIS_DOC_REG_ID");
        	if(!this.gfn_isNull(DOC_REG_ID) && ASIS_DOC_REG_ID!=DOC_REG_ID){
        		this.ds_fileDel.clearData();
        		var nRow = this.ds_fileDel.addRow();
        		this.ds_fileDel.setColumn(nRow, "docRegId", DOC_REG_ID);
        		this.fn_fileDel("");
        	}

        	this.ProgressBar.set_visible(false)

        	var objCallDs = e.datasets[0];
        	this.ds_file.copyData(e.datasets[0], true);
        	var new_docRegId = objCallDs.getColumn(0, "docRegId");
        	this.ds_optnDtl.setColumn(this.seletedImgRow, "DOC_REG_ID", new_docRegId);
        	this.ds_optnDtl.setColumn(this.seletedImgRow, "ATFL_NM", this.fileName);

        };

        //업로드 실행중
        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded, e.total);
        	this.ProgressBar.set_pos(rtnPercent);
        	this.ProgressBar.set_visible(true);
        	this.ProgressBar.set_top(this.fileOnTop);
        	this.ProgressBar.set_left(this.fileOnLeft);
        };

        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        //업로드 실패
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	console.log(obj);
        	console.log(e);
        };

        // 파일 다운로드
        this.downloadfile = function(i) {
        	var DOC_REG_ID = this.ds_optnDtl.getColumn(i, "DOC_REG_ID");
        	if(!this.gfn_isNull(DOC_REG_ID)){
        		this.FileDownTransfer.clearPostDataList();
        		this.FileDownTransfer.setPostData("docRegId", DOC_REG_ID);
        		this.FileDownTransfer.setPostData("docRegSeq", "1");
        		this.FileDownTransfer.download('/co/file-download.do');
        	}
        }

        this.fn_dataCheck = function(dataset) {
        	for(var i=0; i < dataset.rowcount; i++){
        		var sRowType = dataset.getRowType(i);

        		if( sRowType == 2 || sRowType == 4 ){
        			return true;
        		}
        	}
        	if(dataset.getDeletedRowCount() > 0){
        		return true;
        	}
        	return false;
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////첨부파일 관련

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //상품팝업
        this.btn_productPop_onclick = function(obj,e)
        {
        	if(this.pageMode == 'I'){
        		//var params = {'mallSprCd':'10', coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
        		var params = {'mallSprCd':this.mallSprCd, coCd:this.coCd, selMthdCd:'40'};
        		var options = {title:'상품군 조회'};
        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        //상품군 조회 팝업
        this.btn_prdIdPopup_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_prdClcd.value)){
        		//alert('상품군을 선택하세요.');
        		alert(this.gfn_getMessage('ERRP000297'));
        	}else{
        		var params = {coCd:this.coCd, prdClcd:this.selPrdClcd, reprPrdYn:'Y', dispStatsYn:'Y', pubOnlySprCd:'P', mallSprCd:this.mallSprCd};	//같은 카테고리, 대표상품, 진열상품, 공용
        		var options = {title:'상품ID 조회'};
        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        //===========================================================그리드 1번
        //옵션 추가 버튼
        this.btn_addOptnBasis_onclick = function(obj,e)
        {
        	if(this.ds_optnBasis.rowcount>=30){
        		//alert('옵션은 최대 30개까지 생성 가능합니다.');
        		alert(this.gfn_getMessage('ERRP000298'));
        		return;
        	}
        	if(this.gfn_isNull(this.edt_prdId.value)){
        		//alert('전시정보를 입력하세요.');
        		alert(this.gfn_getMessage('ERRP000299'));
        		return;
        	}else{
        		this.ds_optnBasis.addRow();
        		this.resetOptnItmNo(this.ds_optnBasis, "");
        		this.fn_resetSrtSoBasis(this.ds_optnBasis);

        		this.fn_resize_grd(this.grd_optnBasis);
        		this.fn_resize_grd(this.grd_optnDtl);
        	}
        };

        //basis 데이터셋 이벤트
        this.ds_optnBasis_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=='OPTN_ITM_NO'){
        		var nRow = this.ds_optnDtl.addRow();
        		this.ds_optnDtl.setColumn(nRow, e.columnid, e.newvalue);
        		this.ds_optnDtl.setColumn(nRow, "OPTN_CNT", 1);
        	}else if(e.columnid=='SRT_SO'){
        		var fRows = this.ds_optnDtl.extractRows("OPTN_ITM_NO=="+this.ds_optnBasis.getColumn(e.row, "OPTN_ITM_NO"));
        		var forLen = fRows.length;
        		var srtSo = 1;
        		for(var i=fRows[0]; i<(fRows[0]+forLen); i++){
        			this.ds_optnDtl.setColumn(i, e.columnid, srtSo);
        			srtSo = srtSo + 1;
        		}
        	}else if(e.columnid != 'ROW_TYPE'){
        		var fRows = this.ds_optnDtl.extractRows("OPTN_ITM_NO=="+this.ds_optnBasis.getColumn(e.row, "OPTN_ITM_NO"));
        		var forLen = fRows.length;
        		var srtSo = 1;
        		for(var i=fRows[0]; i<(fRows[0]+forLen); i++){
        			this.ds_optnDtl.setColumn(i, e.columnid, e.newvalue);
        		}

        		//필수옵션 변경시 상품연결 초기화
        		if(e.columnid == 'MAND_YN'){
        			var IPT_TYPE_CD = this.ds_optnBasis.getColumn(e.row, "IPT_TYPE_CD");
        			if(IPT_TYPE_CD == '1' || IPT_TYPE_CD == '4'){
        				this.makeProductConnectGrid();
        			}
        		}
        		if(e.columnid == 'IPT_TYPE_CD'){
        			var MAND_YN = this.ds_optnBasis.getColumn(e.row, "MAND_YN");
        			if(MAND_YN == 'Y' && (e.newvalue == '1' || e.newvalue == '4' || e.oldvalue == '1' || e.oldvalue == '4')){
        				this.makeProductConnectGrid();
        			}
        		}
        		if(e.columnid == 'OPTN_NM'){
        			var MAND_YN = this.ds_optnBasis.getColumn(e.row, "MAND_YN");
        			var IPT_TYPE_CD = this.ds_optnBasis.getColumn(e.row, "IPT_TYPE_CD");
        			if(MAND_YN == 'Y' && (IPT_TYPE_CD == '1' || IPT_TYPE_CD == '4')){
        				this.makeProductConnectGrid();
        			}
        		}

        	}
        };


        //옵션 삭제 버튼
        this.btn_delOptnBasis_onclick = function(obj,e)
        {
        	this.fn_deleteOptnBasis(this.ds_optnBasis, this.ds_optnDtl, this.ds_delOptn, "");
        	this.fn_resize_grd(this.grd_optnBasis);
        	this.fn_resize_grd(this.grd_optnDtl);
        };


        //옵션메인 클릭 이벤트
        this.grd_optnBasis_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_optnBasis.getCellProperty("body", e.col, "text");
        	if(bindText == 'UP' || bindText == 'DOWN'){
        		var IPT_TYPE_CD = this.ds_optnBasis.getColumn(e.row, "IPT_TYPE_CD");
        		var MAND_YN = this.ds_optnBasis.getColumn(e.row, "MAND_YN");
        		if(bindText == 'UP'){	//위로
        			this.ds_optnBasis.moveRow(e.row, e.row-1);

        			var TO_IPT_TYPE_CD = this.ds_optnBasis.getColumn(e.row-1, "IPT_TYPE_CD");
        			var TO_MAND_YN = this.ds_optnBasis.getColumn(e.row-1, "MAND_YN");
        			if((IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4') && (TO_IPT_TYPE_CD=='1' || TO_IPT_TYPE_CD=='4')){
        				if(MAND_YN == 'Y' && TO_MAND_YN == 'Y'){
        					//순서변경시 상품연결 재생성
        					this.makeProductConnectGrid();
        				}
        			}
        		}else if(bindText == 'DOWN'){	//아래로
        			this.ds_optnBasis.moveRow(e.row, e.row+1);

        			var TO_IPT_TYPE_CD = this.ds_optnBasis.getColumn(e.row+1, "IPT_TYPE_CD");
        			var TO_MAND_YN = this.ds_optnBasis.getColumn(e.row+1, "MAND_YN");
        			if((IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4') && (TO_IPT_TYPE_CD=='1' || TO_IPT_TYPE_CD=='4')){
        				if(MAND_YN == 'Y' && TO_MAND_YN == 'Y'){
        					//순서변경시 상품연결 재생성
        					this.makeProductConnectGrid();
        				}
        			}
        		}
        		this.fn_resetSrtSoBasis(this.ds_optnBasis);
        	}else if(bindText == "bind:IPT_TYPE_CD"){
        		obj.dropdownCombo();
        	}
        };

        //옵션 타입 변경
        this.grd_optnBasis_oncloseup = function(obj,e)
        {
        	this.fn_resetIptTypeCd(this.ds_optnDtl, this.grd_optnDtl,  this.ds_optnBasis.getColumn(e.row, "OPTN_ITM_NO"), e.value, "");
        	this.ds_optnBasis.setColumn(e.row, "IPT_TYPE_CD", e.value);
        };
        //===========================================================그리드 1번


        //===========================================================그리드 2번
        //상세옵션 생성
        this.btn_addOptnDtl_onclick = function(obj,e)
        {
        	this.ds_optnDtl.set_enableevent(false);
        	this.fn_optnDtlAddRow(this.ds_optnBasis, this.ds_optnDtl, this.grd_optnDtl, "");
        	this.makeProductConnectGrid();
        	this.ds_optnDtl.set_enableevent(true);
        	this.fn_resize_grd(this.grd_optnDtl);
        };

        //순서변경 및 그리드 리사이즈
        this.grd_optnDtl_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_optnDtl.getCellProperty("body", e.col, "text");
        	if(bindText == 'UP' || bindText == 'DOWN'){
        		var asis = this.ds_optnDtl.getColumn(e.row, "OPTN_ITM_NO");
        		var IPT_TYPE_CD = this.ds_optnDtl.getColumn(e.row, "IPT_TYPE_CD");
        		if(bindText == 'UP'){	//위로
        			var tobe = this.ds_optnDtl.getColumn(e.row-1, "OPTN_ITM_NO");
        			var TO_IPT_TYPE_CD = this.ds_optnDtl.getColumn(e.row-1, "IPT_TYPE_CD");
        			if(asis == tobe){
        				this.ds_optnDtl.moveRow(e.row, e.row-1);

        				if((IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4') && (TO_IPT_TYPE_CD=='1' || TO_IPT_TYPE_CD=='4')){
        					var fRow = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+asis);
        					var fRow2 = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+tobe);
        					var MAND_YN = this.ds_optnBasis.getColumn(fRow, "MAND_YN");
        					var TO_MAND_YN = this.ds_optnBasis.getColumn(fRow2, "MAND_YN");
        					if(MAND_YN == 'Y' && TO_MAND_YN == 'Y'){
        						//순서변경시 상품연결 재생성
        						this.makeProductConnectGrid();
        					}
        				}
        			}
        		}else if(bindText == 'DOWN'){	//아래로
        			var tobe = this.ds_optnDtl.getColumn(e.row+1, "OPTN_ITM_NO");
        			var TO_IPT_TYPE_CD = this.ds_optnDtl.getColumn(e.row+1, "IPT_TYPE_CD");
        			if(asis == tobe){
        				this.ds_optnDtl.moveRow(e.row, e.row+1);

        				if((IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4') || (TO_IPT_TYPE_CD=='1' || TO_IPT_TYPE_CD=='4')){
        					var fRow = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+asis);
        					var fRow2 = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+tobe);
        					var MAND_YN = this.ds_optnBasis.getColumn(fRow, "MAND_YN");
        					var TO_MAND_YN = this.ds_optnBasis.getColumn(fRow2, "MAND_YN");
        					if(MAND_YN == 'Y' && TO_MAND_YN == 'Y'){
        						//순서변경시 상품연결 재생성
        						this.makeProductConnectGrid();
        					}
        				}
        			}
        		}

        		this.fn_resetSrtSo(this.ds_optnDtl, asis, "");
        	}else if(bindText == "bind:ATFL_NM"){
        		this.downloadfile(e.row);
        	}else if(bindText == "DEL_FILE"){
        		var DOC_REG_ID = this.ds_optnDtl.getColumn(e.row, "DOC_REG_ID");
        		if(!this.gfn_isNull(DOC_REG_ID)){
        			if(this.confirm(this.gfn_getMessage('ERRP000300'))){	//'첨부파일을 삭제하시겠습니까?'
        				var ASIS_DOC_REG_ID = this.ds_optnDtl.getColumn(e.row, "ASIS_DOC_REG_ID");
        				if(DOC_REG_ID == ASIS_DOC_REG_ID){
        					this.ds_optnDtl.setColumn(e.row, "ATFL_NM", "");
        					this.ds_optnDtl.setColumn(e.row, "DOC_REG_ID", "");
        				}else{
        					this.seletedImgRow = e.row;
        					this.ds_fileDel.clearData();
        					var nRow = this.ds_fileDel.addRow();
        					this.ds_fileDel.setColumn(nRow, "docRegId", this.ds_optnDtl.getColumn(e.row, "DOC_REG_ID"));
        					this.fn_fileDel("fn_callBack");
        				}
        			}
        		}

        	}

        	this.fn_resize_grd(this.grd_optnDtl);
        };

        //상세옵션 데이터셋 이벤트(옵션 개수)
        this.ds_optnDtl_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'OPTN_CNT'){
        		this.fn_dtlDataSetCntEvent(this.grd_optnDtl, this.ds_optnDtl, this.ds_delOptn, e, "");
        	}else if(e.columnid == 'OPTN_DTL_NM'){

        		//옵션상세명 입력하면 상품연결 옵션명 갱신
        		this.grd_optnBasis.set_enableredraw(false);
        		this.ds_optnBasis.filter("MAND_YN=='Y' && (IPT_TYPE_CD=='1' || IPT_TYPE_CD=='4')");
        		if(this.ds_optnBasis.getRowCount() > 0){
        			var OPTN_ITM_NO = this.ds_optnDtl.getColumn(e.row, "OPTN_ITM_NO");
        			var OPTN_DTL_ITM_NO = this.ds_optnDtl.getColumn(e.row, "OPTN_DTL_ITM_NO");
        			var fRow = this.ds_optnBasis.findRowExpr("OPTN_ITM_NO=="+OPTN_ITM_NO);
        			//var colID = this.ds_optnBasis.getColumn(fRow, "OPTN_NM");
        			for(var i=0; i<this.ds_prdCon.rowcount; i++){
        				var OPTN_DTL_ITM_MAPP_CTS = this.ds_prdCon.getColumn(i, "OPTN_DTL_ITM_MAPP_CTS");
        				var ctsArr = OPTN_DTL_ITM_MAPP_CTS.split('_');
        				for(var j=0; j<ctsArr.length; j++){
        					if(j==fRow && OPTN_DTL_ITM_NO == ctsArr[j]){
        						this.ds_prdCon.setColumn(i, fRow, e.newvalue);
        						break;
        					}
        				}
        			}
        		}
        		this.ds_optnBasis.filter("");
        		this.grd_optnBasis.set_enableredraw(true);
        	}
        };

        //첨부파일 클릭
        this.grd_optnDtl_onexpanddown = function(obj,e)
        {
        	this.fileOnTop = this.grd_optnDtl.getOffsetTop() + ((e.row+1)*31)+3;
        	this.fileOnLeft = this.grd_optnDtl.getOffsetRight() - obj.getRealColSize(e.col) - 80;
        	this.ProgressBar.set_width(obj.getRealColSize(e.col)-50);
        	this.seletedImgRow = e.row;
        	this.fileDialog.set_accept(this.fileType); //파일 타입
        	this.fileDialog.open('nexacro17', FileDialog.LOAD);
        };

        //상세옵션 그리드 마우스 오버
        this.TEMP_DOC_REG_ID = '';
        this.grd_optnDtl_onmousemove = function(obj,e)
        {
        	var bindText = this.grd_optnDtl.getCellProperty("body", e.col, "text");
        	if(bindText == 'bind:ATFL_NM'){	//이미지 미리보기
        		var imgTop = this.grd_optnDtl.getOffsetTop() + ((e.row+1)*31) - 110;
        		var imgLeft = this.grd_optnDtl.getOffsetRight() - obj.getRealColSize(e.col) - 350;
        		var DOC_REG_ID = this.ds_optnDtl.getColumn(e.row, "DOC_REG_ID");

        		if(this.TEMP_DOC_REG_ID != DOC_REG_ID){
        			//if(this.img_preview.image!='theme://images/img_loading.gif'){
        			//	this.img_preview.set_image('theme://images/img_loading.gif');
        			//}
        			if(this.img_preview.image!=''){
        				this.img_preview.set_image('');
        			}
        			if(!this.gfn_isNull(DOC_REG_ID)){
        				var newPath = this.svcUrl + "/co/file-download.do?docRegSeq=1&docRegId="+DOC_REG_ID;
        				this.img_preview.set_image(newPath);
        				this.img_preview.set_top(imgTop);
        				this.img_preview.set_left(imgLeft);
        				this.img_preview.set_visible(true);
        			}else{
        				this.img_preview.set_visible(false);
        			}
        			this.TEMP_DOC_REG_ID = DOC_REG_ID;
        		}
        	}else{
        		this.img_preview.set_visible(false);
        		this.TEMP_DOC_REG_ID = '';
        	}
        };

        //상세옵션 마우스 벗어나기
        this.grd_optnDtl_onmouseleave = function(obj,e)
        {
        	this.img_preview.set_visible(false);	//이미지 숨김
        	this.TEMP_DOC_REG_ID = '';
        };
        //===========================================================그리드 2번


        //===========================================================그리드 3번
        //상품연결 생성
        this.btn_prdCon_onclick = function(obj,e)
        {
        	if(this.ds_optnDtl.rowcount > 0){
        		this.makeProductConnectGrid();
        	}else{
        		//alert('상세옵션을 설정해주세요.');
        		alert(this.gfn_getMessage('ERRP000301'));
        	}

        };

        //상품연결 팝업
        this.grd_prdCon_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_prdCon.getCellProperty("body", e.col, "text");
            if(bindText == "bind:ATTR_VAL" && 'expandbutton' == e.clickitem){
        		this.selectedPrdConRow = e.row;
        		this.selectedPrdConCol = e.col;
        		this.selectedPrdConCellIdx = e.cell;

        		var params = {coCd:this.coCd,prdClcd:this.selPrdClcd, dispStatsYn:'Y', pubOnlySprCd:'P', mallSprCd:this.mallSprCd};	//카테고리, 진열여부Y
        		var options = {title:'상품ID 조회'};
        		this.gfn_openPopup('prdConPopup', "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        this.grd_prdCon_onkeyup = function(obj,e)
        {
        	var bindText = this.grd_prdCon.getCellProperty("body", this.grd_prdCon.getCellPos(), "text");
        	if(bindText == "bind:MAPP_PRD_ID" && e.keycode==13){
        		this.ds_popupSerach.setColumn(0, "CO_CD", this.coCd);
        		this.ds_popupSerach.setColumn(0, "PRD_CLCD", this.selPrdClcd);
        		this.ds_popupSerach.setColumn(0, "PRD_ID", this.ds_prdCon.getColumn(this.grd_prdCon.getSelectedRows(), "MAPP_PRD_ID"));
        		this.ds_popupSerach.setColumn(0, "DISP_STATS_YN", "Y");
        		this.ds_popupSerach.setColumn(0, "MALL_SPR_CD", this.mallSprCd);
        		this.ds_popupSerach.setColumn(0, "PUB_ONLY_SPR_CD", 'P');
        		this.ds_popupSerach.setColumn(0, "ROW_COUNT", '1000');

        		this.fn_popupSearch('prdConMappPrdId', "/pr/prd-popup/select-product-popup-list.do");
        	}
        };

        //===========================================================그리드 3번

        //===========================================================그리드 4번
        // * 추가옵션
        //추가옵션 추가
        this.btn_addAddOptnBasis_onclick = function(obj,e)
        {
        	if(this.ds_addOptnBasis.rowcount>=20){
        		//alert('추가정보는 최대 20개까지 생성 가능합니다.');
        		alert(this.gfn_getMessage('ERRP000302'));
        		return;
        	}
        	this.ds_addOptnBasis.addRow();
        	this.resetOptnItmNo(this.ds_addOptnBasis, "ADD_");
        	this.fn_resetSrtSoBasis(this.ds_addOptnBasis);

        	this.fn_resize_grd(this.grd_addOptnBasis);
        	this.fn_resize_grd(this.grd_addOptnDtl);
        };

        //추가정보 삭제
        this.btn_delAddOptnBasis_onclick = function(obj,e)
        {
        	this.fn_deleteOptnBasis(this.ds_addOptnBasis, this.ds_addOptnDtl, this.ds_delOptn, "ADD_");
        	this.fn_resize_grd(this.grd_addOptnBasis);
        	this.fn_resize_grd(this.grd_addOptnDtl);
        };

        //basis데이터셋 이벤트
        this.ds_addOptnBasis_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=='ADD_OPTN_ITM_NO'){
        		var nRow = this.ds_addOptnDtl.addRow();
        		this.ds_addOptnDtl.setColumn(nRow, e.columnid, e.newvalue);
        		this.ds_addOptnDtl.setColumn(nRow, "ADD_OPTN_CNT", 1);
        	}else if(e.columnid=='SRT_SO'){
        		var fRows = this.ds_addOptnDtl.extractRows("ADD_OPTN_ITM_NO=="+this.ds_addOptnBasis.getColumn(e.row, "ADD_OPTN_ITM_NO"));
        		var forLen = fRows.length;
        		var srtSo = 1;
        		for(var i=fRows[0]; i<(fRows[0]+forLen); i++){
        			this.ds_addOptnDtl.setColumn(i, e.columnid, srtSo);
        			srtSo = srtSo + 1;
        		}
        	}else if(e.columnid != 'ROW_TYPE'){
        		var fRows = this.ds_addOptnDtl.extractRows("ADD_OPTN_ITM_NO=="+this.ds_addOptnBasis.getColumn(e.row, "ADD_OPTN_ITM_NO"));
        		var forLen = fRows.length;
        		var srtSo = 1;
        		for(var i=fRows[0]; i<(fRows[0]+forLen); i++){
        			this.ds_addOptnDtl.setColumn(i, e.columnid, e.newvalue);
        		}
        	}
        };

        //그리드 클릭이벤트
        this.grd_addOptnBasis_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_addOptnBasis.getCellProperty("body", e.col, "text");
        	if(bindText == 'UP' || bindText == 'DOWN'){
        		if(bindText == 'UP'){	//위로
        			this.ds_addOptnBasis.moveRow(e.row, e.row-1);
        		}else if(bindText == 'DOWN'){	//아래로
        			this.ds_addOptnBasis.moveRow(e.row, e.row+1);
        		}
        		this.fn_resetSrtSoBasis(this.ds_addOptnBasis);
        	}else if(bindText == "bind:ATFL_YN"){	//첨부파일여부에따라 상세정보 컨트롤
        		var ATFL_YN = this.ds_addOptnBasis.getColumn(e.row, "ATFL_YN");
        		if(ATFL_YN=='Y'){
        			this.fn_resize_grd(this.grd_addOptnDtl);
        			this.ds_addOptnBasis.setColumn(e.row, "IPT_TYPE_CD", null);
        		}
        		var arrRows = this.ds_addOptnDtl.extractRows("ADD_OPTN_ITM_NO ==" +this.ds_addOptnBasis.getColumn(e.row, "ADD_OPTN_ITM_NO"));
        		if(arrRows.length>0){	//첨부파일일때 상세row가 1개 이상일경우 1개남기고 삭제
        			var forlen = (arrRows[0]+arrRows.length);
        			for(var i=arrRows[0]; i<forlen; i++){
        				if(i==arrRows[0]){
        					this.ds_addOptnDtl.setColumn(i, "IPT_TYPE_CD", null);
        					this.ds_addOptnDtl.setColumn(i, "ADD_OPTN_CNT", 1);
        					this.ds_addOptnDtl.setColumn(i, "ATFL_YN", ATFL_YN);
        					break;
        				}
        			}
        		}
        		this.fn_resize_grd(this.grd_addOptnDtl);
        	}else if(bindText == "bind:IPT_TYPE_CD"){
        		obj.dropdownCombo();
        	}
        };

        //옵션변경
        this.grd_addOptnBasis_oncloseup = function(obj,e)
        {
        	this.fn_resetIptTypeCd(this.ds_addOptnDtl, this.grd_addOptnDtl, this.ds_addOptnBasis.getColumn(e.row, "ADD_OPTN_ITM_NO"), e.value, "ADD_");
        };

        //===========================================================그리드 4번



        //===========================================================그리드 5번
        //추가정보 상세옵션 생성 버튼
        this.btn_addAddOptnDtl_onclick = function(obj,e)
        {
        	this.ds_addOptnDtl.set_enableevent(false);
        	this.fn_optnDtlAddRow(this.ds_addOptnBasis, this.ds_addOptnDtl, this.grd_addOptnDtl, "ADD_");
        	this.ds_addOptnDtl.set_enableevent(true);
        	this.fn_resize_grd(this.grd_addOptnDtl);
        };

        //추가정보 상세 데이터셋 이벤트
        this.ds_addOptnDtl_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'ADD_OPTN_CNT'){
        		this.fn_dtlDataSetCntEvent(this.grd_addOptnDtl, this.ds_addOptnDtl, this.ds_delOptn, e, "ADD_");
        	}
        };

        //그리드 클릭이벤트
        this.grd_addOptnDtl_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_addOptnDtl.getCellProperty("body", e.col, "text");
        	if(bindText == 'UP' || bindText == 'DOWN'){
        		var asis = this.ds_addOptnDtl.getColumn(e.row, "ADD_OPTN_ITM_NO");
        		if(bindText == 'UP'){	//위로
        			var tobe = this.ds_addOptnDtl.getColumn(e.row-1, "ADD_OPTN_ITM_NO");
        			if(asis == tobe){
        				this.ds_addOptnDtl.moveRow(e.row, e.row-1);
        			}
        		}else if(bindText == 'DOWN'){	//아래로
        			var tobe = this.ds_addOptnDtl.getColumn(e.row+1, "ADD_OPTN_ITM_NO");
        			if(asis == tobe){
        				this.ds_addOptnDtl.moveRow(e.row, e.row+1);
        			}
        		}
        		this.fn_resetSrtSo(this.ds_addOptnDtl, asis, "ADD_");
        	}
        	this.fn_resize_grd(this.grd_addOptnDtl);
        };

        //===========================================================그리드 5번



        //전시구분
        this.rdo_dispPrdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_dispSprControl(e.postvalue);
        };

        //추가정보 세팅
        this.rdo_addInfoSetYn_onitemchanged = function(obj,e)
        {
        	this.fn_addInfoControl(e.postvalue);
        };

        //저장버튼
        this.div_btn_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_dataCheck(this.ds_basic) || this.fn_dataCheck(this.ds_optnBasis) || this.fn_dataCheck(this.ds_optnDtl)){
        		if(this.fn_validation()){
        			if(this.rdo_dispPrdSprCd.value == 'A'){
        				this.fn_isDiffDataSet()
        			}
        			if(this.pageMode=='U'){
        				var params = {};
        				var options = {};
        				this.gfn_openPopup('btn_save', "PR_POP::SSP_BO_NA_27.xfdl", params,  "fn_popupCallback", options);
        			}else{
        				this.fn_procSave();
        			}
        		}
        	}else{
        		var ads = this.rdo_addInfoSetYn.value;
        		if( (this.fn_isDiffDataSet() && this.rdo_dispPrdSprCd.value == 'A') ||
        			(ads=='Y' && (this.fn_dataCheck(this.ds_addOptnBasis) || this.fn_dataCheck(this.ds_addOptnDtl))) ){
        			if(this.fn_validation()){
        				if(this.pageMode=='U'){
        					var params = {};
        					var options = {};
        					this.gfn_openPopup('btn_save', "PR_POP::SSP_BO_NA_27.xfdl", params,  "fn_popupCallback", options);
        				}else{
        					this.fn_procSave();
        				}
        			}
        		}else{
        			//alert('변경된 내역이 없습니다.');
        			alert(this.gfn_getMessage('ERRP000303'));
        			return;
        		}
        	}
        };

        //닫기버튼
        this.div_btn_btn_close_onclick = function(obj,e)
        {
        	if(this.confirm(this.gfn_getMessage('ERRP000304'))){	//'저장하지 않은 내용은 삭제됩니다. 목록으로 이동 하시겠습니까?'
        		this.close();
        	}
        };

        //이력버튼
        this.btn_history_onclick = function(obj,e)
        {
        	var prdClcd = this.ds_basic.getColumn(0, "PRD_CLCD");

        	var params = {
        		historyType : 'disp', //히스토리 유형 필수값
        		key1 : prdClcd  //필요에따라 추가
        	};
        	var options = {};
        	options.title = "전시상품 변경이력";
        	this.gfn_openPopup("recordPop", "PR_POP::SSP_BO_PA_48.xfdl", params,  "", options);
        };


        this.edt_auto_onchanged = function(obj,e)
        {
        	if(e.postvalue > 100){
        		this.edt_auto.set_value(e.prevalue);
        	}
        };

        //상품ID 일괄맵핑
        this.btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:this.edt_prdConMultiPrdId};
        	if(this.ds_prdCon.getRowCount()>0){
        		var mappPrdIds = "";
        		for(var i=0; i<this.ds_prdCon.getRowCount(); i++){
        			if(i>0){
        				mappPrdIds = mappPrdIds + ",";
        			}
        			var MAPP_PRD_ID = this.ds_prdCon.getColumn(i, "MAPP_PRD_ID");
        			if(typeof MAPP_PRD_ID == 'undefined'){
        				MAPP_PRD_ID = "";
        			}
        			mappPrdIds = mappPrdIds + MAPP_PRD_ID;
        		}
        		this.edt_prdConMultiPrdId.set_value(mappPrdIds);
        	}
        	this.gfn_openPopup('btn_prdConMultiPrdId', "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", {title:'상품연결 일괄맵핑'});
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_history.addEventHandler("onclick",this.btn_history_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static03.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static04.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.div_search_onkeyup,this);
            this.edt_prdClsfNm.addEventHandler("onkeyup",this.div_search_onkeyup,this);
            this.btn_categoryPopup.addEventHandler("onclick",this.btn_productPop_onclick,this);
            this.Static05_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static05_01_01_00_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00_01_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.btn_prdIdPopup.addEventHandler("onclick",this.btn_prdIdPopup_onclick,this);
            this.edt_auto.addEventHandler("onchanged",this.edt_auto_onchanged,this);
            this.edt_auto.addEventHandler("canchange",this.edt_auto_canchange,this);
            this.rdo_dispPrdSprCd.addEventHandler("onitemchanged",this.rdo_dispPrdSprCd_onitemchanged,this);
            this.rdo_addInfoSetYn.addEventHandler("onitemchanged",this.rdo_addInfoSetYn_onitemchanged,this);
            this.Static05_01_01_02.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btn_addOptnBasis.addEventHandler("onclick",this.btn_addOptnBasis_onclick,this);
            this.btn_delOptnBasis.addEventHandler("onclick",this.btn_delOptnBasis_onclick,this);
            this.grd_optnBasis.addEventHandler("oncellclick",this.grd_optnBasis_oncellclick,this);
            this.grd_optnBasis.addEventHandler("oncloseup",this.grd_optnBasis_oncloseup,this);
            this.btn_addOptnDtl.addEventHandler("onclick",this.btn_addOptnDtl_onclick,this);
            this.grd_optnDtl.addEventHandler("oncellclick",this.grd_optnDtl_oncellclick,this);
            this.grd_optnDtl.addEventHandler("onexpanddown",this.grd_optnDtl_onexpanddown,this);
            this.grd_optnDtl.addEventHandler("onmousemove",this.grd_optnDtl_onmousemove,this);
            this.grd_optnDtl.addEventHandler("onmouseleave",this.grd_optnDtl_onmouseleave,this);
            this.btn_prdCon.addEventHandler("onclick",this.btn_prdCon_onclick,this);
            this.grd_prdCon.addEventHandler("oncellclick",this.grd_prdCon_oncellclick,this);
            this.grd_prdCon.addEventHandler("onkeyup",this.grd_prdCon_onkeyup,this);
            this.sta_addOptn.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btn_addAddOptnBasis.addEventHandler("onclick",this.btn_addAddOptnBasis_onclick,this);
            this.btn_delAddOptnBasis.addEventHandler("onclick",this.btn_delAddOptnBasis_onclick,this);
            this.grd_addOptnBasis.addEventHandler("oncellclick",this.grd_addOptnBasis_oncellclick,this);
            this.grd_addOptnBasis.addEventHandler("oncloseup",this.grd_addOptnBasis_oncloseup,this);
            this.btn_addAddOptnDtl.addEventHandler("onclick",this.btn_addAddOptnDtl_onclick,this);
            this.grd_addOptnDtl.addEventHandler("onrowresized",this.grd_optnDtl_onrowresized,this);
            this.grd_addOptnDtl.addEventHandler("ontouchend",this.grd_optnDtl_ontouchend,this);
            this.grd_addOptnDtl.addEventHandler("oncellclick",this.grd_addOptnDtl_oncellclick,this);
            this.div_btn.form.btn_close.addEventHandler("onclick",this.div_btn_btn_close_onclick,this);
            this.div_btn.form.btn_save.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.btn_save00.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.btn_save00_00.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.btn_prdIdMultiInput.addEventHandler("onclick",this.btn_prdIdMultiInput_onclick,this);
            this.ds_optnBasis.addEventHandler("oncolumnchanged",this.ds_optnBasis_oncolumnchanged,this);
            this.ds_optnDtl.addEventHandler("oncolumnchanged",this.ds_optnDtl_oncolumnchanged,this);
            this.ds_addOptnBasis.addEventHandler("oncolumnchanged",this.ds_addOptnBasis_oncolumnchanged,this);
            this.ds_addOptnDtl.addEventHandler("oncolumnchanged",this.ds_addOptnDtl_oncolumnchanged,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
        };
        this.loadIncludeScript("SSP_BO_NA_25_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
