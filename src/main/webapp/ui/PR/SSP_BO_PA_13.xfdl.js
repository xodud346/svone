(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_13");
            this.set_titletext("SSP상품추가 상세");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PROC_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attrInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notiInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertData", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basicInfo","20","20","1296","230",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","191",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static17","0","160",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","129",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static65","0","98",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static07","0","67",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static03","0","36",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static02","0","36","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","36","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static04","862","36","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("대표상품그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static06","0","67","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static08","862","67","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("S-MRO 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static10","0","98","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static66","862","98","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static12","0","129","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","129","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static14","862","129","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16","0","160","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("배수주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static18","862","160","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static19","991","160",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","191","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("대표상품그룹등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static18_00","862","191","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_text("빠른배송여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static32","431","191","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("SSP등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-95","150","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-95","150","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","11","155","16",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","431","160","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_text("몰구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_","129","98","723","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01_01_00_00_00","992","130","294","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1002","195","68","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("28");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","40","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprPrdId","570","40","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprPrdGrpId","1002","40","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","71","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_attrVal","140","102","712","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdStatsCd","1002","71","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pubOnlySprCd","1002","102","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","140","133","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","570","133","130","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","704","133","148","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCd","1002","133","138","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCdNm","1144","133","143","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_multiSellUnitQty","140","164","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mallSprCd","570","164","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqNo","1002","164","285","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reprRegDtm","140","195","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sspRegDtm","570","195","282","24",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_save_top",null,"2","70","30","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("46");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_mroAttr","20","252","638","313",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("PR::SSP_BO_PA_03_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_image","20","783","1296","287",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("image box");
            obj.set_url("PR::SSP_BO_PA_03_05.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_oprtr","20","1539","1296","101",null,null,null,null,null,null,this);
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

            obj = new Tab("tab_prdTab01","20","1654","1296","607",null,null,null,null,"200","3000",this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

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

            obj = new Div("div_sspAttr","678","252","638","313",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("PR::SSP_BO_PA_03_02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_mroAddInfo","20","575","638","195",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("PR::SSP_BO_PA_03_03.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_sspAddInfo","678","575","638","195",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("PR::SSP_BO_PA_03_04.xfdl");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_visible("true");
            obj.set_async("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_prdDetail","20","1085","1296","445",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","1","300","30",null,null,null,null,null,null,this.div_prdDetail.form);
            obj.set_taborder("0");
            obj.set_text("상품 상세 설명");
            obj.set_cssclass("sta_WF_title02");
            this.div_prdDetail.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_prdDetail","3","36","1293","399",null,null,null,null,null,null,this.div_prdDetail.form);
            obj.set_taborder("1");
            this.div_prdDetail.addChild(obj.name, obj);

            obj = new Div("div_btn","20","2260","1294","90",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","651","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_close","577","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.div_btn.addChild(obj.name, obj);
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

            obj = new BindItem("item4","div_basicInfo.form.edt_mroPrdStatsCd","value","ds_basicInfo","MRO_PRD_STATS_CD");
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

            obj = new BindItem("item10","div_basicInfo.form.edt_orgplcCtryCd","value","ds_basicInfo","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basicInfo.form.edt_orgplcCtryCdNm","value","ds_basicInfo","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basicInfo.form.edt_multiSellUnitQty","value","ds_basicInfo","MULT_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basicInfo.form.edt_mallSprCd","value","ds_basicInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basicInfo.form.edt_newPrdReqNo","value","ds_basicInfo","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basicInfo.form.edt_reprRegDtm","value","ds_basicInfo","REPR_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_basicInfo.form.edt_sspRegDtm","value","ds_basicInfo","SSP_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basicInfo.form.CheckBox00","value","ds_basicInfo","QCK_DLV_YN");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_01.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_05.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_09.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_07.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_08.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_02.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_03.xfdl");
            this._addPreloadList("fdl","PR::SSP_BO_PA_03_04.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_13.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_13.xfdl", function() {
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
        this.selectedTab = 0;
        this.pageMode = "";
        this.procStatsCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
         	this.gfn_formOnLoad(this);
          	this.fn_commonCodeSearch();

          	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
          	this.ds_search.setColumn(0, "PRD_ID", this.parent.prdId);

          	this.fn_basicInfo();
        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.div_btn.form.btn_save.click();
        		event.preventDefault();
        	}
        	// CTRL + A
        	if (e.keycode == 65 && e.ctrlkey == true) {
        		// 접수
        		this.div_btn.form.btn_save.click();
        		event.preventDefault();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        			this.close();
        			return;

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
        	var outDs = "ds_utClausSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.insertRow(0);
        	this.ds_search.setColumn(0, "CODE_LIST", "UT_CLAUS_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_basicInfo = function(){
        	var sSvcId = "basicInfo";
        	var sUrl = "/pr/prd-add/select-product-add-basic-info.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_basicInfo=basicInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };


        //접수처리
        this.fn_accept = function (bInit){

            var sSvcId = "accept";
            var sUrl = "/pr/prd-add/insert-product-reg-proc-accept.do";
            var inDs = "ds_insertData=ds_insertData";
            var outDs = "";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        //등록처리
        this.fn_regProc = function (bInit){

            var sSvcId = "regProc";
            var sUrl = "/pr/prd-add/insert-product-reg-proc.do";
            var inDs = "ds_basicInsert=ds_basicInsert ds_attrInsert=ds_attrInsert ds_notiInsert=ds_notiInsert";
            var outDs = "";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        		return;
        	}

        	switch(svcID){
        		case "basicInfo":
        			if(this.fn_init()){	//상품상태에 따라 페이지모드 구분
        				this.fn_initEditor();//에디터초기화

        				this.coCd = this.ds_basicInfo.getColumn(0, "CO_CD");
        				this.prdId = this.ds_basicInfo.getColumn(0, "PRD_ID");
        				var MRO_PRD_CLCD = this.ds_basicInfo.getColumn(0, "MRO_PRD_CLCD");
        				var PRD_CLCD = this.ds_basicInfo.getColumn(0, "PRD_CLCD");
        				var PUB_ONLY_SPR_CD = this.ds_basicInfo.getColumn(0, "PUB_ONLY_SPR_CD");
        				var params = {
        					'coCd' : this.coCd,
        					'prdId' : this.prdId,
        					'mroPrdClcd' : MRO_PRD_CLCD,
        					'prdClcd' : PRD_CLCD,
        					'pubOnlySprCd' : PUB_ONLY_SPR_CD
        				};

        				//하위 모듈 호출
        				this.div_mroAttr.form.cfn_read("mroAttr", params, "fn_pageCallBack");	                            //MRO카테고리,속성정보
        				this.div_sspAttr.form.cfn_regProcRead("sspAttr", params, "fn_pageCallBack", this.pageMode);	        //SSP카테고리,속성정보
        				this.div_mroAddInfo.form.cfn_read("mroAddInfo", params, "fn_pageCallBack");	                        //MRO 부가정보
        				this.div_sspAddInfo.form.cfn_regProcRead("sspAddInfo", params, "fn_pageCallBack", this.pageMode);	//SSP 부가정보
        				this.div_image.form.cfn_regProcRead("image", params, "fn_pageCallBack");	                        //이미지
        				this.tab_prdTab01.tabpages[0].form.cfn_regProcRead("notiInfo", params, "fn_pageCallBack");	            //고시

        			};
        			break;

        		case "accept":
        			this.reload();

        			break;

        		case "regProc":
        			this.reload();

        			break;
        	}
        };

        this.fn_editorCallback = function(sType){
        	switch (sType){
        		case "onload" :
        			var sContents = this.ds_basicInfo.getColumn(0, "PRD_DTL_DESC");
        			this.fvDocWeb.getProperty("ir1").setProperty("value", sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        			break;
        	}
        };

        //모듈콜백
        this.fn_pageCallBack = function(svcID, errorCode, errorMsg, rtnVal){
        	switch (svcID){
        		case "sspCategorySelect" :
        			this.notiItmId = rtnVal.NOTI_ITM_ID;
        			if(this.tab_prdTab01.tabindex==0){	//고시
        				if(typeof this.tab_prdTab01.tabpages[this.selectedTab].form.cfn_regProcRead != 'undefined'){
        					var params = {
        						'coCd' : this.coCd,
        						'prdId' : this.prdId,
        						'notiItmId' : this.notiItmId,
        						'pubOnlySprCd' : this.ds_basicInfo.getColumn(0,'PUB_ONLY_SPR_CD'),
        					};
        					this.tab_prdTab01.tabpages[this.tab_prdTab01.tabindex].form.cfn_regProcRead("notiItm", params, "fn_pageCallBack", this.pageMode);
        				}
        			}
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
        			this.div_mroAttr.form.cfn_read("mroAttr", params, "fn_pageCallBack");	                            //MRO카테고리,속성정보

        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function() {
        	this.procStatsCd = this.ds_basicInfo.getColumn(0, "PROC_STATS_CD");	//처리상태
        	this.pageMode = this.ds_basicInfo.getColumn(0, "PROC_STATS_CD")=='ACCEPT'?'edit':'readonly';	//readonly 읽기전용, edit 수정모드

        	if(this.pageMode=='readonly'){
        		//this.div_prdDetail.form.wbs_prdDetail.set_enable(false);
        	}else if(this.pageMode=='edit'){
        		//this.div_prdDetail.form.wbs_prdDetail.set_enable(true);
        	}

        	if(this.procStatsCd=='REQ'){	//요청
        		this.div_btn.form.btn_close.set_text('취소');
        		this.div_btn.form.btn_save.set_text('접수');
        		this.div_btn.form.btn_save.set_enable(true);
        		this.div_basicInfo.form.btn_save_top.set_text('접수');
        		this.div_basicInfo.form.btn_save_top.set_enable(true);
        		this.div_prdDetail.form.wbs_prdDetail.set_enable(false);
        	}else if(this.procStatsCd=='ACCEPT'){	//접수
        		this.div_btn.form.btn_close.set_text('취소');
        		this.div_btn.form.btn_save.set_text('등록');
        		this.div_btn.form.btn_save.set_enable(true);
        		this.div_basicInfo.form.btn_save_top.set_text('등록');
        		this.div_basicInfo.form.btn_save_top.set_enable(true);
        	}else if(this.procStatsCd=='COMP'){	//완료
        		this.div_btn.form.btn_close.set_text('목록');
        		this.div_btn.form.btn_save.set_text('등록');
        		this.div_btn.form.btn_save.set_enable(false);
        		this.div_basicInfo.form.btn_save_top.set_text('등록');
        		this.div_basicInfo.form.btn_save_top.set_enable(false);
        	}

        	return true;
        };

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

        //저장데이터 세팅
        this.fn_setInsertData = function(){
        	/*
        	##### 기본정보
        	CO_CD				: MROPRD CO_CD
        	PRD_ID				: MROPRD PRD_ID
        	PRD_NM				: MROPRD PRD_NM
        	MALL_SPR_CD			: '10' 고정(SSP)
        	NOTI_ITM_ID			: SSP_BO_PA_03_09 > 고시항목 데이터 참조
        	BRND_NM				: SSP_BO_PA_03_04 > 브랜드 데이터 참조
        	SSP_REPR_ATTR		: function 호출하여 사용
        	PRD_CLCD			: SSP_BO_PA_03_02 > 데이터 참조
        	PRD_USE_YN			: 'Y' 고정
        	DOC_REG_ID			: SSP_BO_PA_03_05 > 이미지 데이터참조
        	PRD_DTL_DESC		: 상품상세설명 참조
        	HASH_TAG			: SSP_BO_PA_03_04 > 해시태그 데이터 참조
        	BG_SEQ				: SSP_BO_PA_03_04 > 배지 데이터참조
        	BG_APLY_STR_DTM		: SSP_BO_PA_03_04 > 배지 데이터참조
        	BG_APLY_END_DTM		: SSP_BO_PA_03_04 > 배지 데이터참조
        	REG_PROC_PRD_STATS_CD	: '20' 고정(완료코드)

        	##### 속성정보
        	SSP_BO_PP_03_02 > ds_sspAttr 데이터셋 참조

        	##### 고시정보
        	SSP_BO_PP_03_09 > ds_noticeDetail 데이터셋 참조
        	*/
        	this.ds_basicInsert.clearData();
        	this.ds_attrInsert.clearData();
        	this.ds_notiInsert.clearData();

        	var SSP_BO_PA_03_02 = this.div_sspAttr.form.cfn_getData();	//ssp카테고리정보
        	var SSP_BO_PA_03_04 = this.div_sspAddInfo.form.cfn_getData();	//ssp부가정보
        	var SSP_BO_PA_03_05 = this.div_image.form.cfn_getData();	//이미지정보
        	var SSP_BO_PA_03_09 = this.tab_prdTab01.tabpages[0].form.cfn_getData();	//고시탭data

        	//this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");	//텍스트에디터 내용 가져오기. 실행해야 가져와짐
        	//var PRD_DTL_DESC = this.fvDocWeb.getProperty("ir1").getProperty("value");
        	var _win = this.div_prdDetail.form.wbs_prdDetail.getProperty("window");
        	var PRD_DTL_DESC =  _win.callMethod("getMarkDown");
        	if( _win ) { _win.destroy(); _win = null; }

        	this.ds_basicInsert.insertRow(0);
        	this.ds_basicInsert.setColumn(0, "CO_CD", this.ds_basicInfo.getColumn(0, "CO_CD"));
        	this.ds_basicInsert.setColumn(0, "PRD_ID", this.ds_basicInfo.getColumn(0, "PRD_ID"));
        	this.ds_basicInsert.setColumn(0, "PRD_NM", this.ds_basicInfo.getColumn(0, "PRD_NM"));
        	this.ds_basicInsert.setColumn(0, "MALL_SPR_CD", '10');
        	this.ds_basicInsert.setColumn(0, "NOTI_ITM_ID", SSP_BO_PA_03_09.NOTI_ITM_ID);
        	this.ds_basicInsert.setColumn(0, "BRND_NM", SSP_BO_PA_03_04.BRND_NM);
        	this.ds_basicInsert.setColumn(0, "PRD_CLCD", SSP_BO_PA_03_02.PRD_CLCD);
        	this.ds_basicInsert.setColumn(0, "PRD_USE_YN", 'Y');
        	this.ds_basicInsert.setColumn(0, "DOC_REG_ID", SSP_BO_PA_03_05.DOC_REG_ID);	//첨부파일키
        	this.ds_basicInsert.setColumn(0, "PRD_DTL_DESC", PRD_DTL_DESC);
        	this.ds_basicInsert.setColumn(0, "HASH_TAG", SSP_BO_PA_03_04.HASH_TAG);
        	this.ds_basicInsert.setColumn(0, "BG_SEQ", SSP_BO_PA_03_04.BG_SEQ);
        	this.ds_basicInsert.setColumn(0, "BG_APLY_STR_DTM", SSP_BO_PA_03_04.BG_APLY_STR_DTM);
        	this.ds_basicInsert.setColumn(0, "BG_APLY_END_DTM", SSP_BO_PA_03_04.BG_APLY_END_DTM);
        	this.ds_basicInsert.setColumn(0, "REG_PROC_PRD_STATS_CD", '20');	//완료상태
        	this.ds_basicInsert.setColumn(0, "NEW_PRD_REQ_NO", this.ds_basicInfo.getColumn(0, "NEW_PRD_REQ_NO"));

        	this.ds_attrInsert.copyData(this.div_sspAttr.form.ds_sspAttr);	//속성
        	this.ds_notiInsert.copyData(this.tab_prdTab01.tabpages[0].form.ds_noticeDetail);	//고시

        	this.fn_regProc();
        };

        //저장시 데이터체크
        this.fn_validation = function() {
        	var bResult = true;
        	if(!this.div_sspAttr.form.cfn_valiation()){
        		bResult = false;
        	}

        	if(bResult && !this.div_sspAddInfo.form.cfn_valiation()){
        		bResult = false;
        	}

        	return bResult;

        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //에디터 속성 초기화
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	//this.fvDocWeb = this.div_prdDetail.form.wbs_prdDetail.getProperty("document").getProperty("all");
        	this.fvDocWeb = this.div_prdDetail.form.wbs_prdDetail.getProperty("document").getProperty("all");

        	var sContents = this.ds_basicInfo.getColumn(0, "PRD_DTL_DESC");
        	if(typeof sContents == 'undefined'){
        		sContents = '';
        	}
        	this.fvDocWeb.getProperty("editorData").setProperty("value",sContents);
        	this.fvDocWeb.getProperty("setData").callMethod("click");
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
        	this.tab_prdTab01.tabpages[e.postindex].form.cfn_regProcRead('tab_'+e.postindex, params, "fn_pageCallBack", this.pageMode);
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

        //접수,등록버튼
        this.div_btn_btn_save_onclick = function(obj,e)
        {
        	if(this.procStatsCd=='REQ'){
        		if(this.confirm("접수처리 하시겠습니까?")){
        			this.ds_insertData.clearData();
        			this.ds_insertData.insertRow(0);
        			this.ds_insertData.setColumn(0, "CO_CD", this.ds_basicInfo.getColumn(0, "CO_CD"));
        			this.ds_insertData.setColumn(0, "PRD_ID", this.ds_basicInfo.getColumn(0, "PRD_ID"));
        			this.fn_accept();
        		}
        	}else if(this.procStatsCd=='ACCEPT'){
        		if(this.fn_validation()){
        			if(this.confirm("입력된 정보로 등록처리 하시겠습니까?")){
        				this.fn_setInsertData();
        			}
        		}
        	}
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
            this.div_basicInfo.form.btn_save_top.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.tab_prdTab01.addEventHandler("onchanged",this.tab_prdTab01_onchanged,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.div_prdDetail.form.wbs_prdDetail.addEventHandler("onsize",this.div_prdDetail_wbs_prdDetail_onsize,this);
            this.div_btn.form.btn_save.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.div_btn.form.btn_close.addEventHandler("onclick",this.div_btn_btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
