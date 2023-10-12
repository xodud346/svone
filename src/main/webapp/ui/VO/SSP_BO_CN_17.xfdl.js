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
            this.set_titletext("고객도우미관리(일반) 등록/상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_CHRPSN_NMS\" type=\"STRING\" size=\"256\"/><Column id=\"DSP_ONLY_EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CHATBOT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHATBOT_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_DLV\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_AS\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_DISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CADDAR_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CADDAR_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_BOT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_BOT_USE_YN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"CHATBOT_USE_YN\">Y</Col><Col id=\"CUST_HELPER_SPR_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_helperCd", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">로그인전</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"NAME\">일반(공통)</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"NAME\">일반(개별)</Col><Col id=\"CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">사용</Col><Col id=\"CODE\">Y</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_successYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCADDR_CHN_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basis","20","30",null,"710","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","93",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00","0","27","300","16",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02","0","93","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("1");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","93","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("3");
            obj.set_text("담당CS");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04","862","93","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","129","94","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01","994","94",null,"31","1",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","224",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","193",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","162","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("11");
            obj.set_text("고객 도우미");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","193","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("12");
            obj.set_text("Zendesk 그룹");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","431","193","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("13");
            obj.set_text("젠데스크 그룹명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","193","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("14");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","224","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("15");
            obj.set_text("그룹인원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_03","129","194","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","254",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","254","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("18");
            obj.set_text("연락처 등록번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_02_00_00","129","254","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","431","254","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("20");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","862","254","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("21");
            obj.set_text("Front 표시명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","420",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","389",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","358","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("24");
            obj.set_text("채널 별 이메일");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_00","0","389","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_02_00_01","129","420","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00_00_00_01","559","420","737","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_01","259","389","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("28");
            obj.set_text("배송");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_02","518","389","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("29");
            obj.set_text("주문");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_03","777","389","260","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("30");
            obj.set_text("반품/교환/취소/ASs");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("email_04","1036","389",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("31");
            obj.set_text("회원/정산/기타");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","488","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("32");
            obj.set_text("발신전용 이메일");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","523",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_02","0","523","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("34");
            obj.set_text("이메일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_02_01","129","523","303","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_02","0","62",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_03","0","62","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("37");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("CUST_HELPER_SPR_CD","Static06_03:10","62","302","35",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_helperCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_text("일반(개별)");
            obj.set_value("");
            obj.set_index("2");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_ID","Static02:10","97","90","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_NM","OPR_UNIT_ID:4","97","158","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_oprPopup","OPR_UNIT_NM:4","97","24","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_search02");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("ZENDESK_GRP_ID","Static02_00:10","197","253","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_zenPopup","ZENDESK_GRP_ID:4","197","24","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("ZEND_USE_YN","Static04:10","93","203","35",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("44");
            obj.set_rowcount("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_useYn");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","285",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","285","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("46");
            obj.set_text("연락처");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00","431","285","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("49");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00_00_00_00_00","Static06_01_00_00:9","286","281","31",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_01_00_00_00","989","285",null,"31","6",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00","862","285","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("50");
            obj.set_text("채팅 사용 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("CHAT_BOT_USE_YN","Static06_01_00_00_00_00:10","283","203","35",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("51");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("1");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_ID00_00","Static06_00_00:10","258","253","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_telPopup","OPR_UNIT_ID00_00:4","258","24","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_search02");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("DSP_ONLY_EMAIL_ADDR","Static06_02:10","527","382","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_autoselect("false");
            obj.set_autoskip("false");
            obj.set_enableevent("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02","Static22_00:10","97","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00","Static22_00_00:10","197","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00","Static06_00:10","228","1108","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00","Static06_00_00_00:10","289","253","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("58");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_01","Static06_01_00:10","258","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_01_00","Static06_01_00_00_00:10","258","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("60");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_02","Static04_00:10","197","246","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("61");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00_00","4","424","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00_00_00","264","424","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00_00_00_00","523","424","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("64");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00_00_00_00_00","783","424","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("65");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_02_00_00_00_00_00_00_00_00","1040","424","250","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("66");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_list","593","655","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","8","382","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("고객 도우미 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","663","655","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,810,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item25","div_basis.form.OPR_UNIT_ID","value","ds_dtl","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_basis.form.OPR_UNIT_NM","value","ds_dtl","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basis.form.ZENDESK_GRP_ID","value","ds_dtl","ZENDESK_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basis.form.OPR_UNIT_ID00_00","value","ds_dtl","CUST_HELPER_CADDR_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_basis.form.DSP_ONLY_EMAIL_ADDR","value","ds_dtl","DSP_ONLY_EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_basis.form.ZEND_USE_YN","value","ds_dtl","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_basis.form.CHAT_BOT_USE_YN","value","ds_dtl","CHAT_BOT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basis.form.CUST_HELPER_SPR_CD","acceptvaluetype","ds_dtl","CUST_HELPER_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_basis.form.edt_01_00_00_00_00_02","value","ds_dtl","SVC_CHRPSN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_basis.form.edt_01_00_00_00_00_02_00","value","ds_dtl","ZENDESK_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basis.form.edt_01_00_00_00_00_02_00_00","value","ds_dtl","ZENDESK_CHRPSN_NMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basis.form.edt_01_00_00_00_00_02_00_00_00","value","ds_dtl","CUST_HELPER_CADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basis.form.edt_01_00_00_00_00_02_00_01","value","ds_dtl","CADDR_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basis.form.edt_01_00_00_00_00_02_00_01_00","value","ds_dtl","CADDR_DISP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_basis.form.edt_01_00_00_00_00_02_00_02","value","ds_dtl","CHAT_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basis.form.Static29_00_00_00_00_00_00_00","text","ds_dtl","USE_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basis.form.edt_01_00_00_00_00_02_00_00_00_00","value","ds_dtl","EMAIL_ADDR_ALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basis.form.edt_01_00_00_00_00_02_00_00_00_00_00","value","ds_dtl","EMAIL_ADDR_DLV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basis.form.edt_01_00_00_00_00_02_00_00_00_00_00_00","value","ds_dtl","EMAIL_ADDR_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_basis.form.edt_01_00_00_00_00_02_00_00_00_00_00_00_00","value","ds_dtl","EMAIL_ADDR_AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_basis.form.edt_01_00_00_00_00_02_00_00_00_00_00_00_00_00","value","ds_dtl","EMAIL_ADDR_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_17.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_17.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_17.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_17.xfdl", function() {
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

        this.PAGE_DIV = '';		//페이지 호출 구분 - 1:등록페이지, 2:수정페이지

        this.CO_CD       = '';
        this.BZPLC_ID    = '';
        this.OPR_UNIT_ID = '';

        //this.PAGE_DIV    = '2';
        //this.CO_CD       = '1000';
        //this.BZPLC_ID    = 'S000001052';
        //this.OPR_UNIT_ID = 'S000007613';

        this.cCoCd          = '';
        this.cBzplcId       = '';
        this.cOprUnitId     = '';
        this.cOprUnitNm     = '';
        this.cSvcChrpsnText = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_valChk();

        	this.ccComCodes([
        		  'CADDR_CHN_SPR_CD'
        	], 'fnCcComCodesClbk');

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()	{
        	var sSvcId = "selectDtl";
        	var sUrl = "/bo/cust/helper/select-cust-helper-detail.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dtl=ds_dtl";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //수정
        this.fn_update = function()	{
        	var sSvcId = "updateDtl";
        	var sUrl   = "/bo/cust/helper/update-cust-helper-detail.do";
        	var inDs   = "ds_dtl=ds_dtl";
        	var outDs  = "ds_successYn=ds_successYn";
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //운영단위 체크
        this.fn_oprChk = function()	{
        	var sSvcId = "chkDtl";
        	var sUrl   = "/bo/cust/helper/select-opr-unit-chk.do";
        	var inDs   = "ds_dtl=ds_dtl";
        	var outDs  = "ds_successYn=ds_successYn";
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //등록
        this.fn_insert = function()	{
        	var sSvcId = "insertDtl";
        	var sUrl   = "/bo/cust/helper/insert-cust-helper-info.do";
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
        		/* 고객도우미구분코드 라디오박스 제어 */
        		/* 혹시라도 고객도우미구분코드가 null인경우 일반(개별)[3] 으로 세팅 */
        		if(this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") == null || this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") == undefined){
        			this.ds_dtl.setColumn(0, "CUST_HELPER_SPR_CD", '3');
        		}

        		var idx = (this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") - 1);
        		if(this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") != null && this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") != undefined){
        			this.div_basis.form.CUST_HELPER_SPR_CD.set_index(idx);
        		}

        		if(this.ds_dtl.getColumn(0, "CUST_HELPER_SPR_CD") != '3'){
        			this.div_basis.form.ZEND_USE_YN.set_enable(false);
        		}
        	}
        	if(svcID == "updateDtl") {
        		if(this.ds_successYn.getColumn(0, "SUCCESS_YN") == 'Y'){
        			//alert("저장되었습니다." or "삭제되었습니다.");
        			alert(this.fn_getMessage(this.ds_successYn.getColumn(0, "RETURN_MSG")));
        			this.close();
        		}
        	}
        	if(svcID == "insertDtl") {
        		if(this.ds_successYn.getColumn(0, "SUCCESS_YN") == 'Y'){
        			//alert("정상적으로 정보가 저장되었습니다.");
        			alert(this.fn_getMessage("ERRC000081"));
        			this.close();
        		}
        	}if(svcID == "chkDtl") {
        		if(this.ds_successYn.getColumn(0, "SUCCESS_YN") == 'N')
        		{
        			//alert("이미 등록되어있는 운영단위 입니다.");
        			//alert(this.fn_getMessage("ERRC000118"));

        			//false
        			/*
        			this.ds_dtl.setColumn(0, "CO_CD"           , "");
        			this.ds_dtl.setColumn(0, "BZPLC_ID"        , "");
        			this.ds_dtl.setColumn(0, "OPR_UNIT_ID"     , "");
        			this.ds_dtl.setColumn(0, "OPR_UNIT_NM"     , "");
        			this.ds_dtl.setColumn(0, "SVC_CHRPSN_TEXT" , "");
        			return false;
        			*/

        			//alert("이미 등록되어있는 운영단위 입니다.");
        			alert(this.fn_getMessage("ERRC000118"));

        			this.CO_CD       = this.ds_successYn.getColumn(0, "CO_CD"       );
        			this.BZPLC_ID    = this.ds_successYn.getColumn(0, "BZPLC_ID"    );
        			this.OPR_UNIT_ID = this.ds_successYn.getColumn(0, "OPR_UNIT_ID" );

        			//if(this.gfn_isNull(this.CO_CD))      { alert('coCd는 필수 입니다.');      return false; }
        			//if(this.gfn_isNull(this.BZPLC_ID))   { alert('bzplcId는 필수 입니다.');   return false; }
        			//if(this.gfn_isNull(this.OPR_UNIT_ID)){ alert('oprUnitId는 필수 입니다.'); return false; }

        			if(this.gfn_isNull(this.CO_CD))      { alert(this.fn_getMessage("ERRC000004", "회사코드"));   return false; }
        			if(this.gfn_isNull(this.BZPLC_ID))   { alert(this.fn_getMessage("ERRC000004", "사업장ID"));   return false; }
        			if(this.gfn_isNull(this.OPR_UNIT_ID)){ alert(this.fn_getMessage("ERRC000004", "운영단위ID")); return false; }

        			this.ds_search.setColumn(0, 'CO_CD'      , this.CO_CD       );
        			this.ds_search.setColumn(0, 'BZPLC_ID'   , this.BZPLC_ID    );
        			this.ds_search.setColumn(0, 'OPR_UNIT_ID', this.OPR_UNIT_ID );

        			//this.div_basis.form.btn_oprPopup.set_enable(false);

        			this.PAGE_DIV = '2'
        			this.staticTitle.set_text("고객 도우미 관리 수정");

        			//상세정보 조회
        			this.fn_search();
        		}else if(this.ds_successYn.getColumn(0, "SUCCESS_YN") == 'Y'){
        			this.cCoCd          = this.ds_dtl.getColumn(0, "CO_CD"           );
        			this.cBzplcId       = this.ds_dtl.getColumn(0, "BZPLC_ID"        );
        			this.cOprUnitId     = this.ds_dtl.getColumn(0, "OPR_UNIT_ID"     );
        			this.cOprUnitNm     = this.ds_dtl.getColumn(0, "OPR_UNIT_NM"     );
        			this.cSvcChrpsnText = this.ds_dtl.getColumn(0, "SVC_CHRPSN_TEXT" );
        			var chatBotUseYn 	= this.ds_dtl.getColumn(0, "CHAT_BOT_USE_YN" );

        			this.ds_dtl.clearData();
        			this.ds_dtl.addRow();

        			this.ds_dtl.setColumn(0, "CO_CD", this.cCoCd                    );
        			this.ds_dtl.setColumn(0, "BZPLC_ID", this.cBzplcId              );
        			this.ds_dtl.setColumn(0, "OPR_UNIT_ID", this.cOprUnitId         );
        			this.ds_dtl.setColumn(0, "OPR_UNIT_NM", this.cOprUnitNm         );
        			this.ds_dtl.setColumn(0, "SVC_CHRPSN_TEXT", this.cSvcChrpsnText );
        			this.ds_dtl.setColumn(0, "USE_YN", 'Y'                          );
        			this.ds_dtl.setColumn(0, "CUST_HELPER_SPR_CD", "3"				);

        			if(chatBotUseYn == 'N'){
        				this.ds_dtl.setColumn(0,"CHAT_BOT_USE_YN","N");
        			}else{
        				this.ds_dtl.setColumn(0,"CHAT_BOT_USE_YN","Y");
        			}

        			this.PAGE_DIV = '1'
        			this.staticTitle.set_text("고객 도우미 관리 등록");
        		}
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
        // 멀티팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	switch(sPopupId){
        		case "btn_oprPopup":
        			if(sRetValue != null){
        				var resParam = JSON.parse(sRetValue);
        				this.ds_dtl.setColumn(0, "CO_CD", resParam.CO_CD);
        				this.ds_dtl.setColumn(0, "BZPLC_ID", resParam.BZPLC_ID);
        				this.ds_dtl.setColumn(0, "OPR_UNIT_ID", resParam.OPR_UNIT_ID);
        				this.ds_dtl.setColumn(0, "OPR_UNIT_NM", resParam.OPR_UNIT_NM);

        				this.fn_oprChk();

        				this.svcChrpsnText = resParam.SVC_CHRPSN_TEAM_NM + " | " + resParam.SVC_CHRPSN_NM;
        				this.ds_dtl.setColumn(0, "SVC_CHRPSN_TEXT", this.svcChrpsnText);
        			}
        			break;
        		case "btn_zenPopup":
        			if(sRetValue != null){
        				var resParam = JSON.parse(sRetValue);
        				this.ds_dtl.setColumn(0, "ZENDESK_GRP_ID"    , resParam.ZENDESK_GRP_ID     );
        				this.ds_dtl.setColumn(0, "ZENDESK_GRP_NM"    , resParam.ZENDESK_GRP_NM     );
        				this.ds_dtl.setColumn(0, "ZENDESK_CHRPSN_NMS", resParam.ZENDESK_CHRPSN_NMS );
        				this.ds_dtl.setColumn(0, "CHAT_URL"          , resParam.CHAT_URL           );
        			}
        			break;
        		case "btn_telPopup":
        			if(sRetValue != null){

        				var resParam = JSON.parse(sRetValue);

        				this.ds_dtl.setColumn(0, "CUST_HELPER_CADDR_REG_NO" , resParam.CUST_HELPER_CADDR_REG_NO   ); // 고객도우미연락처등록번호
        				this.ds_dtl.setColumn(0, "CADDR_SPR_CD"             , resParam.CADDR_SPR_CD               ); // 연락처 구분코드
        				this.ds_dtl.setColumn(0, "CADDR_DISP_NM"            , resParam.CADDR_DISP_NM              ); // Front 표시명
        				this.ds_dtl.setColumn(0, "CUST_HELPER_CADDR"        , resParam.CUST_HELPER_CADDR          ); // 연락처

        				var sUseYn = "";
        				if(resParam.USE_YN == 'Y'){ sUseYn = "사용"; }
        				else { sUseYn = "미사용"; }

        				this.ds_dtl.setColumn(0, "CADDAR_USE_YN_NM"         , sUseYn                              ); // 연락처 사용여부
        				this.ds_dtl.setColumn(0, "CHATBOT_USE_YN_NM"        , resParam.USE_YN                     ); // 챗봇사용여부

        				this.ds_dtl.setColumn(0, "EMAIL_ADDR_ALL"           , resParam.EMAIL_ADDR_ALL             ); // 전체 이메일
        				this.ds_dtl.setColumn(0, "EMAIL_ADDR_DLV"           , resParam.EMAIL_ADDR_DLV             ); // 배송 이메일
        				this.ds_dtl.setColumn(0, "EMAIL_ADDR_ORD"           , resParam.EMAIL_ADDR_ORD             ); // 주문 이메일
        				this.ds_dtl.setColumn(0, "EMAIL_ADDR_AS"            , resParam.EMAIL_ADDR_AS              ); // 반품/교환/취소/AS
        				this.ds_dtl.setColumn(0, "EMAIL_ADDR_ETC"           , resParam.EMAIL_ADDR_ETC             ); // 회원/정산/기타
        				this.ds_dtl.setColumn(0, "CADDR_SPR_NM"             , resParam.CADDR_SPR_NM               ); // 구분
        				this.ds_dtl.setColumn(0, "DSP_ONLY_EMAIL_ADDR"      , resParam.DSP_ONLY_EMAIL_ADDR        ); // 발신전용 이메일

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
        this.fn_valChk = function()	{
        	this.PAGE_DIV = this.parent.pageDiv;
        	if (this.PAGE_DIV == '1') {
        		this.staticTitle.set_text("고객 도우미 관리 등록");
        		this.ds_dtl.setColumn(0,"CHAT_BOT_USE_YN","Y");

        	} else if(this.PAGE_DIV == '2') {
        		this.staticTitle.set_text("고객 도우미 관리 수정");

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

        		this.div_basis.form.btn_oprPopup.set_enable(false);

        		//상세정보 조회
        		this.fn_search();

        	} else {
        		//alert("페이지 호출 구분 코드를 확인해주세요.");
        		alert(this.fn_getMessage("ERRC000119"));
        		return false;
        	}

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_list_onclick = function(obj,e)
        {
        	this.close();
        };
        //팝업호출
        this.searchPopupBtn_onclick = function(obj,e)
        {
        	if(e.fromobject.id == 'btn_oprPopup'){
        		var args = { coCd : '1000', custSprCd : '30'}
        		var opts = {}
        		var page = "CO_POP::SSP_BO_PP_15.xfdl";
        	}

        	if(e.fromobject.id == 'btn_zenPopup'){
        		if(this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == null || this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == 'undifined'){
        			//alert('운영단위는 필수입력사항입니다.');
        			alert(this.fn_getMessage("ERRC000004", "운영단위"));
        			return false;
        		}
        		var args = {coCd : '1000'}
        		var opts = {}
        		var page = "CC::SSP_BO_PP_21.xfdl";	//젠데스크 조회 팝업
        	}

        	if(e.fromobject.id == 'btn_telPopup'){
        		if(this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == null || this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == 'undifined'){
        			//alert('운영단위는 필수입력사항입니다.');
        			alert(this.fn_getMessage("ERRC000004", "운영단위"));
        			return false;
        		}
        		var args = { coCd : '1000'}
        		var opts = {}
        		var page = "CC::SSP_BO_PP_20.xfdl";
        	}

        	this.gfn_openPopup(e.fromobject.id, page, args, 'fn_popupCallback', opts);
        };
        //저장버튼
        this.btn_save_onclick = function(obj,e)
        {
        	//등록
        	if(this.PAGE_DIV == '1'){

        		//필수정보 체크
        		if(this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == null || this.ds_dtl.getColumn(0, "OPR_UNIT_ID") == 'undifined'){
        			//alert('운영단위를 선택해 주세요.');
        			alert(this.fn_getMessage("ERRC000004", "운영단위"));
        			return false;
        		}
        		if(this.ds_dtl.getColumn(0, "ZENDESK_GRP_ID") == null || this.ds_dtl.getColumn(0, "ZENDESK_GRP_ID") == 'undifined'){
        			//alert('젠데스크 그룹 ID를 선택해 주세요.');
        			alert(this.fn_getMessage("ERRC000004", "젠디스크 그룹ID"));
        			return false;
        		}
        		if(this.ds_dtl.getColumn(0, "CUST_HELPER_CADDR_REG_NO") == null || this.ds_dtl.getColumn(0, "CUST_HELPER_CADDR_REG_NO") == 'undifined'){
        			//alert('연락처 등록번호를 선택해 주세요.');
        			alert(this.fn_getMessage("ERRC000004", "연락처 등록번호"));
        			return false;
        		}

        		if(this.confirm("저장하시겠습니까?")){this.fn_insert();}
        	}

        	//상세 수정
        	if(this.PAGE_DIV == '2'){
        		/*
        		if(!this.gfn_dsIsUpdated(this.ds_dtl)) {
        			alert(this.fn_getMessage("ERRC000039"));
        			return;
        		}
        		*/
        		if(this.ds_dtl.getColumn(0, "USE_YN") == 'Y'){
        			if(this.confirm("저장하시겠습니까?")){this.fn_update();}
        		}
        		if(this.ds_dtl.getColumn(0, "USE_YN") == 'N'){
        			if(this.confirm("삭제하시겠습니까?")){this.fn_update();}
        		}
        	}
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
            this.div_basis.form.Static29_00_00_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.Static02_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static29_00_00_02_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.email_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static29_00_00_02_00_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static29_00_00_00_00_00_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.email_01.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_03.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.email_04.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_basis.form.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_basis.form.Static29_00_00_02_01.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.CUST_HELPER_SPR_CD.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.div_basis.form.btn_oprPopup.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.div_basis.form.btn_zenPopup.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.div_basis.form.ZEND_USE_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.div_basis.form.Static29_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.Static29_00_00_01_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.CHAT_BOT_USE_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.div_basis.form.btn_telPopup.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
