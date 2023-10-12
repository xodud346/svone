(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_03");
            this.set_titletext("등록상품 상세");
            this.set_scrollbartype("auto");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_REG_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MROPRD_QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_CON_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MTNL_ORGPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PROC_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE_NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MTNL_ORGPLC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attrSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_ATTR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notiSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertData", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdNuseRsnCd", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicSaveTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MTNL_ORGPLC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basicInfo","20","20","1296","354",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","250",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static17","0","219",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","188",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static65","0","126",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static07","0","64",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static03","0","33",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static02","0","33","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","33","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static04","862","33","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("대표상품그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static06","0","64","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static08","862","64","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("S-MRO 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static10","0","126","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static66","862","126","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static12","0","188","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","188","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16","0","219","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("배수주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","250","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("몰구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static18_00","862","188","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("SSP등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static32","431","250","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("대표상품그룹등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-85","150","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-85","150","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","8","155","16",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","431","219","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_text("SSP 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_","129","126","723","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01_01_00_00_00","992","189","294","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","37","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprPrdId","570","37","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprPrdGrpId","1002","37","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","68","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_attrVal","140","130","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdStatsCd","1002","68","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pubOnlySprCd","1002","130","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","140","192","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","570","192","130","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","704","192","148","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_multiSellUnitQty","140","223","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mallSprCd","140","254","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprRegDtm","570","254","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sspRegDtm","1002","192","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static17_00_00","0","281",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","0","281","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_text("SSP최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static32_00","431","281","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("41");
            obj.set_text("빠른배송여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static18_00_00","862","281","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sspUpdDtm","140","285","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Radio("rdo_prdUseYn","571","223","169","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_basicInfo_form_rdo_prdUseYn_innerdataset = new nexacro.NormalDataset("div_basicInfo_form_rdo_prdUseYn_innerdataset", obj);
            div_basicInfo_form_rdo_prdUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_basicInfo_form_rdo_prdUseYn_innerdataset);
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_qckDlvYn","570","285","68","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("45");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_prdNuseRsnCd","762","223","525","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("46");
            obj.set_innerdataset("ds_prdNuseRsnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"0","100","28","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("47");
            obj.set_text("변경이력");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_save2","1122","0","70","28",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("48");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","0","157",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","157","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("50");
            obj.set_text("대표규격(전체)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_attrValAll","140","161","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_00","862","250","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","95",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","140","99","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static08_00","862","95","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("55");
            obj.set_text("SSP상품명 변경여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","95","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("56");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_sspPrdNmChgYn","1002","100","19","22",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("57");
            obj.set_text("CheckBox00");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_mtnlYn","1176","165","117","18",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("58");
            obj.set_text("다국적여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00","0","312",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_iddtNm","140","316","1146","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("60");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01","0","312","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("61");
            obj.set_text("산업군");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_mroAttr","20","384","638","313",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("PR::SSP_BO_PA_03_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_image","20","1505","1296","287",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("image box");
            obj.set_url("PR::SSP_BO_PA_03_05.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_oprtr","20","2145","1296","101",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","0","32",null,"32","0",null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("(19045)이상품");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","32","170","32",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("구매담당자");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","1","300","30",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("0");
            obj.set_text("담당자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","650","32","170","32",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상품담당자");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","0","63",null,"32","0",null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("(19045)이상품");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","0","63","170","32",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("MD");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_purgOprtrId","179","36","229","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_purgOprtrNm","412","36","229","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_mdOprtrId","179","67","229","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_mdOprtrNm","412","67","229","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_prdOprtrId","829","36","228","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Edit("edt_prdOprtrNm","1061","36","225","24",null,null,null,null,null,null,this.div_oprtr.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_oprtr.addChild(obj.name, obj);

            obj = new Tab("tab_prdTab01","20","2270","1296","231",null,null,null,null,"200","3000",this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_price",this.tab_prdTab01);
            obj.set_text("가격정보");
            obj.set_url("PR::SSP_BO_PA_03_06.xfdl");
            this.tab_prdTab01.addChild(obj.name, obj);

            obj = new Tabpage("tab_notice",this.tab_prdTab01);
            obj.set_text("상품고시정보");
            obj.set_url("PR::SSP_BO_PA_03_09.xfdl");
            this.tab_prdTab01.addChild(obj.name, obj);

            obj = new Tabpage("tab_chm",this.tab_prdTab01);
            obj.set_text("화학물질정보");
            obj.set_url("PR::SSP_BO_PA_03_07.xfdl");
            this.tab_prdTab01.addChild(obj.name, obj);

            obj = new Tabpage("tab_kc",this.tab_prdTab01);
            obj.set_text("상품인증정보");
            obj.set_url("PR::SSP_BO_PA_03_08.xfdl");
            this.tab_prdTab01.addChild(obj.name, obj);

            obj = new Div("div_sspAttr","678","384","638","313",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("PR::SSP_BO_PA_03_02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_mroAddInfo","20","707","638","195",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("PR::SSP_BO_PA_03_03.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_sspAddInfo","678","707","638","195",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("PR::SSP_BO_PA_03_04.xfdl");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_visible("true");
            obj.set_async("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_prdDetail","20","1807","1230","328",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","14","300","16",null,null,null,null,null,null,this.div_prdDetail.form);
            obj.set_taborder("0");
            obj.set_text("상품 상세 설명");
            obj.set_cssclass("sta_WF_title02");
            this.div_prdDetail.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_prdDetail","3","40","1227","285",null,null,null,null,null,null,this.div_prdDetail.form);
            obj.set_taborder("1");
            this.div_prdDetail.addChild(obj.name, obj);

            obj = new Div("div_btn","20","tab_prdTab01:0","1294","87",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","651","42","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_close","577","42","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.div_btn.addChild(obj.name, obj);

            obj = new Div("div_group","20","915","1296","570",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("시리즈 그룹");
            obj.set_url("PR::SSP_BO_PA_03_10.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","882","177","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCd","1022","181","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCdNm","edt_orgplcCtryCd:4","181","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basicInfo.form.edt_prdId","value","ds_basicInfo","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basicInfo.form.edt_reprPrdId","value","ds_basicInfo","REPR_PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basicInfo.form.edt_reprPrdGrpId","value","ds_basicInfo","REPR_PRD_GRP_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basicInfo.form.edt_prdNm","value","ds_basicInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basicInfo.form.edt_mroPrdStatsCd","value","ds_basicInfo","MRO_PRD_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basicInfo.form.edt_attrVal","value","ds_basicInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basicInfo.form.edt_pubOnlySprCd","value","ds_basicInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basicInfo.form.edt_sellUnitCd","value","ds_basicInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basicInfo.form.edt_mnfrNo","value","ds_basicInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basicInfo.form.edt_mnfrNm","value","ds_basicInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basicInfo.form.edt_multiSellUnitQty","value","ds_basicInfo","MULT_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basicInfo.form.edt_mallSprCd","value","ds_basicInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basicInfo.form.edt_reprRegDtm","value","ds_basicInfo","REPR_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_basicInfo.form.edt_sspRegDtm","value","ds_basicInfo","SSP_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_oprtr.form.edt_purgOprtrId","value","ds_basicInfo","PURG_OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_oprtr.form.edt_purgOprtrNm","value","ds_basicInfo","PURG_OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_oprtr.form.edt_prdOprtrId","value","ds_basicInfo","PRD_OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_oprtr.form.edt_prdOprtrNm","value","ds_basicInfo","PRD_OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_oprtr.form.edt_mdOprtrId","value","ds_basicInfo","MD_OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_oprtr.form.edt_mdOprtrNm","value","ds_basicInfo","MD_OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_basicInfo.form.edt_sspUpdDtm","value","ds_basicInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_basicInfo.form.rdo_prdUseYn","value","ds_basicInfo","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_basicInfo.form.edt_sspUpdDtm","value","ds_basicInfo","SSP_UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basicInfo.form.chk_qckDlvYn","value","ds_basicInfo","MROPRD_QCK_DLV_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basicInfo.form.cmb_prdNuseRsnCd","value","ds_basicInfo","PRD_NUSE_RSN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_basicInfo.form.edt_attrValAll","value","ds_basicInfo","ATTR_VAL_ALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basicInfo.form.edt_orgplcCtryCdNm","value","ds_basicInfo","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_basicInfo.form.edt_sspPrdNm","value","ds_basicInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_basicInfo.form.chk_sspPrdNmChgYn","value","ds_basicInfo","SSP_PRD_NM_CHG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_basicInfo.form.chk_mtnlYn","value","ds_basicInfo","MTNL_ORGPLC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_orgplcCtryCd","value","ds_basicInfo","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_orgplcCtryCdNm","value","ds_basicInfo","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_basicInfo.form.edt_iddtNm","value","ds_basicInfo","IDDT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_01.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_05.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_06.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_09.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_07.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_08.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_02.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_03.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_04.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_10.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_03.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_03.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fvDocWeb = "";

        this.coCd = "";
        this.prdId = "";
        this.notiItmNo = "";
        this.prdClcd = "";
        this.selectedTab = 0;
        this.pageMode = "edit";
        this.loaded = false;
        this.prdClcdUseYn = '';

        //값변동 체크를 위한 배열
        this.childFormArr = [
        	{id:'basicInfo', status:false},
        	{id:'productDesc', status:false},
        	{id:'sspAttr', status:false},
        	{id:'sspAddInfo', status:false},
        	{id:'tab_0', status:false},
        	{id:'tab_3', status:false},
        ];
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.ds_search.insertRow(0);
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "PRD_ID", this.parent.prdId);

        	this.fn_commonCodeSearch();
        	this.fn_basicInfo();
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
        	var outDs = "ds_prdNuseRsnCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "PRD_NUSE_RSN_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_basicInfo = function(){
        	var sSvcId = "basicInfo";
        	var sUrl = "/pr/prd-mng/select-regist-product-basic-info.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_basicInfo=basicInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //등록처리
        this.fn_regProc = function (bInit){

            var sSvcId = "regProc";
            var sUrl = "/pr/prd-mng/update-product-info.do";
            var inDs = "ds_basicSave=ds_basicSave ds_attrSave=ds_attrSave ds_notiSave=ds_notiSave";
            var outDs = "";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        	}

        	switch(svcID){
        		case "commonCodeSearch":
        			this.ds_prdNuseRsnCd.insertRow(0);
        			this.ds_prdNuseRsnCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_prdNuseRsnCd.setColumn(0, "COM_DTL_CD_NM", "선택");

        			this.div_basicInfo.form.cmb_prdNuseRsnCd.set_index(0);

        			this.fn_setUseYnInit();//사용여부 컨트롤

        			break;

        		case "basicInfo":

        			this.fn_initEditor();//에디터초기화
        			this.fn_setUseYnInit();	//사용여부 컨트롤

        			this.coCd = this.ds_basicInfo.getColumn(0, "CO_CD");
        			this.prdId = this.ds_basicInfo.getColumn(0, "PRD_ID");
        			var MRO_PRD_CLCD = this.ds_basicInfo.getColumn(0, "MRO_PRD_CLCD");
        			var PRD_CLCD = this.ds_basicInfo.getColumn(0, "PRD_CLCD");
        			var DOC_REG_ID = this.ds_basicInfo.getColumn(0, "DOC_REG_ID");
        			var MCND_PRD_YN = this.ds_basicInfo.getColumn(0, "MCND_PRD_YN");
        			var PUB_ONLY_SPR_CD = this.ds_basicInfo.getColumn(0, "PUB_ONLY_SPR_CD");
        			var SSP_PRD_NM_CHG_YN = this.ds_basicInfo.getColumn(0, "SSP_PRD_NM_CHG_YN");
        			var MTNL_ORGPLC_YN = this.ds_basicInfo.getColumn(0, "MTNL_ORGPLC_YN");

        			this.fn_sspPrdNmChgControl(SSP_PRD_NM_CHG_YN);	//ssp상품명 컨트롤
        			//this.fn_mtnlChgControl(MTNL_ORGPLC_YN);	//다국적 컨트롤

        			var params = {
        				'coCd' : this.coCd,
        				'prdId' : this.prdId,
        				'mroPrdClcd' : MRO_PRD_CLCD,
        				'prdClcd' : PRD_CLCD,
        				'docRegId' : DOC_REG_ID,
        				'mcndPrdYn' : MCND_PRD_YN,
        				'pubOnlySprCd' : PUB_ONLY_SPR_CD
        			};

        			//하위 모듈 호출
        			this.div_mroAttr.form.cfn_read("mroAttr", params, "fn_pageCallBack");	                        //MRO카테고리,속성정보
        			this.div_sspAttr.form.cfn_read("sspAttr", params, "fn_pageCallBack", this.pageMode);	        //SSP카테고리,속성정보
        			this.div_mroAddInfo.form.cfn_read("mroAddInfo", params, "fn_pageCallBack");	                    //MRO 부가정보
        			this.div_sspAddInfo.form.cfn_read("sspAddInfo", params, "fn_pageCallBack", this.pageMode);	    //SSP 부가정보
        			this.div_image.form.cfn_read("image", params, "fn_pageCallBack");	                            //이미지
        			this.div_group.form.cfn_read("group", params, "fn_pageCallBack");	                            //시리즈그룹
        			this.tab_prdTab01.tabpages[0].form.cfn_read("tab_0", params, "fn_pageCallBack", this.pageMode);	//가격정보
        			this.tab_prdTab01.tabpages[1].form.cfn_read("tab_3", params, "fn_pageCallBack", this.pageMode);	//고시정보


        			this.fn_setLoading('basicInfo', true);

        			break;

        		case "regProc":
        			this.reload();

        			break;
        	}
        };

        this.fn_editorCallback = function(sType){
        	switch (sType){
        		case "onload" :
        			//var sContents = this.ds_basicInfo.getColumn(0, "PRD_DTL_DESC");		//구버전
        			//this.fvDocWeb.getProperty("ir1").setProperty("value", sContents);
        			//this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");

        			//var sContents = this.ds_basicInfo.getColumn(0, "PRD_DTL_DESC");
        			//this.fvDocWeb.getProperty("editorData").setProperty("value",sContents);
        			//this.fvDocWeb.getProperty("setData").callMethod("click");

        			break;
        	}
        };

        //모듈콜백
        this.fn_pageCallBack = function(svcID, errorCode, errorMsg, rtnVal){
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        		return false;
        	}

        	switch (svcID){
        		case "sspCategorySelect" :	//하위에서 호출시 사용
        			this.notiItmId = rtnVal.NOTI_ITM_ID;
        			if(this.selectedTab==1){	//고시
        				if(typeof this.tab_prdTab01.tabpages[this.selectedTab].form.cfn_read != 'undefined'){
        					var params = {
        						'coCd' : this.coCd,
        						'prdId' : this.prdId,
        						'notiItmId' : this.notiItmId
        					};
        					this.tab_prdTab01.tabpages[this.selectedTab].form.cfn_read('tab_3', params, "fn_pageCallBack", 'edit', true);
        				}
        			}

        			break;

        		case "tab_resize" :
        			var height = rtnVal.height;
        			this.tab_prdTab01.set_height(height+31);
        			this.div_btn.set_top(this.tab_prdTab01.getPixelTop()+height+31);

        			this.resetScroll();

        			break;

        		case "mroAttr" :
        			//this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "sspAttr" :
        			this.prdClcd = rtnVal.PRD_CLCD;
        			if(rtnVal.USE_YN == 'Y' || rtnVal.USE_YN == 'N' ) prdClcdUseYn = rtnVal.USE_YN;

        			if(prdClcdUseYn == 'N') {
        				this.div_basicInfo.form.rdo_prdUseYn.set_value('N');
        			}

        			this.pubOnlySprCd = this.ds_basicInfo.getColumn(0, "PUB_ONLY_SPR_CD");
        			this.mroPrdClcd = this.ds_basicInfo.getColumn(0, "MRO_PRD_CLCD");
        			if(!this.gfn_isNull(this.prdClcd)){
        				this.ds_basicInfo.setColumn(0, "PRD_CLCD", this.prdClcd);
        				if(this.selectedTab==0){	//가격대상
        					if(typeof this.tab_prdTab01.tabpages[this.selectedTab].form.cfn_read != 'undefined'){
        						var params = {
        							'coCd' : this.coCd,
        							'prdId' : this.prdId,
        							'prdClcd' : this.prdClcd,
        							'mroPrdClcd' : this.mroPrdClcd,
        							'pubOnlySprCd' : this.pubOnlySprCd
        						};
        						this.tab_prdTab01.tabpages[this.selectedTab].form.cfn_read('tab_0', params, "fn_pageCallBack", 'edit', false);
        					}
        				}
        			}
        			this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "mroAddInfo" :
        			//this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "sspAddInfo" :
        			this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "image" :
        			//this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "group" :
        			//this.fn_setLoading(rtnVal.id, rtnVal.status);
        			var isResize = rtnVal.isResize;
        			if(isResize){	//시리즈그룹 사이즈 변경처리	(연관만 숨김처리,또는 전체 숨김처리)
        				var groupHeight = this.div_group.form.height;
        				this.div_group.set_height(groupHeight);
        				if(groupHeight==0){
        					groupHeight = 609;
        				}
        				var imageTop = this.div_image.getPixelTop()-groupHeight + 30;
        				this.div_image.set_top(imageTop);
        				var detailTop = this.div_prdDetail.getPixelTop()-groupHeight + 30;
        				this.div_prdDetail.set_top(detailTop);
        				var oprtrTop = this.div_oprtr.getPixelTop()-groupHeight + 30;
        				this.div_oprtr.set_top(oprtrTop);
        				var tabTop = this.tab_prdTab01.getPixelTop()-groupHeight + 30;
        				this.tab_prdTab01.set_top(tabTop);

        				this.resetScroll();
        			}

        			break;

        		case "tab_0" :
        			this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "tab_3" :
        			this.fn_setLoading(rtnVal.id, rtnVal.status);

        			break;

        		case "oprtrInfo" : //카테고리 변경 시 담당자 변경
        			this.prdOprtrId = rtnVal.PRD_OPRTR_ID;
        			this.prdOprtrNm = rtnVal.PRD_OPRTR_NM;
        			this.mdOprtrId = rtnVal.MD_OPRTR_ID;
        			this.mdOprtrNm = rtnVal.MD_OPRTR_NM;

        			this.ds_basicInfo.setColumn(0, "PRD_OPRTR_ID", this.prdOprtrId);
        			this.ds_basicInfo.setColumn(0, "PRD_OPRTR_NM", this.prdOprtrNm);
        			this.ds_basicInfo.setColumn(0, "MD_OPRTR_ID", this.mdOprtrId);
        			this.ds_basicInfo.setColumn(0, "MD_OPRTR_NM", this.mdOprtrNm);

        			break;

        		case "mroAttrReload" :
        			var params = {
        				'coCd' : this.coCd,
        				'prdId' : this.prdId,
        				'prdClcd' : rtnVal.PRD_CLCD,
        			};
        			//ssp카테고리 변경시 신규로 설정된 순서,노출여부 재적용
        			this.div_mroAttr.form.cfn_read("mroAttr", params, "fn_pageCallBack");	                        //MRO카테고리,속성정보

        			break;


        	}
        }

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_save" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				//this.fn_setInsertData(jsonData.UPD_RSN);
        				this.ds_basicSave.setColumn(0, "UPD_RSN", jsonData.UPD_RSN); //수정사유팝업
        				this.fn_setAttrUpdRsn(jsonData.UPD_RSN);	//속성데이터 수정사유 세팅
        				this.fn_setNotiUpdRsn(jsonData.UPD_RSN);	//고시데이터 수정사유 세팅
        				this.fn_regProc();

        			}else{
        				//alert('사유 미입력');
        				return false;
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
        //에디터 초기화
        this.fn_initEditor = function(){
        	//var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "smartEditor/SmartEditor2.html";
        	//this.div_prdDetail.form.wbs_prdDetail.set_url(sUrl);
        	var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/productEditor.html";
        	this.div_prdDetail.form.wbs_prdDetail.set_url(sUrl);

        };

        //에디터 리사이징
        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;
        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        //저장시 데이터체크
        this.fn_validation = function() {
        	var bResult = true;

        	if(!this.div_sspAttr.form.cfn_valiation()){
        		//alert('SSP속성정보를 확인하세요.');
        		bResult = false;
        	}

        	if(bResult && !this.div_sspAddInfo.form.cfn_valiation()){
        		//alert('SSP부가정보를 확인하세요.');
        		bResult = false;
        	}

        	//var obj = this.tab_prdTab01.tabpages[1].form.cfn_valiation;
        	//if(typeof obj != 'undefined' && this.tab_prdTab01.tabpages[1].form.cfn_valiation()){
        	//	return true;
        	//}else{
        	//	alert('상품고시정보를 확인하세요.');
        	//	return false;
        	//}

        	if(bResult && this.ds_basicInfo.getColumn(0, "SSP_PRD_NM_CHG_YN") == 'Y'){
        		bResult = this.fn_lenChk(this.ds_basicInfo.getColumn(0, "SSP_PRD_NM"), 500, "SSP상품명");
        	}

        	return bResult;
        };


        //저장데이터 세팅
        this.fn_setInsertData = function(updRsn){
        	/*
        	##### 기본정보
        	CO_CD				: CO_CD
        	PRD_ID				: PRD_ID
        	PRD_NM				: PRD_NM
        	MALL_SPR_CD			: 'SSP' 고정
        	MTNL_ORGPLC_YN		: 다국적원산지여부
        	PRC_APLY_SPR_CD		: SSP_BO_PA_06 > 가격대상 > 데이터참조
        	NOTI_ITM_ID			: SSP_BO_PA_03_09 > 고시항목 > 데이터 참조
        	BRND_NM				: SSP_BO_PA_03_04 > 브랜드 > 데이터 참조
        	SSP_REPR_ATTR		: function 호출하여 사용
        	PRD_CLCD			: SSP_BO_PA_03_02 > 속성정보 > 데이터 참조
        	PRD_USE_YN			: PRD_USE_YN
        	PRD_DTL_DESC		: 상품상세설명 참조
        	HASH_TAG			: SSP_BO_PA_03_04 > 해시태그 > 데이터 참조
        	PRD_NUSE_RSN_CD		:
        	BG_SEQ				: SSP_BO_PA_03_04 > 배지 > 데이터참조
        	BG_APLY_STR_DTM		: SSP_BO_PA_03_04 > 배지 > 데이터참조
        	BG_APLY_END_DTM		: SSP_BO_PA_03_04 > 배지 > 데이터참조
        	UPD_RSN				:

        	ASIS_PRD_CLCD		: SSP_BO_PA_03_02 > 속성정보 > 데이터 참조
        	TOBE_PRD_CLCD		: SSP_BO_PA_03_02 > 속성정보 > 데이터 참조
        	ASIS_NOTI_ITM_ID	: SSP_BO_PA_03_09 > 고시항목 > 데이터 참조
        	TOBE_NOTI_ITM_ID	: SSP_BO_PA_03_09 > 고시항목 > 데이터 참조


        	##### 속성정보
        	SSP_BO_PP_03_02 > ds_sspAttr 데이터셋 참조

        	##### 고시정보
        	SSP_BO_PP_03_09 > ds_noticeDetail 데이터셋 참조
        	*/
        	this.ds_basicSave.clearData();
        	this.ds_attrSave.clear();
        	this.ds_notiSave.clear();

        	this.div_sspAttr.form.cfn_setData();	                                 //데이터셋 변경값 세팅
        	this.tab_prdTab01.tabpages[1].form.cfn_setData(); 	                     //데이터셋 변경값 세팅

        	var SSP_BO_PA_03_02 = this.div_sspAttr.form.cfn_getData();	             //ssp카테고리정보
        	var SSP_BO_PA_03_04 = this.div_sspAddInfo.form.cfn_getData();	         //ssp부가정보
        	var SSP_BO_PA_03_06 = this.tab_prdTab01.tabpages[0].form.cfn_getData();  //가격탭data
        	var SSP_BO_PA_03_09 = this.tab_prdTab01.tabpages[1].form.cfn_getData();	 //고시탭data

        	var SSP_PRD_NM_CHG_YN_CHECK = this.ds_basicSaveTemp.getColumn(0,"SSP_PRD_NM_CHG_YN") == undefined ? "N" : this.ds_basicSaveTemp.getColumn(0,"SSP_PRD_NM_CHG_YN");

        	//this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");	//텍스트에디터 내용 가져오기. 실행해야 가져와짐
        	//var PRD_DTL_DESC = this.fvDocWeb.getProperty("ir1").getProperty("value");	//구버전
        	var _win = this.div_prdDetail.form.wbs_prdDetail.getProperty("window");
        	var PRD_DTL_DESC =  _win.callMethod("getMarkDown");
        	if( _win ) { _win.destroy(); _win = null; }

        	this.ds_basicSave.insertRow(0);
        	this.ds_basicSave.setColumn(0, "CO_CD", this.ds_basicInfo.getColumn(0, "CO_CD"));
        	this.ds_basicSave.setColumn(0, "PRD_ID", this.ds_basicInfo.getColumn(0, "PRD_ID"));
        	this.ds_basicSave.setColumn(0, "PRD_NM", this.ds_basicInfo.getColumn(0, "PRD_NM"));
        	this.ds_basicSave.setColumn(0, "MTNL_ORGPLC_YN", this.ds_basicInfo.getColumn(0, "MTNL_ORGPLC_YN")); //다국적원산지여부
        	this.ds_basicSave.setColumn(0, "NOTI_ITM_ID", SSP_BO_PA_03_09.NOTI_ITM_ID);		                    //고시품목
        	this.ds_basicSave.setColumn(0, "BRND_NM", SSP_BO_PA_03_04.BRND_NM);				                    //브랜드
        	this.ds_basicSave.setColumn(0, "PRD_CLCD", SSP_BO_PA_03_02.PRD_CLCD);				                //카테고리
        	this.ds_basicSave.setColumn(0, "PRD_USE_YN", this.div_basicInfo.form.rdo_prdUseYn.value);	        //사용여부
        	this.ds_basicSave.setColumn(0, "PRD_NUSE_RSN_CD", this.div_basicInfo.form.cmb_prdNuseRsnCd.value);	//사용여부
        	this.ds_basicSave.setColumn(0, "PRD_DTL_DESC", PRD_DTL_DESC);						                //상품상세
        	this.ds_basicSave.setColumn(0, "HASH_TAG", SSP_BO_PA_03_04.HASH_TAG);				                //해시
        	this.ds_basicSave.setColumn(0, "BG_SEQ", SSP_BO_PA_03_04.BG_SEQ);					                //배지
        	this.ds_basicSave.setColumn(0, "BG_APLY_STR_DTM", SSP_BO_PA_03_04.BG_APLY_STR_DTM);	                //배지시작일
        	this.ds_basicSave.setColumn(0, "BG_APLY_END_DTM", SSP_BO_PA_03_04.BG_APLY_END_DTM);	                //배지종료일
        	this.ds_basicSave.setColumn(0, "PRC_APLY_SPR_CD", SSP_BO_PA_03_06.PRC_APLY_SPR_CD);	                //가격구분
        	this.ds_basicSave.setColumn(0, "UPD_RSN", updRsn);									                //수정사유팝업 콜백값
        	this.ds_basicSave.setColumn(0, "SSP_PRD_NM",  this.ds_basicInfo.getColumn(0, "SSP_PRD_NM"));				//SSP상품명
        	if(SSP_PRD_NM_CHG_YN_CHECK != this.ds_basicInfo.getColumn(0, "SSP_PRD_NM_CHG_YN")) {
        		this.ds_basicSave.setColumn(0, "SSP_PRD_NM_CHG_YN",  this.ds_basicInfo.getColumn(0, "SSP_PRD_NM_CHG_YN")); 	//SSP상품명 변경여부
        	}

        	this.ds_basicSave.setColumn(0, "ASIS_PRD_CLCD", SSP_BO_PA_03_02.ASIS_PRD_CLCD);	                    //카테고리 변경전값
        	this.ds_basicSave.setColumn(0, "TOBE_PRD_CLCD", SSP_BO_PA_03_02.TOBE_PRD_CLCD);	                    //카테고리 변경후값
        	this.ds_basicSave.setColumn(0, "ASIS_NOTI_ITM_ID", SSP_BO_PA_03_09.ASIS_NOTI_ITM_ID);	            //고시품목 변경전값
        	this.ds_basicSave.setColumn(0, "TOBE_NOTI_ITM_ID", SSP_BO_PA_03_09.TOBE_NOTI_ITM_ID);	            //고시품목 변경후값

        	this.ds_attrSave.copyData(this.div_sspAttr.form.ds_sspAttrReturn, true);	                        //속성
        	this.ds_notiSave.copyData(this.tab_prdTab01.tabpages[1].form.ds_noticeDetailReturn, true);	        //고시

        	var sppAttrDataCheck = this.fn_getDataCheck_ds_attrSave();	//속성정보 값변경체크
        	var gosiInfoDataCheck = this.fn_getDataCheck_ds_notiSave();	//고시정보 값변경체크

        	return this.fn_isDiffDataSet(sppAttrDataCheck) || sppAttrDataCheck || gosiInfoDataCheck;
        };

        //변경여부를 확인하기위한 임시성 데이터셋에 데이터 세팅
        this.fn_setInsertDataTemp = function() {
        	this.ds_basicSaveTemp.clearData();

        	var SSP_BO_PA_03_02 = this.div_sspAttr.form.cfn_getData();	//ssp카테고리정보
        	var SSP_BO_PA_03_04 = this.div_sspAddInfo.form.cfn_getData();	//ssp부가정보
        	var SSP_BO_PA_03_06 = this.tab_prdTab01.tabpages[0].form.cfn_getData();	//가격탭data

        	//this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");	//텍스트에디터 내용 가져오기. 실행해야 가져와짐
        	//var PRD_DTL_DESC = this.fvDocWeb.getProperty("ir1").getProperty("value");
        	var _win = this.div_prdDetail.form.wbs_prdDetail.getProperty("window");
        	var PRD_DTL_DESC =  _win.callMethod("getMarkDown");
        	if( _win ) { _win.destroy(); _win = null; }

        	this.ds_basicSaveTemp.insertRow(0);
        	this.ds_basicSaveTemp.setColumn(0, "CO_CD", this.ds_basicInfo.getColumn(0, "CO_CD"));
        	this.ds_basicSaveTemp.setColumn(0, "PRD_ID", this.ds_basicInfo.getColumn(0, "PRD_ID"));
        	this.ds_basicSaveTemp.setColumn(0, "MTNL_ORGPLC_YN", this.ds_basicInfo.getColumn(0, "MTNL_ORGPLC_YN"));
        	this.ds_basicSaveTemp.setColumn(0, "NOTI_ITM_ID", this.ds_basicInfo.getColumn(0, "NOTI_ITM_ID"));	    //고시품목
        	this.ds_basicSaveTemp.setColumn(0, "BRND_NM", SSP_BO_PA_03_04.BRND_NM);				                    //브랜드
        	this.ds_basicSaveTemp.setColumn(0, "PRD_CLCD", SSP_BO_PA_03_02.PRD_CLCD);				                //카테고리
        	this.ds_basicSaveTemp.setColumn(0, "PRD_USE_YN", this.div_basicInfo.form.rdo_prdUseYn.value);	        //사용여부
        	this.ds_basicSaveTemp.setColumn(0, "PRD_NUSE_RSN_CD", this.div_basicInfo.form.cmb_prdNuseRsnCd.value);	//사용여부
        	this.ds_basicSaveTemp.setColumn(0, "PRD_DTL_DESC", PRD_DTL_DESC);						                //상품상세
        	this.ds_basicSaveTemp.setColumn(0, "HASH_TAG", SSP_BO_PA_03_04.HASH_TAG);				                //해시
        	this.ds_basicSaveTemp.setColumn(0, "BG_SEQ", SSP_BO_PA_03_04.BG_SEQ);					                //배지
        	this.ds_basicSaveTemp.setColumn(0, "BG_APLY_STR_DTM", SSP_BO_PA_03_04.BG_APLY_STR_DTM);	                //배지시작일
        	this.ds_basicSaveTemp.setColumn(0, "BG_APLY_END_DTM", SSP_BO_PA_03_04.BG_APLY_END_DTM);	                //배지종료일
        	this.ds_basicSaveTemp.setColumn(0, "PRC_APLY_SPR_CD", SSP_BO_PA_03_06.PRC_APLY_SPR_CD);	                //가격구분
        	this.ds_basicSaveTemp.setColumn(0, "SSP_PRD_NM", this.ds_basicInfo.getColumn(0, "SSP_PRD_NM"));	                //SSP상품명
        	this.ds_basicSaveTemp.setColumn(0, "SSP_PRD_NM_CHG_YN", this.ds_basicInfo.getColumn(0, "SSP_PRD_NM_CHG_YN"));	//ssp상품명변경여부
        };

        //하위모듈 로딩이 끝난후 본테이블값 temp데이터셋에 담아 놓기
        this.fn_setLoading = function(pId, pStatus){
        	//모듈별 전달받은 값을 배열의 값에 업데이트
        	for(var i=0; i<this.childFormArr.length; i++){
        		var childId = this.childFormArr[i]['id'];
        		if(childId == pId){
        			this.childFormArr[i]['status'] = pStatus;
        		}
        	}

        	//하위모듈의 값의 true가 아닐경우 false리턴
        	var bStatus = true;
        	for(var i=0; i<this.childFormArr.length; i++){
        		var childStatus = this.childFormArr[i]['status'];
        		if(!childStatus){
        			bStatus = false;
        		}
        	}

        	//하위모듈의 값이 true일경우(로딩이 끝났을경우) 임시데이터셋에 데이터 저장(비교를 위한 데이터셋)
        	if(bStatus && !this.loaded){
        		this.loaded = true;
        		this.fn_setInsertDataTemp();
        	}

        };

        //데이터셋 비교
        this.fn_isDiffDataSet = function(attrCheck) {
        	var bResult = false;

        	if(attrCheck){
        		//속성값이 변경됐을경우 본테이블의 SSP_REPR_ATTR 업데이트 필요함.
        		this.ds_basicSave.setColumn(0, "DataSetRowType2", 2);
        		bResult = true;
        	}else{
        		this.ds_basicSave.setColumn(0, "DataSetRowType2", 0);
        		for(var i=0; i<this.ds_basicSaveTemp.getColCount(); i++){
        			var colId = this.ds_basicSaveTemp.getColID(i);
        			var a = this.ds_basicSaveTemp.getColumn(0, colId);
        			var b = this.ds_basicSave.getColumn(0, colId);

        			if(a!=b){
        				this.ds_basicSave.setColumn(0, "DataSetRowType2", 2);
        				bResult = true;
        				break;
        				//trace('다르다');
        			}else{
        				//trace('같다');
        			}
        		}
        	}

        	return bResult;
        };

        //속성데이터 변경체크
        this.fn_getDataCheck_ds_attrSave = function() {
        	var rResult = false;
        	for(var i=0; i<this.ds_attrSave.rowcount; i++){
        		var DataSetRowType = this.ds_attrSave.getColumn(i, "DataSetRowType");
        		var DataSetRowType2 = this.ds_attrSave.getColumn(i, "DataSetRowType2");
        		if(DataSetRowType2 > 0 && typeof DataSetRowType2 != 'undefined'){
        			rResult = true;
        			break;
        		}
        	}
        	return rResult;
        }

        //고시데이터 변경체크
        this.fn_getDataCheck_ds_notiSave = function() {
        	var rResult = false;
        	for(var i=0; i<this.ds_notiSave.rowcount; i++){
        		var DataSetRowType = this.ds_notiSave.getColumn(i, "DataSetRowType");
        		var DataSetRowType2 = this.ds_notiSave.getColumn(i, "DataSetRowType2");
        		if(DataSetRowType2 > 0 && typeof DataSetRowType2 != 'undefined'){
        			rResult = true;
        			break;
        		}
        	}
        	return rResult;
        }

        //속성데이터 수정사유 세팅
        this.fn_setAttrUpdRsn = function(updRsn) {
        	for(var i=0; i<this.ds_attrSave.rowcount; i++){
        		this.ds_attrSave.setColumn(i, "UPD_RSN", updRsn);
        	}
        }

        //속성데이터 수정사유 세팅
        this.fn_setNotiUpdRsn = function(updRsn) {
        	for(var i=0; i<this.ds_notiSave.rowcount; i++){
        		this.ds_notiSave.setColumn(i, "UPD_RSN", updRsn);
        	}
        }

        this.fn_setUseYnInit = function() {
        	if(this.ds_prdNuseRsnCd.rowcount>0 && this.ds_basicInfo.rowcount>0){
        		var PRD_USE_YN = this.ds_basicInfo.getColumn(0, "PRD_USE_YN");	//사용여부
        		var MRO_PRD_STATS_CD = this.ds_basicInfo.getColumn(0, "MRO_PRD_STATS_CD");	//MRO상태
        		var REPR_PRD_GRP_USEYN = this.ds_basicInfo.getColumn(0, "REPR_PRD_GRP_USEYN");	//대표상품그룹사용여부
        		var PRD_NUSE_RSN_CD = this.ds_basicInfo.getColumn(0, "PRD_NUSE_RSN_CD");	//미사용사유


        		if(PRD_USE_YN=='N' && PRD_NUSE_RSN_CD=='10'){	//S-MRO에서 OGG로 미사용으로 연동처리시 비활성화
        			this.div_basicInfo.form.rdo_prdUseYn.set_enable(false);
        			this.div_basicInfo.form.cmb_prdNuseRsnCd.set_enable(false);
        		}else{
        			var bNotExists = true;
        			for(var i=0; i<this.ds_prdNuseRsnCd.rowcount; i++){
        				var nuseCd = this.ds_prdNuseRsnCd.getColumn(i, "COM_DTL_CD");
        				if(nuseCd == PRD_NUSE_RSN_CD && nuseCd == '10'){
        					bNotExists = false;
        				}
        			}
        			if(bNotExists){
        				this.ds_prdNuseRsnCd.set_filterstr("COM_DTL_CD!='10'");
        			}

        			//MRO_PRD_STATS_CD
        			//0		S-MRO 사용
        			//10	S-MRO 휴면화
        			//20	S-MRO 종결
        			//MRO상태코드가 사용이면서 그룹사용여부가 Y일때만 사용여부 활성화
        			if(MRO_PRD_STATS_CD == '00' && REPR_PRD_GRP_USEYN == 'Y'){
        				this.div_basicInfo.form.rdo_prdUseYn.set_enable(true);
        			}else{
        				this.div_basicInfo.form.rdo_prdUseYn.set_enable(false);
        			}
        		}

        	}
        }

        //SSP상품명 체크 컨트롤
        this.fn_sspPrdNmChgControl = function(val){
        	if(val == 'Y'){
        		this.div_basicInfo.form.edt_sspPrdNm.set_readonly(false);
        	}else{
        		this.div_basicInfo.form.edt_sspPrdNm.set_readonly(true);
        	}
        }

        this.fn_lenChk = function(val, max, type){
        	var totalByte = 0;
        	var result = true;
        	for (var i = 0; i < val.length; i++) {
        		var oneChar = val.charAt(i);
        		if (escape(oneChar).length > 4) {
        			totalByte = totalByte + 3;
        		} else {
        			totalByte = totalByte + 1;
        		}
        	}

        	if(totalByte > max){
        		alert(type+' 자리수가 초과되었습니다.');
        		result = false;
        	}
        	return result;
        }


        // this.fn_mtnlChgControl = function (val) {
        // 	if (val =='Y') {
        // 		this.edt_orgplcCtryCdNm.set_value("다국적");
        // 		this.edt_orgplcCtryCd.set_value("");
        // 	} else {
        // 		this.edt_orgplcCtryCdNm.set_value(this.ds_basicInfo.getColumn(0,"ORGPLC_CTRY_CD_NM"));
        // 		this.edt_orgplcCtryCd.set_value(this.ds_basicInfo.getColumn(0,"ORGPLC_CTRY_CD"));
        // 	}
        // }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //에디터 속성 초기화
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.div_prdDetail.form.wbs_prdDetail.getProperty("document").getProperty("all");

        	var sContents = this.ds_basicInfo.getColumn(0, "PRD_DTL_DESC");
        	if(typeof sContents == 'undefined'){
        		sContents = '';
        	}
        	this.fvDocWeb.getProperty("editorData").setProperty("value",sContents);
        	this.fvDocWeb.getProperty("setData").callMethod("click");

        	this.fn_setLoading('productDesc', true);
        };
        this.webEditor_onusernotify = function(obj,e)
        {
        	try{
        		var oForm = this;
        		if (oForm && oForm.fn_editorCallback){
        			if (e.userdata == "onload"){
        				var initHeight = this.div_prdDetail.form.wbs_prdDetail.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-280);
        			}
        			oForm.fn_editorCallback(e.userdata);
        		}
        	}catch(e){
        		trace("sampleNaverEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };

        //탭 선택
        this.tab_prdTab01_onchanged = function(obj,e)
        {
        	this.selectedTab = e.postindex;
        	var params = {
        		coCd : this.coCd,
        		prdId : this.prdId,
        		notiItmId : this.notiItmId
        	};
        	this.tab_prdTab01.tabpages[e.postindex].form.cfn_read('tab_'+e.postindex, params, "fn_pageCallBack", this.pageMode, true);
        };

        //smart에디터 리사이징..안됨
        this.div_prdDetail_wbs_prdDetail_onsize = function(obj,e)
        {
        	trace(obj);
        	trace(e);
        };

        //취소,목록
        this.div_btn_btn_close_onclick = function(obj,e)
        {
        	this.close(false);
        };

        //등록버튼
        this.div_btn_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validation()){	//벨리데이션 체크
        		if(this.fn_setInsertData()){	//저장할 데이터 세팅 및 값 비교
        			var params = {};
        			var options = {};
        			this.gfn_openPopup('btn_save', "PR_POP::SSP_BO_NA_27.xfdl", params,  "fn_popupCallback", options);
        		}else{
        			alert(this.gfn_getMessage('ERRP000129'));	//변경 된 내용이 없습니다.
        			return;
        		}
        	}
        };

        this.div_basicInfo_cmb_prdNuseRsnCd_oninnerdatachanged = function(obj,e)
        {
        	var PRD_USE_YN = this.ds_basicInfo.getColumn(0, "PRD_USE_YN");
        	if(PRD_USE_YN != 'Y'){
        		obj.set_readonly(false);
        	}else{
        		obj.set_readonly(true);
        	}
        };

        this.div_basicInfo_rdo_prdUseYn_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 'Y'){
        		if(prdClcdUseYn != 'Y'){
        			this.alert('미사용 상품군입니다.')
        			this.ds_basicInfo.setColumn(0, "PRD_USE_YN", e.prevalue);
        			this.div_basicInfo.form.cmb_prdNuseRsnCd.set_readonly(false);
        		}
        		this.div_basicInfo.form.cmb_prdNuseRsnCd.set_readonly(true);
        	}else{
        		var DISP_PRD_YN = this.ds_basicInfo.getColumn(0, "DISP_PRD_YN");
        		var DISP_PRD_CON_YN = this.ds_basicInfo.getColumn(0, "DISP_PRD_CON_YN");
        		var GRP_PRD_YN = this.ds_basicInfo.getColumn(0, "GRP_PRD_YN");
        		if(DISP_PRD_YN == 'Y' || DISP_PRD_CON_YN == 'Y'){
        			alert('전시상품으로 매핑된 상품입니다.');
        			this.ds_basicInfo.setColumn(0, "PRD_USE_YN", e.prevalue);
        			return;
        		}
        		if(GRP_PRD_YN == 'Y'){
        			alert('시리즈그룹상품으로 매핑된 상품입니다.');
        			this.ds_basicInfo.setColumn(0, "PRD_USE_YN", e.prevalue);
        			return;
        		}

        		this.ds_prdNuseRsnCd.set_filterstr("COM_USR_DEFN_NM_1 != 'X'"); //미사용 체크 시 X인 row filter 처리
        		this.div_basicInfo.form.cmb_prdNuseRsnCd.set_readonly(false);
        	}
        };

        this.div_basicInfo_cmb_prdNuseRsnCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == '10'){
        		alert('해당항목은 선택 불가능합니다.');
        		this.div_basicInfo.form.cmb_prdNuseRsnCd.set_value(e.prevalue);
        		return false;
        	}
        };

        //이력팝업
        this.btn_history_popup_onclick = function(obj,e)
        {
        	var params = {
        		historyType:'productDetail',
        		key1:this.ds_search.getColumn(0, "PRD_ID")
        	};
            var options = {};
            this.gfn_openPopup('productDetailHistory', "PR_POP::SSP_BO_PA_48.xfdl", params,  "fn_popupCallback", options);
        };

        this.div_basicInfo_chk_sspPrdNmChgYn_onchanged = function(obj,e)
        {
        	this.fn_sspPrdNmChgControl(e.postvalue);
        };


        this.div_basicInfo_chk_mtnlYn_onchanged = function(obj,e)
        {
        	//this.fn_mtnlChgControl(e.postvalue);
        };

        this.div_basicInfo_Static16_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_basicInfo.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basicInfo.form.sta_.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basicInfo.form.Static29_00_00_01_01_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basicInfo.form.edt_prdId.addEventHandler("onchanged",this.div_basicInfo_edt_prdId_onchanged,this);
            this.div_basicInfo.form.rdo_prdUseYn.addEventHandler("onitemchanged",this.div_basicInfo_rdo_prdUseYn_onitemchanged,this);
            this.div_basicInfo.form.cmb_prdNuseRsnCd.addEventHandler("oninnerdatachanged",this.div_basicInfo_cmb_prdNuseRsnCd_oninnerdatachanged,this);
            this.div_basicInfo.form.cmb_prdNuseRsnCd.addEventHandler("onitemchanged",this.div_basicInfo_cmb_prdNuseRsnCd_onitemchanged,this);
            this.div_basicInfo.form.btn_history_popup.addEventHandler("onclick",this.btn_history_popup_onclick,this);
            this.div_basicInfo.form.btn_save2.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.div_basicInfo.form.chk_sspPrdNmChgYn.addEventHandler("onchanged",this.div_basicInfo_chk_sspPrdNmChgYn_onchanged,this);
            this.div_basicInfo.form.chk_mtnlYn.addEventHandler("onchanged",this.div_basicInfo_chk_mtnlYn_onchanged,this);
            this.div_oprtr.form.edt_prdOprtrNm.addEventHandler("onchanged",this.div_oprtr_edt_prdOprtrNm_onchanged,this);
            this.tab_prdTab01.addEventHandler("onchanged",this.tab_prdTab01_onchanged,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onsize",this.div_prdDetail_wbs_prdDetail_onsize,this);
            this.div_btn.form.btn_save.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.div_btn.form.btn_close.addEventHandler("onclick",this.div_btn_btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
