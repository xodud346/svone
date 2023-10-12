(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_08");
            this.set_titletext("배너 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CATG_ZONE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pprCatgBnrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CATG_ZONE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"PRD_CLCD_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pprCatgMnfrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CATG_ZONE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MNFR_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClcdSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CATG_ZONE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ATFL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_SEQ1\" type=\"INT\" size=\"256\"/><Column id=\"MNFR_ATFL_STOR_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ORI_ATFL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ATFL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_SEQ2\" type=\"INT\" size=\"256\"/><Column id=\"MNFR_ATFL_STOR_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ORI_ATFL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO3\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ATFL_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_DOC_REG_SEQ3\" type=\"INT\" size=\"256\"/><Column id=\"MNFR_ATFL_STOR_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_ORI_ATFL_NM3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnfrSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static65_00_00_00_00","20","141",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","110",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","79",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttl","20","79","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","sta_ttl:10","83","710","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgNm","94","110","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("카테고리명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","885","82","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(0 / 200 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catg","20","110","75","64",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","425",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","499",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00","20","15","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 인기카테고리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info","20","sta_title00:4","350",null,null,"487",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("* 표시된 항목은 필수 입력사항입니다.\r\n");
            this.addChild(obj.name, obj);

            obj = new Static("sta_catgImg","94","141","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcdAtflNm","sta_catgImg:10","145","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdImgAdd","604","145","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdImgDelete","668","145","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prdClcdImgSize","699","145","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이미지사이즈 : 298*454");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","280","114","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPop","414","114","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","20","203",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01","20","172",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg01","94","172","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("제조원명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfr1","20","172","75","64",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg00_00","94","203","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrAtflNm1","180","207","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgAdd1","604","207","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgDelete1","668","207","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfrImgSize1","699","207","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("이미지사이즈 : 50*50");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo1","180","176","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm1","280","176","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPop1","414","176","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00_00","20","265",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01_00","20","234",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg01_00","94","234","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("제조원명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfr2","20","234","75","64",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg00_00_00","94","265","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrAtflNm2","180","269","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgAdd2","604","269","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgDelete2","668","269","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfrImgSize2","699","269","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("이미지사이즈 : 50*50");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo2","180","238","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm2","280","238","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPop2","414","238","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00_00_00","20","327",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01_00_00","20","296",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg01_00_00","94","296","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("제조원명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfr3","20","295","75","64",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg00_00_00_00","94","327","76","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrAtflNm3","180","331","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgAdd3","604","331","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrImgDelete3","668","331","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mnfrImgSize3","699","331","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("이미지사이즈 : 50*50");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo3","180","300","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm3","280","300","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPop3","414","300","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","180","114","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("sta_zoneNum","133","14","57","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("(구역 1)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1040","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_ttl","value","ds_save","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdClsfNm","value","ds_save","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_mnfrNo1","value","ds_save","MNFR_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mnfrNm1","value","ds_save","MNFR_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mnfrNo2","value","ds_save","MNFR_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_mnfrNm2","value","ds_save","MNFR_NM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_mnfrNo3","value","ds_save","MNFR_NO3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_mnfrNm3","value","ds_save","MNFR_NM3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_mnfrAtflNm1","value","ds_save","MNFR_ATFL_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_mnfrAtflNm2","value","ds_save","MNFR_ATFL_NM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_mnfrAtflNm3","value","ds_save","MNFR_ATFL_NM3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdClcd","value","ds_save","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_prdClcdAtflNm","value","ds_save","PRD_CLCD_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_08_4.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_08_4.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_08_4.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_VA_08_4.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배너 상세(1뎁스카테고리배너)
        CREATION DATES : 2022.03.30
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var curImgBtnName = "";
        // 카테고리 콜백
        this.searchCategoryCount = 0;
        this.searchPrdClcd = "";
        this.searchPrdClsfNm = "";
        // 제조원 콜백
        this.searchMnfrCount = 0;
        this.searchMnfrNo = "";
        this.searchMnfrNm = "";

        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "CHN_TP_CD", this.parent.chnTpCd);
        	this.ds_search.setColumn(0, "PPR_CATG_ZONE_SPR_CD", this.parent.pprCatgZoneSprCd);

        	this.sta_zoneNum.set_text("(구역 " + nexacro.toNumber(this.parent.pprCatgZoneSprCd) + ")");
        	var prdClcdImgSize = "이미지사이즈 : 408*408";
        	if(this.parent.chnTpCd == "P") {
        		switch(this.parent.pprCatgZoneSprCd) {
        			case "01" :
        				var prdClcdImgSize = "이미지사이즈 : 298*454";
        				break;
        			case "02" :
        			case "03" :
        			case "04" :
        			case "06" :
        			case "07" :
        			case "08" :
        			case "11" :
        			case "13" :
        			case "14" :
        				var prdClcdImgSize = "이미지사이즈 : 298*223";
        				break;
        			case "05" :
        			case "10" :
        			case "15" :
        				var prdClcdImgSize = "이미지사이즈 : 604*223";
        				break;
        			case "09" :
        				var prdClcdImgSize = "이미지사이즈 : 298*223";
        				break;
        			case "12" :
        				var prdClcdImgSize = "이미지사이즈 : 604*223";
        				break;
        			default :
        				break;
        		}
        	}
        	this.sta_prdClcdImgSize.set_text(prdClcdImgSize);

        	this.fn_search();
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
        //조회
        this.fn_search = function() {
        	var sSvcId = "selectPprCatgBnrInfo";
        	var sUrl = "/sa/bnr/select-ppr-catg-bnr-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pprCatgBnrInfo=ds_output1 ds_pprCatgMnfrList=ds_output2";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "savePprCatgBnrInfo";
        	var sUrl = "/sa/bnr/save-ppr-catg-bnr-info.do";
        	var inDs = "ds_save=ds_save:A"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 카테고리 엔터
        this.fn_prdClcdSearch = function() {
        	var sSvcId = "prdClcdSearch";
        	var sUrl = "/pr/prd-popup/select-category-popup-list.do";
        	var inDs = "ds_search=ds_prdClcdSearch";
        	var outDs = "";
        	var arg = "";

        	this.ds_prdClcdSearch.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_prdClcdSearch.setColumn(0, "MALL_SPR_CD", this.parent.mallSprCd);
        	this.ds_prdClcdSearch.setColumn(0, "ROW_COUNT", 20);
        	this.ds_prdClcdSearch.setColumn(0, "PRD_CLCD", this.edt_prdClcd.value);
        	this.ds_prdClcdSearch.setColumn(0, "PRD_CLSF_NM", this.edt_prdClsfNm.value);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        this.fn_mnfrSearch = function (svcId){
        	var sSvcId = svcId;
        	var sUrl   = "/pr/prd-popup/select-manufacturer-popup-list.do";
        	var inDs   = "ds_search=ds_mnfrSearch";
        	var outDs  = "";
        	var arg    = "";

        	var mnfrNo = "";
        	var mnfrNm = "";
        	if(svcId == "edt_mnfrNo1" || svcId == "edt_mnfrNm1") {
        		mnfrNo = this.edt_mnfrNo1.value;
        		mnfrNm = this.edt_mnfrNm1.value;
        	} else if(svcId == "edt_mnfrNo2" || svcId == "edt_mnfrNm2") {
        		mnfrNo = this.edt_mnfrNo2.value;
        		mnfrNm = this.edt_mnfrNm2.value;
        	} else if(svcId == "edt_mnfrNo3" || svcId == "edt_mnfrNm3") {
        		mnfrNo = this.edt_mnfrNo3.value;
        		mnfrNm = this.edt_mnfrNm3.value;
        	}

        	this.ds_mnfrSearch.setColumn(0, "START_NUM", 0);
        	this.ds_mnfrSearch.setColumn(0, "ROW_COUNT", 20);
        	this.ds_mnfrSearch.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_mnfrSearch.setColumn(0, "MNFR_NO", mnfrNo);
        	this.ds_mnfrSearch.setColumn(0, "MNFR_NM", mnfrNm);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "selectPprCatgBnrInfo" :
        			this.fn_setLenByte(this.ds_pprCatgBnrInfo.getColumn(0, "TTL"), 300, "ttl");

        			this.ds_save.copyRow(0, this.ds_pprCatgBnrInfo, 0); // 인기카테고리 배너정보 복사
        			for(var i=0; i < this.ds_pprCatgMnfrList.rowcount; i++) {
        				this.ds_save.setColumn(0, "MNFR_NO"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_NO"));
        				this.ds_save.setColumn(0, "MNFR_NM"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_NM"));
        				this.ds_save.setColumn(0, "MNFR_DOC_REG_ID"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_DOC_REG_ID"));
        				this.ds_save.setColumn(0, "MNFR_ATFL_NM"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_ATFL_NM"));
        				this.ds_save.setColumn(0, "MNFR_DOC_REG_SEQ"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_DOC_REG_SEQ"));
        				this.ds_save.setColumn(0, "MNFR_ATFL_STOR_PATH"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_ATFL_STOR_PATH"));
        				this.ds_save.setColumn(0, "MNFR_ORI_ATFL_NM"+(i+1), this.ds_pprCatgMnfrList.getColumn(i, "MNFR_ORI_ATFL_NM"));
        			}

        			break;

        		case "savePprCatgBnrInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.opener.fn_bnrPprCatgListSearch();
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "prdClcdSearch" :
        			if( this.searchCategoryCount > 1 ) {
        				this.fn_popup("btn_prdClcdPop");
        			} else if( this.searchCategoryCount == 1 ) {
        				this.edt_prdClcd.set_value(this.searchPrdClcd);
        				this.edt_prdClsfNm.set_value(this.searchPrdClsfNm);
        			} else {
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}
        			break;

        		case "edt_mnfrNo1" :
        		case "edt_mnfrNm1" :
        			if( this.searchMnfrCount > 1 ) {
        				//this.fn_popup("oprtrInfoPop");
        				this.fn_popup("btn_mnfrPop1");
        			} else if( this.searchMnfrCount == 1 ) {
        				this.edt_mnfrNo1.set_value(this.searchMnfrNo);
        				this.edt_mnfrNm1.set_value(this.searchMnfrNm);
        			} else {
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}
        			break;

        		case "edt_mnfrNo2" :
        		case "edt_mnfrNm2" :
        			if( this.searchMnfrCount > 1 ) {
        				//this.fn_popup("oprtrInfoPop");
        				this.fn_popup("btn_mnfrPop2");
        			} else if( this.searchMnfrCount == 1 ) {
        				this.edt_mnfrNo2.set_value(this.searchMnfrNo);
        				this.edt_mnfrNm2.set_value(this.searchMnfrNm);
        			} else {
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}
        			break;

        		case "edt_mnfrNo3" :
        		case "edt_mnfrNm3" :
        			if( this.searchMnfrCount > 1 ) {
        				//this.fn_popup("oprtrInfoPop");
        				this.fn_popup("btn_mnfrPop3");
        			} else if( this.searchMnfrCount == 1 ) {
        				this.edt_mnfrNo3.set_value(this.searchMnfrNo);
        				this.edt_mnfrNm3.set_value(this.searchMnfrNm);
        			} else {
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}
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
        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");
        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				}
        			}
        			break;
        		case "btn_prdClcdPop" :

        				this.edt_prdClcd.set_value(retObj.PRD_CLCD.replace(/,\s*$/, ""));
        				this.edt_prdClsfNm.set_value(retObj.PRD_CLSF_NM.replace(/,\s*$/, ""));

        				break;

        		case "btn_mnfrPop1" :

        				this.edt_mnfrNo1.set_value(retObj.MNFR_NO.replace(/,\s*$/, ""));
        				this.edt_mnfrNm1.set_value(retObj.MNFR_NM.replace(/,\s*$/, ""));

        				break;

        		case "btn_mnfrPop2" :

        				this.edt_mnfrNo2.set_value(retObj.MNFR_NO.replace(/,\s*$/, ""));
        				this.edt_mnfrNm2.set_value(retObj.MNFR_NM.replace(/,\s*$/, ""));

        				break;

        		case "btn_mnfrPop3" :

        				this.edt_mnfrNo3.set_value(retObj.MNFR_NO.replace(/,\s*$/, ""));
        				this.edt_mnfrNm3.set_value(retObj.MNFR_NM.replace(/,\s*$/, ""));

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
        	this.sta_ttl.uEssentiel = "true";
        	this.sta_catg.uEssentiel = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "ttl") {
        			this.sta_ttlSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "ttl") {
        		this.edt_ttl.set_value("");
        		this.edt_ttl.set_value(tempVal);
        		this.sta_ttlSize.set_text(expsText);
        	}
        };

        //팝업호출
        this.fn_popup = function(type) {
        // 	var params = {coCd : this.parent.coCd
        // 				   };

        	if(type == "btn_prdClcdPop") {
        		var params = {coCd:this.parent.coCd, mallSprCd:'20'};
        		var options = {};
        		this.gfn_openPopup(type, "PR_POP::SSP_BO_PP_07.xfdl", params,  "fn_popupCallback", options);
        	} else if(type == "btn_mnfrPop1" || type == "btn_mnfrPop2" || type == "btn_mnfrPop3" ){ // 제조사 조회 팝업
        		var params = {coCd:this.parent.coCd};
        		var options = {};
        		this.gfn_openPopup(type, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.search_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "edt_prdClcd" || e.fromobject.id == "edt_prdClsfNm") {
        				this.fn_prdClcdSearch();
        			} else if( e.fromobject.id == "edt_mnfrNo1" || e.fromobject.id == "edt_mnfrNm1"
        			|| e.fromobject.id == "edt_mnfrNo2" || e.fromobject.id == "edt_mnfrNm2"
        			|| e.fromobject.id == "edt_mnfrNo3" || e.fromobject.id == "edt_mnfrNm3") {
        				this.fn_mnfrSearch(e.fromobject.id);
        			}
        		}
        	}
        };

        // 제조원 팝업
        this.btn_mnfrPop_onclick = function(obj,e)
        {
        	this.fn_popup(e.fromobject.id);
        };

        // 카테고리 팝업
        this.btn_prdClcdPop_onclick = function(obj,e)
        {
        	this.fn_popup(e.fromobject.id);
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
         	if(confirm(this.fn_getMessage("ERRN000054"))) { // 입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?
         		this.close();
         	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_ttl.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제목은")); // 제목은 필수 입력항목입니다.
        		this.edt_ttl.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_prdClcd.value)) {
        		alert(this.fn_getMessage("ERRN000001", "카테고리는")); // 카테고리는 필수 입력항목입니다.
        		this.edt_prdClcd.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_prdClcdAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "카테고리 이미지는")); // 카테고리 이미지는 필수 입력항목입니다.
        		this.edt_catgAtflNm.setFocus();
        		return;
        	}
        	if(!this.gfn_isNull(this.edt_mnfrAtflNm1.value) && this.gfn_isNull(this.edt_mnfrNo1.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 이미지 등록시 제조원 명은")); // 제조원 이미지 등록시 제조원 명은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm1.setFocus();
        		return;
        	} else if(!this.gfn_isNull(this.edt_mnfrAtflNm2.value) && this.gfn_isNull(this.edt_mnfrNo2.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 이미지 등록시 제조원 명은")); // 제조원 이미지 등록시 제조원 명은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm2.setFocus();
        		return;
        	} else if(!this.gfn_isNull(this.edt_mnfrAtflNm3.value) && this.gfn_isNull(this.edt_mnfrNo3.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 이미지 등록시 제조원 명은")); // 제조원 이미지 등록시 제조원 명은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm3.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(this.edt_mnfrAtflNm1.value) && !this.gfn_isNull(this.edt_mnfrNo1.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 명 등록시 제조원 이미지 등록은")); // 제조원 명 등록시 제조원이미지 등록은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm1.setFocus();
        		return;
        	} else if(this.gfn_isNull(this.edt_mnfrAtflNm2.value) && !this.gfn_isNull(this.edt_mnfrNo2.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 명 등록시 제조원 이미지 등록은")); // 제조원 명 등록시 제조원이미지 등록은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm2.setFocus();
        		return;
        	} else if(this.gfn_isNull(this.edt_mnfrAtflNm3.value) && !this.gfn_isNull(this.edt_mnfrNo3.value)) {
        		alert(this.fn_getMessage("ERRN000001", "제조원 명 등록시 제조원이미지 등록은")); // 제조원 명 등록시 제조원이미지 등록은 필수 입력항목입니다.
        		this.edt_mnfrAtflNm3.setFocus();
        		return;
        	}

        	if(!this.gfn_isNull(this.edt_mnfrNo1.value) && this.edt_mnfrNo1.value == this.edt_mnfrNo2.value
        		|| !this.gfn_isNull(this.edt_mnfrNo2.value)  && this.edt_mnfrNo2.value == this.edt_mnfrNo3.value
        		|| !this.gfn_isNull(this.edt_mnfrNo3.value)  && this.edt_mnfrNo3.value == this.edt_mnfrNo1.value) {
        			alert(this.fn_getMessage("ERRN000121")); // 제조원은 중복 등록할 수 없습니다.
        		this.edt_mnfrNo1.setFocus();
        		return;
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "prdClcd") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_SEQ") == undefined ? 1 :this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_ID") == undefined ? "" : this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_save.getColumn(0, "PRD_CLCD_ATFL_STOR_PATH") == undefined ? "" :this.ds_save.getColumn(0, "PRD_CLCD_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_save.getColumn(0, "PRD_CLCD_ORI_ATFL_NM") == undefined ? "" : this.ds_save.getColumn(0, "PRD_CLCD_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_save.getColumn(0, "PRD_CLCD_ATFL_NM") == undefined ? "" : this.ds_save.getColumn(0, "PRD_CLCD_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mnfr1") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ1") == undefined ? 1 :this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ1").toString();
        					jsonObj.DOC_REG_ID = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID1") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_DOC_REG_ID1");
        					jsonObj.ATFL_STOR_PATH = this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH1") == undefined ? "" :this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH1");
        					jsonObj.ORI_ATFL_NM = this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM1") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM1");
        					jsonObj.ATFL_NM = this.ds_save.getColumn(0, "MNFR_ATFL_NM1") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ATFL_NM1");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mnfr2") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ2") == undefined ? 1 :this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ2").toString();
        					jsonObj.DOC_REG_ID = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID2") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_DOC_REG_ID2");
        					jsonObj.ATFL_STOR_PATH = this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH2") == undefined ? "" :this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH2");
        					jsonObj.ORI_ATFL_NM = this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM2") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM2");
        					jsonObj.ATFL_NM = this.ds_save.getColumn(0, "MNFR_ATFL_NM2") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ATFL_NM2");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mnfr3") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ3") == undefined ? 1 :this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ3").toString();
        					jsonObj.DOC_REG_ID = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID3") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_DOC_REG_ID3");
        					jsonObj.ATFL_STOR_PATH = this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH3") == undefined ? "" :this.ds_save.getColumn(0, "MNFR_ATFL_STOR_PATH3");
        					jsonObj.ORI_ATFL_NM = this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM3") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ORI_ATFL_NM3");
        					jsonObj.ATFL_NM = this.ds_save.getColumn(0, "MNFR_ATFL_NM3") == undefined ? "" : this.ds_save.getColumn(0, "MNFR_ATFL_NM3");
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


        //  제목 keyup
        this.edt_ttl_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "ttl");
        };

        // 이미지 업로드
        this.btn_imgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 카테고리 이미지 삭제
        this.btn_prdClcdImgDelete_onclick = function(obj,e)
        {
        	this.ds_save.setColumn(0,"PRD_CLCD_ATFL_NM", "");

        	this.fileUpTrans.removeFile("prdClcd");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'prdClcd'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        this.btn_mnfrImgDelete1_onclick = function(obj,e)
        {
        	this.ds_save.setColumn(0,"MNFR_ATFL_NM1", "");

        	this.fileUpTrans.removeFile("mnfr1");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr1'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        this.btn_mnfrImgDelete2_onclick = function(obj,e)
        {
        	this.ds_save.setColumn(0,"MNFR_ATFL_NM2", "");

        	this.fileUpTrans.removeFile("mnfr2");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr2'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        this.btn_mnfrImgDelete3_onclick = function(obj,e)
        {
        	this.ds_save.setColumn(0,"MNFR_ATFL_NM3", "");

        	this.fileUpTrans.removeFile("mnfr3");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr3'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 첨부파일 클릭
        this.edt_atflNm_onclick = function(obj,e)
        {
        // 	if(e.fromobject.id == "edt_prdClcdAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_prdClcdAtflNm.value)) {
        // 			if(this.confirm(this.edt_prdClcdAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("prdClcd", 0);
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_mnfrAtflNm1") {
        // 		if(!this.gfn_isNull(this.edt_mnfrAtflNm1.value)) {
        // 			if(this.confirm(this.edt_mnfrAtflNm1.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("mnfr", 1);
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_mnfrAtflNm2") {
        // 		if(!this.gfn_isNull(this.edt_mnfrAtflNm2.value)) {
        // 			if(this.confirm(this.edt_mnfrAtflNm2.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("mnfr", 2);
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_mnfrAtflNm3") {
        // 		if(!this.gfn_isNull(this.edt_mnfrAtflNm3.value)) {
        // 			if(this.confirm(this.edt_mnfrAtflNm3.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("mnfr", 3);
        // 			}
        // 		}
        // 	}
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = "";
        	var docRegSeq = "";

        	if(e.fromobject.id == "edt_prdClcdAtflNm") {
        		docRegId = this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_ID");
        		docRegSeq = this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_SEQ");
        		if(this.parent.chnTpCd == "P") {
        			this.img_view.set_width(150);
        			this.img_view.set_height(230);
        		} else {
        			this.img_view.set_width(200);
        			this.img_view.set_height(200);
        		}
        	} else {
        		this.img_view.set_width(100);
        		this.img_view.set_height(100);
        		if(e.fromobject.id == "edt_mnfrAtflNm1") {
        			docRegId = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID1");
        			docRegSeq = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ1");
        		} else if(e.fromobject.id == "edt_mnfrAtflNm2") {
        			docRegId = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID2");
        			docRegSeq = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ2");
        		} else if(e.fromobject.id == "edt_mnfrAtflNm3") {
        			docRegId = this.ds_save.getColumn(0, "MNFR_DOC_REG_ID3");
        			docRegSeq = this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ3");
        		}
        	}

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };
        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
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
        // 		this.ds_bnrInfo.set_updatecontrol(false);
        // 		this.ds_bnrInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        // 		this.ds_bnrInfo.set_updatecontrol(true);

        		if(curImgBtnName == "btn_prdClcdImgAdd") {
        			this.fileUpTrans.removeFile("prdClcd");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'prdClcd'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "prdClcd");
        			this.ds_save.setColumn(0, "PRD_CLCD_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("prdClcd", obj)
        		} else if(curImgBtnName == "btn_mnfrImgAdd1") {
        			this.fileUpTrans.removeFile("mnfr1");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr1'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mnfr1");
        			this.ds_save.setColumn(0, "MNFR_ATFL_NM1", obj.filename);
        			this.fileUpTrans.addFile("mnfr1", obj)
        		} else if(curImgBtnName == "btn_mnfrImgAdd2") {
        			this.fileUpTrans.removeFile("mnfr2");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr2'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mnfr2");
        			this.ds_save.setColumn(0, "MNFR_ATFL_NM2", obj.filename);
        			this.fileUpTrans.addFile("mnfr2", obj)
        		} else if(curImgBtnName == "btn_mnfrImgAdd3") {
        			this.fileUpTrans.removeFile("mnfr3");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mnfr3'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mnfr3");
        			this.ds_save.setColumn(0, "MNFR_ATFL_NM3", obj.filename);
        			this.fileUpTrans.addFile("mnfr3", obj)
        		}
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
        this.downloadfile = function(imgType, index) {
        	this.FileDownTransfer.clearPostDataList();
        	if(imgType == "prdClcd") {
        		this.FileDownTransfer.set_downloadfilename(this.ds_save.getColumn(0, "PRD_CLCD_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_save.getColumn(0, "PRD_CLCD_DOC_REG_SEQ"));
        	} else {
        		this.FileDownTransfer.set_downloadfilename(this.ds_save.getColumn(0, "MNFR_ATFL_NM"+i));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_save.getColumn(0, "MNFR_DOC_REG_ID"+i));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_save.getColumn(0, "MNFR_DOC_REG_SEQ"+i));
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
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		if(objCallDs.getColumn(i, "imgType") == "prdClcd") {
        			this.ds_save.setColumn(0, "PRD_CLCD_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mnfr1") {
        			this.ds_save.setColumn(0, "MNFR_DOC_REG_ID1", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mnfr2") {
        			this.ds_save.setColumn(0, "MNFR_DOC_REG_ID2", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mnfr3") {
        			this.ds_save.setColumn(0, "MNFR_DOC_REG_ID3", objCallDs.getColumn(i, "docRegId"));
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
            this.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.edt_prdClcdAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_prdClcdAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_prdClcdAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_prdClcdImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_prdClcdImgDelete.addEventHandler("onclick",this.btn_prdClcdImgDelete_onclick,this);
            this.edt_prdClsfNm.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.btn_prdClcdPop.addEventHandler("onclick",this.btn_prdClcdPop_onclick,this);
            this.edt_mnfrAtflNm1.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mnfrAtflNm1.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_mnfrAtflNm1.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.btn_mnfrImgAdd1.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_mnfrImgDelete1.addEventHandler("onclick",this.btn_mnfrImgDelete1_onclick,this);
            this.sta_mnfrImgSize1.addEventHandler("onclick",this.sta_mnfrImgSize1_onclick,this);
            this.edt_mnfrNo1.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.edt_mnfrNm1.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.btn_mnfrPop1.addEventHandler("onclick",this.btn_mnfrPop_onclick,this);
            this.edt_mnfrAtflNm2.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mnfrAtflNm2.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_mnfrAtflNm2.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_mnfrImgAdd2.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_mnfrImgDelete2.addEventHandler("onclick",this.btn_mnfrImgDelete2_onclick,this);
            this.edt_mnfrNo2.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.edt_mnfrNm2.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.btn_mnfrPop2.addEventHandler("onclick",this.btn_mnfrPop_onclick,this);
            this.edt_mnfrAtflNm3.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mnfrAtflNm3.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.edt_mnfrAtflNm3.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.btn_mnfrImgAdd3.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_mnfrImgDelete3.addEventHandler("onclick",this.btn_mnfrImgDelete3_onclick,this);
            this.edt_mnfrNo3.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.edt_mnfrNm3.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.btn_mnfrPop3.addEventHandler("onclick",this.btn_mnfrPop_onclick,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.search_onkeyup,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_VA_08_4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
