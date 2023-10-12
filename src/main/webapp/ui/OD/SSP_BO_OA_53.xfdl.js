(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_53");
            this.set_titletext("명함정보 변경 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_DIV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_subTitle01","20","64","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 명함정보");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","sta_subTitle01:10","820","399",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","123",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","154",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","185",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","215",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","0","245",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","0","275",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","0","305",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00","0","335",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00","0","365",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","123","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("회사명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_head01","0","0","50%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("앞면(한글)");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_head02",null,"0","50.00%","31","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("뒷명(영문)");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","0","154","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("사업부명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00","0","185","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("부서명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","0","215","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("성명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00","0","246","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("직급");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00","0","275","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("전자우편");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00","0","305","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("FAX");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00_00","0","335","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00_00_00","0","365","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("Mobile");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_01","405","154","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("영문 사업부명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_01","405","185","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("영문 부서명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_01","405","215","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("영문 성명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_01","405","246","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("영문 직급");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_01","405","275","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("전자우편");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00_01","405","305","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("FAX");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00_00_01","405","335","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00_00_00_00_00_00","405","365","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("Mobile");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","405","123","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("영문 회사명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","100","125","10","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_coNm","110","128","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_divNm","110","159","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","110","190","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","110","219","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_jbposNm","110","250","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr","110","280","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_faxNo","110","310","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_telNo","110","340","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hpNo","110","370","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engHpNo","515","370","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engTelNo","515","340","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engFaxNo","515","310","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engEmailAddr","515","280","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engJbposNm","515","250","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engMbrNm","515","219","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engDeptNm","515","190","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engDivNm","515","159","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engCoNm","515","128","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","30",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","61",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","0","92",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_02","0","61","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("대표주소");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_02","0","92","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_01_00","405","61","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("영문 대표주소");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_01_00","405","92","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("영문 상세주소");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_01_00","405","30","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","100","32","10","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_zpcd","110","35","249","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ReprAddr","110","66","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dtlAddr","110","97","285","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engDtlAddr","515","97","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_engReprAddr","515","66","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_zpcd2","515","35","295","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","0","30","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_zpcd","370","34","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","42.21%",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:10",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("명함정보 변경");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",860,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.edt_coNm","value","ds_list01","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_engCoNm","value","ds_list01","ENG_CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_divNm","value","ds_list01","DIV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_engDivNm","value","ds_list01","ENG_DIV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_deptNm","value","ds_list01","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_engDeptNm","value","ds_list01","ENG_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_mbrNm","value","ds_list01","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_engMbrNm","value","ds_list01","ENG_MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_jbposNm","value","ds_list01","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_engJbposNm","value","ds_list01","ENG_JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_emailAddr","value","ds_list01","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_engEmailAddr","value","ds_list01","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_faxNo","value","ds_list01","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_engFaxNo","value","ds_list01","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_telNo","value","ds_list01","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_engTelNo","value","ds_list01","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_hpNo","value","ds_list01","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_engHpNo","value","ds_list01","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.edt_zpcd","value","ds_list01","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_zpcd2","value","ds_list01","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.edt_ReprAddr","value","ds_list01","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.edt_engReprAddr","value","ds_list01","ENG_REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.edt_dtlAddr","value","ds_list01","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.edt_engDtlAddr","value","ds_list01","ENG_DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_53.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_53.xfdl", function() {
        // 명함정보 팝업

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_coCd = "";
        this.fv_bzplcId = "";
        this.fv_odrNo = "";
        this.fv_odrItmNo = "";
        this.insertCount = "";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_53_onload = function(obj,e)
        {

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();

        	this.fn_odCommLoading();

        	this.fv_coCd = this.parent.pv1;
            this.fv_bzplcId = this.parent.pv2;
        	this.fv_odrNo = this.parent.pv3;
            this.fv_odrItmNo = this.parent.pv4;

        	this.fn_setSearchCondition();
        	this.fn_search();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_53_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
          var sSvcId = "selectOdrBzcrdPrdInfo";
          var sUrl = "/od/odrPopup/selectOdrBzcrdPrdInfo.do";
          var inDs = "ds_search=ds_search";
          var outDs = "ds_list01=ds_output1";
          var arg = "";

          this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_updateOdrBzcrdPrdInfo = function() {
          var sSvcId = "updateOdrBzcrdPrdInfo";
          //var sUrl = "/od/odrPopup/updateOdrBzcrdPrdInfo.do";
          var sUrl = "/od/orderChange/saveOrderDetail.do";
          var inDs = "ds_update=ds_list01";
          var outDs = "ds_fromServer01=ds_output1";
          var arg = "";

          this.ds_list01.setColumn(0, "ITM_GRP_CD", "G11");
          this.ds_list01.setColumn(0, "IUD_GB", "U");

          this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
          if (svcID == "selectOdrBzcrdPrdInfo") {
            trace("### ds_list01.rowcount : " + this.ds_list01.rowcount);
          }
          else if(svcID == "updateOdrBzcrdPrdInfo") {
            //trace("### insertCount : " + this.insertCount);
        	var rtnCd = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        	var rtnMsg = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));

        	if( rtnCd == "S") {
        		alert(this.fn_getMessage("ERRS000156"));
        		this.close();
        	}
        	else				alert(rtnMsg);

            //this.fn_closeForm(0);
          }
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
          var resData = "";
          var sIdList = "";
          var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
          else {
            resData = JSON.parse(sRetValue);
          }

          switch (sPopupId) {
            // 우편번호 팝업. 우편번호, 대표주소(사용자 입력 항목 : 상세주소, 영문 대표주소, 영문 상세주소)
            case "odrBzcrdPrdInfoZpcd":
              trace("### zpcd : " + resData.ZIP_NO + ", repr_addr : " + resData.ADDR);
              this.ds_list01.setColumn(0, "ZPCD", resData.ZIP_NO);
              this.ds_list01.setColumn(0, "REPR_ADDR", resData.ADDR);
              break;
          }
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_setSearchCondition = function() {
          this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
          this.ds_search.setColumn(0, "BZPLC_ID", this.fv_bzplcId);
          this.ds_search.setColumn(0, "ODR_NO", this.fv_odrNo);
          this.ds_search.setColumn(0, "ODR_ITM_NO", this.fv_odrItmNo);
        };

        this.fn_closeForm = function(flag) {
          if (flag == 0) {
            this.close(0);
          }
          else {
            var resData = {};
            var resString = "";
            var row = this.ds_list01.rowposition;
            resData.CO_NM = this.ds_list01.getColumn(0, "CO_NM");
            resData.ENG_CO_NM = this.ds_list01.getColumn(0, "ENG_CO_NM");
            resData.DEPT_NM = this.ds_list01.getColumn(0, "DEPT_NM");
            resData.ENG_DEPT_NM = this.ds_list01.getColumn(0, "ENG_DEPT_NM");
            resData.MBR_NM = this.ds_list01.getColumn(0, "MBR_NM");
            resData.ENG_MBR_NM = this.ds_list01.getColumn(0, "ENG_MBR_NM");
            resData.JBPOS_NM = this.ds_list01.getColumn(0, "JBPOS_NM");
            resData.ENG_JBPOS_NM = this.ds_list01.getColumn(0, "ENG_JBPOS_NM");
            resData.EMAIL_ADDR = this.ds_list01.getColumn(0, "EMAIL_ADDR");
            resData.FAX_NO = this.ds_list01.getColumn(0, "FAX_NO");
            resData.TEL_NO = this.ds_list01.getColumn(0, "TEL_NO");
            resData.HP_NO = this.ds_list01.getColumn(0, "HP_NO");
            resData.ZPCD = this.ds_list01.getColumn(0, "ZPCD");
            resData.DTL_ADDR = this.ds_list01.getColumn(0, "DTL_ADDR");
            resData.REPR_ADDR = this.ds_list01.getColumn(0, "REPR_ADDR");
            resData.ENG_DTL_ADDR = this.ds_list01.getColumn(0, "ENG_DTL_ADDR");
            resData.ENG_REPR_ADDR = this.ds_list01.getColumn(0, "ENG_REPR_ADDR");
            resData.DIV_NM = this.ds_list01.getColumn(0, "DIV_NM");
            resData.ENG_DIV_NM = this.ds_list01.getColumn(0, "ENG_DIV_NM");
            resData.DOC_REG_ID = this.ds_list01.getColumn(0, "DOC_REG_ID");
            resData.RMKS_CTS = this.ds_list01.getColumn(0, "RMKS_CTS");
            resData.CO_CD = this.ds_list01.getColumn(0, "CO_CD");
            resData.BZPLC_ID = this.ds_list01.getColumn(0, "BZPLC_ID");
            resData.ODR_NO = this.ds_list01.getColumn(0, "ODR_NO");
            resData.ODR_ITM_NO = this.ds_list01.getColumn(0, "ODR_ITM_NO");

            resString = JSON.stringify(resData);
            this.close(resString);
          }
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("btn_cancel_onclick");
        	this.fn_regMethodShiftENTER("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 우편번호 팝업
        this.btn_zpcd_onclick = function(obj,e)
        {
          var objParam = {};
          this.gfn_openPopup("odrBzcrdPrdInfoZpcd", "CO_POP::SSP_BO_PP_28.xfdl", objParam);
        };
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
          var shouldSave = false;
          for (var i = 0; i < this.ds_list01.rowcount; i++) {
            rowType = this.ds_list01.getRowType(i);

            if (rowType == Dataset.ROWTYPE_UPDATE ||
              rowType == Dataset.ROWTYPE_INSERT) {
              shouldSave = true;
              break;
            }
          }

          if (shouldSave == true) {
            //var sReturn = this.confirm("수정된 내용이 있습니다. 변경 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRS000162"));
            if (sReturn == false) {
              return;
            }
          }

          this.close(0);
        };
        // 확인
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_updateOdrBzcrdPrdInfo();
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_53_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_53_onkeyup,this);
            this.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.sta_head01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div00.form.sta_head02.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div00.form.Static06_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_00_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.btn_zpcd.addEventHandler("onclick",this.btn_zpcd_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_53.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
