(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_20");
            this.set_titletext("배송지 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dlvType_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"DLV_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DLV_TYPE\"/><Col id=\"DLV_TYPE_NAME\">전체</Col></Row><Row><Col id=\"DLV_TYPE\">Y</Col><Col id=\"DLV_TYPE_NAME\">기본 배송지</Col></Row><Row><Col id=\"DLV_TYPE_NAME\">추가 배송지</Col><Col id=\"DLV_TYPE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("displayCount_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"DISPLAY_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_COUNT_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISPLAY_COUNT\">20</Col><Col id=\"DISPLAY_COUNT_TEXT\">20개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT\">50</Col><Col id=\"DISPLAY_COUNT_TEXT\">50개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT_TEXT\">100개씩</Col><Col id=\"DISPLAY_COUNT\">100</Col></Row><Row><Col id=\"DISPLAY_COUNT\">10000</Col><Col id=\"DISPLAY_COUNT_TEXT\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eMBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"eMBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"eDLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"BASIS_DLVPLC_YN\"/><Col id=\"USE_YN\">ALL</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlvplcList", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MSKD_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("useYn_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("delete_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_del_return", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlvplcId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info","0","0",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","450","20","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","883","20","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","20","51",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08","883","51","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("3");
            obj.set_text("배송지 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static65","20","82",null,"32","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08_00","450","51","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_text("배송지 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("27");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("BZPLC_ID","Static02:10","24","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn01","BZPLC_ID:4","23","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn01","searchPopupBtn01:4","24","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("28");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("MBR_ID","Static06:10","55","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn04","MBR_ID:4","55","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn04","searchPopupBtn04:4","55","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("DEPT_ID","Static22_00:10","24","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn02","DEPT_ID:4","24","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn02","searchPopupBtn02:4","24","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_ID","Static04:10","24","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn03","OPR_UNIT_ID:4","24","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_multi");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn03","searchPopupBtn03:4","24","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("DLVPLC_ID","Static08:10","55","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("21");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("29");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("USE_YN","Static10:10","86","162","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("22");
            obj.set_innerdataset("useYn_ds");
            obj.set_codecolumn("USE_YN");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_rowcount("1");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static65:10","60","28","20",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static65:10","60","28","btn_search:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("23");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("BASIS_DLVPLC_YN","Static08_00:10","55","231","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("25");
            obj.set_codecolumn("DLV_TYPE");
            obj.set_datacolumn("DLV_TYPE_NAME");
            obj.set_innerdataset("dlvType_ds");
            obj.set_value("0");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"Static65:10","100","28","btn_reset:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("26");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn05","1254","55","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"Div_top_info:20","110","28","354",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"Div_top_info:20","90","28","btn_excel:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("미사용처리");
            this.addChild(obj.name, obj);

            obj = new Button("dlvplcAddBtn",null,"Div_top_info:20","90","28","btn_delete:78",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("배송지 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dlvBasis",null,"Div_top_info:20","90","28","dlvplcAddBtn:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본배송지");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"180","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("displayCount_ds");
            obj.set_codecolumn("DISPLAY_COUNT");
            obj.set_datacolumn("DISPLAY_COUNT_TEXT");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","218",null,"510","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dlvplcList");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selectscrollmode("default");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"71\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"배송지ID\"/><Cell col=\"2\" text=\"배송지유형\"/><Cell col=\"3\" text=\"회원ID\"/><Cell col=\"4\" text=\"회원상태\"/><Cell col=\"5\" text=\"회원명\"/><Cell col=\"6\" text=\"수령인명\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"상세주소\"/><Cell col=\"10\" text=\"휴대폰번호\"/><Cell col=\"11\" text=\"전화번호\"/><Cell col=\"12\" text=\"사업장ID\"/><Cell col=\"13\" text=\"사업장명\"/><Cell col=\"14\" text=\"운영단위ID\"/><Cell col=\"15\" text=\"운영단위명\"/><Cell col=\"16\" text=\"부서ID\"/><Cell col=\"17\" text=\"부서명\"/><Cell col=\"18\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:DLVPLC_ID\" edittype=\"none\" displaytype=\"decoratetext\" cursor=\"pointer\" color=\"#290ccf\" controlautosizingtype=\"both\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:BASIS_DLVPLC_YN\" expr=\"BASIS_DLVPLC_YN == &apos;Y&apos; ? &apos;기본배송지&apos; : &apos;추가배송지&apos; \"/><Cell col=\"3\" text=\"bind:MBR_ID\"/><Cell col=\"4\" text=\"bind:MBR_USE_CD\"/><Cell col=\"5\" text=\"bind:MSKD_MBR_NM\" displaytype=\"normal\" color=\"#000000\"/><Cell col=\"6\" text=\"bind:MSKD_RCVR_NM\"/><Cell col=\"7\" text=\"bind:ZPCD\"/><Cell col=\"8\" text=\"bind:REPR_ADDR\" controlautosizingtype=\"both\"/><Cell col=\"9\" text=\"bind:MSKD_DTL_ADDR\"/><Cell col=\"10\" text=\"bind:MSKD_HP_NO\"/><Cell col=\"11\" text=\"bind:MSKD_TEL_NO\"/><Cell col=\"12\" text=\"bind:BZPLC_ID\"/><Cell col=\"13\" text=\"bind:BZPLC_NM\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"15\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"16\" text=\"bind:DEPT_ID\"/><Cell col=\"17\" text=\"bind:DEPT_NM\"/><Cell col=\"18\" text=\"bind:USE_YN\" expr=\"USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos; \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","193","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건, 1/1)");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","758",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave","btn_excel:5","179","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear","btn_layoutSave:5","179","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allInput",null,"180","70","28","562",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div_top_info.form.USE_YN","value","search_ds","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div_top_info.form.BASIS_DLVPLC_YN","value","search_ds","BASIS_DLVPLC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div_top_info.form.DLVPLC_ID","value","search_ds","eDLVPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div_top_info.form.BZPLC_ID","value","search_ds","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div_top_info.form.MBR_ID","value","search_ds","eMBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div_top_info.form.DEPT_ID","value","search_ds","eDEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div_top_info.form.OPR_UNIT_ID","value","search_ds","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_20.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_20.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_20.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_MA_20.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 배송지 목록
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.totalCountComma = 0;
        this.preSelectRowPosition = 0;
        this.fv_sessionData = this.getSession(); //session object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.Div_top_info.form.USE_YN.set_index(0);

        	this.copyPaste.addGrid(this.grd_dlvplcList);

        	//조회함수
        	//this.fn_doSearch(0);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	this.search_ds.setColumn(0, "CO_CD", '1000');

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.search_ds.setColumn(0,"START_NUM", 0);
        	}

        	var sSvcId = "selectDlvplcList";
            var sUrl = "/bo/cc/cust/dvlplc/select-dlvplc-list.do";
        	var inDs = "ds_search=search_ds"
            var outDs = "ds_dlvplcList=ds_output1";
        	var arg = "";
            var callback = "fn_received";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        //삭제
        this.fn_doDelete = function(page)
        {
        	var sSvcId = "deleteMbrDlvplcInfoList";
            var sUrl = "/bo/cc/cust/dvlplc/delete-mbr-dlvplc-info-list.do";
        	var inDs = "delete_ds=delete_ds"
            var outDs = "ds_del_return=ds_output1";
            var arg;
        	var callback = "fn_doDeleteCallBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        //기본배송지로 변경
        this.fn_DlvplcBasisChg = function()
        {
        	var sSvcId = "updateBasisDlvplc";
            var sUrl = "/bo/cc/cust/dvlplc/update-mbr-dlvplc-basis-yn.do";
        	var inDs = "ds_dlvplcId=ds_dlvplcId"
            var outDs = "ds_del_return=ds_output1";
            var arg;
            var callback = "fn_received";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        // 대용량다운로드
        this.fn_allExcelDownload = function(){
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/bo/cc/cust/dvlplc/select-all-excel-download.do";
        	var inDs = "ds_search=search_ds";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        	if(svcID == 'selectDlvplcList'){
        		this.preSelectRowPosition = 0;

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_dlvplcList.rowcount == 0 ) {
        			this.ds_dlvplcList.copyData(this.ds_dlvplcListCopy);
        			this.grd_dlvplcList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		//this.totalCount = 0;
        		if(this.ds_dlvplcList.getRowCount() > 0) {
        			//this.totalCount = this.ds_dlvplcList.getColumn(0,"TOT_CUNT");
        			//this.totalCount = this.ds_dlvplcList.getColumn(0,"TOT_CUNT");
        		}
        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        	}

        	//기본배송지 수정 콜백
        	if(svcID == 'updateBasisDlvplc'){
        		if(this.ds_del_return.getColumn(0, "SUCCESS_YN") == 'Y'){
        			//alert("기본배송지로 저장되었습니다.");
        			alert(this.fn_getMessage("ERRC000113"));
        			this.fn_doSearch(0);
        		}
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.search_ds.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.search_ds.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_doSearch();
        	}

        	var sTotText = "(총 "+ this.totalCountComma+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //삭제 콜백
        this.fn_doDeleteCallBack = function(){
        	if(this.ds_del_return.getColumn(0, "SUCCESS_YN") == 'Y'){
        		//alert("미사용 처리 되었습니다.");
        		alert(this.fn_getMessage("ERRC000031"));
        		this.fn_doSearch(0);
        	}else{
        		//alert("관리자에게 문의하세요");
        		alert(this.fn_getMessage("ERRC000022"));
        		return false;
        	}
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_dlvplcList"){

        		// 화면ID set
        		this.search_ds.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr   = this.Div_top_info.form.BZPLC_ID.value;
        		var oprUnitStr = this.Div_top_info.form.OPR_UNIT_ID.value;
        		var deptStr    = this.Div_top_info.form.DEPT_ID.value;
        		var mbrStr     = this.Div_top_info.form.MBR_ID.value;
        		var dlvplcStr     = this.Div_top_info.form.DLVPLC_ID.value;

        		// edt 입력 기준으로 조회조건 다시 세팅
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"search_ds");
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr,"search_ds");
        		this.fn_setMSearch(this.name,"DEPT_ID",deptStr,"search_ds");
        		this.fn_setMSearch(this.name,"MBR_ID",mbrStr,"search_ds");
        		this.fn_setMSearch(this.name,"DLVPLC_ID",dlvplcStr,"search_ds");

        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){

        			oSortInfo = this.grd_dlvplcList.uaSortInfo;
        			this.search_ds.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.search_ds.setColumn(0,"SORT_TYPE"  ,oSortInfo.status);
        			this.fn_insertSelectedData("fn_callBackForSearch");

        			this.fn_doSearch(0);
        		}else{

        		}
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_dlvplcList.uSortFlag = "false";
        	this.grd_dlvplcList.uServerSortFlag = "true";
        	this.grd_dlvplcList.uSortCallback = "fn_sortCallback";
        	this.grd_dlvplcList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList						= "grd_dlvplcList";
        	this.grd_dlvplcList.uRightMouse		= "true";
        	this.grd_dlvplcList.uPersonalFlag	= "true";
        	this.grd_dlvplcList.uDefaultFormat	= "COL_CHK1,DLVPLC_ID,BASIS_DLVPLC_YN,MBR_ID,MSKD_MBR_NM,MSKD_RCVR_NM,ZPCD,REPR_ADDR,MSKD_DTL_ADDR,MSKD_HP_NO,MSKD_TEL_NO,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,DEPT_ID,DEPT_NM,USE_YN";

        }

        //멀티텍스트팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	if(rtnValue != undefined){
        		var resParam = JSON.parse(rtnValue);
        		if(objID == 'multipleTextBtn01'){ this.Div_top_info.form.BZPLC_ID.set_value(resParam.textValue);    }
        		if(objID == 'multipleTextBtn02'){ this.Div_top_info.form.DEPT_ID.set_value(resParam.textValue);     }
        		if(objID == 'multipleTextBtn03'){ this.Div_top_info.form.OPR_UNIT_ID.set_value(resParam.textValue); }
        		if(objID == 'multipleTextBtn04'){ this.Div_top_info.form.MBR_ID.set_value(resParam.textValue);      }
        		if(objID == 'multipleTextBtn05'){ this.Div_top_info.form.DLVPLC_ID.set_value(resParam.textValue);      }
        	}
        }

        //멀티검색팝업 콜백함수
        this.fn_searchMultiPopupCallback = function(objID, rtnValue)
        {
        	if(rtnValue != undefined){
        		var resParam = JSON.parse(rtnValue);
        		var sIdList = "";
        		var sNmList = "";
        		if(objID == 'searchPopupBtn01'){
        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);
        				sIdList += rtnData.BZPLC_ID +",";
        				//sNmList += rtnData.BZPLC_NM +",";
        			}
        			this.search_ds.setColumn(0,"BZPLC_ID", resParam.length);
        			this.Div_top_info.form.BZPLC_ID.set_value(sIdList.replace(/,\s*$/, ""));
        		}
        		if(objID == 'searchPopupBtn02'){
        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);
        				sIdList += rtnData.DEPT_ID +",";
        				//sNmList += rtnData.DEPT_NM +",";
        			}
        			this.search_ds.setColumn(0,"DEPT_ID", resParam.length);
        			this.Div_top_info.form.DEPT_ID.set_value(sIdList.replace(/,\s*$/, ""));
        		}
        		if(objID == 'searchPopupBtn03'){
        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);
        				sIdList += rtnData.OPR_UNIT_ID +",";
        				//sNmList += rtnData.OPR_UNIT_NM +",";
        			}
        			this.search_ds.setColumn(0,"OPR_UNIT_ID", resParam.length);
        			this.Div_top_info.form.OPR_UNIT_ID.set_value(sIdList.replace(/,\s*$/, ""));
        		}
        		if(objID == 'searchPopupBtn04'){
        			for (var i = 0; i < resParam.length; i++) {
        				var rtnData = JSON.parse(resParam[i]);
        				sIdList += rtnData.MBR_ID +",";
        				//sNmList += rtnData.MBR_NM +",";
        			}
        			this.search_ds.setColumn(0,"MBR_ID", resParam.length);
        			this.Div_top_info.form.MBR_ID.set_value(sIdList.replace(/,\s*$/, ""));
        		}


        	}

        }
        this.fn_callBackForSearch = function(){
        	this.fn_doSearch(0);
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
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
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	//사업장
        	this.Div_top_info.form.BZPLC_ID.set_value("");
        	this.search_ds.setColumn(0,"BZPLC_ID" ,"");
        	this.search_ds.setColumn(0,"eBZPLC_NM","");

        	//부서
        	this.Div_top_info.form.DEPT_ID.set_value("");
        	this.search_ds.setColumn(0,"DEPT_ID" ,"");
        	this.search_ds.setColumn(0,"eDEPT_NM","");

        	//운영단위
        	this.Div_top_info.form.OPR_UNIT_ID.set_value("");
        	this.search_ds.setColumn(0,"OPR_UNIT_ID" ,"");
        	this.search_ds.setColumn(0,"eOPR_UNIT_NM","");

        	//회원
        	this.Div_top_info.form.MBR_ID.set_value("");
        	this.search_ds.setColumn(0,"MBR_ID" ,"");
        	this.search_ds.setColumn(0,"eMBR_NM","");

        	//배송지ID
        	this.Div_top_info.form.DLVPLC_ID.set_value("");
        	this.search_ds.setColumn(0,"DLVPLC_ID" ,"");
        	this.search_ds.setColumn(0,"eDLVPLC_ID","");

        	//삭제여부
        	this.Div_top_info.form.USE_YN.set_index(0);

        	//배송지유형
        	this.Div_top_info.form.BASIS_DLVPLC_YN.set_index(0);
        };

        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	// 화면ID set
        	this.search_ds.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr   = this.Div_top_info.form.BZPLC_ID.value;
        	var oprUnitStr = this.Div_top_info.form.OPR_UNIT_ID.value;
        	var deptStr    = this.Div_top_info.form.DEPT_ID.value;
        	var mbrStr     = this.Div_top_info.form.MBR_ID.value;
        	var dvplcStr   = this.Div_top_info.form.DLVPLC_ID.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "BZPLC_ID", null);
        	}
        	if(oprUnitStr!="" && oprUnitStr!=null){
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "OPR_UNIT_ID", null);
        	}
        	if(deptStr!="" && deptStr!=null){
        		this.fn_setMSearch(this.name,"DEPT_ID",deptStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "DEPT_ID", null);
        	}
        	if(mbrStr!="" && mbrStr!=null){
        		this.fn_setMSearch(this.name,"MBR_ID",mbrStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "MBR_ID", null);
        	}
        	if(dvplcStr !="" && dvplcStr !=null){
        		this.fn_setMSearch(this.name,"DLVPLC_ID",dvplcStr,"search_ds");
        		trace('여기++ = '+dvplcStr);
        	}else{
        		this.search_ds.setColumn(0, "DLVPLC_ID", null);
        	}

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_doSearch(0);
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}



        };

        //배송지생성 버튼
        this.dlvplcAddBtn_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("dlvplcMngPopup", "CC::SSP_BO_MA_14.xfdl", objParam);
        };

        // 일괄등록
        this.btn_allInput_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_MA_20"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };


        //선택삭제 버튼
        this.btn_delete_onclick = function(obj,e)
        {
        	var sReturn = this.confirm("미사용처리 하시겠습니까?\n미사용 처리 시, 추후 상태변경(사용) 은 불가능합니다.");
        	if(sReturn == true){
        		var chkCnt			= this.ds_dlvplcList.getCaseCount("COL_CHK==1");
        		if( chkCnt == 0 ) {
        			//alert("선택된 행이 없습니다.");
        			alert(this.fn_getMessage("ERRC000050", "행"));
        			return false;
        		}else{
        			var chkCnt2 = 0;
        			for(var i=0; i < this.ds_dlvplcList.rowcount; i++){
        				var checkbox = this.ds_dlvplcList.getColumn(i, "COL_CHK");
        				var useChk   = this.ds_dlvplcList.getColumn(i, "USE_YN");
        				if( checkbox == 1 ) {
        					if(useChk == 'N'){
        						chkCnt2++;
        					}
        				}
        			}
        			if(chkCnt2 > 0){
        				//alert("이미 미사용 처리 되었습니다. 확인하세요!");
        				alert(this.fn_getMessage("ERRC000063"));
        				return false;
        			}
        			var chkCnt3 = 0;
        			for(var i=0; i < this.ds_dlvplcList.rowcount; i++){
        				var checkbox = this.ds_dlvplcList.getColumn(i, "COL_CHK");
        				var basisYn  = this.ds_dlvplcList.getColumn(i, "BASIS_DLVPLC_YN");
        				if( checkbox == 1 ) {
        					if(basisYn == 'Y'){
        						chkCnt3++;
        					}
        				}
        			}
        			if(chkCnt3 > 0){
        				//alert("기본 배송지는 미사용처리 할 수 없습니다.");
        				alert(this.fn_getMessage("ERRC000024"));
        				return false;
        			}
        			var delArr = [];
        			var idxChk = 0;
        			for(var i=0; i < this.ds_dlvplcList.rowcount; i++){
        				var checkbox = this.ds_dlvplcList.getColumn(i, "COL_CHK");
        				var delDlvplcId = this.ds_dlvplcList.getColumn(i, "DLVPLC_ID");
        				if( checkbox == 1 ) {
        					delArr.push(delDlvplcId);
        				}
        			}
        			this.delete_ds.setColumn(0, "DLVPLC_ID", delArr);

        			//삭제 트랜젝션
        			this.fn_doDelete();

        		}
        	}
        };

        //엑셀다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        };

        // 엑셀다운로드
        	this.fn_excelDownload = function(objId, ret) {
        		var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) { return; }
        		this.grd_dlvplcList.setFormatColProperty(0,"size",0);
        		this.ofn_exportExcel({form:this, grid:this.grd_dlvplcList, fileName:"배송지 목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_MA_20"});
        		this.grd_dlvplcList.setFormatColProperty(0,"size",33);
        	}
        //멀티 텍스트 팝업
        this.multipleTextBtn_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'multipleTextBtn01'){params = { textId : this.Div_top_info.form.BZPLC_ID }   }	//사업장
        	if(e.fromobject.id == 'multipleTextBtn02'){params = { textId : this.Div_top_info.form.DEPT_ID }    }	//부서
        	if(e.fromobject.id == 'multipleTextBtn03'){params = { textId : this.Div_top_info.form.OPR_UNIT_ID }}	//운영단위
        	if(e.fromobject.id == 'multipleTextBtn04'){params = { textId : this.Div_top_info.form.MBR_ID }     }	//회원
        	if(e.fromobject.id == 'multipleTextBtn05'){params = { textId : this.Div_top_info.form.DLVPLC_ID }     }	//배송지

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };


        //멀티 검색 팝업
        this.searchPopupBtn_onclick = function(obj,e)
        {
        	//사업장
        	var params  = { coCd      : this.fv_sessionData.coCd
        	              , bzplcId   : this.search_ds.getColumn(0, "eBZPLC_ID")
        			      , oprUnitId : this.search_ds.getColumn(0, "eOPR_UNIT_ID")
        				  , deptId    : this.search_ds.getColumn(0, "eDEPT_ID")
        				  , mbrId     : this.search_ds.getColumn(0, "eMBR_ID")
        				  };
        	var options = {};
        	if(e.fromobject.id == 'searchPopupBtn01'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn02'){ this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn03'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn04'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_25.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	};

        //ROW_COUNT COMBO 카운트 변경시
        this.fn_onchgRowCount = function(obj,e)
        {
        	this.search_ds.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        	this.fn_doSearch(1);
        };

        //그리드 ONCLICK
        this.grd_comCdClsfDtl_oncellclick = function(obj, e)
        {
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);
        	var objParam = {};
        	var options = {};

        	//배송지 등록팝업 회원정보 바인딩
        	/* 송이사님 삭제요청 2022-04-11
        	if(columnId == 'MBR_ID'){
        		objParam = {
        					 mbrId : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "MBR_ID")		//회원아이디
        				   , mbrNm : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "MBR_NM")		//회원이름
        				   }
        		this.gfn_openPopup("dlvplcMngPopup", "CC::SSP_BO_MA_14.xfdl", objParam);
        	}
        	*/

        	//배송지 수정팝업 배송지 정보 바인딩
        	if(columnId == 'DLVPLC_ID'){
        		objParam = {
        					 mbrId    : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "MBR_ID")					//회원아이디
        				   , mbrNm    : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "MBR_NM")					//회원이름
        				   , dlvplcId : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "DLVPLC_ID")				//배송지ID
        				   , basisDlvplcYn : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "BASIS_DLVPLC_YN")	//기본배송지여부
        				   , rcvrNm   : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "RCVR_NM")					//수령자명
        				   , zpcd     : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "ZPCD")					//우편번호
        				   , reprAddr : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "REPR_ADDR")				//주소
        				   , dtlAddr  : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "DTL_ADDR")				//상세주소
        				   , hpNo     : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "HP_NO")					//핸드폰번호
        				   , telNo    : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "TEL_NO")					//전화번호
        				   , useYn    : this.ds_dlvplcList.getColumn(this.ds_dlvplcList.rowposition, "USE_YN")					//미사용여부
        				   }
        		this.gfn_openPopup("dlvplcDtlPopup", "CC::SSP_BO_MA_21.xfdl", objParam, "fn_searchMultiPopupCallback", options);
        	}

        	//그리드 체크박스 클릭이벤트
        	if(columnId == 'COL_CHK'){
        		var dataSet = obj.getBindDataset();
        		var chkValue = obj.getCellText(e.row, 0);

        		if( e.col != 0 ) {
        			chkValue = (chkValue == "1" ? "0" : "1");
        		}

        		dataSet.setColumn(e.row, "COL_CHK", chkValue);
        	}

        }
        /* 검색DIV ENTER KEY EVENT */
        this.enterDown = function(obj,e)
        {
        	if(e.keycode == '13'){
        		this.btn_search_onclick();
        	}
        };

        /* 기본배송지 변경 버튼 */
        this.Div00_btn_dlvBasis_onclick = function(obj,e)
        {
        	var chkCnt1 = this.ds_dlvplcList.getCaseCount("COL_CHK==1");
        	if( chkCnt1 == 0 ) {
        		//alert("선택된 행이 없습니다.");
        		alert(this.fn_getMessage("ERRC000050", "VALUE"));
        		return false;
        	}
        	var chkCnt1 = this.ds_dlvplcList.getCaseCount("COL_CHK==1");
        	if( chkCnt1 > 1 ) {
        		//alert("기본배송지로 변경하실 추가 배송지 한 행만 선택해주세요.");
        		alert(this.fn_getMessage("ERRC000110"));
        		return false;
        	}
        	var chkCnt2 = this.ds_dlvplcList.getCaseCount("COL_CHK==1");
        	if( chkCnt2 == 1 ) {

        		var pUseYn = this.ds_dlvplcList.getColumn(i, "USE_YN");
        		if(pUseYn == 'N'){
        			alert('미사용중인 배송지는 기본배송지로 변경하실수 없습니다.')
        			return false;
        		}

        		var chkCnt = 0;
        		for(var i=0; i < this.ds_dlvplcList.rowcount; i++){
        			var checkbox           = this.ds_dlvplcList.getColumn(i, "COL_CHK");
        			var basisDlvplcYnChk   = this.ds_dlvplcList.getColumn(i, "BASIS_DLVPLC_YN");
        			if( checkbox == 1 ) {
        				if(basisDlvplcYnChk == 'Y'){
        					chkCnt++;
        				}
        			}
        		}
        		if(chkCnt > 0){
        			//alert("추가 배송지를 선택해주세요.");
        			alert(this.fn_getMessage("ERRC000111"));
        			return false;
        		}

        		var sReturn = this.confirm(this.fn_getMessage("ERRC000112"));
        		if(sReturn == true){
        			this.pDlvplcId = "";
        			this.pMbrId    = "";
        			for(var i=0; i < this.ds_dlvplcList.rowcount; i++){
        				var checkbox           = this.ds_dlvplcList.getColumn(i, "COL_CHK");
        				var basisDlvplcYnChk   = this.ds_dlvplcList.getColumn(i, "BASIS_DLVPLC_YN");
        				if( checkbox == 1 ) {
        					this.pDlvplcId = this.ds_dlvplcList.getColumn(i, "DLVPLC_ID" );
        					this.pMbrId    = this.ds_dlvplcList.getColumn(i, "MBR_ID"    );
        				}
        			}
        			this.ds_dlvplcId.setColumn(0, "DLVPLC_ID", this.pDlvplcId );
        			this.ds_dlvplcId.setColumn(0, "MBR_ID"   , this.pMbrId    );
        			this.fn_DlvplcBasisChg();
        		}

        	}


        };

        this.Div00_btn_allExcel_onclick = function(obj,e)
        {
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownloadPwdCallback");

        };

        // 대용량엑셀 다운로드
        this.fn_excelDownloadPwdCallback = function(objId, ret)
        {
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) return;

        	this.fn_trimDatasetRow(this.search_ds); //데이터셋 일괄 공백제거
        	// 화면ID set
        	this.search_ds.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr   = this.Div_top_info.form.BZPLC_ID.value;
        	var oprUnitStr = this.Div_top_info.form.OPR_UNIT_ID.value;
        	var deptStr    = this.Div_top_info.form.DEPT_ID.value;
        	var mbrStr     = this.Div_top_info.form.MBR_ID.value;
        	var dlvplcStr  = this.Div_top_info.form.DLVPLC_ID.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "BZPLC_ID", null);
        	}
        	if(oprUnitStr!="" && oprUnitStr!=null){
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "OPR_UNIT_ID", null);
        	}
        	if(deptStr!="" && deptStr!=null){
        		this.fn_setMSearch(this.name,"DEPT_ID",deptStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "DEPT_ID", null);
        	}
        	if(mbrStr!="" && mbrStr!=null){
        		this.fn_setMSearch(this.name,"MBR_ID",mbrStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "MBR_ID", null);
        	}
        	if(dlvplcStr!="" && dlvplcStr!=null){
        		this.fn_setMSearch(this.name,"DLVPLC_ID",dlvplcStr,"search_ds");
        	}else{
        		this.search_ds.setColumn(0, "DLVPLC_ID", null);
        	}

        	this.fn_insertSelectedData("");

        	this.search_ds.setColumn(0, "EXCEL_PASSWD", answr[0]);
        	this.search_ds.setColumn(0, "DOWN_RSN", answr[1]);
        	this.search_ds.setColumn(0, "DB_WRK", "BIGDOWNLOAD");

        	this.fn_allExcelDownload();
        }

        // 그리드 헤더 우클릭 이벤트로 추측됩니다
        this.cfn_personalPopupClose = function(sRet){
        	this.grd_mainList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_dlvplcList", this.grd_dlvplcList.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grd_dlvplcList", this.grd_dlvplcList.uOrgFormat);
        	this.grd_dlvplcList.set_formats(this.grd_dlvplcList.uOrgFormat);
        };

        this.SSP_BO_MA_20_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_20_onkeyup,this);
            this.Div_top_info.addEventHandler("onkeydown",this.enterDown,this);
            this.Div_top_info.form.BZPLC_ID.addEventHandler("onchanged",this.Div_top_info_BZPLC_NM_onchanged,this);
            this.Div_top_info.form.searchPopupBtn01.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn01.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn04.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn04.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn02.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn02.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn03.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn03.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div_top_info.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div_top_info.form.BASIS_DLVPLC_YN.addEventHandler("onitemchanged",this.Div_top_info_BASIS_DLVPLC_YN_onitemchanged,this);
            this.Div_top_info.form.btn_allExcel.addEventHandler("onclick",this.Div00_btn_allExcel_onclick,this);
            this.Div_top_info.form.multipleTextBtn05.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.dlvplcAddBtn.addEventHandler("onclick",this.dlvplcAddBtn_onclick,this);
            this.btn_dlvBasis.addEventHandler("onclick",this.Div00_btn_dlvBasis_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.grd_dlvplcList.addEventHandler("oncellclick",this.grd_comCdClsfDtl_oncellclick,this);
            this.grd_dlvplcList.addEventHandler("ondrag",this.grd_comCdClsfDtl_ondrag,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_allInput.addEventHandler("onclick",this.btn_allInput_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
