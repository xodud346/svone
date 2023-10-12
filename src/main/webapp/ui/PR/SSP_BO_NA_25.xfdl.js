(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_25");
            this.set_titletext("전시 상품 등록 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_option", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NCE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iptType", this);
            obj._setContents("<ColumnInfo><Column id=\"IPT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IPT_TYPE\">0</Col><Col id=\"IPT_TYPE_NM\">선택</Col></Row><Row><Col id=\"IPT_TYPE\">1</Col><Col id=\"IPT_TYPE_NM\">라디오버튼</Col></Row><Row><Col id=\"IPT_TYPE\">2</Col><Col id=\"IPT_TYPE_NM\">체크박스</Col></Row><Row><Col id=\"IPT_TYPE\">3</Col><Col id=\"IPT_TYPE_NM\">텍스트</Col></Row><Row><Col id=\"IPT_TYPE\">4</Col><Col id=\"IPT_TYPE_NM\">드롭다운</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_PRT\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DTLS_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEST\" type=\"STRING\" size=\"256\"/><Column id=\"NCE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pdtCon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfoStg", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STG_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STG_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"STG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STG_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"STG_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"TEST\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfoStgDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STG_ADD_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"STG_INFO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"STG_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"STG_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"TEST\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_DTL_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_setYn", this);
            obj._setContents("<ColumnInfo><Column id=\"ADD_INFO_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO_SET_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ADD_INFO_SET_YN\">Y</Col><Col id=\"ADD_INFO_SET_YN_NM\">사용</Col></Row><Row><Col id=\"ADD_INFO_SET_YN\">N</Col><Col id=\"ADD_INFO_SET_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listAdd", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicSave", this);
            obj._setContents("<ColumnInfo><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","40","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("변경 이력");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","70",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","70","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상품군  <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","485","70","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productId","Static03:4","74","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productNm","edt_productId:4","74","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_productPop","edt_productNm:4","74","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","102",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01","20","102","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전시상품명  <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","485","102","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","134",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01","20","134","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","20","166",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_00","20","166","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("추가정보수취");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_01","485","134","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("견적제출가 매익율  <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","214","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("대표 상품 정보");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","Static01_00:8",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","244","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대표상품ID  <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","485","244","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","20","276",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01","485","276","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("대표 규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","20","308",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","20","340",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","20","372",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00","20","308","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_00","485","308","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00_00","20","340","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_00_00","485","340","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("상품 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02_00_00_00","20","372","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("SSP 기준가");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","Static03_00:4","248","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","edt_prdId:4","248","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdNm","159","106","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","Static04:4","74","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","edt_oprtrId:4","74","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio_useYn","Static05_01_01_00:6","106","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio_pdtType","Static05_01_01_01:6","138","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_dispPrdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio_pdtType00","Static05_01_01_01_00:6","170","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_setYn");
            obj.set_codecolumn("ADD_INFO_SET_YN");
            obj.set_datacolumn("ADD_INFO_SET_YN_NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","Static05_01_01_02_00:4","312","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","Static05_01_01_02_00_00:4","344","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price","Static05_01_01_02_00_00_00:4","376","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","Static05_01_01_00_01:4","280","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","Static05_01_01_00_01_00:4","312","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdStatus","Static05_01_01_00_01_00_00:4","344","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_02","20","276","135","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","Static05_01_01_02:4","280","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productIdInfo","Static04_00:4","248","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productNmInfo","edt_productIdInfo:4","248","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","Static06_01_02:20","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            obj.set_text("옵션 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addOption","20","Static01_00_00:15","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("추가");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOption","btn_addOption:10","Static01_00_00:15","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addInfo","20","734","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("상세옵션 생성");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_option","20","btn_addOption:10",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_option");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"20\"/><Column size=\"179\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"옵션명\"/><Cell col=\"3\" text=\"필수여부\"/><Cell col=\"4\" text=\"입력타입\"/><Cell col=\"5\" text=\"순서변경\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" text=\"bind:CHK\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:OPT_NM\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:NCE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" text=\"bind:IPT_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_iptType\" combodatacol=\"IPT_TYPE_NM\" combocodecol=\"IPT_TYPE\" comboautoselect=\"false\"/><Cell col=\"5\" text=\"bind:OPT_CHG\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/btn_WF_spin.png&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_addInfo","20","btn_addInfo:10",null,"420","20",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_binddataset("ds_addInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"135\"/><Column size=\"70\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"옵션 개수\"/><Cell col=\"2\" text=\"상세옵션\"/><Cell col=\"3\" text=\"상세옵션 설명\"/><Cell col=\"4\" text=\"상세옵션 이미지\"/><Cell col=\"5\" text=\"순서 변경\"/></Band><Band id=\"body\"><Cell text=\"bind:OPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:OPT_CNT\" displaytype=\"expr:(OPTN_DTL_ITM_NO == &apos;1&apos; &amp;&amp; IPT_TYPE != &apos;3&apos;) ? &apos;maskeditcontrol&apos; : &apos;none&apos; \" edittype=\"expr:(OPTN_DTL_ITM_NO  == &apos;1&apos; &amp;&amp; IPT_TYPE != &apos;3&apos;) ? &apos;text&apos; : &apos;none&apos;\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"expr:IPT_TYPE != &apos;3&apos; ? &apos;editcontrol&apos; : &apos;none&apos;\" edittype=\"expr:IPT_TYPE != &apos;3&apos; ? &apos;text&apos; : &apos;none&apos;\" text=\"bind:OPT_PRT\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:OPT_DTLS\" displaytype=\"expr:IPT_TYPE == &apos;4&apos; ? &apos;editcontrol&apos; : &apos;none&apos;\" edittype=\"expr:IPT_TYPE == &apos;4&apos; ? &apos;text&apos; : &apos;none&apos;\" maskedittype=\"string\"/><Cell col=\"4\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/btn_WF_document.png&apos;)\" expandsize=\"32\" text=\"bind:OPT_IMG\" expandshow=\"expr:IPT_TYPE == &apos;4&apos; ? &apos;show&apos; : &apos;hide&apos;\"/><Cell col=\"5\" text=\"bind:DTLS_CHG\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/btn_WF_spin.png&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdtCon","20","grid_addInfo:32","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("상품 연결");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_pdtCon","20","btn_pdtCon:10",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_autofittype("none");
            obj.set_visible("true");
            obj.set_binddataset("ds_pdtCon");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","20","grid_pdtCon:34","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            obj.set_text("추가정보 설정");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_addInfoStg","20","Static01_00_00_01_00:45",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_binddataset("ds_addInfoStg");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"133\"/><Column size=\"20\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"추가정보 명\"/><Cell col=\"3\" text=\"필수 여부\"/><Cell col=\"4\" text=\"첨부 파일\"/><Cell col=\"5\" text=\"입력 타입\"/><Cell col=\"6\" text=\"순서 변경\"/></Band><Band id=\"body\"><Cell text=\"bind:STG_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:STG_NO\" expr=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:STG_INFO\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:STG_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"expr:TEST == 0 ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:STG_FILE\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:IPT_TYPE\" edittype=\"expr:STG_FILE == &apos;Y&apos; &amp;&amp; IPT_TYPE == 0 ? &apos;readonly&apos; : &apos;combo&apos;\" displaytype=\"combocontrol\" combodataset=\"ds_iptType\" combocodecol=\"IPT_TYPE\" combodatacol=\"IPT_TYPE_NM\"/><Cell col=\"6\" text=\"bind:STG_CHG\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/btn_WF_spin.png&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_createInfo","20","Static01_00_00_01_00:10","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delInfo","Static01_00_00_01_00:-29","1530","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_addInfoStgDtls","20","1845",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_binddataset("ds_addInfoStgDtls");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"추가 정보명\"/><Cell col=\"1\" text=\"상세 추가 정보 개수\"/><Cell col=\"2\" text=\"상세 추가 정보\"/><Cell col=\"3\" text=\"순서 변경\"/></Band><Band id=\"body\"><Cell text=\"bind:STG_INFO\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:STG_INFO_CNT\" displaytype=\"expr:(ADD_OPTN_DTL_ITM_NO == &apos;1&apos; &amp;&amp; IPT_TYPE != &apos;3&apos; &amp;&amp; IPT_TYPE != &apos;0&apos;) ? &apos;editcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(ADD_OPTN_DTL_ITM_NO == &apos;1&apos; &amp;&amp; IPT_TYPE != &apos;3&apos; &amp;&amp; IPT_TYPE != &apos;0&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"2\" text=\"bind:STG_ADD_INFO\" displaytype=\"expr:(IPT_TYPE != &apos;3&apos; &amp;&amp; IPT_TYPE != &apos;0&apos;) ? &apos;editcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(IPT_TYPE != &apos;3&apos; &amp;&amp; IPT_TYPE != &apos;0&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"3\" text=\"bind:STG_CHG\" displaytype=\"imagecontrol\" expr=\"expr:&quot;theme::default/images/btn_WF_spin.png&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"grid_addInfoStgDtls:20","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"grid_addInfoStgDtls:20","80","28","btn_list:10",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","2103",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_createInfoDtls","20","grid_addInfoStg:36","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("상세 추가 정보 생성");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_prfrt","Static05_01_01_01_01:4","138","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_format("99.999999");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","MaskEdit_prfrt:4","138","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"20","80","28","btn_search:10",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,950,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_productId","value","ds_product","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_productNm","value","ds_product","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdId","value","ds_list","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_prdNm","value","ds_list","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_mnfrNm","value","ds_list","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_attrValList","value","ds_list","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Radio_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Radio_pdtType","value","ds_search","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Radio_pdtType00","value","ds_search","ADD_INFO_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_oprtrNm","value","ds_product","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_dispPrdNm","value","ds_search","DISP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_ctryNm","value","ds_listAdd","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","grid_pdtCon","binddataset","ds_pdtCon","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_productIdInfo","value","ds_product","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_productNmInfo","value","ds_product","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_prdStatus","value","ds_listAdd","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_sellUnitCd","value","ds_listAdd","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_price","value","ds_listAdd","SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","MaskEdit_prfrt","value","ds_search","PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_oprtrId","value","ds_product","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_25.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_25.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_25.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_25.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object

        var prdClcd = this.parent.prdClcd;

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";

        //상품군 자동조회 위한 변후
        this.searchCategoryCount = 0;
        this.searchPrdClcd = "";
        this.searchPrdClsfNm = "";
        this.searchFullPrdClsfNm = "";

        //상품군 중복조회
        this.prdTotalCount = "";

        //대표상품ID 자동조회 위한 변후
        this.searchPrdCount = 0;
        this.searchPrdId = "";
        this.searchPrdNm = "";

        //첨부파일 타입
        this.fileType = "image/*"; //첨부파일 종류
        this.maxFileSize = 10; //MB단위
        this.fileUpYn = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1 ds_dispPrdSprCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN,DISP_PRD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //조회
        this.fn_search = function()
        {
        	var sSvcId = "searchDisp";
        	var sUrl   = "/pr/ctg-mng/select-search-disp.do";
        	var inDs   = "ds_search2=ds_search2";
        	var outDs  = "ds_detail=ds_output";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //상품군
        this.fn_productInfoSearch = function() {
        	var sSvcId = "selectProductInfoList";
        	var sUrl = "/pr/prd-popup/select-category-popup-list.do";
        	var inDs = "ds_search=ds_product";
        	var outDs = "ds_product=ds_search";
        	var arg = "";

        	this.ds_product.setColumn(0, "ROW_COUNT", "1000");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //상품군 추가 검색(담당자, 전시상품명)
        this.fn_productInfoSearchDtls = function() {
        	var sSvcId = "selectProductInfo";
        	var sUrl = "/pr/ctg-mng/select-prd-spr.do";
        	var inDs = "ds_search=ds_product";
        	var outDs = "ds_product=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //대표 상품 정보(상품id, 상품명, 제조원, 대표 규격)
        this.fn_prdIdInfoSearch = function() {
        	var sSvcId = "selectprdIdInfo";
        	var sUrl = "/pr/prd-popup/select-product-popup-list.do"; //   /cust/stock/mng/select-prdinfo-by-prdid.do
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1";
        	var arg = "";

        	this.ds_list.setColumn(0, "CO_CD", "1000");
        	this.ds_list.setColumn(0, "MALL_SPR_CD", "10");
        	this.ds_list.setColumn(0, "PRD_CLCD", this.parent.prdClcd);
        	this.ds_list.setColumn(0, "ROW_COUNT", "1000");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //대표 상품 추가 검색(원산지, 주문단위, 상품 상태, 기준가)
        this.fn_prdInfoSearchDtls = function(flag){
        	var sSvcId = "selectprdDtls";
        	var sUrl = "/pr/ctg-mng/select-prd-id.do";
        	var inDs = "ds_search=ds_list";
        	var outDs = "ds_listAdd=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //옵션 조회
        this.fn_optionSearch = function(flag){
        	var sSvcId = "optionSearch";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-opt-list.do";
        	var inDs = "ds_product=ds_product";
        	var outDs = "ds_option=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //상세 옵션 조회
        this.fn_optionDtlSearch = function(flag){
        	var sSvcId = "optionDtlSearch";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-add-list.do";
        	var inDs = "ds_product=ds_product";
        	var outDs = "ds_addInfo=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //상품 연결 조회
        this.fn_connSearch = function(flag){
        	var sSvcId = "connSearch";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-conn-list.do";
        	var inDs = "ds_product=ds_product";
        	var outDs = "ds_pdtCon=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //추가 정보 조회
        this.fn_stgSearch = function(flag){
        	var sSvcId = "stgSearch";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-stg-list.do";
        	var inDs = "ds_product=ds_product";
        	var outDs = "ds_addInfoStg=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //상세 추가 정보 조회
        this.fn_stgDtlSearch = function(flag){
        	var sSvcId = "stgDtlSearch";
        	var sUrl = "/pr/ctg-mng/select-prd-spr-stg-dtl-list.do";
        	var inDs = "ds_product=ds_product";
        	var outDs = "ds_addInfoStgDtls=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "saveDisp";
        	var sUrl = "/pr/ctg-mng/save-prd-spr.do";
        	var inDs = "ds_search=ds_search ds_list=ds_list ds_product=ds_product ds_listAdd=ds_listAdd";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //저장(옵션 저장)
        this.fn_save1 = function()
        {
        	var sSvcId = "saveDisp2";
        	var sUrl = "/pr/ctg-mng/save-two-prd-spr.do";
        	var inDs = "ds_option=ds_option";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //저장(상세옵션 저장)
        this.fn_save2 = function()
        {
        	var sSvcId = "saveDisp3";
        	var sUrl = "/pr/ctg-mng/save-add-info-prd-spr.do";
        	var inDs = "ds_addInfo=ds_addInfo";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //저장(연결상품 저장)
        this.fn_save3 = function()
        {
        	var sSvcId = "saveDisp4";
        	var sUrl = "/pr/ctg-mng/save-conn-prd-spr.do";
        	var inDs = "ds_pdtCon=ds_pdtCon";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //저장(추가정보 저장)
        this.fn_save4 = function()
        {
        	var sSvcId = "saveDisp5";
        	var sUrl = "/pr/ctg-mng/save-stg-prd-spr.do";
        	var inDs = "ds_addInfoStg=ds_addInfoStg";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //저장(상세추가정보 저장)
        this.fn_save5 = function()
        {
        	var sSvcId = "saveDisp6";
        	var sUrl = "/pr/ctg-mng/save-stg-dtl-prd-spr.do";
        	var inDs = "ds_addInfoStgDtls=ds_addInfoStgDtls";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //기본 정보 업데이트
        this.fn_update = function()
        {
        	var sSvcId = "updateDisp";
        	var sUrl = "/pr/ctg-mng/update-prd-spr.do";
        	var inDs = "ds_search=ds_search ds_list=ds_list ds_product=ds_product ds_listAdd=ds_listAdd";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //옵션 업데이트
        this.fn_updateOption = function()
        {
        	var sSvcId = "updateOption";
        	var sUrl = "/pr/ctg-mng/update-prd-spr-opt.do";
        	var inDs = "ds_option=ds_option:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //상세 옵션 업데이트
        this.fn_updateOptionDtl = function()
        {
        	var sSvcId = "updateOptionDtl";
        	var sUrl = "/pr/ctg-mng/update-prd-spr-opt-dtl.do";
        	var inDs = "ds_addInfo=ds_addInfo:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //연결 상품 업데이트
        this.fn_updateConn = function()
        {
        	var sSvcId = "updateConn";
        	var sUrl = "/pr/ctg-mng/update-prd-spr-conn.do";
        	var inDs = "ds_pdtCon=ds_pdtCon:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //추가 정보 업데이트
        this.fn_updateStg = function()
        {
        	var sSvcId = "updateStg";
        	var sUrl = "/pr/ctg-mng/update-prd-spr-stg.do";
        	var inDs = "ds_addInfoStg=ds_addInfoStg:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //상세 추가 정보 업데이트
        this.fn_updateStgDtl = function()
        {
        	var sSvcId = "updateStgDtl";
        	var sUrl = "/pr/ctg-mng/update-prd-spr-stg-dtl.do";
        	var inDs = "ds_addInfoStgDtls=ds_addInfoStgDtls:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //변경 사유
        this.fn_updRsn = function()
        {
        	var sSvcId = "updRsn";
        	var sUrl = "/pr/ctg-mng/save-prd-spr-rsn.do";
        	var inDs = "ds_basicSave=ds_basicSave ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "selectProductInfoList"){ //상품군
        		if( this.searchCategoryCount > 1 ) {
        			this.fn_popup("productInfoPop");
        		} else if( this.searchCategoryCount == 1 ) {
        			this.ds_product.setColumn(0, "PRD_CLCD", this.searchPrdClcd);
        			this.ds_product.setColumn(0, "PRD_CLSF_NM", this.searchPrdClsfNm);

        			this.fn_productInfoSearchDtls();
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "selectProductInfo" ) { //상품군 추가 검색
        		if( this.prdTotalCount > 0 ){
        			this.alert("중복된 상품군이 존재합니다.");
        			this.edt_productId.set_value("");
        			this.edt_productNm.set_value("");
        			return false;
        		}
        	} else if( svcID == "selectprdIdInfo" ) { //대표 상품 정보
        		if( this.searchPrdCount > 1 ) {
        			this.fn_popup("prdIdInfoPop");
        		} else if( this.searchPrdCount == 1 ) {
        			this.ds_list.setColumn(0, "PRD_ID", this.searchPrdId);
        			this.ds_list.setColumn(0, "PRD_NM", this.searchPrdNm);

        			this.fn_prdInfoSearchDtls();
        		} else {
        			alert("검색된 내용이 없습니다");
        		}
        	} else if( svcID == "saveDisp" ) { //저장
        		this.alert("저장되었습니다.");
        		this.close();
        	} else if( svcID == "commonCodeSearch" ){ //공통코드
        		this.Radio_useYn.set_index(0);
        	}
        }

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";
        	var prdStr = "";
        	const prdObj = JSON.parse(sRetValue);

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "productInfoPop" ){ //상품군
        		this.ds_product.setColumn(0, "PRD_CLCD", prdObj.PRD_CLCD);
        		this.ds_product.setColumn(0, "PRD_CLSF_NM", prdObj.PRD_CLSF_NM);

        		//상품군 추가 조회
        		this.fn_productInfoSearchDtls();

        	} else if ( sPopupId == "selectProductInfo" ) { //상품군 추가 검색
        		this.ds_product.setColumn(0, "OPRTR_ID", prdObj.OPRTR_ID);
        		this.ds_product.setColumn(0, "OPRTR_NM", prdObj.OPRTR_NM);

        	} else if ( sPopupId == "prdIdInfoPop" ) { //대표 상품 정보
        		this.ds_list.setColumn(0, "CO_CD", prdObj.CO_CD);
        		this.ds_list.setColumn(0, "PRD_ID_VIEW", prdObj.PRD_ID_VIEW);
        		this.ds_list.setColumn(0, "PRD_ID", prdObj.PRD_ID);
        		this.ds_list.setColumn(0, "PRD_NM", prdObj.PRD_NM);
        		this.ds_list.setColumn(0, "MNFR_NM", prdObj.MNFR_NM);
        		this.ds_list.setColumn(0, "ATTR_VAL", prdObj.ATTR_VAL);

        		//상품정보 추가 검색
        		this.fn_prdInfoSearchDtls();

        	} else if ( sPopupId == "selectprdDtls" ) { //대표 상품 추가 검색
        		this.ds_listAdd.setColumn(0, "CTRY_NM", prdObj.CTRY_NM);
        		this.ds_listAdd.setColumn(0, "SELL_UNIT_CD", prdObj.SELL_UNIT_CD);
        		this.ds_listAdd.setColumn(0, "PRD_USE_YN", prdObj.PRD_USE_YN);
        		this.ds_listAdd.setColumn(0, "SALSPRC", prdObj.SALSPRC);

        	} else if ( sPopupId == "btn_popPrdCon" ) { //상품연결 멀티팝업창 >> 단일 조회 팝업으로 변경
        		var sIdList = "";
        		var sNmList = "";
        		var sPrList = "";
        		for(var i=0; i<prdObj.length; i++){
        			var rowData = JSON.parse(prdObj[i]);
        			sIdList += rowData.PRD_ID_VIEW +",";
        			sNmList += rowData.PRD_NM +",";
        			sPrList += rowData.ATTR_VAL +",";
        		}

        		this.ds_search.setColumn(0,"PRD_ID", prdObj.length);
        		this.ds_search.setColumn(0,"PRD_NM", prdObj.length);
        		this.ds_search.setColumn(0,"ATTR_VAL", prdObj.length);

        		var post = this.ds_pdtCon.rowposition;
        		var arrArgs = new Array(0, 0);
        		var arrRows = this.ds_option.extractRows("NCE_YN == 'Y'", 0, -1, arrArgs);

        		for(var i = 0; i < arrRows.length; i++){
        			this.ds_pdtCon.setColumn(post, arrRows.length, sIdList.replace(/,\s*$/, ""));
        			this.ds_pdtCon.setColumn(post, arrRows.length+1, sNmList.replace(/,\s*$/, ""));
        			this.ds_pdtCon.setColumn(post, arrRows.length+2, sPrList.replace(/,\s*$/, ""));
        		}
        	} else if ( sPopupId == "pdtConPop" ) { //상품 연결 단일 조회

        		//const prdObj = JSON.parse(sRetValue);
        		var post = this.ds_pdtCon.rowposition;
        		var arrArgs = new Array(0, 0);
        		var arrRows = this.ds_option.extractRows("NCE_YN == 'Y'", 0, -1, arrArgs);

        		this.ds_pdtCon.setColumn(post, arrRows.length, prdObj.PRD_ID_VIEW);
        		this.ds_pdtCon.setColumn(post, arrRows.length+1, prdObj.PRD_NM);
        		this.ds_pdtCon.setColumn(post, arrRows.length+2, prdObj.ATTR_VAL);

        	} else if ( sPopupId == "recordPop" ) { //변경 사유
        		this.ds_basicSave.setColumn(0, "UPD_RSN", prdObj.UPD_RSN);
        		this.fn_updRsn();

        		this.alert("수정되었습니다.");

        		this.close("ok");
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	this.MaskEdit_prfrt.set_format("99.999999");

        	this.ds_product.addRow();
        	this.ds_search.addRow();
        	this.ds_list.addRow();
        	this.ds_listAdd.addRow();
        	this.ds_check.addRow();
        	this.ds_pdtCon.addRow();
        	this.ds_basicSave.addRow();

        	var prdClcd = this.parent.prdClcd;
        	var prdClsfNm = this.parent.prdClsfNm;
        	var dispPrdNm = this.parent.dispPrdNm;
        	var coCd = this.parent.coCd;
        	var useYn = this.parent.useYn;
        	var dispPrdSprCd = this.parent.dispPrdSprCd;
        	var addInfoSetYn = this.parent.addInfoSetYn;
        	var prdId = this.parent.prdId;
        	var prdIdView = this.parent.prdIdView;
        	var prdNm = this.parent.prdNm;
        	var attrVal = this.parent.attrVal;
        	var mnfrNm = this.parent.mnfrNm;
        	var oprtrId = this.parent.oprtrId;
        	var oprtrNm = this.parent.oprtrNm;
        	var sellUnitCd = this.parent.sellUnitCd;
        	var ctryNm = this.parent.ctryNm;
        	var prdUseYn = this.parent.prdUseYn;
        	var salsprc = this.parent.salsprc;
        	var prfrt = this.parent.prfrt;

        	this.ds_product.setColumn(0, "CO_CD", "1000");
        	this.ds_product.setColumn(0, "MALL_SPR_CD", "10");
        	this.ds_product.setColumn(0, "SEL_MTHD_CD", "40");
        	this.ds_product.setColumn(0, "PRD_CLCD", prdClcd);
        	this.ds_product.setColumn(0, "PRD_CLSF_NM", prdClsfNm);
        	this.ds_product.setColumn(0, "OPRTR_ID", oprtrId);
        	this.ds_product.setColumn(0, "OPRTR_NM", oprtrNm);

        	this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);
        	this.ds_search.setColumn(0, "PRFRT", prfrt);
        	this.ds_search.setColumn(0, "USE_YN", useYn);
        	this.ds_search.setColumn(0, "DISP_PRD_NM", dispPrdNm);
        	this.ds_search.setColumn(0, "DISP_PRD_SPR_CD", dispPrdSprCd);
        	this.ds_search.setColumn(0, "ADD_INFO_SET_YN", addInfoSetYn);

        	this.ds_list.setColumn(0, "CO_CD", coCd);
        	this.ds_list.setColumn(0, "PRD_ID", prdId);
        	this.ds_list.setColumn(0, "PRD_ID_VIEW", prdIdView);
        	this.ds_list.setColumn(0, "PRD_NM", prdNm);
        	this.ds_list.setColumn(0, "ATTR_VAL", attrVal);
        	this.ds_list.setColumn(0, "MNFR_NM", mnfrNm);

        	this.ds_listAdd.setColumn(0, "PRD_ID", prdId);
        	this.ds_listAdd.setColumn(0, "PRD_ID_VIEW", prdIdView);
        	this.ds_listAdd.setColumn(0, "SELL_UNIT_CD", sellUnitCd);
        	this.ds_listAdd.setColumn(0, "PRD_USE_YN", prdUseYn);
        	this.ds_listAdd.setColumn(0, "CTRY_NM", ctryNm);
        	this.ds_listAdd.setColumn(0, "SALSPRC", salsprc);

        	var check = this.ds_product.getColumn(0, "PRD_CLCD");

        	var disp = this.Radio_pdtType.value;
        	var addInfo = this.Radio_pdtType00.value;

        	if(!this.gfn_isNull(check)){
        		this.edt_productId.set_enable(false);
        		this.edt_productNm.set_enable(false);
        		this.btn_productPop.set_enable(false);

        		this.ds_check.setColumn(0, "CD", "Y");

        		this.fn_optionSearch(); //옵션 조회
        		this.fn_optionDtlSearch(); //상세 옵션 조회
        		this.fn_connSearch(); //연결 상품 조회
        		this.fn_stgSearch(); //추가 정보 조회
        		this.fn_stgDtlSearch(); //상세 추가 정보 조회

        		//전시 상품 타입
        		if(disp == "B"){
        			this.btn_pdtCon.set_enable(false);
        			this.grid_pdtCon.set_enable(false);
        		}

        		//추가 정보 수취
        		if(addInfo == "N"){
        			this.btn_createInfo.set_enable(false);
        			this.btn_delInfo.set_enable(false);
        			this.grid_addInfoStg.set_enable(false);
        			this.btn_createInfoDtls.set_enable(false);
        			this.grid_addInfoStgDtls.set_enable(false);
        		}
        	}
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				   , prdClcd : this.edt_productId.value
        				   , prdClsfNm : this.edt_productNm.value
        				   , prdId : this.edt_prdId.value
        				   , prdNm : this.edt_prdNm.value
        				   , prdId2 : this.edt_prdStatus.value
        				   , prdNm2 : this.edt_price.value
        				   , prvl : this.edt_sellUnitCd.value
        				   };

        	if( type == "productInfoPop" ){ //상품군 조회 팝업
        		objParam.prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        		objParam.prdClsfNm = this.ds_product.getColumn(0, "PRD_CLSF_NM");
        		objParam.coCd = this.ds_product.getColumn(0, "CO_CD");
        		objParam.mallSprCd = this.ds_product.getColumn(0, "MALL_SPR_CD");
        		objParam.selMthdCd = this.ds_product.getColumn(0, "SEL_MTHD_CD");

        		var opts = { title : '상품군 조회', titlebar: 'true', width: 800, height: 530 }

        		this.gfn_openPopup("productInfoPop", "PR_POP::SSP_BO_PP_10.xfdl", objParam, "fn_popupCallback", opts);

        	} else if ( type == "prdIdInfoPop" ) { //대표상품ID 조회 팝업
        		objParam.prdId = this.ds_list.getColumn(0, "PRD_ID");
        		objParam.prdNm = this.ds_list.getColumn(0, "PRD_NM");
        		objParam.prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        		objParam.coCd = this.ds_product.getColumn(0, "CO_CD");
        		objParam.mallSprCd = this.ds_product.getColumn(0, "MALL_SPR_CD");
        		objParam.selMthdCd = this.ds_product.getColumn(0, "SEL_MTHD_CD");
        		this.gfn_openPopup("prdIdInfoPop", "PR_POP::SSP_BO_PP_38.xfdl", objParam, "fn_popupCallback");
        	} else if ( type == "btn_popPrdCon" ) { //연결 상품 조회 팝업
        		objParam.prdId2 = this.ds_search.getColumn(0, "PRD_ID");
        		objParam.prdNm2 = this.ds_search.getColumn(0, "PRD_NM");
        		objParam.prvl = this.ds_search.getColumn(0, "ATTR_VAL");
        		this.gfn_openPopup("btn_popPrdCon", "PR_POP::SSP_BO_PP_16.xfdl", objParam, "fn_popupCallback");
        	}
        }

        //컬럼 ID 구하는 함수
        this.getBindColumnIDByIndex = function(grid, index)
        {
          var text = "";
          var columnid = null;
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }

          if ( text && text.length > 0 )
          {
            if ( text.search(/^bind:/) > -1 )
            {
              columnid = text.replace(/^bind:/, "");
            }
            else if ( text.search(/^BIND\(/) > -1 )
            {
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            }
          }

          return columnid;
        }

        //첨푸 파일 checkbox
        this.fn_check = function()
        {
        	var cnt = this.ds_addInfoStg.rowcount;
        	var count = this.ds_addInfoStg.findRow("STG_FILE", "Y");
        	var test = this.ds_addInfoStg.findRow("TEST", 0);

        	if(count != -1){

        		for(var i = 0; i < cnt; i++){
        			if(i == count){
        				this.ds_addInfoStg.setColumn(i, "TEST", 0);
        			} else{
        				this.ds_addInfoStg.setColumn(i, "TEST", 1);
        			}
        		}
        	} else if(test != -1 && count == -1){

        		for(var i = 0; i < cnt; i++){
        			this.ds_addInfoStg.setColumn(i, "TEST", 0);
        		}
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //▼▼검색 영역▼▼

        //검색 영역 초기 설정
        this.ds_search_onload = function(obj,e)
        {
        	var type = this.ds_list.getColumn(0, "DISP_PRD_SPR_CD");

        	if(type == "B"){
        		this.cmb_optCnt.set_enable(false);
        		this.btn_create.set_enable(false);
        		this.btn_delopt.set_enable(false);
        		this.grid_opt.set_readonly(true);
        		this.btn_dtlCreate.set_enable(false);
        		this.grid_dtlOpt.set_readonly(true);
        	}
        };

        //상품군 팝업
        this.btn_productPop_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        		, mallSprCd : "10"
        		, selMthdCd : "40"
        		, prdClcd : this.edt_productId.value
        		, prdClsfNm : this.edt_productNm.value
        	};
        	trace("check");
        	var opts = { title : '상품군 조회', titlebar: 'true' }
        	this.gfn_openPopup("productInfoPop", "PR_POP::SSP_BO_PP_10.xfdl", oArg, "fn_popupCallback", opts);
        };

        //상품ID 팝업
        this.btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var clcdCheck = this.ds_product.getColumn(0, "PRD_CLCD");

        	if(!this.gfn_isNull(clcdCheck)){
        		var oArg = {
        			coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        			, prdClcd : clcdCheck
        		};
        		var opts = { title : '상품 ID 조회', titlebar: 'true' }
        		this.gfn_openPopup("prdIdInfoPop", "PR_POP::SSP_BO_PP_38.xfdl", oArg, "fn_popupCallback", opts);
        	} else{
        		this.alert("상품군을 선택해주세요.");
        	}


        };

        //전시 상품 타입 변경(A타입, B타입)
        this.Radio_pdtType_onitemchanged = function(obj,e)
        {
        	var type = this.ds_search.getColumn(0, "DISP_PRD_SPR_CD");

        	if(type == "A"){
        		//전시 상품 타입 A
        		this.btn_pdtCon.set_enable(true);
        		this.grid_pdtCon.set_readonly(false);
        	} else{
        		//전시 상품 타입 B
        		this.btn_pdtCon.set_enable(false);
        		this.grid_pdtCon.set_readonly(true);
        		this.grid_pdtCon.set_formats('<Formats></Formats>');
        		this.ds_pdtCon.clear();
        	}
        };

        //추가 정보 수취 설정
        this.Radio_pdtType00_onitemchanged = function(obj,e)
        {
        	var type = this.ds_search.getColumn(0, "ADD_INFO_SET_YN");

        	if(type == "Y"){
        		this.btn_createInfo.set_enable(true);
        		this.btn_delInfo.set_enable(true);
        		this.grid_addInfoStg.set_enable(true);
        		this.btn_createInfoDtls.set_enable(true);
        		this.grid_addInfoStgDtls.set_enable(true);
        	} else{
        		this.btn_createInfo.set_enable(false);
        		this.btn_delInfo.set_enable(false);
        		this.grid_addInfoStg.set_enable(false);
        		this.btn_createInfoDtls.set_enable(false);
        		this.grid_addInfoStgDtls.set_enable(false);
        	}
        };
        //▲▲검색 영역▲▲

        //▼상세 옵션▼▼

        //옵션설정 생성
        this.btn_add_onclick = function(obj,e)
        {
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        	var rowNum = this.ds_option.rowcount;

        	if(!this.gfn_isNull(prdClcd)){
        		this.ds_option.addRow();
        		this.ds_option.setColumn(this.ds_option.rowposition, "IPT_TYPE", 0);
        		this.ds_option.setColumn(this.ds_option.rowposition, "CO_CD", "1000");
        		this.ds_option.setColumn(this.ds_option.rowposition, "PRD_CLCD", prdClcd);
        		this.ds_option.setColumn(this.ds_option.rowposition, "ROW_TYPE", this.ds_option.getRowType(this.ds_option.rowposition));

        		//OPTN_ITM_NO 설정
        		if(rowNum <= 0){
        			this.ds_option.setColumn(this.ds_option.rowposition, "OPTN_ITM_NO", 1);
        		} else if(rowNum => 1){
        			for(var i = 0; i < rowNum; i++){
        				this.ds_option.setColumn(this.ds_option.rowposition, "OPTN_ITM_NO", i+2);
        			}
        		}

        		this.ds_addInfo.clearData();
        		this.ds_pdtCon.clear();
        		this.grid_pdtCon.set_formats('<Formats></Formats>');
        	} else{
        		this.alert("상품군을 선택해주세요.");
        	}
        };

        //옵션타입 삭제
        this.btn_del_onclick = function(obj,e)
        {
        	var cnt = this.ds_option.getRowCount();
        	var dtlCnt = this.ds_addInfo.getRowCount();

        	for(var i = 0; i < cnt; i++){
        		var chk = this.ds_option.getColumn(i, "CHK");
        		var optNm = this.ds_option.getColumn(i, "OPT_NM");

        		if(chk == 1) {
        			for(var j = 0; j < dtlCnt; j++){
        				var addNm = this.ds_addInfo.getColumn(j, "OPT_NM");

        				if(optNm == addNm){
        					this.ds_addInfo.deleteRow(j);
        					j =- 1;
        				}
        			}
        			this.ds_option.deleteRow(i);
        			i =- 1;
        		}
        	}

        	//OPTN_ITM_NO 재설정
        	var arrArgs = new Array(0, 0);
        	var arrRows = this.ds_option.extractRows("OPTN_ITM_NO != ''", 0, -1, arrArgs);

        	for(var i = 0; i < arrRows.length; i++){
        		this.ds_option.setColumn(i, "OPTN_ITM_NO", i+1)
        	}

        	this.ds_pdtCon.clear();
        	this.grid_pdtCon.set_formats('<Formats><Format id="default"/></Formats>');

        	this.btn_pdtCon_onclick();
        };

        //상세옵션 생성
        this.btn_addInfo_onclick = function(obj,e)
        {
        	var cnt = this.ds_option.getRowCount();
        	var ok = this.ds_option.findRow("CHK", 1);
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        	var cnt2 = this.ds_addInfo.rowcount;

        	var arrArgs = new Array(0, 0);
        	var arrRows = this.ds_option.extractRows("OPT_NM == ''||OPT_NM == undefined", 0, -1, arrArgs);

        	var arrArgs2 = new Array(0, 0);
        	var arrRows2 = this.ds_option.extractRows("IPT_TYPE == '0'", 0, -1, arrArgs2);

        	this.ds_addInfo.clearData();

        	if(cnt == 0){
        		this.alert("옵션을 설정해주세요.");
        	} else if(cnt > 0 && this.gfn_isNull(arrRows) && this.gfn_isNull(arrRows2)){
        		for(var i = 0; i < cnt; i++){
        			var chk = this.ds_option.getColumn(i, "CHK");
        			var name = this.ds_option.getColumn(i, "OPT_NM");
        			var type = this.ds_option.getColumn(i, "IPT_TYPE");
        			var nceYn = this.ds_option.getColumn(i, "NCE_YN");

        			this.ds_addInfo.insertRow(i+cnt2);
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "CO_CD", "1000");
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "OPT_NM", this.ds_option.getColumn(i, "OPT_NM"));
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "OPT_CNT", 1);
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "TEST", 10); //OPT_CNT 합치기 위해 만든 컬럼
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "IPT_TYPE", type);
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "NCE_YN", nceYn);
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "flag", "s");
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "PRD_CLCD", prdClcd);
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "OPTN_ITM_NO",  this.ds_option.getColumn(i, "OPTN_ITM_NO"));
        			this.ds_addInfo.setColumn(this.ds_addInfo.rowposition, "OPTN_DTL_ITM_NO", 1);
        		}
        	} else if(cnt > 0 && !this.gfn_isNull(arrRows2)){
        		this.alert("옵션 타입을 설정해주세요.");
        	} else{
        		this.alert("옵션 명을 입력해주세요.");
        	}
        };

        //상세 옵션 수량 설정
        this.ds_addInfo_oncolumnchanged = function(obj,e)
        {
        	var cnt = this.ds_addInfo.getColumn(e.row, "OPT_CNT");
        	var eRow = this.ds_addInfo.rowposition;
        	var name = this.ds_addInfo.getColumn(eRow, "OPT_NM");
        	var type = this.ds_addInfo.getColumn(e.row, "IPT_TYPE");
        	var nceYn = this.ds_addInfo.getColumn(e.row, "NCE_YN");
        	var optnItmNo = this.ds_addInfo.getColumn(e.row, "OPTN_ITM_NO");
        	var optnDtlItmNo = this.ds_addInfo.getColumn(e.row, "OPTN_DTL_ITM_NO");
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");

        	var old = e.oldvalue;
        	var nw = e.newvalue;

        	var newNum = nexacro.toNumber(nw);
        	var oldNum = nexacro.toNumber(old);
        	var sum = newNum - oldNum;
        	var nm = this.ds_addInfo.findRow("OPT_NM", name);

        	if(e.columnid == "OPT_CNT" && newNum-oldNum > 0 && oldNum > 0){ //수량 설정 값이 늘어났을 때
        		var rowNm = this.ds_addInfo.rowposition;
        		var count = this.ds_addInfo.getColumn(e.row, "OPT_CNT");
        		var rowCnt = this.ds_addInfo.rowcount;

        		var cusArray = new Array();

        		for(var i = 0; i < rowCnt; i++){
        			var chk = this.ds_addInfo.getColumn(i, "OPTN_ITM_NO");

        			if(Number(chk) == Number(optnItmNo)){
        				cusArray.push(i);
        			}
        		}

        		var point = cusArray[cusArray.length-1];

        		for(var i = 0; i < newNum - oldNum; i++){
        			this.ds_addInfo.insertRow(point+1+i);
        			this.ds_addInfo.setColumn(point+1+i, "CO_CD", "1000");
        			this.ds_addInfo.setColumn(point+1+i, "OPT_NM", name);
        			this.ds_addInfo.setColumn(point+1+i, "OPT_CNT", cnt);
        			this.ds_addInfo.setColumn(point+1+i, "IPT_TYPE", type);
        			this.ds_addInfo.setColumn(point+1+i, "NCE_YN", nceYn);
        			this.ds_addInfo.setColumn(point+1+i, "PRD_CLCD", prdClcd);
        			this.ds_addInfo.setColumn(point+1+i, "OPTN_ITM_NO", optnItmNo);
        		}

        		//OPTN_DTL_ITM_NO 값 설정
        		for(var i = 0; i < count; i++){
        			this.ds_addInfo.setColumn(e.row+i, "OPTN_DTL_ITM_NO", i+1);
        			this.ds_addInfo.setColumn(e.row+i, "OPT_CNT", count);
        		}

        		this.ds_addInfo.setColumn(e.row+(count-1), "flag", "e");

        		this.ds_pdtCon.clear();
        		this.grid_pdtCon.set_formats('<Formats></Formats>');
        		cusArray.splice(0, cusArray.length);

        	} else if(e.columnid == "OPT_CNT" && newNum-oldNum < 0 && newNum != 0){ //수량 설정 값이 줄어들었을 때

        		var cusArray = new Array();
        		var rowCnt = this.ds_addInfo.rowcount;

        		for(var i = 0; i < rowCnt; i++){
        			var chk = this.ds_addInfo.getColumn(i, "OPTN_ITM_NO");

        			if(Number(chk) == Number(optnItmNo)){
        				cusArray.push(i);
        			}
        		}

        		var point = cusArray[cusArray.length-1];

        		for(var i = 0; i < oldNum - newNum; i++){
        			this.ds_addInfo.deleteRow(point-i);
        		}

        		//OPTN_DTL_ITM_NO 재설정
        		var arrArgs = new Array(0, 0);
        		var arrRows = this.ds_addInfo.extractRows("TEST == '10'", 0, -1, arrArgs);
        		var cntNum = this.ds_addInfo.getColumn(arrRows[e.row], "OPT_CNT");

        		for(var i = 0; i < arrRows.length; i++){
        			var name2 = this.ds_addInfo.getColumn(arrRows[i], "OPT_NM");

        			if(name2 == name){
        				var addCnt = this.ds_addInfo.getColumn(arrRows[i], "OPT_CNT");

        				for(var j = 0; j < addCnt; j++){
        					this.ds_addInfo.setColumn(arrRows[i]+j, "OPTN_DTL_ITM_NO", j+1);
        					this.ds_addInfo.setColumn(arrRows[i]+j, "OPT_CNT", this.ds_addInfo.getColumn(arrRows[i], "OPT_CNT"));
        				}
        			}
        		}

        		var count = this.ds_addInfo.getColumn(e.row, "OPT_CNT");

        		for(var i = 0; i < count; i++){
        			this.ds_addInfo.setColumn(e.row+i, "OPT_CNT", count);
        		}

        		this.ds_pdtCon.clear();
        		this.grid_pdtCon.set_formats('<Formats></Formats>');
        		cusArray.splice(0, cusArray.length);

        	} else if(e.columnid == "OPT_CNT" && newNum-oldNum > 0 && oldNum == 0){ //처음 수량 설정할 때
        		for(var i = 0; i < cnt - 1; i++){
        			this.ds_addInfo.insertRow(e.row+1);
        			this.ds_addInfo.setColumn(e.row+1, "CO_CD", "1000");
        			this.ds_addInfo.setColumn(e.row+1, "OPT_NM", name);
        			this.ds_addInfo.setColumn(e.row+1, "OPT_CNT", cnt);
        			this.ds_addInfo.setColumn(e.row+1, "IPT_TYPE", type);
        			this.ds_addInfo.setColumn(e.row+1, "NCE_YN", nceYn);
        			this.ds_addInfo.setColumn(e.row+1, "PRD_CLCD", prdClcd);
        			this.ds_addInfo.setColumn(e.row+1, "OPTN_ITM_NO", optnItmNo);
        			//this.ds_addInfo.setColumn(e.row+1, "OPTN_DTL_ITM_NO", i+1);
        		}
        		this.ds_pdtCon.clear();
        		this.grid_pdtCon.set_formats('<Formats></Formats>');
        	} else if(e.columnid == "OPT_CNT" && cnt == 0){
        		this.alert("옵션 수량을 입력해주세요.");
        		this.ds_addInfo.setColumn(e.row, "OPT_CNT", oldNum);
        		return false;
        	} else if(e.columnid == "OPT_CNT" && cnt == ""){
        		this.alert("옵션 수량을 입력해주세요.");
        		this.ds_addInfo.setColumn(e.row, "OPT_CNT", oldNum);
        		return false;
        	}

        	this.addCnt();
        };

        //상세 옵션 정렬
        this.addCnt = function(){
        	var cnt = this.ds_addInfo.rowcount;

        	for(var i = 0; i < cnt; i++){
        		this.ds_addInfo.setColumn(i, "SRT_SO", i+1);
        	}
        }

        //상세옵션 이미지 첨부
        this.grid_addInfo_onexpanddown = function(obj,e)
        {
        	this.fileDialog.set_accept(this.fileType); //파일 타입
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        //파일 선택 후 창 닫았을 때
        this.fileDialog_onclose = function(obj,e)
        {
        	for (var i = 0, len = e.virtualfiles.length, vFile; i < len; i++)
        	{
        		vFile = e.virtualfiles[i];
        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);

        		vFile.open(null, VirtualFile.openRead);
        	}
        };

        //업로드 완료된 후 성공코드 값이 전달되었을 때
        this.FileDialog_VirtualFile_onsuccess = function(obj, e)
        {
        	var eRow = this.ds_addInfo.rowposition;

        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.ds_addInfo.setColumn(eRow, "OPT_IMG", obj.filename);
        			obj.close();
        			break;
        	}
        }

        //옵션 설정 순서 변경
        this.grid_option_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();

        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);

        	if ( columnId == "OPT_CHG" ){
        		var size = this.ds_option.rowposition; //클릭된 행
        		var nCellSize2 = obj.getRealRowSize(size); //클릭할 행의 높이
        		var nHalfPos  = nexacro.round(nCellSize2/2); //클릭한 행의 높이 1/2
        		var yy = e.canvasy; //그리드 내 y좌표
        		var num = nexacro.toNumber(size); //그리드 인덱스 숫자 변환

        		if(yy-(24+(num*32)) > nHalfPos){
        			this.ds_option.moveRow(e.row,e.row + 1);
        		} else {
        			this.ds_option.moveRow(e.row,e.row - 1);
        		}
        	}

        	this.change();
        };

        //순서 변경 후 순서 처리
        this.change = function(){
        	var rowCnt = this.ds_option.rowcount;

        	for(var i = 0; i < rowCnt; i++){
        		this.ds_option.setColumn(i, "OPTN_ITM_NO", i+1);
        	}
        }

        //상세 옵션 순서 변경
        this.grid_addInfo_oncellclick = function(obj,e)
        {
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);

        	var name = this.ds_addInfo.getColumn(e.row, "OPT_NM");
        	var test = this.ds_addInfo.getColumn(e.row, "TEST");
        	var test2 = this.ds_addInfo.getColumn(e.row-1, "TEST");
        	var bName = this.ds_addInfo.getColumn(e.row-1, "OPT_NM");
        	var fName = this.ds_addInfo.getColumn(e.row+1, "OPT_NM");

        	var end = this.ds_addInfo.getColumn(e.row, "flag");
        	var end2 = this.ds_addInfo.getColumn(e.row+1, "flag");

        	var itmNoN = this.ds_addInfo.getColumn(e.row, "OPTN_ITM_NO");

        	if ( columnId == "DTLS_CHG" ){
        		var size = this.ds_addInfo.rowposition; //클릭된 행
        		var nCellSize2 = obj.getRealRowSize(size); //클릭할 행의 높이
        		var nHalfPos  = nexacro.round(nCellSize2/2); //클릭한 행의 높이 1/2
        		var yy = e.canvasy; //그리드 내 y좌표
        		var num = nexacro.toNumber(size); //그리드 인덱스 숫자 변환

        		if(yy-(24+(num*32)) > nHalfPos){ //아래로
        			if(name == fName){
        				if(end2 == "e"){
        					this.ds_addInfo.setColumn(e.row, "flag", "e");
        					this.ds_addInfo.setColumn(e.row+1, "flag", "");

        					this.ds_addInfo.moveRow(e.row,e.row + 1);
        				} else{
        					this.ds_addInfo.moveRow(e.row,e.row + 1);
        				}
        			} else{
        				return false;
        			}

        		} else { //위로
        			if(name == bName){
        				if(end == "e"){
        					this.ds_addInfo.setColumn(e.row, "flag", "");
        					this.ds_addInfo.setColumn(e.row-1, "flag", "e");

        					this.ds_addInfo.moveRow(e.row,e.row - 1);
        				} else{
        					this.ds_addInfo.moveRow(e.row,e.row - 1);
        				}
        			} else{
        				return false;
        			}
        		}
        	}

        	this.addChange(itmNoN);
        };

        //OPTN_DTL_ITM_NO 값 변경
        this.addChange = function(itmNoN){
        	var rowCnt = this.ds_addInfo.rowcount;
        	var tmp = 0;

        	for(var i = 0; i < rowCnt; i++){
        		var check = this.ds_addInfo.getColumn(i, "OPTN_ITM_NO");

        		if(Number(check) == Number(itmNoN)){
        			this.ds_addInfo.setColumn(i, "OPTN_DTL_ITM_NO", tmp+1);

        			tmp++;
        		}
        	}
        }

        //▲▲상세 옵션▲▲

        //▼▼추가 정보▼▼

        //추가정보 설정 생성
        this.btn_createInfo_onclick = function(obj,e)
        {
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        	var rowNum = this.ds_addInfoStg.rowcount;

        	if(!this.gfn_isNull(prdClcd)){
        		this.ds_addInfoStg.addRow();
        		this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "CO_CD", "1000");
        		this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "IPT_TYPE", 0);
        		this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "TEST", 0);
        		this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "STG_FILE", "N");
        		this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "PRD_CLCD", prdClcd);

        		//ADD_OPTN_ITM_NO 설정
        		if(rowNum <= 0){
        			this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "ADD_OPTN_ITM_NO", 1);
        		} else if(rowNum => 1){
        			for(var i = 0; i < rowNum; i++){
        				this.ds_addInfoStg.setColumn(this.ds_addInfoStg.rowposition, "ADD_OPTN_ITM_NO", i+2);
        			}
        		}

        		this.ds_addInfoStgDtls.clearData();
        	} else{
        		this.alert("상품군을 선택해주세요.");
        	}


        };

        //추가정보 설정 삭제
        this.btn_delInfo_onclick = function(obj,e)
        {
        	var cnt = this.ds_addInfoStg.getRowCount();
        	var dtlCnt = this.ds_addInfoStgDtls.getRowCount();

        	for(var i = 0; i < cnt; i++){
        		var chk = this.ds_addInfoStg.getColumn(i, "STG_CHK");

        		if(chk == 1) {
        			var stgInfo = this.ds_addInfoStg.getColumn(i, "STG_INFO");
        			for(var j = 0; j < dtlCnt; j++){
        				if(stgInfo == this.ds_addInfoStgDtls.getColumn(j, "STG_INFO")){
        					this.ds_addInfoStgDtls.deleteRow(j);
        					j =- 1;
        				}
        			}
        			this.ds_addInfoStg.deleteRow(i);
        		}
        	}

        	//OPTN_ITM_NO 재설정
        	var arrArgs = new Array(0, 0);
        	var arrRows = this.ds_addInfoStg.extractRows("ADD_OPTN_ITM_NO != ''", 0, -1, arrArgs);

        	for(var i = 0; i < arrRows.length; i++){
        		this.ds_addInfoStg.setColumn(i, "ADD_OPTN_ITM_NO", i+1)
        	}

        	//this.ds_addInfoStgDtls.clearData();
        };

        //추가정보 설정 순서 변경
        this.grid_addInfoStg_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();

        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);

        	var check = this.ds_addInfoStg.getColumn(e.row, "STG_FILE");

        	if ( columnId == "STG_CHG" ){
        		var size = this.ds_addInfoStg.rowposition; //클릭된 행
        		var nCellSize2 = obj.getRealRowSize(size); //클릭할 행의 높이
        		var nHalfPos  = nexacro.round(nCellSize2/2); //클릭한 행의 높이 1/2
        		var yy = e.canvasy; //그리드 내 y좌표
        		var num = nexacro.toNumber(size); //그리드 인덱스 숫자 변환

        		if(yy-(24+(num*32)) > nHalfPos){
        			this.ds_addInfoStg.moveRow(e.row,e.row + 1);
        		} else {
        			this.ds_addInfoStg.moveRow(e.row,e.row - 1);
        		}
        	}

        	this.stgChange();
        };

        //추가정보 설정 순서 변경 후
        this.stgChange = function(){
        	var rowCnt = this.ds_addInfoStg.rowcount;

        	for(var i = 0; i < rowCnt; i++){
        		this.ds_addInfoStg.setColumn(i, "ADD_OPTN_ITM_NO", i+1);
        	}
        }

        //첨부 파일 체크 시 입력 타입 비활성화
        this.ds_addInfoStg_oncolumnchanged = function(obj,e)
        {
        	var cnt = this.ds_addInfoStg.rowcount;
        	var sRow = this.ds_addInfoStg.findRow("STG_FILE", "N");

        	if(e.columnid == "STG_FILE"){
        		for(var i = 0; i < cnt; i++){
        			var check = this.ds_addInfoStg.getColumn(i, "STG_FILE");
        			if(check == "Y"){
        				this.ds_addInfoStg.setColumn(i, "IPT_TYPE", 0);
        			}
        		}
        		this.fn_check();
        	}
        };

        //상세 추가 정보 생성
        this.btn_createInfoDtls_onclick = function(obj,e)
        {
        	var cnt = this.ds_addInfoStg.rowcount;
        	var cnt2 = this.ds_addInfoStgDtls.rowcount;
        	var ok = this.ds_addInfoStg.findRow("STG_CHK", 1);
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");

        	var arrArgs = new Array(0, 0);
        	var arrRows = this.ds_addInfoStg.extractRows("STG_INFO == ''||STG_INFO == undefined", 0, -1, arrArgs);

        	var arrArgs2 = new Array(0, 0);
        	var arrRows2 = this.ds_addInfoStg.extractRows("IPT_TYPE == '0' && STG_FILE == 'N'", 0, -1, arrArgs2);

        	this.ds_addInfoStgDtls.clearData();

        	if(cnt == 0){
        		this.alert("옵션을 설정해주세요.");
        	} else if(cnt > 0 && this.gfn_isNull(arrRows) && this.gfn_isNull(arrRows2)){
        		for(var i = 0; i < cnt; i++){
        			var chk = this.ds_addInfoStg.getColumn(i, "STG_CHK");
        			var name = this.ds_addInfoStg.getColumn(i, "STG_INFO");
        			var type = this.ds_addInfoStg.getColumn(i, "IPT_TYPE");

        			if(!this.gfn_isNull(name)){
        				this.ds_addInfoStgDtls.insertRow(i+cnt2);
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "CO_CD", "1000");
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "STG_INFO", this.ds_addInfoStg.getColumn(i, "STG_INFO"));
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "STG_INFO_CNT", 1);
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "TEST", 10); //OPT_CNT 합치기 위해 만든 컬럼
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "IPT_TYPE", type);
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "PRD_CLCD", prdClcd);
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "ADD_OPTN_ITM_NO",  this.ds_addInfoStg.getColumn(i, "ADD_OPTN_ITM_NO"));
        				this.ds_addInfoStgDtls.setColumn(this.ds_addInfoStgDtls.rowposition, "ADD_OPTN_DTL_ITM_NO", 1);
        			}
        		}
        	} else if(cnt > 0 && !this.gfn_isNull(arrRows2)){
        		this.alert("옵션 타입을 설정해주세요.");
        	} else{
        		this.alert("옵션 명을 입력해주세요.");
        	}
        };

        //상세 추가 정보 생성 >> 정보 개수 변경
        this.ds_addInfoStgDtls_oncolumnchanged = function(obj,e)
        {
        	var cnt = this.ds_addInfoStgDtls.getColumn(e.row, "STG_INFO_CNT");
        	var eRow = this.ds_addInfoStgDtls.rowposition;
        	var name = this.ds_addInfoStgDtls.getColumn(eRow, "STG_INFO");
        	var type = this.ds_addInfoStgDtls.getColumn(e.row, "IPT_TYPE");
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");
        	var optnItmNo = this.ds_addInfoStgDtls.getColumn(e.row, "ADD_OPTN_ITM_NO");

        	var old = e.oldvalue;
        	var nw = e.newvalue;

        	var newNum = nexacro.toNumber(nw);
        	var oldNum = nexacro.toNumber(old);
        	var nm = this.ds_addInfo.findRow("STG_INFO", name);

        	var rowCnt = this.ds_addInfoStgDtls.rowcount;
        	var cusArray = new Array();

        	if(e.columnid == "STG_INFO_CNT" && newNum-oldNum > 0 && oldNum > 0){ //수량 설정 값이 늘어났을 때

        		for(var i = 0; i < rowCnt; i ++){
        			var chk = this.ds_addInfoStgDtls.getColumn(i, "ADD_OPTN_ITM_NO");

        			if(Number(chk) == Number(optnItmNo)){
        				cusArray.push(i);
        			}
        		}

        		var point = cusArray[cusArray.length-1];

        		for(var i = 0; i < newNum - oldNum; i++){
        			this.ds_addInfoStgDtls.insertRow(point+1+i);
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "CO_CD", "1000");
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "STG_INFO", name);
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "STG_INFO_CNT", cnt);
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "IPT_TYPE", type);
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "PRD_CLCD", prdClcd);
        			this.ds_addInfoStgDtls.setColumn(point+1+i, "ADD_OPTN_ITM_NO", optnItmNo);
        		}

        		//ADD_OPTN_DTL_ITM_NO 값 설정
        		var count = this.ds_addInfoStgDtls.getColumn(e.row, "STG_INFO_CNT");

        		for(var i = 0; i < count; i++){
        			this.ds_addInfoStgDtls.setColumn(e.row+i, "ADD_OPTN_DTL_ITM_NO", i+1);
        			this.ds_addInfoStgDtls.setColumn(e.row+i, "STG_INFO_CNT", count);
        		}

        	} else if(e.columnid == "STG_INFO_CNT" && newNum-oldNum < 0 && newNum != 0){ //수량 설정 값이 줄어들었을 때

        		for(var i = 0; i < rowCnt; i ++){
        			var chk = this.ds_addInfoStgDtls.getColumn(i, "ADD_OPTN_ITM_NO");

        			if(Number(chk) == Number(optnItmNo)){
        				cusArray.push(i);
        			}
        		}

        		var point = cusArray[cusArray.length-1];

        		for(var i = 0; i < oldNum - newNum; i++){
        			this.ds_addInfoStgDtls.deleteRow(point-i);
        		}

        		//ADD_OPTN_DTL_ITM_NO 재설정
        		var arrArgs = new Array(0, 0);
        		var arrRows = this.ds_addInfoStgDtls.extractRows("TEST == '10'", 0, -1, arrArgs);
        		var cntNum = this.ds_addInfoStgDtls.getColumn(arrRows[e.row], "STG_INFO_CNT");

        		for(var i = 0; i < arrRows.length; i++){
        			var name2 = this.ds_addInfoStgDtls.getColumn(arrRows[i], "STG_INFO");

        			if(name2 == name){
        				var addCnt = this.ds_addInfoStgDtls.getColumn(arrRows[i], "STG_INFO_CNT");

        				for(var j = 0; j < addCnt; j++){
        					this.ds_addInfoStgDtls.setColumn(arrRows[i]+j, "ADD_OPTN_DTL_ITM_NO", j+1);
        					this.ds_addInfoStgDtls.setColumn(arrRows[i]+j, "STG_INFO_CNT", this.ds_addInfoStgDtls.getColumn(arrRows[i], "STG_INFO_CNT"));
        				}
        			}
        		}

        		var count = this.ds_addInfoStgDtls.getColumn(e.row, "STG_INFO_CNT");

        		for(var i = 0; i < count; i++){
        			this.ds_addInfoStgDtls.setColumn(e.row+i, "STG_INFO_CNT", count);
        		}

        	} else if(e.columnid == "STG_INFO_CNT" && newNum-oldNum > 0 && oldNum == 0){ //처음 수량 설정할 때
        		for(var i = 0; i < cnt - 1; i++){
        			this.ds_addInfoStgDtls.insertRow(e.row+1);
        			this.ds_addInfoStgDtls.setColumn(e.row+1, "CO_CD", "1000");
        			this.ds_addInfoStgDtls.setColumn(e.row+1, "STG_INFO", name);
        			this.ds_addInfoStgDtls.setColumn(e.row+1, "STG_INFO_CNT", cnt);
        			this.ds_addInfoStgDtls.setColumn(e.row+1, "IPT_TYPE", type);
        			this.ds_addInfoStgDtls.setColumn(e.row+1, "PRD_CLCD", prdClcd);
        		}
        	} else if(e.columnid == "STG_INFO_CNT" && cnt == 0){
        		this.alert("옵션 수량을 입력해주세요.");
        		this.ds_addInfoStgDtls.setColumn(e.row, "STG_INFO_CNT", oldNum);
        		return false;
        	} else if(e.columnid == "STG_INFO_CNT" && cnt == ""){
        		this.alert("옵션 수량을 입력해주세요.");
        		this.ds_addInfoStgDtls.setColumn(e.row, "STG_INFO_CNT", oldNum);
        		return false;
        	}
        };

        //상세 추가 정보 생성 순서 변경
        this.grid_addInfoStgDtls_oncellclick = function(obj,e)
        {
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);

        	var name = this.ds_addInfoStgDtls.getColumn(e.row, "STG_INFO");
        	var test = this.ds_addInfoStgDtls.getColumn(e.row, "TEST");
        	var test2 = this.ds_addInfoStgDtls.getColumn(e.row-1, "TEST");
        	var bName = this.ds_addInfoStgDtls.getColumn(e.row-1, "STG_INFO");
        	var fName = this.ds_addInfoStgDtls.getColumn(e.row+1, "STG_INFO");

        	var itmNo = this.ds_addInfoStgDtls.getColumn(e.row, "ADD_OPTN_ITM_NO");

        	if ( columnId == "STG_CHG" ){
        		var size = this.ds_addInfoStgDtls.rowposition; //클릭된 행
        		var nCellSize2 = obj.getRealRowSize(size); //클릭할 행의 높이
        		var nHalfPos  = nexacro.round(nCellSize2/2); //클릭한 행의 높이 1/2
        		var yy = e.canvasy; //그리드 내 y좌표
        		var num = nexacro.toNumber(size); //그리드 인덱스 숫자 변환

        		if(yy-(24+(num*32)) > nHalfPos){
        			if(name == fName){
        				this.ds_addInfoStgDtls.moveRow(e.row,e.row + 1);
        			} else{
        				return false;
        			}

        		} else {
        			if(name == bName){
        				this.ds_addInfoStgDtls.moveRow(e.row,e.row - 1);
        			} else{
        				return false;
        			}
        		}
        	}

        	this.stgDtlChange(itmNo);
        };

        //순서 변경 후 ADD_OPTN_DTL_ITM_NO 값 변경
        this.stgDtlChange = function(itmNo){
        	var rowCnt = this.ds_addInfoStgDtls.rowcount;
        	var tmp = 0;

        	for(var i = 0; i < rowCnt; i++){
        		var check = this.ds_addInfoStgDtls.getColumn(i, "ADD_OPTN_ITM_NO");

        		if(Number(check) == Number(itmNo)){
        			this.ds_addInfoStgDtls.setColumn(i, "ADD_OPTN_DTL_ITM_NO", tmp+1);

        			tmp++;
        		}
        	}
        }
        //▲▲추가 정보▲▲

        //상품 연결 버튼 (동적그리드)
        this.btn_pdtCon_onclick = function(obj,e)
        {
        	//동적 그리드 초기화
        	var oRow = this.grid_pdtCon.getCellCount("head");

        	this.grid_pdtCon.deleteContentsRow("head", 0);
        	this.grid_pdtCon.deleteContentsRow("body", 0);

        	var arrArgs3 = new Array(0, 0);
        	var arrRows3 = this.ds_option.extractRows("NCE_YN == 'Y'", 0, -1, arrArgs3);

        	for(var i = 1; i < oRow; i++){
        		this.grid_pdtCon.deleteContentsCol(0);
        	}

        	//동적 그리드 시작
        	this.grid_pdtCon.appendContentsRow("head");
        	this.grid_pdtCon.appendContentsRow("body");

        	var dtlCnt = this.grid_addInfo.rowcount;
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");

        	//Col 생성
        	for(var i = 0; i < arrRows3.length+3; i++){
        		this.grid_pdtCon.appendContentsCol();
        		this.grid_pdtCon.getCellCount("head");
        	}

        	//데이터셋에 컬럼 생성
        	var optNum1 = this.ds_option.rowcount;

        	for(var i = 0; i < optNum1; i++){
        		var optName = this.ds_option.getColumn(i, "OPT_NM");
        		var check = this.ds_option.getColumn(i, "NCE_YN");
        		var type = this.ds_option.getColumn(i, "IPT_TYPE");

        		if(check == "Y"){
        			if(type == 1 || type == 4){
        				this.ds_pdtCon.addColumn(optName, "string");
        			}
        		}

        		if(i == optNum1-1){
        			for(var j = 0; j < 6; j++){
        				this.ds_pdtCon.addColumn("product"+j, "string");
        			}
        		}
        	}

        	var map = new Map();
        	var tmpList = [];
        	var tmpCnt = 0;

        	for(var i = 0; i <  this.ds_addInfo.rowcount; i++){
        		var tmpMap = {};
        		tmpMap.nm = this.ds_addInfo.getColumn(i, "OPT_PRT");
        		tmpList.push(tmpMap);
        		if(this.ds_addInfo.getColumn(i, "flag") == "e"){
        			map.set("list" + tmpCnt, tmpList);

        			tmpList = [];
        			tmpCnt++;
        		}
        	}

        	var newList = [];
        	var cnt = 0;
        	var newMap = new Map();

         	this.fo = function (no){
         		if(no == map.size){
         			return 1;
         		}

        		this.ds_pdtCon.addColumn(this.ds_option.getColumn(no, "OPT_NM"), "STRING");
         		for(var i = 0; i <  map.get("list" + no).length; i++){
        			if(no == map.size-1){
        				this.ds_pdtCon.addRow();
        				this.ds_pdtCon.setColumn(cnt, this.ds_option.getColumn(no, "OPT_NM"), map.get("list" + no)[i].nm);
        				for(var y = 0; y <  newMap.size; y++){
        					this.ds_pdtCon.setColumn(cnt, this.ds_option.getColumn(y, "OPT_NM"), newMap.get(this.ds_option.getColumn(y, "OPT_NM")));
        				}
        				cnt++;
        			}else{
        				newMap.set(this.ds_option.getColumn(no, "OPT_NM"), map.get("list" + no)[i].nm);
        			}

        			this.fo(no+1);
         		}
         	}

         	this.fo(0);


        	//바디 데이터 바인딩
        	var rowPdt = this.ds_pdtCon.rowcount;

        	for(var i = 0; i < arrRows3.length; i++){
        		var col = this.ds_pdtCon.getColID(i);

        		for(var j = 0; j < rowPdt; j++){
        			var value = this.ds_pdtCon.getColIndex(col);
        			this.grid_pdtCon.setCellProperty("body", i, "text", "bind:"+value);
        		}
        	}

        	//헤드 데이터 바인딩
        	for(var i = 0; i < arrRows3.length; i++){
        		var colname = this.ds_option.getColumn(arrRows3[i], "OPT_NM");
        		var check = this.ds_option.getColumn(arrRows3[i], "NCE_YN");
        		var type = this.ds_option.getColumn(arrRows3[i], "IPT_TYPE");

        		if(check == "Y"){
        			if(type == 1 || type == 4){
        				this.grid_pdtCon.setFormatColProperty(i, "size", 180);
        				this.grid_pdtCon.setCellProperty("head", i, "text", colname);
        			}
        		}
        	}

        // 	//db저장 시 필요 데이터
        // 	var pdtCnt = this.ds_pdtCon.getColCount();
         	var pdtRow = this.grid_pdtCon.rowcount;
        //
        // 	for(var i = 0; i < pdtRow; i++){
        // 		//this.ds_pdtCon.setColumn(i, pdtCnt-4, i+1); //mappCts
        // 		this.ds_pdtCon.setColumn(i, pdtCnt-3, "1000"); //coCd
        // 		this.ds_pdtCon.setColumn(i, pdtCnt-2, prdClcd); //prdClcd
        // 		this.ds_pdtCon.setColumn(i, pdtCnt-1, i+1); //mappItmNo
        // 	}

        	//상품 연결 editcontrol
        	for(var i = 0; i < 3; i++){
        		this.grid_pdtCon.setCellProperty("head", arrRows3.length+i, "align", "center");
        		this.grid_pdtCon.setFormatColProperty(arrRows3.length+i, "size", 150);
        		this.grid_pdtCon.setCellProperty("head", arrRows3.length+i, "text", "상품 연결");
        		this.grid_pdtCon.setCellProperty("body", arrRows3.length+i, "displaytype", "editcontrol");
        		this.grid_pdtCon.setCellProperty("body", arrRows3.length+i, "edittype", "text");
        	}

        	//상품 연결 expand
        	this.grid_pdtCon.setFormatColProperty(arrRows3.length+3, "size", 40);
        	this.grid_pdtCon.setCellProperty("head", arrRows3.length+3, "text", "상품 연결");
        	this.grid_pdtCon.setCellProperty("body", arrRows3.length+3, "expandshow", "show");
        	this.grid_pdtCon.setCellProperty("body", arrRows3.length+3, "expandsize", 32);

        	this.grid_pdtCon.mergeContentsCell("head", 0, arrRows3.length, 0, arrRows3.length+3, arrRows3.length+1, false);

        	for(var i = 0; i < pdtRow; i++){
        		this.grid_pdtCon.setFormatRowProperty(i, "size", 32);
        	}
        };

        //상품 연결 expand 버튼 클릭 시
        this.grid_pdtCon_onexpanddown = function(obj,e)
        {
        	var clcdCheck = this.ds_product.getColumn(0, "PRD_CLCD");

        	var oArg = {
        		coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        		, prdClcd : clcdCheck
        	};

        	var opts = { title : '연결 상품 조회', titlebar: 'true' }
        	this.gfn_openPopup("pdtConPop", "PR_POP::SSP_BO_PP_38.xfdl", oArg, "fn_popupCallback", opts);
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	var check = this.ds_product.getColumn(0, "PRD_CLCD");
        	var check2 = this.ds_check.getColumn(0, "CD");
        	var check3 = this.ds_search.getColumn(0, "DISP_PRD_NM");
        	var check4 = this.ds_list.getColumn(0, "PRD_ID_VIEW");
        	var check5 = this.ds_search.getColumn(0, "PRFRT");

        	var check11 = this.gfn_dsIsUpdated(this.ds_search);
        	var check22 = this.gfn_dsIsUpdated(this.ds_product);
        	var check33 = this.gfn_dsIsUpdated(this.ds_list);
        	var check44 = this.gfn_dsIsUpdated(this.ds_listAdd);
        	var check55 = this.gfn_dsIsUpdated(this.ds_option);
        	var check66 = this.gfn_dsIsUpdated(this.ds_addInfo);
        	var check77 = this.gfn_dsIsUpdated(this.ds_pdtCon);
        	var check88 = this.gfn_dsIsUpdated(this.ds_addInfoStg);
        	var check99 = this.gfn_dsIsUpdated(this.ds_addInfoStgDtls);

        	this.ds_search.setColumn(0, "CO_CD", "1000");

        	if(this.gfn_isNull(check)){
        		this.alert("상품군을 입력해주세요.");
        		return;
        	} else if(this.gfn_isNull(check3)){
        		this.alert("전시상품명을 입력해주세요.");
        		return;
        	} else if(this.gfn_isNull(check4)){
        		this.alert("대표상품ID를 선택해주세요.");
        		return;
        	} else if(this.gfn_isNull(check5)){
        		this.alert("매익율을 입력해주세요.");
        		return;
        	} else if(!this.gfn_isNull(check) && check2 == "Y"){

        		if(check11 == true || check22 == true || check55 == true || check66 == true || check77 == true || check88 == true || check99 == true){
        			var prd = this.ds_product.getColumn(0, "PRD_CLCD");
        			var params = {
        				prdClcd: prd
        			};
        			var options = { title : '전시상품 변경이유', titlebar: 'true' }

        			this.gfn_openPopup("recordPop", "PR_POP::SSP_BO_NA_27.xfdl", params,  "fn_popupCallback", options);

        			this.fn_update(); //기본 정보 수정
        			this.fn_updateOption(); //옵션 수정
        			this.fn_updateOptionDtl(); //상세 옵션 수정
        			this.fn_updateStg(); //추가 정보 수정
        			this.fn_updateStgDtl(); //상세 추가 정보 수정

        		} else{
        			this.alert(this.gfn_getMessage('ERRP000129'));	//변경 된 내용이 없습니다.
        			this.close();
        		}

        	} else if(!this.gfn_isNull(check) && check2 != "Y"){
        		this.fn_save(); //기본 정보 저장
        		this.fn_save1(); //옵션 저장
        		this.fn_save2(); //상세 옵션 저장
        		this.fn_save3(); //연결 상품 저장
        		this.fn_save4(); //추가정보 옵션 저장
        		this.fn_save5(); //추가정보 상세 옵션 저장
        	}
        };

        //목록
        this.btn_list_onclick = function(obj,e)
        {
        	var check1 = this.gfn_dsIsUpdated(this.ds_search);
        	var check2 = this.gfn_dsIsUpdated(this.ds_product);
        	var check3 = this.gfn_dsIsUpdated(this.ds_list);
        	var check4 = this.gfn_dsIsUpdated(this.ds_listAdd);
        	var check5 = this.gfn_dsIsUpdated(this.ds_option);
        	var check6 = this.gfn_dsIsUpdated(this.ds_addInfo);
        	var check7 = this.gfn_dsIsUpdated(this.ds_pdtCon);
        	var check8 = this.gfn_dsIsUpdated(this.ds_addInfoStg);
        	var check9 = this.gfn_dsIsUpdated(this.ds_addInfoStgDtls);

        	if(check1 == true || check2 == true || check5 == true || check6 == true || check7 == true || check8 == true || check9 == true){
        		if(confirm("저장하지 않은 내용은 삭제됩니다. 목록으로 돌아가시겠습니까?")){
        			var resData = {};
        			var resString = "";

        			resData.RETURN_YN = "N";

        			// json string 변경
        			resString = JSON.stringify(resData);

        			// return
        			this.close(resString);
        		}
        	} else{
        		this.close();
        	}
        };

        //변경 이력
        this.btn_search_onclick = function(obj,e)
        {
        	var prdClcd = this.ds_product.getColumn(0, "PRD_CLCD");

        	var params = {
        		historyType : 'disp', //히스토리 유형 필수값
        		key1 : prdClcd
        		//필요에따라 추가
        	};
        	var options = {};
        	options.title = "전시상품 변경이력";
        	this.gfn_openPopup("recordPop", "PR_POP::SSP_BO_PA_48.xfdl", params,  "", options);
        };

        //상품군 엔터
        this.edt_productNm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ){
        		if( e.fromobject.valueOf() == "[object Edit]" ){
        			if( e.fromobject.id == "edt_productId" || e.fromobject.id == "edt_productNm"){
        				this.fn_productInfoSearch();
        			}
        		}
        	}
        };

        //대표상품 엔터
        this.edt_prdId_onkeyup = function(obj,e)
        {
        	var check = this.ds_product.getColumn(0, "PRD_CLCD");

        	if( e.keycode == 13 ){
        		if(!this.gfn_isNull(check)){
        			if( e.fromobject.valueOf() == "[object Edit]" ){
        				if( e.fromobject.id == "edt_prdId" ){
        					this.fn_prdIdInfoSearch();
        				}
        		}
        		} else{
        			this.alert("상품군을 선택해주세요.");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static03.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static04.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.edt_productId.addEventHandler("onkeyup",this.edt_productNm_onkeyup,this);
            this.edt_productNm.addEventHandler("onkeyup",this.edt_productNm_onkeyup,this);
            this.btn_productPop.addEventHandler("onclick",this.btn_productPop_onclick,this);
            this.Static05_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_01_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.div_search_Static01_onclick,this);
            this.Static05_01_01_00_01.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00_01_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_00_01_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static05_01_01_02_00_00_00.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.btn_prdIdMultiPopup.addEventHandler("onclick",this.btn_prdIdMultiPopup_onclick,this);
            this.Radio_pdtType.addEventHandler("onitemchanged",this.Radio_pdtType_onitemchanged,this);
            this.Radio_pdtType00.addEventHandler("onitemchanged",this.Radio_pdtType00_onitemchanged,this);
            this.Static05_01_01_02.addEventHandler("onclick",this.div_search_Static05_01_01_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btn_addOption.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delOption.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_addInfo.addEventHandler("onclick",this.btn_addInfo_onclick,this);
            this.grid_option.addEventHandler("oncellclick",this.grid_option_oncellclick,this);
            this.grid_addInfo.addEventHandler("oncellclick",this.grid_addInfo_oncellclick,this);
            this.grid_addInfo.addEventHandler("onexpanddown",this.grid_addInfo_onexpanddown,this);
            this.btn_pdtCon.addEventHandler("onclick",this.btn_pdtCon_onclick,this);
            this.grid_pdtCon.addEventHandler("oncellclick",this.grid_pdtCon_oncellclick,this);
            this.grid_pdtCon.addEventHandler("onexpanddown",this.grid_pdtCon_onexpanddown,this);
            this.Static01_00_00_01_00.addEventHandler("onclick",this.Static01_00_00_01_00_onclick,this);
            this.grid_addInfoStg.addEventHandler("oncellclick",this.grid_addInfoStg_oncellclick,this);
            this.btn_createInfo.addEventHandler("onclick",this.btn_createInfo_onclick,this);
            this.btn_delInfo.addEventHandler("onclick",this.btn_delInfo_onclick,this);
            this.grid_addInfoStgDtls.addEventHandler("oncellclick",this.grid_addInfoStgDtls_oncellclick,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_createInfoDtls.addEventHandler("onclick",this.btn_createInfoDtls_onclick,this);
            this.btn_save00.addEventHandler("onclick",this.btn_save_onclick,this);
            this.ds_search.addEventHandler("onload",this.ds_search_onload,this);
            this.ds_list.addEventHandler("onvaluechanged",this.ds_list_onvaluechanged,this);
            this.ds_product.addEventHandler("onvaluechanged",this.ds_product_onvaluechanged,this);
            this.ds_addInfo.addEventHandler("oncolumnchanged",this.ds_addInfo_oncolumnchanged,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.ds_addInfoStg.addEventHandler("oncolumnchanged",this.ds_addInfoStg_oncolumnchanged,this);
            this.ds_addInfoStgDtls.addEventHandler("oncolumnchanged",this.ds_addInfoStgDtls_oncolumnchanged,this);
            this.ds_listAdd.addEventHandler("onvaluechanged",this.ds_listAdd_onvaluechanged,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
