(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_22_4");
            this.set_titletext("요청상품정보");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ONLY_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_DUP_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_END_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NMASPRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ONLY_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MRO_PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_BASIS_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_SELL_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RP_PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RP_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RP_ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_DUP_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_END_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NMASPRPS_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_atflList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATFL_NM\">첨부 파일 테스트 길이 01</Col></Row><Row><Col id=\"ATFL_NM\">첨부 파일 02</Col></Row><Row><Col id=\"ATFL_NM\">첨부 03</Col></Row><Row><Col id=\"ATFL_NM\">첨부 파일 테스트 04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selOptnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo50","139","-126","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo51","1001","-126","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1120","500",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","45","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65","0","76","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02","0","45","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10","0","76","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66","740","76","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("Combo50","139","-126","150","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("Combo51","1001","-126","150","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","107","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00","740","107","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","107","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","0","138","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00","740","138","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","0","138","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","0","169","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00","740","169","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00","0","169","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","0","199","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00","0","199","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdNmEqlCmpr","145","177","95","17",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("화학물질여부");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static04_00","370","45","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","13","147","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_text("■ 요청 상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00","370","76","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdNmEqlCmpr00","245","177","70","17",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("전용상품");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","0","261","1120","108",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00_00","0","261","130","108",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_01","0","230","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_01_00_00_00_01","0","230","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","423","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static65_01","0","454","1120","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","423","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","454","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_01","740","454","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","370","423","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","-2","391","147","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("■ 요청 고객 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static66_00_00_00_00_01_00_00","370","454","130","32",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01","597","49","503","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","138","49","222","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01","508","80","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00","878","111","222","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00_00","878","142","222","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00_00_00","878","172","222","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","138","80","222","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","138","111","592","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00","260","142","470","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00","138","203","962","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01","138","142","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00_01","878","80","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00_01_00","967","80","133","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_01","597","80","133","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00","137","427","223","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_00","227","458","133","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_00_00","597","458","133","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_00_00_00_00","507","427","593","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_00_00_01","967","458","133","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_02","507","458","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_00_01_01","877","458","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_02_00","137","458","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_01_01_03","507","49","80","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_atflLink","138","234","962","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            obj.set_scrollbartype("indicator none");
            obj.set_scrolltype("horizontal");
            obj.set_scrolldisplaymode("normal");
            obj.set_selectscrollmode("scroll");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_binddataset("ds_selOptnCd");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"1\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"2\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"3\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/><Cell col=\"4\" cssclass=\"grd_Txt_Blue_U\" border=\"0px solid,0px solid #d4d4d4,0px solid #d4d4d4\" background=\"transparent\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer0","138","265","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer1","248","265","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_text("");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer2","358","265","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer3","468","265","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_imageViewer4","578","265","100","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj.set_stretch("fit");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_main.form.chk_prdNmEqlCmpr00","value","ds_detail","ONLY_SPR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_main.form.chk_prdNmEqlCmpr","value","ds_detail","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.chk_newPrdProcStats4","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.chk_newPrdProcStats5","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.chk_newPrdProcStats6","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.chk_newPrdProcStats7","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.chk_newPrdProcStats8","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.chk_newPrdProcStats9","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.edt_01_00","value","ds_detail","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.edt_01_00_00","value","ds_detail","REPR_PRD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.edt_01","value","ds_detail","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_01_01","value","ds_detail","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.edt_01_01_01","value","ds_detail","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.edt_01_01_00_01","value","ds_detail","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.edt_01_01_00_01_00","value","ds_detail","ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.edt_01_01_00","value","ds_detail","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.edt_01_01_00_00","value","ds_detail","HPE_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_01_01_00_00_00","value","ds_detail","PUB_ONLY_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.edt_01_00_00_00","value","ds_detail","REQ_PRVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.edt_01_00_00_00_00","value","ds_detail","PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.edt_01_00_00_00_00_01","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.edt_01_00_00_00_00_00","value","ds_detail","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.edt_01_00_00_00_00_01_00","value","ds_detail","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.edt_01_00_00_00_00_01_00_00","value","ds_detail","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.edt_01_00_00_00_00_01_00_00_00","value","ds_detail","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.edt_01_00_00_00_00_01_00_00_00_01","value","ds_detail","REQPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.edt_01_01_00_01_01","value","ds_detail","REQPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.edt_01_01_02","value","ds_detail","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.edt_01_00_00_00_00_01_00_00_00_00_00","value","ds_detail","REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.edt_01_01_02_00","value","ds_detail","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.edt_01_01_03","value","ds_detail","REQ_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_22_4.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_22_4.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.localPrdId = "";
        this.localPrdNm = "";
        this.localPrdIdView = "";
        this.localBzplcId = "";
        this.localBzplcNm = "";
        this.localOprUnitId = "";
        this.localOprUnitNm = "";
        this.return = {isProcessed : false}; // 데이터 처리 여부
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.ds_detail.copyData(this.ds_detailInit);
        	this.fn_commonCodeSearch();
        };



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
            var sSvcId = "commonCodeSearch";
            var sUrl   = "/co/select-common-code-list.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_pubOnlySprCd=ds_output1 ds_prdRegDisTpCd=ds_output2";
            var arg    = "";

            this.ds_search.setColumn(0, "CODE_LIST", "PUB_ONLY_SPR_CD,PRD_REG_DIS_TP_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_search = function (pgNo){
            var sSvcId = "search";
            var sUrl   = "/pc/pc-prc-mng/get-pc-prd-req-info.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_detail=ds_detail ds_atflList=ds_atflList";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/


        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        	    // 조회
                case "search" :
        			// 첨부파일 처리
        			var imgUrl = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP") + "/co/file-download.do?";
        			trace(imgUrl)
        			for(var i = 0, j = 0; i < this.div_main.form.grd_atflLink.getCellCount("Body"); i++) {
        			    if(i < this.ds_atflList.rowcount) {
        					this.div_main.form.grd_atflLink.setCellProperty("Body", i, "text", this.ds_atflList.getColumn(i, "ATFL_NM"));
        					// 이미지 뷰어 처리
        					if(this.ds_atflList.getColumn(i, "ETC_FDS_1") == 'C3') {
        						this.div_main.form["img_imageViewer" + j  ].set_image(imgUrl + "docRegId=" + this.ds_atflList.getColumn(i, "DOC_REG_ID") + "&docRegSeq=" + this.ds_atflList.getColumn(i, "DOC_REG_SEQ"));
        						this.div_main.form["img_imageViewer" + j++].set_visible(true);
        					}
        				} else {
        					this.div_main.form.grd_atflLink.setFormatColProperty(i, "size", 0);
        				}
        			}

                    break;

            }
        };




        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
            // grid 초기 설정
            //this.div_prdRegReqProc.form.grd_prdAttr.uSortFlag       = "false";
            //this.div_prdRegReqProc.form.grd_prdAttr.uServerSortFlag = "false";
            //this.div_prdRegReqProc.form.grd_prdAttr.uSortCallback   = "";
            //this.div_prdRegReqProc.form.grd_prdAttr.uCellSizeType   = "true";
        }





        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        this.fn_searchPcPrdReq = function(){
        	this.ds_search.setColumn(0, "CO_CD" , this.fv_coCd);
        	this.ds_search.setColumn(0, "NEW_PRD_REQ_NO", this.parent.parent.parent.parent.parent.newPrdReqNo);
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.fn_search();
        }

        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm) {
        	this.localPrdId = prdId;
        	this.localPrdNm = prdNm;
        	this.localBzplcId = bzplcId;
        	this.localBzplcNm = bzplcNm;
        };




        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        // 첨부파일 그리드
        this.div_main_grd_atflLink_oncellclick = function(obj,e)
        {
        // 	var strUrl = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP")
        // 	           + "/co/file-download.do?"
        // 			   + "docRegId="   + this.ds_atflList.getColumn(e.cell, "DOC_REG_ID")
        // 			   + "&docRegSeq=" + this.ds_atflList.getColumn(e.cell, "DOC_REG_SEQ")
        // 			   ;
        //     this.web_download.set_url(strUrl);
        //
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.set_downloadfilename("asd");	//runtime 전용 프로퍼티


        	this.FileDownTransfer.setPostData("docRegId",this.ds_atflList.getColumn(e.cell, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_atflList.getColumn(e.cell, "DOC_REG_SEQ"));
        	this.FileDownTransfer.download('/co/file-download.do');

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_main.form.Static04_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_main.form.Static60_00_00.addEventHandler("onclick",this.div_search_Static60_00_onclick,this);
            this.div_main.form.Static04_00_00.addEventHandler("onclick",this.div_search_Static04_00_onclick,this);
            this.div_main.form.Static60_00_00_00.addEventHandler("onclick",this.div_search_Static60_00_onclick,this);
            this.div_main.form.grd_atflLink.addEventHandler("oncellclick",this.div_main_grd_atflLink_oncellclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CA_22_4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
