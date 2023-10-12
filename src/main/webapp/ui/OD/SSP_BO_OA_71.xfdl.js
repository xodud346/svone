(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_71");
            this.set_titletext("주문 대행 고객 로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comMbrUseYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCustSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">MBR_USE_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">CUST_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AGNC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MONTHLY_ADJ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_APRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_ORDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"OPSN_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_OVER_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD_3\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD_4\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CD_5\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ_1\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ_2\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ_3\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ_4\" type=\"STRING\" size=\"256\"/><Column id=\"OSHT_CD_SEQ_5\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eMBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eMBR_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSrch","20","20",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#d24b4b");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-1","0",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static02","430","0","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_text("회원명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static03","859","0","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static04","380","-220","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("고객 유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static05","0","0","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static06","0","31",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static07","0","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("11");
            obj.set_text("운영 단위");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08","430","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static09","859","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitInput","398","35","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","140","35","228","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_text("112");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiPopup","372","35","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","570","35","228","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_text("112");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_deptIdMultiPopup","802","35","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_deptIdInput","828","35","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc","140","4","228","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_text("112");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMultiPopup","372","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_bzplcInput","398","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_mbr","999","4","228","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_text("112");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_mbrMultiPopup","1231","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_mbrInput","1257","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_mbrNmInput","828","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","570","4","256","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_text("112");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static04","-386","19","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고객 유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"91","60","28","146",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"91","60","28","83",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"91","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","153","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","180",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"73\"/><Column size=\"97\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"97\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"45\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"고객유형\"/><Cell col=\"1\" rowspan=\"2\" text=\"상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"회원 ID\"/><Cell col=\"3\" rowspan=\"2\" text=\"약관&#13;&#10;동의\"/><Cell col=\"4\" rowspan=\"2\" text=\"개인&#13;&#10;정보&#13;&#10;수집&#13;&#10;동의\"/><Cell col=\"5\" rowspan=\"2\" text=\"주문&#13;&#10;대행&#13;&#10;사용\"/><Cell col=\"6\" rowspan=\"2\" text=\"월정산&#13;&#10;거래\"/><Cell col=\"7\" rowspan=\"2\" text=\"회원명\"/><Cell col=\"8\" rowspan=\"2\" text=\"로그인ID\"/><Cell col=\"9\" rowspan=\"2\" text=\"사업장 ID\"/><Cell col=\"10\" rowspan=\"2\" text=\"사업장명\"/><Cell col=\"11\" rowspan=\"2\" text=\"운영단위 ID \"/><Cell col=\"12\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"13\" rowspan=\"2\" text=\"부서 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"15\" colspan=\"5\" text=\"회원권한\"/><Cell col=\"20\" colspan=\"16\" text=\"운영단위권한\"/><Cell row=\"1\" col=\"15\" text=\"기본&#13;&#10;결재선\"/><Cell row=\"1\" col=\"16\" text=\"기본&#13;&#10;발주선\"/><Cell row=\"1\" col=\"17\" text=\"기본&#13;&#10;배송지\"/><Cell row=\"1\" col=\"18\" text=\"결재&#13;&#10;권한\"/><Cell row=\"1\" col=\"19\" text=\"발주&#13;&#10;권한\"/><Cell row=\"1\" col=\"20\" text=\"결재&#13;&#10;사용\"/><Cell row=\"1\" col=\"21\" text=\"발주&#13;&#10;사용\"/><Cell row=\"1\" col=\"22\" text=\"계정&#13;&#10;사용\"/><Cell row=\"1\" col=\"23\" text=\"예산&#13;&#10;사용\"/><Cell row=\"1\" col=\"24\" text=\"예산&#13;&#10;초과허용\"/><Cell row=\"1\" col=\"25\" text=\"귀속&#13;&#10;부서\"/><Cell row=\"1\" col=\"26\" text=\"참조&#13;&#10;코드1\"/><Cell row=\"1\" col=\"27\" text=\"참조&#13;&#10;코드2\"/><Cell row=\"1\" col=\"28\" text=\"참조&#13;&#10;코드3\"/><Cell row=\"1\" col=\"29\" text=\"참조&#13;&#10;코드4\"/><Cell row=\"1\" col=\"30\" text=\"참조&#13;&#10;코드5\"/><Cell row=\"1\" col=\"31\" text=\"일회성&#13;&#10;코드1\"/><Cell row=\"1\" col=\"32\" text=\"일회성&#13;&#10;코드2\"/><Cell row=\"1\" col=\"33\" text=\"일회성&#13;&#10;코드3\"/><Cell row=\"1\" col=\"34\" text=\"일회성&#13;&#10;코드4\"/><Cell row=\"1\" col=\"35\" text=\"일회성&#13;&#10;코드5\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_SPR_CD\"/><Cell col=\"1\" text=\"bind:MBR_USE_CD_NM\"/><Cell col=\"2\" text=\"bind:MBR_ID\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:UT_AGRE_YN\" edittype=\"text\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:CLT_AGRE_YN\"/><Cell col=\"5\" text=\"bind:ODR_AGNC_USE_YN\"/><Cell col=\"6\" text=\"bind:MONTHLY_ADJ_YN\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_secureName(currow, &quot;MBR_NM&quot;, dataset)\"/><Cell col=\"8\" text=\"expr:comp.parent.fn_secureInfo(currow, &quot;LOGN_ID&quot;, 3, dataset)\"/><Cell col=\"9\" text=\"bind:BZPLC_ID\"/><Cell col=\"10\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"12\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:DEPT_ID\"/><Cell col=\"14\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:BASE_APRV_NM\"/><Cell col=\"16\" text=\"bind:BASE_ORDER_NM\"/><Cell col=\"17\" text=\"bind:BASE_DLVPLC_ID\"/><Cell col=\"18\" text=\"bind:APRV_AUTH_SPR\"/><Cell col=\"19\" text=\"bind:ORD_AUTH_SPR\"/><Cell col=\"20\" text=\"bind:APRV_SPR\"/><Cell col=\"21\" text=\"bind:OPSN_SPR\"/><Cell col=\"22\" text=\"bind:ACCT_SPR\"/><Cell col=\"23\" text=\"bind:BGT_AUTH_SPR\"/><Cell col=\"24\" text=\"bind:BGT_OVER_SPR\"/><Cell col=\"25\" text=\"bind:BLNG_DEPT_SPR\"/><Cell col=\"26\" text=\"bind:REQ_CD_1\"/><Cell col=\"27\" text=\"bind:REQ_CD_2\"/><Cell col=\"28\" text=\"bind:REQ_CD_3\"/><Cell col=\"29\" text=\"bind:REQ_CD_4\"/><Cell col=\"30\" text=\"bind:REQ_CD_5\"/><Cell col=\"31\" text=\"bind:OSHT_CD_SEQ_1\"/><Cell col=\"32\" text=\"bind:OSHT_CD_SEQ_2\"/><Cell col=\"33\" text=\"bind:OSHT_CD_SEQ_3\"/><Cell col=\"34\" text=\"bind:OSHT_CD_SEQ_4\"/><Cell col=\"35\" text=\"bind:OSHT_CD_SEQ_5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"30","20","30",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"141","94","28","229",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("100개씩");
            obj.set_value("100");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"141","110","28","414",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_conHst",null,"141","81","28","328",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("접속이력");
            obj.set_textPadding("0px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"141","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"141","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("deptId","divSrch.form.edt_deptId","value","ds_search","eDEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bzplcId","divSrch.form.edt_bzplc","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("mbrId","divSrch.form.edt_mbr","value","ds_search","eMBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("oprUnitId","divSrch.form.edt_oprUnit","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSrch.form.edt_mbrNm","value","ds_search","eMBR_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_71.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_71.xfdl", function() {

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.bExtend = false;
        this.searchType ="";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_71_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.copyPaste.addGrid(this.grd_list);

        	this.fn_searchCommonCode();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_71_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        // 공통코드
        this.fn_searchCommonCode = function() {
        	var sSvcId = "selectCommonCodeList";
        	var sUrl = "/od/odrPopup/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_searchCoCd ";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page)	{
        	trace("callback fn_search");
        	var sSvcId = "selectMbrList";
        	var sUrl = "/od/oderlist/selectMbrList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1 ds_search=ds_output2";
        	var rowCnt = this.cmb_viewCount.value;
        	var arg = "";

        	if (page) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cmb_viewCount.value);
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);
        		this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        		this.ds_search.setColumn(0, "MBR_USE_CD", "Y");		// 상태를 "Y"로 고정사용
        	}
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectMbrList") {
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount, this.cmb_viewCount.value, "fn_pageCallback");
        		this.divSrch.form.set_enable(false);
        	}
        	else if (svcID == "selectCommonCodeList") {
        		this.fn_setCommonCode();
        	}
        	else if(svcID == "insertOdrInqTgtDtls"){
        		this.fn_search(true)
        	}
        	else if(svcID == "deleteOdrInqTgtDtls"){
        		this.ds_select.clearData();
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cmb_viewCount.value);
        		this.fn_search(false);
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //SORT 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
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
        		// 운영단위 멀티 팝업
        		case "oprUnitMultiPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.OPR_UNIT_ID +",";
        				sNmList += rtnData.OPR_UNIT_NM +",";
        			}
        			this.divSrch.form.edt_oprUnit.set_value(sIdList);
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID", sIdList);
        			break;
        		// 운영단위 멀티 INPUT
        		case "SSP_BO_OA_71;OPR_UNIT_ID":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edt_oprUnit.set_value(sIdList);
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID", sIdList);
        			break;
        		// 부서ID 멀티 팝업
        		case "deptIdPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.DEPT_ID +",";
        				sNmList += rtnData.DEPT_NM +",";
        			}
        			this.divSrch.form.edt_deptId.set_value(sIdList);
        			this.fn_setMSearch(this.name,"DEPT_ID", sIdList);
        			break;
        		// 부서ID 멀티 INPUT
        		case "SSP_BO_OA_71;DEPT_ID":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edt_deptId.set_value(sIdList);
        			this.fn_setMSearch(this.name,"DEPT_ID", sIdList);
        			break;
        		// 사업장 멀티 팝업
        		case "bzplcPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.BZPLC_ID +",";
        				sNmList += rtnData.BZPLC_NM +",";
        			}
        			this.divSrch.form.edt_bzplc.set_value(sIdList);
        			this.fn_setMSearch(this.name,"BZPLC_ID", sIdList);
        			break;
        		// 사업장 멀티 INPUT
        		case "SSP_BO_OA_71;BZPLC_ID":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edt_bzplc.set_value(sIdList);
        			this.fn_setMSearch(this.name,"BZPLC_ID", sIdList);
        		break;
        		//회원명 멀티 INPUT
        		case "SSP_BO_OA_71;MBR_ID_NM":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edt_mbrNm.set_value(sIdList);
        			this.fn_setMSearch(this.name,"MBR_ID_NM", sIdList);
        			break;
        		// 회원 멀티 팝업
        		case "mbrPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID +",";
        				sNmList += rtnData.MBR_NM +",";
        			}
        			this.divSrch.form.edt_mbr.set_value(sIdList);
        			this.fn_setMSearch(this.name,"MBR_ID", sIdList);
        			break;
        		//회원 멀티 INPUT
        		case "SSP_BO_OA_71;MBR_ID":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edt_mbr.set_value(sIdList);
        			this.fn_setMSearch(this.name,"MBR_ID", sIdList);
        			break;conHstPopup
        		// 접속이력
        		case "SSP_BO_OA_71;conHstPopup":
        			//for(var i = 0; i < resData.length; i++) {
        			//	var rtnData = JSON.parse(resData[i]);
        			//	sIdList += rtnData.VALUE +",";
        			//}
        			//this.divSrch.form.edt_mbr.set_value(sIdList);
        			//this.fn_setMSearch(this.name,"MBR_ID", sIdList);
        			break;
        		default :
        			break;
        	}
        };


        /***********************************************************************************************
        * 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        ************************************************************************************************/
        this.fn_setCommonCode = function() {

        	// 고객구분코드
        	this.ds_comCd.filter("COM_CLSF_CD=='CUST_SPR_CD' && COM_DTL_CD != '10'");
        	this.ds_comCustSprCd.copyData(this.ds_comCd, true);

        	// 상태 코드
        	this.ds_comCd.filter("COM_CLSF_CD=='MBR_USE_CD'");
        	this.ds_comMbrUseYn.copyData(this.ds_comCd, true);

        	//Default값(전체) 세팅
        	//this.divSrch.form.cmb_mbrUseYn.set_index(0);
        	//this.divSrch.form.cmb_custSprCd.set_index(0);
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit");

        	this.uGridList = "grd_list";

        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        }

        this.cfn_personalPopupClose = function(sRet) {
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        //운영단위 팝업
        this.divSrch_btn_oprUnitMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd : this.fv_coCd};
        	this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };

        //운영단위 멀티 INPUT
        this.divSrch_btn_oprUnitInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"OPR_UNIT_ID", this.divSrch.form.edt_oprUnit.value,
        	"fn_popupCallback",120,300);
        };

        //부서 팝업
        this.divSrch_btn_deptIdMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd : this.fv_coCd};
        	this.gfn_openPopup("deptIdPopup", "CC::SSP_BO_PP_37.xfdl", objParam);
        };

        //부서 멀티 INPUT
        this.divSrch_btn_deptIdInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"DEPT_ID", this.divSrch.form.edt_deptId.value,
        	"fn_popupCallback", 120,300);
        };

        //사업장 팝업
        this.divSrch_btn_bzplcMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd : this.fv_coCd};
        	this.gfn_openPopup("bzplcPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        };

        //사업장 팝업 INPUT
        this.divSrch_btn_bzplcInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"BZPLC_ID", this.divSrch.form.edt_bzplc.value,
        	"fn_popupCallback", 120,300);
        };

        // 회원명 팝업 INPUT
        this.divSrch_btn_mbrNmInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"MBR_ID_NM", this.divSrch.form.edt_mbrNm.value, "fn_popupCallback", 120,300);
        };

        //회원 팝업
        this.divSrch_btn_mbrMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd : this.fv_coCd};
        	this.gfn_openPopup("mbrPopup", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //회원 팝업 INPUT
        this.divSrch_btn_mbrInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"MBR_ID", this.divSrch.form.edt_mbr.value,
        	"fn_popupCallback", 120,300);
        };

        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_setMSearch(this.name, "OPR_UNIT_ID", this.divSrch.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name, "DEPT_ID", this.divSrch.form.edt_deptId.value);
        	this.fn_setMSearch(this.name, "MBR_ID", this.divSrch.form.edt_mbr.value);
        	this.fn_setMSearch(this.name, "MBR_ID_NM", this.divSrch.form.edt_mbrNm.value);
        	this.fn_setMSearch(this.name, "BZPLC_ID", this.divSrch.form.edt_bzplc.value);

        	if (!this.fn_checkSearchCondition()) {
        		alert(this.fn_getMessage("ERRS000380"));
                return;
        	}

        	this.ds_search.setColumn(0, "LANG_CD", "KO"); //
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_search(true);
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.fn_setCommonCode();
        	this.divSrch.form.set_enable(true);
        	this.ds_list.clearData();
        };

        //활성화
        this.btn_active_onclick = function(obj,e)
        {
        	this.divSrch.form.set_enable(true);
        };


        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	if(this.ds_list.getRowCount() == 0){
        		this.alert(this.fn_getMessage("ERRP000205")); // '다운로드 가능한 데이터가 없습니다.'
        	}else{
        		// 20230503_박철희_엑셀다운로드수정
        		// this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownload");
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}
        };

        this.fn_excelDownload = function(objId, ret)
        {
        	// 20230503_박철희_엑셀다운로드수정
        	// if(!pwd) return; //취소(undefined)
        	// this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"주문대행고객", password: pwd, dbWrk: "dbWrk", pgmId: "SSP_BO_OA_71_02"});
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"주문대행고객", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_OA_71_02"});
        };


        // 접속이력
        this.btn_conHst_onclick = function(obj,e)
        {
        	var objParam = {coCd : this.fv_coCd};
        	this.gfn_openPopup("conHstPopup", "OD::SSP_BO_OA_72.xfdl", objParam);
        };

        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        /***********************************************************************************************
        * 사용자 함수
        ************************************************************************************************/
        // FO 로그인 가능여부 검사(약관동의, 개인정보수집동의, 주문대행사용, 월정산거래)
        this.fn_checkLoginFo = function() {
        	var utAgreYn = this.ds_list.getColumn(this.ds_list.rowposition, "UT_AGRE_YN");
        	var cltAgreYn = this.ds_list.getColumn(this.ds_list.rowposition, "CLT_AGRE_YN");
        	var odrAgncUseYn = this.ds_list.getColumn(this.ds_list.rowposition, "ODR_AGNC_USE_YN");
        	var monthlyAdjYn = this.ds_list.getColumn(this.ds_list.rowposition, "MONTHLY_ADJ_YN");
        	var mbrUseCd = this.ds_list.getColumn(this.ds_list.rowposition, "MBR_USE_CD");

        	if (utAgreYn == "N" ||
        		cltAgreYn == "N" ||
        		odrAgncUseYn == "N" ||
        		monthlyAdjYn == "N" ||
        		mbrUseCd != "Y")	return false;

        	return true;
        };

        this.fn_checkSearchCondition = function() {
        	if (this.gfn_isNull(this.divSrch.form.edt_oprUnit.value) &&		// 운영단위
        		this.gfn_isNull(this.divSrch.form.edt_deptId.value) &&		// 부서ID
        		this.gfn_isNull(this.divSrch.form.edt_mbr.value) &&			// 회원ID
        		this.gfn_isNull(this.divSrch.form.edt_mbrNm.value) && 		// 회원명
        		this.gfn_isNull(this.divSrch.form.edt_bzplc.value)) { 		// 사업장ID
        		//this.divSrch.form.cmb_mbrUseYn.index == 0) {				// 상태
        			return false;
        		}
        	return true;
        };

        // 회원권한 기본결재선 - 운영단위 결재사용 검사
        this.fn_checkAprvAuth = function(rownum) {
        	var aprvAuthSpr = this.ds_list.getColumn(rownum, "APRV_AUTH_USE_YN");	// 운영단위 - 결재사용
        	var baseAprvNm = this.ds_list.getColumn(rownum, "BASE_APRV_NM");		// 회원권한 - 기본결재선

        	if (this.gfn_isNull(baseAprvNm)) {
        		if (aprvAuthSpr == "Y") {
        			return false;
        		}
        	}

        	return true;
        };

        // 회원권한 기본발주선 - 운영단위 발주사용 검사
        this.fn_checkOrdAuth = function(rownum) {
        	var ordAuthSpr = this.ds_list.getColumn(rownum, "ORD_AUTH_USE_YN");		// 운영단위 - 발주사용
        	var baseOrderNm = this.ds_list.getColumn(rownum, "BASE_ORDER_NM");		// 회원권한 - 기본발주선

        	if (this.gfn_isNull(baseOrderNm)) {
        		if (ordAuthSpr == "Y") {
        			return false;
        		}
        	}

        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("");
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grd_list_oncellclick = function(obj,e)
        {
        	if (e.col == 2) {
        		if (!this.fn_checkLoginFo()) {
        			alert(this.fn_getMessage("ERRS000392"));
        			return;
        		}

        		var checkAprvAuth = this.fn_checkAprvAuth(e.row);
        		var checkOrdAuth = this.fn_checkOrdAuth(e.row);

        		if (checkAprvAuth == false) {
        			// 회원권한 기본결재선과 운영단위 결재사용 정보가 일치하지 않습니다.
        			alert(this.fn_getMessage("ERRS000394"));
        			return;
        		}

        		if (checkOrdAuth == false) {
        			// 회원권한 기본발주선과 운영단위 발주사용 정보가 일치하지 않습니다.
        			alert(this.fn_getMessage("ERRS000415"));
        			return;
        		}

        		var sspHost = this.fv_oApp.gds_sspHosts.getColumn(0, "HOST_SSP");
        		var urlBody = "//co/dlgteLoginProcess.do?";
        		var loginMbrId = "loginMbrId=" + this.ds_list.getColumn(e.row, "MBR_ID");
        		var dlgteMbrId = "dlgteMbrId=" + this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID");
        		var url = urlBody + loginMbrId;
        		trace("url : " + url);

        		system.execBrowser(url);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_71_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_71_onkeyup,this);
            this.divSrch.form.Static03.addEventHandler("onclick",this.divSrch_Static04_00_onclick,this);
            this.divSrch.form.Static05.addEventHandler("onclick",this.divSrch_Static04_00_01_onclick,this);
            this.divSrch.form.Static07.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.divSrch.form.Static08.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.divSrch.form.Static09.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.divSrch.form.btn_oprUnitInput.addEventHandler("onclick",this.divSrch_btn_oprUnitInput_onclick,this);
            this.divSrch.form.btn_oprUnitMultiPopup.addEventHandler("onclick",this.divSrch_btn_oprUnitMultiPopup_onclick,this);
            this.divSrch.form.btn_deptIdMultiPopup.addEventHandler("onclick",this.divSrch_btn_deptIdMultiPopup_onclick,this);
            this.divSrch.form.btn_deptIdInput.addEventHandler("onclick",this.divSrch_btn_deptIdInput_onclick,this);
            this.divSrch.form.btn_bzplcMultiPopup.addEventHandler("onclick",this.divSrch_btn_bzplcMultiPopup_onclick,this);
            this.divSrch.form.btn_bzplcInput.addEventHandler("onclick",this.divSrch_btn_bzplcInput_onclick,this);
            this.divSrch.form.btn_mbrMultiPopup.addEventHandler("onclick",this.divSrch_btn_mbrMultiPopup_onclick,this);
            this.divSrch.form.btn_mbrInput.addEventHandler("onclick",this.divSrch_btn_mbrInput_onclick,this);
            this.divSrch.form.btn_mbrNmInput.addEventHandler("onclick",this.divSrch_btn_mbrNmInput_onclick,this);
            this.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.cmb_viewCount.addEventHandler("canitemchange",this.cmb_viewCount_onitemchanged,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.btn_conHst.addEventHandler("onclick",this.btn_conHst_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_71.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
