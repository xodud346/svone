(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_01");
            this.set_titletext("주문관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAT_KILLER\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_ERR\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NRML_RTNGDS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GO_PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_TMP_LOCK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STL_MEAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNSG_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COST_TRNSF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_CLOS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PURG_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_CMPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PRD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eGDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eCUST_PURG_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TP_OR_CRT_TP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_ORD_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_DOC_CRT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DUE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_DLV_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STL_MEAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CRT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COND_PRC_DECI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ORD_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GI_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_UNQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ORI_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_DLV_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_SSP_DLV_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_KND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">CUST_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">DLV_FORM_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">INQ_PERD_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">CATG_KILR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">NRML_RTNGDS_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">STL_MEAN_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">SALE_ADJ_STATS_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">ODR_TMP_LOCK_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">ODR_CRT_TP_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCDCustTP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comDlvForm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comInqPerdSpr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCatKiller", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comNrmlRtngds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comStlMean", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comSaleAdjStates", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comOdrBlock", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_docItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServerGdocNo001", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RPT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"rptUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sesId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerReportId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REPORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comOdrCrtTpCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"361","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","20",null,"342","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static65","0","62",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","93",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","0","124",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","0","155",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","0","186",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","0","217",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","0","248",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","0","279",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("64");
            obj.set_text("주문상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","62","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("65");
            obj.set_text("발주 오류 대상");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","0","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("66");
            obj.set_text("서비스팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","0","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("67");
            obj.set_text("부서 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","0","155","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("68");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","186","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("69");
            obj.set_text("정상/반품 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","217","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("70");
            obj.set_text("정산 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","248","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("71");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","0","279","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("72");
            obj.set_text("비용 이체 부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","430","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("73");
            obj.set_text("MD 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00","430","62","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("74");
            obj.set_text("조회 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00","430","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("75");
            obj.set_text("영업 담당");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16_00","430","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("76");
            obj.set_text("배송 형태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static20_00","430","155","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("77");
            obj.set_text("주문자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","430","186","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("78");
            obj.set_text("입고 플랜트");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","430","217","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("79");
            obj.set_text("주문 Block");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","430","248","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("80");
            obj.set_text("발주 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","430","279","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("81");
            obj.set_text("Closing");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("82");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00","862","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("83");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","862","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("84");
            obj.set_text("거래명세서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","862","155","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("85");
            obj.set_text("배송 완료 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","862","186","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("86");
            obj.set_text("출고 플랜트");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","862","217","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("87");
            obj.set_text("결제 수단");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","862","248","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("88");
            obj.set_text("계정 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00_00","862","279","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("89");
            obj.set_text("고객사 PO 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("90");
            obj.set_text("운영단위");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("91");
            obj.set_text("주문번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("92");
            obj.set_text("MD 팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","140","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("93");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiPopup","edt_oprUnit:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitInput","btn_oprUnitMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_ordErrorTgt","140","66","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var Div00_form_Div01_form_rdo_ordErrorTgt_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_rdo_ordErrorTgt_innerdataset", obj);
            Div00_form_Div01_form_rdo_ordErrorTgt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">대상</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">비대상</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_rdo_ordErrorTgt_innerdataset);
            obj.set_text("전체");
            obj.set_value("10");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_svcTeam","140","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","140","128","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("23");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc","140","159","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("29");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","140","252","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("42");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_costTransfDept","140","283","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("49");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_nrmlRtnGdsSpr","140","190","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_comNrmlRtngds");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("3");
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_adjStats","140","221","284","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_comSaleAdjStates");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("4");
            obj.set_font("10px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_svcTeamPopup","edt_svcTeam:134","98","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","edt_bzplc:134","159","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpIdPopup","edt_cprtcpId:134","252","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_costTransfDeptPopup","edt_costTransfDept:134","283","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deptIdMultiPopup","edt_deptId:4","128","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deptIdInput","btn_deptIdMultiPopup:4","128","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrNo","570","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("94");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrNoMultiPopup","edt_odrNo:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrNoInput","btn_odrNoMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmd_inqPrd","570","66","150","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Div01_form_cmd_inqPrd_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_cmd_inqPrd_innerdataset", obj);
            Div00_form_Div01_form_cmd_inqPrd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">주문 생성일</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">S/O 생성일</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">배송 완료일</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">발주 완료일</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_cmd_inqPrd_innerdataset);
            obj.set_text("전체");
            obj.set_value("00");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_inqStart","cmd_inqPrd:4","66","100","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","cal_inqStart:4","66","9","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("95");
            obj.set_text("~");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_inqEnd","sta_fromTo:4","66","100","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmd_inqPrdSelect","cal_inqEnd:4","66","150","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_comInqPerdSpr");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_dlvForm","570","128","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_comDlvForm");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsChr","570","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("19");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrPsn","570","159","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("31");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_giPlnt","570","190","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("36");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","570","252","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("44");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_salsChrPopup","edt_salsChr:134","97","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrPsnMultiPopup","edt_odrPsn:4","159","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrPsnInput","btn_odrPsnMultiPopup:4","159","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_closing","570","283","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var Div00_form_Div01_form_rdo_closing_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_rdo_closing_innerdataset", obj);
            Div00_form_Div01_form_rdo_closing_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">대상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">제외</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_rdo_closing_innerdataset);
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_giPlntPopup","edt_giPlnt:134","190","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_ordNoMultiPopup","edt_ordNo:4","252","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_ordNoInput","btn_ordNoMultiPopup:4","252","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrStats","1002","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("96");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrStatsMultiPopup","edt_odrStats:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrStatsInput","btn_odrStatsMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_dlvCmpl","1002","159","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Div01_form_cmb_dlvCmpl_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_cmb_dlvCmpl_innerdataset", obj);
            Div00_form_Div01_form_cmb_dlvCmpl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">주문 예외</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">미 완료</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_cmb_dlvCmpl_innerdataset);
            obj.set_text("전체");
            obj.set_value("10");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_stlMean","1002","221","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("41");
            obj.set_innerdataset("ds_comStlMean");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("3");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","1002","35","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeam","1002","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("21");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_gdoc","1002","128","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("27");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_goPlnt","1002","190","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("38");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_acctId","1002","252","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("47");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_custPoNo","1002","283","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("52");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","edt_prdId:4","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_prdIdInput","btn_prdIdMultiPopup:4","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamPopup","edt_salsTeam:134","97","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_gdocInput","edt_gdoc:4","128","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_goPlntPopup","edt_goPlnt:134","190","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_acctIdPopup","edt_acctId:135","252","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_custPoNoInput","edt_custPoNo:4","283","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","0","309",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_qckDlvYn","140","313","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("98");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var Div00_form_Div01_form_rdo_qckDlvYn_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_rdo_qckDlvYn_innerdataset", obj);
            Div00_form_Div01_form_rdo_qckDlvYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_rdo_qckDlvYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01","0","309","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("99");
            obj.set_text("빠른 배송 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_svcTeamNm","269","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("100");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrNm","699","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("101");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamNm","1131","97","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("102");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","269","159","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("103");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_giPlntNm","699","190","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("104");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_goPlntNm","1131","190","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("105");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","270","252","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("106");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_costTransfDeptNm","270","283","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("107");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm","1132","252","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("108");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_ordBlock","570","221","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("109");
            obj.set_innerdataset("ds_comOdrBlock");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","430","309","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_02","862","309","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("111");
            obj.set_text("Cat.Killer");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_custTp","570","313","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("112");
            obj.set_innerdataset("ds_comCDCustTP");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_catKiller","1003","313","253","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("113");
            obj.set_innerdataset("ds_comCatKiller");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_psnPopup","829","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("114");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","699","35","126","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("115");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrId","570","35","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("116");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_mdTeam","140","35","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("117");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_mdTeamNm","269","35","125","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("118");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_mdTeamPopup","399","36","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("119");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_custTpAndCrtTp","440","313","110","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("120");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Div01_form_cmb_custTpAndCrtTp_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_cmb_custTpAndCrtTp_innerdataset", obj);
            Div00_form_Div01_form_cmb_custTpAndCrtTp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CUST_SPR_CD</Col><Col id=\"datacolumn\">고객유형</Col></Row><Row><Col id=\"codecolumn\">ODR_CRT_TP_CD</Col><Col id=\"datacolumn\">오더유형</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_cmb_custTpAndCrtTp_innerdataset);
            obj.set_text("고객유형");
            obj.set_value("CUST_SPR_CD");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","28","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"10","60","28","btn_search:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"10","60","28","btn_clear:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_extend","20","0","130","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("상세조회");
            obj.set_cssclass("btn_WF_default");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"Div01:20","104","28","229",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("1000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"Div01:20","100","28","cmb_viewCount:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_odrGdoc",null,"Div01:20","114","28","574",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문거래명세서");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_main","20","cmb_viewCount:10",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list01");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은 고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"91\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"107\"/><Column size=\"160\"/><Column size=\"206\"/><Column size=\"240\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"오더유형\"/><Cell col=\"2\" text=\"Cat.Killer\"/><Cell col=\"3\" text=\"사업장ID\"/><Cell col=\"4\" text=\"운영단위 ID\"/><Cell col=\"5\" text=\"운영단위명\"/><Cell col=\"6\" text=\"주문 품목 번호\"/><Cell col=\"7\" text=\"주문 번호\"/><Cell col=\"8\" text=\"품목 번호\"/><Cell col=\"9\" text=\"주문 상태\"/><Cell col=\"10\" text=\"예외처리구분\"/><Cell col=\"11\" text=\"배송형태\"/><Cell col=\"12\" text=\"배송방식\"/><Cell col=\"13\" text=\"상품ID\"/><Cell col=\"14\" text=\"상품명\"/><Cell col=\"15\" text=\"SSP상품명\"/><Cell col=\"16\" text=\"규격\"/><Cell col=\"17\" text=\"제조원\"/><Cell col=\"18\" text=\"주문수량\"/><Cell col=\"19\" text=\"주문단위\"/><Cell col=\"20\" text=\"부가세액\"/><Cell col=\"21\" text=\"판매단가(VAT제외)\"/><Cell col=\"22\" text=\"매출금액(VAT제외)\"/><Cell col=\"23\" text=\"판매단가(VAT포함)\"/><Cell col=\"24\" text=\"매출금액(VAT포함)\"/><Cell col=\"25\" text=\"카트배송비\"/><Cell col=\"26\" text=\"과세유형\"/><Cell col=\"27\" text=\"가격결정기준\"/><Cell col=\"28\" text=\"주문 생성일\"/><Cell col=\"29\" text=\"고객사 발주 완료일\"/><Cell col=\"30\" text=\"S/O 생성일\"/><Cell col=\"31\" text=\"고객 배송예정일\"/><Cell col=\"32\" text=\"배송 완료일\"/><Cell col=\"33\" text=\"부서 ID\"/><Cell col=\"34\" text=\"부서 명\"/><Cell col=\"35\" text=\"주문자 ID\"/><Cell col=\"36\" text=\"주문자명\"/><Cell col=\"37\" text=\"수령자\"/><Cell col=\"38\" text=\"결제 수단\"/><Cell col=\"39\" text=\"발주번호\"/><Cell col=\"40\" text=\"협력사\"/><Cell col=\"41\" text=\"거래명세서번호\"/><Cell col=\"42\" text=\"입고여부\"/><Cell col=\"43\" text=\"매출정산\"/><Cell col=\"44\" text=\"세금계산서번호\"/><Cell col=\"45\" text=\"원주문번호\"/><Cell col=\"46\" text=\"주문예외종류\"/><Cell col=\"47\" text=\"영업담당자\"/><Cell col=\"48\" text=\"서비스담당자\"/><Cell col=\"49\" text=\"구매담당자\"/><Cell col=\"50\" text=\"MD담당자\"/><Cell col=\"51\" text=\"카테고리ID\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ODR_CRT_TP_CD\"/><Cell col=\"2\" text=\"bind:CATG_KILR_CD\"/><Cell col=\"3\" text=\"bind:BZPLC_ID\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"5\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"6\" text=\"bind:JNT_ODR_ITM_NO\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"7\" text=\"bind:ODR_NO\"/><Cell col=\"8\" text=\"bind:ODR_ITM_NO\"/><Cell col=\"9\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"10\" text=\"bind:EXCEPT_KND_NM\"/><Cell col=\"11\" text=\"bind:DLV_FORM_SPR_CD\"/><Cell col=\"12\" text=\"bind:JNT_SSP_DLV_MTD_CD_NM\"/><Cell col=\"13\" text=\"bind:PRD_ID\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:SSP_PRD_NM\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:REPR_SPEC\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:ODR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0.####\" maskeditmaskchar=\"#\"/><Cell col=\"19\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"20\" text=\"bind:VAT_AMT\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" maskeditmaskchar=\"#\"/><Cell col=\"21\" text=\"bind:SALSPRC\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###,###,##0.####\" maskeditmaskchar=\"#\"/><Cell col=\"22\" text=\"bind:SALE_AMT\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" maskeditmaskchar=\"#\"/><Cell col=\"23\" text=\"bind:VAT_SALSPRC\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###,###,##0.####\" maskeditmaskchar=\"#\"/><Cell col=\"24\" text=\"bind:VAT_SALE_AMT\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" maskeditmaskchar=\"#\"/><Cell col=\"25\" text=\"bind:DLCST_AMT\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" maskeditmaskchar=\"#\"/><Cell col=\"26\" text=\"bind:TXTN_TP_CD\"/><Cell col=\"27\" text=\"bind:COND_PRC_DECI_CD\"/><Cell col=\"28\" text=\"bind:ODR_REQ_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"29\" text=\"bind:INTL_ORD_DCN_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"30\" text=\"bind:SELL_DOC_CRT_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"31\" text=\"bind:DLV_DUE_DT\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"32\" text=\"bind:DLV_CMPL_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"33\" text=\"bind:DEPT_ID\"/><Cell col=\"34\" text=\"bind:DEPT_NM\"/><Cell col=\"35\" text=\"bind:ODRPSN_ID\"/><Cell col=\"36\" text=\"expr:comp.parent.fn_secureName(currow, &quot;MBR_NM&quot;, dataset)\"/><Cell col=\"37\" text=\"expr:comp.parent.fn_secureName(currow, &quot;RCVR_NM&quot;, dataset)\"/><Cell col=\"38\" text=\"bind:STL_MEAN_CD\"/><Cell col=\"39\" text=\"bind:JNT_ORD_ITM_NO\"/><Cell col=\"40\" text=\"bind:CPRTCP_ID\"/><Cell col=\"41\" text=\"bind:GDOC_NO\"/><Cell col=\"42\" text=\"bind:GI_STATS_CD_NM\"/><Cell col=\"43\" text=\"bind:ADJ_STATS_CD_NM\"/><Cell col=\"44\" text=\"bind:TAXINV_UNQ_NO\"/><Cell col=\"45\" text=\"bind:JNT_ORI_ITM_NO\"/><Cell col=\"46\" text=\"bind:EXCEPT_KND_NM\"/><Cell col=\"47\" text=\"bind:SALS_CHR_CD_NM\"/><Cell col=\"48\" text=\"bind:SVC_CHRPSN_ID_NM\"/><Cell col=\"49\" text=\"bind:PURG_CHRPSN_ID_NM\"/><Cell col=\"50\" text=\"bind:MD_CHRPSN_ID_NM\"/><Cell col=\"51\" text=\"bind:CATEGORY_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"30","20","50",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","Div01:34","240","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allOrderGdoc",null,"Div01:20","124","28","btn_odrGdoc:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주문전체 거래명세서");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goGdoc",null,"Div01:20","114","28","btn_allOrderGdoc:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출고거래명세서");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelBigDown",null,"Div01:20","128","28","btn_excelDownload:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("대용량 다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"Div01:20","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"Div01:20","100","28","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("ordErrorTgt","Div00.form.Div01.form.rdo_ordErrorTgt","value","ds_search","ORD_ERR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("svcTeam","Div00.form.Div01.form.edt_svcTeam","value","ds_search","SVC_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("salsChr","Div00.form.Div01.form.edt_salsChr","value","ds_search","SALS_CHR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("salsTeam","Div00.form.Div01.form.edt_salsTeam","value","ds_search","SALS_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("dlvForm","Div00.form.Div01.form.cmb_dlvForm","value","ds_search","DLV_FORM_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bzplc","Div00.form.Div01.form.edt_bzplc","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("nrmlRtn","Div00.form.Div01.form.rdo_nrmlRtnGdsSpr","value","ds_search","NRML_RTNGDS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("giPlnt","Div00.form.Div01.form.edt_giPlnt","value","ds_search","GI_PLNT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("goPlnt","Div00.form.Div01.form.edt_goPlnt","value","ds_search","GO_PLNT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("adjStats","Div00.form.Div01.form.rdo_adjStats","value","ds_search","SALE_ADJ_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("stlMean","Div00.form.Div01.form.rdo_stlMean","value","ds_search","STL_MEAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("cprtCpld","Div00.form.Div01.form.edt_cprtcpId","value","ds_search","CNSG_CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("acctId","Div00.form.Div01.form.edt_acctId","value","ds_search","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("costTransfDept","Div00.form.Div01.form.edt_costTransfDept","value","ds_search","COST_TRNSF_DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("closing","Div00.form.Div01.form.rdo_closing","value","ds_search","SALE_CLOS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("dlvCmpl","Div00.form.Div01.form.cmb_dlvCmpl","value","ds_search","DLV_CMPL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("inqStart","Div00.form.Div01.form.cal_inqStart","value","ds_search","FROM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("inqEnd","Div00.form.Div01.form.cal_inqEnd","value","ds_search","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("qckDlvYn","Div00.form.Div01.form.rdo_qckDlvYn","value","ds_search","QCK_DLV_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Div01.form.edt_oprUnit","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div01.form.edt_odrNo","value","ds_search","eODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div01.form.edt_odrStats","value","ds_search","eODR_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div01.form.edt_prdId","value","ds_search","ePRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div01.form.edt_deptId","value","ds_search","eDEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div01.form.edt_gdoc","value","ds_search","eGDOC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Div01.form.edt_odrPsn","value","ds_search","eODRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Div01.form.edt_ordNo","value","ds_search","eORD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Div01.form.edt_custPoNo","value","ds_search","eCUST_PURG_ODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Div01.form.cmb_ordBlock","value","ds_search","ODR_TMP_LOCK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.Div01.form.cmb_custTp","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.Div01.form.cmb_custTpAndCrtTp","value","ds_search","CUST_TP_OR_CRT_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.Div01.form.cmb_catKiller","value","ds_search","CAT_KILLER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.Div01.form.edt_oprtrId","value","ds_search","MD_OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.Div01.form.edt_mdTeam","value","ds_search","MD_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_01.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_OA_01.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_OA_01.xfdl", function() {
        // 주문관리 목록

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        this.fv_oApp = nexacro.getApplication();    //application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.bExtend = false;
        this.nOdrInqTgt = 0;
        this.oprUnitIdCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_01_onload = function(obj,e)
        {
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

            //검색 영역 최소size 적용
            this.Div00.set_height(this.Div00.uMaxSize);
            this.resetScroll();

            this.fn_initView();
            this.fn_changeSearchArea(true);
            this.setExtend(false);
        	this.copyPaste.addGrid(this.grid_main);
            this.fn_closeAll();
            this.fn_odCommLoading();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_01_onclose = function(obj,e)
        {
            this.fn_closeAll();
        };

        this.SSP_BO_OA_01_onactivate = function(obj,e)
        {
            //trace("SSP_BO_OA_01_onactivate");
            //this.fn_topmostAll();
        };

        this.SSP_BO_OA_01_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page) {
            trace("callback fn_search");
            var sSvcId = "selectOrderList";
            var sUrl = "/od/oderlist/selectOrderList.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list01=ds_output1 ds_search=ds_output2";
            var arg = "";

            if (page) {
                var oPaging = this.div_paging;
                oPaging.uPage = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM", 0);
                //this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
                this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
                this.ds_search.setColumn(0,"SORT_COLUMN", "");
                this.ds_search.setColumn(0,"SORT_TYPE", "");
                this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
                this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);
                this.ds_search.setColumn(0,"TOTAL_COUNT", -1);

            }
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 공통코드
        this.fn_searchCommonCode = function() {
            var sSvcId = "selectCommonCodeList";
            var sUrl = "/od/odrPopup/selectCommonCodeList.do";
            var inDs = "ds_search=ds_searchCoCd";
            var outDs = "ds_comCd=ds_output1";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 엑셀 대용량다운로드
        this.fn_excelBigDownload = function(){
        	var sSvcId = "excelBigDownloadOA01";
        	var sUrl = "/od/orderExcel/excelBigDownloadOA01.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
            this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            if (svcID == "selectOrderList") {
                this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cmb_viewCount.value, "fn_pageCallback");
                this.Div00.form.Div01.form.set_enable(false);
                this.cmb_viewCount.set_enable(false);

        		if (this.ds_list01.rowcount <= 0) {
        			var sTotText = "(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)";
        			this.sta_totcnt.set_text(sTotText);
        		}
            }
            else if (svcID == "selectCommonCodeList") {
                this.fn_setCommonCode();
        		this.fn_todoSearch();
            }
            else if (svcID == "insertOdrInqTgtDtls") {
                if (this.nOdrInqTgt == 0)  {
                    trace("### insertOdrInqTgtDtls - insert count : " + this.insertCount);
                    this.fn_search(true);
                }
                else if (this.nOdrInqTgt == 1) {
                    //출고거래명세서
        			if (errorCode == "0") {
        				//this.fn_openGdocNo001();
        			}
                }
                else if (this.nOdrInqTgt == 2) {
                    //주문거래명세서
        			if (errorCode == "0") {
        				this.fn_openGdocNo002();
        			}
                }
        		else if (this.nOdrInqTgt == 3) {
        			// 주문전체 거래명세서
        			if (errorCode == "0") {
        				this.fn_insertSelectOrderDoc();
        			}
        		}
        		else if (this.nOdrInqTgt == 4) {
        			if (errorCode == "0") {
        				this.fn_excelBigDownload();
        			}
        		}
            }
            else if (svcID == "deleteOdrInqTgtDtls") {
                this.ds_select.clearData();
                trace("### deleteOdrInqTgtDtls");
            }
            else if (svcID == "insertnselectOrderDoc") {
                //주문전체 거래명세서
        		if (errorCode == "0") {
        			this.fn_insertReportItemToSession();
        		}
            }
        	else if (svcID == "insertReportItemToSession") {
        		if (errorCode == "0") {
        			if (this.oprUnitIdCount != 1) {
        				alert(this.fn_getMessage("ERRS000334"));
        			}
        			else {
        				this.fn_openGdocNo003();
        			}
        		}
        	}
        	// 출고거래명세서 REPORT_URL
        	else if (svcID == "selectReportId001") {
                if (errorCode == "0") {
        			//this.call_odrGdoc("GDOC_NO",1);
        			this.fn_openGdocNo001();
        		}
            }
        	// 주문거래명세서 REPORT_URL
        	else if (svcID == "selectReportId002") {
                if (errorCode == "0") {
        			this.call_odrGdoc("JNT_ODR_ITM_NO",2);
        		}
            }
        	// 주문전체 거래명세서 REPORT_URL
        	else if (svcID == "selectReportId003"){
                if (errorCode == "0") {
        			this.fn_prepareAllOrderGdoc();
        		}
            }
        	else if (svcID == "excelBigDownloadOA01") {
        	/*
        	 * 2023.07.28 박철희 - SSP-3404_결함_박철희_주문조회 대용량다운로드 오류 확인 요청
        	 *                    - 대용량 다운로드 실패관련 알림로직 추가(-10 로직 추가)
        	 */
        		if (errorCode == -100) {
        			//alert(errorMsg);
        			alert(this.fn_getMessage(errorMsg));
        		}
        		else if (errorCode == "0") {
        			alert(this.fn_getMessage("ERRS000461"));
        		}
        		else if (errorCode == "-10") {
        			alert(this.fn_getMessage("ERRS000492"));
        		}
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
                this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.cmb_viewCount.value);
                this.fn_search(false);
            }

            var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.sta_totcnt.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
            var oGrid = null;
            if(sGridId == "grd_main"){
                oSortInfo = this.grd_main.uaSortInfo;
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
                this.fn_search();
            }
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
            //search div 초기 설정
            this.Div00.uMinSize = 114;
            //this.Div00.uMaxSize = 331;
            this.Div00.uMaxSize = 361;

        	this.uGridList = "grid_main";

        	this.grid_main.uRightMouse = "true";
        	this.grid_main.uPersonalFlag = "true";
        };

        this.cfn_personalPopupClose = function(sRet) {
        	this.grid_main.set_formats(sRet);
        	this.pdiv_personal.closePopup();
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
                    this.Div00.form.Div01.form.edt_oprUnit.set_value(sIdList);
                    this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
                    break;
                // 운영단위 멀티 INPUT
                case "SSP_BO_OA_01;OPR_UNIT_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_oprUnit.set_value(sIdList);
                    this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
                    break;
                // 주문번호 멀티 팝업
                case "odrNoPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.ODR_NO +",";
                    }
                    this.Div00.form.Div01.form.edt_odrNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_NO",sIdList);
                    break;
                // 주문번호 멀티 INPUT
                case "SSP_BO_OA_01;ODR_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_odrNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_NO",sIdList);
                    break;
                // 주문상태 멀티 팝업
                case "odrStatsCdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.COM_DTL_CD +",";
                        sNmList += rtnData.COM_DTL_CD_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_odrStats.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_STATS",sIdList);
                    break;
                // 주문상태 멀티 INPUT
                case "SSP_BO_OA_01;ODR_STATS":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_odrStats.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_STATS",sIdList);
                    break;
                // 상품ID 멀티 팝업
                case "prdIdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.PRD_ID_VIEW +",";
                        sNmList += rtnData.PRD_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_prdId.set_value(sIdList);
                    this.fn_setMSearch(this.name,"PRD_ID",sIdList);
                    break;
                // 상품ID 멀티 INPUT
                case "SSP_BO_OA_01;PRD_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_prdId.set_value(sIdList);
                    this.fn_setMSearch(this.name,"PRD_ID",sIdList);
                    break;
                // 부서ID 멀티 팝업
                case "deptIdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.DEPT_ID +",";
                        sNmList += rtnData.DEPT_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_deptId.set_value(sIdList);
                    this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
                    break;
                // 부서ID 멀티 INPUT
                case "SSP_BO_OA_01;DEPT_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_deptId.set_value(sIdList);
                    this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
                    break;
                // 거래명세서 멀티 INPUT
                case "SSP_BO_OA_01;GDOC_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_gdoc.set_value(sIdList);
                    this.fn_setMSearch(this.name,"GDOC_NO",sIdList);
                    break;
                // 주문자 멀티 팝업
                case "odrpsnIdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.MBR_ID +",";
                        //sNmList += rtnData.ODRPSN_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_odrPsn.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODRPSN_ID",sIdList);
                    break;
                // 주문자 멀티 INPUT
                case "SSP_BO_OA_01;ODRPSN_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_odrPsn.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODRPSN_ID",sIdList);
                    break;
                // 발주번호 멀티 팝업
                case "ordNoPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.ORD_NO +",";
                    }
                    this.Div00.form.Div01.form.edt_ordNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ORD_NO",sIdList);
                    //trace("### sIdList : " + sIdList);
                    break;
                // 발주번호 멀티 INPUT
                case "SSP_BO_OA_01;ORD_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_ordNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ORD_NO",sIdList);
                    break;
                // 고객사PO번호 멀티 INPUT
                case "SSP_BO_OA_01;CCO_PO_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_custPoNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"CCO_PO_NO",sIdList);
                    break;
                // 영업담당
                case "salsChrPopup":
                    this.Div00.form.Div01.form.edt_salsChr.set_value(resData.SALS_CHR_CD);
                    this.Div00.form.Div01.form.edt_salsChrNm.set_value(resData.TEAM_NM);
                    break;
                // 사업장
                case "bzplcPopup":
                    this.Div00.form.Div01.form.edt_bzplc.set_value(resData.BZPLC_ID);
                    this.Div00.form.Div01.form.edt_bzplcNm.set_value(resData.BZPLC_NM);
                    break;
                // 입고 플랜트
                case "giPlntPopup":
                    this.Div00.form.Div01.form.edt_giPlnt.set_value(resData.PLNT_ID);
                    this.Div00.form.Div01.form.edt_giPlntNm.set_value(resData.PLNT_NM);
                    break;
                // 출고 플랜트
                case "goPlntPopup":
                    this.Div00.form.Div01.form.edt_goPlnt.set_value(resData.PLNT_ID);
                    this.Div00.form.Div01.form.edt_goPlntNm.set_value(resData.PLNT_NM);
                    break;
                // 계정ID
                case "acctIdPopup":
                    this.Div00.form.Div01.form.edt_acctId.set_value(resData.ACCT_ID);
                    this.Div00.form.Div01.form.edt_acctNm.set_value(resData.ACCT_NM);
                    break;
                // 비용이체부서ID
                case "costTrnsfDeptIdPopup":
                    this.Div00.form.Div01.form.edt_costTransfDept.set_value(resData.DEPT_ID);
                    this.Div00.form.Div01.form.edt_costTransfDeptNm.set_value(resData.DEPT_NM);
                    break;
                // 서비스팀
                case "serviceTeamPopup":
                    this.Div00.form.Div01.form.edt_svcTeam.set_value(resData.TEAM_CD);
                    this.Div00.form.Div01.form.edt_svcTeamNm.set_value(resData.TEAM_NM);
                    break;
                // 영업팀
                case "salsTeamPopup":
                    this.Div00.form.Div01.form.edt_salsTeam.set_value(resData.SALS_TEAM_CD);
                    this.Div00.form.Div01.form.edt_salsTeamNm.set_value(resData.TEAM_NM);
                    break;
                // 협력사
                case "cprtcpIdPopup":
                    this.Div00.form.Div01.form.edt_cprtcpId.set_value(resData.CPRTCP_ID);
                    this.Div00.form.Div01.form.edt_cprtcpNm.set_value(resData.CPRTCP_KOR_NM);
                    break;
        		// MD 담당자
        		case "mdOprtrPopup":
        			this.Div00.form.Div01.form.edt_oprtrId.set_value(resData.OPRTR_ID);
                    this.Div00.form.Div01.form.edt_oprtrIdNm.set_value(resData.OPRTR_NM);
        			break;
        		// MD 팀
        		case "mdTeamPopup":
        			this.Div00.form.Div01.form.edt_mdTeam.set_value(resData.TEAM_CD);
                    this.Div00.form.Div01.form.edt_mdTeamNm.set_value(resData.TEAM_NM);
        			break;
        		// 출고거래명세서 오즈 리포트 팝업
        		case "gdocNoRpt001":
                    trace("### GDOC_NO_RPT_001");
                    break;
        		// 주문거래명세서 오즈 리포트 팝업
        		case "gdocNoRpt002":
                    trace("### GDOC_NO_RPT_002");
                    break;
                default :
                    break;
            }
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) this.ds_search.setColumn(0, "eODR_STATS_CD", oArgs.STATUS);
        		if (oArgs.ID) this.ds_search.setColumn(0, "MD_OPRTR_ID", oArgs.ID);
        		if (oArgs.NN) this.Div00.form.Div01.form.edt_oprtrNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {
        			if(oArgs.DTM == 1) this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(3); // 1: 3개월, 2: 전체
        			else this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(0);

        			this.fn_setInqPerdSprCd(this.Div00.form.Div01.form.cal_inqStart
        			   ,this.Div00.form.Div01.form.cal_inqEnd
        			   ,this.Div00.form.Div01.form.cmd_inqPrdSelect);
        		}
        		this.Div00.form.btn_search.click();
        	}
        }
        this.fn_initView = function() {
            // 공통코드 조회
            this.fn_searchCommonCode();

            this.Div00.form.Div01.form.cal_inqStart.set_value(new nexacro.Date());
            this.Div00.form.Div01.form.cal_inqEnd.set_value(new nexacro.Date());
        };

        this.fn_changeSearchArea = function(flag) {
            // 접기
            if (flag == true) {
                this.Div00.set_height(this.Div00.uMinSize);
            }
            // 펼치기
            else {
                this.Div00.set_height(this.Div00.uMaxSize);
            }
            this.resetScroll();
        };

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
            // 고객구분코드(고객유형)
            this.ds_comCd.filter("COM_CLSF_CD=='CUST_SPR_CD'");
            this.ds_comCDCustTP.copyData(this.ds_comCd, true);

        	// 주문생성유형코드(오더유형)
            this.ds_comCd.filter("COM_CLSF_CD=='ODR_CRT_TP_CD'");
            this.ds_comOdrCrtTpCd.copyData(this.ds_comCd, true);

            // 배송형태구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='DLV_FORM_SPR_CD'");
            this.ds_comDlvForm.copyData(this.ds_comCd, true);

            // 조회기간구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='INQ_PERD_SPR_CD' && ( COM_DTL_CD ==null || COM_USR_DEFN_NM_1 >'0')");
            this.ds_comInqPerdSpr.copyData(this.ds_comCd, true);

            // Cat.Killer 코드
            this.ds_comCd.filter("COM_CLSF_CD=='CATG_KILR_CD'");
            this.ds_comCatKiller.copyData(this.ds_comCd, true);

            this.ds_comCd.filter("COM_CLSF_CD=='ODR_TMP_LOCK_CD'");
            this.ds_comOdrBlock.copyData(this.ds_comCd, true);

            // 정상반품구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='NRML_RTNGDS_SPR_CD'");
            this.ds_comNrmlRtngds.copyData(this.ds_comCd, true);

            // 결제수단 코드
            this.ds_comCd.filter("COM_CLSF_CD=='STL_MEAN_CD' && ( COM_DTL_CD ==null || COM_USR_DEFN_NM_1 >'0')");
            this.ds_comStlMean.copyData(this.ds_comCd, true);

            // 매출정산상태 코드
            this.ds_comCd.filter("COM_CLSF_CD=='SALE_ADJ_STATS_CD'");
            this.ds_comSaleAdjStates.copyData(this.ds_comCd, true);

            // 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
            this.Div00.form.Div01.form.cmb_custTp.set_index(0);
            //this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(0);	// 전체
        	this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(1);	// 1일
            this.Div00.form.Div01.form.cmd_inqPrd.set_index(0);
            this.Div00.form.Div01.form.cmb_dlvForm.set_index(0);
            this.Div00.form.Div01.form.cmb_catKiller.set_index(0);
            this.Div00.form.Div01.form.cmb_ordBlock.set_index(0);
            this.Div00.form.Div01.form.rdo_nrmlRtnGdsSpr.set_index(0);
            this.Div00.form.Div01.form.rdo_stlMean.set_index(0);
            this.Div00.form.Div01.form.rdo_adjStats.set_index(0);
            // 추가적인 작업
            this.Div00.form.Div01.form.rdo_ordErrorTgt.set_index(0);
            this.Div00.form.Div01.form.rdo_closing.set_index(0);
            this.Div00.form.Div01.form.rdo_qckDlvYn.set_index(0);
            this.Div00.form.Div01.form.cmb_dlvCmpl.set_index(0);
        	this.Div00.form.Div01.form.cmb_custTpAndCrtTp.set_index(0);
        };

        // 모달리스 화면
        // rowposition : 화면에서 선택한 주문품목번호
        this.fn_showOderDetail = function(rowposition) {
            var width = this.getOwnerFrame().width; //1336;
            var height = this.getOwnerFrame().height;//846;
            var nLeft = 0;
            var nTop = 0;
            nLeft = system.clientToScreenX(this, nLeft);
            nTop  = system.clientToScreenY(this, nTop);

            var odrNo = this.ds_list01.getColumn(rowposition,"ODR_NO");
            var odrItmNo = this.ds_list01.getColumn(rowposition,"ODR_ITM_NO");
            var bzplcId = this.ds_list01.getColumn(rowposition,"BZPLC_ID");
            var odrpsnId = this.ds_list01.getColumn(rowposition,"ODRPSN_ID");
            var objectId =""
            var nRow = -1;
            var isExisted = false;

            objectId =odrNo ;//+ "-" + odrItmNo;
            isExisted = this.fn_getDetail(objectId);

            if( isExisted == false )    {

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
        }

        this.fn_closeAll = function()
        {
            trace("destroy ");
            var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            for(var i = 0; i < arrPopFrame.length; i++) {
                trace("destroy is " + arrPopFrame[i].name);
                arrPopFrame[i].destroy();
            }
        };

        this.fn_topmostAll = function() {
            //var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            //trace("s1 is " + arrPopFrame.length );
            //for(var i = 0; i < arrPopFrame.length; i++) {
                //arrPopFrame[i].set_openstatus("minimize");
        		//if (system.navigatorname == "nexacro") {
        		//	arrPopFrame[i].move(10,840,10,10)
        		//} else {
        		//	arrPopFrame[i]._getWindowHandle().move(10,840,40,10);
        		//}
            //}
        	/*if (system.navigatorname == "nexacro") {
        		opn.getOwnerFrame().setFocus();
        	} else {
        		opn.getOwnerFrame()._getWindowHandle().focus();
        	}*/
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

        // GDOC_NO 개수 검사
        this.fn_countOfGdocNo = function() {
        	var checkedGdocNoCount = 0;
        	this.grid_main.set_binddataset();
            this.ds_list01.filter("CHK=='1'");

        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (!this.gfn_isNull(this.ds_list01.getColumn(i, "GDOC_NO")))	checkedGdocNoCount = checkedGdocNoCount + 1;
        	}

        	this.ds_list01.filter("");
            this.grid_main.set_binddataset(this.ds_list01);
        	return checkedGdocNoCount;
        };

        // 체크된 GDOC_NO 반환
        this.fn_getGdocNo = function() {
        	this.grid_main.set_binddataset();
            this.ds_list01.filter("CHK=='1'");
        	var gDocNos = new Array();
        	var gDocNo = "";
        	var found = false;

        	if (this.ds_list01.rowcount > 0) {
        		for (var i = 0; i < this.ds_list01.rowcount; i++) {
        			if (!this.gfn_isNull(this.ds_list01.getColumn(i, "GDOC_NO"))) {
        				gDocNo = this.ds_list01.getColumn(i, "GDOC_NO");
        				found = false;
        				for (var j = 0; j < gDocNos.length; j++) {
        					if (gDocNo == gDocNos[j]) {
        						found = true;
        						break;
        					}
        				}

        				if (!found)	gDocNos.push(gDocNo);
        			}
        		}
        	}

        	this.ds_list01.filter("");
            this.grid_main.set_binddataset(this.ds_list01);
        	return gDocNos;
        };

        // 선택한 주문들이 동일한 운영단위ID인지 체크
        this.fn_isUnionOprUnitId = function() {
        	var oprUnitId = "";
        	this.grid_main.set_binddataset();
            this.ds_list01.filter("CHK=='1'");

        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (i == 0) {
        			oprUnitId = this.ds_list01.getColumn(i, "OPR_UNIT_ID");
        			continue;
        		}

        		if (oprUnitId != this.ds_list01.getColumn(i, "OPR_UNIT_ID")) {
        			this.ds_list01.filter("");
        			this.grid_main.set_binddataset(this.ds_list01);
        			return false;
        		}
        	}

        	this.ds_list01.filter("");
            this.grid_main.set_binddataset(this.ds_list01);
        	return true;
        };

        this.call_odrGdoc = function(strGdocNo,nTgt)
        {
        	// 임시 코드
        	if (this.gfn_isNull(this.ds_fromServerGdocNo001.getColumn(0, "rptUrl"))) {
        		alert(this.fn_getMessage("ERRS000402"));
        		return;
        	}

        	//var rptUrl = this.ds_fromServerGdocNo001.getColumn(0, "rptUrl");
        	//var ids = rptUrl.split("/");
        	//var reportId = ids[ids.length - 1];
            var nRow = 0;

        	this.grid_main.set_binddataset();
        	this.ds_list01.filter("CHK=='1'");
        	this.ds_docItem.clearData();

        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		var gdoc_no = this.ds_list01.getColumn(i, strGdocNo);
        		if (this.fn_getDSValue(gdoc_no) != "") {
        			this.ds_docItem.filter("COND_DATA_VAL=='" + gdoc_no + "'");
        			if (this.ds_docItem.rowcount == 0) {
        				nRow = this.ds_docItem.addRow();
        				this.ds_docItem.setColumn(nRow, "INQ_COND_DTLS", this.name + "_RPT_" + (nTgt + "").padLeft(3, "0"));
        				//this.ds_docItem.setColumn(nRow, "INQ_COND_DTLS", reportId);
        				//this.ds_docItem.setColumn(nRow, "COL_ITM",  "OPR_GDOC");
        				if (nTgt == 1) {
        					this.ds_docItem.setColumn(nRow, "COL_ITM",  "GDOC_NO");
        				}
        				else {
        					this.ds_docItem.setColumn(nRow, "COL_ITM",  "ODR_NO");
        				}

        				this.ds_docItem.setColumn(nRow, "COND_DATA_VAL", gdoc_no);
        				this.ds_docItem.setColumn(nRow, "REPORT_TYPE", nTgt);
        			}
        			this.ds_docItem.filter("");
        		}
        	}

        	this.ds_list01.filter("");
        	this.grid_main.set_binddataset(this.ds_list01);

            if(this.ds_docItem.getRowCount() <= 0 )
            {
                alert(this.fn_getMessage("ERRS000137"));
                return;
            }
            var sSvcId = "insertOdrInqTgtDtls";
            var sUrl = "/od/odrPopup/insertOdrInqTgtDtls.do";
            var inDs = "ds_search=ds_docItem";
            var outDs = "";
            var arg = "";
            this.nOdrInqTgt = nTgt;
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 출고거래명세서 리포트 URL
        this.fn_processGdocNo001 = function() {
        	this.ds_forServerReportId.clearData();
        	this.ds_forServerReportId.addRow();
        	this.ds_forServerReportId.setColumn(0, "REPORT_TYPE", "3");
        	this.ds_forServerReportId.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_forServerReportId.setColumn(0, "BZPLC_ID", this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "BZPLC_ID"));
        	this.ds_forServerReportId.setColumn(0, "OPR_UNIT_ID", this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "OPR_UNIT_ID"));

        	var sSvcId = "selectReportId001";
            //var sUrl = "/od/odrPopup/selectReportId.do";
        	var sUrl = "/od/oderlist/selectReportId.do";
            var inDs = "ds_search=ds_forServerReportId";
            var outDs = "ds_fromServerGdocNo001=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 주문거래명세서 리포트
        this.fn_processGdocNo002 = function() {
        	this.ds_forServerReportId.clearData();
        	this.ds_forServerReportId.addRow();
        	this.ds_forServerReportId.setColumn(0, "REPORT_TYPE", "2");
        	this.ds_forServerReportId.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_forServerReportId.setColumn(0, "BZPLC_ID", this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "BZPLC_ID"));
        	this.ds_forServerReportId.setColumn(0, "OPR_UNIT_ID", this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "OPR_UNIT_ID"));

        	var sSvcId = "selectReportId002";
            var sUrl = "/od/oderlist/selectReportId.do";
            var inDs = "ds_search=ds_forServerReportId";
            var outDs = "ds_fromServerGdocNo001=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 주문전체 거래명세서 리포트
        this.fn_processGdocNo003 = function() {
        	this.ds_forServerReportId.clearData();
        	this.ds_forServerReportId.addRow();
        	this.ds_forServerReportId.setColumn(0, "REPORT_TYPE", "2");
        	this.ds_forServerReportId.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_forServerReportId.setColumn(0, "BZPLC_ID", this.ds_list01.getColumn(0, "BZPLC_ID"));
        	this.ds_forServerReportId.setColumn(0, "OPR_UNIT_ID", this.ds_list01.getColumn(0, "OPR_UNIT_ID"));

        	var sSvcId = "selectReportId003";
            var sUrl = "/od/oderlist/selectReportId.do";
            var inDs = "ds_search=ds_forServerReportId";
            var outDs = "ds_fromServerGdocNo001=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 출고거래명세서 화면 OPEN
        this.fn_openGdocNo001 = function() {
        	var rptUrl = this.ds_fromServerGdocNo001.getColumn(0, "rptUrl");
        	if (this.gfn_isNull(rptUrl)) {
        		alert("리포트아이디(RPT_ID)가 존재하지 않습니다.");
        		return;
        	}

        	var gDocNos = this.fn_getGdocNo();
        	var gdocNo = this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "GDOC_NO");
        	var bzplcId = this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "BZPLC_ID");
        	var sesId = this.ds_fromServerGdocNo001.getColumn(0, "SES_ID");
        	var params = new Array();

        	for (i = 0; i < gDocNos.length; i++) {
        		var object = {"REPORT_ID":rptUrl,
        					  "VALUES":[this.fv_coCd, bzplcId, gDocNos[i]]};
        		params.push(object);
        	}

        	var objParam = {reportParams : params};

        	this.gfn_openPopup("gdocNoRpt001", "CO_POP::SSP_BO_YA_16.xfdl", objParam);
        };

        // 주문거래명세서 화면 OPEN
        this.fn_openGdocNo002 = function() {
        	// 임시 코드
        	if (this.gfn_isNull(this.ds_fromServerGdocNo001.getColumn(0, "rptUrl"))) {
        		alert("리포트아이디(RPT_ID)가 존재하지 않습니다.");
        		return;
        	}

        	var rptUrl = this.ds_fromServerGdocNo001.getColumn(0, "rptUrl");
        	//var ids = rptUrl.split("/");
        	//var reportId = ids[ids.length - 1];
        	var bzplcId = this.ds_list01.getColumn(this.ds_list01.findRow("CHK", "1"), "BZPLC_ID");
        	var sesId = this.ds_fromServerGdocNo001.getColumn(0, "SES_ID");
        	var params = [{"REPORT_ID":rptUrl,
        				   //"VALUES":[this.fv_coCd, bzplcId, reportId, sesId]}];
        				   "VALUES":[this.fv_coCd, bzplcId, this.name + "_RPT_" + (this.nOdrInqTgt + "").padLeft(3, "0"), sesId]}];
        	var objParam = {reportParams : params};

        	this.gfn_openPopup("gdocNoRpt002", "CO_POP::SSP_BO_YA_16.xfdl", objParam);
        };

        // 주문전체 거래명세서 화면 OPEN
        this.fn_openGdocNo003 = function() {

        	var rptUrl = this.ds_fromServerGdocNo001.getColumn(0, "rptUrl");
        	var bzplcId = this.ds_list01.getColumn(0, "BZPLC_ID");
        	var sesId = this.ds_fromServerGdocNo001.getColumn(0, "SES_ID");
        	var params = [{"REPORT_ID":rptUrl,
        				   "VALUES":[this.fv_coCd, bzplcId, this.name + "_RPT_" + (this.nOdrInqTgt + "").padLeft(3, "0")+"_TMP", sesId]}];
        	var objParam = {reportParams : params};

        	this.gfn_openPopup("gdocNoRpt003", "CO_POP::SSP_BO_YA_16.xfdl", objParam);
        };

        this.fn_prepareAllOrderGdoc = function() {
        	this.ds_select.clearData();
        	var inqCondDtls = this.name + "_RPT_" + (this.nOdrInqTgt + "").padLeft(3, "0");

        	this.fn_setMSearch(inqCondDtls, "OPR_UNIT_ID", this.Div00.form.Div01.form.edt_oprUnit.value);
        	this.fn_setMSearch(inqCondDtls, "ODR_NO", this.Div00.form.Div01.form.edt_odrNo.value);
        	this.fn_setMSearch(inqCondDtls, "ODR_STATS_CD", this.Div00.form.Div01.form.edt_odrStats.value);
        	this.fn_setMSearch(inqCondDtls, "PRD_ID", this.Div00.form.Div01.form.edt_prdId.value);
        	this.fn_setMSearch(inqCondDtls, "DEPT_ID", this.Div00.form.Div01.form.edt_deptId.value);
        	this.fn_setMSearch(inqCondDtls, "GDOC_NO", this.Div00.form.Div01.form.edt_gdoc.value);
        	this.fn_setMSearch(inqCondDtls, "ODRPSN_ID", this.Div00.form.Div01.form.edt_odrPsn.value);
        	this.fn_setMSearch(inqCondDtls, "ORD_NO", this.Div00.form.Div01.form.edt_ordNo.value);
        	this.fn_setMSearch(inqCondDtls, "CUST_PURG_ODR_NO", this.Div00.form.Div01.form.edt_custPoNo.value);

        	if (!this.fn_checkSearchCondition()) {
        		alert(this.fn_getMessage("ERRS000380"));
                return;
        	}

        	// 조회기간 데이터 설정(주문생성일, S/O생성일, 배송완료일, 발주완료일)
        	// 기간 콤보에서 "전체"를 설정하면 검색 대상에서 제외
        	if (this.Div00.form.Div01.form.cmd_inqPrdSelect.index == 0) {
        		this.ds_search.setColumn(0, "INQ_PRD", "00");
        	}
        	else {
        		this.ds_search.setColumn(0, "INQ_PRD", this.Div00.form.Div01.form.cmd_inqPrd.value);
        	}

        	this.nOdrInqTgt = 3;
        	var nCount = this.ds_select.getRowCount();

        	if (nCount == 0) {
        		this.fn_insertSelectOrderDoc();
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        // 주문전체 거래명세서 대상 테이블에 INSERT
        this.fn_insertSelectOrderDoc = function() {
        	var sSvcId = "insertnselectOrderDoc";
        	var sUrl = "/od/orderChange/insertnselectOrderDoc.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_docItem=ds_output1";
        	var arg = "";
        	var inqCondDtls = this.name + "_RPT_" + (this.nOdrInqTgt + "").padLeft(3, "0");

        	this.ds_search.setColumn(0, "INQ_COND_DTLS", inqCondDtls);
        	this.ds_search.setColumn(0, "COL_ITM", "ODR_NO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 주문전체 거래명세서 출력시 운영단위 개수 체크도 포함
        this.fn_insertReportItemToSession = function() {
        	var sSvcId = "insertReportItemToSession";
        	//var sUrl = "/od/odrPopup/insertReportItemToSession.do";
        	var sUrl = "/od/oderlist/insertReportItemToSession.do";
        	var inDs = "ds_search=ds_docItem";
        	var outDs = "";
        	var arg = "";

        	var inqCondDtls = this.name + "_RPT_" + (this.nOdrInqTgt + "").padLeft(3, "0") + "_TMP";

            for(var i = 0; i < this.ds_docItem.getCount(); i++) {
               this.ds_docItem.setColumn(i, "INQ_COND_DTLS", inqCondDtls);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 초기화할 때 데이터셋과 바인딩 하지 않은 텍스트필드 리셋,
        this.fn_clearNext = function() {
        	// MD팀 명
        	this.Div00.form.Div01.form.edt_mdTeamNm.set_value("");
        	// MD담당자 명
        	this.Div00.form.Div01.form.edt_oprtrNm.set_value("");
        	// 서비스팀 명
        	this.Div00.form.Div01.form.edt_svcTeamNm.set_value("");
        	// 영업담당 명
        	this.Div00.form.Div01.form.edt_salsChrNm.set_value("");
        	// 엽업팀 명
        	this.Div00.form.Div01.form.edt_salsTeamNm.set_value("");
        	// 사업장 명
        	this.Div00.form.Div01.form.edt_bzplcNm.set_value("");
        	// 입고플랜트 명
        	this.Div00.form.Div01.form.edt_giPlntNm.set_value("");
        	// 출고플랜트 명
        	this.Div00.form.Div01.form.edt_goPlntNm.set_value("");
        	// 협력사 명
        	this.Div00.form.Div01.form.edt_cprtcpNm.set_value("");
        	// 계정 명
        	this.Div00.form.Div01.form.edt_acctNm.set_value("");
        	// 비용이체부서 명
        	this.Div00.form.Div01.form.edt_costTransfDeptNm.set_value("");

        	// 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
            this.Div00.form.Div01.form.cmb_custTp.set_index(0);
            //this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(0);	// 전체
        	this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(1);	// 1일
            this.Div00.form.Div01.form.cmd_inqPrd.set_index(0);
            this.Div00.form.Div01.form.cmb_dlvForm.set_index(0);
            this.Div00.form.Div01.form.cmb_catKiller.set_index(0);
            this.Div00.form.Div01.form.cmb_ordBlock.set_index(0);
            this.Div00.form.Div01.form.rdo_nrmlRtnGdsSpr.set_index(0);
            this.Div00.form.Div01.form.rdo_stlMean.set_index(0);
            this.Div00.form.Div01.form.rdo_adjStats.set_index(0);
            // 추가적인 작업
            this.Div00.form.Div01.form.rdo_ordErrorTgt.set_index(0);
            this.Div00.form.Div01.form.rdo_closing.set_index(0);
            this.Div00.form.Div01.form.rdo_qckDlvYn.set_index(0);
            this.Div00.form.Div01.form.cmb_dlvCmpl.set_index(0);
        };

        // 검색조건 검사(하나의 검색조건이라도 존재하면 통과)
        this.fn_checkSearchCondition = function() {

        	if (this.gfn_isNull(this.Div00.form.Div01.form.edt_oprUnit.value) && 			// 1. 운영단위
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_odrNo.value) && 				// 2. 주문번호
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_odrStats.value) && 			// 3. 주문상태
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_mdTeam.value) && 			// 4. MD팀
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_oprtrId.value) && 			// 5. MD담당자
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_prdId.value) &&				// 6. 상품ID
        		this.Div00.form.Div01.form.rdo_ordErrorTgt.index <= 0 && 					// 7. 발주오류대상
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_svcTeam.value) && 			// 8. 서비스팀
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_salsChr.value) && 			// 9. 영업담당
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_salsTeam.value) && 			// 10. 영업팀
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_deptId.value) && 			// 11. 부서ID
        		this.Div00.form.Div01.form.cmb_dlvForm.index <= 0 && 						// 12. 배송형태
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_gdoc.value) && 				// 13. 거래명세서
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_bzplc.value) && 				// 14. 사업장
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_odrPsn.value) && 			// 15. 주문자
        		this.Div00.form.Div01.form.cmb_dlvCmpl.index <= 0 && 						// 16. 배송완료여부
        		this.Div00.form.Div01.form.rdo_nrmlRtnGdsSpr.index <= 0 && 					// 17. 정상/반품 구분
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_giPlnt.value) && 			// 18. 입고플랜트
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_goPlnt.value) && 			// 19. 출고플랜트
        		this.Div00.form.Div01.form.rdo_adjStats.index <= 0 && 						// 20. 정산상태
        		this.Div00.form.Div01.form.cmb_ordBlock.index <= 0 && 						// 21. 주문Block
        		this.Div00.form.Div01.form.rdo_stlMean.index <= 0 &&						// 22. 결제수단
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_cprtcpId.value) && 			// 23. 협력사 ID
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_ordNo.value) && 				// 24. 발주번호
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_acctId.value) && 			// 25. 계정ID
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_costTransfDept.value) && 	// 26. 비용이체부서
        		this.Div00.form.Div01.form.rdo_closing.index <= 0 && 						// 27. Closing
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_custPoNo.value) && 			// 28. 고객사PO번호
        		this.Div00.form.Div01.form.rdo_qckDlvYn.index <= 0 && 						// 29. 빠른배송여부
        		this.Div00.form.Div01.form.cmb_custTp.index <= 0 && 						// 30. 고객유형
        		this.Div00.form.Div01.form.cmb_catKiller.index <= 0)	return false;		// 31. Cat.Killer

        	return true;
        };

        // 조회기간 유효성 검사
        this.fn_isValidInq = function() {
        	// 전체인경우 통과
        	if (this.Div00.form.Div01.form.cmd_inqPrdSelect.index == 0) {
        		return true;
        	}

        	var inqStart = this.Div00.form.Div01.form.cal_inqStart.value;
        	var inqEnd = this.Div00.form.Div01.form.cal_inqEnd.value;

        	if (inqStart > inqEnd) {
        		return false;
        	}

        	return true;
        };

        // 대용량다운로드용 조회기간 유효성 검사
        this.fn_isValidInqForDownloadExcel = function() {
        	// 전체인경우 통과안됨
        	if (this.Div00.form.Div01.form.cmd_inqPrdSelect.index == 0) {
        		return false;
        	}

        	var inqStart = this.Div00.form.Div01.form.cal_inqStart.value;
        	var inqEnd = this.Div00.form.Div01.form.cal_inqEnd.value;

        	if (this.gfn_isNull(inqStart) || this.gfn_isNull(inqEnd))	return false;

        	if (inqStart > inqEnd)	return false;

        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 운영단위 멀티팝업 - oprUnitPopup
        this.Div00_Div01_btn_oprUnitMultiPopup_onclick = function(obj,e)
        {
            var objParam = {coCd:this.fv_coCd,bzplcId:this.Div00.form.Div01.form.edt_bzplc.value};
            this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };

        // 운영단위 멀티 INPUT - SSP_BO_OA_01;OPR_UNIT_ID
        this.Div00_Div01_btn_oprUnitInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value,
            "fn_popupCallback",120,300);
        };

        // 주문번호 멀티팝업 - odrNoPopup
        this.Div00_Div01_btn_odrNoMultiPopup_onclick = function(obj,e)
        {
            var objParam = {};
            this.gfn_openPopup("odrNoPopup", "OD::SSP_BO_OA_28.xfdl", objParam);
        };

        // 주문번호멀티 INPUT - SSP_BO_OA_01;ODR_NO
        this.Div00_Div01_btn_odrNoInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value,
            "fn_popupCallback",130,300);
        };

        // 주문상태 멀티팝업 - odrStatsPopup
        this.Div00_Div01_btn_odrStatsMultiPopup_onclick = function(obj,e)
        {
            //에러남
            var objParam = {comClsfCd:"ODR_STATS_CD",langCd:"KO"};
            //this.gfn_openPopup("odrStatsCdPopup", "CO_POP::SSP_BO_PP_42.xfdl", objParam);
            this.gfn_openPopup("odrStatsCdPopup", "OD::SSP_BO_OA_COM_POP.xfdl", objParam);

        };
        // 주문상태 멀티 INPUT - SSP_BO_OA_01;ODR_STATS
        this.Div00_Div01_btn_odrStatsInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"ODR_STATS",this.Div00.form.Div01.form.edt_odrStats.value,
            "fn_popupCallback",120,300);
        };

        // 상품ID 멀티팝업 - prdIdPopup
        this.Div00_Div01_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
            var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("prdIdPopup", "PR_POP::SSP_BO_PP_16.xfdl", objParam);
        };

        // 상품ID 멀티 INPUT - SSP_BO_OA_01;PRD_ID
        this.Div00_Div01_btn_prdIdInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"PRD_ID",this.Div00.form.Div01.form.edt_prdId.value,
            "fn_popupCallback",120,300);
        };

        // 서비스팀 팝업 - serviceTeamPopup
        this.Div00_Div01_btn_svcTeamPopup_onclick = function(obj,e)
        {
            var objParam = {searchType:"2", coCd:this.fv_coCd};
            this.gfn_openPopup("serviceTeamPopup", "CC::SSP_BO_PP_26.xfdl", objParam);
        };

        // 영업담당 팝업 - salsChrPopup
        this.Div00_Div01_btn_salsChrPopup_onclick = function(obj,e)
        {
            var objParam = {searchType:"6", coCd:this.fv_coCd};
            this.gfn_openPopup("salsChrPopup", "CC::SSP_BO_PP_26.xfdl", objParam);
        };

        // 영업팀 팝업 - salsTeamPopup
        this.Div00_Div01_btn_salsTeamPopup_onclick = function(obj,e)
        {
            var objParam = {searchType:"1", coCd:this.fv_coCd};
            this.gfn_openPopup("salsTeamPopup", "CC::SSP_BO_PP_26.xfdl", objParam);
        };

        // 부서ID 멀티팝업 - deptIdPopup
        this.Div00_Div01_btn_deptIdMultiPopup_onclick = function(obj,e)
        {
            var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("deptIdPopup", "CC::SSP_BO_PP_37.xfdl", objParam);
        };

        // 부서ID 멀티 INPUT - SSP_BO_OA_01;DEPT_ID
        this.Div00_Div01_btn_deptIdInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"DEPT_ID",this.Div00.form.Div01.form.edt_deptId.value,
            "fn_popupCallback",120,300);
        };

        // 거래명세서 멀티 INPUT - SSP_BO_OA_01;GDOC_NO
        this.Div00_Div01_btn_gdocInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"GDOC_NO",this.Div00.form.Div01.form.edt_gdoc.value,
            "fn_popupCallback",120,300);
        };

        // 사업장 팝업 - bzplcPopup
        this.Div00_Div01_btn_bzplcPopup_onclick = function(obj,e)
        {
            var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("bzplcPopup", "CO_POP::SSP_BO_PP_22.xfdl", objParam);
        };

        // 주문자 멀티팝업 - odrpsnIdPopup
        this.Div00_Div01_btn_odrPsnMultiPopup_onclick = function(obj,e)
        {
            var objParam = {};
            this.gfn_openPopup("odrpsnIdPopup", "OD::SSP_BO_OA_33.xfdl", objParam);
        };

        // 주문자 멀티 INPUT - SSP_BO_OA_01;ODRPSN_ID
        this.Div00_Div01_btn_odrPsnInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"ODRPSN_ID",this.Div00.form.Div01.form.edt_odrPsn.value,
            "fn_popupCallback",120,300);

        };

        // 입고플랜트 팝업 - giPlntPopup
        this.Div00_Div01_btn_giPlntPopup_onclick = function(obj,e)
        {
            var giPlnt = this.Div00.form.Div01.form.edt_giPlnt.text;
            var varType = "odrMngList";
            var varTitle = "입고플랜트 조회";
            var objParam = {type:varType, formID:this.name, plnt:giPlnt, title:varTitle}
            this.gfn_openPopup("giPlntPopup", "OD::SSP_BO_OA_34.xfdl", objParam);
        };

        // 출고플랜트 팝업 - goPlntPopup
        this.Div00_Div01_btn_goPlntPopup_onclick = function(obj,e)
        {
            var goPlnt = this.Div00.form.Div01.form.edt_goPlnt.text;
            var varType = "odrMngList";
            var varTitle = "출고플랜트 조회";
            var objParam = {type:varType, formID:this.name, plnt:goPlnt, title:varTitle}
            this.gfn_openPopup("goPlntPopup", "OD::SSP_BO_OA_34.xfdl", objParam);
        };
        // 협력사ID 팝업 - cprtcpIdPopup
        this.Div00_Div01_btn_cprtcpIdPopup_onclick = function(obj,e)
        {
            var objParam = {};
            this.gfn_openPopup("cprtcpIdPopup", "PP_POP::SSP_BO_PP_41.xfdl", objParam);
        };

        // 발주번호 멀티팝업 - ordNoPopup
        this.Div00_Div01_btn_ordNoMultiPopup_onclick = function(obj,e)
        {
            var ordNo = this.Div00.form.Div01.form.edt_ordNo.text;
            var objParam = {type:"odrMngList", formID:this.name, ordNo:ordNo, title:"발주번호 조회"}
            this.gfn_openPopup("ordNoPopup", "OD::SSP_BO_OA_37.xfdl", objParam);
        };

        // 발주번호 멀티 INPUT - SSP_BO_OA_01;ORD_NO
        this.Div00_Div01_btn_ordNoInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"ORD_NO",this.Div00.form.Div01.form.edt_ordNo.value,
            "fn_popupCallback",120,300);
        };

        // 계정ID 팝업 - acctIdPopup
        this.Div00_Div01_btn_acctIdPopup_onclick = function(obj,e)
        {
            var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("acctIdPopup", "CC::SSP_BO_MA_75.xfdl", objParam);
        };

        // 비용이체부서 팝업 - costTrnsfDeptIdPopup
        this.Div00_Div01_btn_costTransfDeptPopup_onclick = function(obj,e)
        {
        //변경해야함
            var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("costTrnsfDeptIdPopup", "CC::SSP_BO_PP_39.xfdl", objParam);
        };

        // 고객PO번호 멀티 INPUT - SSP_BO_OA_01;CCO_PO_NO
        this.Div00_Div01_btn_custPoNoInput_onclick = function(obj,e)
        {
            this.fn_showTareaInput(this.name,"CCO_PO_NO",this.Div00.form.Div01.form.edt_custPoNo.value,
            "fn_popupCallback",120,300);
        };

        // MD 담당자 팝업
        this.btn_psnPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd};
            var options = {title:"MD 담당자 조회"};
            //this.gfn_openPopup("mdOprtrPopup", "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        	this.gfn_openPopup("mdOprtrPopup", "OD::SSP_BO_OA_45.xfdl", params,  "fn_popupCallback", options);
        };

        // MD 팀 팝업
        this.btn_mdTeamPopup_onclick = function(obj,e)
        {
        	var objParam = {searchType:"3", coCd:this.fv_coCd};
            this.gfn_openPopup("mdTeamPopup", "CC::SSP_BO_PP_26.xfdl", objParam);
        };

        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_isValidInq() == false) {
        		alert(this.fn_getMessage("ERRS000240"));
        		return;
        	}

            this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value);
            this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value);
            this.fn_setMSearch(this.name,"ODR_STATS_CD",this.Div00.form.Div01.form.edt_odrStats.value);
            this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.Div01.form.edt_prdId.value);
            this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.Div01.form.edt_deptId.value);
            this.fn_setMSearch(this.name,"GDOC_NO",this.Div00.form.Div01.form.edt_gdoc.value);
            this.fn_setMSearch(this.name,"ODRPSN_ID",this.Div00.form.Div01.form.edt_odrPsn.value);
            this.fn_setMSearch(this.name,"ORD_NO",this.Div00.form.Div01.form.edt_ordNo.value);
            this.fn_setMSearch(this.name,"CUST_PURG_ODR_NO",this.Div00.form.Div01.form.edt_custPoNo.value);

        	if (!this.fn_checkSearchCondition()) {
        		alert(this.fn_getMessage("ERRS000380"));
                return;
        	}

        	// 조회기간 데이터 설정(주문생성일, S/O생성일, 배송완료일, 발주완료일)
        	// 기간 콤보에서 "전체"를 설정하면 검색 대상에서 제외
        	if (this.Div00.form.Div01.form.cmd_inqPrdSelect.index == 0) {
        		this.ds_search.setColumn(0, "INQ_PRD", "00");
        	}
        	else {
        		this.ds_search.setColumn(0, "INQ_PRD", this.Div00.form.Div01.form.cmd_inqPrd.value);
        	}

            this.nOdrInqTgt = 0;

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_search(true);
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        // 조회기간 - 기간선택 콤보
        this.Div00_Div01_cmd_inqPrdSelect_onitemchanged = function(obj,e)
        {
            var objCurr = new nexacro.Date();
            var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
            var sFrom = this.fn_CalDate(this.Div00.form.Div01.form.cmd_inqPrdSelect.value,objCurr);

        	// "전체"를 선택한 경우
        	if (e.postindex == 0) {
        		this.Div00.form.Div01.form.cal_inqStart.set_value("");
        		this.Div00.form.Div01.form.cal_inqEnd.set_value("");
        	}
        	// "1일"을 선택한 경우 동일한 일자 설정
        	else if (e.postindex == 1) {
        		this.Div00.form.Div01.form.cal_inqStart.set_value(sToday);
        		this.Div00.form.Div01.form.cal_inqEnd.set_value(sToday);
        	}
        	else {
        		this.Div00.form.Div01.form.cal_inqStart.set_value(sFrom);
        		this.Div00.form.Div01.form.cal_inqEnd.set_value(sToday);
        	}
        };

        this.Div01_btn_active_onclick = function(obj,e)
        {
            this.Div00.form.Div01.form.set_enable(true);
            this.cmb_viewCount.set_enable(true);
        };
        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
            this.Div00.form.Div01.form.set_enable(true);
            this.cmb_viewCount.set_enable(true);
            this.ds_search.clearData();
            this.ds_search.addRow();
            this.fn_setCommonCode();
            this.Div00.form.Div01.form.cal_inqStart.set_value(new nexacro.Date());
            this.Div00.form.Div01.form.cal_inqEnd.set_value(new nexacro.Date());
            if(this.ds_select.getRowCount() != 0 )
                this.fn_deleteSelectedData("fn_callBack");

        	// 그리드 데이터 초기화
        	this.ds_list01.clearData();
        	this.fn_clearNext();
        };

        this.Div01_btn_extend_onclick = function(obj,e)
        {
            if(this.bExtend == false)   this.setExtend(true);
            else                        this.setExtend(false);
        };

        this.setExtend = function(bVal)
        {
            if(bVal)
            {
                this.Div01.form.btn_extend.set_text("기본조회 ∧");
                this.bExtend = true;
                this.fn_changeSearchArea(false);
            }
            else
            {
                this.Div01.form.btn_extend.set_text("상세조회 ∨");
                this.bExtend = false;
                this.fn_changeSearchArea(true);
            }
        }

        // 엑셀다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
            if(this.ds_list01.getRowCount() == 0){
        		this.alert(this.fn_getMessage("ERRP000205")); // '다운로드 가능한 데이터가 없습니다.'
        	}else{
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}
        };

        this.fn_excelDownload = function(objId, ret) {
            var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:this.grid_main, fileName:"주문목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_OA_01_02"});
        };

        this.Div00_Div01_edt_bzplc_onchanged = function(obj,e)
        {
            //trace(" Div00_Div01_edt_bzplc_onchanged ");
            //trace(" fromreferenceobject is " + e.fromobject.name);
            //trace(" obj is " + obj.name);
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_bzplcNm,"BZPLC");
        };

        this.Div00_Div01_edt_giPlnt_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_giPlntNm,"PLNT");
        };

        this.Div00_Div01_edt_svcTeam_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_svcTeamNm,"OPRTR_ORG-Y");
        };

        this.Div00_Div01_edt_salsChr_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_salsChrNm,"SALS_CHR");
        };

        this.Div00_Div01_edt_salsTeam_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_salsTeamNm,"SALS_TEAM");
        };

        this.Div00_Div01_edt_goPlnt_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_goPlntNm,"PLNT");
        };

        this.Div00_Div01_edt_cprtcpId_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_cprtcpNm,"CPRTCP");
        };

        this.Div00_Div01_edt_acctId_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_acctNm,"ACCT");
        };

        this.Div00_Div01_edt_costTransfDept_onchanged = function(obj,e)
        {
            this.fn_getCodeName(obj,this.Div00.form.Div01.form.edt_costTransfDeptNm,"DEPT");
        };
        // MD 팀
        this.edt_mdTeam_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj, this.Div00.form.Div01.form.edt_mdTeamNm, "MD_TEAM");
        };
        // MD 담당자
        this.edt_oprtrId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj, this.Div00.form.Div01.form.edt_oprtrNm, "MD_OPRTR");
        };
        // 주문전체 거래명세서 버튼
        this.btn_allOrderGdoc_onclick = function(obj,e)
        {
            if(this.ds_list01.rowcount < 0) {
        		// 임시
        		alert("조회 데이터가 없습니다.");
        		return;
        	}
        	this.fn_processGdocNo003();
            this.nOdrInqTgt = 3;
        };

        // 출고거래명세서 버튼
        this.btn_goGdoc_onclick = function(obj,e)
        {
        	var checkedCount = this.ds_list01.getCaseCount("CHK=='1'");
        	if (checkedCount <= 0) {
        		alert(this.fn_getMessage("ERRS000313"));
        		return;
        	}
        	else if (checkedCount > 10) {
        		alert(this.fn_getMessage("ERRS000387", checkedCount));
        		return;
        	}

        	var checkedGdocNoCount = this.fn_countOfGdocNo();
        	if (checkedGdocNoCount == 0) {
        		alert(this.fn_getMessage("ERRS000333"));
        		return;
        	}

        	if (!this.fn_isUnionOprUnitId()) {
        		alert(this.fn_getMessage("ERRS000334"));
        		return;
        	}

            //this.call_odrGdoc("GDOC_NO",1);
        	this.fn_processGdocNo001();
        };

        // 주문거래명세서 버튼
        this.btn_odrGdoc_onclick = function(obj,e)
        {
        	var checkedCount = this.ds_list01.getCaseCount("CHK=='1'");
        	if (checkedCount <= 0) {
        		alert(this.fn_getMessage("ERRS000313"));
        		return;
        	}

        	if (!this.fn_isUnionOprUnitId()) {
        		alert(this.fn_getMessage("ERRS000334"));
        		return;
        	}

            //this.call_odrGdoc("JNT_ODR_ITM_NO",2);
        	this.fn_processGdocNo002();
        };


        // 엑셀 대용량 다운로드. 조회 완료 후 버튼이 활성화되어야 된다.
        this.btn_excelBigDown_onclick = function(obj,e)
        {
        	if (this.fn_isValidInqForDownloadExcel() == false) {
        		alert(this.fn_getMessage("ERRS000479"));
        		return;
        	}else{
        		var rtn = this.confirm(this.fn_getMessage("ERRC000271"));	// 대용량 엑셀다운로드 하시겠습니까?
        		if (rtn) {	// "확인"
        			this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        		}
        	}
        };

        this.fn_excelDownloadPwdCallback = function(objId, ret){

        	var answr = ret.split("||||");

        	if(!answr) return; //취소(undefined)

        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value);
        	this.fn_setMSearch(this.name,"ODR_STATS_CD",this.Div00.form.Div01.form.edt_odrStats.value);
        	this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.Div01.form.edt_prdId.value);
        	this.fn_setMSearch(this.name,"DEPT_ID",this.Div00.form.Div01.form.edt_deptId.value);
        	this.fn_setMSearch(this.name,"GDOC_NO",this.Div00.form.Div01.form.edt_gdoc.value);
        	this.fn_setMSearch(this.name,"ODRPSN_ID",this.Div00.form.Div01.form.edt_odrPsn.value);
        	this.fn_setMSearch(this.name,"ORD_NO",this.Div00.form.Div01.form.edt_ordNo.value);
        	this.fn_setMSearch(this.name,"CUST_PURG_ODR_NO",this.Div00.form.Div01.form.edt_custPoNo.value);

        	this.ds_search.setColumn(0, "INQ_PRD", this.Div00.form.Div01.form.cmd_inqPrd.value);
        	this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        	this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        	this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");
        	this.ds_search.setColumn(0, "PGM_ID", "SSP_BO_OA_01_02");

        	//trace("ds_search: " + this.ds_search.saveXML());

        	this.nOdrInqTgt = 4;

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_excelBigDownload();
        	}else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };


        // 고객유형/오더유형 콤보
        this.cmb_custTpAndCrtTp_onitemchanged = function(obj,e)
        {
        	var codeColumn = this.Div00.form.Div01.form.cmb_custTpAndCrtTp.value;
        	//alert("codeColumn : " + codeColumn);
        	// 고객유형 : CUST_SPR_CD, 오더유형 : ODR_CRT_TP_CD
        	if (codeColumn == "CUST_SPR_CD") {
        		this.Div00.form.Div01.form.cmb_custTp.set_innerdataset(this.ds_comCDCustTP);
        	}
        	else if (codeColumn == "ODR_CRT_TP_CD") {
        		this.Div00.form.Div01.form.cmb_custTp.set_innerdataset(this.ds_comOdrCrtTpCd);
        	}
        	this.Div00.form.Div01.form.cmb_custTp.set_index(0);
        };
        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grid_main", this.grid_main.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grid_main");
        	this.grid_main.set_formats(this.grid_main.uOrgFormat);
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        this.grid_main_oncellclick = function(obj,e)
        {
            if (e.col != 6) {
                return;
            }
            //obj.setCellProperty("body",e.currentcell,"color","expr:this.row="+e.row+"? red:blue");
            this.fn_showOderDetail(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_01_onload,this);
            this.addEventHandler("onclose",this.SSP_BO_OA_01_onclose,this);
            this.addEventHandler("onactivate",this.SSP_BO_OA_01_onactivate,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_01_onkeyup,this);
            this.Div00.form.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_oprUnitMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitInput.addEventHandler("onclick",this.Div00_Div01_btn_oprUnitInput_onclick,this);
            this.Div00.form.Div01.form.edt_svcTeam.addEventHandler("onchanged",this.Div00_Div01_edt_svcTeam_onchanged,this);
            this.Div00.form.Div01.form.edt_bzplc.addEventHandler("onchanged",this.Div00_Div01_edt_bzplc_onchanged,this);
            this.Div00.form.Div01.form.edt_cprtcpId.addEventHandler("onchanged",this.Div00_Div01_edt_cprtcpId_onchanged,this);
            this.Div00.form.Div01.form.edt_costTransfDept.addEventHandler("onchanged",this.Div00_Div01_edt_costTransfDept_onchanged,this);
            this.Div00.form.Div01.form.btn_svcTeamPopup.addEventHandler("onclick",this.Div00_Div01_btn_svcTeamPopup_onclick,this);
            this.Div00.form.Div01.form.btn_bzplcPopup.addEventHandler("onclick",this.Div00_Div01_btn_bzplcPopup_onclick,this);
            this.Div00.form.Div01.form.btn_cprtcpIdPopup.addEventHandler("onclick",this.Div00_Div01_btn_cprtcpIdPopup_onclick,this);
            this.Div00.form.Div01.form.btn_costTransfDeptPopup.addEventHandler("onclick",this.Div00_Div01_btn_costTransfDeptPopup_onclick,this);
            this.Div00.form.Div01.form.btn_deptIdMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_deptIdMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_deptIdInput.addEventHandler("onclick",this.Div00_Div01_btn_deptIdInput_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_odrNoMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoInput.addEventHandler("onclick",this.Div00_Div01_btn_odrNoInput_onclick,this);
            this.Div00.form.Div01.form.cal_inqStart.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.cal_inqEnd.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.cmd_inqPrdSelect.addEventHandler("onitemchanged",this.Div00_Div01_cmd_inqPrdSelect_onitemchanged,this);
            this.Div00.form.Div01.form.edt_salsChr.addEventHandler("onchanged",this.Div00_Div01_edt_salsChr_onchanged,this);
            this.Div00.form.Div01.form.edt_giPlnt.addEventHandler("onchanged",this.Div00_Div01_edt_giPlnt_onchanged,this);
            this.Div00.form.Div01.form.btn_salsChrPopup.addEventHandler("onclick",this.Div00_Div01_btn_salsChrPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrPsnMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_odrPsnMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrPsnInput.addEventHandler("onclick",this.Div00_Div01_btn_odrPsnInput_onclick,this);
            this.Div00.form.Div01.form.btn_giPlntPopup.addEventHandler("onclick",this.Div00_Div01_btn_giPlntPopup_onclick,this);
            this.Div00.form.Div01.form.btn_ordNoMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_ordNoMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_ordNoInput.addEventHandler("onclick",this.Div00_Div01_btn_ordNoInput_onclick,this);
            this.Div00.form.Div01.form.btn_odrStatsMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_odrStatsMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrStatsInput.addEventHandler("onclick",this.Div00_Div01_btn_odrStatsInput_onclick,this);
            this.Div00.form.Div01.form.edt_salsTeam.addEventHandler("onchanged",this.Div00_Div01_edt_salsTeam_onchanged,this);
            this.Div00.form.Div01.form.edt_goPlnt.addEventHandler("onchanged",this.Div00_Div01_edt_goPlnt_onchanged,this);
            this.Div00.form.Div01.form.edt_acctId.addEventHandler("onchanged",this.Div00_Div01_edt_acctId_onchanged,this);
            this.Div00.form.Div01.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_prdIdMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_prdIdInput.addEventHandler("onclick",this.Div00_Div01_btn_prdIdInput_onclick,this);
            this.Div00.form.Div01.form.btn_salsTeamPopup.addEventHandler("onclick",this.Div00_Div01_btn_salsTeamPopup_onclick,this);
            this.Div00.form.Div01.form.btn_gdocInput.addEventHandler("onclick",this.Div00_Div01_btn_gdocInput_onclick,this);
            this.Div00.form.Div01.form.btn_goPlntPopup.addEventHandler("onclick",this.Div00_Div01_btn_goPlntPopup_onclick,this);
            this.Div00.form.Div01.form.btn_acctIdPopup.addEventHandler("onclick",this.Div00_Div01_btn_acctIdPopup_onclick,this);
            this.Div00.form.Div01.form.btn_custPoNoInput.addEventHandler("onclick",this.Div00_Div01_btn_custPoNoInput_onclick,this);
            this.Div00.form.Div01.form.Static06_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_psnPopup.addEventHandler("onclick",this.btn_psnPopup_onclick,this);
            this.Div00.form.Div01.form.edt_oprtrId.addEventHandler("onchanged",this.edt_oprtrId_onchanged,this);
            this.Div00.form.Div01.form.edt_mdTeam.addEventHandler("onchanged",this.edt_mdTeam_onchanged,this);
            this.Div00.form.Div01.form.btn_mdTeamPopup.addEventHandler("onclick",this.btn_mdTeamPopup_onclick,this);
            this.Div00.form.Div01.form.cmb_custTpAndCrtTp.addEventHandler("onitemchanged",this.cmb_custTpAndCrtTp_onitemchanged,this);
            this.Div01.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div01.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div01.form.btn_active.addEventHandler("onclick",this.Div01_btn_active_onclick,this);
            this.Div01.form.btn_extend.addEventHandler("onclick",this.Div01_btn_extend_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.btn_odrGdoc.addEventHandler("onclick",this.btn_odrGdoc_onclick,this);
            this.grid_main.addEventHandler("oncellclick",this.grid_main_oncellclick,this);
            this.btn_allOrderGdoc.addEventHandler("onclick",this.btn_allOrderGdoc_onclick,this);
            this.btn_goGdoc.addEventHandler("onclick",this.btn_goGdoc_onclick,this);
            this.btn_excelBigDown.addEventHandler("onclick",this.btn_excelBigDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
