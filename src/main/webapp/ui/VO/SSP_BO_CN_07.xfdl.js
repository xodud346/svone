(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("고객도우미관리(계약) 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_CHRPSN_NMS\" type=\"STRING\" size=\"256\"/><Column id=\"DSP_ONLY_EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CHATBOT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHATBOT_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_DLV\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_AS\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_BOT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_BOT_USE_YN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR_REG_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chatBotUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">사용</Col><Col id=\"CODE\">Y</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCADDR_CHN_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basis","20","30",null,"660","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00","0","27","300","16",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("1");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("2");
            obj.set_text("담당CS");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04","862","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","198",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","167",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","136","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("9");
            obj.set_text("고객 도우미");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","167","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("10");
            obj.set_text("Zendesk 그룹");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","431","167","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("11");
            obj.set_text("연락처 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","167","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("12");
            obj.set_text("Front 표시명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","198","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("13");
            obj.set_text("담당자 연락처");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01_00","989","168",null,"31","6",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","228",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","228","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("16");
            obj.set_text("발신 전용 E-mail");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01_00_00","989","228",null,"31","6",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01","431","198","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("18");
            obj.set_text("그룹 인원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","431","228","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("19");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","862","228","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("20");
            obj.set_text("채팅 사용 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","374",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","343",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","312","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("23");
            obj.set_text("채널 별 이메일");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_00","0","343","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("24");
            obj.set_text("전체");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_02_00_01","129","374","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00_00_00_01","559","374","737","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_01","259","343","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("27");
            obj.set_text("배송");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_02","518","343","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("28");
            obj.set_text("주문");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_03","777","343","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("29");
            obj.set_text("반품/교환/취소/ASs");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_04","1036","343",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("30");
            obj.set_text("회원/정산/기타");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","458","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("31");
            obj.set_text("발신전용 이메일");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","493",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_02","0","493","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("33");
            obj.set_text("이메일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","Static02:10","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","Static22_00:10","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","Static04:10","57","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00","Static02_00:10","171","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00","Static06_00:10","201","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01","Static06_00_00:10","232","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00","Static06_01_00:10","232","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00_00","Static06_01:10","201","677","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02","Static22_00_00:10","171","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00","Static04_00:10","171","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01","6","378","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01_00","265","378","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01_00_00","524","378","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01_00_00_00","783","378","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01_00_00_00_00","1041","378","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_01_00_01_00_00_00_00_00","133","497","382","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("CHAT_BOT_USE_YN","1011","227","203","35",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("50");
            obj.set_rowcount("1");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_innerdataset("ds_chatBotUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_list","599","620","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","8","382","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("고객 도우미 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","669","620","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,730,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item11","div_basis.form.edt_01_00","value","ds_dtl","OPR_UNIT_DISPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_01_00_00","value","ds_mbrInfo","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.edt_01_00_00_00","value","ds_mbrInfo","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_01_00_00_00_00","value","ds_mbrInfo","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.edt_01_00_00_00_00_00","value","ds_mbrInfo","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.edt_01_00_00_00_01","value","ds_mbrInfo","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.edt_01_00_01","value","ds_mbrInfo","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.edt_01_00_01_00","value","ds_mbrInfo","UT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div00.form.edt_01_00_01_01","value","ds_mbrInfo","CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div00.form.edt_01_00_00_01","value","ds_mbrInfo","DLPLC_ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div00.form.edt_01_00_00_02","value","ds_mbrInfo","DLPLC_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div00.form.edt_01_00_00_01_00","value","ds_mbrInfo","DLPLC_REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div00.form.edt_01_00_00_02_00","value","ds_mbrInfo","DLPLC_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div00.form.edt_01_00_00_01_00_00","value","ds_mbrInfo","DLPLC_DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Div00.form.edt_01_00_00_00_02","value","ds_mbrInfo","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Div00.form.edt_01_00_00_00_02_00","value","ds_mbrInfo","CLT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Div00.form.edt_01_00_00_00_02_00_00","value","ds_mbrInfo","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Div00.form.edt_01_00_00_00_01_00","value","ds_mbrInfo","MKTG_CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Div00.form.edt_01_00_00_00_01_00_00","value","ds_mbrInfo","MRO_MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Div00.form.edt_01_00_00_02_00_00","value","ds_mbrInfo","TAXINV_PUBC_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Div00.form.edt_01_00_00_02_00_00_00","value","ds_dtl","MNG_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Div00.form.edt_01_00_00_02_00_00_00_00","value","ds_dtl","BGT_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Div00.form.edt_01_00_00_02_00_00_00_00_00","value","ds_dtl","ADJ_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Div00.form.edt_01_00_00_02_00_00_00_01","value","ds_mbrInfo","MNG_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Div00.form.edt_01_00_00_02_00_00_00_01_00","value","ds_mbrInfo","BGT_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Div00.form.edt_01_00_00_02_00_00_00_01_01","value","ds_mbrInfo","ADJ_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_basis.form.edt_01_00_00","value","ds_dtl","SVC_CHRPSN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_basis.form.edt_01_00_00_00","value","ds_dtl","USE_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_basis.form.edt_01_00_00_00_00","value","ds_dtl","ZENDESK_GRP_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_basis.form.edt_01_00_00_00_00_00","value","ds_dtl","CUST_HELPER_CADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_basis.form.edt_01_00_00_00_00_01","value","ds_dtl","DSP_ONLY_EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_basis.form.edt_01_00_00_00_00_01_00","value","ds_dtl","CHAT_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_basis.form.edt_01_00_00_00_00_00_00","value","ds_dtl","ZENDESK_CHRPSN_NMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_basis.form.edt_01_00_00_00_00_02","value","ds_dtl","CADDR_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_basis.form.edt_01_00_00_00_00_02_00","value","ds_dtl","CADDR_DISP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_basis.form.edt_01_00_00_00_00_01_00_01","value","ds_dtl","EMAIL_ADDR_ALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basis.form.edt_01_00_00_00_00_01_00_01_00","value","ds_dtl","EMAIL_ADDR_DLV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basis.form.edt_01_00_00_00_00_01_00_01_00_00","value","ds_dtl","EMAIL_ADDR_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basis.form.edt_01_00_00_00_00_01_00_01_00_00_00","value","ds_dtl","EMAIL_ADDR_AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basis.form.edt_01_00_00_00_00_01_00_01_00_00_00_00","value","ds_dtl","EMAIL_ADDR_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basis.form.edt_01_00_00_00_00_01_00_01_00_00_00_00_00","value","ds_dtl","DSP_ONLY_EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basis.form.CHAT_BOT_USE_YN","value","ds_dtl","CHAT_BOT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_07.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_07.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_07.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.CO_CD       = '';
        this.BZPLC_ID    = '';
        this.OPR_UNIT_ID = '';

        //this.CO_CD       = '1000';
        //this.BZPLC_ID    = 'S000000693';
        //this.OPR_UNIT_ID = 'S000002563';

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_valChk();
        	this.fn_search();

        	this.ccComCodes([
        		  'CADDR_CHN_SPR_CD'
        	], 'fnCcComCodesClbk');

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()	{
        	this.fn_valChk();
        	var sSvcId = "selectDtl";
        	var sUrl = "/bo/cust/helper/select-cust-helper-detail.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dtl=ds_dtl";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //저장
        this.fn_save = function()	{
        	var sSvcId = "saveDtl";
        	var sUrl   = "/bo/cust/helper/update-cust-helper-detail.do";
        	var inDs   = "ds_dtl=ds_dtl";
        	var outDs  = "ds_successYn=ds_successYn";
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectDtl") {
        		//this.ds_dtl.setColumn(0, "ZENDESK_GRP_TEXT", this.ds_dtl.getColumn(0,"ZENDESK_GRP_ID") + ' | ' + this.ds_dtl.getColumn(0,"ZENDESK_GRP_NM"));
        	}
        	if(svcID == "saveDtl") {
        		//this.ds_dtl.setColumn(0, "ZENDESK_GRP_TEXT", this.ds_dtl.getColumn(0,"ZENDESK_GRP_ID") + ' | ' + this.ds_dtl.getColumn(0,"ZENDESK_GRP_NM"));
        		//alert('완료');
        	}
        };
        this.fnCcComCodesClbk = function(rCodes, rCode, rMesg)
        {

        	this.div_basis.form.email_00.set_text(this.dsComCADDR_CHN_SPR_CD.getColumn(0, 'NM'));
        	this.div_basis.form.email_01.set_text(this.dsComCADDR_CHN_SPR_CD.getColumn(1, 'NM'));
        	this.div_basis.form.email_02.set_text(this.dsComCADDR_CHN_SPR_CD.getColumn(2, 'NM'));
        	this.div_basis.form.email_03.set_text(this.dsComCADDR_CHN_SPR_CD.getColumn(3, 'NM'));
        	this.div_basis.form.email_04.set_text(this.dsComCADDR_CHN_SPR_CD.getColumn(4, 'NM'));

        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_valChk = function()	{

        	this.CO_CD       = this.parent.coCd;
        	this.BZPLC_ID    = this.parent.bzplcId;
        	this.OPR_UNIT_ID = this.parent.oprUnitId;

        	//if(this.gfn_isNull(this.CO_CD))      { alert('coCd는 필수 입니다.');      return false; }
        	//if(this.gfn_isNull(this.BZPLC_ID))   { alert('bzplcId는 필수 입니다.');   return false; }
        	//if(this.gfn_isNull(this.OPR_UNIT_ID)){ alert('oprUnitId는 필수 입니다.'); return false; }

        	if(this.gfn_isNull(this.CO_CD))      { alert(this.fn_getMessage("ERRC000004", "회사코드"));   return false; }
        	if(this.gfn_isNull(this.BZPLC_ID))   { alert(this.fn_getMessage("ERRC000004", "사업장ID"));   return false; }
        	if(this.gfn_isNull(this.OPR_UNIT_ID)){ alert(this.fn_getMessage("ERRC000004", "운영단위ID")); return false; }

        	this.ds_search.setColumn(0, 'CO_CD'      , this.CO_CD       );
        	this.ds_search.setColumn(0, 'BZPLC_ID'   , this.BZPLC_ID    );
        	this.ds_search.setColumn(0, 'OPR_UNIT_ID', this.OPR_UNIT_ID );

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_list_onclick = function(obj,e)
        {
        	this.close();
        };
        //저장버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {

        	if(this.confirm("저장하시겠습니까?")){this.fn_save();}

        };


        this.work04_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.work04_onkeyup,this);
            this.div_basis.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.Static02_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static29_00_00_01_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static29_00_00_01_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.email_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static29_00_00_02_00_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static29_00_00_00_00_00_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.email_01.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_03.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_04.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.CHAT_BOT_USE_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
