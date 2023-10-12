(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_22");
            this.set_titletext("운영자 상세 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,399);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MSSGR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","20","20","1150",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchAreaWhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("운영자 상세");
            obj.set_cssclass("sta_WF_title04");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","36",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","67",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","36","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("운영자명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","380","36","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("운영자ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","0","67","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("메신저주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","380","67","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","97",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","127",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","0","157",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","0","187",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_02","0","217",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_03","0","247",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_04","0","277",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","97","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("담당업무명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_02","0","127","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("직위명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_03","0","157","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("조직");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_04","0","187","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_05","0","217","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_06","0","247","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("계좌인증권한여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_07","0","277","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","380","97","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("사용자구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","380","127","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("성별구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","380","157","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("직책");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_03","380","187","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_04","380","217","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("영업담당");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_05","380","247","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("직무");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_06","380","277","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07","762","67","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_00","762","97","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_01","762","127","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("사업부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_02","762","157","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("직급");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_03","762","187","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("사용자상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_04","762","217","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("플랜트");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_05","762","247","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_07_06","762","277","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_close","548","329","65","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("닫기");
            obj.set_positionstep("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_oprtrId","510","37","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_email","510","67","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_usrSprCdNm","510","97","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_sexSprCdNm","510","127","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_dtyNm","510","157","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_hpNo","510","187","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_salsChr","510","217","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_jbNm","510","247","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_rtcoDt","510","277","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_empNo","892","37","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_coCd","892","67","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_useYn","892","97","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_divNm","892","127","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_jbposNm","892","157","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_usrStatsCdNm","892","187","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_plntNm","892","217","249","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_endDt","130","277","251","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","782","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_oprtrNm","150","57","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mssgrAddr","150","87","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_chrTaskNm","150","117","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pstnNm","150","147","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_orgNm","150","177","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_telNo","150","207","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_salsTeamNm","150","237","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_acnt","150","267","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1180,399,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","searchDiv.form.comClsfCdNm","value","search_ds","comClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","sta_oprtrNm","text","ds_oprtrInfo","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","sta_mssgrAddr","text","ds_oprtrInfo","MSSGR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","sta_chrTaskNm","text","ds_oprtrInfo","CHR_TASK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","sta_pstnNm","text","ds_oprtrInfo","PSTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","sta_orgNm","text","ds_oprtrInfo","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","sta_telNo","text","ds_oprtrInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","sta_salsTeamNm","text","ds_oprtrInfo","SALS_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","sta_acnt","text","ds_oprtrInfo","ACNT_CERT_AUTH_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div01.form.sta_oprtrId","text","ds_oprtrInfo","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div01.form.sta_email","text","ds_oprtrInfo","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div01.form.sta_usrSprCdNm","text","ds_oprtrInfo","USR_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div01.form.sta_sexSprCdNm","text","ds_oprtrInfo","SEX_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div01.form.sta_dtyNm","text","ds_oprtrInfo","DTY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div01.form.sta_hpNo","text","ds_oprtrInfo","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div01.form.sta_salsChr","text","ds_oprtrInfo","SALS_CHR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div01.form.sta_jbNm","text","ds_oprtrInfo","JB_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div01.form.sta_rtcoDt","text","ds_oprtrInfo","RTCO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div01.form.sta_empNo","text","ds_oprtrInfo","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div01.form.sta_coCd","text","ds_oprtrInfo","CO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div01.form.sta_useYn","text","ds_oprtrInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div01.form.sta_divNm","text","ds_oprtrInfo","DIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div01.form.sta_jbposNm","text","ds_oprtrInfo","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div01.form.sta_usrStatsCdNm","text","ds_oprtrInfo","USR_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div01.form.sta_plntNm","text","ds_oprtrInfo","PLNT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div01.form.sta_endDt","text","ds_oprtrInfo","ENT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_22.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	this.ds_search.setColumn(0, "OPRTR_ID", this.parent.oprtrId);

        	//조회
        	this.fn_search();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function ()
        {
        	var sSvcId = "search";
        	var sUrl = "/co/select-mbr-oprtr-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprtrInfo=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID)
        	{
        		case "search":
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "DIV_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "DIV_CD", this.ds_oprtrInfo.getColumn(0, "DIV_CD") + " | " + this.ds_oprtrInfo.getColumn(0, "DIV_NM"));
        			}
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "ORG_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "ORG_CD", this.ds_oprtrInfo.getColumn(0, "ORG_CD") + " | " + this.ds_oprtrInfo.getColumn(0, "ORG_NM"));
        			}
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "SALS_TEAM_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "SALS_TEAM_CD", this.ds_oprtrInfo.getColumn(0, "SALS_TEAM_CD") + " | " + this.ds_oprtrInfo.getColumn(0, "SALS_TEAM_NM"));
        			}
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "SALS_CHR_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "SALS_CHR_CD", this.ds_oprtrInfo.getColumn(0, "SALS_CHR_CD") + " | " + this.ds_oprtrInfo.getColumn(0, "SALS_CHR_NM"));
        			}
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "PLNT_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "PLNT_ID", this.ds_oprtrInfo.getColumn(0, "PLNT_ID") + " | " + this.ds_oprtrInfo.getColumn(0, "PLNT_NM"));
        			}
        			if(!this.gfn_isNull(this.ds_oprtrInfo.getColumn(0, "JB_NM"))){
        				this.ds_oprtrInfo.setColumn(0, "JB_CD", this.ds_oprtrInfo.getColumn(0, "JB_CD") + " | " + this.ds_oprtrInfo.getColumn(0, "JB_NM"));
        			}

        			break;
        		default:
        			break;
        	}

        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.Div01_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_03.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_04.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_05.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_07.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_03.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_04.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_05.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_03.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_04.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_05.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00_07_06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.btn_close.addEventHandler("onclick",this.Div01_btn_close_onclick,this);
            this.Div01.form.sta_rtcoDt.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div01.form.sta_coCd.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.sta_oprtrNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
