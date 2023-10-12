(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_SN_09");
            this.set_titletext("정산 대사 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DCN_YN\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_NO_AND_ITEM_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_FW_SPR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FW_RSN_CTS\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_BIL_SPR_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_BIL_ITM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RCV_EMAIL_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"255\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"255\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"255\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DLGTE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REPR_ATTR\" type=\"STRING\" size=\"255\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"255\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"SUM_SALE_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"COST_TRNSF_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"COST_TRNSF_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_GI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DCN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"CO_CD\"/><Col id=\"ADJ_YM\"/><Col id=\"BZPLC_ID\"/><Col id=\"OPR_UNIT_ID\"/><Col id=\"ADJ_DCN_DEALR_ID\"/><Col id=\"DCN_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dcnYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE_CD\"/></Row><Row><Col id=\"CODE_NM\">확정</Col><Col id=\"CODE_CD\">Y</Col></Row><Row><Col id=\"CODE_NM\">미확정</Col><Col id=\"CODE_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"COM_CLSF_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chkList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chkList1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DCN_YN\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_NO_AND_ITM_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_FW_SPR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FW_RSN_CTS\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_BIL_SPR_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_BIL_ITM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RCV_EMAIL_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"255\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"255\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"255\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DLGTE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REPR_ATTR\" type=\"STRING\" size=\"255\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"255\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"SUM_SALE_AMT\" type=\"STRING\" size=\"255\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"COST_TRNSF_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"COST_TRNSF_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_GI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","46",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","62",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_insMonth","20","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("검수월");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ordDept","20","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("주문 부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ordNm","20","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("확정 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_workPlacePopup","829","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_workPlaceMemo","852","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_confirm","882","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","461","165","66","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_workPlace","462","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_workPlace","602","4","223","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ordNum","462","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("주문 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_confirm","160","66","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds_dcnYn");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_confirmNm","462","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_insMonth","160","4","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM");
            obj.set_readonly("false");
            obj.set_editformat("yyyy-MM");
            obj.set_showmonthspin("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_oprUnit","882","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","1022","4","236","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitPopup","1262","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMemo","1285","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_acc","882","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ordDept","160","35","245","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordDeptPopup","409","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordDeptMemo","432","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ordNum","602","35","223","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordNumPopup","829","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordNumMemo","852","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_acc","1022","35","236","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_accPopup","1262","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_accMemo","1285","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_resList","20","249",null,null,"20","116",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fillareatype("none");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_resList");
            obj.set_autoenter("none");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"확정 여부\"/><Cell col=\"2\" text=\"검수월\"/><Cell col=\"3\" text=\"주문 품목 번호\"/><Cell col=\"4\" text=\"주문수량\"/><Cell col=\"5\" text=\"전월/이월 구분\"/><Cell col=\"6\" text=\"전월/이월 사유\"/><Cell col=\"7\" text=\"계산서 구분\"/><Cell col=\"8\" text=\"계산서 품목명\"/><Cell col=\"9\" text=\"수신 E-mail\"/><Cell col=\"10\" text=\"사업장 ID\"/><Cell col=\"11\" text=\"사업장명\"/><Cell col=\"12\" text=\"운영단위ID\"/><Cell col=\"13\" text=\"운영단위명\"/><Cell col=\"14\" text=\"주문 부서 코드\"/><Cell col=\"15\" text=\"주문 부서명\"/><Cell col=\"16\" text=\"주문자\"/><Cell col=\"17\" text=\"주문 대행자\"/><Cell col=\"18\" text=\"수령인\"/><Cell col=\"19\" text=\"상품 ID\"/><Cell col=\"20\" text=\"상품명\"/><Cell col=\"21\" text=\"규격\"/><Cell col=\"22\" text=\"판매가\"/><Cell col=\"23\" text=\"판매금액&#13;&#10;(VAT제외)\"/><Cell col=\"24\" text=\"세액\"/><Cell col=\"25\" text=\"판매금액&#13;&#10;(VAT포함)\"/><Cell col=\"26\" text=\"주문&#13;&#10;단위\"/><Cell col=\"27\" text=\"이체 부서 코드\"/><Cell col=\"28\" text=\"이체 부서명\"/><Cell col=\"29\" text=\"계정 코드\"/><Cell col=\"30\" text=\"계정명\"/><Cell col=\"31\" text=\"고객사 코드\"/><Cell col=\"32\" text=\"주문 생성 일시\"/><Cell col=\"33\" text=\"배송완료 일시\"/><Cell col=\"34\" text=\"입고처리 일시\"/><Cell col=\"35\" text=\"입고자 명\"/><Cell col=\"36\" text=\"자동 입고 여부\"/><Cell col=\"37\" text=\"확정 일시\"/><Cell col=\"38\" text=\"확정자 ID\"/><Cell col=\"39\" text=\"확정자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:[DCN_YN] == &quot;Y&quot; ? &quot;확정&quot; : &quot;미확정&quot;\" color=\"#000000\" textDecoration=\"none\"/><Cell col=\"2\" text=\"bind:ADJ_YM\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/><Cell col=\"3\" text=\"bind:ODR_NO_AND_ITEM_NO\" textAlign=\"center\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:ODR_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:ADJ_FW_SPR_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:FW_RSN_CTS\"/><Cell col=\"7\" text=\"bind:ADJ_BIL_SPR_CD\"/><Cell col=\"8\" text=\"bind:ADJ_BIL_ITM_NM\"/><Cell col=\"9\" text=\"bind:RCV_EMAIL_ADDR\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:OPR_UNIT_ID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:ODR_DEPT_CD\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:ODR_DEPT_NM\" textAlign=\"left\"/><Cell col=\"16\" text=\"expr:comp.parent.fn_secureName(currow, &quot;ODRPSN_NM&quot;, dataset)\" textAlign=\"center\"/><Cell col=\"17\" text=\"expr:comp.parent.fn_secureName(currow, &quot;ODR_DLGTE_NM&quot;, dataset)\" textAlign=\"center\"/><Cell col=\"18\" text=\"expr:comp.parent.fn_secureName(currow, &quot;RCVR_NM&quot;, dataset)\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:PRD_ID\"/><Cell col=\"20\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:REPR_ATTR\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:SALSPRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:SALE_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:VAT_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:SUM_SALE_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"27\" text=\"bind:COST_TRNSF_DEPT_CD\"/><Cell col=\"28\" text=\"bind:COST_TRNSF_DEPT_NM\"/><Cell col=\"29\" text=\"bind:ACCT_ID\"/><Cell col=\"30\" text=\"bind:ACCT_NM\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:ACCT_CD\"/><Cell col=\"32\" text=\"bind:ODR_DCN_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/><Cell col=\"33\" text=\"bind:DLV_CMPL_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtext=\" \" calendardisplaynulltext=\" \"/><Cell col=\"34\" text=\"bind:GI_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/><Cell col=\"35\" text=\"expr:comp.parent.fn_secureName(currow, &quot;GDPSN_NM&quot;, dataset)\" textAlign=\"center\"/><Cell col=\"36\" text=\"bind:AUTO_GI_YN\"/><Cell col=\"37\" text=\"bind:ADJ_DCN_DTM\"/><Cell col=\"38\" text=\"bind:ADJ_DCN_DEALR_ID\"/><Cell col=\"39\" text=\"expr:comp.parent.fn_secureName(currow, &quot;ADJ_DCN_DEALR_NM&quot;, dataset)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","221","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_1","20","20","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("■  조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_2","21","198","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■  목록");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cNum",null,"210","100","28","231",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_cNum_innerdataset = new nexacro.NormalDataset("cbo_cNum_innerdataset", obj);
            cbo_cNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cNum_innerdataset);
            obj.set_text("1,000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"210","100","28","cbo_cNum:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"150","115","30","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("정산내역조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCal",null,"150","130","30","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("미정산내역조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"150","60","30","btn_searchCal:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"150","60","30","btn_reset:4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"36","30","10","1281",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","1305","78","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","1258","78","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"216","30","10","1271",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00_00",null,"730","30","30","616",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelBigDown",null,"210","128","28","btn_excel00:4",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("대용량 다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"210","100","28","126",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"210","100","28","21",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancelConfirm",null,"210","110","28","btn_excelBigDown:4",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_historyInq",null,"210","110","28","btn_cancelConfirm:4",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("이력조회");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cal_insMonth","value","ds_search","ADJ_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_workPlace","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_oprUnit","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_ordDept","value","ds_search","eODR_DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_ordNum","value","ds_search","eODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_acc","value","ds_search","eACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cbo_confirm","value","ds_search","DCN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_SN_09.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_SN_09.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 재고 관리 - S-MRP 마스터 조회 목록
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.nOdrInqTgt = 0;
        //미정산내역 조회 구분
        this.noCal = 'N';

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();

        	//달력 현재날짜 디폴트설정
        	this.Div00.form.cal_insMonth.set_value(this.gfn_getDate("date"));
        	this.copyPaste.addGrid(this.grd_resList);
        	//콤보박스 디폴트값 설정
        	this.Div00.form.cbo_confirm.set_index(0);

        	this.fn_odCommLoading(); //공통메세지코드 로딩
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_SN_09_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //조회
        this.fn_search = function(page)	{
        	var sSvcId = "selectCalculateList";
        	var sUrl = "/ad/cal/select-calculate-list.do";

        	if (this.noCal == 'Y') {
        		sSvcId = "selectNoCalculateList";
        		sUrl = "/ad/cal/select-no-calculate-list.do";
        		this.ds_search.setColumn(0, "NO_CAL", "Y");
        	} else {
        		sSvcId = "selectCalculateList";
        		sUrl = "/ad/cal/select-calculate-list.do";
        		this.ds_search.setColumn(0, "NO_CAL", "N");
        	}

        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_resList=ds_output1 ds_search=ds_output2";
        	var arg = "";

        	//연월만 사용 (미정산내역전체조회 - 사용 안 함)
        	if (this.noCal == 'N') {
        		this.ds_search.setColumn(0,"ADJ_YM",this.ds_search.getColumn(0,"ADJ_YM").substr(0, 6));
        	}

        	if( page ) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_cNum.value);
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);
        		this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 엑셀 대용량다운로드
        this.fn_excelBigDownload = function() {
        	//연월만 사용 (미정산내역전체조회 - 사용 안 함)
        	if (this.noCal == 'N') {
        		this.ds_search.setColumn(0,"ADJ_YM", this.ds_search.getColumn(0, "ADJ_YM").substr(0, 6));
        	}

        	if (this.noCal == "Y") {
        		this.ds_search.setColumn(0, "NO_CAL", "Y");
        	}
        	else {
        		this.ds_search.setColumn(0, "NO_CAL", "N");
        	}

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);

        	var sSvcId = "excelBigDownloadSN09";
        	var sUrl = "/od/orderExcel/excelBigDownloadSN09.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectCalculateList"){
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());

        		this.Div00.form.set_enable(false);
        		this.cbo_cNum.set_enable(false);

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_cNum.value,"fn_pageCallback");
        	}
        	else if(svcID == "selectNoCalculateList"){
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_cNum.value,"fn_pageCallback");
        	}
        	else if(svcID == "insertOdrInqTgtDtls"){
        		if(this.nOdrInqTgt == 0)	{
        			trace("### insertOdrInqTgtDtls - insert count : " + this.insertCount);
        			this.fn_search(true);
        		}
        		else if(this.nOdrInqTgt == 1)	{
        			trace("주문번호 저장");
        			var objParam = {pv1:this.fv_coCd,pv2:this.name+"_POPUP",pv3:"ODR_NO_AND_ITEM_NO"};
        			this.gfn_openPopup("calHstPopup", "AD::SSP_BO_SN_10.xfdl", objParam);
        		}
        		else if(this.nOdrInqTgt == 2)	{
        			trace("주문번호 저장2");
        			var objParam = {pv1:this.fv_coCd,pv2:this.name+"_POPUP",pv3:"ODR_NO_AND_ITEM_NO"};
        			this.gfn_openPopup("calHstPopup", "AD::SSP_BO_SN_11.xfdl", objParam);
        		}
        		else if (this.nOdrInqTgt == 4) {
        			this.fn_excelBigDownload();
        		}
        	}
        	else if(svcID == "deleteOdrInqTgtDtls"){
        		this.ds_select.deleteAll();
        		trace("### deleteOdrInqTgtDtls");
        	}
        	else if (svcID == "excelBigDownloadSN09") {
        		if (errorCode == -100) {
        			alert(this.fn_getMessage(errorMsg));
        		}
        		else if (errorCode == "0") {
        			alert(this.fn_getMessage("ERRS000461"));
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_cNum.value);
        		this.fn_search(false);
        	}

        	if( this.gfn_isNull(oPaging.uPageCnt) || oPaging.uPageCnt == 'undefined' || isNaN(oPaging.uPageCnt) ) {
        		oPaging.uPageCnt = 0;
        	}

        	var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_resList"){
        		oSortInfo = this.grd_resList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		//this.fn_search(true);
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch (sPopupId) {
        		//사업장 멀티 팝업
        		case "bzplcMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.BZPLC_ID +",";
        			}
        			this.Div00.form.edt_workPlace.set_value(sIdList);
        			this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        			break;
        		//사업장 멀티 인풋
        		case "SSP_BO_SN_09;BZPLC_ID":
        			if(resData.length > 0){
        				for(var i = 0; i < resData.length; i++) {
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        			}
        			this.Div00.form.edt_workPlace.set_value(sIdList);
        			this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        			break;
        		//운영단위 멀티 팝업
        		case "oprUnitMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.OPR_UNIT_ID +",";
        			}
        			this.Div00.form.edt_oprUnit.set_value(sIdList);
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
        			break;
        		//운영단위 멀티 인풋
        		case "SSP_BO_SN_09;OPR_UNIT_ID":
        			if(resData.length > 0){
        				for(var i = 0; i < resData.length; i++) {
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        			}
        			this.Div00.form.edt_oprUnit.set_value(sIdList);
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
        			break;
        		//주문부서 멀티 팝업
        		case "ordDeptIdMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.DEPT_ID +",";
        			}
        			this.Div00.form.edt_ordDept.set_value(sIdList);
        			this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
        			break;
        		//주문부서 멀티 인풋
        		case "SSP_BO_SN_09;DEPT_ID":
        			if(resData.length > 0){
        				for(var i = 0; i < resData.length; i++) {
        					var rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        			}
        			this.Div00.form.edt_ordDept.set_value(sIdList);
        			this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
        			break;
        		//주문번호 멀티 팝업
        		case "odrNoMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.ODR_NO +",";
        			}
        			this.Div00.form.edt_ordNum.set_value(sIdList);
        			this.fn_setMSearch(this.name,"ODR_NO",sIdList);
        			break;
        		//주문번호 멀티 인풋
        		case "SSP_BO_SN_09;ODR_NO":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.edt_ordNum.set_value(sIdList);
        			this.fn_setMSearch(this.name,"ODR_NO",sIdList);
        			break;
        		//계정 멀티 팝업
        		case "acctIdMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.ACCT_ID +",";
        			}
        			this.Div00.form.edt_acc.set_value(sIdList);
        			this.fn_setMSearch(this.name,"ACCT_ID",sIdList);
        			break;
        		//계정 멀티 인풋
        		case "SSP_BO_SN_09;ACCT_ID":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.edt_acc.set_value(sIdList);
        			this.fn_setMSearch(this.name,"ACCT_ID",sIdList);
        			break;
        		// 대용량다운로드 팝업(N : 정산내역조회, Y : 미정산내역전체조회)
        		case "excelBigDown":
        			var confirm = resData.RESPONSE;
        			var noCalc = resData.NO_CALC;
        			this.fn_excelBigDownloadByPopup(confirm, noCalc);
        			break;
        		//(엑셀)대용량다운로드 비밀번호 팝업(sRetValue 비밀번호, undefined는 취소)
        		case "excelBigDownloadPwdPopup":
        			this.fn_excelBigDownloadPwdCallback(sRetValue);
        			break;
        		//(엑셀)다운로드 비밀번호 팝업(sRetValue 비밀번호, undefined는 취소)
        		case "excelDownloadPwdPopup":
        			this.fn_excelDownloadPwdCallback(sRetValue)
        			break;
        	}
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//search static 초기 설정
        	this.Div00.form.sta_insMonth.uEssentiel = "true"; //필수값 표시
        	this.Div00.form.sta_oprUnit.uEssentiel = "true";

        	//grid 초기 설정
        	//sort
        	this.grd_resList.uSortFlag = "false";
        	this.grd_resList.uServerSortFlag = "true";
        	this.grd_resList.uSortCallback = "fn_sortCallback";

        	//grid cell size 변경
        	this.grd_resList.uCellSizeType = "true";

        	this.uGridList = "grd_resList";
        	this.grd_resList.uRightMouse = "true";
        	this.grd_resList.uPersonalFlag = "true";
        };

        this.cfn_personalPopupClose = function(sRet) {
        	this.grd_resList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        this.fn_showOderDetail = function(rowposition) {
            var width = this.getOwnerFrame().width; //1336;
            var height = this.getOwnerFrame().height;//846;
            var nLeft = 0;
            var nTop = 0;
            nLeft = system.clientToScreenX(this, nLeft);
            nTop  = system.clientToScreenY(this, nTop);

            var odrNo = this.ds_resList.getColumn(rowposition,"ODR_NO");
            var odrItmNo = this.ds_resList.getColumn(rowposition,"ODR_ITM_NO");
            var bzplcId = this.ds_resList.getColumn(rowposition,"BZPLC_ID");
            var odrpsnId = this.ds_resList.getColumn(rowposition,"ODRPSN_ID");
            var objectId =""
            var nRow = -1;
            var isExisted = false;

            objectId = odrNo;//+ "-" + odrItmNo;
            isExisted = this.fn_getDetail(objectId);

            if (isExisted == false) {
                var objParam = {param1:odrNo, param2:odrItmNo, param3:bzplcId, param4:odrpsnId};
                var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
                nexacro.open(objectId, "OD::SSP_BO_OA_02.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
                //this.gfn_openPopup(objectId, 'OD::SSP_BO_OA_02.xfdl', objParam, '', { title: '주문품목번호 상세정보', titlebar: 'true', autosize: 'false' });
            }
            else    {
                this.fn_topmost(objectId,odrNo,odrItmNo,bzplcId,odrpsnId);
            }
        };

        this.fn_getDetail = function(sObjectId) {
            if(sObjectId == undefined)  return false;
            var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            for(var i = 0; i < arrPopFrame.length; i++) {
                if(sObjectId == arrPopFrame[i].id )
                    return true;
            }
            return false;
        };

        this.fn_topmost = function(sId,odrNo,odrItmNo,bzplcId,odrpsnId) {
            if(sId == undefined)
            {
                var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
                trace("s1 is " + arrPopFrame.length );
                for(var i = 0; i < arrPopFrame.length; i++) {
                    //arrPopFrame[i].set_openstatus("minimize");
                    //arrPopFrame[i].move(10,840,10,10);
                }
            }
            else    {
                var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
                for(var i = 0; i < arrPopFrame.length; i++) {
                    if(sId == arrPopFrame[i].id )
                    {
                        arrPopFrame[i].form.fn_onReload(false,odrNo,odrItmNo,bzplcId,odrpsnId);
        				if (system.navigatorname == "nexacro") {
        					arrPopFrame[i].setFocus();
        				} else {
        					arrPopFrame[i]._getWindowHandle().focus();
        				}
                    }
                    else
                    {
                        //arrPopFrame[i].set_openstatus("minimize");
                        //arrPopFrame[i].move(10,840,10,10);
                    }
                }
            }
        };

        this.fn_closeAll = function()
        {
            trace("destroy ");
            var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            for(var i = 0; i < arrPopFrame.length; i++) {
                trace("destroy is " + arrPopFrame[i].name);
                arrPopFrame[i].destroy();
            }
        };

        this.fn_excelBigDownloadByPopup = function(res, noCalc) {
        	if (res == "Y") {	// "확인"
        		this.noCal = noCalc;

        		this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_workPlace.value);
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value);
        		this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.edt_ordDept.value);
        		this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value);
        		this.fn_setMSearch(this.name,"ACCT_ID",this.Div00.form.edt_acc.value);

        		var nCount = this.ds_select.getRowCount();
        		var arrOprUnitid = this.ds_select.extractRowsNF("COL_ITM =='OPR_UNIT_ID'");

        		if (this.gfn_isNull(this.Div00.form.cal_insMonth.value) ||
        			this.Div00.form.cal_insMonth.value == '' ||
        			this.Div00.form.cal_insMonth.value == '    -  ')
        		{
        			alert(this.fn_getMessage("ERRS000144", "검수월"));
        			return;
        		}
        		else if (nCount == 0 || arrOprUnitid.length == 0)
        		{
        			alert(this.fn_getMessage("ERRS000144", "운영단위(는)"));
        			return;
        		}

        		//엑셀 비빌번호 팝업 호출
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelBigDownloadPwdCallback");
        	}
        };

        this.fn_excelBigDownloadPwdCallback = function(objId, ret)
        {
        	// 20230503_박철희_엑셀대용량다운로드수정
        	//if(!pwd) return; //취소(undefined)
        	//this.ds_search.setColumn(0, "EXCEL_PASSWD", pwd);

        	var answr = ret.split("||||");

        	if(!answr) return; //취소(undefined)

        	this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        	this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        	this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");
        	this.ds_search.setColumn(0, "PGM_ID", "SSP_BO_SN_09_02");

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_excelBigDownload();
        	}else {
        		this.nOdrInqTgt = 4;
        		this.fn_insertSelectedData("fn_callBack");
        	}
        }

        // 20230503 박철희 사용하지 않아 주석처리함
        //this.fn_excelDownloadPwdCallback = function(objId, pwd)
        //{
        //	if(!pwd) return; //취소(undefined)
        //	this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"정산대사목록", password: pwd, dbWrk: "dbWrk", pgmId: "SSP_BO_SN_09_02"});
        //}


        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.noCal = 'N';

        	this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_workPlace.value);
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.edt_ordDept.value);
        	this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value);
        	this.fn_setMSearch(this.name,"ACCT_ID",this.Div00.form.edt_acc.value);

        	var nCount = this.ds_select.getRowCount();
        	var arrOprUnitid = this.ds_select.extractRowsNF("COL_ITM =='OPR_UNIT_ID'");

        	if ( this.gfn_isNull(this.Div00.form.cal_insMonth.value) || this.Div00.form.cal_insMonth.value == '' || this.Div00.form.cal_insMonth.value == '    -  ' )
        	{
        		alert(this.fn_getMessage("ERRS000144","검수월"));
        		return;
        	} else if ( nCount == 0 || arrOprUnitid.length == 0 )
        	{
        		alert(this.fn_getMessage("ERRS000144","운영단위(는)"));
        		return;
        	}

        	this.ds_search.setColumn(0, "LANG_CD", "KO"); //
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd); //
        	this.nOdrInqTgt = 0;
        	this.fn_insertSelectedData("fn_callBack");
        };

        //미정산내역전체조회 버튼 click  이벤트
        this.btn_searchCal_onclick = function(obj,e)
        {
        	//if(this.ds_select.getRowCount() != 0 )	this.fn_deleteSelectedData("fn_callBack");

        	this.noCal = 'Y';

        	this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_workPlace.value);
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.edt_ordDept.value);
        	this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value);
        	this.fn_setMSearch(this.name,"ACCT_ID",this.Div00.form.edt_acc.value);

        	var nCount = this.ds_select.getRowCount();
        	var arrOprUnitid = this.ds_select.extractRowsNF("COL_ITM =='OPR_UNIT_ID'");

        	if ( nCount == 0 || arrOprUnitid.length == 0 )
        	{
        		alert(this.fn_getMessage("ERRS000144","운영단위(는)"));
        		return;
        	}

        	this.ds_search.setColumn(0, "LANG_CD", "KO"); //
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd); //
        	this.nOdrInqTgt = 0;
        	this.fn_insertSelectedData("fn_callBack");
        };


        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_resList.getRowCount() == 0){
        		this.alert(this.fn_getMessage("ERRP000205")); // '다운로드 가능한 데이터가 없습니다.'
        	}else{
        		// 20230503_박철희_엑셀다운로드수정
        		// this.gfn_openPopup("excelDownloadPwdPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}
        };

        this.fn_excelDownload = function(objId, ret)
        {
        	// 20230503_박철희_엑셀다운로드수정
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	if(this.noCal == 'N') {
        		this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"정산대사목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_SN_09_02"});
        	} else {
        		this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"미정산대사목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_SN_09_02"});
        	}

        };


        //사업장 멀티팝업 - bzplcMultiPopup
        this.Div00_btn_workPlacePopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("bzplcMultiPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        };

        //사업장 멀티인풋 - BZPLC_ID
        this.Div00_btn_workPlaceMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_workPlace.value,
        	"fn_popupCallback",120,300);
        };

        //운영단위 멀티팝업 - oprUnitMultiPopup
        this.Div00_btn_oprUnitPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };

        //운영단위 멀티인풋 - OPR_UNIT_ID
        this.Div00_btn_oprUnitMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value,
        	"fn_popupCallback",120,300);
        };

        //주문부서 멀티팝업 - ordDeptIdMultiPopup
        this.Div00_btn_ordDeptPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("ordDeptIdMultiPopup", "CC::SSP_BO_PP_37.xfdl", objParam);
        };

        //주문부서 멀티인풋 - DEPT_ID
        this.Div00_btn_ordDeptMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"DEPT_ID",this.Div00.form.edt_ordDept.value,
        	"fn_popupCallback",120,300);
        };

        //주문번호 멀티팝업 - odrNoMultiPopup
        this.Div00_btn_ordNumPopup_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("odrNoMultiPopup", "OD::SSP_BO_OA_28.xfdl", objParam);
        };

        //주문번호 멀티인풋 - ODR_NO
        this.Div00_btn_ordNumMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value,
        	"fn_popupCallback",120,300);
        };

        //계정 멀티팝업 - acctIdMultiPopup
        this.Div00_btn_accPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("acctIdMultiPopup", "CC::SSP_BO_PP_31.xfdl", objParam);
        };

        //계정 멀티인풋 - ACCT_ID
        this.Div00_btn_accMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"ACCT_ID",this.Div00.form.edt_acc.value,
        	"fn_popupCallback",120,300);
        };

        // 초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cbo_cNum.set_enable(true);
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.Div00.form.cal_insMonth.set_value(new nexacro.Date());
        	this.Div00.form.edt_workPlace.set_value("");
        	this.Div00.form.edt_oprUnit.set_value("");
        	this.Div00.form.edt_ordDept.set_value("");
        	this.Div00.form.edt_ordNum.set_value("");
        	this.Div00.form.edt_acc.set_value("");
        	this.Div00.form.cbo_confirm.set_index(0);

        	if(this.ds_select.getRowCount() != 0 )
        		this.fn_deleteSelectedData("fn_callBack");
        };

        // 활성화
        this.btn_active_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cbo_cNum.set_enable(true);
        };

        // 확정취소
        this.btn_cancelConfirm_onclick = function(obj,e)
        {
        	this.grd_resList.set_binddataset();
        	this.ds_chkList.deleteAll();
        	this.ds_resList.filter("CHK == '1'");

        	for ( var i=0; i<this.ds_resList.getCount(); i++ ) {
        		var strDcnYn = this.ds_resList.getColumn(i, "DCN_YN");
        		if(this.fn_getDSValue(strDcnYn) != "Y")
        		{
        			this.ds_resList.filter("");
        			this.grd_resList.set_binddataset(this.ds_resList);
        			//alert("정산 확정되지 않은 주문은 확정 취소를 할 수 없습니다.");
        			alert(this.fn_getMessage("ERRS000257"));
        			return;
        		}
        		var strAdjYm = this.ds_resList.getColumn(i, "ADJ_YM");
        		var strBzplc = this.ds_resList.getColumn(i, "BZPLC_ID");
        		var strOdrNo = this.ds_resList.getColumn(i, "ODR_NO_AND_ITEM_NO");
        		var strVal = strAdjYm + "-" + strBzplc + "-" + strOdrNo;
        		if (this.fn_getDSValue(strVal) != "")
        		{
        			this.ds_chkList.filter("COND_DATA_VAL=='" + strVal + "'");
        			if (this.ds_chkList.rowcount == 0) {
        				var nRow = this.ds_chkList.addRow();
        				this.ds_chkList.setColumn(nRow, "INQ_COND_DTLS", this.name+"_POPUP");
        				this.ds_chkList.setColumn(nRow, "COL_ITM", "ODR_NO_AND_ITEM_NO");
        				this.ds_chkList.setColumn(nRow, "COND_DATA_VAL", strVal);
        			}
        			//this.ds_chkList.filter("");
        		}
        	}
        	this.ds_resList.filter(""); // 체크데이터 초기화
        	this.grd_resList.set_binddataset(this.ds_resList);

        	if(this.ds_chkList.getRowCount() <= 0 )
        	{
        		//alert("주문을 선택하세요.");
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	var sSvcId = "insertOdrInqTgtDtls";
        	var sUrl = "/od/odrPopup/insertOdrInqTgtDtls.do";
        	var inDs = "ds_search=ds_chkList";
        	var outDs = "";
        	var arg = "";
        	this.nOdrInqTgt = 2;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 이력 조회
        this.btn_historyInq_onclick = function(obj,e)
        {
        	this.grd_resList.set_binddataset();
        	this.ds_chkList.deleteAll();
        	this.ds_resList.filter("CHK == '1'");

        	for ( var i=0; i<this.ds_resList.getCount(); i++ ) {
        		var strAdjYm = this.ds_resList.getColumn(i, "ADJ_YM");
        		var strBzplc = this.ds_resList.getColumn(i, "BZPLC_ID");
        		var strOdrNo = this.ds_resList.getColumn(i, "ODR_NO_AND_ITEM_NO");
        		var strVal = strAdjYm + "-" + strBzplc + "-" + strOdrNo;
        		if( this.fn_getDSValue(strVal) != "")
        		{
        			this.ds_chkList.filter("COND_DATA_VAL=='" + strVal + "'");
        			if (this.ds_chkList.rowcount == 0) {
        				var nRow = this.ds_chkList.addRow();
        				this.ds_chkList.setColumn(nRow, "INQ_COND_DTLS", this.name+"_POPUP");
        				this.ds_chkList.setColumn(nRow, "COL_ITM", "ODR_NO_AND_ITEM_NO");
        				this.ds_chkList.setColumn(nRow, "COND_DATA_VAL", strVal);
        			}
        			//this.ds_chkList.filter("");
        		}
        	}
        	this.ds_resList.filter(""); // 체크데이터 초기화
        	this.grd_resList.set_binddataset(this.ds_resList);

        	if(this.ds_chkList.getRowCount() <= 0 )
        	{
        		//alert("주문을 선택하세요.");
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}
        	var sSvcId = "insertOdrInqTgtDtls";
        	var sUrl = "/od/odrPopup/insertOdrInqTgtDtls.do";
        	var inDs = "ds_search=ds_chkList";
        	var outDs = "";
        	var arg = "";
        	this.nOdrInqTgt = 1;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 대용량 엑셀 다운로드
        this.btn_excelBigDown_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("excelBigDown", "AD::SSP_BO_SN_12.xfdl", objParam);

        	return;

        	/*
        	var rtn = this.confirm(this.fn_getMessage("ERRC000271"));	// 대용량 엑셀다운로드 하시겠습니까?
        	if (rtn) {	// "확인"
        		this.noCal = 'N';

        		this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_workPlace.value);
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value);
        		this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.edt_ordDept.value);
        		this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value);
        		this.fn_setMSearch(this.name,"ACCT_ID",this.Div00.form.edt_acc.value);


        		var nCount = this.ds_select.getRowCount();
        		var arrOprUnitid = this.ds_select.extractRowsNF("COL_ITM =='OPR_UNIT_ID'");

        		if ( this.gfn_isNull(this.Div00.form.cal_insMonth.value) || this.Div00.form.cal_insMonth.value == '' || this.Div00.form.cal_insMonth.value == '    -  ' )
        		{
        			alert(this.fn_getMessage("ERRS000144","검수월"));
        			return;
        		} else if ( nCount == 0 || arrOprUnitid.length == 0 )
        		{
        			alert(this.fn_getMessage("ERRS000144","운영단위(는)"));
        			return;
        		}

        		this.ds_search.setColumn(0, "LANG_CD", "KO"); //
        		this.ds_search.setColumn(0, "CO_CD", this.fv_coCd); //
        		this.nOdrInqTgt = 0;
        		this.fn_insertSelectedData("fn_callBack");
        	}
        	*/
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_resList", this.grd_resList.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_resList");
        	this.grd_resList.set_formats(this.grd_resList.uOrgFormat);
        };


        // 그리드 셀 클릭
        this.grd_resList_oncellclick = function(obj,e)
        {
        	if (e.col == 3) {
        		this.fn_showOderDetail(e.row);
                return;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_SN_09_onkeyup,this);
            this.Div00.form.btn_workPlacePopup.addEventHandler("onclick",this.Div00_btn_workPlacePopup_onclick,this);
            this.Div00.form.btn_workPlaceMemo.addEventHandler("onclick",this.Div00_btn_workPlaceMemo_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.cbo_confirm.addEventHandler("onitemchanged",this.Div00_cbo_stockType_onitemchanged,this);
            this.Div00.form.cal_insMonth.addEventHandler("oncloseup",this.Div00_cal_baseDate_oncloseup,this);
            this.Div00.form.btn_oprUnitPopup.addEventHandler("onclick",this.Div00_btn_oprUnitPopup_onclick,this);
            this.Div00.form.btn_oprUnitMemo.addEventHandler("onclick",this.Div00_btn_oprUnitMemo_onclick,this);
            this.Div00.form.btn_ordDeptPopup.addEventHandler("onclick",this.Div00_btn_ordDeptPopup_onclick,this);
            this.Div00.form.btn_ordDeptMemo.addEventHandler("onclick",this.Div00_btn_ordDeptMemo_onclick,this);
            this.Div00.form.btn_ordNumPopup.addEventHandler("onclick",this.Div00_btn_ordNumPopup_onclick,this);
            this.Div00.form.btn_ordNumMemo.addEventHandler("onclick",this.Div00_btn_ordNumMemo_onclick,this);
            this.Div00.form.btn_accPopup.addEventHandler("onclick",this.Div00_btn_accPopup_onclick,this);
            this.Div00.form.btn_accMemo.addEventHandler("onclick",this.Div00_btn_accMemo_onclick,this);
            this.grd_resList.addEventHandler("oncellclick",this.grd_resList_oncellclick,this);
            this.sta_title1_1.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_title1_2.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_searchCal.addEventHandler("onclick",this.btn_searchCal_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.btn_excelBigDown.addEventHandler("onclick",this.btn_excelBigDown_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_cancelConfirm.addEventHandler("onclick",this.btn_cancelConfirm_onclick,this);
            this.btn_historyInq.addEventHandler("onclick",this.btn_historyInq_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_SN_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
