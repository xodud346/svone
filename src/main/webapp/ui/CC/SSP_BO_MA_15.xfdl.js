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
            this.set_titletext("회원상세정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID_DUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_CHAR_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MKTG_MAIL_RCV_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ_5\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSF_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSF_CERT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_HP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRNR_NM_HP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DEVI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeList", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">예</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orderList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dupId", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_crdStlAuthUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgtAuthUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_adjAuthUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mngAuthUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_telNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">010</Col><Col id=\"NAME\">010</Col></Row><Row><Col id=\"CODE\">011</Col><Col id=\"NAME\">011</Col></Row><Row><Col id=\"CODE\">016</Col><Col id=\"NAME\">016</Col></Row><Row><Col id=\"CODE\">017</Col><Col id=\"NAME\">017</Col></Row><Row><Col id=\"CODE\">019</Col><Col id=\"NAME\">019</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">031</Col><Col id=\"NAME\">031</Col></Row><Row><Col id=\"CODE\">032</Col><Col id=\"NAME\">032</Col></Row><Row><Col id=\"CODE\">051</Col><Col id=\"NAME\">051</Col></Row><Row><Col id=\"CODE\">052</Col><Col id=\"NAME\">052</Col></Row><Row><Col id=\"CODE\">053</Col><Col id=\"NAME\">053</Col></Row><Row><Col id=\"CODE\">054</Col><Col id=\"NAME\">054</Col></Row><Row><Col id=\"CODE\">055</Col><Col id=\"NAME\">055</Col></Row><Row><Col id=\"CODE\">033</Col><Col id=\"NAME\">033</Col></Row><Row><Col id=\"CODE\">042</Col><Col id=\"NAME\">042</Col></Row><Row><Col id=\"CODE\">041</Col><Col id=\"NAME\">041</Col></Row><Row><Col id=\"CODE\">043</Col><Col id=\"NAME\">043</Col></Row><Row><Col id=\"CODE\">062</Col><Col id=\"NAME\">062</Col></Row><Row><Col id=\"CODE\">061</Col><Col id=\"NAME\">061</Col></Row><Row><Col id=\"CODE\">063</Col><Col id=\"NAME\">063</Col></Row><Row><Col id=\"CODE\">064</Col><Col id=\"NAME\">064</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1차</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">2차</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3차</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">4차</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">5차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resMap", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_otherInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"1000\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basis","0","137",null,"183","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","146",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","115",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static65","0","84",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("1");
            obj.set_text("로그인ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static10","0","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("2");
            obj.set_text("회원명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static66","862","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("3");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static12","0","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("4");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("5");
            obj.set_text("개인정보사용동의");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static14","862","115","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("6");
            obj.set_text("마케팅수신동의");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static16","0","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("7");
            obj.set_text("업무 문자/메일 수신");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static18","862","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("8");
            obj.set_text("S-MRO 회원정보");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_01","431","84","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("13");
            obj.set_text("직급");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("Static22_01_02","431","146","130","32",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("15");
            obj.set_text("가입경로");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_lognId","135","57","269","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("16");
            obj.set_maxlength("80");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_DupId","410","58","66","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("17");
            obj.set_text("ID 변경");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("sta_dupIdMsg","559","57","303","20",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","135","88","269","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("18");
            obj.set_maxlength("30");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_jbposNm","565","88","269","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("19");
            obj.set_maxlength("30");
            this.div_basis.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","996","88","130","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_custSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_index("-1");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("rdo_utAgreYn","143","120","126","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("21");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            obj.set_value("1");
            obj.set_index("0");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("rdo_cltAgreYn","573","120","126","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("22");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            obj.set_value("1");
            obj.set_index("0");
            this.div_basis.addChild(obj.name, obj);

            obj = new Radio("rdo_joinPathCd","573","151","128","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("23");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_basis_form_rdo_joinPathCd_innerdataset = new nexacro.NormalDataset("div_basis_form_rdo_joinPathCd_innerdataset", obj);
            div_basis_form_rdo_joinPathCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">서브원</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">고객</Col></Row></Rows>");
            obj.set_innerdataset(div_basis_form_rdo_joinPathCd_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.div_basis.addChild(obj.name, obj);

            obj = new CheckBox("chk_charRcvAgreYn","143","152","100","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("24");
            obj.set_text("문자허용");
            obj.set_value("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new CheckBox("chk_mailRcvAgreYn","243","152","100","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("25");
            obj.set_text("메일허용");
            obj.set_value("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_mroMbrNm","996","150",null,"24","72",null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new CheckBox("chk_mktgCharRcvAgreYn","1006","122","100","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("27");
            obj.set_text("문자허용");
            obj.set_value("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new CheckBox("chk_mktgMailRcvAgreYn","1106","122","100","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("28");
            obj.set_text("메일허용");
            obj.set_value("true");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_mroMbrId","edt_mroMbrNm:4","150","24","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_multi");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_mroMbrIdMemo","btn_mroMbrId:0","150","24","24",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            this.div_basis.addChild(obj.name, obj);

            obj = new Edit("edt_mroMbrId","92.74%","105","82","34",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("31");
            obj.set_visible("false");
            this.div_basis.addChild(obj.name, obj);

            obj = new Button("btn_DupPw_onclick","482","58","80","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("32");
            obj.set_text("PW 초기화");
            this.div_basis.addChild(obj.name, obj);

            obj = new Static("JOIN_DEVI_CD","712","152","100","21",null,null,null,null,null,null,this.div_basis.form);
            obj.set_taborder("33");
            obj.set_text("");
            this.div_basis.addChild(obj.name, obj);

            obj = new Div("div_upper","0","84",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서");
            this.div_upper.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-2",null,"30","11",null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("0");
            obj.set_text("상위 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_upper.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_upper.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","530","31",null,"32","0",null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_upper.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","870","31","118","32",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업장");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00","135","35","95","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","562","35","95","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","993","35","95","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Button("btn_dept","410","35","24","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","235","35","170","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","664","35","200","24",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","1093","35",null,"24","7",null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_upper.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","439","31","118","32",null,null,null,null,null,null,this.div_upper.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("운영단위");
            this.div_upper.addChild(obj.name, obj);

            obj = new Div("div_ctrl","0","521",null,"259","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00","130","93",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("결재권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("0");
            obj.set_text("제어권한관리");
            obj.set_cssclass("sta_WF_title02");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("세금계산서 담당");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62","450","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","560","62",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01","1","124","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("입고권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_01","130","124",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_02","1","155","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("관리권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_02","130","155",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_03","1","186","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_03","130","186",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_04","1","217","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("정산권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_04","130","217",null,"32","0",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_06","431","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("발주권한");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","93","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("카드결제사용여부");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("UCESSDI ID");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("Radio00","143","37","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("18");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","573","38","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("19");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdo_taxinvAuthUseYn","143","68","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("20");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdo_crdStlAuthUseYn","143","98","300","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("21");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_crdStlAuthUseCd","180","97","100","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_crdStlAuthUseCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("rdo_giAuthUseYn","143","130","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("23");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Edit("edt_ucessdiId","565","66","269","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("24");
            obj.set_maxlength("20");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_mngAuth","140","159","120","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_mngAuthUseCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_bgtAuth","140","190","120","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_bgtAuthUseCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Combo("cbo_adjAuth","140","221","120","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_adjAuthUseCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_mngAuth","265","161","100","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("28");
            obj.set_text("운영단위설정");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_bgtAuth","265","192","100","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("29");
            obj.set_text("운영단위설정");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_adjAuth","265","222","100","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("30");
            obj.set_text("운영단위설정");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Edit("edt_mngAuth","390","159",null,"24","5",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("31");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Edit("edt_bgtAuth","390","190",null,"24","5",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("32");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Edit("edt_adjAuth","390","221",null,"24","5",null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("33");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_mngAuthMemo","365",null,"24","24",null,"75",null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_document");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_bgtAuthMemo","365",null,"24","24",null,"45",null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_document");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Button("btn_adjAuthMemo","365",null,"24","24",null,"15",null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_document");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new TextArea("edt_mngAuthId","33.01%","141","8.01%","33",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("37");
            obj.set_visible("false");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new TextArea("edt_bgtAuthId","33.01%","176","8.01%","33",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new TextArea("edt_adjAuthId","33.01%","211","8.01%","33",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("sta_giAuthUseNm","21.26%","128","14.30%","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("40");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("sta_dupIdMsg_2","873","66","388","24",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","1008","37","126","21",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("42");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_06_00","861","31","130","32",null,null,null,null,null,null,this.div_ctrl.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("화학물질담당자여부");
            this.div_ctrl.addChild(obj.name, obj);

            obj = new Div("div_appv","0","775",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","11",null,null,null,null,null,this.div_appv.form);
            obj.set_taborder("0");
            obj.set_text("결재자 관리");
            obj.set_cssclass("sta_WF_title02");
            this.div_appv.addChild(obj.name, obj);

            obj = new Grid("grd_aprvlList","0","30",null,"152","0",null,null,null,null,null,this.div_appv.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_aprvlList");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"부서ID\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"결재차수\"/><Cell col=\"5\" text=\"회원ID\"/><Cell col=\"6\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" cssclass=\"grd_WF_body_stress\" edittype=\"readonly\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" textAlign=\"left\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:DEPT_ID\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"readonly\"/><Cell col=\"4\" displaytype=\"normal\" textAlign=\"center\" text=\"bind:APRV_SEQ_NM\" edittype=\"readonly\"/><Cell col=\"5\" text=\"bind:APRVR_ID\" edittype=\"readonly\"/><Cell col=\"6\" expandshow=\"show\" expandsize=\"20\" text=\"bind:APRVR_NM\" edittype=\"readonly\"/></Band></Format></Formats>");
            this.div_appv.addChild(obj.name, obj);

            obj = new Button("btn_appvDel",null,"0","70","28","4",null,null,null,null,null,this.div_appv.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_default");
            this.div_appv.addChild(obj.name, obj);

            obj = new Button("btn_appvAdd",null,"0","70","28","btn_appvDel:4",null,null,null,null,null,this.div_appv.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_default");
            this.div_appv.addChild(obj.name, obj);

            obj = new Div("div_addr","0","321",null,"158","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("우편번호");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("0");
            obj.set_text("주소 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","31",null,"32","0",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("전화번호");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62","450","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("휴대폰번호");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","560","62",null,"32","0",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","862","31","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("상세주소");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","862","62","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_text("E-mail");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","93","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("본인인증여부");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_01","130","93","400","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_01","431","93","130","32",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("인증일시");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01","560","93",null,"32","0",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static00_02","570","66",null,"24","436",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("15");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_zpCd","135","35","80","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("16");
            obj.set_maxlength("5");
            obj.set_readonly("true");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_reprAddr","565","35","269","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("17");
            obj.set_maxlength("70");
            obj.set_readonly("true");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","995","35",null,"24","5",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("18");
            obj.set_maxlength("300");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_telNo","135","66","150","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("19");
            obj.set_maxlength("12");
            obj.set_inputtype("digit");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_hpNo","565","66","150","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("20");
            obj.set_maxlength("12");
            obj.set_inputtype("digit");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr1","996","66","100","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("21");
            obj.set_maxlength("40");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr2","1124","66",null,"24","5",null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("22");
            obj.set_maxlength("100");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_certYn","135","97","150","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("23");
            obj.set_maxlength("12");
            obj.set_readonly("true");
            this.div_addr.addChild(obj.name, obj);

            obj = new Edit("edt_certDtm","565","97","269","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("24");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            this.div_addr.addChild(obj.name, obj);

            obj = new Static("Static67","1103","69","15","15",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("25");
            obj.set_text("@");
            obj.set_cssclass("sta_guide_InstTxt");
            this.div_addr.addChild(obj.name, obj);

            obj = new Button("btn_zpCd","222","35","24","24",null,null,null,null,null,null,this.div_addr.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            obj.set_text("");
            this.div_addr.addChild(obj.name, obj);

            obj = new Div("div_deliver","0","452",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("우편번호");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("0");
            obj.set_text("배송지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("주소");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","31",null,"32","0",null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","862","31","130","32",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_text("상세주소");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Edit("edt_dlvZpCd","135","35","80","24",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("6");
            obj.set_maxlength("5");
            obj.set_readonly("true");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Edit("edt_dlvReprAddr","565","35","269","24",null,null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("7");
            obj.set_maxlength("70");
            obj.set_readonly("true");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","995","35",null,"24","5",null,null,null,null,null,this.div_deliver.form);
            obj.set_taborder("8");
            obj.set_maxlength("300");
            obj.set_readonly("true");
            this.div_deliver.addChild(obj.name, obj);

            obj = new Div("div_order","0","963",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","11",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("0");
            obj.set_text("발주자 관리");
            obj.set_cssclass("sta_WF_title02");
            this.div_order.addChild(obj.name, obj);

            obj = new Grid("grd_orderList","0","30",null,"152","0",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_orderList");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"부서ID\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"결재차수\"/><Cell col=\"5\" text=\"회원ID\"/><Cell col=\"6\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" cssclass=\"grd_WF_body_stress\" edittype=\"readonly\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" textAlign=\"left\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:DEPT_ID\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"readonly\"/><Cell col=\"4\" displaytype=\"combocontrol\" text=\"bind:APRV_SEQ\" edittype=\"combo\" combodataset=\"ds_aprvSeq\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:APRVR_ID\" edittype=\"readonly\"/><Cell col=\"6\" expandshow=\"show\" expandsize=\"20\" text=\"bind:APRVR_NM\" edittype=\"readonly\"/></Band></Format></Formats>");
            this.div_order.addChild(obj.name, obj);

            obj = new Button("btn_orderDel",null,"0","70","28","4",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_default");
            this.div_order.addChild(obj.name, obj);

            obj = new Button("btn_orderAdd",null,"0","70","28","btn_orderDel:4",null,null,null,null,null,this.div_order.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_default");
            this.div_order.addChild(obj.name, obj);

            obj = new Div("div_bottomBtn","496","1510","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","53","5","60","30",null,null,null,null,null,null,this.div_bottomBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.div_bottomBtn.addChild(obj.name, obj);

            obj = new Button("btn_save","118","5","70","30",null,null,null,null,null,null,this.div_bottomBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_bottomBtn.addChild(obj.name, obj);

            obj = new Div("div_reg","0","11",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상태");
            this.div_reg.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-2",null,"30","11",null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("0");
            obj.set_text("등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_reg.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_reg.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","530","31",null,"32","0",null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_reg.addChild(obj.name, obj);

            obj = new Edit("edt_mbrId","562","35","150","24",null,null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_reg.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","439","31","118","32",null,null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("회원ID");
            this.div_reg.addChild(obj.name, obj);

            obj = new Combo("cbo_mbrUseCd","135","35","100","24",null,null,null,null,null,null,this.div_reg.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mbrUseCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_reg.addChild(obj.name, obj);

            obj = new Div("div_hst","0","1395",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","130","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("1");
            obj.set_text("최초등록");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("0");
            obj.set_text("이력 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","31","450","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","431","31","130","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("등록일시");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","560","31",null,"32","0",null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","130","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("최종수정");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","130","62","450","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","431","62","130","32",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("수정일시");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","560","62",null,"32","0",null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static00_02","570","66","240","24",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","570","35","240","24",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","140","35","240","24",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","140","66","240","24",null,null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("12");
            obj.set_text("");
            this.div_hst.addChild(obj.name, obj);

            obj = new Button("btn_hstAll",null,"1","100","26","4",null,null,null,null,null,this.div_hst.form);
            obj.set_taborder("13");
            obj.set_text("전체이력조회");
            obj.set_cssclass("btn_WF_default");
            this.div_hst.addChild(obj.name, obj);

            obj = new Div("div_otherInfo","0","1145",null,"246","-1",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","11",null,null,null,null,null,this.div_otherInfo.form);
            obj.set_taborder("0");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_otherInfo.addChild(obj.name, obj);

            obj = new Grid("grd_otherInfo","0","30",null,"213","0",null,null,null,null,null,this.div_otherInfo.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_otherInfo");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"320\"/><Column size=\"599\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"유형\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" colspan=\"2\" text=\"설정값\"/></Band><Band id=\"body\"><Cell text=\"bind:TYPE\" cssclass=\"grd_WF_body_stress\" edittype=\"readonly\"/><Cell col=\"1\" text=\"bind:CODE_NM\" textAlign=\"center\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:CODE_VAL\" edittype=\"readonly\" expandshow=\"expr:CODE_NM ==&apos; &apos;? &apos;hide&apos; : &apos;show&apos;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" displaytype=\"expr:CODE_NM ==&apos; &apos;? &apos;none&apos; : &apos;buttoncontrol&apos;\" text=\"초기화\" edittype=\"expr:CODE_NM ==&apos; &apos;? &apos;none&apos; : &apos;button&apos;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band></Format></Formats>");
            this.div_otherInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,1320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basis.form.cbo_custSprCd","value","ds_dtl","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ctrl.form.cbo_crdStlAuthUseCd","value","ds_dtl","CRD_STL_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_ctrl.form.cbo_mngAuth","value","ds_dtl","MNG_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_ctrl.form.cbo_bgtAuth","value","ds_dtl","BGT_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_ctrl.form.cbo_adjAuth","value","ds_dtl","ADJ_AUTH_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_upper.form.Edit00","value","ds_dtl","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_upper.form.Edit00_00","value","ds_dtl","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_upper.form.Edit00_00_00","value","ds_dtl","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basis.form.edt_lognId","value","ds_dtl","LOGN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basis.form.edt_mbrNm","value","ds_dtl","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basis.form.edt_jbposNm","value","ds_dtl","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basis.form.rdo_utAgreYn","value","ds_dtl","UT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basis.form.rdo_cltAgreYn","value","ds_dtl","CLT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_basis.form.chk_charRcvAgreYn","value","ds_dtl","CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_basis.form.chk_mailRcvAgreYn","value","ds_dtl","MAIL_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_addr.form.edt_zpCd","value","ds_dtl","ZP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_addr.form.edt_reprAddr","value","ds_dtl","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_addr.form.Edit00_00_00","value","ds_dtl","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_addr.form.edt_telNo","value","ds_dtl","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_addr.form.edt_hpNo","value","ds_dtl","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_addr.form.edt_emailAddr1","value","ds_dtl","EMAIL_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_deliver.form.edt_dlvZpCd","value","ds_dtl","DLV_ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_deliver.form.edt_dlvReprAddr","value","ds_dtl","DLV_REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_deliver.form.Edit00_00_00","value","ds_dtl","DLV_DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_ctrl.form.Radio00","value","ds_dtl","APRV_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_ctrl.form.Radio00_00","value","ds_dtl","ORD_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_ctrl.form.rdo_taxinvAuthUseYn","value","ds_dtl","TAXINV_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_ctrl.form.rdo_crdStlAuthUseYn","value","ds_dtl","CRD_STL_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_ctrl.form.rdo_giAuthUseYn","value","ds_dtl","GI_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_ctrl.form.edt_mngAuth","value","ds_dtl","MNG_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_ctrl.form.edt_bgtAuth","value","ds_dtl","BGT_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_ctrl.form.edt_adjAuth","value","ds_dtl","ADJ_AUTH_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_basis.form.chk_mktgCharRcvAgreYn","value","ds_dtl","MKTG_CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_basis.form.chk_mktgMailRcvAgreYn","value","ds_dtl","MKTG_MAIL_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_basis.form.rdo_joinPathCd","value","ds_dtl","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_basis.form.edt_mroMbrNm","value","ds_dtl","MRO_MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_upper.form.Edit00_01","value","ds_dtl","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_upper.form.Edit00_00_01","value","ds_dtl","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_upper.form.Edit00_00_00_00","value","ds_dtl","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_reg.form.cbo_mbrUseCd","value","ds_dtl","MBR_USE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_reg.form.edt_mbrId","value","ds_dtl","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_hst.form.Static00_02","text","ds_dtl","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_hst.form.Static00_02_00","text","ds_dtl","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_hst.form.Static00_02_00_00","text","ds_dtl","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_hst.form.Static00_02_01","text","ds_dtl","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_ctrl.form.edt_ucessdiId","value","ds_dtl","TAXINV_LOGN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_addr.form.edt_emailAddr2","value","ds_dtl","EMAIL_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basis.form.edt_mroMbrId","value","ds_dtl","MRO_MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ctrl.form.edt_mngAuthId","value","ds_dtl","MNG_AUTH_OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_ctrl.form.edt_bgtAuthId","value","ds_dtl","BGT_AUTH_OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_ctrl.form.edt_adjAuthId","value","ds_dtl","ADJ_AUTH_OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_ctrl.form.sta_giAuthUseNm","text","ds_dtl","GI_AUTH_USE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_addr.form.edt_certYn","value","ds_dtl","OSF_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_addr.form.edt_certDtm","value","ds_dtl","OSF_CERT_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_basis.form.JOIN_DEVI_CD","visible","ds_dtl","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_ctrl.form.Radio00_00_00","value","ds_dtl","CHM_MTL_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_15.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_15.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_15.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //콤보박스 코드 조회
        this.fn_searchCode = function()	{
        	var sSvcId = "selectCodeList";
        	var sUrl = "/bo/cust/mbr/selectMbrRegCodeList.do";
        	var inDs = "";
        	var outDs = "ds_codeList=ds_codeList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //고객유형 조회
        this.fn_searchCustSprCd = function()	{
        	var sSvcId = "selectCustSprCd";
        	var sUrl = "/bo/cust/mbr/selectMbrRegCustSprCd.do";
        	var inDs = "ds_search=ds_search ds_otherInfo=ds_otherInfo";
        	var outDs = "ds_temp=ds_temp";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //아이디 중복 조회
        this.searchDupId = function()	{
        	var sSvcId = "selectDupId";
        	var sUrl = "/bo/cust/mbr/selectMbrRegDupCheck.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dupId=ds_dupId";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //상세정보 조회
        this.fn_searchDtl = function()	{
        	var sSvcId = "selectDtl";
        	var sUrl = "/bo/cust/mbr/selectMbrRegDtl.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dtl=ds_dtl ds_aprvlList=ds_aprvlList ds_orderList=ds_orderList ds_otherInfo=ds_otherInfo";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_insert = function()	{
        	var sSvcId = "insertDtl";
        	var sUrl = "/bo/cust/mbr/insertMbrRegDtl.do";
        	var inDs = "ds_dtl=ds_dtl ds_otherInfo=ds_otherInfo";
        	var outDs = "ds_search=ds_search";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //수정
        this.fn_update = function()	{
        	var sSvcId = "updateDtl";
        	var sUrl = "/bo/cust/mbr/updateMbrRegDtl.do";
        	var inDs = "ds_dtl=ds_dtl ds_aprvlList=ds_aprvlList ds_orderList=ds_orderList ds_otherInfo=ds_otherInfo";
        	var outDs = "ds_resMap=ds_resMap";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode == -1) {
        		alert(this.fn_getMessage("ERRC000058"));
        	}
        	else {
        		if(svcID == "selectCodeList") { //콤보박스 코드 조회
        			var nRow = 0;
        			for(i=0; i<this.ds_codeList.getRowCount(); i++) {
        				if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "CRD_STL_AUTH_USE_CD") {
        					nRow = this.ds_crdStlAuthUseCd.addRow();
        					this.ds_crdStlAuthUseCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_crdStlAuthUseCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        				else if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "CUST_SPR_CD") {
        					nRow = this.ds_custSprCd.addRow();
        					this.ds_custSprCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_custSprCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        				else if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "BGT_AUTH_USE_CD") {
        					nRow = this.ds_bgtAuthUseCd.addRow();
        					this.ds_bgtAuthUseCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_bgtAuthUseCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        				else if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "ADJ_AUTH_USE_CD") {
        					nRow = this.ds_adjAuthUseCd.addRow();
        					this.ds_adjAuthUseCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_adjAuthUseCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        				else if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "MNG_AUTH_USE_CD") {
        					nRow = this.ds_mngAuthUseCd.addRow();
        					this.ds_mngAuthUseCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_mngAuthUseCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        				else if(this.ds_codeList.getColumn(i,"COM_CLSF_CD") == "MBR_USE_CD") {
        					nRow = this.ds_mbrUseCd.addRow();
        					this.ds_mbrUseCd.setColumn(nRow,"COM_DTL_CD", this.ds_codeList.getColumn(i,"COM_DTL_CD"));
        					this.ds_mbrUseCd.setColumn(nRow,"COM_DTL_CD_NM", this.ds_codeList.getColumn(i,"COM_DTL_CD_NM"));
        				}
        			}

        			//관리,예산,정산권한 미사용 항목 추가
        			this.ds_mngAuthUseCd.insertRow(0);
        			this.ds_mngAuthUseCd.setColumn(0,"COM_DTL_CD","");
        			this.ds_mngAuthUseCd.setColumn(0,"COM_DTL_CD_NM","미사용");
        			this.ds_adjAuthUseCd.insertRow(0);
        			this.ds_adjAuthUseCd.setColumn(0,"COM_DTL_CD","");
        			this.ds_adjAuthUseCd.setColumn(0,"COM_DTL_CD_NM","미사용");
        			this.ds_bgtAuthUseCd.insertRow(0);
        			this.ds_bgtAuthUseCd.setColumn(0,"COM_DTL_CD","");
        			this.ds_bgtAuthUseCd.setColumn(0,"COM_DTL_CD_NM","미사용");


        			//if(!this.gfn_isNull(this.ds_search.getColumn(0,"CO_CD")) && !this.gfn_isNull(this.ds_search.getColumn(0,"MBR_ID"))) { //목록에서 넘겨준 파라미터 셋팅
        				this.fn_searchDtl(); // 회원 조회
        			//}
        			//else { //이화면이 상세화면이라 아래 분기 로직은 타지 않음
        			//	this.fn_enableFormObjects(false, this.div_basis, ["edt_lognId","edt_mbrNm","rdo_cltAgreYn","btn_DupId"]);
        			//	this.fn_enableFormObjects(false, this.div_addr, null);
        			//	this.fn_enableFormObjects(false, this.div_ctrl, null);
        			//	this.fn_enableFormObjects(false, this.div_appv, null);
        			//	this.fn_enableFormObjects(false, this.div_order, null);

        			//	//결제자, 발주자 첫행 추가
        			//	this.ds_aprvlList.addRow();
        			//	this.fn_setAprvSeq();
        			//	this.ds_orderList.addRow();
        			//}

        		}
        		else if(svcID == "selectDupId") { //로그인 ID중복 체크
        			if(Number(this.ds_dupId.getColumn(0,"CNT")) > 0) {
        				this.div_basis.form.sta_dupIdMsg.set_text("이미 사용중인 ID입니다.");
        				this.div_basis.form.sta_dupIdMsg.set_color("red");
        				this.ds_dtl.setColumn(0,"LOGN_ID_DUP_YN","");
        			}
        			else {
        				this.div_basis.form.sta_dupIdMsg.set_text("사용할 수 있는 ID입니다.");
        				this.div_basis.form.sta_dupIdMsg.set_color("black");
        				this.ds_dtl.setColumn(0,"LOGN_ID_DUP_YN","Y");
        			}

        		}
        		else if(svcID == "selectCustSprCd") { //고객유형 조회
        			this.ds_dtl.setColumn(0,"CUST_SPR_CD",this.ds_temp.getColumn(0,"CUST_SPR_CD"));
        		}
        		else if(svcID == "selectDtl") { //상세정보 조회
        			var emailAddr = this.ds_dtl.getColumn(0,"EMAIL_ADDR");
        			if(!this.gfn_isNull(emailAddr)) {
        				var sp = emailAddr.split('@');
        				this.ds_dtl.setColumn(0,"EMAIL_ADDR1", sp[0]);
        				this.ds_dtl.setColumn(0,"EMAIL_ADDR2", sp[1]);
        			}
        			var osfCertYn = this.ds_dtl.getColumn(0,"OSF_CERT_YN");
        			var corpHpYn = this.ds_dtl.getColumn(0,"CORP_HP_YN");
        			var frnrNmHpYn = this.ds_dtl.getColumn(0,"FRNR_NM_HP_YN");
        			if(osfCertYn=="N" && corpHpYn =="N" && frnrNmHpYn=="N"){
        				this.ds_dtl.setColumn(0,"OSF_CERT_YN","미인증");
        			}else if(osfCertYn=="Y" && corpHpYn =="N" && frnrNmHpYn=="N"){
        				this.ds_dtl.setColumn(0,"OSF_CERT_YN","인증");
        			}else if(osfCertYn=="N" && corpHpYn =="Y" && frnrNmHpYn=="N"){
        				this.ds_dtl.setColumn(0,"OSF_CERT_YN","기타(법인)");
        			}else if(osfCertYn=="N" && corpHpYn =="N" && frnrNmHpYn=="Y"){
        				this.ds_dtl.setColumn(0,"OSF_CERT_YN","기타(외국)");
        			}
        			var osfCertDtm = this.ds_dtl.getColumn(0,"OSF_CERT_DTM");
        			var joinDeviCd = this.ds_dtl.getColumn(0,"JOIN_DEVI_CD");

        			if(joinDeviCd=="M"){
        				this.div_basis.form.JOIN_DEVI_CD.set_text("(Mobile)");
        			}else{
        				this.ds_dtl.setColumn(0,"JOIN_DEVI_CD","");
        			}


        			if(!this.gfn_isNull(osfCertDtm)){
        				this.ds_dtl.setColumn(0,"OSF_CERT_DTM",osfCertDtm);
        			}

        			//관리,예산,정산권한 값이 없을시 미사용 선택
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD"))) this.div_ctrl.form.cbo_mngAuth.set_index(0) ;
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD"))) this.div_ctrl.form.cbo_bgtAuth.set_index(0) ;
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD"))) this.div_ctrl.form.cbo_adjAuth.set_index(0) ;

        			//결제자 첫행 추가
        			if(this.ds_aprvlList.getRowCount() < 1) {
        				this.ds_aprvlList.addRow();
        				this.fn_setAprvSeq();
        			}
        			//발주자 첫행 추가
        			if(this.ds_orderList.getRowCount() < 1) {
        				this.ds_orderList.addRow();
        			}

        			/*입고권한 설정*/
        			var giAuthUseYn = "";
        			var giAuthUseArr1 = null;
        			var giAuthUseArr2 = null;
        			var giAuthUseRet = "";

        			giAuthUseYn = this.ds_dtl.getColumn(0,"GI_AUTH_USE_YN");
        			if(!this.gfn_isNull(giAuthUseYn)) {
        				giAuthUseArr1 = giAuthUseYn.split(':');

        				if(giAuthUseArr1.length > 0) {
        					if(!this.gfn_isNull(giAuthUseArr1[1])) {
        						giAuthUseArr2 = giAuthUseArr1[1].split(',');

        						giAuthUseRet = "(";
        						for(j=0; j<giAuthUseArr2.length; j++) {
        							if(giAuthUseArr2[j] == "1") giAuthUseRet = giAuthUseRet + " " + "운영단위,";
        							if(giAuthUseArr2[j] == "2") giAuthUseRet = giAuthUseRet + " " + "부서입고책임자,";
        							if(giAuthUseArr2[j] == "3") giAuthUseRet = giAuthUseRet + " " + "최종결재자,";
        							if(giAuthUseArr2[j] == "4") giAuthUseRet = giAuthUseRet + " " + "최종발주자,";
        							if(giAuthUseArr2[j] == "5") giAuthUseRet = giAuthUseRet + " " + "주문자,";
        						}

        						giAuthUseRet = giAuthUseRet.replace(/,\s*$/, "") + ")";
        					}
        				}

        				this.ds_dtl.setColumn(0,"GI_AUTH_USE_YN", giAuthUseArr1[0]);
        				this.ds_dtl.setColumn(0,"GI_AUTH_USE_NM", giAuthUseRet);
        			}
        			/*입고권한 설정*/

        			/* 입력, 버튼 컨트롤 활성화 or 비활성화 처리 */
        			if(this.ds_dtl.getColumn(0,"CLT_AGRE_YN") == "Y") { //개인정보수집동의여부가 "Y"일때
        				if(this.ds_dtl.getColumn(0,"MBR_USE_CD") == "L" || this.ds_dtl.getColumn(0,"MBR_USE_CD") == "Q") { //휴면 또는 탈퇴 회원인 경우
        					this.div_reg.form.cbo_mbrUseCd.set_enable(false);

        					this.fn_enableFormObjects(false, this.div_basis, null);
        					this.fn_enableFormObjects(false, this.div_ctrl, null);
        					this.fn_enableFormObjects(false, this.div_addr, ["edt_telNo", "edt_hpNo", "edt_emailAddr1", "edt_emailAddr2"]);
        					this.fn_enableFormObjects(false, this.div_ctrl, null);
        					this.fn_enableFormObjects(false, this.div_appv, null);
        					this.fn_enableFormObjects(false, this.div_order, null);
        				}
        				else { //휴면 또는 탈퇴 회원이 아닌 경우
        					this.div_reg.form.cbo_mbrUseCd.set_enable(true);
        					this.ds_mbrUseCd.deleteMultiRows(this.ds_mbrUseCd.extractRows("COM_DTL_CD=='L' || COM_DTL_CD=='Q'")); //휴면과 탈퇴처리할 수 없도록 휴면과 탈퇴항목은 제거

        					var notEnableBasisComp = ["cbo_custSprCd", "rdo_utAgreYn", "rdo_cltAgreYn", "edt_lognId", "rdo_joinPathCd", "edt_mroMbrNm"];

        					if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"TAXINV_LOGN_ID"))) { //세금계산서 담당 UCESSDI ID가 있을 경우, 로그인 ID 변경 불가 처리
        						notEnableBasisComp.push("btn_DupId");
        						this.div_basis.form.sta_dupIdMsg.set_color("red");
        						this.div_basis.form.sta_dupIdMsg.set_text("* UCESSDI ID가 있을 경우 로그인ID 변경 불가");
        						this.div_ctrl.form.sta_dupIdMsg_2.set_color("red");
        						this.div_ctrl.form.sta_dupIdMsg_2.set_text("* 전화번호가 공란일 경우, UCESSDI 시스템에 ID가 등록되지 않습니다.");
        					}

        					/* 20220712 주석처리 요청
        					if(this.ds_dtl.getColumn(0,"TRSF_YN") != "Y") { //운영단위 이관여부에 따라 s-mro 아이디 활성화 처리
        						notEnableBasisComp.push("btn_mroMbrId");
        						notEnableBasisComp.push("btn_mroMbrIdMemo");
        					}
        					*/

        					this.fn_enableFormObjects(true, this.div_basis, notEnableBasisComp);
        					this.fn_enableFormObjects(true, this.div_addr, ["edt_zpCd","edt_reprAddr","edt_certYn","edt_certDtm"]);
        					if(this.ds_dtl.getColumn(0,"CUST_SPR_CD") == "30") { //고객유형이 일반고객(30)이면 제어권한 비활성화
        						this.fn_enableFormObjects(false, this.div_ctrl, null);
        					}
        					else {
        						this.fn_enableFormObjects(true, this.div_ctrl, ["edt_ucessdiId", "edt_mngAuth", "edt_bgtAuth", "edt_adjAuth", "rdo_giAuthUseYn"]);

        						//카드결제사용여부가 공백일때는 "N"으로 설정
        						if(this.gfn_isNull(this.ds_dtl.getColumn(0,"CRD_STL_AUTH_USE_YN"))) this.ds_dtl.setColumn(0,"CRD_STL_AUTH_USE_YN", "N");
        						//카드결제사용여부에 따라 카드결제사용콤보 활성화 처리
        						if(this.ds_dtl.getColumn(0,"CRD_STL_AUTH_USE_YN") == "Y") this.div_ctrl.form.cbo_crdStlAuthUseCd.set_enable(true);
        						else this.div_ctrl.form.cbo_crdStlAuthUseCd.set_enable(false);
        					}
        					if(this.ds_dtl.getColumn(0,"OPR_UNIT_APRV_AUTH_USE_YN") == "Y") { /*운영단위 결재권한사용여부*/
        						this.fn_enableFormObjects(true, this.div_appv, null);
        					}
        					else {
        						this.fn_enableFormObjects(false, this.div_appv, null);
        					}
        					if(this.ds_dtl.getColumn(0,"OPR_UNIT_ORD_AUTH_USE_YN") == "Y") { /*운영단위 발주권한사용여부*/
        						this.fn_enableFormObjects(true, this.div_order, null);
        					}
        					else {
        						this.fn_enableFormObjects(false, this.div_order, null);
        					}

        					//관리권한 운영단위 버튼 활성화처리
        					this.fn_enableBtnMngAuth();
        					//예산권한 운영단위 버튼 활성화처리
        					this.fn_enableBtnBgtAuth();
        					//정산권한 운영단위 버튼 활성화처리
        					this.fn_enableBtnAdjAuth();
        				}
        			}

        			else {
        				this.div_reg.form.cbo_mbrUseCd.set_enable(false);
        				this.fn_enableFormObjects(false, this.div_basis, ["edt_mbrNm","btn_mroMbrId","btn_mroMbrIdMemo"]);
        				this.fn_enableFormObjects(false, this.div_addr, ["edt_telNo", "edt_hpNo", "edt_emailAddr1", "edt_emailAddr2"]);
        				this.fn_enableFormObjects(false, this.div_ctrl, null);
        				this.fn_enableFormObjects(false, this.div_appv, null);
        				this.fn_enableFormObjects(false, this.div_order, null);

        			}
        		}
        		else if(svcID == "insertDtl") { //저장
        			alert(this.fn_getMessage("ERRC000081"));
        			this.div_basis.form.sta_dupIdMsg.set_text("");
        			this.div_ctrl.form.sta_dupIdMsg_2.set_text("");
        			this.fn_searchDtl();
        		}
        		else if(svcID == "updateDtl") { //수정
        			alert(this.ds_resMap.getColumn(0,"msg")); //서버측에서 전달받은 결과메세지 출력
        			this.div_basis.form.sta_dupIdMsg.set_text("");
        			this.fn_searchDtl();
        		}

        	}
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	this.fn_searchCode(); //콤보코드 조회
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //결재차수 설정
        this.fn_setAprvSeq = function() {
        	for(i=0; i<this.ds_aprvlList.getRowCount(); i++) {
        		this.ds_aprvlList.setColumn(i, "APRV_SEQ", (i+1));
        		this.ds_aprvlList.setColumn(i, "APRV_SEQ_NM", (i+1)+"차");
        	}
        }
        //관리권한 운영단위 버튼 활성화처리
        this.fn_enableBtnMngAuth = function() {
        	if(this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")=="CLN" || this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")=="COR" || this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")=="GRP") { //사업장, 법인, 그룹 선택시 운영단위 지정 영역 출력
        		this.div_ctrl.form.btn_mngAuth.set_enable(true);
        		this.div_ctrl.form.btn_mngAuthMemo.set_enable(true);
        	}
        	else {
        		this.div_ctrl.form.btn_mngAuth.set_enable(false);
        		this.div_ctrl.form.btn_mngAuthMemo.set_enable(false);
        	}
        }
        //예산권한 운영단위 버튼 활성화처리
        this.fn_enableBtnBgtAuth = function() {
        	if(this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")=="CLN" || this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")=="COR" || this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")=="GRP") { //사업장, 법인, 그룹 선택시 운영단위 지정 영역 출력
        		this.div_ctrl.form.btn_bgtAuth.set_enable(true);
        		this.div_ctrl.form.btn_bgtAuthMemo.set_enable(true);
        	}
        	else {
        		this.div_ctrl.form.btn_bgtAuth.set_enable(false);
        		this.div_ctrl.form.btn_bgtAuthMemo.set_enable(false);
        	}
        }
        //정산권한 운영단위 버튼 활성화처리
        this.fn_enableBtnAdjAuth = function() {
        	if(this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")=="CLN" || this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")=="COR" || this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")=="GRP") { //사업장, 법인, 그룹 선택시 운영단위 지정 영역 출력
        		this.div_ctrl.form.btn_adjAuth.set_enable(true);
        		this.div_ctrl.form.btn_adjAuthMemo.set_enable(true);
        	}
        	else {
        		this.div_ctrl.form.btn_adjAuth.set_enable(false);
        		this.div_ctrl.form.btn_adjAuthMemo.set_enable(false);
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {

        	if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MBR_ID"))) {
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"DEPT_ID"))) {
        			alert(this.fn_getMessage("ERRC000008", "부서정보"));
        			return;
        		}
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"LOGN_ID"))) {
        			alert(this.fn_getMessage("ERRC000009", "회원 로그인ID"));
        			return;
        		}
        		if(this.ds_dtl.getColumn(0,"LOGN_ID_DUP_YN") != "Y") {
        			alert(this.fn_getMessage("ERRC000055"));
        			return;
        		}
        		if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MBR_NM"))) {
        			alert(this.fn_getMessage("ERRC000009", "회원명"));
        			return;
        		}
        		// SSP-1116 회원명 45byte 제한 처리 (배송지 수령인명관련 이슈)
        		var rcvrNm = this.ds_dtl.getColumn(0,"MBR_NM"); // 회원명
        		if ( this.getByteLength(rcvrNm) > 45 ) {
        			alert(this.fn_getMessage("ERRC000278")); // 회원명 최대입력길이는 45바이트 입니다.
        			return false;
        		}

        		if(!confirm(this.fn_getMessage("ERRC000080"))) return;

        		this.fn_insert();
        	}
        	else {
        		if(this.ds_dtl.getColumn(0,"CLT_AGRE_YN") == "Y") { //개인정보수집동의여부가 "Y"일때
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MBR_ID"))) {
        				alert(this.fn_getMessage("ERRC000009", "회원ID"));
        				return;
        			}
        			if(this.ds_dtl.getColumn(0,"LOGN_ID") != this.ds_dtl.getColumn(0,"LOGN_ID_ORG")) {
        				if(this.ds_dtl.getColumn(0,"LOGN_ID_DUP_YN") != "Y") {
        					alert(this.fn_getMessage("ERRC000055"));
        					return;
        				}
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MBR_NM"))) {
        				alert(this.fn_getMessage("ERRC000009", "회원명"));
        				return;
        			}
        			// SSP-1116 회원명 45byte 제한 처리 (배송지 수령인명관련 이슈)
        			var rcvrNm = this.ds_dtl.getColumn(0,"MBR_NM"); // 회원명
        			if ( this.getByteLength(rcvrNm) > 45 ) {
        				alert(this.fn_getMessage("ERRC000278")); // 회원명 최대입력길이는 45바이트 입니다.
        				return false;
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"ZP_CD"))) {
        				alert(this.fn_getMessage("ERRC000009", "우편번호"));
        				return;
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"REPR_ADDR"))) {
        				alert(this.fn_getMessage("ERRC000009", "대표주소"));
        				return;
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"DTL_ADDR"))) {
        				alert(this.fn_getMessage("ERRC000009", "상세주소"));
        				return;
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"TEL_NO")) && this.gfn_isNull(this.ds_dtl.getColumn(0,"HP_NO"))) {
        				alert(this.fn_getMessage("ERRC000009", "연락처"));
        				return;
        			}
        			if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"TEL_NO"))) {
        				if(this.ds_dtl.getColumn(0,"TEL_NO").length < 7) {
        					alert(this.fn_getMessage("ERRS000386", "연락처", "7자리"));
        					return;
        				}
        			}
        			if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"HP_NO"))) {
        				if(this.ds_dtl.getColumn(0,"HP_NO").length < 7) {
        					alert(this.fn_getMessage("ERRS000386", "연락처", "7자리"));
        					return;
        				}
        			}
        			//ssp-1764 둘중 하나가 없을 경우 값이 있는걸로 입력
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"TEL_NO"))){
        				this.ds_dtl.setColumn(0,"TEL_NO", this.ds_dtl.getColumn(0,"HP_NO"));
        			}
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"HP_NO"))){
        				this.ds_dtl.setColumn(0,"HP_NO", this.ds_dtl.getColumn(0,"TEL_NO"));
        			}

        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"EMAIL_ADDR1"))) {
        				alert(this.fn_getMessage("ERRC000009", "이메일"));
        				return;
        			}
        			/* 이메일 1자리 이상부터 입력가능 개선요건으로 공백만 체크
        			if(this.ds_dtl.getColumn(0,"EMAIL_ADDR1").length < 3) {
        				alert(this.fn_getMessage("ERRS000386", "이메일", "3자리"));
        				return;
        			}*/
        			if(this.ds_dtl.getColumn(0,"EMAIL_ADDR1").indexOf('@') > -1) {
        				alert("이메일주소에 '@' 입력할 수 없습니다.");
        				return;
        			}

        			// [2022.09.07] 박성근 SSP-800 이메일 오류사항 확인의 件
        			const PTN_ELOC=/^[a-z0-9]([-_\.]?[a-z0-9&+_\/])*$/i;
        			const PTN_EDOM=/^[a-z0-9][a-z0-9-]{0,61}[a-z0-9](?:\.[a-z]{2,})+$/i;
        			var emailAddr1=this.ds_dtl.getColumn(0,"EMAIL_ADDR1"), emailAddr2=this.ds_dtl.getColumn(0,"EMAIL_ADDR2");

        			// if(!(/^[0-9a-z]{1}[0-9a-z-_\.]{1,63}$/i).test(this.ds_dtl.getColumn(0,"EMAIL_ADDR1"))) {
        			if (!(PTN_ELOC).test(emailAddr1)) {
        				alert("정상적인 이메일 형식을 입력해주세요.");
        				this.div_addr.form.edt_emailAddr1.setFocus();
        			   return;
        			}
        			// /[2022.09.07] 박성근 SSP-800 이메일 오류사항 확인의 件

        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"EMAIL_ADDR2"))) {
        				alert(this.fn_getMessage("ERRC000009", "이메일"));
        				return;
        			}
        			if(this.ds_dtl.getColumn(0,"EMAIL_ADDR2").length < 3) {
        				alert(this.fn_getMessage("ERRS000386", "이메일", "3자리"));
        				return;
        			}
        			if(this.ds_dtl.getColumn(0,"EMAIL_ADDR2").indexOf('.') == -1) {
        				alert("이메일주소에 '.' 포함되어야 합니다.");
        				return;
        			}

        			// [2022.09.07] 박성근 SSP-800 이메일 오류사항 확인의 件
        			//if((/[^0-9a-zA-Z.]/gi).test(this.ds_dtl.getColumn(0,"EMAIL_ADDR2"))){
        			if (!(PTN_EDOM).test(emailAddr2)) {
        			   alert("정상적인 이메일 형식을 입력해주세요.");
        			   this.div_addr.form.edt_emailAddr2.setFocus();
        			   return;
        			}
        			// /[2022.09.07] 박성근 SSP-800 이메일 오류사항 확인의 件

        			if(this.ds_dtl.getColumn(0,"CRD_STL_AUTH_USE_YN") == "Y") {
        				if(this.gfn_isNull(this.ds_dtl.getColumn(0,"CRD_STL_AUTH_USE_CD"))) {
        					alert(this.fn_getMessage("ERRC000008", "카드결제권한사용코드"));
        					return;
        				}
        			}

        			if(this.ds_aprvlList.getRowCount() < 1) {
        				alert("결재자가 없습니다.");
        				return;
        			}

        			if(this.ds_orderList.getRowCount() < 1) {
        				alert("발주자가 없습니다.");
        				return;
        			}

        			if(this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")!="CLN" && this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")!="COR" && this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")!="GRP") { //사업장, 법인, 그룹이 아닐시 운영단위 입력 불가
        				if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"MNG_AUTH_OPR_UNIT_ID"))) {
        					alert("관리권한에 사업장, 법인, 그룹이 아닐시 운영단위를 입력할 수 없습니다.");
        					return;
        				}
        			}

        			if(this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")!="CLN" && this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")!="COR" && this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")!="GRP") { //사업장, 법인, 그룹이 아닐시 운영단위 입력 불가
        				if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"BGT_AUTH_OPR_UNIT_ID"))) {
        					alert("예산권한에 사업장, 법인, 그룹이 아닐시 운영단위를 입력할 수 없습니다.");
        					return;
        				}
        			}

        			if(this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")!="CLN" && this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")!="COR" && this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")!="GRP") { //사업장, 법인, 그룹이 아닐시 운영단위 입력 불가
        				if(!this.gfn_isNull(this.ds_dtl.getColumn(0,"ADJ_AUTH_OPR_UNIT_ID"))) {
        					alert("정산권한에 사업장, 법인, 그룹이 아닐시 운영단위를 입력할 수 없습니다.");
        					return;
        				}
        			}

        			for(i=0; i<this.ds_orderList.getRowCount(); i++) {
        				if(!this.gfn_isNull(this.ds_orderList.getColumn(i,"APRVR_ID")) && this.gfn_isNull(this.ds_orderList.getColumn(i,"APRV_SEQ"))) {
        					alert(this.fn_getMessage("ERRC000008", "결제차수"));
        					return;
        				}
        			}
        		}
        		else {
        			if(this.gfn_isNull(this.ds_dtl.getColumn(0,"MBR_NM"))) {
        				alert(this.fn_getMessage("ERRC000009", "회원명"));
        				return;
        			}
        			// SSP-1116 회원명 45byte 제한 처리 (배송지 수령인명관련 이슈)
        			var rcvrNm = this.ds_dtl.getColumn(0,"MBR_NM"); // 회원명
        			if ( this.getByteLength(rcvrNm) > 45 ) {
        				alert(this.fn_getMessage("ERRC000278")); // 회원명 최대입력길이는 45바이트 입니다.
        				return false;
        			}
        		}

        		if(!confirm(this.fn_getMessage("ERRC000052"))) return;

        		this.fn_update();
        	}

        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000087"))) return;

        	this.parent.parent.parent.close();
        };

        this.btn_dept_onclick = function(obj,e)
        {
        	var params = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_dtl.getColumn(0,"BZPLC_ID")
        			,oprUnitId : this.ds_dtl.getColumn(0,"OPR_UNIT_ID")
        		}
        	this.gfn_openPopup("deptPop", "CC::SSP_BO_PP_39.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_dtl.setColumn(0,"DEPT_ID",retObj.DEPT_ID);
        		this.ds_dtl.setColumn(0,"DEPT_NM",retObj.DEPT_NM);

        		//부서정보는 수정가능하나, 사업장 및 운영단위는 수정 불가라 주석처리
        		//this.ds_dtl.setColumn(0,"BZPLC_ID",retObj.BZPLC_ID);
        		//this.ds_dtl.setColumn(0,"BZPLC_NM",retObj.BZPLC_NM);
        		this.ds_dtl.setColumn(0,"OPR_UNIT_ID",retObj.OPR_UNIT_ID);
        		this.ds_dtl.setColumn(0,"OPR_UNIT_NM",retObj.OPR_UNIT_NM);

        		//고객유형조회
        		//this.ds_search.setColumn(0,"BZPLC_ID",this.ds_dtl.getColumn(0,"BZPLC_ID"));
        		//this.ds_search.setColumn(0,"OPR_UNIT_ID",this.ds_dtl.getColumn(0,"OPR_UNIT_ID"));
        		//this.fn_searchCustSprCd();

        	}, {titlebar:"true"});
        };
        //회원중복 체크
        this.btn_DupId_onclick = function(obj,e)
        {
        	//ID변경시 버튼명을 중복확인으로 변경하고, 중복확인 버튼을 클릭시 로그인아이디 중복체크
        	if(obj.text == "ID 변경") {
        		this.div_basis.form.edt_lognId.set_readonly(false);
        		obj.set_text("중복확인");
        		this.ds_dtl.setColumn(0,"LOGN_ID","");
        		this.ds_dtl.setColumn(0,"LOGN_ID_DUP_YN","");
        		return;
        	}

        	this.div_basis.form.sta_dupIdMsg.set_text("");
        	this.div_basis.form.sta_dupIdMsg.set_color("black");
        	this.ds_dtl.setColumn(0,"LOGN_ID_DUP_YN","");

        	this.ds_search.setColumn(0,"LOGN_ID",this.ds_dtl.getColumn(0,"LOGN_ID"));

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"LOGN_ID"))) {
        		alert(this.fn_getMessage("ERRC000009", "회원ID"));
        		return;
        	}
        	if(this.gfn_lengthByte(this.ds_search.getColumn(0,"LOGN_ID")) > 80) {
        		alert(this.fn_getMessage("ERRC000100"));
        		return;
        	}
        	if(!this.fn_validateLoginId(this.ds_search.getColumn(0,"LOGN_ID"))) {
        		alert(this.fn_getMessage("ERRC000236"));
        		return;
        	}

        	this.searchDupId();
        };
        //PW 초기화버튼
        this.btn_DupPw_onclick = function(obj,e)
        {
        	this.gfn_openPopup("pw_reset", "CC::SSP_BO_MA_16.xfdl", null, function(sPopupId, sRetValue) {
                		var retObj = JSON.parse(sRetValue);
                		this.ds_dtl.setColumn(0,"UPDPSN_NM",retObj.UPDPSN_NM);
                		this.ds_dtl.setColumn(0,"UPD_DTM",retObj.UPD_DTM);

                	}, {title:"PW 초기화"});

        };
        //우편번호 팝업
        this.btn_zpCd_onclick = function(obj,e)
        {
        	this.gfn_openPopup("zpCdPop", "CO_POP::SSP_BO_PP_28.xfdl", null, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);

        		this.ds_dtl.setColumn(0,"ZP_CD",retObj.ZIP_NO);
        		this.ds_dtl.setColumn(0,"REPR_ADDR",retObj.ADDR);
        	}, {titlebar:"true"});
        };

        //관리권한 운영단위
        this.btn_mngAuth_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_dtl.getColumn(0,"CO_CD")
        					, bzplcId : this.ds_dtl.getColumn(0,"BZPLC_ID")
        					, AUTH_USE_CD : this.ds_dtl.getColumn(0,"MNG_AUTH_USE_CD")}
        	this.gfn_openPopup("oprUnitPop", "CO_POP::SSP_BO_PP_23.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		var coCd = "";
        		var bzplcId = "";
        		var oprId = "";
        		var oprNm = "";
        		for(i=0; i<retObj.length; i++) {
        			var rowData = JSON.parse(retObj[i]);
        			coCd += rowData.CO_CD + ",";
        			bzplcId += rowData.OPR_BZPLC_ID + ",";
        			oprId += rowData.OPR_UNIT_ID + ",";
        			oprNm += rowData.OPR_UNIT_NM + "(" + rowData.OPR_UNIT_ID + "),";
        		}
        		this.ds_dtl.setColumn(0,"MNG_AUTH_CO_CD",coCd.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_BZPLC_ID",bzplcId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_ID",oprId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_NM",oprNm.replace(/,\s*$/, ""));
        	}, {titlebar:"true"});
        };
        //예산권한 운영단위
        this.btn_bgtAuth_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_dtl.getColumn(0,"CO_CD")
        					, bzplcId : this.ds_dtl.getColumn(0,"BZPLC_ID")
        					, AUTH_USE_CD : this.ds_dtl.getColumn(0,"BGT_AUTH_USE_CD")}
        	this.gfn_openPopup("oprUnitPop", "CO_POP::SSP_BO_PP_23.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		var coCd = "";
        		var bzplcId = "";
        		var oprId = "";
        		var oprNm = "";
        		for(i=0; i<retObj.length; i++) {
        			var rowData = JSON.parse(retObj[i]);
        			coCd += rowData.CO_CD + ",";
        			bzplcId += rowData.OPR_BZPLC_ID + ",";
        			oprId += rowData.OPR_UNIT_ID + ",";
        			oprNm += rowData.OPR_UNIT_NM + "(" + rowData.OPR_UNIT_ID + "),";
        		}
        		this.ds_dtl.setColumn(0,"BGT_AUTH_CO_CD",coCd.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_BZPLC_ID",bzplcId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_ID",oprId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_NM",oprNm.replace(/,\s*$/, ""));
        	}, {titlebar:"true"});

        };
        //정산권한 운영단위
        this.btn_adjAuth_onclick = function(obj,e)
        {
        	var params = { coCd : this.ds_dtl.getColumn(0,"CO_CD")
        					, bzplcId : this.ds_dtl.getColumn(0,"BZPLC_ID")
        					, AUTH_USE_CD : this.ds_dtl.getColumn(0,"ADJ_AUTH_USE_CD")}
        	this.gfn_openPopup("oprUnitPop", "CO_POP::SSP_BO_PP_23.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		var coCd = "";
        		var bzplcId = "";
        		var oprId = "";
        		var oprNm = "";
        		for(i=0; i<retObj.length; i++) {
        			var rowData = JSON.parse(retObj[i]);
        			coCd += rowData.CO_CD + ",";
        			bzplcId += rowData.OPR_BZPLC_ID + ",";
        			oprId += rowData.OPR_UNIT_ID + ",";
        			oprNm += rowData.OPR_UNIT_NM + "(" + rowData.OPR_UNIT_ID + "),";
        		}
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_CO_CD",coCd.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_BZPLC_ID",bzplcId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_ID",oprId.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_NM",oprNm.replace(/,\s*$/, ""));
        	}, {titlebar:"true"});

        };

        this.btn_appvAdd_onclick = function(obj,e)
        {
        	if(this.ds_aprvlList.getRowCount() == 10) {
        		alert(this.fn_getMessage("ERRC000017"));
        		return;
        	}
        	this.ds_aprvlList.addRow();

        	//결재차수 설정
        	this.fn_setAprvSeq();
        };

        this.btn_appvDel_onclick = function(obj,e)
        {
        	this.ds_aprvlList.deleteRow(this.ds_aprvlList.rowposition);

        	//결재차수 설정
        	this.fn_setAprvSeq();
        };

        this.btn_orderAdd_onclick = function(obj,e)
        {
        	this.ds_orderList.addRow();
        };

        this.btn_orderDel_onclick = function(obj,e)
        {
        	this.ds_orderList.deleteRow(this.ds_orderList.rowposition);
        };

        this.grd_aprvlList_onexpanddown = function(obj,e)
        {
        	if(e.col == 6) {
        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcId: this.ds_dtl.getColumn(0,"BZPLC_ID"),
        			aprvAuthUseYn: "Y" //결재권한
        		};
        		this.gfn_openPopup("mbrPop", "CO_POP::SSP_BO_PP_24.xfdl", objParam, function(sPopupId, sRetValue) {
        			var retObj = JSON.parse(sRetValue);
        			this.ds_aprvlList.setColumn(e.row,"BZPLC_ID", retObj.BZPLC_ID);
        			this.ds_aprvlList.setColumn(e.row,"BZPLC_NM", retObj.BZPLC_NM);
        			this.ds_aprvlList.setColumn(e.row,"DEPT_ID", retObj.DEPT_ID);
        			this.ds_aprvlList.setColumn(e.row,"DEPT_NM", retObj.DEPT_NM);
        			this.ds_aprvlList.setColumn(e.row,"APRVR_ID", retObj.MBR_ID);
        			this.ds_aprvlList.setColumn(e.row,"APRVR_NM", retObj.MBR_NM);
        		}, {titlebar:"true"});
        	}
        };

        this.grd_orderList_onexpanddown = function(obj,e)
        {
        	if(e.col == 6) {
        		var objParam = {
        			coCd : this.fv_sessionData.coCd,
        			bzplcId: this.ds_dtl.getColumn(0,"BZPLC_ID"),
        			ordAuthUseYn: "Y" //발주권한
        		};
        		this.gfn_openPopup("mbrPop", "CO_POP::SSP_BO_PP_24.xfdl", objParam, function(sPopupId, sRetValue) {
        			var retObj = JSON.parse(sRetValue);
        			this.ds_orderList.setColumn(e.row,"BZPLC_ID", retObj.BZPLC_ID);
        			this.ds_orderList.setColumn(e.row,"BZPLC_NM", retObj.BZPLC_NM);
        			this.ds_orderList.setColumn(e.row,"DEPT_ID", retObj.DEPT_ID);
        			this.ds_orderList.setColumn(e.row,"DEPT_NM", retObj.DEPT_NM);
        			this.ds_orderList.setColumn(e.row,"APRVR_ID", retObj.MBR_ID);
        			this.ds_orderList.setColumn(e.row,"APRVR_NM", retObj.MBR_NM);
        		}, {titlebar:"true"});
        	}
        };


        this.rdo_taxinvAuthUseYn_onitemchanged = function(obj,e)
        {

        };

        //카드결재사용여부 라디오버튼 변경
        this.rdo_crdStlAuthUseYn_onitemchanged = function(obj,e)
        {
        	this.div_ctrl.form.cbo_crdStlAuthUseCd.set_index(-1);

        	if(e.postvalue == "Y") this.div_ctrl.form.cbo_crdStlAuthUseCd.set_enable(true);
        	else this.div_ctrl.form.cbo_crdStlAuthUseCd.set_enable(false);
        };

        //관리권한 콤보 변경시
        this.cbo_mngAuth_onitemchanged = function(obj,e)
        {
        	this.ds_dtl.setColumn(0,"MNG_AUTH_CO_CD","");
        	this.ds_dtl.setColumn(0,"MNG_AUTH_BZPLC_ID","");
        	this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_ID","");
        	this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_NM","");

        	this.fn_enableBtnMngAuth(); //관리권한 운영단위 버튼 활성화처리
        };
        //예산권한 콤보 변경시
        this.cbo_bgtAuth_onitemchanged = function(obj,e)
        {
        	this.ds_dtl.setColumn(0,"BGT_AUTH_CO_CD","");
        	this.ds_dtl.setColumn(0,"BGT_AUTH_BZPLC_ID","");
        	this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_ID","");
        	this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_NM","");

        	this.fn_enableBtnBgtAuth();	//예산권한 운영단위 버튼 활성화처리
        };
        //정산권한 콤보 변경시
        this.cbo_adjAuth_onitemchanged = function(obj,e)
        {
        	this.ds_dtl.setColumn(0,"ADJ_AUTH_CO_CD","");
        	this.ds_dtl.setColumn(0,"ADJ_AUTH_BZPLC_ID","");
        	this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_ID","");
        	this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_NM","");

        	this.fn_enableBtnAdjAuth(); //정산권한 운영단위 버튼 활성화처리
        };
        //관리권한 메모
        this.btn_mngAuthMemo_onclick = function(obj,e)
        {
        	var params = {	textId : this.div_ctrl.form.edt_mngAuthId };

        	var options = {title : "관리권한"};
        	this.gfn_openPopup("mngAuthMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_dtl.setColumn(0,"MNG_AUTH_CO_CD",this.ds_dtl.getColumn(0,"CO_CD"));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_BZPLC_ID",this.ds_dtl.getColumn(0,"BZPLC_ID"));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"MNG_AUTH_OPR_UNIT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);
        };
        //예산권한 메모
        this.btn_bgtAuthMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.div_ctrl.form.edt_bgtAuthId };

        	var options = {title : "예산권한"};
        	this.gfn_openPopup("bgtAuthMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_dtl.setColumn(0,"BGT_AUTH_CO_CD",this.ds_dtl.getColumn(0,"CO_CD"));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_BZPLC_ID",this.ds_dtl.getColumn(0,"BZPLC_ID"));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"BGT_AUTH_OPR_UNIT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);
        };
        //정산권한 메모
        this.btn_adjAuthMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.div_ctrl.form.edt_adjAuthId };

        	var options = {title : "정산권한"};
        	this.gfn_openPopup("adjAuthMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_dtl.setColumn(0,"ADJ_AUTH_CO_CD",this.ds_dtl.getColumn(0,"CO_CD"));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_BZPLC_ID",this.ds_dtl.getColumn(0,"BZPLC_ID"));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"ADJ_AUTH_OPR_UNIT_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);
        };

        this.btn_hstAll_onclick = function(obj,e)
        {
        	var params = {
        					coCd : this.ds_dtl.getColumn(0,"CO_CD")
        					,mbrId : this.ds_dtl.getColumn(0,"MBR_ID")
        				};

        	var options = {title : "전체이력조회"};
        	this.gfn_openPopup("hstAll", "CC::SSP_BO_MA_51.xfdl", params,  function(objID, rtnValue) {
        	}, options);

        };

        this.btn_mroMbrId_onclick = function(obj,e)
        {
        	var params = {
        					coCd : this.ds_dtl.getColumn(0,"CO_CD")
        					//,mroMbrId : this.ds_dtl.getColumn(0,"MRO_MBR_ID")
        					,mbrId : this.ds_dtl.getColumn(0,"MBR_ID")
        				};

        	var options = {title : "MRO 회원조회"};
        	this.gfn_openPopup("mroMbr", "CC::SSP_BO_MA_17.xfdl", params,  function(objID, rtnValue) {
        		var retObj = JSON.parse(rtnValue);
        		var sIdList = "";
        		var sNmList = "";
        		for(var i=0; i<retObj.length; i++){
        			var retData = JSON.parse(retObj[i]);
        			sIdList += retData.MRO_MBR_ID + ",";
        			sNmList += retData.MRO_MBR_NM + ",";

        			this.ds_dtl.setColumn(0,"MRO_MBR_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_dtl.setColumn(0,"MRO_MBR_NM",sNmList.replace(/,\s*$/, ""));
        		}
        	}, options);
        };

        this.btn_mroMbrIdMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.div_basis.form.edt_mroMbrId };

        	var options = {title : "MRO회원"};
        	this.gfn_openPopup("mroMbrMemoTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, rtnValue) {
        		var retJson = JSON.parse(rtnValue);

        		this.ds_dtl.setColumn(0,"MRO_MBR_ID",retJson.textValue.replace(/,\s*$/, ""));
        		this.ds_dtl.setColumn(0,"MRO_MBR_NM",retJson.textValue.replace(/,\s*$/, ""));

        	}, options);
        };

        this.grd_orderList_oncellclick = function(obj,e)
        {
        	//한번 클릭시 콤보박스 원터치 클릭
        	obj.showEditor(true);
        	obj.dropdownCombo();
        };

        this.work04_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}

        };

        this.grd_otherInfo_onexpanddown = function(obj,e)
        {
        	if(e.col == 2) {
        		if(e.row == 0) { // 기본계정
        			var objParam = {
        				coCd : this.fv_sessionData.coCd,
        				mbrId : this.ds_dtl.getColumn(0,"MBR_ID"),
        				bzplcId: this.ds_dtl.getColumn(0,"BZPLC_ID"),
        				oprUnitId : this.ds_dtl.getColumn(0,"OPR_UNIT_ID"),
        				deptId : this.ds_dtl.getColumn(0,"DEPT_ID"),
        				acctNm : this.ds_otherInfo.getColumn(0,"ACCT_NM")
        			};

        			this.gfn_openPopup("btn_acct", "CC::SSP_BO_MA_77.xfdl", objParam, function(sPopupId, sRetValue) {
        				var retObj = JSON.parse(sRetValue);
        				this.ds_dtl.setColumn(0,"ACCT_ID", retObj.ACCT_ID);
        				this.ds_dtl.setColumn(0,"COST_TRNSF_DEPT_ID", retObj.DEPT_ID);
        				this.ds_otherInfo.setColumn(e.row,"CODE_VAL", retObj.DEPT_NM + ", " + retObj.ACCT_NM + "(" + retObj.ACCT_TP_NM + ")");
        				this.ds_otherInfo.setColumn(e.row,"ACCT_NM", retObj.ACCT_NM);
        			}, {titlebar:"true"});
        		} else {	// 참조코드
        		    if(this.ds_otherInfo.getColumn(e.row,"CODE_NM")) {
        				var objParam = {
        					coCd : this.fv_sessionData.coCd,
        					bzplcId: this.ds_dtl.getColumn(0,"BZPLC_ID"),
        					oprUnitId: this.ds_dtl.getColumn(0,"OPR_UNIT_ID"),
        					deptOprUnitSprCd: "OPU",
        					refCdGrpSeq : e.row,
        					refCdNm : this.ds_otherInfo.getColumn(e.row,"CODE_VAL")
        				};

        				this.gfn_openPopup("btn_acct", "CC::SSP_BO_MA_67.xfdl", objParam, function(sPopupId, sRetValue) {
        					var retObj = JSON.parse(sRetValue);
        					this.ds_dtl.setColumn(0,"REF_CD_SEQ_"+e.row, retObj.REF_CD_SEQ);
        					this.ds_otherInfo.setColumn(e.row,"CODE_VAL", retObj.REF_CD_NM);
        				}, {titlebar:"true"});
        			}
        		}
        	}
        };
        this.div_otherInfo_grd_otherInfo_oncellclick = function(obj,e)
        {
        	if(e.col == 3) {
        	    if(e.row == 0) { // 기본계정
        			this.ds_dtl.setColumn(0,"ACCT_ID", "");
        			this.ds_dtl.setColumn(0,"COST_TRNSF_DEPT_ID", "");
        			this.ds_otherInfo.setColumn(e.row,"CODE_VAL", "");
        			this.ds_otherInfo.setColumn(e.row,"ACCT_NM", "");
        		} else {
        			this.ds_dtl.setColumn(0,"REF_CD_SEQ_"+e.row, "");
        			this.ds_otherInfo.setColumn(e.row,"CODE_VAL", "");
        		}
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
            this.div_basis.form.btn_DupId.addEventHandler("onclick",this.btn_DupId_onclick,this);
            this.div_basis.form.sta_dupIdMsg.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div_basis.form.btn_mroMbrId.addEventHandler("onclick",this.btn_mroMbrId_onclick,this);
            this.div_basis.form.btn_mroMbrIdMemo.addEventHandler("onclick",this.btn_mroMbrIdMemo_onclick,this);
            this.div_basis.form.btn_DupPw_onclick.addEventHandler("onclick",this.btn_DupPw_onclick,this);
            this.div_upper.form.Edit00_00.addEventHandler("onchanged",this.div_upper_Edit00_00_onchanged,this);
            this.div_upper.form.btn_dept.addEventHandler("onclick",this.btn_dept_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_00.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_00_00.addEventHandler("onclick",this.div_ctrl_Static21_00_01_00_00_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_02.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_03.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.Static21_00_01_01_04.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_ctrl.form.rdo_taxinvAuthUseYn.addEventHandler("onitemchanged",this.rdo_taxinvAuthUseYn_onitemchanged,this);
            this.div_ctrl.form.rdo_crdStlAuthUseYn.addEventHandler("onitemchanged",this.rdo_crdStlAuthUseYn_onitemchanged,this);
            this.div_ctrl.form.cbo_mngAuth.addEventHandler("onitemchanged",this.cbo_mngAuth_onitemchanged,this);
            this.div_ctrl.form.cbo_bgtAuth.addEventHandler("onitemchanged",this.cbo_bgtAuth_onitemchanged,this);
            this.div_ctrl.form.cbo_adjAuth.addEventHandler("onitemchanged",this.cbo_adjAuth_onitemchanged,this);
            this.div_ctrl.form.btn_mngAuth.addEventHandler("onclick",this.btn_mngAuth_onclick,this);
            this.div_ctrl.form.btn_bgtAuth.addEventHandler("onclick",this.btn_bgtAuth_onclick,this);
            this.div_ctrl.form.btn_adjAuth.addEventHandler("onclick",this.btn_adjAuth_onclick,this);
            this.div_ctrl.form.btn_mngAuthMemo.addEventHandler("onclick",this.btn_mngAuthMemo_onclick,this);
            this.div_ctrl.form.btn_bgtAuthMemo.addEventHandler("onclick",this.btn_bgtAuthMemo_onclick,this);
            this.div_ctrl.form.btn_adjAuthMemo.addEventHandler("onclick",this.btn_adjAuthMemo_onclick,this);
            this.div_appv.form.grd_aprvlList.addEventHandler("onexpanddown",this.grd_aprvlList_onexpanddown,this);
            this.div_appv.form.btn_appvDel.addEventHandler("onclick",this.btn_appvDel_onclick,this);
            this.div_appv.form.btn_appvAdd.addEventHandler("onclick",this.btn_appvAdd_onclick,this);
            this.div_addr.form.btn_zpCd.addEventHandler("onclick",this.btn_zpCd_onclick,this);
            this.div_order.form.Static60_00.addEventHandler("onclick",this.div_order_Static60_00_onclick,this);
            this.div_order.form.grd_orderList.addEventHandler("onexpanddown",this.grd_orderList_onexpanddown,this);
            this.div_order.form.grd_orderList.addEventHandler("oncellclick",this.grd_orderList_oncellclick,this);
            this.div_order.form.btn_orderDel.addEventHandler("onclick",this.btn_orderDel_onclick,this);
            this.div_order.form.btn_orderAdd.addEventHandler("onclick",this.btn_orderAdd_onclick,this);
            this.div_bottomBtn.form.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div_bottomBtn.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_hst.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.div_hst.form.btn_hstAll.addEventHandler("onclick",this.btn_hstAll_onclick,this);
            this.div_otherInfo.form.grd_otherInfo.addEventHandler("onexpanddown",this.grd_otherInfo_onexpanddown,this);
            this.div_otherInfo.form.grd_otherInfo.addEventHandler("oncellclick",this.div_otherInfo_grd_otherInfo_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
