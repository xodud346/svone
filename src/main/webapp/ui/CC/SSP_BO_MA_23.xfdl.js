(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage01");
            this.set_titletext("휴면회원관리 상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mbrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLPLC_ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DLPLC_REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLPLC_DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLPLC_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLPLC_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_PUBC_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MBR_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미 사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlInfo2", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selOptnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MNG_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","15","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","45",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","45","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","842","45","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("휴면전환일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","399","45","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00","0","110","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("상위 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","140",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","140","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01","842","140","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","399","140","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00","0","204","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","30","234",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","234","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("로그인ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","0","264",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","264","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("회원명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00","842","264","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","399","264","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("직급");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","30","294",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","0","294","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("약관 동의");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00","842","294","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_taborder("19");
            obj.set_text("마케팅 문자/메일 수신");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_00","399","294","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("개인정보 사용 동의");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_01","30","324",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","0","324","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("업무 문자/메일 수신");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_01","842","324","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("S-MRO 회원 정보");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_01","399","324","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("가입 경로");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_00","0","386","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("주소 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","0","416",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","0","416","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_02","0","446",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02","0","446","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_01_00","399","416","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_01_00","842","416","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("상세 주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00","399","446","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00_00","842","446","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_00_00","0","510","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("배송지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00","0","540",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","0","540","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_02_00","0","570",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_01","0","570","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_01_00_00","399","540","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_01_00_00","842","540","130","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("상세 주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00_01","399","570","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_01","0","634","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("제어 권한 관리");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_02","0","664",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","0","664","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("결제 권한");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_aprvAuthUseYn","140","668","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("결제 권한");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_03","0","694",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_03","0","694","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("세금계산서 담당");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_02","399","664","130","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("발주 권한");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_taxinvAuthUseYn","140","698","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("세금계산서 담당");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","0","724",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","0","724","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("입고 권한");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_00_00","399","694","130","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("UCESSDI ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_giAuthUseYn","140","728",null,"24","32",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("입고 권한");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_01_00","0","754",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00","0","754","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("관리 권한");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ordAuthUseYn","539","667","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("발주 권한");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00","0","784",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","0","784","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("예산 권한");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_01_00_00","0","814",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00_00","0","814","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("정산 권한");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_01_00","0","876","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("결재자 관리");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","906",null,"100","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_binddataset("ds_aprvlInfo");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"156\"/><Column size=\"70\"/><Column size=\"156\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"104\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"부서ID\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"결재 차수\"/><Cell col=\"5\" text=\"회원ID\"/><Cell col=\"6\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:APRV_SEQ\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:MBR_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:MBR_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_01_00_00","0","1036","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("발주자 관리");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_mainList1","0","1066",null,"100","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_binddataset("ds_aprvlInfo2");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"156\"/><Column size=\"70\"/><Column size=\"156\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"104\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"부서ID\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"결재 차수\"/><Cell col=\"5\" text=\"회원ID\"/><Cell col=\"6\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:APRV_SEQ\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:MBR_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:MBR_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_00_00_00","0","1196","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("이력 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","0","1226",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","0","1226","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_text("최초 등록");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_02_00_00","0","1256",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_01_00","0","1256","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_text("최종 수정");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_updDtm","789","1260","400","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_text("일시");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_01_00_00_00","649","1226","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_text("등록 일시");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_regDtm","789","1230","400","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_text("일시");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00_01_00","649","1256","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_list","518","1318","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_text("목록");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_mbrUseCd","140","49","218","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_enable("false");
            obj.set_innerdataset("ds_mbrUseCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","982","268","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_enable("false");
            obj.set_innerdataset("ds_custSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hpNo","140","450","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept00","140","144","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept","234","144","124","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popDept","362","144","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","648","1318","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_histPop",null,null,"110","24","20","Static05_00_00_01_00_00:10",null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_text("전체 이력 조회");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","508","1359","274","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("83");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01","539","49","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("84");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_02","539","144","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("85");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_03","633","144","199","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("86");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_02_00","982","144","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("87");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_03_00","1076","144","173","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("88");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","140","238","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_01","982","49","270","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","140","420","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","539","420","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00","539","450","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00","982","450","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01","982","420","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01","140","268","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_00","140","298","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01_01","140","328","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01","140","544","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02","140","574","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00","539","544","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00","539","574","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00_00","982","544","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("103");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_02","539","268","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_02_00","539","298","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("105");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_02_00_00","539","328","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("106");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00","982","298","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("107");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00_00","982","328","267","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("108");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00","539","698","293","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("109");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept00_00","135","1230","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("110");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept01","229","1230","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept01_00","229","1260","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("112");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept00_00_00","135","1260","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("113");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00","244","758",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("114");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00_00","244","788",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("115");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00_00_00","244","818",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00_01","Static02_00_00_00_01_00:10","758","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("117");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00_01_00","140","788","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("118");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_02_00_00_00_01_01","140","818","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("119");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Tab00.Tabpage1.form.sta_oprUnit00_00_00","text","ds_mbrInfo","CLT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage1.form.sta_oprUnit00_00_01","text","ds_mbrInfo","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.sta_bzplc00_00_00","text","ds_mbrInfo","MKTG_CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage1.form.sta_bzplc00_00_01","text","ds_mbrInfo","MRO_MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div00.form.sta_aprvAuthUseYn","text","ds_mbrInfo","APRV_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div00.form.sta_taxinvAuthUseYn","text","ds_mbrInfo","TAXINV_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div00.form.sta_giAuthUseYn","text","ds_mbrInfo","GI_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Div00.form.sta_ordAuthUseYn","text","ds_mbrInfo","ORD_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Div00.form.sta_updDtm","text","ds_mbrInfo","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Div00.form.sta_regDtm","text","ds_mbrInfo","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Div00.form.cbo_mbrUseCd","value","ds_mbrInfo","MBR_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Div00.form.cbo_custSprCd","value","ds_mbrInfo","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Div00.form.edt_hpNo","value","ds_mbrInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Div00.form.edt_dept00","value","ds_mbrInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Div00.form.edt_dept","value","ds_mbrInfo","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Tab00.Tabpage1.form.edt_dept00","value","ds_mbrInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Div00.form.edt_01","value","ds_mbrInfo","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Div00.form.edt_02","value","ds_mbrInfo","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Div00.form.edt_03","value","ds_mbrInfo","OPR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Div00.form.edt_02_00","value","ds_mbrInfo","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Div00.form.edt_03_00","value","ds_mbrInfo","BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Div00.form.edt_01_00","value","ds_mbrInfo","LOGN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_01_01","value","ds_mbrInfo","DRMC_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_01_00_00","value","ds_mbrInfo","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_01_00_00_00","value","ds_mbrInfo","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_01_00_00_00_00","value","ds_mbrInfo","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_01_00_00_00_00_00","value","ds_mbrInfo","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_01_00_00_00_01","value","ds_mbrInfo","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_01_00_01","value","ds_mbrInfo","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_01_00_01_00","value","ds_mbrInfo","UT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_01_00_01_01","value","ds_mbrInfo","CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_01_00_00_01","value","ds_mbrInfo","DLPLC_ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_01_00_00_02","value","ds_mbrInfo","DLPLC_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_01_00_00_01_00","value","ds_mbrInfo","DLPLC_REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_01_00_00_02_00","value","ds_mbrInfo","DLPLC_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.edt_01_00_00_01_00_00","value","ds_mbrInfo","DLPLC_DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_01_00_00_00_02","value","ds_mbrInfo","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.edt_01_00_00_00_02_00","value","ds_mbrInfo","CLT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.edt_01_00_00_00_02_00_00","value","ds_mbrInfo","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_01_00_00_00_01_00","value","ds_mbrInfo","MKTG_CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.edt_01_00_00_00_01_00_00","value","ds_mbrInfo","MRO_MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.edt_01_00_00_02_00_00","value","ds_mbrInfo","TAXINV_PUBC_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div00.form.edt_dept00_00","value","ds_mbrInfo","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div00.form.edt_dept01","value","ds_mbrInfo","REGPSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div00.form.edt_dept01_00","value","ds_mbrInfo","UPDPSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Div00.form.edt_dept00_00_00","value","ds_mbrInfo","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Div00.form.edt_01_00_00_02_00_00_00","value","ds_dtl","MNG_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Div00.form.edt_01_00_00_02_00_00_00_00","value","ds_dtl","BGT_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Div00.form.edt_01_00_00_02_00_00_00_00_00","value","ds_dtl","ADJ_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Div00.form.edt_01_00_00_02_00_00_00_01","value","ds_mbrInfo","MNG_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Div00.form.edt_01_00_00_02_00_00_00_01_00","value","ds_mbrInfo","BGT_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Div00.form.edt_01_00_00_02_00_00_00_01_01","value","ds_mbrInfo","ADJ_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_23.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_23.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_23.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var coCd = "";
        var mbrId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	// 파라미터 값이 빈값인지 체크
        	this.fn_popupCheck();

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//그리드복사
        	this.copyPaste.addGrid(this.Div00.form.grd_mainList,this);
        	this.copyPaste.addGrid(this.Div00.form.grd_mainList1,this);

        	this.fn_search();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "MBR_USE_CD,CUST_SPR_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_mbrUseCd=ds_output1 ds_custSprCd=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "selectDrmcMbrDeatil";
        		var sUrl = "/bo/cust/mbr/select-drmc-mbr-deatil.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_mbrInfo=ds_output1 ds_dtl=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//저장
        	this.fn_save = function()	{
        		var sSvcId = "saveDrmcMbrDeatil";
        		var sUrl = "/bo/cust/mbr/save-drmc-mbr-deatil.do";
        		var inDs = "ds_save=ds_mbrInfo";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//결재자/발주자 조회
        	this.fn_searchAprvl = function(type)	{
        		if(type == "A"){
        			var outDs = "ds_aprvlInfo=ds_output1";
        			var sSvcId = "selectDrmcMbrAprvl";
        		}else{
        			//type == "O"
        			var outDs = "ds_aprvlInfo2=ds_output1";
        			var sSvcId = "selectDrmcMbrAprvl2";
        		}

        		var sUrl = "/bo/cust/mbr/select-drmc-mbr-aprvl.do";
        		var inDs = "ds_search=ds_search";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "selectDrmcMbrDeatil"){
        			// 결재자 조회
        			this.ds_search.setColumn(0, "MBR_APRVL_SPR_CD", "A");
        			this.fn_searchAprvl("A");
        		}else if(svcID == "selectDrmcMbrAprvl"){
        			// 발주자 조회
        			this.ds_search.setColumn(0, "MBR_APRVL_SPR_CD", "O");
        			this.fn_searchAprvl("O");
        		}else if(svcID == "saveDrmcMbrDeatil"){
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				this.fn_search();
        			}
        		}else if(svcID == "selectHgstDept"){
        			if(this.ds_deptInfo.getColumn(0, "SUCCESS_YN") == 'N'){
        				alert(this.ds_deptInfo.getColumn(0, "RETURN_MSG"));
        			}else{
        				this.ds_deptInfo.setColumn(0, "HGST_DEPT", this.ds_deptInfoTemp.getColumn(0,"HGST_DEPT"));
        				this.ds_deptInfo.setColumn(0, "GI_CHRPSN_ID", this.ds_deptInfoTemp.getColumn(0,"GI_CHRPSN_ID"));
        			}
        		}
        	};

        	// 팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_popOprUnit":
        				const oprUnitObj = JSON.parse(sRetValue);

        				var callBackStr = oprUnitObj.OPR_UNIT_ID+" | "+oprUnitObj.OPR_UNIT_NM;
        				this.ds_deptInfo.setColumn(0,"OPR_UNIT_ID", oprUnitObj.OPR_UNIT_ID);
        				this.ds_deptInfo.setColumn(0,"OPR_UNIT_NM", oprUnitObj.OPR_UNIT_NM);
        				this.Div00.form.edt_oprUnit.set_value(callBackStr);

        				break;

        			case "btn_popHrnkDept":
        				const deptObj = JSON.parse(sRetValue);

        				this.ds_deptInfo.setColumn(0,"HRNK_DEPT_ID", deptObj.ORG_CD);
        				this.Div01.form.edt_hrnkDeptNm.set_value(deptObj.ORG_NM);
        				this.Div01.form.edt_hgstDept.set_value("");

        				break;
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_popupCheck = function(){
        		if(this.parent.mbrId == null || this.parent.mbrId == ""){
        			alert(this.fn_getMessage("ERRC000077")); // 잘못된 접근입니다. 고객ID를 찾을 수 없습니다.
        			this.close();
        		}

        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        		this.ds_search.setColumn(0, "MBR_ID", this.parent.mbrId);
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		var oPaging = this.div_paging;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		this.fn_search();
        	};

        	// 취소버튼 클릭 시
        	this.btn_cancel_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	// 부서팝업버튼
        	this.popOpen_onclick = function(obj,e)
        	{
        		var params = {
        			coCd : '1000'
        			, deptId : this.ds_mbrInfo.getColumn(0,"DEPT_ID")
        			, bzplcId : this.ds_mbrInfo.getColumn(0,"BZPLC_ID")
        			, oprUnitId : this.ds_mbrInfo.getColumn(0,"OPR_UNIT_ID")
        		};
        		this.gfn_openPopup("deptPop", "CC::SSP_BO_PP_39.xfdl", params, function(sPopupId, sRetValue) {
        			var retObj = JSON.parse(sRetValue);
        			this.ds_mbrInfo.setColumn(0,"DEPT_ID", retObj.DEPT_ID);
        			this.ds_mbrInfo.setColumn(0,"DEPT", retObj.DEPT_NM);
        		}, {title : '부서 조회', titlebar:"true"});
        	};

        	// 저장버튼
        	this.btn_save_onclick = function(obj,e)
        	{
        		/*
        		if(!this.gfn_dsIsUpdated(this.ds_mbrInfo)) {
        			alert(this.fn_getMessage("ERRC000035")); // 변경된 내용이 없습니다.
        			return;
        		}
        		*/

        		var hpNo = this.ds_mbrInfo.getColumn(0, "HP_NO");
        		if(!this.gfn_isNull(hpNo)){
        			//휴대폰 정규식
        			var mpchk =  /^\d{3}-\d{3,4}-\d{4}$/;
        			if(!mpchk.test(hpNo)){
        				alert(this.fn_getMessage("ERRC000078")); // 잘못된 휴대번호 입니다.('-'를 포함해서 입력해주세요)
        				this.Div00.form.edt_hpNo.setFocus();
        				return false;
        			}
        		}
        		if(this.gfn_isNull(this.ds_mbrInfo.getColumn(0, "TEL_NO"))){
        			this.ds_mbrInfo.setColumn(0, "TEL_NO", this.ds_mbrInfo.getColumn(0, "HP_NO"));
        		}
        		var emailAddr = this.ds_mbrInfo.getColumn(0, "EMAIL_ADDR");
        		if(!this.gfn_isNull(emailAddr)){
        			// 이메일 정규식
        			/*
        			var emailchk =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        			if(!emailchk.test(emailAddr)){
        				alert(this.fn_getMessage("ERRC000059")); // 이메일을 정확히 입력해주세요.
        				this.Div00.form.edt_emailAddr.setFocus();
        				return false;
        			}
        			*/

        			// [2022.09.07] 박성근 SSP-800 이메일 오류사항 확인의 件
        			const PTN_ELOC=/^[a-z0-9]([-_\.]?[a-z0-9])*$/i;
        			const PTN_EDOM=/^[a-z0-9][a-z0-9-]{0,61}[a-z0-9](?:\.[a-z]{2,})+$/i;

        			var chkMailSplt = emailAddr.split('@');
        			//if( chkMailSplt[0].length < 3){
        			if( chkMailSplt[0].length < 3 || !(PTN_ELOC).test(chkMailSplt[0]) || !(PTN_EDOM).test(chkMailSplt[1]) ){
        				alert(this.fn_getMessage("ERRC000059")); // 이메일을 정확히 입력해주세요.
        				this.Div00.form.edt_emailAddr.setFocus();
        				return false;
        			}
        		}

        		if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        			//저장하시겠습니까?
        			return;
        		}

        		this.fn_save();
        	};

        	// 전체이력조회 버튼
        	this.btn_histPop_onclick = function(obj,e)
        	{
        		var objParam = {
        			coCd:this.ds_mbrInfo.getColumn(0, "CO_CD")
        			, mbrId:this.ds_mbrInfo.getColumn(0, "MBR_ID")
        		};
        		var opts = { title : '휴면회원 전체이력 조회', titlebar: 'true' }
        		this.gfn_openPopup("CustMbrHistPop", "CC::SSP_BO_MA_51.xfdl", objParam, "", opts);
        	};

        	// 목록버튼
        	this.btn_list_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	this.samplePage01_onkeyup = function(obj,e)
        	{
        		//ESC : 닫기기능
        		if(e.keycode == 27){
        			this.close();
        		}
        	};

        this.Div00_Static02_00_00_00_02_00_01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.samplePage01_onkeyup,this);
            this.Div00.form.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.Static02_00_00_00_02_00_01.addEventHandler("onclick",this.Div00_Static02_00_00_00_02_00_01_onclick,this);
            this.Div00.form.sta_title1_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.Div00.form.btn_popDept.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div00.form.btn_histPop.addEventHandler("onclick",this.btn_histPop_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
