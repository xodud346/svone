(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_04");
            this.set_titletext("주문변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DCNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eCHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_NO_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CHG_MNG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSLT_DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DCNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DCNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHGRQST_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_DCN_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGRQST_DCN_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">CHG_STATS_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">INQ_PERD_SPR_CD</Col><Col id=\"IS_TOTAL\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comChgStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comInqPerdSpr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CHG_MNG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","20",null,"63","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("변경항목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","430","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("변경요청일자 <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("변경 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("주문번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("사업장 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","140","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("23");
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

            obj = new Edit("edt_bzplc","140","35","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","edt_bzplc:4","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrNo","570","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("24");
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

            obj = new Calendar("cal_inqStart","570","36","100","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","cal_inqStart:4","36","9","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("~");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_inqEnd","sta_fromTo:4","36","100","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_chgItem","1002","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_chgItemMultiPopup","edt_chgItem:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_chgItemInput","btn_chgItemMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_chgStatus","1002","35","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_comChgStatus");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("10");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmd_inqPrdSelect","790","36","70","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_comInqPerdSpr");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:-27",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","28","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"0","60","28","btn_search:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"0","60","28","149",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"Div01:4","94","28","228",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("100개씩");
            obj.set_value("100");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"Div01:4","110","28","cmb_viewCount:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","Div01:18","240","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_detail","20","615",null,"195","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list02");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"변경 필드 명\"/><Cell col=\"1\" text=\"원 주문 내용\"/><Cell col=\"2\" text=\"변경 요청 내용\"/><Cell col=\"3\" text=\"변경 확정 내용\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_FDS_NM\"/><Cell col=\"1\" text=\"bind:ORI_CTS\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:CHG_CTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelBigDown",null,"133","128","28","440",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대용량 다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_main","20","cmb_viewCount:10",null,null,"20","grid_detail:55",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list01");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"127\"/><Column size=\"400\"/><Column size=\"400\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"행선택\"/><Cell col=\"1\" text=\"운영단위 ID\"/><Cell col=\"2\" text=\"운영단위명\"/><Cell col=\"3\" text=\"주문번호-항목\"/><Cell col=\"4\" text=\"변경항목내용\"/><Cell col=\"5\" text=\"변경상태명\"/><Cell col=\"6\" text=\"요청일자\"/><Cell col=\"7\" text=\"요청자명\"/><Cell col=\"8\" text=\"회원명\"/><Cell col=\"9\" text=\"VOC 번호\"/><Cell col=\"10\" text=\"원 주문 내용\"/><Cell col=\"11\" text=\"확정 주문 내용\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"3\" text=\"bind:JNT_ODR_NO_ITM_NO\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:CHG_ITM_GRP_NM\"/><Cell col=\"5\" text=\"bind:CHG_STATS_NM\"/><Cell col=\"6\" text=\"bind:REQDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtext=\" \" calendardisplaynulltext=\" \" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_secureName(currow, &quot;REQR_NM&quot;, dataset)\"/><Cell col=\"8\" text=\"expr:comp.parent.fn_secureName(currow, &quot;ODRPSN_NM&quot;, dataset)\"/><Cell col=\"9\" text=\"bind:VOC_NO\"/><Cell col=\"10\" text=\"bind:ORI_ODR_CTS\"/><Cell col=\"11\" text=\"bind:CHGRQST_DCN_CTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"30","20","grid_detail:18",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"133","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"133","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div01.form.edt_oprUnit","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div01.form.edt_odrNo","value","ds_search","eODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div01.form.edt_chgItem","value","ds_search","eCHG_ITM_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div01.form.edt_bzplc","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div01.form.cmb_chgStatus","value","ds_search","CHG_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("inqStart","Div00.form.Div01.form.cal_inqStart","value","ds_search","FROM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("inqEnd","Div00.form.Div01.form.cal_inqEnd","value","ds_search","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_04.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_04.xfdl", function() {
        // 주문변경이력

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.bExtend = false;
        this.selectedRow = -1;
        this.nOdrInqTgt = 0;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_04_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.copyPaste.addGrid(this.grid_main);
        	this.copyPaste.addGrid(this.grid_detail);

        	this.fn_initView();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_04_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)	{
        	trace("callback fn_search");

        	var sSvcId = "selectOrderChangeList";
        	var sUrl = "/od/orderChange/selectOrderChangeList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_search=ds_output2";
        	var arg = "";

        	if( page ) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
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
        this.fn_excelBigDownload = function() {
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);

        	var sSvcId = "excelBigDownloadOA04";
        	var sUrl = "/od/orderExcel/excelBigDownloadOA04.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectOrderChangeList") {
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cmb_viewCount.value,"fn_pageCallback");
        		this.Div00.form.Div01.form.set_enable(false);
        		this.cmb_viewCount.set_enable(false);
        		trace("### ds_list01.getRowCount() : " + this.ds_list01.getRowCount());
        	}
        	else if (svcID == "selectCommonCodeList") {
        		trace("### ds_comCd.getRowCount() : " + this.ds_comCd.getRowCount());
        		//this.Div00.form.Div01.form.cmb_custTp.filter("COM_CLSF_CD=='CUST_TP_CD'");

        		this.fn_setCommonCode();
        	}
        	else if(svcID == "insertOdrInqTgtDtls"){
        		if (this.nOdrInqTgt == 0) {
        			this.fn_search(true);
        		}
        		else if (this.nOdrInqTgt == 1) {
        			this.fn_excelBigDownload();
        		}
        	}
        	else if(svcID == "deleteOdrInqTgtDtls"){
        		this.ds_select.deleteAll();
        		trace("### deleteOdrInqTgtDtls");
        	}
        	else if(svcID == "selectOrderChangeDetail"){
        		trace("### selectOrderChangeDetail");
        	}
        	else if (svcID == "excelBigDownloadOA04") {
        		if (errorCode == -100) {
        			alert(this.fn_getMessage(errorMsg));
        		}
        		else if (errorCode == "0") {
        			alert(this.fn_getMessage("ERRS000461"));
        		}
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cmb_viewCount.value);
        		this.fn_search(false);
        		this.selectedRow = -1;
        		this.ds_list02.clearData();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
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
        		case "SSP_BO_OA_04;OPR_UNIT_ID":
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
        			trace("### sIdList : " + sIdList);
        			break;
        		// 주문번호 멀티 INPUT
        		case "SSP_BO_OA_04;ODR_NO":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.Div01.form.edt_odrNo.set_value(sIdList);
        			this.fn_setMSearch(this.name,"ODR_NO",sIdList);
        			break;
        		// 변경항목 멀티 팝업
        		case "chgItemCdPopup":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.CHG_ITM_GRP_CD +",";
        				sNmList += rtnData.CHG_ITM_GRP_NM +",";
        			}
        			this.Div00.form.Div01.form.edt_chgItem.set_value(sIdList);
        			this.fn_setMSearch(this.name,"CHG_ITM_GRP_CD",sIdList);
        			trace("### sIdList : " + sIdList + ", sNmList : " + sNmList);
        			break;
        		// 변경항목 멀티 INPUT
        		case "SSP_BO_OA_04;CHG_ITM_GRP_CD":
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.Div01.form.edt_chgItem.set_value(sIdList);
        			this.fn_setMSearch(this.name,"CHG_ITM_GRP_CD",sIdList);
        			break;

        		// 사업장
        		case "bzplcPopup":
        			//this.Div00.form.Div01.form.edt_bzplc.set_value(resData.BZPLC_ID + " | " + resData.BZPLC_NM);
        			this.Div00.form.Div01.form.edt_bzplc.set_value(resData.BZPLC_ID);
        			break;

        		default :
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit");

        	this.uGridList = "grid_main";
        	this.grid_main.uRightMouse = "true";
        	this.grid_main.uPersonalFlag = "true";
        }

        this.cfn_personalPopupClose = function(sRet) {
        	this.grid_main.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/

        this.fn_initView = function() {
        	// 공통코드 조회
        	this.fn_searchCommonCode();

        	this.Div00.form.Div01.form.cal_inqStart.set_value(new nexacro.Date());
        	this.Div00.form.Div01.form.cal_inqEnd.set_value(new nexacro.Date());
        };

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 변경상태코드
        	this.ds_comCd.filter("COM_CLSF_CD=='CHG_STATS_CD'");
        	this.ds_comChgStatus.copyData(this.ds_comCd, true);

        	// 조회기간구분 코드
        	this.ds_comCd.filter("COM_CLSF_CD=='INQ_PERD_SPR_CD' && (COM_USR_DEFN_NM_1>'0')");
        	this.ds_comInqPerdSpr.copyData(this.ds_comCd, true);

        	// 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
        	this.Div00.form.Div01.form.cmb_chgStatus.set_index(0);
        	this.Div00.form.Div01.form.cmd_inqPrdSelect.set_index(2);
        	this.Div00_Div01_cmd_inqPrdSelect_onitemchanged(this.Div00.form.Div01.form.cmd_inqPrdSelect,nexacro.ItemChangeEventInfo);
        	this.Div00.form.Div01.form.cmd_inqPrdSelect.setFocus();

        };

        // 행선택
        this.fn_isSelectedRow = function(currow, cellPos) {
        	if (cellPos == 0) {
        		if (currow == this.ds_list01.rowposition)	return true;
        		return false;
        	}

        	if (currow == this.selectedRow) {
        		return true;
        	}

        	return false;
        };

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

            objectId = odrNo;//+ "-" + odrItmNo;
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
        };

        // 조회기간 유효성 검사
        this.fn_isValidInq = function() {
        	var inqStart = this.Div00.form.Div01.form.cal_inqStart.value;
        	var inqEnd = this.Div00.form.Div01.form.cal_inqEnd.value;

        	if (inqStart > inqEnd) {
        		return false;
        	}

        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 운영단위 멀티팝업 - oprUnitPopup
        this.Div00_Div01_btn_oprUnitMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };

        // 운영단위 멀티 INPUT - SSP_BO_OA_04;OPR_UNIT_ID
        this.Div00_Div01_btn_oprUnitInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value,
        	"fn_popupCallback",120,300);
        };

        // 주문번호 멀티팝업 - odrNoPopup
        this.Div00_Div01_btn_odrNoMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("odrNoPopup", "OD::SSP_BO_OA_28.xfdl", objParam);
        };

        // 주문번호멀티 INPUT - SSP_BO_OA_04;ODR_NO
        this.Div00_Div01_btn_odrNoInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value,
        	"fn_popupCallback",130,300);
        };

        // 사업장 팝업 - bzplcPopup
        this.Div00_Div01_btn_bzplcPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
        	this.gfn_openPopup("bzplcPopup", "CO_POP::SSP_BO_PP_22.xfdl", objParam);

        	//var objParam = {pv1:"PM00142661",pv2:"7000570854"};
        	//this.gfn_openPopup("bzplcPopup", "OD::SSP_BO_OA_51.xfdl", objParam);
        };

        this.Div00_Div01_btn_chgItemMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, comClsfCd:"CHG_ITM_GRP_CD"};
        	this.gfn_openPopup("chgItemCdPopup", "OD::SSP_BO_OA_57.xfdl", objParam);

        };

        this.Div00_Div01_btn_chgItemInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"CHG_ITM_GRP_CD",this.Div00.form.Div01.form.edt_chgItem.value,
        	"fn_popupCallback",120,300);
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
        	this.fn_setMSearch(this.name,"CHG_ITM_GRP_CD",this.Div00.form.Div01.form.edt_chgItem.value);

        	//변경요청일자 체크
        	if(this.ds_select.getRowCount() <= 0 )	this.fn_search(true);
        	else {
        		this.nOdrInqTgt = 0;
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        // 조회기간 - 기간선택 콤보
        this.Div00_Div01_cmd_inqPrdSelect_onitemchanged = function(obj,e)
        {
        	var objCurr = new nexacro.Date();
        	var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	var sFrom = this.fn_CalDate(this.Div00.form.Div01.form.cmd_inqPrdSelect.value,objCurr);

        	this.Div00.form.Div01.form.cal_inqStart.set_value(sFrom);
        	this.Div00.form.Div01.form.cal_inqEnd.set_value(sToday);
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
        	if(this.ds_select.getRowCount() != 0 )
        		this.fn_deleteSelectedData("fn_callBack");
        };

        this.grid_main_oncellclick = function(obj,e)
        {
        	if (e.col == 3) {
        		this.fn_showOderDetail(e.row);
                return;
            }

        	//(comp.currentcell == 0 && currow == dataset.rowposition) ? "url('theme://images/btn_WF_page_last.png')" : ""
        	if (e.col != 0) return;

        	this.selectedRow = e.row;

        	var sSvcId = "selectOrderChangeDetail";
        	var sUrl = "/od/orderChange/selectOrderChangeDetail.do";
        	//var sUrl = "/od/orderChange/selectOrderChangeListDetail.do";
        	var inDs = "ds_search=ds_searchD";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.ds_searchD.setColumn(0,"START_NUM", 0);
        	this.ds_searchD.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	this.ds_searchD.setColumn(0,"SORT_COLUMN", "");
        	this.ds_searchD.setColumn(0,"SORT_TYPE", "");
        	this.ds_searchD.setColumn(0,"CO_CD", this.fv_coCd);
        	this.ds_searchD.setColumn(0,"ODR_NO", this.ds_list01.getColumn(e.row,"ODR_NO"));
        	this.ds_searchD.setColumn(0,"ODR_ITM_NO", this.ds_list01.getColumn(e.row,"ODR_ITM_NO"));
        	this.ds_searchD.setColumn(0,"ODR_CHG_MNG_NO", this.ds_list01.getColumn(e.row,"ODR_CHG_MNG_NO"));
        	this.ds_searchD.setColumn(0,"BZPLC_ID", this.ds_list01.getColumn(e.row,"BZPLC_ID"));

        	//trace(" 1 is " +this.ds_list01.getColumn(0,"ODR_ITM_NO"));
        	//trace(" 2 is " +this.ds_list01.getColumn(0,"BZPLC_ID"));
        	trace("### grid.currow : " + this.grid_main.currentrow + ", ds.rowposition : " + this.ds_list01.rowposition);


        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	if(this.ds_list01.getRowCount() == 0){
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
        	// this.ofn_exportExcel({form:this, grid:[this.grid_main, this.grid_detail], fileName:"주문변경이력", password: pwd});
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:[this.grid_main, this.grid_detail], fileName:"주문변경이력", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_OA_04_02"});
        };


        // 엑셀 대용량 다운로드
        this.btn_excelBigDown_onclick = function(obj,e)
        {
        	if (this.fn_isValidInq() == false) {
        		alert(this.fn_getMessage("ERRS000240"));
        		return;
        	}else{
        		var rtn = this.confirm(this.fn_getMessage("ERRC000271"));	// 대용량 엑셀다운로드 하시겠습니까?
        		if (rtn) {	// "확인"
        			// 20230503_박철희_엑셀대용량다운로드수정
        			// this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        			this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        		}
        	}
        };
        this.fn_excelDownloadPwdCallback = function(objId, ret)
        {
        	// 20230503_박철희_엑셀대용량다운로드수정
        	//if(!pwd) return; //취소(undefined)

        	//this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value);
        	//this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value);
        	//this.fn_setMSearch(this.name,"CHG_ITM_GRP_CD",this.Div00.form.Div01.form.edt_chgItem.value);

        	//this.ds_search.setColumn(0, "EXCEL_PASSWD", pwd);

        	var answr = ret.split("||||");

        	if(!answr) return; //취소(undefined)

        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.Div01.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.Div01.form.edt_odrNo.value);
        	this.fn_setMSearch(this.name,"CHG_ITM_GRP_CD",this.Div00.form.Div01.form.edt_chgItem.value);

        	this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        	this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        	this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");
        	this.ds_search.setColumn(0, "PGM_ID", "SSP_BO_OA_04_02");

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_excelBigDownload();
        	}else {
        		this.nOdrInqTgt = 1;
        		this.fn_insertSelectedData("fn_callBack");
        	}

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_04_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_04_onkeyup,this);
            this.Div00.form.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_oprUnitMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitInput.addEventHandler("onclick",this.Div00_Div01_btn_oprUnitInput_onclick,this);
            this.Div00.form.Div01.form.btn_bzplcPopup.addEventHandler("onclick",this.Div00_Div01_btn_bzplcPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_odrNoMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoInput.addEventHandler("onclick",this.Div00_Div01_btn_odrNoInput_onclick,this);
            this.Div00.form.Div01.form.cal_inqStart.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.cal_inqEnd.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.btn_chgItemMultiPopup.addEventHandler("onclick",this.Div00_Div01_btn_chgItemMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_chgItemInput.addEventHandler("onclick",this.Div00_Div01_btn_chgItemInput_onclick,this);
            this.Div00.form.Div01.form.cmd_inqPrdSelect.addEventHandler("onitemchanged",this.Div00_Div01_cmd_inqPrdSelect_onitemchanged,this);
            this.Div01.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div01.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div01.form.btn_active.addEventHandler("onclick",this.Div01_btn_active_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grid_detail.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.grid_detail.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.btn_excelBigDown.addEventHandler("onclick",this.btn_excelBigDown_onclick,this);
            this.grid_main.addEventHandler("oncellclick",this.grid_main_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
