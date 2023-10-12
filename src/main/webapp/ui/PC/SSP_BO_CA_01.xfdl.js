(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_01");
            this.set_titletext("사업장별 가격조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Aa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Ba</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Ca</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chrpsnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">담당자선택</Col><Col id=\"COM_DTL_CD\"/></Row><Row><Col id=\"COM_DTL_CD\">10</Col><Col id=\"COM_DTL_CD_NM\">영업담당자</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">구매담당자</Col><Col id=\"COM_DTL_CD\">20</Col></Row><Row><Col id=\"COM_DTL_CD\">30</Col><Col id=\"COM_DTL_CD_NM\">MD담당자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_ABNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"pageId\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"eREPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/><Col id=\"CHRPSN_CD\"/><Col id=\"DATE_CD\">10</Col><Col id=\"PROC_STATS_CD\">10</Col><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"DISP_ABNO\"/><Col id=\"INQ_PERD_SPR\">2</Col><Col id=\"pageId\">SSP_BO_CA_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">가격정보갱신일</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">SSP가격등록일</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prcAplySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_INFO_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRC_APLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXHBN_CNT\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TRIM_PRD_ID\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"TRIM_CPRTCP_ID\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PURG_SPL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PCPRC_INC_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_procStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reprPrdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispAbno", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\"/><Col id=\"COM_DTL_CD_NM\">미선택</Col></Row><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">진열이상전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">매입가인상</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">공급불가상태</Col><Col id=\"COM_DTL_CD\">20</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">판매유효기간만료</Col><Col id=\"COM_DTL_CD\">30</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">안전재고이하</Col><Col id=\"COM_DTL_CD\">40</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upd_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_ABNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"pageId\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"eREPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/><Col id=\"CHRPSN_CD\"/><Col id=\"DATE_CD\">10</Col><Col id=\"PROC_STATS_CD\">10</Col><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"DISP_ABNO\"/><Col id=\"INQ_PERD_SPR\">2</Col><Col id=\"pageId\">SSP_BO_CA_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\"/></Row><Row><Col id=\"COM_DTL_CD_NM\">공용</Col><Col id=\"COM_DTL_CD\">P</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">전용</Col><Col id=\"COM_DTL_CD\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","20","217",null,null,"20","6",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","533",null,"30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","0","10","200","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"0","100","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"0","100","28","btn_layoutInit:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"0","104","28","btn_layoutSave:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div01_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div01_form_cmb_viewCount_innerdataset", obj);
            Div01_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_cmb_viewCount_innerdataset);
            obj.set_text("1000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button62_00",null,"0","110","28","cmb_viewCount:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("대용량다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","110","28","Button62_00:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,"1296",null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","20","51",null,"32","20",null,"1296",null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","82",null,"32","20",null,"1296",null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","20","113",null,"32","20",null,"1296",null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사업장ID  <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","892","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("대표상품그룹ID");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("SSP카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","892","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("예외가격관리대상");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","892","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","20","113","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","160","55","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_readonly("false");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","edt_prdClcd:5","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","edt_prdClNm:5","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","160","117","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","cal_srchFrDt:4","116","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","cal_srchFrDt:17","117","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_date","cal_srchToDt:4","117","80","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrid","1032","86","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","edt_oprtrid:4","86","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprtrPopup","edt_oprtrNm:4","86","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("DateSelector","22","117","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_dateCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가격정보갱신일");
            obj.set_value("10");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_prcAplySprNm","160","86","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_prcAplySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("대표상품구분");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00","471","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","471","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","471","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_reprPrdSprNm","1032","55","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_reprPrdSprCd");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo","897","86","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_chrpsnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value(" ");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_procStats","610","86","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_procStatsCd");
            obj.set_text("가격등록요청");
            obj.set_value("10");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","160","24","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","edt_bzplcId:4","24","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdMultiPopup","edt_bzplcNm:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdMultiInput","btn_bzplcIdMultiPopup:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","610","24","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","714","24","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","828","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","856","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_pubOnlySpr","610","55","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_grpIdInput","1176","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_grpId","1032","24","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","255",null,"465","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"300\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"110\"/><Column size=\"106\"/><Column size=\"143\"/><Column size=\"189\"/><Column size=\"175\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"57\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"58\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"57\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"58\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"76\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"대표상품그룹ID\" expandsize=\"16\"/><Cell col=\"4\" text=\"SSP카테고리ID\"/><Cell col=\"5\" text=\"SSP카테고리\"/><Cell col=\"6\" text=\"공용전용구분\"/><Cell col=\"7\" text=\"선정방식\"/><Cell col=\"8\" text=\"대표상품구분\"/><Cell col=\"9\" text=\"예외가격관리대상\"/><Cell col=\"10\" text=\"S-MRO상품상태\"/><Cell col=\"11\" text=\"SSP상품상태\"/><Cell col=\"12\" text=\"상품명\"/><Cell col=\"13\" text=\"SSP상품명\"/><Cell col=\"14\" text=\"대표규격\"/><Cell col=\"15\" text=\"제조원ID\"/><Cell col=\"16\" text=\"제조원\"/><Cell col=\"17\" text=\"주문단위\"/><Cell col=\"18\" text=\"원산지코드\"/><Cell col=\"19\" text=\"원산지\"/><Cell col=\"20\" text=\"현재최저매입가\"/><Cell col=\"21\" text=\"매입통화\"/><Cell col=\"22\" text=\"최저매입협력사ID\"/><Cell col=\"23\" text=\"최저매입협력사\"/><Cell col=\"24\" text=\"계획매익율\"/><Cell col=\"25\" text=\"SSP기준가\"/><Cell col=\"26\" text=\"판매통화\"/><Cell col=\"27\" text=\"MD지정판매가\"/><Cell col=\"28\" text=\"ListPrice\"/><Cell col=\"29\" text=\"시장최저판매가\"/><Cell col=\"30\" text=\"내부최저판매가\"/><Cell col=\"31\" text=\"SSP기준판매가\"/><Cell col=\"32\" text=\"판매통화\"/><Cell col=\"33\" text=\"영업지정판매가\"/><Cell col=\"34\" text=\"고객노출판매가\"/><Cell col=\"35\" text=\"판매통화\"/><Cell col=\"36\" text=\"고객노출판매가 산출기준\"/><Cell col=\"37\" text=\"가격유효기간(From)\"/><Cell col=\"38\" text=\"가격유효기간(To)\"/><Cell col=\"39\" text=\"최소주문수량\"/><Cell col=\"40\" text=\"배수주문수량\"/><Cell col=\"41\" text=\"기획전대상\"/><Cell col=\"42\" text=\"재고여부\"/><Cell col=\"43\" text=\"평균배송LT\"/><Cell col=\"44\" text=\"영업담당자ID\"/><Cell col=\"45\" text=\"영업담당자\"/><Cell col=\"46\" text=\"구매담당자ID\"/><Cell col=\"47\" text=\"구매담당자\"/><Cell col=\"48\" text=\"MD담당자ID\"/><Cell col=\"49\" text=\"MD담당자\"/><Cell col=\"50\" text=\"SSP가격등록일\"/><Cell col=\"51\" text=\"가격정보갱신일\"/></Band><Band id=\"body\"><Cell text=\"bind:TRIM_PRD_ID\" displaytype=\"text\" color=\"#0000ff\" textDecoration=\"underline\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:TRIM_REPR_PRD_GRP_ID\" autosizecol=\"limitmin\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:PRD_CLCD\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:PRD_CLCD_NM\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:PUB_ONLY_SPR_NM\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:SEL_MTHD_NM\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"bind:REPR_PRD_SPR_NM\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"bind:PRC_APLY_SPR_NM\" autosizecol=\"limitmin\"/><Cell col=\"10\" text=\"bind:MRO_PRD_STATS_CD\" autosizecol=\"limitmin\"/><Cell col=\"11\" text=\"bind:PRD_STATS_CD\" autosizecol=\"limitmin\"/><Cell col=\"12\" text=\"bind:PRD_NM\" autosizecol=\"limitmin\"/><Cell col=\"13\" text=\"bind:SSP_PRD_NM\"/><Cell col=\"14\" text=\"bind:ATTR_VAL\" autosizecol=\"limitmin\"/><Cell col=\"15\" text=\"bind:MNFR_NO\" autosizecol=\"limitmin\"/><Cell col=\"16\" text=\"bind:MNFR_NM\" autosizecol=\"limitmin\"/><Cell col=\"17\" text=\"bind:SELL_UNIT_CD\" autosizecol=\"limitmin\"/><Cell col=\"18\" text=\"bind:ORGPLC_CTRY_CD\" autosizecol=\"limitmin\"/><Cell col=\"19\" text=\"bind:ORGPLC_CTRY_NM\" autosizecol=\"limitmin\"/><Cell col=\"20\" text=\"expr:PRD_PRC==&quot;0&quot;?&quot;&quot;:PRD_PRC\" autosizecol=\"limitmin\" displaytype=\"number\"/><Cell col=\"21\" text=\"expr:PRD_PRC==&quot;0&quot;?&quot;&quot;:CURR_UNIT_CD\"/><Cell col=\"22\" text=\"bind:TRIM_CPRTCP_ID\" autosizecol=\"limitmin\" displaytype=\"text\"/><Cell col=\"23\" text=\"bind:CPRTCP_NM\" autosizecol=\"limitmin\"/><Cell col=\"24\" text=\"bind:PLN_PRFRT\" displaytype=\"expr:PLN_PRFRT!=undefined?&apos;mask&apos;:&apos;&apos;\" maskeditpostfixtext=\"%\" maskeditformat=\"#,0.00\" autosizecol=\"limitmin\"/><Cell col=\"25\" text=\"expr:STPRC==&quot;0&quot;?&quot;&quot;:STPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"26\" text=\"KRW\"/><Cell col=\"27\" text=\"expr:PURG_DSGN_SALSPRC==&quot;0&quot;?&quot;&quot;:PURG_DSGN_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"28\" text=\"expr:DSTRB_STD_PRC==&quot;0&quot;?&quot;&quot;:DSTRB_STD_PRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"29\" text=\"expr:MRK_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:MRK_LWST_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"30\" text=\"expr:INTL_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:INTL_LWST_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"31\" text=\"expr:SSP_BSS_SALSPRC==&quot;0&quot;?&quot;&quot;:SSP_BSS_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"32\" text=\"KRW\"/><Cell col=\"33\" text=\"expr:SALS_DSGN_SALSPRC==&quot;0&quot;?&quot;&quot;:SALS_DSGN_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"34\" text=\"expr:EXPS_SALSPRC==&quot;0&quot;?&quot;&quot;:EXPS_SALSPRC\" displaytype=\"number\" autosizecol=\"limitmin\"/><Cell col=\"35\" text=\"KRW\"/><Cell col=\"36\" text=\"bind:SALSPRC_CAL_BSS_NM\" autosizecol=\"limitmin\"/><Cell col=\"37\" text=\"bind:BSS_SALSPRC_STR_DTM\" maskeditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:BSS_SALSPRC_STR_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" autosizecol=\"limitmin\"/><Cell col=\"38\" text=\"bind:BSS_SALSPRC_END_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:BSS_SALSPRC_END_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" autosizecol=\"limitmin\"/><Cell col=\"39\" text=\"bind:MIN_ODR_QTY\" autosizecol=\"limitmin\"/><Cell col=\"40\" text=\"bind:MULT_SELL_UNIT_QTY\" autosizecol=\"limitmin\"/><Cell col=\"41\" text=\"bind:EXHBN_CNT\" autosizecol=\"limitmin\"/><Cell col=\"42\" text=\"bind:INVN_STATS_NM\" autosizecol=\"limitmin\"/><Cell col=\"43\" text=\"bind:DLV_LT\" expr=\"DLV_LT+&quot;일&quot;\" displaytype=\"text\" autosizecol=\"limitmin\"/><Cell col=\"44\" text=\"bind:SALS_CHRPSN_ID\" autosizecol=\"limitmin\"/><Cell col=\"45\" text=\"bind:SALS_CHRPSN_NM\" autosizecol=\"limitmin\"/><Cell col=\"46\" text=\"bind:PURG_CHRPSN_ID\" autosizecol=\"limitmin\"/><Cell col=\"47\" text=\"bind:PURG_CHRPSN_NM\" autosizecol=\"limitmin\"/><Cell col=\"48\" text=\"bind:OPRTR_ID\" autosizecol=\"limitmin\"/><Cell col=\"49\" text=\"bind:OPRTR_NM\" autosizecol=\"limitmin\"/><Cell col=\"50\" text=\"bind:PRC_REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:PRC_REG_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" autosizecol=\"limitmin\"/><Cell col=\"51\" text=\"bind:PRC_UPD_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:PRC_UPD_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_serach",null,"175","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchInit",null,"175","60","28","84",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.DateSelector","value","ds_search","DATE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.cal_srchFrDt","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.cal_srchToDt","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.cbo","value","ds_search","CHRPSN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_oprtrid","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_prdClNm","value","ds_search","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_oprtrNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_bzplcId","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_prdId","value","ds_search","ePRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cbo_reprPrdSprNm","value","ds_search","REPR_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cbo_procStats","value","ds_search","PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.cbo_prcAplySprNm","value","ds_search","PRC_APLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.cbo_pubOnlySpr","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.cbo_date","value","ds_search","INQ_PERD_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_grpId","value","ds_search","eREPR_PRD_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_01.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_01.xfdl","PC::pcUtils.xjs");
        this.registerScript("SSP_BO_CA_01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        this.searchPrdClsfNm = "";

        this.pressEnter = false;
        this.pressShift = false;
        this.pressEsc = false;
        this.fv_oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//검색 영역 최소size 적용
        	//this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회

        	this.fn_commonCodeSearch = function(){
        		this.ds_search.setColumn(0, "codeList", "PRC_APLY_SPR_CD,REPR_PRD_SPR_CD,DISP_STATS_CD,INQ_PERD_SPR_CD");
        		this.ds_search.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_prcAplySprCd=ds_output1 ds_reprPrdSprCd=ds_output2 ds_dispStatsCd=ds_output3 ds_inqPerdSpr=ds_output4";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function(page)	{
        		var sSvcId = "List";
        		var sUrl = "/pc/pc-prc-mng/selectBzplcList.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output";
        		var arg = "";
        		var callback = "fn_received";

        		// 조회버튼 클릭시 페이징 초기화 시킨다.
        		if( page == 0 ) {
        			this.Div01.form.div_paging
        			this.Div01.form.div_paging.uPage=1;
        			this.Div01.form.div_paging.uPageNum=0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.Div01.form.cmb_viewCount.value);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	this.fn_updProcess = function(page) //구매정보갱신
        	{
        		var sSvcId = "updatePurgInfoState";
        		var sUrl = "/pc/prd-prc/update-purg-info-state.do";
        		var inDs = "ds_updateList=ds_updateList";
        		var outDs = "ds_upd_return=ds_output1";
        		var arg;
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	this.fn_doProcess = function(page) //기준판매가처리
        	{
        		var sSvcId = "insertPcPubPrdProcStb";
        		var sUrl = "/pc/prd-prc/update-bss-salsprc-calc.do";
        		var inDs = "ds_updateList=ds_updateList";
        		var outDs = "ds_del_return=ds_output1";
        		var arg;
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	//폼 엔터처리용
        	this.fn_popupSearch = function (svcId, url){
        		var sSvcId = svcId;
        		var sUrl = url;
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        	this.fn_largeFileDown = function (){
        		var sSvcId = "largeFileDown";
        		var sUrl = "/pc/pc-xlsx-down/excel-prd-prc-bzplc.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        		if(svcID == "commonCodeSearch"){

        			this.ds_dispStatsCd.deleteRow(3);

        			this.ds_reprPrdSprCd.insertRow(0); //대표
        			this.ds_reprPrdSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			var nodataRow = this.ds_reprPrdSprCd.getRowCount()
        			this.ds_reprPrdSprCd.insertRow(nodataRow); //대표
        			this.ds_reprPrdSprCd.setColumn(nodataRow, "COM_DTL_CD", "NONE");
        			this.ds_reprPrdSprCd.setColumn(nodataRow, "COM_DTL_CD_NM", "미사용");

        			this.ds_prcAplySprCd.insertRow(0); // 예외
        			this.ds_prcAplySprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.ds_prcAplySprCd.insertRow(1);
        			this.ds_prcAplySprCd.setColumn(1,"COM_DTL_CD_NM","해당없음");
        			this.ds_prcAplySprCd.setColumn(1,"COM_DTL_CD","0");

        			this.ds_inqPerdSpr.insertRow(0); // 날짜
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");

        			this.ds_dispStatsCd.insertRow(0); //SSP진열상태
        			this.ds_dispStatsCd.setColumn(0,"COM_DTL_CD_NM","전체");

        // 			this.ds_dispAbno.insertRow(0); //진열이상여부
        // 			this.ds_dispAbno.setColumn(0,"COM_DTL_CD_NM","미선택");
        			this.Div00.form.cbo_date.set_value("2");
        			this.Div00_cbo_date_onitemchanged();
        		}else if(svcID == "insertPcPubPrdProcStb"){
        			if( errorCode == -1 || errorCode == -100){
        				alert(errorMsg);
        			}else{
        				//alert("갱신되었습니다.");
        				this.alert(this.fn_getMessage("ERRP000200"));
        				this.fn_search();
        			}
        		}else if(svcID == "updatePurgInfoState"){
        			if( errorCode == -1 || errorCode == -100){

        			}else{
        				//alert("선택한 상품의 구매정보 갱신이 완료되었습니다.");
        				this.alert(this.fn_getMessage("ERRP000203"));
        				this.fn_search(0);
        			}
        		}else if(svcID == "edt_prdClcd"){
        			 this.Div00.form.edt_prdClNm.set_value(this.searchPrdClsfNm);
        		}


        	};

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		this.preSelectRowPosition = 0;

        		if( this.ds_list.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		//paging 처리
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.Div01.form.cmb_viewCount.value, "fn_pageCallback");
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div01.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.Div01.form.cmb_viewCount.value);
        			this.fn_search();
        		}

        		var sTotText = "(총 "+ this.fn_AmountCommas(this.totalCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        		this.Div01.form.sta_totCount.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		var arr = ['PRD_ID','PCPRC_INC_YN','PURG_SPL_YN','PURG_VLD_PERD_YN','PURG_INFO_PSB_YN','SSP_BSS_SALSPRC_VLD_PERD_YN','SAFT_INVN_YN','BZPLC_ID','OPR_UNIT_ID','PRD_CLCD','PUB_ONLY_SPR_CD','PRC_APLY_SPR_CD','MRO_PRD_STATS_CD','PRD_USE_YN','DISP_STATS_CD','PRD_NM','CO_CD','MNFR_NO','SELL_UNIT_CD','ORGPLC_CTRY_CD','PLN_PRFRT','STPRC','PURG_DSGN_SALSPRC','DSTRB_STD_PRC','MRK_LWST_SALSPRC','INTL_LWST_SALSPRC','SSP_BSS_SALSPRC','BSS_SALSPRC_STR_DTM','BSS_SALSPRC_END_DTM','MULT_SELL_UNIT_QTY','DLV_LT AS DLV_LT','PURG_CHRPSN_ID','PRC_REG_DTM','PRC_UPD_DTM'];
        		if(sGridId == "grd_mainList"){

        			oSortInfo = this.grd_mainList.uaSortInfo;
        			if(arr.indexOf(oSortInfo.bindCol) > 0){

        			}

        			if(oSortInfo.bindCol==""){

        				var tempColumnName = this.grd_mainList.getCellProperty("body", oSortInfo.nHeadIndex, "text");
        				if(tempColumnName.indexOf("expr:") != -1){
        					var tempColonIdx = tempColumnName.lastIndexOf(':');
        					var tempBindCol = tempColumnName.slice(tempColonIdx+1);
        					oSortInfo.bindCol = tempBindCol;
        				}
        			}

        			//trace("bindCol : "+oSortInfo.bindCol);

        			var nCount = this.ds_select.getRowCount();
        			var arrBzplcId = this.ds_select.extractRowsNF("COL_ITM =='BZPLC_ID'");

        			 if( nCount == 0 ||  arrBzplcId.length == 0 )
        			{
        				alert(this.fn_getMessage("ERRC000004","사업장"));
        				return;
        			}
        			else if(arrBzplcId.length > 1)
        			{
        				//alert("사업장을 2개 이상 선택할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000204"));
        				return;
        			}

        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();

        		}
        	};

        	// 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, args){
        		//trace("버튼을 누른 객체 : " + sPopupId);
        		switch(sPopupId) {
        			case "btn_prdIdMultiPopup" :
        				var jsonData = JSON.parse(args);

        				var prdStr = "";
        				var prdNm = "";
        				if(jsonData.length > 0){
        					for(var i = 0; i<jsonData.length; i++){
        						var rtnData = JSON.parse(jsonData[i]);
        						prdStr += rtnData.PRD_ID_VIEW + ",";
        						prdNm += rtnData.PRD_NM + ",";
        					}

        					this.Div00.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        					this.Div00.form.edt_prdNm.set_value(prdNm.substring(0, prdNm.length-1));

        				}

        				break;
        			case "btn_mdTeamPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00.form.edt_ordCd.set_value(jsonData.TEAM_CD.replace(/,\s*$/, ""));
        				this.Div00.form.edt_ordNm.set_value(jsonData.TEAM_NM.replace(/,\s*$/, ""));

        				break;
        			case "btn_oprtrPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00.form.edt_oprtrid.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        				this.Div00.form.edt_oprtrNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));

        				break;


        			case "btn_prdIdMultiInput" :

        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_prdId.set_value(nexacro.trimRight(jsonData.textValue,','));
        				break;

        			case "btn_grpIdInput" :
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_grpId.set_value(nexacro.trimRight(jsonData.textValue,','));
        				break;

        			case "btn_reqIdMultiInput" :
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_reqId.set_value(nexacro.trimRight(jsonData.textValue,','));
        				break;
        			case "btn_bzplcIdMultiPopup" : //사업장 팝업

        				var jsonData = JSON.parse(args);
        				var sIdList = "";
        				var sNmList = "";
        				for (var i = 0; i < jsonData.length; i++) {
        					var rtnData = JSON.parse(jsonData[i]);
        					sIdList += rtnData.BZPLC_ID +",";
        					sNmList += rtnData.BZPLC_NM +",";
        				}
        				this.Div00.form.edt_bzplcId.set_value(sIdList.substring(0, sIdList.length-1));
        				this.Div00.form.edt_bzplcNm.set_value(sNmList.substring(0, sNmList.length-1));

        				break;
        			case "btn_bzplcIdMultiInput" :
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_bzplcId.set_value(nexacro.trimRight(jsonData.textValue,','));
        				break;

        			case "btn_oprIdMultiInput" :
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_oprId.set_value(nexacro.trimRight(jsonData.textValue,','));
        				break;

        			case "btn_bzplcIdPopup" :

        				var jsonData = JSON.parse(args);
        				var sIdList = "";
        				var sNmList = "";
        				for (var i = 0; i < jsonData.length; i++) {
        					var rtnData = JSON.parse(jsonData[i]);
        					sIdList += rtnData.BZPLC_ID +",";
        					sNmList += rtnData.BZPLC_NM +",";
        				}
        				this.Div00.form.edt_bzplcId.set_value(sIdList);
        				//this.Div_top_info.form.BZPLC_NM.set_value(sNmList);
        				//this.ds_search.setColumn(0, "BZPLC_ID", sIdList);

        				break;

        			case "btn_oprIdPopup" :
        				var jsonData = JSON.parse(args);
        				var sIdList = "";
        				var sNmList = "";
        				for (var i = 0; i < jsonData.length; i++) {
        					var rtnData = JSON.parse(jsonData[i]);

        					sIdList += rtnData.OPR_UNIT_ID +",";
        					sNmList += rtnData.OPR_UNIT_NM +",";
        				}
        				this.Div00.form.edt_oprId.set_value(sIdList);
        				//this.ds_search.setColumn(0, "OPR_UNIT_ID", sIdList);

        				break;

        			case "btn_prdClcdPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00.form.edt_prdClcd.set_value(jsonData.PRD_CLCD.replace(/,\s*$/, ""));
        				this.Div00.form.edt_prdClNm.set_value(jsonData.PRD_CLSF_NM.replace(/,\s*$/, ""));

        				break;



        		}
        	}


        	this.fn_detailPopupCallback = function(objID, rtnValue)
        	{
        		this.fn_search();
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		//this.Div00.uMinSize = 94;
        		//this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div01.form.div_paging.uPage = 1;
        		this.Div01.form.div_paging.uPageNum = 0;
        		this.Div01.form.div_paging.uPageRowCnt = 10;
        		this.Div01.form.div_paging.uPageCnt = 0;
        		this.Div01.form.div_paging.uTotCount = 0;

        		//레이아웃 초기설정
        		this.uGridList="grd_mainList";
        		this.grd_mainList.uRightMouse="true";
        		this.grd_mainList.uPersonalFlag="true";
        		this.grd_mainList.uDefaultFormat="TRIM_PRD_ID,BZPLC_ID,BZPLC_NM,TRIM_REPR_PRD_GRP_ID,PRD_CLCD,PRD_CLCD_NM,PUB_ONLY_SPR_NM,SEL_MTHD_NM,REPR_PRD_SPR_NM,PRC_APLY_SPR_NM,MRO_PRD_STATS_CD,PRD_STATS_CD,PRD_NM,ATTR_VAL,MNFR_NO,MNFR_NM,SELL_UNIT_CD,ORGPLC_CTRY_CD,ORGPLC_CTRY_NM,PRD_PRC,TRIM_CPRTCP_ID,CPRTCP_NM,PLN_PRFRT,STPRC,PURG_DSGN_SALSPRC,DSTRB_STD_PRC,MRK_LWST_SALSPRC,INTL_LWST_SALSPRC,SSP_BSS_SALSPRC,SALS_DSGN_SALSPRC,EXPS_SALSPRC,SALSPRC_CAL_BSS_NM,BSS_SALSPRC_STR_DTM,BSS_SALSPRC_END_DTM,MIN_ODR_QTY,MULT_SELL_UNIT_QTY,EXHBN_CNT,INVN_STATS_NM,DLV_LT,SALS_CHRPSN_ID,SALS_CHRPSN_NM,PURG_CHRPSN_ID,PURG_CHRPSN_NM,OPRTR_ID,OPRTR_NM,PRC_REG_DTM,PRC_UPD_DTM";
        	};
        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	}
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_calDateOffset = function(currDate,offset){
        	var sReturn = "";

        	var sGb = offset.substr(0,1);
        	var sOffset = offset.substr(1,offset.length-1);

        	if(sGb == "W"){
        	    sReturn = this.gfn_addDate(currDate,sOffset*(-7)+1);
        	}else if(sGb == "M"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-1));
        	}else if(sGb == "Y"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-12));
        	}else if(sGb == "D"){
        	    sReturn = this.gfn_addMonth(currDate,0);
        	}

        	return sReturn;
        }

        this.fn_showOderDetail = function(rowposition) {
            var width = this.getOwnerFrame().width; //1336;
            var height = this.getOwnerFrame().height;//846;
            var nLeft = 0;
            var nTop = 0;
            nLeft = system.clientToScreenX(this, nLeft);
            nTop  = system.clientToScreenY(this, nTop);

        	var strAuth = "3";
        	var strIsNew = "N";

        	var objParam = {
        			param1:this.ds_list.getColumn(this.ds_list.rowposition, "TRIM_PRD_ID"),
        			param2:this.ds_list.getColumn(this.ds_list.rowposition, "PRD_NM"),
        			param3:this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID"),
        			param4:this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_NM"),
        			param5:strAuth,
        			param6:strIsNew
        		};
        	var trimPrdId = this.ds_list.getColumn(this.ds_list.rowposition, "TRIM_PRD_ID");
        	var localBzplcId = this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID");
            var objectId = trimPrdId + "-" + localBzplcId;
            var nRow = -1;
            var isExisted = false;
        	isExisted = this.fn_getDetail(objectId);

        	trace(this.ds_list.getColumn(this.ds_list.rowposition, "PUB_ONLY_SPR_NM"));
        	if(this.ds_list.getColumn(this.ds_list.rowposition, "PUB_ONLY_SPR_NM")== "공용"){
        		if( isExisted == false )    {
        			var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        			nexacro.open(objectId, "PC::SSP_BO_CA_23.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
        		}
        		else    {
        			this.fn_topmost(objectId);
        		}
        	} else if(this.ds_list.getColumn(this.ds_list.rowposition, "PUB_ONLY_SPR_NM")== "전용"){
        		if( isExisted == false )    {
        			var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        			nexacro.open(objectId, "PC::SSP_BO_CA_40_2.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
        		}
        		else    {
        			this.fn_topmost(objectId);
        		}
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

        //this.fn_topmost = function(sId,odrNo,odrItmNo,bzplcId,odrpsnId) {
        this.fn_topmost = function(sId) {
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
                        //arrPopFrame[i].form.fn_onReload(false,odrNo,odrItmNo,bzplcId,odrpsnId);
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

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("Div00_btn_serach_onclick");
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.fn_callBackForSearch = function(){
        	this.fn_search(0);
        }
        this.fn_callBackForLargeFileDown = function(){
        	this.fn_largeFileDown();
        }
        this.Div00_btn_serach_onclick = function(obj,e) //검색 버튼
        {

        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	// edt 입력 기준으로 조회조건 다시 세팅
        	this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.edt_prdId.value);
        	this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value);
        	this.fn_setMSearch(this.name,"REPR_PRD_GRP_ID",this.Div00.form.edt_grpId.value);

        	var nCount = this.ds_select.getRowCount();
            var arrBzplcId = this.ds_select.extractRowsNF("COL_ITM =='BZPLC_ID'");
            if( nCount == 0 ||  arrBzplcId.length == 0 )
            {
                alert(this.fn_getMessage("ERRC000004","사업장"));
                return;
            }
        	else if(arrBzplcId.length > 1)
        	{
        		//alert("사업장을 2개 이상 선택할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000204"));
        		return;
        	}


        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_search(0);
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}
        };

        this.Div00_cbo_date_onitemchanged = function(obj,e) //날짜 선택
        {
        	this.fn_pcDateChage(this.Div00.form.cal_srchFrDt,this.Div00.form.cal_srchToDt, this.Div00.form.cbo_date);
        };

        this.Div00_btn_prdIdMultiPopup_onclick = function(obj,e) //상품ID Multi팝업
        {
        	var params = {coCd:this.fv_coCd};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_prdIdMultiInput_onclick = function(obj,e) //상품ID Multi입력
        {

        	var params = {textId: this.Div00.form.edt_prdId};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_bzplcIdMultiPopup_onclick = function(obj,e) //사업장ID Multi팝업
        {
        	var params = {coCd:this.fv_coCd};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_bzplcIdMultiInput_onclick = function(obj,e) //사업장ID Multi입력
        {
        	var params = {textId : this.Div00.form.edt_bzplcId};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_mdTeamPopup_onclick = function(obj,e) //MD팀 팝업
        {
        	var params = {coCd:this.fv_coCd,searchType: "3"};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_26.xfdl", params,  "fn_popupCallback", options);
        };


        //초기화 버튼
        this.Div00_btn_searchInit_onclick = function(obj,e)
        {

        	this.ds_search.copyData(this.ds_searchInit,true);
        	this.fn_pcDateChage(this.Div00.form.cal_srchFrDt,this.Div00.form.cal_srchToDt, this.Div00.form.cbo_date);
        	this.ds_select.clearData();
        };
        //카테고리 팝업
        this.Div00_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd , mallSprCd:'10'};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_btn_oprtrPopup_onclick = function(obj,e)
        {
        	if("" == this.ds_search.getColumn(0, "CHRPSN_CD")){
        		//alert('담당자 구분을 선택해 주세요.');
        		this.alert(this.fn_getMessage("ERRP000024"));
        	}else{
        		var params = {};
        		var options = {};
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_44.xfdl", params,  "fn_popupCallback", options);
        	}

        };

        this.Div00_btn_regPopup_onclick = function(obj,e) //개별등록 팝업
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "./PC/SSP_BO_CA_22.xfdl", params,  "fn_popupCallback", options);
        };



        this.Div01_btn_multiRegPopup_onclick = function(obj,e) //일괄등록 클릭시 테스트
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };


        this.Div00_Calendar42_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00.form.cal_srchFrDt, this.Div00.form.cal_srchToDt);
        };

        this.Div00_cal_srchToDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00.form.cal_srchFrDt, this.Div00.form.cal_srchToDt);
        };

        this.Div01_grd_mainList_oncellclick = function(obj,e)
        {

        	var bindText = this.grd_mainList.getCellProperty("body", e.col, "text");

        	if(bindText == "bind:TRIM_PRD_ID"){
        		this.fn_showOderDetail(this.ds_list.rowposition, false);
        	}

        };

        this.Div01_Button01_onclick = function(obj,e)
        {
        	if(this.ds_list.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"사업장별가격조회"});
        	}else{
        		//alert("다운로드 가능한 데이터가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000205"));
        	}
        };

        this.Div01_Button62_00_onclick = function(obj,e) //대용량 다운로드
        {

        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	// edt 입력 기준으로 조회조건 다시 세팅
        	this.fn_setMSearch(this.name,"PRD_ID",this.Div00.form.edt_prdId.value);
        	this.fn_setMSearch(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value);
        	this.fn_setMSearch(this.name,"REPR_PRD_GRP_ID",this.Div00.form.edt_grpId.value);

        	var nCount = this.ds_select.getRowCount();
        	var arrBzplcId = this.ds_select.extractRowsNF("COL_ITM =='BZPLC_ID'");

        	if( nCount == 0 ||  arrBzplcId.length == 0 )
        	{
        		alert(this.fn_getMessage("ERRC000004","사업장"));
        		return;
        	}
        	//var sReturn = this.confirm("다운로드 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000202"));
        	if(sReturn == true){
        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_largeFileDown();
        		}
        		else{
        			this.fn_insertSelectedData("fn_callBackForLargeFileDown");
        		}
        	}
        };

        this.btn_grpIdInput_onclick = function(obj,e)
        {
        	var params = {textId : this.Div00.form.edt_grpId};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        this.work04_onkeyup = function(obj,e)
        {
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if( e.fromobject.id == "edt_prdClcd") {
        				this.ds_search.setColumn(0, "PRD_CLCD", value);
        				this.fn_popupSearch("edt_prdClcd", "/pr/prd-popup/select-category-popup-list.do");
        			}
        			if( e.fromobject.id == "edt_ordCd") {
        				this.fn_getCodeName(e.fromobject,this.Div00.form.edt_ordNm,"OPRTR_ORG");
        			}
        			if( e.fromobject.id == "edt_oprtrid") {
        				this.fn_getCodeName(e.fromobject,this.Div00.form.edt_oprtrNm,"OPRTR");
        			}


        		}
        	}
        };
        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        // 	this.gfn_personalReset("grd_mainList");
        // 	this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);

        	this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        	this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.work04_onkeyup,this);
            this.Div01.form.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.Div01.form.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.Div01.form.cmb_viewCount.addEventHandler("onitemchanged",this.Div01_cmb_viewCount_onitemchanged,this);
            this.Div01.form.Button62_00.addEventHandler("onclick",this.Div01_Button62_00_onclick,this);
            this.Div01.form.Button01.addEventHandler("onclick",this.Div01_Button01_onclick,this);
            this.Div00.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static10.addEventHandler("onclick",this.Div00_Static10_onclick,this);
            this.Div00.form.Static12.addEventHandler("onclick",this.Div00_Static12_onclick,this);
            this.Div00.form.edt_prdClNm.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00.form.btn_prdClcdPopup.addEventHandler("onclick",this.Div00_btn_prdClcdPopup_onclick,this);
            this.Div00.form.cal_srchFrDt.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.cal_srchToDt.addEventHandler("onchanged",this.Div00_cal_srchToDt_onchanged,this);
            this.Div00.form.cbo_date.addEventHandler("onitemchanged",this.Div00_cbo_date_onitemchanged,this);
            this.Div00.form.btn_oprtrPopup.addEventHandler("onclick",this.Div00_btn_oprtrPopup_onclick,this);
            this.Div00.form.DateSelector.addEventHandler("onitemchanged",this.Div00_Combo48_onitemchanged,this);
            this.Div00.form.cbo_reprPrdSprNm.addEventHandler("onitemchanged",this.Div00_Combo52_00_00_onitemchanged,this);
            this.Div00.form.btn_bzplcIdMultiPopup.addEventHandler("onclick",this.Div00_btn_bzplcIdMultiPopup_onclick,this);
            this.Div00.form.btn_bzplcIdMultiInput.addEventHandler("onclick",this.Div00_btn_bzplcIdMultiInput_onclick,this);
            this.Div00.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.Div00_btn_prdIdMultiPopup_onclick,this);
            this.Div00.form.btn_prdIdMultiInput.addEventHandler("onclick",this.Div00_btn_prdIdMultiInput_onclick,this);
            this.Div00.form.btn_grpIdInput.addEventHandler("onclick",this.btn_grpIdInput_onclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.Div01_grd_mainList_oncellclick,this);
            this.btn_serach.addEventHandler("onclick",this.Div00_btn_serach_onclick,this);
            this.btn_searchInit.addEventHandler("onclick",this.Div00_btn_searchInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
